import fs from 'fs';
import path from 'path';

const SCREENSHOTS_DIR = path.resolve('screenshots_mobile');
const OUTPUT_MD = path.resolve('UI_AUDIT_DOSSIER.md');
const OUTPUT_HTML = path.resolve('UI_AUDIT_DOSSIER.html');

function getBase64Image(filename) {
  const filePath = path.join(SCREENSHOTS_DIR, filename);
  const data = fs.readFileSync(filePath);
  return `data:image/png;base64,${data.toString('base64')}`;
}

const pagesData = [
  {
    num: '01',
    name: 'Dashboard Utama (Mobile Viewport: 390x844)',
    route: '#/ atau #/dashboard',
    file: 'src/views/dashboard.js',
    dataSources: [
      'src/store.js (xp, streak, activityLog, completedUnits, settings)',
      'src/srs.js (getDueCount())',
      'src/data/chapter_index.js (MNN_INDEX)'
    ],
    purpose: 'Pusat kendali harian pengguna versi mobile, memantau kemajuan kurikulum, sesi review SM-2 harian, streak, heatmap aktivitas, dan shortcut ke modul-modul lain.',
    screenshotFile: '01_mobile_dashboard.png',
    layoutHierarchy: [
      'Top Navigation Bar (Mobile): Hamburger menu icon (kiri), Judul "Dashboard", Mode Furi/Kana/Rom dropdown (kanan).',
      'Daily Mission Card: Kartu target bab aktif berikutnya dengan tombol CTA "Lanjut Belajar".',
      'Stat Bento Grid (Mobile Stacking): 4 kartu metrik (Target Harian, XP Kumulatif, Streak, Kartu Due SRS).',
      'Aktivitas Belajar (Heatmap Scrollable): Heatmap 52-minggu dengan container overflow horizontal.',
      'Track Progress Cards: Progress bar vertikal untuk Minna I (N5) dan Minna II (N4).',
      'Akses Cepat Modul: Bento shortcut ke Latihan Menulis, Kanji Hub, dan Simulasi Ujian.'
    ],
    userInteractions: [
      'Tap ikon menu hamburger → Membuka mobile sidebar navigation drawer.',
      'Tap tombol "Lanjut Belajar" → Navigasi ke bab aktif (`#/chapter/:id`).',
      'Tap kartu Bento "Review" → Navigasi ke `#/review`.',
      'Tap shortcut modul → Navigasi ke masing-masing modul.'
    ],
    stateImpact: 'Membaca state global dari `localStorage`. Menghitung persentase tuntas per track kurikulum.'
  },
  {
    num: '02',
    name: 'Mobile Navigation Drawer (Menu Sidebar Terbuka)',
    route: '#/ (Sidebar Open State)',
    file: 'src/components/layout.js',
    dataSources: [
      'src/components/layout.js (renderSidebar, currentTheme, toggleTheme)',
      'src/data/chapter_index.js'
    ],
    purpose: 'Drawer navigasi utama versi mobile untuk mengakses seluruh menu dan modul belajar aplikasi secara komprehensif.',
    screenshotFile: '02_mobile_sidebar_drawer.png',
    layoutHierarchy: [
      'Backdrop Overlay: Area gelap transparan untuk menutup menu.',
      'Drawer Container (Lebar ~280px):',
      '  - Header Brand: Logo Kanji [語], Nama "NihongoMaster", Subtitle JLPT N5–N4, Tombol [X] Tutup.',
      '  - Grup Navigasi "Utama": Dashboard (`#/`), Peta Kurikulum (`#/curriculum`), Panduan Belajar (`#/guide`).',
      '  - Grup Navigasi "Modul Belajar": Grammar Digest (`#/minna`), SRS Review (`#/review`), Latihan Menulis (`#/writing`), Kanji Hub (`#/kanji`), Glosarium Istilah (`#/glossary`).',
      '  - Footer Sidebar: Label "TAMPILAN" + Tombol Toggle Tema (Matahari/Bulan SVG).'
    ],
    userInteractions: [
      'Tap salah satu item menu → Pindah ke route terpilih dan drawer otomatis menutup.',
      'Tap tombol [X] atau tap area backdrop gelap → Menutup drawer.',
      'Tap tombol tema di footer → Mengganti tema Dark/Light secara instan tanpa reload.'
    ],
    stateImpact: 'Menyimpan preferensi tema ke `localStorage.getItem("minna_theme")`.'
  },
  {
    num: '03',
    name: 'Peta Kurikulum (Mobile View)',
    route: '#/curriculum',
    file: 'src/views/curriculum.js',
    dataSources: [
      'src/data/curriculum.js (CURRICULUM array)',
      'src/store.js (completedUnits, isUnitCompleted())',
      'src/data/chapter_index.js (MNN_INDEX)'
    ],
    purpose: 'Roadmap vertikal menyeluruh perjalanan belajar dari Bab 0 sampai Bab 50, tersusun per level dan fase.',
    screenshotFile: '03_mobile_curriculum.png',
    layoutHierarchy: [
      'Header Section: Deskripsi jalur belajar terstruktur.',
      'Level Accordion / Stack Sections:',
      '  - Level 1: Pengenalan & Aksara (Kana Dasar).',
      '  - Level 2: Shokyu 1 / Minna I (Bab 1–25, N5).',
      '  - Level 3: Shokyu 2 / Minna II (Bab 26–50, N4).',
      'Unit Cards (Mobile Layout): Nomor Bab, Judul Bab, Ringkasan Materi, Badge Status Selesai/Terbuka, Tombol aksi "Buku Kerja" & "Materi".'
    ],
    userInteractions: [
      'Tap pada kartu bab → Langsung membuka `#/chapter/:id`.',
      'Tap tombol "Buku Kerja" → Membuka latihan soal `#/workbook/:id`.'
    ],
    stateImpact: 'Membaca `completedUnits` untuk menentukan status kunci & centang hijau.'
  },
  {
    num: '03b',
    name: 'Dedicated Page Fase Kurikulum (Mobile View)',
    route: '#/phase/:id (e.g. #/phase/mnn1-fase1)',
    file: 'src/views/phase.js',
    dataSources: [
      'src/data/curriculum.js (getPhaseDetails())',
      'src/store.js (completedUnits, isUnitCompleted(), isChapterQuizPassed(), isChapterExamPassed())',
      'src/data/chapter_index.js (MNN_INDEX, loadChapter())'
    ],
    purpose: 'Halaman khusus per fase yang menyatukan bab-bab tematik lengkap dengan kartu aksi 4 tab (Teori, Latihan, Workbook, Ujian).',
    screenshotFile: '03b_mobile_phase_view.png',
    layoutHierarchy: [
      'Breadcrumb Navigation: Kurikulum / Level / Judul Fase.',
      'Phase Summary Card: Judul fase, deskripsi, progress ringkasan (X / Y Bab Selesai).',
      'Chapter Unit List:',
      '  - Chapter Header: Nomor Bab, Judul, SRS Tag, Chevron Dropdown.',
      '  - Action Buttons Row: [Teori] (Materi), [Latihan] (Kuis), [Workbook] (Buku Kerja), [Ujian] (Ujian Bab).',
      '  - SRS Integration: Tombol "+ Antrekan Semua" kosakata bab.'
    ],
    userInteractions: [
      'Tap accordion header → Menampilkan deskripsi bab dan tombol antrean kosakata SRS.',
      'Tap [Teori] → Membuka `#chapter/:id`.',
      'Tap [Latihan] → Membuka `#chapter/:id?tab=practice`.',
      'Tap [Workbook] → Membuka `#workbook/:id`.',
      'Tap [Ujian] → Membuka `#exam/:id`.'
    ],
    stateImpact: 'Membaca dan memperbarui progres latihan, buku kerja, kuis, dan SRS per bab di fase tersebut.'
  },
  {
    num: '04',
    name: 'Panduan Belajar (Mobile View)',
    route: '#/guide',
    file: 'src/views/preface.js',
    dataSources: ['Statis di dalam src/views/preface.js'],
    purpose: 'Pedoman strategi belajar efisien metode Minna no Nihongo dan alur 4 langkah pembelajaran.',
    screenshotFile: '04_mobile_guide.png',
    layoutHierarchy: [
      'Hero Title: "Metode Belajar Terstruktur".',
      '4 Langkah Alur Belajar (Vertical Timeline Cards): 1. Kosakata Dasar → 2. Tata Bahasa → 3. Buku Kerja → 4. SRS Flashcards.',
      'Tips Penguasaan: Mnemonik Kanji, Partikel, dan Listening.',
      'Target Nilai JLPT N5/N4/N3.'
    ],
    userInteractions: [
      'Membaca panduan, tap tombol CTA menuju Bab 1.'
    ],
    stateImpact: 'Read-only.'
  },
  {
    num: '05',
    name: 'Grammar Digest (Mobile View)',
    route: '#/minna',
    file: 'src/views/minna.js',
    dataSources: [
      'src/data/chapter_data.js (MNN_DATA via dynamic import)',
      'src/data/chapter_index.js (MNN_INDEX)'
    ],
    purpose: 'Buku saku pencarian tata bahasa instan Bab 1–50 untuk referensi cepat di layar ponsel.',
    screenshotFile: '05_mobile_grammar_digest.png',
    layoutHierarchy: [
      'Top Sticky Toolbar: Input pencarian pola kalimat instan + tombol Cetak PDF.',
      'Scrollable Chapter Pills: Baris horizontal tombol lompat Bab (1..50).',
      'Grammar Card Stack: Nomor pola, Rumus pembentukan (Formula box), Penjelasan bahasa Indonesia, Poin penting, Catatan nuansa, dan Contoh kalimat.'
    ],
    userInteractions: [
      'Ketik di search box → Filter daftar pola secara instan.',
      'Tap chapter pill → Scroll otomatis ke bagian bab yang dipilih.'
    ],
    stateImpact: 'Read-only.'
  },
  {
    num: '06',
    name: 'SRS Review (Mobile View)',
    route: '#/review',
    file: 'src/views/review.js',
    dataSources: [
      'src/srs.js (SM-2 Spaced Repetition engine)',
      'src/store.js (srsItems, addXP())'
    ],
    purpose: 'Sesi flashcard Spaced Repetition yang dioptimalkan untuk tap satu tangan di layar ponsel.',
    screenshotFile: '06_mobile_srs_review.png',
    layoutHierarchy: [
      'Progress Bar: Indikator sisa kartu hari ini.',
      'Flashcard Container (Mobile Touch Card):',
      '  - Front: Karakter Kanji/Kana besar, tombol audio pelafalan.',
      '  - Back: Romaji, Furigana, Arti Bahasa Indonesia, Contoh kalimat.',
      'Bottom Rating Bar (4 Tombol Sentuh): Lupa (1), Sulit (2), Bagus (4), Mudah (5).'
    ],
    userInteractions: [
      'Tap kartu → Flip kartu untuk melihat jawaban.',
      'Tap tombol rating → Memproses algoritma SM-2 dan memuat kartu berikutnya.'
    ],
    stateImpact: 'Memperbarui data interval SM-2 dan menambah XP di `store.js`.'
  },
  {
    num: '07',
    name: 'Latihan Menulis (Mobile View)',
    route: '#/writing',
    file: 'src/views/writing.js',
    dataSources: [
      'src/data/kana.js',
      'src/data/hiragana.js',
      'src/data/katakana.js',
      'src/data/kanji.js'
    ],
    purpose: 'Canvas sentuh interaktif untuk melatih goresan Hiragana, Katakana, dan Kanji langsung dengan jari atau stylus.',
    screenshotFile: '07_mobile_writing_practice.png',
    layoutHierarchy: [
      'Mode Selector Pills: Hiragana / Katakana / Kanji N5 / Kanji N4.',
      'Scrollable Character Picker: Baris grid pemilihan huruf/karakter.',
      'Touch Drawing Canvas: Area canvas sentuh bergaris bantu 4 kuadran, karakter bayangan pemandu, tombol Undo, Clear, dan Hint.'
    ],
    userInteractions: [
      'Tap karakter di baris picker → Memuat karakter ke canvas.',
      'Menggoreskan jari di canvas → Menggambar garis dengan responsivitas tinggi.',
      'Tap tombol Hapus/Undo.'
    ],
    stateImpact: 'Menyimpan riwayat latihan ke local storage.'
  },
  {
    num: '08',
    name: 'Kanji Hub (Mobile View)',
    route: '#/kanji',
    file: 'src/views/kanji.js',
    dataSources: ['src/data/kanji.js'],
    purpose: 'Kamus dan explorer Kanji N5–N3 dalam tata letak responsif ponsel.',
    screenshotFile: '08_mobile_kanji_hub.png',
    layoutHierarchy: [
      'Search & Level Filter: Baris input pencarian dan tab level (Semua, N5, N4, N3).',
      'Kanji Grid (2-3 Kolom Mobile): Kartu kanji berisi Huruf, Arti, Goresan, Onyomi, Kunyomi.',
      'Modal Detail Kanji: Menampilkan karakter berukuran besar, contoh kosakata gabungan (Jukugo), dan shortcut latihan menulis.'
    ],
    userInteractions: [
      'Ketik pencarian / tap level → Filter instan pada grid kanji.',
      'Tap kartu kanji → Membuka modal detail.'
    ],
    stateImpact: 'Read-only dengan modal interaction state.'
  },
  {
    num: '09',
    name: 'Glosarium Istilah (Mobile View)',
    route: '#/glossary',
    file: 'src/views/glossary.js',
    dataSources: ['GLOSSARY_TERMS di dalam src/views/glossary.js'],
    purpose: 'Daftar istilah linguistik dan tata bahasa Jepang yang mudah dicari dan dibaca di layar kecil.',
    screenshotFile: '09_mobile_glossary.png',
    layoutHierarchy: [
      'Search Input & Kategori Filter Horizontal: Aksara, Kata Kerja, Tata Bahasa, Budaya.',
      'Vertical Term Cards: Judul istilah, Huruf Jepang/Romaji, Badge kategori, Deskripsi, Contoh kalimat.'
    ],
    userInteractions: [
      'Ketik istilah / tap kategori → Filter real-time pada daftar istilah.'
    ],
    stateImpact: 'Read-only.'
  },
  {
    num: '10',
    name: 'Studi Bab (Mobile View — Bab 1)',
    route: '#/chapter/:id (e.g. #/chapter/1)',
    file: 'src/views/chapter.js',
    dataSources: [
      'src/data/chapter_index.js (loadChapter)',
      'src/data/chapters/chapter_1.json',
      'src/store.js'
    ],
    purpose: 'Halaman inti materi pembelajaran bab yang diadaptasi secara vertikal untuk kenyamanan membaca di mobile.',
    screenshotFile: '10_mobile_chapter_study_ch1.png',
    layoutHierarchy: [
      'Sticky Header Bab: Judul bab, tombol navigasi bab sebelumnya/sesudahnya.',
      'Horizontal Tab Bar: Kosakata, Pola Kalimat, Tata Bahasa, Percakapan.',
      'Tabel Kosakata Mobile: Baris kata dengan tombol Audio, Romaji/Furigana, dan tombol "+ SRS".',
      'Kartu Tata Bahasa: Bedah rumus, poin penting, catatan nuansa, dan contoh percakapan.',
      'Bottom CTA: Tombol langsung menuju "Buku Kerja Bab Ini" (`#/workbook/:id`).'
    ],
    userInteractions: [
      'Tap tab navigasi sub-bab.',
      'Tap tombol Audio untuk mendengarkan pelafalan.',
      'Tap "+ SRS" untuk menyimpan kata ke antrean review.'
    ],
    stateImpact: 'Menambah item baru ke `srsItems` di `store.js`.'
  },
  {
    num: '11',
    name: 'Studi Bab Lanjutan (Mobile View — Bab 14 Te-Form)',
    route: '#/chapter/14',
    file: 'src/views/chapter.js',
    dataSources: ['src/data/chapters/chapter_14.json'],
    purpose: 'Tampilan materi konjugasi kompleks (Perubahan bentuk Te Golongan 1, 2, 3) dalam tata letak mobile.',
    screenshotFile: '11_mobile_chapter_study_ch14.png',
    layoutHierarchy: [
      'Konjugasi Header & Alert: Penanda materi krusial.',
      'Tabel Konjugasi Vertikal: Aturan perubahan akhiran kata kerja.',
      'Pola Kalimat Te-Form: ~te kudasai, ~te imasu, ~te mo ii desu.',
      'Peringatan Kesalahan Umum (Native Note).'
    ],
    userInteractions: [
      'Eksplorasi tabel aturan konjugasi dan pemutaran audio per kata kerja.'
    ],
    stateImpact: 'Read-only / SRS additions.'
  },
  {
    num: '12',
    name: 'Buku Kerja Mandiri (Mobile View — Bab 1)',
    route: '#/workbook/:id (e.g. #/workbook/1)',
    file: 'src/views/workbook.js',
    dataSources: [
      'src/data/chapters/chapter_1.json (array workbook)',
      'src/store.js (completeUnit(), addXP())'
    ],
    purpose: 'Latihan soal interaktif di ponsel dengan umpan balik instan dan verifikasi kunci jawaban.',
    screenshotFile: '12_mobile_workbook_ch1.png',
    layoutHierarchy: [
      'Header Latihan: Nomor bab dan progress bar nomor soal.',
      'Kartu Pertanyaan Mobile: Teks soal, pilihan jawaban satu kolom yang ramah sentuhan, atau input teks.',
      'Instant Feedback Container: Indikator Benar/Salah (Hijau/Merah) seketika setelah tombol periksa ditekan.',
      'Tombol Aksi: "Periksa Jawaban" → "Soal Berikutnya" → "Lihat Hasil".'
    ],
    userInteractions: [
      'Tap pilihan jawaban → Tap "Periksa Jawaban" → Melihat feedback → Lanjut ke soal berikutnya.'
    ],
    stateImpact: 'Memperbarui `completedUnits` di `store.js` dan menambahkan XP jika lulus.'
  },
  {
    num: '13',
    name: 'Simulasi Ujian Penuh JLPT (Mobile View — N5)',
    route: '#/exam/:level (e.g. #/exam/N5)',
    file: 'src/views/exam.js',
    dataSources: [
      'src/data/chapters/',
      'src/store.js (examResults)'
    ],
    purpose: 'Simulasi ujian JLPT berbatas waktu dalam tampilan mobile kompak.',
    screenshotFile: '13_mobile_exam_n5.png',
    layoutHierarchy: [
      'Top Exam Bar: Countdown timer tetap di atas layar + tombol Kumpulkan.',
      'Section Switcher: Tab Moji/Goi, Bunpou, Dokkai.',
      'Arena Soal Mobile: Soal pilihan ganda 1–4 dengan opsi berukuran tombol sentuh lebar.',
      'Nomor Palet Soal: Grid nomor soal untuk melompat antar pertanyaan.',
      'Laporan Hasil Akhir: Analisis nilai per seksi dan status kelulusan JLPT.'
    ],
    userInteractions: [
      'Memilih jawaban per nomor, berpindah seksi, mengirim hasil ujian saat selesai.'
    ],
    stateImpact: 'Menyimpan riwayat ujian ke `examResults` di `store.js`.'
  },
  {
    num: '14',
    name: 'Kuis Evaluasi Bab (Mobile View — Bab 1)',
    route: '#/exam/:chapterId (e.g. #/exam/1)',
    file: 'src/views/exam.js',
    dataSources: ['src/data/chapters/chapter_1.json', 'src/store.js'],
    purpose: 'Kuis singkat 10–15 soal setelah selesai mempelajari bab di ponsel.',
    screenshotFile: '14_mobile_chapter_quiz_ch1.png',
    layoutHierarchy: [
      'Kuis Header: Judul kuis dan nomor soal aktif.',
      'Question Card: Pertanyaan tata bahasa dan pilihan ganda.',
      'Modal Ringkasan: Skor akhir dan kelulusan evaluasi bab.'
    ],
    userInteractions: [
      'Menjawab kuis bertahap sampai selesai.'
    ],
    stateImpact: 'Menambahkan chapter ID ke `passedChapterExams` di `store.js`.'
  }
];

