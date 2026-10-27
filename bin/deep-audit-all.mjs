import fs from 'fs';
import path from 'path';

const suites = [
  'cadra', 'camber', 'corbel', 'gesso', 'ivora', 'kinby', 'kvist', 'ledge', 
  'mender', 'murmura', 'nero', 'noria', 'portfolio', 'solum', 'strada', 
  'stride', 'tavola', 'tend', 'vanta', 'vessa'
];

const rootDir = process.cwd();

console.log('================================================================');
console.log('       COMPREHENSIVE MULTI-SUITE ASSET & IMAGE AUDIT            ');
console.log('================================================================\n');

const suiteResults = {};

for (const suite of suites) {
  const suiteDir = path.join(rootDir, suite);
  if (!fs.existsSync(suiteDir)) continue;

  const foundReferences = new Map(); // path -> Set of source files
  const dynamicPatterns = new Set();
  const existingFiles = new Set();

  // 1. Gather all existing image/asset files in suite & root/photos
  function collectFiles(dir, prefix = '') {
    if (!fs.existsSync(dir)) return;
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      for (const item of items) {
        if (item.name === 'node_modules' || item.name === '.git') continue;
        const rel = prefix ? `${prefix}/${item.name}` : item.name;
        if (item.isDirectory()) {
          collectFiles(path.join(dir, item.name), rel);
        } else if (/\.(jpg|jpeg|png|webp|svg|gif|ico|avif)$/i.test(item.name)) {
          existingFiles.add(rel.toLowerCase());
          existingFiles.add(item.name.toLowerCase());
        }
      }
    } catch (e) {}
  }

  collectFiles(suiteDir);
  collectFiles(path.join(rootDir, 'photos', suite), `photos/${suite}`);
  collectFiles(path.join(rootDir, 'photos'), 'photos');

  // 2. Scan code files
  function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      if (item.name === 'node_modules' || item.name === '.git' || item.name === 'dist') continue;
      const full = path.join(dir, item.name);
      if (item.isDirectory()) {
        scanDir(full);
      } else if (/\.(js|html|css|json)$/i.test(item.name)) {
        const relFile = path.relative(suiteDir, full);
        const content = fs.readFileSync(full, 'utf8');

        // Regex 1: Static image path matches
        const staticMatches = content.matchAll(/['"`]([^\s'"`<>*|?]+\.(?:jpg|jpeg|png|webp|svg|gif|ico|avif))['"`]/gi);
        for (const m of staticMatches) {
          const val = m[1].trim();
          if (val.startsWith('http://') || val.startsWith('https://') || val.startsWith('data:')) continue;
          if (val.includes('${') || val.includes('{') || val.includes('}') || val.includes(')')) {
            dynamicPatterns.add({ pattern: val, source: relFile });
            continue;
          }
          if (!foundReferences.has(val)) foundReferences.set(val, new Set());
          foundReferences.get(val).add(relFile);
        }

        // Regex 2: Template literals like `/photos/...` or `images/...`
        const templateMatches = content.matchAll(/`([^`]*\.(?:jpg|jpeg|png|webp|svg|gif)[^`]*)`/gi);
        for (const tm of templateMatches) {
          const val = tm[1];
          if (val.includes('${')) {
            dynamicPatterns.add({ pattern: val, source: relFile });
          }
        }

        // Regex 3: Object properties { photo: '...', image: '...', avatar: '...' }
        const propMatches = content.matchAll(/(?:photo|image|avatar|poster|thumb|cover|pic)\s*:\s*[`'"]([a-zA-Z0-9_\-\.\/]+)[`'"]/gi);
        for (const pm of propMatches) {
          const val = pm[1].trim();
          if (!val.includes('.') && val.length > 0) {
            // Might be an id/slug without extension (e.g. photo: "balm")
            dynamicPatterns.add({ property: pm[0], val, source: relFile });
          }
        }
      }
    }
  }

  scanDir(suiteDir);

  // Check each reference
  const missing = [];
  const resolved = [];

  for (const [ref, sources] of foundReferences.entries()) {
    // Normalise ref
    let clean = ref.replace(/^\.?\//, '').replace(/\?[^?]*$/, '');
    // If it starts with suite name, e.g. "vessa/photos/...", strip suite
    let withoutSuite = clean;
    if (withoutSuite.startsWith(suite + '/')) {
      withoutSuite = withoutSuite.slice(suite.length + 1);
    }

    const checkCandidates = [
      path.join(suiteDir, clean),
      path.join(suiteDir, withoutSuite),
      path.join(rootDir, clean),
      path.join(suiteDir, 'images', path.basename(clean)),
      path.join(suiteDir, 'photos', path.basename(clean)),
      path.join(suiteDir, 'photos', suite, path.basename(clean)),
      path.join(rootDir, 'photos', path.basename(clean)),
      path.join(rootDir, 'photos', suite, path.basename(clean)),
      path.join(rootDir, 'photos', clean)
    ];

    // Also resolve relative to each source file's directory
    for (const src of sources) {
      checkCandidates.push(path.join(suiteDir, path.dirname(src), ref));
    }

    const exists = checkCandidates.some(c => fs.existsSync(c));
    const srcList = Array.from(sources).join(', ');

    if (exists) {
      resolved.push({ ref, sources: srcList });
    } else {
      missing.push({ ref, sources: srcList });
    }
  }

  suiteResults[suite] = {
    existingCount: existingFiles.size,
    resolvedCount: resolved.length,
    missing,
    dynamicPatterns: Array.from(dynamicPatterns)
  };
}

let totalMissing = 0;
for (const [suite, res] of Object.entries(suiteResults)) {
  console.log(`\n======================================================`);
  console.log(`📦 SUITE: ${suite.toUpperCase()} (Total Asset Files on Disk: ${res.existingCount})`);
  console.log(`======================================================`);
  
  if (res.missing.length === 0) {
    console.log(`  ✅ All ${res.resolvedCount} static asset references resolved cleanly.`);
  } else {
    console.log(`  ❌ MISSING ASSETS (${res.missing.length}):`);
    for (const m of res.missing) {
      console.log(`     - [${m.sources}] -> "${m.ref}"`);
    }
    totalMissing += res.missing.length;
  }

  if (res.dynamicPatterns.length > 0) {
    console.log(`  ℹ️ Dynamic/Template Asset Patterns (${res.dynamicPatterns.length}):`);
    for (const dp of res.dynamicPatterns) {
      if (dp.pattern) console.log(`     - [${dp.source}] \`${dp.pattern}\``);
      if (dp.property) console.log(`     - [${dp.source}] ${dp.property}`);
    }
  }
}

console.log(`\n\n======================================================`);
console.log(`🏁 AUDIT SUMMARY: Total Missing Static References Across Workspace = ${totalMissing}`);
console.log(`======================================================\n`);
