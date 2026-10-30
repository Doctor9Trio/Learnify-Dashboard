import fs from 'fs';
import path from 'path';

const dirs = ['aarambh', 'aamrai', 'kosh', 'sandhi', 'maitri', 'vastu'];

for (const dir of dirs) {
  const htmlPath = path.join(dir, 'index.html');
  if (!fs.existsSync(htmlPath)) continue;

  const content = fs.readFileSync(htmlPath, 'utf8');
  console.log(`\n=================== ${dir} / index.html ===================`);
  
  // 1. Check title & meta
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');
  console.log('Meta Description:', descMatch ? descMatch[1] : 'N/A');

  // 2. Check for codeandchill or external links
  const extUrls = content.match(/https?:\/\/[^\s"'>]+/gi) || [];
  const relevantUrls = extUrls.filter(u => !u.includes('fonts.googleapis') && !u.includes('fonts.gstatic') && !u.includes('w3.org'));
  console.log('External URLs:', relevantUrls);

  // 3. Check for mailto
  const mailtos = content.match(/mailto:[^\s"'>]+/gi) || [];
  console.log('Mailtos:', mailtos);

  // 4. Check for preview pills or buy links
  const pills = content.match(/<a[^>]*class=["'][^"']*preview-pill[^"']*["'][^>]*>[\s\S]*?<\/a>/gi) || [];
  console.log('Preview Pills:', pills.map(p => p.trim().substring(0, 100)));

  // 5. Check for phone / address / contact
  const lines = content.split('\n');
  const contactLines = [];
  lines.forEach((l, i) => {
    if (/hasib|chill|support@|contact@|phone|tel:|\+31|\+91|endcard|contact/i.test(l)) {
      if (!l.includes('<link rel="stylesheet"') && !l.includes('fonts.googleapis')) {
        contactLines.push(`${i+1}: ${l.trim()}`);
      }
    }
  });
  console.log('Contact/Author lines:');
  contactLines.slice(0, 10).forEach(l => console.log('  ', l.substring(0, 120)));
}

