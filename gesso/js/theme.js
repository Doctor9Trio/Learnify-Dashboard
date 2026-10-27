/**
 * theme.js — Zero-Flash Theme Controller for Srijan Studio
 * Reverse-Engineered via REA Architecture
 */

const THEME_KEY = 'gesso:theme';

export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  let theme = saved === 'dark' || saved === 'light' ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  applyTheme(theme);

  // System color scheme change listener
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const currentStored = localStorage.getItem(THEME_KEY);
    if (!currentStored) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Keyboard shortcut 'T' to toggle theme
  window.addEventListener('keydown', (e) => {
    if ((e.key === 't' || e.key === 'T') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
      e.preventDefault();
      toggleTheme();
    }
  });
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

export function toggleTheme() {
  const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}
