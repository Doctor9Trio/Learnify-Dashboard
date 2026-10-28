/**
 * theme.js — Zero-Flash Theme Controller for Dantika Clinic
 */

const STORAGE_KEY = 'ivora:theme';

export function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY) || '"light"';
  let theme = 'light';
  try {
    theme = JSON.parse(saved);
  } catch (e) {
    theme = saved;
  }

  if (theme === 'system') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  applyTheme(theme);

  // Wire any theme toggle buttons on the page
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('[data-act="theme"], .dock__theme');
    if (toggle) {
      e.preventDefault();
      const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  });
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}
