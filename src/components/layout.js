import { MNN_INDEX } from '../data/chapter_index.js';

const SUN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const MOON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

// ── Sidebar open/close (mobile) ──────────────────────
export function openSidebar() {
  document.getElementById('sidebar')?.classList.add('open');
  const bd = document.getElementById('sidebar-backdrop');
  if (bd) { bd.style.display = 'block'; requestAnimationFrame(() => bd.classList.add('visible')); }
  document.body.style.overflow = 'hidden';
}
export function closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  const bd = document.getElementById('sidebar-backdrop');
  if (bd) {
    bd.classList.remove('visible');
    setTimeout(() => { bd.style.display = 'none'; }, 280);
  }
  document.body.style.overflow = '';
}

// ── Render Sidebar ──────────────────────────────────
export function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  // Conceptual Navigation Groups
  const studyNav = [
    { icon: 'layout-dashboard', label: 'Dashboard',      hash: '#/',           id: 'nav-dashboard' },
    { icon: 'map',              label: 'Peta Kurikulum', hash: '#/curriculum', id: 'nav-curriculum', badge: '50 Bab' },
    { icon: 'compass',          label: 'Panduan Belajar',hash: '#/guide',      id: 'nav-guide' },
  ];

  const practiceNav = [
    { icon: 'zap',              label: 'SRS Flashcards', hash: '#/review',     id: 'nav-review' },
    { icon: 'pen-tool',         label: 'Latihan Menulis',hash: '#/writing',    id: 'nav-writing' },
    { icon: 'award',            label: 'Simulasi Ujian', hash: '#/exam/N5',    id: 'nav-exam', badge: 'JLPT' },
  ];

  const referenceNav = [
    { icon: 'book-open',        label: 'Tata Bahasa',    hash: '#/minna',      id: 'nav-minna' },
    { icon: 'languages',        label: 'Kanji Hub',      hash: '#/kanji',      id: 'nav-kanji' },
    { icon: 'bookmark',         label: 'Glosarium',      hash: '#/glossary',   id: 'nav-glossary' },
  ];

  const renderNavItem = (n) => `
    <a class="nav-item" id="${n.id}"
       aria-label="${n.label}"
       onclick="window.location.hash='${n.hash}'; window._closeSidebarMobile();"
       style="cursor:pointer;" role="button" tabindex="0">
      <span class="nav-icon-badge">
        <i data-lucide="${n.icon}" style="width:14px;height:14px;"></i>
      </span>
      <span class="nav-label">${n.label}</span>
      ${n.badge ? `<span class="nav-item-badge">${n.badge}</span>` : ''}
    </a>
  `;

  sidebar.innerHTML = `
    <button class="sidebar-close-btn" id="sidebar-close-btn" aria-label="Tutup menu">
      <i data-lucide="x" style="width:16px;height:16px;"></i>
    </button>

    <!-- Brand Header -->
    <div class="brand" style="margin-bottom: 18px; padding: 4px 6px; display: flex; align-items: center; gap: 10px;">
      <div class="brand-icon">語</div>
      <div class="brand-text">
        <h1 style="font-size: 15px; font-weight: 700; color: var(--text-main); margin: 0; line-height: 1.2; letter-spacing: -0.01em;">
          Nihongo<span style="color: var(--text-muted); font-weight: 500;">Master</span>
        </h1>
        <span style="font-size: 10px; color: var(--text-muted); font-weight: 500; letter-spacing: 0.04em;">JLPT N5–N4</span>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 14px; flex: 1; overflow-y: auto;">
      <!-- Group: Pembelajaran -->
      <div>
        <div class="nav-section-label">Pembelajaran</div>
        <div class="nav-menu">
          ${studyNav.map(renderNavItem).join('')}
        </div>
      </div>

      <!-- Group: Latihan & Keterampilan -->
      <div>
        <div class="nav-section-label">Latihan & Keterampilan</div>
        <div class="nav-menu">
          ${practiceNav.map(renderNavItem).join('')}
        </div>
      </div>

      <!-- Group: Katalog & Referensi -->
      <div>
        <div class="nav-section-label">Katalog & Referensi</div>
        <div class="nav-menu">
          ${referenceNav.map(renderNavItem).join('')}
        </div>
      </div>
    </div>

    <!-- Sidebar Footer -->
    <div style="margin-top: auto; padding-top: 14px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;">
      <div style="display: flex; flex-direction: column;">
        <span style="font-size: 11px; font-weight: 700; color: var(--text-main);">Minna no Nihongo</span>
        <span style="font-size: 9px; color: var(--text-muted); font-weight: 600;">Edisi Belajar Lengkap</span>
      </div>
      <button class="theme-toggle-btn" id="theme-toggle-btn" aria-label="Ganti tema" title="Ganti Tema (Gelap / Terang)" style="background: var(--bg-elevated); border: 1px solid var(--border); color: var(--text-main); width: 32px; height: 32px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s ease; flex-shrink: 0; padding: 0;">
        ${currentTheme === 'dark' ? SUN_SVG : MOON_SVG}
      </button>
    </div>
  `;

  // Close button
  document.getElementById('sidebar-close-btn')?.addEventListener('click', closeSidebar);

  // Backdrop click
  document.getElementById('sidebar-backdrop')?.addEventListener('click', closeSidebar);

  // Theme toggle button click
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);

  updateSidebarActive();

  if (window.lucide) lucide.createIcons({ root: sidebar });
}

