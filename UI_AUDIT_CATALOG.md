# NIHONGOMASTER — UI & INFORMATION ARCHITECTURE AUDIT CATALOG

Dokumen ini berisi kompilasi visual tangkapan layar (screenshot) seluruh halaman, struktur layout, state, dan mapping data dari aplikasi web **NihongoMaster** (kondisi terkini). Disusun secara terstruktur untuk keperluan review UI/UX dan audit restrukturisasi Information Architecture oleh Claude.

---

## 1. Metadata Aplikasi & Tech Stack

| Parameter | Spesifikasi |
|---|---|
| **Platform** | Single Page Application (SPA) |
| **Framework / Bundler** | Vanilla JavaScript (ES Modules) + Vite |
| **Routing** | Hash-based Router (`window.location.hash`) via `src/router.js` |
| **Styling** | Vanilla CSS (`src/styles/main.css`) dengan Design Tokens HSL |
| **Design Language** | Apple / Linear Dark Aesthetic ("Rich Charcoal" `#0A0A0C`, Zinc Scale, Indigo Accent `#7C7BF0`, Squircle geometry, Hairline borders) |
| **Icons** | Lucide Icons (CDN + Inline SVG fallbacks) |
| **Data Persistence** | `localStorage` (`nihongo_master_data`) via `src/store.js` |
| **Algorithm** | SM-2 Spaced Repetition (`src/srs.js`) |

---

## 2. Peta Halaman & Navigasi Saat Ini

```
[NAV UTAMA]
├── 🏠 Dashboard (#/)
├── 📋 Peta Kurikulum (#/curriculum)
└── 🧭 Panduan Belajar (#/guide)

[MODUL BELAJAR]
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
```

---

## 3. Galeri Halaman & Audit Komponen

---

### 01. Dashboard Utama (`#/`)

- **Screenshot File**: `screenshots/01_dashboard.png`
- **File View**: `src/views/dashboard.js`
- **Tujuan**: Central command hub, statistik harian, streak, heatmap aktivitas GitHub-style, progress per track (N5 & N4), dan shortcut akses cepat.
- **Komponen Kunci**:
  1. **Daily Mission Banner**: Menampilkan bab target berikutnya berdasarkan track aktif.
  2. **Stat Bento Grid**: 4 card metrik (Target Harian, XP Kumulatif, Hari Berturut-turut, Review Due Hari Ini).
  3. **Activity Heatmap**: 52-week calendar grid (kontribusi/menit belajar harian).
  4. **Kurikulum Track Cards**: Progress bar Minna I (N5) dan Minna II (N4).
  5. **Modul Akses Cepat**: Bento card shortcut ke Writing, Kanji, dan Exam.
- **Data Source**: `src/store.js` (`xp`, `streak`, `activityLog`, `completedUnits`), `src/srs.js` (`getDueCount()`), `src/data/chapter_index.js`.
- **Catatan Audit UI**:
  - Track N3 belum memiliki card tersendiri di section kurikulum.
  - Bento grid cards saat ini menggunakan squircle container seragam (32x32px).

---

### 02. Peta Kurikulum (`#/curriculum`)

- **Screenshot File**: `screenshots/02_curriculum.png`
- **File View**: `src/views/curriculum.js`
- **Tujuan**: Roadmap menyeluruh perjalanan belajar dari Bab 0 sampai Bab 50.
- **Komponen Kunci**:
  1. Level 1: Pengenalan & Aksara (Kana Dasar).
  2. Level 2: Shokyu 1 / Minna I (Bab 1–25, N5).
  3. Level 3: Shokyu 2 / Minna II (Bab 26–50, N4).
  4. Unit Card dengan status: Selesai (centang hijau), Terbuka, Terkunci.
  5. Shortcut langsung ke *Studi Bab* dan *Buku Kerja*.
- **Data Source**: `src/data/curriculum.js` (`CURRICULUM`), `src/store.js` (`completedUnits`).
- **Catatan Audit UI**:
  - Sangat komprehensif untuk N5-N4, tetapi belum menampilkan slot untuk Level 4 / Track N3 (Bab 51–75).

---

### 03. Panduan Belajar (`#/guide`)

- **Screenshot File**: `screenshots/03_guide.png`
- **File View**: `src/views/preface.js`
- **Tujuan**: Onboarding dan panduan strategi belajar efektif metode Minna no Nihongo.
- **Komponen Kunci**:
  1. Hero statement ("Metode Belajar Terstruktur").
  2. 4 Langkah Siklus Belajar (Kosakata → Tata Bahasa → Buku Kerja → SRS).
  3. Tips Menghafal Kanji & Partikel.
  4. Penjelasan target kelulusan JLPT.
- **Data Source**: Statis di dalam `preface.js`.

---

### 04. Grammar Digest (`#/minna`)

