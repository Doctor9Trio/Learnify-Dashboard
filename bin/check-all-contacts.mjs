import fs from 'fs';
import path from 'path';

const dirs = ['aarambh', 'aamrai', 'kosh', 'sandhi', 'maitri', 'vastu'];

const summary = {};

for (const dir of dirs) {
  summary[dir] = {
    emails: new Set(),
    phones: new Set(),
    externalUrls: new Set(),
    authors: new Set()
  };

  function walk(current) {
    const list = fs.readdirSync(current);
    for (const item of list) {
      const full = path.join(current, item);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        walk(full);
      } else if (item.endsWith('.html') || item.endsWith('.js') || item.endsWith('.json')) {
        const text = fs.readFileSync(full, 'utf8');

        // Email regex
        const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
        for (const e of emails) {
          // Exclude internal js keywords or false positives
          if (!e.includes('example.com') && !e.includes('w3.org') && !e.includes('schema.org')) {
            summary[dir].emails.add(e);
          } else {
            summary[dir].emails.add(e);
          }
        }

        // Phone regex
        const phones = text.match(/tel:([^\s"'>]+)/g) || [];
        for (const p of phones) summary[dir].phones.add(p);

        // Specific phrases
        if (text.includes('hasib') || text.includes('Hasib')) summary[dir].authors.add('Hasib');
        if (text.includes('code_and_chill') || text.includes('codeandchill')) summary[dir].authors.add('codeandchill');
        if (text.includes('OVERSHOOT')) summary[dir].authors.add('OVERSHOOT');
      }
    }
  }
  walk(dir);
}

for (const dir of dirs) {
  console.log(`\n=================== ${dir} ===================`);
  console.log('Emails:', Array.from(summary[dir].emails));
  console.log('Phones:', Array.from(summary[dir].phones));
  console.log('Author/Brand mentions:', Array.from(summary[dir].authors));
}

