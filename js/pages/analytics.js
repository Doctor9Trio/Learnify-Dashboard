/**
 * analytics.js — Deep Analytics Suite Page Controller
 * Renders conversion funnel, revenue over time interactive SVG chart,
 * sales channel split, traffic breakdown, and top products leaderboard.
 */

import { store } from '../store.js';

let activePeriod = '30d';

export function renderAnalytics(container) {
  function render() {
    container.innerHTML = `
      <div class="view-container">

        <!-- Statbar (5 KPIs) -->
        <section class="card statbar an-kpis" style="--n:5" aria-label="Key figures">
          <div class="statbar__cell">
            <span class="statbar__label">Gross sales</span>
            <b class="statbar__val">$184,320</b>
            <span class="statbar__sub"><span class="kpi-badge--positive">+14.2%</span> vs last month</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Net profit</span>
            <b class="statbar__val">$78,140</b>
            <span class="statbar__sub">42.4% net margin</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Conversion rate</span>
            <b class="statbar__val">4.8%</b>
            <span class="statbar__sub"><span class="kpi-badge--negative">-0.2pt</span> vs goal</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Total orders</span>
            <b class="statbar__val">3,842</b>
            <span class="statbar__sub"><span class="kpi-badge--positive">+6.4%</span> volume</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Average order value</span>
            <b class="statbar__val">$47.98</b>
            <span class="statbar__sub">Basket size: 2.1 items</span>
          </div>
        </section>

        <!-- Main Chart: Revenue Over Time -->
        <section class="card an-main" style="padding: 24px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 20px; flex-wrap:wrap; gap:12px;">
            <div>
              <h2 class="card__title" style="margin: 0 0 4px 0;">Revenue over time</h2>
              <div style="display:flex; align-items:baseline; gap: 8px;">
                <b style="font-size: 26px; font-weight: 700;">$39,500</b>
                <span class="kpi-badge--positive" style="font-size: 13px;">+7.6% vs previous period</span>
              </div>
            </div>

            <!-- Period Switcher -->
            <div class="view-toolbar__filters">
              <button class="view-filter-btn ${activePeriod === '7d' ? 'is-active' : ''}" data-period="7d">7 Days</button>
              <button class="view-filter-btn ${activePeriod === '30d' ? 'is-active' : ''}" data-period="30d">30 Days</button>
              <button class="view-filter-btn ${activePeriod === '12m' ? 'is-active' : ''}" data-period="12m">12 Months</button>
            </div>
          </div>

          <!-- Extended SVG Line/Area Chart -->
          <div style="width: 100%; height: 220px; position:relative;">
            <svg viewBox="0 0 800 200" style="width:100%; height:100%; overflow:visible;">
              <defs>
                <linearGradient id="an-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#2a6f9a" stop-opacity="0.35"/>
                  <stop offset="100%" stop-color="#2a6f9a" stop-opacity="0.0"/>
                </linearGradient>
              </defs>

              <!-- Grid horizontal rules -->
              <line x1="0" y1="40" x2="800" y2="40" stroke="var(--border-color)" stroke-dasharray="3 3"/>
              <line x1="0" y1="90" x2="800" y2="90" stroke="var(--border-color)" stroke-dasharray="3 3"/>
              <line x1="0" y1="140" x2="800" y2="140" stroke="var(--border-color)" stroke-dasharray="3 3"/>
              <line x1="0" y1="190" x2="800" y2="190" stroke="var(--border-color)"/>

              <!-- Previous period reference dashed line -->
              <path d="M0,150 Q120,130 240,145 T480,120 T720,110 T800,105" fill="none" stroke="var(--text-muted)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>

              <!-- Current period area fill -->
              <path d="M0,160 Q100,120 200,135 T400,95 T600,70 T800,45 L800,190 L0,190 Z" fill="url(#an-grad)"/>

              <!-- Current period solid line -->
              <path d="M0,160 Q100,120 200,135 T400,95 T600,70 T800,45" fill="none" stroke="#2a6f9a" stroke-width="3"/>

              <!-- Data markers -->
              <circle cx="200" cy="135" r="4" fill="#2a6f9a"/>
              <circle cx="400" cy="95" r="4" fill="#2a6f9a"/>
              <circle cx="600" cy="70" r="4" fill="#2a6f9a"/>
              <circle cx="800" cy="45" r="6" fill="#FF5722"/>
            </svg>
          </div>

          <div style="display:flex; justify-content:space-between; margin-top: 10px; font-size: 11px; color: var(--text-muted);">
            <span>Oct 1</span>
            <span>Oct 7</span>
            <span>Oct 14</span>
            <span>Oct 21</span>
            <span>Oct 28</span>
          </div>
        </section>

        <!-- Two Columns: Conversion Funnel & Channel Split -->
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 16px;">

          <!-- Conversion Funnel -->
          <section class="card an-funnel" style="padding: 24px;">
            <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: 20px;">
              <h2 class="card__title" style="margin: 0;">Conversion funnel</h2>
              <span class="text-muted" style="font-size:12px;">Last 30 days</span>
            </div>

            <!-- Funnel Stages -->
            <div style="display:flex; flex-direction:column; gap: 14px;">
              ${[
                { label: 'Store visits', count: '214,860', pct: 100, conv: '59.6%' },
                { label: 'Product catalog views', count: '128,100', pct: 60, conv: '32.8%' },
                { label: 'Added to shopping cart', count: '42,010', pct: 33, conv: '42.8%' },
                { label: 'Reached checkout', count: '18,000', pct: 20, conv: '21.3%' },
                { label: 'Orders completed', count: '3,842', pct: 10, conv: '4.8% total' }
              ].map(stage => `
                <div>
                  <div style="display:flex; justify-content:space-between; font-size: 13px; margin-bottom: 4px;">
                    <b>${stage.label}</b>
                    <span><b>${stage.count}</b> <span class="text-muted">(${stage.conv})</span></span>
                  </div>
                  <div style="height: 12px; background: rgba(0,0,0,0.06); border-radius: 6px; overflow:hidden;">
                    <div style="width: ${stage.pct}%; height:100%; background: var(--nav-tab-active-bg); border-radius:6px;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Online vs In Store Split & Devices -->
          <section class="card an-split" style="padding: 24px;">
            <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom: 20px;">
              <h2 class="card__title" style="margin: 0;">Online vs In Store</h2>
              <b style="font-size: 15px;">$184,320 total</b>
            </div>

            <!-- Split Bars -->
            <div style="display:flex; height: 32px; border-radius: 8px; overflow:hidden; margin-bottom: 20px;">
              <div style="width: 76%; background: #2a6f9a; display:flex; align-items:center; justify-content:center; color:#FFF; font-size:12px; font-weight:700;">
                Online 76%
              </div>
              <div style="width: 19%; background: #8ec3ea; display:flex; align-items:center; justify-content:center; color:#14202a; font-size:12px; font-weight:700;">
                Harbor 19%
              </div>
              <div style="width: 5%; background: #f6cfc7; display:flex; align-items:center; justify-content:center; color:#14202a; font-size:10px; font-weight:700;">
                5%
              </div>
            </div>

            <!-- Traffic Sources -->
            <h3 style="font-size: 13px; font-weight: 700; margin: 0 0 12px 0;">Traffic Channels</h3>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 13px;">
              <div style="padding: 10px; background: var(--card-light-bg); border-radius: 8px; border: 1px solid var(--border-color);">
                <div class="text-muted" style="font-size: 11px;">Direct & Search</div>
                <b>118,400 (55.1%)</b>
              </div>
              <div style="padding: 10px; background: var(--card-light-bg); border-radius: 8px; border: 1px solid var(--border-color);">
                <div class="text-muted" style="font-size: 11px;">Social (Instagram)</div>
                <b>52,100 (24.2%)</b>
              </div>
              <div style="padding: 10px; background: var(--card-light-bg); border-radius: 8px; border: 1px solid var(--border-color);">
                <div class="text-muted" style="font-size: 11px;">Email Campaigns</div>
                <b>28,400 (13.2%)</b>
              </div>
              <div style="padding: 10px; background: var(--card-light-bg); border-radius: 8px; border: 1px solid var(--border-color);">
                <div class="text-muted" style="font-size: 11px;">Referral & PR</div>
                <b>15,960 (7.5%)</b>
              </div>
            </div>
          </section>

        </div>

        <!-- Top Selling Products Table -->
        <section class="card table-card" style="padding: 0; overflow:hidden;">
          <div style="padding: 18px 24px; border-bottom: 1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
            <h2 class="card__title" style="margin: 0;">Top Selling Products</h2>
            <a href="#/products" class="btn btn--outline btn--sm">All Products</a>
          </div>
          <div class="table-wrap">
            <table class="table" style="font-size: 13.5px;">
              <thead>
                <tr>
                  <th style="width: 40px;">#</th>
                  <th>Product</th>
                  <th>Units Sold (30d)</th>
                  <th style="text-align:right">Revenue Generated</th>
                  <th style="text-align:right">Profit Contribution</th>
                </tr>
              </thead>
              <tbody>
                ${store.data.products.slice(0, 5).map((p, idx) => `
                  <tr>
                    <td><b>${idx + 1}</b></td>
                    <td><b>${p.name}</b> <span class="badge badge--neutral" style="margin-left:6px;">${p.category}</span></td>
                    <td><b>${p.sales30d}</b> units</td>
                    <td style="text-align:right"><b>$${(p.sales30d * p.price).toLocaleString()}</b></td>
                    <td style="text-align:right"><span class="kpi-badge--positive">+$${(p.sales30d * (p.price - p.cost)).toLocaleString()}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    `;

    // Period switcher
    container.querySelectorAll('.view-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activePeriod = btn.dataset.period;
        render();
      });
    });
  }

  render();
}
