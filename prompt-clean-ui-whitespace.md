# TASK: Visual Decluttering — Clean UI & Whitespace Balance

Kamu akan melakukan refactor **visual/styling murni** pada app NihongoMaster (Vanilla JS + Vite, Design System: Apple/Linear Dark `#0A0A0C`, Indigo Accent `#7C7BF0`, Hairline borders, squircle radius `--radius-md: 10px`, Kindle typography `line-height: 1.6`, `font-weight: 500`). Goal: bikin UI kerasa **clean & bernapas**, bukan padat/crowded — tanpa mengurangi informasi atau fungsi yang sudah ada.

**Scope ketat**: ini task styling (spacing, hierarchy visual, density), BUKAN restrukturisasi route/data/component logic. Kalau nemu masalah struktural di tengah jalan, catat terpisah, jangan langsung dieksekusi di task ini.

---

## Prinsip Kerja

1. **Whitespace bukan "ruang kosong yang harus diisi"** — treat sebagai elemen desain aktif buat misahin grup informasi. Kalau ragu nambah elemen visual (border, background, divider) vs cukup kasih jarak (margin/padding), **pilih jarak dulu**.
2. **Satu sumber pemisah visual per konteks** — jangan tumpuk border + background beda + shadow buat misahin 1 grup elemen yang sama. Pilih salah satu (biasanya cukup spacing + 1 hairline border ATAU 1 background tone, jangan dua-duanya sekaligus).
3. **Hindari "box-in-box"** — kalau ada card di dalam card di dalam section (nested container), evaluasi apakah level terdalam bisa dilepas bordernya dan cukup pakai spacing/typography buat misahin.
4. **Hierarki tipografi dibatasi max 3-4 tingkat per layar** (contoh: Judul Section → Judul Card → Body → Caption). Kalau nemu lebih dari itu di satu layar, konsolidasi.

## Langkah 1 — Definisikan Spacing Scale (fondasi sebelum sentuh screen manapun)

Buat/konfirmasi 1 scale spacing konsisten (8pt grid direkomendasikan: `4, 8, 12, 16, 24, 32, 48, 64px`) sebagai CSS variables (`--space-1` sampai `--space-7` atau penamaan serupa yang konsisten sama existing `--radius-md`). Semua margin/padding di seluruh app harus narik dari scale ini — **tidak ada nilai spacing hardcoded/ad-hoc** (misal `margin: 13px` atau `padding: 18px 7px` harus dibulatkan ke scale terdekat).

Terapkan aturan breathing room minimum:
- Antar **section besar** dalam 1 halaman (misal antar Stat Grid dan Heatmap di Dashboard): minimum `--space-6` (32px+).
- Antar **card sejenis** dalam 1 grid/list (misal antar Grammar Card, antar Kanji Card): minimum `--space-3` (16px).
- Padding internal card: minimum `--space-3` di semua sisi, jangan asimetris tanpa alasan jelas.

## Langkah 2 — Audit "Box-itis" per Screen

Cek tiap 14 screen di codebase (`src/views/*.js`) untuk pola nested-container berlebih. Prioritas titik yang kemungkinan besar kena:

| Screen | Titik yang dicurigai crowded | Arahan fix |
|---|---|---|
| **Dashboard** (`dashboard.js`) | Stat Bento Grid 4 kartu + Heatmap + Track Progress + Akses Cepat semuanya boxed dengan border masing-masing, ditumpuk vertikal rapat | Lepas border dari kartu yang levelnya "sub-info" (biarkan cuma spacing + typography misahin), sisain border/background cuma buat elemen yang benar-benar perlu ditekankan (Daily Mission Card) |
| **Grammar Digest** (`minna.js`) | Grammar Card Stack: Formula box + Poin penting + Catatan nuansa + Contoh kalimat — kemungkinan tiap sub-elemen punya box/background sendiri di dalam 1 card | Sisakan box/highlight cuma di **Formula** (karena itu core-info yang perlu signaling kuat), sisanya (poin penting, catatan, contoh) cukup dibedain pakai label kecil + spacing, bukan box terpisah |
| **Kanji Hub** (`kanji.js`) | Grid 2-3 kolom kartu kanji, tiap kartu isi banyak field (huruf, arti, goresan, onyomi, kunyomi) dalam ruang sempit | Evaluasi: apakah semua field perlu tampil di grid view, atau cukup Huruf+Arti di grid dan sisanya (Onyomi/Kunyomi/goresan) dipindah full ke Modal Detail (yang udah ada) — grid card jadi lebih lega |
| **Studi Bab** (`chapter.js`) | Tabel Kosakata Mobile: tiap baris ada kata+audio+romaji/furigana+tombol "+SRS" berjejer di ruang mobile sempit | Cek density antar baris tabel — pastikan padding vertikal antar row cukup (minimum `--space-2`/8px), bukan cuma dempet dipisah border tipis |
| **Buku Kerja** (`workbook.js`) | Header + Progress bar + Question Card + Feedback Container ditumpuk — cek apakah tiap elemen ini punya container/border sendiri yang bisa dikonsolidasi | Feedback (benar/salah) sebaiknya nyatu ke dalam Question Card yang sama (ganti warna/border card itu sendiri saat feedback muncul), bukan container baru muncul di bawahnya |
| **Glosarium** (`glossary.js`) | Vertical Term Cards dengan badge kategori + border per card, mirip pola Grammar Digest | Sama treatment kayak Grammar Digest — badge kategori cukup 1 visual accent (warna teks/dot kecil), bukan badge full-box berwarna |

