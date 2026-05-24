/**
 * seedMNN2.js
 * 
 * Generates chapter JSON files for Minna no Nihongo II (Lesson 26-50)
 * Data is sourced from the MNN II textbook, translation guide,
 * Sentence Pattern Workbook (Kaite Oboeru), and Standard Workbook (Mondaishuu).
 * 
 * Run: node scripts/seedMNN2.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const chaptersDir = path.join(__dirname, '../src/data/chapters');
const bundleFile = path.join(__dirname, '../src/data/chapter_data.js');

const MNN2_DATA = [
  // ============================================================
  // LESSON 26: Causative (させます) — Pendalaman
  // ============================================================
  {
    "id": 26,
    "title": "Lesson 26: Kausatif — Menyuruh & Memberi Izin (させます)",
    "desc": "Bab pembuka MNN II. Anda akan menguasai bentuk kausatif (させます/させません) untuk menyatakan 'menyuruh seseorang melakukan sesuatu' atau 'membiarkan seseorang melakukan sesuatu', serta penggunaannya dalam konteks formal.",
    "locked": false,
    "vocab": [
      { "id": "v26-1", "rom": "Kōchō (sensei)", "kana": "こうちょう（せんせい）", "kanji": "校長（先生）", "en": "Kepala sekolah", "audio": "" },
      { "id": "v26-2", "rom": "Shachō", "kana": "しゃちょう", "kanji": "社長", "en": "Direktur / Presiden Direktur", "audio": "" },
      { "id": "v26-3", "rom": "Buchō", "kana": "ぶちょう", "kanji": "部長", "en": "Kepala bagian / Manager", "audio": "" },
      { "id": "v26-4", "rom": "Kakari (no hito)", "kana": "かかり（のひと）", "kanji": "係（の人）", "en": "Petugas / PIC", "audio": "" },
      { "id": "v26-5", "rom": "Kinyōbi", "kana": "きんようび", "kanji": "金曜日", "en": "Hari Jumat", "audio": "" },
      { "id": "v26-6", "rom": "Hayameru", "kana": "はやめます", "kanji": "早めます", "en": "Memajukan (jadwal, waktu)", "audio": "" },
      { "id": "v26-7", "rom": "Okurimasu", "kana": "おくります", "kanji": "送ります", "en": "Mengantar / Mengirim", "audio": "" },
      { "id": "v26-8", "rom": "Tsutaemasu", "kana": "つたえます", "kanji": "伝えます", "en": "Menyampaikan pesan", "audio": "" },
      { "id": "v26-9", "rom": "Yasumimasu", "kana": "やすみます", "kanji": "休みます", "en": "Beristirahat / Absen", "audio": "" },
      { "id": "v26-10", "rom": "Mōshimasu", "kana": "もうします", "kanji": "申します", "en": "Saya bernama ~ (bentuk rendah hati)", "audio": "" },
      { "id": "v26-11", "rom": "Ukagaimasu", "kana": "うかがいます", "kanji": "伺います", "en": "Mengunjungi / Menanyakan (rendah hati)", "audio": "" },
      { "id": "v26-12", "rom": "Itadakimasu", "kana": "いただきます", "kanji": "いただきます", "en": "Menerima / Memakan/minum (rendah hati)", "audio": "" },
      { "id": "v26-13", "rom": "Mōshiwake gozaimasen", "kana": "もうしわけございません", "kanji": "申し訳ございません", "en": "Saya sangat minta maaf (sangat formal)", "audio": "" },
      { "id": "v26-14", "rom": "Sassoku", "kana": "さっそく", "kanji": "早速", "en": "Segera / Seketika", "audio": "" },
      { "id": "v26-15", "rom": "Sumimasen ga", "kana": "すみませんが", "kanji": "", "en": "Mohon maaf, tapi~ / Permisi~", "audio": "" },
      { "id": "v26-16", "rom": "Zangyō (shimasu)", "kana": "ざんぎょう（します）", "kanji": "残業（します）", "en": "Lembur (kerja)", "audio": "" },
      { "id": "v26-17", "rom": "Toriaezu", "kana": "とりあえず", "kanji": "", "en": "Untuk sementara ini / Pertama-tama", "audio": "" },
      { "id": "v26-18", "rom": "Meiwaku (na)", "kana": "めいわく（な）", "kanji": "迷惑（な）", "en": "Merepotkan / Mengganggu", "audio": "" }
    ],
    "grammar": [
      {
        "id": "g26-1",
        "title": "1. Bentuk Kausatif (Causative Form)",
        "desc": "Digunakan untuk menyatakan 'A menyuruh/membiarkan B melakukan sesuatu'. Dibagi dua nuansa: menyuruh (paksa/wajib) atau membiarkan (izin).",
        "points": [
          "Grup I (う-verb): ganti ～う → ～あせる. Contoh: kaku→ kakaseru, yomu→ yomaseru",
          "Grup II (る-verb): ganti ～る → ～させる. Contoh: taberu→ tabesaseru, miru→ misaseru",
          "Grup III (irregular): suru→ saseru, kuru→ kosaseru",
          "Pola kalimat: [A は] [B に/を] [V-causative]。",
          "Partikel B: Gunakan NI jika kata kerja intransitif (ikimasu, nemasu), gunakan WO jika transitif.",
          "Contoh menyuruh: Sensei ga gakusei NI kanji wo KAKASEMASU (Guru menyuruh murid menulis kanji).",
          "Contoh membiarkan: Haha wa watashi NI suki na koto wo SASETEKUREMASU (Ibu membiarkan saya melakukan hal yang saya suka)."
        ],
        "formula": "う-V: ～わせます / る-V: ～させます / する: させます",
        "native_note": "Dalam konteks pekerjaan, kausatif sering digunakan dalam frasa sopan 'Watashi ni yarasete kudasai' (Izinkan saya yang mengerjakan) — cara sopan menawarkan diri."
      },
      {
        "id": "g26-2",
        "title": "2. V-causative + てください / てもらいます",
        "desc": "Menggabungkan bentuk kausatif dengan ekspresi izin atau permintaan.",
        "points": [
          "V-させてください: Memohon izin melakukan sesuatu untuk diri sendiri.",
          "Contoh: Kyou hayaku kaerasete kudasai. (Tolong izinkan saya pulang cepat hari ini).",
          "V-させてもらいます: Menerima izin dari atasan/seseorang untuk melakukan sesuatu.",
          "Contoh: Raishuu yasumasetemoraimasu. (Saya akan mengambil izin minggu depan)."
        ],
        "formula": "V-causative form + てください / てもらいます"
      }
    ],
    "patterns": [
      { "jp": "部長は 田中さんを 残業させました。", "rom": "Buchō wa Tanaka-san wo zangyō sasemashita.", "en": "Manajer menyuruh Tanaka lembur." },
      { "jp": "わたしに 説明させてください。", "rom": "Watashi ni setsumei sasete kudasai.", "en": "Izinkan saya yang menjelaskan." },
      { "jp": "子供に 好きな スポーツを させています。", "rom": "Kodomo ni sukina supōtsu wo sasete imasu.", "en": "Membiarkan anak melakukan olahraga yang disukainya." },
      { "jp": "来週、休ませてもらいます。", "rom": "Raishuu, yasumasete moraimasu.", "en": "Minggu depan saya akan mengambil libur (mohon izin)." }
    ],
    "conversation": {
      "title": "Di Tempat Kerja: Memohon Izin Absen",
      "dialogue": [
        { "speaker": "Tanaka", "jp": "課長、明日 休ませていただけませんか。", "rom": "Kachō, ashita yasumasete itadakemasen ka.", "en": "Pak, bolehkah saya izin tidak masuk besok?" },
        { "speaker": "Kachō", "jp": "どうしたんですか。", "rom": "Dō shitan desu ka.", "en": "Ada apa memangnya?" },
        { "speaker": "Tanaka", "jp": "子供が 熱を 出しまして…。", "rom": "Kodomo ga netsu wo dashimashite...", "en": "Anak saya demam..." },
        { "speaker": "Kachō", "jp": "そうですか。じゃ、しかたがないですね。いいですよ。", "rom": "Sō desu ka. Ja, shikata ga nai desu ne. Ii desu yo.", "en": "Begitu ya. Tidak ada cara lain dong. Oke boleh." },
        { "speaker": "Tanaka", "jp": "ありがとうございます。申し訳ございません。", "rom": "Arigatō gozaimasu. Mōshiwake gozaimasen.", "en": "Terima kasih banyak. Saya sungguh minta maaf." }
      ]
    },
    "practice": [
      { "type": "mcq", "question": "Bentuk kausatif dari 'ikimasu' (pergi, Grup I) untuk 'menyuruh pergi' adalah:", "options": [{ "text": "いかせます", "correct": true }, { "text": "いきさせます", "correct": false }, { "text": "いかれます", "correct": false }] },
      { "type": "fill", "question": "Terjemahkan: 'Izinkan saya yang menjawab (kotaeru)'.\nWatashi ni [   ].", "answer": "kotaesasete kudasai" },
      { "type": "mcq", "question": "Partikel yang digunakan untuk orang yang disuruh (B) dalam kausatif intransitif adalah:", "options": [{ "text": "を", "correct": false }, { "text": "に", "correct": true }, { "text": "で", "correct": false }] }
    ],
    "mini_kaiwa": [
      { "title": "Menawarkan Diri di Rapat", "situation": "Dalam rapat, seseorang menawarkan diri untuk presentasi", "dialogue": [{ "speaker": "A", "jp": "プレゼンは 誰が しますか。", "rom": "Purezen wa dare ga shimasu ka.", "en": "Siapa yang akan presentasi?" }, { "speaker": "B", "jp": "わたしに やらせてください。", "rom": "Watashi ni yarasete kudasai.", "en": "Izinkan saya yang melakukannya." }] }
    ],
    "reibun": [
      { "id": "r26-1", "jp": "部長は 山田さんを 大阪へ 出張させました。", "rom": "Buchō wa Yamada-san wo Ōsaka e shutchō sasemashita.", "en": "Manajer mengirim Yamada ke Osaka untuk perjalanan dinas." },
      { "id": "r26-2", "jp": "親は 子供に 自由に させています。", "rom": "Oya wa kodomo ni jiyū ni sasete imasu.", "en": "Orang tua membiarkan anaknya bebas (melakukan sesuka hati)." },
      { "id": "r26-3", "jp": "少し 考えさせてください。", "rom": "Sukoshi kangaesasete kudasai.", "en": "Tolong izinkan saya berpikir sebentar." },
      { "id": "r26-4", "jp": "今日は 早く 帰らせていただきます。", "rom": "Kyō wa hayaku kaerasete itadakimasu.", "en": "Hari ini saya mohon izin untuk pulang lebih cepat." },
      { "id": "r26-5", "jp": "その仕事は わたしに させてもらえませんか。", "rom": "Sono shigoto wa watashi ni sasete moraemasen ka.", "en": "Bolehkah saya yang mengerjakan pekerjaan itu?" }
    ],
    "workbook": [
      { "id": "wb26-1", "pattern": "V-causative form (Grup I)", "instruction": "Ubah kata kerja berikut ke bentuk kausatif.", "question": "Nomimasu → Causative", "correct": "のませます", "romaji": "nomasemasu", "translation": "(Menyuruh/membiarkan minum)" },
      { "id": "wb26-2", "pattern": "V-causative form (Grup II)", "instruction": "Ubah kata kerja berikut ke bentuk kausatif.", "question": "Tabemasu → Causative", "correct": "たべさせます", "romaji": "tabesasemasu", "translation": "(Menyuruh/membiarkan makan)" },
      { "id": "wb26-3", "pattern": "A は B に V-causative", "instruction": "Buat kalimat kausatif: Manajer menyuruh karyawan lembur.", "question": "Buchō / shain / zangyō", "correct": "ぶちょうは しゃいんに ざんぎょうさせました。", "romaji": "Buchō wa shain ni zangyō sasemashita.", "translation": "Manajer menyuruh karyawan lembur." },
      { "id": "wb26-4", "pattern": "V-causative + てください", "instruction": "Minta izin melakukan sesuatu: 'Izinkan saya mencoba'.", "question": "Watashi ni / yatte / sasete / kudasai", "correct": "わたしに やってみさせてください。", "romaji": "Watashi ni yatte misasete kudasai.", "translation": "Izinkan saya mencoba melakukannya." },
      { "id": "wb26-5", "pattern": "V-causative + てもらいます", "instruction": "Nyatakan mendapat izin dari atasan.", "question": "Raishuu / yasumu / sasete / moraimasu", "correct": "らいしゅう やすませてもらいます。", "romaji": "Raishuu yasumasete moraimasu.", "translation": "Minggu depan saya akan mengambil izin." }
    ],
    "exam": {
      "part1": [
        { "id": "ex26-1", "sentence": "ぶちょうは やまださんを おおさかへ しゅっちょう [ ] ました。", "correct": "させ", "translation": "Manajer mengirim Yamada ke Osaka untuk dinas." },
        { "id": "ex26-2", "sentence": "すこし かんがえ [ ] てください。", "correct": "させ", "translation": "Tolong izinkan saya berpikir sebentar." },
        { "id": "ex26-3", "sentence": "こどもに すきな ことを [ ] ています。", "correct": "させて", "translation": "Membiarkan anak melakukan yang disukainya." },
        { "id": "ex26-4", "sentence": "きょう はやく かえら [ ] いただきます。", "correct": "せて", "translation": "Saya mohon izin pulang lebih cepat hari ini." },
        { "id": "ex26-5", "sentence": "その しごとは わたしに [ ] もらえませんか。", "correct": "させて", "translation": "Bolehkah saya yang mengerjakan pekerjaan itu?" }
      ],
      "part2": [
        { "id": "ex26-6", "question": "Bentuk kausatif dari 'kimasu' (datang) adalah:", "options": [{ "text": "きさせます", "correct": false }, { "text": "こさせます", "correct": true }, { "text": "こられます", "correct": false }] },
        { "id": "ex26-7", "question": "Partikel mana yang digunakan untuk menandai orang yang 'disuruh' dalam kalimat kausatif dengan kata kerja transitif (makan, minum)?", "options": [{ "text": "に", "correct": false }, { "text": "を", "correct": true }, { "text": "で", "correct": false }] },
        { "id": "ex26-8", "question": "'Watashi ni setsumei sasete kudasai' berarti:", "options": [{ "text": "Tolong jelaskan kepada saya", "correct": false }, { "text": "Izinkan saya yang menjelaskan", "correct": true }, { "text": "Saya sudah menjelaskan", "correct": false }] }
      ],
      "part3": {
        "text": "たなかさんは きょう こどもが かぜを ひいて、かいしゃを やすみたいです。かちょうに 「やすませていただけませんか」と おねがいしました。かちょうは 「いいですよ。おだいじに」と いいました。たなかさんは ほっと しました。",
        "questions": [
          { "id": "ex26-9", "question": "たなかさんは びょうきで やすみたいです。", "correct": "F" },
          { "id": "ex26-10", "question": "たなかさんは かちょうに やすむ きょかを もとめました。", "correct": "T" },
          { "id": "ex26-11", "question": "かちょうは やすむことを きょかしませんでした。", "correct": "F" }
        ]
      }
    }
  },

  // ============================================================
  // LESSON 27: Keigo — Bahasa Sopan (Sonkeigo & Kenjōgo)
  // ============================================================
  {
    "id": 27,
    "title": "Lesson 27: Keigo — Bahasa Hormat (尊敬語 & 謙譲語)",
    "desc": "Bab krusial untuk komunikasi profesional di Jepang. Anda akan belajar dua pilar Keigo: Sonkeigo (meninggikan lawan bicara) dan Kenjōgo (merendahkan diri sendiri). Pola ini wajib dikuasai untuk lingkungan kerja formal.",
    "locked": false,
    "vocab": [
      { "id": "v27-1", "rom": "Irasshaimasu", "kana": "いらっしゃいます", "kanji": "", "en": "Ada / Pergi / Datang (hormat, pengganti います/います/きます/いきます)", "audio": "" },
      { "id": "v27-2", "rom": "Osshaimasu", "kana": "おっしゃいます", "kanji": "", "en": "Berkata (hormat, pengganti いいます)", "audio": "" },
      { "id": "v27-3", "rom": "Nasaimasu", "kana": "なさいます", "kanji": "", "en": "Melakukan (hormat, pengganti します)", "audio": "" },
      { "id": "v27-4", "rom": "Meshiagarimasuu", "kana": "めしあがります", "kanji": "召し上がります", "en": "Makan/Minum (hormat, pengganti たべます/のみます)", "audio": "" },
      { "id": "v27-5", "rom": "Goran ni narimasu", "kana": "ごらんになります", "kanji": "ご覧になります", "en": "Melihat (hormat, pengganti みます)", "audio": "" },
      { "id": "v27-6", "rom": "Mōshimasu", "kana": "もうします", "kanji": "申します", "en": "Berkata/bernama (rendah hati, pengganti いいます)", "audio": "" },
      { "id": "v27-7", "rom": "Marimasu", "kana": "まいります", "kanji": "参ります", "en": "Pergi/Datang (rendah hati, pengganti いきます/きます)", "audio": "" },
      { "id": "v27-8", "rom": "Orimasu", "kana": "おります", "kanji": "", "en": "Ada (rendah hati, pengganti います)", "audio": "" },
      { "id": "v27-9", "rom": "Itashimasu", "kana": "いたします", "kanji": "", "en": "Melakukan (rendah hati, pengganti します)", "audio": "" },
      { "id": "v27-10", "rom": "Haiken shimasu", "kana": "はいけんします", "kanji": "拝見します", "en": "Melihat (rendah hati, pengganti みます)", "audio": "" },
      { "id": "v27-11", "rom": "Ukagaimasu", "kana": "うかがいます", "kanji": "伺います", "en": "Mengunjungi/bertanya (rendah hati, pengganti たずねます/ききます)", "audio": "" },
      { "id": "v27-12", "rom": "Itadakimasu", "kana": "いただきます", "kanji": "いただきます", "en": "Menerima/makan (rendah hati, pengganti もらいます/たべます)", "audio": "" },
      { "id": "v27-13", "rom": "Sashiagemasu", "kana": "さしあげます", "kanji": "差し上げます", "en": "Memberikan (rendah hati, pengganti あげます)", "audio": "" },
      { "id": "v27-14", "rom": "Kudasaimasu", "kana": "くださいます", "kanji": "", "en": "Memberikan (hormat, pengganti くれます)", "audio": "" },
      { "id": "v27-15", "rom": "O~ ni narimasu", "kana": "お〜になります", "kanji": "", "en": "Pola hormat umum untuk kata kerja Jepang asli", "audio": "" }
    ],
    "grammar": [
      {
        "id": "g27-1",
        "title": "1. 尊敬語 — Sonkeigo (Meninggikan lawan bicara)",
        "desc": "Digunakan untuk menghormati tindakan orang lain (atasan, pelanggan, orang asing yang dihormati).",
        "points": [
          "Kata kerja khusus: います→いらっしゃいます, いいます→おっしゃいます, します→なさいます, たべます/のみます→めしあがります, みます→ごらんになります",
          "Pola umum: お + V-stem + に + なります. Contoh: Yomimasu → Oyomi ni narimasu (Berkenan membaca).",
          "Pola perintah hormat: お + V-stem + ください. Contoh: Oyomi kudasai (Silakan dibaca)."
        ],
        "formula": "お + V-stem + に なります / お + V-stem + ください",
        "native_note": "Sonkeigo dipakai untuk menggambarkan tindakan orang LAIN yang Anda hormati, bukan tindakan diri sendiri."
      },
      {
        "id": "g27-2",
        "title": "2. 謙譲語 — Kenjōgo (Merendahkan diri sendiri)",
        "desc": "Digunakan untuk menggambarkan tindakan diri sendiri dengan cara yang merendah, sehingga secara tidak langsung meninggikan lawan bicara.",
        "points": [
          "Kata kerja khusus: いきます/きます→まいります, います→おります, します→いたします, みます→はいけんします, いいます→もうします, たずねます→うかがいます, もらいます→いただきます, あげます→さしあげます",
          "Pola umum: お + V-stem + します. Contoh: Yomimasu → Oyomi shimasu (Saya (dengan rendah hati) membacakan)."
        ],
        "formula": "お + V-stem + します (Kenjōgo)"
      }
    ],
    "patterns": [
      { "jp": "社長は もう いらっしゃいますか。", "rom": "Shachō wa mō irasshaimasu ka.", "en": "Apakah Direktur sudah hadir?" },
      { "jp": "田中と 申します。", "rom": "Tanaka to mōshimasu.", "en": "Nama saya Tanaka (rendah hati)." },
      { "jp": "資料を ご覧に なりましたか。", "rom": "Shiryō wo goran ni narimashita ka.", "en": "Sudahkah Anda melihat dokumennya?" },
      { "jp": "少々 お待ち ください。", "rom": "Shōshō omachi kudasai.", "en": "Mohon tunggu sebentar (sangat sopan)." }
    ],
    "conversation": {
      "title": "Telepon ke Perusahaan Klien",
      "dialogue": [
        { "speaker": "Tanaka", "jp": "もしもし、IMC の 田中と 申しますが、山田部長は いらっしゃいますか。", "rom": "Moshi moshi, IMC no Tanaka to mōshimasu ga, Yamada buchō wa irasshaimasu ka.", "en": "Halo, saya Tanaka dari IMC, apakah Manajer Yamada ada?" },
        { "speaker": "Uketsuke", "jp": "はい、少々 お待ち ください。", "rom": "Hai, shōshō omachi kudasai.", "en": "Baik, mohon tunggu sebentar." },
        { "speaker": "Yamada", "jp": "お電話 代わりました。山田です。", "rom": "Odenwa kawarimashita. Yamada desu.", "en": "Sudah tersambung. Ini Yamada." },
        { "speaker": "Tanaka", "jp": "いつも お世話に なっております。来週 ご挨拶に 伺いたいのですが、ご都合は いかがでしょうか。", "rom": "Itsumo osewa ni natte orimasu. Raishuu goisatsu ni ukagaitai no desu ga, gotsugō wa ikaga deshō ka.", "en": "Terima kasih selalu atas kerjasamanya. Minggu depan saya ingin berkunjung untuk salam, bagaimana dengan jadwal Anda?" }
      ]
    },
    "practice": [
      { "type": "mcq", "question": "Ungkapan hormat untuk 'tabemasu' (makan) adalah:", "options": [{ "text": "めしあがります", "correct": true }, { "text": "いただきます", "correct": false }, { "text": "たべられます", "correct": false }] },
      { "type": "fill", "question": "Cara rendah hati menyatakan nama diri: '[nama] to [   ].'", "answer": "mōshimasu" },
      { "type": "mcq", "question": "'Haiken shimasu' adalah kenjōgo dari:", "options": [{ "text": "きます", "correct": false }, { "text": "みます", "correct": true }, { "text": "はなします", "correct": false }] }
    ],
    "mini_kaiwa": [
      { "title": "Menerima Tamu di Kantor", "situation": "Resepsionis menyambut tamu", "dialogue": [{ "speaker": "Resepsionis", "jp": "いらっしゃいませ。どちら様でしょうか。", "rom": "Irasshaimase. Dochira-sama deshō ka.", "en": "Selamat datang. Anda dari mana?" }, { "speaker": "Tamu", "jp": "ABCの 鈴木と 申します。", "rom": "ABC no Suzuki to mōshimasu.", "en": "Saya Suzuki dari ABC." }] }
    ],
    "reibun": [
      { "id": "r27-1", "jp": "先生は 何時に いらっしゃいますか。", "rom": "Sensei wa nanji ni irasshaimasu ka.", "en": "Guru akan tiba jam berapa?" },
      { "id": "r27-2", "jp": "資料を 拝見 しました。", "rom": "Shiryō wo haiken shimashita.", "en": "Saya sudah melihat dokumennya." },
      { "id": "r27-3", "jp": "社長が おっしゃった とおりです。", "rom": "Shachō ga osshatta tōri desu.", "en": "Persis seperti yang Direktur katakan." },
      { "id": "r27-4", "jp": "明日 午後 2時に 伺います。", "rom": "Ashita gogo niji ni ukagaimasu.", "en": "Besok saya akan berkunjung jam 2 siang." },
      { "id": "r27-5", "jp": "何か ご用が ございましたら、何でも おっしゃってください。", "rom": "Nanika goyō ga gozaimashitara, nandemo osshatte kudasai.", "en": "Kalau ada keperluan apapun, silakan beritahu saya." }
    ],
    "workbook": [
      { "id": "wb27-1", "pattern": "Sonkeigo: います → いらっしゃいます", "instruction": "Ubah kalimat ini ke bentuk hormat.", "question": "Sensei wa ima jimusho ni imasu.", "correct": "せんせいは いま じむしょに いらっしゃいます。", "romaji": "Sensei wa ima jimusho ni irasshaimasu.", "translation": "Guru sekarang ada di kantor (hormat)." },
      { "id": "wb27-2", "pattern": "Kenjōgo: いきます → まいります", "instruction": "Ubah tindakan diri sendiri ke bentuk rendah hati.", "question": "Ashita ukagaimasu. (berkunjung)", "correct": "あした うかがいます。", "romaji": "Ashita ukagaimasu.", "translation": "Besok saya akan berkunjung (rendah hati)." },
      { "id": "wb27-3", "pattern": "Sonkeigo: します → なさいます", "instruction": "Ubah ke bentuk hormat.", "question": "Shachō wa nani wo shimasu ka.", "correct": "しゃちょうは なにを なさいますか。", "romaji": "Shachō wa nani wo nasaimasu ka.", "translation": "Apa yang akan Direktur lakukan?" },
      { "id": "wb27-4", "pattern": "Kenjōgo: もらいます → いただきます", "instruction": "Ubah ke bentuk rendah hati.", "question": "Sensei ni hon wo moraimashita.", "correct": "せんせいに ほんを いただきました。", "romaji": "Sensei ni hon wo itadakimashita.", "translation": "Saya menerima buku dari guru (rendah hati)." },
      { "id": "wb27-5", "pattern": "お + V-stem + ください (perintah hormat)", "instruction": "Buat kalimat perintah hormat untuk 'menunggu'.", "question": "Matte kudasai → keigo", "correct": "おまち ください。", "romaji": "Omachi kudasai.", "translation": "Mohon tunggu (sangat sopan)." }
    ],
    "exam": {
      "part1": [
        { "id": "ex27-1", "sentence": "しゃちょうは いま かいぎしつに [ ]。", "correct": "いらっしゃいます", "translation": "Direktur sekarang ada di ruang rapat." },
        { "id": "ex27-2", "sentence": "たなかと [ ]。よろしく おねがいします。", "correct": "もうします", "translation": "Nama saya Tanaka. Mohon bantuannya." },
        { "id": "ex27-3", "sentence": "しりょうを [ ] しました。", "correct": "はいけん", "translation": "Saya sudah melihat dokumennya." },
        { "id": "ex27-4", "sentence": "あした ごごに [ ]。", "correct": "うかがいます", "translation": "Besok sore saya akan berkunjung." },
        { "id": "ex27-5", "sentence": "すこし おまち [ ]。", "correct": "ください", "translation": "Mohon tunggu sebentar." }
      ],
      "part2": [
        { "id": "ex27-6", "question": "Kenjōgo (bentuk rendah hati) untuk 'tabemasu' adalah:", "options": [{ "text": "めしあがります", "correct": false }, { "text": "いただきます", "correct": true }, { "text": "おたべします", "correct": false }] },
        { "id": "ex27-7", "question": "Sonkeigo digunakan untuk:", "options": [{ "text": "Mendeskripsikan tindakan diri sendiri dengan rendah hati", "correct": false }, { "text": "Mendeskripsikan tindakan orang yang dihormati", "correct": true }, { "text": "Berbicara kepada teman sebaya", "correct": false }] },
        { "id": "ex27-8", "question": "Cara paling sopan untuk mengatakan 'saya pergi' (kenjōgo) adalah:", "options": [{ "text": "いきます", "correct": false }, { "text": "まいります", "correct": true }, { "text": "いらっしゃいます", "correct": false }] }
      ],
      "part3": {
        "text": "もしもし、わたくしは さくら商事の すずきと もうします。やまだ部長は いらっしゃいますか。... はい、しょうしょうおまちください。... おまたせしました。やまだです。... らいしゅうのかようびにうかがいたいのですが、ごつごうはいかがでしょうか。",
        "questions": [
          { "id": "ex27-9", "question": "すずきさんは さくら商事の しゃいんです。", "correct": "T" },
          { "id": "ex27-10", "question": "すずきさんは やまださんに でんわしています。", "correct": "T" },
          { "id": "ex27-11", "question": "すずきさんは らいしゅう もくようびに うかがいたいです。", "correct": "F" }
        ]
      }
    }
  },

  // ============================================================
  // LESSON 28: Passive (受身形) — Pendalaman
  // ============================================================
  {
    "id": 28,
    "title": "Lesson 28: Bentuk Pasif (受身形) — Pendalaman",
    "desc": "Mendalami penggunaan bentuk pasif dalam konteks yang lebih luas: pasif yang menguntungkan, pasif yang merugikan, dan pasif impersonal dalam teks formal/berita.",
    "locked": false,
    "vocab": [
      { "id": "v28-1", "rom": "Hōkoku (shimasu)", "kana": "ほうこく（します）", "kanji": "報告（します）", "en": "Melaporkan / Laporan", "audio": "" },
      { "id": "v28-2", "rom": "Shijimasu", "kana": "しじします", "kanji": "指示します", "en": "Memberi instruksi/arahan", "audio": "" },
      { "id": "v28-3", "rom": "Hiroimasu", "kana": "ひろいます", "kanji": "拾います", "en": "Memungut / Mengambil dari tanah", "audio": "" },
      { "id": "v28-4", "rom": "Homemasu", "kana": "ほめます", "kanji": "褒めます", "en": "Memuji / Menyanjung", "audio": "" },
      { "id": "v28-5", "rom": "Shikararemasu", "kana": "しかられます", "kanji": "叱られます", "en": "Dimarahi (bentuk pasif)", "audio": "" },
      { "id": "v28-6", "rom": "Nusumaremasu", "kana": "ぬすまれます", "kanji": "盗まれます", "en": "Dicuri (bentuk pasif)", "audio": "" },
      { "id": "v28-7", "rom": "Kowaremasu", "kana": "こわれます", "kanji": "壊れます", "en": "Rusak / Hancur (intransitif)", "audio": "" },
      { "id": "v28-8", "rom": "Tsukuraremasu", "kana": "つくられます", "kanji": "作られます", "en": "Dibuat (pasif dari tsukurimasu)", "audio": "" },
      { "id": "v28-9", "rom": "Mitsukeraremasu", "kana": "みつけられます", "kanji": "見つけられます", "en": "Ditemukan (pasif dari mitsukemasu)", "audio": "" },
      { "id": "v28-10", "rom": "Eigo de kakaremasu", "kana": "えいごでかかれます", "kanji": "英語で書かれます", "en": "Ditulis dalam bahasa Inggris", "audio": "" },
      { "id": "v28-11", "rom": "Sekai-juu", "kana": "せかいじゅう", "kanji": "世界中", "en": "Di seluruh dunia", "audio": "" },
      { "id": "v28-12", "rom": "Hyaku-nen-mae", "kana": "ひゃくねんまえ", "kanji": "百年前", "en": "Seratus tahun yang lalu", "audio": "" },
      { "id": "v28-13", "rom": "Saigo", "kana": "さいご", "kanji": "最後", "en": "Terakhir / Paling akhir", "audio": "" },
      { "id": "v28-14", "rom": "Yūmei (na)", "kana": "ゆうめい（な）", "kanji": "有名（な）", "en": "Terkenal / Terkemuka", "audio": "" },
      { "id": "v28-15", "rom": "Tsutawarimasu", "kana": "つたわります", "kanji": "伝わります", "en": "Tersebar / Tersampaikan", "audio": "" }
    ],
    "grammar": [
      {
        "id": "g28-1",
        "title": "1. Pasif Merugikan (Harmful Passive)",
        "desc": "Bentuk pasif yang digunakan ketika subjek menderita atau terganggu oleh tindakan orang/sesuatu lain. Sangat umum dalam bahasa Jepang sehari-hari.",
        "points": [
          "Pola: [Subjek は] [Pelaku に] V-passive form。",
          "Contoh: Watashi wa sensei NI shikararemashita. (Saya DIMARAHI oleh guru — tidak menyenangkan).",
          "Bahkan benda mati bisa jadi pelaku: Ame NI furaremashita. (Kehujanan / hujan jatuh menimpa saya).",
          "Kunci: subjek selalu MERASAKAN dampak (biasanya negatif) dari tindakan tersebut."
        ],
        "formula": "[Subjek は] [Pelaku に] V-られます (pasif)"
      },
      {
        "id": "g28-2",
        "title": "2. Pasif Impersonal (dalam teks resmi/sejarah)",
        "desc": "Digunakan dalam tulisan formal, berita, dan penjelasan sejarah tanpa menyebutkan pelaku.",
        "points": [
          "Contoh: Kono shiro wa 400-nen mae ni tatERAREmashita. (Kastil ini DIBANGUN 400 tahun yang lalu).",
          "Contoh: Nihongo wa sekaijuu de hanaSAREte imasu. (Bahasa Jepang DIGUNAKAN di seluruh dunia).",
          "Pelaku tidak disebutkan karena tidak penting atau tidak diketahui."
        ],
        "formula": "N は V-られています (pasif impersonal, kondisi berlanjut)"
      }
    ],
    "patterns": [
      { "jp": "子供の 時、よく 父に 叱られました。", "rom": "Kodomo no toki, yoku chichi ni shikararemashita.", "en": "Waktu kecil, saya sering dimarahi oleh ayah." },
      { "jp": "この 映画は 世界中で 見られています。", "rom": "Kono eiga wa sekaijuu de mirarete imasu.", "en": "Film ini ditonton di seluruh dunia." },
      { "jp": "財布を 盗まれて しまいました。", "rom": "Saifu wo nusumarete shimaimashita.", "en": "Dompet saya dicuri (saya menderita karenanya)." },
      { "jp": "この 寺は 500年前に 建てられました。", "rom": "Kono tera wa 500-nen mae ni tateraremashita.", "en": "Kuil ini dibangun 500 tahun yang lalu." }
    ],
    "conversation": {
      "title": "Mengalami Hal Tidak Menyenangkan",
      "dialogue": [
        { "speaker": "A", "jp": "どうしたんですか。元気が ないですね。", "rom": "Dō shitan desu ka. Genki ga nai desu ne.", "en": "Ada apa? Kelihatan tidak bersemangat ya." },
        { "speaker": "B", "jp": "電車の 中で 足を 踏まれたんです。すごく 痛かった。", "rom": "Densha no naka de ashi wo fumareta n desu. Sugoku itakatta.", "en": "Di dalam kereta, kaki saya diinjak. Sakitnya luar biasa." },
        { "speaker": "A", "jp": "それは 大変でしたね。", "rom": "Sore wa taihen deshita ne.", "en": "Kasihan ya, itu berat sekali." },
        { "speaker": "B", "jp": "それだけじゃなくて、財布も 盗まれたんです。", "rom": "Sore dake ja nakute, saifu mo nusumareta n desu.", "en": "Tidak hanya itu, dompet saya juga dicuri." }
      ]
    },
    "practice": [
      { "type": "mcq", "question": "Bentuk pasif dari 'shikaru' (memarahi) adalah:", "options": [{ "text": "しからせます", "correct": false }, { "text": "しかられます", "correct": true }, { "text": "しかれます", "correct": false }] },
      { "type": "fill", "question": "Terjemahkan menggunakan pasif: 'Saya dipuji oleh guru'.\nWatashi wa sensei ni [   ].", "answer": "homeraremashita" },
      { "type": "mcq", "question": "Dalam kalimat pasif, partikel yang menandai pelaku tindakan adalah:", "options": [{ "text": "を", "correct": false }, { "text": "に", "correct": true }, { "text": "が", "correct": false }] }
    ],
    "mini_kaiwa": [
      { "title": "Membicarakan Sejarah Tempat Wisata", "situation": "Wisatawan bertanya tentang sejarah kuil", "dialogue": [{ "speaker": "Guide", "jp": "この お寺は 1200年前に 建てられました。", "rom": "Kono otera wa 1200-nen mae ni tateraremashita.", "en": "Kuil ini dibangun 1200 tahun yang lalu." }, { "speaker": "Wisatawan", "jp": "へえ、すごいですね。誰に 建てられたんですか。", "rom": "Hee, sugoi desu ne. Dare ni taterareta n desu ka.", "en": "Wow, luar biasa. Dibangun oleh siapa?" }] }
    ],
    "reibun": [
      { "id": "r28-1", "jp": "電車の 中で 知らない 人に 足を 踏まれました。", "rom": "Densha no naka de shiranai hito ni ashi wo fumaremashita.", "en": "Di dalam kereta, kaki saya diinjak orang tidak dikenal." },
      { "id": "r28-2", "jp": "日本語は アジアの 多くの 国で 話されています。", "rom": "Nihongo wa Ajia no ooku no kuni de hanasarete imasu.", "en": "Bahasa Jepang digunakan di banyak negara Asia." },
      { "id": "r28-3", "jp": "このケーキは 有名な シェフに 作られました。", "rom": "Kono keeki wa yuumei na shefu ni tsukuraremashita.", "en": "Kue ini dibuat oleh koki yang terkenal." },
      { "id": "r28-4", "jp": "先生に ほめられて、とても うれしかったです。", "rom": "Sensei ni homerarete, totemo ureshikatta desu.", "en": "Dipuji oleh guru, saya sangat senang." },
      { "id": "r28-5", "jp": "子供の 時、雨に 降られて 風邪を ひいてしまいました。", "rom": "Kodomo no toki, ame ni furarete kaze wo hiite shimaimashita.", "en": "Waktu kecil, kehujanan dan akhirnya masuk angin." }
    ],
    "workbook": [
      { "id": "wb28-1", "pattern": "Bentuk pasif Grup I", "instruction": "Ubah kata kerja berikut ke bentuk pasif.", "question": "Yomimasu → Pasif", "correct": "よまれます", "romaji": "yomaremasu", "translation": "Dibaca" },
      { "id": "wb28-2", "pattern": "Bentuk pasif Grup II", "instruction": "Ubah kata kerja berikut ke bentuk pasif.", "question": "Tabemasuu → Pasif", "correct": "たべられます", "romaji": "taberaremasu", "translation": "Dimakan" },
      { "id": "wb28-3", "pattern": "Pasif merugikan", "instruction": "Buat kalimat pasif merugikan: 'Kaki saya diinjak di kereta'.", "question": "Densha / ashi / fumareru", "correct": "でんしゃで あしを ふまれました。", "romaji": "Densha de ashi wo fumaremashita.", "translation": "Kaki saya diinjak di kereta." },
      { "id": "wb28-4", "pattern": "Pasif impersonal (sejarah)", "instruction": "Buat kalimat pasif untuk menyatakan 'novel ini ditulis 100 tahun lalu'.", "question": "Kono shousetsu / 100-nen mae / kakareru", "correct": "この しょうせつは 100ねんまえに かかれました。", "romaji": "Kono shousetsu wa 100-nen mae ni kakaremashita.", "translation": "Novel ini ditulis 100 tahun yang lalu." },
      { "id": "wb28-5", "pattern": "Pasif + て + うれしい/かなしい", "instruction": "Nyatakan perasaan setelah mendapat tindakan pasif.", "question": "Sensei / homeru / ureshii", "correct": "せんせいに ほめられて うれしかったです。", "romaji": "Sensei ni homerarete ureshikatta desu.", "translation": "Dipuji oleh guru, saya senang." }
    ],
    "exam": {
      "part1": [
        { "id": "ex28-1", "sentence": "でんしゃの なかで あしを ふま [ ] ました。", "correct": "れ", "translation": "Kaki saya diinjak di dalam kereta." },
        { "id": "ex28-2", "sentence": "この えいがは せかいじゅうで み [ ] います。", "correct": "られて", "translation": "Film ini ditonton di seluruh dunia." },
        { "id": "ex28-3", "sentence": "せんせいに [ ] て、とても うれしかった。", "correct": "ほめられ", "translation": "Dipuji guru, saya sangat senang." },
        { "id": "ex28-4", "sentence": "この てらは 500ねんまえに たて [ ] ました。", "correct": "られ", "translation": "Kuil ini dibangun 500 tahun lalu." },
        { "id": "ex28-5", "sentence": "さいふを [ ] てしまいました。", "correct": "ぬすまれ", "translation": "Dompet saya dicuri." }
      ],
      "part2": [
        { "id": "ex28-6", "question": "Kalimat 'Ame ni furaremashita' mengandung makna:", "options": [{ "text": "Saya menyebabkan hujan turun", "correct": false }, { "text": "Saya terganggu/dirugikan oleh hujan (kehujanan)", "correct": true }, { "text": "Saya menyukai hujan", "correct": false }] },
        { "id": "ex28-7", "question": "Dalam pasif impersonal (sejarah/berita), pelaku biasanya:", "options": [{ "text": "Wajib disebutkan", "correct": false }, { "text": "Tidak disebutkan karena tidak relevan/diketahui", "correct": true }, { "text": "Digunakan dengan partikel を", "correct": false }] },
        { "id": "ex28-8", "question": "Bentuk pasif dari 'kaku' (menulis) adalah:", "options": [{ "text": "かかせます", "correct": false }, { "text": "かかれます", "correct": true }, { "text": "かけられます", "correct": false }] }
      ],
      "part3": {
        "text": "きのう、でんしゃが おくれて こまりました。でんしゃの なかは とても こんでいて、しらないひとに あしを ふまれました。しかも、かいしゃに ついてから、ぶちょうに しごとの ほうこくが おそいと しかられました。さんざんな いちにちでした。",
        "questions": [
          { "id": "ex28-9", "question": "でんしゃは じかんどおりに きました。", "correct": "F" },
          { "id": "ex28-10", "question": "でんしゃの なかで あしを ふまれました。", "correct": "T" },
          { "id": "ex28-11", "question": "かいしゃで ぶちょうに ほめられました。", "correct": "F" }
        ]
      }
    }
  },

  // ============================================================
  // LESSON 29: 〜そうです (Hearsay) / 〜ようです (Inference)
  // ============================================================
  {
    "id": 29,
    "title": "Lesson 29: Hearsay vs Inference (〜そうです / 〜ようです)",
    "desc": "Membedakan dua pola dugaan penting: そうです untuk menyampaikan informasi dari sumber lain ('katanya ~'), dan ようです untuk menyatakan kesimpulan berdasarkan observasi langsung ('tampaknya ~'). Juga dibahas: らしいです.",
    "locked": false,
    "vocab": [
      { "id": "v29-1", "rom": "Nyūsu", "kana": "ニュース", "kanji": "", "en": "Berita (news)", "audio": "" },
      { "id": "v29-2", "rom": "Tenpō", "kana": "てんぽ", "kanji": "店舗", "en": "Toko / Gerai", "audio": "" },
      { "id": "v29-3", "rom": "Heisa (shimasu)", "kana": "へいさ（します）", "kanji": "閉鎖（します）", "en": "Menutup (usaha/toko) / Pembubaran", "audio": "" },
      { "id": "v29-4", "rom": "Torikeshimasu", "kana": "とりけします", "kanji": "取り消します", "en": "Membatalkan / Menganulir", "audio": "" },
      { "id": "v29-5", "rom": "Enzuru", "kana": "えんずる", "kanji": "演ずる", "en": "Memerankan / Bermain peran", "audio": "" },
      { "id": "v29-6", "rom": "Taifuu", "kana": "たいふう", "kanji": "台風", "en": "Topan / Taufan", "audio": "" },
      { "id": "v29-7", "rom": "Kakaku", "kana": "かかく", "kanji": "価格", "en": "Harga", "audio": "" },
      { "id": "v29-8", "rom": "Keizai", "kana": "けいざい", "kanji": "経済", "en": "Ekonomi", "audio": "" },
      { "id": "v29-9", "rom": "Jishin", "kana": "じしん", "kanji": "地震", "en": "Gempa bumi", "audio": "" },
      { "id": "v29-10", "rom": "Higai", "kana": "ひがい", "kanji": "被害", "en": "Kerusakan / Korban", "audio": "" },
      { "id": "v29-11", "rom": "Yasashii", "kana": "やさしい", "kanji": "優しい", "en": "Baik hati / Lembut", "audio": "" },
      { "id": "v29-12", "rom": "Mendokusai", "kana": "めんどくさい", "kanji": "面倒くさい", "en": "Repot / Merepotkan / Malas", "audio": "" },
      { "id": "v29-13", "rom": "Kibun", "kana": "きぶん", "kanji": "気分", "en": "Perasaan / Suasana hati / Kondisi", "audio": "" },
      { "id": "v29-14", "rom": "Saiken", "kana": "さいきん", "kanji": "最近", "en": "Akhir-akhir ini / Belakangan ini", "audio": "" },
      { "id": "v29-15", "rom": "Uwasa", "kana": "うわさ", "kanji": "噂", "en": "Gosip / Desas-desus / Rumor", "audio": "" }
    ],
    "grammar": [
      {
        "id": "g29-1",
        "title": "1. 〜そうです (Hearsay / Katanya ~)",
        "desc": "Menyampaikan informasi yang Anda dengar dari sumber lain (berita, gosip, teman). Pembicara tidak memverifikasi sendiri.",
        "points": [
          "Pola: Plain form (kamus/lampau) + そうです。",
          "Contoh V: Tanaka-san wa kaisha wo yameru sou desu. (Katanya Tanaka akan keluar dari perusahaan).",
          "Contoh Adj-i: Ano resutoran wa oishii sou desu. (Katanya restoran itu enak).",
          "Contoh Adj-na: Kare wa shinsetsuda sou desu. (Katanya dia baik hati).",
          "PERHATIAN: Berbeda dengan そうです untuk 'penampilan visual' (Bab 8 MNN I) yang menggunakan V-stem/Adj-stem!"
        ],
        "formula": "Plain form + そうです (hearsay) ≠ Adj-stem + そうです (penampilan)",
        "native_note": "Untuk menunjukkan sumber informasi, tambahkan: 'Nyūsu ni yoru to...' (Menurut berita...) atau '~san ni yoru to...' (Menurut ~san...)."
      },
      {
        "id": "g29-2",
        "title": "2. 〜ようです (Inference — Tampaknya ~)",
        "desc": "Menyatakan kesimpulan atau dugaan berdasarkan informasi/bukti yang Anda lihat atau ketahui langsung.",
        "points": [
          "Pola: Plain form + ようです (lebih formal); atau みたいです (lebih kasual/lisan).",
          "Contoh V: Kare wa byouki no you desu. (Tampaknya dia sakit) — berdasarkan observasi penampilan.",
          "Contoh Adj: Soto wa samui you desu. (Tampaknya di luar dingin) — berdasarkan melihat orang yang pakai jaket.",
          "みたいです: Versi kasual dari ようです. Kare, byouki mitai desu ne."
        ],
        "formula": "Plain form / N + ようです / みたいです"
      }
    ],
    "patterns": [
      { "jp": "ニュースに よると、大きな 地震が あった そうです。", "rom": "Nyūsu ni yoru to, ookina jishin ga atta sou desu.", "en": "Menurut berita, katanya ada gempa besar." },
      { "jp": "彼女は 今日 来ない ようです。", "rom": "Kanojo wa kyō konai you desu.", "en": "Tampaknya dia tidak akan datang hari ini." },
      { "jp": "あの レストランは 予約が 必要だ そうです。", "rom": "Ano resutoran wa yoyaku ga hitsuyōda sou desu.", "en": "Katanya restoran itu perlu reservasi." },
      { "jp": "外は 雨が 降っている みたいです。", "rom": "Soto wa ame ga futte iru mitai desu.", "en": "Sepertinya di luar sedang hujan." }
    ],
    "conversation": {
      "title": "Gosip Kantor",
      "dialogue": [
        { "speaker": "A", "jp": "田中さんの 話を 聞きましたか。", "rom": "Tanaka-san no hanashi wo kikimashita ka.", "en": "Sudah dengar tentang Tanaka-san?" },
        { "speaker": "B", "jp": "いいえ、何ですか。", "rom": "Iie, nan desu ka.", "en": "Belum, ada apa?" },
        { "speaker": "A", "jp": "来月、会社を 辞める そうです。", "rom": "Raigetsu, kaisha wo yameru sou desu.", "en": "Katanya bulan depan dia keluar dari perusahaan." },
        { "speaker": "B", "jp": "え、本当ですか。最近 元気が ない ようでしたが…。", "rom": "E, hontō desu ka. Sakin genki ga nai yō deshita ga...", "en": "Eh, benarkah? Akhir-akhir ini memang tampaknya kurang bersemangat..." }
      ]
    },
    "practice": [
      { "type": "mcq", "question": "そうです untuk 'hearsay' menggunakan bentuk:", "options": [{ "text": "Plain form + そうです", "correct": true }, { "text": "Adj-stem + そうです", "correct": false }, { "text": "Masu-form + そうです", "correct": false }] },
      { "type": "fill", "question": "Sampaikan informasi yang didengar: 'Katanya besok akan hujan'.\nAshita ame ga furu [   ].", "answer": "sou desu" },
      { "type": "mcq", "question": "みたいです adalah versi ___ dari ようです:", "options": [{ "text": "Lebih formal", "correct": false }, { "text": "Lebih kasual/lisan", "correct": true }, { "text": "Lebih pasti", "correct": false }] }
    ],
    "mini_kaiwa": [
      { "title": "Mengomentari Cuaca", "situation": "Melihat keluar jendela", "dialogue": [{ "speaker": "A", "jp": "外、寒そうですね。", "rom": "Soto, samusō desu ne.", "en": "Sepertinya di luar dingin ya." }, { "speaker": "B", "jp": "天気予報では、雪が 降る そうですよ。", "rom": "Tenkiyohō de wa, yuki ga furu sou desu yo.", "en": "Di ramalan cuaca katanya akan turun salju." }] }
    ],
    "reibun": [
      { "id": "r29-1", "jp": "ニュースに よると、明日 台風が 来る そうです。", "rom": "Nyūsu ni yoru to, ashita taifū ga kuru sou desu.", "en": "Menurut berita, katanya besok topan akan datang." },
      { "id": "r29-2", "jp": "田中さんは 最近 忙しい ようです。", "rom": "Tanaka-san wa sakin isogashii you desu.", "en": "Tampaknya Tanaka-san akhir-akhir ini sibuk." },
      { "id": "r29-3", "jp": "あの 映画は とても 面白い そうですよ。", "rom": "Ano eiga wa totemo omoshiroi sou desu yo.", "en": "Katanya film itu sangat menarik lho." },
      { "id": "r29-4", "jp": "彼女は 体の 具合が 悪い みたいです。", "rom": "Kanojo wa karada no guai ga warui mitai desu.", "en": "Sepertinya kondisi badannya kurang baik." },
      { "id": "r29-5", "jp": "友達に よると、その 店は 閉まった そうです。", "rom": "Tomodachi ni yoru to, sono mise wa shimatta sou desu.", "en": "Menurut teman, katanya toko itu sudah tutup." }
    ],
    "workbook": [
      { "id": "wb29-1", "pattern": "Plain form + そうです (hearsay)", "instruction": "Laporkan informasi yang Anda dengar: 'Katanya Tanaka sakit'.", "question": "Tanaka-san / byouki / sou desu", "correct": "たなかさんは びょうきだ そうです。", "romaji": "Tanaka-san wa byouki da sou desu.", "translation": "Katanya Tanaka-san sakit." },
      { "id": "wb29-2", "pattern": "Plain form + ようです (inference)", "instruction": "Nyatakan kesimpulan berdasarkan observasi: 'Tampaknya dia sedang tidur'.", "question": "Kare / nete iru / you desu", "correct": "かれは ねているようです。", "romaji": "Kare wa nete iru you desu.", "translation": "Tampaknya dia sedang tidur." },
      { "id": "wb29-3", "pattern": "みたいです (kasual)", "instruction": "Ubah kalimat ようです menjadi versi kasual みたいです.", "question": "Soto wa samui you desu → mitai", "correct": "そとは さむいみたいです。", "romaji": "Soto wa samui mitai desu.", "translation": "Sepertinya di luar dingin (kasual)." },
      { "id": "wb29-4", "pattern": "〜に よると、〜そうです", "instruction": "Gunakan sumber informasi dalam kalimat.", "question": "Nyuusu / ashita / ame / furu / sou desu", "correct": "ニュースによると、あした あめが ふるそうです。", "romaji": "Nyuusu ni yoru to, ashita ame ga furu sou desu.", "translation": "Menurut berita, katanya besok akan hujan." },
      { "id": "wb29-5", "pattern": "Bedakan sou desu (hearsay vs visual)", "instruction": "Tentukan: mana yang 'hearsay' dan mana yang 'penampilan visual'?\nA: おいしそうです / B: おいしいそうです", "question": "Mana yang menyatakan 'Katanya enak' (informasi dari luar)?", "correct": "B: おいしいそうです (hearsay — plain form + sou desu)", "romaji": "B: oishii sou desu", "translation": "Katanya enak (menurut orang)" }
    ],
    "exam": {
      "part1": [
        { "id": "ex29-1", "sentence": "ニュースに よると、じしんが あった [ ]。", "correct": "そうです", "translation": "Menurut berita, katanya ada gempa." },
        { "id": "ex29-2", "sentence": "かれは びょうきの [ ] です。", "correct": "よう", "translation": "Tampaknya dia sakit." },
        { "id": "ex29-3", "sentence": "そとは さむい [ ] ですね。", "correct": "みたい", "translation": "Sepertinya di luar dingin ya." },
        { "id": "ex29-4", "sentence": "ともだちに よると、あの てんは やすい [ ]。", "correct": "そうです", "translation": "Menurut teman, katanya toko itu murah." },
        { "id": "ex29-5", "sentence": "かれじょは きょう こない [ ]。", "correct": "ようです", "translation": "Tampaknya dia tidak akan datang hari ini." }
      ],
      "part2": [
        { "id": "ex29-6", "question": "Perbedaan antara 'oishisou desu' dan 'oishii sou desu':", "options": [{ "text": "Tidak ada perbedaan", "correct": false }, { "text": "oishisou = tampak enak (visual); oishii sou = katanya enak (hearsay)", "correct": true }, { "text": "oishii sou = tampak enak; oishisou = katanya enak", "correct": false }] },
        { "id": "ex29-7", "question": "Kalimat yang menggunakan ようです dengan benar adalah:", "options": [{ "text": "かれは かぜの ようです (berdasarkan melihat dia bersin-bersin)", "correct": true }, { "text": "かれは かぜ そうです (hearsay)", "correct": false }, { "text": "かれは かぜ らしいです (dari informasi pihak ketiga)", "correct": false }] },
        { "id": "ex29-8", "question": "みたいです dan ようです memiliki makna yang:", "options": [{ "text": "Berbeda sepenuhnya", "correct": false }, { "text": "Sama, tapi みたいです lebih kasual", "correct": true }, { "text": "みたいです lebih pasti dari ようです", "correct": false }] }
      ],
      "part3": {
        "text": "ともだちから きいたのですが、たなかさんは らいげつ かいしゃを やめるそうです。さいきん、あまり げんきが ないようです。まいにち おそくまで はたらいているみたいで、つかれているのかも しれません。",
        "questions": [
          { "id": "ex29-9", "question": "このじょうほうは ともだちから きいたものです。", "correct": "T" },
          { "id": "ex29-10", "question": "たなかさんは らいねん かいしゃを やめるそうです。", "correct": "F" },
          { "id": "ex29-11", "question": "たなかさんは まいにち おそくまで はたらいているようです。", "correct": "T" }
        ]
      }
    }
  },

  // ============================================================
  // LESSON 30: 〜ば条件形 (Ba-form Conditional)
  // ============================================================
  {
    "id": 30,
    "title": "Lesson 30: Kondisional Ba-Form (〜ば / 〜れば)",
    "desc": "Mempelajari bentuk kondisional ば (ba-form) yang menyatakan 'jika/kalau A, maka B'. Dibandingkan dengan tara-form dan to-form untuk memahami nuansa perbedaannya.",
    "locked": false,
    "vocab": [
      { "id": "v30-1", "rom": "Hayameru", "kana": "はやめます", "kanji": "早めます", "en": "Memajukan / Mempercepat (jadwal)", "audio": "" },
      { "id": "v30-2", "rom": "Ōkiku narimasu", "kana": "おおきくなります", "kanji": "大きくなります", "en": "Menjadi besar / Bertambah besar", "audio": "" },
      { "id": "v30-3", "rom": "Mondai", "kana": "もんだい", "kanji": "問題", "en": "Masalah / Soal", "audio": "" },
      { "id": "v30-4", "rom": "Kanarazu", "kana": "かならず", "kanji": "必ず", "en": "Pasti / Tanpa kecuali", "audio": "" },
      { "id": "v30-5", "rom": "Manabu", "kana": "まなびます", "kanji": "学びます", "en": "Belajar / Mempelajari", "audio": "" },
      { "id": "v30-6", "rom": "Renshuu (shimasu)", "kana": "れんしゅう（します）", "kanji": "練習（します）", "en": "Latihan / Berlatih", "audio": "" },
      { "id": "v30-7", "rom": "Kantan (na)", "kana": "かんたん（な）", "kanji": "簡単（な）", "en": "Mudah / Sederhana", "audio": "" },
      { "id": "v30-8", "rom": "Muzukashii", "kana": "むずかしい", "kanji": "難しい", "en": "Sulit / Susah", "audio": "" },
      { "id": "v30-9", "rom": "Ii n desu ga", "kana": "いいんですが", "kanji": "", "en": "Seharusnya baik tapi... / Bagusnya sih...", "audio": "" },
      { "id": "v30-10", "rom": "Dōshitara ii desu ka", "kana": "どうしたらいいですか", "kanji": "", "en": "Sebaiknya harus bagaimana?", "audio": "" },
      { "id": "v30-11", "rom": "Kekkyoku", "kana": "けっきょく", "kanji": "結局", "en": "Akhirnya / Pada akhirnya", "audio": "" },
      { "id": "v30-12", "rom": "Moshi (moshi)", "kana": "もし（もし）", "kanji": "", "en": "Jika (halo di telepon)", "audio": "" },
      { "id": "v30-13", "rom": "Tōka", "kana": "とおか", "kanji": "10日", "en": "Tanggal 10 / Sepuluh hari", "audio": "" },
      { "id": "v30-14", "rom": "Naze", "kana": "なぜ", "kanji": "", "en": "Mengapa / Kenapa (lebih formal dari どうして)", "audio": "" },
      { "id": "v30-15", "rom": "Kekkon (shimasu)", "kana": "けっこん（します）", "kanji": "結婚（します）", "en": "Menikah", "audio": "" }
    ],
    "grammar": [
      {
        "id": "g30-1",
        "title": "1. Cara Membuat Ba-Form",
        "desc": "Ba-form (bentuk kondisional) dibuat dengan aturan berbeda untuk setiap grup kata kerja.",
        "points": [
          "Grup I (う-verb): ganti ～う → ～えば. Contoh: kaku→kakeba, yomu→yomeba, iku→ikeba",
          "Grup II (る-verb): ganti ～る → ～れば. Contoh: taberu→tabereba, miru→mireba",
          "Grup III: suru→sureba, kuru→kureba",
          "I-Adj: ganti ～い → ～ければ. Contoh: takai→takakereba, hayai→hayakereba",
          "Na-Adj/N: +であれば (formal) atau +なら (lebih umum).",
          "Negatif: ～なければ (dari ない→なければ). Contoh: ikanai→ikanakereba"
        ],
        "formula": "V う→えば / V る→れば / I-Adj い→ければ"
      },
      {
        "id": "g30-2",
        "title": "2. Penggunaan Ba-Form",
        "desc": "Ba-form digunakan untuk kondisi umum, saran, dan pernyataan yang berlaku secara universal.",
        "points": [
          "Kondisi umum (hukum alam/universal): Haru ga kureba, hana ga sakimasu. (Kalau musim semi datang, bunga mekar).",
          "Saran dengan 'ii': Hayaku ikaREBA ii desu. (Kalau pergi cepat saja, akan baik).",
          "Dalam pertanyaan 'Dō sureba ii desu ka?' (Sebaiknya bagaimana?), jawaban dengan ba-form.",
          "BATASAN: Kalimat utama (B) tidak bisa berisi permintaan/perintah langsung → gunakan tara-form."
        ],
        "formula": "A-ば B (B berlaku jika A terpenuhi)"
      },
      {
        "id": "g30-3",
        "title": "3. 〜ばよかったです (Seharusnya ~)",
        "desc": "Pola untuk menyatakan penyesalan atau sesuatu yang seharusnya dilakukan.",
        "points": [
          "Pola: V-ba + よかったです。",
          "Contoh: Motto hayaku ikeBA yokatta desu. (Seharusnya pergi lebih cepat).",
          "Versi negatif: V-nakereba yokatta desu → Seharusnya tidak melakukan.",
          "Contoh negatif: Sonna koto iwanakereba yokatta desu. (Seharusnya tidak bilang hal seperti itu)."
        ],
        "formula": "V-ば よかったです (seharusnya ~)"
      }
    ],
    "patterns": [
      { "jp": "春が くれば、花が 咲きます。", "rom": "Haru ga kureba, hana ga sakimasu.", "en": "Kalau musim semi datang, bunga akan mekar." },
      { "jp": "もっと 早く 行けば よかったです。", "rom": "Motto hayaku ikeba yokatta desu.", "en": "Seharusnya pergi lebih cepat tadi." },
      { "jp": "どう すれば いいですか。", "rom": "Dō sureba ii desu ka.", "en": "Sebaiknya bagaimana (harus dilakukan)?" },
      { "jp": "毎日 練習 すれば、上手に なります。", "rom": "Mainichi renshū sureba, jōzu ni narimasu.", "en": "Kalau berlatih setiap hari, akan menjadi pandai." }
    ],
    "conversation": {
      "title": "Minta Saran",
      "dialogue": [
        { "speaker": "A", "jp": "日本語が なかなか 上手に ならないんですが、どうすれば いいですか。", "rom": "Nihongo ga nakanaka jōzu ni naranain desu ga, dō sureba ii desu ka.", "en": "Bahasa Jepang saya tidak kunjung membaik, sebaiknya bagaimana?" },
        { "speaker": "B", "jp": "毎日 少しずつ 練習すれば いいと 思いますよ。", "rom": "Mainichi sukoshizutsu renshū sureba ii to omoimasu yo.", "en": "Saya kira kalau berlatih sedikit-sedikit setiap hari, akan baik-baik saja." },
        { "speaker": "A", "jp": "そうですね。もっと 早く 始めれば よかったです。", "rom": "Sō desu ne. Motto hayaku hajimereba yokatta desu.", "en": "Betul juga. Seharusnya saya mulai lebih awal." }
      ]
    },
    "practice": [
      { "type": "mcq", "question": "Bentuk ba-form dari 'nomimasu' (minum) adalah:", "options": [{ "text": "のめば", "correct": true }, { "text": "のまば", "correct": false }, { "text": "のみれば", "correct": false }] },
      { "type": "fill", "question": "Terjemahkan: 'Seharusnya belajar lebih keras'.\nMotto benkyō sure[   ] yokatta desu.", "answer": "ba" },
      { "type": "mcq", "question": "Ba-form paling cocok digunakan untuk:", "options": [{ "text": "Kondisi satu kali (jika hal ini terjadi nanti)", "correct": false }, { "text": "Kondisi umum/universal dan saran", "correct": true }, { "text": "Permintaan langsung kepada seseorang", "correct": false }] }
    ],
    "mini_kaiwa": [
      { "title": "Keluhan dan Saran", "situation": "Teman memberi saran atas masalah", "dialogue": [{ "speaker": "A", "jp": "頭が 痛いんですが…。", "rom": "Atama ga itain desu ga...", "en": "Kepala saya sakit..." }, { "speaker": "B", "jp": "薬を 飲めば いいですよ。", "rom": "Kusuri wo nomeba ii desu yo.", "en": "Minum obat saja, nanti akan baik." }] }
    ],
    "reibun": [
      { "id": "r30-1", "jp": "早く 寝れば、明日 元気に なりますよ。", "rom": "Hayaku nereba, ashita genki ni narimasu yo.", "en": "Kalau cepat tidur, besok akan segar." },
      { "id": "r30-2", "jp": "どうすれば 日本語が 上手に なりますか。", "rom": "Dō sureba Nihongo ga jōzu ni narimasu ka.", "en": "Sebaiknya bagaimana agar bisa pandai berbahasa Jepang?" },
      { "id": "r30-3", "jp": "もっと 早く 起きれば よかった。", "rom": "Motto hayaku okireba yokatta.", "en": "Seharusnya bangun lebih cepat tadi." },
      { "id": "r30-4", "jp": "春に なれば、桜が 咲きます。", "rom": "Haru ni nareba, sakura ga sakimasu.", "en": "Kalau musim semi tiba, bunga sakura mekar." },
      { "id": "r30-5", "jp": "あの 本を 読めば、わかると 思います。", "rom": "Ano hon wo yomeba, wakaru to omoimasu.", "en": "Kalau membaca buku itu, saya kira akan mengerti." }
    ],
    "workbook": [
      { "id": "wb30-1", "pattern": "Ba-form Grup I", "instruction": "Ubah kata kerja ke bentuk ba-form.", "question": "Kaku → ba-form", "correct": "かけば", "romaji": "kakeba", "translation": "Kalau menulis" },
      { "id": "wb30-2", "pattern": "Ba-form Grup II", "instruction": "Ubah kata kerja ke bentuk ba-form.", "question": "Taberu → ba-form", "correct": "たべれば", "romaji": "tabereba", "translation": "Kalau makan" },
      { "id": "wb30-3", "pattern": "I-Adj ba-form", "instruction": "Ubah kata sifat-i ke bentuk ba-form.", "question": "Yasui → ba-form", "correct": "やすければ", "romaji": "yasukereba", "translation": "Kalau murah" },
      { "id": "wb30-4", "pattern": "V-ば + いいですよ (Saran)", "instruction": "Beri saran menggunakan ba-form: 'Kalau istirahat, akan sembuh'.", "question": "Yasumareba / ii desu yo", "correct": "やすめば いいですよ。", "romaji": "Yasumareba ii desu yo.", "translation": "Kalau istirahat, akan baik-baik saja." },
      { "id": "wb30-5", "pattern": "V-ば よかったです (Penyesalan)", "instruction": "Nyatakan penyesalan: 'Seharusnya membeli tiket lebih awal'.", "question": "Hayaku / chiketto / kaeba / yokatta", "correct": "はやく チケットを かえば よかったです。", "romaji": "Hayaku chiketto wo kaeba yokatta desu.", "translation": "Seharusnya membeli tiket lebih awal." }
    ],
    "exam": {
      "part1": [
        { "id": "ex30-1", "sentence": "まいにち れんしゅう [ ] じょうずに なります。", "correct": "すれば", "translation": "Kalau berlatih setiap hari, akan jadi pandai." },
        { "id": "ex30-2", "sentence": "もっと はやく いけ [ ] よかったです。", "correct": "ば", "translation": "Seharusnya pergi lebih cepat." },
        { "id": "ex30-3", "sentence": "どう [ ] いいですか。", "correct": "すれば", "translation": "Sebaiknya harus bagaimana?" },
        { "id": "ex30-4", "sentence": "はるに な [ ]、さくらが さきます。", "correct": "れば", "translation": "Kalau musim semi tiba, sakura mekar." },
        { "id": "ex30-5", "sentence": "やすければ [ ] と おもいます。", "correct": "かいます", "translation": "Kalau murah, saya rasa akan beli." }
      ],
      "part2": [
        { "id": "ex30-6", "question": "Ba-form dari 'iku' (pergi) adalah:", "options": [{ "text": "いかば", "correct": false }, { "text": "いけば", "correct": true }, { "text": "いきれば", "correct": false }] },
        { "id": "ex30-7", "question": "Penggunaan ba-form yang BENAR adalah:", "options": [{ "text": "Untuk perintah langsung: 行けば！", "correct": false }, { "text": "Untuk kondisi umum: 春が来れば、花が咲く", "correct": true }, { "text": "Untuk kejadian yang sudah terjadi di masa lalu", "correct": false }] },
        { "id": "ex30-8", "question": "'V-ば よかったです' digunakan untuk:", "options": [{ "text": "Rencana masa depan", "correct": false }, { "text": "Penyesalan atas sesuatu yang tidak dilakukan", "correct": true }, { "text": "Saran kepada orang lain", "correct": false }] }
      ],
      "part3": {
        "text": "にほんごの しけんに おちてしまいました。もっと まじめに べんきょうすれば よかったです。じかんが あれば、べんきょうしたのですが、しごとが いそがしくて できませんでした。つぎの しけんは かならず うかるように、こんかいから しっかり れんしゅうします。",
        "questions": [
          { "id": "ex30-9", "question": "しけんに うかりました。", "correct": "F" },
          { "id": "ex30-10", "question": "しごとが いそがしくて べんきょうできませんでした。", "correct": "T" },
          { "id": "ex30-11", "question": "つぎの しけんも あきらめています。", "correct": "F" }
        ]
      }
    }
  }
];

// ─── Engine ─────────────────────────────────────────────────────────────────

function writeChapterFile(chapterData) {
  const filePath = path.join(chaptersDir, `chapter_${chapterData.id}.json`);
  
  // Add empty workbook/exam if not present
  if (!chapterData.workbook) chapterData.workbook = [];
  if (!chapterData.exam) chapterData.exam = { part1: [], part2: [], part3: { text: "", questions: [] } };
  
  fs.writeFileSync(filePath, JSON.stringify(chapterData, null, 2), 'utf-8');
  console.log(`  ✅ Written: chapter_${chapterData.id}.json (Lesson ${chapterData.id}: ${chapterData.title})`);
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

  const bundleCode = `// AUTO-GENERATED by seedMNN2.js — Do not edit manually.
export const MNN_DATA = ${JSON.stringify(allChapters, null, 2)};
`;

  fs.writeFileSync(bundleFile, bundleCode, 'utf-8');
  console.log(`  ✅ Bundle rebuilt: ${chapterFiles.length} total chapters`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

console.log('🚀 Seeding MNN II data (Lesson 26-50)...\n');

for (const chapter of MNN2_DATA) {
  const existing = path.join(chaptersDir, `chapter_${chapter.id}.json`);
  if (fs.existsSync(existing)) {
    console.log(`  ⏭️  chapter_${chapter.id}.json already exists — overwriting with MNN2 data`);
  }
  writeChapterFile(chapter);
}

rebuildBundle();

console.log(`\n✨ Done! Seeded ${MNN2_DATA.length} MNN II chapters (Lesson 26-${MNN2_DATA[MNN2_DATA.length-1].id}).`);
console.log('📝 Note: Run this script again after adding Lesson 31-50 data.');
