import { renderTopbar, renderBackBtn } from '../components/layout.js';
import { KANA_MAP, KANA_DOUBLE_MAP } from '../data/kana.js';
import KANJI_DATA from '../data/kanji_data.json';


function toRomaji(str) {
  if (!str || str === '—') return '—';
  let res = '';
  let i = 0;
  while (i < str.length) {
    const char = str[i];
    if (/[a-zA-Z0-9\s\(\)\-\,\.\/\?\!\=\:\;\~]/.test(char)) {
      res += char;
      i++;
      continue;
    }
    if (char === '、') {
      res += ', ';
      i++;
      continue;
    }
    if (i + 1 < str.length) {
      const d = str.substr(i, 2);
      if (KANA_DOUBLE_MAP[d]) {
        res += KANA_DOUBLE_MAP[d];
        i += 2;
        continue;
      }
    }
    if (KANA_MAP[char]) {
      res += KANA_MAP[char];
      i++;
      continue;
    }
    if (char === 'っ' || char === 'ッ') {
      let doubleConsonant = '';
      if (i + 1 < str.length) {
        const next = str[i + 1];
        let nr = '';
        if (next === '(' && i + 2 < str.length) {
          const letter = str[i + 2];
          if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(letter)) {
            doubleConsonant = letter.toLowerCase();
          }
        } else {
          if (i + 2 < str.length && KANA_DOUBLE_MAP[str.substr(i + 1, 2)]) {
            nr = KANA_DOUBLE_MAP[str.substr(i + 1, 2)];
          } else if (KANA_MAP[next]) {
            nr = KANA_MAP[next];
          }
          if (nr) {
            doubleConsonant = nr[0];
          }
        }
      }
      if (doubleConsonant) {
        res += doubleConsonant;
      }
      i++;
      continue;
    }
    res += char;
    i++;
  }
  return res;
}

const KANJI_N5_LIBRARY = KANJI_DATA.n5;
const KANJI_N4_LIBRARY = KANJI_DATA.n4;
const KANJI_N3_LIBRARY = KANJI_DATA.n3;