Untuk screen yang tidak disebut di tabel (Nav Drawer, Peta Kurikulum, Panduan, SRS Review, Latihan Menulis, Exam), tetap lakukan audit box-itis yang sama, tapi laporkan dulu temuannya sebelum eksekusi — jangan asumsi semua screen butuh treatment yang sama.

## Langkah 3 — Hierarki Warna & Aksen

Accent color `#7C7BF0` (Indigo) saat ini kemungkinan dipakai di banyak tempat (badge, border aktif, tombol, progress bar). Batasi pemakaian accent color hanya untuk:
- CTA utama/tombol aksi primer (1 per layar idealnya).
- Indikator state aktif (misal tab aktif, pill terpilih).

Elemen dekoratif/badge/kategori yang bukan aksi utama sebaiknya pakai grayscale/neutral tone dari palette existing (`#e1e4e8`, `#30363d`, dll — cek variable yang sudah ada di codebase), supaya accent color tetap punya "signal value" — kalau dipakai di mana-mana, dia kehilangan fungsi menarik perhatian.

## Langkah 4 — Typography Cleanup

- Konfirmasi max 3-4 font-size steps yang dipakai konsisten di seluruh app (contoh: Section Title, Card Title, Body, Caption/Label). Kalau nemu font-size di luar steps ini (misal ada 1-2 tempat pakai ukuran custom), samain ke steps terdekat.
- Line-height tetap konsisten `1.6` (sesuai existing Kindle typography) untuk body text; boleh lebih rapat (`1.2-1.3`) khusus untuk heading/label pendek.

---

## Sebelum Mulai — WAJIB lapor dulu, jangan eksekusi buta

1. **Screenshot/paste current spacing values** yang kepake sekarang di CSS (cari semua `margin`/`padding` hardcoded) — biar saya tahu seberapa jauh gap dari spacing scale yang diusulkan sebelum kamu ubah massal.
2. **Konfirmasi Langkah 2**: screen mana di luar tabel yang menurutmu juga butuh box-itis fix, dan kenapa — jangan eksekusi ke semua 14 screen tanpa laporan spesifik dulu.
3. **Blind spot**: apakah ada border/background yang sebenarnya bukan cuma dekoratif tapi berfungsi sebagai affordance (misal nunjukin sesuatu itu clickable/tappable)? Kalau iya, jangan dihapus asal — border-as-affordance beda dari border-as-decoration, sebutkan mana yang kamu temuin ambigu.
4. **Urutan eksekusi yang kamu sarankan** dari 4 langkah di atas — boleh beda dari urutan penomoran kalau ada alasan teknis (misal Langkah 1 spacing scale emang harus dibereskan duluan sebagai fondasi, tapi tanyakan kalau ada pertimbangan lain).

Tunggu jawaban saya dulu sebelum mulai coding. Setelah itu, kerjakan **per langkah** (bukan semua screen sekaligus) — tunjukkan before/after screenshot atau diff tiap checkpoint, jangan lanjut ke langkah berikutnya sebelum saya review. Kalau nemu elemen yang statusnya ambigu (dekoratif vs fungsional) di tengah jalan, stop dan tanya, jangan tebak sendiri.
