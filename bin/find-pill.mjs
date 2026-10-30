import fs from 'fs';

const dirs = ['vanijya', 'bhoomi', 'bahikhata', 'samvad', 'kutumb', 'aarogya', 'dantika', 'yantra', 'karkhana', 'daksh'];

for (const d of dirs) {
  const p = d + '/index.html';
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const pills = text.match(/<a[^>]*class=["'][^"']*preview-pill[^"']*["'][^>]*>[\s\S]*?<\/a>/gi) || [];
    const git = text.match(/https?:\/\/[^\s"'>]*github[^\s"'>]*/gi) || [];
    const contactLinks = text.match(/<a[^>]*href=["'][^"']*github[^"']*["'][^>]*>[\s\S]*?<\/a>/gi) || [];
    const bottomFloats = text.match(/<a[^>]*(bottom|fixed|contact|github)[^>]*>[\s\S]*?<\/a>/gi) || [];
    
    console.log(`\n=== ${d} ===`);
    console.log('Pills:', pills);
    console.log('Github links:', git);
    console.log('Contact/Github elements:', contactLinks);
  }
}

