/**
 * main.js — Application Lifecycle & Component Initialization
 */

import { initTheme } from './theme.js';
import { initRouter } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouter();
  console.log('[sandhi] Initialized successfully with modular Vanilla JS.');
});
