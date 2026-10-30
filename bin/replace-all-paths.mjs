import fs from 'fs';
import path from 'path';

function replaceInDir(dir, findRegex, replaceStr) {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      replaceInDir(full, findRegex, replaceStr);
    } else if (/\.(html|js|css|json)$/i.test(item.name)) {
      let content = fs.readFileSync(full, 'utf8');
      if (findRegex.test(content)) {
        content = content.replace(findRegex, replaceStr);
        fs.writeFileSync(full, content, 'utf8');
        console.log(`Replaced in ${full}`);
      }
    }
  }
}

replaceInDir('aarambh', /\/intro\/textures\//g, './textures/');
replaceInDir('aamrai', /\/mango\/textures\//g, './textures/');
replaceInDir('sandhi', /\/accord\/photos\//g, './photos/');
replaceInDir('vastu', /\/oria\/video\//g, './video/');
replaceInDir('vastu', /\/oria\/photos\//g, './photos/');

console.log('Done recursive path updates!');

