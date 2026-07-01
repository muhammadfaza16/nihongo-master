import { renderTopbar, renderBackBtn } from '../components/layout.js';

export function PrefaceView(container) {
  renderTopbar('Prakata & Panduan', false, '#/');
  renderBackBtn(container, '#/', 'Dashboard');

  container.innerHTML = `
    <div class="fade-in" style="max-width: 800px; margin: 0 auto; padding-bottom: 80px; font-family: var(--font-serif);">
      
      <!-- Editorial Header -->
      <div style="text-align: center; margin-bottom: 48px; border-bottom: 1px solid var(--border); padding-bottom: 32px;">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.12em; font-family: var(--font-sans);">
          Panduan Awal Pembelajaran
        </span>
        <h1 style="font-size: 2.5rem; font-weight: 900; color: var(--text-main); margin-top: 8px; margin-bottom: 16px; letter-spacing: var(--tracking-tight); line-height: var(--leading-tight);">
          Jalan Pintas Menuju Penguasaan Bahasa Jepang
        </h1>
        <p style="color: var(--text-secondary); max-width: 580px; margin: 0 auto; font-size: 1.05rem; line-height: 1.6; font-style: italic;">
          "Penguasaan bahasa bukanlah tentang sekadar menghafal aturan secara pasif, melainkan tentang transformasi cara berpikir melalui latihan yang terarah."
        </p>
      </div>

      <!-- Transformation Section -->
      <div style="margin-bottom: 40px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--text-main); margin-bottom: 16px; border-left: 3px solid var(--text-main); padding-left: 12px; font-family: var(--font-sans); text-transform: uppercase; letter-spacing: -0.01em;">
          I. Transformasi yang Anda Tuju
        </h2>
        <p style="font-size: 1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
          Tujuan akhir dari perjalanan ini adalah kemampuan untuk memahami, membaca, dan menyusun kalimat bahasa Jepang secara spontan dan alami. Bahasa baru mengubah cara kita memandang dunia.
        </p>
        <p style="font-size: 1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
          Untuk mencapai kelancaran tersebut, proses belajar tidak boleh hanya menjadi tontonan pasif. Dibutuhkan ruang latihan yang terstruktur dan terfokus untuk membantu Anda menguji pemahaman, melatih ingatan aktif, dan membangun insting tata bahasa yang kokoh.
        </p>
      </div>

      <!-- The 4 Pillars Section -->
      <div style="margin-bottom: 40px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--text-main); margin-bottom: 16px; border-left: 3px solid var(--text-main); padding-left: 12px; font-family: var(--font-sans); text-transform: uppercase; letter-spacing: -0.01em;">
          II. Metodologi Latihan Terarah
        </h2>
        <p style="font-size: 1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 24px;">
          Setiap sesi latihan di platform ini dirancang secara berjenjang untuk memastikan pemahaman teoritis Anda berubah menjadi kemampuan aplikatif:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
          
          <div style="border: 1px solid var(--border); padding: 20px; background: var(--bg-card); border-radius: var(--radius-lg);">
            <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px; font-family: var(--font-sans); display: flex; align-items: center; gap: 8px;">
              <i data-lucide="book-open" style="width: 18px; height: 18px; color: var(--text-main);"></i> 1. Pemahaman Konseptual (Teori)
            </h3>
            <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
              Mempelajari aturan kalimat dan arti kosakata baru secara terstruktur. Ini adalah fondasi logika sebelum melangkah lebih jauh.
            </p>
          </div>

          <div style="border: 1px solid var(--border); padding: 20px; background: var(--bg-card); border-radius: var(--radius-lg);">
            <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px; font-family: var(--font-sans); display: flex; align-items: center; gap: 8px;">
              <i data-lucide="layers" style="width: 18px; height: 18px; color: var(--text-main);"></i> 2. Retensi Jangka Panjang (SRS)
            </h3>
            <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
              Pengulangan terjadwal untuk menantang ingatan Anda tepat sebelum informasi tersebut memudar dari ingatan.
            </p>
          </div>

          <div style="border: 1px solid var(--border); padding: 20px; background: var(--bg-card); border-radius: var(--radius-lg);">
            <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px; font-family: var(--font-sans); display: flex; align-items: center; gap: 8px;">
              <i data-lucide="edit-3" style="width: 18px; height: 18px; color: var(--text-main);"></i> 3. Produksi Aktif (Buku Kerja)
            </h3>
            <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
              Latihan menulis dan merangkai kalimat secara mandiri. Memaksa otak memformulasikan bahasa secara mandiri tanpa bantuan pilihan ganda.
            </p>
          </div>

          <div style="border: 1px solid var(--border); padding: 20px; background: var(--bg-card); border-radius: var(--radius-lg);">
            <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px; font-family: var(--font-sans); display: flex; align-items: center; gap: 8px;">
              <i data-lucide="award" style="width: 18px; height: 18px; color: var(--text-main);"></i> 4. Pengukuran Objektif (Ujian)
            </h3>
            <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-secondary);">
              Evaluasi komprehensif berbatas waktu untuk membuktikan bahwa Anda telah benar-benar menguasai seluruh materi dalam bab terkait.
            </p>
          </div>

        </div>
      </div>

      <!-- Study Roadmap Section -->
      <div style="margin-bottom: 40px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--text-main); margin-bottom: 16px; border-left: 3px solid var(--text-main); padding-left: 12px; font-family: var(--font-sans); text-transform: uppercase; letter-spacing: -0.01em;">
          III. Peta Jalan Menuju Sasaran (Roadmap)
        </h2>
        <p style="font-size: 1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 24px;">
          Langkah belajar Anda diatur dalam jalur yang terstruktur agar proses adaptasi otak berjalan mulus:
        </p>

        <!-- Timeline Chart -->
        <div style="border: 1px solid var(--border); padding: 24px; background: var(--bg-card); border-radius: var(--radius-lg); display: flex; flex-direction: column; gap: 20px;">
          
          <div style="display: flex; gap: 16px; align-items: flex-start;">
            <div style="font-family: var(--font-sans); font-weight: 900; font-size: 0.9rem; background: var(--bg-elevated); border: 1px solid var(--border); padding: 4px 10px; border-radius: var(--radius-sm); min-width: 90px; text-align: center;">
              Fase 1
            </div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">Keakraban Aksara (Pra-Minna)</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.45;">
                Menguasai sistem penulisan dasar Hiragana dan Katakana sebagai prasyarat wajib untuk membaca tulisan Jepang asli.
              </p>
            </div>
          </div>

          <div style="width: 1px; height: 16px; background: var(--border); margin-left: 45px;"></div>

          <div style="display: flex; gap: 16px; align-items: flex-start;">
            <div style="font-family: var(--font-sans); font-weight: 900; font-size: 0.9rem; background: var(--bg-elevated); border: 1px solid var(--border); padding: 4px 10px; border-radius: var(--radius-sm); min-width: 90px; text-align: center;">
              Fase 2
            </div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">Interaksi Dasar (Bab 1 - 25 • Setara JLPT N5)</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.45;">
                Membangun kosakata dasar, pengenalan kata kerja dan kata sifat, serta pembentukan pola kalimat sederhana sehari-hari.
              </p>
            </div>
          </div>

          <div style="width: 1px; height: 16px; background: var(--border); margin-left: 45px;"></div>

          <div style="display: flex; gap: 16px; align-items: flex-start;">
            <div style="font-family: var(--font-sans); font-weight: 900; font-size: 0.9rem; background: var(--bg-elevated); border: 1px solid var(--border); padding: 4px 10px; border-radius: var(--radius-sm); min-width: 90px; text-align: center;">
              Fase 3
            </div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">Komunikasi Menengah (Bab 26 - 50 • Setara JLPT N4)</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.45;">
                Memahami konjugasi lanjutan, kalimat pengandaian, ungkapan kemungkinan, bentuk pasif-kausatif, serta tatakrama bahasa hormat (Keigo).
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- The Daily Loop -->
      <div style="margin-bottom: 40px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--text-main); margin-bottom: 16px; border-left: 3px solid var(--text-main); padding-left: 12px; font-family: var(--font-sans); text-transform: uppercase; letter-spacing: -0.01em;">
          IV. Siklus Pembelajaran Harian
        </h2>
        <p style="font-size: 1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
          Konsistensi adalah kunci utama keberhasilan. Berikut langkah terarah untuk latihan Anda setiap harinya:
        </p>

        <ol style="padding-left: 20px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem; line-height: 1.6;">
          <li>
            <strong style="color: var(--text-main);">Identifikasi Target</strong>: Periksa bab aktif yang sedang Anda pelajari di Dashboard.
          </li>
          <li>
            <strong style="color: var(--text-main);">Pahami Pola Tata Bahasa</strong>: Bacalah bagian Teori tata bahasa dan dengarkan pengucapan kosakata bab tersebut.
          </li>
          <li>
            <strong style="color: var(--text-main);">Integrasikan ke SRS</strong>: Masukkan kata-kata baru ke antrean SRS untuk memulai jadwal pengulangan berkala.
          </li>
          <li>
            <strong style="color: var(--text-main);">Latih Konstruksi Kalimat</strong>: Kerjakan Buku Kerja untuk menguji kemampuan menyusun kalimat Jepang secara mandiri.
          </li>
          <li>
            <strong style="color: var(--text-main);">Uji Hasil Belajar</strong>: Selesaikan Ujian Bab untuk memvalidasi kemajuan Anda sebelum beralih ke bab selanjutnya.
          </li>
        </ol>
      </div>

      <!-- How to Get the Best Out of This Platform -->
      <div style="margin-bottom: 48px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--text-main); margin-bottom: 16px; border-left: 3px solid var(--text-main); padding-left: 12px; font-family: var(--font-sans); text-transform: uppercase; letter-spacing: -0.01em;">
          V. Cara Memaksimalkan Platform Ini
        </h2>
        <p style="font-size: 1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
          Untuk mendapatkan hasil latihan terarah yang paling optimal dari ruang latihan ini, terapkan strategi taktis berikut dalam rutinitas Anda:
        </p>

        <ul style="padding-left: 20px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 16px; font-size: 0.95rem; line-height: 1.6; list-style-type: square;">
          <li>
            <strong style="color: var(--text-main);">Terapkan Penarikan Aktif (Active Recall) Tanpa Mencontek</strong>:<br>
            Saat melatih pola kalimat di Buku Kerja (Workbook), paksa otak Anda merangkai kalimat dari ingatan sebelum melihat terjemahan atau petunjuk. Proses "kesulitan yang diinginkan" ini memperkuat ingatan jauh lebih cepat daripada mencocokkan pilihan kata secara pasif.
          </li>
          <li>
            <strong style="color: var(--text-main);">Disiplin Harian pada Antrean SRS</strong>:<br>
            Efektivitas algoritma pengulangan berjarak (SRS) bergantung penuh pada konsistensi. Jika kartu tinjauan dibiarkan menumpuk, algoritma SM-2 kehilangan presisinya. Sediakan waktu 5-10 menit setiap hari khusus untuk menyelesaikan antrean review Anda di Dashboard.
          </li>
          <li>
            <strong style="color: var(--text-main);">Manfaatkan Memori Kinestetik (Menulis Kanji)</strong>:<br>
            Jangan abaikan tombol pintas menulis (<i data-lucide="edit-3" style="width: 14px; height: 14px; display: inline-block; vertical-align: middle; color: var(--text-main);"></i>) yang muncul di samping kosakata bab. Latihlah coretan tangan Anda langsung pada Kanvas Menulis. Mengaitkan gerakan motorik tangan dengan karakter visual Kanji terbukti melipatgandakan kecepatan pengenalan huruf.
          </li>
          <li>
            <strong style="color: var(--text-main);">Simulasikan Ujian Secara Mandiri</strong>:<br>
            Anggap Ujian Bab sebagai tolok ukur kesiapan riil Anda sebelum melangkah ke materi tingkat lanjut. Kerjakan ujian tanpa membuka bantuan catatan kamus, tanpa navigasi ke tab lain, dan patuhi batas waktu yang telah ditentukan.
          </li>
        </ul>
      </div>

      <!-- Action Row -->
      <div style="text-align: center; border-top: 1px solid var(--border); padding-top: 36px;">
        <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-main); margin-bottom: 12px; font-family: var(--font-sans);">
          Mulailah Latihan Terarah Anda
        </h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 24px; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.5;">
          Kemajuan Anda sepenuhnya ditentukan oleh setiap keputusan kecil untuk berlatih hari ini.
        </p>
        
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <a href="#/dashboard" class="btn btn-primary" style="padding: 12px 28px; font-size: 0.9rem; font-weight: 800; border-radius: var(--radius-md); text-decoration: none;">
            Buka Dashboard Utama
          </a>
          <a href="#/curriculum" class="btn btn-secondary" style="padding: 12px 28px; font-size: 0.9rem; font-weight: 800; border-radius: var(--radius-md); text-decoration: none;">
            Buka Peta Kurikulum
          </a>
        </div>
      </div>

    </div>
  `;

  if (window.lucide) lucide.createIcons({ root: container });
}
