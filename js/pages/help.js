/**
 * help.js — Help Center & FAQ Page Controller
 * Renders hero search, topic categories, expandable FAQ accordions,
 * live system uptime status, and contact support modal dialog.
 */

import { store } from '../store.js';
import { openModal, closeModal, showToast } from '../sheets-modal.js';

let activeCategory = 'all';
let searchQuery = '';

export function renderHelp(container) {
  function render() {
    let faqs = store.data.faqs;

    if (activeCategory !== 'all') {
      faqs = faqs.filter(f => f.category.toLowerCase() === activeCategory.toLowerCase());
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      faqs = faqs.filter(f =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q)
      );
    }

    container.innerHTML = `
      <div class="view-container">

        <!-- Hero Section -->
        <section class="card hlp-hero" style="padding: 36px 24px; text-align:center; background: var(--card-dark-bg); color: var(--card-dark-text); border-radius: 20px;">
          <h2 style="font-size: 28px; font-weight: 700; margin: 0 0 10px 0; letter-spacing: -0.5px;">How can we help?</h2>
          <p style="opacity: 0.75; font-size: 14px; margin: 0 auto 24px auto; max-width: 480px;">
            Search our knowledge base for instant answers on store settings, shipping, and billing.
          </p>

          <div style="max-width: 520px; margin: 0 auto; position:relative;">
            <div class="view-search" style="width: 100%;">
              <svg viewBox="0 0 24 24" style="stroke: #666;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="hlp-search-input" placeholder="Search answers, setup guides..." value="${searchQuery}" style="width: 100%; height: 44px; font-size: 14px; background: rgba(255,255,255,0.1); color: #FFF; border: 1px solid rgba(255,255,255,0.15);" />
            </div>
          </div>
        </section>

        <!-- Topics Toolbar -->
        <div class="view-toolbar" style="justify-content:center;">
          <div class="view-toolbar__filters">
            <button class="view-filter-btn ${activeCategory === 'all' ? 'is-active' : ''}" data-cat="all">All Topics</button>
            <button class="view-filter-btn ${activeCategory === 'Orders' ? 'is-active' : ''}" data-cat="Orders">Orders &amp; Shipping</button>
            <button class="view-filter-btn ${activeCategory === 'Billing' ? 'is-active' : ''}" data-cat="Billing">Billing &amp; Plans</button>
            <button class="view-filter-btn ${activeCategory === 'Inventory' ? 'is-active' : ''}" data-cat="Inventory">Inventory</button>
            <button class="view-filter-btn ${activeCategory === 'Store' ? 'is-active' : ''}" data-cat="Store">Store Setup</button>
          </div>
        </div>

        <!-- Two Columns: FAQ Accordion & Side Widgets -->
        <div style="display:grid; grid-template-columns: 2fr 1fr; gap: 16px; align-items:flex-start;">

          <!-- FAQs Accordion -->
          <div class="card" style="padding: 24px;">
            <h3 class="card__title" style="margin: 0 0 16px 0;">Frequently Asked Questions</h3>

            <div class="hlp-accordion" style="display:flex; flex-direction:column; gap: 10px;">
              ${faqs.length === 0 ? `
                <p class="text-muted" style="padding: 24px; text-align:center;">No articles found matching "${searchQuery}"</p>
              ` : faqs.map((faq, idx) => `
                <div class="faq-item" style="border: 1px solid var(--border-color); border-radius: 10px; overflow:hidden;">
                  <button class="faq-btn" data-idx="${idx}" style="
                    width: 100%; padding: 14px 18px; display:flex; justify-content:space-between; align-items:center;
                    background: var(--card-light-bg); border:none; text-align:left; cursor:pointer; font-family:inherit;
                  ">
                    <b style="font-size: 14px; color: var(--text-primary);">${faq.question}</b>
                    <span class="faq-icon" style="transition: transform 0.2s; font-size: 16px; color: var(--text-muted);">+</span>
                  </button>
                  <div class="faq-content" style="display:none; padding: 14px 18px; font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); border-top: 1px solid var(--border-color);">
                    ${faq.answer}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Side Widgets -->
          <div style="display:flex; flex-direction:column; gap: 16px;">

            <!-- System Status -->
            <div class="card hlp-status" style="padding: 20px;">
              <h3 style="font-size: 14px; font-weight: 700; margin: 0 0 12px 0;">System Status</h3>
              <div style="display:flex; align-items:center; gap: 8px; margin-bottom: 8px;">
                <span class="live-dot" style="background:#22C55E;"></span>
                <b style="font-size: 13px;">All systems operational</b>
              </div>
              <p class="text-muted" style="font-size: 12px; margin: 0;">
                99.98% uptime over the past 90 days. Next scheduled maintenance window is Sunday 2am UTC.
              </p>
            </div>

            <!-- Still Stuck -->
            <div class="card" style="padding: 20px; text-align:center;">
              <h3 style="font-size: 14px; font-weight: 700; margin: 0 0 8px 0;">Still need help?</h3>
              <p class="text-muted" style="font-size: 12.5px; margin: 0 0 16px 0;">
                Our merchant support engineers are online 7 days a week.
              </p>
              <button class="btn btn--filled" id="hlp-contact-btn" style="width: 100%;">
                Contact Support
              </button>
            </div>

          </div>

        </div>

      </div>
    `;

    // Filter events
    container.querySelectorAll('.view-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        render();
      });
    });

    // Search input
    const searchInput = container.querySelector('#hlp-search-input');
    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
      const updatedInput = container.querySelector('#hlp-search-input');
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.selectionStart = updatedInput.selectionEnd = updatedInput.value.length;
      }
    });

    // Accordion toggle
    container.querySelectorAll('.faq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const content = item.querySelector('.faq-content');
        const icon = btn.querySelector('.faq-icon');
        const isOpen = content.style.display === 'block';

        content.style.display = isOpen ? 'none' : 'block';
        icon.textContent = isOpen ? '+' : '−';
      });
    });

    // Contact modal
    container.querySelector('#hlp-contact-btn')?.addEventListener('click', () => {
      showContactModal();
    });
  }

  render();
}

function showContactModal() {
  openModal({
    title: 'Contact Support',
    body: `
      <form id="hlp-ticket-form" style="display:flex; flex-direction:column; gap: 14px;">
        <div class="field">
          <label class="label" for="hlp-topic">Topic</label>
          <select class="select" id="hlp-topic">
            <option>Storefront or Payment Issue</option>
            <option>Inventory & Stock Sync</option>
            <option>Plan & Billing Inquiry</option>
            <option>Other / Question</option>
          </select>
        </div>
        <div class="field">
          <label class="label" for="hlp-email">Reply to Email</label>
          <input class="input" type="email" id="hlp-email" value="alex.mercer@gmail.com" required />
        </div>
        <div class="field">
          <label class="label" for="hlp-msg">How can we help?</label>
          <textarea class="textarea" id="hlp-msg" rows="4" placeholder="Describe the question or issue in detail..." required></textarea>
        </div>
      </form>
    `,
    footer: `
      <button class="btn btn--outline" id="hlp-close-btn">Cancel</button>
      <button class="btn btn--filled" id="hlp-submit-ticket">Submit Ticket</button>
    `
  });

  setTimeout(() => {
    document.getElementById('hlp-close-btn')?.addEventListener('click', closeModal);
    document.getElementById('hlp-submit-ticket')?.addEventListener('click', () => {
      showToast('Support ticket dispatched! Expect a reply within 2 hours.', 'success');
      closeModal();
    });
  }, 50);
}
