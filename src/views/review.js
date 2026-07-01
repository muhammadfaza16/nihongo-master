import { renderTopbar, renderBackBtn } from '../components/layout.js';
import { getDueItems, gradeReview } from '../srs.js';
import { addXP } from '../store.js';
// registry.js is dynamically imported only when this view mounts (lazy)

export async function ReviewView(container) {
  renderTopbar('SRS Review', false, '#/');
  renderBackBtn(container, '#/', 'Dashboard');

  // Lazy-load registry only when user visits Review view
  const { findItemById } = await import('../data/registry.js');

  const dueItems = getDueItems();
  let currentIndex = 0;
  let isFlipped = false;
  const sessionHistory = [];

  // Empty state rendering
  if (dueItems.length === 0) {
    container.innerHTML = `
      <div style="max-width: 500px; margin: 80px auto; text-align: center; padding: 20px;" class="fade-in">
        <div style="font-size: 5rem; margin-bottom: 24px; color: var(--accent-bright); display: inline-flex; align-items: center; justify-content: center; width: 96px; height: 96px; border-radius: 50%; background: var(--accent-dim); border: 1px solid var(--border-accent);">
          <i data-lucide="party-popper" style="width:48px;height:48px;"></i>
        </div>
        <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 12px;">Semua Selesai!</h2>
        <p style="color: var(--text-secondary); line-height: var(--leading-relaxed); max-width: 380px; margin: 0 auto 32px;">
          Tidak ada review yang tertunda saat ini. Semua kartu memori Anda dalam kondisi prima. Kembalilah besok atau pelajari materi baru!
        </p>
        <button class="btn btn-primary btn-lg" onclick="window.location.hash='#/curriculum'">
          <i data-lucide="compass" style="width:18px;height:18px"></i> Peta Kurikulum
        </button>
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

      // Generate HTML for reviewed items list
      const itemsHtml = sessionHistory.map(item => {
        let badgeColor = '';
        let badgeText = '';
        if (item.grade === 0) {
          badgeColor = 'background: var(--red-dim); color: var(--red); border: 1px solid var(--red-dim);';
          badgeText = 'Lupa';
        } else if (item.grade === 2) {
          badgeColor = 'background: var(--amber-dim); color: var(--amber); border: 1px solid var(--amber-dim);';
          badgeText = 'Susah';
        } else if (item.grade === 4) {
          badgeColor = 'background: var(--green-dim); color: var(--green); border: 1px solid var(--green-dim);';
          badgeText = 'Ingat';
        } else {
          badgeColor = 'background: var(--bg-elevated); color: var(--blue); border: 1px solid var(--border);';
          badgeText = 'Mudah';
        }

        return `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); margin-bottom: 8px;">
            <div style="text-align: left;">
              <div style="font-family: var(--font-jp); font-size: 1.15rem; font-weight: 700; color: var(--text-main);">${item.vocab}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">${item.meaning}</div>
            </div>
            <span style="font-size: var(--text-2xs); font-weight: 700; padding: 4px 10px; border-radius: 99px; ${badgeColor}">${badgeText}</span>
          </div>
        `;
      }).join('');

      container.innerHTML = `
        <div style="max-width: 520px; margin: 40px auto; text-align: center; padding: 0 16px;" class="fade-in">
          <div style="font-size: 5rem; margin-bottom: 24px; color: var(--accent-bright); display: inline-flex; align-items: center; justify-content: center; width: 96px; height: 96px; border-radius: 50%; background: var(--accent-dim); border: 1px solid var(--border-accent);">
            <i data-lucide="trophy" style="width:48px;height:48px;"></i>
          </div>
          <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 8px;">Review Selesai!</h2>
          <p style="color: var(--text-secondary); font-size: var(--text-md); margin-bottom: 24px;">
            Kerja bagus! Kamu mendapatkan <span style="color: var(--accent-bright); font-weight: 700;">+${totalXP} XP</span>.
          </p>

          <div style="text-align: left; margin-bottom: 28px;">
            <h3 style="font-size: var(--text-sm); font-weight: 700; text-transform: uppercase; letter-spacing: var(--tracking-wider); color: var(--text-muted); margin-bottom: 12px;">Ringkasan Sesi</h3>
            <div style="max-height: 280px; overflow-y: auto; padding-right: 4px;" class="custom-scrollbar">
              ${itemsHtml}
            </div>
          </div>

          <button class="btn btn-primary btn-lg" style="width: 100%;" onclick="window.location.hash='#/dashboard'">
            Kembali ke Dashboard
          </button>
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

    // Build the flashcard UI using the custom srs-container & flip-card CSS classes
    container.innerHTML = `
      <div class="srs-container fade-in">
        <!-- Progress Bar -->
        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span>Review <strong>${currentIndex + 1}</strong> dari <strong>${dueItems.length}</strong></span>
            <span style="color: var(--text-muted); font-size: 0.8rem;">Sisa ${dueItems.length - currentIndex}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${(currentIndex / dueItems.length) * 100}%"></div>
          </div>
        </div>

        <!-- 3D Flip Card -->
        <div class="flip-card" id="srs-card">
          <div class="flip-card-inner">
            <!-- Front of Card (Question) -->
            <div class="flip-card-front">
              <span style="position: absolute; top: 16px; left: 20px; font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); letter-spacing: var(--tracking-wider); text-transform: uppercase;">
                ${item.type === 'vocab' ? 'Kosakata' : item.type === 'kanji' ? 'Kanji' : 'Tata Bahasa'}
              </span>
              <div class="jp-large" style="font-family: var(--font-jp); font-size: ${display.length > 6 ? '2.5rem' : '4rem'}; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">
                ${display}
              </div>
              <span style="font-size: var(--text-xs); color: var(--text-muted); display: flex; align-items: center; gap: 6px;">
                <i data-lucide="eye" style="width: 14px; height: 14px;"></i> Klik kartu atau tombol untuk melihat jawaban
              </span>
            </div>

            <!-- Back of Card (Answer) -->
            <div class="flip-card-back">
              <span style="position: absolute; top: 16px; left: 20px; font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); letter-spacing: var(--tracking-wider); text-transform: uppercase;">
                Arti / Pelafalan
              </span>
              ${sub ? `<div style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 10px; font-family: var(--font-jp);">${sub}</div>` : ''}
              <div style="font-size: 2.2rem; color: var(--text-main); font-weight: 800; line-height: 1.25; margin-bottom: 14px;">
                ${answer}
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; gap: 12px; justify-content: center; background: var(--bg-hover); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <span>Repetisi: <strong>${item.repetitions}</strong></span>
                <span>Ease Factor: <strong>${item.easeFactor.toFixed(1)}</strong></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Control Area -->
        <div id="action-area" style="min-height: 80px; display: flex; align-items: center; justify-content: center;">
          <button id="btn-show" class="btn btn-primary btn-lg" style="width: 100%; max-width: 320px;">
            Tampilkan Jawaban <i data-lucide="arrow-right-circle" style="width: 18px; height: 18px"></i>
          </button>
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons({ root: container });

    const cardEl = document.getElementById('srs-card');
    const showBtn = document.getElementById('btn-show');

    // Function to perform the flipping transition
    const flip = () => {
      if (isFlipped) return;
      isFlipped = true;
      cardEl.classList.add('flipped');

      // Swap out the button to show the 4-grade options
      const actionArea = document.getElementById('action-area');
      actionArea.innerHTML = `
        <div style="display: flex; flex-direction: column; width: 100%; gap: 14px;">
          <div style="text-align: center; font-size: var(--text-xs); color: var(--text-muted); font-weight: 600;">Seberapa baik kamu mengingat kartu ini?</div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; width: 100%;">
            <button class="btn btn-grade" data-q="0" style="background: var(--red-dim); border: 1px solid var(--border); color: var(--red); flex-direction: column; padding: 10px 4px; height: 60px;">
              <span style="font-size: var(--text-xs); font-weight: 800;">Lupa</span>
              <span style="font-size: var(--text-2xs); opacity: 0.6; margin-top: 2px;">Grade 0</span>
            </button>
            <button class="btn btn-grade" data-q="2" style="background: var(--amber-dim); border: 1px solid var(--border); color: var(--amber); flex-direction: column; padding: 10px 4px; height: 60px;">
              <span style="font-size: var(--text-xs); font-weight: 800;">Susah</span>
              <span style="font-size: var(--text-2xs); opacity: 0.6; margin-top: 2px;">Grade 2</span>
            </button>
            <button class="btn btn-grade" data-q="4" style="background: var(--green-dim); border: 1px solid var(--border); color: var(--green); flex-direction: column; padding: 10px 4px; height: 60px;">
              <span style="font-size: var(--text-xs); font-weight: 800;">Ingat</span>
              <span style="font-size: var(--text-2xs); opacity: 0.6; margin-top: 2px;">Grade 4</span>
            </button>
            <button class="btn btn-grade" data-q="5" style="background: var(--bg-elevated); border: 1px solid var(--border); color: var(--blue); flex-direction: column; padding: 10px 4px; height: 60px;">
              <span style="font-size: var(--text-xs); font-weight: 800;">Mudah</span>
              <span style="font-size: var(--text-2xs); opacity: 0.6; margin-top: 2px;">Grade 5</span>
            </button>
          </div>
        </div>
      `;

      // Set event listeners for the new 4-grade buttons
      document.querySelectorAll('.btn-grade').forEach(btn => {
        btn.addEventListener('click', (e) => {
          // Make sure we read the grade value from the closest button element
          const targetBtn = e.target.closest('.btn-grade');
          const q = parseInt(targetBtn.dataset.q);

          // Add to history for summary view
          sessionHistory.push({
            id: item.id,
            vocab: display,
            meaning: answer,
            grade: q
          });

          // Perform SM-2 update
          gradeReview(item.id, q);
          currentIndex++;
          
          // Animate transition to next card
          cardEl.style.opacity = '0';
          cardEl.style.transform = 'scale(0.95)';
          actionArea.style.opacity = '0';
          
          setTimeout(() => {
            renderCard();
          }, 200);
        });
      });
    };

    cardEl.addEventListener('click', flip);
    showBtn.addEventListener('click', flip);
  };

  renderCard();
}

