/**
 * router.js — Client-Side Hash Router
 * Manages view switching between all 13 pages, active navigation highlights,
 * page titles, and view lifecycle (mount/unmount/enter).
 */

const ROUTE_TITLES = {
  dashboard: 'Dashboard',
  orders: 'Orders',
  products: 'Products',
  customers: 'Customers',
  messages: 'Messages',
  email: 'Email Campaigns',
  automations: 'Automations',
  analytics: 'Analytics',
  integrations: 'Integrations',
  workspace: 'Workspace',
  help: 'Help Center',
  feedback: 'Feedback',
  settings: 'Settings'
};

const pageRenderers = new Map();

export function registerPage(name, renderFn) {
  pageRenderers.set(name, renderFn);
}

export function parseHash() {
  const hash = window.location.hash || '#/dashboard';
  const clean = hash.replace(/^#\/?/, '');
  const [route, queryStr] = clean.split('?');
  const params = new URLSearchParams(queryStr || '');
  return {
    route: route || 'dashboard',
    params
  };
}

export function initRouter() {
  window.addEventListener('hashchange', () => {
    handleRouteChange();
  });

  // Intercept all hash links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#/"]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (window.location.hash !== href) {
        window.location.hash = href;
      } else {
        handleRouteChange();
      }
    }
  });

  // Initial navigation
  handleRouteChange(true);
}

function handleRouteChange(isInitial = false) {
  const { route, params } = parseHash();
  const validRoute = ROUTE_TITLES[route] ? route : 'dashboard';

  // 1. Update Document Title & Header
  const title = ROUTE_TITLES[validRoute];
  document.title = `${title} · Sarthak`;
  const pageTitleEl = document.getElementById('page-title');
  if (pageTitleEl) {
    pageTitleEl.textContent = title;
  }

  // 2. Update Top Nav Tab States
  document.querySelectorAll('.top-nav__tab').forEach(tab => {
    const tabRoute = tab.dataset.route || tab.id.replace('nav-tab-', '');
    if (tabRoute === validRoute) {
      tab.classList.add('is-active');
      tab.setAttribute('aria-current', 'page');
    } else {
      tab.classList.remove('is-active');
      tab.removeAttribute('aria-current');
    }
  });

  // 3. Update Sidebar Dock States
  document.querySelectorAll('.sidebar__icon-btn').forEach(btn => {
    const btnRoute = btn.dataset.route;
    if (btnRoute === validRoute) {
      btn.classList.add('is-active');
    } else {
      btn.classList.remove('is-active');
    }
  });

  // 4. Toggle Subnav & Views Container
  const subnavEl = document.querySelector('.subnav');
  if (subnavEl) {
    subnavEl.style.display = validRoute === 'dashboard' ? 'flex' : 'none';
  }

  const views = document.querySelectorAll('.view');
  let activeView = document.querySelector(`.view[data-view="${validRoute}"]`);

  views.forEach(v => {
    if (v === activeView) {
      v.hidden = false;
      v.style.display = 'block';
    } else {
      v.hidden = true;
      v.style.display = 'none';
    }
  });

  // 5. Invoke Page Renderer
  const renderFn = pageRenderers.get(validRoute);
  if (renderFn && activeView) {
    renderFn(activeView, params);
  }

  // Smooth scroll top
  if (!isInitial) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
