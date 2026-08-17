import { renderTopbar, renderLoader } from '../components/layout.js';
import { getDueItems, gradeReview } from '../srs.js';
import { addXP } from '../store.js';

export async function ReviewView(container) {
  renderTopbar('SRS Flashcards', false, '#/');
  renderLoader(container, 'Memuat Sesi Review...');

  const { findItemById } = await import('../data/registry.js');

  const dueItems = getDueItems();
  let currentIndex = 0;
  let isFlipped = false;
  const sessionHistory = [];

  // Empty state rendering
  if (dueItems.length === 0) {
    container.innerHTML = `
      <div class="srs-container page-container-standard fade-in" style="max-width: 680px; margin: 0 auto; padding-bottom: 48px;">
        
        <section class="hero-learning-card phase-hero-card" style="text-align: center; align-items: center;">
          <nav class="phase-hero-nav" aria-label="Breadcrumb">
            <a href="#/" class="phase-nav-back">
              <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Dashboard
            </a>
            <span class="phase-nav-sep">/</span>
            <span class="phase-nav-level">SRS Flashcards</span>
          </nav>

          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(22, 163, 74, 0.1); border: 1.5px solid var(--green); display: flex; align-items: center; justify-content: center; margin: 8px auto 12px;">
            <i data-lucide="party-popper" style="width: 32px; height: 32px; color: var(--green);"></i>
          </div>

          <span class="hero-pill-badge" style="background: rgba(22, 163, 74, 0.12); color: var(--green); border-color: transparent;">
            MEMORI PRIMA &middot; 0 KARTU TERTUNDA
          </span>

          <h1 class="hero-chapter-title" style="font-size: 1.4rem; margin: 6px 0 4px 0;">Semua Selesai!</h1>
          <p class="hero-chapter-desc" style="max-width: 440px; margin: 0 auto 16px;">
            Tidak ada antrean kartu yang harus diulang saat ini. Kembalilah besok saat memori mulai memudar atau antrekan kosakata baru dari bab pembelajaran.
          </p>

          <div class="hero-actions-bar" style="width: 100%; justify-content: center; gap: 8px; flex-wrap: wrap; margin-top: 8px; padding-top: 10px;">
            <a href="#/curriculum" class="btn btn-primary" style="flex: 1; min-width: 160px; justify-content: center; text-decoration: none;">
              <i data-lucide="map" style="width: 14px; height: 14px;"></i>
              Peta Kurikulum
            </a>
            <a href="#/" class="btn btn-secondary" style="flex: 1; min-width: 140px; justify-content: center; text-decoration: none;">
              Dashboard
            </a>
          </div>
        </section>

      </div>
    `;
    if (window.lucide) lucide.createIcons({ root: container });
    return;
  }

  const renderCard = () => {
    // Session completed rendering
    if (currentIndex >= dueItems.length) {
      const totalXP = dueItems.length * 5;
      addXP(totalXP);

      const gradeLabels = ['Lupa Total', 'Hampir Ingat', 'Susah', 'Lumayan', 'Ingat', 'Mudah Sekali'];
      const itemsHtml = sessionHistory.map(item => {
        const gradeIdx = Math.min(Math.max(item.grade || 0, 0), 5);
        const badgeText = gradeLabels[gradeIdx];

        return `
          <div class="phase-card" style="padding: 12px 14px; flex-direction: row; align-items: center; justify-content: space-between;">
            <div style="text-align: left;">
              <div style="font-family: var(--font-jp); font-size: 1.05rem; font-weight: 700; color: var(--text-main);">${item.vocab}</div>
              <div style="font-size: 12px; color: var(--text-secondary); margin-top: 1px;">${item.meaning}</div>
            </div>
            <span class="srs-result-badge grade-${gradeIdx}">${badgeText}</span>
          </div>
        `;
      }).join('');

      container.innerHTML = `
        <div class="srs-container page-container-standard fade-in" style="max-width: 680px; margin: 0 auto; padding-bottom: 48px;">
          
          <section class="hero-learning-card phase-hero-card" style="text-align: center; align-items: center;">
            <nav class="phase-hero-nav" aria-label="Breadcrumb">
              <a href="#/" class="phase-nav-back">
                <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Dashboard
              </a>
              <span class="phase-nav-sep">/</span>
              <span class="phase-nav-level">Hasil Review</span>
            </nav>

            <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(22, 163, 74, 0.1); border: 1.5px solid var(--green); display: flex; align-items: center; justify-content: center; margin: 4px auto 8px;">
              <i data-lucide="trophy" style="width: 28px; height: 28px; color: var(--green);"></i>
            </div>

            <span class="hero-pill-badge" style="background: rgba(22, 163, 74, 0.12); color: var(--green); border-color: transparent;">
              +${totalXP} XP DIPEROLEH
            </span>

            <h1 class="hero-chapter-title" style="font-size: 1.4rem; margin: 6px 0 4px 0;">Sesi Review Selesai!</h1>
            <p class="hero-chapter-desc" style="max-width: 440px; margin: 0 auto;">
              Luar biasa! Anda telah menuntaskan peninjauan ${dueItems.length} kartu memori hari ini.
            </p>

            <div class="hero-actions-bar" style="width: 100%; justify-content: center; gap: 8px; flex-wrap: wrap; margin-top: 10px; padding-top: 10px;">
              <button class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="window.location.hash='#/'">
                Kembali ke Dashboard
              </button>
            </div>
          </section>

          <!-- Review Summary List -->
          <div class="phase-roadmap-header" style="margin-top: 14px;">
            <div class="phase-roadmap-title-row">
              <span class="phase-roadmap-section-title">Ringkasan Sesi</span>
              <span class="phase-roadmap-section-meta">${dueItems.length} Kartu Selesai</span>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${itemsHtml}
          </div>

        </div>
      `;
      if (window.lucide) lucide.createIcons({ root: container });
      return;
    }

    const item = dueItems[currentIndex];
    const itemData = findItemById(item.id);
    const display = itemData ? itemData.q : item.id.split('-')[1];
    const sub = itemData && itemData.sub ? itemData.sub : '';
    const answer = itemData ? itemData.ans : '';

    isFlipped = false;

    container.innerHTML = `
      <div class="srs-container page-container-standard fade-in" style="max-width: 680px; margin: 0 auto; padding-bottom: 48px;">
        
        <!-- Breadcrumb Navigation -->
        <nav class="phase-hero-nav" aria-label="Breadcrumb" style="margin-bottom: 8px;">
          <a href="#/" class="phase-nav-back">
            <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Dashboard
          </a>
          <span class="phase-nav-sep">/</span>
          <span class="phase-nav-level">SRS Review</span>
          <span class="phase-nav-sep">/</span>
          <span class="phase-nav-level">Kartu ${currentIndex + 1} dari ${dueItems.length}</span>
        </nav>

        <!-- Progress Gauge -->
        <div class="dash-track-progress" style="margin-bottom: 16px;">
          <div class="dash-track-prog-meta">
            <span>Kemajuan Sesi Review</span>
            <span><strong>${currentIndex + 1}</strong> / ${dueItems.length} Kartu (${Math.round((currentIndex / dueItems.length) * 100)}%)</span>
          </div>
          <div class="dash-track-prog-bar">
            <div class="dash-track-prog-fill" style="width: ${(currentIndex / dueItems.length) * 100}%;"></div>
          </div>
        </div>

        <!-- 3D Flip Card -->
        <div class="flip-card" id="srs-card" style="cursor: pointer;">
          <div class="flip-card-inner">
            <!-- Front of Card (Question) -->
            <div class="flip-card-front" style="border-radius: var(--radius-lg);">
              <span class="hero-pill-badge" style="position: absolute; top: 14px; left: 16px;">
                ${item.type === 'vocab' ? 'Kosakata' : item.type === 'kanji' ? 'Kanji' : 'Tata Bahasa'}
              </span>
              <div class="jp-large" style="font-family: var(--font-jp); font-size: ${display.length > 6 ? '2.2rem' : '3.6rem'}; font-weight: 800; color: var(--text-main); margin-bottom: 12px; letter-spacing: 0.02em;">
                ${display}
              </div>
              <span style="font-size: 12px; color: var(--text-muted); display: flex; align-items: center; gap: 5px;">
                <i data-lucide="eye" style="width: 13px; height: 13px;"></i> Ketuk kartu untuk melihat jawaban
              </span>
            </div>

            <!-- Back of Card (Answer) -->
            <div class="flip-card-back" style="border-radius: var(--radius-lg);">
              <span class="hero-pill-badge" style="position: absolute; top: 14px; left: 16px;">
                Arti &amp; Pelafalan
              </span>
              ${sub ? `<div style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 8px; font-family: var(--font-jp);">${sub}</div>` : ''}
              <div style="font-size: 1.8rem; color: var(--text-main); font-weight: 800; line-height: 1.25; margin-bottom: 12px;">
                ${answer}
              </div>
              <div style="font-size: 11px; color: var(--text-muted); display: flex; gap: 10px; justify-content: center; background: var(--bg-elevated); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <span>Repetisi: <strong>${item.repetitions}</strong></span>
                <span>Ease Factor: <strong>${item.easeFactor.toFixed(1)}</strong></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Control Area -->
        <div id="action-area" style="min-height: 72px; display: flex; align-items: center; justify-content: center; margin-top: 14px;">
          <button id="btn-show" class="btn btn-primary" style="width: 100%; max-width: 320px; justify-content: center; font-size: 14px; padding: 12px 20px;">
            <i data-lucide="eye" style="width: 15px; height: 15px;"></i>
            Tampilkan Jawaban
          </button>
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons({ root: container });

    const card = document.getElementById('srs-card');
    const btnShow = document.getElementById('btn-show');
    const actionArea = document.getElementById('action-area');

    const flipCard = () => {
      if (isFlipped) return;
      isFlipped = true;
      card.classList.add('flipped');

      actionArea.innerHTML = `
        <div class="srs-grade-buttons-grid" style="width: 100%; display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px;">
          <button class="btn btn-grade" data-grade="0" style="padding: 8px 4px; font-size: 11px; font-weight: 700; flex-direction: column; gap: 2px;">
            <span>0</span>
            <span style="font-size: 9px; opacity: 0.8;">Lupa Total</span>
          </button>
          <button class="btn btn-grade" data-grade="1" style="padding: 8px 4px; font-size: 11px; font-weight: 700; flex-direction: column; gap: 2px;">
            <span>1</span>
            <span style="font-size: 9px; opacity: 0.8;">Hampir</span>
          </button>
          <button class="btn btn-grade" data-grade="2" style="padding: 8px 4px; font-size: 11px; font-weight: 700; flex-direction: column; gap: 2px;">
            <span>2</span>
            <span style="font-size: 9px; opacity: 0.8;">Susah</span>
          </button>
          <button class="btn btn-grade" data-grade="3" style="padding: 8px 4px; font-size: 11px; font-weight: 700; flex-direction: column; gap: 2px;">
            <span>3</span>
            <span style="font-size: 9px; opacity: 0.8;">Lumayan</span>
          </button>
          <button class="btn btn-grade" data-grade="4" style="padding: 8px 4px; font-size: 11px; font-weight: 700; flex-direction: column; gap: 2px;">
            <span>4</span>
            <span style="font-size: 9px; opacity: 0.8;">Ingat</span>
          </button>
          <button class="btn btn-grade" data-grade="5" style="padding: 8px 4px; font-size: 11px; font-weight: 700; flex-direction: column; gap: 2px;">
            <span>5</span>
            <span style="font-size: 9px; opacity: 0.8;">Mudah</span>
          </button>
        </div>
      `;

      actionArea.querySelectorAll('.btn-grade').forEach(btn => {
        btn.addEventListener('click', () => {
          const grade = parseInt(btn.dataset.grade);
          gradeReview(item.id, grade);
          sessionHistory.push({
            vocab: display,
            meaning: answer,
            grade: grade
          });
          currentIndex++;
          renderCard();
        });
      });
    };

    card.addEventListener('click', flipCard);
    btnShow?.addEventListener('click', flipCard);
  };

  renderCard();
}
