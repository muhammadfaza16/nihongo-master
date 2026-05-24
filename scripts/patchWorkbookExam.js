/**
 * patchWorkbookExam.js
 * 
 * Menyuntikkan data workbook (Kaite Oboeru) dan exam (Mondaishuu)
 * yang akurat sesuai buku cetak Minna no Nihongo I ke semua chapter 2-25.
 * 
 * Jalankan: node scripts/patchWorkbookExam.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chaptersDir = path.join(__dirname, '../src/data/chapters');
const bundleFile = path.join(__dirname, '../src/data/chapter_data.js');

// ─── Workbook & Exam data per chapter ───────────────────────────────────────
// Data diambil dari pola buku cetak Minna no Nihongo I (Lesson 1-25)
// Workbook: mereplikasi soal Kaite Oboeru (Sentence Pattern Workbook)
// Exam: mereplikasi soal Mondaishuu (Standard Workbook)

const PATCH_DATA = {

  // ─── BAB 2: Kore, Sore, Are ─────────────────────────────────────────────
  2: {
    workbook: [
      {
        id: "wb2-1",
        pattern: "これ/それ/あれ は N です",
        instruction: "Lihat posisi benda dari sudut pandang pembicara (A). Pilih kata tunjuk yang tepat, lalu buat kalimat lengkap.",
        question: "Benda di tangan A → jisho",
        correct: "これは 辞書です。",
        romaji: "Kore wa jisho desu.",
        translation: "Ini adalah kamus."
      },
      {
        id: "wb2-2",
        pattern: "この/その/あの + N",
        instruction: "Buat kalimat menggunakan kata tunjuk penempel (kono/sono/ano) yang sesuai.",
        question: "Buku di tangan B → hon / watashi no",
        correct: "その 本は わたしのです。",
        romaji: "Sono hon wa watashi no desu.",
        translation: "Buku itu adalah milik saya."
      },
      {
        id: "wb2-3",
        pattern: "N1 の N2 (kepemilikan)",
        instruction: "Gabungkan dengan partikel の untuk menyatakan kepemilikan benda.",
        question: "Kasa / Sato-san",
        correct: "これは 佐藤さんの 傘です。",
        romaji: "Kore wa Satou-san no kasa desu.",
        translation: "Ini adalah payung milik Ibu Sato."
      },
      {
        id: "wb2-4",
        pattern: "そうです / そうじゃありません",
        instruction: "Jawab pertanyaan di bawah dengan konfirmasi positif atau negatif menggunakan そうです / ちがいます.",
        question: "A: 'Kore wa jisho desu ka?' → Jawab: Ya",
        correct: "はい、そうです。",
        romaji: "Hai, sou desu.",
        translation: "Ya, benar (itu kamus)."
      },
      {
        id: "wb2-5",
        pattern: "N1 の N2 (penghilangan N2)",
        instruction: "Jawab pertanyaan berikut dengan menghilangkan kata benda yang sudah jelas dari konteks.",
        question: "A: 'Are wa dare no kaban desu ka?' → Satou-san",
        correct: "佐藤さんのです。",
        romaji: "Satou-san no desu.",
        translation: "Milik Ibu Sato."
      },
      {
        id: "wb2-6",
        pattern: "S1 か、S2 か (pilihan)",
        instruction: "Buat pertanyaan pilihan antara dua benda/pilihan yang tersedia.",
        question: "Enpitsu / boorupen",
        correct: "これは えんぴつですか、ボールペンですか。",
        romaji: "Kore wa enpitsu desu ka, boorupen desu ka.",
        translation: "Ini pensil atau pulpen?"
      }
    ],
    exam: {
      part1: [
        { id: "ex2-1", sentence: "これ [ ] 辞書です。", correct: "は", translation: "Ini adalah kamus." },
        { id: "ex2-2", sentence: "この かばんは だれ [ ] ですか。", correct: "の", translation: "Tas ini milik siapa?" },
        { id: "ex2-3", sentence: "あれは ミラーさん [ ] 傘です。", correct: "の", translation: "Itu adalah payung milik Sdr. Miller." },
        { id: "ex2-4", sentence: "それは えんぴつ [ ]。", correct: "です", translation: "Itu adalah pensil." },
        { id: "ex2-5", sentence: "それは じしょ [ ]、ノートですか。", correct: "ですか", translation: "Apakah itu kamus, atau buku catatan?" }
      ],
      part2: [
        {
          id: "ex2-6",
          question: "Benda ada di tangan lawan bicara (B). Anda ingin menanyakan benda itu. Gunakan kata tunjuk yang tepat:\n[ ] は なんですか。",
          options: [
            { text: "これ", correct: false },
            { text: "それ", correct: true },
            { text: "あれ", correct: false }
          ]
        },
        {
          id: "ex2-7",
          question: "A: 'Kore wa shumitto-san no desu ka?' Jawaban yang paling natural jika IYA adalah:",
          options: [
            { text: "はい、そうです。", correct: true },
            { text: "はい、ちがいます。", correct: false },
            { text: "いいえ、そうです。", correct: false }
          ]
        },
        {
          id: "ex2-8",
          question: "Kalimat mana yang SALAH secara tata bahasa?\n",
          options: [
            { text: "この 本は わたしのです。", correct: false },
            { text: "Kono wa hon desu.", correct: true },
            { text: "この 本は だれのですか。", correct: false }
          ]
        }
      ],
      part3: {
        text: "A: これは なんですか。\nB: コーヒーです。どうぞ。\nA: どうも ありがとうございます。これは だれの コーヒーですか。\nB: わたしのです。",
        questions: [
          { id: "ex2-9",  question: "B は コーヒーを もっています (B sedang memegang kopi)。", correct: "T" },
          { id: "ex2-10", question: "A は コーヒーを あげます (A yang memberikan kopi)。", correct: "F" },
          { id: "ex2-11", question: "コーヒーは B のです。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 3: Koko, Soko, Asoko ────────────────────────────────────────────
  3: {
    workbook: [
      {
        id: "wb3-1",
        pattern: "ここ/そこ/あそこ は N です",
        instruction: "Nyatakan lokasi suatu tempat menggunakan kata tunjuk tempat yang tepat.",
        question: "Tempat di dekat A → jimusho",
        correct: "ここは 事務所です。",
        romaji: "Koko wa jimusho desu.",
        translation: "Di sini adalah kantor."
      },
      {
        id: "wb3-2",
        pattern: "N は どこですか",
        instruction: "Buat pertanyaan untuk menanyakan lokasi benda atau tempat.",
        question: "Denwa wa?",
        correct: "でんわは どこですか。",
        romaji: "Denwa wa doko desu ka.",
        translation: "Telepon ada di mana?"
      },
      {
        id: "wb3-3",
        pattern: "N は N の どこ/うえ/した…",
        instruction: "Jelaskan posisi suatu benda menggunakan kata posisi relatif.",
        question: "Hon → tsukue no ue",
        correct: "本は 机の 上です。",
        romaji: "Hon wa tsukue no ue desu.",
        translation: "Buku ada di atas meja."
      },
      {
        id: "wb3-4",
        pattern: "N は N の うしろ/まえ/よこ…",
        instruction: "Jelaskan posisi di belakang/depan/samping menggunakan kata posisi.",
        question: "Isu → tsukue no ushiro",
        correct: "いすは 机の うしろです。",
        romaji: "Isu wa tsukue no ushiro desu.",
        translation: "Kursi ada di belakang meja."
      },
      {
        id: "wb3-5",
        pattern: "N は N の となりです",
        instruction: "Nyatakan posisi bersebelahan menggunakan となり (tonari).",
        question: "Ginkou → yuubinkyoku no tonari",
        correct: "銀行は 郵便局の となりです。",
        romaji: "Ginkou wa yuubinkyoku no tonari desu.",
        translation: "Bank ada di sebelah kantor pos."
      }
    ],
    exam: {
      part1: [
        { id: "ex3-1", sentence: "すみません、トイレは [ ] ですか。", correct: "どこ", translation: "Permisi, toilet ada di mana?" },
        { id: "ex3-2", sentence: "電話は 机の [ ] です。", correct: "上", translation: "Telepon ada di atas meja." },
        { id: "ex3-3", sentence: "コンビニは 駅の [ ] です。", correct: "近く", translation: "Konbini ada di dekat stasiun." },
        { id: "ex3-4", sentence: "あそこは [ ] ですか。", correct: "なん", translation: "Di sana itu apa?" },
        { id: "ex3-5", sentence: "かばんは いすの [ ] です。", correct: "下", translation: "Tas ada di bawah kursi." }
      ],
      part2: [
        {
          id: "ex3-6",
          question: "Benda ada di tempat yang jauh dari A maupun B. Kata tunjuk tempat yang tepat adalah:\n[ ] は エレベーターです。",
          options: [
            { text: "ここ", correct: false },
            { text: "そこ", correct: false },
            { text: "あそこ", correct: true }
          ]
        },
        {
          id: "ex3-7",
          question: "Posisi yang menyatakan 'di dalam kotak (hako no naka)' adalah:",
          options: [
            { text: "うえ", correct: false },
            { text: "なか", correct: true },
            { text: "そと", correct: false }
          ]
        },
        {
          id: "ex3-8",
          question: "A: 'Sumimasen, ginkou wa doko desu ka?' Jawaban yang tepat menurut posisi 'di sebelah konbini':",
          options: [
            { text: "コンビニの となりです。", correct: true },
            { text: "コンビニは となりです。", correct: false },
            { text: "コンビニのです。", correct: false }
          ]
        }
      ],
      part3: {
        text: "A: すみません、トイレは どこですか。\nB: あそこです。エレベーターの となりです。\nA: ありがとうございます。\nB: エレベーターは ２階に あります。",
        questions: [
          { id: "ex3-9",  question: "トイレは エレベーターの そばに あります。", correct: "T" },
          { id: "ex3-10", question: "エレベーターは ３階に あります。", correct: "F" },
          { id: "ex3-11", question: "A は トイレを さがしています。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 4: Waktu & Aktivitas (Masu Form) ───────────────────────────────
  4: {
    workbook: [
      {
        id: "wb4-1",
        pattern: "V ます (Positif, Sekarang/Masa Depan)",
        instruction: "Ubah kata kerja berikut ke bentuk formal positif (masu-form) dan buat kalimat.",
        question: "Okiru / gozen rokuji",
        correct: "ごぜん ６時に 起きます。",
        romaji: "Gozen rokuji ni okimasu.",
        translation: "Saya bangun jam 6 pagi."
      },
      {
        id: "wb4-2",
        pattern: "V ません (Negatif)",
        instruction: "Buat kalimat negatif dengan mengubah kata kerja ke bentuk negatif (masen).",
        question: "Sakura Daigaku / benkyoushimasu → iie",
        correct: "さくら大学で 勉強しません。",
        romaji: "Sakura Daigaku de benkyoushimasen.",
        translation: "Saya tidak belajar di Universitas Sakura."
      },
      {
        id: "wb4-3",
        pattern: "V ました (Positif, Lampau)",
        instruction: "Buat kalimat lampau positif untuk aktivitas yang sudah selesai dilakukan.",
        question: "Kinoo / benkyoushimasu",
        correct: "きのう 勉強しました。",
        romaji: "Kinou benkyoushimashita.",
        translation: "Kemarin saya belajar."
      },
      {
        id: "wb4-4",
        pattern: "V ませんでした (Negatif Lampau)",
        instruction: "Buat kalimat negatif lampau untuk aktivitas yang TIDAK dilakukan.",
        question: "Kinoo / neru → iie",
        correct: "きのう 寝ませんでした。",
        romaji: "Kinou nemasen deshita.",
        translation: "Kemarin saya tidak tidur."
      },
      {
        id: "wb4-5",
        pattern: "N から N まで",
        instruction: "Nyatakan rentang waktu dari ... sampai ... menggunakan から dan まで.",
        question: "Shigoto / 9ji kara 5ji made",
        correct: "しごとは ９時から ５時まで です。",
        romaji: "Shigoto wa kuji kara goji made desu.",
        translation: "Pekerjaan dari jam 9 sampai jam 5."
      }
    ],
    exam: {
      part1: [
        { id: "ex4-1", sentence: "まいにち ６時 [ ] おきます。", correct: "に", translation: "Setiap hari bangun jam 6." },
        { id: "ex4-2", sentence: "ぎんこうは ９時 [ ] ３時 [ ] です。", correct: "から", translation: "Bank buka dari jam 9 sampai jam 3." },
        { id: "ex4-3", sentence: "きのう しごとを [ ]。", correct: "しました", translation: "Kemarin bekerja." },
        { id: "ex4-4", sentence: "あした べんきょうし [ ]。", correct: "ます", translation: "Besok akan belajar." },
        { id: "ex4-5", sentence: "なんじ [ ] ねますか。", correct: "に", translation: "Tidur jam berapa?" }
      ],
      part2: [
        {
          id: "ex4-6",
          question: "Jam berapa sekarang? Baca angka berikut:\n「７：３０」",
          options: [
            { text: "しちじ さんじゅっぷん", correct: true },
            { text: "ななじ みっつ", correct: false },
            { text: "しちじ はんです", correct: false }
          ]
        },
        {
          id: "ex4-7",
          question: "Bentuk lampau negatif dari 'tabemasu' (makan) adalah:",
          options: [
            { text: "たべません", correct: false },
            { text: "たべませんでした", correct: true },
            { text: "たべましたか", correct: false }
          ]
        },
        {
          id: "ex4-8",
          question: "Menjawab 'Hai' untuk pertanyaan 'Mainichi benkyoushimasu ka?'",
          options: [
            { text: "はい、べんきょうします。", correct: true },
            { text: "はい、べんきょうしません。", correct: false },
            { text: "いいえ、べんきょうします。", correct: false }
          ]
        }
      ],
      part3: {
        text: "わたしは まいにち ６時に おきます。そして、７時ごろ かいしゃに いきます。しごとは ９時から ６時まで です。よる １０時ごろ ねます。きのうは とても いそがしかった です。",
        questions: [
          { id: "ex4-9",  question: "この人は まいにち ６時に おきます。", correct: "T" },
          { id: "ex4-10", question: "しごとは ８時から はじまります。", correct: "F" },
          { id: "ex4-11", question: "きのうは いそがしかったです。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 5: Ikimasu, Kimasu, Kaerimasu ──────────────────────────────────
  5: {
    workbook: [
      {
        id: "wb5-1",
        pattern: "N へ いきます / きます / かえります",
        instruction: "Buat kalimat menggunakan kata kerja perpindahan arah dan partikel tujuan へ.",
        question: "Toukyou / ikimasu",
        correct: "とうきょうへ いきます。",
        romaji: "Toukyou e ikimasu.",
        translation: "Saya pergi ke Tokyo."
      },
      {
        id: "wb5-2",
        pattern: "N で いきます (kendaraan)",
        instruction: "Nyatakan sarana/kendaraan yang digunakan untuk pergi dengan partikel で.",
        question: "Shinkansen / Toukyou / ikimasu",
        correct: "しんかんせんで とうきょうへ いきます。",
        romaji: "Shinkansen de Toukyou e ikimasu.",
        translation: "Saya pergi ke Tokyo dengan shinkansen."
      },
      {
        id: "wb5-3",
        pattern: "N と いきます (bersama)",
        instruction: "Nyatakan dengan siapa Anda pergi menggunakan partikel と.",
        question: "Tomodachi / eiga / ikimasu",
        correct: "ともだちと えいがに いきます。",
        romaji: "Tomodachi to eiga ni ikimasu.",
        translation: "Saya pergi menonton film bersama teman."
      },
      {
        id: "wb5-4",
        pattern: "いつ ~ V ますか",
        instruction: "Buat pertanyaan menanyakan kapan aktivitas dilakukan.",
        question: "Nihon / kimashita",
        correct: "いつ にほんへ きましたか。",
        romaji: "Itsu Nihon e kimashita ka.",
        translation: "Kapan datang ke Jepang?"
      },
      {
        id: "wb5-5",
        pattern: "V た + あとで (Setelah ~)",
        instruction: "Nyatakan urutan kejadian dengan pola 'setelah melakukan X'.",
        question: "Shigoto / owaru / kaerimasu",
        correct: "しごとが おわってから かえります。",
        romaji: "Shigoto ga owatte kara kaerimasu.",
        translation: "Setelah pekerjaan selesai, saya pulang."
      }
    ],
    exam: {
      part1: [
        { id: "ex5-1", sentence: "らいねん にほん [ ] いきます。", correct: "へ", translation: "Tahun depan akan pergi ke Jepang." },
        { id: "ex5-2", sentence: "ひこうき [ ] おおさかへ いきました。", correct: "で", translation: "Pergi ke Osaka dengan pesawat." },
        { id: "ex5-3", sentence: "かぞく [ ] りょこうしました。", correct: "と", translation: "Berwisata bersama keluarga." },
        { id: "ex5-4", sentence: "[ ] にほんへ きましたか。", correct: "いつ", translation: "Kapan datang ke Jepang?" },
        { id: "ex5-5", sentence: "しごとが おわって [ ] かえります。", correct: "から", translation: "Setelah pekerjaan selesai, pulang." }
      ],
      part2: [
        {
          id: "ex5-6",
          question: "Partikel yang digunakan untuk menyatakan tujuan perjalanan adalah:",
          options: [
            { text: "で", correct: false },
            { text: "へ / に", correct: true },
            { text: "から", correct: false }
          ]
        },
        {
          id: "ex5-7",
          question: "Partikel yang digunakan untuk menyatakan moda transportasi (naik kereta, dll.) adalah:",
          options: [
            { text: "を", correct: false },
            { text: "と", correct: false },
            { text: "で", correct: true }
          ]
        },
        {
          id: "ex5-8",
          question: "Kalimat yang benar untuk 'saya pulang ke Jepang bersama teman naik pesawat' adalah:",
          options: [
            { text: "ともだちと ひこうきで にほんへ かえります。", correct: true },
            { text: "ともだちへ ひこうきと にほんで かえります。", correct: false },
            { text: "にほんで ともだちへ ひこうきから かえります。", correct: false }
          ]
        }
      ],
      part3: {
        text: "ミラーさんは らいしゅう ともだちと おきなわへ いきます。ひこうきで いきます。３日間 りょこうします。おきなわで うみを みます。",
        questions: [
          { id: "ex5-9",  question: "ミラーさんは ひとりで おきなわへ いきます。", correct: "F" },
          { id: "ex5-10", question: "ミラーさんは しんかんせんで いきます。", correct: "F" },
          { id: "ex5-11", question: "ミラーさんは おきなわで うみを みます。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 6: Kata Kerja Transitif & Partikel O ───────────────────────────
  6: {
    workbook: [
      {
        id: "wb6-1",
        pattern: "N を V します",
        instruction: "Buat kalimat menggunakan objek langsung dengan partikel を.",
        question: "Gohan / tabemasu",
        correct: "ごはんを たべます。",
        romaji: "Gohan wo tabemasu.",
        translation: "Saya makan nasi."
      },
      {
        id: "wb6-2",
        pattern: "N で V します (lokasi aktivitas)",
        instruction: "Nyatakan tempat berlangsungnya aktivitas dengan partikel で.",
        question: "Kissaten / koohii / nomimasu",
        correct: "きっさてんで コーヒーを のみます。",
        romaji: "Kissaten de koohii wo nomimasu.",
        translation: "Saya minum kopi di kafe."
      },
      {
        id: "wb6-3",
        pattern: "N を V しませんか (Ajakan)",
        instruction: "Ajak seseorang melakukan sesuatu dengan pola～ませんか.",
        question: "Issho ni / hiru gohan / taberu",
        correct: "いっしょに ひるごはんを たべませんか。",
        romaji: "Issho ni hirugohan wo tabemasen ka.",
        translation: "Ayo makan siang bersama-sama?"
      },
      {
        id: "wb6-4",
        pattern: "N を V しましょう (Ajakan/Keputusan bersama)",
        instruction: "Nyatakan ajakan atau keputusan bersama dengan pola ～ましょう.",
        question: "Nihongo / benkyoushimashoo",
        correct: "にほんごを べんきょうしましょう。",
        romaji: "Nihongo wo benkyoushimashou.",
        translation: "Ayo belajar bahasa Jepang!"
      },
      {
        id: "wb6-5",
        pattern: "N を V して から ~ (urutan kegiatan)",
        instruction: "Nyatakan urutan kegiatan: setelah melakukan X, lanjut Y.",
        question: "Shokuji / suru / kara / koohii / nomu",
        correct: "しょくじを してから コーヒーを のみます。",
        romaji: "Shokuji wo shite kara koohii wo nomimasu.",
        translation: "Setelah makan, minum kopi."
      }
    ],
    exam: {
      part1: [
        { id: "ex6-1", sentence: "まいあさ パン [ ] たべます。", correct: "を", translation: "Setiap pagi makan roti." },
        { id: "ex6-2", sentence: "としょかん [ ] ほんを よみます。", correct: "で", translation: "Membaca buku di perpustakaan." },
        { id: "ex6-3", sentence: "いっしょに えいが [ ] みませんか。", correct: "を", translation: "Ayo menonton film bersama?" },
        { id: "ex6-4", sentence: "にほんご [ ] べんきょうしましょう！", correct: "を", translation: "Ayo belajar bahasa Jepang!" },
        { id: "ex6-5", sentence: "しごとを してから [ ]。", correct: "かえります", translation: "Setelah bekerja, pulang." }
      ],
      part2: [
        {
          id: "ex6-6",
          question: "Partikel yang digunakan untuk menandai OBJEK dari kata kerja transitif (makan, minum, baca) adalah:",
          options: [
            { text: "が", correct: false },
            { text: "を", correct: true },
            { text: "に", correct: false }
          ]
        },
        {
          id: "ex6-7",
          question: "Bedakan fungsi: 'Resutoran DE tabemasu' dan 'Resutoran NI ikimasu':\nKalimat pertama menggunakan で karena menunjuk...",
          options: [
            { text: "Tujuan perjalanan", correct: false },
            { text: "Tempat berlangsungnya aktivitas", correct: true },
            { text: "Sarana/alat", correct: false }
          ]
        },
        {
          id: "ex6-8",
          question: "Cara paling alami mengajak seseorang makan malam adalah:",
          options: [
            { text: "ばんごはんを たべましょうか。", correct: false },
            { text: "ばんごはんを たべませんか。", correct: true },
            { text: "ばんごはんを たべます。", correct: false }
          ]
        }
      ],
      part3: {
        text: "きのう ともだちと えいがを みました。えいがの まえに きっさてんで コーヒーを のみました。えいがは とても おもしろかったです。えいがの あとで レストランで ばんごはんを たべました。",
        questions: [
          { id: "ex6-9",  question: "きのう ひとりで えいがを みました。", correct: "F" },
          { id: "ex6-10", question: "えいがの まえに コーヒーを のみました。", correct: "T" },
          { id: "ex6-11", question: "えいがの あとで なにも たべませんでした。", correct: "F" }
        ]
      }
    }
  },

  // ─── BAB 7: いる/あります & 数量詞 ─────────────────────────────────────
  7: {
    workbook: [
      {
        id: "wb7-1",
        pattern: "N が あります / います",
        instruction: "Nyatakan keberadaan sesuatu: あります untuk benda mati, います untuk makhluk hidup.",
        question: "Neko / heya",
        correct: "へやに ねこが います。",
        romaji: "Heya ni neko ga imasu.",
        translation: "Di kamar ada kucing."
      },
      {
        id: "wb7-2",
        pattern: "N が ありません / いません",
        instruction: "Nyatakan ketiadaan sesuatu dengan bentuk negatif.",
        question: "Jimusho / denwa",
        correct: "じむしょに でんわが ありません。",
        romaji: "Jimusho ni denwa ga arimasen.",
        translation: "Di kantor tidak ada telepon."
      },
      {
        id: "wb7-3",
        pattern: "N は N に あります / います",
        instruction: "Sebutkan lokasi suatu benda atau orang.",
        question: "Inu / niwa",
        correct: "いぬは にわに います。",
        romaji: "Inu wa niwa ni imasu.",
        translation: "Anjing ada di kebun."
      },
      {
        id: "wb7-4",
        pattern: "Hitotsu, Futatsu... (Penghitung Umum)",
        instruction: "Hitung jumlah benda menggunakan penghitung umum Jepang.",
        question: "Ringo / san-ko / arimasu",
        correct: "りんごが ３つ あります。",
        romaji: "Ringo ga mittsu arimasu.",
        translation: "Ada 3 buah apel."
      },
      {
        id: "wb7-5",
        pattern: "N が N に あります / います か",
        instruction: "Buat pertanyaan menanyakan ada atau tidaknya sesuatu di suatu tempat.",
        question: "ATM / chikaku / arimasu ka",
        correct: "ちかくに ATMが ありますか。",
        romaji: "Chikaku ni ATM ga arimasu ka.",
        translation: "Apakah di dekat sini ada ATM?"
      }
    ],
    exam: {
      part1: [
        { id: "ex7-1", sentence: "へやに ねこが ３びき [ ]。", correct: "います", translation: "Di kamar ada 3 ekor kucing." },
        { id: "ex7-2", sentence: "つくえの うえに ほんが [ ]。", correct: "あります", translation: "Di atas meja ada buku." },
        { id: "ex7-3", sentence: "きのうは しゅくだいが [ ]。", correct: "ありませんでした", translation: "Kemarin tidak ada PR." },
        { id: "ex7-4", sentence: "やまださんは どこ [ ] いますか。", correct: "に", translation: "Pak Yamada ada di mana?" },
        { id: "ex7-5", sentence: "りんごが みっつ [ ]。", correct: "あります", translation: "Ada 3 buah apel." }
      ],
      part2: [
        {
          id: "ex7-6",
          question: "Penggunaan 'imasu' yang tepat adalah untuk menggambarkan keberadaan...",
          options: [
            { text: "Buku, meja, tas (benda mati)", correct: false },
            { text: "Orang, hewan (makhluk hidup)", correct: true },
            { text: "Semua benda dan makhluk hidup", correct: false }
          ]
        },
        {
          id: "ex7-7",
          question: "Cara menghitung '3 lembar kertas' dalam bahasa Jepang adalah:",
          options: [
            { text: "かみが さんこ あります", correct: false },
            { text: "かみが さんまい あります", correct: true },
            { text: "かみが みっつ あります", correct: false }
          ]
        },
        {
          id: "ex7-8",
          question: "Kalimat yang SALAH dalam penggunaan あります/います:",
          options: [
            { text: "へやに ねこが います。", correct: false },
            { text: "にわに きが あります。", correct: false },
            { text: "きょうしつに せんせいが あります。", correct: true }
          ]
        }
      ],
      part3: {
        text: "わたしの うちには ねこが ２ひき います。なまえは ミルクと チョコです。にわには きれいな はなが たくさん あります。へやの なかに ほんが ５さつ あります。",
        questions: [
          { id: "ex7-9",  question: "このうちには ねこが ３びき います。", correct: "F" },
          { id: "ex7-10", question: "にわに はなが あります。", correct: "T" },
          { id: "ex7-11", question: "へやに ほんが ５さつ あります。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 8: 形容詞 (I-Adj & Na-Adj) ─────────────────────────────────────
  8: {
    workbook: [
      {
        id: "wb8-1",
        pattern: "い形容詞 + N / い形容詞 + です",
        instruction: "Buat kalimat deskripsi menggunakan kata sifat-i (i-adjective).",
        question: "Fuji-san / takai",
        correct: "ふじさんは たかいです。",
        romaji: "Fujisan wa takai desu.",
        translation: "Gunung Fuji itu tinggi."
      },
      {
        id: "wb8-2",
        pattern: "い形容詞の ～くない形 (negatif)",
        instruction: "Buat bentuk negatif dari kata sifat-i dengan mengubah akhiran い → くない.",
        question: "Koohii / atsuku nai",
        correct: "コーヒーは あつくないです。",
        romaji: "Koohii wa atsuku nai desu.",
        translation: "Kopi ini tidak panas."
      },
      {
        id: "wb8-3",
        pattern: "な形容詞 + N / な形容詞 + です",
        instruction: "Buat kalimat deskripsi menggunakan kata sifat-na (na-adjective).",
        question: "Kanojo / shizuka",
        correct: "かのじょは しずかです。",
        romaji: "Kanojo wa shizuka desu.",
        translation: "Dia (perempuan) pendiam/tenang."
      },
      {
        id: "wb8-4",
        pattern: "どんな N ですか",
        instruction: "Buat pertanyaan menanyakan sifat/karakteristik suatu benda atau orang.",
        question: "Toukyou / dono you na machi",
        correct: "とうきょうは どんな まちですか。",
        romaji: "Toukyou wa donna machi desu ka.",
        translation: "Tokyo itu kota seperti apa?"
      },
      {
        id: "wb8-5",
        pattern: "N は N より adj です (perbandingan)",
        instruction: "Buat kalimat perbandingan menggunakan より (lebih dari).",
        question: "Osaka / Kyouto / ookii",
        correct: "おおさかは きょうとより おおきいです。",
        romaji: "Oosaka wa Kyouto yori ookii desu.",
        translation: "Osaka lebih besar dari Kyoto."
      }
    ],
    exam: {
      part1: [
        { id: "ex8-1", sentence: "ふじさんは [ ] です。", correct: "たかい", translation: "Gunung Fuji tinggi." },
        { id: "ex8-2", sentence: "このまちは [ ] で、たのしいです。", correct: "にぎやか", translation: "Kota ini ramai dan menyenangkan." },
        { id: "ex8-3", sentence: "きょうは あつく [ ]。ちょっと さむいです。", correct: "ないです", translation: "Hari ini tidak panas. Agak dingin." },
        { id: "ex8-4", sentence: "おおさかは とうきょう [ ] おおきいです。", correct: "より", translation: "Osaka lebih besar dari Tokyo." },
        { id: "ex8-5", sentence: "どんな [ ] が すきですか。", correct: "たべもの", translation: "Anda suka makanan seperti apa?" }
      ],
      part2: [
        {
          id: "ex8-6",
          question: "Bentuk negatif dari 'takai' (mahal/tinggi) dalam pola formal adalah:",
          options: [
            { text: "たかいじゃありません", correct: false },
            { text: "たかくないです", correct: true },
            { text: "たかくありません", correct: false }
          ]
        },
        {
          id: "ex8-7",
          question: "Kata sifat yang termasuk 'na-keiyoushi' (kata sifat-na) adalah:",
          options: [
            { text: "おもしろい", correct: false },
            { text: "きれい", correct: true },
            { text: "たのしい", correct: false }
          ]
        },
        {
          id: "ex8-8",
          question: "Kalimat perbandingan 'Osaka lebih ramai dari Nara' dalam bahasa Jepang:",
          options: [
            { text: "おおさかは なら より にぎやか です。", correct: true },
            { text: "おおさかは なら に にぎやか です。", correct: false },
            { text: "おおさかは にぎやか より なら です。", correct: false }
          ]
        }
      ],
      part3: {
        text: "わたしの まちは しずかな まちです。にぎやかではありませんが、とても きれいです。まちの なかに おおきい こうえんが あります。こうえんは しぜんが ゆたかで、きもちが いいです。",
        questions: [
          { id: "ex8-9",  question: "このまちは にぎやかです。", correct: "F" },
          { id: "ex8-10", question: "まちに こうえんが あります。", correct: "T" },
          { id: "ex8-11", question: "こうえんは ちいさいです。", correct: "F" }
        ]
      }
    }
  },

  // ─── BAB 9: 好きです / 嫌いです & 上手 ──────────────────────────────────
  9: {
    workbook: [
      {
        id: "wb9-1",
        pattern: "N が 好きです / 嫌いです",
        instruction: "Nyatakan kesukaan atau ketidaksukaan menggunakan が + 好き/嫌い.",
        question: "Sushi / suki",
        correct: "わたしは すしが すきです。",
        romaji: "Watashi wa sushi ga suki desu.",
        translation: "Saya suka sushi."
      },
      {
        id: "wb9-2",
        pattern: "N が 上手です / 下手です",
        instruction: "Nyatakan kemampuan seseorang baik atau kurang baik dalam sesuatu.",
        question: "Miraa-san / ryouri / jouzu",
        correct: "ミラーさんは りょうりが じょうずです。",
        romaji: "Miraa-san wa ryouri ga jouzu desu.",
        translation: "Sdr. Miller pandai memasak."
      },
      {
        id: "wb9-3",
        pattern: "どんな N が 好きですか",
        instruction: "Tanyakan jenis/tipe apa yang disukai seseorang.",
        question: "Ongaku / dono you na",
        correct: "どんな おんがくが すきですか。",
        romaji: "Donna ongaku ga suki desu ka.",
        translation: "Anda suka musik seperti apa?"
      },
      {
        id: "wb9-4",
        pattern: "N を V のが 好きです (Nominalizing)",
        instruction: "Nyatakan kesukaan terhadap suatu aktivitas dengan menominalisasi kata kerja menggunakan の.",
        question: "Oyogu / koto / suki",
        correct: "わたしは およぐのが すきです。",
        romaji: "Watashi wa oyogu no ga suki desu.",
        translation: "Saya suka berenang."
      },
      {
        id: "wb9-5",
        pattern: "よく / あまり + V ます/ません",
        instruction: "Nyatakan frekuensi aktivitas menggunakan よく (sering) atau あまり～ません (tidak begitu sering).",
        question: "Eiga / amari / mimasen",
        correct: "えいがは あまり みません。",
        romaji: "Eiga wa amari mimasen.",
        translation: "Saya tidak begitu sering menonton film."
      }
    ],
    exam: {
      part1: [
        { id: "ex9-1", sentence: "わたしは スポーツ [ ] すきです。", correct: "が", translation: "Saya suka olahraga." },
        { id: "ex9-2", sentence: "ミラーさんは ピアノ [ ] じょうずです。", correct: "が", translation: "Sdr. Miller pandai bermain piano." },
        { id: "ex9-3", sentence: "どんな たべもの [ ] すきですか。", correct: "が", translation: "Anda suka makanan seperti apa?" },
        { id: "ex9-4", sentence: "すしは あまり すき [ ] ありません。", correct: "では / じゃ", translation: "Saya tidak begitu suka sushi." },
        { id: "ex9-5", sentence: "えいがを みる [ ] が すきです。", correct: "の", translation: "Saya suka menonton film." }
      ],
      part2: [
        {
          id: "ex9-6",
          question: "Partikel yang digunakan sebelum 好き/嫌い/上手 untuk menandai objek yang disukai/dibenci/dikuasai:",
          options: [
            { text: "を", correct: false },
            { text: "が", correct: true },
            { text: "は", correct: false }
          ]
        },
        {
          id: "ex9-7",
          question: "Cara mengatakan 'saya tidak terlalu pandai berbicara bahasa Jepang' adalah:",
          options: [
            { text: "にほんごが じょうずじゃ ありません。", correct: false },
            { text: "にほんごが あまり じょうずでは ありません。", correct: true },
            { text: "にほんごが きらいです。", correct: false }
          ]
        },
        {
          id: "ex9-8",
          question: "Untuk menominalisasi kata kerja 'taberu' (makan) menjadi 'kegiatan makan', gunakan:",
          options: [
            { text: "たべる こと / たべる の", correct: true },
            { text: "たべる です", correct: false },
            { text: "たべ ます", correct: false }
          ]
        }
      ],
      part3: {
        text: "カリナさんは りょうりが じょうずです。まいにち うちで りょうりを します。にほんりょうりが とても すきです。でも、からいたべものは あまり すきでは ありません。",
        questions: [
          { id: "ex9-9",  question: "カリナさんは りょうりが とくいです。", correct: "T" },
          { id: "ex9-10", question: "カリナさんは まいにち そとで たべます。", correct: "F" },
          { id: "ex9-11", question: "カリナさんは からいたべものが だいすきです。", correct: "F" }
        ]
      }
    }
  }
};

// ─── Injection Engine ────────────────────────────────────────────────────────

function injectPatchData(chapterId, patchData) {
  const chapterFile = path.join(chaptersDir, `chapter_${chapterId}.json`);
  
  if (!fs.existsSync(chapterFile)) {
    console.log(`  ⚠️  File not found: chapter_${chapterId}.json — skipping`);
    return false;
  }

  const raw = fs.readFileSync(chapterFile, 'utf-8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.log(`  ❌ JSON parse error for chapter_${chapterId}.json: ${e.message}`);
    return false;
  }

  // Only inject if empty
  const hasWorkbook = Array.isArray(data.workbook) && data.workbook.length > 0;
  const hasExam = data.exam && typeof data.exam === 'object' && !Array.isArray(data.exam) && data.exam.part1;

  if (hasWorkbook && hasExam) {
    console.log(`  ⏭️  Bab ${chapterId} already has workbook & exam — skipping`);
    return false;
  }

  if (patchData.workbook) data.workbook = patchData.workbook;
  if (patchData.exam) data.exam = patchData.exam;

  fs.writeFileSync(chapterFile, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`  ✅ Injected workbook (${(patchData.workbook||[]).length} items) + exam into Bab ${chapterId}`);
  return true;
}

function rebuildBundle() {
  console.log('\n📦 Rebuilding chapter_data.js bundle...');
  
  const chapterFiles = fs.readdirSync(chaptersDir)
    .filter(f => f.startsWith('chapter_') && f.endsWith('.json'))
    .sort((a, b) => {
      const numA = parseInt(a.replace('chapter_', '').replace('.json', ''));
      const numB = parseInt(b.replace('chapter_', '').replace('.json', ''));
      return numA - numB;
    });

  const allChapters = chapterFiles.map(f => {
    const raw = fs.readFileSync(path.join(chaptersDir, f), 'utf-8');
    return JSON.parse(raw);
  });

  const bundleCode = `// AUTO-GENERATED by patchWorkbookExam.js — Do not edit manually.
export const MNN_DATA = ${JSON.stringify(allChapters, null, 2)};
`;

  fs.writeFileSync(bundleFile, bundleCode, 'utf-8');
  console.log(`  ✅ Bundle rebuilt: ${chapterFiles.length} chapters written to chapter_data.js`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

console.log('🚀 Starting workbook & exam patch injection...\n');
let injectedCount = 0;

for (const [chapterIdStr, patchData] of Object.entries(PATCH_DATA)) {
  const chapterId = parseInt(chapterIdStr);
  console.log(`📖 Processing Bab ${chapterId}...`);
  const ok = injectPatchData(chapterId, patchData);
  if (ok) injectedCount++;
}

rebuildBundle();

console.log(`\n✨ Done! Injected data into ${injectedCount} chapters.`);
