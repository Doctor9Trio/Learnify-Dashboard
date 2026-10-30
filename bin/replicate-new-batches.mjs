import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const SUITES = [
  {
    batch: 10,
    remoteSlug: 'intro',
    targetFolder: 'aarambh',
    brandName: 'Aarambh Studio',
    devanagari: 'आरम्भ',
    brandTitle: 'Aarambh Studio — Kinetic Typography Brand Intro & Agency',
    brandSubtitle: 'Kinetic Typography & Creative Brand Intro',
    remoteBase: 'https://demo.codeandchill.store/intro/',
    photoFolder: null
  },
  {
    batch: 10,
    remoteSlug: 'mango',
    targetFolder: 'aamrai',
    brandName: 'Aamrai Orchards',
    devanagari: 'आमराई',
    brandTitle: 'Aamrai Orchards — Gourmet Sun-Ripened Mango E-Commerce',
    brandSubtitle: 'Tree-Ripened Mangoes & Orchard Direct',
    remoteBase: 'https://demo.codeandchill.store/mango/',
    photoFolder: 'mango'
  },
  {
    batch: 11,
    remoteSlug: 'orvel',
    targetFolder: 'kosh',
    brandName: 'Kosh Treasury',
    devanagari: 'कोष',
    brandTitle: 'Kosh Treasury — Manufacturing & Studio B2B Finance OS',
    brandSubtitle: 'Cash Flow, Cards, Invoices & Approvals',
    remoteBase: 'https://demo.codeandchill.store/orvel/',
    photoFolder: null
  },
  {
    batch: 11,
    remoteSlug: 'accord',
    targetFolder: 'sandhi',
    brandName: 'Sandhi Pipeline',
    devanagari: 'सन्धि',
    brandTitle: 'Sandhi Pipeline — High-Touch Client CRM & Deal Board',
    brandSubtitle: 'Client Pipeline & Deals',
    remoteBase: 'https://demo.codeandchill.store/accord/',
    photoFolder: '165-accord'
  },
  {
    batch: 12,
    remoteSlug: 'rapport',
    targetFolder: 'maitri',
    brandName: 'Maitri CRM',
    devanagari: 'मैत्री',
    brandTitle: 'Maitri CRM — Customer Relationship, Schedule & Invoices',
    brandSubtitle: 'Calm Sales CRM & Schedule',
    remoteBase: 'https://demo.codeandchill.store/rapport/',
    photoFolder: '168-rapport'
  },
  {
    batch: 12,
    remoteSlug: 'oria',
    targetFolder: 'vastu',
    brandName: 'Vastu Living',
    devanagari: 'वास्तु',
    brandTitle: 'Vastu Living — Architectural Furniture Store & Checkout',
    brandSubtitle: 'Furniture for Slow Living',
    remoteBase: 'https://demo.codeandchill.store/oria/',
    photoFolder: 'oria'
  }
];

async function downloadFile(url, destPath, retries = 3) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
      return true;
    } catch (err) {
      if (attempt === retries) {
        console.warn(`    [WARN] Failed to download ${url}: ${err.message}`);
        return false;
      }
      await new Promise(r => setTimeout(r, 800 * attempt));
    }
  }
  return false;
}

