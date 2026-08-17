import { renderTopbar, showToast, renderLoader } from '../components/layout.js';
import { loadChapter } from '../data/chapter_index.js';
import { saveChapterExamResult } from '../store.js';
import { getUnitDetails } from '../data/curriculum.js';

export function ExamView(container, params) {
  const chapterId = parseInt(params.id);
  const unitDetails = getUnitDetails(chapterId);
  const backRoute = unitDetails ? `#/phase/${unitDetails.phaseId}` : `#/curriculum`;

  renderTopbar(`Mondaishuu — Bab ${chapterId}`, false, backRoute);

  renderLoader(container, `Memuat Ujian Bab ${chapterId}...`);

  loadChapter(chapterId).then(chapter => {
    if (!chapter) {
      container.innerHTML = `<div style="padding:40px;text-align:center;">Bab tidak ditemukan.</div>`;
      return;
    }
    _initExamView(container, params, chapter, chapterId);
  }).catch(err => {
    container.innerHTML = `<div style="padding:40px;text-align:center;color:var(--red);">Gagal memuat ujian: ${err.message}</div>`;
  });
}

function _initExamView(container, params, chapter, chapterId) {
  const unitDetails = getUnitDetails(chapterId);
  let backTrack = 'all';
  if (chapterId === 0) {
    backTrack = 'pra-mnn';
  } else if (chapterId >= 1 && chapterId <= 25) {
    backTrack = 'minna1';
  } else if (chapterId >= 26 && chapterId <= 50) {
    backTrack = 'minna2';
  }

  // Check if this chapter actually has the structured exam data populated
  const hasExam = chapter.exam && 
                  Array.isArray(chapter.exam.part1) && chapter.exam.part1.length > 0 &&
                  Array.isArray(chapter.exam.part2) && chapter.exam.part2.length > 0 &&
                  chapter.exam.part3 && 
                  Array.isArray(chapter.exam.part3.questions) && chapter.exam.part3.questions.length > 0;

  if (!hasExam) {
    container.innerHTML = `
      <div class="exam-wrapper page-container-standard fade-in">
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
          <span class="phase-nav-level">Bab ${chapterId} &middot; Ujian Evaluasi</span>
        </nav>
        
        <section class="hero-learning-card phase-hero-card">
          <div class="dash-track-badge n5" style="align-self: flex-start; margin-bottom: 4px;">MONDAISHUU &middot; BAB ${chapter.id}</div>
          <h1 class="hero-chapter-title" style="font-size: 1.35rem; margin: 0 0 4px 0;">Ujian Evaluasi Akhir</h1>
          <p class="hero-chapter-desc" style="margin: 0;">
            Modul ini mereplikasi <em>Mondaishuu</em> (Standard Workbook). Terdiri dari simulasi soal <em>Reading</em> (Dokkai), <em>Listening</em> (Choukai), dan Tata Bahasa dengan evaluasi berstandar.
          </p>
        </section>

        <div class="phase-card" style="padding: 36px 20px; text-align: center; border-style: dashed; align-items: center; justify-content: center;">
          <i data-lucide="award" style="width:40px;height:40px;color:var(--text-muted);margin-bottom:12px;"></i>
          <h3 style="font-size:1.1rem;font-weight:750;color:var(--text-main);margin-bottom:6px;">Bank Soal Sedang Disusun</h3>
          <p style="color:var(--text-secondary);font-size:0.85rem;max-width:440px;margin:0 auto;line-height:1.5;">
            Data soal ujian (Mondaishuu) untuk bab ini sedang dalam proses standardisasi referensi buku cetak.
          </p>
        </div>
      </div>
    `;
    if (window.lucide) lucide.createIcons({ root: container });
    return;
  }

  // State Management
  let currentStep = 0; // 0 = Landing, 1 = Part 1, 2 = Part 2, 3 = Part 3, 4 = Grading/Result
  let userAnswers = {}; // Maps question ID to answer string

  function cleanString(str) {
    if (!str) return '';
    return str.replace(/[\s\.\,。、\?\？\！\!]/g, '').trim().toLowerCase();
  }

  function renderProgressBar(activeStep) {
    const steps = [
      { num: 1, name: 'Partikel' },
      { num: 2, name: 'Profil' },
      { num: 3, name: 'Dokkai' }
    ];

    return `
      <!-- Breadcrumb Navigation -->
      <nav class="phase-hero-nav" aria-label="Breadcrumb" style="margin-bottom: 2px;">
        <a href="#/curriculum?track=${backTrack}" class="phase-nav-back">
          <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Kurikulum
        </a>
        ${unitDetails ? `
          <span class="phase-nav-sep">/</span>
          <a href="#/phase/${unitDetails.phaseId}" class="phase-nav-back">${unitDetails.phaseTitle.includes(':') ? unitDetails.phaseTitle.split(':')[0].trim() : unitDetails.phaseTitle}</a>
        ` : ''}
        <span class="phase-nav-sep">/</span>
        <span class="phase-nav-level">Bab ${chapter.id} &middot; Ujian</span>
        <span class="phase-nav-sep">/</span>
        <span class="phase-nav-level">Bagian ${activeStep}</span>
      </nav>

      <!-- Steps Indicator -->
      <div class="exam-step-track">
        ${steps.map(s => {
          const isDone = s.num < activeStep;
          const isActive = s.num === activeStep;
          return `
            <div class="exam-step-item ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''}">
              <div class="exam-step-badge">
                ${isDone ? '<i data-lucide="check" style="width:11px;height:11px;"></i>' : s.num}
              </div>
              <span>${s.name}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function renderLanding() {
    let html = `
      <div class="exam-wrapper page-container-standard fade-in">
        
        <!-- Dashboard Standard Hero Card -->
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
            <span class="phase-nav-level">Bab ${chapter.id} &middot; Ujian Evaluasi</span>
          </nav>

          <div class="hero-main-content">
            <div class="dash-track-badge n5" style="align-self: flex-start; margin-bottom: 4px;">MONDAISHUU &middot; BAB ${chapter.id}</div>
            <h1 class="hero-chapter-title" style="font-size: 1.35rem; margin: 0 0 4px 0;">Ujian Evaluasi Bab</h1>
            <p class="hero-chapter-desc" style="margin: 0;">
              Uji pemahaman mendalam terhadap tata bahasa, partikel, profil karakter, dan pemahaman bacaan Bab ${chapter.id} secara komprehensif.
            </p>
          </div>

          <!-- Section Breakdown Cards (3 Columns) -->
          <div class="exam-preview-grid">
            <div class="exam-preview-item">
              <span class="exam-preview-tag">Bagian 1</span>
              <span class="exam-preview-title">Isian Partikel</span>
              <span class="exam-preview-desc">5 Soal Isian Kalimat</span>
            </div>
            <div class="exam-preview-item">
              <span class="exam-preview-tag">Bagian 2</span>
              <span class="exam-preview-title">Profil Karakter</span>
              <span class="exam-preview-desc">3 Soal Pilihan Ganda</span>
            </div>
            <div class="exam-preview-item">
              <span class="exam-preview-tag">Bagian 3</span>
              <span class="exam-preview-title">Membaca (Dokkai)</span>
              <span class="exam-preview-desc">3 Soal Benar / Salah</span>
            </div>
          </div>

          <!-- Action Button Dock -->
          <div class="hero-actions-bar" style="margin-top: 4px; padding-top: 10px;">
            <button id="btn-start-exam" class="btn btn-primary hero-cta-btn" style="width: 100%; justify-content: center;">
              <i data-lucide="play" style="width: 14px; height: 14px; fill: currentColor;"></i>
              Mulai Ujian Evaluasi
            </button>
          </div>
        </section>

      </div>
    `;
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: container });

    container.querySelector('#btn-start-exam').addEventListener('click', () => {
      currentStep = 1;
      renderStep();
    });
  }

  function renderPart1() {
    const part = chapter.exam.part1;
    let html = `
      <div class="exam-wrapper page-container-standard fade-in">
        
        <!-- Step Indicator -->
        ${renderProgressBar(1)}

        <div class="exam-section-card">
          <div>
            <div class="phase-badge-group" style="margin-bottom: 6px;">
              <span class="hero-pill-badge">Bagian 1</span>
              <span class="phase-topic-tag">Pengisian Partikel</span>
            </div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin: 0 0 4px 0;">Lengkapi Kalimat</h2>
            <p style="color: var(--text-secondary); font-size: 13px; margin: 0; line-height: 1.5;">
              Ketikkan partikel penanda (misal: は, も, の) atau kata tanya yang tepat di dalam kolom input yang tersedia di setiap kalimat.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${part.map((item, idx) => {
              const currentVal = userAnswers[item.id] || '';
              const parts = item.sentence.split(/\[\s*\]/);
              let sentenceHtml = '';
              if (parts.length === 2) {
                sentenceHtml = `
                  <span style="font-family: var(--font-jp); font-size: 1.15rem; font-weight: 700; color: var(--text-main); line-height: 1.8;">
                    ${parts[0]}
                    <input type="text" class="part1-input" data-id="${item.id}" value="${currentVal}" placeholder="?" autocomplete="off" />
                    ${parts[1]}
                  </span>
                `;
              } else {
                sentenceHtml = `
                  <span style="font-family: var(--font-jp); font-size: 1.15rem; font-weight: 700; color: var(--text-main); line-height: 1.8;">
                    ${item.sentence}
                  </span>
                `;
              }

              return `
                <div class="phase-card" style="padding: 14px 16px; gap: 8px;">
                  <div class="phase-card-top-bar" style="margin-bottom: 2px;">
                    <span class="hero-pill-badge">Soal ${idx + 1}</span>
                    <span class="phase-badge-status ${currentVal ? 'active' : ''}">
                      ${currentVal ? 'Terisi' : 'Belum Diisi'}
                    </span>
                  </div>
                  <div>
                    ${sentenceHtml}
                  </div>
                  <div style="font-size: 12px; color: var(--text-muted); font-style: italic; border-top: 1px dashed var(--border); padding-top: 6px; margin-top: 4px;">
                    = "${item.translation}"
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Bottom Actions -->
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px; padding-top: 4px;">
            <button id="btn-prev-landing" class="btn btn-secondary" style="font-size: 13px;">
              Batal
            </button>
            <button id="btn-goto-part2" class="btn btn-primary" style="font-size: 13px;">
              Lanjut ke Bagian 2 &rarr;
            </button>
          </div>

        </div>
      </div>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: container });

    const inputs = container.querySelectorAll('.part1-input');
    if (inputs.length > 0) {
      inputs[0].focus();
    }

    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const id = input.dataset.id;
        userAnswers[id] = e.target.value;
        if (e.target.value.length >= 3 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          } else {
            document.getElementById('btn-goto-part2').click();
          }
        }
      });
    });

    container.querySelector('#btn-prev-landing').addEventListener('click', () => {
      currentStep = 0;
      renderStep();
    });

    container.querySelector('#btn-goto-part2').addEventListener('click', () => {
      inputs.forEach(input => {
        userAnswers[input.dataset.id] = input.value;
      });
      currentStep = 2;
      renderStep();
    });
  }

  function renderPart2() {
    const part = chapter.exam.part2;
    let html = `
      <div class="exam-wrapper page-container-standard fade-in">
        
        <!-- Step Indicator -->
        ${renderProgressBar(2)}

        <div class="exam-section-card">
          <div>
            <div class="phase-badge-group" style="margin-bottom: 6px;">
              <span class="hero-pill-badge">Bagian 2</span>
              <span class="phase-topic-tag">Evaluasi Karakter</span>
            </div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin: 0 0 4px 0;">Pilihan Ganda Profil</h2>
            <p style="color: var(--text-secondary); font-size: 13px; margin: 0; line-height: 1.5;">
              Pilihlah opsi tata bahasa yang paling tepat untuk melengkapi kalimat penjelas profil karakter sesuai dengan fakta buku teks Minna no Nihongo.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${part.map((item, idx) => {
              const selectedAns = userAnswers[item.id] || '';
              return `
                <div class="phase-card" style="padding: 14px 16px; gap: 10px;">
                  <div class="phase-card-top-bar" style="margin-bottom: 2px;">
                    <span class="hero-pill-badge">Soal ${idx + 1}</span>
                    <span class="phase-badge-status ${selectedAns ? 'active' : ''}">
                      ${selectedAns ? 'Terpilih' : 'Belum Memilih'}
                    </span>
                  </div>
                  
                  <div style="font-family: var(--font-jp); font-size: 1.1rem; font-weight: 700; color: var(--text-main); line-height: 1.6; white-space: pre-line;">
                    ${item.question}
                  </div>

                  <div style="display: flex; flex-direction: column; gap: 8px;">
                    ${item.options.map((opt) => {
                      const isSelected = selectedAns === opt.text;
                      return `
                        <button class="exam-opt-btn ${isSelected ? 'is-selected' : ''}" data-id="${item.id}" data-text="${opt.text}">
                          <span>${opt.text}</span>
                          ${isSelected ? `<i data-lucide="check" style="width:14px;height:14px;"></i>` : ''}
                        </button>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Bottom Actions -->
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px; padding-top: 4px;">
            <button id="btn-prev-part1" class="btn btn-secondary" style="font-size: 13px;">
              &larr; Kembali ke Bagian 1
            </button>
            <button id="btn-goto-part3" class="btn btn-primary" style="font-size: 13px;">
              Lanjut ke Bagian 3 &rarr;
            </button>
          </div>

        </div>
      </div>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: container });

    container.querySelectorAll('.exam-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const text = btn.dataset.text;
        userAnswers[id] = text;
        renderPart2();
      });
    });

    container.querySelector('#btn-prev-part1').addEventListener('click', () => {
      currentStep = 1;
      renderStep();
    });

    container.querySelector('#btn-goto-part3').addEventListener('click', () => {
      currentStep = 3;
      renderStep();
    });
  }

  function renderPart3() {
    const part = chapter.exam.part3;
    let html = `
      <div class="exam-wrapper page-container-standard fade-in">
        
        <!-- Step Indicator -->
        ${renderProgressBar(3)}

        <div class="exam-section-card">
          <div>
            <div class="phase-badge-group" style="margin-bottom: 6px;">
              <span class="hero-pill-badge">Bagian 3</span>
              <span class="phase-topic-tag">Pemahaman Bacaan</span>
            </div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin: 0 0 4px 0;">Membaca (Dokkai)</h2>
            <p style="color: var(--text-secondary); font-size: 13px; margin: 0; line-height: 1.5;">
              Bacalah paragraf bahasa Jepang di bawah ini dengan saksama. Kemudian tentukan apakah setiap pernyataan di bawahnya BENAR (T) atau SALAH (F).
            </p>
          </div>

          <!-- Reading Passage Box -->
          <div class="exam-passage-box">
            ${part.text}
          </div>

          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${part.questions.map((item, idx) => {
              const selectedAns = userAnswers[item.id] || ''; // 'T' or 'F'
              const isTSelected = selectedAns === 'T';
              const isFSelected = selectedAns === 'F';

              return `
                <div class="phase-card" style="padding: 14px 16px; gap: 10px;">
                  <div class="phase-card-top-bar" style="margin-bottom: 2px;">
                    <span class="hero-pill-badge">Pernyataan ${idx + 1}</span>
                    <span class="phase-badge-status ${selectedAns ? 'active' : ''}">
                      ${selectedAns ? (selectedAns === 'T' ? 'Memilih Benar' : 'Memilih Salah') : 'Belum Memilih'}
                    </span>
                  </div>

                  <div style="font-family: var(--font-jp); font-size: 1.1rem; font-weight: 700; color: var(--text-main); line-height: 1.6;">
                    ${item.question}
                  </div>

                  <!-- Binary choices -->
                  <div class="exam-binary-group">
                    <button class="exam-binary-btn ${isTSelected ? 'is-selected' : ''}" data-id="${item.id}" data-val="T">
                      <i data-lucide="${isTSelected ? 'check-circle' : 'circle'}" style="width: 13px; height: 13px;"></i>
                      正しい (T / Benar)
                    </button>
                    <button class="exam-binary-btn ${isFSelected ? 'is-selected' : ''}" data-id="${item.id}" data-val="F">
                      <i data-lucide="${isFSelected ? 'x-circle' : 'circle'}" style="width: 13px; height: 13px;"></i>
                      正しくない (F / Salah)
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Bottom Actions -->
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px; padding-top: 4px;">
            <button id="btn-prev-part2" class="btn btn-secondary" style="font-size: 13px;">
              &larr; Kembali ke Bagian 2
            </button>
            <button id="btn-submit-exam" class="btn btn-primary" style="font-size: 13px; font-weight: 800;">
              <i data-lucide="award" style="width: 14px; height: 14px;"></i>
              Serahkan Ujian
            </button>
          </div>

        </div>
      </div>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: container });

    container.querySelectorAll('.exam-binary-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const val = btn.dataset.val;
        userAnswers[id] = val;
        renderPart3();
      });
    });

    container.querySelector('#btn-prev-part2').addEventListener('click', () => {
      currentStep = 2;
      renderStep();
    });

    container.querySelector('#btn-submit-exam').addEventListener('click', () => {
      const part1Ids = chapter.exam.part1.map(q => q.id);
      const part2Ids = chapter.exam.part2.map(q => q.id);
      const part3Ids = chapter.exam.part3.questions.map(q => q.id);
      const allIds = [...part1Ids, ...part2Ids, ...part3Ids];

      const unansweredCount = allIds.filter(id => !userAnswers[id] || userAnswers[id].trim() === '').length;
      if (unansweredCount > 0) {
        if (confirm(`Anda menyisakan ${unansweredCount} soal yang belum dijawab. Apakah Anda yakin ingin mengumpulkan ujian sekarang?`)) {
          currentStep = 4;
          renderStep();
        }
      } else {
        currentStep = 4;
        renderStep();
      }
    });
  }

  function renderGrading() {
    const part1 = chapter.exam.part1;
    const part2 = chapter.exam.part2;
    const part3 = chapter.exam.part3.questions;

    let scoreDetails = [];
    let correctCount = 0;

    const equivalents = {
      "ex1-1": ["は", "wa", "ha"],
      "ex1-2": ["も", "mo"],
      "ex1-3": ["の", "no"],
      "ex1-4": ["どなた", "donata"],
      "ex1-5": ["は", "wa", "ha"]
    };

    // Part 1 Check
    part1.forEach(item => {
      const userVal = (userAnswers[item.id] || '').trim().toLowerCase();
      const targetVal = item.correct.trim().toLowerCase();
      
      let isCorrect = false;
      const cleanUser = cleanString(userVal);
      const cleanTarget = cleanString(targetVal);

      if (equivalents[item.id]) {
        isCorrect = equivalents[item.id].some(eq => cleanString(eq) === cleanUser);
      } else {
        isCorrect = (cleanUser === cleanTarget);
      }

      if (isCorrect) correctCount++;

      scoreDetails.push({
        id: item.id,
        part: 1,
        questionText: item.sentence.replace('[ ]', `[ ${userVal || '...'} ]`),
        userAnswer: userVal || '(Kosong)',
        correctAnswer: item.correct,
        isCorrect: isCorrect,
        explanation: `Partikel yang benar adalah <strong>${item.correct}</strong>. (${item.translation})`
      });
    });

    // Part 2 Check
    part2.forEach(item => {
      const userVal = userAnswers[item.id] || '';
      const correctOpt = item.options.find(o => o.correct);
      const targetVal = correctOpt ? correctOpt.text : '';

      const isCorrect = (userVal === targetVal);
      if (isCorrect) correctCount++;

      scoreDetails.push({
        id: item.id,
        part: 2,
        questionText: item.question.replace('[ ]', `[ ${userVal || '...'} ]`),
        userAnswer: userVal || '(Kosong)',
        correctAnswer: targetVal,
        isCorrect: isCorrect,
        explanation: `Pilihan yang tepat berdasarkan profil buku teks adalah <strong>${targetVal}</strong>.`
      });
    });

    // Part 3 Check
    part3.forEach(item => {
      const userVal = userAnswers[item.id] || '';
      const targetVal = item.correct; // 'T' or 'F'

      const isCorrect = (userVal === targetVal);
      if (isCorrect) correctCount++;

      const valLabel = val => val === 'T' ? 'T (Benar)' : val === 'F' ? 'F (Salah)' : '(Kosong)';

      scoreDetails.push({
        id: item.id,
        part: 3,
        questionText: item.question,
        userAnswer: valLabel(userVal),
        correctAnswer: valLabel(targetVal),
        isCorrect: isCorrect,
        explanation: `Pernyataan ini <strong>${targetVal === 'T' ? 'sesuai' : 'tidak sesuai'}</strong> dengan paragraf perkenalan diri.`
      });
    });

    const totalQuestions = part1.length + part2.length + part3.length;
    const finalScore = Math.round((correctCount / totalQuestions) * 100);
    const passed = finalScore >= 80;

    // Persist chapter exam results and award XP
    saveChapterExamResult(chapter.id, finalScore, passed);

    let html = `
      <div class="exam-wrapper page-container-standard fade-in">
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
          <span class="phase-nav-level">Bab ${chapter.id} &middot; Hasil Ujian</span>
        </nav>

        <!-- Score Card Banner (Dashboard Trophy DNA) -->
        <section class="hero-learning-card phase-hero-card" style="text-align: center; align-items: center;">
          
          <div style="width: 56px; height: 56px; border-radius: 50%; background: ${passed ? 'rgba(22, 163, 74, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border: 1.5px solid ${passed ? 'var(--green)' : 'var(--red)'}; display: flex; align-items: center; justify-content: center; margin: 4px auto 8px;">
            <i data-lucide="${passed ? 'award' : 'alert-circle'}" style="width: 28px; height: 28px; color: ${passed ? 'var(--green)' : 'var(--red)'};"></i>
          </div>

          <span class="hero-pill-badge" style="background: ${passed ? 'rgba(22, 163, 74, 0.12)' : 'rgba(239, 68, 68, 0.12)'}; color: ${passed ? 'var(--green)' : 'var(--red)'}; border-color: transparent;">
            ${passed ? 'LULUS (PASSED &ge;80%)' : 'BELUM LULUS (TRY AGAIN)'}
          </span>

          <div style="font-size: 3.6rem; font-weight: 900; line-height: 1; color: var(--text-main); letter-spacing: -0.04em; margin: 8px 0; font-variant-numeric: tabular-nums;">
            ${finalScore}%
          </div>

          <p class="hero-chapter-desc" style="max-width: 480px; margin: 0 auto;">
            ${passed 
              ? `Luar biasa! Anda menguasai tata bahasa dan Mondaishuu Bab ${chapter.id} dengan sangat akurat.` 
              : `Skor kelulusan minimal adalah 80%. Ulas kembali kunci jawaban di bawah dan ulangi ujian untuk mengasah kemampuan.`}
          </p>

          <!-- Progress bar -->
          <div class="dash-track-progress" style="width: 100%; max-width: 400px; margin-top: 8px;">
            <div class="dash-track-prog-meta">
              <span>Akurasi Soal</span>
              <span><strong>${correctCount}</strong>/${totalQuestions} Soal Benar</span>
            </div>
            <div class="dash-track-prog-bar">
              <div class="dash-track-prog-fill" style="width: ${finalScore}%; background: ${passed ? 'var(--green)' : 'var(--red)'};"></div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="hero-actions-bar" style="width: 100%; justify-content: center; gap: 8px; flex-wrap: wrap; margin-top: 10px; padding-top: 10px;">
            <button id="btn-retake-exam" class="btn btn-secondary" style="flex: 1; min-width: 140px; justify-content: center;">
              <i data-lucide="rotate-ccw" style="width: 13px; height: 13px;"></i>
              Ulangi Ujian
            </button>
            ${passed && chapter.id + 1 <= 50 ? `
              <button id="btn-next-chapter-grad" class="btn btn-primary" style="flex: 1.5; min-width: 180px; justify-content: center;">
                <i data-lucide="arrow-right" style="width: 13px; height: 13px;"></i>
                Lanjut ke Bab ${chapter.id + 1}
              </button>
            ` : ''}
            <button id="btn-back-curriculum-grad" class="btn btn-secondary" style="flex: 1; min-width: 140px; justify-content: center;">
              Peta Kurikulum
            </button>
          </div>
        </section>

        <!-- Detailed Review Section -->
        <div class="phase-roadmap-header">
          <div class="phase-roadmap-title-row">
            <span class="phase-roadmap-section-title">Lembar Koreksi &amp; Ulasan</span>
            <span class="phase-roadmap-section-meta">${correctCount}/${totalQuestions} Benar</span>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${scoreDetails.map((item, idx) => {
            return `
              <div class="phase-card ${item.isCorrect ? 'is-completed' : ''}" style="padding: 14px 16px; border-left: 3.5px solid ${item.isCorrect ? 'var(--green)' : 'var(--red)'};">
                <div class="phase-card-top-bar" style="margin-bottom: 2px;">
                  <span class="hero-pill-badge">Bagian ${item.part} &middot; Soal ${idx + 1}</span>
                  <span class="phase-badge-status ${item.isCorrect ? 'done' : 'active'}" style="color: ${item.isCorrect ? 'var(--green)' : 'var(--red)'}; border-color: ${item.isCorrect ? 'rgba(22,163,74,0.2)' : 'rgba(239,68,68,0.2)'};">
                    <i data-lucide="${item.isCorrect ? 'check' : 'x'}" style="width: 11px; height: 11px;"></i>
                    ${item.isCorrect ? 'Benar' : 'Salah'}
                  </span>
                </div>

                <div style="font-family: var(--font-jp); font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin: 2px 0 6px 0; line-height: 1.6; word-break: break-all;">
                  ${item.questionText}
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 6px; font-size: 12px; border-top: 1px dashed var(--border); padding-top: 8px;">
                  <div>
                    <div style="color: var(--text-muted); font-size: 10px; font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Jawaban Anda</div>
                    <div style="font-weight: 700; color: ${item.isCorrect ? 'var(--text-main)' : 'var(--red)'}; font-family: var(--font-jp); text-decoration: ${item.isCorrect ? 'none' : 'line-through'};">
                      ${item.userAnswer}
                    </div>
                  </div>
                  <div>
                    <div style="color: var(--text-muted); font-size: 10px; font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Kunci Jawaban</div>
                    <div style="font-weight: 700; color: var(--green); font-family: var(--font-jp);">
                      ${item.correctAnswer}
                    </div>
                  </div>
                </div>

                <div style="font-size: 12px; color: var(--text-secondary); background: var(--bg-elevated); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border); line-height: 1.5;">
                  ${item.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>

      </div>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: container });

    container.querySelector('#btn-retake-exam').addEventListener('click', () => {
      userAnswers = {};
      currentStep = 0;
      renderStep();
    });

    container.querySelector('#btn-back-curriculum-grad').addEventListener('click', () => {
      window.location.hash = '#/curriculum';
    });

    if (passed && chapter.id + 1 <= 50) {
      container.querySelector('#btn-next-chapter-grad')?.addEventListener('click', () => {
        window.location.hash = `#/chapter/${chapter.id + 1}`;
      });
    }
  }

  function renderStep() {
    const pageContent = document.querySelector('.page-content');
    if (pageContent) pageContent.scrollTop = 0;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    if (container) container.scrollIntoView({ behavior: 'auto', block: 'start' });

    if (currentStep === 0) {
      renderLanding();
    } else if (currentStep === 1) {
      renderPart1();
    } else if (currentStep === 2) {
      renderPart2();
    } else if (currentStep === 3) {
      renderPart3();
    } else if (currentStep === 4) {
      renderGrading();
    }
  }

  // Initial Step Render
  renderStep();
}
