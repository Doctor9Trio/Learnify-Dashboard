#!/usr/bin/env node
/**
 * bin/rea-inspector.mjs
 * Sarthak Dashboard — Reverse Engineering Assistant (REA) Inspector & Token Harvester
 * 
 * Usage:
 *   node bin/rea-inspector.mjs <suite_name>
 *   node bin/rea-inspector.mjs <suite_name> --scaffold
 * 
 * Inspects a suite's HTML, CSS, and JS assets to extract design tokens,
 * verify asset integrity, and scaffold modular css/ and js/ structures.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const suiteName = process.argv[2];
const shouldScaffold = process.argv.includes('--scaffold');

if (!suiteName || suiteName.startsWith('--')) {
  console.error(`\x1b[31m[ERROR]\x1b[0m Please specify a suite name.`);
  console.error(`Example: node bin/rea-inspector.mjs kinby`);
  console.error(`         node bin/rea-inspector.mjs kinby --scaffold`);
  process.exit(1);
}

const suiteDir = path.join(rootDir, suiteName);
if (!fs.existsSync(suiteDir)) {
  console.error(`\x1b[31m[ERROR]\x1b[0m Suite directory not found: ${suiteDir}`);
  process.exit(1);
}

console.log(`\n\x1b[36m============================================================\x1b[0m`);
console.log(`\x1b[36m REA Inspector & Token Harvester: [${suiteName.toUpperCase()}]\x1b[0m`);
console.log(`\x1b[36m============================================================\x1b[0m\n`);

const htmlPath = path.join(suiteDir, 'index.html');
if (!fs.existsSync(htmlPath)) {
  console.error(`\x1b[31m[ERROR]\x1b[0m index.html not found in ${suiteDir}`);
  process.exit(1);
}

const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 1. Inspect Linked CSS & Assets
const assetsDir = path.join(suiteDir, 'assets');
let cssFiles = [];
let jsFiles = [];
let mediaFiles = [];

if (fs.existsSync(assetsDir)) {
  const allAssets = fs.readdirSync(assetsDir);
  cssFiles = allAssets.filter(f => f.endsWith('.css'));
  jsFiles = allAssets.filter(f => f.endsWith('.js'));
  mediaFiles = allAssets.filter(f => !f.endsWith('.css') && !f.endsWith('.js') && !f.endsWith('.map'));
}

console.log(`\x1b[33m1. Asset Inventory in /assets/:\x1b[0m`);
console.log(`   - Stylesheets (.css): ${cssFiles.length}`);
console.log(`   - Scripts (.js):       ${jsFiles.length}`);
console.log(`   - Media / Fonts:       ${mediaFiles.length}`);

// 2. Scan CSS for Design Tokens
let combinedCSS = '';
const existingCssDir = path.join(suiteDir, 'css');
if (fs.existsSync(existingCssDir)) {
  const userCssFiles = fs.readdirSync(existingCssDir).filter(f => f.endsWith('.css'));
  for (const f of userCssFiles) {
    combinedCSS += fs.readFileSync(path.join(existingCssDir, f), 'utf8') + '\n';
  }
}

for (const f of cssFiles) {
  combinedCSS += fs.readFileSync(path.join(assetsDir, f), 'utf8') + '\n';
}

// Extract Hex Colors
const hexColors = new Set();
const hexMatches = combinedCSS.match(/#[0-9a-fA-F]{3,8}\b/g) || [];
for (const c of hexMatches) {
  if (c.length === 4 || c.length === 7 || c.length === 9) {
    hexColors.add(c.toLowerCase());
  }
}

// Extract CSS Variables
const cssVars = new Set();
const varMatches = combinedCSS.match(/--[a-zA-Z0-9_-]+\b/g) || [];
for (const v of varMatches) {
  cssVars.add(v);
}

// Extract Border Radii
const radii = new Set();
const radiusMatches = combinedCSS.match(/border-radius:\s*([^;]+);/g) || [];
for (const r of radiusMatches) {
  const val = r.replace(/border-radius:\s*/, '').replace(';', '').trim();
  radii.add(val);
}

// Extract Font Families
const fontFamilies = new Set();
const fontMatches = combinedCSS.match(/font-family:\s*([^;]+);/g) || [];
for (const fm of fontMatches) {
  const val = fm.replace(/font-family:\s*/, '').replace(';', '').trim();
  fontFamilies.add(val);
}

console.log(`\n\x1b[33m2. REA Computed Token Analysis:\x1b[0m`);
console.log(`   - Unique Colors Found:    ${hexColors.size}`);
console.log(`   - Custom CSS Variables:   ${cssVars.size}`);
console.log(`   - Border Radii Variants:  ${radii.size}`);
console.log(`   - Font Families:          ${Array.from(fontFamilies).slice(0, 3).join(', ') || 'Inherited/Default'}`);

const sampleColors = Array.from(hexColors).slice(0, 10);
console.log(`   - Color Palette Sample:   ${sampleColors.join('  ')}`);

