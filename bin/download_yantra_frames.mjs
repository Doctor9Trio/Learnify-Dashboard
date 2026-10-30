import fs from 'fs';
import path from 'path';

const targetDir = path.resolve('yantra/photos/yantra/build');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Downloading 192 frames to', targetDir);

async function downloadFrame(i) {
  const numStr = String(i).padStart(3, '0');
  const file = path.join(targetDir, `${numStr}.webp`);
  if (fs.existsSync(file) && fs.statSync(file).size > 1000) {
    return { i, status: 'cached' };
  }
  const url = `https://demo.codeandchill.store/camber/photos/camber/build/${numStr}.webp`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(file, buf);
    return { i, status: 'ok', size: buf.length };
  } catch (err) {
    return { i, status: 'err', error: err.message };
  }
}

// download in batches of 10
async function run() {
  const results = [];
  const batchSize = 10;
  for (let i = 1; i <= 192; i += batchSize) {
    const batch = [];
    for (let j = i; j < i + batchSize && j <= 192; j++) {
      batch.push(downloadFrame(j));
    }
    const r = await Promise.all(batch);
    results.push(...r);
    process.stdout.write(`Downloaded up to frame ${Math.min(i + batchSize - 1, 192)}/192\r`);
  }
  const failed = results.filter(r => r.status === 'err');
  console.log(`\nCompleted! Success: ${results.length - failed.length}, Failed: ${failed.length}`);
  if (failed.length > 0) {
    console.error('Failed items:', failed.slice(0, 5));
  }
}

run();

