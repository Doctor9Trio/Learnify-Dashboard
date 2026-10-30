import fs from 'fs';
import path from 'path';

const suites = [
  "vanijya", "bhoomi", "bahikhata", "samvad", "kutumb", "aarogya", 
  "dantika", "rasayan", "karigar", "yantra", "yatra", "parivahan", 
  "karkhana", "daksh", "srijan", "griha", "mishri", "kaala", "gati", "pangat"
];

for (const suite of suites) {
  const dir = path.join(process.cwd(), suite);
  if (!fs.existsSync(dir)) continue;

  const missing = [];
  function scan(cur) {
    for (const item of fs.readdirSync(cur, {withFileTypes:true})) {
      if (item.name === "node_modules" || item.name === ".git") continue;
      const full = path.join(cur, item.name);
      if (item.isDirectory()) scan(full);
      else if (item.name.endsWith(".js") || item.name.endsWith(".html")) {
        const text = fs.readFileSync(full, "utf8");
        const m = text.match(/['"`]([^'"`\s\(\)]+\.(?:jpg|jpeg|png|webp|svg|gif|mp4))['"`]/gi) || [];
        for (const match of m) {
          const raw = match.slice(1, -1);
          if (raw.startsWith("http") || raw.startsWith("data:") || raw.includes("${")) continue;
          let clean = raw.replace(/^\.?\//, "");
          const cand1 = path.join(dir, clean);
          const cand2 = path.join(process.cwd(), clean);
          const cand3 = path.join(dir, "photos", clean);
          const cand4 = path.join(process.cwd(), "photos", clean);
          if (!fs.existsSync(cand1) && !fs.existsSync(cand2) && !fs.existsSync(cand3) && !fs.existsSync(cand4)) {
            missing.push({ file: path.relative(dir, full), raw });
          }
        }
      }
    }
  }
  scan(dir);
  if (missing.length > 0) {
    console.log(`Suite ${suite} has ${missing.length} missing asset references:`);
    const unique = [...new Set(missing.map(m => m.raw))];
    unique.slice(0, 10).forEach(u => console.log("  - " + u));
    if (unique.length > 10) console.log(`  ... and ${unique.length - 10} more`);
  }
}

