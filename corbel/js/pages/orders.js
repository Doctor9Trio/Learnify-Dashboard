/**
 * orders.js — Orders View Page Controller
 * Renders KPIs statbar, filter tabs, channel selector, search, data table,
 * and order detail slide sheet.
 */

import { store } from '../store.js';
import { openSheet, closeSheet, showToast } from '../sheets-modal.js';

let currentTab = 'all';
let currentChannel = 'all';
let searchQuery = '';
let selectedOrders = new Set();

export function renderOrders(container, params) {
  // Check if deep linked to order
  const orderId = params?.get('id');

  function getFilteredOrders() {
    let orders = store.data.orders;

    if (currentTab !== 'all') {
      if (currentTab === 'closed') {
        orders = orders.filter(o => o.fulfillmentStatus === 'refunded' || o.paymentStatus === 'refunded');
      } else if (currentTab === 'unfulfilled' || currentTab === 'pending') {
        orders = orders.filter(o => o.fulfillmentStatus === 'unfulfilled');
      } else if (currentTab === 'fulfilled' || currentTab === 'delivered') {
        orders = orders.filter(o => o.fulfillmentStatus === 'fulfilled');
      } else if (currentTab === 'paid') {
        orders = orders.filter(o => o.paymentStatus === 'paid');
      }
    }

    if (currentChannel !== 'all') {
      orders = orders.filter(o => o.channel.toLowerCase().includes(currentChannel.toLowerCase()));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase().replace(/^#/, '');
      orders = orders.filter(o =>
        o.id.toLowerCase().includes(q) ||
        o.customerName.toLowerCase().includes(q)
      );
    }

    return orders;
  }

  function getStats() {
    const orders = store.data.orders;
    const openOrders = orders.filter(o => o.fulfillmentStatus === 'unfulfilled').length;
    const toShipToday = Math.max(1, Math.floor(openOrders * 0.6));
    const totalRev = orders.reduce((acc, o) => acc + o.total, 0);
    const aov = Math.round(totalRev / (orders.length || 1));
    const refunds = orders.filter(o => o.paymentStatus === 'refunded').reduce((acc, o) => acc + o.total, 0);
    return { openOrders, toShipToday, aov, refunds };
  }

  function render() {
    const stats = getStats();
    const orders = getFilteredOrders();

    container.innerHTML = `
      <div class="view-container">

        <!-- Statbar (4 KPIs) -->
        <section class="card statbar ord-stats" style="--n:4" aria-label="Order figures">
          <div class="statbar__cell">
            <span class="statbar__label">Open orders</span>
            <b class="statbar__val">${stats.openOrders}</b>
            <span class="statbar__sub">Requires action</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">To ship today</span>
            <b class="statbar__val">${stats.toShipToday}</b>
            <span class="statbar__sub">Carrier pickup 4pm</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Average order value</span>
            <b class="statbar__val">$${stats.aov}</b>
            <span class="statbar__sub"><span class="kpi-badge--positive">+4.2%</span> vs last month</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Refunds this month</span>
            <b class="statbar__val">$${stats.refunds}</b>
            <span class="statbar__sub">1.8% of gross sales</span>
          </div>
        </section>

        <!-- Filter Toolbar -->
        <div class="view-toolbar">
          <div class="view-toolbar__filters">
            <button class="view-filter-btn ${currentTab === 'all' ? 'is-active' : ''}" data-tab="all">All</button>
            <button class="view-filter-btn ${currentTab === 'pending' ? 'is-active' : ''}" data-tab="pending">Pending</button>
            <button class="view-filter-btn ${currentTab === 'paid' ? 'is-active' : ''}" data-tab="paid">Paid</button>
            <button class="view-filter-btn ${currentTab === 'delivered' ? 'is-active' : ''}" data-tab="delivered">Fulfilled</button>
            <button class="view-filter-btn ${currentTab === 'closed' ? 'is-active' : ''}" data-tab="closed">Closed / Refunded</button>
          </div>

          <div class="view-toolbar__actions">
            <select class="view-select" id="ord-channel-select" aria-label="Channel">
              <option value="all" ${currentChannel === 'all' ? 'selected' : ''}>All channels</option>
              <option value="online" ${currentChannel === 'online' ? 'selected' : ''}>Online store</option>
              <option value="harbor" ${currentChannel === 'harbor' ? 'selected' : ''}>Harbor shop</option>
              <option value="downtown" ${currentChannel === 'downtown' ? 'selected' : ''}>Downtown shop</option>
            </select>

            <div class="view-search">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="ord-search-input" placeholder="Search orders, customers..." value="${searchQuery}" />
            </div>
          </div>
        </div>

        <!-- Orders Table Card -->
        <div class="card table-card">
          <div class="table-wrap">
            <table class="table ord-table" aria-label="Orders list">
              <thead>
                <tr>
                  <th style="width:36px"><input type="checkbox" id="ord-check-all" aria-label="Select all" /></th>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Channel</th>
                  <th>Items</th>
                  <th style="text-align:right">Total</th>
                  <th>Payment</th>
                  <th>Fulfillment</th>
                </tr>
              </thead>
              <tbody>
                ${orders.length === 0 ? `
                  <tr><td colspan="9" style="text-align:center; padding: 48px; color: var(--text-muted);">No orders match your filter criteria</td></tr>
                ` : orders.map(o => `
                  <tr class="ord-row ${selectedOrders.has(o.id) ? 'is-selected' : ''}" data-order-id="${o.id}">
                    <td onclick="event.stopPropagation()">
                      <input type="checkbox" class="ord-row-check" data-id="${o.id}" ${selectedOrders.has(o.id) ? 'checked' : ''} />
                    </td>
                    <td><b class="ord-id">${o.id}</b></td>
                    <td class="text-muted">${o.date}</td>
                    <td>
                      <div class="user-cell">
                        <span class="user-cell__avatar">${o.customerName.split(' ').map(n=>n[0]).join('')}</span>
                        <span class="user-cell__name">${o.customerName}</span>
                      </div>
                    </td>
                    <td>
                      <span class="channel-pill channel-pill--${o.channel}">
                        ${o.channel === 'online' ? 'Online' : o.channel === 'harbor' ? 'Harbor' : 'Downtown'}
                      </span>
                    </td>
                    <td>${o.itemsCount} ${o.itemsCount === 1 ? 'item' : 'items'}</td>
                    <td style="text-align:right"><b>$${o.total.toFixed(2)}</b></td>
                    <td>
                      <span class="badge badge--${o.paymentStatus === 'paid' ? 'success' : o.paymentStatus === 'refunded' ? 'danger' : 'warning'}">
                        ${o.paymentStatus}
                      </span>
                    </td>
                    <td>
                      <span class="badge badge--${o.fulfillmentStatus === 'fulfilled' ? 'success' : o.fulfillmentStatus === 'refunded' ? 'danger' : 'neutral'}">
                        ${o.fulfillmentStatus}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;

    // Events
    container.querySelectorAll('.view-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentTab = btn.dataset.tab;
        render();
      });
    });

    const channelSelect = container.querySelector('#ord-channel-select');
    channelSelect?.addEventListener('change', (e) => {
      currentChannel = e.target.value;
      render();
    });

    const searchInput = container.querySelector('#ord-search-input');
    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
      // preserve focus
      const updatedInput = container.querySelector('#ord-search-input');
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.selectionStart = updatedInput.selectionEnd = updatedInput.value.length;
      }
    });

    const checkAll = container.querySelector('#ord-check-all');
    checkAll?.addEventListener('change', (e) => {
      if (e.target.checked) {
        orders.forEach(o => selectedOrders.add(o.id));
      } else {
        selectedOrders.clear();
      }
      render();
    });

    container.querySelectorAll('.ord-row-check').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        if (e.target.checked) selectedOrders.add(id);
        else selectedOrders.delete(id);
        render();
      });
    });

    container.querySelectorAll('.ord-row').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.dataset.orderId;
        const order = store.data.orders.find(o => o.id === id);
        if (order) showOrderDetailSheet(order, render);
      });
    });
  }

  render();

  // If URL has ?id=1048
  if (orderId) {
    const cleanId = '#' + orderId.replace(/^#/, '');
    const matched = store.data.orders.find(o => o.id === cleanId);
    if (matched) {
      showOrderDetailSheet(matched, render);
    }
  }
}

