import { renderTopbar, showToast, renderBackBtn } from '../components/layout.js';
import { getPhaseDetails } from '../data/curriculum.js';
import { isUnitCompleted, isChapterQuizPassed, isChapterExamPassed, getState } from '../store.js';
import { addSRSItem } from '../srs.js';
import { MNN_INDEX, VOCAB_TO_CHAPTER, loadChapter } from '../data/chapter_index.js';

export function PhaseView(container, params = {}) {
  const phaseId = params.id;
  const phase = getPhaseDetails(phaseId);

  if (!phase) {
    container.innerHTML = `
      <div class="page-container-standard fade-in" style="padding: 60px 20px; text-align: center;">
        <h2 style="font-size: var(--text-lg); font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Fase Tidak Ditemukan</h2>
        <p style="color: var(--text-muted); font-size: var(--text-sm); margin-bottom: 20px;">Fase kurikulum "${phaseId}" tidak tersedia.</p>
        <a href="#/curriculum" class="btn btn-secondary" style="font-size: var(--text-xs); padding: 8px 16px;">← Kembali ke Kurikulum</a>
      </div>
    `;
    return;
  }

  // If the phase only has 1 chapter (e.g. Fase 1 Aksara / Bab 0), go directly to that chapter
  if (phase.units.length === 1) {
    window.location.replace(`#/chapter/${phase.units[0].id}`);
    return;
  }

  const backUrl = '#/curriculum';
  renderTopbar(phase.title, false, backUrl);

  // Calculate phase metrics
  const totalUnits = phase.units.length;
  let completedUnitsCount = 0;
  phase.units.forEach(u => {
    if (isUnitCompleted(u.id)) completedUnitsCount++;
  });
  const progressPercent = totalUnits > 0 ? Math.round((completedUnitsCount / totalUnits) * 100) : 0;
  const cleanLevelTitle = phase.levelTitle.includes('—') ? phase.levelTitle.split('—')[1].trim() : phase.levelTitle;

  let unitsHtml = '';
  phase.units.forEach((unit) => {
    const completed = isUnitCompleted(unit.id);
    const isChap = !isNaN(unit.id);

    const isTheoryDone = localStorage.getItem(`nihongo_master_theory_ch${unit.id}`) === 'true';
    const isWorkbookDone = (() => {
      try {
        const saved = localStorage.getItem(`nihongo_master_workbook_ch${unit.id}`);
        if (saved) return !!JSON.parse(saved).xpAwarded;
      } catch {}
      return false;
    })();
    const isExamDone = isChapterExamPassed(unit.id);

    let activeSrsCount = 0;
    let vocabCount = 0;
    let unitTitle = unit.title;
    let grammarTag = unit.desc || '';

    if (isChap && unit.id !== 0 && unit.id !== '0') {
      const chId = parseInt(unit.id);
      const indexCh = MNN_INDEX.find(c => c.id === chId);
      if (indexCh) {
        unitTitle = indexCh.title;
        vocabCount = indexCh.vocabCount || 0;
        const srsItems = getState().srsItems || [];
        activeSrsCount = srsItems.filter(item => {
          if (item.type !== 'vocab') return false;
          const key = item.id.replace('vocab-', '');
          return VOCAB_TO_CHAPTER[key] === chId;
        }).length;
      }
    }

    const completedActionsCount = (isTheoryDone ? 1 : 0) + (isWorkbookDone ? 1 : 0) + (isExamDone ? 1 : 0);
    const unitBadgeLabel = `BAB ${unit.id < 10 && unit.id > 0 ? '0' + unit.id : unit.id}`;
    const cleanTitle = unitTitle.includes(':') ? unitTitle.split(':').slice(1).join(':').trim() : unitTitle;

    unitsHtml += `
      <div class="phase-unit-card ${completed ? 'is-complete' : ''}">
        
        <!-- Header Row: Chapter Label, Grammar Tag & Status -->
        <div class="phase-unit-top">
          <div class="phase-unit-meta-left">
            <span class="phase-unit-badge">${unitBadgeLabel}</span>
            ${grammarTag ? `<span class="phase-unit-grammar-tag">${grammarTag}</span>` : ''}
          </div>
          <span class="phase-unit-status ${completed ? 'done' : completedActionsCount > 0 ? 'active' : ''}">
            ${completed ? '✓ Selesai' : completedActionsCount > 0 ? `${completedActionsCount}/3 Selesai` : 'Belum Mulai'}
          </span>
        </div>

        <!-- Title -->
        <div class="phase-unit-body">
          <h3 class="phase-unit-title">${cleanTitle}</h3>
        </div>

        <!-- Integrated Bottom: SRS Mini Chip & Module Action Buttons -->
        <div class="phase-unit-actions-row">
          ${isChap && unit.id !== 0 && unit.id !== '0' ? `
            <div class="phase-action-grid">
              <button class="phase-action-btn ${isTheoryDone ? 'completed' : ''}" data-route="#/chapter/${unit.id}">
                <i data-lucide="${isTheoryDone ? 'check' : 'book-open'}" style="width: 12.5px; height: 12.5px;"></i>
                <span>Materi</span>
              </button>
              <button class="phase-action-btn ${isWorkbookDone ? 'completed' : ''}" data-route="#/workbook/${unit.id}">
                <i data-lucide="${isWorkbookDone ? 'check' : 'pen-tool'}" style="width: 12.5px; height: 12.5px;"></i>
                <span>Buku Kerja</span>
              </button>
              <button class="phase-action-btn ${isExamDone ? 'completed' : ''}" data-route="#/exam/${unit.id}">
                <i data-lucide="${isExamDone ? 'check' : 'award'}" style="width: 12.5px; height: 12.5px;"></i>
                <span>Ujian</span>
              </button>
            </div>
          ` : `
            <div class="phase-action-grid two-col">
              <button class="phase-action-btn" data-route="#/chapter/0?tab=kana">
                <i data-lucide="type" style="width: 12.5px; height: 12.5px;"></i>
                <span>Huruf Kana</span>
              </button>
              <button class="phase-action-btn" data-route="#/chapter/0?tab=pelafalan">
                <i data-lucide="volume-2" style="width: 12.5px; height: 12.5px;"></i>
                <span>Pelafalan &amp; Salam</span>
              </button>
            </div>
          `}

          ${isChap && unit.id !== 0 && unit.id !== '0' && vocabCount > 0 ? `
            <div class="phase-srs-inline">
              <span class="phase-srs-text">
                <i data-lucide="layers" style="width: 11px; height: 11px;"></i> ${activeSrsCount}/${vocabCount} Kosakata SRS
              </span>
              ${activeSrsCount < vocabCount ? `
                <button class="phase-sync-srs-btn no-print" data-chapter-id="${unit.id}">
                  <i data-lucide="plus" style="width: 10px; height: 10px;"></i> Antrekan
                </button>
              ` : `
                <span class="phase-srs-synced">
                  <i data-lucide="check" style="width: 10px; height: 10px;"></i> Terantre
                </span>
              `}
            </div>
          ` : ''}
        </div>

      </div>
    `;
  });

  container.innerHTML = `
    <div class="phase-page-container page-container-standard fade-in">
      
      <!-- Kindle/Apple Style Clean Header -->
      <header class="phase-page-header">
        <nav class="phase-breadcrumb" aria-label="Breadcrumb">
          <a href="#/curriculum">← Kurikulum</a>
          <span class="phase-crumb-sep">/</span>
          <span>${cleanLevelTitle}</span>
        </nav>

        <div class="phase-header-intro">
          <div class="phase-header-title-row">
            <h1 class="phase-header-title">${phase.title.replace(/^Fase \d+:\s*/, '')}</h1>
            <span class="phase-header-badge">${completedUnitsCount}/${totalUnits} Bab Selesai</span>
          </div>
          ${phase.desc ? `<p class="phase-header-desc">${phase.desc}</p>` : ''}

          <div class="phase-header-progress-track">
            <div class="phase-header-progress-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>
      </header>

      <!-- Unit Cards List -->
      <div class="phase-units-container">
        ${unitsHtml}
      </div>

    </div>
  `;

  if (window.lucide) lucide.createIcons({ root: container });

  // Wire Mission Buttons
  container.querySelectorAll('.phase-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const route = btn.dataset.route;
      if (route) window.location.hash = route;
    });
  });

  // Wire SRS Sync All button
  container.querySelectorAll('.phase-sync-srs-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chId = parseInt(btn.dataset.chapterId);
      btn.disabled = true;
      btn.innerHTML = `<i data-lucide="loader" style="width: 12px; height: 12px; animation: spin 1s linear infinite;"></i> Mengantre...`;
      if (window.lucide) lucide.createIcons({ root: btn });

      loadChapter(chId).then(data => {
        if (!data || !data.vocab) return;
        data.vocab.forEach(v => {
          addSRSItem({
            id: `vocab-${v.kana || v.kanji || v.rom}`,
            type: 'vocab',
            front: v.kana || v.kanji || v.rom,
            back: v.en,
            kanji: v.kanji || '',
            reading: v.kana || '',
            romaji: v.rom || '',
            chapter: chId
          });
        });
        showToast(`Berhasil menambahkan ${data.vocab.length} kosakata Bab ${chId} ke antrean SRS!`);
        PhaseView(container, params);
      }).catch(err => {
        console.error('[Phase] Sync SRS Error:', err);
        showToast(`Gagal menambahkan kosakata: ${err.message}`);
        btn.disabled = false;
      });
    });
  });
}
