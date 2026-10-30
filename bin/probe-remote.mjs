import fs from 'fs';

const urls = [
  { slug: 'intro', url: 'https://demo.codeandchill.store/intro/' },
  { slug: 'mango', url: 'https://demo.codeandchill.store/mango/' },
  { slug: 'orvel', url: 'https://demo.codeandchill.store/orvel/' },
  { slug: 'accord', url: 'https://demo.codeandchill.store/accord/' },
  { slug: 'rapport', url: 'https://demo.codeandchill.store/rapport/' },
  { slug: 'oria', url: 'https://demo.codeandchill.store/oria/' }
];

async function inspectAll() {
  for (const item of urls) {
    try {
      const res = await fetch(item.url, { signal: AbortSignal.timeout(15000) });
      const text = await res.text();
      const titleMatch = text.match(/<title>(.*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : 'No title';
      
      const scriptMatches = [...text.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1]);
      const styleMatches = [...text.matchAll(/href=["']([^"']+\.css[^"']*)["']/gi)].map(m => m[1]);
      const photoMatches = [...text.matchAll(/["']([^"']*\.(?:png|jpg|jpeg|webp|svg|mp4))["']/gi)].map(m => m[1]);

      console.log('========================================================');
      console.log(`SLUG: ${item.slug}`);
      console.log(`URL: ${item.url}`);
      console.log(`Title: ${title}`);
      console.log(`Scripts (${scriptMatches.length}):`, scriptMatches);
      console.log(`Styles (${styleMatches.length}):`, styleMatches);
      console.log(`Sample assets (${photoMatches.length}):`, photoMatches.slice(0, 8));
    } catch (e) {
      console.error(`Error on ${item.slug}:`, e.message);
    }
  }
}

inspectAll();

