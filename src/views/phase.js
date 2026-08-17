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
    const isTheoryDone = localStorage.getItem(`nihongo_master_theory_ch${u.id}`) === 'true';
    const isWorkbookDone = (() => {
      try {
        const saved = localStorage.getItem(`nihongo_master_workbook_ch${u.id}`);
        if (saved) return !!JSON.parse(saved).xpAwarded;
      } catch {}
      return false;
    })();
    const isExamDone = isChapterExamPassed(u.id);
    if (isUnitCompleted(u.id) || (isTheoryDone && isWorkbookDone && isExamDone)) {
      completedUnitsCount++;
    }
  });
  const progressPercent = totalUnits > 0 ? Math.round((completedUnitsCount / totalUnits) * 100) : 0;
  const cleanLevelTitle = phase.levelTitle.includes('—') ? phase.levelTitle.split('—')[1].trim() : phase.levelTitle;
  const cleanPhaseTitle = phase.title.includes(':') ? phase.title.split(':').slice(1).join(':').trim() : phase.title;

  // Identify the first unfinished unit to highlight as "Active Focus"
  let firstUnfinishedId = null;
  for (const u of phase.units) {
    const isTheoryDone = localStorage.getItem(`nihongo_master_theory_ch${u.id}`) === 'true';
    const isWorkbookDone = (() => {
      try {
        const saved = localStorage.getItem(`nihongo_master_workbook_ch${u.id}`);
        if (saved) return !!JSON.parse(saved).xpAwarded;
      } catch {}
      return false;
    })();
    const isExamDone = isChapterExamPassed(u.id);
    const isDone = isUnitCompleted(u.id) || (isTheoryDone && isWorkbookDone && isExamDone);
    if (!isDone) {
      firstUnfinishedId = u.id;
      break;
    }
  }

  let unitsHtml = '';
  phase.units.forEach((unit, idx) => {
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
    const isCompleted = isUnitCompleted(unit.id) || (isTheoryDone && isWorkbookDone && isExamDone);
    const isCurrentActive = unit.id === firstUnfinishedId;

    let activeSrsCount = 0;
    let vocabCount = 0;
    let unitTitle = unit.title;
    let grammarFocus = unit.desc || '';

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
    const numDisplay = unit.id < 10 && unit.id >= 0 ? `0${unit.id}` : `${unit.id}`;
    const cleanTitle = unitTitle.includes(':') ? unitTitle.split(':').slice(1).join(':').trim() : unitTitle;

    // Card State Classes
    const cardStateClass = isCompleted 
      ? 'is-completed' 
      : isCurrentActive 
        ? 'is-active-focus' 
        : completedActionsCount > 0 
          ? 'is-in-progress' 
          : 'is-upcoming';

    unitsHtml += `
      <div class="phase-card ${cardStateClass}">
        
        <!-- Row 1: Chapter Meta Header -->
        <div class="phase-card-top-bar">
          <span class="phase-badge-num">BAB ${numDisplay}</span>
          <span class="phase-badge-status ${isCompleted ? 'done' : isCurrentActive ? 'active' : completedActionsCount > 0 ? 'progress' : ''}">
            ${isCompleted 
              ? '<i data-lucide="check-circle-2" style="width: 11px; height: 11px;"></i> Selesai' 
              : isCurrentActive 
                ? '<i data-lucide="play" style="width: 9px; height: 9px; fill: currentColor;"></i> Target Saat Ini' 
                : completedActionsCount > 0 
                  ? `${completedActionsCount}/3 Modul` 
                  : 'Belum Mulai'}
          </span>
        </div>

        <!-- Row 2: Chapter Title & Grammar Focus Subtitle -->
        <div class="phase-card-title-group">
          <h3 class="phase-card-title">${cleanTitle}</h3>
          ${grammarFocus ? `<p class="phase-card-focus-text">${grammarFocus}</p>` : ''}
        </div>

        <!-- Row 3: High-End Segmented Action Dock -->
        <div class="phase-segmented-dock ${isChap && unit.id !== 0 && unit.id !== '0' ? '' : 'two-col'}">
          ${isChap && unit.id !== 0 && unit.id !== '0' ? `
            <button class="phase-dock-btn ${isTheoryDone ? 'is-done' : (!isTheoryDone && isCurrentActive) ? 'is-next' : ''}" data-route="#/chapter/${unit.id}">
              <i data-lucide="${isTheoryDone ? 'check' : 'book-open'}" style="width: 12px; height: 12px;"></i>
              <span>Materi</span>
            </button>

            <button class="phase-dock-btn ${isWorkbookDone ? 'is-done' : (isTheoryDone && !isWorkbookDone) ? 'is-next' : ''}" data-route="#/workbook/${unit.id}">
              <i data-lucide="${isWorkbookDone ? 'check' : 'pen-tool'}" style="width: 12px; height: 12px;"></i>
              <span>Buku Kerja</span>
            </button>

            <button class="phase-dock-btn ${isExamDone ? 'is-done' : (isTheoryDone && isWorkbookDone && !isExamDone) ? 'is-next' : ''}" data-route="#/exam/${unit.id}">
              <i data-lucide="${isExamDone ? 'check' : 'award'}" style="width: 12px; height: 12px;"></i>
              <span>Ujian</span>
            </button>
          ` : `
            <button class="phase-dock-btn is-next" data-route="#/chapter/0?tab=kana">
              <i data-lucide="type" style="width: 12px; height: 12px;"></i>
              <span>Aksara Kana</span>
            </button>
            <button class="phase-dock-btn" data-route="#/chapter/0?tab=pelafalan">
              <i data-lucide="volume-2" style="width: 12px; height: 12px;"></i>
              <span>Pelafalan &amp; Salam</span>
            </button>
          `}
        </div>

        <!-- Row 4: Clean Hairline Footer -->
        ${isChap && unit.id !== 0 && unit.id !== '0' && vocabCount > 0 ? `
          <div class="phase-card-subfoot">
            <span class="phase-subfoot-text"><i data-lucide="layers" style="width: 11px; height: 11px;"></i> ${vocabCount} Kosakata (${activeSrsCount} aktif di SRS)</span>
            ${activeSrsCount < vocabCount ? `
              <button class="phase-subfoot-sync-btn no-print" data-chapter-id="${unit.id}">+ Antrekan ke SRS</button>
            ` : `
              <span class="phase-subfoot-synced"><i data-lucide="check" style="width: 10px; height: 10px;"></i> Terantre</span>
            `}
          </div>
        ` : ''}

      </div>
    `;
  });

  const phaseTagLabel = phase.title.includes(':') ? phase.title.split(':')[0].trim().toUpperCase() : 'FASE';

  container.innerHTML = `
    <div class="phase-page-wrap page-container-standard fade-in">
      
      <!-- Atmospheric Phase Hero Banner -->
      <section class="phase-hero-card">
        <div class="phase-hero-watermark">段階</div>
        
        <nav class="phase-hero-nav" aria-label="Breadcrumb">
          <a href="#/curriculum" class="phase-nav-back">
            <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Kurikulum
          </a>
          <span class="phase-nav-sep">/</span>
          <span class="phase-nav-level">${cleanLevelTitle}</span>
        </nav>

        <div class="phase-hero-content">
          <div class="phase-hero-meta-badge">${phaseTagLabel} • ${totalUnits} BAB PEMBELAJARAN</div>
          <h1 class="phase-hero-title">${cleanPhaseTitle}</h1>
          ${phase.desc ? `<p class="phase-hero-desc">${phase.desc}</p>` : ''}
        </div>

        <!-- Progress Gauge -->
        <div class="phase-hero-progress-section">
          <div class="phase-progress-meta-row">
            <span class="phase-progress-label">Kemajuan Fase Ini</span>
            <span class="phase-progress-val"><strong>${completedUnitsCount}</strong> dari ${totalUnits} Bab (${progressPercent}%)</span>
          </div>
          <div class="phase-progress-track">
            <div class="phase-progress-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>
      </section>

      <!-- Chapter Roadmap List -->
      <div class="phase-roadmap-list">
        ${unitsHtml}
      </div>

    </div>
  `;

  if (window.lucide) lucide.createIcons({ root: container });

  // Wire Mission Buttons
  container.querySelectorAll('.phase-dock-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const route = btn.dataset.route;
      if (route) window.location.hash = route;
    });
  });

  // Wire SRS Sync All button
  container.querySelectorAll('.phase-subfoot-sync-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chId = parseInt(btn.dataset.chapterId);
      btn.disabled = true;
      btn.innerHTML = `<i data-lucide="loader" style="width: 11px; height: 11px; animation: spin 1s linear infinite;"></i> Mengantre...`;
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
