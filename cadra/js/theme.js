/**
 * theme.js — Zero-Flash Theme & Accent Controller for Karkhana ERP
 * Reverse-Engineered via REA Architecture
 */

const THEME_KEY = 'cadra:theme';
const ACCENT_KEY = 'cadra:accent';

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

  const savedAccent = localStorage.getItem(ACCENT_KEY) || '"ocean"';
  let accent = 'ocean';
  try {
    accent = JSON.parse(savedAccent);
  } catch (e) {
    accent = savedAccent;
  }
  applyAccent(accent);

  // Wire theme toggle button in the dock (#btn-theme)
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

  // Also listen for system theme preference changes
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
  document.documentElement.dataset.accent = accent;
}
