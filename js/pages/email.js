/**
 * email.js — Email Marketing Campaigns Page Controller
 * Renders campaign KPIs, audience segments, campaigns list cards,
 * and email preview modal.
 */

import { store } from '../store.js';
import { openModal, closeModal, showToast } from '../sheets-modal.js';

export function renderEmail(container) {
  function render() {
    const campaigns = store.data.campaigns;

    container.innerHTML = `
      <div class="view-container">

        <!-- Statbar (4 KPIs) -->
        <section class="card statbar em-stats" style="--n:4" aria-label="Email marketing performance">
          <div class="statbar__cell">
            <span class="statbar__label">Total sent</span>
            <b class="statbar__val">42.5k</b>
            <span class="statbar__sub">Over 6 campaigns</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Average open rate</span>
            <b class="statbar__val">38.4%</b>
            <span class="statbar__sub"><span class="kpi-badge--positive">+4.1%</span> vs industry</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Click-through rate</span>
            <b class="statbar__val">5.2%</b>
            <span class="statbar__sub">2,210 clicks</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Attributed revenue</span>
            <b class="statbar__val">$18,420</b>
            <span class="statbar__sub">16.4% of total sales</span>
          </div>
        </section>

        <!-- Header Bar -->
        <div class="view-toolbar">
          <div>
            <h2 style="font-size: 18px; font-weight: 700; margin: 0;">Campaigns</h2>
          </div>
          <div class="view-toolbar__actions">
            <button class="btn btn--filled" id="em-new-btn">
              <svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2.5;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              New Campaign
            </button>
          </div>
        </div>

        <!-- Campaigns List Cards -->
        <div class="campaigns-grid" style="display:flex; flex-direction:column; gap: 12px;">
          ${campaigns.map(c => `
            <article class="card campaign-card" data-id="${c.id}" style="padding: 18px 24px; cursor: pointer; transition: transform var(--transition-fast);">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 14px; flex-wrap:wrap; gap:8px;">
                <div>
                  <div style="display:flex; align-items:center; gap: 8px; margin-bottom: 4px;">
                    <b style="font-size: 15px;">${c.subject}</b>
                    <span class="badge badge--${c.status === 'sent' ? 'success' : c.status === 'scheduled' ? 'warning' : 'neutral'}">
                      ${c.status}
                    </span>
                  </div>
                  <div class="text-muted" style="font-size:12px;">
                    Audience: <b>${c.audience}</b> · Sent on ${c.date}
                  </div>
                </div>

                <div style="text-align:right;">
                  <b style="font-size: 16px;">${c.revenue.startsWith('$') ? c.revenue : '$' + c.revenue}</b>
                  <div class="text-muted" style="font-size:11px;">generated</div>
                </div>
              </div>

              <!-- Stats Bar -->
              <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; padding-top: 12px; border-top: 1px solid var(--border-color); font-size:12px;">
                <div>
                  <span class="text-muted">Delivered</span>
                  <div style="font-weight: 600; margin-top: 2px;">${c.sent ? c.sent.toLocaleString() : '—'}</div>
                </div>
                <div>
                  <span class="text-muted">Opens</span>
                  <div style="display:flex; align-items:center; gap: 8px; margin-top: 2px;">
                    <div style="flex:1; height: 6px; background: rgba(0,0,0,0.06); border-radius: 3px; overflow:hidden;">
                      <div style="width: ${parseFloat(c.opens || c.openRate) || 0}%; height:100%; background: var(--nav-tab-active-bg); border-radius:3px;"></div>
                    </div>
                    <b>${c.opens || c.openRate || '—'}</b>
                  </div>
                </div>
                <div>
                  <span class="text-muted">Clicks</span>
                  <div style="display:flex; align-items:center; gap: 8px; margin-top: 2px;">
                    <div style="flex:1; height: 6px; background: rgba(0,0,0,0.06); border-radius: 3px; overflow:hidden;">
                      <div style="width: ${Math.min(100, (parseFloat(c.clicks || c.clickRate) || 0) * 4)}%; height:100%; background: #22C55E; border-radius:3px;"></div>
                    </div>
                    <b>${c.clicks || c.clickRate || '—'}</b>
                  </div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

      </div>
    `;

    // Campaign click opens preview
    container.querySelectorAll('.campaign-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const c = campaigns.find(x => x.id === id);
        if (c) showEmailPreview(c);
      });
    });

    // New campaign button
    container.querySelector('#em-new-btn')?.addEventListener('click', () => {
      showToast('Campaign draft builder ready', 'info');
    });
  }

  render();
}

function showEmailPreview(campaign) {
  openModal({
    title: `Preview: ${campaign.subject}`,
    body: `
      <div style="background: var(--bg-page); border: 1px solid var(--border-color); border-radius: 12px; padding: 24px; max-width: 520px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <!-- Email Header -->
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 2px solid var(--border-color); padding-bottom: 16px; margin-bottom: 20px;">
          <div style="font-weight: 800; font-size: 18px; letter-spacing: -0.5px;">SARTHAK DASHBOARD</div>
          <span style="font-size: 11px; color: var(--text-muted);">${campaign.date}</span>
        </div>

        <!-- Email Hero -->
        <div style="background: var(--nav-tab-active-bg); color: var(--nav-tab-active-text); padding: 32px 24px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
          <h2 style="font-size: 24px; font-weight: 700; margin: 0 0 10px 0; color: #FFF;">${campaign.subject}</h2>
          <p style="font-size: 14px; opacity: 0.85; margin: 0 auto; max-width: 360px; line-height: 1.5;">
            Discover our handcrafted autumn capsule collection built for rugged durability and timeless utility.
          </p>
          <div style="margin-top: 20px;">
            <a href="#" style="background: #FF5722; color: #FFF; padding: 10px 24px; border-radius: 20px; font-weight: 600; text-decoration: none; font-size: 13px; display: inline-block;">
              Shop The Drop →
            </a>
          </div>
        </div>

        <!-- Email Perks -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; text-align: center; font-size: 12px; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 16px;">
          <div>✓ Free shipping over $150</div>
          <div>✓ Lifetime guarantee</div>
        </div>
      </div>
    `,
    footer: `
      <button class="btn btn--outline" id="em-preview-close">Close Preview</button>
      <button class="btn btn--filled" id="em-send-test">Send Test Email</button>
    `
  });

  setTimeout(() => {
    document.getElementById('em-preview-close')?.addEventListener('click', closeModal);
    document.getElementById('em-send-test')?.addEventListener('click', () => {
      showToast('Test email sent to your inbox!', 'success');
      closeModal();
    });
  }, 50);
}
