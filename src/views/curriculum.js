import { renderTopbar, renderBackBtn } from '../components/layout.js';
import { CURRICULUM } from '../data/curriculum.js';
import { isUnitCompleted } from '../store.js';

export function CurriculumView(container) {
  renderTopbar('Peta Kurikulum', false, '#/');
  renderBackBtn(container, '#/', 'Dashboard');

  // Compute overall progress
  let overallTotal = 0;
  let overallCompleted = 0;

  CURRICULUM.forEach(level => {
    level.phases.forEach(phase => {
      phase.units.forEach(u => {
        overallTotal++;
        if (isUnitCompleted(u.id)) overallCompleted++;
      });
    });
  });

  const overallPercent = overallTotal > 0 ? Math.round((overallCompleted / overallTotal) * 100) : 0;

  let timelineHtml = '';

  CURRICULUM.forEach((level, idx) => {
    let levelTotal = 0;
    let levelCompleted = 0;

    level.phases.forEach(p => {
      p.units.forEach(u => {
        levelTotal++;
        if (isUnitCompleted(u.id)) levelCompleted++;
      });
    });

    const levelPercent = levelTotal > 0 ? Math.round((levelCompleted / levelTotal) * 100) : 0;
    const cleanTitle = level.title.includes('—') ? level.title.split('—')[1].trim() : level.title;
    const levelNumber = idx + 1;

    timelineHtml += `
      <section class="cur-section">
        <div class="cur-section-header">
          <div class="cur-section-title-row">
            <h2 class="cur-section-title">Level ${levelNumber} · ${cleanTitle}</h2>
            <span class="cur-section-stat">${levelCompleted}/${levelTotal} Bab</span>
          </div>
          ${level.desc ? `<p class="cur-section-desc">${level.desc}</p>` : ''}
        </div>

        <div class="cur-grid">
    `;

    level.phases.forEach((phase, phaseIdx) => {
      const totalUnits = phase.units.length;
      let completedCount = 0;
      phase.units.forEach(u => {
        if (isUnitCompleted(u.id)) completedCount++;
      });
      const isPhaseDone = totalUnits > 0 && completedCount === totalUnits;
      const percent = totalUnits > 0 ? Math.round((completedCount / totalUnits) * 100) : 0;

      // Clean chapter range label
      const chapterNums = phase.units.map(u => parseInt(u.id)).filter(n => !isNaN(n));
      const rangeLabel = chapterNums.length === 0
        ? 'Aksara'
        : chapterNums.length === 1
          ? `Bab ${chapterNums[0]}`
          : `Bab ${Math.min(...chapterNums)} – ${Math.max(...chapterNums)}`;

      // Clean phase title without redundant "Fase N:"
      const phaseTitle = phase.title.replace(/^Fase \d+:\s*/, '');

      const isSingleUnit = phase.units.length === 1;
      const targetUrl = isSingleUnit ? `#/chapter/${phase.units[0].id}` : `#/phase/${phase.phaseId}`;
      const actionLabel = isSingleUnit ? 'Mulai belajar &rarr;' : 'Buka fase &rarr;';

      timelineHtml += `
        <a href="${targetUrl}" class="cur-card ${isPhaseDone ? 'is-complete' : ''}">
          <div class="cur-card-top">
            <span class="cur-card-range">${rangeLabel}</span>
            <span class="cur-card-count">${isPhaseDone ? '✓ Selesai' : `${completedCount}/${totalUnits} bab`}</span>
          </div>

          <div class="cur-card-body">
            <h3 class="cur-card-title">${phaseTitle}</h3>
            ${phase.desc ? `<p class="cur-card-desc">${phase.desc}</p>` : ''}
          </div>

          <div class="cur-card-bottom">
            <div class="cur-card-progress">
              <div class="cur-card-progress-bar">
                <div class="cur-card-progress-fill" style="width: ${percent}%;"></div>
              </div>
            </div>
            <span class="cur-card-action">${actionLabel}</span>
          </div>
        </a>
      `;
    });

    timelineHtml += `
        </div>
      </section>
    `;
  });

  container.innerHTML = `
    <div class="curriculum-container page-container-standard fade-in">
      <header class="cur-page-header">
        <div class="cur-page-header-text">
          <h1 class="cur-page-title">Peta Kurikulum</h1>
          <p class="cur-page-desc">Jalur belajar 51 bab dari fondasi aksara hingga tata bahasa Minna no Nihongo I & II.</p>
        </div>

        <div class="cur-global-tracker">
          <div class="cur-global-meta">
            <span class="cur-global-label">Kemajuan Belajar</span>
            <span class="cur-global-val">${overallCompleted} / ${overallTotal} Bab (${overallPercent}%)</span>
          </div>
          <div class="cur-global-bar">
            <div class="cur-global-fill" style="width: ${overallPercent}%;"></div>
          </div>
        </div>
      </header>

      <div class="cur-sections-wrap">
        ${timelineHtml}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons({ root: container });
}
