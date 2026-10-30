import fs from 'fs';
import path from 'path';

const e = {
  A1:{widths:[800,1600]},
  A2:{widths:[800,1600]},
  A3:{widths:[800,1600]},
  C1:{widths:[800,1600]},
  C2:{widths:[800,1600]},
  C3:{widths:[800,1600]},
  C4:{widths:[800,1600]},
  C5:{widths:[800,1600]},
  H1:{widths:[1280,1920,2560]},
  H2:{widths:[720,1080]},
  P1:{widths:[800,1600]},
  P2:{widths:[800,1600]},
  P3:{widths:[800,1600]},
  P4:{widths:[800,1600]},
  P5:{widths:[800,1600]},
  P6:{widths:[800,1600]},
  P7:{widths:[800,1600]},
  W1:{widths:[960,1600,2400]}
};

const v = [
  'hero-lg.mp4', 'hero-sm.mp4',
  'workshop-lg.mp4', 'workshop-sm.mp4'
];

const photoDir = path.resolve('vastu/photos/oria');
const videoDir = path.resolve('vastu/video/oria');
if (!fs.existsSync(photoDir)) fs.mkdirSync(photoDir, { recursive: true });
if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

async function download(url, dest) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 500) return true;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log(`  ✓ Downloaded ${path.basename(dest)} (${(buf.length / 1024).toFixed(1)} KB)`);
    return true;
  } catch (err) {
    console.warn(`  ✗ Failed ${url}: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log('Downloading all Vastu/Oria catalog images...');
  for (const [k, obj] of Object.entries(e)) {
    for (const w of obj.widths) {
      const filename = `${k.toLowerCase()}-${w}.webp`;
      const url = `https://demo.codeandchill.store/oria/photos/oria/${filename}`;
      const dest = path.join(photoDir, filename);
      await download(url, dest);
    }
  }

  console.log('Downloading all Vastu/Oria video assets...');
  for (const f of v) {
    const url = `https://demo.codeandchill.store/oria/video/oria/${f}`;
    const dest = path.join(videoDir, f);
    await download(url, dest);
  }

  console.log('Rewriting paths in vastu/assets/shell-7p__bljo.js...');
  const shellPath = 'vastu/assets/shell-7p__bljo.js';
  let shell = fs.readFileSync(shellPath, 'utf8');
  shell = shell.replace(/\/oria\/photos\/oria\//g, './photos/oria/');
  shell = shell.replace(/\/oria\/video\/oria\//g, './video/oria/');
  fs.writeFileSync(shellPath, shell, 'utf8');
  console.log('Done!');
}

main();

