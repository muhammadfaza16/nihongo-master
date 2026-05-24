/**
 * patchWorkbookExam2.js
 * 
 * Menyuntikkan data workbook dan exam untuk chapter 10-25
 * (Minna no Nihongo I, Lesson 10-25)
 * 
 * Jalankan: node scripts/patchWorkbookExam2.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chaptersDir = path.join(__dirname, '../src/data/chapters');
const bundleFile = path.join(__dirname, '../src/data/chapter_data.js');

const PATCH_DATA = {

  // ─── BAB 10: て形 (Sambungan Kata Kerja) ─────────────────────────────────
  10: {
    workbook: [
      {
        id: "wb10-1",
        pattern: "V て + ください (Permintaan Sopan)",
        instruction: "Ubah kata kerja ke bentuk て dan tambahkan ください untuk membuat permintaan sopan.",
        question: "Mite / kudasai",
        correct: "みて ください。",
        romaji: "Mite kudasai.",
        translation: "Tolong lihat."
      },
      {
        id: "wb10-2",
        pattern: "V て + います (Sedang Berlangsung)",
        instruction: "Nyatakan aktivitas yang sedang dilakukan saat ini menggunakan bentuk て + います.",
        question: "Ima / zasshi / yonde imasu",
        correct: "いま ざっしを よんで います。",
        romaji: "Ima zasshi wo yonde imasu.",
        translation: "Sekarang sedang membaca majalah."
      },
      {
        id: "wb10-3",
        pattern: "V て + から (Setelah ~, lanjut ~)",
        instruction: "Buat kalimat urutan kegiatan dengan pola te-form + kara.",
        question: "Shokujishite / kara / yasumimasu",
        correct: "しょくじして から やすみます。",
        romaji: "Shokuji shite kara yasumimasu.",
        translation: "Setelah makan, beristirahat."
      },
      {
        id: "wb10-4",
        pattern: "V て + もいいですか (Minta Izin)",
        instruction: "Minta izin untuk melakukan sesuatu menggunakan te-form + もいいですか.",
        question: "Koko / shashin / totte mo ii desu ka",
        correct: "ここで しゃしんを とっても いいですか。",
        romaji: "Koko de shashin wo totte mo ii desu ka.",
        translation: "Bolehkah saya mengambil foto di sini?"
      },
      {
        id: "wb10-5",
        pattern: "V て は いけません (Larangan)",
        instruction: "Nyatakan larangan melakukan sesuatu menggunakan te-form + はいけません.",
        question: "Koko / tabete / wa ikemasen",
        correct: "ここで たべては いけません。",
        romaji: "Koko de tabete wa ikemasen.",
        translation: "Tidak boleh makan di sini."
      }
    ],
    exam: {
      part1: [
        { id: "ex10-1", sentence: "すみません、ちょっと まっ [ ] ください。", correct: "て", translation: "Permisi, tolong tunggu sebentar." },
        { id: "ex10-2", sentence: "いま にほんごを べんきょうし [ ] います。", correct: "て", translation: "Sekarang sedang belajar bahasa Jepang." },
        { id: "ex10-3", sentence: "ここで たばこを すっ [ ] いけません。", correct: "ては", translation: "Tidak boleh merokok di sini." },
        { id: "ex10-4", sentence: "しゃしんを [ ] も いいですか。", correct: "とって", translation: "Bolehkah saya mengambil foto?" },
        { id: "ex10-5", sentence: "てを あらっ [ ] から たべます。", correct: "て", translation: "Setelah cuci tangan, makan." }
      ],
      part2: [
        {
          id: "ex10-6",
          question: "Bentuk て dari 'tabemasu' (makan) adalah:",
          options: [
            { text: "たべて", correct: true },
            { text: "たべって", correct: false },
            { text: "たべいて", correct: false }
          ]
        },
        {
          id: "ex10-7",
          question: "Untuk meminta izin keluar kelas ('dete mo ii desu ka'), bentuk て dari 'demasu' adalah:",
          options: [
            { text: "でいて", correct: false },
            { text: "でて", correct: true },
            { text: "でって", correct: false }
          ]
        },
        {
          id: "ex10-8",
          question: "Ungkapan yang tepat untuk menyatakan 'dilarang memotret' di museum adalah:",
          options: [
            { text: "しゃしんを とっては いけません。", correct: true },
            { text: "しゃしんを とっても いいです。", correct: false },
            { text: "しゃしんを とってください。", correct: false }
          ]
        }
      ],
      part3: {
        text: "やくそくの じかんに おくれては いけません。じゅぎょうの まえに かならず てを あらって ください。きょうしつの なかで けいたいを つかっては いけません。しつもんが あったら、てを あげて ください。",
        questions: [
          { id: "ex10-9",  question: "じゅぎょうの まえに てを あらう ひつようが あります。", correct: "T" },
          { id: "ex10-10", question: "きょうしつで けいたいを つかっても いいです。", correct: "F" },
          { id: "ex10-11", question: "しつもんが ある とき、てを あげます。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 11: 〜たいです & Suka Melakukan ──────────────────────────────────
  11: {
    workbook: [
      {
        id: "wb11-1",
        pattern: "V たいです (Ingin ~)",
        instruction: "Nyatakan keinginan melakukan sesuatu dengan pola: masu-stem + たいです.",
        question: "Nihon / ikitai",
        correct: "にほんへ いきたいです。",
        romaji: "Nihon e ikitai desu.",
        translation: "Saya ingin pergi ke Jepang."
      },
      {
        id: "wb11-2",
        pattern: "N が ほしいです (Ingin memiliki ~)",
        instruction: "Nyatakan keinginan memiliki benda menggunakan N + が + ほしいです.",
        question: "Atarashii kuruma / hoshii",
        correct: "あたらしい くるまが ほしいです。",
        romaji: "Atarashii kuruma ga hoshii desu.",
        translation: "Saya ingin punya mobil baru."
      },
      {
        id: "wb11-3",
        pattern: "どこか / なにか (Suatu tempat / sesuatu)",
        instruction: "Buat kalimat dengan pola 'ingin pergi ke suatu tempat / ingin makan sesuatu'.",
        question: "Natsuyasumi / dokoka / ikitai",
        correct: "なつやすみに どこかへ いきたいです。",
        romaji: "Natsuyasumi ni dokoka e ikitai desu.",
        translation: "Di liburan musim panas, ingin pergi ke suatu tempat."
      },
      {
        id: "wb11-4",
        pattern: "V たくないです (Tidak ingin ~)",
        instruction: "Nyatakan ketidakinginan melakukan sesuatu.",
        question: "Kyou / hatarakitaku nai",
        correct: "きょうは はたらきたく ないです。",
        romaji: "Kyou wa hatarakitaku nai desu.",
        translation: "Hari ini saya tidak ingin bekerja."
      },
      {
        id: "wb11-5",
        pattern: "V た / V ている ことが あります (Pengalaman)",
        instruction: "Buat kalimat menyatakan pengalaman yang pernah/belum pernah dilakukan.",
        question: "Fujisan / nobotta / koto ga arimasu",
        correct: "ふじさんに のぼった ことが あります。",
        romaji: "Fujisan ni nobotta koto ga arimasu.",
        translation: "Saya pernah mendaki Gunung Fuji."
      }
    ],
    exam: {
      part1: [
        { id: "ex11-1", sentence: "にほんりょうりを [ ] たいです。", correct: "たべ", translation: "Ingin makan masakan Jepang." },
        { id: "ex11-2", sentence: "あたらしい パソコン [ ] ほしいです。", correct: "が", translation: "Ingin punya laptop baru." },
        { id: "ex11-3", sentence: "なつやすみに どこか [ ] いきたいです。", correct: "へ", translation: "Ingin pergi ke suatu tempat di liburan musim panas." },
        { id: "ex11-4", sentence: "きょうは はやく かえり [ ] です。", correct: "たい", translation: "Hari ini ingin cepat pulang." },
        { id: "ex11-5", sentence: "ふじさんに のぼった こと [ ] あります。", correct: "が", translation: "Pernah mendaki Gunung Fuji." }
      ],
      part2: [
        {
          id: "ex11-6",
          question: "Pola yang tepat untuk menyatakan 'ingin makan sushi' adalah:",
          options: [
            { text: "すしが たべたいです。", correct: true },
            { text: "すしを たべたいです。", correct: false },
            { text: "すしは ほしいです。", correct: false }
          ]
        },
        {
          id: "ex11-7",
          question: "Untuk menyatakan 'tidak pernah minum sake', polanya adalah:",
          options: [
            { text: "さけを のんだ ことは ありません。", correct: true },
            { text: "さけを のみません でした。", correct: false },
            { text: "さけが きらいです。", correct: false }
          ]
        },
        {
          id: "ex11-8",
          question: "Perbedaan 'たいです' dan 'ほしいです' adalah:",
          options: [
            { text: "たいです untuk keinginan (kata kerja), ほしいです untuk benda", correct: true },
            { text: "ほしいです lebih sopan dari たいです", correct: false },
            { text: "Keduanya sama saja", correct: false }
          ]
        }
      ],
      part3: {
        text: "ミラーさんは こんど の なつやすみに きょうとへ いきたいです。きょうとで おてらや じんじゃを みたいです。にほんりょうりも たべたいです。きょうとには まだ いった ことが ありません。",
        questions: [
          { id: "ex11-9",  question: "ミラーさんは きょうとへ いきたいです。", correct: "T" },
          { id: "ex11-10", question: "ミラーさんは まえに きょうとへ いった ことが あります。", correct: "F" },
          { id: "ex11-11", question: "ミラーさんは きょうとで にほんりょうりを たべたいです。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 12: 〜たり〜たり & 形容詞の副詞化 ──────────────────────────────
  12: {
    workbook: [
      {
        id: "wb12-1",
        pattern: "V たり V たり します (Berbagai Kegiatan)",
        instruction: "Nyatakan beberapa kegiatan yang dilakukan bergantian dengan pola たり～たりします.",
        question: "Nichiyoubi / hataraita ri / yasundari shimasu",
        correct: "にちようびは はたらいたり やすんだり します。",
        romaji: "Nichiyoubi wa hataraitari yasundari shimasu.",
        translation: "Hari Minggu kadang bekerja, kadang istirahat."
      },
      {
        id: "wb12-2",
        pattern: "adj く / adj に + V (Modifikasi Kata Kerja)",
        instruction: "Ubah kata sifat menjadi adverbia (kata keterangan) untuk memodifikasi kata kerja.",
        question: "Hayaku / hashiru",
        correct: "はやく はしります。",
        romaji: "Hayaku hashirimasu.",
        translation: "Berlari dengan cepat."
      },
      {
        id: "wb12-3",
        pattern: "もう V ました / まだ V ていません",
        instruction: "Nyatakan sudah atau belum melakukan sesuatu.",
        question: "Shukudai / mou / shimashita",
        correct: "しゅくだいは もう しました。",
        romaji: "Shukudai wa mou shimashita.",
        translation: "PR sudah dikerjakan."
      },
      {
        id: "wb12-4",
        pattern: "N が V に なります (Perubahan)",
        instruction: "Nyatakan perubahan kondisi dengan pola ～になります.",
        question: "Nihongo / jouzu ni naru",
        correct: "にほんごが じょうずに なりたいです。",
        romaji: "Nihongo ga jouzu ni naritai desu.",
        translation: "Ingin menjadi pandai berbahasa Jepang."
      },
      {
        id: "wb12-5",
        pattern: "V たり V たり しないで ください",
        instruction: "Larang seseorang melakukan berbagai hal dengan pola negatif たり〜したりしないでください.",
        question: "Ookii koe / hanashitari / warattari / shinaide kudasai",
        correct: "おおきい こえで はなしたり わらったり しないで ください。",
        romaji: "Ookii koe de hanashitari warattari shinaide kudasai.",
        translation: "Tolong jangan berbicara atau tertawa dengan suara keras."
      }
    ],
    exam: {
      part1: [
        { id: "ex12-1", sentence: "しゅうまつは えいがを み [ ] おんがくを きい [ ] します。", correct: "たり", translation: "Di akhir pekan, menonton film atau mendengarkan musik." },
        { id: "ex12-2", sentence: "もっと はや [ ] はしって ください。", correct: "く", translation: "Tolong berlari lebih cepat." },
        { id: "ex12-3", sentence: "しゅくだいは もう [ ]。", correct: "しました", translation: "PR sudah dikerjakan." },
        { id: "ex12-4", sentence: "にほんごが じょうずに な [ ] たいです。", correct: "り", translation: "Ingin menjadi pandai berbahasa Jepang." },
        { id: "ex12-5", sentence: "まだ ばんごはんを [ ] いません。", correct: "たべて", translation: "Belum makan malam." }
      ],
      part2: [
        {
          id: "ex12-6",
          question: "Pola yang digunakan untuk menyatakan 'kadang A, kadang B' (aktivitas bergantian) adalah:",
          options: [
            { text: "A て B ます", correct: false },
            { text: "A たり B たり します", correct: true },
            { text: "A も B も します", correct: false }
          ]
        },
        {
          id: "ex12-7",
          question: "Cara mengubah 'shizuka na' (tenang) menjadi adverbia adalah:",
          options: [
            { text: "しずかく", correct: false },
            { text: "しずかに", correct: true },
            { text: "しずかです", correct: false }
          ]
        },
        {
          id: "ex12-8",
          question: "'Mada tabete imasen' berarti:",
          options: [
            { text: "Belum makan", correct: true },
            { text: "Sudah makan", correct: false },
            { text: "Tidak makan", correct: false }
          ]
        }
      ],
      part3: {
        text: "きのうの かえりに、コンビニで おにぎりを かったり、ざっしを よんだり しました。もう おふろに はいりました。でも まだ しゅくだいを していません。あしたは はやく おきなければ なりません。",
        questions: [
          { id: "ex12-9",  question: "きのう コンビニに よりました。", correct: "T" },
          { id: "ex12-10", question: "もう しゅくだいを しました。", correct: "F" },
          { id: "ex12-11", question: "あした はやく おきる よていです。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 13: 〜ながら / 〜ために ─────────────────────────────────────────
  13: {
    workbook: [
      {
        id: "wb13-1",
        pattern: "V ながら V (Sambil ~)",
        instruction: "Nyatakan dua aktivitas yang dilakukan bersamaan, aktivitas sekunder + ながら + aktivitas utama.",
        question: "Ongaku / kikinagara / benkyoushimasu",
        correct: "おんがくを ききながら べんきょうします。",
        romaji: "Ongaku wo kikinagara benkyoushimasu.",
        translation: "Belajar sambil mendengarkan musik."
      },
      {
        id: "wb13-2",
        pattern: "N のために V します (Demi / Untuk tujuan)",
        instruction: "Nyatakan tujuan suatu tindakan dengan pola N のために.",
        question: "Kenkoo / no tame ni / undoushimasu",
        correct: "けんこうの ために うんどうします。",
        romaji: "Kenkou no tame ni undoushimasu.",
        translation: "Berolahraga demi kesehatan."
      },
      {
        id: "wb13-3",
        pattern: "V ために V (Untuk ~ melakukan ~)",
        instruction: "Nyatakan tujuan suatu tindakan menggunakan kata kerja dictionary form + ために.",
        question: "Nihongo wo jyouzu ni naru / tame ni / benkyoushimasu",
        correct: "にほんごが じょうずに なる ために べんきょうします。",
        romaji: "Nihongo ga jouzu ni naru tame ni benkyoushimasu.",
        translation: "Belajar untuk menjadi pandai berbahasa Jepang."
      },
      {
        id: "wb13-4",
        pattern: "V まえに ~ (Sebelum ~)",
        instruction: "Nyatakan aktivitas yang dilakukan sebelum sesuatu menggunakan V dict.form + まえに.",
        question: "Neru / mae ni / ha wo migakimasu",
        correct: "ねる まえに はを みがきます。",
        romaji: "Neru mae ni ha wo migakimasu.",
        translation: "Menggosok gigi sebelum tidur."
      },
      {
        id: "wb13-5",
        pattern: "V あとで ~ (Setelah ~)",
        instruction: "Nyatakan aktivitas yang dilakukan setelah sesuatu menggunakan V ta-form + あとで.",
        question: "Shokuji / shita / ato de / yasumimaす",
        correct: "しょくじした あとで やすみます。",
        romaji: "Shokuji shita ato de yasumimasu.",
        translation: "Beristirahat setelah makan."
      }
    ],
    exam: {
      part1: [
        { id: "ex13-1", sentence: "テレビを [ ] ながら ごはんを たべます。", correct: "み", translation: "Makan sambil menonton TV." },
        { id: "ex13-2", sentence: "けんこうの [ ] に まいにち あるきます。", correct: "ため", translation: "Berjalan kaki setiap hari demi kesehatan." },
        { id: "ex13-3", sentence: "ねる [ ] に は を みがいて ください。", correct: "まえ", translation: "Tolong gosok gigi sebelum tidur." },
        { id: "ex13-4", sentence: "にほんへ [ ] ために にほんごを べんきょうします。", correct: "いく", translation: "Belajar bahasa Jepang untuk pergi ke Jepang." },
        { id: "ex13-5", sentence: "しょくじした [ ] で やすみます。", correct: "あと", translation: "Beristirahat setelah makan." }
      ],
      part2: [
        {
          id: "ex13-6",
          question: "'Ongaku wo kikinagara benkyoushimasu' berarti:",
          options: [
            { text: "Belajar, kemudian mendengarkan musik", correct: false },
            { text: "Belajar sambil mendengarkan musik", correct: true },
            { text: "Mendengarkan musik, bukan belajar", correct: false }
          ]
        },
        {
          id: "ex13-7",
          question: "Kata yang digunakan sebelum 'tame ni' untuk menyatakan tujuan berupa kata kerja adalah:",
          options: [
            { text: "Bentuk te-form", correct: false },
            { text: "Bentuk kamus (dictionary form)", correct: true },
            { text: "Bentuk ta-form (lampau)", correct: false }
          ]
        },
        {
          id: "ex13-8",
          question: "Perbedaan 'mae ni' (sebelum) dan 'ato de' (setelah): Kata kerja sebelum 'mae ni' menggunakan:",
          options: [
            { text: "Bentuk kamus (dictionary form)", correct: true },
            { text: "Bentuk ta-form", correct: false },
            { text: "Bentuk te-form", correct: false }
          ]
        }
      ],
      part3: {
        text: "わたしは まいにち おんがくを ききながら じょぎんぐを します。けんこうの ために まいにち 30ぷん うんどうする ように しています。ねる まえに かならず にっきを かきます。",
        questions: [
          { id: "ex13-9",  question: "この人は おんがくを ききながら うんどうします。", correct: "T" },
          { id: "ex13-10", question: "この人は しゅうに 1かい うんどうします。", correct: "F" },
          { id: "ex13-11", question: "この人は ねる まえに にっきを かきます。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 14: 〜てみます / 〜ておきます / 〜てしまいます ─────────────────
  14: {
    workbook: [
      {
        id: "wb14-1",
        pattern: "V てみます (Mencoba ~)",
        instruction: "Nyatakan mencoba melakukan sesuatu untuk pertama kali dengan te-form + みます.",
        question: "Nihon ryouri / tsukutte / mimasu",
        correct: "にほんりょうりを つくって みます。",
        romaji: "Nihon ryouri wo tsukutte mimasu.",
        translation: "Akan mencoba membuat masakan Jepang."
      },
      {
        id: "wb14-2",
        pattern: "V ておきます (Menyiapkan/Melakukan sebelumnya)",
        instruction: "Nyatakan persiapan yang dilakukan sebelumnya dengan te-form + おきます.",
        question: "Kaigi / mae ni / shiryou wo / yonde okimasu",
        correct: "かいぎの まえに しりょうを よんで おきます。",
        romaji: "Kaigi no mae ni shiryou wo yonde okimasu.",
        translation: "Membaca materi sebelumnya sebelum rapat."
      },
      {
        id: "wb14-3",
        pattern: "V てしまいます (Telah selesai / Menyesal)",
        instruction: "Nyatakan aktivitas yang sudah selesai (dengan nuansa menyesal) dengan te-form + しまいます.",
        question: "Saifu / nakushite / shimaimashita",
        correct: "さいふを なくして しまいました。",
        romaji: "Saifu wo nakushite shimaimashita.",
        translation: "Dompet sudah hilang (menyesal)."
      },
      {
        id: "wb14-4",
        pattern: "V てあります (Sudah dilakukan untuk persiapan)",
        instruction: "Nyatakan kondisi yang merupakan hasil dari tindakan yang sudah dilakukan dengan te + あります.",
        question: "Heya / soujisite / arimasu",
        correct: "へやは そうじして あります。",
        romaji: "Heya wa souji shite arimasu.",
        translation: "Kamar sudah dibersihkan (hasilnya terlihat)."
      },
      {
        id: "wb14-5",
        pattern: "まだ V ていません / もう V てしまいました",
        instruction: "Bandingkan sudah/belum menyelesaikan sesuatu.",
        question: "Houkokusho / mada / kaite imasen",
        correct: "ほうこくしょは まだ かいて いません。",
        romaji: "Houkokusho wa mada kaite imasen.",
        translation: "Laporan belum ditulis."
      }
    ],
    exam: {
      part1: [
        { id: "ex14-1", sentence: "あたらしい レストランに いっ [ ] みました。", correct: "て", translation: "Pergi mencoba restoran baru." },
        { id: "ex14-2", sentence: "りょこうの まえに ホテルを よやく し [ ] おきました。", correct: "て", translation: "Sudah memesan hotel sebelum perjalanan." },
        { id: "ex14-3", sentence: "さいふを なくし [ ] しまいました。", correct: "て", translation: "Dompet sudah hilang (menyesal)." },
        { id: "ex14-4", sentence: "まどが あけ [ ] あります。", correct: "て", translation: "Jendela sudah dibuka (dalam kondisi terbuka)." },
        { id: "ex14-5", sentence: "しゅくだいは もう し [ ] しまいました。", correct: "て", translation: "PR sudah selesai dikerjakan." }
      ],
      part2: [
        {
          id: "ex14-6",
          question: "'Tabete mimasu' berarti:",
          options: [
            { text: "Sudah pernah makan", correct: false },
            { text: "Mencoba makan (untuk pertama kali)", correct: true },
            { text: "Sedang makan", correct: false }
          ]
        },
        {
          id: "ex14-7",
          question: "'Kagi wo kakete okimashita' (sudah mengunci pintu sebelumnya) menggunakan pola:",
          options: [
            { text: "て + います", correct: false },
            { text: "て + おきます", correct: true },
            { text: "て + みます", correct: false }
          ]
        },
        {
          id: "ex14-8",
          question: "Nuansa dari 'kagi wo wasurete shimaimashita' adalah:",
          options: [
            { text: "Senang sudah melupakan kunci", correct: false },
            { text: "Menyesal/tidak sengaja lupa membawa kunci", correct: true },
            { text: "Sengaja meninggalkan kunci", correct: false }
          ]
        }
      ],
      part3: {
        text: "あしたは だいじな かいぎが あります。だから きょう しりょうを ぜんぶ よんで おきました。パソコンも じゅんびして おきました。でも プレゼンの れんしゅうは まだ して いません。いまから れんしゅうして みます。",
        questions: [
          { id: "ex14-9",  question: "あした かいぎが あります。", correct: "T" },
          { id: "ex14-10", question: "しりょうは まだ よんで いません。", correct: "F" },
          { id: "ex14-11", question: "プレゼンの れんしゅうは もう おわりました。", correct: "F" }
        ]
      }
    }
  },

  // ─── BAB 15: 〜なければなりません / 〜なくてもいいです ───────────────────
  15: {
    workbook: [
      {
        id: "wb15-1",
        pattern: "V なければなりません (Harus ~)",
        instruction: "Nyatakan kewajiban melakukan sesuatu dengan pola なければなりません.",
        question: "Mainichi / kusuri / nomanakerebanarimase n",
        correct: "まいにち くすりを のまなければ なりません。",
        romaji: "Mainichi kusuri wo nomanakere ba narimasen.",
        translation: "Harus minum obat setiap hari."
      },
      {
        id: "wb15-2",
        pattern: "V なくてもいいです (Tidak perlu ~)",
        instruction: "Nyatakan bahwa tidak perlu melakukan sesuatu dengan なくてもいいです.",
        question: "Kyou / kuru / nakutemo ii desu",
        correct: "きょうは こなくても いいです。",
        romaji: "Kyou wa konakute mo ii desu.",
        translation: "Hari ini tidak perlu datang."
      },
      {
        id: "wb15-3",
        pattern: "V ないでください (Tolong jangan ~)",
        instruction: "Buat larangan sopan menggunakan nai-form + でください.",
        question: "Koko / hanasanai de kudasai",
        correct: "ここで はなさないで ください。",
        romaji: "Koko de hanasanaide kudasai.",
        translation: "Tolong jangan berbicara di sini."
      },
      {
        id: "wb15-4",
        pattern: "Comparison: しなければなりません vs しなくてもいいです",
        instruction: "Pilih pola yang tepat berdasarkan situasi: wajib atau tidak wajib.",
        question: "Byouki / kusuri / nomanakere ba narimasen",
        correct: "びょうきだから くすりを のまなければ なりません。",
        romaji: "Byouki dakara kusuri wo nomanakere ba narimasen.",
        translation: "Karena sakit, harus minum obat."
      },
      {
        id: "wb15-5",
        pattern: "どうしなければなりませんか (Harus bagaimana?)",
        instruction: "Tanyakan apa yang harus dilakukan dalam situasi tertentu.",
        question: "Kaze / hiita toki / dou sureba ii",
        correct: "かぜを ひいたとき、どう すれば いいですか。",
        romaji: "Kaze wo hiita toki, dou sureba ii desu ka.",
        translation: "Kalau sudah kena flu, sebaiknya bagaimana?"
      }
    ],
    exam: {
      part1: [
        { id: "ex15-1", sentence: "まいにち くすりを [ ] なりません。", correct: "のまなければ", translation: "Harus minum obat setiap hari." },
        { id: "ex15-2", sentence: "きょうは こ [ ] いいです。", correct: "なくても", translation: "Hari ini tidak perlu datang." },
        { id: "ex15-3", sentence: "しずかに し [ ] なりません。", correct: "なければ", translation: "Harus diam/tenang." },
        { id: "ex15-4", sentence: "ここで たばこを すわ [ ] ください。", correct: "ないで", translation: "Tolong jangan merokok di sini." },
        { id: "ex15-5", sentence: "かのじょは びょうきだから [ ] なりません。", correct: "やすまなければ", translation: "Karena dia sakit, harus istirahat." }
      ],
      part2: [
        {
          id: "ex15-6",
          question: "Pola untuk menyatakan KEWAJIBAN melakukan sesuatu (wajib/must) adalah:",
          options: [
            { text: "V なくてもいいです", correct: false },
            { text: "V なければなりません", correct: true },
            { text: "V ないでください", correct: false }
          ]
        },
        {
          id: "ex15-7",
          question: "Cara membuat bentuk negatif wajib dari 'ikimasu' (pergi) untuk 'harus tidak pergi' adalah:",
          options: [
            { text: "いかなければなりません", correct: false },
            { text: "いかなくてもいいです", correct: false },
            { text: "いってはいけません", correct: true }
          ]
        },
        {
          id: "ex15-8",
          question: "'Mada kaite imasen' berarti Anda:",
          options: [
            { text: "Sudah selesai menulis", correct: false },
            { text: "Belum menulis / sedang belum menulis", correct: true },
            { text: "Tidak perlu menulis", correct: false }
          ]
        }
      ],
      part3: {
        text: "びょういんでは けいたいを つかっては いけません。しずかにしなければなりません。かんじゃさんは くすりを まいにち のまなければなりません。でも むりに おきなくても いいです。",
        questions: [
          { id: "ex15-9",  question: "びょういんで けいたいを つかっても いいです。", correct: "F" },
          { id: "ex15-10", question: "かんじゃは まいにち くすりを のむ ひつようが あります。", correct: "T" },
          { id: "ex15-11", question: "びょういんでは かならず おきなければ なりません。", correct: "F" }
        ]
      }
    }
  },

  // ─── BAB 16: 普通形 (Plain Form) ─────────────────────────────────────────
  16: {
    workbook: [
      {
        id: "wb16-1",
        pattern: "V 普通形 (Plain Form) の基本",
        instruction: "Ubah kata kerja berikut ke dalam bentuk kamus (plain/dictionary form).",
        question: "Tabemasu → plain form",
        correct: "たべる",
        romaji: "taberu",
        translation: "(Bentuk kamus dari tabemasu)"
      },
      {
        id: "wb16-2",
        pattern: "～と思います (Saya pikir ~)",
        instruction: "Sampaikan pendapat menggunakan plain form + と思います.",
        question: "Ashita / ame / furu / to omoimasu",
        correct: "あした あめが ふると おもいます。",
        romaji: "Ashita ame ga furu to omoimasu.",
        translation: "Saya pikir besok akan hujan."
      },
      {
        id: "wb16-3",
        pattern: "～と言っていました (Katanya ~)",
        instruction: "Laporkan apa yang dikatakan seseorang dengan plain form + と言っていました.",
        question: "Tanaka-san / kuru / to itte imashita",
        correct: "たなかさんは くると いって いました。",
        romaji: "Tanaka-san wa kuru to itte imashita.",
        translation: "Pak Tanaka bilang akan datang."
      },
      {
        id: "wb16-4",
        pattern: "～と思いますか (Apa pendapat Anda tentang ~?)",
        instruction: "Tanyakan pendapat seseorang menggunakan plain form + と思いますか.",
        question: "Nihon / takai / to omoimasu ka",
        correct: "にほんは たかいと おもいますか。",
        romaji: "Nihon wa takai to omoimasu ka.",
        translation: "Apakah Anda pikir Jepang itu mahal?"
      },
      {
        id: "wb16-5",
        pattern: "～ながら / ～ので (Alasan)",
        instruction: "Nyatakan alasan menggunakan plain form + ので (lebih sopan dari から).",
        question: "Byouki / na node / yasumimasu",
        correct: "びょうきなので やすみます。",
        romaji: "Byouki na node yasumimasu.",
        translation: "Karena sakit, akan istirahat."
      }
    ],
    exam: {
      part1: [
        { id: "ex16-1", sentence: "あした あめが ふる [ ] おもいます。", correct: "と", translation: "Saya pikir besok akan hujan." },
        { id: "ex16-2", sentence: "かれは こない [ ] いって いました。", correct: "と", translation: "Dia bilang tidak akan datang." },
        { id: "ex16-3", sentence: "びょうきな [ ] やすみます。", correct: "ので", translation: "Karena sakit, istirahat." },
        { id: "ex16-4", sentence: "にほんごは むずかしい [ ] おもいます。", correct: "と", translation: "Saya pikir bahasa Jepang itu sulit." },
        { id: "ex16-5", sentence: "たなかさんは きょう [ ] と いって いました。", correct: "くる", translation: "Pak Tanaka bilang akan datang hari ini." }
      ],
      part2: [
        {
          id: "ex16-6",
          question: "Bentuk kamus (plain/dictionary form) dari 'ikimasu' (pergi) adalah:",
          options: [
            { text: "いった", correct: false },
            { text: "いく", correct: true },
            { text: "いき", correct: false }
          ]
        },
        {
          id: "ex16-7",
          question: "'Ame ga furu to omoimasu' menggunakan bentuk:",
          options: [
            { text: "Bentuk kamus (dictionary form)", correct: true },
            { text: "Bentuk masu", correct: false },
            { text: "Bentuk te-form", correct: false }
          ]
        },
        {
          id: "ex16-8",
          question: "'Node' digunakan untuk menyatakan alasan dan lebih sopan dari 'kara'. Contoh penggunaan yang tepat setelah kata sifat-na:",
          options: [
            { text: "しずかな ので", correct: true },
            { text: "しずかく ので", correct: false },
            { text: "しずかです ので", correct: false }
          ]
        }
      ],
      part3: {
        text: "ともだちが にほんは たかいと いって いました。でも わたしは そう おもいません。くるまや でんきせいひんは やすいと おもいます。たべものは ちょっと たかいかも しれませんが、しつが いいです。",
        questions: [
          { id: "ex16-9",  question: "ともだちは にほんは やすいと いいました。", correct: "F" },
          { id: "ex16-10", question: "わたしは くるまは やすいと おもっています。", correct: "T" },
          { id: "ex16-11", question: "この人は にほんのたべものの しつが いいと おもっています。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 17: 〜てくれます / 〜てあげます / 〜てもらいます ─────────────────
  17: {
    workbook: [
      {
        id: "wb17-1",
        pattern: "V てくれます (Orang lain melakukan untuk saya)",
        instruction: "Nyatakan seseorang melakukan sesuatu untuk Anda (pembicara) menggunakan て + くれます.",
        question: "Yamada-san / shashin wo / totte / kuremashita",
        correct: "やまださんが しゃしんを とって くれました。",
        romaji: "Yamada-san ga shashin wo totte kuremashita.",
        translation: "Pak Yamada mengambilkan foto untuk saya."
      },
      {
        id: "wb17-2",
        pattern: "V てあげます (Saya melakukan untuk orang lain)",
        instruction: "Nyatakan Anda melakukan sesuatu untuk orang lain menggunakan て + あげます.",
        question: "Tomodachi / ni / hon wo / kashite / agemashita",
        correct: "ともだちに ほんを かして あげました。",
        romaji: "Tomodachi ni hon wo kashite agemashita.",
        translation: "Saya meminjamkan buku kepada teman."
      },
      {
        id: "wb17-3",
        pattern: "V てもらいます (Meminta seseorang melakukan)",
        instruction: "Nyatakan meminta atau menerima bantuan dari seseorang dengan て + もらいます.",
        question: "Sensei ni / nihongo wo / oshiete / moraimashita",
        correct: "せんせいに にほんごを おしえて もらいました。",
        romaji: "Sensei ni nihongo wo oshiete moraimashita.",
        translation: "Saya diajarkan bahasa Jepang oleh guru (menerima kebaikan)."
      },
      {
        id: "wb17-4",
        pattern: "V てもらえますか (Bolehkah meminta tolong ~)",
        instruction: "Buat permintaan sopan menggunakan て + もらえますか.",
        question: "Chotto / mite / moraemasu ka",
        correct: "ちょっと みて もらえますか。",
        romaji: "Chotto mite moraemasu ka.",
        translation: "Bolehkah minta tolong dilihat sebentar?"
      },
      {
        id: "wb17-5",
        pattern: "V てくれませんか (Bolehkah tolong ~)",
        instruction: "Buat permintaan sopan kepada orang lain menggunakan て + くれませんか.",
        question: "Chotto / matte / kuremase n ka",
        correct: "ちょっと まって くれませんか。",
        romaji: "Chotto matte kuremasen ka.",
        translation: "Bolehkah tolong tunggu sebentar?"
      }
    ],
    exam: {
      part1: [
        { id: "ex17-1", sentence: "ともだちが えきまで おくって [ ] ました。", correct: "くれ", translation: "Teman mengantarkan saya sampai stasiun." },
        { id: "ex17-2", sentence: "せんせいに にほんごを おしえて [ ] ました。", correct: "もらい", translation: "Diajarkan bahasa Jepang oleh guru." },
        { id: "ex17-3", sentence: "おとうとに みやげを [ ] あげました。", correct: "かって", translation: "Membelikan oleh-oleh untuk adik." },
        { id: "ex17-4", sentence: "すみません、みちを おしえて [ ] ませんか。", correct: "くれ", translation: "Permisi, bolehkah tolong tunjukkan jalan?" },
        { id: "ex17-5", sentence: "しゃしんを とって [ ] ますか。", correct: "もらえ", translation: "Bolehkah minta tolong ambilkan foto?" }
      ],
      part2: [
        {
          id: "ex17-6",
          question: "'Tomodachi ga tetsudatte kuremashita' berarti:",
          options: [
            { text: "Saya membantu teman", correct: false },
            { text: "Teman membantu saya", correct: true },
            { text: "Saya minta teman membantu orang lain", correct: false }
          ]
        },
        {
          id: "ex17-7",
          question: "'Sensei ni oshiete moraimashita' berarti:",
          options: [
            { text: "Guru mengajari (dan saya menerima manfaatnya)", correct: true },
            { text: "Saya mengajari guru", correct: false },
            { text: "Guru diajarkan seseorang", correct: false }
          ]
        },
        {
          id: "ex17-8",
          question: "Cara yang paling sopan untuk meminta bantuan seseorang adalah:",
          options: [
            { text: "V てください", correct: false },
            { text: "V てもらえますか / V てくれませんか", correct: true },
            { text: "V てはいけません", correct: false }
          ]
        }
      ],
      part3: {
        text: "きのう やまださんが わたしの にもつを もって くれました。また、えきまで おくって くれました。わたしは やまださんに おかしを かって あげました。やまださんは とても よろこんで いました。",
        questions: [
          { id: "ex17-9",  question: "やまださんは わたしの にもつを もって くれました。", correct: "T" },
          { id: "ex17-10", question: "わたしは やまださんに なにも あげませんでした。", correct: "F" },
          { id: "ex17-11", question: "やまださんは うれしそうでした。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 18: 〜でしょう / 〜かもしれません ──────────────────────────────
  18: {
    workbook: [
      {
        id: "wb18-1",
        pattern: "Plain form + でしょう (Kemungkinan/Dugaan Kuat)",
        instruction: "Nyatakan dugaan atau kemungkinan yang cukup kuat menggunakan でしょう.",
        question: "Ashita / ii tenki / deshou",
        correct: "あしたは いい てんきでしょう。",
        romaji: "Ashita wa ii tenki deshou.",
        translation: "Besok mungkin cuacanya bagus."
      },
      {
        id: "wb18-2",
        pattern: "Plain form + かもしれません (Mungkin saja / Tidak pasti)",
        instruction: "Nyatakan kemungkinan yang lebih tidak pasti dengan かもしれません.",
        question: "Ame / furu / kamo shiremasen",
        correct: "あめが ふるかも しれません。",
        romaji: "Ame ga furu kamo shiremasen.",
        translation: "Mungkin saja akan hujan."
      },
      {
        id: "wb18-3",
        pattern: "〜でしょう vs かもしれません",
        instruction: "Pilih ekspresi yang tepat berdasarkan tingkat kepastian dugaan.",
        question: "Tanaka-san / byouki (mungkin saja, tidak pasti)",
        correct: "たなかさんは びょうきかも しれません。",
        romaji: "Tanaka-san wa byouki kamo shiremasen.",
        translation: "Mungkin saja Pak Tanaka sedang sakit."
      },
      {
        id: "wb18-4",
        pattern: "〜でしょうか (Pertanyaan dugaan/konfirmasi halus)",
        instruction: "Ajukan pertanyaan dugaan yang halus dengan でしょうか.",
        question: "Ashita / kaigi / arimasu deshou ka",
        correct: "あした かいぎが あるでしょうか。",
        romaji: "Ashita kaigi ga aru deshou ka.",
        translation: "Apakah besok ada rapat ya?"
      },
      {
        id: "wb18-5",
        pattern: "Adj な / Adj い + でしょう / かもしれません",
        instruction: "Gunakan dugaan dengan kata sifat-na atau kata sifat-i.",
        question: "Nihon / takai / deshou",
        correct: "にほんは たかいでしょう。",
        romaji: "Nihon wa takai deshou.",
        translation: "Jepang mungkin mahal."
      }
    ],
    exam: {
      part1: [
        { id: "ex18-1", sentence: "あした あめが ふる [ ] しれません。", correct: "かも", translation: "Mungkin saja besok akan hujan." },
        { id: "ex18-2", sentence: "かれは もう しって いる [ ]。", correct: "でしょう", translation: "Dia mungkin sudah tahu." },
        { id: "ex18-3", sentence: "たなかさんは きょう こない [ ] しれません。", correct: "かも", translation: "Mungkin saja Pak Tanaka tidak datang hari ini." },
        { id: "ex18-4", sentence: "にほんの ふゆは さむい [ ]。", correct: "でしょう", translation: "Musim dingin Jepang mungkin dingin." },
        { id: "ex18-5", sentence: "その レストランは たかい [ ] しれません。", correct: "かも", translation: "Restoran itu mungkin mahal." }
      ],
      part2: [
        {
          id: "ex18-6",
          question: "Perbedaan 'deshou' dan 'kamo shiremasen':",
          options: [
            { text: "Keduanya sama saja", correct: false },
            { text: "Deshou = kemungkinan lebih kuat/yakin; kamo shiremasen = lebih tidak pasti", correct: true },
            { text: "Kamo shiremasen = lebih yakin dari deshou", correct: false }
          ]
        },
        {
          id: "ex18-7",
          question: "Saat cuaca sedang mendung dan Anda menduga akan hujan tapi tidak yakin, ungkapan yang tepat:",
          options: [
            { text: "ふるでしょう。", correct: false },
            { text: "ふるかも しれません。", correct: true },
            { text: "ふります。", correct: false }
          ]
        },
        {
          id: "ex18-8",
          question: "Bentuk 'kamo shiremasen' setelah kata sifat-na 'kirei' (cantik) adalah:",
          options: [
            { text: "きれいく かも しれません", correct: false },
            { text: "きれい かも しれません", correct: true },
            { text: "きれいの かも しれません", correct: false }
          ]
        }
      ],
      part3: {
        text: "てんきよほうに よると、あした ゆきが ふるかも しれません。きおんも ひくくなるでしょう。だから あついコートを きた ほうが いいでしょう。でんしゃも おくれるかも しれません。はやめに でかけましょう。",
        questions: [
          { id: "ex18-9",  question: "あした ゆきが ふるかも しれません。", correct: "T" },
          { id: "ex18-10", question: "あした きおんが たかくなると よそうされています。", correct: "F" },
          { id: "ex18-11", question: "はやく うちを でた ほうが いいです。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 19: 〜ば / 〜なら / 条件形 ─────────────────────────────────────
  19: {
    workbook: [
      {
        id: "wb19-1",
        pattern: "V ば (Kondisi: Kalau/Jika ~)",
        instruction: "Buat kalimat kondisional dengan pola ba-form (bentuk kondisi).",
        question: "Hayaku / kureba / maniaima su",
        correct: "はやく くれば まに あいます。",
        romaji: "Hayaku kureba maniaima su.",
        translation: "Kalau datang lebih cepat, akan tepat waktu."
      },
      {
        id: "wb19-2",
        pattern: "V たら (Kalau/Setelah ~ terjadi)",
        instruction: "Buat kalimat kondisional dengan pola tara yang menekankan 'setelah kondisi terpenuhi'.",
        question: "Hima / dattara / eiga / mimasu",
        correct: "ひまだったら えいがを みます。",
        romaji: "Hima dattara eiga wo mimasu.",
        translation: "Kalau ada waktu luang, akan menonton film."
      },
      {
        id: "wb19-3",
        pattern: "〜ば〜ほど (Semakin ~ semakin ~)",
        instruction: "Nyatakan hubungan proporsional dengan pola ba-form + hodo.",
        question: "Benkyousureba / suruhodo / jouzu ni narimasu",
        correct: "べんきょうすれば するほど じょうずに なります。",
        romaji: "Benkyousureba suru hodo jouzu ni narimasu.",
        translation: "Semakin banyak belajar, semakin pandai."
      },
      {
        id: "wb19-4",
        pattern: "なら (Kalau memang ~ / Kalau begitu)",
        instruction: "Gunakan なら untuk memberikan saran atau merespon informasi yang diterima.",
        question: "Nihon / ni iku / nara / Tokyo / ga ii",
        correct: "にほんへ いくなら とうきょうが いいです。",
        romaji: "Nihon e iku nara Toukyou ga ii desu.",
        translation: "Kalau pergi ke Jepang, Tokyo itu bagus."
      },
      {
        id: "wb19-5",
        pattern: "〜たら どうですか (Bagaimana kalau ~)",
        instruction: "Buat saran menggunakan tara + どうですか.",
        question: "Isha / ni ittara / dou desu ka",
        correct: "いしゃに いったら どうですか。",
        romaji: "Isha ni ittara dou desu ka.",
        translation: "Bagaimana kalau pergi ke dokter?"
      }
    ],
    exam: {
      part1: [
        { id: "ex19-1", sentence: "はやく くれ [ ] まに あいます。", correct: "ば", translation: "Kalau datang cepat, akan tepat waktu." },
        { id: "ex19-2", sentence: "ひまだっ [ ] えいがを みましょう。", correct: "たら", translation: "Kalau ada waktu luang, ayo menonton film." },
        { id: "ex19-3", sentence: "べんきょうすれ [ ] するほど じょうずになります。", correct: "ば", translation: "Semakin belajar semakin pandai." },
        { id: "ex19-4", sentence: "にほんへ いく [ ] とうきょうが いいですよ。", correct: "なら", translation: "Kalau pergi ke Jepang, Tokyo itu bagus." },
        { id: "ex19-5", sentence: "いしゃに いっ [ ] どうですか。", correct: "たら", translation: "Bagaimana kalau pergi ke dokter?" }
      ],
      part2: [
        {
          id: "ex19-6",
          question: "Perbedaan 'ba' dan 'tara' sebagai kondisional:",
          options: [
            { text: "Ba lebih formal, tara lebih kasual; keduanya bisa dipakai bergantian", correct: false },
            { text: "Tara sering menekankan 'setelah kondisi terpenuhi', ba lebih umum untuk kondisi umum", correct: true },
            { text: "Ba digunakan untuk masa lalu, tara untuk masa depan", correct: false }
          ]
        },
        {
          id: "ex19-7",
          question: "Saat teman bilang ingin belajar bahasa Jepang, saran yang menggunakan 'nara' adalah:",
          options: [
            { text: "にほんごを べんきょうする なら この ほんが いいですよ。", correct: true },
            { text: "にほんごを べんきょうして なら いいですよ。", correct: false },
            { text: "にほんごを べんきょうすれば なら いいですよ。", correct: false }
          ]
        },
        {
          id: "ex19-8",
          question: "Cara menyatakan saran 'Bagaimana kalau istirahat?' dengan pola tara dou desu ka:",
          options: [
            { text: "やすむ どうですか", correct: false },
            { text: "やすんだら どうですか", correct: true },
            { text: "やすめば どうですか", correct: false }
          ]
        }
      ],
      part3: {
        text: "にほんごが じょうずに なりたければ、まいにち れんしゅうしなければ なりません。べんきょうすれば するほど、はやく じょうずに なれます。もし にほんへ いくなら、たくさん にほんじんと はなすと いいですよ。",
        questions: [
          { id: "ex19-9",  question: "にほんごが うまくなるには まいにち れんしゅうする ひつようが あります。", correct: "T" },
          { id: "ex19-10", question: "べんきょうの りょうは かんけい ありません。", correct: "F" },
          { id: "ex19-11", question: "にほんへ いったら にほんじんと はなすと いいです。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 20: 〜のに / 〜のは / 形式名詞 ─────────────────────────────────
  20: {
    workbook: [
      {
        id: "wb20-1",
        pattern: "V のに (Meski ~ / Padahal ~)",
        instruction: "Nyatakan kontradiksi atau kejutan menggunakan のに (padahal).",
        question: "Ame / noni / soto / deru",
        correct: "あめなのに そとへ でます。",
        romaji: "Ame na noni soto e demasu.",
        translation: "Padahal hujan, tetap keluar."
      },
      {
        id: "wb20-2",
        pattern: "V のは / N のは adj です",
        instruction: "Gunakan の sebagai nominalizer untuk menjadikan klausa sebagai subjek kalimat.",
        question: "Nihongo wo hanasu / no wa / muzukashii",
        correct: "にほんごを はなすのは むずかしいです。",
        romaji: "Nihongo wo hanasu no wa muzukashii desu.",
        translation: "Berbicara bahasa Jepang itu sulit."
      },
      {
        id: "wb20-3",
        pattern: "〜ことができます (Bisa / Mampu ~)",
        instruction: "Nyatakan kemampuan menggunakan koto ga dekimasu.",
        question: "Piano wo / hiku / koto ga / dekimasu",
        correct: "ピアノを ひくことが できます。",
        romaji: "Piano wo hiku koto ga dekimasu.",
        translation: "Saya bisa bermain piano."
      },
      {
        id: "wb20-4",
        pattern: "〜ことにします (Memutuskan untuk ~)",
        instruction: "Nyatakan keputusan personal menggunakan koto ni shimasu.",
        question: "Mainichi / undo suru / koto ni shimashita",
        correct: "まいにち うんどうする ことに しました。",
        romaji: "Mainichi undou suru koto ni shimashita.",
        translation: "Memutuskan untuk berolahraga setiap hari."
      },
      {
        id: "wb20-5",
        pattern: "〜ことになります (Sudah diputuskan / Akan terjadi)",
        instruction: "Nyatakan keputusan yang sudah ditetapkan (bukan oleh diri sendiri) menggunakan koto ni narimasu.",
        question: "Rainen / toukyou / tenkin suru / koto ni narimashita",
        correct: "らいねん とうきょうに てんきんする ことに なりました。",
        romaji: "Rainen Toukyou ni tenkin suru koto ni narimashita.",
        translation: "Sudah diputuskan akan pindah tugas ke Tokyo tahun depan."
      }
    ],
    exam: {
      part1: [
        { id: "ex20-1", sentence: "にほんごを はなす [ ] は むずかしいです。", correct: "の", translation: "Berbicara bahasa Jepang itu sulit." },
        { id: "ex20-2", sentence: "あめな [ ] そとに でます。", correct: "のに", translation: "Padahal hujan, tetap keluar." },
        { id: "ex20-3", sentence: "ピアノを ひく こと [ ] できます。", correct: "が", translation: "Bisa bermain piano." },
        { id: "ex20-4", sentence: "まいにち うんどうする こと [ ] しました。", correct: "に", translation: "Memutuskan untuk olahraga setiap hari." },
        { id: "ex20-5", sentence: "らいねん にほんへ いく こと [ ] なりました。", correct: "に", translation: "Sudah diputuskan akan pergi ke Jepang tahun depan." }
      ],
      part2: [
        {
          id: "ex20-6",
          question: "Cara menyatakan kemampuan 'bisa berenang' menggunakan koto ga dekimasu:",
          options: [
            { text: "およぐ こと できます", correct: false },
            { text: "およぐ ことが できます", correct: true },
            { text: "およいで できます", correct: false }
          ]
        },
        {
          id: "ex20-7",
          question: "Perbedaan 'koto ni shimasu' dan 'koto ni narimasu':",
          options: [
            { text: "Shimasu = keputusan diri sendiri; narimasu = keputusan/situasi dari luar", correct: true },
            { text: "Narimasu = keputusan diri sendiri; shimasu = dari luar", correct: false },
            { text: "Keduanya sama", correct: false }
          ]
        },
        {
          id: "ex20-8",
          question: "'Nihongo wo hanasu no wa muzukashii' menggunakan の sebagai:",
          options: [
            { text: "Partikel kepemilikan", correct: false },
            { text: "Nominalizer (mengubah klausa menjadi kata benda)", correct: true },
            { text: "Penanda tujuan", correct: false }
          ]
        }
      ],
      part3: {
        text: "わたしは ことし にほんごを もっと まじめに べんきょうする ことに しました。まいにち 1じかん べんきょうする ことに なりました。にほんごで はなす ことは むずかしいですが、たのしいです。もっと じょうずに なりたいです。",
        questions: [
          { id: "ex20-9",  question: "この人は まいにち にほんごを べんきょうする ことに しました。", correct: "T" },
          { id: "ex20-10", question: "この人は にほんごが むずかしくて きらいです。", correct: "F" },
          { id: "ex20-11", question: "この人は もっと にほんごが じょうずに なりたいです。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 21: 〜させます (Causative) ──────────────────────────────────────
  21: {
    workbook: [
      {
        id: "wb21-1",
        pattern: "V させます (Membiarkan / Menyuruh)",
        instruction: "Buat kalimat kausatif: 'A menyuruh/membiarkan B melakukan sesuatu' menggunakan させます.",
        question: "Sensei ga / gakusei ni / kanji wo / kakaせます",
        correct: "せんせいが がくせいに かんじを かかせます。",
        romaji: "Sensei ga gakusei ni kanji wo kakasemasu.",
        translation: "Guru menyuruh murid menulis kanji."
      },
      {
        id: "wb21-2",
        pattern: "V させてください (Izinkan saya ~)",
        instruction: "Minta izin melakukan sesuatu menggunakan させてください (tono lebih formal).",
        question: "Watashi ni / yamada-san wo / tetsudawa / sete kudasai",
        correct: "わたしに やまださんを てつだわせて ください。",
        romaji: "Watashi ni Yamada-san wo tetsudawasete kudasai.",
        translation: "Izinkan saya membantu Pak Yamada."
      },
      {
        id: "wb21-3",
        pattern: "V させてもらいます (Saya diizinkan untuk ~)",
        instruction: "Nyatakan mendapat izin melakukan sesuatu menggunakan させてもらいます.",
        question: "Kyou / hayaku / kaera sete / moraimasu",
        correct: "きょう はやく かえらせて もらいます。",
        romaji: "Kyou hayaku kaeraste moraimasu.",
        translation: "Saya mohon izin pulang lebih cepat hari ini."
      },
      {
        id: "wb21-4",
        pattern: "V させられます (Dipaksa melakukan ~ / Kausatif Pasif)",
        instruction: "Nyatakan terpaksa melakukan sesuatu (perspektif yang dipaksa) menggunakan させられます.",
        question: "Mainichi / sooji / sase / rareru",
        correct: "まいにち そうじを させられます。",
        romaji: "Mainichi souji wo saseraremasu.",
        translation: "Setiap hari dipaksa/disuruh membersihkan."
      },
      {
        id: "wb21-5",
        pattern: "V させます vs 〜してもらいます",
        instruction: "Bedakan pola aktif-kausatif vs pola menerima bantuan.",
        question: "Haha ga / watashi wo / benkyou / sase masu",
        correct: "はは が わたしを べんきょうさせます。",
        romaji: "Haha ga watashi wo benkyousasemasu.",
        translation: "Ibu menyuruh saya belajar."
      }
    ],
    exam: {
      part1: [
        { id: "ex21-1", sentence: "せんせいが がくせいに かんじを かか [ ] ます。", correct: "せ", translation: "Guru menyuruh murid menulis kanji." },
        { id: "ex21-2", sentence: "わたしに やって [ ] ください。", correct: "させて", translation: "Izinkan saya melakukannya." },
        { id: "ex21-3", sentence: "まいにち そうじを [ ] られます。", correct: "させ", translation: "Setiap hari disuruh membersihkan (terpaksa)." },
        { id: "ex21-4", sentence: "きょう はやく かえら [ ] もらいます。", correct: "せて", translation: "Mohon izin untuk pulang lebih cepat hari ini." },
        { id: "ex21-5", sentence: "こどもに すきな ことを [ ] あげたいです。", correct: "させて", translation: "Ingin membiarkan anak melakukan yang dia sukai." }
      ],
      part2: [
        {
          id: "ex21-6",
          question: "Bentuk kausatif dari 'tabemasu' (makan) untuk 'menyuruh makan' adalah:",
          options: [
            { text: "たべさせます", correct: true },
            { text: "たべてもらいます", correct: false },
            { text: "たべていただきます", correct: false }
          ]
        },
        {
          id: "ex21-7",
          question: "'Hayaku kaeraste moraimasu' (mohon izin pulang cepat) adalah contoh dari pola:",
          options: [
            { text: "Kausatif langsung: menyuruh orang lain", correct: false },
            { text: "Kausatif + もらいます: memohon izin melakukan sesuatu untuk diri sendiri", correct: true },
            { text: "Kausatif pasif: dipaksa melakukan", correct: false }
          ]
        },
        {
          id: "ex21-8",
          question: "Nuansa dari 'saseraremasu' (kausatif pasif) adalah:",
          options: [
            { text: "Senang dan sukarela melakukan", correct: false },
            { text: "Dipaksa atau tidak ada pilihan untuk melakukan", correct: true },
            { text: "Mengizinkan orang lain melakukan", correct: false }
          ]
        }
      ],
      part3: {
        text: "むかし、ははは まいにち わたしに ピアノを れんしゅうさせました。わたしは あまり すきでは ありませんでしたが、いまは ははに かんしゃして います。おかげで いまは ピアノが じょうずに なりました。",
        questions: [
          { id: "ex21-9",  question: "むかし ははは まいにち ピアノを れんしゅうさせました。", correct: "T" },
          { id: "ex21-10", question: "わたしは こどもの ころ ピアノが だいすきでした。", correct: "F" },
          { id: "ex21-11", question: "いまは ははに かんしゃして います。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 22: 〜受身形 (Passive) ──────────────────────────────────────────
  22: {
    workbook: [
      {
        id: "wb22-1",
        pattern: "V られます (Bentuk Pasif: Dikenai tindakan)",
        instruction: "Ubah kalimat aktif berikut menjadi bentuk pasif menggunakan られます.",
        question: "Sensei ga watashi wo shikaru → Passive",
        correct: "わたしは せんせいに しかられました。",
        romaji: "Watashi wa sensei ni shikararemashita.",
        translation: "Saya dimarahi oleh guru."
      },
      {
        id: "wb22-2",
        pattern: "N に V られます (Pasif: Dikenai oleh ~)",
        instruction: "Buat kalimat pasif menyebutkan pelaku dengan partikel に.",
        question: "Dorobou / ni / saifu / nusumareru",
        correct: "どろぼうに さいふを ぬすまれました。",
        romaji: "Dorobou ni saifu wo nusumaremashita.",
        translation: "Dompet dicuri oleh pencuri."
      },
      {
        id: "wb22-3",
        pattern: "Pasif yang menyatakan perasaan tidak menyenangkan",
        instruction: "Buat kalimat pasif yang menunjukkan ketidaknyamanan/dampak negatif.",
        question: "Tomodachi / ni / uwasa / sareru",
        correct: "ともだちに うわさを されました。",
        romaji: "Tomodachi ni uwasa wo saremashita.",
        translation: "Saya digosipkan oleh teman (tidak menyenangkan)."
      },
      {
        id: "wb22-4",
        pattern: "Pasif tanpa pelaku (Passive impersonal)",
        instruction: "Buat kalimat pasif tanpa menyebutkan pelaku spesifik.",
        question: "Kono hon / yomareru",
        correct: "この ほんは たくさん よまれています。",
        romaji: "Kono hon wa takusan yomarete imasu.",
        translation: "Buku ini banyak dibaca (oleh orang-orang)."
      },
      {
        id: "wb22-5",
        pattern: "Pasif kehormatan (Keigo—menghormati subjek)",
        instruction: "Gunakan bentuk pasif sebagai bentuk sopan untuk merujuk pada tindakan orang yang dihormati.",
        question: "Sensei / kare / ossharu / passive",
        correct: "せんせいは そう おっしゃいました。",
        romaji: "Sensei wa sou osshaima shita.",
        translation: "Guru berkata demikian (bentuk hormat)."
      }
    ],
    exam: {
      part1: [
        { id: "ex22-1", sentence: "わたしは せんせいに しか [ ] ました。", correct: "られ", translation: "Saya dimarahi oleh guru." },
        { id: "ex22-2", sentence: "どろぼうに さいふを ぬす [ ] ました。", correct: "まれ", translation: "Dompet dicuri oleh pencuri." },
        { id: "ex22-3", sentence: "この えいがは せかいじゅうで み [ ] います。", correct: "られて", translation: "Film ini ditonton di seluruh dunia." },
        { id: "ex22-4", sentence: "にほんでは さくら [ ] とても あいされています。", correct: "が", translation: "Bunga sakura sangat dicintai di Jepang." },
        { id: "ex22-5", sentence: "けっこんしきで うた [ ] うたわれました。", correct: "が", translation: "Di pesta pernikahan, lagu dinyanyikan." }
      ],
      part2: [
        {
          id: "ex22-6",
          question: "Bentuk pasif dari 'shikaru' (memarahi) adalah:",
          options: [
            { text: "しかられます", correct: true },
            { text: "しかさせます", correct: false },
            { text: "しかてもらいます", correct: false }
          ]
        },
        {
          id: "ex22-7",
          question: "Dalam kalimat pasif, partikel yang menandai pelaku tindakan adalah:",
          options: [
            { text: "を", correct: false },
            { text: "で", correct: false },
            { text: "に", correct: true }
          ]
        },
        {
          id: "ex22-8",
          question: "Kalimat 'Ame ni furaremashita' (kehujanan) menggunakan pasif untuk:",
          options: [
            { text: "Menyatakan hujan turun (fakta netral)", correct: false },
            { text: "Menyatakan ketidaknyamanan/terganggu oleh hujan", correct: true },
            { text: "Meminta izin keluar di hujan", correct: false }
          ]
        }
      ],
      part3: {
        text: "きのう でんしゃの なかで たなかさんに あしを ふまれました。そして かばんを だれかに とられて しまいました。けいさつに れんらくしましたが、かばんは まだ みつかって いません。",
        questions: [
          { id: "ex22-9",  question: "でんしゃの なかで あしを ふまれました。", correct: "T" },
          { id: "ex22-10", question: "かばんは あとで みつかりました。", correct: "F" },
          { id: "ex22-11", question: "けいさつに れんらくしました。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 23: 〜ようです / 〜そうです / 〜らしいです ─────────────────────
  23: {
    workbook: [
      {
        id: "wb23-1",
        pattern: "Plain form + ようです (Sepertinya ~ / Tampaknya ~)",
        instruction: "Nyatakan dugaan berdasarkan indikasi/bukti yang terlihat menggunakan ようです.",
        question: "Kare / byouki no / you desu",
        correct: "かれは びょうきの ようです。",
        romaji: "Kare wa byouki no you desu.",
        translation: "Tampaknya dia sedang sakit."
      },
      {
        id: "wb23-2",
        pattern: "V stem / adj + そうです (Terlihat ~ / Kelihatannya ~)",
        instruction: "Nyatakan kesan visual langsung menggunakan sou desu (kesan dari penglihatan).",
        question: "Kono ryouri / oishisou",
        correct: "この りょうりは おいしそうです。",
        romaji: "Kono ryouri wa oishisou desu.",
        translation: "Masakan ini kelihatannya enak."
      },
      {
        id: "wb23-3",
        pattern: "Plain form + らしいです (Seperti katanya ~ / Katanya ~)",
        instruction: "Nyatakan informasi yang diperoleh dari luar (berita, rumor) menggunakan らしいです.",
        question: "Kare / kaisha / yameta / rashii",
        correct: "かれは かいしゃを やめた らしいです。",
        romaji: "Kare wa kaisha wo yameta rashii desu.",
        translation: "Katanya dia keluar dari perusahaan."
      },
      {
        id: "wb23-4",
        pattern: "Noun + らしい (Khas / Betul-betul ~)",
        instruction: "Gunakan らしい setelah kata benda untuk menyatakan sifat yang khas/tipikal.",
        question: "Nihon / rashii / keeshiki / desu",
        correct: "にほんらしい けしきです。",
        romaji: "Nihon rashii keshiki desu.",
        translation: "Pemandangan yang khas Jepang."
      },
      {
        id: "wb23-5",
        pattern: "〜ようだ vs 〜そうだ vs 〜らしい (Perbandingan)",
        instruction: "Pilih ekspresi yang tepat berdasarkan sumber informasi.",
        question: "Ame / furi / sou / desu (berdasarkan awan gelap yang terlihat)",
        correct: "あめが ふりそうです。",
        romaji: "Ame ga furisou desu.",
        translation: "Sepertinya akan hujan (berdasarkan penglihatan langsung)."
      }
    ],
    exam: {
      part1: [
        { id: "ex23-1", sentence: "かれは びょうきの [ ] です。", correct: "よう", translation: "Tampaknya dia sakit (dari observasi)." },
        { id: "ex23-2", sentence: "この りょうりは おいし [ ] です。", correct: "そう", translation: "Masakan ini kelihatannya enak." },
        { id: "ex23-3", sentence: "かれは かいしゃを やめた [ ] です。", correct: "らしい", translation: "Katanya dia keluar dari perusahaan." },
        { id: "ex23-4", sentence: "あめが ふり [ ] ですね。", correct: "そう", translation: "Sepertinya akan hujan ya." },
        { id: "ex23-5", sentence: "にほん [ ] けしきが きれいですね。", correct: "らしい", translation: "Pemandangan khas Jepang itu indah ya." }
      ],
      part2: [
        {
          id: "ex23-6",
          question: "Perbedaan antara 'youdesu', 'sou desu', dan 'rashii desu':",
          options: [
            { text: "Youdesu = observasi langsung dengan pertimbangan; sou desu = kesan visual instan; rashii = dari informasi pihak ketiga", correct: true },
            { text: "Ketiganya sama dan bisa saling menggantikan", correct: false },
            { text: "Rashii lebih kuat kepastiannya dari youdesu", correct: false }
          ]
        },
        {
          id: "ex23-7",
          question: "Untuk menyatakan 'Kue ini kelihatannya enak' berdasarkan tampilannya yang langsung dilihat:",
          options: [
            { text: "このケーキはおいしいようです。", correct: false },
            { text: "このケーキはおいしそうです。", correct: true },
            { text: "このケーキはおいしいらしいです。", correct: false }
          ]
        },
        {
          id: "ex23-8",
          question: "Setelah mendengar gosip dari teman bahwa Pak Tanaka akan menikah, ungkapan yang tepat:",
          options: [
            { text: "たなかさんは けっこんするようです。", correct: false },
            { text: "たなかさんは けっこんしそうです。", correct: false },
            { text: "たなかさんは けっこんするらしいです。", correct: true }
          ]
        }
      ],
      part3: {
        text: "そとは くもって いて、あめが ふりそうです。てんきよほうに よると、きょうの ごご あめが ふるらしいです。そとを みると、みんなが かさを もって いる ようです。わたしも かさを もって いった ほうが いいでしょう。",
        questions: [
          { id: "ex23-9",  question: "てんきよほうでは きょう あめが ふると いって いました。", correct: "T" },
          { id: "ex23-10", question: "そとに いる ひとびとは かさを もっていません。", correct: "F" },
          { id: "ex23-11", question: "かさを もって いく ほうが いいです。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 24: 〜ても / 〜でも / 逆接 ─────────────────────────────────────
  24: {
    workbook: [
      {
        id: "wb24-1",
        pattern: "V ても / adj くても (Meskipun ~ / Walaupun ~)",
        instruction: "Nyatakan kontras/perlawanan menggunakan te-form + も.",
        question: "Ame / demo / ikimasu",
        correct: "あめでも いきます。",
        romaji: "Ame demo ikimasu.",
        translation: "Walaupun hujan, tetap pergi."
      },
      {
        id: "wb24-2",
        pattern: "〜ても〜ても (Apapun yang terjadi ~)",
        instruction: "Nyatakan kondisi apapun tidak berpengaruh dengan mengulang pola ても.",
        question: "Nanndo / yonde / mo / oboeraremasen",
        correct: "なんどよんでも おぼえられません。",
        romaji: "Nandome yonde mo oboeraremasen.",
        translation: "Berkali-kali membaca pun tidak bisa ingat."
      },
      {
        id: "wb24-3",
        pattern: "〜のに (Padahal ~ tapi ~ / Menunjukkan kekecewaan)",
        instruction: "Nyatakan kekecewaan karena hasil yang tidak sesuai ekspektasi dengan のに.",
        question: "Isshookenmei / benkyoushita / noni / shiken / ochita",
        correct: "いっしょうけんめい べんきょうしたのに しけんに おちました。",
        romaji: "Isshoukenmei benkyoushita noni shiken ni ochimashita.",
        translation: "Padahal sudah belajar keras, tetap gagal ujian."
      },
      {
        id: "wb24-4",
        pattern: "Adj i + くても (Walaupun adj-i ~)",
        instruction: "Buat kalimat kontras dengan kata sifat-i yang diubah ke bentuk くても.",
        question: "Takaくても / kaimasu",
        correct: "たかくても かいます。",
        romaji: "Takakutemo kaimasu.",
        translation: "Walaupun mahal, tetap beli."
      },
      {
        id: "wb24-5",
        pattern: "Noun / na-adj + でも (Walaupun ~)",
        instruction: "Gunakan でも setelah kata benda atau kata sifat-na untuk menyatakan 'walaupun'.",
        question: "Heta / demo / tanoshii",
        correct: "へたでも たのしいです。",
        romaji: "Heta demo tanoshii desu.",
        translation: "Walaupun tidak pandai, tetap menyenangkan."
      }
    ],
    exam: {
      part1: [
        { id: "ex24-1", sentence: "あめ [ ] いきます。", correct: "でも", translation: "Walaupun hujan, tetap pergi." },
        { id: "ex24-2", sentence: "たか [ ] かいます。", correct: "くても", translation: "Walaupun mahal, tetap beli." },
        { id: "ex24-3", sentence: "いっしょうけんめい べんきょうした [ ] しけんに おちました。", correct: "のに", translation: "Padahal belajar keras, gagal ujian." },
        { id: "ex24-4", sentence: "なんど よん [ ] おぼえられません。", correct: "でも", translation: "Berkali-kali baca pun tidak ingat." },
        { id: "ex24-5", sentence: "へた [ ] たのしいです。", correct: "でも", translation: "Walaupun tidak pandai, menyenangkan." }
      ],
      part2: [
        {
          id: "ex24-6",
          question: "Cara membuat bentuk 'walaupun sakit (byouki)' menggunakan pola でも:",
          options: [
            { text: "びょうきくても", correct: false },
            { text: "びょうきでも", correct: true },
            { text: "びょうきなくても", correct: false }
          ]
        },
        {
          id: "ex24-7",
          question: "'Noni' dan 'ga' sama-sama menyatakan kontras. Perbedaannya adalah:",
          options: [
            { text: "Keduanya sama persis", correct: false },
            { text: "Noni menyiratkan kekecewaan/kejutan, ga lebih netral", correct: true },
            { text: "Ga lebih emosional dari noni", correct: false }
          ]
        },
        {
          id: "ex24-8",
          question: "'Dore demo ii' berarti:",
          options: [
            { text: "Tidak ada yang baik", correct: false },
            { text: "Yang manapun boleh / semua oke", correct: true },
            { text: "Hanya satu yang baik", correct: false }
          ]
        }
      ],
      part3: {
        text: "まいにち れんしゅうして いるのに、ピアノが うまく なりません。でも あきらめません。へたでも たのしいから つづけます。たかくても、あたらしい ピアノを かいたいです。いつか じょうずに なれると おもいます。",
        questions: [
          { id: "ex24-9",  question: "この人は まいにち ピアノを れんしゅうして います。", correct: "T" },
          { id: "ex24-10", question: "うまく ならないから あきらめます。", correct: "F" },
          { id: "ex24-11", question: "この人は ピアノが たのしいです。", correct: "T" }
        ]
      }
    }
  },

  // ─── BAB 25: Materi Review & Complex Grammar ────────────────────────────
  25: {
    workbook: [
      {
        id: "wb25-1",
        pattern: "〜ようにします (Berusaha untuk ~)",
        instruction: "Nyatakan upaya/niat untuk membiasakan diri dengan pola ようにします.",
        question: "Mainichi / hanashimono wo / yomu you ni shimasu",
        correct: "まいにち はなしものを よむ ようにします。",
        romaji: "Mainichi hanashimono wo yomu you ni shimasu.",
        translation: "Berusaha membaca bacaan setiap hari."
      },
      {
        id: "wb25-2",
        pattern: "〜ようになります (Menjadi bisa / Akhirnya ~)",
        instruction: "Nyatakan perubahan kemampuan yang bertahap/gradual dengan ようになります.",
        question: "Nihongo de / hanaseru / you ni narimashita",
        correct: "にほんごで はなせる ようになりました。",
        romaji: "Nihongo de hanaseru you ni narimashita.",
        translation: "Akhirnya bisa berbicara dalam bahasa Jepang."
      },
      {
        id: "wb25-3",
        pattern: "〜ば〜のに / 〜たら〜のに (Seandainya saja ~)",
        instruction: "Nyatakan penyesalan tentang hal yang sudah terjadi dengan pola kondisional + のに.",
        question: "Motto / benkyoushite itara / yokatta noni",
        correct: "もっと べんきょうして いたら よかったのに。",
        romaji: "Motto benkyoushite itara yokatta noni.",
        translation: "Seandainya saja belajar lebih keras dulu."
      },
      {
        id: "wb25-4",
        pattern: "〜てほしいです (Ingin seseorang melakukan ~)",
        instruction: "Nyatakan keinginan agar orang lain melakukan sesuatu untuk Anda dengan てほしいです.",
        question: "Kare ni / hayaku / kaette / hoshii",
        correct: "かれに はやく かえって ほしいです。",
        romaji: "Kare ni hayaku kaette hoshii desu.",
        translation: "Ingin dia segera pulang."
      },
      {
        id: "wb25-5",
        pattern: "Review: Berbagai pola よう、そう、らしい、ように、ようになる",
        instruction: "Pilih pola yang tepat sesuai konteks kalimat.",
        question: "Nihongo / jouzu ni / nareru / you ni / mainitchi benkyoushimasu",
        correct: "にほんごが じょうずに なれる ように まいにち べんきょうします。",
        romaji: "Nihongo ga jouzu ni nareru you ni mainichi benkyoushimasu.",
        translation: "Belajar setiap hari agar bisa pandai berbahasa Jepang."
      }
    ],
    exam: {
      part1: [
        { id: "ex25-1", sentence: "もっと べんきょうする [ ] に します。", correct: "よう", translation: "Berusaha untuk belajar lebih banyak." },
        { id: "ex25-2", sentence: "にほんごで はなせる [ ] に なりました。", correct: "よう", translation: "Akhirnya bisa berbicara bahasa Jepang." },
        { id: "ex25-3", sentence: "もっと べんきょうして いたら よかった [ ]。", correct: "のに", translation: "Seandainya saja belajar lebih keras." },
        { id: "ex25-4", sentence: "かれに はやく かえって [ ] です。", correct: "ほしい", translation: "Ingin dia segera pulang." },
        { id: "ex25-5", sentence: "にほんごが じょうずに なれる [ ] べんきょうします。", correct: "ように", translation: "Belajar agar bisa pandai berbahasa Jepang." }
      ],
      part2: [
        {
          id: "ex25-6",
          question: "Perbedaan 'you ni shimasu' dan 'you ni narimasu':",
          options: [
            { text: "Shimasu = upaya/niat aktif; narimasu = perubahan yang terjadi (menjadi bisa)", correct: true },
            { text: "Narimasu = upaya aktif; shimasu = perubahan alami", correct: false },
            { text: "Keduanya sama saja", correct: false }
          ]
        },
        {
          id: "ex25-7",
          question: "Kalimat 'Motto benkyoushitara yokatta noni' (seandainya saja belajar lebih keras) mengekspresikan:",
          options: [
            { text: "Rencana untuk belajar lebih keras ke depan", correct: false },
            { text: "Penyesalan atas kesempatan yang sudah terlewat", correct: true },
            { text: "Saran kepada orang lain agar belajar lebih keras", correct: false }
          ]
        },
        {
          id: "ex25-8",
          question: "Cara meminta seseorang untuk berhenti berbicara dengan て + ほしいです (negatif):",
          options: [
            { text: "はなすのを やめてほしいです", correct: true },
            { text: "はなさないで ほしいです", correct: false },
            { text: "はなしては ほしくないです", correct: false }
          ]
        }
      ],
      part3: {
        text: "にほんへ きて、もう １ねん が たちました。はじめは にほんごが ぜんぜん わかりませんでしたが、いまは すこし はなせる ように なりました。もっと はやく はなせる ように、まいにち れんしゅうする ように して います。らいねんまでに、もっと じょうずに なりたいです。",
        questions: [
          { id: "ex25-9",  question: "この人は にほんへ きて まだ 1ねん たって いません。", correct: "F" },
          { id: "ex25-10", question: "いまは すこし にほんごが はなせます。", correct: "T" },
          { id: "ex25-11", question: "この人は まいにち にほんごを れんしゅうして います。", correct: "T" }
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

  const bundleCode = `// AUTO-GENERATED by patchWorkbookExam2.js — Do not edit manually.
export const MNN_DATA = ${JSON.stringify(allChapters, null, 2)};
`;

  fs.writeFileSync(bundleFile, bundleCode, 'utf-8');
  console.log(`  ✅ Bundle rebuilt: ${chapterFiles.length} chapters written to chapter_data.js`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

console.log('🚀 Starting workbook & exam patch injection (Bab 10-25)...\n');
let injectedCount = 0;

for (const [chapterIdStr, patchData] of Object.entries(PATCH_DATA)) {
  const chapterId = parseInt(chapterIdStr);
  console.log(`📖 Processing Bab ${chapterId}...`);
  const ok = injectPatchData(chapterId, patchData);
  if (ok) injectedCount++;
}

rebuildBundle();

console.log(`\n✨ Done! Injected data into ${injectedCount} chapters.`);
