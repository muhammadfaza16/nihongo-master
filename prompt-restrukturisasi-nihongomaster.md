# TASK: Restrukturisasi Information Architecture + Ekspansi Kurikulum N3 — NihongoMaster

Kamu akan melakukan refactor besar pada web app belajar bahasa Jepang "NihongoMaster". Ada 2 pekerjaan yang harus dieksekusi berurutan: **(A) restrukturisasi navigasi/IA** dan **(B) penambahan track kurikulum N3**. Baca dulu seluruh dokumen ini sebelum mulai coding, karena keduanya saling terkait (item kurikulum baru harus masuk ke struktur navigasi baru, bukan struktur lama).

Sebelum mengubah apa pun, audit dulu struktur route/komponen/data model yang ada sekarang dan laporkan ke saya ringkasannya (nama file, komponen, data source per modul) sebelum eksekusi — supaya saya bisa konfirmasi mapping-nya benar sebelum kamu ubah struktur data/route yang sudah ada.

## ⚠️ WAJIB: Jangan eksekusi buta — kasih critical review dulu

Sebelum mulai coding sama sekali, respond dulu ke saya dalam bentuk **laporan tertulis** (belum ada kode yang diubah) yang isinya:

1. **Blind spot / hal yang mungkin gue lewat dari instruksi ini.** Jangan cuma ikutin instruksi secara literal — kalau ada asumsi di prompt ini yang keliru, konflik satu sama lain, atau berisiko break sesuatu yang gue ga sadar, sebutkan eksplisit. Contoh yang perlu dicek:
   - Apakah ada modul/komponen di codebase existing yang instruksi ini ga sebutin tapi bakal kena dampak (misal ada shared state, context, atau routing guard yang bergantung ke struktur nav lama)?
   - Apakah penggabungan Grammar Digest + Glossary jadi satu data source itu valid secara data model, atau ternyata schema-nya beda jauh dan gue salah asumsi?
   - Apakah field `source_book` di chapter N3 bakal bentrok sama logic existing yang mungkin hardcode asumsi "semua chapter dari MNN"?
   - Apakah nambah tipe card baru "grammar pattern" ke SRS queue bakal butuh migration data buat user existing (kalau app ini udah ada progress data tersimpan)?
   - Ada breaking change ke local storage/database schema yang butuh migration script, bukan cuma UI reshuffle?

2. **Pertanyaan klarifikasi** untuk hal-hal yang instruksi ini sengaja/ga sengaja ambigu — jangan nebak-nebak sendiri lalu jalan. Termasuk tapi ga terbatas ke:
   - Sumber buku pasti buat Track N3 (instruksi nyebut contoh Try!/Shin Kanzen Master tapi minta konfirmasi ke gue).
   - Placeholder audio buat Listening Practice — mau pakai TTS sementara, silent placeholder, atau skip render audio player dulu sampai asset ready?
   - Kalau ada data user existing (progress, SRS history, streak) — boleh diasumsikan aman/ga perlu migration, atau harus di-backup dulu sebelum restrukturisasi?

3. **Rekomendasi urutan/scope yang beda**, kalau menurutmu ada bagian dari instruksi ini yang secara teknis lebih aman/efisien dikerjakan dengan urutan atau pendekatan berbeda dari yang gue tulis di "URUTAN EKSEKUSI". Boleh disagree dan usulkan alternatif — bukan cuma nurut.

**Tunggu konfirmasi/jawaban gue dulu terhadap poin 1-3 di atas sebelum menyentuh kode.** Setelah itu baru mulai dari Bagian A sesuai urutan eksekusi, dengan checkpoint review di tiap bagian seperti yang udah ditulis di paling bawah.

---

## BAGIAN A — Restrukturisasi Navigasi (Information Architecture)

### A.1 Prinsip
Reorganisasi seluruh modul dari flat nav menjadi 3 lapis berdasarkan **frekuensi pemakaian**, bukan jenis konten:
- **Lapis 1 (Core Loop)** — dipakai harian, harus selalu terlihat di nav utama, MAX 4 item.
- **Lapis 2 (Library/Referensi)** — dibuka on-demand, disatukan di balik 1 pintu masuk ("Lainnya"/search icon).
- **Lapis 3 (Assessment)** — mode terpisah secara visual (tema/warna beda dari mode belajar biasa), representasi "arena ujian".

### A.2 Struktur nav baru (bottom nav / sidebar utama, max 5 item)
```
[🏠 Home] [📖 Belajar] [🔁 Review] [✍️ Latihan] [⋯ Lainnya]
```

