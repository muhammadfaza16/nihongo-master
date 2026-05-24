import { renderTopbar, showToast } from '../components/layout.js';
import { CURRICULUM } from '../data/curriculum.js';
import { isUnitCompleted } from '../store.js';

const phaseEmojis = {
  'fase-aksara': '✍️',
  'mnn1-fase1': '🏡',
  'mnn1-fase2': '🌟',
  'mnn1-fase3': '⚙️',
  'mnn1-fase4': '💬',
  'mnn2-fase1': '🧠',
  'mnn2-fase2': '📢',
  'mnn2-fase3': '🗣️',
  'mnn2-fase4': '🎓'
};

export function CurriculumView(container) {
  renderTopbar('Peta Kurikulum');

  // Read initial track filter from URL parameter
  let initialTrack = 'all';
  const hash = window.location.hash;
  if (hash.includes('?')) {
    const query = hash.split('?')[1];
    const urlParams = new URLSearchParams(query);
    const track = urlParams.get('track');
    if (['minna1', 'minna2', 'pra-mnn'].includes(track)) {
      initialTrack = track;
    }
  }

  container.innerHTML = `
    <div class="fade-in" style="max-width: 900px; margin: 0 auto; padding-bottom: 60px;">
      
      <!-- Hero Header -->
      <div style="background: linear-gradient(135deg, var(--accent-dim), transparent); border: 1px solid var(--border-accent); border-radius: var(--radius-xl); padding: 36px 24px; margin-bottom: 32px; text-align: center; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -50px; left: 50%; transform: translateX(-50%); width: 250px; height: 250px; background: radial-gradient(circle, var(--accent-glow), transparent 70%); pointer-events: none;"></div>
        <h2 style="font-size: 2.2rem; font-weight: 900; color: var(--text-main); margin-bottom: 12px; letter-spacing: var(--tracking-tight); text-transform: uppercase;">Peta Kurikulum <span style="border-bottom: 3px solid var(--text-main); padding-bottom: 2px;">JLPT</span> 🇯🇵</h2>
        <p style="color: var(--text-secondary); max-width: 520px; margin: 0 auto; font-size: 0.95rem; line-height: 1.6; font-weight: 500;">
          Jalur belajar bahasa Jepang terstruktur. Pilih tab di bawah untuk memfilter fase belajar atau lihat seluruh kurikulum sekaligus.
        </p>
      </div>

      <!-- Track Filters -->
      <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 36px; flex-wrap: wrap;" class="no-print">
        <button class="filter-tab-btn ${initialTrack === 'all' ? 'active' : ''}" data-track="all" style="height: 38px;">Semua</button>
        <button class="filter-tab-btn ${initialTrack === 'pra-mnn' ? 'active' : ''}" data-track="pra-mnn" style="height: 38px;">Pra-Minna</button>
        <button class="filter-tab-btn ${initialTrack === 'minna1' ? 'active' : ''}" data-track="minna1" style="height: 38px;">Minna I (N5)</button>
        <button class="filter-tab-btn ${initialTrack === 'minna2' ? 'active' : ''}" data-track="minna2" style="height: 38px;">Minna II (N4)</button>
      </div>

      <!-- Timeline Container -->
      <div id="curriculum-timeline"></div>
    </div>
    
    <style>
      .mission-btn {
        padding: 10px 8px; 
        font-size: 0.75rem; 
        font-weight: 700; 
        background: var(--bg-elevated); 
        border: 1px solid var(--border); 
        color: var(--text-main); 
        border-radius: var(--radius-sm); 
        cursor: pointer; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        gap: 6px; 
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        text-transform: uppercase;
        letter-spacing: 0.02em;
      }
      .mission-btn:hover {
        background: var(--bg-hover) !important;
        border-color: var(--border-bright) !important;
        transform: translateY(-1px);
      }
      .mission-btn:active {
        transform: translateY(1px);
      }
      .bento-card {
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .bento-card:hover {
        border-color: var(--border-bright) !important;
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2) !important;
      }
      
      /* Filter button active styles matching design system */
      .filter-tab-btn {
        background: transparent;
        border: 1px solid var(--border);
        color: var(--text-muted);
        padding: 8px 16px;
        font-size: 0.8rem;
        font-weight: 700;
        border-radius: 99px;
        cursor: pointer;
        transition: all 0.2s;
        text-transform: uppercase;
        letter-spacing: 0.02em;
      }
      .filter-tab-btn:hover {
        border-color: var(--border-bright);
        color: var(--text-main);
      }
      .filter-tab-btn.active {
        background: var(--text-main);
        border-color: var(--text-main);
        color: var(--bg-main);
      }
    </style>
  `;

  const timelineContainer = document.getElementById('curriculum-timeline');

  const renderTimeline = (track) => {
    let html = '';

    // Filter CURRICULUM data based on selected track
    const filteredCurriculum = CURRICULUM.filter(level => {
      if (track === 'all') return true;
      if (track === 'pra-mnn') return level.levelId === 'pra-mnn';
      if (track === 'minna1') return level.levelId === 'shokyu-1';
      if (track === 'minna2') return level.levelId === 'shokyu-2';
      return true;
    });

    filteredCurriculum.forEach((level, idx) => {
      // Show level separator for Minna II if showing all
      if (track === 'all' && level.levelId === 'shokyu-2') {
        html += `
          <!-- Minna no Nihongo II Premium Divider -->
          <div style="margin-top: 56px; margin-bottom: 48px; border-top: 1px solid var(--border-bright); padding-top: 40px; text-align: center; position: relative;">
            <div style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--bg-main); padding: 4px 24px; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: var(--tracking-widest); border: 1px solid var(--border-bright); border-radius: 99px; color: var(--text-main);">
              Minna no Nihongo II
            </div>
            <h2 style="font-size: 2rem; font-weight: 900; letter-spacing: var(--tracking-tight); margin-bottom: 12px; color: var(--text-main);">
              JALUR MENENGAH (N4) 🧠
            </h2>
            <p style="color: var(--text-secondary); font-size: 0.95rem; max-width: 580px; margin: 0 auto; line-height: 1.6; font-weight: 500;">
              Selamat datang di Bagian Kedua (Bab 26 - 50). Di sini Anda akan menguasai tata bahasa tingkat menengah-ke bawah (N4) untuk percakapan sehari-hari dan bisnis yang lebih natural, sopan (keigo), dan ekspresif.
            </p>
          </div>
        `;
      }

      // Level Title Row
      html += `
        <div style="margin-bottom: 48px;" class="fade-in">
          <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
            <div style="width: 50px; height: 50px; border-radius: 12px; background: var(--text-main); color: var(--bg-main); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800; box-shadow: var(--shadow-md); flex-shrink: 0;">
              ${level.levelId === 'pra-mnn' ? 'L1' : level.levelId === 'shokyu-1' ? 'L2' : 'L3'}
            </div>
            <div>
              <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.02em;">
                ${level.title.includes('—') ? level.title.split('—')[1].trim() : level.title}
              </h2>
              ${level.desc ? `<div style="font-size: 0.9rem; color: var(--text-muted); font-weight: 500; margin-top: 2px;">${level.desc}</div>` : ''}
            </div>
          </div>
          
          <div style="margin-left: 24px; border-left: 2px dashed var(--border); padding-left: 32px; display: flex; flex-direction: column; gap: 32px; position: relative;">
      `;

      level.phases.forEach(phase => {
        const emoji = phaseEmojis[phase.phaseId] || '📚';
        html += `
            <div style="position: relative;">
              <!-- Timeline Dot -->
              <div style="position: absolute; left: -41px; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: var(--bg-main); border: 3px solid var(--text-main);"></div>
              
              <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px; letter-spacing: -0.01em; text-transform: uppercase; display: flex; align-items: center; gap: 8px;">
                <span>${emoji}</span>
                <span>${phase.title}</span>
              </h3>
              ${phase.desc ? `<p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px; font-weight: 500;">${phase.desc}</p>` : ''}
              
              <div class="bento-grid" style="margin-top: 16px; gap: 16px;">
        `;

        phase.units.forEach(unit => {
          const completed = isUnitCompleted(unit.id);
          
          let icon = 'book-open';
          let typeColor = 'var(--text-muted)';
          if (unit.type === 'kana') { icon = 'type'; }
          if (unit.type === 'grammar') { icon = 'puzzle'; }
          const isChap = !isNaN(unit.id);
          
          html += `
                <div class="bento-card ${completed ? 'completed' : ''}" style="padding: 20px; display: flex; flex-direction: column; gap: 12px; border: 1px solid ${completed ? 'var(--border-accent)' : 'var(--border)'}; background: ${completed ? 'var(--accent-dim)' : 'var(--bg-card)'};">
                  <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; display: flex; align-items: center; gap: 4px; background: var(--bg-elevated); padding: 3px 10px; border-radius: 12px; border: 1px solid var(--border);">
                      <i data-lucide="${icon}" style="width: 12px; height: 12px;"></i>
                      ${unit.type}
                    </span>
                    ${completed ? `<i data-lucide="check-circle" style="width: 18px; height: 18px; color: var(--text-main);"></i>` : ''}
                  </div>
                  <div>
                    <div style="font-weight: 800; color: var(--text-main); font-size: 1.05rem; line-height: 1.35; margin-bottom: 6px;">${unit.title}</div>
                    ${unit.desc ? `<div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4; font-weight: 500;">${unit.desc}</div>` : ''}
                  </div>
                  
                  ${isChap ? `
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px;">
                    <button class="mission-btn" data-route="#/chapter/${unit.id}">
                      <i data-lucide="book-open" style="width:13px;height:13px;color:var(--text-main);"></i> Teori
                    </button>
                    <button class="mission-btn" data-route="#/chapter/${unit.id}?tab=practice">
                      <i data-lucide="dumbbell" style="width:13px;height:13px;color:var(--text-main);"></i> Latihan
                    </button>
                    <button class="mission-btn" data-route="#/workbook/${unit.id}">
                      <i data-lucide="pen-tool" style="width:13px;height:13px;color:var(--text-main);"></i> Workbook
                    </button>
                    <button class="mission-btn" data-route="#/exam/${unit.id}">
                      <i data-lucide="award" style="width:13px;height:13px;color:var(--text-main);"></i> Ujian
                    </button>
                  </div>
                  ` : `
                  <button class="mission-btn" data-route="#/chapter/0?tab=kana" style="margin-top: 8px; width: 100%; display: flex; justify-content: center; gap: 6px;">
                    <i data-lucide="type" style="width:14px;height:14px;color:var(--text-main);"></i> Pelajari Kana Interaktif
                  </button>
                  `}
                </div>
          `;
        });

        html += `
              </div>
            </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    timelineContainer.innerHTML = html;

    // Rebind Lucide icons
    if (window.lucide) lucide.createIcons({ root: timelineContainer });

    // Rebind mission-btn click event listeners
    timelineContainer.querySelectorAll('.mission-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const route = btn.dataset.route;
        if (route === 'coming-soon') {
          if (typeof showToast !== 'undefined') {
            showToast('Materi ini akan segera hadir!', 'info');
          } else {
            alert('Materi ini akan segera hadir!');
          }
        } else {
          window.location.hash = route;
        }
      });
    });
  };

  // Initial Timeline Render
  renderTimeline(initialTrack);

  // Bind filter tab click events
  container.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedTrack = btn.dataset.track;

      // Update URL hash parameter silently (or just replace the hash to update state without losing history)
      if (selectedTrack === 'all') {
        window.history.replaceState(null, '', '#/curriculum');
      } else {
        window.history.replaceState(null, '', `#/curriculum?track=${selectedTrack}`);
      }

      // Toggle active states of buttons
      container.querySelectorAll('.filter-tab-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.track === selectedTrack);
      });

      // Re-render the timeline
      renderTimeline(selectedTrack);
    });
  });

  if (window.lucide) lucide.createIcons({ root: container });
}


