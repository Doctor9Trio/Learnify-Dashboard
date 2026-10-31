#!/usr/bin/env node
/**
 * bin/package-template.mjs
 * Sarthak / Learnify Commercial Marketplace — REA Clean-Room Zip Packager
 * 
 * Usage:
 *   node bin/package-template.mjs <slug>       # Packages a specific template into dist/packages/<slug>.zip
 *   node bin/package-template.mjs --all        # Packages all 26 templates
 * 
 * Performs clean-room sanitization:
 * - Copies clean source files
 * - Strips preview tracking pills (.cc-preview-pill)
 * - Injects commercial LICENSE.md and setup README.md
 * - Compresses into dist/packages/<slug>.zip ready for post-payment customer delivery
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const catalogPath = path.join(rootDir, 'data', 'catalog.json');
if (!fs.existsSync(catalogPath)) {
  console.error(`Catalog not found: ${catalogPath}`);
  process.exit(1);
}

const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const distDir = path.join(rootDir, 'dist', 'packages');
const tempStagingDir = path.join(rootDir, 'dist', 'staging');

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
if (!fs.existsSync(tempStagingDir)) fs.mkdirSync(tempStagingDir, { recursive: true });

const arg = process.argv[2];
const templatesToPackage = (arg === '--all')
  ? catalog.templates
  : catalog.templates.filter(t => t.slug === arg);

if (templatesToPackage.length === 0) {
  console.error(`Please specify a template slug or '--all'. Example: node bin/package-template.mjs vanijya`);
  process.exit(1);
}

function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'Thumbs.db') continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function sanitizeHtml(filePath, templateName) {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // Strip preview pills
  html = html.replace(/<a[^>]*class=["'][^"']*cc-preview-pill[^"']*["'][^>]*>[\s\S]*?<\/a>/gi, '');
  html = html.replace(/<a[^>]*class=["'][^"']*learnify-preview-pill[^"']*["'][^>]*>[\s\S]*?<\/a>/gi, '');
  // Strip auto-lift script if present
  html = html.replace(/<script>[^<]*\.cc-preview-pill[^<]*<\/script>/gi, '');

  fs.writeFileSync(filePath, html, 'utf8');
}

for (const tmpl of templatesToPackage) {
  const srcSuiteDir = path.join(rootDir, tmpl.slug);
  if (!fs.existsSync(srcSuiteDir)) {
    console.warn(`[SKIP] Template directory for ${tmpl.slug} not found.`);
    continue;
  }

  const stageDir = path.join(tempStagingDir, tmpl.slug);
  if (fs.existsSync(stageDir)) {
    fs.rmSync(stageDir, { recursive: true, force: true });
  }

  console.log(`\n\x1b[36mPackaging [${tmpl.slug.toUpperCase()}] (${tmpl.name})...\x1b[0m`);
  copyDirRecursive(srcSuiteDir, stageDir);

  // Sanitize index.html
  const stagedIndex = path.join(stageDir, 'index.html');
  sanitizeHtml(stagedIndex, tmpl.name);

  // Inject Commercial LICENSE.md
  const licenseContent = `# Learnify Commercial Single/Developer License
Product: ${tmpl.name} (${tmpl.slug})
Licensee: Authorized Purchaser
Version: ${tmpl.version}

TERMS OF USE:
1. You are granted a non-exclusive, perpetual license to use, customize, and deploy this template.
2. You may use this template for personal or commercial client projects.
3. You may NOT redistribute, resell, lease, sub-license, or offer this source code in its raw format on any public repository, marketplace, or template collection.
4. For questions or enterprise multi-seat licensing, contact: support@learnify.store
`;
  fs.writeFileSync(path.join(stageDir, 'LICENSE.md'), licenseContent, 'utf8');

  // Inject Setup README.md
  const readmeContent = `# ${tmpl.name} — ${tmpl.tagline}

Welcome to ${tmpl.name}! This template is crafted with pure HTML5, Vanilla CSS custom properties, and Vanilla ES6 modules.

## 🚀 Quick Start
No complex build steps or dependencies required!

### Option 1: Using npx http-server
\`\`\`bash
npx http-server -p 3000 -c-1
\`\`\`

### Option 2: Using Python
\`\`\`bash
python -m http.server 3000
\`\`\`

Open \`http://localhost:3000\` in your browser.

## 📁 Directory Structure
- \`index.html\`: Semantic HTML5 application shell
- \`css/\`:
  - \`tokens.css\`: Design tokens (colors, border-radii, spacing)
  - \`layout.css\`: Shell grid, sidebar, and headers
  - \`components.css\`: UI primitives (buttons, modals, cards)
  - \`responsive.css\`: Mobile (<768px), Tablet, Desktop queries
- \`js/\`:
  - \`main.js\`: Entry orchestrator
  - \`router.js\`: Hash-based SPA routing
  - \`theme.js\`: Zero-flash theme switcher (Dark/Light)
  - \`store.js\`: Reactive mock data and state
- \`assets/\`: Local vector icons, WebP imagery, and typography

For support or questions: support@learnify.store
`;
  fs.writeFileSync(path.join(stageDir, 'README.md'), readmeContent, 'utf8');

  // Compress into .zip using PowerShell Compress-Archive
  const zipPath = path.join(distDir, `${tmpl.slug}.zip`);
  if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

  try {
    const psCmd = `powershell -NoProfile -Command "Compress-Archive -Path '${stageDir}\\*' -DestinationPath '${zipPath}' -Force"`;
    execSync(psCmd, { stdio: 'pipe' });
    const zipStats = fs.statSync(zipPath);
    console.log(`\x1b[32m[SUCCESS]\x1b[0m Packaged clean archive: dist/packages/${tmpl.slug}.zip (${(zipStats.size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`\x1b[31m[ERROR]\x1b[0m Failed to zip ${tmpl.slug}:`, err.message);
  } finally {
    // Clean up staging directory
    fs.rmSync(stageDir, { recursive: true, force: true });
  }
}

console.log(`\n\x1b[32mPackaging process completed!\x1b[0m\n`);
