import { renderTopbar } from '../components/layout.js';
import { MNN_DATA } from '../data/chapter_data.js';
import { getState, getLevel, isUnitCompleted } from '../store.js';
import { getDueCount } from '../srs.js';

function getDailyMissionTitle(plan) {
  if (plan.level === 'N5') {
    return 'Misi Harian: Fondasi Dasar (N5)';
  } else if (plan.level === 'N4') {
    return 'Misi Harian: Akselerasi Menengah (N4)';
  } else {
    return 'Misi Harian: Speedrun N3 Master';
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
      return `Speedrun N3! Selesaikan fondasi dasar Anda hari ini: Kuasai tata bahasa dasar <strong>Bab ${nextChapter.id}</strong>.`;
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
  renderTopbar('MinnaMaster Dashboard');

  const state = getState();
  const levelInfo = getLevel();
  const xp = state.xp || 0;
  const streak = state.streak || 0;
  const totalMinutes = state.totalMinutes || 0;
  const dueCount = getDueCount() || 0;

  const chapters = [...MNN_DATA].sort((a, b) => a.id - b.id);
  
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

  // Default active grid filter based on what bab they are on
  let defaultFilter = 'all';
  if (nextChapter.id >= 26) {
    defaultFilter = 'minna2';
  } else if (nextChapter.id >= 1) {
    defaultFilter = 'minna1';
  }

  container.innerHTML = `
    <style>
      .dashboard-wrapper {
        max-width: 1000px;
        margin: 0 auto;
        padding-bottom: 80px;
        display: flex;
        flex-direction: column;
        gap: 32px;
      }
      
      /* Profile & Stats Row */
      .stats-banner {
        background: radial-gradient(circle at 0% 0%, var(--bg-hover) 0%, var(--bg-card) 100%);
        border: 1px solid var(--border);
        border-radius: var(--radius-xl);
        padding: 28px 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        box-shadow: var(--shadow-md);
        position: relative;
        overflow: hidden;
      }
      .stats-banner::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: var(--radius-xl);
        padding: 1px;
        background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }
      .profile-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .profile-title {
        font-size: 0.72rem;
        font-weight: 800;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.12em;
      }
      .profile-name {
        font-size: 1.8rem;
        font-weight: 900;
        color: var(--text-main);
        letter-spacing: -0.03em;
        line-height: 1.1;
      }
      .profile-level {
        background: var(--text-main);
        color: var(--bg-main);
        padding: 4px 12px;
        border-radius: 99px;
        font-size: 0.7rem;
        font-weight: 800;
        text-transform: uppercase;
        display: inline-block;
        width: fit-content;
        letter-spacing: 0.05em;
      }
      .stats-grid {
        display: flex;
        gap: 28px;
        align-items: center;
      }
      .stat-item {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 80px;
        transition: transform 0.2s;
      }
      .stat-item:hover {
        transform: translateY(-2px);
      }
      .stat-val {
        font-size: 1.6rem;
        font-weight: 900;
        color: var(--text-main);
        font-variant-numeric: tabular-nums;
        display: flex;
        align-items: center;
        gap: 6px;
        letter-spacing: -0.02em;
      }
      .stat-label {
        font-size: 0.7rem;
        color: var(--text-muted);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .stat-divider {
        width: 1px;
        height: 36px;
        background: var(--border);
        opacity: 0.5;
      }

      /* Resume Section */
      .resume-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
        text-decoration: none;
        color: inherit;
        box-shadow: var(--shadow-sm);
        position: relative;
      }
      .resume-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: var(--radius-lg);
        padding: 1px;
        background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }
      .resume-card:hover {
        border-color: var(--text-secondary);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }
      .resume-card:active {
        transform: scale(0.98) translateY(0);
      }
      .resume-btn {
        background: var(--text-main);
        color: var(--bg-main);
        border: none;
        padding: 14px 28px;
        font-size: 0.8rem;
        font-weight: 800;
        border-radius: var(--radius-md);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
        flex-shrink: 0;
        box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
      }
      .resume-card:hover .resume-btn {
        transform: scale(1.02);
      }
      .resume-card:active .resume-btn {
        transform: scale(0.96);
      }

      /* Bento Grid of Features */
      .bento-features {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }
      .feature-card {
        background: var(--bg-card);
        border: 1px solid var(--border) !important;
        border-radius: var(--radius-lg);
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
        text-decoration: none;
        color: inherit !important;
        position: relative;
      }
      .feature-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: var(--radius-lg);
        padding: 1px;
        background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.005));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }
      .feature-card:hover {
        border-color: var(--border-bright) !important;
        background: var(--bg-hover);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }
      .feature-card:active {
        transform: scale(0.97) translateY(0);
      }
      .feature-icon-wrapper {
        width: 40px;
        height: 40px;
        border-radius: var(--radius-md);
        background: var(--bg-elevated);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-main);
        border: 1px solid var(--border);
        position: relative;
        transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1);
      }
      .feature-card:hover .feature-icon-wrapper {
        transform: scale(1.08) rotate(-2deg);
      }
      .feature-badge {
        position: absolute;
        top: -6px;
        right: -6px;
        background: var(--text-main);
        color: var(--bg-main);
        font-size: 0.65rem;
        font-weight: 900;
        min-width: 18px;
        height: 18px;
        border-radius: 99px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--bg-card);
        font-variant-numeric: tabular-nums;
        padding: 0 4px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.5);
      }
      .feature-title {
        font-weight: 800;
        font-size: 0.98rem;
        color: var(--text-main);
        letter-spacing: -0.01em;
      }
      .feature-desc {
        font-size: 0.8rem;
        color: var(--text-muted);
        line-height: 1.45;
      }

      /* Track Selection Cards */
      .tracks-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      .track-card {
        background: var(--bg-card);
        border: 1px solid var(--border) !important;
        border-radius: var(--radius-lg);
        padding: 28px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
        position: relative;
        overflow: hidden;
      }
      .track-card::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: var(--radius-lg);
        padding: 1px;
        background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.005));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }
      .track-card:hover {
        border-color: var(--border-bright) !important;
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }
      .track-card:active {
        transform: scale(0.98) translateY(0);
      }
      
      .progress-ring {
        transition: transform 0.3s ease;
      }
      .track-card:hover .progress-ring {
        transform: scale(1.06);
      }

      /* Responsiveness */
      @media (max-width: 860px) {
        .stats-banner {
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          padding: 24px;
        }
        .stats-grid {
          width: 100%;
          justify-content: space-between;
        }
        .bento-features {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 600px) {
        .dashboard-wrapper {
          gap: 20px !important;
        }
        .stats-banner {
          padding: 16px 20px !important;
          border-radius: var(--radius-lg);
          gap: 16px;
        }
        .profile-name {
          font-size: 1.45rem;
        }
        .stats-grid {
          width: 100%;
          flex-wrap: wrap;
          gap: 12px 16px;
        }
        .stat-divider {
          display: none;
        }
        .resume-card {
          flex-direction: column;
          align-items: stretch !important;
          padding: 16px 20px !important;
          border-radius: var(--radius-lg);
          gap: 16px;
        }
        .resume-btn {
          width: 100%;
          text-align: center;
          padding: 12px 20px;
        }
        .tracks-row {
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .track-card {
          padding: 16px 20px !important;
          border-radius: var(--radius-lg);
          gap: 12px;
        }
        .bento-features {
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .feature-card {
          padding: 16px 20px !important;
          border-radius: var(--radius-lg);
          gap: 10px;
        }
        .mission-content {
          flex-direction: column !important;
          align-items: stretch !important;
          gap: 12px !important;
        }
        .mission-btn {
          width: 100% !important;
          text-align: center !important;
        }
      }
      @media (max-width: 400px) {
        .stats-banner {
          padding: 14px 16px !important;
        }
        .resume-card {
          padding: 14px 16px !important;
        }
        .feature-card {
          padding: 14px 16px !important;
        }
        .track-card {
          padding: 14px 16px !important;
        }
      }
      @media (max-width: 768px) {
        .today-plan-grid {
          grid-template-columns: 1fr !important;
        }
      }
    </style>

    <div class="dashboard-wrapper fade-in">
      
      <!-- Stats & Level Banner -->
      <div class="stats-banner">
        <div class="profile-info">
          <span class="profile-title">Selamat ${(() => {
            const hr = new Date().getHours();
            if (hr >= 4 && hr < 11) return 'Pagi';
            if (hr >= 11 && hr < 15) return 'Siang';
            if (hr >= 15 && hr < 18) return 'Sore';
            return 'Malam';
          })()}</span>
          <div class="profile-name">Halo, Pelajar Master! 👋</div>
          <div style="margin-top: 6px;">
            <span class="profile-level">${levelInfo.nameId} (${levelInfo.name})</span>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-val">
              <i data-lucide="star" style="width: 18px; height: 18px; color: var(--text-main);"></i>
              ${xp}
            </span>
            <span class="stat-label">TOTAL XP</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-val" style="color: ${streak > 0 ? 'var(--text-main)' : 'var(--text-muted)'};">
              <i data-lucide="flame" style="width: 18px; height: 18px; fill: ${streak > 0 ? 'var(--text-main)' : 'none'};"></i>
              ${streak}
            </span>
            <span class="stat-label">HARI BERUNTUN</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-val">
              <i data-lucide="clock" style="width: 18px; height: 18px; color: var(--text-main);"></i>
              ${totalMinutes}m
            </span>
            <span class="stat-label">DURASI BELAJAR</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item" style="cursor: pointer;" onclick="window.location.hash='#/review'">
            <span class="stat-val" style="color: ${dueCount > 0 ? 'var(--text-main)' : 'var(--text-muted)'};">
              <i data-lucide="repeat-2" style="width: 18px; height: 18px;"></i>
              ${dueCount}
            </span>
            <span class="stat-label">ULASAN SRS</span>
          </div>
        </div>
      </div>

      <!-- Guided Study Plan Mission Banner (Only if active) -->
      ${state.studyPlan?.active ? `
      <div class="card" style="padding: 24px; border-color: var(--border-bright); background: radial-gradient(circle at 100% 100%, var(--bg-hover) 0%, var(--bg-card) 100%); display: flex; flex-direction: column; gap: 16px; position: relative;">
        <!-- Title Badge Row -->
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="background: var(--text-main); color: var(--bg-main); font-size: 0.68rem; font-weight: 800; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">Mode Target</div>
            <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-secondary);">${state.studyPlan.level} — Rencana ${state.studyPlan.duration} Bulan</span>
          </div>
          <span style="font-size: 0.72rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 4px;">
            <i data-lucide="compass" style="width: 14px; height: 14px;"></i> Misi Hari Ini
          </span>
        </div>
        
        <!-- Mission Content Row -->
        <div class="mission-content" style="display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 220px;">
            <h3 style="font-size: 1.1rem; font-weight: 900; color: var(--text-main); margin-bottom: 4px; letter-spacing: -0.01em;">${getDailyMissionTitle(state.studyPlan)}</h3>
            <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5;">${getDailyMissionDesc(state.studyPlan, nextChapter)}</p>
          </div>
          <button class="btn btn-primary mission-btn" onclick="window.location.hash='${getDailyMissionHash(state.studyPlan, nextChapter)}'" style="padding: 12px 24px; font-size: 0.78rem; font-weight: 800; border-radius: var(--radius-md); text-transform: uppercase; letter-spacing: 0.05em;">Selesaikan Misi</button>
        </div>
      </div>
      ` : ''}

      <!-- Quick Resume Box -->
      <a class="resume-card" href="#/chapter/${nextChapter.id}">
        <div style="display: flex; gap: 16px; align-items: flex-start;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--accent-dim); display: flex; align-items: center; justify-content: center; color: var(--accent-bright); flex-shrink: 0; margin-top: 2px;">
            <i data-lucide="play" style="width: 20px; height: 20px; fill: currentColor; margin-left: 2px;"></i>
          </div>
          <div>
            <div style="font-size: 0.72rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 2px;">Lanjutkan Belajar</div>
            <h3 style="font-size: 1.25rem; font-weight: 900; color: var(--text-main); margin-bottom: 4px; letter-spacing: -0.01em;">Bab ${nextChapter.id}: ${nextChapter.title.includes(':') ? nextChapter.title.split(':').slice(1).join(':').trim() : nextChapter.title}</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4; max-width: 480px;">${nextChapter.desc}</p>
          </div>
        </div>
        <button class="resume-btn">Belajar Sekarang</button>
      </a>

      <!-- Bento Features Center -->
      <div>
        <h3 style="font-size: 1.1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); margin-bottom: 14px;">Pusat Aktivitas</h3>
        <div class="bento-features">
          <a class="feature-card" href="#/review">
            <div class="feature-icon-wrapper">
              <i data-lucide="repeat-2" style="width: 18px; height: 18px;"></i>
              ${dueCount > 0 ? `<div class="feature-badge">${dueCount}</div>` : ''}
            </div>
            <div>
              <div class="feature-title">Spaced Repetition</div>
              <div class="feature-desc">Ulas dan hafal kosakata dengan sistem flashcard SRS cerdas.</div>
            </div>
          </a>

          <a class="feature-card" href="#/minna">
            <div class="feature-icon-wrapper">
              <i data-lucide="book-open" style="width: 18px; height: 18px;"></i>
            </div>
            <div>
              <div class="feature-title">Grammar Digest</div>
              <div class="feature-desc">Panduan referensi tata bahasa lengkap dari Minna no Nihongo.</div>
            </div>
          </a>

          <a class="feature-card" href="#/writing">
            <div class="feature-icon-wrapper">
              <i data-lucide="pen-tool" style="width: 18px; height: 18px;"></i>
            </div>
            <div>
              <div class="feature-title">Latihan Menulis</div>
              <div class="feature-desc">Latih nulis Hiragana, Katakana, dan Kanji langsung di layar sentuh.</div>
            </div>
          </a>

          <a class="feature-card" href="#/curriculum">
            <div class="feature-icon-wrapper">
              <i data-lucide="clipboard-list" style="width: 18px; height: 18px;"></i>
            </div>
            <div>
              <div class="feature-title">Peta Kurikulum</div>
              <div class="feature-desc">Garis waktu belajar lengkap yang terbagi dalam fase terstruktur.</div>
            </div>
          </a>
        </div>
      </div>

      <!-- Tracks Row -->
      <div>
        <h3 style="font-size: 1.1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); margin-bottom: 14px;">Jalur Pembelajaran</h3>
        <div class="tracks-row">
          <div class="track-card" onclick="window.location.hash='#/curriculum?track=minna1'">
            <div style="display: flex; gap: 20px; align-items: center;">
              <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                <span style="font-size: 0.7rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Level Dasar (N5)</span>
                <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin: 0;">Minna no Nihongo I</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; margin: 0;">Menguasai aksara dasar, kalimat perkenalan, partikel dasar, kata kerja, dan kata sifat N5.</p>
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">${minna1Completed} / ${minna1Chapters.length} Bab Selesai</span>
              </div>
              <div style="position: relative; width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg class="progress-ring" width="64" height="64">
                  <circle class="progress-ring-bg" stroke-width="4" fill="transparent" r="28" cx="32" cy="32"/>
                  <circle class="progress-ring-circle" stroke-width="4" fill="transparent" r="28" cx="32" cy="32" stroke-dasharray="175.93" stroke-dashoffset="${175.93 - (minna1ProgressPercent / 100) * 175.93}"/>
                </svg>
                <div style="position: absolute; font-size: 0.75rem; font-weight: 800; color: var(--text-main); font-variant-numeric: tabular-nums;">${minna1ProgressPercent}%</div>
              </div>
            </div>
          </div>

          <div class="track-card" onclick="window.location.hash='#/curriculum?track=minna2'">
            <div style="display: flex; gap: 20px; align-items: center;">
              <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                <span style="font-size: 0.7rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Level Menengah (N4)</span>
                <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); margin: 0;">Minna no Nihongo II</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; margin: 0;">Menguasai bentuk kalimat pasif, kausatif, syarat kondisional, keigo, dan tata bahasa N4.</p>
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">${minna2Completed} / ${minna2Chapters.length} Bab Selesai</span>
              </div>
              <div style="position: relative; width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg class="progress-ring" width="64" height="64">
                  <circle class="progress-ring-bg" stroke-width="4" fill="transparent" r="28" cx="32" cy="32"/>
                  <circle class="progress-ring-circle" stroke-width="4" fill="transparent" r="28" cx="32" cy="32" stroke-dasharray="175.93" stroke-dashoffset="${175.93 - (minna2ProgressPercent / 100) * 175.93}"/>
                </svg>
                <div style="position: absolute; font-size: 0.75rem; font-weight: 800; color: var(--text-main); font-variant-numeric: tabular-nums;">${minna2ProgressPercent}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Rencana Hari Ini Section -->
      <div>
        <h3 style="font-size: 1.1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); margin-bottom: 14px;">Rencana Hari Ini</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;" class="today-plan-grid">
          <!-- Card 1: Ulasan SRS -->
          <a class="feature-card" href="#/review" style="border: 1px solid var(--border-accent) !important; background: var(--accent-dim);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
              <div class="feature-icon-wrapper" style="background: var(--bg-card); color: var(--accent-bright); border-color: var(--border-accent);">
                <i data-lucide="repeat-2" style="width: 18px; height: 18px;"></i>
              </div>
              <span style="font-size: 0.72rem; font-weight: 800; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">Harian</span>
            </div>
            <div>
              <div class="feature-title" style="margin-top: 4px;">Ulas Kosakata</div>
              <div class="feature-desc" style="margin-top: 4px;">Ada <strong style="color: var(--text-main); font-weight: 800;">${dueCount}</strong> item yang perlu Anda ulas hari ini untuk mempertahankan ingatan.</div>
            </div>
          </a>

          <!-- Card 2: Latihan Buku Kerja -->
          <a class="feature-card" href="#/workbook/${nextChapter.id}">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
              <div class="feature-icon-wrapper">
                <i data-lucide="edit-3" style="width: 18px; height: 18px;"></i>
              </div>
              <span style="font-size: 0.72rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Bab ${nextChapter.id}</span>
            </div>
            <div>
              <div class="feature-title" style="margin-top: 4px;">Latihan Buku Kerja</div>
              <div class="feature-desc" style="margin-top: 4px;">Kerjakan latihan menulis (Kaite Oboeru) untuk Bab ${nextChapter.id} agar pemahaman tata bahasa lebih solid.</div>
            </div>
          </a>

          <!-- Card 3: Evaluasi Ujian -->
          <a class="feature-card" href="#/exam/${nextChapter.id}">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; width: 100%;">
              <div class="feature-icon-wrapper">
                <i data-lucide="award" style="width: 18px; height: 18px;"></i>
              </div>
              <span style="font-size: 0.72rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Bab ${nextChapter.id}</span>
            </div>
            <div>
              <div class="feature-title" style="margin-top: 4px;">Ujian Bab</div>
              <div class="feature-desc" style="margin-top: 4px;">Uji kompetensi Bab ${nextChapter.id} dengan ujian kosakata, tata bahasa, dan membaca.</div>
            </div>
          </a>
        </div>
      </div>

    </div>
  `;

  if (window.lucide) lucide.createIcons({ root: container });
}