function showOrderDetailSheet(order, onUpdate) {
  const customer = store.data.customers.find(c => c.id === order.customerId);

  openSheet({
    title: `Order ${order.id}`,
    subtitle: `${order.date} · ${order.channel === 'online' ? 'Online Store' : order.channel === 'harbor' ? 'Harbor Shop' : 'Downtown Shop'}`,
    body: `
      <div class="sheet-section">
        <div class="order-status-banner">
          <div>
            <span class="badge badge--${order.paymentStatus === 'paid' ? 'success' : 'danger'}">${order.paymentStatus}</span>
            <span class="badge badge--${order.fulfillmentStatus === 'fulfilled' ? 'success' : 'neutral'}">${order.fulfillmentStatus}</span>
          </div>
          <b style="font-size: 20px;">$${order.total.toFixed(2)}</b>
        </div>
      </div>

      <div class="sheet-section">
        <h3 class="sheet-heading">Customer</h3>
        <div class="user-cell" style="margin-bottom: 8px;">
          <span class="user-cell__avatar">${order.customerName.split(' ').map(n=>n[0]).join('')}</span>
          <div>
            <b>${order.customerName}</b>
            <div class="text-muted" style="font-size:12px">${customer?.email || 'customer@example.com'}</div>
          </div>
        </div>
        <p class="text-muted" style="font-size:13px; line-height: 1.5;">
          ${customer?.city || 'Portland, OR'}<br>
          Shipping: Standard Expedited (FedEx Ground)
        </p>
      </div>

      <div class="sheet-section">
        <h3 class="sheet-heading">Items (${order.items.length})</h3>
        <table class="table" style="font-size: 13px;">
          <tbody>
            ${order.items.map(item => `
              <tr>
                <td><b>${item.name}</b><br><span class="text-muted">Qty: ${item.qty}</span></td>
                <td style="text-align:right"><b>$${(item.price * item.qty).toFixed(2)}</b></td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr>
              <td>Subtotal</td>
              <td style="text-align:right">$${(order.total * 0.92).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Estimated Tax</td>
              <td style="text-align:right">$${(order.total * 0.08).toFixed(2)}</td>
            </tr>
            <tr style="font-weight: 700; font-size: 14px;">
              <td>Total</td>
              <td style="text-align:right">$${order.total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    `,
    footer: `
      ${order.fulfillmentStatus !== 'fulfilled' ? `
        <button class="btn btn--filled" id="ord-fulfill-btn">Mark as Fulfilled</button>
      ` : `
        <button class="btn btn--outline" id="ord-unfulfill-btn">Mark as Unfulfilled</button>
      `}
      ${order.paymentStatus !== 'refunded' ? `
        <button class="btn btn--danger" id="ord-refund-btn">Refund Order</button>
      ` : ''}
    `
  });

  setTimeout(() => {
    document.getElementById('ord-fulfill-btn')?.addEventListener('click', () => {
      store.updateOrder(order.id, { fulfillmentStatus: 'fulfilled' });
      showToast(`Order ${order.id} marked as fulfilled!`, 'success');
      closeSheet();
      onUpdate();
    });

    document.getElementById('ord-unfulfill-btn')?.addEventListener('click', () => {
      store.updateOrder(order.id, { fulfillmentStatus: 'unfulfilled' });
      showToast(`Order ${order.id} marked as unfulfilled.`, 'info');
      closeSheet();
      onUpdate();
    });

    document.getElementById('ord-refund-btn')?.addEventListener('click', () => {
      store.updateOrder(order.id, { paymentStatus: 'refunded', fulfillmentStatus: 'refunded' });
      showToast(`Order ${order.id} has been refunded.`, 'warning');
      closeSheet();
      onUpdate();
    });
  }, 50);
}
