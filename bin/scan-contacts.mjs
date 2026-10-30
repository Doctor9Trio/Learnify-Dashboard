import fs from 'fs';
import path from 'path';

const dirs = ['aarambh', 'aamrai', 'kosh', 'sandhi', 'maitri', 'vastu'];
const patterns = [
  /hasib/i,
  /code_and_chill/i,
  /codeandchill/i,
  /mailto:[^\s"'>]+/i,
  /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i,
  /contact/i,
  /phone/i,
  /overshoot/i
];

const results = {};

for (const dir of dirs) {
  results[dir] = [];
  if (!fs.existsSync(dir)) continue;

  function walk(current) {
    const files = fs.readdirSync(current);
    for (const f of files) {
      const full = path.join(current, f);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        walk(full);
      } else if (f.endsWith('.html') || f.endsWith('.js') || f.endsWith('.json')) {
        const content = fs.readFileSync(full, 'utf8');
        const lines = content.split('\n');
        lines.forEach((line, idx) => {
          // Exclude mundane variable names if purely internal
          for (const pat of patterns) {
            if (pat.test(line)) {
              results[dir].push({
                file: path.relative(process.cwd(), full).replace(/\\/g, '/'),
                line: idx + 1,
                snippet: line.trim().substring(0, 140)
              });
              break;
            }
          }
        });
      }
    }
  }
  walk(dir);
}

for (const [dir, matches] of Object.entries(results)) {
  console.log(`\n=== SUITE: ${dir} (${matches.length} matches) ===`);
  // Filter for the most important items (emails, external links, branding)
  const important = matches.filter(m =>
    /hasib|chill|mailto:|@|overshoot|contact-us|support|phone/i.test(m.snippet)
  );
  for (const m of important.slice(0, 25)) {
    console.log(`  ${m.file}:${m.line} -> ${m.snippet}`);
  }
}

