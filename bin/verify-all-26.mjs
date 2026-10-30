const suites = [
  { id: 'LNF-001', name: 'Vanijya Retail', url: 'http://localhost:3456/vanijya/#/dashboard' },
  { id: 'LNF-002', name: 'Bhoomi Outdoors', url: 'http://localhost:3456/bhoomi/' },
  { id: 'LNF-003', name: 'Bahi Khata', url: 'http://localhost:3456/bahikhata/#overview' },
  { id: 'LNF-004', name: 'Samvad Social', url: 'http://localhost:3456/samvad/#/overview' },
  { id: 'LNF-005', name: 'Kutumb Money', url: 'http://localhost:3456/kutumb/#/home' },
  { id: 'LNF-006', name: 'Aarogya Clinic', url: 'http://localhost:3456/aarogya/#/today' },
  { id: 'LNF-007', name: 'Dantika Clinic', url: 'http://localhost:3456/dantika/#/today' },
  { id: 'LNF-008', name: 'Rasayan Lab', url: 'http://localhost:3456/rasayan/#/dashboard/overview' },
  { id: 'LNF-009', name: 'Karigar Service', url: 'http://localhost:3456/karigar/#/cases' },
  { id: 'LNF-010', name: 'Yantra Auto', url: 'http://localhost:3456/yantra/' },
  { id: 'LNF-011', name: 'Yatra Mobility', url: 'http://localhost:3456/yatra/' },
  { id: 'LNF-012', name: 'Parivahan OS', url: 'http://localhost:3456/parivahan/#/overview' },
  { id: 'LNF-013', name: 'Karkhana ERP', url: 'http://localhost:3456/karkhana/#/dashboard' },
  { id: 'LNF-014', name: 'Daksh Dev', url: 'http://localhost:3456/daksh/' },
  { id: 'LNF-015', name: 'Srijan Studio', url: 'http://localhost:3456/srijan/' },
  { id: 'LNF-016', name: 'Griha Living', url: 'http://localhost:3456/griha/' },
  { id: 'LNF-017', name: 'Mishri 3D', url: 'http://localhost:3456/mishri/#' },
  { id: 'LNF-018', name: 'Kaala Studio', url: 'http://localhost:3456/kaala/' },
  { id: 'LNF-019', name: 'Gati Fitness', url: 'http://localhost:3456/gati/#/' },
  { id: 'LNF-020', name: 'Pangat POS', url: 'http://localhost:3456/pangat/#/overview' },
  { id: 'LNF-021', name: 'Aarambh Studio', url: 'http://localhost:3456/aarambh/' },
  { id: 'LNF-022', name: 'Aamrai Orchards', url: 'http://localhost:3456/aamrai/' },
  { id: 'LNF-023', name: 'Kosh Treasury', url: 'http://localhost:3456/kosh/#/overview' },
  { id: 'LNF-024', name: 'Sandhi Pipeline', url: 'http://localhost:3456/sandhi/' },
  { id: 'LNF-025', name: 'Maitri CRM', url: 'http://localhost:3456/maitri/#/overview' },
  { id: 'LNF-026', name: 'Vastu Living', url: 'http://localhost:3456/vastu/' }
];

async function verifyAll() {
  console.log(`Auditing all ${suites.length} Learnify templates on HTTP server...`);
  let passed = 0;
  for (const s of suites) {
    const fetchUrl = s.url.split('#')[0];
    try {
      const res = await fetch(fetchUrl);
      if (res.status === 200) {
        console.log(`[PASS] ${s.id} | ${s.name.padEnd(20)} | 200 OK | ${fetchUrl}`);
        passed++;
      } else {
        console.error(`[FAIL] ${s.id} | ${s.name} | HTTP ${res.status}`);
      }
    } catch (err) {
      console.error(`[FAIL] ${s.id} | ${s.name} | ${err.message}`);
    }
  }
  console.log(`\nResult: ${passed}/${suites.length} templates passed with 200 OK!`);
}

verifyAll();

