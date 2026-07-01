// Simple hash-based SPA router
// Routes compiled at registration time — regex not rebuilt on every navigation
const _routes = []; // [{ regex, paramNames, handler }]
const _exactRoutes = {}; // path → handler for O(1) exact matches
let currentRoute = null;

export function registerRoute(path, handler) {
  _exactRoutes[path] = handler;
  // Compile regex once
  const regex = new RegExp('^' + path.replace(/:([^/]+)/g, '([^/]+)') + '$');
  const paramNames = [...path.matchAll(/:([^/]+)/g)].map(m => m[1]);
  _routes.push({ regex, paramNames, handler });
}

export function navigate(path) {
  window.location.hash = '#' + path;
}

export function getCurrentRoute() {
  return currentRoute;
}

export function initRouter(defaultRoute = '/dashboard') {
  function handleRoute() {
    // Maintain internal session history stack for user journey-based back navigation
    if (!window._appHistory) {
      window._appHistory = [];
    }
    const currentHash = window.location.hash || '#/';
    const len = window._appHistory.length;
    if (len > 1 && window._appHistory[len - 2] === currentHash) {
      window._appHistory.pop();
    } else if (len === 0 || window._appHistory[len - 1] !== currentHash) {
      window._appHistory.push(currentHash);
    }

    // Strip the leading '#', then normalise '/' and '' → defaultRoute
    let hash = window.location.hash.slice(1); // e.g. '/chapter/3', '/', ''
    if (!hash || hash === '/') hash = defaultRoute;

    // Strip query string for route matching
    const qIndex = hash.indexOf('?');
    const path = qIndex !== -1 ? hash.slice(0, qIndex) : hash;
    currentRoute = path;

    let handler = _exactRoutes[path];
    let params  = {};

    if (!handler) {
      for (const route of _routes) {
        const match = path.match(route.regex);
        if (match) {
          handler = route.handler;
          route.paramNames.forEach((name, i) => { params[name] = match[i + 1]; });
          break;
        }
      }
    }

    const pageContent = document.getElementById('page-content');
    if (!pageContent) return;

    if (handler) {
      pageContent.innerHTML = '';
      pageContent.className = 'page-content fade-in';
      // Scroll page back to top on route change
      pageContent.scrollTop = 0;
      try {
        handler(pageContent, params);
      } catch (err) {
        console.error('[Router] Handler error:', err);
        pageContent.innerHTML = `
          <div style="padding:40px;text-align:center;color:var(--red);">
            <p style="font-size:1.1rem;font-weight:700;margin-bottom:8px;">Terjadi kesalahan</p>
            <code style="font-size:0.8rem;color:var(--text-muted);">${err.message}</code>
          </div>`;
      }
    } else {
      pageContent.innerHTML = `
        <div style="padding:60px 32px;text-align:center;color:var(--text-muted);">
          <p style="font-size:1.1rem;font-weight:700;margin-bottom:6px;">Halaman tidak ditemukan</p>
          <a onclick="window.location.hash='#/'" style="color:var(--accent-bright);cursor:pointer;font-size:0.9rem;">← Kembali ke Dashboard</a>
        </div>`;
    }
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // initial render
}
