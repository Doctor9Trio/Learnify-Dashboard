/**
 * theme.js — Zero-Flash Theme Controller for Griha Living (KVIST)
 * Reverse-Engineered via REA Modular Architecture
 * Handles Nordic Birch / Nocturnal Charcoal Theme & Storage Sync.
 */

const THEME_KEYS = ['kvist:theme', 'griha:theme'];

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
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function applyTheme(theme) {
  const doc = document.documentElement;
  const body = document.body;

  doc.dataset.theme = theme;
  if (body) body.dataset.theme = theme;

  // Update theme-color meta tag
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', theme === 'dark' ? '#131210' : '#f2efe9');
  }

  // Update toggle buttons if present
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  });

  // Dispatch custom theme change event
  window.dispatchEvent(new CustomEvent('kvist:theme-changed', {
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
  const initial = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(initial);

  // System color scheme change listener
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const currentStored = getStoredTheme();
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

  // Click listener for theme toggle buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-theme-toggle], [data-theme]');
    if (btn) {
      e.preventDefault();
      toggleTheme();
    }
  });
}

// Immediate zero-flash execution
if (typeof document !== 'undefined') {
  initTheme();
}
