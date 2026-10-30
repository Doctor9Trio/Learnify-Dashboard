import fs from 'fs';
import path from 'path';

async function download(url, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log(`✓ Downloaded ${path.basename(dest)} from ${url} (${buf.length} bytes)`);
}

async function run() {
  // 1. Download grain textures
  await download('https://demo.codeandchill.store/intro/textures/grain.png', 'aarambh/textures/grain.png');
  await download('https://demo.codeandchill.store/mango/textures/grain.png', 'aamrai/textures/grain.png');

  // 2. Rewrite grain paths in aarambh CSS
  for (const f of fs.readdirSync('aarambh/assets')) {
    if (f.endsWith('.css') || f.endsWith('.js')) {
      const p = path.join('aarambh/assets', f);
      let content = fs.readFileSync(p, 'utf8');
      if (content.includes('/intro/textures/grain.png')) {
        content = content.replace(/\/intro\/textures\/grain\.png/g, './textures/grain.png');
        fs.writeFileSync(p, content, 'utf8');
        console.log(`✓ Replaced grain path in ${p}`);
      }
    }
  }

  // 3. Rewrite grain paths in aamrai CSS
  for (const f of fs.readdirSync('aamrai/assets')) {
    if (f.endsWith('.css') || f.endsWith('.js')) {
      const p = path.join('aamrai/assets', f);
      let content = fs.readFileSync(p, 'utf8');
      if (content.includes('/mango/textures/grain.png')) {
        content = content.replace(/\/mango\/textures\/grain\.png/g, './textures/grain.png');
        fs.writeFileSync(p, content, 'utf8');
        console.log(`✓ Replaced grain path in ${p}`);
      }
    }
  }

  // 4. Rewrite /accord/photos/ in sandhi
  for (const f of fs.readdirSync('sandhi/assets')) {
    if (f.endsWith('.js') || f.endsWith('.css')) {
      const p = path.join('sandhi/assets', f);
      let content = fs.readFileSync(p, 'utf8');
      if (content.includes('/accord/photos/')) {
        content = content.replace(/\/accord\/photos\//g, './photos/');
        fs.writeFileSync(p, content, 'utf8');
        console.log(`✓ Replaced /accord/photos/ in ${p}`);
      }
    }
  }
  let sandhiHtml = fs.readFileSync('sandhi/index.html', 'utf8');
  if (sandhiHtml.includes('/accord/photos/')) {
    sandhiHtml = sandhiHtml.replace(/\/accord\/photos\//g, './photos/');
    fs.writeFileSync('sandhi/index.html', sandhiHtml, 'utf8');
    console.log(`✓ Replaced /accord/photos/ in sandhi/index.html`);
  }

  // 5. Rewrite /oria/video/ in vastu
  for (const f of fs.readdirSync('vastu/assets')) {
    if (f.endsWith('.js') || f.endsWith('.css')) {
      const p = path.join('vastu/assets', f);
      let content = fs.readFileSync(p, 'utf8');
      let changed = false;
      if (content.includes('/oria/video/')) {
        content = content.replace(/\/oria\/video\//g, './video/');
        changed = true;
      }
      if (content.includes('/oria/photos/')) {
        content = content.replace(/\/oria\/photos\//g, './photos/');
        changed = true;
      }
      if (changed) {
        fs.writeFileSync(p, content, 'utf8');
        console.log(`✓ Replaced video/photos paths in ${p}`);
      }
    }
  }
  let vastuHtml = fs.readFileSync('vastu/index.html', 'utf8');
  if (vastuHtml.includes('/oria/video/')) {
    vastuHtml = vastuHtml.replace(/\/oria\/video\//g, './video/');
    fs.writeFileSync('vastu/index.html', vastuHtml, 'utf8');
    console.log(`✓ Replaced video paths in vastu/index.html`);
  }

  // 6. Create dummy mock fair-tables.jpg for kosh if not present
  const fairDest = path.resolve('kosh/fair-tables.jpg');
  if (!fs.existsSync(fairDest)) {
    // 1x1 transparent/neutral jpeg
    const miniJpg = Buffer.from('/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=', 'base64');
    fs.writeFileSync(fairDest, miniJpg);
    console.log(`✓ Created placeholder ${fairDest}`);
  }

  console.log('\nAll patches applied successfully!');
}

run();