// ── COMPONENT VIEW ──────────────────────────────────────────────────────────
export function KanjiView(container) {
  renderTopbar('Kanji Hub', false, '#/');

  let activeSubTab = 'theory'; // 'theory' | 'kamus'
  let activeLevel = 'N5'; // 'N5' | 'N4' | 'N3'

  const renderLayout = () => {
    container.innerHTML = `
      <div class="kanji-hub-container page-container-standard fade-in" style="max-width: 780px; margin: 0 auto; padding-bottom: 48px; display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Dashboard Standard Hero Card -->
        <section class="hero-learning-card phase-hero-card">
          <nav class="phase-hero-nav" aria-label="Breadcrumb">
            <a href="#/" class="phase-nav-back">
              <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Dashboard
            </a>
            <span class="phase-nav-sep">/</span>
            <span class="phase-nav-level">Kanji Hub</span>
          </nav>

          <div class="hero-main-content">
            <div class="dash-track-badge n5" style="align-self: flex-start; margin-bottom: 4px;">KANJI HUB &middot; N5&ndash;N3</div>
            <h1 class="hero-chapter-title" style="font-size: 1.35rem; margin: 0 0 4px 0;">Panduan Teori &amp; Katalog 240+ Kanji</h1>
            <p class="hero-chapter-desc" style="margin: 0;">
              Kuasai hukum dasar penulisan Kanji, pahami perbedaan cara baca Onyomi &amp; Kunyomi, serta jelajahi katalog Kanji N5–N3.
            </p>
          </div>
        </section>

        <!-- Mode Tabs (Segmented Control) -->
        <div class="segmented-control" style="max-width: 320px; width: 100%;">
          <button class="segmented-btn sub-tab-btn ${activeSubTab === 'theory' ? 'active' : ''}" data-target="theory">Teori &amp; Aturan</button>
          <button class="segmented-btn sub-tab-btn ${activeSubTab === 'kamus' ? 'active' : ''}" data-target="kamus">Katalog Kanji</button>
        </div>

        <!-- Tab Contents -->
        <div id="kanji-tab-content">
          <!-- Rendered dynamically -->
        </div>

      </div>
    `;

    renderContent();
    bindEvents();
    if (window.lucide) lucide.createIcons({ root: container });
  };

  const renderContent = () => {
    const contentArea = container.querySelector('#kanji-tab-content');
    if (!contentArea) return;

    if (activeSubTab === 'theory') {
      contentArea.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;" class="fade-in">
          
          <!-- Theory 1: Onyomi vs Kunyomi -->
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-bright); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="book-open" style="width: 20px; height: 20px;"></i>
              1. Mengapa Kanji Punya Banyak Cara Baca? (Onyomi vs Kunyomi)
            </h3>
            <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6; margin-bottom: 16px;">
              Kanji berasal dari Tiongkok yang diadopsi ke dalam bahasa Jepang. Hal ini melahirkan dua metode cara baca yang digunakan bersamaan:
            </p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
              <div style="background: var(--bg-main); padding: 16px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent);">
                <h4 style="font-weight: 800; font-size: 0.9rem; color: var(--text-main); margin-bottom: 4px;">音読み (Onyomi)</h4>
                <p style="color: var(--text-muted); font-size: 0.78rem; line-height: 1.4; margin-bottom: 8px;">
                  Cara baca adaptasi Tiongkok kuno. Biasanya ditulis dalam kamus menggunakan huruf <strong>Katakana</strong>.
                </p>
                <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">
                  <strong>Kapan dipakai?</strong> Ketika Kanji bergabung dengan Kanji lain membentuk kata majemuk (<em>Jukugo</em>).<br>
                  <em>Contoh: 水曜日 (sui-yōbi - Rabu)</em>
                </div>
              </div>
              
              <div style="background: var(--bg-main); padding: 16px; border-radius: var(--radius-sm); border-left: 3px solid var(--border-bright);">
                <h4 style="font-weight: 800; font-size: 0.9rem; color: var(--text-main); margin-bottom: 4px;">訓読み (Kunyomi)</h4>
                <p style="color: var(--text-muted); font-size: 0.78rem; line-height: 1.4; margin-bottom: 8px;">
                  Cara baca asli bahasa Jepang. Biasanya ditulis dalam kamus menggunakan huruf <strong>Hiragana</strong>.
                </p>
                <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">
                  <strong>Kapan dipakai?</strong> Ketika Kanji berdiri sendiri sebagai kata tunggal, atau berakhiran huruf Hiragana (<em>Okurigana</em>).<br>
                  <em>Contoh: 水 (mizu - air)</em>
                </div>
              </div>
            </div>

            <div style="font-size: 0.8rem; color: var(--text-secondary); background: var(--bg-hover); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--border); line-height: 1.5;">
              <strong>Aturan Emas:</strong> Jika Anda melihat gabungan Kanji seperti <strong>火山</strong>, bacalah menggunakan Onyomi: <em>kazan</em> (gunung berapi). Namun jika Kanji berdiri sendiri seperti <strong>山</strong>, bacalah menggunakan Kunyomi: <em>yama</em> (gunung).
            </div>
          </div>

          <!-- Theory 2: Stroke Order Laws -->
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-bright); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="edit" style="width: 20px; height: 20px;"></i>
              2. Tujuh Hukum Mutlak Stroke Order (Urutan Coretan)
            </h3>
            <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6; margin-bottom: 16px;">
              Menulis Kanji bukanlah menggambar bebas. Ada logika urutan coretan baku agar keseimbangan huruf stabil, terbaca indah, dan mempermudah ingatan otot jari Anda di kanvas touchscreen:
            </p>

            <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
              <div style="display: flex; gap: 12px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong style="color: var(--accent-bright); min-width: 24px;">#1</strong>
                <span><strong>Kiri ke Kanan, Atas ke Bawah:</strong> Tulis garis horizontal kiri-ke-kanan terlebih dahulu sebelum menggambar garis vertikal atas-ke-bawah (Contoh: Kanji '十' ditulis garis tidur dulu, baru garis tegak).</span>
              </div>
              <div style="display: flex; gap: 12px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong style="color: var(--accent-bright); min-width: 24px;">#2</strong>
                <span><strong>Garis Melintang Memotong Terakhir:</strong> Jika ada garis horizontal/vertikal panjang yang memotong banyak coretan lain di tengah, garis pemotong itu ditulis paling akhir (Contoh: Garis vertikal '中' atau '車').</span>
              </div>
              <div style="display: flex; gap: 12px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong style="color: var(--accent-bright); min-width: 24px;">#3</strong>
                <span><strong>Garis Diagonal Kiri Dulu:</strong> Coretan miring ke kiri ('ノ') ditulis sebelum coretan miring ke kanan ('乀') (Contoh: Kanji '人' atau '父').</span>
              </div>
              <div style="display: flex; gap: 12px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong style="color: var(--accent-bright); min-width: 24px;">#4</strong>
                <span><strong>Tengah Dulu untuk Huruf Simetris:</strong> Untuk Kanji yang memiliki sayap kanan-kiri simetris, tulis tiang tengah terlebih dahulu baru sayapnya (Contoh: Kanji '山' atau '水').</span>
              </div>
              <div style="display: flex; gap: 12px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong style="color: var(--accent-bright); min-width: 24px;">#5</strong>
                <span><strong>Isi Kotak Sebelum Ditutup:</strong> Jika ada bingkai kotak luar, gambar tiang kiri, atas-kanan siku, lalu lukis seluruh isi di dalamnya terlebih dahulu, kemudian tutup bagian bawah kotak paling akhir (Contoh: Kanji '国' atau '四').</span>
              </div>
            </div>
          </div>

          <!-- Theory 3: Radicals -->
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-bright); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="puzzle" style="width: 20px; height: 20px;"></i>
              3. Kekuatan Radikal (Bushu)
            </h3>
            <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6; margin-bottom: 12px;">
              Kanji bukanlah kumpulan coretan acak yang rumit. Hampir semua Kanji dibangun oleh komponen lego pembentuk yang disebut **Radikal (Bushu)**. Radikal memberikan petunjuk makna dasar Kanji tersebut secara seketika:
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
              <div style="background: var(--bg-hover); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div style="font-size: 1.3rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">氵(Sanzui)</div>
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">Radikal Air</div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">Hadir di Kanji bertema air. Contoh: '海' (laut), '洋' (samudra), '池' (kolam).</div>
              </div>
              
              <div style="background: var(--bg-hover); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div style="font-size: 1.3rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">亻(Ninben)</div>
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">Radikal Manusia</div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">Hadir di Kanji bertema aksi manusia. Contoh: '休' (istirahat), '信' (percaya), '体' (tubuh).</div>
              </div>

              <div style="background: var(--bg-hover); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div style="font-size: 1.3rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">門 (Mon)</div>
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">Radikal Gerbang/Pintu</div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">Hadir di Kanji bertema gerbang atau celah. Contoh: '聞' (mendengar), '間' (antara), '開' (membuka).</div>
              </div>
            </div>
          </div>

        </div>
      `;
    } else {
      // Catalog Tab: Levels selective render
      contentArea.innerHTML = `
        <div class="fade-in">
          <!-- Level Selector Segmented Control -->
          <div style="display: flex; justify-content: center; margin-bottom: var(--space-3);">
            <div class="segmented-control" style="max-width: 360px; width: 100%;">
              <button class="segmented-btn level-pill-btn ${activeLevel === 'N5' ? 'active' : ''}" data-level="N5">N5 (80 Kanji)</button>
              <button class="segmented-btn level-pill-btn ${activeLevel === 'N4' ? 'active' : ''}" data-level="N4">N4 (80 Kanji)</button>
              <button class="segmented-btn level-pill-btn ${activeLevel === 'N3' ? 'active' : ''}" data-level="N3">N3 (80 Kanji)</button>
            </div>
          </div>

          <!-- Micro Hint -->
          <div style="text-align: center; font-size: var(--text-3xs); color: var(--text-muted); margin-bottom: 24px;">
            <span style="color: var(--accent); font-weight: 600;">音 (Onyomi)</span> = Cara Baca Tiongkok &nbsp;·&nbsp; <span style="color: var(--text-muted); font-weight: 600;">訓 (Kunyomi)</span> = Cara Baca Jepang
          </div>

          <!-- Dynamic List Wrapper -->
          <div id="level-catalog-container" style="display: flex; flex-direction: column; gap: 28px;">
            <!-- Rendered dynamically -->
          </div>
        </div>
      `;

      renderCatalogList();
      bindLevelPillEvents();
    }

    if (window.lucide) lucide.createIcons({ root: contentArea });
  };

  const renderCatalogList = () => {
    const listContainer = container.querySelector('#level-catalog-container');
    if (!listContainer) return;

    let html = '';

    if (activeLevel === 'N5') {
      html = `
        ${renderCatalogSection('I. KANJI ANGKA & WAKTU (20 Kanji)', KANJI_N5_LIBRARY.numbers_time)}
        ${renderCatalogSection('II. KANJI ALAM & TEMPAT (20 Kanji)', KANJI_N5_LIBRARY.nature_places)}
        ${renderCatalogSection('III. KANJI ORANG & KELUARGA (20 Kanji)', KANJI_N5_LIBRARY.people_family)}
        ${renderCatalogSection('IV. KANJI TEMPAT & BANGUNAN (20 Kanji)', KANJI_N5_LIBRARY.places_buildings)}
      `;
    } else if (activeLevel === 'N4') {
      html = `
        ${renderCatalogSection('I. KANJI GERAKAN & PERJALANAN (20 Kanji)', KANJI_N4_LIBRARY.movement)}
        ${renderCatalogSection('II. KANJI WAKTU & TUBUH (20 Kanji)', KANJI_N4_LIBRARY.time_body)}
        ${renderCatalogSection('III. KANJI MASYARAKAT & BISNIS (20 Kanji)', KANJI_N4_LIBRARY.society_business)}
        ${renderCatalogSection('IV. KANJI SEKOLAH & AKSI (20 Kanji)', KANJI_N4_LIBRARY.school_action)}
      `;
    } else if (activeLevel === 'N3') {
      html = `
        ${renderCatalogSection('I. KANJI MASYARAKAT & KEHIDUPAN (20 Kanji)', KANJI_N3_LIBRARY.society)}
        ${renderCatalogSection('II. KANJI BISNIS & SAINS (20 Kanji)', KANJI_N3_LIBRARY.business_science)}
        ${renderCatalogSection('III. KANJI PIKIRAN & EMOSI (20 Kanji)', KANJI_N3_LIBRARY.mind_emotion)}
        ${renderCatalogSection('IV. KANJI AKSI & KEADAAN (20 Kanji)', KANJI_N3_LIBRARY.action_state)}
      `;
    }

    listContainer.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: listContainer });
  };

  const renderCatalogSection = (title, list) => {
    // Format title: "I. KANJI ANGKA & WAKTU (20 Kanji)" -> "Angka & Waktu"
    const cleanTitle = title.replace(/^[I|V|X]+\.\s*KANJI\s*/i, '').replace(/\s*\(\d+\s*Kanji\)/i, '').trim();

    const cardsHtml = list.map(item => {
      const onText = item.on !== '—' ? item.on : '—';
      const kunText = item.kun !== '—' ? item.kun : '—';

      return `
      <div class="kanji-catalog-card">
        <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
          <div class="kanji-catalog-char">${item.jp}</div>
          <div class="kanji-catalog-meaning">${item.meaning}</div>
        </div>
        
        <div class="kanji-catalog-readings">
          <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 3px;">
            <span style="font-size: 11px; font-weight: 600; color: var(--accent); min-width: 18px;">音</span>
            <span style="font-size: 12px; color: var(--text-main); font-weight: 500;">${onText}</span>
          </div>
          <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 600; color: var(--text-muted); min-width: 18px;">訓</span>
            <span style="font-size: 12px; color: var(--text-secondary); font-weight: 400;">${kunText}</span>
          </div>
          ${item.example ? `
          <div style="font-size: 11px; color: var(--text-muted); line-height: 1.35; padding-top: 6px; border-top: 1px solid var(--border);">
            ${item.example}
          </div>
          ` : ''}
        </div>

        <button class="kanji-catalog-btn" onclick="window.location.hash='#/writing?char=${encodeURIComponent(item.jp)}'" aria-label="Latih menulis kanji ${item.jp}">
          <i data-lucide="edit-3" style="width: 12px; height: 12px;"></i> Latih Menulis
        </button>
      </div>
      `;
    }).join('');

    return `
      <div>
        <h3 style="font-size: var(--text-xs); font-weight: 600; color: var(--text-muted); letter-spacing: var(--tracking-wide); border-bottom: 1px solid var(--border); padding-bottom: 6px; margin-bottom: 14px;">
          ${cleanTitle} (${list.length} Kanji)
        </h3>
        <div class="kanji-catalog-grid">
          ${cardsHtml}
        </div>
      </div>
    `;
  };

  const bindEvents = () => {
    // Bind Tab click switching
    container.querySelectorAll('.sub-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target.closest('.sub-tab-btn');
        if (!target) return;

        activeSubTab = target.getAttribute('data-target');

        container.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
        target.classList.add('active');

        renderContent();
      });
    });
  };

  const bindLevelPillEvents = () => {
    container.querySelectorAll('.level-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target.closest('.level-pill-btn');
        if (!target) return;

        activeLevel = target.getAttribute('data-level');

        container.querySelectorAll('.level-pill-btn').forEach(b => b.classList.remove('active'));
        target.classList.add('active');

        renderCatalogList();
      });
    });
  };

  // Mount View
  renderLayout();
}
