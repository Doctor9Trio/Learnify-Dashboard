/**
 * main.js — Application Entry Point
 * Orchestrates router, theme, global overlays (Finder, Bell, Sheets, Modals),
 * and all 13 SPA page renderers.
 */

import { initTheme }         from './theme.js';
import { initTabs }          from './tabs.js';
import { initGauge }         from './gauge.js';
import { initBarChart }      from './chart-bar.js';
import { initHeatmap }       from './heatmap.js';
import { initDonut }         from './donut.js';
import { initLiveCounter }   from './live-counter.js';

// Router & Overlays
import { initRouter, registerPage } from './router.js';
import { initFinder }        from './finder.js';
import { initNotifications } from './notifications.js';
import { initOverlays }      from './sheets-modal.js';

// Page Renderers
import { renderOrders }       from './pages/orders.js';
import { renderProducts }     from './pages/products.js';
import { renderCustomers }    from './pages/customers.js';
import { renderMessages }     from './pages/messages.js';
import { renderEmail }        from './pages/email.js';
import { renderAutomations }  from './pages/automations.js';
import { renderAnalytics }    from './pages/analytics.js';
import { renderIntegrations } from './pages/integrations.js';
import { renderWorkspace }    from './pages/workspace.js';
import { renderHelp }         from './pages/help.js';
import { renderFeedback }     from './pages/feedback.js';
import { renderSettings }     from './pages/settings.js';

// Apply theme IMMEDIATELY (before paint)
initTheme();

function initCardAnimations() {
  const cards = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -20px 0px', threshold: 0.05 });

    cards.forEach(card => observer.observe(card));
  } else {
    cards.forEach(card => card.classList.add('is-visible'));
  }

  // Safety fallback: guarantee all cards are visible after short delay
  setTimeout(() => {
    cards.forEach(card => card.classList.add('is-visible'));
  }, 350);
}

function startApp() {
  // 1. Register All 12 Secondary Page Renderers
  registerPage('orders', renderOrders);
  registerPage('products', renderProducts);
  registerPage('customers', renderCustomers);
  registerPage('messages', renderMessages);
  registerPage('email', renderEmail);
  registerPage('automations', renderAutomations);
  registerPage('analytics', renderAnalytics);
  registerPage('integrations', renderIntegrations);
  registerPage('workspace', renderWorkspace);
  registerPage('help', renderHelp);
  registerPage('feedback', renderFeedback);
  registerPage('settings', renderSettings);

  // 2. Overlays & Router Initialisation
  initOverlays();
  initFinder();
  initNotifications();
  initRouter();

  // 3. Dashboard Core Components
  initCardAnimations();
  initTabs();
  initGauge();
  initHeatmap();
  initDonut();
  initLiveCounter();

  // Bar chart (DOM layout ready)
  requestAnimationFrame(() => {
    initBarChart();
  });

  // Mini KPI Charts
  buildMiniCircle();
  buildSparkline();
  buildMiniBars();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

// ── Mini Charts (inline in KPI cards) ───────────────────────

function buildMiniCircle() {
  const fill = document.querySelector('.mini-circle__fill');
  if (!fill) return;
  const r    = 19;
  const circ = 2 * Math.PI * r;
  const pct  = 0.77;
  fill.style.strokeDasharray  = circ.toFixed(2);
  fill.style.strokeDashoffset = circ.toFixed(2);
  setTimeout(() => {
    fill.style.transition = 'stroke-dashoffset 800ms cubic-bezier(0.4,0,0.2,1)';
    fill.style.strokeDashoffset = (circ - (pct * circ)).toFixed(2);
  }, 600);
}

function buildSparkline() {
  const path = document.querySelector('.mini-sparkline__path');
  const area = document.querySelector('.mini-sparkline__area');
  const points = [[0,28],[16,24],[32,26],[48,18],[64,14],[80,10]];
  const lineD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
  if (path) path.setAttribute('d', lineD);
  if (area) {
    const areaD = `${lineD} L80,36 L0,36 Z`;
    area.setAttribute('d', areaD);
  }
}

function buildMiniBars() {
  const bars = document.querySelectorAll('.mini-bar-chart__bar');
  const heights = [0.9, 0.75, 0.85, 0.6, 0.7, 0.8, 0.55, 0.65];
  bars.forEach((bar, i) => {
    bar.style.height = `${Math.round(heights[i] * 36)}px`;
  });
}
