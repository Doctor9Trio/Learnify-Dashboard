/**
 * theme.js — Zero-Flash Theme Controller for Daksh Dev Portfolio
 * Reverse-Engineered via REA Modular Architecture
 * Handles Deep Space Dark / Clean Light Mode & Storage Sync.
 */

const THEME_KEYS = ['portfolio:theme', 'daksh:theme'];

export function getStoredTheme() {
  for (const key of THEME_KEYS) {
    try {
      const val = localStorage.getItem(key);
      if (val === 'light' || val === 'dark') return val;
    } catch {}
  }
  return null;
}

export function isDarkActive() {
  const doc = document.documentElement;
  if (doc.dataset.theme) {
    return doc.dataset.theme === 'dark';
  }
  return true; // Default dark for developer portfolio
}

export function applyTheme(theme) {
  const doc = document.documentElement;
  const body = document.body;

  doc.dataset.theme = theme;
  if (body) body.dataset.theme = theme;

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', theme === 'light' ? '#f8fafc' : '#050505');
  }

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  });

  window.dispatchEvent(new CustomEvent('portfolio:theme-changed', {
    detail: { theme, isDark: theme === 'dark' }
  }));
}

export function setTheme(theme) {
  THEME_KEYS.forEach((key) => {
    try {
      localStorage.setItem(key, theme);
    } catch {}
  });
  applyTheme(theme);
}

export function toggleTheme() {
  const current = document.documentElement.dataset.theme || (isDarkActive() ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

export function initTheme() {
  const saved = getStoredTheme();
  const initial = saved || 'dark'; // Portfolio defaults to deep space dark
  applyTheme(initial);

  window.addEventListener('keydown', (e) => {
    if ((e.key === 't' || e.key === 'T') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
      e.preventDefault();
      toggleTheme();
    }
  });

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-theme-toggle], [data-theme]');
    if (btn) {
      e.preventDefault();
      toggleTheme();
    }
  });
}

if (typeof document !== 'undefined') {
  initTheme();
}
