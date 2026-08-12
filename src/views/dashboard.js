import { renderTopbar } from '../components/layout.js';
import { MNN_INDEX } from '../data/chapter_index.js';
import { getState, getLevel, isUnitCompleted } from '../store.js';
import { getDueCount } from '../srs.js';

function getDailyMissionDesc(plan, nextChapter) {
  if (plan.level === 'N5') {
    if (nextChapter.id <= 25) {
      return `Target hari ini: Pelajari tata bahasa <strong>Bab ${nextChapter.id}</strong> di Grammar Handbook dan rampungkan Buku Kerjanya.`;
    } else {
      return `Selamat! Target dasar selesai. Evaluasi kesiapan Anda dengan menempuh <strong>Simulasi Ujian N5</strong>.`;
    }
  } else if (plan.level === 'N4') {
    if (nextChapter.id <= 25) {
      return `Bentuk fondasi N5 yang kuat sebelum N4. Target hari ini: Selesaikan tata bahasa dasar <strong>Bab ${nextChapter.id}</strong>.`;
    } else if (nextChapter.id <= 50) {
      return `Target akselerasi N4 hari ini: Kuasai materi kalimat menengah <strong>Bab ${nextChapter.id}</strong>.`;
    } else {
      return `Hebat! Kurikulum selesai. Uji kemampuan Anda dengan menempuh <strong>Simulasi Ujian N4</strong>.`;
    }
  } else {
    if (nextChapter.id <= 25) {
      return `Jalur cepat N3! Selesaikan fondasi dasar Anda hari ini: Kuasai tata bahasa dasar <strong>Bab ${nextChapter.id}</strong>.`;
    } else if (nextChapter.id <= 50) {
      return `Akselerasi N4 ke N3! Selesaikan tata bahasa menengah hari ini: Pelajari <strong>Bab ${nextChapter.id}</strong>.`;
    } else {
      return `Target N3 Tercapai! Mari ukur keberhasilan belajar Anda di <strong>Simulasi Ujian N3</strong>.`;
    }
  }
}

function getDailyMissionHash(plan, nextChapter) {
  if (plan.level === 'N5') {
    if (nextChapter.id <= 25) return `#/chapter/${nextChapter.id}`;
    return `#/exam/N5`;
  } else if (plan.level === 'N4') {
    if (nextChapter.id <= 50) return `#/chapter/${nextChapter.id}`;
    return `#/exam/N4`;
  } else {
    if (nextChapter.id <= 50) return `#/chapter/${nextChapter.id}`;
    return `#/exam/N3`;
  }
}

