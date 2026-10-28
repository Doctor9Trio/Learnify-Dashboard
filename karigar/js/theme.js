/**
 * theme.js — Zero-Flash Theme Controller for Karigar Service
 * Reverse-Engineered via REA Architecture
 */

const THEME_KEY = 'mender:theme';

export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  let theme = saved === 'dark' || saved === 'light' ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  applyTheme(theme);

  // Wire theme buttons in rail
  const opts = document.querySelectorAll('.theme__opt');
  opts.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextTheme = btn.dataset.theme;
      applyTheme(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
    });
  });

  // System color scheme change listener
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const currentStored = localStorage.getItem(THEME_KEY);
    if (!currentStored) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Keyboard shortcut 'T'
  window.addEventListener('keydown', (e) => {
    if ((e.key === 't' || e.key === 'T') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
      e.preventDefault();
      toggleTheme();
    }
  });
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const opts = document.querySelectorAll('.theme__opt');
  opts.forEach(opt => {
    opt.setAttribute('aria-pressed', opt.dataset.theme === theme ? 'true' : 'false');
  });
}

export function toggleTheme() {
  const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}
