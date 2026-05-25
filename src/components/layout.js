import { MNN_DATA } from '../data/chapter_data.js';

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

  const sorted = [...MNN_DATA].sort((a, b) => a.id - b.id);

  const topNav = [
    { icon: 'layout-dashboard', label: 'Dashboard',    hash: '#/',          id: 'nav-dashboard' },
    { icon: 'book-open',        label: 'Deep Digest',  hash: '#/minna',     id: 'nav-minna'     },
    { icon: 'repeat-2',         label: 'SRS Review',   hash: '#/review',    id: 'nav-review'    },
    { icon: 'pen-tool',         label: 'Latihan Menulis',hash: '#/writing', id: 'nav-writing'   },
    { icon: 'languages',        label: 'Kanji Hub',    hash: '#/kanji',     id: 'nav-kanji'     },
    { icon: 'clipboard-list',   label: 'Kurikulum',    hash: '#/curriculum',id: 'nav-curriculum'},
    { icon: 'help-circle',      label: 'Glosarium',    hash: '#/glossary',  id: 'nav-glossary'  },
  ];

  sidebar.innerHTML = `
    <button class="sidebar-close-btn" id="sidebar-close-btn" aria-label="Tutup menu">
      <i data-lucide="x" style="width:16px;height:16px;"></i>
    </button>

    <div class="brand" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <div class="brand-icon">語</div>
        <div class="brand-text">
          <h1>Minna<span style="color:var(--text-muted);font-weight:500;">Master</span></h1>
          <p>JLPT N5 → N3</p>
        </div>
      </div>
      
      <button class="theme-toggle-btn" id="theme-toggle-btn" aria-label="Ganti tema (Alt+T)" style="background: var(--bg-elevated); border: 1px solid var(--border); color: var(--text-main); width: 32px; height: 32px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; -webkit-tap-highlight-color: transparent; margin: 0; padding: 0; flex-shrink: 0;">
        <i data-lucide="${currentTheme === 'dark' ? 'sun' : 'moon'}" style="width: 15px; height: 15px;"></i>
      </button>
    </div>

    <div class="nav-section-label">Menu</div>
    <div class="nav-menu" style="margin-bottom:16px;">
      ${topNav.map(n => `
        <a class="nav-item" id="${n.id}"
           aria-label="${n.label}"
           onclick="window.location.hash='${n.hash}'; window._closeSidebarMobile();"
           style="cursor:pointer;" role="button" tabindex="0">
          <i data-lucide="${n.icon}" style="width:15px;height:15px;flex-shrink:0;"></i>
          <span class="nav-label">${n.label}</span>
        </a>
      `).join('')}
    </div>

    <div class="nav-section-label">Daftar Bab</div>
    <div class="nav-menu">
      ${sorted.map(ch => {
        const short = ch.title.includes(':')
          ? ch.title.split(':').slice(1).join(':').trim()
          : ch.title;
        return `
          <a class="nav-item"
             data-chapter-id="${ch.id}"
             data-tooltip="Bab ${ch.id}: ${short}"
             aria-label="Bab ${ch.id}: ${short}"
             style="${ch.locked ? 'opacity:.3;pointer-events:none;' : 'cursor:pointer;'}"
             onclick="${ch.locked ? '' : `window.location.hash='#/chapter/${ch.id}'; window._closeSidebarMobile();`}"
             role="button" tabindex="${ch.locked ? -1 : 0}">
            <span class="nav-badge">${ch.id}</span>
            <span class="nav-label" style="font-size:.79rem;">${short}</span>
            ${ch.locked ? '<i data-lucide="lock" style="width:10px;height:10px;margin-left:auto;color:var(--text-faint);flex-shrink:0;"></i>' : ''}
          </a>
        `;
      }).join('')}
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
    '#/':          'nav-dashboard',
    '#/minna':     'nav-minna',
    '#/review':    'nav-review',
    '#/writing':   'nav-writing',
    '#/kanji':     'nav-kanji',
    '#/curriculum':'nav-curriculum',
    '#/glossary':  'nav-glossary',
  };

  if (map[hash]) {
    document.getElementById(map[hash])?.classList.add('active');
  } else if (hash.startsWith('#/chapter/')) {
    const id = parseInt(hash.split('/').pop());
    const el = document.querySelector(`[data-chapter-id="${id}"]`);
    if (el) {
      el.classList.add('active');
      el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }
}

// ── Theme ────────────────────────────────────────────
export let currentTheme = localStorage.getItem('minna_theme') || 'dark';

export function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

export function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('minna_theme', currentTheme);
  document.documentElement.setAttribute('data-theme', currentTheme);
  // Update the icon in topbar
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = currentTheme === 'dark'
      ? '<i data-lucide="sun" style="width:16px;height:16px;"></i>'
      : '<i data-lucide="moon" style="width:16px;height:16px;"></i>';
    if (window.lucide) lucide.createIcons({ root: btn });
  }
}

// ── Display mode ─────────────────────────────────────
export let currentDisplayMode = localStorage.getItem('minna_display_mode') || 'furigana';
export function getDisplayMode() { return currentDisplayMode; }

export function renderTopbar(title = 'Minna no Nihongo') {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;

  const isDark = currentTheme === 'dark';
  const labelMap = { romaji: 'Rom', furigana: 'Furi', kana: 'Kana' };
  
  topbar.innerHTML = `
    <button class="topbar-menu-btn" id="topbar-menu-btn" aria-label="Buka menu">
      <i data-lucide="menu" style="width:17px;height:17px;"></i>
    </button>
    <div class="topbar-title">${title}</div>
    <div class="display-toggles desktop-only">
      <button class="toggle-btn ${currentDisplayMode==='romaji'   ? 'active':''}" data-mode="romaji">Rom</button>
      <button class="toggle-btn ${currentDisplayMode==='furigana' ? 'active':''}" data-mode="furigana">Furi</button>
      <button class="toggle-btn ${currentDisplayMode==='kana'     ? 'active':''}" data-mode="kana">Kana</button>
    </div>
    <div class="display-dropdown-container mobile-only" id="display-dropdown-container">
      <button class="display-dropdown-btn" id="display-dropdown-btn" aria-label="Mode Tampilan">
        <span class="display-dropdown-val" id="display-dropdown-val">${labelMap[currentDisplayMode] || 'Furi'}</span>
        <i data-lucide="chevron-down" class="dropdown-chevron" style="width: 10px; height: 10px;"></i>
      </button>
      <div class="display-dropdown-menu" id="display-dropdown-menu">
        <button class="dropdown-item ${currentDisplayMode==='romaji'?'active':''}" data-mode="romaji">
          <span>Romaji</span>
          <i data-lucide="check" class="check-icon" style="width: 12px; height: 12px;"></i>
        </button>
        <button class="dropdown-item ${currentDisplayMode==='furigana'?'active':''}" data-mode="furigana">
          <span>Furigana</span>
          <i data-lucide="check" class="check-icon" style="width: 12px; height: 12px;"></i>
        </button>
        <button class="dropdown-item ${currentDisplayMode==='kana'?'active':''}" data-mode="kana">
          <span>Kana</span>
          <i data-lucide="check" class="check-icon" style="width: 12px; height: 12px;"></i>
        </button>
      </div>
    </div>
  `;

  const menuBtn = document.getElementById('display-dropdown-btn');
  const dropdownContainer = document.getElementById('display-dropdown-container');
  const dropdownMenu = document.getElementById('display-dropdown-menu');

  document.getElementById('topbar-menu-btn')?.addEventListener('click', openSidebar);

  // Synced state change handler
  const setDisplayMode = (mode) => {
    currentDisplayMode = mode;
    localStorage.setItem('minna_display_mode', mode);

    // Sync desktop buttons
    topbar.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Sync mobile dropdown label
    const labelEl = document.getElementById('display-dropdown-val');
    if (labelEl) labelEl.textContent = labelMap[mode] || 'Furi';

    // Sync active checkmark in custom dropdown items
    topbar.querySelectorAll('.dropdown-item').forEach(item => {
      item.classList.toggle('active', item.dataset.mode === mode);
    });

    window.dispatchEvent(new CustomEvent('displayModeChanged', { detail: { mode } }));
  };

  // Wire desktop buttons
  topbar.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      setDisplayMode(e.currentTarget.dataset.mode);
    });
  });

  // Wire custom dropdown button toggle
  menuBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownContainer.classList.toggle('open');
    dropdownMenu.classList.toggle('show', isOpen);
  });

  // Wire custom dropdown items
  topbar.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      setDisplayMode(e.currentTarget.dataset.mode);
      dropdownContainer.classList.remove('open');
      dropdownMenu.classList.remove('show');
    });
  });

  // Close dropdown when clicking outside
  const closeOutside = (e) => {
    if (dropdownContainer && !dropdownContainer.contains(e.target)) {
      dropdownContainer.classList.remove('open');
      dropdownMenu.classList.remove('show');
    }
  };
  window.addEventListener('click', closeOutside);

  // Clean up outside click event listener on route change
  window.addEventListener('hashchange', function cleanup() {
    window.removeEventListener('click', closeOutside);
    window.removeEventListener('hashchange', cleanup);
  });

  if (window.lucide) lucide.createIcons({ root: topbar });
}



// ── Chapter keyboard navigation ──────────────────────
const _sorted = [...MNN_DATA].sort((a, b) => a.id - b.id);
const _unlocked = _sorted.filter(c => !c.locked);

export function navigateChapter(dir /* 'prev' | 'next' */) {
  const hash = window.location.hash;
  const match = hash.match(/\/chapter\/(\d+)/);
  const curId = match ? parseInt(match[1]) : null;

  const idx = curId !== null ? _unlocked.findIndex(c => c.id === curId) : -1;

  let target;
  if (dir === 'next') {
    target = idx === -1 ? _unlocked[0] : _unlocked[idx + 1];
  } else {
    target = idx <= 0 ? null : _unlocked[idx - 1];
  }

  if (!target) return;
  window.location.hash = `#/chapter/${target.id}`;
  _showJumpToast(target);
}

let _toastTimer = null;
function _showJumpToast(ch) {
  // Remove existing toast
  document.querySelectorAll('.chapter-jump-toast').forEach(t => t.remove());
  if (_toastTimer) clearTimeout(_toastTimer);

  const short = ch.title.includes(':') ? ch.title.split(':').slice(1).join(':').trim() : ch.title;
  const el = document.createElement('div');
  el.className = 'chapter-jump-toast';
  el.innerHTML = `
    <span style="color:var(--accent-bright);font-variant-numeric:tabular-nums;">BAB ${ch.id}</span>
    <span style="color:var(--text-muted);">—</span>
    <span>${short}</span>
  `;
  document.body.appendChild(el);

  _toastTimer = setTimeout(() => {
    el.classList.add('hiding');
    setTimeout(() => el.remove(), 220);
  }, 1800);
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

