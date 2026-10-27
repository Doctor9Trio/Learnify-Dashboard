/**
 * theme.js — Zero-Flash Theme Controller for Aarogya Clinic (TEND)
 * Reverse-Engineered via REA Modular Architecture
 * Handles Clinical Sage & Dark Mode, System Preference & Storage Sync.
 */

const THEME_KEYS = ['tend:theme', 'aarogya:theme', 'tend-theme'];

export function getStoredTheme() {
  for (const key of THEME_KEYS) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const val = raw.startsWith('"') ? JSON.parse(raw) : raw;
      if (val === 'light' || val === 'dark' || val === 'system') return val;
    } catch {}
  }
  return 'system';
}

export function isDarkActive() {
  const doc = document.documentElement;
  if (doc.dataset.theme) {
    return doc.dataset.theme === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function applyTheme(mode) {
  const doc = document.documentElement;
  const isSystem = mode === 'system' || !mode;
  const isDark = isSystem
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : mode === 'dark';

  doc.dataset.theme = isDark ? 'dark' : 'light';

  // Update meta theme color
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.content = isDark ? '#0b1312' : '#eef2ef';
  }

  // Update theme button state
  const themeBtns = document.querySelectorAll('#btn-theme, #theme-toggle, [data-theme-toggle]');
  themeBtns.forEach((themeBtn) => {
    themeBtn.setAttribute('aria-pressed', String(isDark));
    themeBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeBtn.title = isDark ? 'Light Theme (T)' : 'Dark Theme (T)';
  });

  // Dispatch custom theme change event for clinic charts and SVG telemetry
  window.dispatchEvent(new CustomEvent('tend:theme-changed', {
    detail: { mode: mode || 'system', isDark }
  }));
}

export function setTheme(mode) {
  THEME_KEYS.forEach((key) => {
    try {
      if (mode === 'system') {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(mode));
      }
    } catch {}
  });
  applyTheme(mode);
}

export function toggleTheme() {
  const currentDark = isDarkActive();
  const next = currentDark ? 'light' : 'dark';
  setTheme(next);
}

export function initTheme() {
  const stored = getStoredTheme();
  applyTheme(stored);

  // System appearance change listener
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const current = getStoredTheme();
    if (current === 'system') {
      applyTheme('system');
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

// Immediate zero-flash invocation
if (typeof document !== 'undefined') {
  initTheme();
}
