import { renderTopbar } from '../components/layout.js';
import { CURRICULUM } from '../data/curriculum.js';
import { isUnitCompleted } from '../store.js';

export function CurriculumView(container) {
  renderTopbar('Peta Kurikulum', false, '#/');

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
      <!-- Level Section Divider -->
      <div class="phase-roadmap-header" style="margin-top: 18px;">
        <div class="phase-roadmap-title-row">
          <span class="phase-roadmap-section-title">Level ${levelNumber} &middot; ${cleanTitle}</span>
          <span class="phase-roadmap-section-meta">${levelCompleted}/${levelTotal} Bab Selesai (${levelPercent}%)</span>
        </div>
      </div>

      <div class="cur-grid">
    `;

    level.phases.forEach((phase) => {
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
      const actionLabel = isSingleUnit ? 'Mulai Belajar' : 'Buka Fase';

      timelineHtml += `
        <a href="${targetUrl}" class="phase-card cur-card ${isPhaseDone ? 'is-completed' : ''}" style="text-decoration: none;">
          <div class="phase-card-top-bar">
            <span class="hero-pill-badge">${rangeLabel}</span>
            <span class="phase-badge-status ${isPhaseDone ? 'done' : completedCount > 0 ? 'active' : ''}">
              <i data-lucide="${isPhaseDone ? 'check' : completedCount > 0 ? 'play' : 'circle'}" style="width: 10px; height: 10px;"></i>
              ${isPhaseDone ? 'Selesai' : completedCount > 0 ? `${completedCount}/${totalUnits} Bab` : 'Belum Mulai'}
            </span>
          </div>

          <div class="phase-card-title-group">
            <h3 class="phase-card-title">${phaseTitle}</h3>
            ${phase.desc ? `<p class="phase-card-focus-text">${phase.desc}</p>` : ''}
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: auto; padding-top: 6px; border-top: 1px dashed var(--border);">
            <div class="dash-track-prog-bar" style="height: 4px;">
              <div class="dash-track-prog-fill" style="width: ${percent}%;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 11px; color: var(--text-muted); font-weight: 600;">${percent}% progres</span>
              <span style="font-size: 11.5px; color: var(--accent); font-weight: 750; display: flex; align-items: center; gap: 3px;">
                ${actionLabel} <i data-lucide="arrow-right" style="width: 11px; height: 11px;"></i>
              </span>
            </div>
          </div>
        </a>
      `;
    });

    timelineHtml += `
      </div>
    `;
  });

  container.innerHTML = `
    <div class="curriculum-container page-container-standard fade-in" style="padding-bottom: 48px;">
      
      <!-- Dashboard Standard Hero Card -->
      <section class="hero-learning-card phase-hero-card">
        <nav class="phase-hero-nav" aria-label="Breadcrumb">
          <a href="#/" class="phase-nav-back">
            <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Dashboard
          </a>
          <span class="phase-nav-sep">/</span>
          <span class="phase-nav-level">Peta Kurikulum</span>
        </nav>

        <div class="hero-main-content">
          <div class="dash-track-badge n5" style="align-self: flex-start; margin-bottom: 4px;">KURIKULUM &middot; 51 BAB LENGKAP</div>
          <h1 class="hero-chapter-title" style="font-size: 1.35rem; margin: 0 0 4px 0;">Peta Kurikulum Pembelajaran</h1>
          <p class="hero-chapter-desc" style="margin: 0;">
            Jalur belajar terstruktur dari fondasi aksara Jepang (Pra-MNN) hingga penguasaan tata bahasa Minna no Nihongo I &amp; II (N5–N4).
          </p>
        </div>

        <!-- Clean Spacious Progress Bar -->
        <div class="dash-track-progress" style="margin-top: 4px;">
          <div class="dash-track-prog-meta">
            <span>Kemajuan Keseluruhan</span>
            <span><strong>${overallCompleted}</strong>/${overallTotal} Bab Selesai (${overallPercent}%)</span>
          </div>
          <div class="dash-track-prog-bar">
            <div class="dash-track-prog-fill" style="width: ${overallPercent}%;"></div>
          </div>
        </div>
      </section>

      <div class="cur-sections-wrap">
        ${timelineHtml}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons({ root: container });
}
