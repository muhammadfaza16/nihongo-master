import { renderTopbar, showToast, renderBackBtn } from '../components/layout.js';
import { CURRICULUM } from '../data/curriculum.js';
import { isUnitCompleted, isChapterQuizPassed, isChapterExamPassed, getState } from '../store.js';
import { addSRSItem } from '../srs.js';
import { MNN_DATA } from '../data/chapter_data.js';

const phaseEmojis = {
  'fase-aksara': '✦',
  'mnn1-fase1': '❖',
  'mnn1-fase2': '◈',
  'mnn1-fase3': '◆',
  'mnn1-fase4': '◇',
  'mnn2-fase1': '✦',
  'mnn2-fase2': '❖',
  'mnn2-fase3': '◈',
  'mnn2-fase4': '◆'
};

export function CurriculumView(container) {
  renderTopbar('Peta Kurikulum', false, '#/');
  renderBackBtn(container, '#/', 'Dashboard');

  // Read initial track filter from URL parameter
  let activeTrack = 'all';
  const hash = window.location.hash;
  if (hash.includes('?')) {
    const query = hash.split('?')[1];
    const urlParams = new URLSearchParams(query);
    const track = urlParams.get('track');
    if (['minna1', 'minna2', 'pra-mnn'].includes(track)) {
      activeTrack = track;
    }
  }

  container.innerHTML = `
    <div class="fade-in" style="max-width: 900px; margin: 0 auto; padding-bottom: 60px;">
      
      <!-- Hero Header -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-lg); padding: 36px 24px; margin-bottom: 32px; text-align: center; position: relative; overflow: hidden;">
        <h2 style="font-size: 2.2rem; font-weight: 900; color: var(--text-main); margin-bottom: 12px; letter-spacing: var(--tracking-tight); text-transform: uppercase;">Peta Kurikulum <span style="border-bottom: 3px solid var(--text-main); padding-bottom: 2px;">JLPT</span></h2>
        <p style="color: var(--text-secondary); max-width: 520px; margin: 0 auto; font-size: 0.95rem; line-height: 1.6; font-weight: 500;">
          Jalur belajar bahasa Jepang terstruktur. Pilih tab di bawah untuk memfilter fase belajar atau lihat seluruh kurikulum sekaligus.
        </p>
      </div>

      <!-- Track Filters -->
      <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 36px; flex-wrap: wrap;" class="no-print">
        <button class="filter-tab-btn ${activeTrack === 'all' ? 'active' : ''}" data-track="all" style="height: 38px;">Semua</button>
        <button class="filter-tab-btn ${activeTrack === 'pra-mnn' ? 'active' : ''}" data-track="pra-mnn" style="height: 38px;">Pra-Minna</button>
        <button class="filter-tab-btn ${activeTrack === 'minna1' ? 'active' : ''}" data-track="minna1" style="height: 38px;">Minna I (N5)</button>
        <button class="filter-tab-btn ${activeTrack === 'minna2' ? 'active' : ''}" data-track="minna2" style="height: 38px;">Minna II (N4)</button>
      </div>

      <!-- Timeline Container -->
      <div id="curriculum-timeline"></div>
    </div>
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
            <div style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--bg-main); padding: 4px 24px; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: var(--tracking-widest); border: 1px solid var(--border-bright); border-radius: var(--radius-sm); color: var(--text-main);">
              Minna no Nihongo II
            </div>
            <h2 style="font-size: 2rem; font-weight: 900; letter-spacing: var(--tracking-tight); margin-bottom: 12px; color: var(--text-main);">
              JALUR MENENGAH (N4) ✦
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
            <div style="width: 50px; height: 50px; border-radius: var(--radius-sm); background: var(--text-main); color: var(--bg-main); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800; border: 1px solid var(--border-accent); flex-shrink: 0;">
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
        html += `
            <div style="position: relative;">
              <!-- Timeline Dot -->
              <div style="position: absolute; left: -41px; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: var(--bg-main); border: 3px solid var(--text-main);"></div>
              
              <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px; letter-spacing: -0.01em; text-transform: uppercase; display: flex; align-items: center; gap: 8px;">
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

          // Detailed modality completion status
          const isTheoryDone = localStorage.getItem(`nihongo_master_theory_ch${unit.id}`) === 'true';
          const isQuizDone = isChapterQuizPassed(unit.id);
          const isWorkbookDone = (() => {
            try {
              const saved = localStorage.getItem(`nihongo_master_workbook_ch${unit.id}`);
              if (saved) {
                const parsed = JSON.parse(saved);
                return !!parsed.xpAwarded;
              }
            } catch {}
            return false;
          })();
          const isExamDone = isChapterExamPassed(unit.id);

          // Get SRS active vocab progress
          let srsHtml = '';
          if (isChap) {
            const chId = parseInt(unit.id);
            const chapterData = MNN_DATA.find(c => c.id === chId);
            const chapterVocab = chapterData ? (chapterData.vocab || []) : [];
            const srsItems = getState().srsItems || [];
            const activeSrsCount = chapterVocab.filter(v => srsItems.some(item => item.id === `vocab-${v.kana || v.kanji || v.rom}`)).length;
            
            srsHtml = `
              <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; margin-top: 4px; display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                <span>SRS: <strong style="color: var(--text-main); font-variant-numeric: tabular-nums;">${activeSrsCount}/${chapterVocab.length}</strong></span>
                ${chapterVocab.length > 0 && activeSrsCount < chapterVocab.length ? `
                  <button class="curriculum-sync-srs-btn no-print" data-chapter-id="${unit.id}" style="background: transparent; border: none; padding: 0; color: var(--text-main); font-weight: 800; cursor: pointer; text-decoration: underline; font-size: 0.72rem;">
                    [+ Antrekan Semua]
                  </button>
                ` : ''}
              </div>
            `;
          }
          
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
                    ${srsHtml}
                  </div>
                  
                  ${isChap ? `
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px;">
                    <button class="mission-btn ${isTheoryDone ? 'completed' : ''}" data-route="#/chapter/${unit.id}" style="${isTheoryDone ? 'opacity: 0.8; border-color: var(--border-accent);' : ''}">
                      <i data-lucide="${isTheoryDone ? 'check-circle' : 'book-open'}" style="width:13px;height:13px;color:var(--text-main);"></i> Teori
                    </button>
                    <button class="mission-btn ${isQuizDone ? 'completed' : ''}" data-route="#/chapter/${unit.id}?tab=practice" style="${isQuizDone ? 'opacity: 0.8; border-color: var(--border-accent);' : ''}">
                      <i data-lucide="${isQuizDone ? 'check-circle' : 'dumbbell'}" style="width:13px;height:13px;color:var(--text-main);"></i> Latihan
                    </button>
                    <button class="mission-btn ${isWorkbookDone ? 'completed' : ''}" data-route="#/workbook/${unit.id}" style="${isWorkbookDone ? 'opacity: 0.8; border-color: var(--border-accent);' : ''}">
                      <i data-lucide="${isWorkbookDone ? 'check-circle' : 'pen-tool'}" style="width:13px;height:13px;color:var(--text-main);"></i> Workbook
                    </button>
                    <button class="mission-btn ${isExamDone ? 'completed' : ''}" data-route="#/exam/${unit.id}" style="${isExamDone ? 'opacity: 0.8; border-color: var(--border-accent);' : ''}">
                      <i data-lucide="${isExamDone ? 'check-circle' : 'award'}" style="width:13px;height:13px;color:var(--text-main);"></i> Ujian
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

    // Bind quick SRS sync buttons
    timelineContainer.querySelectorAll('.curriculum-sync-srs-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const chId = parseInt(btn.dataset.chapterId);
        const chapterData = MNN_DATA.find(c => c.id === chId);
        if (chapterData && chapterData.vocab) {
          chapterData.vocab.forEach(v => {
            addSRSItem(`vocab-${v.kana || v.kanji || v.rom}`, 'vocab');
          });
          if (typeof showToast !== 'undefined') {
            showToast(`Berhasil memasukkan ${chapterData.vocab.length} kosakata Bab ${chId} ke antrean SRS!`, 'success');
          } else {
            alert(`Berhasil memasukkan ${chapterData.vocab.length} kosakata Bab ${chId} ke antrean SRS!`);
          }
          // Re-render to update counts
          renderTimeline(activeTrack);
        }
      });
    });
  };

  // Initial Timeline Render
  renderTimeline(activeTrack);

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
      activeTrack = selectedTrack;
      renderTimeline(activeTrack);
    });
  });

  if (window.lucide) lucide.createIcons({ root: container });
}


