import fs from 'fs';

const text = fs.readFileSync('index.html', 'utf8');
const links = text.match(/href=["'][^"']+["']/g) || [];
const uniqueLinks = Array.from(new Set(links));

console.log('Total links:', links.length);
console.log('Unique links (first 25):', uniqueLinks.slice(0, 25));

const templateLinks = uniqueLinks.filter(l => l.includes('vanijya') || l.includes('aarambh') || l.includes('kosh') || l.includes('vastu') || l.includes('yantra'));
console.log('Sample template launch links:', templateLinks);

