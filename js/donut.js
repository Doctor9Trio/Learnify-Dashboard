/**
 * donut.js — Total Visits Donut Chart (pure SVG)
 * 3 segments, animated stroke-dashoffset draw
 */

const SEGMENTS = [
  { key: 'website',      pct: 76, className: 'donut-segment--website',      label: 'Website',        count: '162,400' },
  { key: 'instore',      pct: 19, className: 'donut-segment--instore',       label: 'In store',       count: '41,440'  },
  { key: 'clickcollect', pct:  5, className: 'donut-segment--clickcollect',  label: 'Click & collect', count: '11,020' },
];

const RADIUS        = 38;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const GAP_DEG       = 2; // degrees gap between segments
const GAP_FRAC      = GAP_DEG / 360;

export function initDonut() {
  buildDonut();
  // Animate after short delay
  setTimeout(() => animateDonut(), 500);
}

function buildDonut() {
  const svg = document.getElementById('donut-svg');
  if (!svg) return;

  const cx = 55, cy = 55;
  svg.setAttribute('viewBox', '0 0 110 110');
  svg.innerHTML = '';

  let offset = 0; // running fraction (0 to 1)

  SEGMENTS.forEach((seg, i) => {
    const frac   = seg.pct / 100;
    const dash   = Math.max(0, CIRCUMFERENCE * frac - GAP_FRAC * CIRCUMFERENCE);
    const gap    = CIRCUMFERENCE - dash;
    const strokeOffset = - (offset * CIRCUMFERENCE);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r',  RADIUS);
    circle.setAttribute('class', `donut-segment ${seg.className}`);
    circle.setAttribute('id', `donut-seg-${seg.key}`);
    circle.dataset.targetDash = dash.toFixed(2);
    circle.dataset.targetGap  = gap.toFixed(2);

    // Start collapsed for smooth clockwise draw
    circle.style.strokeDasharray  = `0 ${CIRCUMFERENCE.toFixed(2)}`;
    circle.style.strokeDashoffset = strokeOffset.toFixed(2);

    svg.appendChild(circle);
    offset += frac;
  });
}

function animateDonut() {
  SEGMENTS.forEach((seg, i) => {
    const el = document.getElementById(`donut-seg-${seg.key}`);
    if (!el) return;

    setTimeout(() => {
      el.style.transition = `stroke-dasharray 800ms cubic-bezier(0.4, 0, 0.2, 1)`;
      el.style.strokeDasharray = `${el.dataset.targetDash} ${el.dataset.targetGap}`;
    }, i * 150);
  });
}
