/**
 * automations.js — Workflows & Marketing Automations Page Controller
 * Renders workflow cards, SVG node diagrams, interactive on/off switches,
 * and execution run logs.
 */

import { store } from '../store.js';
import { showToast } from '../sheets-modal.js';

export function renderAutomations(container) {
  function render() {
    const automations = store.data.automations;

    container.innerHTML = `
      <div class="view-container">

        <!-- Statbar (4 KPIs) -->
        <section class="card statbar au-stats" style="--n:4" aria-label="Automations overview">
          <div class="statbar__cell">
            <span class="statbar__label">Active workflows</span>
            <b class="statbar__val">${automations.filter(a => a.active).length} of ${automations.length}</b>
            <span class="statbar__sub">Always running</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Executions (30d)</span>
            <b class="statbar__val">1,842</b>
            <span class="statbar__sub">Triggered events</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Recovery conversion</span>
            <b class="statbar__val">18.2%</b>
            <span class="statbar__sub"><span class="kpi-badge--positive">+3.4%</span> vs baseline</span>
          </div>
          <div class="statbar__cell">
            <span class="statbar__label">Attributed revenue</span>
            <b class="statbar__val">$6,420</b>
            <span class="statbar__sub">Automated recovery</span>
          </div>
        </section>

        <!-- Header -->
        <div class="view-toolbar">
          <h2 style="font-size: 18px; font-weight: 700; margin: 0;">Automations</h2>
          <button class="btn btn--filled" id="au-new-btn">
            <svg viewBox="0 0 24 24" style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2.5;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Create Workflow
          </button>
        </div>

        <!-- Workflow Cards Grid -->
        <div class="au-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px;">
          ${automations.map(a => `
            <article class="card au-card" data-id="${a.id}" style="padding: 20px; display:flex; flex-direction:column; justify-content:space-between; gap: 16px;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 8px;">
                  <b style="font-size: 15px;">${a.name}</b>
                  <!-- Switch -->
                  <label class="switch-toggle" style="position:relative; display:inline-block; width: 36px; height: 20px;">
                    <input type="checkbox" class="au-toggle" data-id="${a.id}" ${a.active ? 'checked' : ''} style="opacity:0; width:0; height:0;" />
                    <span class="slider" style="
                      position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0;
                      background-color: ${a.active ? '#22C55E' : 'rgba(0,0,0,0.15)'};
                      transition: .2s; border-radius: 20px;
                    ">
                      <span style="
                        position:absolute; content:''; height: 14px; width: 14px; left: ${a.active ? '19px' : '3px'}; bottom: 3px;
                        background-color: white; transition: .2s; border-radius: 50%;
                      "></span>
                    </span>
                  </label>
                </div>
                <p class="text-muted" style="font-size: 12.5px; margin: 0 0 16px 0; line-height: 1.4;">
                  ${a.desc}
                </p>

                <!-- SVG Node Flow Diagram -->
                <div class="au-diagram" style="background: var(--bg-page); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px; display:flex; align-items:center; justify-content:space-between; font-size:11px;">
                  <div style="background: var(--card-light-bg); padding: 4px 8px; border-radius: 6px; font-weight:600; border: 1px solid var(--border-color);">
                    ${a.trigger}
                  </div>
                  <svg viewBox="0 0 24 24" style="width:16px;height:16px;stroke:var(--text-muted);fill:none;stroke-width:2;"><polyline points="9 18 15 12 9 6"/></svg>
                  <div style="background: var(--nav-tab-active-bg); color: var(--nav-tab-active-text); padding: 4px 8px; border-radius: 6px; font-weight:600;">
                    ${a.action}
                  </div>
                </div>
              </div>

              <!-- Card Footer Stats -->
              <div style="display:flex; justify-content:space-between; align-items:center; padding-top: 12px; border-top: 1px solid var(--border-color); font-size: 12px;">
                <span class="text-muted">Total runs: <b>${a.runs.toLocaleString()}</b></span>
                <span class="kpi-badge--positive">${a.conversionRate}% converted</span>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Recent Runs Card -->
        <div class="card table-card" style="margin-top: 16px;">
          <div class="card__head" style="padding: 16px 20px; border-bottom: 1px solid var(--border-color);">
            <h3 style="font-size: 14px; font-weight: 700; margin:0;">Recent Workflow Executions</h3>
          </div>
          <div class="table-wrap">
            <table class="table" style="font-size: 13px;">
              <thead>
                <tr>
                  <th>Workflow</th>
                  <th>Trigger Event</th>
                  <th>Customer</th>
                  <th>Time</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Abandoned Cart Recovery</b></td>
                  <td>Cart idle 1 hour</td>
                  <td>alex.mercer@gmail.com</td>
                  <td class="text-muted">14m ago</td>
                  <td><span class="badge badge--success">Discount sent</span></td>
                </tr>
                <tr>
                  <td><b>Low Stock Reorder Notification</b></td>
                  <td>Raw Selvedge Denim stock &lt; 5</td>
                  <td>Internal Slack #inventory</td>
                  <td class="text-muted">2h ago</td>
                  <td><span class="badge badge--success">Alert posted</span></td>
                </tr>
                <tr>
                  <td><b>Welcome Onboarding Series</b></td>
                  <td>Customer account created</td>
                  <td>devon.p@gmail.com</td>
                  <td class="text-muted">5h ago</td>
                  <td><span class="badge badge--success">Email 1 of 3 delivered</span></td>
                </tr>
                <tr>
                  <td><b>Customer Win-back Campaign</b></td>
                  <td>60 days without order</td>
                  <td>sophia.l@nordic.se</td>
                  <td class="text-muted">1d ago</td>
                  <td><span class="badge badge--neutral">Skipped (Opt-out)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;

    // Toggle switch listeners
    container.querySelectorAll('.au-toggle').forEach(input => {
      input.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        const active = e.target.checked;
        store.toggleAutomation(id);
        showToast(`Automation ${active ? 'enabled' : 'paused'}`, active ? 'success' : 'info');
        render();
      });
    });

    container.querySelector('#au-new-btn')?.addEventListener('click', () => {
      showToast('Visual Workflow Builder opened', 'info');
    });
  }

  render();
}
