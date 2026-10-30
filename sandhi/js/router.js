/**
 * router.js — Hash-Based Single Page App Router
 */

const routes = {};

export function registerRoute(hashPath, renderFn) {
  routes[hashPath] = renderFn;
}

export function initRouter(defaultRoute = '#/home') {
  function handleRoute() {
    const hash = window.location.hash || defaultRoute;
    const render = routes[hash] || routes[defaultRoute];
    if (render) {
      render();
    }
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