// 1. Generate Markdown Document
let mdContent = `# NIHONGOMASTER — COMPLETE MOBILE UI & ARCHITECTURE AUDIT DOSSIER

> **Dokumen Tunggal (Self-Contained Single File)**: 
> Dokumen ini berisi seluruh tangkapan layar **versi mobile (viewport 390x844, 2x DPR)** dalam format **Base64 Data URI tersemat langsung**, struktur hierarki layout, state flow, dan mapping data untuk seluruh **14 view mobile** aplikasi **NihongoMaster** (kondisi berjalan terkini).
>
> Dokumen ini siap di-copy atau di-upload langsung ke **Claude** untuk keperluan audit Information Architecture dan UI restructuring tanpa memerlukan file gambar eksternal terpisah.

---

## 1. Metadata Teknis Aplikasi

| Parameter | Spesifikasi |
|---|---|
| **Jenis Aplikasi** | Single Page Application (SPA) |
| **Tech Stack** | Vanilla JavaScript (ES Modules) + Vite 8 |
| **Viewport Audit** | **Mobile Phone: 390 x 844 px (2x DPR / High Density)** |
| **Routing System** | Hash Routing (\`window.location.hash\`) terpusat di \`src/router.js\` |
| **Design System** | Apple / Linear "Kindle Dark Aesthetic" (\`#0A0A0C\` Charcoal, Zinc Scale, Indigo Accent \`#7C7BF0\`, 1px Hairline borders, Squircle 32px badge containers) |
| **State & Persistence** | \`localStorage\` (\`nihongo_master_data\`) terpusat di \`src/store.js\` |
| **Spaced Repetition** | SM-2 Engine terpusat di \`src/srs.js\` |
| **Typography** | Inter / Plus Jakarta Sans (UI) + Noto Sans JP (Aksara Jepang), line-height 1.5–1.6 |

---

## 2. Peta Arsitektur Navigasi Eksisting

\`\`\`
[NAV UTAMA - LAPIS 1 & 2 SAAT INI]
├── 🏠 Dashboard (#/ atau #/dashboard)
├── 📋 Peta Kurikulum (#/curriculum)
└── 🧭 Panduan Belajar (#/guide)

[MODUL BELAJAR SAAT INI]
├── 📖 Grammar Digest (#/minna)
├── 🔁 SRS Review (#/review)
├── ✍️ Latihan Menulis (#/writing)
├── 🈸 Kanji Hub (#/kanji)
└── ❓ Glosarium Istilah (#/glossary)

[DETAIL & ASSESSMENTS]
├── 📚 Studi Bab (#/chapter/:id)
├── 📝 Buku Kerja (#/workbook/:id)
├── 🏆 Simulasi Ujian JLPT (#/exam/:level)
└── ⏱️ Kuis Evaluasi Bab (#/exam/:chapterId)
\`\`\`

---

## 3. Katalog Detail 14 View Mobile & Tangkapan Layar Lengkap

`;