// Expose globally for inline onclick
window._closeSidebarMobile = () => {
  if (window.innerWidth < 768) closeSidebar();
};

// ── Update active states ────────────────────────────
export function updateSidebarActive() {
  const hash = window.location.hash || '#/';
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const map = {
    '#/':           'nav-dashboard',
    '#/dashboard':  'nav-dashboard',
    '#/curriculum': 'nav-curriculum',
    '#/guide':      'nav-guide',
    '#/review':     'nav-review',
    '#/writing':    'nav-writing',
    '#/minna':      'nav-minna',
    '#/kanji':      'nav-kanji',
    '#/glossary':   'nav-glossary',
    '#/exam/N5':    'nav-exam',
    '#/exam/N4':    'nav-exam',
    '#/exam/N3':    'nav-exam',
  };

  if (map[hash]) {
    document.getElementById(map[hash])?.classList.add('active');
  } else if (hash.startsWith('#/phase/') || hash.startsWith('#/chapter/') || hash.startsWith('#/workbook/')) {
    document.getElementById('nav-curriculum')?.classList.add('active');
  } else if (hash.startsWith('#/exam/')) {
    document.getElementById('nav-exam')?.classList.add('active');
  }
}

// ── Theme ────────────────────────────────────────────
export let currentTheme = localStorage.getItem('minna_theme') || 'dark';

export function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

export function updateThemeBtnUI() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  const isDark = currentTheme === 'dark';
  btn.innerHTML = isDark ? SUN_SVG : MOON_SVG;
}

export function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('minna_theme', currentTheme);
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeBtnUI();
}

// ── Display mode ─────────────────────────────────────
export let currentDisplayMode = localStorage.getItem('minna_display_mode') || 'furigana';
export function getDisplayMode() { return currentDisplayMode; }

const DISPLAY_MODES = ['furigana', 'kana', 'romaji'];
const DISPLAY_MODE_LABELS = {
  furigana: 'Furi',
  kana: 'Kana',
  romaji: 'Rom'
};
const DISPLAY_MODE_TOAST_NAMES = {
  furigana: 'Furigana (Kanji + Bacaan)',
  kana: 'Huruf Kana (Tanpa Romaji)',
  romaji: 'Romaji (Alfabet Latin)'
};

