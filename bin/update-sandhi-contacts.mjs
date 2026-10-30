import fs from 'fs';

const files = ['sandhi/js/index.js', 'sandhi/assets/index-DtoNja2p.js'];

for (const p of files) {
  if (!fs.existsSync(p)) continue;
  let text = fs.readFileSync(p, 'utf8');
  text = text.replaceAll('@accordhq.com', '@sandhipipeline.in');
  text = text.replaceAll('+1 (503) 555-0', '+91 98201 0');
  fs.writeFileSync(p, text, 'utf8');
  console.log(`Updated ${p}`);
}