pagesData.forEach(p => {
  const base64Img = getBase64Image(p.screenshotFile);
  mdContent += `
---

### ${p.num}. ${p.name}

**Route**: \`${p.route}\`  
**File View**: \`${p.file}\`  
**Data Sources**:
${p.dataSources.map(d => `- \`${d}\``).join('\n')}

#### Tangkapan Layar Mobile (Embedded Visual):
![${p.name}](${base64Img})

#### A. Tujuan & Utilitas Utama:
${p.purpose}

#### B. Struktur Layout & Hierarki Komponen Mobile:
${p.layoutHierarchy.map(l => `- ${l}`).join('\n')}

#### C. Interaksi Pengguna & Alur Aksi Mobile:
${p.userInteractions.map(u => `- ${u}`).join('\n')}

#### D. Dampak State & LocalStorage:
${p.stateImpact}
`;
});

mdContent += `
---

## 4. Ringkasan Mapping Navigasi untuk Audit Restrukturisasi

Berikut adalah rencana restrukturisasi Information Architecture yang diinstruksikan dalam \`prompt-restrukturisasi-nihongomaster.md\` untuk diverifikasi terhadap visual mobile di atas:

| Kategori Navigasi Baru | Nama Menu Baru | Route Target | Integrasi dari Modul Eksisting |
|---|---|---|---|
| **Lapis 1 (Core Loop)** | **Home** | \`#/\` | Dashboard (tetap sebagai hub sentral, ditambah shortcut card ke Reference Hub, Arena Ujian, dan Kurikulum). |
| **Lapis 1 (Core Loop)** | **Belajar** | \`#/chapter/:id\` | Studi Bab (tetap, reuse komponen untuk Track N3 Bab 51–75). |
| **Lapis 1 (Core Loop)** | **Review** | \`#/review\` | SRS Review (diperluas: antrean gabungan Vocab + Kanji + **Grammar Pattern**). |
| **Lapis 1 (Core Loop)** | **Latihan** | \`#/practice\` | Route baru ber-tab: [Menulis / Writing Canvas] + [Sentence Ordering Drill] + [Jukugo Builder]. |
| **Lapis 2 (Referensi)** | **Lainnya → Referensi** | \`#/reference\` | Menggabungkan \`#/minna\` (Grammar Digest) + \`#/glossary\` (Glosarium) dalam tabbed view tunggal. |
| **Lapis 2 (Referensi)** | **Lainnya → Kurikulum** | \`#/curriculum\` | Peta Kurikulum (dipindah ke submenu Lainnya + penambahan Track N3 Bab 51–75). |
| **Lapis 2 (Referensi)** | **Lainnya → Kanji Hub** | \`#/kanji\` | Kanji Explorer (dipindah ke submenu Lainnya). |
| **Lapis 2 (Referensi)** | **Lainnya → Panduan** | \`#/guide\` | Panduan Belajar (dipindah ke submenu Lainnya). |
| **Lapis 3 (Assessment)** | **Arena Ujian** | \`#/exam-hub\` | Landing page mode ujian serius: Buku Kerja (\`#/workbook/:id\`), Listening Practice, Reading Practice, Simulasi JLPT (\`#/exam/:level\`). |
`;

