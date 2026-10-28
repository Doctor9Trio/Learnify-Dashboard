/**
 * store.js — Centralized Reactive Data Store for Sarthak Dashboard
 * Contains realistic e-commerce datasets: products, orders, customers,
 * messages, email campaigns, automations, analytics, workspace boards,
 * integrations, help FAQs, feedback, and settings.
 */

const STORAGE_KEY = 'sarthak_store_data';

// ── Default Mock Database ────────────────────────────────────
const initialData = {
  // ── Products Catalog (12 items) ──
  products: [
    { id: 'p1', name: 'Waxed Canvas Field Jacket', sku: 'JKT-081', category: 'Apparel', price: 248, cost: 98, stock: 42, maxStock: 60, rating: 4.9, sales30d: 114, status: 'active', desc: 'Heavyweight 10oz waxed canvas with brass hardware and corduroy lining.' },
    { id: 'p2', name: 'Heavyweight Utility Overshirt', sku: 'SHR-042', category: 'Apparel', price: 135, cost: 52, stock: 18, maxStock: 50, rating: 4.8, sales30d: 86, status: 'active', desc: 'Dense brushed cotton twill with dual chest flap pockets.' },
    { id: 'p3', name: 'Raw Selvedge Denim 14oz', sku: 'DNM-101', category: 'Apparel', price: 185, cost: 70, stock: 3, maxStock: 40, rating: 4.9, sales30d: 94, status: 'low_stock', desc: 'Kuroki mill Japanese selvedge denim in a clean relaxed-taper fit.' },
    { id: 'p4', name: 'Goodyear Welt Service Boot', sku: 'BOT-014', category: 'Footwear', price: 340, cost: 140, stock: 24, maxStock: 35, rating: 5.0, sales30d: 62, status: 'active', desc: 'Horween Chromexcel leather with Dainite studded rubber soles.' },
    { id: 'p5', name: 'Merino Wool Waffle Crew', sku: 'KNT-023', category: 'Apparel', price: 148, cost: 58, stock: 31, maxStock: 45, rating: 4.7, sales30d: 78, status: 'active', desc: '100% extra-fine merino wool knitted in an insulating waffle stitch.' },
    { id: 'p6', name: 'Brass & Bridle Leather Belt', sku: 'ACC-009', category: 'Accessories', price: 78, cost: 28, stock: 55, maxStock: 70, rating: 4.8, sales30d: 140, status: 'active', desc: 'English bridle leather with hand-burnished edges and solid cast brass buckle.' },
    { id: 'p7', name: 'Canvas & Leather Weekend Duffle', sku: 'BAG-005', category: 'Accessories', price: 295, cost: 115, stock: 0, maxStock: 25, rating: 4.9, sales30d: 48, status: 'out_of_stock', desc: 'Rugged 18oz water-repellent canvas with vegetable-tanned leather trim.' },
    { id: 'p8', name: 'Hand-Poured Soy Amber Candle', sku: 'HOM-012', category: 'Home Goods', price: 34, cost: 11, stock: 84, maxStock: 100, rating: 4.6, sales30d: 182, status: 'active', desc: 'Cedarwood, vetiver, and smoked birch in an apothecary amber jar.' },
    { id: 'p9', name: 'Heavy Chambray Workshirt', sku: 'SHR-038', category: 'Apparel', price: 118, cost: 44, stock: 27, maxStock: 45, rating: 4.8, sales30d: 92, status: 'active', desc: 'Triple-stitched 8oz indigo dyed cotton chambray with cats-eye buttons.' },
    { id: 'p10', name: 'Enamel Camp Mug (Set of 2)', sku: 'HOM-004', category: 'Home Goods', price: 42, cost: 15, stock: 45, maxStock: 60, rating: 4.5, sales30d: 110, status: 'active', desc: 'Double-dipped steel enamelware suitable for campfire and stovetop.' },
    { id: 'p11', name: 'Camp Blanket - Virgin Wool', sku: 'HOM-020', category: 'Home Goods', price: 210, cost: 82, stock: 12, maxStock: 30, rating: 4.9, sales30d: 38, status: 'active', desc: 'Jacquard-woven wool blend with whipstitched edges, woven in Oregon.' },
    { id: 'p12', name: 'Cedar Shoe Care Kit', sku: 'ACC-031', category: 'Accessories', price: 65, cost: 22, stock: 2, maxStock: 30, rating: 4.7, sales30d: 54, status: 'low_stock', desc: 'Horsehair brushes, beeswax dressing, and natural cedar storage valet.' }
  ],

  // ── Orders (12 orders) ──
  orders: [
    { id: '#1048', customerId: 'c1', customerName: 'Alex Mercer', channel: 'online', date: 'Oct 24, 2026', total: 433, itemsCount: 2, paymentStatus: 'paid', fulfillmentStatus: 'unfulfilled', items: [{ productId: 'p1', name: 'Waxed Canvas Field Jacket', price: 248, qty: 1 }, { id: 'p3', name: 'Raw Selvedge Denim 14oz', price: 185, qty: 1 }] },
    { id: '#1047', customerId: 'c2', customerName: 'Elena Rostova', channel: 'harbor', date: 'Oct 24, 2026', total: 340, itemsCount: 1, paymentStatus: 'paid', fulfillmentStatus: 'fulfilled', items: [{ productId: 'p4', name: 'Goodyear Welt Service Boot', price: 340, qty: 1 }] },
    { id: '#1046', customerId: 'c3', customerName: 'Marcus Vance', channel: 'online', date: 'Oct 23, 2026', total: 283, itemsCount: 2, paymentStatus: 'paid', fulfillmentStatus: 'unfulfilled', items: [{ productId: 'p2', name: 'Heavyweight Utility Overshirt', price: 135, qty: 1 }, { productId: 'p5', name: 'Merino Wool Waffle Crew', price: 148, qty: 1 }] },
    { id: '#1045', customerId: 'c4', customerName: 'Chloe Bennett', channel: 'downtown', date: 'Oct 23, 2026', total: 76, itemsCount: 2, paymentStatus: 'paid', fulfillmentStatus: 'fulfilled', items: [{ productId: 'p8', name: 'Hand-Poured Soy Amber Candle', price: 34, qty: 1 }, { productId: 'p10', name: 'Enamel Camp Mug (Set of 2)', price: 42, qty: 1 }] },
    { id: '#1044', customerId: 'c5', customerName: 'Liam O’Connor', channel: 'online', date: 'Oct 22, 2026', total: 588, itemsCount: 3, paymentStatus: 'paid', fulfillmentStatus: 'fulfilled', items: [{ productId: 'p1', name: 'Waxed Canvas Field Jacket', price: 248, qty: 1 }, { productId: 'p4', name: 'Goodyear Welt Service Boot', price: 340, qty: 1 }] },
    { id: '#1043', customerId: 'c6', customerName: 'Devon Patel', channel: 'online', date: 'Oct 22, 2026', total: 148, itemsCount: 1, paymentStatus: 'paid', fulfillmentStatus: 'unfulfilled', items: [{ productId: 'p5', name: 'Merino Wool Waffle Crew', price: 148, qty: 1 }] },
    { id: '#1042', customerId: 'c7', customerName: 'Sophia Lindqvist', channel: 'harbor', date: 'Oct 21, 2026', total: 210, itemsCount: 1, paymentStatus: 'paid', fulfillmentStatus: 'fulfilled', items: [{ productId: 'p11', name: 'Camp Blanket - Virgin Wool', price: 210, qty: 1 }] },
    { id: '#1041', customerId: 'c8', customerName: 'Kai Tanaka', channel: 'online', date: 'Oct 21, 2026', total: 196, itemsCount: 2, paymentStatus: 'refunded', fulfillmentStatus: 'refunded', items: [{ productId: 'p9', name: 'Heavy Chambray Workshirt', price: 118, qty: 1 }, { productId: 'p6', name: 'Brass & Bridle Leather Belt', price: 78, qty: 1 }] },
    { id: '#1040', customerId: 'c9', customerName: 'Hannah Abbott', channel: 'online', date: 'Oct 20, 2026', total: 326, itemsCount: 2, paymentStatus: 'paid', fulfillmentStatus: 'fulfilled', items: [{ productId: 'p2', name: 'Heavyweight Utility Overshirt', price: 135, qty: 1 }, { productId: 'p3', name: 'Raw Selvedge Denim 14oz', price: 185, qty: 1 }] },
    { id: '#1039', customerId: 'c10', customerName: 'Jordan Reyes', channel: 'downtown', date: 'Oct 19, 2026', total: 78, itemsCount: 1, paymentStatus: 'paid', fulfillmentStatus: 'fulfilled', items: [{ productId: 'p6', name: 'Brass & Bridle Leather Belt', price: 78, qty: 1 }] },
    { id: '#1038', customerId: 'c1', customerName: 'Alex Mercer', channel: 'online', date: 'Oct 18, 2026', total: 118, itemsCount: 1, paymentStatus: 'paid', fulfillmentStatus: 'fulfilled', items: [{ productId: 'p9', name: 'Heavy Chambray Workshirt', price: 118, qty: 1 }] },
    { id: '#1037', customerId: 'c11', customerName: 'Zoe Morales', channel: 'online', date: 'Oct 17, 2026', total: 375, itemsCount: 2, paymentStatus: 'paid', fulfillmentStatus: 'fulfilled', items: [{ productId: 'p1', name: 'Waxed Canvas Field Jacket', price: 248, qty: 1 }, { productId: 'p9', name: 'Heavy Chambray Workshirt', price: 118, qty: 1 }] }
  ],

  // ── Customers CRM (10 customers) ──
  customers: [
    { id: 'c1', name: 'Alex Mercer', email: 'alex.mercer@gmail.com', city: 'Portland, OR', spent: 1420, ordersCount: 6, tag: 'VIP', lastOrder: 'Oct 24, 2026', notes: 'Prefers expedited ground shipping. Size Large in jackets.', spendHistory: [140, 280, 0, 118, 433, 449] },
    { id: 'c2', name: 'Elena Rostova', email: 'elena.rostova@icloud.com', city: 'Seattle, WA', spent: 980, ordersCount: 4, tag: 'Wholesale', lastOrder: 'Oct 24, 2026', notes: 'Harbor shop regular. Likes bespoke leather goods.', spendHistory: [0, 320, 320, 0, 340, 0] },
    { id: 'c3', name: 'Marcus Vance', email: 'mvance@outlook.com', city: 'San Francisco, CA', spent: 840, ordersCount: 3, tag: 'VIP', lastOrder: 'Oct 23, 2026', notes: 'Reached out about wool restock.', spendHistory: [210, 0, 347, 0, 283, 0] },
    { id: 'c4', name: 'Chloe Bennett', email: 'cbennett@gmail.com', city: 'Austin, TX', spent: 410, ordersCount: 5, tag: 'Repeat', lastOrder: 'Oct 23, 2026', notes: 'Frequent buyer of Home Goods line.', spendHistory: [68, 84, 98, 84, 76, 0] },
    { id: 'c5', name: 'Liam O’Connor', email: 'liam.oc@protonmail.com', city: 'Denver, CO', spent: 1890, ordersCount: 7, tag: 'VIP', lastOrder: 'Oct 22, 2026', notes: 'Brand ambassador candidate. Excellent NPS score.', spendHistory: [310, 420, 248, 185, 588, 139] },
    { id: 'c6', name: 'Devon Patel', email: 'devon.p@gmail.com', city: 'Chicago, IL', spent: 395, ordersCount: 2, tag: 'Repeat', lastOrder: 'Oct 22, 2026', notes: 'First online purchase in September.', spendHistory: [0, 0, 247, 0, 148, 0] },
    { id: 'c7', name: 'Sophia Lindqvist', email: 'sophia.l@nordic.se', city: 'Minneapolis, MN', spent: 630, ordersCount: 3, tag: 'Repeat', lastOrder: 'Oct 21, 2026', notes: 'Loves wool textiles and camp gear.', spendHistory: [210, 0, 210, 0, 210, 0] },
    { id: 'c8', name: 'Kai Tanaka', email: 'kai.tanaka@tokyo.net', city: 'Vancouver, BC', spent: 512, ordersCount: 3, tag: 'Standard', lastOrder: 'Oct 21, 2026', notes: 'Requested size exchange on Chambray shirt.', spendHistory: [118, 198, 0, 0, 196, 0] },
    { id: 'c9', name: 'Hannah Abbott', email: 'hannah.a@gmail.com', city: 'Boston, MA', spent: 780, ordersCount: 4, tag: 'VIP', lastOrder: 'Oct 20, 2026', notes: 'Selvedge denim enthusiast.', spendHistory: [185, 185, 84, 0, 326, 0] },
    { id: 'c10', name: 'Jordan Reyes', email: 'jreyes@sbcglobal.net', city: 'Brooklyn, NY', spent: 310, ordersCount: 2, tag: 'Standard', lastOrder: 'Oct 19, 2026', notes: 'Downtown shop customer.', spendHistory: [0, 232, 0, 0, 78, 0] }
  ],

  // ── Support Messages (6 threads) ──
  messages: [
    { id: 'm1', customerId: 'c1', name: 'Alex Mercer', avatar: 'AM', subject: 'Exchange on Waxed Field Jacket sizing', lastMsg: 'I think the Large will fit much better across the shoulders. Thanks!', time: '12m ago', unread: true, thread: [
      { sender: 'customer', text: 'Hi! Just received order #1048. The Medium jacket is slightly tight across the back. Can I exchange for a Large?', time: '10:14 AM' },
      { sender: 'agent', text: 'Hello Alex! Absolutely. Large is in stock. I have put one aside for you and generated a prepaid return label.', time: '10:28 AM' },
      { sender: 'customer', text: 'I think the Large will fit much better across the shoulders. Thanks!', time: '10:35 AM' }
    ]},
    { id: 'm2', customerId: 'c3', name: 'Marcus Vance', avatar: 'MV', subject: 'Restock notification for Selvedge 14oz', lastMsg: 'Great, putting my order in now!', time: '1h ago', unread: true, thread: [
      { sender: 'customer', text: 'Hey there, will the 32x32 raw denim restock before the weekend?', time: '9:05 AM' },
      { sender: 'agent', text: 'Hi Marcus! Just unpacked a shipment from Kuroki mill this morning. Size 32 is live on site now.', time: '9:30 AM' },
      { sender: 'customer', text: 'Great, putting my order in now!', time: '9:42 AM' }
    ]},
    { id: 'm3', customerId: 'c8', name: 'Kai Tanaka', avatar: 'KT', subject: 'Tracking link for order #1041', lastMsg: 'Tracking shows package arrived at Vancouver hub.', time: '3h ago', unread: true, thread: [
      { sender: 'customer', text: 'Could you please confirm the DHL tracking number for order #1041?', time: '7:15 AM' },
      { sender: 'agent', text: 'Tracking is DHL-9842104921. It cleared customs yesterday.', time: '7:45 AM' },
      { sender: 'customer', text: 'Tracking shows package arrived at Vancouver hub.', time: '8:05 AM' }
    ]},
    { id: 'm4', customerId: 'c2', name: 'Elena Rostova', avatar: 'ER', subject: 'Wholesale catalog request for Winter', lastMsg: 'Attached our wholesale linesheet and order minimums.', time: 'Yesterday', unread: false, thread: [
      { sender: 'customer', text: 'Hi team, would love to see your Q4 winter linesheet for our boutique.', time: 'Yesterday' },
      { sender: 'agent', text: 'Attached our wholesale linesheet and order minimums. Let us know if you need physical fabric swatches!', time: 'Yesterday' }
    ]},
    { id: 'm5', customerId: 'c5', name: 'Liam O’Connor', avatar: 'LO', subject: 'Service boot resoling question', lastMsg: 'Any trusted cobbler with Dainite studs will do.', time: '2d ago', unread: false, thread: [
      { sender: 'customer', text: 'Can the Goodyear welt boots be resoled with Vibram commando soles later on?', time: 'Oct 22' },
      { sender: 'agent', text: 'Yes! They use a 360-degree storm welt, so any trusted cobbler with Dainite or Vibram studs can easily resole them.', time: 'Oct 22' }
    ]}
  ],

  // ── Email Campaigns (4 campaigns) ──
  campaigns: [
    { id: 'em1', name: 'Autumn Heavyweight Layers', audience: 'All Subscribers (42.5k)', status: 'sent', date: 'Oct 18, 2026', sent: 42500, opens: '36.4%', clicks: '5.2%', revenue: '$14,280', subject: 'Built for colder winds: New Waxed Canvas & Waffle Knits' },
    { id: 'em2', name: 'Exclusive VIP Early Access', audience: 'VIP Tier (1,420)', status: 'sent', date: 'Oct 12, 2026', sent: 1420, opens: '58.2%', clicks: '14.8%', revenue: '$9,840', subject: 'Your private preview: Service Boot batch 04' },
    { id: 'em3', name: 'October Abandoned Cart Recovery', audience: 'Triggered (Automated)', status: 'active', date: 'Continuous', sent: 640, opens: '48.5%', clicks: '18.2%', revenue: '$4,120', subject: 'Forgot something? Your cart is reserved for 24 hours' },
    { id: 'em4', name: 'Winter Campout Collection Teaser', audience: 'All Subscribers (43.1k)', status: 'scheduled', date: 'Nov 02, 2026', sent: 0, opens: '—', clicks: '—', revenue: '—', subject: 'Coming next Thursday: The Camp Blanket & Winter Valet' }
  ],

  // ── Automations (4 workflows) ──
  automations: [
    { id: 'au1', name: 'Abandoned Cart Recovery', desc: 'Sends reminder + 10% coupon if cart is untouched for 2 hours.', enabled: true, runs30d: 342, successRate: '19.4%', revenue: '$5,820', steps: ['Cart Abandoned (2h)', 'Send Email with Items', 'Wait 24h', 'Send 10% Discount Code'] },
    { id: 'au2', name: 'Welcome Customer Onboarding', desc: 'Introduces brand heritage and store locations after initial purchase.', enabled: true, runs30d: 480, successRate: '94.2%', revenue: '$3,410', steps: ['Order #1 Completed', 'Send Welcome Story', 'Wait 3d', 'Invite to Loyalty Club'] },
    { id: 'au3', name: 'Low Stock Slack Notification', desc: 'Pings #inventory channel when any SKU drops below 5 units.', enabled: true, runs30d: 28, successRate: '100%', revenue: '—', steps: ['Inventory Level < 5', 'Post to #inventory Slack', 'Generate Purchase Order Draft'] },
    { id: 'au4', name: 'Customer Win-Back Drip', desc: 'Re-engages shoppers who have not purchased in 60 days.', enabled: false, runs30d: 110, successRate: '8.2%', revenue: '$1,290', steps: ['Last Order > 60d', 'Send Re-engagement Email', 'Wait 7d', 'Free Shipping Offer'] }
  ],

  // ── Workspace Kanban Boards ──
  boards: [
    { id: 'b1', name: 'Holiday Prep & Logistics', desc: 'Q4 operations, inventory freight, and physical store displays', columns: [
      { id: 'col1', title: 'To Do', tasks: [
        { id: 't1', title: 'Approve final packaging for wool camp blankets', tag: 'Design', priority: 'high', done: 2, total: 3, assignee: 'MR' },
        { id: 't2', title: 'Schedule courier pickups for Black Friday weekend', tag: 'Logistics', priority: 'medium', done: 0, total: 2, assignee: 'JO' }
      ]},
      { id: 'col2', title: 'In Progress', tasks: [
        { id: 't3', title: 'Harbor shop window display installation', tag: 'Store', priority: 'high', done: 3, total: 4, assignee: 'AP' },
        { id: 't4', title: 'Review Selvedge 14oz incoming freight manifest', tag: 'Inventory', priority: 'urgent', done: 1, total: 3, assignee: 'SD' }
      ]},
      { id: 'col3', title: 'Done', tasks: [
        { id: 't5', title: 'Launch October email campaign series', tag: 'Marketing', priority: 'normal', done: 5, total: 5, assignee: 'MR' },
        { id: 't6', title: 'Update POS terminal software in Downtown shop', tag: 'IT', priority: 'normal', done: 2, total: 2, assignee: 'JO' }
      ]}
    ]},
    { id: 'b2', name: 'Store Launch: Seattle', desc: 'Flagship store opening on Pike & Pine', columns: [
      { id: 'col4', title: 'To Do', tasks: [
        { id: 't7', title: 'Finalize lease agreement with commercial agent', tag: 'Legal', priority: 'urgent', done: 1, total: 4, assignee: 'SD' }
      ]},
      { id: 'col5', title: 'In Progress', tasks: [
        { id: 't8', title: 'Interior shelving fabrication & lighting layout', tag: 'Store', priority: 'high', done: 4, total: 6, assignee: 'AP' }
      ]},
      { id: 'col6', title: 'Done', tasks: [
        { id: 't9', title: 'Staff hiring interview rounds 1 & 2', tag: 'HR', priority: 'normal', done: 3, total: 3, assignee: 'MR' }
      ]}
    ]}
  ],

  // ── Integrations (8 tools) ──
  integrations: [
    { id: 'int1', name: 'Shopify Storefront', desc: 'Bi-directional sync of catalog, stock and checkout orders.', icon: 'globe', status: 'connected', synced: '2 mins ago' },
    { id: 'int2', name: 'Stripe Payments', desc: 'Card terminal processing and online payment tokenization.', icon: 'zap', status: 'connected', synced: 'Real-time' },
    { id: 'int3', name: 'ShipStation', desc: 'Shipping rate calculation and automated carrier label printing.', icon: 'truck', status: 'connected', synced: '15 mins ago' },
    { id: 'int4', name: 'Mailchimp', desc: 'Automated subscriber sync and campaign conversion tracking.', icon: 'mail', status: 'connected', synced: '1 hour ago' },
    { id: 'int5', name: 'Slack Alerts', desc: 'Order notifications and low stock inventory pings.', icon: 'chat', status: 'connected', synced: 'Live' },
    { id: 'int6', name: 'Google Analytics 4', desc: 'Store sessions, traffic sources and enhanced e-commerce attribution.', icon: 'chart', status: 'connected', synced: 'Daily' },
    { id: 'int7', name: 'Xero Accounting', desc: 'Automated sales ledger, COGS reconciliation and sales tax.', icon: 'paperclip', status: 'disconnected', synced: 'Never' },
    { id: 'int8', name: 'Zapier Automation', desc: 'Custom webhook triggers for web form entries and sheet backups.', icon: 'link', status: 'disconnected', synced: 'Never' }
  ],

  // ── Help FAQs ──
  faqs: [
    { q: 'How is the Sales Performance score calculated?', a: 'The gauge score (0 to 100) measures blended performance across revenue against monthly targets, order volumes, and conversion velocity across both Online and Physical shop channels.' },
    { q: 'How often does inventory stock level sync between shops?', a: 'Inventory is synchronized in real-time on every transaction. In the event of offline POS operation, changes reconcile within 30 seconds of reconnecting.' },
    { q: 'Can I export orders and customer lists to CSV?', a: 'Yes. Click the "Export" button on the Orders or Customers page to download a clean, structured CSV formatted for spreadsheet software or ERP ingestion.' },
    { q: 'What is included in the Pro trial?', a: 'The Pro trial includes multi-channel analytics, automated inventory alerts, unlimited customer records, and team collaboration for up to 10 members.' }
  ],

  // ── Feedback & Requests ──
  feedbackList: [
    { id: 'fb1', title: 'Multi-currency support for Canadian orders', category: 'Payments', votes: 42, status: 'Planned' },
    { id: 'fb2', title: 'Barcode scanner support on mobile iPad POS', category: 'Physical Store', votes: 38, status: 'In Progress' },
    { id: 'fb3', title: 'Automated SMS delivery tracking updates', category: 'Shipping', votes: 29, status: 'Under Review' },
    { id: 'fb4', title: 'Custom PDF packing slip designer', category: 'Operations', votes: 24, status: 'Completed' }
  ],

  // ── Notifications Popover Data ──
  notifications: [
    { id: 'n1', title: 'New order #1048 received ($433)', time: '12m ago', read: false },
    { id: 'n2', title: 'Low stock warning: Raw Selvedge Denim (3 left)', time: '1h ago', read: false },
    { id: 'n3', title: 'Weekly payout settled to Stripe account ($8,420)', time: '4h ago', read: false },
    { id: 'n4', title: 'Alex Mercer sent a message regarding jacket sizing', time: '6h ago', read: true }
  ]
};

