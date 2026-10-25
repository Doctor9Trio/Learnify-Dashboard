/**
 * tabs.js — Overview / Online / In Store tab switching
 * Updates all data-bound elements + re-animates gauge
 */

import { animateGauge } from './gauge.js';

// ── Complete dataset for each tab ────────────────────────────
const TAB_DATA = {
  overview: {
    activeSales:        '$48,320',
    activeSalesPct:     '14.2%',
    activeSalesDir:     'up',
    revenue:            '$39,500',
    revenuePct:         '7.6%',
    revenueDir:         'up',
    units:              '3,842',
    unitsPct:           '6.4%',
    unitsDir:           'up',
    conversion:         '4.8%',
    conversionPct:      '0.2 pt',
    conversionDir:      'down',
    gaugeScore:         86,
    gaugeDelta:         '+3',
    gaugeDeltaDir:      'up',
    gaugeStatus:        'Ahead of plan',
    gaugeDesc:          'Both channels beat last month. Online did most of the lifting.',
    revenueYTD:         '$300,000',
    // Monthly bar chart values Jan–Dec (0 = no data yet)
    chartData: [22000, 25000, 28000, 30000, 32000, 35000, 38000, 36000, 34000, 39500, 0, 0],
    chartDataPrev: [18000, 20000, 22000, 24000, 26000, 28000, 30000, 28000, 26000, 27000, 29000, 31000],
    chartOrders:  [312,   345,   398,   410,   440,   480,   510,   490,   460,   556, 0, 0],
    chartYtdPct:  ['+22%','+25%','+27%','+25%','+23%','+25%','+27%','+29%','+31%','+29.5%','',''],
    totalVisits:  '214,860',
    visitsPct:    '8.5%',
    visitsDir:    'up',
  },
  online: {
    activeSales:        '$31,140',
    activeSalesPct:     '18.6%',
    activeSalesDir:     'up',
    revenue:            '$26,100',
    revenuePct:         '9.7%',
    revenueDir:         'up',
    units:              '2,316',
    unitsPct:           '9.8%',
    unitsDir:           'up',
    conversion:         '3.9%',
    conversionPct:      '0.4 pt',
    conversionDir:      'down',
    gaugeScore:         91,
    gaugeDelta:         '+6',
    gaugeDeltaDir:      'up',
    gaugeStatus:        'Online is carrying the quarter',
    gaugeDesc:          'Mobile checkout is converting better since the new payment page.',
    revenueYTD:         '$191,000',
    chartData: [14000, 16000, 18000, 19000, 20000, 22000, 24000, 23000, 21000, 26100, 0, 0],
    chartDataPrev: [11000, 12000, 13000, 14000, 15000, 16000, 17000, 16000, 15000, 16000, 17000, 18000],
    chartOrders:  [204,   222,   258,   266,   285,   308,   330,   314,   290,   408, 0, 0],
    chartYtdPct:  ['+27%','+33%','+38%','+36%','+33%','+38%','+41%','+44%','+40%','+40.3%','',''],
    totalVisits:  '162,400',
    visitsPct:    '12.1%',
    visitsDir:    'up',
  },
  instore: {
    activeSales:        '$17,180',
    activeSalesPct:     '8.2%',
    activeSalesDir:     'up',
    revenue:            '$13,400',
    revenuePct:         '4.1%',
    revenueDir:         'up',
    units:              '1,526',
    unitsPct:           '2.1%',
    unitsDir:           'up',
    conversion:         '5.9%',
    conversionPct:      '0.1 pt',
    conversionDir:      'up',
    gaugeScore:         74,
    gaugeDelta:         '-2',
    gaugeDeltaDir:      'down',
    gaugeStatus:        'Behind plan',
    gaugeDesc:          'Shops slightly behind plan. Weekday footfall dipped at Harbor.',
    revenueYTD:         '$109,000',
    chartData: [8000, 9000, 10000, 11000, 12000, 13000, 14000, 13000, 13000, 13400, 0, 0],
    chartDataPrev: [7000, 8000, 9000, 10000, 11000, 12000, 13000, 12000, 11000, 11000, 12000, 13000],
    chartOrders:  [108,  123,  140,  144,   155,   172,   180,  176,   170,   148,  0,   0],
    chartYtdPct:  ['+14%','+13%','+11%','+10%','+9%','+8%','+8%','+8%','+18%','+21.8%','',''],
    totalVisits:  '41,440',
    visitsPct:    '3.2%',
    visitsDir:    'up',
  },
};

let currentTab = 'overview';

export function initTabs() {
  const tabs = document.querySelectorAll('.subnav__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.tab;
      if (key === currentTab) return;
      currentTab = key;

      // Update active state
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      // Apply data
      applyTabData(TAB_DATA[key]);
    });
  });
}

export function getCurrentTabData() {
  return TAB_DATA[currentTab];
}

export function getTabData(key) {
  return TAB_DATA[key];
}

function applyTabData(d) {
  // ── KPI Cards ──────────────────────────────────────────────
  setText('kpi-active-sales',     d.activeSales);
  setBadge('kpi-active-sales-badge', d.activeSalesPct, d.activeSalesDir);

  setText('kpi-revenue',          d.revenue);
  setBadge('kpi-revenue-badge',   d.revenuePct, d.revenueDir);

  setText('kpi-units',            d.units);
  setBadge('kpi-units-badge',     d.unitsPct, d.unitsDir);

  setText('kpi-conversion',       d.conversion);
  setBadge('kpi-conversion-badge',d.conversionPct, d.conversionDir);

  // ── Gauge ──────────────────────────────────────────────────
  animateGauge(d.gaugeScore);
  setGaugeDelta(d.gaugeDelta, d.gaugeDeltaDir);
  setText('gauge-status-title',   d.gaugeStatus);
  setText('gauge-status-desc',    d.gaugeDesc);

  // ── Revenue chart ──────────────────────────────────────────
  setText('chart-ytd', d.revenueYTD + ' so far this year');
  // Chart bars update handled by chart-bar.js listening to a custom event
  document.dispatchEvent(new CustomEvent('tabchange', { detail: d }));

  // ── Total visits ───────────────────────────────────────────
  setText('total-visits-value', d.totalVisits);
  setBadge('total-visits-badge', d.visitsPct, d.visitsDir);
}

// ── Helpers ─────────────────────────────────────────────────

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setGaugeDelta(delta, dir) {
  const el = document.getElementById('gauge-delta');
  if (!el) return;
  const isDown = dir === 'down';
  el.className = 'gauge-delta' + (isDown ? ' gauge-delta--negative' : '');
  el.innerHTML = `${createArrowSvg(dir).outerHTML}${delta}`;
}

function setBadge(id, pct, dir) {
  const el = document.getElementById(id);
  if (!el) return;
  const isDown = dir === 'down';
  el.className = 'kpi-badge ' + (isDown ? 'kpi-badge--negative' : 'kpi-badge--positive');
  el.innerHTML = `${createArrowSvg(dir).outerHTML}${isDown ? '−' : '+'}${pct}`;
}

function createArrowSvg(dir) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  path.setAttribute('points', dir === 'up' ? '18 15 12 9 6 15' : '6 9 12 15 18 9');
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'currentColor');
  path.setAttribute('stroke-width', '2.5');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(path);
  return svg;
}