export function renderTopbar(title = 'Nihongo Master', showDisplayToggles = false, backUrl = null) {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;

  const toggleHtml = showDisplayToggles ? `
    <button class="topbar-display-toggler" id="topbar-display-toggler" title="Klik untuk berganti mode tampilan (Furi → Kana → Rom)" aria-label="Mode Tampilan Teks">
      <span class="toggle-badge">文</span>
      <span class="toggle-label" id="topbar-display-val">${DISPLAY_MODE_LABELS[currentDisplayMode] || 'Furi'}</span>
      <i data-lucide="refresh-cw" class="toggle-icon" style="width: 10px; height: 10px;"></i>
    </button>
  ` : '';

  // Left slot: hamburger only (back nav now lives inside page content)
  const leftSlot = `<button class="topbar-menu-btn" id="topbar-menu-btn" aria-label="Buka menu">
         <i data-lucide="menu" style="width:17px;height:17px;"></i>
       </button>`;

  topbar.innerHTML = `
    ${leftSlot}
    <div class="topbar-title">${title}</div>
    ${toggleHtml}
  `;

  document.getElementById('topbar-menu-btn')?.addEventListener('click', openSidebar);

  if (showDisplayToggles) {
    const togglerBtn = document.getElementById('topbar-display-toggler');
    togglerBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentIdx = DISPLAY_MODES.indexOf(currentDisplayMode);
      const nextMode = DISPLAY_MODES[(currentIdx + 1) % DISPLAY_MODES.length];

      currentDisplayMode = nextMode;
      localStorage.setItem('minna_display_mode', nextMode);

      const labelEl = document.getElementById('topbar-display-val');
      if (labelEl) labelEl.textContent = DISPLAY_MODE_LABELS[nextMode] || 'Furi';

      window.dispatchEvent(new CustomEvent('displayModeChanged', { detail: { mode: nextMode } }));
    });
  }

  if (window.lucide) lucide.createIcons({ root: topbar });
}

// ── Back Navigation (inside page content) ──────────────
function getHashLabel(hash, defaultLabel) {
  if (!hash) return defaultLabel;
  const path = hash.split('?')[0];
  if (path === '#/' || path === '#/dashboard') return 'Dashboard';
  if (path === '#/curriculum') return 'Kurikulum';
  if (path === '#/guide') return 'Panduan';
  if (path === '#/minna') return 'Tata Bahasa';
  if (path === '#/review') return 'Review';
  if (path === '#/writing') return 'Latihan Menulis';
  if (path === '#/kanji') return 'Kanji Hub';
  if (path === '#/glossary') return 'Glosarium';
  if (path === '#/settings') return 'Pengaturan';
  if (path === '#/handbook') return 'Buku Panduan';
  if (path.startsWith('#/chapter/')) {
    const id = path.split('/').pop();
    return `Bab ${id}`;
  }
  return defaultLabel || 'Kembali';
}

/**
 * Prepend a slim back-navigation bar to a container element.
 * @param {HTMLElement} container - The page content root element
 * @param {string} url  - The default hash URL to navigate to (fallback)
 * @param {string} label - The default human-readable destination label (fallback)
 */
export function renderBackBtn(container, url, label) {
  const bar = document.createElement('div');
  bar.className = 'page-back-bar';

  let backUrl = url;
  let backLabel = label;

  // Resolve back URL and label dynamically from the user's journey stack
  if (window._appHistory && window._appHistory.length > 1) {
    backUrl = window._appHistory[window._appHistory.length - 2];
    backLabel = getHashLabel(backUrl, label);
  }

  bar.innerHTML = `
    <button class="page-back-btn" onclick="window.location.hash='${backUrl}'" aria-label="Kembali ke ${backLabel}">
      <i data-lucide="chevron-left" style="width:15px;height:15px;flex-shrink:0;"></i>
      <span>Kembali ke ${backLabel}</span>
    </button>
  `;
  container.prepend(bar);
  if (window.lucide) lucide.createIcons({ root: bar });
}