- **Screenshot File**: `screenshots/04_grammar_digest.png`
- **File View**: `src/views/minna.js`
- **Tujuan**: Ensiklopedia cepat tata bahasa (Bab 1–50) yang bisa dicari/difilter.
- **Komponen Kunci**:
  1. Search bar instan untuk mencari rumus/partikel tertentu.
  2. Quick chapter jump pills (Bab 1, 2, ..., 50).
  3. Expandable grammar cards dengan Formula, Penjelasan Bahasa Indonesia, Poin Nuansa, dan Contoh Kalimat (JP, Romaji, ID).
  4. Tombol "Cetak PDF" / Print layout.
- **Data Source**: `src/data/chapter_data.js` (`MNN_DATA`) via dynamic import.
- **Catatan Audit UI**:
  - Direncanakan untuk dimerge ke `#/reference` (Reference Hub) dengan tab switcher berdampingan dengan Glosarium.

---

### 05. SRS Review (`#/review`)

- **Screenshot File**: `screenshots/05_srs_review.png`
- **File View**: `src/views/review.js`
- **Tujuan**: Sesi flashcard Spaced Repetition SM-2 untuk mereview kosakata dan kanji yang jatuh tempo hari ini.
- **Komponen Kunci**:
  1. SRS Progress bar & remaining card counter.
  2. Flip card interaktif (Sisi Depan: Kanji/Kana → Sisi Belakang: Arti, Bacaan, Audio, Contoh).
  3. Rating bar SM-2 (Lupa / Hard / Good / Easy: tombol skor 1–5).
  4. Ringkasan hasil review & pertambahan XP di akhir sesi.
- **Data Source**: `src/srs.js`, `src/store.js` (`srsItems`).
- **Catatan Audit UI**:
  - Saat ini fokus pada vocab dan kanji. Perlu diperluas untuk menerima item bertipe `grammar`.

---

### 06. Latihan Menulis / Writing (`#/writing`)

- **Screenshot File**: `screenshots/06_writing_practice.png`
- **File View**: `src/views/writing.js`
- **Tujuan**: Canvas interaktif untuk melatih goresan (stroke order) Hiragana, Katakana, dan Kanji N5/N4.
- **Komponen Kunci**:
  1. Tab pemilih mode: Hiragana / Katakana / Kanji N5 / Kanji N4.
  2. Grid karakter dengan status penguasaan.
  3. HTML5 Drawing Canvas dengan panduan garis bantu (grid 2x2), tombol Undo, Clear, dan Stroke Hint Animation.
- **Data Source**: `src/data/kana.js`, `src/data/hiragana.js`, `src/data/katakana.js`, `src/data/kanji.js`.
- **Catatan Audit UI**:
  - Modul ini akan menjadi Tab 1 ("Menulis") di dalam route baru `#/practice`.

---

### 07. Kanji Hub (`#/kanji`)

- **Screenshot File**: `screenshots/07_kanji_hub.png`
- **File View**: `src/views/kanji.js`
- **Tujuan**: Kamus dan explorer interaktif Kanji N5, N4, dan N3.
- **Komponen Kunci**:
  1. Filter level (Semua, N5, N4, N3) & Search bar (arti/kunyomi/onyomi).
  2. Kanji Card Grid (menampilkan Kanji, Arti, Jumlah Goresan, Onyomi, Kunyomi).
  3. Modal Detail Kanji (menampilkan goresan besar, contoh kosakata jukugo, dan shortcut latihan menulis).
- **Data Source**: `src/data/kanji.js`.

---

### 08. Glosarium Istilah (`#/glossary`)

- **Screenshot File**: `screenshots/08_glossary.png`
- **File View**: `src/views/glossary.js`
- **Tujuan**: Referensi terminologi linguistik bahasa Jepang (e.g., Futsukei, Te-form, Keigo, Jukugo, Furigana, Partikel).
- **Komponen Kunci**:
  1. Kategori filter (Aksara, Bentuk Kata Kerja, Kalimat, Budaya Bahasa).
  2. Search bar istilah.
  3. Term card dengan penjelasan detail dan contoh praktis.
- **Data Source**: `GLOSSARY_TERMS` di dalam `src/views/glossary.js`.

---

### 09. Studi Bab (`#/chapter/:id`)

- **Screenshot File**: `screenshots/09_chapter_study_ch1.png`
- **File View**: `src/views/chapter.js`
- **Tujuan**: Halaman inti pembelajaran per bab (Modul Belajar mendalam).
- **Komponen Kunci**:
  1. Sub-navigasi bab (Kosakata, Pola Kalimat, Tata Bahasa Mendalam, Percakapan/Kaiwa).
  2. Tab Kosakata: Audio player, Furigana/Romaji toggle, tombol "Tambah ke SRS".
  3. Tab Tata Bahasa: Bedah struktur kalimat, rumus, dan catatan nuansa alami (Native Note).
  4. Quick Navigation: Pindah ke Bab Sebelumnya / Bab Selanjutnya / Buka Buku Kerja.
