/**
 * gauge.js — SVG Sales Performance Gauge
 * Semicircle arc, animated via stroke-dashoffset
 */

// Arc geometry
const CX = 110;          // SVG center X
const CY = 120;          // SVG center Y
const RADIUS = 84;       // Arc radius
const CIRCUMFERENCE = Math.PI * RADIUS;  // Semicircle = π*r

let currentScore = 0;

export function initGauge() {
  buildGaugeSVG();
  // Initial animation after short delay
  setTimeout(() => animateGauge(86), 400);
}

export function animateGauge(targetScore) {
  const fill = document.getElementById('gauge-fill-arc');
  const dot  = document.getElementById('gauge-dot');
  const scoreEl = document.getElementById('gauge-score');
  if (!fill || !dot) return;

  const startScore = currentScore;
  const startTime = performance.now();
  const duration = 1200;

  const targetOffset = CIRCUMFERENCE - (targetScore / 100) * CIRCUMFERENCE;

  // Set dasharray on first call
  fill.style.strokeDasharray = CIRCUMFERENCE;
  if (!fill.style.strokeDashoffset) {
    fill.style.strokeDashoffset = CIRCUMFERENCE;
  }

  // Animate arc stroke
  requestAnimationFrame(() => {
    fill.style.transition = 'stroke-dashoffset 1200ms cubic-bezier(0.4, 0, 0.2, 1)';
    fill.style.strokeDashoffset = targetOffset;
  });

  // Smooth frame-by-frame interpolation for dot and score counter
  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    // Cubic bezier ease-out approximation
    const ease = 1 - Math.pow(1 - progress, 3);
    const scoreNow = startScore + (targetScore - startScore) * ease;

    // Dot coordinates along semicircle arc
    const angleRad = (scoreNow / 100) * Math.PI;
    const cx = CX - RADIUS * Math.cos(angleRad);
    const cy = CY - RADIUS * Math.sin(angleRad);
    dot.setAttribute('cx', cx.toFixed(2));
    dot.setAttribute('cy', cy.toFixed(2));

    // Update score number
    if (scoreEl) {
      scoreEl.textContent = Math.round(scoreNow);
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      currentScore = targetScore;
      if (scoreEl) scoreEl.textContent = targetScore;
    }
  }

  requestAnimationFrame(step);
}

function buildGaugeSVG() {
  const svg = document.getElementById('gauge-svg');
  if (!svg) return;

  svg.setAttribute('viewBox', `0 0 ${CX * 2} ${CY + 10}`);
  svg.innerHTML = '';

  // ── Tick marks (radiating outside the arc) ────────────────
  const TICKS = 26;
  const innerR = RADIUS + 9;
  const outerR = RADIUS + 16;
  for (let i = 0; i <= TICKS; i++) {
    const angle = Math.PI + (Math.PI / TICKS) * i;
    const x1 = CX + innerR * Math.cos(angle);
    const y1 = CY + innerR * Math.sin(angle);
    const x2 = CX + outerR * Math.cos(angle);
    const y2 = CY + outerR * Math.sin(angle);
    const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    tick.setAttribute('x1', x1.toFixed(2));
    tick.setAttribute('y1', y1.toFixed(2));
    tick.setAttribute('x2', x2.toFixed(2));
    tick.setAttribute('y2', y2.toFixed(2));
    tick.setAttribute('class', 'gauge-tick');
    svg.appendChild(tick);
  }

  // ── Track arc (background) ──────────────────────────────────
  const trackPath = semicirclePath(CX, CY, RADIUS);
  const track = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  track.setAttribute('d', trackPath);
  track.setAttribute('class', 'gauge-track');
  track.style.strokeDasharray  = CIRCUMFERENCE;
  track.style.strokeDashoffset = 0;
  svg.appendChild(track);

  // ── Fill arc ────────────────────────────────────────────────
  const fill = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  fill.setAttribute('d', trackPath);
  fill.setAttribute('class', 'gauge-fill');
  fill.setAttribute('id', 'gauge-fill-arc');
  fill.style.strokeDasharray  = CIRCUMFERENCE;
  fill.style.strokeDashoffset = CIRCUMFERENCE; // start at 0%
  svg.appendChild(fill);

  // ── Dot ─────────────────────────────────────────────────────
  const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('r', '8');
  dot.setAttribute('class', 'gauge-dot');
  dot.setAttribute('id', 'gauge-dot');
  // Start at 0% position (left end of arc: CX - RADIUS, CY)
  dot.setAttribute('cx', (CX - RADIUS).toFixed(2));
  dot.setAttribute('cy', CY.toFixed(2));
  svg.appendChild(dot);
}

function semicirclePath(cx, cy, r) {
  // Semicircle from (cx - r, cy) to (cx + r, cy) going upward
  return `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
}