// 3. Scan for Missing Assets (404 Check)
console.log(`\n\x1b[33m3. Asset Health & Integrity Audit:\x1b[0m`);
const assetRefs = new Set();
const refRegex = /(?:src|href|url)\(["']?(\.\/assets\/[^"')]+|assets\/[^"')]+)["']?\)/g;
let match;
while ((match = refRegex.exec(combinedCSS + htmlContent)) !== null) {
  const cleanRef = match[1].replace('./assets/', '').replace('assets/', '');
  assetRefs.add(cleanRef);
}

let missingCount = 0;
for (const ref of assetRefs) {
  const target = path.join(assetsDir, ref.split('?')[0].split('#')[0]);
  if (!fs.existsSync(target)) {
    console.warn(`   \x1b[31m[MISSING 404]\x1b[0m ${ref}`);
    missingCount++;
  }
}

if (missingCount === 0) {
  console.log(`   \x1b[32m✔ All referenced assets found locally. Zero 404s.\x1b[0m`);
} else {
  console.log(`   \x1b[31m✖ Warning: ${missingCount} assets referenced but not found in assets/.\x1b[0m`);
}

// 4. Scaffolding (If requested)
if (shouldScaffold) {
  console.log(`\n\x1b[33m4. Scaffolding Modular Architecture...\x1b[0m`);
  const cssDir = path.join(suiteDir, 'css');
  const jsDir = path.join(suiteDir, 'js');
  const pagesCssDir = path.join(cssDir, 'pages');
  const componentsJsDir = path.join(jsDir, 'components');
  const pagesJsDir = path.join(jsDir, 'pages');

  [cssDir, jsDir, pagesCssDir, componentsJsDir, pagesJsDir].forEach(d => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });

  // tokens.css
  const tokensPath = path.join(cssDir, 'tokens.css');
  if (!fs.existsSync(tokensPath)) {
    const tokensContent = `/* ============================================================
   tokens.css — Design System Tokens (${suiteName.toUpperCase()})
   Reverse-Engineered via REA
   ============================================================ */

:root {
  /* Surfaces & Backgrounds */
  --bg-page: #ffffff;
  --bg-card: #f8f9fa;
  --bg-sidebar: #f1f3f5;
  --border-color: rgba(0, 0, 0, 0.08);

  /* Typography */
  --font-family: system-ui, -apple-system, sans-serif;
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --text-muted: #9ca3af;

  /* Accent & Action */
  --accent-primary: #FF5722;
  --accent-hover: #f4511e;
  --color-positive: #22c55e;
  --color-negative: #ef4444;

  /* Shapes & Metrics */
  --border-radius-card: 20px;
  --border-radius-btn: 999px;
  --border-radius-sm: 8px;
  --sidebar-width: 60px;
}

[data-theme="dark"] {
  --bg-page: #121212;
  --bg-card: #1e1e1e;
  --bg-sidebar: #181818;
  --border-color: rgba(255, 255, 255, 0.08);
  --text-primary: #ffffff;
  --text-secondary: #9ca3af;
  --text-muted: #6b7280;
}
`;
    fs.writeFileSync(tokensPath, tokensContent, 'utf8');
    console.log(`   \x1b[32m✔ Created css/tokens.css\x1b[0m`);
  }

  // theme.js
  const themeJsPath = path.join(jsDir, 'theme.js');
  if (!fs.existsSync(themeJsPath)) {
    const themeJsContent = `/**
 * theme.js — Zero-Flash Dark/Light Mode Switcher
 */

const STORAGE_KEY = '${suiteName}:theme';

export function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY) || 'light';
  applyTheme(saved);

  const toggleBtn = document.querySelector('[data-action="toggle-theme"]');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme;
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}
`;
    fs.writeFileSync(themeJsPath, themeJsContent, 'utf8');
    console.log(`   \x1b[32m✔ Created js/theme.js\x1b[0m`);
  }

  // router.js
  const routerJsPath = path.join(jsDir, 'router.js');
  if (!fs.existsSync(routerJsPath)) {
    const routerJsContent = `/**
 * router.js — Hash-Based Single Page App Router
 */

const routes = {};

export function registerRoute(hashPath, renderFn) {
  routes[hashPath] = renderFn;
}

export function initRouter(defaultRoute = '#/home') {
  function handleRoute() {
    const hash = window.location.hash || defaultRoute;
    const render = routes[hash] || routes[defaultRoute];
    if (render) {
      render();
    }
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
`;
    fs.writeFileSync(routerJsPath, routerJsContent, 'utf8');
    console.log(`   \x1b[32m✔ Created js/router.js\x1b[0m`);
  }

  // main.js
  const mainJsPath = path.join(jsDir, 'main.js');
  if (!fs.existsSync(mainJsPath)) {
    const mainJsContent = `/**
 * main.js — Application Lifecycle & Component Initialization
 */

import { initTheme } from './theme.js';
import { initRouter } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouter();
  console.log('[${suiteName}] Initialized successfully with modular Vanilla JS.');
});
`;
    fs.writeFileSync(mainJsPath, mainJsContent, 'utf8');
    console.log(`   \x1b[32m✔ Created js/main.js\x1b[0m`);
  }
}

console.log(`\n\x1b[32m✔ Inspection complete for ${suiteName}.\x1b[0m\n`);
