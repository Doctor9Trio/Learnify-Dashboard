/**
 * chart-bar.js — Revenue Bar Chart
 * Pure SVG, no libraries.
 * Hatched historical bars, solid current bar, tooltip, year toggle, tab data update.
 */

import { getCurrentTabData } from './tabs.js';

const MONTHS  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const CURRENT_MONTH_IDX = 9; // October (0-indexed)

// Chart layout constants
const CHART_PADDING_LEFT   = 44;
const CHART_PADDING_RIGHT  = 56;
const CHART_PADDING_TOP    = 16;
const CHART_PADDING_BOTTOM = 28;
const BAR_WIDTH_RATIO      = 0.62; // bar vs slot width

let currentYear = '2026';
let currentData = null;
let svgEl       = null;
let tooltipEl   = null;

export function initBarChart() {
  svgEl     = document.getElementById('revenue-chart-svg');
  tooltipEl = document.getElementById('chart-tooltip');
  if (!svgEl) return;

  // Build SVG defs if not present in markup
  if (!svgEl.querySelector('#hatch')) {
    buildDefs(svgEl);
  }

  // Initial render with overview data
  currentData = getCurrentTabData();
  renderChart(currentData.chartData, currentData.chartDataPrev);

  // Year toggle
  document.querySelectorAll('.year-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.year-toggle__btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentYear = btn.dataset.year;
      const data = currentYear === '2026' ? currentData.chartData : currentData.chartDataPrev;
      animateBars(data);
    });
  });

  // Listen for tab changes
  document.addEventListener('tabchange', (e) => {
    currentData = e.detail;
    const data  = currentYear === '2026' ? currentData.chartData : currentData.chartDataPrev;
    animateBars(data);
  });

  // Handle window resizing
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (currentData) {
        renderChart(currentData.chartData, currentData.chartDataPrev);
      }
    }, 150);
  });
}

function buildDefs(svg) {
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

  // Diagonal hatch pattern for historical bars
  const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
  pattern.setAttribute('id', 'hatch');
  pattern.setAttribute('patternUnits', 'userSpaceOnUse');
  pattern.setAttribute('width', '6');
  pattern.setAttribute('height', '6');
  pattern.setAttribute('patternTransform', 'rotate(45)');

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', '0'); line.setAttribute('y1', '0');
  line.setAttribute('x2', '0'); line.setAttribute('y2', '6');
  line.setAttribute('stroke', 'var(--chart-bar-hatch-fg)');
  line.setAttribute('stroke-width', '2.5');
  pattern.appendChild(line);

  // Hatch bg fill
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('width', '6');
  rect.setAttribute('height', '6');
  rect.setAttribute('fill', 'var(--chart-bar-hatch-bg)');
  pattern.insertBefore(rect, line);

  defs.appendChild(pattern);
  svg.appendChild(defs);
}

function renderChart(data2026, data2025) {
  if (!svgEl) return;
  const container = svgEl.querySelector('#chart-elements') || svgEl;
  const { width, height } = svgEl.getBoundingClientRect();
  const W = width  || 600;
  const H = height || 260;

  svgEl.setAttribute('viewBox', `0 0 ${W} ${H}`);
  container.innerHTML = '';

  const innerW = W - CHART_PADDING_LEFT - CHART_PADDING_RIGHT;
  const innerH = H - CHART_PADDING_TOP  - CHART_PADDING_BOTTOM;

  const data   = currentYear === '2026' ? data2026 : data2025;
  const maxVal = Math.max(...data2026, ...data2025, 1);
  const yMax   = Math.ceil(maxVal / 15000) * 15000;

  const yTicks = [0, 15000, 30000, 45000, 60000].filter(v => v <= yMax + 5000);

  // ── Y-axis grid lines & labels ────────────────────────────
  yTicks.forEach(tick => {
    const y = yToPixel(tick, yMax, innerH);

    // Grid line
    const line = makeSvgEl('line', {
      x1: CHART_PADDING_LEFT, y1: CHART_PADDING_TOP + y,
      x2: CHART_PADDING_LEFT + innerW, y2: CHART_PADDING_TOP + y,
      stroke: 'var(--chart-grid-line)',
      'stroke-width': 1,
      'stroke-dasharray': tick === 0 ? 'none' : '4 4',
    });
    container.appendChild(line);

    // Label
    const label = makeSvgEl('text', {
      x: CHART_PADDING_LEFT - 6,
      y: CHART_PADDING_TOP + y + 4,
      'text-anchor': 'end',
      fill: 'var(--chart-axis-text)',
      'font-size': '11',
      'font-family': 'Inter, sans-serif',
    });
    label.textContent = tick === 0 ? '$0' : `$${tick / 1000}k`;
    container.appendChild(label);
  });

  // ── AVG line ─────────────────────────────────────────────
  const avgVal = data2026.filter(v => v > 0).reduce((a, b) => a + b, 0) / data2026.filter(v => v > 0).length;
  const avgY   = CHART_PADDING_TOP + yToPixel(avgVal, yMax, innerH);

  const avgLine = makeSvgEl('line', {
    x1: CHART_PADDING_LEFT, y1: avgY,
    x2: CHART_PADDING_LEFT + innerW, y2: avgY,
    stroke: 'var(--chart-avg-line)',
    'stroke-width': 1,
    'stroke-dasharray': '6 4',
  });
  container.appendChild(avgLine);

  const avgLabel = makeSvgEl('text', {
    x: CHART_PADDING_LEFT + innerW + 4,
    y: avgY + 4,
    fill: 'var(--chart-axis-text)',
    'font-size': '10',
    'font-family': 'Inter, sans-serif',
  });
  avgLabel.textContent = `avg $${Math.round(avgVal / 1000)}k`;
  container.appendChild(avgLabel);

  // ── Bars ─────────────────────────────────────────────────
  const slotW  = innerW / MONTHS.length;
  const barW   = slotW * BAR_WIDTH_RATIO;
  const barOff = (slotW - barW) / 2;

  MONTHS.forEach((month, i) => {
    const value     = data[i];
    const isCurrent = (i === CURRENT_MONTH_IDX && currentYear === '2026');
    const isFuture  = (i > CURRENT_MONTH_IDX && currentYear === '2026');
    const isEmpty   = value === 0;

    if (isEmpty && !isFuture) return;

    const x      = CHART_PADDING_LEFT + slotW * i + barOff;
    const barH   = isEmpty ? 0 : (value / yMax) * innerH;
    const barY   = CHART_PADDING_TOP + innerH - barH;

    // Determine bar style
    let fill;
    if (isCurrent)     fill = 'var(--chart-bar-current)';
    else if (isFuture) fill = 'var(--chart-bar-forecast)';
    else               fill = 'url(#hatch)';

    // Base rect (for hover hit area)
    const hitRect = makeSvgEl('rect', {
      x, y: CHART_PADDING_TOP,
      width: barW, height: innerH,
      fill: 'transparent',
      'data-index': i,
    });

    // Visible bar
    const bar = makeSvgEl('rect', {
      x, y: barY,
      width: barW,
      height: barH,
      fill,
      rx: '3', ry: '3',
      'class': `chart-bar chart-bar--${isCurrent ? 'current' : isFuture ? 'forecast' : 'history'}`,
      'data-index': i,
      'data-value': value,
      style: `transition: height 400ms ease, y 400ms ease`,
    });

    // Hover events on hit rect
    hitRect.addEventListener('mouseenter', (e) => showTooltip(e, i, value));
    hitRect.addEventListener('mouseleave',  ()  => hideTooltip());

    container.appendChild(bar);
    container.appendChild(hitRect);

    // X-axis label
    const xLabel = makeSvgEl('text', {
      x: x + barW / 2,
      y: CHART_PADDING_TOP + innerH + 18,
      'text-anchor': 'middle',
      fill: i === CURRENT_MONTH_IDX && currentYear === '2026' ? 'var(--text-primary)' : 'var(--chart-axis-text)',
      'font-size': '11',
      'font-weight': i === CURRENT_MONTH_IDX && currentYear === '2026' ? '600' : '400',
      'font-family': 'Inter, sans-serif',
    });
    xLabel.textContent = month;
    container.appendChild(xLabel);
  });
}

