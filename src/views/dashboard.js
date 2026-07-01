import { renderTopbar } from '../components/layout.js';
import { MNN_INDEX } from '../data/chapter_index.js';
import { getState, getLevel, isUnitCompleted } from '../store.js';
import { getDueCount } from '../srs.js';

function getDailyMissionTitle(plan) {
  if (plan.level === 'N5') {
    return 'Target Harian: Fondasi Dasar (N5)';
  } else if (plan.level === 'N4') {
    return 'Target Harian: Menengah (N4)';
  } else {
    return 'Target Harian: Jalur Cepat (N3)';
  }
}

function getDailyMissionDesc(plan, nextChapter) {
  if (plan.level === 'N5') {
    if (nextChapter.id <= 25) {
      return `Target hari ini: Pelajari tata bahasa <strong>Bab ${nextChapter.id}</strong> di Grammar Digest dan rampungkan Buku Kerjanya.`;
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
    // N3 Target
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

  container.innerHTML = `
    <div class="dashboard-wrapper fade-in">
      
      <!-- Premium Minimalist Header -->
      <div class="dash-header">
        <div class="profile-info">
          <span class="profile-greeting">Selamat ${timeGreeting}</span>
          <div class="profile-title-name">Halo, Selamat Belajar!</div>
          <span class="profile-level-badge">${levelInfo.nameId} (${levelInfo.name})</span>
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

      <!-- Guided Study Plan Target (Sleek Alert) -->
      ${state.studyPlan?.active ? `
      <div class="target-banner">
        <div style="display: flex; align-items: center; gap: 10px;">
          <i data-lucide="compass" style="width: 18px; height: 18px; color: var(--text-main); flex-shrink: 0;"></i>
          <span style="font-size: var(--text-xs); font-weight: 700; color: var(--text-secondary);">
            Target belajar <strong>${state.studyPlan.level}</strong> (${state.studyPlan.duration} Bulan): ${getDailyMissionDesc(state.studyPlan, nextChapter)}
          </span>
        </div>
        <button class="btn btn-primary" onclick="window.location.hash='${getDailyMissionHash(state.studyPlan, nextChapter)}'" style="font-size: var(--text-2xs); font-weight: 800; padding: 6px 12px; border-radius: var(--radius-sm); flex-shrink:0; text-transform: uppercase;">Mulai Belajar</button>
      </div>
      ` : ''}

      <!-- Fokus Belajar Hari Ini (Unified Focus Area) -->
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
            
            <button class="btn ${dueCount > 0 ? 'btn-primary' : 'btn-secondary'}" onclick="window.location.hash='#/review'" style="width: 100%; font-size: var(--text-xs); font-weight: 800; padding: 10px 16px; border-radius: var(--radius-sm); text-transform: uppercase;">
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
            
            <button class="btn btn-primary" onclick="window.location.hash='#/chapter/${nextChapter.id}'" style="width: 100%; font-size: var(--text-xs); font-weight: 800; padding: 10px 16px; border-radius: var(--radius-sm); text-transform: uppercase;">
              Pelajari Bab ${nextChapter.id}
            </button>
          </div>
        </div>
        
        <!-- Practice & Exam quicklinks for the chapter -->
        <div class="focus-subactions">
          <span style="font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Latihan Bab ${nextChapter.id}:</span>
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
              <svg class="progress-ring" width="60" height="60">
                <circle class="progress-ring-bg" stroke-width="4" fill="transparent" r="26" cx="30" cy="30"/>
                <circle class="progress-ring-circle" stroke-width="4" fill="transparent" r="26" cx="30" cy="30" stroke-dasharray="163.36" stroke-dashoffset="${163.36 - (minna1ProgressPercent / 100) * 163.36}"/>
              </svg>
              <div style="position: absolute; font-size: var(--text-xs); font-weight: 800; color: var(--text-main); font-variant-numeric: tabular-nums;">${minna1ProgressPercent}%</div>
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
              <svg class="progress-ring" width="60" height="60">
                <circle class="progress-ring-bg" stroke-width="4" fill="transparent" r="26" cx="30" cy="30"/>
                <circle class="progress-ring-circle" stroke-width="4" fill="transparent" r="26" cx="30" cy="30" stroke-dasharray="163.36" stroke-dashoffset="${163.36 - (minna2ProgressPercent / 100) * 163.36}"/>
              </svg>
              <div style="position: absolute; font-size: var(--text-xs); font-weight: 800; color: var(--text-main); font-variant-numeric: tabular-nums;">${minna2ProgressPercent}%</div>
            </div>
          </a>
        </div>
      </div>

      <!-- Bento Peralatan Pendukung -->
      <div>
        <div class="tools-title">Peralatan Belajar</div>
        <div class="tools-grid">
          <a class="tool-card" href="#/minna">
            <div class="tool-icon-wrapper">
              <i data-lucide="book-open" style="width: 16px; height: 16px;"></i>
            </div>
            <div>
              <span class="tool-title">Grammar Digest</span>
              <p class="tool-desc">Referensi lengkap tata bahasa Minna no Nihongo.</p>
            </div>
          </a>

          <a class="tool-card" href="#/kanji">
            <div class="tool-icon-wrapper">
              <i data-lucide="languages" style="width: 16px; height: 16px;"></i>
            </div>
            <div>
              <span class="tool-title">Kanji Hub</span>
              <p class="tool-desc">Kamus kanji, arti, cara baca, dan urutan guratan.</p>
            </div>
          </a>

          <a class="tool-card" href="#/writing">
            <div class="tool-icon-wrapper">
              <i data-lucide="pen-tool" style="width: 16px; height: 16px;"></i>
            </div>
            <div>
              <span class="tool-title">Latihan Menulis</span>
              <p class="tool-desc">Latih penulisan Hiragana, Katakana, dan Kanji di layar.</p>
            </div>
          </a>

          <a class="tool-card" href="#/glossary">
            <div class="tool-icon-wrapper">
              <i data-lucide="help-circle" style="width: 16px; height: 16px;"></i>
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
