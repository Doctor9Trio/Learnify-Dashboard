import fs from 'fs';
import path from 'path';

const suites = [
  'vanijya', 'bhoomi', 'bahikhata', 'samvad', 'kutumb', 'aarogya', 
  'dantika', 'rasayan', 'karigar', 'yantra', 'yatra', 'parivahan', 
  'karkhana', 'daksh', 'srijan', 'griha', 'mishri', 'kaala', 'gati', 'pangat',
  'aarambh', 'aamrai', 'kosh', 'sandhi', 'maitri', 'vastu'
];

function checkFile(filePath, suiteDir) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match src, href, url(), or string literals pointing to media/assets
  const regex = /(?:src=|href=|url\(['"]?|['"`])([^'"`\)\s>]+\.(?:mp4|webm|jpg|jpeg|png|webp|svg|gif|json|woff2?|ttf|otf))['"`\)]/gi;
  let match;
  const missing = new Set();
  while ((match = regex.exec(content)) !== null) {
    let url = match[1];
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.includes('${')) continue;
    // Strip leading ./ or /
    const clean = url.replace(/^\.?\//, '');
    const candPaths = [
      path.join(suiteDir, clean),
      path.join(process.cwd(), clean),
      path.join(suiteDir, 'photos', clean),
      path.join(suiteDir, 'images', clean),
      path.join(suiteDir, 'assets', clean),
      path.join(process.cwd(), 'photos', clean),
      path.join(process.cwd(), 'images', clean)
    ];
    const exists = candPaths.some(p => fs.existsSync(p));
    if (!exists) {
      missing.add(url);
    }
  }
  return [...missing];
}

for (const suite of suites) {
  const suiteDir = path.join(process.cwd(), suite);
  if (!fs.existsSync(suiteDir)) continue;
  const files = [];
  function walk(d) {
    for (const item of fs.readdirSync(d, { withFileTypes: true })) {
      if (item.name === 'node_modules' || item.name === '.git') continue;
      const full = path.join(d, item.name);
      if (item.isDirectory()) walk(full);
      else if (/\.(html|js|css)$/i.test(item.name)) files.push(full);
    }
  }
  walk(suiteDir);
  const suiteMissing = new Set();
  for (const f of files) {
    const m = checkFile(f, suiteDir);
    m.forEach(x => suiteMissing.add(x));
  }
  if (suiteMissing.size > 0) {
    console.log(`[${suite}] missing:`, [...suiteMissing]);
  }
}
console.log('Audit completed.');

