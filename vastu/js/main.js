/**
 * main.js — Application Lifecycle & Component Initialization
 */

import { initTheme } from './theme.js';
import { initRouter } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouter();
  console.log('[vastu] Initialized successfully with modular Vanilla JS.');
});
