import fs from 'fs';

const templates = [
  'vanijya', 'bhoomi', 'bahikhata', 'samvad', 'kutumb',
  'aarogya', 'dantika', 'rasayan', 'karigar', 'yantra',
  'yatra', 'parivahan', 'karkhana', 'daksh', 'srijan',
  'griha', 'mishri', 'kaala', 'gati', 'pangat',
  'aarambh', 'aamrai', 'kosh', 'sandhi', 'maitri', 'vastu'
];

for (const t of templates) {
  const p = `${t}/index.html`;
  if (!fs.existsSync(p)) {
    console.log(`${t}: NOT FOUND`);
    continue;
  }
  const html = fs.readFileSync(p, 'utf8');
  const pillMatch = html.match(/<a[^>]*class=["'][^"']*cc-preview-pill[^"']*["'][^>]*>[\s\S]*?<\/a>/i);
  if (!pillMatch) {
    console.log(`${t}: NO PILL FOUND`);
  } else {
    const isGithub = pillMatch[0].includes('github.com/Doctor9Trio');
    const isContactUs = pillMatch[0].includes('CONTACT US');
    console.log(`${t}: [${isGithub && isContactUs ? 'GITHUB CONTACT US' : 'OTHER'}] -> ${pillMatch[0]}`);
  }
}

