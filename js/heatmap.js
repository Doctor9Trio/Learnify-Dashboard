/**
 * heatmap.js — Visits By Time Heatmap
 * 4 rows × 7 cols, staggered fade-in animation
 */

const ROWS = [
  '12 AM – 8 AM',
  '8 AM – 12 PM',
  '12 PM – 4 PM',
  '4 PM – 12 AM',
];

const COLS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Intensity data [row][col] → 0-5
const INTENSITY_DATA = [
  // Mon Tue Wed Thu Fri Sat Sun
  [  1,  0,  1,  0,  1,  2,  1 ], // 12AM–8AM  (low traffic)
  [  4,  3,  4,  3,  4,  5,  3 ], // 8AM–12PM  (peak morning)
  [  3,  4,  3,  4,  3,  5,  4 ], // 12PM–4PM  (afternoon)
  [  5,  5,  5,  5,  5,  4,  4 ], // 4PM–12AM  (evening peak)
];

export function initHeatmap() {
  const grid = document.getElementById('heatmap-grid');
  if (!grid) return;

  grid.innerHTML = '';

  // Empty top-left corner
  const corner = document.createElement('div');
  corner.className = 'heatmap-col-header';
  grid.appendChild(corner);

  // Column headers
  COLS.forEach(col => {
    const th = document.createElement('div');
    th.className = 'heatmap-col-header';
    th.textContent = col;
    grid.appendChild(th);
  });

  // Rows
  INTENSITY_DATA.forEach((row, rowIdx) => {
    // Row label
    const label = document.createElement('div');
    label.className = 'heatmap-row-label';
    label.textContent = ROWS[rowIdx];
    grid.appendChild(label);

    // Cells
    row.forEach((level, colIdx) => {
      const cell = document.createElement('div');
      cell.className = 'heatmap-cell';
      cell.dataset.level = level;
      cell.setAttribute('title', `${ROWS[rowIdx]}, ${COLS[colIdx]}: ${getLevelLabel(level)}`);

      // Staggered animation delay
      const delay = rowIdx * 80 + colIdx * 18;
      cell.style.animationName    = 'heatFade';
      cell.style.animationDuration = '300ms';
      cell.style.animationFillMode = 'forwards';
      cell.style.animationDelay   = `${delay}ms`;

      grid.appendChild(cell);
    });
  });

  // Build legend
  buildLegend();
}

function buildLegend() {
  const legend = document.getElementById('heatmap-legend');
  if (!legend) return;

  legend.innerHTML = '';

  const zeroLabel = document.createElement('span');
  zeroLabel.textContent = '0';
  legend.appendChild(zeroLabel);

  for (let i = 0; i <= 5; i++) {
    const swatch = document.createElement('div');
    swatch.className = 'heatmap-legend__swatch';
    swatch.style.background = `var(--heatmap-${i})`;
    legend.appendChild(swatch);
  }

  const maxLabel = document.createElement('span');
  maxLabel.textContent = '11k+';
  legend.appendChild(maxLabel);
}

function getLevelLabel(level) {
  const labels = ['Very low', 'Low', 'Moderate', 'High', 'Very high', 'Peak'];
  return labels[level] || 'Unknown';
}
