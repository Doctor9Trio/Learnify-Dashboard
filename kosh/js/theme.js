/**
 * theme.js — Zero-Flash Dark/Light Mode Switcher
 */

const STORAGE_KEY = 'kosh:theme';

export function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY) || 'light';
  applyTheme(saved);

  const toggleBtn = document.querySelector('[data-action="toggle-theme"]');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme;
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}