- **Data Source**: `src/data/chapters/chapter_{id}.json` via lazy load `loadChapter(id)`.

---

### 10. Studi Bab Lanjutan (`#/chapter/14` — Contoh Te-Form)

- **Screenshot File**: `screenshots/10_chapter_study_ch14.png`
- **Tujuan**: Contoh tampilan materi konjugasi kompleks (Golongan kata kerja 1, 2, 3 dan perubahan bentuk Te).
- **Komponen Kunci**: Tabel konjugasi interaktif, kartu latihan kilat, catatan jebakan umum pelajar asing.

---

### 11. Buku Kerja / Workbook (`#/workbook/:id`)

- **Screenshot File**: `screenshots/11_workbook_ch1.png`
- **File View**: `src/views/workbook.js`
- **Tujuan**: Lembar latihan soal per bab (mengadopsi struktur Renshuu B & C Minna no Nihongo).
- **Komponen Kunci**:
  1. Multi-tipe soal: Pilihan ganda, Isian partikel, dan Terjemahan.
  2. Instant feedback (indikator benar/salah hijau/merah beserta pembahasan kunci).
  3. Score summary dan penambahan XP otomatis jika lulus.
- **Data Source**: Array `workbook` di dalam `src/data/chapters/chapter_{id}.json`.

---

### 12. Simulasi Ujian JLPT (`#/exam/:level`)

- **Screenshot File**: `screenshots/12_exam_n5.png`
- **File View**: `src/views/exam.js`
- **Tujuan**: Arena ujian simulasi penuh berbatas waktu (mock JLPT N5/N4/N3).
- **Komponen Kunci**:
  1. Countdown timer aktif.
  2. Section switcher: Moji/Goi (Kosakata), Bunpou (Tata Bahasa), Dokkai (Membaca).
  3. Question navigator grid (nomor soal 1..N dengan status dijawab).
  4. Scoring engine dengan passing mark resmi JLPT.
- **Data Source**: `src/data/chapters/` & exam datasets.

---

### 13. Kuis Evaluasi Bab (`#/exam/:chapterId`)

- **Screenshot File**: `screenshots/13_chapter_quiz_ch1.png`
- **File View**: `src/views/exam.js`
- **Tujuan**: Tes kilat pemahaman sebelum bab dinyatakan "Tuntas/Mastered".
- **Komponen Kunci**: 10–15 soal acak dari materi bab terkait dengan verifikasi skor instan.

---

## 4. Evaluasi Desain UI & Token Konsistensi

1. **Geometry & Borders**: Semua card menggunakan border hairline `1px solid var(--border)` (`rgba(255,255,255,0.07)` pada Dark Mode).
2. **Iconography**: Semua ikon menu dan badge modul dibungkus container squircle `32x32px` dengan background tint transparan 12% dan border 25%.
3. **Typography**: Menggunakan font sans-serif modern (`Inter` / `Plus Jakarta Sans`) untuk UI Latin dan `Noto Sans JP` untuk teks Jepang dengan line-height 1.5–1.6 (Kindle aesthetic).
4. **Theme Switcher**: Menggunakan inline SVG toggle (Matahari / Bulan) di sidebar footer yang bebas flicker.

---

## 5. Ringkasan Rencana Perubahan Navigasi (Untuk Konfirmasi Claude)

| Menu Eksisting | Menu Baru (3-Layer IA) | Target Route | Bentuk Integrasi |
|---|---|---|---|
| `#/` Dashboard | **Home** | `#/` | Tetap, ditambah widget shortcut ke modul sekunder |
| `#/chapter/:id` | **Belajar** | `#/chapter/:id` | Tetap, reuse schema untuk bab N3 |
| `#/review` | **Review** | `#/review` | Diperluas: Vocab + Kanji + **Grammar Pattern** |
| `#/writing` | **Latihan** | `#/practice` | Tabbed container: [Menulis] [Sentence Drill] [Jukugo] |
| `#/minna` + `#/glossary` | **Lainnya → Referensi** | `#/reference` | Tabbed view: [Grammar Digest] [Glosarium] |
| `#/curriculum` | **Lainnya → Kurikulum** | `#/curriculum` | Tambah Level 4 (Track N3 Bab 51–75) |
| `#/kanji` | **Lainnya → Kanji** | `#/kanji` | Dipindah ke submenu Lainnya |
| `#/guide` | **Lainnya → Panduan** | `#/guide` | Dipindah ke submenu Lainnya |
| `#/workbook` & `#/exam` | **Arena Ujian** | `#/exam-hub` | Hub sentral: Workbook, Listening, Reading, JLPT Mock |
