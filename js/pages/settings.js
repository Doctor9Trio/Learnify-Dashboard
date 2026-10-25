/**
 * settings.js — Store Settings, Appearance & Color Palettes Page Controller
 * Renders user profile, 4 theme color palettes (mono, pastel, ocean, sage),
 * physical shops manager, and plan billing status.
 */

import { store } from '../store.js';
import { showToast } from '../sheets-modal.js';

export function renderSettings(container) {
  function render() {
    const s = store.data.settings;
    const currentPalette = document.documentElement.dataset.palette || 'mono';
    const isDark = document.documentElement.dataset.theme === 'dark';

    container.innerHTML = `
      <div class="view-container">

        <!-- User Profile Card -->
        <section class="card set-sec" style="padding: 24px;">
          <header class="set-sec__head" style="margin-bottom: 20px;">
            <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 4px 0;">Your profile</h2>
            <p class="text-muted" style="margin: 0; font-size: 13px;">How you appear to your team and on order packing notes.</p>
          </header>

          <div style="display:flex; align-items:center; gap: 20px; margin-bottom: 20px;">
            <div class="user-cell__avatar" style="width: 60px; height: 60px; font-size: 22px; font-weight:700;">
              ${s.name.split(' ').map(n=>n[0]).join('')}
            </div>
            <div>
              <b style="font-size: 16px;">${s.name}</b>
              <div class="text-muted" style="font-size: 13px;">${s.email}</div>
              <span class="badge badge--success" style="margin-top:6px; display:inline-block;">Store Owner</span>
            </div>
          </div>

          <form id="profile-form" style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="field">
              <label class="label" for="set-name">Full Name</label>
              <input class="input" id="set-name" value="${s.name}" required />
            </div>
            <div class="field">
              <label class="label" for="set-email">Email Address</label>
              <input class="input" type="email" id="set-email" value="${s.email}" required />
            </div>
          </form>
        </section>

        <!-- Appearance & 4 Theme Palettes Card -->
        <section class="card set-sec" style="padding: 24px;">
          <header class="set-sec__head" style="margin-bottom: 20px;">
            <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 4px 0;">Appearance &amp; Palette</h2>
            <p class="text-muted" style="margin: 0; font-size: 13px;">Personalize interface accents and light / dark mode.</p>
          </header>

          <!-- Light / Dark Mode Toggle -->
          <div style="display:flex; justify-content:space-between; align-items:center; padding: 14px 18px; background: var(--card-light-bg); border-radius: 12px; margin-bottom: 20px; border: 1px solid var(--border-color);">
            <div>
              <b style="font-size: 14px;">Interface Theme</b>
              <div class="text-muted" style="font-size: 12px;">Toggle between bright daylight and sleek dark charcoal</div>
            </div>
            <button class="btn btn--outline btn--sm" id="set-theme-toggle">
              ${isDark ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
            </button>
          </div>

          <!-- 4 Color Palettes -->
          <label class="label" style="margin-bottom: 10px; display:block;">Color Accent Palette</label>
          <div class="pal-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px;">
            ${[
              { id: 'mono', name: 'Charcoal (Mono)', c1: '#14202a', c2: '#ffffff', c3: '#FF5722' },
              { id: 'ocean', name: 'Pacific Ocean', c1: '#2a6f9a', c2: '#8ec3ea', c3: '#1d5578' },
              { id: 'pastel', name: 'Warm Pastel', c1: '#d97706', c2: '#fed7aa', c3: '#b45309' },
              { id: 'sage', name: 'Forest Sage', c1: '#2e7d32', c2: '#a5d6a7', c3: '#1b5e20' }
            ].map(pal => `
              <div class="pal-card ${currentPalette === pal.id ? 'is-selected' : ''}" data-palette="${pal.id}" style="
                padding: 14px; border-radius: 12px; cursor: pointer; text-align:center;
                background: var(--card-light-bg);
                border: 2px solid ${currentPalette === pal.id ? '#FF5722' : 'var(--border-color)'};
                transition: all var(--transition-fast);
              ">
                <!-- Color Swatches -->
                <div style="display:flex; justify-content:center; gap: 6px; margin-bottom: 10px;">
                  <span style="width:16px; height:16px; border-radius:50%; background:${pal.c1}; border:1px solid rgba(0,0,0,0.1);"></span>
                  <span style="width:16px; height:16px; border-radius:50%; background:${pal.c2}; border:1px solid rgba(0,0,0,0.1);"></span>
                  <span style="width:16px; height:16px; border-radius:50%; background:${pal.c3}; border:1px solid rgba(0,0,0,0.1);"></span>
                </div>
                <b style="font-size: 12.5px; display:block;">${pal.name}</b>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Store Details & Shops -->
        <section class="card set-sec" style="padding: 24px;">
          <header class="set-sec__head" style="margin-bottom: 20px;">
            <h2 style="font-size: 18px; font-weight: 700; margin: 0 0 4px 0;">Store &amp; Physical Shops</h2>
            <p class="text-muted" style="margin: 0; font-size: 13px;">Manage store branding and brick-and-mortar locations.</p>
          </header>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
            <div class="field">
              <label class="label" for="set-store-name">Store Name</label>
              <input class="input" id="set-store-name" value="${s.storeName}" />
            </div>
            <div class="field">
              <label class="label" for="set-currency">Default Currency</label>
              <select class="select" id="set-currency">
                <option value="USD">USD ($) — United States Dollar</option>
                <option value="EUR">EUR (€) — Euro</option>
                <option value="GBP">GBP (£) — British Pound</option>
              </select>
            </div>
          </div>

          <!-- Shops List -->
          <div style="display:flex; flex-direction:column; gap: 10px;">
            <div style="display:flex; justify-content:space-between; align-items:center; padding: 12px 16px; background: var(--bg-page); border: 1px solid var(--border-color); border-radius: 10px;">
              <div>
                <b>Harbor District Shop</b>
                <div class="text-muted" style="font-size: 12px;">1042 Harbor Blvd, Portland, OR · Open 10am–7pm</div>
              </div>
              <span class="badge badge--success">Active Sync</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding: 12px 16px; background: var(--bg-page); border: 1px solid var(--border-color); border-radius: 10px;">
              <div>
                <b>Downtown Flagship Shop</b>
                <div class="text-muted" style="font-size: 12px;">482 5th Ave, Seattle, WA · Open 9am–8pm</div>
              </div>
              <span class="badge badge--success">Active Sync</span>
            </div>
          </div>

          <div style="margin-top: 20px;">
            <button class="btn btn--filled" id="set-save-all-btn">Save Changes</button>
          </div>
        </section>

      </div>
    `;

    // Theme toggle
    container.querySelector('#set-theme-toggle')?.addEventListener('click', () => {
      const doc = document.documentElement;
      const nextTheme = doc.dataset.theme === 'dark' ? '' : 'dark';
      doc.dataset.theme = nextTheme;
      localStorage.setItem('sarthak-theme', nextTheme);
      showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} theme`, 'info');
      render();
    });

    // Palette cards
    container.querySelectorAll('.pal-card').forEach(card => {
      card.addEventListener('click', () => {
        const pal = card.dataset.palette;
        document.documentElement.dataset.palette = pal;
        localStorage.setItem('sarthak-palette', pal);
        showToast(`Palette changed to ${card.querySelector('b')?.textContent}`, 'success');
        render();
      });
    });

    // Save all button
    container.querySelector('#set-save-all-btn')?.addEventListener('click', () => {
      const name = container.querySelector('#set-name')?.value;
      const email = container.querySelector('#set-email')?.value;
      const storeName = container.querySelector('#set-store-name')?.value;

      store.updateSettings({ name, email, storeName });
      showToast('Settings saved successfully!', 'success');
      render();
    });
  }

  render();
}