// ── Store Manager ───────────────────────────────────────────
class Store {
  constructor() {
    this.data = this.load();
    this.listeners = new Set();
  }

  load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return Object.assign({}, JSON.parse(JSON.stringify(initialData)), parsed);
      }
    } catch (e) {
      console.warn('Failed to parse localStorage store:', e);
    }
    return JSON.parse(JSON.stringify(initialData));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }
    this.notify();
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.data));
  }

  // ── Products API ──
  getProducts(category = 'all', search = '') {
    return this.data.products.filter(p => {
      const matchCat = category === 'all' || p.category.toLowerCase() === category.toLowerCase();
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }

  getProductById(id) {
    return this.data.products.find(p => p.id === id);
  }

  updateStock(id, newStock) {
    const p = this.getProductById(id);
    if (p) {
      p.stock = Math.max(0, newStock);
      p.status = p.stock === 0 ? 'out_of_stock' : p.stock <= 5 ? 'low_stock' : 'active';
      this.save();
    }
  }

  // ── Orders API ──
  getOrders(filter = 'all', search = '', channel = 'all') {
    return this.data.orders.filter(o => {
      const matchFilter = filter === 'all' || o.fulfillmentStatus === filter || o.paymentStatus === filter;
      const matchChannel = channel === 'all' || o.channel === channel;
      const matchSearch = !search || o.id.toLowerCase().includes(search.toLowerCase()) || o.customerName.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchChannel && matchSearch;
    });
  }

  getOrderById(id) {
    const cleanId = id.startsWith('#') ? id : `#${id}`;
    return this.data.orders.find(o => o.id === cleanId);
  }

  fulfillOrder(id) {
    const order = this.getOrderById(id);
    if (order) {
      order.fulfillmentStatus = 'fulfilled';
      this.save();
    }
  }

  refundOrder(id) {
    const order = this.getOrderById(id);
    if (order) {
      order.paymentStatus = 'refunded';
      order.fulfillmentStatus = 'refunded';
      this.save();
    }
  }

  // ── Customers API ──
  getCustomers(search = '', sort = 'spent') {
    let list = this.data.customers.filter(c => {
      return !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()) || c.city.toLowerCase().includes(search.toLowerCase());
    });
    if (sort === 'spent') list.sort((a, b) => b.spent - a.spent);
    if (sort === 'orders') list.sort((a, b) => b.ordersCount - a.ordersCount);
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }

  getCustomerById(id) {
    return this.data.customers.find(c => c.id === id);
  }

  // ── Messages API ──
  getMessages() {
    return this.data.messages;
  }

  addMessage(threadId, text) {
    const thread = this.data.messages.find(m => m.id === threadId);
    if (thread) {
      thread.thread.push({ sender: 'agent', text, time: 'Just now' });
      thread.lastMsg = text;
      thread.time = 'Just now';
      this.save();
    }
  }

  // ── Automations API ──
  toggleAutomation(id) {
    const au = this.data.automations.find(a => a.id === id);
    if (au) {
      au.enabled = !au.enabled;
      this.save();
    }
  }

  // ── Workspace API ──
  getBoard(id = 'b1') {
    return this.data.boards.find(b => b.id === id) || this.data.boards[0];
  }

  moveTask(boardId, taskId, targetColId) {
    const board = this.getBoard(boardId);
    let taskObj = null;
    board.columns.forEach(col => {
      const idx = col.tasks.findIndex(t => t.id === taskId);
      if (idx !== -1) {
        taskObj = col.tasks.splice(idx, 1)[0];
      }
    });
    if (taskObj) {
      const targetCol = board.columns.find(c => c.id === targetColId);
      if (targetCol) {
        targetCol.tasks.push(taskObj);
        this.save();
      }
    }
  }

  // ── Feedback & Requests API ──
  addFeedback(item) {
    if (!this.data.feedbackList) this.data.feedbackList = [];
    const newItem = {
      id: 'fb' + (this.data.feedbackList.length + 1),
      title: item.title,
      category: item.category || 'Feature request',
      status: item.status || 'Under Review',
      votes: 1,
      upvotes: 1
    };
    this.data.feedbackList.unshift(newItem);
    this.save();
    return newItem;
  }

  upvoteFeedback(id) {
    const list = this.data.feedbackList || this.data.feedback || [];
    const fb = list.find(f => f.id === id);
    if (fb) {
      fb.votes = (fb.votes || fb.upvotes || 0) + 1;
      fb.upvotes = fb.votes;
      this.save();
    }
  }

  // ── Notifications ──
  markAllNotificationsRead() {
    this.data.notifications.forEach(n => n.read = true);
    this.save();
  }
}

export const store = new Store();
