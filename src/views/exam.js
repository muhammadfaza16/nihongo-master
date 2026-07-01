import { renderTopbar, showToast, renderLoader } from '../components/layout.js';
import { loadChapter } from '../data/chapter_index.js';
import { saveChapterExamResult } from '../store.js';

export function ExamView(container, params) {
  const chapterId = parseInt(params.id);

  renderTopbar(`Mondaishuu — Bab ${chapterId}`, false, `#/chapter/${chapterId}`);

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
          <span style="color: var(--text-main);">Ujian</span>
        </div>
        
        <div style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 32px; text-align: center;">
          <div style="margin-bottom: 16px;">
            <span style="background: transparent; color: var(--text-main); border: 1px solid var(--text-main); padding: 4px 12px; border-radius: 99px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Exam Mode</span>
          </div>
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">Ujian Akhir: Bab ${chapter.id}</h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
            Modul ini mereplikasi <em>Mondaishuu</em> (Standard Workbook). Terdiri dari simulasi soal <em>Reading</em> (Dokkai), <em>Listening</em> (Choukai), dan Tata Bahasa dengan batas waktu.
          </p>
        </div>

        <div class="bento-card" style="padding: 40px; text-align: center; border: 1px dashed var(--border-accent);">
          <i data-lucide="award" style="width:48px;height:48px;color:var(--text-faint);margin-bottom:16px;"></i>
          <h3 style="font-size:1.2rem;color:var(--text-main);margin-bottom:8px;">Bank Soal Sedang Disusun</h3>
          <p style="color:var(--text-muted);font-size:0.9rem;">
            Data soal ujian (Mondaishuu) untuk bab ini sedang dalam proses ekstraksi dari referensi PDF. Siapkan diri Anda!
          </p>
        </div>
        
      </div>
    `;
    if (window.lucide) lucide.createIcons({ root: container });
    return;
  }

  // State Management
  let currentStep = 0; // 0 = Landing, 1 = Part 1, 2 = Part 2, 3 = Part 3, 4 = Grading/Result
  let userAnswers = {}; // Maps question ID to answer string ('は', 'T', OptionText, etc.)

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
      <!-- Steps Indicator -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; background: var(--bg-card); border: 1px solid var(--border); padding: 12px 20px; border-radius: var(--radius-md);">
        <div style="display: flex; align-items: center; gap: 16px; width: 100%;">
          ${steps.map(s => {
            const isDone = s.num < activeStep;
            const isActive = s.num === activeStep;
            return `
              <div style="display: flex; align-items: center; gap: 8px; flex: 1; justify-content: center; opacity: ${isActive || isDone ? '1' : '0.4'};">
                <div style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid ${isActive || isDone ? 'var(--text-main)' : 'var(--border)'}; background: ${isDone ? 'var(--text-main)' : 'transparent'}; color: ${isDone ? 'var(--bg-main)' : 'var(--text-main)'}; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; font-variant-numeric: tabular-nums;">
                  ${isDone ? '<i data-lucide="check" style="width:12px;height:12px;color:var(--bg-main);"></i>' : s.num}
                </div>
                <span style="font-size: 0.85rem; font-weight: ${isActive ? '700' : '500'}; color: var(--text-main); white-space: nowrap;">
                  ${s.name}
                </span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  function renderLanding() {
    let html = `
      <div class="fade-in" style="max-width: 700px; margin: 0 auto; padding-bottom: 80px;">
        <!-- Breadcrumb Navigation -->
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">
          <a href="#/curriculum?track=${backTrack}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s; display: flex; align-items: center; gap: 6px;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">
            <i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i>
            Kurikulum
          </a>
          <span>/</span>
          <a href="#/chapter/${chapter.id}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">Bab ${chapter.id}</a>
          <span>/</span>
          <span style="color: var(--text-main);">Ujian</span>
        </div>

        <!-- Header Info -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-lg); padding: 40px; margin-bottom: 24px; text-align: center; box-shadow: var(--shadow-md);">
          <div style="margin-bottom: 16px;">
            <span style="background: transparent; color: var(--text-main); border: 1px solid var(--text-main); padding: 4px 12px; border-radius: 99px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Mondaishuu • Bab ${chapter.id}</span>
          </div>
          <h2 style="font-size: 2rem; font-weight: 800; color: var(--text-main); margin-bottom: 12px; letter-spacing: -0.02em;">Ujian Akhir (Mondaishuu)</h2>
          <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.6; max-width: 540px; margin: 0 auto 32px;">
            Uji pemahaman mendalam Anda terhadap tata bahasa, partikel, profil buku, dan pemahaman bacaan Bab ${chapter.id} secara komprehensif tanpa kompromi.
          </p>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 32px; text-align: left;">
            <div style="padding: 16px; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 4px;">Bagian 1</div>
              <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">Isian Partikel</div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">5 Soal Isian</div>
            </div>
            <div style="padding: 16px; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 4px;">Bagian 2</div>
              <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">Profil Karakter</div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">3 Soal Pilihan</div>
            </div>
            <div style="padding: 16px; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 4px;">Bagian 3</div>
              <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">Membaca (Dokkai)</div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">3 Soal Benar/Salah</div>
            </div>
          </div>

          <button id="btn-start-exam" style="width: 100%; max-width: 240px; background: var(--text-main); color: var(--bg-main); border: none; padding: 14px 36px; font-size: 1rem; font-weight: 800; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
            Mulai Ujian
          </button>
        </div>
        
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
      <div class="fade-in" style="max-width: 700px; margin: 0 auto; padding-bottom: 80px;">
        
        <!-- Progress Bar and Steps Indicator -->
        ${renderProgressBar(1)}

        <div style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 24px; box-shadow: var(--shadow-md);">
          <div style="margin-bottom: 24px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Bagian 1: Pengisian Partikel</span>
            <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-top: 4px;">Lengkapi Kalimat</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px; line-height: 1.5;">
              Ketikkan partikel penanda (misal: は, も, の) atau kata tanya yang tepat di dalam kolom input yang tersedia di setiap kalimat.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 24px; margin-bottom: 32px;">
            ${part.map((item, idx) => {
              const currentVal = userAnswers[item.id] || '';
              // Replace '[ ]' with an interactive input box in sentence
              const parts = item.sentence.split(/\[\s*\]/);
              let sentenceHtml = '';
              if (parts.length === 2) {
                sentenceHtml = `
                  <span style="font-family: var(--font-jp); font-size: 1.25rem; font-weight: 700; color: var(--text-main);">
                    ${parts[0]}
                    <input type="text" class="part1-input" data-id="${item.id}" value="${currentVal}" placeholder="?" autocomplete="off"
                      style="width: 65px; text-align: center; padding: 4px 8px; font-size: 1.2rem; font-weight: 800; border: none; border-bottom: 2px solid var(--border-accent); background: var(--bg-elevated); color: var(--text-main); border-radius: var(--radius-xs); margin: 0 4px; transition: all 0.2s; outline: none;" />
                    ${parts[1]}
                  </span>
                `;
              } else {
                sentenceHtml = `
                  <span style="font-family: var(--font-jp); font-size: 1.25rem; font-weight: 700; color: var(--text-main);">
                    ${item.sentence}
                  </span>
                `;
              }

              return `
                <div style="padding: 16px; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-md);">
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <span style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid var(--border-accent); font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">${idx + 1}</span>
                    <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Mondaishuu 1</span>
                  </div>
                  <div style="margin-bottom: 8px; line-height: 1.8;">
                    ${sentenceHtml}
                  </div>
                  <div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; border-top: 1px dashed var(--border); padding-top: 8px; margin-top: 12px;">
                    = "${item.translation}"
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Navigation buttons -->
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <button id="btn-prev-landing" style="background: transparent; color: var(--text-secondary); border: 1px solid var(--border); padding: 12px 24px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
              Batal
            </button>
            <button id="btn-goto-part2" style="background: var(--text-main); color: var(--bg-main); border: none; padding: 12px 28px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
              Lanjut ke Bagian 2
            </button>
          </div>

        </div>
      </div>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: container });

    // Focus first input
    const inputs = container.querySelectorAll('.part1-input');
    if (inputs.length > 0) {
      inputs[0].focus();
    }

    // Auto tab or enter hooks
    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        const id = input.dataset.id;
        userAnswers[id] = e.target.value;
        
        // Auto-tab on particle matches if length is met
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
      // Save all current values
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
      <div class="fade-in" style="max-width: 700px; margin: 0 auto; padding-bottom: 80px;">
        
        <!-- Progress Bar and Steps Indicator -->
        ${renderProgressBar(2)}

        <div style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 24px; box-shadow: var(--shadow-md);">
          <div style="margin-bottom: 24px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Bagian 2: Evaluasi Karakter</span>
            <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-top: 4px;">Pilihan Ganda Profil</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px; line-height: 1.5;">
              Pilihlah opsi tata bahasa yang paling tepat untuk melengkapi kalimat penjelas profil karakter sesuai dengan fakta buku teks Minna no Nihongo.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 32px; margin-bottom: 40px;">
            ${part.map((item, idx) => {
              const selectedAns = userAnswers[item.id] || '';
              return `
                <div style="padding: 20px; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-md);">
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                    <span style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid var(--border-accent); font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">${idx + 1}</span>
                    <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Profil Buku</span>
                  </div>
                  
                  <div style="font-family: var(--font-jp); font-size: 1.2rem; font-weight: 700; color: var(--text-main); margin-bottom: 20px; line-height: 1.6; white-space: pre-line;">
                    ${item.question}
                  </div>

                  <div style="display: flex; flex-direction: column; gap: 10px;">
                    ${item.options.map((opt, oIdx) => {
                      const isSelected = selectedAns === opt.text;
                      return `
                        <button class="part2-opt-btn" data-id="${item.id}" data-text="${opt.text}"
                          style="width: 100%; padding: 14px 18px; text-align: left; font-size: 1rem; border-radius: var(--radius-md); border: 1px solid ${isSelected ? 'var(--text-main)' : 'var(--border)'}; background: ${isSelected ? 'var(--text-main)' : 'var(--bg-card)'}; color: ${isSelected ? 'var(--bg-main)' : 'var(--text-main)'}; font-weight: ${isSelected ? '700' : '500'}; font-family: var(--font-jp); cursor: pointer; transition: all 0.2s; outline: none; -webkit-tap-highlight-color: transparent;">
                          <div style="display: flex; align-items: center; justify-content: space-between;">
                            <span>${opt.text}</span>
                            ${isSelected ? `<i data-lucide="check" style="width:16px;height:16px;"></i>` : ''}
                          </div>
                        </button>
                      `;
                    }).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Navigation buttons -->
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <button id="btn-prev-part1" style="background: transparent; color: var(--text-secondary); border: 1px solid var(--border); padding: 12px 24px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
              Kembali ke Bagian 1
            </button>
            <button id="btn-goto-part3" style="background: var(--text-main); color: var(--bg-main); border: none; padding: 12px 28px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
              Lanjut ke Bagian 3
            </button>
          </div>

        </div>
      </div>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: container });

    // Option clicks
    container.querySelectorAll('.part2-opt-btn').forEach(btn => {
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
      <div class="fade-in" style="max-width: 700px; margin: 0 auto; padding-bottom: 80px;">
        
        <!-- Progress Bar and Steps Indicator -->
        ${renderProgressBar(3)}

        <div style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-lg); padding: 32px; margin-bottom: 24px; box-shadow: var(--shadow-md);">
          <div style="margin-bottom: 24px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Bagian 3: Pemahaman Bacaan</span>
            <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-top: 4px;">Membaca (Dokkai)</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px; line-height: 1.5;">
              Bacalah paragraf bahasa Jepang di bawah ini dengan saksama. Kemudian, tentukan apakah setiap pernyataan di bawahnya BENAR (T) atau SALAH (F) berdasarkan teks tersebut.
            </p>
          </div>

          <!-- Reading Passage Box -->
          <div style="padding: 24px; background: var(--bg-elevated); border: 1px solid var(--border-accent); border-radius: var(--radius-md); font-family: var(--font-jp-serif) !important; font-size: 1.15rem; font-weight: 500; color: var(--text-main); line-height: 2; letter-spacing: 0.02em; white-space: pre-line; margin-bottom: 32px;">
            ${part.text}
          </div>

          <div style="display: flex; flex-direction: column; gap: 24px; margin-bottom: 40px;">
            ${part.questions.map((item, idx) => {
              const selectedAns = userAnswers[item.id] || ''; // 'T' or 'F'
              const isTSelected = selectedAns === 'T';
              const isFSelected = selectedAns === 'F';

              return `
                <div style="padding: 18px; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-md);">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="width: 22px; height: 22px; border-radius: 50%; border: 1px solid var(--border-accent); font-size: 0.7rem; font-weight: 700; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">${idx + 1}</span>
                      <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Pernyataan ${idx + 1}</span>
                    </div>
                  </div>

                  <div style="font-family: var(--font-jp); font-size: 1.25rem; font-weight: 700; color: var(--text-main); line-height: 1.6; margin-bottom: 16px;">
                    ${item.question}
                  </div>

                  <!-- Binary choices -->
                  <div style="display: flex; gap: 12px;">
                    <button class="part3-opt-btn" data-id="${item.id}" data-val="T"
                      style="flex: 1; padding: 12px; font-size: 0.95rem; font-weight: 700; border-radius: var(--radius-sm); border: 1px solid ${isTSelected ? 'var(--text-main)' : 'var(--border)'}; background: ${isTSelected ? 'var(--text-main)' : 'var(--bg-card)'}; color: ${isTSelected ? 'var(--bg-main)' : 'var(--text-main)'}; cursor: pointer; transition: all 0.2s; outline: none; -webkit-tap-highlight-color: transparent;">
                      正しい (T / Benar)
                    </button>
                    <button class="part3-opt-btn" data-id="${item.id}" data-val="F"
                      style="flex: 1; padding: 12px; font-size: 0.95rem; font-weight: 700; border-radius: var(--radius-sm); border: 1px solid ${isFSelected ? 'var(--text-main)' : 'var(--border)'}; background: ${isFSelected ? 'var(--text-main)' : 'var(--bg-card)'}; color: ${isFSelected ? 'var(--bg-main)' : 'var(--text-main)'}; cursor: pointer; transition: all 0.2s; outline: none; -webkit-tap-highlight-color: transparent;">
                      正しくない (F / Salah)
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Navigation buttons -->
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <button id="btn-prev-part2" style="background: transparent; color: var(--text-secondary); border: 1px solid var(--border); padding: 12px 24px; font-size: 0.9rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
              Kembali ke Bagian 2
            </button>
            <button id="btn-submit-exam" style="background: var(--text-main); color: var(--bg-main); border: none; padding: 12px 32px; font-size: 0.95rem; font-weight: 800; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s; letter-spacing: 0.02em;">
              Serahkan Ujian
            </button>
          </div>

        </div>
      </div>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: container });

    // Binary choice clicks
    container.querySelectorAll('.part3-opt-btn').forEach(btn => {
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
      // Check if all questions are filled to avoid empty submissions
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

    // Equivalents mapping for Chapter 1 particle entries to be forgiving and allow Romaji/alternative typing
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
      <div class="fade-in" style="max-width: 700px; margin: 0 auto; padding-bottom: 80px;">
        <!-- Breadcrumb Navigation -->
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">
          <a href="#/curriculum?track=${backTrack}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s; display: flex; align-items: center; gap: 6px;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">
            <i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i>
            Kurikulum
          </a>
          <span>/</span>
          <a href="#/chapter/${chapter.id}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">Bab ${chapter.id}</a>
          <span>/</span>
          <span style="color: var(--text-main);">Ujian</span>
        </div>

        <!-- Score Card Banner -->
        <div style="background: var(--bg-card); border: 2px solid ${passed ? 'var(--text-main)' : 'var(--border-accent)'}; border-radius: var(--radius-lg); padding: 40px; margin-bottom: 32px; text-align: center; box-shadow: var(--shadow-lg);">
          
          <div style="width: 80px; height: 80px; border-radius: 50%; border: 2px solid var(--text-main); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
            <i data-lucide="${passed ? 'award' : 'alert-circle'}" style="width: 40px; height: 40px; color: var(--text-main);"></i>
          </div>

          <h2 style="font-size: 2.2rem; font-weight: 900; color: var(--text-main); margin-bottom: 8px; letter-spacing: -0.04em;">Hasil Ujian</h2>
          <div style="font-size: 4.8rem; font-weight: 900; line-height: 1; color: var(--text-main); letter-spacing: -0.05em; margin-bottom: 20px; font-variant-numeric: tabular-nums;">
            ${finalScore}%
          </div>

          <div style="margin-bottom: 24px;">
            <span style="background: ${passed ? 'var(--text-main)' : 'transparent'}; color: ${passed ? 'var(--bg-main)' : 'var(--text-main)'}; border: 1px solid var(--text-main); padding: 6px 20px; border-radius: 99px; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;">
              ${passed ? 'LULUS (PASSED)' : 'BELUM LULUS (TRY AGAIN)'}
            </span>
          </div>

          <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; max-width: 480px; margin: 0 auto 12px;">
            ${passed 
              ? `Luar biasa! Anda menguasai tata bahasa dan Mondaishuu Bab ${chapter.id} dengan sangat akurat sesuai standar fisik buku cetak.` 
              : `Skor kelulusan minimal adalah 80%. Silakan ulas kembali kesalahan Anda di bawah dan ulangi ujian untuk mengasah kemampuan.`}
          </p>

          <div style="display: flex; gap: 16px; justify-content: center; margin-top: 32px; flex-wrap: wrap;">
            <div style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 600; border-right: 1px solid var(--border); padding-right: 16px;">
              Jawaban Benar: <span style="color: var(--text-main); font-weight: 800;">${correctCount} / ${totalQuestions}</span>
            </div>
            <div style="font-size: 0.9rem; color: var(--text-secondary); font-weight: 600;">
              Status Ujian: <span style="color: var(--text-main); font-weight: 800;">${passed ? 'Sangat Baik' : 'Butuh Latihan'}</span>
            </div>
          </div>
        </div>

        <!-- Detailed Review Section -->
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin-bottom: 16px; letter-spacing: -0.01em;">Lembar Koreksi & Ulasan</h3>
        
        <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 40px;">
          ${scoreDetails.map((item, idx) => {
            return `
              <div style="padding: 20px; background: var(--bg-card); border: 1px solid ${item.isCorrect ? 'var(--border)' : 'var(--border-bright)'}; border-left: 4px solid ${item.isCorrect ? 'var(--text-main)' : 'var(--text-muted)'}; border-radius: var(--radius-md);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                  <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
                    Bagian ${item.part} • Soal ${idx + 1}
                  </span>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-main);">
                      ${item.isCorrect ? 'Benar' : 'Salah'}
                    </span>
                    <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center;">
                      <i data-lucide="${item.isCorrect ? 'check' : 'x'}" style="width: 12px; height: 12px; color: var(--text-main);"></i>
                    </div>
                  </div>
                </div>

                <div style="font-family: var(--font-jp); font-size: 1.2rem; font-weight: 700; color: var(--text-main); margin-bottom: 16px; line-height: 1.6; word-break: break-all;">
                  ${item.questionText}
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; font-size: 0.85rem; border-top: 1px dashed var(--border); padding-top: 12px;">
                  <div>
                    <div style="color: var(--text-muted); margin-bottom: 2px;">Jawaban Anda</div>
                    <div style="font-weight: 700; color: var(--text-main); font-family: var(--font-jp); text-decoration: ${item.isCorrect ? 'none' : 'line-through'};">
                      ${item.userAnswer}
                    </div>
                  </div>
                  <div>
                    <div style="color: var(--text-muted); margin-bottom: 2px;">Kunci Jawaban</div>
                    <div style="font-weight: 700; color: var(--text-main); font-family: var(--font-jp);">
                      ${item.correctAnswer}
                    </div>
                  </div>
                </div>

                <div style="font-size: 0.85rem; color: var(--text-secondary); background: var(--bg-elevated); padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border); line-height: 1.5;">
                  ${item.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Footer Actions -->
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          ${passed && chapter.id + 1 <= 50 ? `
            <button id="btn-next-chapter-grad" style="flex: 2; min-width: 180px; background: var(--text-main); color: var(--bg-main); border: none; padding: 14px; font-size: 0.95rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
              Lanjutkan ke Bab ${chapter.id + 1}
            </button>
            <button id="btn-retake-exam" style="flex: 1; min-width: 140px; background: transparent; color: var(--text-main); border: 1px solid var(--text-main); padding: 14px; font-size: 0.95rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
              Ulangi Ujian
            </button>
          ` : `
            <button id="btn-retake-exam" style="flex: 2; min-width: 180px; background: var(--text-main); color: var(--bg-main); border: none; padding: 14px; font-size: 0.95rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
              Ulangi Ujian
            </button>
          `}
          <button id="btn-back-chapter-grad" style="flex: 1; min-width: 140px; background: transparent; color: var(--text-main); border: 1px solid var(--text-main); padding: 14px; font-size: 0.95rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
            Kembali ke Bab ${chapter.id}
          </button>
          <button id="btn-back-curriculum-grad" style="flex: 1; min-width: 140px; background: transparent; color: var(--text-main); border: 1px solid var(--text-main); padding: 14px; font-size: 0.95rem; font-weight: 700; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
            Kembali ke Kurikulum
          </button>
        </div>

      </div>
    `;

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: container });

    container.querySelector('#btn-retake-exam').addEventListener('click', () => {
      // Reset state
      userAnswers = {};
      currentStep = 0;
      renderStep();
    });

    container.querySelector('#btn-back-chapter-grad').addEventListener('click', () => {
      window.location.hash = `#/chapter/${chapter.id}`;
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
