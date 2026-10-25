/**
 * integrations.js — Connected Apps & Integrations Page Controller
 * Renders connected apps meter, integration cards grid,
 * and configuration slide sheet with connect/disconnect actions.
 */

import { store } from '../store.js';
import { openSheet, closeSheet, showToast } from '../sheets-modal.js';

export function renderIntegrations(container) {
  function render() {
    const apps = store.data.integrations;
    const connectedCount = apps.filter(a => a.connected || a.status === 'connected').length;

    container.innerHTML = `
      <div class="view-container">

        <!-- Header Card with Apps Meter -->
        <section class="card int-head" style="padding: 24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap: 16px;">
          <div>
            <h2 id="int-count" style="font-size: 20px; font-weight: 700; margin: 0 0 6px 0;">
              <b>${connectedCount}</b> of ${apps.length} apps connected
            </h2>
            <p class="text-muted" style="margin: 0; font-size: 13px;">
              Apps that sync live orders, inventory stock, and customer profiles with Sarthak Dashboard.
            </p>
          </div>
          <div style="display:flex; align-items:center; gap: 12px;">
            <div style="width: 140px; height: 10px; background: rgba(0,0,0,0.06); border-radius: 5px; overflow:hidden;">
              <div style="width: ${(connectedCount / apps.length) * 100}%; height: 100%; background: #22C55E; border-radius:5px;"></div>
            </div>
            <span style="font-size: 13px; font-weight: 700;">${Math.round((connectedCount / apps.length) * 100)}%</span>
          </div>
        </section>

        <!-- Integrations Grid -->
        <div class="int-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
          ${apps.map(app => {
            const isConn = app.connected || app.status === 'connected';
            const cat = app.category || (app.name.includes('Shopify') ? 'Storefront' : app.name.includes('Stripe') ? 'Payments' : app.name.includes('Ship') ? 'Fulfillment' : app.name.includes('Mail') ? 'Marketing' : app.name.includes('Slack') ? 'Comms' : app.name.includes('Analytics') ? 'Analytics' : 'Operations');
            const syncTime = app.lastSync || app.synced || 'Just now';

            return `
              <article class="card int-card" data-id="${app.id}" style="padding: 20px; display:flex; flex-direction:column; justify-content:space-between; gap: 16px;">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 12px;">
                    <div style="display:flex; align-items:center; gap: 12px;">
                      <div style="width: 40px; height: 40px; background: var(--bg-page); border: 1px solid var(--border-color); border-radius: 10px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size: 15px;">
                        ${app.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <b style="font-size: 15px;">${app.name}</b>
                        <div class="text-muted" style="font-size: 11px;">${cat}</div>
                      </div>
                    </div>

                    <span class="badge badge--${isConn ? 'success' : 'neutral'}">
                      ${isConn ? 'Connected' : 'Available'}
                    </span>
                  </div>

                  <p class="text-muted" style="font-size: 12.5px; margin: 0; line-height: 1.45;">
                    ${app.desc}
                  </p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; padding-top: 14px; border-top: 1px solid var(--border-color);">
                  <span class="text-muted" style="font-size: 11px;">
                    ${isConn ? `Synced ${syncTime}` : 'Instant setup'}
                  </span>
                  <button class="btn btn--${isConn ? 'outline' : 'filled'} btn--sm int-action-btn" data-id="${app.id}">
                    ${isConn ? 'Configure' : 'Connect'}
                  </button>
                </div>
              </article>
            `;
          }).join('')}
        </div>

      </div>
    `;

    // Connect/Configure button listeners
    container.querySelectorAll('.int-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const app = apps.find(a => a.id === id);
        if (app) showIntegrationSheet(app, render);
      });
    });

    container.querySelectorAll('.int-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const app = apps.find(a => a.id === id);
        if (app) showIntegrationSheet(app, render);
      });
    });
  }

  render();
}

function showIntegrationSheet(app, onUpdate) {
  openSheet({
    title: `${app.name} Integration`,
    subtitle: `${app.category} · ${app.connected ? 'Active and syncing' : 'Ready to connect'}`,
    body: `
      <div class="sheet-section">
        <div style="display:flex; align-items:center; gap: 14px; margin-bottom: 14px;">
          <div style="width: 48px; height: 48px; background: var(--card-light-bg); border-radius: 12px; display:flex; align-items:center; justify-content:center; font-size:20px; font-weight:800; border: 1px solid var(--border-color);">
            ${app.icon}
          </div>
          <div>
            <b style="font-size: 16px;">${app.name}</b>
            <div class="text-muted" style="font-size: 13px;">${app.desc}</div>
          </div>
        </div>
      </div>

      <div class="sheet-section">
        <h3 class="sheet-heading">Permissions &amp; Scopes</h3>
        <ul style="margin: 0; padding-left: 20px; font-size: 13px; line-height: 1.6; color: var(--text-muted);">
          <li>Read and write store order webhooks</li>
          <li>Synchronize available catalog items and inventory numbers</li>
          <li>Push shipping updates and tracking IDs to customers</li>
        </ul>
      </div>

      <div class="sheet-section">
        <h3 class="sheet-heading">Connection Status</h3>
        <div style="display:flex; justify-content:space-between; align-items:center; padding: 12px 14px; background: rgba(0,0,0,0.02); border-radius: 8px; border: 1px solid var(--border-color); font-size: 13px;">
          <span>Status</span>
          <span class="badge badge--${app.connected ? 'success' : 'neutral'}">${app.connected ? 'Connected' : 'Disconnected'}</span>
        </div>
        ${app.connected ? `
          <div style="display:flex; justify-content:space-between; align-items:center; padding: 12px 14px; background: rgba(0,0,0,0.02); border-radius: 8px; border: 1px solid var(--border-color); font-size: 13px; margin-top: 8px;">
            <span>Last Sync</span>
            <b>${app.lastSync}</b>
          </div>
        ` : ''}
      </div>
    `,
    footer: `
      ${app.connected ? `
        <button class="btn btn--danger" id="int-disconnect-btn">Disconnect App</button>
        <button class="btn btn--filled" id="int-sync-btn">Sync Now</button>
      ` : `
        <button class="btn btn--outline" id="int-sheet-cancel">Cancel</button>
        <button class="btn btn--filled" id="int-connect-btn">Authorize &amp; Connect</button>
      `}
    `
  });

  setTimeout(() => {
    document.getElementById('int-sheet-cancel')?.addEventListener('click', closeSheet);

    document.getElementById('int-connect-btn')?.addEventListener('click', () => {
      store.toggleIntegration(app.id);
      showToast(`${app.name} connected successfully!`, 'success');
      closeSheet();
      onUpdate();
    });

    document.getElementById('int-disconnect-btn')?.addEventListener('click', () => {
      store.toggleIntegration(app.id);
      showToast(`${app.name} disconnected.`, 'info');
      closeSheet();
      onUpdate();
    });

    document.getElementById('int-sync-btn')?.addEventListener('click', () => {
      showToast(`${app.name} sync completed in 320ms`, 'success');
      closeSheet();
    });
  }, 50);
}
