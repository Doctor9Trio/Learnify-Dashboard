/**
 * customers.js — Customers CRM Page Controller
 * Renders customer stats, tag filters, CRM customer table,
 * and customer profile slide sheet with spend chart & order history.
 */

import { store } from '../store.js';
import { openSheet, closeSheet, showToast } from '../sheets-modal.js';

let currentTag = 'all';
let searchQuery = '';

export function renderCustomers(container, params) {
  const customerId = params?.get('id');

  function getFilteredCustomers() {
    let customers = store.data.customers;

    if (currentTag !== 'all') {
      customers = customers.filter(c => c.tag.toLowerCase() === currentTag.toLowerCase());
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      customers = customers.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q)
      );
    }

    return customers;
  }

  function getStats() {
    const customers = store.data.customers;
    const total = customers.length;
    const activeMonth = Math.round(total * 0.7);
    const repeats = customers.filter(c => c.ordersCount > 1).length;
    const repeatRate = Math.round((repeats / total) * 100);
    const totalSpent = customers.reduce((acc, c) => acc + c.spent, 0);
    const avgLtv = Math.round(totalSpent / total);
    return { total, activeMonth, repeatRate, avgLtv };
  }

  function render() {
    const stats = getStats();
    const customers = getFilteredCustomers();

    container.innerHTML = `
      <div class="view-container">

        <!-- Statbar (4 KPIs) -->
        <section class="card statbar cus-stats" style="--n:4" aria-label="Customer metrics">
          <div class="statbar__cell">
            <span class="statbar__label">Total customers</span>
            <b class="statbar__val">${stats.total.toLocaleString()}</b>
            <span class="statbar__sub">Active directory</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Active this month</span>
            <b class="statbar__val">${stats.activeMonth}</b>
            <span class="statbar__sub"><span class="kpi-badge--positive">+12%</span> vs last month</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Repeat customer rate</span>
            <b class="statbar__val">${stats.repeatRate}%</b>
            <span class="statbar__sub">High brand affinity</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Average lifetime value</span>
            <b class="statbar__val">$${stats.avgLtv}</b>
            <span class="statbar__sub">Top tier: $1,400+</span>
          </div>
        </section>

        <!-- Filter Toolbar -->
        <div class="view-toolbar">
          <div class="view-toolbar__filters">
            <button class="view-filter-btn ${currentTag === 'all' ? 'is-active' : ''}" data-tag="all">All</button>
            <button class="view-filter-btn ${currentTag === 'vip' ? 'is-active' : ''}" data-tag="vip">VIP</button>
            <button class="view-filter-btn ${currentTag === 'repeat' ? 'is-active' : ''}" data-tag="repeat">Repeat</button>
            <button class="view-filter-btn ${currentTag === 'wholesale' ? 'is-active' : ''}" data-tag="wholesale">Wholesale</button>
            <button class="view-filter-btn ${currentTag === 'standard' ? 'is-active' : ''}" data-tag="standard">Standard</button>
          </div>

          <div class="view-toolbar__actions">
            <div class="view-search">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="cus-search-input" placeholder="Search by name, email, city..." value="${searchQuery}" />
            </div>
          </div>
        </div>

        <!-- Customers Table Card -->
        <div class="card table-card">
          <div class="table-wrap">
            <table class="table cus-table" aria-label="Customer list">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Location</th>
                  <th>Segment</th>
                  <th style="text-align:center">Orders</th>
                  <th style="text-align:right">Total Spent</th>
                  <th>Last Order</th>
                </tr>
              </thead>
              <tbody>
                ${customers.length === 0 ? `
                  <tr><td colspan="6" style="text-align:center; padding: 48px; color: var(--text-muted);">No customers found</td></tr>
                ` : customers.map(c => {
                  const initials = c.name.split(' ').map(n=>n[0]).join('');
                  return `
                    <tr class="cus-row" data-customer-id="${c.id}" tabindex="0">
                      <td>
                        <div class="user-cell">
                          <span class="user-cell__avatar">${initials}</span>
                          <div>
                            <b class="cus-name">${c.name}</b>
                            <div class="text-muted" style="font-size:12px;">${c.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>${c.city}</td>
                      <td>
                        <span class="badge badge--${c.tag === 'VIP' ? 'success' : c.tag === 'Wholesale' ? 'warning' : 'neutral'}">
                          ${c.tag}
                        </span>
                      </td>
                      <td style="text-align:center"><b>${c.ordersCount}</b></td>
                      <td style="text-align:right"><b>$${c.spent.toLocaleString()}</b></td>
                      <td class="text-muted">${c.lastOrder}</td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;

    // Filter events
    container.querySelectorAll('.view-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentTag = btn.dataset.tag;
        render();
      });
    });

    // Search input
    const searchInput = container.querySelector('#cus-search-input');
    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
      const updatedInput = container.querySelector('#cus-search-input');
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.selectionStart = updatedInput.selectionEnd = updatedInput.value.length;
      }
    });

    // Row clicks
    container.querySelectorAll('.cus-row').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.dataset.customerId;
        const c = store.data.customers.find(x => x.id === id);
        if (c) showCustomerSheet(c, render);
      });
    });
  }

  render();

  if (customerId) {
    const matched = store.data.customers.find(c => c.id === customerId);
    if (matched) showCustomerSheet(matched, render);
  }
}

