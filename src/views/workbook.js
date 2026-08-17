import { renderTopbar, showToast, renderBackBtn, renderLoader } from '../components/layout.js';
import { loadChapter } from '../data/chapter_index.js';
import { addXP } from '../store.js';
import { getUnitDetails } from '../data/curriculum.js';

export function WorkbookView(container, params) {
  const chapterId = parseInt(params.id);
  const unitDetails = getUnitDetails(chapterId);
  const backRoute = unitDetails ? `#/phase/${unitDetails.phaseId}` : `#/curriculum`;

  renderTopbar(`Kaite Oboeru — Bab ${chapterId}`, false, backRoute);

  renderLoader(container, `Memuat Workbook Bab ${chapterId}...`);

  loadChapter(chapterId).then(chapter => {
    if (!chapter) {
      container.innerHTML = `<div style="padding:40px;text-align:center;">Bab tidak ditemukan.</div>`;
      return;
    }
    _initWorkbookView(container, params, chapter, chapterId);
  }).catch(err => {
    container.innerHTML = `<div style="padding:40px;text-align:center;color:var(--red);">Gagal memuat workbook: ${err.message}</div>`;
  });
}

function _initWorkbookView(container, params, chapter, chapterId) {
  const unitDetails = getUnitDetails(chapterId);
  let backTrack = 'all';
  if (chapterId === 0) {
    backTrack = 'pra-mnn';
  } else if (chapterId >= 1 && chapterId <= 25) {
    backTrack = 'minna1';
  } else if (chapterId >= 26 && chapterId <= 50) {
    backTrack = 'minna2';
  }

  // If there are no workbook questions, show placeholder
  if (!chapter.workbook || chapter.workbook.length === 0) {
    container.innerHTML = `
      <div class="fade-in" style="max-width: 800px; margin: 0 auto; padding-bottom: 80px;">
        <!-- Breadcrumb Navigation -->
        <nav class="phase-hero-nav" aria-label="Breadcrumb">
          <a href="#/curriculum?track=${backTrack}" class="phase-nav-back">
            <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Kurikulum
          </a>
          ${unitDetails ? `
            <span class="phase-nav-sep">/</span>
            <a href="#/phase/${unitDetails.phaseId}" class="phase-nav-back">${unitDetails.phaseTitle.includes(':') ? unitDetails.phaseTitle.split(':')[0].trim() : unitDetails.phaseTitle}</a>
          ` : ''}
          <span class="phase-nav-sep">/</span>
          <span class="phase-nav-level">Bab ${chapterId} &middot; Buku Kerja</span>
        </nav>

        <div style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 32px; text-align: center;">
          <div style="margin-bottom: 16px;">
            <span style="background: transparent; color: var(--text-main); border: 1px solid var(--text-main); padding: 4px 12px; border-radius: 99px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Workbook Mode</span>
          </div>
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">Latihan Menulis: Bab ${chapter.id}</h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
            Modul ini mereplikasi buku <em>Kaite Oboeru</em> (Sentence Pattern Workbook).
          </p>
        </div>

        <div class="bento-card" style="padding: 40px; text-align: center; border: 1px dashed var(--border-accent);">
          <i data-lucide="pen-tool" style="width:48px;height:48px;color:var(--text-faint);margin-bottom:16px;"></i>
          <h3 style="font-size:1.2rem;color:var(--text-main);margin-bottom:8px;">Soal Workbook Sedang Disusun</h3>
          <p style="color:var(--text-muted);font-size:0.9rem;">
            Materi *Kaite Oboeru* untuk bab ini sedang dalam proses ekstraksi dari referensi PDF. Segera hadir!
          </p>
        </div>
      </div>
    `;
    if (window.lucide) lucide.createIcons({ root: container });
    return;
  }

  // Workbook Persistent State
  const progressKey = `nihongo_master_workbook_ch${chapterId}`;
  let questionsState = null;
  let xpAwarded = false;

  try {
    const saved = localStorage.getItem(progressKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.questions)) {
        questionsState = parsed.questions;
        xpAwarded = !!parsed.xpAwarded;
      }
    }
  } catch (e) {
    console.warn('Failed to load workbook progress:', e);
  }

  // Initialization if no valid saved progress
  if (!questionsState || questionsState.length !== chapter.workbook.length) {
    questionsState = chapter.workbook.map((item, idx) => ({
      index: idx,
      id: item.id,
      pattern: item.pattern,
      instruction: item.instruction,
      question: item.question,
      correct: item.correct,
      romaji: item.romaji,
      translation: item.translation,
      status: 'unattempted', // 'unattempted' | 'correct' | 'incorrect'
      userAnswer: '',
      showResult: false,
      revealAnswer: false
    }));
  }

  function saveProgress() {
    try {
      localStorage.setItem(progressKey, JSON.stringify({
        questions: questionsState,
        xpAwarded: xpAwarded
      }));
    } catch (e) {
      console.warn('Failed to save workbook progress:', e);
    }
  }

  // Local component navigation state
  let viewMode = 'overview'; // 'overview' | 'practice'
  let currentIndex = 0;
  let isCompletedScreen = false;

  function cleanString(str) {
    return str.replace(/[\s\.\,。、\?\？\！\!]/g, '').trim().toLowerCase();
  }

  function render() {
    const totalQuestions = questionsState.length;
    const correctCount = questionsState.filter(q => q.status === 'correct').length;
    const incorrectCount = questionsState.filter(q => q.status === 'incorrect').length;
    const attemptedCount = questionsState.filter(q => q.status !== 'unattempted').length;
    const progressPercent = Math.round((attemptedCount / totalQuestions) * 100);

    let html = `
      <div class="workbook-wrapper page-container-standard fade-in">
    `;

    if (viewMode === 'overview') {
      // ────────────────────────────────────────────────────────
      // OVERVIEW VIEW MODE (Dashboard DNA)
      // ────────────────────────────────────────────────────────
      html += `
        <!-- Overview Hero Box (Phase / Dashboard Standard) -->
        <section class="hero-learning-card phase-hero-card">
          <nav class="phase-hero-nav" aria-label="Breadcrumb">
            <a href="#/curriculum?track=${backTrack}" class="phase-nav-back">
              <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Kurikulum
            </a>
            ${unitDetails ? `
              <span class="phase-nav-sep">/</span>
              <a href="#/phase/${unitDetails.phaseId}" class="phase-nav-back">${unitDetails.phaseTitle.includes(':') ? unitDetails.phaseTitle.split(':')[0].trim() : unitDetails.phaseTitle}</a>
            ` : ''}
            <span class="phase-nav-sep">/</span>
            <span class="phase-nav-level">Bab ${chapter.id} &middot; Buku Kerja</span>
          </nav>

          <div class="hero-main-content">
            <div class="dash-track-badge n5" style="align-self: flex-start; margin-bottom: 4px;">KAITE OBOERU &middot; BAB ${chapter.id}</div>
            <h1 class="hero-chapter-title" style="font-size: 1.35rem; margin: 0 0 4px 0;">Latihan Menulis &amp; Pola Kalimat</h1>
            <p class="hero-chapter-desc" style="margin: 0;">
              Tulis ulang pola kalimat standard dari buku <em>Kaite Oboeru</em> berdasarkan petunjuk kata yang disediakan.
            </p>
          </div>

          <!-- Clean Spacious Progress Bar -->
          <div class="dash-track-progress" style="margin-top: 4px;">
            <div class="dash-track-prog-meta">
              <span>Kemajuan Latihan</span>
              <span><strong>${correctCount}</strong>/${totalQuestions} Soal (${progressPercent}%)</span>
            </div>
            <div class="dash-track-prog-bar">
              <div class="dash-track-prog-fill" style="width: ${progressPercent}%;"></div>
            </div>
          </div>

          <!-- Actions Bar -->
          <div class="hero-actions-bar" style="margin-top: 2px; padding-top: 10px;">
            <button id="btn-start-practice" class="btn btn-primary hero-cta-btn" style="width: 100%; justify-content: center;">
              <i data-lucide="${attemptedCount === totalQuestions ? 'rotate-ccw' : 'play'}" style="width: 14px; height: 14px; fill: currentColor;"></i>
              ${attemptedCount === 0 ? 'Mulai Latihan Menulis' : attemptedCount === totalQuestions ? 'Ulangi Latihan' : 'Lanjutkan Latihan Menulis'}
            </button>
          </div>
        </section>

        <!-- Gesture of Transition: Section Divider Header -->
        <div class="phase-roadmap-header">
          <div class="phase-roadmap-title-row">
            <span class="phase-roadmap-section-title">Daftar Soal Latihan</span>
            <span class="phase-roadmap-section-meta">${correctCount}/${totalQuestions} Selesai</span>
          </div>
        </div>

        <!-- Overview List -->
        <div class="phase-roadmap-list wb-overview-grid">
          ${questionsState.map((q, idx) => {
            let statusLabel = 'Belum Dikerjakan';
            let statusClass = 'unattempted';
            let statusIcon = 'circle';
            
            if (q.status === 'correct') {
              statusLabel = 'Benar';
              statusClass = 'done';
              statusIcon = 'check';
            } else if (q.status === 'incorrect') {
              statusLabel = 'Perlu Diulang';
              statusClass = 'active';
              statusIcon = 'alert-circle';
            }

            return `
              <div class="phase-card overview-card ${statusClass === 'done' ? 'is-completed' : ''}" data-index="${idx}">
                <div class="phase-card-top-bar">
                  <div class="phase-badge-group">
                    <span class="hero-pill-badge">Soal ${idx + 1}</span>
                    <span class="phase-topic-tag">Pola: ${q.pattern}</span>
                  </div>
                  <span class="phase-badge-status ${statusClass}">
                    <i data-lucide="${statusIcon}" style="width: 11px; height: 11px;"></i>
                    ${statusLabel}
                  </span>
                </div>
                
                <div class="phase-card-title-group">
                  <h3 class="phase-card-title" style="font-family: var(--font-jp); font-size: 15px; letter-spacing: 0.02em;">${q.question}</h3>
                  <p class="phase-card-focus-text">${q.instruction}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else {
      // ────────────────────────────────────────────────────────
      // PRACTICE VIEW MODE (SPLIT LAYOUT WITH DASHBOARD STYLING)
      // ────────────────────────────────────────────────────────
      
      const sidebarProgressPercent = Math.round((attemptedCount / totalQuestions) * 100);
      const activeItem = questionsState[currentIndex];

      html += `
        <!-- Breadcrumb Navigation -->
        <nav class="phase-hero-nav" aria-label="Breadcrumb">
          <a href="#/curriculum?track=${backTrack}" class="phase-nav-back">
            <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Kurikulum
          </a>
          ${unitDetails ? `
            <span class="phase-nav-sep">/</span>
            <a href="#/phase/${unitDetails.phaseId}" class="phase-nav-back">${unitDetails.phaseTitle.includes(':') ? unitDetails.phaseTitle.split(':')[0].trim() : unitDetails.phaseTitle}</a>
          ` : ''}
          <span class="phase-nav-sep">/</span>
          <button id="btn-breadcrumb-overview" class="wb-ghost-nav-btn">Bab ${chapter.id} &middot; Buku Kerja</button>
          <span class="phase-nav-sep">/</span>
          <span class="phase-nav-level">${isCompletedScreen ? 'Hasil' : `Soal ${currentIndex + 1}`}</span>
        </nav>

        <div class="workbook-split-layout">
          
          <!-- LEFT COLUMN: SIDEBAR INDEX (Desktop Only) -->
          <div class="workbook-sidebar">
            <div class="sidebar-header-row">
              <span class="sidebar-title">Indeks Soal</span>
              <span class="sidebar-meta-count">${correctCount}/${totalQuestions} Selesai</span>
            </div>
            
            <div class="sidebar-progress-container">
              <div class="sidebar-progress-bar">
                <div class="sidebar-progress-fill" style="width: ${sidebarProgressPercent}%;"></div>
              </div>
            </div>

            <div class="sidebar-list">
              ${questionsState.map((q, idx) => {
                const isActive = idx === currentIndex && !isCompletedScreen;
                let statusIcon = 'circle';
                let statusClass = 'unattempted';
                if (q.status === 'correct') {
                  statusIcon = 'check';
                  statusClass = 'correct';
                } else if (q.status === 'incorrect') {
                  statusIcon = 'alert-circle';
                  statusClass = 'incorrect';
                }

                return `
                  <button class="sidebar-item ${isActive ? 'active' : ''}" data-index="${idx}">
                    <span class="sidebar-item-label">
                      Soal ${idx + 1}: ${q.pattern}
                    </span>
                    <span class="sidebar-item-icon ${statusClass}">
                      <i data-lucide="${statusIcon}" style="width:13px;height:13px;"></i>
                    </span>
                  </button>
                `;
              }).join('')}
            </div>
            
            <button id="btn-sidebar-back-overview" class="wb-sidebar-back-btn">
              <i data-lucide="list" style="width:13px;height:13px;"></i>
              Lihat Semua Soal
            </button>
          </div>

          <!-- RIGHT COLUMN: MAIN INTERACTIVE CARD -->
          <div class="workbook-main-col">
            
            <!-- Mobile Quick Timeline Chips -->
            <div class="mobile-chips-container">
              ${questionsState.map((q, idx) => {
                const isActive = idx === currentIndex && !isCompletedScreen;
                let statusClass = q.status; // 'correct' | 'incorrect' | 'unattempted'
                return `
                  <div class="mobile-chip ${isActive ? 'active' : ''} ${statusClass}" data-index="${idx}">
                    ${idx + 1}
                  </div>
                `;
              }).join('')}
              <div class="mobile-chip ${isCompletedScreen ? 'active' : ''} result-chip" id="btn-mobile-chip-complete">
                <i data-lucide="award" style="width:13px;height:13px;"></i>
                Hasil
              </div>
            </div>

            ${isCompletedScreen ? renderCompletionHTML(correctCount, totalQuestions) : renderQuestionHTML(activeItem, currentIndex, totalQuestions)}
          </div>
        </div>
      `;
    }

    html += `
      </div>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: container });

    // Bind common event listeners
    bindEvents(totalQuestions);
  }

  // Helper to render active question card HTML (Dashboard DNA)
  function renderQuestionHTML(item, index, total) {
    const isChecked = item.status !== 'unattempted';
    const isCorrect = item.status === 'correct';
    const revealAnswer = item.revealAnswer;

    return `
      <!-- Active Question Card -->
      <div class="phase-card wb-practice-card ${isChecked ? (isCorrect ? 'is-completed' : 'is-active-focus') : ''}">
        
        <!-- Question Top Bar -->
        <div class="phase-card-top-bar">
          <div class="phase-badge-group">
            <span class="hero-pill-badge">Soal ${index + 1} dari ${total}</span>
            <span class="phase-topic-tag">Pola: ${item.pattern}</span>
          </div>
          <button id="btn-back-to-overview-link" class="wb-ghost-link">
            <i data-lucide="list" style="width:12px;height:12px;"></i> Semua Soal
          </button>
        </div>

        <!-- Instruction Subtitle -->
        <div class="wb-instruction-box">
          <i data-lucide="info" style="width:13px; height:13px; color:var(--accent); flex-shrink:0;"></i>
          <span>${item.instruction}</span>
        </div>

        <!-- The Cues Box -->
        <div class="wb-cue-box">
          <div class="wb-cue-label">Petunjuk Kata</div>
          <div class="wb-cue-text">${item.question}</div>
        </div>

        <!-- Input Area -->
        <div class="wb-input-group">
          <label for="wb-user-input" class="wb-input-label">Ketik kalimat lengkap (Hiragana / Kanji):</label>
          <div class="wb-input-wrap">
            <input type="text" id="wb-user-input" class="wb-text-input" placeholder="Ketik kalimat lengkap di sini..." autocomplete="off" 
              value="${item.userAnswer || ''}"
              ${isChecked ? 'disabled' : ''} />
          </div>
        </div>

        <!-- Inline Result Feedback -->
        ${isChecked ? `
          <div class="wb-feedback-box ${isCorrect ? 'is-correct' : 'is-incorrect'} fade-in">
            <div class="wb-feedback-header">
              <i data-lucide="${isCorrect ? 'check-circle-2' : 'alert-circle'}" style="width: 15px; height: 15px; flex-shrink: 0;"></i>
              <span class="wb-feedback-title">
                ${isCorrect ? 'Luar Biasa! Jawaban Anda Tepat.' : revealAnswer ? 'Kunci Jawaban Buku Cetak:' : 'Kurang Tepat. Periksa kembali partikel atau ejaan kata.'}
              </span>
            </div>
            
            ${(isCorrect || revealAnswer) ? `
              <div class="wb-feedback-body">
                <div class="wb-correct-jp">${item.correct}</div>
                <div class="wb-correct-romaji">${item.romaji}</div>
                <div class="wb-correct-trans">= "${item.translation}"</div>
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- Bottom Action Bar -->
        <div class="wb-card-actions">
          
          <!-- Prev / Next Card shortcuts -->
          <div class="wb-nav-btns">
            <button id="btn-prev-quest" class="wb-icon-nav-btn" ${index === 0 ? 'disabled' : ''} title="Soal Sebelumnya">
              <i data-lucide="chevron-left" style="width:16px;height:16px;"></i>
            </button>
            <button id="btn-next-quest" class="wb-icon-nav-btn" ${index === total - 1 ? 'disabled' : ''} title="Soal Selanjutnya">
              <i data-lucide="chevron-right" style="width:16px;height:16px;"></i>
            </button>
          </div>

          <div class="wb-main-action-btns">
            ${!isChecked ? `
              <button id="btn-check" class="btn btn-primary wb-submit-btn">
                <i data-lucide="check" style="width:14px;height:14px;"></i>
                Periksa Jawaban
              </button>
            ` : `
              ${!isCorrect && !revealAnswer ? `
                <button id="btn-reveal" class="hero-subaction-btn">
                  Lihat Kunci Jawaban
                </button>
                <button id="btn-retry" class="hero-subaction-btn">
                  <i data-lucide="rotate-ccw" style="width:12px;height:12px;"></i> Coba Lagi
                </button>
              ` : ''}
              
              ${!isCorrect && revealAnswer ? `
                <button id="btn-retry" class="hero-subaction-btn">
                  <i data-lucide="rotate-ccw" style="width:12px;height:12px;"></i> Ulangi Soal
                </button>
              ` : ''}

              <button id="btn-next" class="btn btn-primary wb-submit-btn">
                ${index + 1 === total ? 'Selesaikan Latihan' : 'Soal Selanjutnya'}
                <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
              </button>
            `}
          </div>
        </div>

      </div>
    `;
  }

  // Helper to render completion screen HTML (Dashboard Trophy Standard)
  function renderCompletionHTML(correctCount, totalQuestions) {
    const accuracy = Math.round((correctCount / totalQuestions) * 100) || 0;
    
    let xpStatusHTML = '';
    if (!xpAwarded) {
      xpAwarded = true;
      saveProgress();
      addXP(30);
      xpStatusHTML = `
        <div class="dash-stat-segment" style="background: rgba(79, 70, 229, 0.1); border: 1px solid rgba(79, 70, 229, 0.25); border-radius: 99px; padding: 6px 16px; margin: 0 auto; display: inline-flex; align-items: center; gap: 6px;">
          <i data-lucide="star" style="width:14px; height:14px; fill:currentColor; color: #F59E0B;"></i>
          <span style="font-size:12px; font-weight:800; color:var(--text-main);">+30 XP Diperoleh!</span>
        </div>
      `;
    } else {
      xpStatusHTML = `
        <div class="phase-badge-status done" style="margin: 0 auto; display: inline-flex;">
          <i data-lucide="check" style="width:12px; height:12px;"></i>
          Latihan Selesai
        </div>
      `;
    }

    const hasIncorrect = questionsState.some(q => q.status === 'incorrect');

    return `
      <div class="hero-learning-card phase-hero-card fade-in" style="text-align: center; padding: 28px 20px; display: flex; flex-direction: column; gap: 16px; align-items: center;">
        
        <div style="width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #6366F1, #4F46E5); display: flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);">
          <i data-lucide="award" style="width: 28px; height: 28px;"></i>
        </div>
        
        <div style="max-width: 400px;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--text-main); margin: 0 0 6px 0; letter-spacing: -0.02em;">Latihan Menulis Selesai</h2>
          <p style="color: var(--text-secondary); font-size: 12px; line-height: 1.5; margin: 0;">
            Selamat! Anda telah merampungkan seluruh latihan pola kalimat <em>Kaite Oboeru</em> untuk <strong>Bab ${chapter.id}</strong>.
          </p>
        </div>

        <!-- Stats Capsule -->
        <div class="dash-stats-capsule" style="width: 100%; max-width: 320px; justify-content: space-around;">
          <div class="dash-stat-segment">
            <div class="dash-stat-text">
              <span class="dash-stat-num">${correctCount}/${totalQuestions}</span>
              <span class="dash-stat-name">Skor Benar</span>
            </div>
          </div>
          <div class="dash-stat-divider"></div>
          <div class="dash-stat-segment">
            <div class="dash-stat-text">
              <span class="dash-stat-num">${accuracy}%</span>
              <span class="dash-stat-name">Akurasi</span>
            </div>
          </div>
        </div>

        ${xpStatusHTML}

        ${hasIncorrect ? `
          <div style="padding: 10px 14px; border: 1px dashed var(--border); border-radius: var(--radius-md); background: var(--bg-elevated); font-size: 11.5px; color: var(--text-secondary); line-height: 1.45; text-align: left; max-width: 380px;">
            <i data-lucide="info" style="width: 13px; height: 13px; display:inline-block; vertical-align:middle; margin-right:4px; color:var(--accent);"></i>
            Terdapat beberapa soal yang belum tepat. Anda dapat mengulangi soal tersebut kapan saja dengan memilih nomor soal di menu atas.
          </div>
        ` : ''}

        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; width: 100%; max-width: 380px; margin-top: 8px;">
          <button id="btn-restart-wb" class="hero-subaction-btn" style="flex: 1; justify-content: center; padding: 10px 14px;">
            <i data-lucide="rotate-ccw" style="width: 13px; height: 13px;"></i> Ulangi Latihan
          </button>
          <a href="#/exam/${chapter.id}" class="btn btn-primary" style="flex: 1; justify-content: center; padding: 10px 14px; font-size: 11.5px; font-weight: 700; text-decoration: none; border-radius: var(--radius-sm); display: inline-flex; align-items: center; gap: 6px;">
            <i data-lucide="award" style="width: 14px; height: 14px;"></i> Uji di Ujian
          </a>
        </div>

      </div>
    `;
  }

  // Bind interactive event listeners for active markup
  function bindEvents(totalQuestions) {
    // 1. OVERVIEW SCREEN EVENTS
    if (viewMode === 'overview') {
      const btnStart = container.querySelector('#btn-start-practice');
      if (btnStart) {
        btnStart.addEventListener('click', () => {
          // Find first unattempted question, or first incorrect question, or default to 0
          let firstUnattempted = questionsState.findIndex(q => q.status === 'unattempted');
          if (firstUnattempted === -1) {
            firstUnattempted = questionsState.findIndex(q => q.status === 'incorrect');
          }
          if (firstUnattempted === -1) {
            firstUnattempted = 0;
          }
          
          viewMode = 'practice';
          currentIndex = firstUnattempted;
          isCompletedScreen = false;
          render();
        });
      }

      container.querySelectorAll('.overview-card').forEach(card => {
        card.addEventListener('click', () => {
          const index = parseInt(card.dataset.index);
          viewMode = 'practice';
          currentIndex = index;
          isCompletedScreen = false;
          render();
        });
      });
      return;
    }

    // 2. PRACTICE SCREEN EVENTS
    
    // Sidebar list clicks
    container.querySelectorAll('.workbook-sidebar .sidebar-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        currentIndex = index;
        isCompletedScreen = false;
        render();
      });
    });

    // Mobile chip clicks
    container.querySelectorAll('.mobile-chips-container .mobile-chip[data-index]').forEach(chip => {
      chip.addEventListener('click', () => {
        const index = parseInt(chip.dataset.index);
        currentIndex = index;
        isCompletedScreen = false;
        render();
      });
    });

    const mobileChipComplete = container.querySelector('#btn-mobile-chip-complete');
    if (mobileChipComplete) {
      mobileChipComplete.addEventListener('click', () => {
        isCompletedScreen = true;
        render();
      });
    }

    // Back to overview buttons
    const btnSidebarBack = container.querySelector('#btn-sidebar-back-overview');
    if (btnSidebarBack) {
      btnSidebarBack.addEventListener('click', () => {
        viewMode = 'overview';
        isCompletedScreen = false;
        render();
      });
    }

    const btnBreadcrumbOverview = container.querySelector('#btn-breadcrumb-overview');
    if (btnBreadcrumbOverview) {
      btnBreadcrumbOverview.addEventListener('click', () => {
        viewMode = 'overview';
        isCompletedScreen = false;
        render();
      });
    }

    const btnBackLink = container.querySelector('#btn-back-to-overview-link');
    if (btnBackLink) {
      btnBackLink.addEventListener('click', () => {
        viewMode = 'overview';
        isCompletedScreen = false;
        render();
      });
    }

    // If on completion screen, bind its special buttons
    if (isCompletedScreen) {
      const btnRetryFailed = container.querySelector('#btn-retry-failed');
      if (btnRetryFailed) {
        btnRetryFailed.addEventListener('click', () => {
          // Find first incorrect question
          const firstIncorrect = questionsState.findIndex(q => q.status === 'incorrect');
          if (firstIncorrect !== -1) {
            currentIndex = firstIncorrect;
            isCompletedScreen = false;
            render();
          }
        });
      }

      container.querySelector('#btn-back-chapter')?.addEventListener('click', () => {
        window.location.hash = `#/chapter/${chapter.id}`;
      });

      container.querySelector('#btn-back-curriculum')?.addEventListener('click', () => {
        window.location.hash = '#/curriculum';
      });

      container.querySelector('#btn-start-exam')?.addEventListener('click', () => {
        window.location.hash = `#/exam/${chapter.id}`;
      });

      return;
    }

    // Active input auto-focus & keys
    const inputField = container.querySelector('#wb-user-input');
    if (inputField && questionsState[currentIndex].status === 'unattempted') {
      inputField.focus();
      inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkAnswer();
        }
      });
    }

    // Action button clicks
    const btnCheck = container.querySelector('#btn-check');
    if (btnCheck) btnCheck.addEventListener('click', checkAnswer);

    const btnReveal = container.querySelector('#btn-reveal');
    if (btnReveal) {
      btnReveal.addEventListener('click', () => {
        questionsState[currentIndex].revealAnswer = true;
        questionsState[currentIndex].status = 'incorrect'; // counting as incorrect if revealed
        saveProgress();
        render();
      });
    }

    const btnRetry = container.querySelector('#btn-retry');
    if (btnRetry) {
      btnRetry.addEventListener('click', () => {
        questionsState[currentIndex].status = 'unattempted';
        questionsState[currentIndex].showResult = false;
        questionsState[currentIndex].revealAnswer = false;
        questionsState[currentIndex].userAnswer = '';
        saveProgress();
        render();
      });
    }

    const btnNext = container.querySelector('#btn-next');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (currentIndex + 1 === totalQuestions) {
          isCompletedScreen = true;
        } else {
          currentIndex++;
        }
        render();
      });
    }

    // Prev / Next question chevron shortcuts
    const btnPrevQuest = container.querySelector('#btn-prev-quest');
    if (btnPrevQuest && currentIndex > 0) {
      btnPrevQuest.addEventListener('click', () => {
        currentIndex--;
        render();
      });
    }

    const btnNextQuest = container.querySelector('#btn-next-quest');
    if (btnNextQuest && currentIndex < totalQuestions - 1) {
      btnNextQuest.addEventListener('click', () => {
        currentIndex++;
        render();
      });
    }
  }

  function checkAnswer() {
    const inputField = container.querySelector('#wb-user-input');
    if (!inputField) return;

    const userAns = inputField.value.trim();
    if (!userAns) {
      if (typeof showToast !== 'undefined') {
        showToast('Harap ketik jawaban terlebih dahulu!', 'warning');
      } else {
        alert('Harap ketik jawaban terlebih dahulu!');
      }
      return;
    }

    const targetItem = questionsState[currentIndex];
    const cleanedUser = cleanString(userAns);
    const cleanedTarget = cleanString(targetItem.correct);

    const isCorrect = (cleanedUser === cleanedTarget);
    
    questionsState[currentIndex].status = isCorrect ? 'correct' : 'incorrect';
    questionsState[currentIndex].userAnswer = userAns;
    questionsState[currentIndex].showResult = true;

    saveProgress();
    render();
  }

  // Initial render call
  render();
}
