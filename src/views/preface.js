import { renderTopbar, renderBackBtn } from '../components/layout.js';

export function PrefaceView(container) {
  renderTopbar('Prakata & Panduan', false, '#/');
  renderBackBtn(container, '#/', 'Dashboard');

  container.innerHTML = `
    <div class="preface-container page-container-standard fade-in" style="padding-bottom: 60px;">
      
      <!-- Minimalist Editorial Header -->
      <div style="text-align: center; margin-bottom: 36px; border-bottom: 1px solid var(--border); padding-bottom: 28px;">
        <span style="font-size: var(--text-3xs); font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: var(--tracking-wider); background: var(--bg-elevated); padding: 4px 12px; border-radius: 99px; border: 1px solid var(--border); display: inline-block; margin-bottom: 12px;">
          Panduan Awal Pembelajaran
        </span>
        <h1 style="font-size: var(--text-xl); font-weight: 700; color: var(--text-main); margin-bottom: 12px; letter-spacing: var(--tracking-tight); line-height: 1.3;">
          Jalan Pintas Menuju Penguasaan Bahasa Jepang
        </h1>
        <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; font-size: var(--text-xs); line-height: var(--leading-normal); font-style: italic;">
          "Penguasaan bahasa bukanlah tentang sekadar menghafal aturan secara pasif, melainkan tentang transformasi cara berpikir melalui latihan yang terarah."
        </p>
      </div>

      <!-- Section I: Metodologi 4 Pilar -->
      <div style="margin-bottom: 36px;">
        <h2 style="font-size: var(--text-md); font-weight: 700; color: var(--text-main); margin-bottom: 16px; letter-spacing: var(--tracking-tight); display: flex; align-items: center; gap: 8px;">
          <i data-lucide="compass" style="width: 18px; height: 18px; color: var(--text-muted);"></i>
          I. Metodologi 4 Pilar Latihan Terarah
        </h2>
        <p style="font-size: var(--text-xs); line-height: var(--leading-normal); color: var(--text-secondary); margin-bottom: 20px;">
          Setiap sesi latihan di platform ini dirancang secara berjenjang untuk memastikan pemahaman teoritis Anda berubah menjadi kemampuan aplikatif yang spontan:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px;">
          
          <div style="border: 1px solid var(--border); padding: 18px; background: var(--bg-card); border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--text-main); font-size: var(--text-sm);">
              <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--bg-elevated); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-main);">
                <i data-lucide="book-open" style="width: 16px; height: 16px;"></i>
              </div>
              1. Konsep (Teori)
            </div>
            <p style="font-size: var(--text-xs); line-height: 1.5; color: var(--text-secondary); margin: 0;">
              Mempelajari aturan kalimat dan arti kosakata secara terstruktur sebagai fondasi logika awal.
            </p>
          </div>

          <div style="border: 1px solid var(--border); padding: 18px; background: var(--bg-card); border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--text-main); font-size: var(--text-sm);">
              <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--bg-elevated); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-main);">
                <i data-lucide="layers" style="width: 16px; height: 16px;"></i>
              </div>
              2. Retensi (SRS)
            </div>
            <p style="font-size: var(--text-xs); line-height: 1.5; color: var(--text-secondary); margin: 0;">
              Pengulangan algoritma SM-2 ter-jadwal untuk menantang ingatan tepat sebelum memudar.
            </p>
          </div>

          <div style="border: 1px solid var(--border); padding: 18px; background: var(--bg-card); border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--text-main); font-size: var(--text-sm);">
              <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--bg-elevated); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-main);">
                <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
              </div>
              3. Produksi (Workbook)
            </div>
            <p style="font-size: var(--text-xs); line-height: 1.5; color: var(--text-secondary); margin: 0;">
              Latihan menulis dan merangkai kalimat mandiri tanpa ketergantungan pada pilihan ganda.
            </p>
          </div>

          <div style="border: 1px solid var(--border); padding: 18px; background: var(--bg-card); border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: var(--text-main); font-size: var(--text-sm);">
              <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--bg-elevated); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-main);">
                <i data-lucide="award" style="width: 16px; height: 16px;"></i>
              </div>
              4. Evaluasi (Ujian)
            </div>
            <p style="font-size: var(--text-xs); line-height: 1.5; color: var(--text-secondary); margin: 0;">
              Ujian komprehensif berbatas waktu untuk membuktikan penguasaan riil materi bab.
            </p>
          </div>

        </div>
      </div>

      <!-- Section II: Roadmap 3 Fase -->
      <div style="margin-bottom: 36px;">
        <h2 style="font-size: var(--text-md); font-weight: 700; color: var(--text-main); margin-bottom: 16px; letter-spacing: var(--tracking-tight); display: flex; align-items: center; gap: 8px;">
          <i data-lucide="map" style="width: 18px; height: 18px; color: var(--text-muted);"></i>
          II. Peta Jalan Kurikulum (Roadmap)
        </h2>

        <div style="border: 1px solid var(--border); padding: 20px; background: var(--bg-card); border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 16px;">
          
          <div style="display: flex; gap: 14px; align-items: flex-start;">
            <span style="font-size: var(--text-3xs); font-weight: 600; background: var(--bg-elevated); border: 1px solid var(--border); padding: 3px 10px; border-radius: 99px; color: var(--text-main); flex-shrink: 0; margin-top: 2px;">
              Fase 1
            </span>
            <div>
              <h4 style="font-size: var(--text-sm); font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Keakraban Aksara (Pra-Minna)</h4>
              <p style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5; margin: 0;">
                Menguasai sistem penulisan Hiragana dan Katakana sebagai prasyarat membaca tulisan Jepang asli tanpa Romaji.
              </p>
            </div>
          </div>

          <div style="border-left: 1px dashed var(--border); margin-left: 24px; height: 12px;"></div>

          <div style="display: flex; gap: 14px; align-items: flex-start;">
            <span style="font-size: var(--text-3xs); font-weight: 600; background: var(--bg-elevated); border: 1px solid var(--border); padding: 3px 10px; border-radius: 99px; color: var(--text-main); flex-shrink: 0; margin-top: 2px;">
              Fase 2
            </span>
            <div>
              <h4 style="font-size: var(--text-sm); font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Interaksi Dasar (Bab 1 – 25 • Setara N5)</h4>
              <p style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5; margin: 0;">
                Membangun fondasi tata bahasa dasar, konjugasi kata kerja, dan 800 kosakata utama percakapan sehari-hari.
              </p>
            </div>
          </div>

          <div style="border-left: 1px dashed var(--border); margin-left: 24px; height: 12px;"></div>

          <div style="display: flex; gap: 14px; align-items: flex-start;">
            <span style="font-size: var(--text-3xs); font-weight: 600; background: var(--bg-elevated); border: 1px solid var(--border); padding: 3px 10px; border-radius: 99px; color: var(--text-main); flex-shrink: 0; margin-top: 2px;">
              Fase 3
            </span>
            <div>
              <h4 style="font-size: var(--text-sm); font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Komunikasi Menengah (Bab 26 – 50 • Setara N4)</h4>
              <p style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5; margin: 0;">
                Kuasai kalimat pengandaian (~ndesu), pasif-kausatif, ungkapan kemungkinan, dan bahasa hormat (Keigo).
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- Section III: Strategi Taktis -->
      <div style="margin-bottom: 36px;">
        <h2 style="font-size: var(--text-md); font-weight: 700; color: var(--text-main); margin-bottom: 16px; letter-spacing: var(--tracking-tight); display: flex; align-items: center; gap: 8px;">
          <i data-lucide="zap" style="width: 18px; height: 18px; color: var(--text-muted);"></i>
          III. Strategi Taktis Memaksimalkan Platform
        </h2>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="border: 1px solid var(--border); padding: 14px 16px; background: var(--bg-card); border-radius: var(--radius-md); display: flex; gap: 12px; align-items: flex-start;">
            <i data-lucide="check-circle-2" style="width: 16px; height: 16px; color: var(--accent); flex-shrink: 0; margin-top: 2px;"></i>
            <div style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5;">
              <strong style="color: var(--text-main);">Active Recall Tanpa Mencontek</strong>: Paksa otak merangkai kalimat di Workbook dari ingatan sebelum melihat petunjuk untuk mempercepat pembentukan memori.
            </div>
          </div>

          <div style="border: 1px solid var(--border); padding: 14px 16px; background: var(--bg-card); border-radius: var(--radius-md); display: flex; gap: 12px; align-items: flex-start;">
            <i data-lucide="check-circle-2" style="width: 16px; height: 16px; color: var(--accent); flex-shrink: 0; margin-top: 2px;"></i>
            <div style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5;">
              <strong style="color: var(--text-main);">Disiplin Antrean SRS Harian</strong>: Sediakan 5–10 menit setiap hari untuk ulasan SRS di Dashboard agar interval algoritma SM-2 bekerja dengan presisi tinggi.
            </div>
          </div>

          <div style="border: 1px solid var(--border); padding: 14px 16px; background: var(--bg-card); border-radius: var(--radius-md); display: flex; gap: 12px; align-items: flex-start;">
            <i data-lucide="check-circle-2" style="width: 16px; height: 16px; color: var(--accent); flex-shrink: 0; margin-top: 2px;"></i>
            <div style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5;">
              <strong style="color: var(--text-main);">Memori Kinestetik Kanji</strong>: Gunakan fitur Kanvas Menulis Kanji untuk mengaitkan gerakan motorik tangan dengan bentuk karakter visual.
            </div>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div style="text-align: center; border-top: 1px solid var(--border); padding-top: 32px; display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div>
          <h3 style="font-size: var(--text-md); font-weight: 700; color: var(--text-main); margin-bottom: 4px;">
            Mulailah Latihan Terarah Anda
          </h3>
          <p style="color: var(--text-muted); font-size: var(--text-xs); max-width: 440px; margin: 0 auto; line-height: 1.5;">
            Setiap sesi latihan kecil hari ini adalah langkah pasti menuju kelancaran berbahasa Jepang.
          </p>
        </div>
        
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <a href="#/dashboard" class="btn btn-primary" style="padding: 10px 24px; font-size: var(--text-xs);">
            Buka Dashboard Utama
          </a>
          <a href="#/curriculum" class="btn btn-secondary" style="padding: 10px 24px; font-size: var(--text-xs);">
            Buka Peta Kurikulum
          </a>
        </div>
      </div>

    </div>
  `;

  if (window.lucide) lucide.createIcons({ root: container });
}
