import { renderTopbar, showToast } from '../components/layout.js';
import { loadChapter } from '../data/chapter_index.js';
import { addXP } from '../store.js';

export function WorkbookView(container, params) {
  const chapterId = parseInt(params.id);

  renderTopbar(`Kaite Oboeru — Bab ${chapterId}`, false, `#/chapter/${chapterId}`);

  container.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:200px;color:var(--text-muted);"><span style="font-size:0.9rem;font-weight:600;">Memuat workbook bab ${chapterId}...</span></div>`;

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
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">
          <a href="#/curriculum?track=${backTrack}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s; display: flex; align-items: center; gap: 6px;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">
            <i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i>
            Kurikulum
          </a>
          <span>/</span>
          <a href="#/chapter/${chapterId}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">Bab ${chapterId}</a>
          <span>/</span>
          <span style="color: var(--text-main);">Workbook</span>
        </div>

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
      <div class="workbook-wrapper fade-in">
    `;

    if (viewMode === 'overview') {
      // ────────────────────────────────────────────────────────
      // OVERVIEW VIEW MODE
      // ────────────────────────────────────────────────────────
      html += `
        <!-- Breadcrumb Navigation -->
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">
          <a href="#/curriculum?track=${backTrack}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s; display: flex; align-items: center; gap: 6px;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">
            <i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i>
            Kurikulum
          </a>
          <span>/</span>
          <a href="#/chapter/${chapter.id}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">Bab ${chapter.id}</a>
          <span>/</span>
          <span style="color: var(--text-main);">Workbook</span>
        </div>

        <!-- Overview Hero Box -->
        <div class="overview-hero">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap;">
            <div>
              <span class="overview-hero-tag">Kaite Oboeru</span>
              <h2 style="font-size: 1.8rem; font-weight: 900; color: var(--text-main); margin-bottom: 8px; letter-spacing: -0.02em;">Latihan Menulis: Bab ${chapter.id}</h2>
              <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.5; max-width: 580px;">
                Tulis ulang pola kalimat standard dari buku <em>Kaite Oboeru</em> berdasarkan petunjuk kata yang disediakan. Mode ini melatih struktur partikel dan kemampuan menulis kalimat bahasa Jepang Anda secara akurat.
              </p>
            </div>
            
            <button id="btn-start-practice" class="resume-btn" style="background: var(--text-main); color: var(--bg-main); border: none; padding: 12px 28px; font-size: 0.85rem; font-weight: 800; border-radius: var(--radius-md); text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
              ${attemptedCount === 0 ? 'Mulai Latihan' : attemptedCount === totalQuestions ? 'Buka Kembali Latihan' : 'Lanjutkan Latihan'}
            </button>
          </div>

          <!-- Progress and stats -->
          <div class="overview-stats">
            <div class="overview-stat-item">
              <span class="overview-stat-val">${totalQuestions}</span>
              <span class="overview-stat-lbl">Total Kalimat</span>
            </div>
            <div class="overview-stat-item">
              <span class="overview-stat-val">${correctCount} / ${totalQuestions}</span>
              <span class="overview-stat-lbl">Jawaban Benar</span>
            </div>
            <div class="overview-stat-item">
              <span class="overview-stat-val">${progressPercent}%</span>
              <span class="overview-stat-lbl">Progres Selesai</span>
            </div>
          </div>
        </div>

        <!-- Overview List -->
        <div>
          <div class="overview-list-title">
            Daftar Latihan Menulis
          </div>
          <div class="overview-grid">
            ${questionsState.map((q, idx) => {
              let statusLabel = 'Belum Dikerjakan';
              let statusClass = 'unattempted';
              let statusIcon = 'circle';
              
              if (q.status === 'correct') {
                statusLabel = 'Benar';
                statusClass = 'correct';
                statusIcon = 'check-circle';
              } else if (q.status === 'incorrect') {
                statusLabel = 'Perlu Diulang';
                statusClass = 'incorrect';
                statusIcon = 'x-circle';
              }

              return `
                <div class="overview-card" data-index="${idx}">
                  <div class="overview-card-info">
                    <div class="overview-card-meta">
                      <span class="overview-card-num">SOAL ${idx + 1}</span>
                      <span class="overview-card-pattern"><i data-lucide="book-open" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> ${q.pattern}</span>
                    </div>
                    <div class="overview-card-cue">${q.question}</div>
                    <div class="overview-card-desc">${q.instruction}</div>
                  </div>
                  
                  <div class="status-badge ${statusClass}">
                    <i data-lucide="${statusIcon}" style="width: 14px; height: 14px;"></i>
                    ${statusLabel}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    } else {
      // ────────────────────────────────────────────────────────
      // PRACTICE VIEW MODE (SPLIT LAYOUT)
      // ────────────────────────────────────────────────────────
      
      // Calculate sidebar items progress fill
      const sidebarProgressPercent = Math.round((attemptedCount / totalQuestions) * 100);
      const activeItem = questionsState[currentIndex];

      html += `
        <div class="workbook-split-layout">
          
          <!-- LEFT COLUMN: SIDEBAR INDEX (Desktop) -->
          <div class="workbook-sidebar">
            <span class="sidebar-title">Indeks Soal</span>
            
            <div class="sidebar-progress-container">
              <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:700; color:var(--text-secondary);">
                <span>Progres Soal</span>
                <span>${correctCount}/${totalQuestions} Selesai</span>
              </div>
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
                  statusIcon = 'check-circle';
                  statusClass = 'correct';
                } else if (q.status === 'incorrect') {
                  statusIcon = 'x-circle';
                  statusClass = 'incorrect';
                }

                return `
                  <button class="sidebar-item ${isActive ? 'active' : ''}" data-index="${idx}">
                    <span class="sidebar-item-label" style="${isActive ? 'font-weight: 800;' : ''}">
                      Soal ${idx + 1}: ${q.pattern}
                    </span>
                    <span class="sidebar-item-icon ${statusClass}">
                      <i data-lucide="${statusIcon}" style="width:14px;height:14px;"></i>
                    </span>
                  </button>
                `;
              }).join('')}
            </div>
            
            <button id="btn-sidebar-back-overview" style="margin-top:auto; padding:10px; font-size:0.78rem; font-weight:700; color:var(--text-muted); background:transparent; border:1px solid var(--border); border-radius:var(--radius-md); cursor:pointer; text-align:center; transition: all 0.2s;" onmouseover="this.style.borderColor='var(--text-muted)'; this.style.color='var(--text-main)';" onmouseout="this.style.borderColor='var(--border)'; this.style.color='var(--text-muted)';">
              <i data-lucide="list" style="width:13px;height:13px;display:inline-block;vertical-align:middle;margin-right:4px;"></i>
              Kembali ke Ringkasan
            </button>
          </div>

          <!-- RIGHT COLUMN: MAIN INTERACTIVE CARD -->
          <div>
            <!-- Breadcrumbs in Practice Mode -->
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); flex-wrap: wrap;">
              <a href="#/curriculum?track=${backTrack}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s; display: flex; align-items: center; gap: 6px;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">
                Kurikulum
              </a>
              <span>/</span>
              <a href="#/chapter/${chapter.id}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">Bab ${chapter.id}</a>
              <span>/</span>
              <button id="btn-breadcrumb-overview" style="background:none; border:none; padding:0; font-size: inherit; font-weight:inherit; color: var(--text-muted); cursor:pointer; text-transform:uppercase; letter-spacing:inherit; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">Workbook</button>
              <span>/</span>
              <span style="color: var(--text-main);">${isCompletedScreen ? 'Hasil Latihan' : `Soal ${currentIndex + 1}`}</span>
            </div>

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
              <div class="mobile-chip ${isCompletedScreen ? 'active' : ''}" id="btn-mobile-chip-complete" style="width:auto; padding:0 12px; border-radius:18px;">
                <i data-lucide="award" style="width:14px;height:14px;margin-right:4px;"></i>
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

  // Helper to render active question card HTML
  function renderQuestionHTML(item, index, total) {
    const isChecked = item.status !== 'unattempted';
    const isCorrect = item.status === 'correct';
    const revealAnswer = item.revealAnswer;

    return `
      <!-- Question Info Row -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Latihan Menulis ${index + 1} dari ${total}</span>
        <button id="btn-back-to-overview-link" style="background:none; border:none; padding:0; color:var(--text-muted); font-size:0.75rem; font-weight:700; text-transform:uppercase; cursor:pointer;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">
          <i data-lucide="list" style="width:12px;height:12px;display:inline-block;vertical-align:middle;margin-right:2px;"></i> Lihat Semua Soal
        </button>
      </div>

      <!-- Question Card -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 24px;">
        
        <!-- Instruction -->
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 18px; border-left: 2px solid var(--text-main); padding-left: 12px; line-height: 1.5;">
          ${item.instruction}
        </div>

        <!-- Pattern Tag -->
        <div style="margin-bottom: 24px;">
          <span style="font-size: 0.75rem; font-weight: 700; font-family: monospace; background: var(--bg-elevated); border: 1px solid var(--border); padding: 4px 8px; border-radius: var(--radius-sm); color: var(--text-main);">
            Pola: ${item.pattern}
          </span>
        </div>

        <!-- The Cues -->
        <div style="margin-bottom: 32px; text-align: center; padding: 24px; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-md);">
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Petunjuk Kata</div>
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--text-main); letter-spacing: -0.01em;">
            ${item.question}
          </div>
        </div>

        <!-- Input Area -->
        <div style="margin-bottom: 24px;">
          <label for="wb-user-input" style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Ketikan Kalimat Lengkap Anda (Hiragana/Kanji):</label>
          <input type="text" id="wb-user-input" placeholder="Ketik kalimat lengkap di sini..." autocomplete="off" 
            style="width: 100%; padding: 14px 18px; font-size: 1.1rem; border-radius: var(--radius-md); border: 1px solid var(--border-accent); background: var(--bg-elevated); color: var(--text-main); font-family: inherit; transition: all 0.2s;"
            value="${item.userAnswer || ''}"
            ${isChecked ? 'disabled' : ''} />
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; gap: 12px; justify-content: space-between; align-items:center; flex-wrap:wrap;">
          
          <!-- Prev / Next Card shortcuts -->
          <div style="display:flex; gap:8px;">
            <button id="btn-prev-quest" class="filter-tab-btn" style="padding: 10px 14px;" ${index === 0 ? 'disabled style="opacity: 0.3; cursor: default;"' : ''}>
              <i data-lucide="chevron-left" style="width:16px;height:16px;"></i>
            </button>
            <button id="btn-next-quest" class="filter-tab-btn" style="padding: 10px 14px;" ${index === total - 1 ? 'disabled style="opacity: 0.3; cursor: default;"' : ''}>
              <i data-lucide="chevron-right" style="width:16px;height:16px;"></i>
            </button>
          </div>

          <div style="display: flex; gap: 12px;">
            ${!isChecked ? `
              <button id="btn-check" style="background: var(--text-main); color: var(--bg-main); border: none; padding: 12px 28px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                Periksa Jawaban
              </button>
            ` : `
              ${!isCorrect && !revealAnswer ? `
                <button id="btn-reveal" style="background: transparent; color: var(--text-main); border: 1px solid var(--text-main); padding: 12px 20px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
                  Lihat Kunci Jawaban
                </button>
                <button id="btn-retry" style="background: transparent; color: var(--text-muted); border: 1px solid var(--border); padding: 12px 20px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;" onmouseover="this.style.borderColor='var(--text-muted)'; this.style.color='var(--text-main)'" onmouseout="this.style.borderColor='var(--border)'; this.style.color='var(--text-muted)'">
                  <i data-lucide="refresh-cw" style="width:14px;height:14px;display:inline-block;vertical-align:middle;margin-right:4px;"></i> Coba Lagi
                </button>
              ` : ''}
              
              ${!isCorrect && revealAnswer ? `
                <button id="btn-retry" style="background: transparent; color: var(--text-muted); border: 1px solid var(--border); padding: 12px 20px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;" onmouseover="this.style.borderColor='var(--text-muted)'; this.style.color='var(--text-main)'" onmouseout="this.style.borderColor='var(--border)'; this.style.color='var(--text-muted)'">
                  <i data-lucide="refresh-cw" style="width:14px;height:14px;display:inline-block;vertical-align:middle;margin-right:4px;"></i> Ulangi Soal
                </button>
              ` : ''}

              <button id="btn-next" style="background: var(--text-main); color: var(--bg-main); border: none; padding: 12px 28px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                ${index + 1 === total ? 'Selesaikan Latihan' : 'Soal Selanjutnya'}
              </button>
            `}
          </div>
        </div>

      </div>

      <!-- Result Feedback Card -->
      ${isChecked ? `
        <div class="fade-in" style="background: var(--bg-card); border: 1px solid ${isCorrect ? 'var(--border-accent)' : 'var(--text-muted)'}; border-radius: var(--radius-lg); padding: 24px; margin-bottom: 24px;">
          <div style="display: flex; align-items: flex-start; gap: 16px;">
            <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); border: 1px solid ${isCorrect ? 'var(--text-main)' : 'var(--text-muted)'}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; background: ${isCorrect ? 'var(--bg-elevated)' : 'transparent'};">
              <i data-lucide="${isCorrect ? 'check' : 'x'}" style="width: 18px; height: 18px; color: var(--text-main);"></i>
            </div>
            <div style="flex-grow: 1;">
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">
                ${isCorrect ? 'Luar Biasa! Jawaban Anda Tepat.' : revealAnswer ? 'Kunci Jawaban Buku Cetak' : 'Kurang Tepat. Ketikan Anda mengandung ketidakcocokan partikel atau ejaan.'}
              </h4>
              
              ${(isCorrect || revealAnswer) ? `
                <div style="margin-top: 16px; padding: 16px; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-md);">
                  <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Jawaban Buku Cetak</div>
                  <div style="font-size: 1.35rem; font-weight: 900; color: var(--text-main); margin-bottom: 8px; letter-spacing: -0.01em;">
                    ${item.correct}
                  </div>
                  <div style="font-size: 0.85rem; font-family: monospace; color: var(--text-secondary); margin-bottom: 8px;">
                    ${item.romaji}
                  </div>
                  <div style="font-size: 0.85rem; color: var(--text-muted); border-top: 1px dashed var(--border); padding-top: 8px; margin-top: 8px;">
                    = "${item.translation}"
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }

  // Helper to render completion screen HTML
  function renderCompletionHTML(correctCount, totalQuestions) {
    const accuracy = Math.round((correctCount / totalQuestions) * 100) || 0;
    
    // Check if we should reward XP (only first time completing in session, verified via persistent xpAwarded flag)
    let xpStatusHTML = '';
    if (!xpAwarded) {
      xpAwarded = true;
      saveProgress();
      addXP(30);
      xpStatusHTML = `
        <div style="display:inline-flex; align-items:center; gap:6px; background:var(--accent-dim); border:1px solid var(--border-accent); padding:6px 16px; border-radius:99px; font-size:0.85rem; font-weight:800; color:var(--text-main); margin-top:16px;">
          <i data-lucide="star" style="width:14px; height:14px; fill:currentColor;"></i>
          +30 XP Diperoleh!
        </div>
      `;
    } else {
      xpStatusHTML = `
        <div style="display:inline-flex; align-items:center; gap:6px; background:var(--bg-elevated); border:1px solid var(--border); padding:6px 16px; border-radius:var(--radius-sm); font-size:0.85rem; font-weight:700; color:var(--text-muted); margin-top:16px;">
          <i data-lucide="check" style="width:14px; height:14px;"></i>
          Latihan Selesai
        </div>
      `;
    }

    const hasIncorrect = questionsState.some(q => q.status === 'incorrect');

    return `
      <div class="fade-in" style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-lg); padding: 48px 32px; text-align: center;">
        <div style="width: 80px; height: 80px; border-radius: var(--radius-sm); border: 2px solid var(--text-main); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; background: var(--bg-elevated);">
          <i data-lucide="award" style="width: 40px; height: 40px; color: var(--text-main);"></i>
        </div>
        
        <h2 style="font-size: 2rem; font-weight: 900; color: var(--text-main); margin-bottom: 8px; letter-spacing: -0.03em;">Latihan Menulis Selesai</h2>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; max-width: 450px; margin: 0 auto 24px;">
          Selamat! Anda telah mengulas latihan pola kalimat <em>Kaite Oboeru</em> untuk <strong>Bab ${chapter.id}</strong>.
        </p>

        <!-- Stats grid -->
        <div style="display:flex; justify-content:center; gap:24px; margin-bottom:24px; max-width:320px; margin-left:auto; margin-right:auto; border-top:1px solid var(--border); border-bottom:1px solid var(--border); padding:16px 0;">
          <div style="flex:1;">
            <div style="font-size:1.5rem; font-weight:900; color:var(--text-main);">${correctCount}/${totalQuestions}</div>
            <div style="font-size:0.7rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Benar</div>
          </div>
          <div style="width:1px; background:var(--border);"></div>
          <div style="flex:1;">
            <div style="font-size:1.5rem; font-weight:900; color:var(--text-main);">${accuracy}%</div>
            <div style="font-size:0.7rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Akurasi</div>
          </div>
        </div>

        ${xpStatusHTML}

        ${hasIncorrect ? `
          <div style="margin: 24px auto 32px; max-width: 420px; padding: 14px 18px; border: 1px dashed var(--border); border-radius: var(--radius-md); background: var(--bg-elevated); font-size: 0.8rem; color: var(--text-secondary); line-height: 1.45; text-align: left;">
            <i data-lucide="help-circle" style="width: 14px; height: 14px; display:inline-block; vertical-align:middle; margin-right:4px; color:var(--text-main);"></i>
            <strong>Tip Belajar:</strong> Terdapat soal yang belum terjawab benar. Anda dapat meninjau dan mengulang kembali soal tersebut secara mandiri dengan mengklik tombol latihan bertanda silang merah di sidebar kiri!
          </div>
        ` : `
          <div style="margin: 24px auto 32px; max-width: 420px; padding: 14px 18px; border: 1px solid var(--border-accent); border-radius: var(--radius-md); background: var(--accent-dim); font-size: 0.8rem; color: var(--text-main); line-height: 1.45; text-align: center; font-weight:700;">
            <i data-lucide="check" style="width: 14px; height: 14px; display:inline-block; vertical-align:middle; margin-right:4px;"></i>
            Sempurna! Semua soal diselesaikan dengan benar.
          </div>
        `}

        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          ${hasIncorrect ? `
            <button id="btn-retry-failed" style="background: transparent; color: var(--text-main); border: 1px solid var(--text-main); padding: 12px 24px; font-size: 0.88rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
              Ulangi Soal yang Salah
            </button>
          ` : ''}
          <button id="btn-back-chapter" style="background: transparent; color: var(--text-main); border: 1px solid var(--text-main); padding: 12px 24px; font-size: 0.88rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
            Kembali ke Bab ${chapter.id}
          </button>
          <button id="btn-start-exam" style="background: var(--text-main); color: var(--bg-main); border: none; padding: 12px 24px; font-size: 0.88rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
            Lanjutkan ke Ujian Bab
          </button>
          <button id="btn-back-curriculum" style="background: transparent; color: var(--text-main); border: 1px solid var(--text-main); padding: 12px 24px; font-size: 0.88rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
            Kembali ke Kurikulum
          </button>
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
