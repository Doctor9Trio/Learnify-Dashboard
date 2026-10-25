/**
 * live-counter.js — Pulsing "live now" counter
 * Slowly increments/decrements randomly, like a real live user count
 */

let liveCount = 1484;

export function initLiveCounter() {
  const els = document.querySelectorAll('.live-count');
  if (!els.length) return;

  // Update every 2.5s
  setInterval(() => {
    // Random walk: ±1 to ±4
    const delta = Math.floor(Math.random() * 8) - 3;
    liveCount   = Math.max(1200, Math.min(2000, liveCount + delta));
    const formatted = liveCount.toLocaleString();
    els.forEach(el => {
      el.textContent = formatted;
    });
  }, 2500);
}
