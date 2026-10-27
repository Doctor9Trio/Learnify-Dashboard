/**
 * theme.js — Zero-Flash Theme & Rail Mode Controller for Parivahan OS
 * Reverse-Engineered via REA Architecture
 */

const THEME_KEY = 'noria:theme';
const RAIL_KEY = 'noria:rail';

export function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || '"light"';
  let theme = 'light';
  try {
    theme = JSON.parse(savedTheme);
  } catch (e) {
    theme = savedTheme;
  }

  if (theme === 'system') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  applyTheme(theme);

  // Restore collapsed rail state
  const isRail = localStorage.getItem(RAIL_KEY) === '1';
  document.documentElement.classList.toggle('is-rail', isRail);
  const railBtn = document.getElementById('btn-rail');
  if (railBtn) {
    railBtn.setAttribute('aria-pressed', isRail ? 'true' : 'false');
    railBtn.setAttribute('data-tip', isRail ? 'Expand sidebar  [' : 'Collapse sidebar  [');
  }

  // Wire theme toggle button in header (#btn-theme)
  const themeBtn = document.getElementById('btn-theme');
  if (themeBtn) {
    themeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, JSON.stringify(next));
    });
  }

  // Wire rail toggle button in sidebar (#btn-rail)
  if (railBtn) {
    railBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleRail();
    });
  }

  // Listen for system theme preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    try {
      const stored = JSON.parse(localStorage.getItem(THEME_KEY) || 'null');
      if (stored === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    } catch (err) {}
  });

  // Keyboard shortcut '[' to toggle sidebar rail
  window.addEventListener('keydown', (e) => {
    if (e.key === '[' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
      e.preventDefault();
      toggleRail();
    }
  });
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const themeBtn = document.getElementById('btn-theme');
  if (themeBtn) {
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
}

export function toggleRail() {
  const isRail = document.documentElement.classList.toggle('is-rail');
  localStorage.setItem(RAIL_KEY, isRail ? '1' : '0');
  const railBtn = document.getElementById('btn-rail');
  if (railBtn) {
    railBtn.setAttribute('aria-pressed', isRail ? 'true' : 'false');
    railBtn.setAttribute('data-tip', isRail ? 'Expand sidebar  [' : 'Collapse sidebar  [');
  }
}
