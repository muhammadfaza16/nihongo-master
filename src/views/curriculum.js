import { renderTopbar, showToast, renderBackBtn } from '../components/layout.js';
import { CURRICULUM } from '../data/curriculum.js';
import { isUnitCompleted, isChapterQuizPassed, isChapterExamPassed, getState } from '../store.js';
import { addSRSItem } from '../srs.js';
import { MNN_INDEX, VOCAB_TO_CHAPTER, loadChapter } from '../data/chapter_index.js';

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
    <div class="curriculum-container page-container-standard fade-in" style="padding-bottom: 60px;">
      
      <!-- Minimalist Header Block -->
      <div style="margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 16px;">
        <span style="font-size: var(--text-3xs); font-weight: 600; color: var(--text-muted); letter-spacing: var(--tracking-wide);">
          Peta Belajar Terstruktur (Bab 0 – 50)
        </span>
        <h2 style="font-size: var(--text-lg); font-weight: 700; color: var(--text-main); margin: 2px 0 6px 0; letter-spacing: var(--tracking-tight);">
          Peta Kurikulum JLPT
        </h2>
        <p style="color: var(--text-secondary); font-size: var(--text-xs); line-height: 1.5; margin: 0; max-width: 680px;">
          Jalur pembelajaran bahasa Jepang terstruktur. Pantau status penyelesaian teori, latihan, workbook, dan ujian di setiap bab.
        </p>
      </div>

      <!-- Segmented Track Filters -->
      <div style="display: flex; gap: 4px; background: var(--bg-elevated); padding: 4px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 24px; max-width: 440px; overflow-x: auto; -webkit-overflow-scrolling: touch;" class="no-print">
        <button class="filter-tab-btn ${activeTrack === 'all' ? 'active' : ''}" data-track="all" style="flex: 1; min-width: 70px;">Semua</button>
        <button class="filter-tab-btn ${activeTrack === 'pra-mnn' ? 'active' : ''}" data-track="pra-mnn" style="flex: 1; min-width: 80px;">Pra-Minna</button>
        <button class="filter-tab-btn ${activeTrack === 'minna1' ? 'active' : ''}" data-track="minna1" style="flex: 1; min-width: 95px;">Minna I (N5)</button>
        <button class="filter-tab-btn ${activeTrack === 'minna2' ? 'active' : ''}" data-track="minna2" style="flex: 1; min-width: 95px;">Minna II (N4)</button>
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
          <div style="margin-top: 36px; margin-bottom: 28px; border-top: 1px solid var(--border-bright); padding-top: 28px; text-align: center; position: relative;">
            <div style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--bg-main); padding: 4px 24px; font-size: var(--text-xs); font-weight: 800; border: 1px solid var(--border-bright); border-radius: var(--radius-sm); color: var(--text-main);">
              Minna no Nihongo II
            </div>
            <h2 style="font-size: var(--text-xl); font-weight: 900; letter-spacing: var(--tracking-tight); margin-bottom: 8px; color: var(--text-main);">
              Jalur Menengah (N4) ✦
            </h2>
            <p style="color: var(--text-secondary); font-size: var(--text-xs); max-width: 580px; margin: 0 auto; line-height: var(--leading-relaxed); font-weight: 500;">
              Selamat datang di Bagian Kedua (Bab 26 - 50). Di sini Anda akan menguasai tata bahasa tingkat menengah-ke bawah (N4) untuk percakapan sehari-hari dan bisnis yang lebih natural, sopan (keigo), dan ekspresif.
            </p>
          </div>
        `;
      }

      // Level Title Row
      html += `
        <div style="margin-bottom: 32px;" class="fade-in">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
            <div style="width: 34px; height: 34px; border-radius: var(--radius-sm); background: var(--bg-card); color: var(--accent); display: flex; align-items: center; justify-content: center; font-size: var(--text-xs); font-weight: 700; border: 1px solid var(--border); flex-shrink: 0;">
              ${level.levelId === 'pra-mnn' ? 'L1' : level.levelId === 'shokyu-1' ? 'L2' : 'L3'}
            </div>
            <div>
              <h2 style="font-size: var(--text-base); font-weight: 700; color: var(--text-main); margin: 0; letter-spacing: -0.01em;">
                ${level.title.includes('—') ? level.title.split('—')[1].trim() : level.title}
              </h2>
              ${level.desc ? `<div style="font-size: var(--text-xs); color: var(--text-muted); font-weight: 400; margin-top: 1px;">${level.desc}</div>` : ''}
            </div>
          </div>
          
          <div class="curriculum-level-tree">
      `;

      level.phases.forEach(phase => {
        html += `
          <div style="margin-bottom: 24px;">
            <div style="margin-bottom: 10px;">
              <h3 style="font-size: var(--text-sm); font-weight: 600; color: var(--text-main); margin: 0; letter-spacing: -0.01em;">
                ${phase.title}
              </h3>
              ${phase.desc ? `<p style="color: var(--text-muted); font-size: var(--text-xs); margin: 2px 0 0 0; font-weight: 400; line-height: 1.4;">${phase.desc}</p>` : ''}
            </div>
            
            <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden;">
        `;

        phase.units.forEach((unit, unitIdx) => {
          const isLast = unitIdx === phase.units.length - 1;
          const completed = isUnitCompleted(unit.id);
          const isChap = !isNaN(unit.id);

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

          let srsText = false;
          let activeSrsCount = 0;
          let vocabCount = 0;
          let unitTitle = unit.title;
          let unitDesc = unit.desc;
          if (isChap) {
            const chId = parseInt(unit.id);
            const indexCh = MNN_INDEX.find(c => c.id === chId);
            if (indexCh) {
              unitTitle = indexCh.title;
              unitDesc = indexCh.desc;
              vocabCount = indexCh.vocabCount || 0;
              const srsItems = getState().srsItems || [];
              activeSrsCount = srsItems.filter(item => {
                if (item.type !== 'vocab') return false;
                const key = item.id.replace('vocab-', '');
                return VOCAB_TO_CHAPTER[key] === chId;
              }).length;
              srsText = true;
            }
          }
          
          html += `
            <div style="padding: 16px 18px; border-bottom: ${isLast ? 'none' : '1px solid var(--border)'}; transition: background 0.15s ease;" class="curriculum-unit-row">
              
              <!-- Clickable Row Header: Title, SRS Tag & Chevron Dropdown -->
              <div class="curriculum-row-toggle" data-unit-id="${unit.id}" style="display: flex; justify-content: space-between; align-items: center; gap: 12px; cursor: pointer; user-select: none;">
                <div style="min-width: 0; flex: 1; display: flex; align-items: center; gap: 6px;">
                  <h4 style="font-size: 14px; font-weight: 500; color: var(--text-main); margin: 0; line-height: 1.4; letter-spacing: -0.01em;">${unitTitle}</h4>
                  ${completed ? `<i data-lucide="check-circle" style="width: 14px; height: 14px; color: var(--accent); flex-shrink: 0;"></i>` : ''}
                </div>

                <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                  ${srsText ? `
                    <span style="font-size: 11px; color: var(--text-muted); font-weight: 400; font-variant-numeric: tabular-nums;">
                      SRS ${activeSrsCount}/${vocabCount}
                    </span>
                  ` : ''}
                  <i data-lucide="chevron-down" class="row-chevron" style="width: 14px; height: 14px; color: var(--text-muted); transition: transform 0.2s ease;"></i>
                </div>
              </div>

              <!-- Collapsible Detail Info Drawer (Hidden by default, expands on click) -->
              <div class="curriculum-row-detail" style="display: none; padding-top: 10px; margin-top: 10px; border-top: 1px solid var(--border);">
                ${unitDesc ? `
                  <p style="color: var(--text-secondary); font-size: 13px; margin: 0 0 10px 0; line-height: 1.6; font-weight: 400;">
                    ${unitDesc}
                  </p>
                ` : ''}

                ${isChap ? `
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 12px;">
                    <span style="color: var(--text-secondary); font-weight: 400;">Kosakata SRS: <strong style="color: var(--text-main);">${activeSrsCount}/${vocabCount}</strong> kata terdaftar</span>
                    ${vocabCount > 0 && activeSrsCount < vocabCount ? `
                      <button class="curriculum-sync-srs-btn no-print" data-chapter-id="${unit.id}" style="background: transparent; border: none; padding: 0; color: var(--accent); font-weight: 600; cursor: pointer; font-size: 11px;">
                        + Antrekan Semua
                      </button>
                    ` : `<span style="color: var(--accent); font-size: 11px; font-weight: 500;">✓ Terantre</span>`}
                  </div>
                ` : ''}
              </div>

              <!-- Kindle Soft Action Buttons Row -->
              ${isChap ? `
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; width: 100%; margin-top: 10px;">
                <button class="mission-btn ${isTheoryDone ? 'completed' : ''}" data-route="#/chapter/${unit.id}" style="${isTheoryDone ? 'opacity: 0.8; border-color: var(--border);' : ''}">
                  <i data-lucide="${isTheoryDone ? 'check-circle' : 'book-open'}" style="width:12px;height:12px;opacity:0.75;"></i> Teori
                </button>
                <button class="mission-btn ${isQuizDone ? 'completed' : ''}" data-route="#/chapter/${unit.id}?tab=practice" style="${isQuizDone ? 'opacity: 0.8; border-color: var(--border);' : ''}">
                  <i data-lucide="${isQuizDone ? 'check-circle' : 'dumbbell'}" style="width:12px;height:12px;opacity:0.75;"></i> Latihan
                </button>
                <button class="mission-btn ${isWorkbookDone ? 'completed' : ''}" data-route="#/workbook/${unit.id}" style="${isWorkbookDone ? 'opacity: 0.8; border-color: var(--border);' : ''}">
                  <i data-lucide="${isWorkbookDone ? 'check-circle' : 'pen-tool'}" style="width:12px;height:12px;opacity:0.75;"></i> Workbook
                </button>
                <button class="mission-btn ${isExamDone ? 'completed' : ''}" data-route="#/exam/${unit.id}" style="${isExamDone ? 'opacity: 0.8; border-color: var(--border);' : ''}">
                  <i data-lucide="${isExamDone ? 'check-circle' : 'award'}" style="width:12px;height:12px;opacity:0.75;"></i> Ujian
                </button>
              </div>
              ` : `
              <button class="mission-btn" data-route="#/chapter/0?tab=kana" style="width: 100%; display: flex; justify-content: center; gap: 6px; padding: 8px; margin-top: 10px;">
                <i data-lucide="type" style="width:13px;height:13px;opacity:0.75;"></i> Pelajari Kana Interaktif
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

    // Bind Accordion Row Toggle Events
    timelineContainer.querySelectorAll('.curriculum-row-toggle').forEach(rowHeader => {
      rowHeader.addEventListener('click', () => {
        const row = rowHeader.closest('.curriculum-unit-row');
        const detail = row.querySelector('.curriculum-row-detail');
        const chevron = rowHeader.querySelector('.row-chevron');
        
        const isHidden = detail.style.display === 'none';
        detail.style.display = isHidden ? 'block' : 'none';
        if (chevron) {
          chevron.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      });
    });

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

    // Bind quick SRS sync buttons (lazy-loaded on click)
    timelineContainer.querySelectorAll('.curriculum-sync-srs-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const chId = parseInt(btn.dataset.chapterId);
        btn.disabled = true;
        btn.textContent = '[⏳ Mengantre...]';
        loadChapter(chId).then(chapterData => {
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
        }).catch(err => {
          console.error('[Curriculum] Gagal memuat data bab untuk sinkronisasi SRS:', err);
          btn.disabled = false;
          btn.textContent = '[+ Antrekan Semua]';
        });
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