fs.writeFileSync(OUTPUT_MD, mdContent, 'utf-8');
console.log('UI_AUDIT_DOSSIER.md successfully created with Mobile screenshots! Size:', (fs.statSync(OUTPUT_MD).size / 1024 / 1024).toFixed(2), 'MB');

// Also create HTML version for direct browser viewing
let htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>NihongoMaster — Mobile UI & Architecture Audit Dossier</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #0c0d0e; color: #e1e4e8; line-height: 1.6; margin: 0; padding: 30px 16px; }
  .container { max-width: 860px; margin: 0 auto; background: #16181c; border: 1px solid #2d333b; border-radius: 12px; padding: 32px 24px; }
  h1, h2, h3, h4 { color: #f0f6fc; }
  h1 { border-bottom: 2px solid #30363d; padding-bottom: 14px; font-size: 24px; }
  h2 { border-bottom: 1px solid #30363d; padding-bottom: 8px; margin-top: 36px; color: #7C7BF0; font-size: 20px; }
  h3 { margin-top: 28px; color: #58a6ff; font-size: 18px; }
  table { width: 100%; border-collapse: collapse; margin: 18px 0; font-size: 13px; }
  th, td { border: 1px solid #30363d; padding: 8px 12px; text-align: left; }
  th { background: #21262d; color: #f0f6fc; }
  code { background: #21262d; color: #79c0ff; padding: 2px 6px; border-radius: 4px; font-size: 12px; }
  pre { background: #21262d; padding: 14px; border-radius: 8px; overflow-x: auto; font-size: 13px; }
  .mobile-img-wrapper { text-align: center; margin: 20px 0; }
  img.mobile-frame { width: 340px; max-width: 100%; height: auto; border-radius: 24px; border: 4px solid #2d333b; box-shadow: 0 12px 36px rgba(0,0,0,0.6); }
</style>
</head>
<body>
<div class="container">
  <h1>NIHONGOMASTER — MOBILE UI & ARCHITECTURE AUDIT DOSSIER</h1>
  <p>Dokumen kompilasi visual tangkapan layar <strong>versi Mobile (390x844, 2x DPR)</strong> beserta struktur hierarki layout, state, dan mapping data untuk 14 tampilan aplikasi NihongoMaster.</p>
  
  <h2>1. Metadata Teknis Aplikasi</h2>
  <table>
    <tr><th>Parameter</th><th>Spesifikasi</th></tr>
    <tr><td>Platform</td><td>Single Page Application (Vanilla JS + Vite 8)</td></tr>
    <tr><td>Viewport Audit</td><td><strong>Mobile Device: 390 x 844 px (2x DPR)</strong></td></tr>
    <tr><td>Routing</td><td>Hash-based Router (<code>window.location.hash</code>) di <code>src/router.js</code></td></tr>
    <tr><td>Design System</td><td>Apple / Linear Dark (<code>#0A0A0C</code>, Indigo Accent <code>#7C7BF0</code>, Hairline borders)</td></tr>
    <tr><td>State Manager</td><td><code>localStorage</code> via <code>src/store.js</code></td></tr>
    <tr><td>SRS Algorithm</td><td>SM-2 Engine di <code>src/srs.js</code></td></tr>
  </table>

  <h2>2. Katalog 14 Tampilan Mobile Lengkap</h2>
`;

pagesData.forEach(p => {
  const base64Img = getBase64Image(p.screenshotFile);
  htmlContent += `
  <div style="border-top: 1px solid #30363d; margin-top: 36px; padding-top: 20px;">
    <h3>${p.num}. ${p.name}</h3>
    <p><strong>Route:</strong> <code>${p.route}</code> | <strong>File:</strong> <code>${p.file}</code></p>
    <p><strong>Data Sources:</strong> ${p.dataSources.map(d => `<code>${d}</code>`).join(', ')}</p>
    <div class="mobile-img-wrapper">
      <img class="mobile-frame" src="${base64Img}" alt="${p.name}">
    </div>
    <h4>A. Tujuan & Utilitas</h4>
    <p>${p.purpose}</p>
    <h4>B. Hierarki Komponen Mobile</h4>
    <ul>${p.layoutHierarchy.map(l => `<li>${l}</li>`).join('')}</ul>
    <h4>C. Interaksi Pengguna Mobile</h4>
    <ul>${p.userInteractions.map(u => `<li>${u}</li>`).join('')}</ul>
    <h4>D. State & LocalStorage</h4>
    <p>${p.stateImpact}</p>
  </div>
  `;
});

htmlContent += `
</div>
</body>
</html>`;

fs.writeFileSync(OUTPUT_HTML, htmlContent, 'utf-8');
console.log('UI_AUDIT_DOSSIER.html successfully created with Mobile screenshots!');
