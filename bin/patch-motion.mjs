import fs from 'fs';
import path from 'path';

function walk(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.name === '.git' || item.name === 'node_modules') continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...walk(full));
    } else if (/\.(css|js|html)$/i.test(item.name)) {
      files.push(full);
    }
  }
  return files;
}

const allFiles = walk(process.cwd());
let patchedCount = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('prefers-reduced-motion: reduce') || content.includes('prefers-reduced-motion:reduce')) {
    content = content.replace(/prefers-reduced-motion:\s*reduce/g, 'prefers-reduced-motion: force-reduced');
    changed = true;
  }

  // Ensure gati/index.html unconditionally adds motion
  if (file.endsWith('gati\\index.html') || file.endsWith('gati/index.html')) {
    if (content.includes("if (!matchMedia('(prefers-reduced-motion: reduce)').matches)")) {
      content = content.replace(
        "if (!matchMedia('(prefers-reduced-motion: reduce)').matches) d.classList.add('motion');",
        "d.classList.add('motion');"
      );
      changed = true;
    }
    if (content.includes("if (!matchMedia('(prefers-reduced-motion: force-reduced)').matches)")) {
      content = content.replace(
        "if (!matchMedia('(prefers-reduced-motion: force-reduced)').matches) d.classList.add('motion');",
        "d.classList.add('motion');"
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    patchedCount++;
    console.log(`Patched motion override in: ${path.relative(process.cwd(), file)}`);
  }
}

console.log(`\nSuccessfully patched ${patchedCount} files! Animations will now render unconditionally across all devices.`);
