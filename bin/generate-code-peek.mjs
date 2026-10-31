#!/usr/bin/env node
/**
 * bin/generate-code-peek.mjs
 * Sarthak / Learnify Commercial Marketplace — REA Code-Peek & Zip Tree Generator
 * 
 * Usage:
 *   node bin/generate-code-peek.mjs             # Generates for all 26 templates
 *   node bin/generate-code-peek.mjs <slug>      # Generates for a single template
 * 
 * Inspects a template's directory structure, calculates file counts and lines of code,
 * and generates the "What is in the zip" manifest modeled after Code & Chill.
 */

import fs from 'fs';
import path from 'path';
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
const outDir = path.join(rootDir, 'data', 'code-peek');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const targetSlug = process.argv[2];
const templatesToProcess = targetSlug
  ? catalog.templates.filter(t => t.slug === targetSlug)
  : catalog.templates;

if (templatesToProcess.length === 0) {
  console.error(`No matching template found for: ${targetSlug}`);
  process.exit(1);
}

function scanDir(dir, baseDir = dir) {
  let entries = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    // Skip git, node_modules, temp or OS junk
    if (item.name.startsWith('.') || item.name === 'node_modules' || item.name === 'Thumbs.db') {
      continue;
    }
    const fullPath = path.join(dir, item.name);
    const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');

    if (item.isDirectory()) {
      entries.push({
        name: item.name,
        path: relPath,
        type: 'directory',
        children: scanDir(fullPath, baseDir)
      });
    } else {
      let lines = 0;
      let size = 0;
      try {
        const stats = fs.statSync(fullPath);
        size = stats.size;
        // Count lines if text file
        if (/\.(html|css|js|mjs|json|md|svg)$/i.test(item.name)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          lines = content.split('\n').length;
        }
      } catch (e) {}

      entries.push({
        name: item.name,
        path: relPath,
        type: 'file',
        size,
        lines
      });
    }
  }
  return entries;
}

function flattenFiles(tree) {
  let files = [];
  for (const node of tree) {
    if (node.type === 'file') {
      files.push(node);
    } else if (node.children) {
      files.push(...flattenFiles(node.children));
    }
  }
  return files;
}

console.log(`\n\x1b[36m============================================================\x1b[0m`);
console.log(`\x1b[36m Learnify REA Code-Peek Manifest Generator\x1b[0m`);
console.log(`\x1b[36m============================================================\x1b[0m\n`);

let processedCount = 0;

for (const tmpl of templatesToProcess) {
  const suiteDir = path.join(rootDir, tmpl.slug);
  if (!fs.existsSync(suiteDir)) {
    console.warn(`\x1b[33m[SKIP]\x1b[0m Folder for '${tmpl.slug}' not found at ${suiteDir}`);
    continue;
  }

  const tree = scanDir(suiteDir);
  const allFiles = flattenFiles(tree);
  const totalLines = allFiles.reduce((acc, f) => acc + (f.lines || 0), 0);
  const totalBytes = allFiles.reduce((acc, f) => acc + (f.size || 0), 0);

  const manifest = {
    slug: tmpl.slug,
    name: tmpl.name,
    totalFiles: allFiles.length,
    totalLines,
    totalBytes,
    totalSizeReadable: `${(totalBytes / 1024).toFixed(1)} KB`,
    fileList: allFiles.map(f => f.path).sort(),
    tree
  };

  const outFile = path.join(outDir, `${tmpl.slug}.json`);
  fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`\x1b[32m[GENERATED]\x1b[0m ${tmpl.slug.padEnd(12)} -> ${allFiles.length} files (${manifest.totalSizeReadable}, ${totalLines} lines) -> data/code-peek/${tmpl.slug}.json`);
  processedCount++;
}

console.log(`\n\x1b[32mSuccessfully generated ${processedCount} Code-Peek manifests in data/code-peek/\x1b[0m\n`);

