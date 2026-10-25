/**
 * products.js — Products Catalog & Inventory Page Controller
 * Renders inventory stats, category filters, product table with stock meters,
 * and edit product modal dialog.
 */

import { store } from '../store.js';
import { openModal, closeModal, showToast } from '../sheets-modal.js';

let currentCategory = 'all';
let searchQuery = '';

export function renderProducts(container, params) {
  const productId = params?.get('id');

  function getFilteredProducts() {
    let products = store.data.products;

    if (currentCategory !== 'all') {
      products = products.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    return products;
  }

  function getStats() {
    const products = store.data.products;
    const totalSkus = products.length;
    const lowStock = products.filter(p => p.stock > 0 && p.stock <= 5).length;
    const outOfStock = products.filter(p => p.stock === 0).length;
    const valuation = products.reduce((acc, p) => acc + (p.price * p.stock), 0);
    return { totalSkus, lowStock, outOfStock, valuation };
  }

  function render() {
    const stats = getStats();
    const products = getFilteredProducts();

    container.innerHTML = `
      <div class="view-container">

        <!-- Statbar (4 KPIs) -->
        <section class="card statbar prd-stats" style="--n:4" aria-label="Inventory figures">
          <div class="statbar__cell">
            <span class="statbar__label">Active catalog</span>
            <b class="statbar__val">${stats.totalSkus} SKUs</b>
            <span class="statbar__sub">Across 4 collections</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Low stock alerts</span>
            <b class="statbar__val" style="color: ${stats.lowStock > 0 ? '#F59E0B' : 'inherit'}">${stats.lowStock} items</b>
            <span class="statbar__sub">Under 5 units remaining</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Out of stock</span>
            <b class="statbar__val" style="color: ${stats.outOfStock > 0 ? '#EF4444' : 'inherit'}">${stats.outOfStock} items</b>
            <span class="statbar__sub">Reorders suggested</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Retail valuation</span>
            <b class="statbar__val">$${stats.valuation.toLocaleString()}</b>
            <span class="statbar__sub">Current available inventory</span>
          </div>
        </section>

        <!-- Filter Toolbar -->
        <div class="view-toolbar">
          <div class="view-toolbar__filters">
            <button class="view-filter-btn ${currentCategory === 'all' ? 'is-active' : ''}" data-cat="all">All</button>
            <button class="view-filter-btn ${currentCategory === 'apparel' ? 'is-active' : ''}" data-cat="apparel">Apparel</button>
            <button class="view-filter-btn ${currentCategory === 'accessories' ? 'is-active' : ''}" data-cat="accessories">Accessories</button>
            <button class="view-filter-btn ${currentCategory === 'footwear' ? 'is-active' : ''}" data-cat="footwear">Footwear</button>
            <button class="view-filter-btn ${currentCategory === 'home goods' ? 'is-active' : ''}" data-cat="home goods">Home Goods</button>
          </div>

          <div class="view-toolbar__actions">
            <div class="view-search">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="prd-search-input" placeholder="Search products, SKUs..." value="${searchQuery}" />
            </div>
            <button class="btn btn--filled" id="prd-add-btn">
              <svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2.5;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add Product
            </button>
          </div>
        </div>

        <!-- Products Table Card -->
        <div class="card table-card">
          <div class="table-wrap">
            <table class="table prd-table" aria-label="Products catalog">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th style="text-align:right">Price</th>
                  <th style="text-align:right">Margin</th>
                  <th style="width: 180px;">Inventory Level</th>
                  <th style="text-align:center">Rating</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${products.length === 0 ? `
                  <tr><td colspan="8" style="text-align:center; padding: 48px; color: var(--text-muted);">No products found matching criteria</td></tr>
                ` : products.map(p => {
                  const pct = Math.min(100, Math.round((p.stock / p.maxStock) * 100));
                  const margin = Math.round(((p.price - p.cost) / p.price) * 100);
                  const isLow = p.stock > 0 && p.stock <= 5;
                  const isOut = p.stock === 0;

                  return `
                    <tr class="prd-row" data-product-id="${p.id}" tabindex="0">
                      <td>
                        <div class="user-cell">
                          <span class="user-cell__avatar" style="border-radius: 8px; font-weight: 700; background: rgba(0,0,0,0.06);">
                            ${p.name.slice(0, 2).toUpperCase()}
                          </span>
                          <div>
                            <b class="prd-name">${p.name}</b>
                            <div class="text-muted" style="font-size:11px;">${p.sales30d} sold past 30d</div>
                          </div>
                        </div>
                      </td>
                      <td><code class="prd-sku">${p.sku}</code></td>
                      <td><span class="badge badge--neutral">${p.category}</span></td>
                      <td style="text-align:right"><b>$${p.price.toFixed(2)}</b></td>
                      <td style="text-align:right"><span class="kpi-badge--positive">${margin}%</span></td>
                      <td>
                        <div class="stock-meter">
                          <div class="stock-meter__bar">
                            <div class="stock-meter__fill ${isOut ? 'is-empty' : isLow ? 'is-low' : ''}" style="width: ${pct}%"></div>
                          </div>
                          <span class="stock-meter__label">${p.stock} / ${p.maxStock}</span>
                        </div>
                      </td>
                      <td style="text-align:center">
                        <span style="font-size: 12px; font-weight: 600;">★ ${p.rating}</span>
                      </td>
                      <td>
                        <span class="badge badge--${isOut ? 'danger' : isLow ? 'warning' : 'success'}">
                          ${isOut ? 'Out of Stock' : isLow ? 'Low Stock' : 'Active'}
                        </span>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;

    // Category button events
    container.querySelectorAll('.view-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.dataset.cat;
        render();
      });
    });

    // Search
    const searchInput = container.querySelector('#prd-search-input');
    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
      const updatedInput = container.querySelector('#prd-search-input');
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.selectionStart = updatedInput.selectionEnd = updatedInput.value.length;
      }
    });

    // Row clicks
    container.querySelectorAll('.prd-row').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.dataset.productId;
        const p = store.data.products.find(x => x.id === id);
        if (p) showProductModal(p, render);
      });
    });

    // Add product button
    container.querySelector('#prd-add-btn')?.addEventListener('click', () => {
      showProductModal(null, render);
    });
  }

  render();

  if (productId) {
    const matched = store.data.products.find(p => p.id === productId);
    if (matched) showProductModal(matched, render);
  }
}