export function DashboardView(container) {
  renderTopbar('Dashboard');

  const state = getState();
  const levelInfo = getLevel();
  const xp = state.xp || 0;
  const streak = state.streak || 0;
  const totalMinutes = state.totalMinutes || 0;
  const dueCount = getDueCount() || 0;

  const chapters = [...MNN_INDEX].sort((a, b) => a.id - b.id);
  
  // Find first uncompleted chapter
  let nextChapter = chapters.find(ch => {
    const completed = isUnitCompleted(ch.id.toString()) || isUnitCompleted(ch.id);
    return !completed;
  });
  if (!nextChapter) {
    nextChapter = chapters[0];
  }

  // Calculate track progress
  const minna1Chapters = chapters.filter(ch => ch.id >= 0 && ch.id <= 25);
  const minna2Chapters = chapters.filter(ch => ch.id >= 26 && ch.id <= 50);

  const minna1Completed = minna1Chapters.filter(ch => isUnitCompleted(ch.id.toString()) || isUnitCompleted(ch.id)).length;
  const minna2Completed = minna2Chapters.filter(ch => isUnitCompleted(ch.id.toString()) || isUnitCompleted(ch.id)).length;

  const minna1ProgressPercent = Math.round((minna1Completed / minna1Chapters.length) * 100) || 0;
  const minna2ProgressPercent = Math.round((minna2Completed / minna2Chapters.length) * 100) || 0;

  const hour = new Date().getHours();
  let timeGreeting = 'Malam';
  if (hour >= 4 && hour < 11) timeGreeting = 'Pagi';
  else if (hour >= 11 && hour < 15) timeGreeting = 'Siang';
  else if (hour >= 15 && hour < 18) timeGreeting = 'Sore';

  // Build GitHub-style Activity Heatmap (52 weeks)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const activityLog = state.activityLog || {};
  let activeDaysCount = 0;

  // Go back exactly 52 weeks from today, then back to the nearest Sunday
  const endDate = new Date(today);
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 364); // 52 weeks back
  // Align start to Sunday (day 0)
  const startDow = startDate.getDay(); // 0=Sun
  startDate.setDate(startDate.getDate() - startDow);

  // Build flat array of all days
  const allDays = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    allDays.push(new Date(d));
  }

  // Track month label positions (which column each month starts)
  const monthLabels = {}; // colIndex -> monthName
  allDays.forEach((d, i) => {
    const col = Math.floor(i / 7);
    const isFirstOfMonth = d.getDate() === 1;
    if (isFirstOfMonth && !Object.values(monthLabels).length || isFirstOfMonth) {
      const monthName = d.toLocaleDateString('id-ID', { month: 'short' });
      if (!monthLabels[col]) monthLabels[col] = monthName;
    }
  });

  const totalCols = Math.ceil(allDays.length / 7);

  // Build month header HTML
  let monthHeaderHtml = '';
  for (let col = 0; col < totalCols; col++) {
    const label = monthLabels[col] || '';
    monthHeaderHtml += `<div class="heatmap-month-label" style="grid-column: ${col + 1}">${label}</div>`;
  }

  // Build cells HTML
  let heatmapCellsHtml = '';
  allDays.forEach((d, i) => {
    const dateStr = d.toISOString().split('T')[0];
    const mins = activityLog[dateStr] || 0;
    const isFuture = d > today;
    if (mins > 0 && !isFuture) activeDaysCount++;

    let colorStyle;
    if (isFuture) {
      colorStyle = 'background: transparent; border-color: transparent;';
    } else if (mins === 0) {
      colorStyle = 'background: var(--bg-elevated); border-color: var(--border);';
    } else if (mins < 15) {
      colorStyle = 'background: rgba(124, 123, 240, 0.2); border-color: rgba(124, 123, 240, 0.35);';
    } else if (mins < 30) {
      colorStyle = 'background: rgba(124, 123, 240, 0.45); border-color: rgba(124, 123, 240, 0.6);';
    } else if (mins < 60) {
      colorStyle = 'background: rgba(124, 123, 240, 0.75); border-color: rgba(124, 123, 240, 0.9);';
    } else {
      colorStyle = 'background: #7C7BF0; border-color: #6366F1; box-shadow: 0 0 6px rgba(124,123,240,0.6);';
    }

    const dateFormatted = d.toLocaleDateString('id-ID', { weekday: 'short', month: 'short', day: 'numeric' });
    const tooltip = isFuture ? '' : `${dateFormatted}: ${mins > 0 ? `${mins} menit belajar` : 'Tidak ada aktivitas'}`;
    heatmapCellsHtml += `<div class="heatmap-cell" title="${tooltip}" style="${colorStyle}"></div>`;
  });

  // Calculate stats for Bento Grid
  const srsItems = state.srsItems || [];
  const totalVocab = srsItems.filter(i => i.type === 'vocab').length;
  const totalKanji = srsItems.filter(i => i.type === 'kanji').length;
  const masteredItems = srsItems.filter(i => i.repetitions >= 5).length;
  
  const qh = state.quizHistory || [];
  let avgQuiz = 0;
  if (qh.length > 0) {
    const totalScore = qh.reduce((acc, q) => acc + (q.score / q.total), 0);
    avgQuiz = Math.round((totalScore / qh.length) * 100);
  }
  
  const studyHours = (totalMinutes / 60).toFixed(1);

  container.innerHTML = `
    <div class="dashboard-wrapper page-container-standard fade-in">
      
      <!-- Minimalist Header -->
      <div class="dash-header">
        <div class="profile-info">
          <span class="profile-greeting">Selamat ${timeGreeting}</span>
          <div class="profile-title-name">Halo, Selamat Belajar!</div>
          <span class="profile-level-badge">${levelInfo.nameId} &middot; ${levelInfo.name}</span>
        </div>

        <div class="compact-stats">
          <div class="c-stat-item">
            <div class="c-stat-icon">
              <i data-lucide="star" style="width: 16px; height: 16px;"></i>
            </div>
            <div class="c-stat-meta">
              <span class="c-stat-val">${xp}</span>
              <span class="c-stat-lbl">Total XP</span>
            </div>
          </div>
          
          <div class="c-stat-item">
            <div class="c-stat-icon" style="color: ${streak > 0 ? 'var(--amber)' : 'var(--text-muted)'};">
              <i data-lucide="flame" style="width: 16px; height: 16px; fill: ${streak > 0 ? 'currentColor' : 'none'};"></i>
            </div>
            <div class="c-stat-meta">
              <span class="c-stat-val">${streak} Hari</span>
              <span class="c-stat-lbl">Streak</span>
            </div>
          </div>
          
          <div class="c-stat-item">
            <div class="c-stat-icon">
              <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
            </div>
            <div class="c-stat-meta">
              <span class="c-stat-val">${totalMinutes}m</span>
              <span class="c-stat-lbl">Durasi</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Guided Study Plan Target -->
      ${state.studyPlan?.active ? `
      <div class="target-banner">
        <div class="target-banner-content">
          <i data-lucide="compass" style="width: 18px; height: 18px; color: var(--text-main); flex-shrink: 0;"></i>
          <span>
            Target belajar <strong>${state.studyPlan.level}</strong> (${state.studyPlan.duration} Bulan): ${getDailyMissionDesc(state.studyPlan, nextChapter)}
          </span>
        </div>
        <button class="btn btn-primary target-banner-btn" onclick="window.location.hash='${getDailyMissionHash(state.studyPlan, nextChapter)}'">Mulai Belajar</button>
      </div>
      ` : ''}

      <!-- Fokus Belajar Hari Ini -->
      <div class="focus-container">
        <div class="focus-title">Fokus Belajar Hari Ini</div>
        
        <div class="focus-activities">
          <!-- SRS Activity Panel -->
          <div class="activity-panel">
            <div class="activity-info">
              <span class="activity-tag ${dueCount > 0 ? 'tag-srs' : 'tag-srs-done'}">
                ${dueCount > 0 ? 'Review Tertunda' : 'Selesai'}
              </span>
              <h4 class="activity-title">Ulas Kosakata (SRS)</h4>
              <p class="activity-desc">
                ${dueCount > 0 
                  ? `Ada <strong>${dueCount}</strong> kosakata yang perlu diulas hari ini agar tidak lupa.` 
                  : 'Hebat! Semua kosakata Anda telah tersimpan dengan aman di memori jangka panjang.'}
              </p>
            </div>
            
            <button class="btn ${dueCount > 0 ? 'btn-primary' : 'btn-secondary'}" onclick="window.location.hash='#/review'" style="width: 100%; font-size: var(--text-xs); font-weight: 700; padding: 10px 16px; border-radius: var(--radius-sm);">
              ${dueCount > 0 ? 'Mulai Review Sekarang' : 'Buka Halaman Review'}
            </button>
          </div>
          
          <!-- Chapter Activity Panel -->
          <div class="activity-panel">
            <div class="activity-info">
              <span class="activity-tag tag-lesson">Pelajaran Aktif</span>
              <h4 class="activity-title">Bab ${nextChapter.id}: ${nextChapter.title.includes(':') ? nextChapter.title.split(':').slice(1).join(':').trim() : nextChapter.title}</h4>
              <p class="activity-desc">${nextChapter.desc}</p>
            </div>
            
            <button class="btn btn-primary" onclick="window.location.hash='#/chapter/${nextChapter.id}'" style="width: 100%; font-size: var(--text-xs); font-weight: 700; padding: 10px 16px; border-radius: var(--radius-sm);">
              Pelajari Bab ${nextChapter.id}
            </button>
          </div>
        </div>
        
        <!-- Practice & Exam quicklinks -->
        <div class="focus-subactions">
          <span class="subaction-label">Latihan Bab ${nextChapter.id}:</span>
          <div class="subaction-links">
            <a href="#/workbook/${nextChapter.id}" class="subaction-link">
              <i data-lucide="edit-3" style="width: 13px; height: 13px;"></i>
              Buku Kerja Bab
            </a>
            <a href="#/exam/${nextChapter.id}" class="subaction-link">
              <i data-lucide="award" style="width: 13px; height: 13px;"></i>
              Simulasi Ujian Bab
            </a>
          </div>
        </div>
      </div>

      <!-- Tracks Row -->
      <div>
        <div class="tracks-title">Kemajuan Jalur Belajar</div>
        <div class="tracks-row">
          <a class="track-card" href="#/curriculum?track=minna1">
            <div class="track-meta">
              <span class="track-level">Level N5 (Dasar)</span>
              <span class="track-name">Minna no Nihongo I</span>
              <p class="track-desc">Kuasai Hiragana, Katakana, tata bahasa dasar, dan 800 kosakata utama.</p>
              <span class="track-prog-lbl">${minna1Completed} / ${minna1Chapters.length} Bab Selesai</span>
            </div>
            <div class="progress-ring-container">
              <svg class="progress-ring" width="52" height="52">
                <circle class="progress-ring-bg" stroke-width="4" fill="transparent" r="22" cx="26" cy="26"/>
                <circle class="progress-ring-circle" stroke-width="4" fill="transparent" r="22" cx="26" cy="26" stroke-dasharray="138.23" stroke-dashoffset="${138.23 - (minna1ProgressPercent / 100) * 138.23}"/>
              </svg>
              <div style="position: absolute; font-size: var(--text-2xs); font-weight: 800; color: var(--text-main); font-variant-numeric: tabular-nums;">${minna1ProgressPercent}%</div>
            </div>
          </a>

          <a class="track-card" href="#/curriculum?track=minna2">
            <div class="track-meta">
              <span class="track-level">Level N4 (Menengah)</span>
              <span class="track-name">Minna no Nihongo II</span>
              <p class="track-desc">Bentuk pasif, kausatif, syarat kondisional, keigo, dan 1.500 kosakata baru.</p>
              <span class="track-prog-lbl">${minna2Completed} / ${minna2Chapters.length} Bab Selesai</span>
            </div>
            <div class="progress-ring-container">
              <svg class="progress-ring" width="52" height="52">
                <circle class="progress-ring-bg" stroke-width="4" fill="transparent" r="22" cx="26" cy="26"/>
                <circle class="progress-ring-circle" stroke-width="4" fill="transparent" r="22" cx="26" cy="26" stroke-dasharray="138.23" stroke-dashoffset="${138.23 - (minna2ProgressPercent / 100) * 138.23}"/>
              </svg>
              <div style="position: absolute; font-size: var(--text-2xs); font-weight: 800; color: var(--text-main); font-variant-numeric: tabular-nums;">${minna2ProgressPercent}%</div>
            </div>
          </a>
        </div>
      </div>

      <!-- Activity Heatmap Section (GitHub Contribution Graph Style) -->
      <div class="heatmap-section">
        <div class="heatmap-header">
          <div class="heatmap-title-block">
            <span class="heatmap-title">Aktivitas Belajar</span>
            <span class="heatmap-subtitle-tag">${activeDaysCount} kontribusi dalam setahun terakhir</span>
          </div>
        </div>
        
        <div class="heatmap-wrapper">
          <div class="heatmap-weekdays">
            <span></span>
            <span>Sen</span>
            <span></span>
            <span>Rab</span>
            <span></span>
            <span>Jum</span>
            <span></span>
          </div>
          <div class="heatmap-grid-scroll">
            <!-- Month labels -->
            <div class="heatmap-month-row">
              ${monthHeaderHtml}
            </div>
            <!-- Day cells -->
            <div class="heatmap-cells-container">
              ${heatmapCellsHtml}
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div class="heatmap-legend">
          <span>Kurang</span>
          <div class="heatmap-legend-cells">
            <div class="heatmap-legend-box" style="background: var(--bg-elevated); border-color: var(--border);"></div>
            <div class="heatmap-legend-box" style="background: rgba(124, 123, 240, 0.2); border-color: rgba(124, 123, 240, 0.35);"></div>
            <div class="heatmap-legend-box" style="background: rgba(124, 123, 240, 0.45); border-color: rgba(124, 123, 240, 0.6);"></div>
            <div class="heatmap-legend-box" style="background: rgba(124, 123, 240, 0.75); border-color: rgba(124, 123, 240, 0.9);"></div>
            <div class="heatmap-legend-box" style="background: #7C7BF0; border-color: #6366F1;"></div>
          </div>
          <span>Banyak</span>
        </div>
      </div>

      <!-- Bento Stats Grid (Mobile Optimized 2-Col Grid) -->
      <div>
        <div class="tracks-title">Statistik &amp; Pencapaian</div>
        <div class="stats-bento-grid">
          <div class="stat-card-bento">
            <div class="stat-bento-icon-wrapper" style="color: var(--blue);">
              <i data-lucide="book-open" style="width: 15px; height: 15px;"></i>
            </div>
            <div>
              <div class="stat-bento-val">${totalVocab}</div>
              <div class="stat-bento-lbl">Kosakata (SRS)</div>
            </div>
          </div>
          
          <div class="stat-card-bento">
            <div class="stat-bento-icon-wrapper" style="color: var(--indigo);">
              <i data-lucide="pen-tool" style="width: 15px; height: 15px;"></i>
            </div>
            <div>
              <div class="stat-bento-val">${totalKanji}</div>
              <div class="stat-bento-lbl">Kanji (SRS)</div>
            </div>
          </div>
          
          <div class="stat-card-bento">
            <div class="stat-bento-icon-wrapper" style="color: var(--amber);">
              <i data-lucide="award" style="width: 15px; height: 15px;"></i>
            </div>
            <div>
              <div class="stat-card-val stat-bento-val">${masteredItems}</div>
              <div class="stat-bento-lbl">Terkuasai</div>
            </div>
          </div>
          
          <div class="stat-card-bento">
            <div class="stat-bento-icon-wrapper" style="color: var(--green);">
              <i data-lucide="check-circle" style="width: 15px; height: 15px;"></i>
            </div>
            <div>
              <div class="stat-bento-val">${avgQuiz}%</div>
              <div class="stat-bento-lbl">Akurasi Ujian</div>
            </div>
          </div>
          
          <div class="stat-card-bento">
            <div class="stat-bento-icon-wrapper" style="color: var(--red);">
              <i data-lucide="clock" style="width: 15px; height: 15px;"></i>
            </div>
            <div>
              <div class="stat-bento-val">${studyHours}h</div>
              <div class="stat-bento-lbl">Jam Belajar</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bento Peralatan Pendukung -->
      <div>
        <div class="tools-title">Peralatan Belajar</div>
        <div class="tools-grid">
          <a class="tool-card" href="#/minna">
            <div class="tool-icon-wrapper" style="color: var(--blue);">
              <i data-lucide="book-open" style="width: 15px; height: 15px;"></i>
            </div>
            <div>
              <span class="tool-title">Grammar Handbook</span>
              <p class="tool-desc">Referensi lengkap tata bahasa Minna no Nihongo.</p>
            </div>
          </a>

          <a class="tool-card" href="#/kanji">
            <div class="tool-icon-wrapper" style="color: var(--indigo);">
              <i data-lucide="languages" style="width: 15px; height: 15px;"></i>
            </div>
            <div>
              <span class="tool-title">Kanji Hub</span>
              <p class="tool-desc">Kamus kanji, arti, cara baca, dan urutan guratan.</p>
            </div>
          </a>

          <a class="tool-card" href="#/writing">
            <div class="tool-icon-wrapper" style="color: var(--amber);">
              <i data-lucide="pen-tool" style="width: 15px; height: 15px;"></i>
            </div>
            <div>
              <span class="tool-title">Latihan Menulis</span>
              <p class="tool-desc">Latih penulisan Hiragana, Katakana, dan Kanji di layar.</p>
            </div>
          </a>

          <a class="tool-card" href="#/glossary">
            <div class="tool-icon-wrapper" style="color: var(--green);">
              <i data-lucide="help-circle" style="width: 15px; height: 15px;"></i>
            </div>
            <div>
              <span class="tool-title">Glosarium</span>
              <p class="tool-desc">Daftar pencarian kosakata lengkap beserta partikel.</p>
            </div>
          </a>
        </div>
      </div>

    </div>
  `;

  if (window.lucide) lucide.createIcons({ root: container });
}
