import fs from 'fs';

const targetPill = `<a class="cc-preview-pill" href="https://github.com/Doctor9Trio" target="_blank" rel="noopener noreferrer" aria-label="Contact Doctor9Trio on GitHub"><span class="cc-preview-pill__long">CONTACT US →</span><span class="cc-preview-pill__short">CONTACT →</span></a>`;

const dirs = ['aarambh', 'aamrai', 'kosh', 'sandhi', 'maitri', 'vastu'];

for (const dir of dirs) {
  const file = `${dir}/index.html`;
  if (!fs.existsSync(file)) {
    console.log(`Skipping ${file} - does not exist`);
    continue;
  }
  let html = fs.readFileSync(file, 'utf8');

  // Replace any existing cc-preview-pill anchor
  const regex = /<a[^>]*class=["'][^"']*cc-preview-pill[^"']*["'][^>]*>[\s\S]*?<\/a>/i;
  if (regex.test(html)) {
    html = html.replace(regex, targetPill);
    fs.writeFileSync(file, html, 'utf8');
    console.log(`Updated pill in ${file}`);
  } else {
    console.log(`Warning: No pill found in ${file}`);
  }
}