function showCustomerSheet(customer, onUpdate) {
  const customerOrders = store.data.orders.filter(o => o.customerId === customer.id);
  const initials = customer.name.split(' ').map(n=>n[0]).join('');

  // Spend chart heights
  const maxSpend = Math.max(...customer.spendHistory, 1);
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

  openSheet({
    title: customer.name,
    subtitle: `${customer.city} · Customer since 2025`,
    body: `
      <div class="sheet-section">
        <div class="user-cell" style="gap: 16px;">
          <span class="user-cell__avatar" style="width: 52px; height: 52px; font-size: 20px;">${initials}</span>
          <div>
            <div style="display:flex; align-items:center; gap: 8px;">
              <b style="font-size: 16px;">${customer.name}</b>
              <span class="badge badge--${customer.tag === 'VIP' ? 'success' : 'neutral'}">${customer.tag}</span>
            </div>
            <div class="text-muted" style="font-size:13px; margin-top:2px;">${customer.email}</div>
          </div>
        </div>
      </div>

      <!-- Historical Spend Mini Bar Chart -->
      <div class="sheet-section">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: 12px;">
          <h3 class="sheet-heading" style="margin:0;">Spend History (Last 6 Months)</h3>
          <b>$${customer.spent.toLocaleString()} total</b>
        </div>
        <div class="spend-chart" style="display:flex; align-items:flex-end; gap: 8px; height: 80px; padding: 8px 0; border-bottom: 1px solid var(--border-color);">
          ${customer.spendHistory.map((val, idx) => {
            const h = Math.round((val / maxSpend) * 60);
            return `
              <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap: 4px;">
                <div style="width: 100%; height: ${Math.max(4, h)}px; background: ${val > 0 ? 'var(--nav-tab-active-bg)' : 'rgba(0,0,0,0.06)'}; border-radius: 4px;" title="$${val}"></div>
                <span class="text-muted" style="font-size:10px;">${months[idx]}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Recent Orders List -->
      <div class="sheet-section">
        <h3 class="sheet-heading">Recent Orders (${customerOrders.length})</h3>
        ${customerOrders.length === 0 ? `
          <p class="text-muted" style="font-size: 13px;">No orders found in current cycle.</p>
        ` : `
          <div style="display:flex; flex-direction:column; gap: 8px;">
            ${customerOrders.map(o => `
              <div style="display:flex; justify-content:space-between; align-items:center; padding: 10px 12px; background: rgba(0,0,0,0.02); border-radius: 8px; border: 1px solid var(--border-color);">
                <div>
                  <b>${o.id}</b> · <span class="text-muted" style="font-size:12px;">${o.date}</span>
                  <div style="font-size:12px; color: var(--text-muted);">${o.items.map(i=>i.name).join(', ')}</div>
                </div>
                <div style="text-align:right;">
                  <b>$${o.total.toFixed(2)}</b>
                  <div><span class="badge badge--${o.fulfillmentStatus === 'fulfilled' ? 'success' : 'neutral'}">${o.fulfillmentStatus}</span></div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <!-- Notes Editor -->
      <div class="sheet-section">
        <h3 class="sheet-heading">Customer Notes</h3>
        <textarea class="textarea" id="cus-notes-input" rows="3">${customer.notes}</textarea>
        <button class="btn btn--outline btn--sm" id="cus-save-notes-btn" style="margin-top: 8px;">Save Note</button>
      </div>
    `,
    footer: `
      <button class="btn btn--filled" id="cus-sheet-done-btn">Done</button>
    `
  });

  setTimeout(() => {
    document.getElementById('cus-sheet-done-btn')?.addEventListener('click', closeSheet);

    document.getElementById('cus-save-notes-btn')?.addEventListener('click', () => {
      const notes = document.getElementById('cus-notes-input').value;
      store.updateCustomer(customer.id, { notes });
      showToast('Customer notes updated!', 'success');
      onUpdate();
    });
  }, 50);
}