function showProductModal(product, onUpdate) {
  const isNew = !product;
  const p = product || {
    id: 'p' + (Date.now()),
    name: '',
    sku: 'SKU-' + Math.floor(100 + Math.random() * 900),
    category: 'Apparel',
    price: 95,
    cost: 38,
    stock: 20,
    maxStock: 50,
    rating: 5.0,
    sales30d: 0,
    status: 'active',
    desc: ''
  };

  openModal({
    title: isNew ? 'Add New Product' : `Edit ${p.name}`,
    body: `
      <form id="prd-form" class="modal-form" style="display: flex; flex-direction: column; gap: 14px;">
        <div class="field">
          <label class="label" for="prd-name">Product Name</label>
          <input class="input" id="prd-name" required value="${p.name}" placeholder="e.g. Waxed Canvas Field Jacket" />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="field">
            <label class="label" for="prd-sku">SKU</label>
            <input class="input" id="prd-sku" required value="${p.sku}" />
          </div>
          <div class="field">
            <label class="label" for="prd-cat">Category</label>
            <select class="select" id="prd-cat">
              <option value="Apparel" ${p.category === 'Apparel' ? 'selected' : ''}>Apparel</option>
              <option value="Accessories" ${p.category === 'Accessories' ? 'selected' : ''}>Accessories</option>
              <option value="Footwear" ${p.category === 'Footwear' ? 'selected' : ''}>Footwear</option>
              <option value="Home Goods" ${p.category === 'Home Goods' ? 'selected' : ''}>Home Goods</option>
            </select>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="field">
            <label class="label" for="prd-price">Retail Price ($)</label>
            <input class="input" type="number" step="0.01" id="prd-price" required value="${p.price}" />
          </div>
          <div class="field">
            <label class="label" for="prd-cost">Wholesale Cost ($)</label>
            <input class="input" type="number" step="0.01" id="prd-cost" required value="${p.cost}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="field">
            <label class="label" for="prd-stock">Current Stock Units</label>
            <input class="input" type="number" id="prd-stock" required value="${p.stock}" />
          </div>
          <div class="field">
            <label class="label" for="prd-max-stock">Target Max Stock</label>
            <input class="input" type="number" id="prd-max-stock" required value="${p.maxStock}" />
          </div>
        </div>

        <div class="field">
          <label class="label" for="prd-desc">Description</label>
          <textarea class="textarea" id="prd-desc" rows="3" placeholder="Fabric, materials, cut...">${p.desc}</textarea>
        </div>
      </form>
    `,
    footer: `
      <button class="btn btn--outline" id="prd-cancel-btn">Cancel</button>
      <button class="btn btn--filled" id="prd-save-btn">${isNew ? 'Create Product' : 'Save Changes'}</button>
    `
  });

  setTimeout(() => {
    document.getElementById('prd-cancel-btn')?.addEventListener('click', closeModal);

    document.getElementById('prd-save-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      const form = document.getElementById('prd-form');
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const updated = {
        name: document.getElementById('prd-name').value,
        sku: document.getElementById('prd-sku').value,
        category: document.getElementById('prd-cat').value,
        price: parseFloat(document.getElementById('prd-price').value),
        cost: parseFloat(document.getElementById('prd-cost').value),
        stock: parseInt(document.getElementById('prd-stock').value, 10),
        maxStock: parseInt(document.getElementById('prd-max-stock').value, 10),
        desc: document.getElementById('prd-desc').value,
        status: parseInt(document.getElementById('prd-stock').value, 10) === 0 ? 'out_of_stock' :
                parseInt(document.getElementById('prd-stock').value, 10) <= 5 ? 'low_stock' : 'active'
      };

      if (isNew) {
        store.addProduct({ ...p, ...updated });
        showToast(`Product "${updated.name}" created!`, 'success');
      } else {
        store.updateProduct(p.id, updated);
        showToast(`Product "${updated.name}" updated!`, 'success');
      }

      closeModal();
      onUpdate();
    });
  }, 50);
}
