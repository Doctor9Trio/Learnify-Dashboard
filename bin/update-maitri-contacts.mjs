import fs from 'fs';
import path from 'path';

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else if (f.endsWith('.js') || f.endsWith('.json') || f.endsWith('.html')) {
      let content = fs.readFileSync(full, 'utf8');
      if (content.includes('rapport.app')) {
        content = content.replaceAll('@rapport.app', '@maitri-crm.in');
        content = content.replaceAll('https://rapport.app', 'https://maitri-crm.in');
        content = content.replaceAll('billing@rapport.app', 'billing@maitri-crm.in');
        fs.writeFileSync(full, content, 'utf8');
        console.log(`Updated ${full}`);
      }
    }
  }
}

walk('maitri');

