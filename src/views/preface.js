import { renderTopbar } from '../components/layout.js';

export function PrefaceView(container) {
  renderTopbar('Panduan Belajar', false, '#/');

  container.innerHTML = `
    <div class="preface-container page-container-standard fade-in" style="max-width: 780px; margin: 0 auto; padding-bottom: 48px; display: flex; flex-direction: column; gap: 16px;">
      
      <!-- Dashboard Standard Hero Card -->
      <section class="hero-learning-card phase-hero-card">
        <nav class="phase-hero-nav" aria-label="Breadcrumb">
          <a href="#/" class="phase-nav-back">
            <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Dashboard
          </a>
          <span class="phase-nav-sep">/</span>
          <span class="phase-nav-level">Panduan Belajar</span>
        </nav>

        <div class="hero-main-content">
          <div class="dash-track-badge n5" style="align-self: flex-start; margin-bottom: 4px;">PANDUAN &middot; METODOLOGI BELAJAR</div>
          <h1 class="hero-chapter-title" style="font-size: 1.35rem; margin: 0 0 4px 0;">Jalan Pintas Penguasaan Bahasa Jepang</h1>
          <p class="hero-chapter-desc" style="margin: 0; font-style: italic;">
            "Penguasaan bahasa bukanlah tentang sekadar menghafal aturan secara pasif, melainkan tentang transformasi cara berpikir melalui latihan yang terarah."
          </p>
        </div>
      </section>

      <!-- Section I: Metodologi 4 Pilar -->
      <div class="phase-roadmap-header">
        <div class="phase-roadmap-title-row">
          <span class="phase-roadmap-section-title">I. Metodologi 4 Pilar Latihan Terarah</span>
          <span class="phase-roadmap-section-meta">4 Langkah Siklus Belajar</span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
        
        <div class="phase-card" style="padding: 14px 16px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 30px; height: 30px; border-radius: var(--radius-sm); background: var(--bg-elevated); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-main); flex-shrink: 0;">
              <i data-lucide="book-open" style="width: 14px; height: 14px;"></i>
            </div>
            <div>
              <span class="hero-pill-badge" style="margin-bottom: 2px;">Pilar 1</span>
              <h3 class="phase-card-title" style="font-size: 13.5px;">Konsep (Teori)</h3>
            </div>
          </div>
          <p class="phase-card-focus-text" style="font-size: 12px; line-height: 1.5; margin: 0;">
            Mempelajari aturan kalimat dan arti kosakata secara terstruktur sebagai fondasi logika awal dari buku Minna no Nihongo.
          </p>
        </div>

        <div class="phase-card" style="padding: 14px 16px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 30px; height: 30px; border-radius: var(--radius-sm); background: var(--bg-elevated); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-main); flex-shrink: 0;">
              <i data-lucide="layers" style="width: 14px; height: 14px;"></i>
            </div>
            <div>
              <span class="hero-pill-badge" style="margin-bottom: 2px;">Pilar 2</span>
              <h3 class="phase-card-title" style="font-size: 13.5px;">Retensi (SRS)</h3>
            </div>
          </div>
          <p class="phase-card-focus-text" style="font-size: 12px; line-height: 1.5; margin: 0;">
            Pengulangan kartu flashcard berbasis algoritma SM-2 untuk menantang ingatan tepat sebelum kurva lupa memudar.
          </p>
        </div>

        <div class="phase-card" style="padding: 14px 16px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 30px; height: 30px; border-radius: var(--radius-sm); background: var(--bg-elevated); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-main); flex-shrink: 0;">
              <i data-lucide="edit-3" style="width: 14px; height: 14px;"></i>
            </div>
            <div>
              <span class="hero-pill-badge" style="margin-bottom: 2px;">Pilar 3</span>
              <h3 class="phase-card-title" style="font-size: 13.5px;">Produksi (Workbook)</h3>
            </div>
          </div>
          <p class="phase-card-focus-text" style="font-size: 12px; line-height: 1.5; margin: 0;">
            Latihan menulis dan merangkai kalimat mandiri (Kaite Oboeru) tanpa ketergantungan pada pilihan ganda pasif.
          </p>
        </div>

        <div class="phase-card" style="padding: 14px 16px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 30px; height: 30px; border-radius: var(--radius-sm); background: var(--bg-elevated); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--text-main); flex-shrink: 0;">
              <i data-lucide="award" style="width: 14px; height: 14px;"></i>
            </div>
            <div>
              <span class="hero-pill-badge" style="margin-bottom: 2px;">Pilar 4</span>
              <h3 class="phase-card-title" style="font-size: 13.5px;">Evaluasi (Ujian)</h3>
            </div>
          </div>
          <p class="phase-card-focus-text" style="font-size: 12px; line-height: 1.5; margin: 0;">
            Ujian akhir bab (Mondaishuu) dengan evaluasi kelulusan &ge;80% untuk memastikan kesiapan ke bab selanjutnya.
          </p>
        </div>

      </div>

      <!-- Section II: Roadmap 3 Fase -->
      <div class="phase-roadmap-header" style="margin-top: 8px;">
        <div class="phase-roadmap-title-row">
          <span class="phase-roadmap-section-title">II. Peta Jalan Kurikulum (Roadmap)</span>
          <span class="phase-roadmap-section-meta">3 Jenjang Utama</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px;">
        
        <div class="phase-card" style="padding: 14px 16px;">
          <div class="phase-card-top-bar" style="margin-bottom: 2px;">
            <span class="hero-pill-badge">Level 1 &middot; Pra-MNN</span>
            <span class="phase-badge-status done">Fondasi Aksara</span>
          </div>
          <h3 class="phase-card-title">Keakraban Aksara &amp; Pelafalan (Bab 0)</h3>
          <p class="phase-card-focus-text" style="margin: 0; font-size: 12px;">
            Menguasai sistem penulisan Hiragana dan Katakana serta aturan pelafalan khusus sebagai prasyarat membaca tulisan Jepang asli.
          </p>
        </div>

        <div class="phase-card" style="padding: 14px 16px;">
          <div class="phase-card-top-bar" style="margin-bottom: 2px;">
            <span class="hero-pill-badge">Level 2 &middot; Shokyu 1</span>
            <span class="phase-badge-status active">JLPT N5 (Bab 1 – 25)</span>
          </div>
          <h3 class="phase-card-title">Interaksi &amp; Tata Bahasa Dasar</h3>
          <p class="phase-card-focus-text" style="margin: 0; font-size: 12px;">
            Membangun fondasi partikel kalimat, bentuk Te/Nai/Ta, konjugasi kata sifat, dan 800 kosakata percakapan harian.
          </p>
        </div>

        <div class="phase-card" style="padding: 14px 16px;">
          <div class="phase-card-top-bar" style="margin-bottom: 2px;">
            <span class="hero-pill-badge">Level 3 &middot; Shokyu 2</span>
            <span class="phase-badge-status">JLPT N4 (Bab 26 – 50)</span>
          </div>
          <h3 class="phase-card-title">Nuansa &amp; Percakapan Lanjutan</h3>
          <p class="phase-card-focus-text" style="margin: 0; font-size: 12px;">
            Menguasai ragam biasa (futsuukei), kalimat pengandaian, pasif-kausatif, serta keigo (bahasa sopan/hormat).
          </p>
        </div>

      </div>

      <!-- Bottom Action Dock -->
      <div style="display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap;">
        <a href="#/curriculum" class="btn btn-primary" style="flex: 1.5; min-width: 180px; justify-content: center; text-decoration: none;">
          <i data-lucide="map" style="width: 14px; height: 14px;"></i>
          Buka Peta Kurikulum
        </a>
        <a href="#/chapter/1" class="btn btn-secondary" style="flex: 1; min-width: 140px; justify-content: center; text-decoration: none;">
          Mulai Bab 1
        </a>
      </div>

    </div>
  `;

  if (window.lucide) {
    lucide.createIcons({ root: container });
  }
}
