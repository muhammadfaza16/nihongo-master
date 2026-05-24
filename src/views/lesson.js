import { renderTopbar, showModal } from '../components/layout.js';
import { getUnitDetails } from '../data/curriculum.js';
import { getUnitData } from '../data/registry.js';
import { getState, saveQuizResult, addXP, logActivity } from '../store.js';
import { addSRSItem } from '../srs.js';
import { createAudioButton } from '../audio.js';
import { navigate } from '../router.js';

export function LessonView(container, params) {
  const unitId = params.id;
  const unit = getUnitDetails(unitId);
  if (!unit) {
    container.innerHTML = `<h3>Pelajaran tidak ditemukan.</h3>`;
    return;
  }

  renderTopbar(`Pelajaran: ${unit.title}`);

  // Fetch items based on unit ID
  const items = getUnitData(unitId);

  // State for lesson flow
  let currentIndex = 0;
  let mode = 'learn'; // 'learn' | 'quiz'
  let sessionStart = Date.now();

  const renderLearn = () => {
    if (items.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding: 40px;"><h2>Materi Sedang Disusun</h2><p>Pelajaran ini akan segera hadir.</p><button class="btn btn-primary" onclick="window.history.back()">Kembali</button></div>`;
      return;
    }

    let html = `
      <div style="max-width: 900px; margin: 0 auto;">
        <div style="margin-bottom: 32px;">
          <h2 style="font-size: 2rem; color: var(--primary); margin-bottom: 8px;">Materi: ${unit.title}</h2>
          <p style="color: var(--text-secondary);">Pelajari rangkuman materi berikut secara komprehensif (Metode Deliberate Practice). Dengarkan audio jika diperlukan, lalu uji pemahaman Anda.</p>
        </div>
        
        <div class="card" style="padding: 24px; margin-bottom: 32px; overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 2px solid var(--border-color);">
                <th style="text-align: left; padding: 16px 12px; color: var(--text-muted); font-weight: 600;">Jepang</th>
                <th style="text-align: left; padding: 16px 12px; color: var(--text-muted); font-weight: 600;">Furigana / Romaji</th>
                <th style="text-align: left; padding: 16px 12px; color: var(--text-muted); font-weight: 600;">Arti / Penjelasan</th>
                <th style="text-align: right; padding: 16px 12px; color: var(--text-muted); font-weight: 600;">Audio</th>
              </tr>
            </thead>
            <tbody>
    `;

    items.forEach((item, idx) => {
      html += `
        <tr style="border-bottom: 1px solid var(--border-color); background: transparent; transition: background var(--transition-fast);">
          <td style="padding: 16px 12px; font-size: 1.4rem; font-family: var(--font-jp); font-weight: 700; color: var(--text-primary); max-width: 250px; line-height: 1.4;">${item.q}</td>
          <td style="padding: 16px 12px; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.4;">${item.sub || '-'}</td>
          <td style="padding: 16px 12px; color: var(--text-primary); font-size: 1rem; line-height: 1.4;">${item.ans}</td>
          <td style="padding: 16px 12px; text-align: right;" id="audio-btn-container-${idx}"></td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </div>

        <div style="display:flex; justify-content:space-between; margin-bottom: 60px;">
          <button id="btn-prev-unit" class="btn btn-secondary"><i data-lucide="arrow-left" style="width:18px;height:18px;margin-right:8px;"></i> Kembali ke Kurikulum</button>
          <button id="btn-start-quiz" class="btn btn-primary btn-glow" style="font-size: 1.1rem; padding: 12px 32px;">
            Latihan Kuis <i data-lucide="arrow-right" style="width:18px;height:18px;margin-left:8px;"></i>
          </button>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Append audio buttons
    items.forEach((item, idx) => {
      document.getElementById(`audio-btn-container-${idx}`).appendChild(createAudioButton(item.q, '1.2rem'));
    });

    if (window.lucide) lucide.createIcons({ root: container });

    document.getElementById('btn-prev-unit').addEventListener('click', () => {
      navigate('/curriculum');
    });
    
    document.getElementById('btn-start-quiz').addEventListener('click', () => {
      // Initialize SRS items when moving to practice phase
      items.forEach(item => {
        addSRSItem(`${unit.type}-${item.q}`, unit.type);
      });
      mode = 'quiz';
      startQuiz();
    });
  };

  // ---- Quiz Mode ----
  let quizQuestions = [];
  let currentQ = 0;
  let score = 0;

  const startQuiz = () => {
    // Generate questions
    quizQuestions = items.map(item => {
      // Pick 3 random wrong options
      const pool = items.filter(i => i.q !== item.q);
      const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, 3);
      const options = [...shuffled.map(o => o.ans), item.ans].sort(() => 0.5 - Math.random());
      
      return {
        q: item.q,
        ans: item.ans,
        opts: options
      };
    }).sort(() => 0.5 - Math.random()); // shuffle questions

    currentQ = 0;
    score = 0;
    renderQuiz();
  };

  const renderQuiz = () => {
    if (currentQ >= quizQuestions.length) {
      finishQuiz();
      return;
    }

    const q = quizQuestions[currentQ];

    container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-header">
          <h3 style="margin:0">Kuis: ${unit.title}</h3>
          <div class="quiz-progress-text">Soal ${currentQ + 1} dari ${quizQuestions.length}</div>
        </div>
        <div class="progress-bar" style="margin-bottom: 40px;">
          <div class="progress-fill" style="width: ${(currentQ / quizQuestions.length) * 100}%"></div>
        </div>

        <div class="quiz-question card">
          <div class="q-prompt">Pilih jawaban yang benar:</div>
          <div class="q-main" style="font-size: ${q.q.length > 8 ? '2rem' : '3.5rem'}">${q.q}</div>
        </div>

        <div class="quiz-options" style="margin-top: 32px;" id="quiz-opts">
          ${q.opts.map((opt, i) => `<button class="quiz-option" data-ans="${opt}">${opt}</button>`).join('')}
        </div>
      </div>
    `;
    
    if (window.lucide) lucide.createIcons({ root: container });

    const opts = document.getElementById('quiz-opts');
    opts.addEventListener('click', (e) => {
      if (!e.target.classList.contains('quiz-option')) return;
      
      // Disable all
      Array.from(opts.children).forEach(btn => btn.classList.add('disabled'));

      const selected = e.target.dataset.ans;
      const isCorrect = selected === q.ans;

      if (isCorrect) {
        e.target.classList.add('correct');
        score++;
      } else {
        e.target.classList.add('wrong');
        // Highlight correct
        Array.from(opts.children).find(b => b.dataset.ans === q.ans).classList.add('correct');
      }

      setTimeout(() => {
        currentQ++;
        renderQuiz();
      }, 1000);
    });
  };

  const finishQuiz = () => {
    const mins = Math.round((Date.now() - sessionStart) / 60000);
    logActivity(mins);
    saveQuizResult(unitId, score, quizQuestions.length);
    
    const percentage = (score / quizQuestions.length) * 100;
    const passed = percentage >= 70;

    container.innerHTML = `
      <div style="max-width: 500px; margin: 40px auto; text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 20px; color: var(--primary)"><i data-lucide="${passed ? 'award' : 'refresh-ccw'}" style="width:64px;height:64px"></i></div>
        <h2 style="font-size: 2rem; margin-bottom: 8px;">${passed ? 'Lulus!' : 'Coba Lagi'}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 32px;">Kamu menjawab benar ${score} dari ${quizQuestions.length} soal (${percentage.toFixed(0)}%).</p>
        
        <div class="card" style="margin-bottom: 32px; padding: 20px;">
          <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 8px;">Hadiah Kuis</div>
          <div style="font-size: 1.5rem; color: var(--accent-gold); font-weight: 700;">+${score * 10} XP</div>
        </div>

        <div style="display:flex; gap: 16px; justify-content: center;">
          <button id="btn-back" class="btn btn-secondary">Ke Kurikulum</button>
          ${passed 
            ? `<button id="btn-next-unit" class="btn btn-primary">Pelajaran Berikutnya</button>`
            : `<button id="btn-retry" class="btn btn-primary">Ulangi Pelajaran</button>`}
        </div>
      </div>
    `;
    
    if (window.lucide) lucide.createIcons({ root: container });

    document.getElementById('btn-back').addEventListener('click', () => navigate('/curriculum'));
    
    const retryBtn = document.getElementById('btn-retry');
    if (retryBtn) retryBtn.addEventListener('click', () => { currentIndex = 0; mode = 'learn'; renderLearn(); });

    const nextBtn = document.getElementById('btn-next-unit');
    if (nextBtn) nextBtn.addEventListener('click', () => navigate('/curriculum'));
  };

  // Init
  renderLearn();
}