### A.3 Mapping route lama → baru

| Kategori | Nama Menu Baru | Hash Route | Isi (gabungan dari modul lama) |
|---|---|---|---|
| Lapis 1 | Home | `#/` | Dashboard (tetap seperti sekarang: target harian, XP, streak, heatmap, bento cards + shortcut card ke semua modul lain) |
| Lapis 1 | Belajar | `#/chapter/:id` | Studi Bab (tetap, tidak berubah struktur internalnya) |
| Lapis 1 | Review | `#/review` | SRS Review — **perluas scope**: gabungkan vocab + kanji + **grammar pattern** ke dalam satu SRS queue (lihat B untuk detail grammar SRS) |
| Lapis 1 | Latihan | `#/practice` | **Route baru**, isinya tab/sub-nav dari 3 modul lama: `Latihan Menulis` (writing canvas), + 2 fitur baru: `Sentence Ordering Drill` (並び替え), `Jukugo Builder`. Jangan pisah jadi 3 menu top-level. |
| Lapis 2 | Lainnya → Referensi Hub | `#/reference` | Gabungkan `Grammar Digest (#/minna)` + `Glosarium (#/glossary)` jadi satu halaman dengan tab switcher "Grammar" vs "Istilah". Pastikan data-nya **fetch dari source yang sama** dengan Studi Bab (jangan duplicate data grammar — Reference Hub harus jadi searchable index/view, bukan entity data terpisah). |
| Lapis 2 | Lainnya → Peta Kurikulum | `#/curriculum` | Tetap seperti sekarang, hanya dipindah dari nav utama ke submenu "Lainnya" |
| Lapis 2 | Lainnya → Kanji Hub | `#/kanji` | Tetap, dipindah ke submenu "Lainnya" |
| Lapis 2 | Lainnya → Panduan Belajar | `#/guide` | Tetap, dipindah ke submenu "Lainnya" |
| Lapis 3 | Arena Ujian | `#/exam-hub` | **Route baru**, jadi landing page mode assessment berisi card ke: `Buku Kerja` (per bab, `#/workbook/:id`), `Listening Practice` (baru, lihat B.4), `Reading Practice` (baru, lihat B.4), `Simulasi Ujian JLPT` (`#/exam/:level`). Beri styling tema berbeda (contoh: latar lebih gelap/kontras atau aksen warna beda) supaya kerasa "mode serius" dibanding mode belajar kasual. |

### A.4 Aturan implementasi IA
1. Jangan hapus data/logic modul lama — hanya reorganisasi routing dan grouping UI-nya.
2. Dashboard (`#/`) tetap jadi hub sentral: tambahkan shortcut card ke Reference Hub, Arena Ujian, dan Curriculum Map supaya walau tidak ada di nav utama, tetap 1 tap accessible dari Home.
3. Sebelum menghapus/redirect route lama (`#/minna`, `#/glossary`, dll), pasang redirect ke route baru supaya tidak ada broken link kalau ada bookmark/state lama.
4. Komponen "Lainnya" bisa berupa bottom sheet/dropdown/side drawer — pilih yang paling natural sesuai stack frontend yang sudah dipakai di project ini, tidak perlu bikin pattern baru.

---

## BAGIAN B — Ekspansi Kurikulum: Track N3 Mandiri + Listening/Reading

### B.1 Masalah yang diperbaiki
Saat ini "Simulasi Ujian N3" dan "Kanji N3" ada di struktur, tapi tidak ada bab/materi grammar-vocab N3 yang jadi sumbernya — kurikulum berhenti di Bab 50 (setara N4). Ini harus diperbaiki dengan track baru yang berdiri sendiri, bukan menyambung penomoran "Bab MNN" yang sumbernya beda buku.

### B.2 Struktur baru
Tambahkan level baru di Peta Kurikulum, setelah Level N4:
```
[Level N4: Minna II (Bab 26–50)]
       │
       ▼
[Level N3: Track Mandiri (Bab 51–75)] ← BARU
       │
       ▼
[Target Akhir: Lulus Simulasi JLPT N5/N4/N3]
```