function animateBars(newData) {
  if (!svgEl) return;
  const { height } = svgEl.getBoundingClientRect();
  const H      = height || 260;
  const innerH = H - CHART_PADDING_TOP - CHART_PADDING_BOTTOM;
  const maxVal = 60000;

  svgEl.querySelectorAll('.chart-bar').forEach(bar => {
    const i     = parseInt(bar.dataset.index);
    const value = newData[i] || 0;
    const barH  = (value / maxVal) * innerH;
    const barY  = CHART_PADDING_TOP + innerH - barH;

    bar.style.transition = 'height 400ms ease, y 400ms ease';
    bar.setAttribute('height', barH);
    bar.setAttribute('y', barY);
    bar.dataset.value = value;
  });
}

function showTooltip(e, index, value) {
  if (!tooltipEl || value === 0) return;
  const d   = currentData;
  const pct = d.chartYtdPct ? d.chartYtdPct[index] : '';

  tooltipEl.innerHTML = `
    <span class="chart-tooltip__month">${MONTHS[index]} ${currentYear}</span>
    <div class="chart-tooltip__row">
      <span class="chart-tooltip__label">Revenue</span>
      <span class="chart-tooltip__value">$${value.toLocaleString()}</span>
    </div>
    <div class="chart-tooltip__row">
      <span class="chart-tooltip__label">Orders</span>
      <span class="chart-tooltip__value">${d.chartOrders?.[index] || '—'}</span>
    </div>
    ${pct ? `<div class="chart-tooltip__row">
      <span class="chart-tooltip__label">vs last year</span>
      <span class="chart-tooltip__positive">${pct}</span>
    </div>` : ''}
  `;

  tooltipEl.classList.add('is-visible');

  // Position relative to chart wrapper
  const wrapper = svgEl.parentElement;
  const wRect   = wrapper.getBoundingClientRect();
  const svgRect = svgEl.getBoundingClientRect();

  const slotW   = (svgRect.width - CHART_PADDING_LEFT - CHART_PADDING_RIGHT) / MONTHS.length;
  const barX    = CHART_PADDING_LEFT + slotW * index + slotW / 2;

  const tooltipWidth = 150;
  let leftPos = barX - tooltipWidth / 2;
  leftPos = Math.max(8, Math.min(wRect.width - tooltipWidth - 8, leftPos));

  const maxVal = 60000;
  const innerH = svgRect.height - CHART_PADDING_TOP - CHART_PADDING_BOTTOM;
  const barH   = (value / maxVal) * innerH;
  const barTopY = CHART_PADDING_TOP + innerH - barH;
  const topPos = Math.max(8, barTopY - 105);

  tooltipEl.style.left   = `${leftPos}px`;
  tooltipEl.style.top    = `${topPos}px`;
  tooltipEl.style.bottom = 'auto';
}

function hideTooltip() {
  tooltipEl?.classList.remove('is-visible');
}

// ── SVG helper ───────────────────────────────────────────────
function makeSvgEl(tag, attrs = {}) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function yToPixel(value, yMax, innerH) {
  return innerH - (value / yMax) * innerH;
}
