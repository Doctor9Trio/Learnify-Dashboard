/**
 * theme.js — Light/Dark Mode Toggle
 * Corbel-exact: instant switch via data-theme attribute on <html>
 * Persisted to localStorage
 */

const STORAGE_KEY = 'sarthak-theme';

export function initTheme() {
  // Apply saved theme on load (before paint)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') {
    document.documentElement.dataset.theme = 'dark';
  }

  // Wire up the toggle button
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  updateThemeIcon(btn);

  btn.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = isDark ? '' : 'dark';
    localStorage.setItem(STORAGE_KEY, isDark ? '' : 'dark');
    updateThemeIcon(btn);
  });
}

function updateThemeIcon(btn) {
  const isDark = document.documentElement.dataset.theme === 'dark';
  // Moon icon in light mode, Sun in dark mode
  btn.innerHTML = isDark ? getSunIcon() : getMoonIcon();
  btn.setAttribute('data-tooltip', isDark ? 'Light mode' : 'Dark mode');
  btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

function getMoonIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>`;
}

function getSunIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`;
}