- Beri label sumber materi yang jelas berbeda dari MNN di UI (misalnya badge "Track N3" vs badge "MNN") supaya user tahu ini bukan lanjutan seri buku yang sama.
- Struktur data chapter untuk Bab 51-75 pakai schema yang sama dengan chapter MNN (supaya reuse komponen Studi Bab, SRS, Workbook), tapi field `source_book` diisi terpisah (contoh: "Try! N3" / "Shin Kanzen Master N3" — sesuaikan dengan buku referensi yang saya pakai, tanyakan ke saya kalau belum tahu sumbernya).
- Cakupan minimal per bab N3: pola tata bahasa (contoh level: `~ように`, `~のに`, `~ばかり`, `~ところ`, `~わけ`, keigo lanjutan), kosakata baru (target kumulatif akhir ±3.750–5.000 kata gabungan N5-N3), kanji lanjutan (150+ sudah ada di rencana lama, tetap pakai).

### B.3 Grammar Pattern SRS (bukan cuma vocab+kanji)
Extend data model SRS supaya bisa handle tipe card baru "grammar pattern" selain vocab dan kanji:
- Card berisi: pola grammar, contoh kalimat, terjemahan, level (N5/N4/N3).
- Masuk ke queue SRS yang sama dengan vocab/kanji (satu algoritma SM-2, satu due-count di dashboard), bukan sistem review terpisah.
- Sumber data: ambil dari grammar yang sudah ada di setiap Chapter (MNN maupun track N3 baru) — jangan re-entry manual.

### B.4 Modul baru: Listening & Reading Practice
Dua modul ini WAJIB ada karena porsi nilai JLPT besar di dua skill ini dan saat ini tidak ada representasinya (audio yang ada sekarang cuma untuk pelafalan vocab, bukan comprehension).

**Listening Practice** (`#/listening/:level`)
- Format: audio dialog pendek (mimicking Mondai 1-5 JLPT asli) + soal pilihan ganda setelahnya.
- Grouping per level N5/N4/N3, dan bisa dikaitkan opsional ke bab tertentu (kalau soal listening-nya pakai grammar/vocab dari bab itu).
- Kalau belum ada audio asset, buat placeholder/struktur data dulu (field `audio_url`, `transcript`, `questions[]`) supaya UI dan flow-nya bisa dites, isi asset menyusul.

**Reading Practice** (`#/reading/:level`)
- Format: teks pendek-menengah sesuai level (dokkai) + soal comprehension.
- Grouping per level sama seperti listening.
- Struktur data: field `passage_text`, `level`, `questions[]` (multiple choice).

Keduanya masuk ke Lapis 3 (Arena Ujian) sesuai Bagian A.

### B.5 Fitur pendukung tambahan (nice-to-have, kerjakan setelah B.1-B.4 selesai)
- **Sentence Ordering Drill (並び替え)**: tipe soal susun-ulang kata jadi kalimat benar, bisa dipakai baik di Latihan (Lapis 1) maupun di dalam Workbook/Exam soal grammar.
- **Jukugo/Kanji Compound Builder**: latihan menggabungkan kanji individual jadi compound word (contoh: 生 → 先生, 学生, 一生), taruh sebagai tab di dalam route `#/practice`.
- **Review Forecast**: kecil widget di Dashboard yang menunjukkan proyeksi jumlah card SRS due besok/minggu depan (dari due_date di data SRS existing), untuk cegah review pile-up.
- **Weak-point Tracker**: widget Dashboard terpisah dari due-count biasa, highlight kanji/grammar dengan error rate tertinggi berdasarkan histori jawaban SRS/Workbook.

---

## URUTAN EKSEKUSI YANG DISARANKAN
1. Audit & laporkan struktur existing (lihat instruksi di paling atas).
2. Bagian A dulu (restrukturisasi nav) — ini tidak butuh data baru, murni reorganisasi, jadi aman dieksekusi lebih dulu dan low-risk.
3. Bagian B.2 (struktur data track N3 + curriculum map update) — pondasi sebelum isi konten.
4. Bagian B.3 (grammar SRS extension).
5. Bagian B.4 (listening/reading module — struktur data + UI dulu, asset nyusul).
6. Bagian B.5 (nice-to-have, prioritas terakhir).

Setelah setiap bagian selesai, tunjukkan diff/preview ke saya sebelum lanjut ke bagian berikutnya — jangan eksekusi semua sekaligus tanpa checkpoint. Kalau di tengah jalan (misal saat Bagian B) kamu nemu blind spot baru yang ga kelihatan di awal — misalnya ternyata ada dependency/logic yang bakal patah kalau lanjut sesuai rencana — stop, laporkan, tunggu keputusan gue, jangan lanjut jalan sendiri berdasarkan asumsi.