export async function processSuite(cfg) {
  console.log(`\n============================================================`);
  console.log(`🚀 REA REPLICATING: ${cfg.brandName} (${cfg.devanagari})`);
  console.log(`📁 Target: ${cfg.targetFolder}/ | Remote: ${cfg.remoteBase}`);
  console.log(`============================================================`);

  const targetDir = path.join(ROOT_DIR, cfg.targetFolder);
  const assetsDir = path.join(targetDir, 'assets');
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

  // 1. Fetch remote index.html
  const htmlUrl = cfg.remoteBase.endsWith('/') ? cfg.remoteBase : cfg.remoteBase + '/';
  const htmlRes = await fetch(htmlUrl, { signal: AbortSignal.timeout(15000) });
  if (!htmlRes.ok) throw new Error(`Failed to fetch HTML for ${cfg.remoteSlug}: HTTP ${htmlRes.status}`);
  let html = await htmlRes.text();

  // 2. Discover Initial Bundles in HTML
  const scriptMatches = [...html.matchAll(/(?:src|href)=["']([^"']*\/(?:assets\/[^"']+))["']/gi)].map(m => m[1]);
  const initialAssetNames = new Set(scriptMatches.map(p => path.basename(p)));

  console.log(`[1/6] Discovered ${initialAssetNames.size} primary bundle files in HTML`);
  for (const assetName of initialAssetNames) {
    const dest = path.join(assetsDir, assetName);
    const remoteUrl = `${htmlUrl}assets/${assetName}`;
    const ok = await downloadFile(remoteUrl, dest);
    if (ok) console.log(`  ✓ Primary asset: ${assetName}`);
  }

  // 3. Scan JavaScript & CSS files recursively for dependencies & chunks
  console.log(`[2/6] Deep-scanning AST & dependency graph for dynamic chunks & imports...`);
  const scannedFiles = new Set();
  let foundNew = true;

  while (foundNew) {
    foundNew = false;
    const currentAssets = fs.readdirSync(assetsDir);
    for (const file of currentAssets) {
      if (scannedFiles.has(file)) continue;
      scannedFiles.add(file);
      const ext = path.extname(file).toLowerCase();

      if (ext === '.js' || ext === '.css') {
        const content = fs.readFileSync(path.join(assetsDir, file), 'utf8');
        // Match assets/whatever
        const assetRefs = content.match(/assets\/[a-zA-Z0-9_\-\.]+\.(?:js|css|svg|png|webp|woff2|jpg|gif)/gi) || [];
        for (const ref of assetRefs) {
          const base = path.basename(ref);
          const dest = path.join(assetsDir, base);
          if (!fs.existsSync(dest) || fs.statSync(dest).size === 0) {
            foundNew = true;
            const ok = await downloadFile(`${htmlUrl}assets/${base}`, dest);
            if (ok) console.log(`  ✓ Dynamic asset: ${base}`);
          }
        }
      }
    }
  }

  // 4. Harvest Catalog Media & Photos
  console.log(`[3/6] Discovering & harvesting catalog photos and media...`);
  // Gather all contents from html and all downloaded assets
  let allBundleText = html;
  for (const f of fs.readdirSync(assetsDir)) {
    try {
      allBundleText += ' ' + fs.readFileSync(path.join(assetsDir, f), 'utf8');
    } catch { }
  }

  // Find all photo references like photos/... or /photos/... or /slug/photos/...
  const photoPatterns = [
    /photos\/[a-zA-Z0-9_\-\/]+\.(?:png|jpg|jpeg|webp|svg|mp4)/gi,
    /(?:["'`])([^"'`]*\/photos\/[^"'`]+\.(?:png|jpg|jpeg|webp|svg|mp4))(?:["'`])/gi
  ];

  const photoSet = new Set();
  for (const p of photoPatterns) {
    for (const match of allBundleText.matchAll(p)) {
      let raw = match[1] || match[0];
      // strip query strings or quotes
      raw = raw.replace(/^['"`]|['"`]$/g, '').split('?')[0];
      const norm = raw.replace(/^[./]+/, '').replace(/^.*?photos\//, 'photos/');
      if (norm.startsWith('photos/')) {
        photoSet.add(norm);
      }
    }
  }

  console.log(`  Discovered ${photoSet.size} potential media assets`);
  for (const photoRel of photoSet) {
    const dest = path.join(targetDir, photoRel);
    if (!fs.existsSync(dest) || fs.statSync(dest).size === 0) {
      // Remote URL might be at https://demo.codeandchill.store/{remoteSlug}/{photoRel} or https://demo.codeandchill.store/{photoRel}
      const remote1 = `${htmlUrl}${photoRel}`;
      const ok = await downloadFile(remote1, dest);
      if (ok) {
        console.log(`  ✓ Downloaded media: ${photoRel}`);
      } else {
        // try without slug if applicable
        const rootUrl = `https://demo.codeandchill.store/${photoRel}`;
        const ok2 = await downloadFile(rootUrl, dest);
        if (ok2) console.log(`  ✓ Downloaded media (root fallback): ${photoRel}`);
      }
    }
  }

  // 5. Transform Code: Relative Paths, Vite Router & Shims
  console.log(`[4/6] Transforming paths, routing bases and shims...`);
  const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
  for (const j of jsFiles) {
    const p = path.join(assetsDir, j);
    let code = fs.readFileSync(p, 'utf8');
    let mod = false;

    // Vite base resolver pattern
    const viteBaseRegex = new RegExp(`return\\s*[\`'"]/${cfg.remoteSlug}/[\`'"]\\s*\\+\\s*([a-zA-Z0-9_]+)`, 'g');
    if (viteBaseRegex.test(code)) {
      code = code.replace(viteBaseRegex, 'return `./` + $1');
      mod = true;
      console.log(`  ✓ Fixed Vite dynamic resolver in ${j}`);
    }

    // Static assets rewrite
    const staticBaseRegex = new RegExp(`["']/${cfg.remoteSlug}/assets/`, 'g');
    if (staticBaseRegex.test(code)) {
      code = code.replace(staticBaseRegex, `'./assets/`);
      mod = true;
      console.log(`  ✓ Replaced /${cfg.remoteSlug}/assets/ in ${j}`);
    }

    // Static photos rewrite
    const photosBaseRegex = new RegExp(`["']/${cfg.remoteSlug}/photos/`, 'g');
    if (photosBaseRegex.test(code)) {
      code = code.replace(photosBaseRegex, `'./photos/`);
      mod = true;
      console.log(`  ✓ Replaced /${cfg.remoteSlug}/photos/ in ${j}`);
    }

    // Router base rewrite if any
    const routerBaseRegex = new RegExp(`base:\\s*["']/${cfg.remoteSlug}/?["']`, 'g');
    if (routerBaseRegex.test(code)) {
      code = code.replace(routerBaseRegex, 'base: "./"');
      mod = true;
      console.log(`  ✓ Replaced router base in ${j}`);
    }

    // Storage namespace isolation: replace standard theme keys
    const themeKeyRegex = new RegExp(`localStorage\\.getItem\\(["']theme["']\\)`, 'g');
    if (themeKeyRegex.test(code)) {
      code = code.replace(themeKeyRegex, `localStorage.getItem("${cfg.targetFolder}:theme")`);
      code = code.replace(new RegExp(`localStorage\\.setItem\\(["']theme["']`, 'g'), `localStorage.setItem("${cfg.targetFolder}:theme"`);
      mod = true;
      console.log(`  ✓ Isolated theme localStorage key in ${j}`);
    }

    if (mod) fs.writeFileSync(p, code, 'utf8');
  }

  // 6. Motion & CSS Patching
  console.log(`[5/6] Patching CSS animations for unconditional LAN motion...`);
  const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
  for (const c of cssFiles) {
    const p = path.join(assetsDir, c);
    let css = fs.readFileSync(p, 'utf8');
    if (css.includes('prefers-reduced-motion: reduce') || css.includes('prefers-reduced-motion:reduce')) {
      css = css.replace(/prefers-reduced-motion:\s*reduce/g, 'force-reduced');
      fs.writeFileSync(p, css, 'utf8');
      console.log(`  ✓ Patched prefers-reduced-motion in ${c}`);
    }
  }

  // 7. Contextual Indian Brand Localization & index.html generation
  console.log(`[6/6] Localizing index.html with Indian branding and shims...`);
  let updatedHtml = html;

  // Relative assets in HTML
  const absAssetRegex = new RegExp(`/(?:${cfg.remoteSlug}/)?assets/`, 'g');
  updatedHtml = updatedHtml.replace(absAssetRegex, './assets/');

  const absPhotoRegex = new RegExp(`/(?:${cfg.remoteSlug}/)?photos/`, 'g');
  updatedHtml = updatedHtml.replace(absPhotoRegex, './photos/');

  // Replace Title & Meta
  updatedHtml = updatedHtml.replace(/<title>.*?<\/title>/i, `<title>${cfg.brandTitle}</title>`);
  updatedHtml = updatedHtml.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${cfg.brandTitle}" />`);

  // Inject non-secure context crypto.randomUUID shim & forced motion in <head>
  const shimTag = `
  <!-- Learnify LAN Shims & Unconditional Motion -->
  <script>
    if (!window.crypto) window.crypto = {};
    if (!window.crypto.randomUUID) {
      window.crypto.randomUUID = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      };
    }
  </script>`;
  if (!updatedHtml.includes('window.crypto.randomUUID')) {
    updatedHtml = updatedHtml.replace(/<head>/i, `<head>${shimTag}`);
  }

  // Standardize preview pill CTA to #FF5722 "LEARNIFY DASHBOARD"
  updatedHtml = updatedHtml.replace(/Buy this template →/g, 'LEARNIFY DASHBOARD →');
  updatedHtml = updatedHtml.replace(/Buy it →/g, 'LEARNIFY →');
  updatedHtml = updatedHtml.replace(/#ff5c3d/g, '#FF5722');

  fs.writeFileSync(path.join(targetDir, 'index.html'), updatedHtml, 'utf8');

  // 8. Generate clean css/ and js/ folders
  const cssDir = path.join(targetDir, 'css');
  const jsDir = path.join(targetDir, 'js');
  if (!fs.existsSync(cssDir)) fs.mkdirSync(cssDir, { recursive: true });
  if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });

  const formatCSS = (css) => css
    .replace(/\s*\{\s*/g, ' {\n  ')
    .replace(/\s*;\s*/g, ';\n  ')
    .replace(/\s*\}\s*/g, '\n}\n\n')
    .replace(/  \n/g, '\n')
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim() + '\n';

  for (const f of fs.readdirSync(assetsDir)) {
    const ext = path.extname(f).toLowerCase();
    const src = path.join(assetsDir, f);
    if (ext === '.css') {
      const sem = f.split('-')[0] + '.css';
      fs.writeFileSync(path.join(cssDir, sem), formatCSS(fs.readFileSync(src, 'utf8')), 'utf8');
    } else if (ext === '.js') {
      const sem = f.split('-')[0] + '.js';
      fs.copyFileSync(src, path.join(jsDir, sem));
    }
  }

  console.log(`✨ Successfully generated ${cfg.brandName} at ${cfg.targetFolder}/`);
}

async function main() {
  const filter = process.argv[2];
  let toRun = SUITES;
  if (filter) {
    if (filter.startsWith('batch:')) {
      const b = parseInt(filter.split(':')[1]);
      toRun = SUITES.filter(s => s.batch === b);
    } else {
      toRun = SUITES.filter(s => s.targetFolder === filter || s.remoteSlug === filter);
    }
  }

  console.log(`Targeting ${toRun.length} suite(s) for replication...`);
  for (const suite of toRun) {
    await processSuite(suite);
  }
  console.log(`\n🎉 All targeted suites successfully processed!`);
}

main().catch(err => {
  console.error('Fatal error in replication runner:', err);
  process.exit(1);
});

