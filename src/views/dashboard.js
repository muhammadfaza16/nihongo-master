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
  let jpGreeting = 'Konbanwa (こんばんは)';
  if (hour >= 4 && hour < 11) {
    timeGreeting = 'Pagi';
    jpGreeting = 'Ohayou (おはよう)';
  } else if (hour >= 11 && hour < 15) {
    timeGreeting = 'Siang';
    jpGreeting = 'Konnichiwa (こんにちは)';
  } else if (hour >= 15 && hour < 18) {
    timeGreeting = 'Sore';
    jpGreeting = 'Konnichiwa (こんにちは)';
  }

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
    <div class="dashboard-wrapper page-container-standard fade-in" style="display: flex; flex-direction: column; gap: 24px;">
      
      <!-- Streamlined Header with Unified Stats Capsule -->
      <div class="dash-overview-header">
        <div class="dash-user-meta">
          <div class="dash-greeting-row">
            <span class="dash-time-tag">${jpGreeting}</span>
          </div>
          <h1 class="dash-main-title">Siap lanjut belajar hari ini?</h1>
        </div>

        <div class="dash-stats-capsule">
          <div class="dash-stat-segment" title="Streak Belajar Aktif">
            <div class="dash-stat-icon-wrap streak">
              <i data-lucide="flame" style="width: 18px; height: 18px; ${streak > 0 ? 'fill: currentColor;' : ''}"></i>
            </div>
            <div class="dash-stat-text">
              <span class="dash-stat-num">${streak} Hari</span>
              <span class="dash-stat-name">Streak</span>
            </div>
          </div>
          
          <div class="dash-stat-divider"></div>

          <div class="dash-stat-segment" title="Total Pengalaman Belajar">
            <div class="dash-stat-icon-wrap xp">
              <i data-lucide="star" style="width: 18px; height: 18px; fill: currentColor;"></i>
            </div>
            <div class="dash-stat-text">
              <span class="dash-stat-num">${xp}</span>
              <span class="dash-stat-name">Total XP</span>
            </div>
          </div>

          <div class="dash-stat-divider"></div>

          <div class="dash-stat-segment" title="Total Waktu Belajar">
            <div class="dash-stat-icon-wrap time">
              <i data-lucide="clock" style="width: 18px; height: 18px;"></i>
            </div>
            <div class="dash-stat-text">
              <span class="dash-stat-num">${totalMinutes}m</span>
              <span class="dash-stat-name">Durasi</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Guided Study Plan Target (if active) -->
      ${state.studyPlan?.active ? `
      <div class="target-banner">
        <div class="target-banner-content">
          <i data-lucide="compass" style="width: 18px; height: 18px; color: var(--accent-bright); flex-shrink: 0;"></i>
          <span>
            Target belajar <strong>${state.studyPlan.level}</strong> (${state.studyPlan.duration} Bulan): ${getDailyMissionDesc(state.studyPlan, nextChapter)}
          </span>
        </div>
        <button class="btn btn-primary target-banner-btn" onclick="window.location.hash='${getDailyMissionHash(state.studyPlan, nextChapter)}'">Mulai Belajar</button>
      </div>
      ` : ''}

      <!-- Centerpiece: Hero Learning Card -->
      <div class="hero-learning-card">
        <div class="hero-learning-top">
          <div class="hero-tag-group">
            <span class="hero-pill-badge">Bab ${nextChapter.id}</span>
          </div>
          ${dueCount > 0 ? `
            <a href="#/review" class="hero-srs-pill" title="Mulai Ulas Kosakata">
              <span>${dueCount} Kosakata Siap Diulas &rarr;</span>
            </a>
          ` : `
            <span class="hero-srs-pill done">
              <span>SRS Selesai</span>
            </span>
          `}
        </div>

        <div class="hero-main-content">
          <div class="hero-chapter-title">
            ${nextChapter.title.includes(':') ? nextChapter.title.split(':').slice(1).join(':').trim() : nextChapter.title}
          </div>
          <div class="hero-chapter-desc">
            ${nextChapter.id === 0 || nextChapter.id === '0' 
              ? 'Fondasi penulisan Hiragana, Katakana, dan aturan pelafalan bahasa Jepang.' 
              : (nextChapter.desc ? nextChapter.desc.split('.')[0].trim() + '.' : 'Pelajari pola tata bahasa dan kosakata baru bab ini.')}
          </div>
        </div>

        <div class="hero-actions-bar">
          <a href="#/chapter/${nextChapter.id}" class="btn btn-primary hero-cta-btn">
            <i data-lucide="play" style="width: 14px; height: 14px; fill: currentColor;"></i>
            Lanjutkan Belajar
          </a>
          <div class="hero-subactions">
            <a href="#/workbook/${nextChapter.id}" class="hero-subaction-btn">
              <i data-lucide="edit-3" style="width: 13px; height: 13px;"></i>
              Buku Kerja
            </a>
            <a href="#/exam/${nextChapter.id}" class="hero-subaction-btn">
              <i data-lucide="award" style="width: 13px; height: 13px;"></i>
              Simulasi Ujian
            </a>
          </div>
        </div>
      </div>

      <!-- Jalur Kurikulum Section -->
      <div>
        <div class="dash-section-header">
          <div class="dash-section-title">Kemajuan Jalur Belajar</div>
          <a href="#/curriculum" style="font-size: 11px; font-weight: 700; color: var(--accent-bright); text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
            Lihat Peta Lengkap &rarr;
          </a>
        </div>
        <div class="dash-tracks-grid">
          <a class="dash-track-card" href="#/curriculum?track=minna1">
            <div class="dash-track-top">
              <div>
                <span class="dash-track-badge n5">Level N5 &middot; Dasar</span>
                <div class="dash-track-name">Minna no Nihongo I</div>
                <div class="dash-track-desc">Hiragana, Katakana, tata bahasa dasar &amp; 800 kosakata utama.</div>
              </div>
              <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: var(--text-muted); flex-shrink: 0;"></i>
            </div>
            <div class="dash-track-progress">
              <div class="dash-track-prog-meta">
                <span>${minna1Completed} / ${minna1Chapters.length} Bab Selesai</span>
                <span>${minna1ProgressPercent}%</span>
              </div>
              <div class="dash-track-bar">
                <div class="dash-track-fill" style="width: ${minna1ProgressPercent}%;"></div>
              </div>
            </div>
          </a>

          <a class="dash-track-card" href="#/curriculum?track=minna2">
            <div class="dash-track-top">
              <div>
                <span class="dash-track-badge n4">Level N4 &middot; Menengah</span>
                <div class="dash-track-name">Minna no Nihongo II</div>
                <div class="dash-track-desc">Bentuk pasif, kausatif, syarat kondisional, keigo &amp; 1.500 kosakata.</div>
              </div>
              <i data-lucide="chevron-right" style="width: 16px; height: 16px; color: var(--text-muted); flex-shrink: 0;"></i>
            </div>
            <div class="dash-track-progress">
              <div class="dash-track-prog-meta">
                <span>${minna2Completed} / ${minna2Chapters.length} Bab Selesai</span>
                <span>${minna2ProgressPercent}%</span>
              </div>
              <div class="dash-track-bar">
                <div class="dash-track-fill" style="width: ${minna2ProgressPercent}%;"></div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Activity Heatmap Section -->
      <div class="heatmap-section">
        <div class="heatmap-header">
          <div class="heatmap-title-block">
            <span class="heatmap-title">Aktivitas Belajar</span>
            <span class="heatmap-subtitle-tag">${activeDaysCount} Hari Aktif (Setahun Terakhir)</span>
          </div>
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
            <div class="heatmap-month-row">
              ${monthHeaderHtml}
            </div>
            <div class="heatmap-cells-container">
              ${heatmapCellsHtml}
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Statistics & Achievements Grid -->
      <div>
        <div class="dash-section-header">
          <div class="dash-section-title">Statistik &amp; Pencapaian</div>
        </div>
        <div class="dash-metrics-grid">
          <div class="dash-metric-card">
            <div class="dash-metric-head">
              <span class="dash-metric-lbl">Kosakata SRS</span>
              <i data-lucide="book-open" class="dash-metric-ico" style="color: var(--blue);"></i>
            </div>
            <div class="dash-metric-body">
              <span class="dash-metric-val">${totalVocab}</span>
              <span class="dash-metric-unit">kata</span>
            </div>
          </div>
          
          <div class="dash-metric-card">
            <div class="dash-metric-head">
              <span class="dash-metric-lbl">Kanji SRS</span>
              <i data-lucide="languages" class="dash-metric-ico" style="color: var(--indigo);"></i>
            </div>
            <div class="dash-metric-body">
              <span class="dash-metric-val">${totalKanji}</span>
              <span class="dash-metric-unit">karakter</span>
            </div>
          </div>
          
          <div class="dash-metric-card">
            <div class="dash-metric-head">
              <span class="dash-metric-lbl">Terkuasai</span>
              <i data-lucide="award" class="dash-metric-ico" style="color: var(--amber);"></i>
            </div>
            <div class="dash-metric-body">
              <span class="dash-metric-val">${masteredItems}</span>
              <span class="dash-metric-unit">item (5x+)</span>
            </div>
          </div>
          
          <div class="dash-metric-card">
            <div class="dash-metric-head">
              <span class="dash-metric-lbl">Akurasi Ujian</span>
              <i data-lucide="check-circle" class="dash-metric-ico" style="color: var(--green);"></i>
            </div>
            <div class="dash-metric-body">
              <span class="dash-metric-val">${avgQuiz}%</span>
              <span class="dash-metric-unit">skor</span>
            </div>
          </div>
          
          <div class="dash-metric-card dash-metric-card-wide">
            <div class="dash-metric-head">
              <span class="dash-metric-lbl">Total Belajar</span>
              <i data-lucide="clock" class="dash-metric-ico" style="color: var(--text-muted);"></i>
            </div>
            <div class="dash-metric-body">
              <span class="dash-metric-val">${studyHours}h</span>
              <span class="dash-metric-unit">durasi</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Access Tools Hub -->
      <div>
        <div class="dash-section-header">
          <div class="dash-section-title">Peralatan Belajar</div>
        </div>
        <div class="dash-tools-grid">
          <a class="dash-tool-card" href="#/minna">
            <div class="dash-tool-head">
              <div class="dash-tool-icon-wrap" style="color: var(--blue);">
                <i data-lucide="book-open" style="width: 17px; height: 17px;"></i>
              </div>
              <i data-lucide="arrow-up-right" class="dash-tool-arrow"></i>
            </div>
            <div class="dash-tool-body">
              <div class="dash-tool-title">Tata Bahasa</div>
              <div class="dash-tool-desc">Referensi pola kalimat Bunpou Bab 1–50.</div>
            </div>
          </a>

          <a class="dash-tool-card" href="#/kanji">
            <div class="dash-tool-head">
              <div class="dash-tool-icon-wrap" style="color: var(--indigo);">
                <i data-lucide="languages" style="width: 17px; height: 17px;"></i>
              </div>
              <i data-lucide="arrow-up-right" class="dash-tool-arrow"></i>
            </div>
            <div class="dash-tool-body">
              <div class="dash-tool-title">Kanji Hub</div>
              <div class="dash-tool-desc">Bank kanji N5–N3 &amp; kosakata turunan.</div>
            </div>
          </a>

          <a class="dash-tool-card" href="#/writing">
            <div class="dash-tool-head">
              <div class="dash-tool-icon-wrap" style="color: var(--amber);">
                <i data-lucide="pen-tool" style="width: 17px; height: 17px;"></i>
              </div>
              <i data-lucide="arrow-up-right" class="dash-tool-arrow"></i>
            </div>
            <div class="dash-tool-body">
              <div class="dash-tool-title">Latihan Menulis</div>
              <div class="dash-tool-desc">Kanvas interaktif kaligrafi Kana &amp; Kanji.</div>
            </div>
          </a>

          <a class="dash-tool-card" href="#/glossary">
            <div class="dash-tool-head">
              <div class="dash-tool-icon-wrap" style="color: var(--green);">
                <i data-lucide="bookmark" style="width: 17px; height: 17px;"></i>
              </div>
              <i data-lucide="arrow-up-right" class="dash-tool-arrow"></i>
            </div>
            <div class="dash-tool-body">
              <div class="dash-tool-title">Glosarium</div>
              <div class="dash-tool-desc">Kamus cepat kosakata, partikel &amp; istilah.</div>
            </div>
          </a>
        </div>
      </div>

    </div>
  `;

  if (window.lucide) lucide.createIcons({ root: container });
}
