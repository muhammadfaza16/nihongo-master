# TASK: Simplifikasi UI & Struktur — Turunkan Cognitive Load, Naikkan Efektivitas Belajar

Kamu akan melakukan refactor UI/UX pada app NihongoMaster (Vanilla JS + Vite, hash router, `src/store.js`, `src/srs.js`). Goal: **kurangi extraneous cognitive load** (beban dari desain UI, bukan dari materi) tanpa mengurangi **germane load** (usaha mental yang produktif buat retensi belajar, seperti retrieval SRS).

Prinsip yang dipakai (Cognitive Load Theory): pangkas UI yang bikin user "scan & filter" sebelum bisa bertindak, jangan sentuh interaksi yang emang sengaja effortful buat belajar (SRS flip+rating, buku kerja per-soal, chunking tab materi). Kalau ragu apakah sesuatu itu extraneous atau germane, tanya saya — jangan tebak dan langsung ubah.

Baca dulu file-file terkait di bawah sebelum ubah apa pun, dan laporkan struktur/dependency yang kamu temukan sebelum eksekusi (lihat bagian "Sebelum Mulai").

---

## FIX 1 — Dashboard (`src/views/dashboard.js`, route `#/`)

**Masalah**: Terlalu banyak blok informasi sejajar prioritasnya di layar pertama (top bar+dropdown mode, Daily Mission Card, 4 Stat Bento, Heatmap 52 minggu, 2 Track Progress Cards, 3 shortcut Akses Cepat) — user harus scan semua sebelum tahu harus ngapain.

**Perubahan**:
1. Bagi jadi 2 tier visual:
   - **Tier atas (selalu full-visible, no scroll)**: Daily Mission Card + due count SRS saja. Ini yang jawab "gue belajar apa sekarang" — harus jadi fokus visual tunggal.
   - **Tier bawah (di bawah fold, boleh perlu scroll/collapsed by default)**: Stat Bento Grid, Heatmap, Track Progress Cards, Akses Cepat.
2. Kalau frontend stack mendukung, buat tier bawah collapsible (`<details>` atau toggle section) dengan default collapsed, bukan dihapus — datanya tetap penting, cuma bukan prioritas pertama.
3. Jangan ubah data source atau logic penghitungan (`xp`, `streak`, `activityLog`, `completedUnits`, `getDueCount()`) — murni reorder & grouping visual.

## FIX 2 — Pindahkan toggle Mode Furi/Kana/Rom keluar dari Dashboard

**Masalah**: Dropdown ini ada di top bar Dashboard, padahal cuma relevan dipakai di layar yang nampilin teks Jepang (Studi Bab). Proximity violation — user harus inget setting yang ga dipakai di layar itu.

**Perubahan**:
1. Hapus dropdown Mode Furi/Kana/Rom dari top bar `dashboard.js`.
2. Pindahkan ke dalam `src/views/chapter.js` (`#/chapter/:id`), taruh dekat konten yang dipengaruhi (tabel kosakata/kalimat), bukan di top bar global.
3. Pastikan state preference-nya (kemungkinan tersimpan di `store.js` atau localStorage) tetap terbaca dari lokasi yang sama — cuma UI togglenya yang pindah, bukan storage key-nya. Kalau ternyata togglenya dipakai lebih dari satu view selain chapter (cek dulu), laporkan ke saya sebelum mindahin, karena bisa jadi butuh tetap ada di layer global (misal di Settings) dengan chapter view baca dari situ.

## FIX 3 — Grammar Digest (`src/views/minna.js`, route `#/minna`) — group pills per level

**Masalah**: 50 chapter pills sejajar horizontal, jauh di atas kapasitas scanning visual manusia. Search box ada tapi ga nolong kalau user belum tahu nama pola yang dicari.

**Perubahan**:
1. Tambahkan segmented control 2-opsi di atas pills: **N5 (Bab 1–25)** / **N4 (Bab 26–50)**.
2. Pills chapter yang tampil difilter sesuai segmen aktif (jadi user scan max ~25 item, bukan 50).
3. Search box tetap global (search across semua bab terlepas dari segmen aktif) — search dan segmented filter jalan independen, search override filter kalau user ngetik.
4. Default segmen aktif: sesuai level chapter aktif user saat ini (ambil dari `completedUnits`/progress di `store.js`), bukan selalu default ke N5.

