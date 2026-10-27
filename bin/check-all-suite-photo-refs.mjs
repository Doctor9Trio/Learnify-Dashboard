import fs from 'fs';
import path from 'path';

const suites = [
  'corbel', 'murmura', 'kinby', 'vessa', 'tavola', 'ivora', 
  'cadra', 'noria', 'mender', 'ledge', 'gesso', 'solum', 
  'stride', 'kvist', 'portfolio', 'camber', 'strada', 'vanta', 
  'nero', 'tend'
];

console.log('=== EXACT ASSET REFERENCE AND EXISTENCE AUDIT ===\n');

for (const suite of suites) {
  const dir = path.join(process.cwd(), suite);
  if (!fs.existsSync(dir)) continue;

  console.log(`\n-----------------------------------------`);
  console.log(`SUITE: ${suite}`);
  console.log(`-----------------------------------------`);

  // 1. Check photos / images directory
  const possibleDirs = ['photos', 'images', 'assets'];
  for (const p of possibleDirs) {
    const fullP = path.join(dir, p);
    if (fs.existsSync(fullP)) {
      const files = [];
      function list(cur) {
        for (const item of fs.readdirSync(cur, { withFileTypes: true })) {
          if (item.isDirectory()) list(path.join(cur, item.name));
          else files.push(path.relative(dir, path.join(cur, item.name)));
        }
      }
      list(fullP);
      console.log(`  [Dir ${p}]: found ${files.length} files`);
      if (files.length <= 15) {
        console.log(`    -> ${files.join(', ')}`);
      } else {
        console.log(`    -> (first 10) ${files.slice(0, 10).join(', ')}...`);
      }
    }
  }

  // 2. Scan code for exact image URL patterns
  const photoPaths = new Set();
  function scan(cur) {
    for (const item of fs.readdirSync(cur, { withFileTypes: true })) {
      const full = path.join(cur, item.name);
      if (item.isDirectory()) {
        if (item.name !== 'node_modules' && item.name !== '.git') scan(full);
      } else if (item.name.endsWith('.js') || item.name.endsWith('.html')) {
        const text = fs.readFileSync(full, 'utf8');
        // Match string literals ending in image extensions
        const m = text.match(/['"`]([^'"`\s\(\)]+\.(?:jpg|jpeg|png|webp|svg|gif))['"`]/gi) || [];
        for (const match of m) {
          const raw = match.slice(1, -1);
          if (!raw.startsWith('http') && !raw.startsWith('data:') && !raw.includes('${') && !raw.endsWith('.svg')) {
            photoPaths.add({ raw, source: path.relative(dir, full) });
          }
        }
        // Also match templates like /photos/...
        const m2 = text.match(/['"`]([^'"`]*photos\/[^'"`]*)['"`]/gi) || [];
        for (const match of m2) {
          photoPaths.add({ raw: match.slice(1, -1), source: path.relative(dir, full) });
        }
      }
    }
  }
  scan(dir);

  if (photoPaths.size === 0) {
    console.log(`  No photo/raster image references in code (pure SVG / vector UI).`);
  } else {
    console.log(`  Found ${photoPaths.size} image references:`);
    for (const p of photoPaths) {
      // Check if file exists relative to suite or root
      let clean = p.raw.replace(/^\.?\//, '');
      const cand1 = path.join(dir, clean);
      const cand2 = path.join(process.cwd(), clean);
      const cand3 = path.join(dir, 'images', clean);
      const cand4 = path.join(dir, 'photos', clean);
      const exists = fs.existsSync(cand1) || fs.existsSync(cand2) || fs.existsSync(cand3) || fs.existsSync(cand4);
      console.log(`    ${exists ? '✅' : '❌'} [${p.source}] -> ${p.raw}`);
    }
  }
}
