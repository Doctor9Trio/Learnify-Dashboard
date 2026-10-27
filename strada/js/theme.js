/**
 * theme.js — Zero-Flash Theme Controller for Yatra Mobility (STRADA)
 * Reverse-Engineered via REA Modular Architecture
 * Handles Luxury Midnight & Day Mode, System Preference & Storage Sync.
 */

const THEME_KEYS = ['strada-theme', 'yatra-theme', 'strada:theme'];

export function getStoredTheme() {
  for (const key of THEME_KEYS) {
    try {
      const val = localStorage.getItem(key);
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
  return !window.matchMedia('(prefers-color-scheme: light)').matches;
}

export function applyTheme(mode) {
  const doc = document.documentElement;
  const body = document.body;

  if (mode === 'system' || !mode) {
    delete doc.dataset.theme;
    if (body) delete body.dataset.theme;
  } else {
    doc.dataset.theme = mode;
    if (body) body.dataset.theme = mode;
  }

  // Update theme button state
  const isDark = isDarkActive();
  const themeBtns = document.querySelectorAll('#theme-toggle, [data-theme-toggle]');
  themeBtns.forEach((themeBtn) => {
    themeBtn.setAttribute('aria-pressed', String(isDark));
    themeBtn.setAttribute('aria-label', isDark ? 'Switch to Light theme' : 'Switch to Dark theme');
    themeBtn.title = isDark ? 'Light Theme (T)' : 'Dark Theme (T)';
  });

  // Dispatch custom theme change event for vehicle stage and canvas
  window.dispatchEvent(new CustomEvent('strada:theme-changed', {
    detail: { mode: mode || 'system', isDark }
  }));
}

export function setTheme(mode) {
  THEME_KEYS.forEach((key) => {
    try {
      if (mode === 'system') {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, mode);
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
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    const current = getStoredTheme();
    if (current === 'system') {
      applyTheme('system');
    }
  });

  // Theme toggle button click
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#theme-toggle, [data-theme-toggle]');
    if (btn) {
      e.preventDefault();
      toggleTheme();
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