## FIX 4 — Klarifikasi fungsi Grammar Digest vs. tab "Tata Bahasa" di Studi Bab

**Masalah**: Dua tempat nampilin grammar (`#/minna` dari `chapter_data.js`, dan tab Tata Bahasa di `#/chapter/:id` dari `chapters/chapter_N.json`) tanpa pembedaan fungsi yang jelas di UI — user bingung harus buka yang mana.

**Perubahan**:
1. Reframe **Grammar Digest** murni sebagai mode **lookup cepat**: tambahkan label/header eksplisit di top toolbar-nya, misal "🔍 Cari Cepat — Referensi Ringkas", dan simplify card di sana ke: rumus + 1 contoh kalimat saja (buang elaborasi panjang kalau ada).
2. Tab **Tata Bahasa** di Studi Bab tetap versi pedagogis lengkap (poin penting, catatan nuansa, contoh percakapan) — ga berubah.
3. **Jangan duplikasi data ke 2 tempat.** Cek dulu apakah `chapter_data.js` dan `chapters/chapter_N.json` itu 2 file terpisah dengan isi grammar yang sama atau beda. Kalau sama, refactor supaya Grammar Digest **fetch/derive** dari `chapters/chapter_N.json` (satu source of truth), bukan punya file data sendiri. Laporkan dulu temuannya ke saya sebelum eksekusi refactor data ini — ini paling berisiko breaking change dibanding fix lain di prompt ini.

## FIX 5 — Navigation Drawer (`src/components/layout.js`) — restrukturisasi frequency-based

**Masalah**: Grup "Modul Belajar" isi 5 item flat (Grammar Digest, SRS Review, Latihan Menulis, Kanji Hub, Glosarium) tanpa sinyal mana yang dipakai harian vs sesekali.

**Perubahan** — reorganisasi jadi 3 kelompok di drawer:
- **Harian** (taro paling atas): SRS Review, Latihan Menulis.
- **Referensi** (grup baru, collapsed/di bawah): Grammar Digest, Kanji Hub, Glosarium, Peta Kurikulum, Panduan Belajar.
- **Assessment**: Buku Kerja per bab (link kontekstual dari chapter, ga perlu entry drawer terpisah), Simulasi Ujian.

Catatan: ini versi ringan dari restrukturisasi nav yang lebih besar (Core/Library/Assessment 3-lapis) yang sudah didiskusikan sebelumnya — kalau kamu (agent) menemukan draft/prompt lain terkait itu di riwayat kerja, cek dulu apakah dua-duanya perlu diselaraskan supaya ga bikin 2 struktur nav yang saling tabrakan.

---

## Sebelum Mulai — WAJIB lapor dulu, jangan eksekusi buta

Sebelum ubah kode apa pun, tulis laporan singkat ke saya berisi:

1. **Konfirmasi struktur file & dependency** — screenshot/paste struktur real dari `dashboard.js`, `layout.js`, `minna.js`, `chapter.js` yang relevan ke 5 fix di atas, supaya saya bisa cross-check sebelum kamu ubah.
2. **Temuan soal FIX 4** (duplikasi data grammar) — ini paling kritis, jangan lanjut sebelum saya konfirmasi apakah datanya emang duplikat atau ternyata memang beda schema/isi.
3. **Blind spot** — ada bagian dari 5 fix di atas yang menurutmu bakal break state/komponen lain yang ga disebut di prompt ini? Sebutkan eksplisit, termasuk kalau ada CSS/layout dependency ke posisi elemen yang dipindah (misal dropdown mode di Fix 2 mungkin punya sticky-position logic yang perlu disesuaikan di lokasi baru).
4. **Urutan eksekusi yang kamu sarankan** — boleh beda dari urutan penomoran di atas kalau menurutmu ada yang lebih aman dikerjakan duluan/belakangan secara teknis.

Tunggu jawaban saya dulu sebelum mulai coding. Setelah itu, kerjakan **satu FIX per checkpoint** — tunjukkan diff/preview tiap selesai satu fix, jangan lanjut ke fix berikutnya sebelum saya review. Kalau di tengah jalan nemu masalah baru yang ga kebaca di awal, stop dan lapor, jangan lanjut berdasarkan asumsi sendiri.