/**
 * Render a premium theme-matching loader inside a container.
 * @param {HTMLElement} container - The container element to populate
 * @param {string} text - Description text shown under the spinner
 */
export function renderLoader(container, text = 'Memuat Data') {
  container.innerHTML = `
    <div class="premium-loader-container fade-in">
      <div class="premium-spinner"></div>
      <div class="premium-loader-text">${text}</div>
    </div>
  `;
}



// ── Chapter keyboard navigation ──────────────────────
const _sorted = [...MNN_INDEX].sort((a, b) => a.id - b.id);

export function navigateChapter(dir /* 'prev' | 'next' */) {
  const hash = window.location.hash;
  const match = hash.match(/\/chapter\/(\d+)/);
  const curId = match ? parseInt(match[1]) : null;

  const idx = curId !== null ? _sorted.findIndex(c => c.id === curId) : -1;

  let target;
  if (dir === 'next') {
    target = idx === -1 ? _sorted[0] : _sorted[idx + 1];
  } else {
    target = idx <= 0 ? null : _sorted[idx - 1];
  }

  if (!target) return;
  window.location.hash = `#/chapter/${target.id}`;
}

// ── Keyboard shortcuts ───────────────────────────────
if (!window._minnaMasterKeysRegistered) {
  window._minnaMasterKeysRegistered = true;
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

    // Display mode
    if (e.altKey && e.key === '1') { e.preventDefault(); _setMode('romaji'); }
    if (e.altKey && e.key === '2') { e.preventDefault(); _setMode('furigana'); }
    if (e.altKey && e.key === '3') { e.preventDefault(); _setMode('kana'); }

    // Theme toggle
    if (e.altKey && e.key.toLowerCase() === 't') { e.preventDefault(); toggleTheme(); }

    // Tab switching (Alt+A/Q/W/E/R/S/T inside chapter view)
    const tabMap = { a:'kana', q:'vocab', w:'grammar', e:'patterns', s:'reibun', r:'conversation' };
    if (e.altKey && tabMap[e.key?.toLowerCase()]) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('switchTab', { detail: { tab: tabMap[e.key.toLowerCase()] } }));
    }

    // Chapter navigation — ArrowLeft / [ = prev,  ArrowRight / ] = next
    const isRight = e.key === 'ArrowRight' || e.key === ']';
    const isLeft  = e.key === 'ArrowLeft'  || e.key === '[';
    if (isRight && !e.altKey && !e.ctrlKey && !e.metaKey) { e.preventDefault(); navigateChapter('next'); }
    if (isLeft  && !e.altKey && !e.ctrlKey && !e.metaKey) { e.preventDefault(); navigateChapter('prev'); }

    // Escape closes sidebar
    if (e.key === 'Escape') closeSidebar();
  });
}

function _setMode(mode) {
  currentDisplayMode = mode;
  localStorage.setItem('minna_display_mode', mode);
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
  window.dispatchEvent(new CustomEvent('displayModeChanged', { detail: { mode } }));
}

window.addEventListener('hashchange', updateSidebarActive);

