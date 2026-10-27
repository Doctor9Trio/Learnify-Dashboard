/**
 * theme.js — Zero-Flash Theme & Accent Controller for Bahi Khata
 * Reverse-Engineered via REA Architecture
 */

const THEME_KEY = 'ledge:theme';
const ACCENT_KEY = 'ledge:accent';

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

  const savedAccent = localStorage.getItem(ACCENT_KEY) || 'null';
  let accent = 'lime';
  try {
    accent = JSON.parse(savedAccent) || 'lime';
  } catch (e) {
    accent = savedAccent || 'lime';
  }
  applyAccent(accent);

  // Wire theme buttons if present
  const themeBtns = document.querySelectorAll('[data-act="theme"], #btn-theme');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  });

  // Listen for system theme preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    try {
      const stored = JSON.parse(localStorage.getItem(THEME_KEY) || 'null');
      if (stored === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    } catch (err) {}
  });
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

export function applyAccent(accent) {
  if (accent && accent !== 'lime') {
    document.documentElement.dataset.accent = accent;
  } else {
    delete document.documentElement.dataset.accent;
  }
}

export function toggleTheme() {
  const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, JSON.stringify(next));
}
