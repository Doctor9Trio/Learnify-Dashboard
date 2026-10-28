/**
 * finder.js — ⌘K Quick Search / Finder Universal Modal
 * Searches pages, products, orders, and customers with keyboard navigation
 */

import { store } from './store.js';

let selectedIndex = 0;
let currentHits = [];

const PAGES = [
  { label: 'Dashboard', href: '#/dashboard', group: 'Pages', badge: 'Overview' },
  { label: 'Orders', href: '#/orders', group: 'Pages', badge: 'Sales' },
  { label: 'Products', href: '#/products', group: 'Pages', badge: 'Catalog' },
  { label: 'Customers', href: '#/customers', group: 'Pages', badge: 'CRM' },
  { label: 'Messages', href: '#/messages', group: 'Pages', badge: 'Inbox' },
  { label: 'Email Campaigns', href: '#/email', group: 'Pages', badge: 'Marketing' },
  { label: 'Automations', href: '#/automations', group: 'Pages', badge: 'Flows' },
  { label: 'Analytics', href: '#/analytics', group: 'Pages', badge: 'Metrics' },
  { label: 'Integrations', href: '#/integrations', group: 'Pages', badge: 'Apps' },
  { label: 'Workspace', href: '#/workspace', group: 'Pages', badge: 'Kanban' },
  { label: 'Help Center', href: '#/help', group: 'Pages', badge: 'FAQs' },
  { label: 'Feedback', href: '#/feedback', group: 'Pages', badge: 'Requests' },
  { label: 'Settings', href: '#/settings', group: 'Pages', badge: 'Admin' }
];

export function initFinder() {
  const dialog = document.getElementById('finder');
  const input = document.getElementById('finder-q');
  const openBtn = document.getElementById('open-finder');

  if (!dialog || !input) return;

  // Global ⌘K / Ctrl+K shortcut
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openFinder();
    }
  });

  openBtn?.addEventListener('click', openFinder);

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) closeFinder();
  });

  input.addEventListener('input', () => {
    renderHits(input.value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentHits.length) {
        selectedIndex = (selectedIndex + 1) % currentHits.length;
        updateSelection();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentHits.length) {
        selectedIndex = (selectedIndex - 1 + currentHits.length) % currentHits.length;
        updateSelection();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentHits[selectedIndex]) {
        executeHit(currentHits[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      closeFinder();
    }
  });
}

export function openFinder() {
  const dialog = document.getElementById('finder');
  const input = document.getElementById('finder-q');
  if (!dialog || !input) return;

  input.value = '';
  selectedIndex = 0;
  renderHits('');

  if (!dialog.open) {
    dialog.showModal();
  }
  requestAnimationFrame(() => {
    dialog.classList.add('is-open');
    input.focus();
  });
}

export function closeFinder() {
  const dialog = document.getElementById('finder');
  if (!dialog || !dialog.open) return;

  dialog.classList.remove('is-open');
  setTimeout(() => dialog.close(), 150);
}

function renderHits(query) {
  const list = document.getElementById('finder-list');
  if (!list) return;

  const q = query.trim().toLowerCase();
  currentHits = [];

  // Match pages
  const matchedPages = PAGES.filter(p => !q || p.label.toLowerCase().includes(q));
  matchedPages.slice(0, 5).forEach(p => currentHits.push(p));

  // Match products
  if (q) {
    const matchedProducts = store.data.products
      .filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q))
      .slice(0, 4)
      .map(p => ({
        label: p.name,
        href: `#/products?id=${p.id}`,
        group: 'Products',
        badge: `$${p.price} · ${p.stock} in stock`
      }));
    matchedProducts.forEach(p => currentHits.push(p));

    // Match orders
    const cleanQ = q.replace(/^#/, '');
    const matchedOrders = store.data.orders
      .filter(o => o.id.includes(cleanQ) || o.customerName.toLowerCase().includes(q))
      .slice(0, 3)
      .map(o => ({
        label: `${o.id} — ${o.customerName}`,
        href: `#/orders?id=${o.id.replace('#', '')}`,
        group: 'Orders',
        badge: `$${o.total} · ${o.paymentStatus}`
      }));
    matchedOrders.forEach(o => currentHits.push(o));

    // Match customers
    const matchedCustomers = store.data.customers
      .filter(c => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q))
      .slice(0, 3)
      .map(c => ({
        label: c.name,
        href: `#/customers?id=${c.id}`,
        group: 'Customers',
        badge: `${c.city} · $${c.spent}`
      }));
    matchedCustomers.forEach(c => currentHits.push(c));
  }

  selectedIndex = Math.min(selectedIndex, Math.max(0, currentHits.length - 1));

  if (!currentHits.length) {
    list.innerHTML = `<li class="finder__empty">No results found for "${query}"</li>`;
    return;
  }

  let currentGroup = '';
  list.innerHTML = currentHits.map((hit, idx) => {
    let groupHtml = '';
    if (hit.group !== currentGroup) {
      currentGroup = hit.group;
      groupHtml = `<li class="finder__group-label">${currentGroup}</li>`;
    }
    return `
      ${groupHtml}
      <li class="finder__hit ${idx === selectedIndex ? 'is-selected' : ''}" data-idx="${idx}" role="option">
        <span class="finder__hit-label">${hit.label}</span>
        <span class="finder__hit-badge">${hit.badge}</span>
      </li>
    `;
  }).join('');

  list.querySelectorAll('.finder__hit').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.idx, 10);
      if (currentHits[idx]) {
        executeHit(currentHits[idx]);
      }
    });
  });
}

function updateSelection() {
  const list = document.getElementById('finder-list');
  if (!list) return;

  list.querySelectorAll('.finder__hit').forEach((el, idx) => {
    if (idx === selectedIndex) {
      el.classList.add('is-selected');
      el.scrollIntoView({ block: 'nearest' });
    } else {
      el.classList.remove('is-selected');
    }
  });
}

function executeHit(hit) {
  closeFinder();
  window.location.hash = hit.href;
}