// ── showModal ────────────────────────────────────────
export function showModal({ title = '', body = '', onClose } = {}) {
  const root = document.getElementById('modal-root');
  if (!root) return;

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      ${title ? `<h3 style="font-size:1.1rem;font-weight:800;margin-bottom:16px;color:var(--text-main);">${title}</h3>` : ''}
      <div class="modal-body">${body}</div>
      <button class="btn btn-secondary" id="modal-close-btn"
        style="margin-top:20px;width:100%;">Tutup</button>
    </div>
  `;

  function close() {
    overlay.remove();
    if (onClose) onClose();
  }

  overlay.querySelector('#modal-close-btn').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  root.appendChild(overlay);
  if (window.lucide) lucide.createIcons({ root: overlay });
}

// ── showToast ────────────────────────────────────────
export function showToast(message, type = 'info', duration = 3000) {
  const root = document.getElementById('toast-root');
  if (!root) return;

  const toast = document.createElement('div');
  const colors = { info: 'var(--accent)', success: 'var(--green)', error: 'var(--red)', warning: 'var(--amber)' };
  toast.style.cssText = `
    position:fixed; bottom:calc(80px + var(--safe-bottom, 0px)); left:50%; transform:translateX(-50%) translateY(10px);
    background:var(--bg-elevated); border:1px solid var(--border-bright);
    color:var(--text-main); padding:10px 20px; border-radius:var(--radius-md);
    font-size:.88rem; font-weight:600; z-index:9999;
    box-shadow:var(--shadow-lg); border-left:3px solid ${colors[type]||colors.info};
    opacity:0; transition:all 0.25s ease; white-space:nowrap; max-width:90vw;
  `;
  toast.textContent = message;
  root.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ── initGlobalTooltips ────────────────────────────────
export function initGlobalTooltips() {
  let tooltipEl = document.getElementById('chapter-overflow-tooltip');
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'chapter-overflow-tooltip';
    tooltipEl.className = 'chapter-tooltip';
    document.body.appendChild(tooltipEl);
  }

  let activeTarget = null;
  let hideTimeout = null;

  document.addEventListener('mouseover', (e) => {
    if (window.innerWidth < 768) return;

    const target = e.target.closest('.nav-item[data-chapter-id]');
    if (!target) {
      if (activeTarget) {
        clearTimeout(hideTimeout);
        hideTooltip();
      }
      return;
    }

    if (activeTarget === target) return;

    // Only show tooltip if the chapter nav-label is truncated
    const label = target.querySelector('.nav-label');
    if (!label) return;

    const isOverflowing = label.scrollWidth > label.clientWidth;
    if (!isOverflowing) {
      if (activeTarget) {
        clearTimeout(hideTimeout);
        hideTooltip();
      }
      return;
    }

    activeTarget = target;
    clearTimeout(hideTimeout);

    showTooltip(target);

    // Auto-hidden time based: Automatically hide the tooltip after 2.5 seconds
    hideTimeout = setTimeout(() => {
      hideTooltip();
    }, 2500);
  });

  document.addEventListener('mouseout', (e) => {
    if (window.innerWidth < 768) return;

    const target = e.target.closest('.nav-item[data-chapter-id]');
    if (!target) return;

    if (activeTarget === target) {
      clearTimeout(hideTimeout);
      hideTooltip();
    }
  });

  function showTooltip(target) {
    const text = target.getAttribute('data-tooltip') || target.getAttribute('aria-label');
    if (!text) return;

    tooltipEl.textContent = text;

    // Position calculation
    const rect = target.getBoundingClientRect();
    const tooltipWidth = tooltipEl.offsetWidth;
    const tooltipHeight = tooltipEl.offsetHeight;

    let left = 0;
    let top = 0;

    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      // Position to the right of the sidebar item
      left = rect.right + 10;
      top = rect.top + (rect.height - tooltipHeight) / 2;
      
      // Clamp within viewport bounds
      top = Math.max(8, Math.min(window.innerHeight - tooltipHeight - 8, top));
    } else {
      // Position above the hovered element
      left = rect.left + (rect.width - tooltipWidth) / 2;
      top = rect.top - tooltipHeight - 8;
      
      // Clamp within viewport bounds
      left = Math.max(8, Math.min(window.innerWidth - tooltipWidth - 8, left));
      
      if (top < 8) {
        top = rect.bottom + 8;
      }
    }

    tooltipEl.style.left = `${left}px`;
    tooltipEl.style.top = `${top}px`;
    
    requestAnimationFrame(() => {
      if (activeTarget === target) {
        tooltipEl.classList.add('visible');
      }
    });
  }

  function hideTooltip() {
    tooltipEl.classList.remove('visible');
    activeTarget = null;
  }
}

