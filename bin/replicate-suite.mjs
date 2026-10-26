import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

export async function downloadFile(url, destPath, retries = 3) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
      return true;
    } catch (err) {
      if (attempt === retries) {
        console.warn(`[WARN] Failed to download ${url}: ${err.message}`);
        return false;
      }
      await new Promise(r => setTimeout(r, 1200 * attempt));
    }
  }
}

export async function replicateSuite({
  name,
  baseUrl,
  brandTitle,
  brandName,
  brandSubtitle,
  photoFolder = null,
  photoPattern = null
}) {
  console.log(`\n============================================================`);
  console.log(`🚀 REA REPLICATING SUITE: ${brandName} (${name})`);
  console.log(`🌐 Source: ${baseUrl}`);
  console.log(`============================================================`);

  const targetDir = path.join(ROOT_DIR, name);
  const assetsDir = path.join(targetDir, 'assets');
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

  const htmlUrl = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  const htmlRes = await fetch(htmlUrl, { signal: AbortSignal.timeout(12000) });
  const html = await htmlRes.text();

  // 1. Initial assets from HTML
  const initialMatches = [...html.matchAll(/(?:src|href)=["']([^"']*\/(?:assets\/[^"']+))["']/g)].map(m => m[1]);
  const initialAssets = new Set(initialMatches.map(p => path.basename(p)));
  console.log(`[1/5] Found ${initialAssets.size} initial bundle chunks in HTML`);

  for (const asset of initialAssets) {
    const dest = path.join(assetsDir, asset);
    if (!fs.existsSync(dest) || fs.statSync(dest).size === 0) {
      await downloadFile(`${htmlUrl}assets/${asset}`, dest);
      console.log(`  ✓ Bundle: ${asset}`);
    }
  }

  // 2. Chained asset discovery (scanning JS & CSS)
  console.log(`[2/5] Scanning Abstract Syntax Tree & dynamic chunk dependency graph...`);
  let scanned = new Set();
  let foundNew = true;
  while (foundNew) {
    foundNew = false;
    const files = fs.readdirSync(assetsDir);
    for (const f of files) {
      if (scanned.has(f)) continue;
      scanned.add(f);
      const ext = path.extname(f);
      if (ext === '.js' || ext === '.css') {
        const content = fs.readFileSync(path.join(assetsDir, f), 'utf8');
        const matches = content.match(/assets\/[a-zA-Z0-9_\-\.]+\.(?:js|css|svg|png|webp|woff2|jpg)/g);
        if (matches) {
          for (const m of matches) {
            const base = path.basename(m);
            const dest = path.join(assetsDir, base);
            if (!fs.existsSync(dest) || fs.statSync(dest).size === 0) {
              foundNew = true;
              const ok = await downloadFile(`${htmlUrl}assets/${base}`, dest);
              if (ok) console.log(`  ✓ Dynamic chunk: ${base}`);
            }
          }
        }
      }
    }
  }

  // 3. Harvest photo assets if defined
  if (photoFolder) {
    console.log(`[3/5] Scanning and downloading catalog media assets...`);
    const allFiles = fs.readdirSync(assetsDir);
    let allContent = html;
    for (const f of allFiles) {
      allContent += ' ' + fs.readFileSync(path.join(assetsDir, f), 'utf8');
    }

    const pRegex = photoPattern || /photo\s*:\s*[`'"]([a-zA-Z0-9_\-]+)[`'"]/g;
    const matches = allContent.match(pRegex) || [];
    const photoNames = [...new Set(matches.map(m => {
      const match = m.match(/[`'"]([a-zA-Z0-9_\-]+)[`'"]/);
      return match ? match[1] : null;
    }).filter(Boolean))];

    console.log(`  Found ${photoNames.length} media photos for ${photoFolder}`);
    for (const p of photoNames) {
      const url = `${htmlUrl}photos/${photoFolder}/${p}.webp`;
      const dest = path.join(targetDir, `photos/${photoFolder}/${p}.webp`);
      if (!fs.existsSync(dest)) {
        const ok = await downloadFile(url, dest);
        if (ok) console.log(`  ✓ Photo: ${p}.webp`);
      }
    }
  } else {
    console.log(`[3/5] No catalog photo folder specified, skipping media harvest.`);
  }

  // 4. Relative Path Resolution (Vite import resolver rewrite)
  console.log(`[4/5] Applying subfolder relative path resolution...`);
  const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
  for (const j of jsFiles) {
    const p = path.join(assetsDir, j);
    let code = fs.readFileSync(p, 'utf8');
    let mod = false;

    // Vite resolver pattern
    const viteBaseRegex = new RegExp(`return\\s*[\`'"]/${name}/[\`'"]\\s*\\+\\s*([a-zA-Z0-9_]+)`, 'g');
    if (viteBaseRegex.test(code)) {
      code = code.replace(viteBaseRegex, 'return `./` + $1');
      mod = true;
      console.log(`  ✓ Replaced Vite dynamic resolver in ${j}`);
    }

    // Static assets rewrite
    const staticBaseRegex = new RegExp(`["']/${name}/assets/`, 'g');
    if (staticBaseRegex.test(code)) {
      code = code.replace(staticBaseRegex, `'./assets/`);
      mod = true;
      console.log(`  ✓ Replaced static assets path in ${j}`);
    }

    // Static photos rewrite
    const photosBaseRegex = new RegExp(`["']/${name}/photos/`, 'g');
    if (photosBaseRegex.test(code)) {
      code = code.replace(photosBaseRegex, `'./photos/`);
      mod = true;
      console.log(`  ✓ Replaced photos path in ${j}`);
    }

    if (mod) fs.writeFileSync(p, code, 'utf8');
  }

  // 5. Contextual Indian Brand Localization in index.html
  console.log(`[5/5] Applying Indian branding and CTA button to index.html...`);
  let updatedHtml = html;

  // Relative assets in HTML
  const absAssetRegex = new RegExp(`/(?:${name}/)?assets/`, 'g');
  updatedHtml = updatedHtml.replace(absAssetRegex, './assets/');

  const absPhotoRegex = new RegExp(`/(?:${name}/)?photos/`, 'g');
  updatedHtml = updatedHtml.replace(absPhotoRegex, './photos/');

  // Brand title
  if (brandTitle) {
    updatedHtml = updatedHtml.replace(/<title>.*?<\/title>/i, `<title>${brandTitle}</title>`);
    updatedHtml = updatedHtml.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${brandTitle}" />`);
  }

  // Brand marks & names in header
  if (brandName) {
    const brandNameRegex = new RegExp(`<span class="brand__name">${name}</span>`, 'gi');
    updatedHtml = updatedHtml.replace(brandNameRegex, `<span class="brand__name">${brandName}</span>`);
    const brandTitleRegex = new RegExp(`<span class="brand__title">${name}</span>`, 'gi');
    updatedHtml = updatedHtml.replace(brandTitleRegex, `<span class="brand__title">${brandName}</span>`);
    const brandTextRegex = new RegExp(`<span class="brand__text">${name}<small>.*?</small></span>`, 'gis');
    updatedHtml = updatedHtml.replace(brandTextRegex, `<span class="brand__text">${brandName}<small>${brandSubtitle || ''}</small></span>`);
    const brandBoldRegex = new RegExp(`<span class="brand__text"><b>${name}</b><small>.*?</small></span>`, 'gis');
    updatedHtml = updatedHtml.replace(brandBoldRegex, `<span class="brand__text"><b>${brandName}</b><small>${brandSubtitle || ''}</small></span>`);
  }

  // Standardize CTA button to #FF5722 "START FREE TRIAL →"
  updatedHtml = updatedHtml.replace(/Buy this template →/g, 'START FREE TRIAL →');
  updatedHtml = updatedHtml.replace(/Buy it →/g, 'START →');
  updatedHtml = updatedHtml.replace(/#ff5c3d/g, '#FF5722');

  fs.writeFileSync(path.join(targetDir, 'index.html'), updatedHtml, 'utf8');
  console.log(`✨ Suite ${name} successfully configured and ready at ${targetDir}/index.html!\n`);
}

// CLI direct run support
if (process.argv[2]) {
  const suiteName = process.argv[2];
  console.log(`Running CLI replication for ${suiteName}...`);
}
