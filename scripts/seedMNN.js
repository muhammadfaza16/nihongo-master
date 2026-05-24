import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = [
  {
    "id": 0,
    "title": "Chapter 0: Fondasi Nol Besar (Sistem Tulisan & Pelafalan)",
    "desc": "Sebelum menyentuh Bab 1 Minna No Nihongo, Anda WAJIB menguasai sistem tulisan (Hiragana & Katakana) serta aturan dasar pelafalan bahasa Jepang.",
    "locked": false,
    "vocab": [
      {
        "id": "v0-1",
        "rom": "Ohayou gozaimasu",
        "kana": "おはようございます",
        "kanji": "",
        "en": "Selamat pagi",
        "audio": ""
      },
      {
        "id": "v0-2",
        "rom": "Konnichiwa",
        "kana": "こんにちは",
        "kanji": "",
        "en": "Selamat siang",
        "audio": ""
      },
      {
        "id": "v0-3",
        "rom": "Konbanwa",
        "kana": "こんばんは",
        "kanji": "",
        "en": "Selamat malam",
        "audio": ""
      },
      {
        "id": "v0-4",
        "rom": "Arigatou gozaimasu",
        "kana": "ありがとうございます",
        "kanji": "",
        "en": "Terima kasih banyak",
        "audio": ""
      },
      {
        "id": "v0-5",
        "rom": "Sumimasen",
        "kana": "すみません",
        "kanji": "",
        "en": "Permisi / Maaf",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g0-1",
        "title": "1. Tiga Jenis Huruf Jepang",
        "desc": "Bahasa Jepang tidak menggunakan abjad A-Z. Mereka menggunakan 3 jenis huruf secara bersamaan dalam satu kalimat.",
        "points": [
          "HIRAGANA (ひらがな): Huruf asli Jepang. Bentuknya melengkung. Digunakan untuk tata bahasa, partikel, dan kata-kata asli Jepang. Ada 46 huruf dasar.",
          "KATAKANA (カタカナ): Huruf serapan asing. Bentuknya kaku dan bersudut tajam. Digunakan untuk menulis nama orang asing (seperti nama Anda), nama negara, dan kata serapan (misal: 'Komputer' -> コンピューター).",
          "KANJI (漢字): Karakter gambar dari China. Satu huruf mewakili SATU MAKNA utuh, bukan bunyi. Kenapa butuh Kanji? Karena bahasa Jepang tidak pakai spasi. Kanji berfungsi sebagai jangkar visual agar kalimat mudah dibaca."
        ],
        "formula": "Satu kalimat normal = Kanji (akar kata) + Hiragana (tata bahasa) + Katakana (kata asing)"
      },
      {
        "id": "g0-2",
        "title": "2. Pelafalan Vokal Panjang (Chouon)",
        "desc": "Di bahasa Jepang, panjang-pendeknya nada sangat fatal. Beda panjang nada, beda arti mutlak.",
        "points": [
          "Obaasan (おばあさん) = Nenek. Obasan (おばさん) = Bibi. Kesalahan baca bisa menghina orang!",
          "Vokal panjang di Hiragana ditulis dengan menambahkan huruf vokal pendamping (a, i, u, e, o).",
          "Vokal panjang di Katakana ditandai dengan garis lurus 'ー' (Contoh: Kōhī / Kopi = コーヒー)."
        ],
        "formula": "Baca vokal 2 ketukan (dipanjangkan)"
      },
      {
        "id": "g0-3",
        "title": "3. Konsonan Ganda (Sokuon - っ)",
        "desc": "Konsonan ganda ditandai dengan huruf 'tsu' kecil (っ). Ini memberikan jeda/hentakan sepersekian detik sebelum bunyi berikutnya.",
        "points": [
          "Buka (物価 - bukka): Harga barang. Buka (部下 - buka): Bawahan.",
          "Jika Anda melewatkan hentakan 'tsu' kecil ini, orang Jepang tidak akan mengerti apa yang Anda ucapkan."
        ],
        "formula": "Beri jeda 1 ketukan keras sebelum huruf berikutnya."
      },
      {
        "id": "g0-4",
        "title": "4. Bunyi Sengau 'N' (ん)",
        "desc": "Huruf 'n' (ん) adalah satu-satunya konsonan mati di bahasa Jepang yang bisa berdiri sendiri.",
        "points": [
          "Bisa dibaca 'n', 'm', atau 'ng' tergantung huruf setelahnya. (Contoh: 'Senpai' dibaca sempai, 'Tenpura' dibaca tempura)."
        ],
        "formula": "ん = Bunyi sengau"
      }
    ],
    "patterns": [
      {
        "jp": "あ い う え お",
        "rom": "a i u e o",
        "en": "Vokal Dasar Hiragana"
      },
      {
        "jp": "おばあさん / おばさん",
        "rom": "obaasan / obasan",
        "en": "Nenek / Bibi (Beda Vokal Panjang)"
      },
      {
        "jp": "きって / きて",
        "rom": "kitte / kite",
        "en": "Perangko / Datanglah (Beda Konsonan Ganda)"
      }
    ],
    "conversation": {
      "title": "Aisatsu (Salam Dasar Sehari-hari)",
      "dialogue": [
        {
          "speaker": "Guru",
          "jp": "みなさん、おはようございます。",
          "rom": "Minasan, ohayou gozaimasu.",
          "en": "Semuanya, selamat pagi."
        },
        {
          "speaker": "Murid",
          "jp": "先生、おはようございます。",
          "rom": "Sensei, ohayou gozaimasu.",
          "en": "Guru, selamat pagi."
        },
        {
          "speaker": "Guru",
          "jp": "ありがとうございます。",
          "rom": "Arigatou gozaimasu.",
          "en": "Terima kasih banyak."
        },
        {
          "speaker": "Murid",
          "jp": "いいえ、どういたしまして。",
          "rom": "Iie, dou itashimashite.",
          "en": "Tidak, sama-sama."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "Huruf apa yang digunakan khusus untuk menulis kata serapan asing seperti 'Komputer' atau nama Anda?",
        "options": [
          {
            "text": "Hiragana",
            "correct": false
          },
          {
            "text": "Katakana",
            "correct": true
          },
          {
            "text": "Kanji",
            "correct": false
          }
        ]
      },
      {
        "type": "mcq",
        "question": "Mengapa membedakan panjang vokal (seperti obasan vs obaasan) sangat kritis dalam bahasa Jepang?",
        "options": [
          {
            "text": "Hanya untuk agar terdengar keren.",
            "correct": false
          },
          {
            "text": "Karena mengubah arti kata secara total.",
            "correct": true
          },
          {
            "text": "Karena orang Jepang berbicara lambat.",
            "correct": false
          }
        ]
      }
    ],
    "reibun": []
  },
  {
    "id": 1,
    "title": "Lesson 1: Anatomi Kalimat Dasar",
    "desc": "Membedah tuntas Bab 1 Minna No Nihongo: Subjek, Predikat, dan Partikel Penanda (Wa, Ka, Mo, No). Kami tidak memotong isi buku; semua variasi Renshuu A, B, dan C diakomodasi di sini.",
    "locked": false,
    "vocab": [
      {
        "id": "v1-1",
        "rom": "Watashi",
        "kana": "わたし",
        "kanji": "私",
        "en": "Saya",
        "audio": ""
      },
      {
        "id": "v1-2",
        "rom": "Watashitachi",
        "kana": "わたしたち",
        "kanji": "私達",
        "en": "Kami / Kita",
        "audio": ""
      },
      {
        "id": "v1-3",
        "rom": "Anata",
        "kana": "あなた",
        "kanji": "貴方",
        "en": "Anda / Saudara (jarang dipakai langsung, lebih sopan panggil nama)",
        "audio": ""
      },
      {
        "id": "v1-4",
        "rom": "Ano hito",
        "kana": "あのひと",
        "kanji": "あの人",
        "en": "Orang itu",
        "audio": ""
      },
      {
        "id": "v1-5",
        "rom": "Ano kata",
        "kana": "あのかた",
        "kanji": "あの方",
        "en": "Beliau (bentuk sopan dari Ano hito)",
        "audio": ""
      },
      {
        "id": "v1-6",
        "rom": "Minasan",
        "kana": "みなさん",
        "kanji": "皆さん",
        "en": "Saudara-saudara sekalian / Semuanya",
        "audio": ""
      },
      {
        "id": "v1-7",
        "rom": "~san",
        "kana": "〜さん",
        "kanji": "",
        "en": "Sdr/Sdri/Tuan/Nyonya (Akhiran sopan untuk nama orang lain)",
        "audio": ""
      },
      {
        "id": "v1-8",
        "rom": "~chan",
        "kana": "〜ちゃん",
        "kanji": "",
        "en": "Akhiran akrab untuk anak perempuan / teman dekat",
        "audio": ""
      },
      {
        "id": "v1-9",
        "rom": "~kun",
        "kana": "〜くん",
        "kanji": "〜君",
        "en": "Akhiran akrab untuk anak laki-laki",
        "audio": ""
      },
      {
        "id": "v1-10",
        "rom": "~jin",
        "kana": "〜じん",
        "kanji": "〜人",
        "en": "Orang ~ (Menyatakan kewarganegaraan, misal: Amerika-jin)",
        "audio": ""
      },
      {
        "id": "v1-11",
        "rom": "Sensei",
        "kana": "せんせい",
        "kanji": "先生",
        "en": "Guru / Dosen (Sebagai sebutan kehormatan, bukan untuk merujuk profesi diri sendiri)",
        "audio": ""
      },
      {
        "id": "v1-12",
        "rom": "Kyoushi",
        "kana": "きょうし",
        "kanji": "教師",
        "en": "Guru / Dosen (Untuk menyebut profesi diri sendiri)",
        "audio": ""
      },
      {
        "id": "v1-13",
        "rom": "Gakusei",
        "kana": "がくせい",
        "kanji": "学生",
        "en": "Pelajar / Mahasiswa",
        "audio": ""
      },
      {
        "id": "v1-14",
        "rom": "Kaishain",
        "kana": "かいしゃいん",
        "kanji": "会社員",
        "en": "Karyawan perusahaan",
        "audio": ""
      },
      {
        "id": "v1-15",
        "rom": "Shain",
        "kana": "しゃいん",
        "kanji": "社員",
        "en": "Karyawan (Digunakan bersama nama perusahaan: IMC no shain)",
        "audio": ""
      },
      {
        "id": "v1-16",
        "rom": "Ginkouin",
        "kana": "ぎんこういん",
        "kanji": "銀行員",
        "en": "Pegawai bank",
        "audio": ""
      },
      {
        "id": "v1-17",
        "rom": "Isha",
        "kana": "いしゃ",
        "kanji": "医者",
        "en": "Dokter",
        "audio": ""
      },
      {
        "id": "v1-18",
        "rom": "Kenkyuusha",
        "kana": "けんきゅうしゃ",
        "kanji": "研究者",
        "en": "Peneliti",
        "audio": ""
      },
      {
        "id": "v1-19",
        "rom": "Enjinia",
        "kana": "エンジニア",
        "kanji": "",
        "en": "Insinyur / Engineer",
        "audio": ""
      },
      {
        "id": "v1-20",
        "rom": "Daigaku",
        "kana": "だいがく",
        "kanji": "大学",
        "en": "Universitas",
        "audio": ""
      },
      {
        "id": "v1-21",
        "rom": "Byouin",
        "kana": "びょういん",
        "kanji": "病院",
        "en": "Rumah sakit",
        "audio": ""
      },
      {
        "id": "v1-22",
        "rom": "Denki",
        "kana": "でんき",
        "kanji": "電気",
        "en": "Listrik / Lampu",
        "audio": ""
      },
      {
        "id": "v1-23",
        "rom": "Dare",
        "kana": "だれ",
        "kanji": "誰",
        "en": "Siapa (Kasual)",
        "audio": ""
      },
      {
        "id": "v1-24",
        "rom": "Donata",
        "kana": "どなた",
        "kanji": "",
        "en": "Siapa (Sopan / Formal dari Dare)",
        "audio": ""
      },
      {
        "id": "v1-25",
        "rom": "~sai",
        "kana": "〜さい",
        "kanji": "〜歳",
        "en": "Umur ~ tahun",
        "audio": ""
      },
      {
        "id": "v1-26",
        "rom": "Nansai",
        "kana": "なんさい",
        "kanji": "何歳",
        "en": "Berapa umur (Kasual)",
        "audio": ""
      },
      {
        "id": "v1-27",
        "rom": "Oikutsu",
        "kana": "おいくつ",
        "kanji": "",
        "en": "Berapa umur (Sopan / Formal dari Nansai)",
        "audio": ""
      },
      {
        "id": "v1-28",
        "rom": "Hai",
        "kana": "はい",
        "kanji": "",
        "en": "Ya",
        "audio": ""
      },
      {
        "id": "v1-29",
        "rom": "Iie",
        "kana": "いいえ",
        "kanji": "",
        "en": "Tidak / Bukan",
        "audio": ""
      },
      {
        "id": "v1-30",
        "rom": "Shitsurei desu ga",
        "kana": "しつれいですが",
        "kanji": "失礼ですが",
        "en": "Permisi / Maaf, (ketika bertanya privasi)",
        "audio": ""
      },
      {
        "id": "v1-31",
        "rom": "Onamae wa?",
        "kana": "おなまえは？",
        "kanji": "お名前は？",
        "en": "Siapa nama Anda?",
        "audio": ""
      },
      {
        "id": "v1-32",
        "rom": "Hajimemashite",
        "kana": "はじめまして",
        "kanji": "初めまして",
        "en": "Senang bertemu Anda (diucapkan pertama kali bertemu)",
        "audio": ""
      },
      {
        "id": "v1-33",
        "rom": "Douzo yoroshiku onegaishimasu",
        "kana": "どうぞ よろしく おねがいします",
        "kanji": "",
        "en": "Mohon bimbingannya / Senang berkenalan dengan Anda (Penutup perkenalan)",
        "audio": ""
      },
      {
        "id": "v1-34",
        "rom": "Kochira wa ~san desu",
        "kana": "こちらは 〜さんです",
        "kanji": "",
        "en": "Di sebelah sini adalah Sdr. ~ (Memperkenalkan pihak ketiga)",
        "audio": ""
      },
      {
        "id": "v1-35",
        "rom": "~kara kimashita",
        "kana": "〜からきました",
        "kanji": "〜から来ました",
        "en": "Saya datang dari ~",
        "audio": ""
      },
      {
        "id": "v1-36",
        "rom": "Amerika",
        "kana": "アメリカ",
        "kanji": "",
        "en": "Amerika",
        "audio": ""
      },
      {
        "id": "v1-37",
        "rom": "Igirisu",
        "kana": "イギリス",
        "kanji": "",
        "en": "Inggris",
        "audio": ""
      },
      {
        "id": "v1-38",
        "rom": "Indo",
        "kana": "インド",
        "kanji": "",
        "en": "India",
        "audio": ""
      },
      {
        "id": "v1-39",
        "rom": "Indoneshia",
        "kana": "インドネシア",
        "kanji": "",
        "en": "Indonesia",
        "audio": ""
      },
      {
        "id": "v1-40",
        "rom": "Kankoku",
        "kana": "かんこく",
        "kanji": "韓国",
        "en": "Korea Selatan",
        "audio": ""
      },
      {
        "id": "v1-41",
        "rom": "Chuugoku",
        "kana": "ちゅうごく",
        "kanji": "中国",
        "en": "Tiongkok / China",
        "audio": ""
      },
      {
        "id": "v1-42",
        "rom": "Doitsu",
        "kana": "ドイツ",
        "kanji": "",
        "en": "Jerman",
        "audio": ""
      },
      {
        "id": "v1-43",
        "rom": "Nihon",
        "kana": "にほん",
        "kanji": "日本",
        "en": "Jepang",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g1-1",
        "title": "1. N1 は N2 です (Kalimat Positif)",
        "desc": "Struktur paling dasar dalam bahasa Jepang. Menjelaskan bahwa N1 (Subjek/Topik) adalah N2 (Predikat).",
        "points": [
          "Partikel は: Ditulis dengan huruf Hiragana 'ha' (は) tetapi dibaca 'wa'. Berfungsi sebagai penanda TOPIK (Subjek) dari kalimat.",
          "です (Desu): Diletakkan di akhir kalimat. Berfungsi untuk menyatakan kesopanan (Polite/Teineigo) dan memberikan nuansa kepastian (fakta). Tidak memiliki arti mandiri (mirip to-be 'is/am/are').",
          "Watashi wa Miraa desu. (Saya [Topik] - Miller - [Adalah/Sopan])."
        ],
        "formula": "N1(Topik) は N2(Predikat) です",
        "native_note": "Dalam percakapan kasual sehari-hari (terutama dengan teman), native speaker sangat sering membuang partikel 'wa' sepenuhnya. Misalnya, daripada bilang 'Watashi wa anime ga suki desu', mereka cukup bilang 'Watashi, anime suki'."
      },
      {
        "id": "g1-2",
        "title": "2. N1 は N2 じゃありません (Kalimat Negatif)",
        "desc": "Cara menyangkal kalimat positif. 'Desu' diganti menjadi bentuk negatifnya, yaitu 'Ja arimasen'.",
        "points": [
          "じゃありません (Ja arimasen) adalah bentuk negatif yang lazim dipakai dalam percakapan sehari-hari.",
          "ではありません (Dewa arimasen) adalah bentuk yang LEBIH FORMAL. Biasanya digunakan dalam pidato atau teks tertulis yang resmi.",
          "Watashi wa gakusei ja arimasen. (Saya BUKAN pelajar).",
          "Miraa-san wa isha dewa arimasen. (Sdr. Miller BUKAN dokter - Lebih sopan)."
        ],
        "formula": "N1 は N2 じゃありません / ではありません",
        "native_note": "Meskipun 'Ja arimasen' itu sopan, orang Jepang jaman sekarang lebih sering menggunakan 'Janai desu' (じゃないです) di situasi kasual yang agak formal, dan hanya 'Janai' (じゃない) ke teman dekat."
      },
      {
        "id": "g1-3",
        "title": "3. Kalimat + か (Pertanyaan Ya/Tidak & Kata Tanya)",
        "desc": "Dalam bahasa Jepang, urutan kata tidak pernah diubah untuk membuat pertanyaan. Cukup tambahkan partikel 'ka' (か) di akhir kalimat.",
        "points": [
          "Partikel か berfungsi sebagai tanda tanya secara gramatikal. Anda tidak perlu membubuhkan tanda tanya (?) dalam penulisan bahasa Jepang vertikal tradisional jika sudah ada 'ka'.",
          "Pertanyaan Ya/Tidak wajib dijawab dengan はい (Ya) atau いいえ (Tidak).",
          "Miraa-san wa amerika-jin desu ka. (Apakah Miller orang Amerika?) -> Hai, amerika-jin desu.",
          "Pertanyaan Terbuka: Menggunakan kata tanya seperti 'Dare' (Siapa) atau 'Nansai' (Umur berapa).",
          "Ano hito wa dare desu ka. (Orang itu siapa?)"
        ],
        "formula": "[Kalimat Lengkap] + か"
      },
      {
        "id": "g1-4",
        "title": "4. N も (Partikel 'Mo' / Juga)",
        "desc": "Partikel 'mo' menggantikan partikel 'wa' jika fakta yang disebutkan untuk topik baru SAMA dengan fakta dari topik sebelumnya.",
        "points": [
          "Watashi wa kaishain desu. (Saya pegawai perusahaan). Miraa-san MO kaishain desu. (Sdr. Miller JUGA pegawai perusahaan).",
          "JANGAN pernah menggabungkan menjadi 'wa mo'. Partikel 'wa' lenyap dan diganti 100% oleh 'mo'."
        ],
        "formula": "N も ~ です"
      },
      {
        "id": "g1-5",
        "title": "5. N1 の N2 (Partikel Kepemilikan & Kategori)",
        "desc": "Partikel 'no' menyambungkan dua kata benda. Aturan utamanya: N1 SELALU MENJELASKAN N2. (Mirip dengan pola DM / Diterangkan-Menerangkan yang DIBALIK).",
        "points": [
          "Fungsi 1 - Milik: Watashi NO hon (Buku MILIK saya).",
          "Fungsi 2 - Atribut/Afiliasi: IMC NO shain (Pegawai DARI/KATEGORI perusahaan IMC).",
          "Dalam pola 'IMC no shain', N1 (IMC) membatasi makna dari N2 (shain). Bukan pegawai sembarangan, melainkan pegawai IMC."
        ],
        "formula": "N1(Penjelas) の N2(Benda Utama)"
      },
      {
        "id": "g1-6",
        "title": "6. Nuansa Panggilan: ~さん (San) vs ~ちゃん (Chan)",
        "desc": "Etiket memanggil nama dalam budaya Jepang sangat ketat.",
        "points": [
          "~さん (San): Gelar netral untuk Pria/Wanita. Ditempel di belakang nama marga atau nama depan orang lain. PENTING: JANGAN PERNAH menempelkan ~san di nama Anda sendiri!",
          "~ちゃん (Chan): Dipakai untuk anak-anak (terutama perempuan) atau antar sahabat karib yang sangat dekat.",
          "Jika Anda menyebut profesi, gunakan 'Isha' atau 'Kyoushi' untuk diri sendiri, tetapi panggil orang lain dengan 'Sensei' untuk menghormati."
        ],
        "formula": "[Nama Orang Lain] + さん"
      }
    ],
    "patterns": [
      {
        "jp": "わたしは マイク・ミラーです。",
        "rom": "Watashi wa Maiku Miraa desu.",
        "en": "Saya adalah Mike Miller."
      },
      {
        "jp": "サントスさんは 学生じゃありません。",
        "rom": "Santosu-san wa gakusei ja arimasen.",
        "en": "Sdr. Santos bukan pelajar."
      },
      {
        "jp": "ミラーさんは 会社員ですか。",
        "rom": "Miraa-san wa kaishain desu ka.",
        "en": "Apakah Sdr. Miller pegawai perusahaan?"
      },
      {
        "jp": "サントスさんも 会社員です。",
        "rom": "Santosu-san mo kaishain desu.",
        "en": "Sdr. Santos JUGA pegawai perusahaan."
      },
      {
        "jp": "カリナさんは 富士大学の 学生です。",
        "rom": "Karina-san wa Fuji Daigaku no gakusei desu.",
        "en": "Sdri. Karina adalah mahasiswa Universitas Fuji."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: Hajimemashite (Perkenalan Diri Resmi)",
      "dialogue": [
        {
          "speaker": "Sato",
          "jp": "おはようございます。",
          "rom": "Ohayou gozaimasu.",
          "en": "Selamat pagi."
        },
        {
          "speaker": "Yamada",
          "jp": "おはようございます。佐藤さん、こちらは ミラーさんです。",
          "rom": "Ohayou gozaimasu. Satou-san, kochira wa Miraa-san desu.",
          "en": "Selamat pagi. Ibu Sato, perkenalkan (di sebelah sini) ini adalah Sdr. Miller."
        },
        {
          "speaker": "Miller",
          "jp": "はじめまして。マイク・ミラーです。IMCの 社員です。アメリカから 来ました。どうぞ よろしく お願いします。",
          "rom": "Hajimemashite. Maiku Miraa desu. IMC no shain desu. Amerika kara kimashita. Douzo yoroshiku onegaishimasu.",
          "en": "Senang bertemu Anda pertama kali. Saya Mike Miller. Pegawai perusahaan IMC. Saya datang dari Amerika. Senang berkenalan dengan Anda (mohon bimbingannya)."
        },
        {
          "speaker": "Sato",
          "jp": "佐藤けい子です。どうぞ よろしく お願いします。",
          "rom": "Satou Keiko desu. Douzo yoroshiku onegaishimasu.",
          "en": "Saya Keiko Sato. Senang berkenalan dengan Anda juga."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A/B] Jika Anda ingin memperkenalkan diri sebagai Dokter, kalimat mana yang PALING BENAR?",
        "options": [
          {
            "text": "Watashi wa sensei desu.",
            "correct": false
          },
          {
            "text": "Watashi wa isha desu.",
            "correct": true
          },
          {
            "text": "Watashi wa isha san desu.",
            "correct": false
          }
        ]
      },
      {
        "type": "mcq",
        "question": "[Renshuu C] Anda melihat seorang pria tua dan ingin bertanya umurnya secara sopan. Pilihan mana yang tepat?",
        "options": [
          {
            "text": "Ano hito wa nansai desu ka.",
            "correct": false
          },
          {
            "text": "Ano kata wa oikutsu desu ka.",
            "correct": true
          },
          {
            "text": "Ano kata wa nansai desu ka.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Lengkapi kalimat berikut: 'Pak Santos bukan guru'.\nSantosu-san wa sensei [     ] arimasen.",
        "answer": "ja"
      },
      {
        "type": "fill",
        "question": "[Renshuu B] Lengkapi kalimat: 'Miller adalah pegawai IMC'.\nMiraa-san wa IMC [     ] shain desu.",
        "answer": "no"
      },
      {
        "type": "mcq",
        "question": "[Grammar Check] Apa bentuk negatif yang LEBIH FORMAL dari 'ja arimasen'?",
        "options": [
          {
            "text": "Dewa arimasu",
            "correct": false
          },
          {
            "text": "Dewa arimasen",
            "correct": true
          },
          {
            "text": "Ja nai desu",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Nama Seseorang",
        "situation": "Bertemu seseorang untuk pertama kali dan menanyakan namanya secara sopan",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "失礼ですが、お名前は？",
            "rom": "Shitsurei desu ga, onamae wa?",
            "en": "Maaf / permisi, nama Anda siapa?"
          },
          {
            "speaker": "B",
            "jp": "サントスです。",
            "rom": "Santosu desu.",
            "en": "Saya Santos."
          },
          {
            "speaker": "A",
            "jp": "サントスさんですか。",
            "rom": "Santosu-san desu ka.",
            "en": "Apakah Anda Sdr. Santos?"
          },
          {
            "speaker": "B",
            "jp": "はい、そうです。",
            "rom": "Hai, sou desu.",
            "en": "Ya, benar."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Pekerjaan",
        "situation": "Bertanya tentang pekerjaan atau status profesional lawan bicara",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "失礼ですが、お仕事は？",
            "rom": "Shitsurei desu ga, o-shigoto wa?",
            "en": "Permisi, pekerjaan Anda apa?"
          },
          {
            "speaker": "B",
            "jp": "IMCの 社員です。",
            "rom": "IMC no shain desu.",
            "en": "Saya karyawan perusahaan IMC."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Memperkenalkan Orang Lain",
        "situation": "Memperkenalkan rekan kerja atau teman baru kepada orang lain",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "こちらは サントスさんです。",
            "rom": "Kochira wa Santosu-san desu.",
            "en": "Di sebelah sini adalah Sdr. Santos."
          },
          {
            "speaker": "B",
            "jp": "はじめまして。サントスです。ブラジルから 来ました。どうぞ よろしく。",
            "rom": "Hajimemashite. Santosu desu. Burajiru kara kimashita. Douzo yoroshiku.",
            "en": "Senang bertemu Anda pertama kali. Saya Santos. Datang dari Brasil. Senang berkenalan dengan Anda."
          },
          {
            "speaker": "C",
            "jp": "佐藤です。どうぞ よろしく。",
            "rom": "Satou desu. Douzo yoroshiku.",
            "en": "Saya Sato. Senang berkenalan dengan Anda juga."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r1-1",
        "jp": "あなたは マイク・ミラーさんですか。... はい、わたしは マイク・ミラーです。",
        "rom": "Anata wa Maiku Miraa-san desu ka? ... Hai, watashi wa Maiku Miraa desu.",
        "en": "Apakah Anda Sdr. Mike Miller? ... Ya, saya Mike Miller."
      },
      {
        "id": "r1-2",
        "jp": "ミラーさんは 学生ですか。... いいえ、わたしは 学生じゃありません。会社員です。",
        "rom": "Miraa-san wa gakusei desu ka? ... Iie, watashi wa gakusei ja arimasen. Kaishain desu.",
        "en": "Apakah Sdr. Miller mahasiswa? ... Bukan, saya bukan mahasiswa. Saya karyawan perusahaan."
      },
      {
        "id": "r1-3",
        "jp": "ワンさんは 先生ですか。... いいえ、先生じゃありません。学生です。",
        "rom": "Wan-san wa sensei desu ka? ... Iie, sensei ja arimasen. Gakusei desu.",
        "en": "Apakah Sdr. Wang guru? ... Bukan, bukan guru. Dia mahasiswa."
      },
      {
        "id": "r1-4",
        "jp": "あの人は だれですか。... サントスさんです。ブラジルエアーの 社員です。",
        "rom": "Ano hito wa dare desu ka? ... Santosu-san desu. Burajiru Eaa no shain desu.",
        "en": "Siapakah orang itu? ... Tuan Santos. Dia karyawan Brazil Air."
      },
      {
        "id": "r1-5",
        "jp": "テレサちゃんは 何歳ですか。... ９歳です。",
        "rom": "Teresa-chan wa nansai desu ka? ... Kyuusai desu.",
        "en": "Dek Teresa umur berapa? ... 9 tahun."
      }
    ],
    "workbook": [
      {
        "id": "wb1-1",
        "pattern": "N1 は N2 です",
        "instruction": "Hubungkan kata-kata berikut menjadi kalimat positif utuh menggunakan partikel は dan akhiran です.",
        "question": "わたし / マイク・ミラー",
        "correct": "わたしは マイク・ミラーです。",
        "romaji": "Watashi wa Maiku Miraa desu.",
        "translation": "Saya adalah Mike Miller."
      },
      {
        "id": "wb1-2",
        "pattern": "N1 は N2 です",
        "instruction": "Hubungkan kata-kata berikut menjadi kalimat positif utuh menggunakan partikel は dan akhiran です.",
        "question": "あの方 / シュミットさん",
        "correct": "あの方は シュミットさんです。",
        "romaji": "Ano kata wa Shumitto-san desu.",
        "translation": "Beliau adalah Bapak Schmidt."
      },
      {
        "id": "wb1-3",
        "pattern": "N1 は N2 じゃありません",
        "instruction": "Hubungkan kata-kata berikut menjadi kalimat negatif utuh menggunakan partikel は dan akhiran じゃありません.",
        "question": "サントスさん / 学生",
        "correct": "サントスさんは 学生じゃありません。",
        "romaji": "Santosu-san wa gakusei ja arimasen.",
        "translation": "Tuan Santos bukan seorang mahasiswa."
      },
      {
        "id": "wb1-4",
        "pattern": "N1 は N2 ですか",
        "instruction": "Buatlah kalimat tanya dan kalimat jawabnya yang sesuai dengan petunjuk.",
        "question": "ワットさん / 先生 / いいえ",
        "correct": "ワットさんは 先生ですか。いいえ、先生じゃありません。",
        "romaji": "Watto-san wa sensei desu ka? Iie, sensei ja arimasen.",
        "translation": "Apakah Tuan Watt seorang guru? Bukan, bukan guru."
      },
      {
        "id": "wb1-5",
        "pattern": "N も N です",
        "instruction": "Nyatakan bahwa orang kedua juga memiliki profesi yang sama menggunakan partikel も.",
        "question": "ワンさんは 医者です。 / タワポンさん / 医者",
        "correct": "ワンさんは 医者です。タワポンさんも 医者です。",
        "romaji": "Wan-san wa isha desu. Tawapon-san mo isha desu.",
        "translation": "Tuan Wang adalah dokter. Tuan Tawapon juga dokter."
      },
      {
        "id": "wb1-6",
        "pattern": "N1 の N2",
        "instruction": "Gabungkan dua kata benda berikut dengan partikel kepemilikan/afiliasi の.",
        "question": "カリナさん / 富士大学 / 学生",
        "correct": "カリナさんは 富士大学の学生です。",
        "romaji": "Karina-san wa Fuji Daigaku no gakusei desu.",
        "translation": "Nona Karina adalah mahasiswa Universitas Fuji."
      }
    ],
    "exam": {
      "part1": [
        {
          "id": "ex1-1",
          "sentence": "わたし [ ] マイク・ミラーです。",
          "correct": "は",
          "translation": "Saya adalah Mike Miller."
        },
        {
          "id": "ex1-2",
          "sentence": "サントスさん [ ] ブラジル人です。",
          "correct": "も",
          "translation": "Tuan Santos juga orang Brasil."
        },
        {
          "id": "ex1-3",
          "sentence": "カリナさんは 富士大学 [ ] 学生です。",
          "correct": "の",
          "translation": "Nona Karina adalah mahasiswa Universitas Fuji."
        },
        {
          "id": "ex1-4",
          "sentence": "あの方は [ ] ですか。 ... ミラーさんです。",
          "correct": "どなた",
          "translation": "Beliau siapakah? ... Tuan Miller."
        },
        {
          "id": "ex1-5",
          "sentence": "テレサちゃん [ ] 9歳です。",
          "correct": "は",
          "translation": "Dek Teresa berumur 9 tahun."
        }
      ],
      "part2": [
        {
          "id": "ex1-6",
          "question": "Berdasarkan profil buku: 'サントスさん (Brasil Air - Karyawan)'. Lengkapi:\nサントスさんは 学生 [ ]。",
          "options": [
            { "text": "です", "correct": false },
            { "text": "じゃありません", "correct": true },
            { "text": "も", "correct": false }
          ]
        },
        {
          "id": "ex1-7",
          "question": "Berdasarkan profil buku: 'ワットさん (Sakura Daigaku - Guru)'. Lengkapi:\nワットさんは 先生 [ ]。",
          "options": [
            { "text": "です", "correct": true },
            { "text": "じゃありません", "correct": false },
            { "text": "の", "correct": false }
          ]
        },
        {
          "id": "ex1-8",
          "question": "Berdasarkan profil buku: 'シュミットさん (Power Electric - Insinyur)'. Lengkapi:\nシュミットさんは エンジニア [ ]。",
          "options": [
            { "text": "です", "correct": true },
            { "text": "じゃありません", "correct": false },
            { "text": "ではありません", "correct": false }
          ]
        }
      ],
      "part3": {
        "text": "はじめまして。マイク・ミラーです。IMCの社員です。アメリカから来ました。どうぞよろしく。\nこちらはサントスさんです。ブラジル航空の社員です。ブラジルから来ました。どうぞよろしく。",
        "questions": [
          {
            "id": "ex1-9",
            "question": "ミラーさんは アメリカから 来ました。",
            "correct": "T"
          },
          {
            "id": "ex1-10",
            "question": "サントスさんは 先生です。",
            "correct": "F"
          },
          {
            "id": "ex1-11",
            "question": "ミラーさんは IMCの 社員です。",
            "correct": "T"
          }
        ]
      }
    }
  },
  {
    "id": 2,
    "title": "Lesson 2: Kata Tunjuk Benda (Kore, Sore, Are)",
    "desc": "Membedah Bab 2 Minna No Nihongo. Anda akan belajar cara menunjuk benda di sekitar Anda, menyatakan kepemilikan mutlak, serta meminta konfirmasi fakta.",
    "locked": false,
    "vocab": [
      {
        "id": "v2-1",
        "rom": "Kore",
        "kana": "これ",
        "kanji": "",
        "en": "Ini (benda dekat pembicara)"
      },
      {
        "id": "v2-2",
        "rom": "Sore",
        "kana": "それ",
        "kanji": "",
        "en": "Itu (benda dekat lawan bicara)"
      },
      {
        "id": "v2-3",
        "rom": "Are",
        "kana": "あれ",
        "kanji": "",
        "en": "Itu jauh (jauh dari keduanya)"
      },
      {
        "id": "v2-4",
        "rom": "Kono ~",
        "kana": "この",
        "kanji": "",
        "en": "~ ini (menempel pada benda)"
      },
      {
        "id": "v2-5",
        "rom": "Sono ~",
        "kana": "その",
        "kanji": "",
        "en": "~ itu (menempel pada benda)"
      },
      {
        "id": "v2-6",
        "rom": "Ano ~",
        "kana": "あの",
        "kanji": "",
        "en": "~ itu jauh (menempel pada benda)"
      },
      {
        "id": "v2-7",
        "rom": "Hon",
        "kana": "ほん",
        "kanji": "本",
        "en": "Buku"
      },
      {
        "id": "v2-8",
        "rom": "Jisho",
        "kana": "じしょ",
        "kanji": "辞書",
        "en": "Kamus"
      },
      {
        "id": "v2-9",
        "rom": "Zasshi",
        "kana": "ざっし",
        "kanji": "雑誌",
        "en": "Majalah"
      },
      {
        "id": "v2-10",
        "rom": "Shinbun",
        "kana": "しんぶん",
        "kanji": "新聞",
        "en": "Koran"
      },
      {
        "id": "v2-11",
        "rom": "Nooto",
        "kana": "ノート",
        "kanji": "",
        "en": "Buku catatan"
      },
      {
        "id": "v2-12",
        "rom": "Techou",
        "kana": "てちょう",
        "kanji": "手帳",
        "en": "Buku agenda"
      },
      {
        "id": "v2-13",
        "rom": "Meishi",
        "kana": "めいし",
        "kanji": "名刺",
        "en": "Kartu nama"
      },
      {
        "id": "v2-14",
        "rom": "Kaado",
        "kana": "カード",
        "kanji": "",
        "en": "Kartu (Kredit/ATM)"
      },
      {
        "id": "v2-15",
        "rom": "Enpitsu",
        "kana": "えんぴつ",
        "kanji": "鉛筆",
        "en": "Pensil"
      },
      {
        "id": "v2-16",
        "rom": "Boorupen",
        "kana": "ボールペン",
        "kanji": "",
        "en": "Pulpen"
      },
      {
        "id": "v2-17",
        "rom": "Shaapu penshiru",
        "kana": "シャープペンシル",
        "kanji": "",
        "en": "Pensil mekanik"
      },
      {
        "id": "v2-18",
        "rom": "Kagi",
        "kana": "かぎ",
        "kanji": "鍵",
        "en": "Kunci"
      },
      {
        "id": "v2-19",
        "rom": "Tokei",
        "kana": "とけい",
        "kanji": "時計",
        "en": "Jam / Arloji"
      },
      {
        "id": "v2-20",
        "rom": "Kasa",
        "kana": "かさ",
        "kanji": "傘",
        "en": "Payung"
      },
      {
        "id": "v2-21",
        "rom": "Kaban",
        "kana": "かばん",
        "kanji": "鞄",
        "en": "Tas"
      },
      {
        "id": "v2-22",
        "rom": "Terebi",
        "kana": "テレビ",
        "kanji": "",
        "en": "Televisi"
      },
      {
        "id": "v2-23",
        "rom": "Rajio",
        "kana": "ラジオ",
        "kanji": "",
        "en": "Radio"
      },
      {
        "id": "v2-24",
        "rom": "Kamera",
        "kana": "カメラ",
        "kanji": "",
        "en": "Kamera"
      },
      {
        "id": "v2-25",
        "rom": "Konpyuutaa",
        "kana": "コンピューター",
        "kanji": "",
        "en": "Komputer"
      },
      {
        "id": "v2-26",
        "rom": "Kuruma",
        "kana": "くるま",
        "kanji": "車",
        "en": "Mobil"
      },
      {
        "id": "v2-27",
        "rom": "Tsukue",
        "kana": "つくえ",
        "kanji": "机",
        "en": "Meja"
      },
      {
        "id": "v2-28",
        "rom": "Isu",
        "kana": "いす",
        "kanji": "椅子",
        "en": "Kursi"
      },
      {
        "id": "v2-29",
        "rom": "Chokoreeto",
        "kana": "チョコレート",
        "kanji": "",
        "en": "Cokelat"
      },
      {
        "id": "v2-30",
        "rom": "Koohii",
        "kana": "コーヒー",
        "kanji": "",
        "en": "Kopi"
      },
      {
        "id": "v2-31",
        "rom": "Eigo",
        "kana": "えいご",
        "kanji": "英語",
        "en": "Bahasa Inggris"
      },
      {
        "id": "v2-32",
        "rom": "Nihongo",
        "kana": "にほんご",
        "kanji": "日本語",
        "en": "Bahasa Jepang"
      },
      {
        "id": "v2-33",
        "rom": "~go",
        "kana": "〜ご",
        "kanji": "〜語",
        "en": "Bahasa ~"
      },
      {
        "id": "v2-34",
        "rom": "Nan",
        "kana": "なん",
        "kanji": "何",
        "en": "Apa?"
      },
      {
        "id": "v2-35",
        "rom": "Sou",
        "kana": "そう",
        "kanji": "",
        "en": "Begitu"
      },
      {
        "id": "v2-36",
        "rom": "Chigaimasu",
        "kana": "ちがいます",
        "kanji": "違います",
        "en": "Bukan / Salah"
      },
      {
        "id": "v2-37",
        "rom": "Sou desu ka",
        "kana": "そうですか",
        "kanji": "",
        "en": "Oh, begitu (Mengerti)"
      },
      {
        "id": "v2-38",
        "rom": "Anoo",
        "kana": "あのう",
        "kanji": "",
        "en": "Mmm... (Ragu-ragu / memulai pembicaraan)"
      },
      {
        "id": "v2-39",
        "rom": "Honno kimochi desu",
        "kana": "ほんのきもちです",
        "kanji": "ほんの気持ちです",
        "en": "Ini sekadar tanda mata (bingkisan)"
      },
      {
        "id": "v2-40",
        "rom": "Douzo",
        "kana": "どうぞ",
        "kanji": "",
        "en": "Silakan (saat menawarkan barang)"
      },
      {
        "id": "v2-41",
        "rom": "Doumo",
        "kana": "どうも",
        "kanji": "",
        "en": "Terima kasih (singkat)"
      },
      {
        "id": "v2-42",
        "rom": "Doumo arigatou gozaimasu",
        "kana": "どうもありがとうございます",
        "kanji": "",
        "en": "Terima kasih banyak (sangat sopan)"
      }
    ],
    "grammar": [
      {
        "id": "g2-1",
        "title": "1. これ / それ / あれ は N です (Kata Tunjuk Mandiri)",
        "desc": "Kata ganti penunjuk benda. Penggunaannya MURNI bergantung pada JARAK fisik antara pembicara dan lawan bicara.",
        "points": [
          "これ (Kore) = Ini. Digunakan jika benda berada dalam jangkauan tangan PEMBICARA.",
          "それ (Sore) = Itu. Digunakan jika benda berada dalam jangkauan tangan LAWAN BICARA.",
          "あれ (Are) = Itu jauh. Digunakan jika benda berada jauh dari KEDUANYA.",
          "Kata-kata ini berdiri sendiri sebagai KATA BENDA. Artinya, mereka bisa langsung diikuti partikel 'wa' (Kore wa...). JANGAN PERNAH menambahkan kata benda di belakangnya (Kore hon wa = SALAH FATAL)."
        ],
        "formula": "これ/それ/あれ は [Benda] です",
        "native_note": "Dalam percakapan cepat sehari-hari, native speaker sangat sering menyingkat 'Kore wa...' menjadi 'Kore...' saja dengan intonasi naik untuk bertanya (misal: 'Kore, nani?' = 'Ini apa?'). Juga untuk menyangkal kepemilikan, singkatan 'ja nai' jauh lebih kasual digunakan dibanding 'ja arimasen' (misal: 'watashi no janai' = 'bukan milik saya')."
      },
      {
        "id": "g2-2",
        "title": "2. この / その / あの + Noun (Kata Tunjuk Penempel)",
        "desc": "Berbeda dengan Kore/Sore/Are, kelompok ini adalah Kata Sifat Penunjuk (Demonstrative Adjectives).",
        "points": [
          "Kono/Sono/Ano TIDAK BISA berdiri sendiri. Mereka WAJIB menempel secara langsung pada kata benda yang ditunjuk.",
          "Salah: Kono wa hon desu. (Kono tidak bisa diikuti partikel).",
          "Benar: Kono hon wa watashi no desu. (Buku INI adalah milik saya).",
          "Aturan jaraknya (pembicara vs lawan bicara) persis sama dengan Kore/Sore/Are."
        ],
        "formula": "この/その/あの [Benda] は ~ です"
      },
      {
        "id": "g2-3",
        "title": "3. そうです / そうじゃありません (Konfirmasi Instan)",
        "desc": "Cara instan dan natural orang Jepang menjawab pertanyaan Ya/Tidak yang berfokus pada IDENTITAS benda.",
        "points": [
          "Pertanyaan: Sore wa jisho desu ka. (Apakah itu kamus?)",
          "Jawaban YA: はい、そうです。(Hai, sou desu - Ya, betul begitu).",
          "Jawaban TIDAK: いいえ、そうじゃありません。(Iie, sou ja arimasen - Tidak, bukan begitu).",
          "Alternatif TIDAK: いいえ、ちがいます。(Iie, chigaimasu - Tidak, salah/berbeda). Kata kerja 'chigaimasu' sangat sering dipakai dalam percakapan nyata."
        ],
        "formula": "はい、そうです / いいえ、ちがいます"
      },
      {
        "id": "g2-4",
        "title": "4. N1 の N2 (Topik/Isi Buku)",
        "desc": "Di Bab 1 kita belajar partikel 'no' untuk kepemilikan. Di Bab 2, fungsinya bertambah untuk menjelaskan ISI atau TOPIK suatu media.",
        "points": [
          "Kore wa konpyuutaa NO hon desu (Ini adalah buku TENTANG/ISI komputer).",
          "Sore wa jidousha NO zasshi desu (Itu adalah majalah TENTANG mobil)."
        ],
        "formula": "[Topik/Isi] の [Media/Benda]"
      },
      {
        "id": "g2-5",
        "title": "5. N1 の N2 (Penghilangan N2)",
        "desc": "Jika N2 (benda utama) sudah sangat jelas dari konteks atau sudah disebutkan sebelumnya, N2 boleh (dan disarankan) DIHAPUS agar kalimat tidak bertele-tele.",
        "points": [
          "Pertanyaan: Are wa dare no kaban desu ka? (Itu tas milik siapa?)",
          "Jawaban Asli: Sato-san no kaban desu. (Tas milik Bu Sato).",
          "Jawaban Natural: Sato-san NO desu. (Milik Bu Sato - Kata 'kaban' dihapus karena mubazir).",
          "Pengecualian: Jika N2 adalah ORANG, tidak boleh dihapus. (Miraa-san wa IMC no shain desu -> JANGAN jadi IMC no desu)."
        ],
        "formula": "[Pemilik] の (Benda dihapus) です"
      },
      {
        "id": "g2-6",
        "title": "6. Pertanyaan Pilihan: S1 か、S2 か",
        "desc": "Pertanyaan yang memberikan pilihan (A atau B?).",
        "points": [
          "Kore wa '9' desu ka, '7' desu ka. (Ini angka 9, atau angka 7?).",
          "Penting: Jangan menjawab pertanyaan ini dengan Hai / Iie! Langsung sebutkan jawaban yang benar.",
          "Jawaban: '9' desu. (Angka 9)."
        ],
        "formula": "[Kalimat 1] か、[Kalimat 2] か"
      }
    ],
    "patterns": [
      {
        "jp": "これは 辞書です。",
        "rom": "Kore wa jisho desu.",
        "en": "Ini adalah kamus."
      },
      {
        "jp": "それは コンピューターの 本ですか。",
        "rom": "Sore wa konpyuutaa no hon desu ka.",
        "en": "Apakah itu buku tentang komputer?"
      },
      {
        "jp": "あれは わたしの 傘です。",
        "rom": "Are wa watashi no kasa desu.",
        "en": "Itu (jauh di sana) adalah payung saya."
      },
      {
        "jp": "この 本は わたしのです。",
        "rom": "Kono hon wa watashi no desu.",
        "en": "Buku INI adalah milik saya."
      },
      {
        "jp": "あれは 誰の かばんですか。",
        "rom": "Are wa dare no kaban desu ka.",
        "en": "Itu (jauh) tas milik siapa?"
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: Honno Kimochi Desu (Tanda Mata)",
      "dialogue": [
        {
          "speaker": "Yamada",
          "jp": "はい、どなたですか。",
          "rom": "Hai, donata desu ka.",
          "en": "Ya, siapa? (Menjawab bel pintu)"
        },
        {
          "speaker": "Miller",
          "jp": "４０８の ミラーです。",
          "rom": "408 no Miraa desu.",
          "en": "Saya Miller dari kamar 408."
        },
        {
          "speaker": "Yamada",
          "jp": "あ、ミラーさん。こんにちは。",
          "rom": "A, Miraa-san. Konnichiwa.",
          "en": "Ah, Pak Miller. Selamat siang."
        },
        {
          "speaker": "Miller",
          "jp": "こんにちは。ミラーです。これから お世話に なります。どうぞ よろしく お願いします。",
          "rom": "Konnichiwa. Miraa desu. Korekara osewani narimasu. Douzo yoroshiku onegaishimasu.",
          "en": "Selamat siang. Saya Miller. Mulai sekarang saya akan merepotkan Anda bertetangga. Mohon bantuannya (senang berkenalan dengan Anda)."
        },
        {
          "speaker": "Yamada",
          "jp": "こちらこそ よろしく。",
          "rom": "Kochirakoso yoroshiku.",
          "en": "Sama-sama, mohon bantuannya juga."
        },
        {
          "speaker": "Miller",
          "jp": "あのう、これ、ほんの 気持ちです。",
          "rom": "Anou, kore, honno kimochi desu.",
          "en": "Mmm, ini, sekadar tanda mata (sedikit perasaan dari saya)."
        },
        {
          "speaker": "Yamada",
          "jp": "あ、どうも。何ですか。",
          "rom": "A, doumo. Nan desu ka.",
          "en": "Ah, terima kasih. Apa ini?"
        },
        {
          "speaker": "Miller",
          "jp": "コーヒーです。どうぞ。",
          "rom": "Koohii desu. Douzo.",
          "en": "Kopi. Silakan diterima."
        },
        {
          "speaker": "Yamada",
          "jp": "どうも ありがとうございます。",
          "rom": "Doumo arigatou gozaimasu.",
          "en": "Terima kasih banyak ya."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Jika Anda MEMEGANG sebuah kamus di tangan Anda sendiri, bagaimana cara menunjukkannya?",
        "options": [
          {
            "text": "Sore wa jisho desu.",
            "correct": false
          },
          {
            "text": "Are wa jisho desu.",
            "correct": false
          },
          {
            "text": "Kore wa jisho desu.",
            "correct": true
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Lengkapi kalimat: 'Tas INI adalah milik saya'.\n[     ] kaban wa watashi no desu.",
        "answer": "kono"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] A: 'Kore wa shaapu penshiru desu ka.'\nAnda melihat bahwa benda itu BUKAN pensil mekanik, melainkan pulpen. Jawaban natural yang paling tepat adalah?",
        "options": [
          {
            "text": "Iie, sou desu.",
            "correct": false
          },
          {
            "text": "Iie, chigaimasu. Boorupen desu.",
            "correct": true
          },
          {
            "text": "Hai, chigaimasu.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] Ini adalah majalah TENTANG mobil.\nKore wa kuruma [     ] zasshi desu.",
        "answer": "no"
      },
      {
        "type": "mcq",
        "question": "[Grammar Check] Pilihlah kalimat yang SALAH secara tata bahasa!",
        "options": [
          {
            "text": "Kono wa watashi no kasa desu.",
            "correct": true
          },
          {
            "text": "Kore wa watashi no kasa desu.",
            "correct": false
          },
          {
            "text": "Kono kasa wa watashi no desu.",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Benda Terdekat",
        "situation": "Bertanya tentang benda yang dipegang atau dekat dengan lawan bicara",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "それは 何ですか。",
            "rom": "Sore wa nan desu ka.",
            "en": "Itu apa?"
          },
          {
            "speaker": "B",
            "jp": "テレホンカードです。",
            "rom": "Terefon kaado desu.",
            "en": "Ini kartu telepon."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Memberikan Hadiah Kecil",
        "situation": "Memberikan hadiah kecil atau oleh-oleh kepada tetangga/teman baru",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "これ、どうぞ。",
            "rom": "Kore, douzo.",
            "en": "Ini, silakan."
          },
          {
            "speaker": "B",
            "jp": "何ですか。",
            "rom": "Nan desu ka.",
            "en": "Apakah ini?"
          },
          {
            "speaker": "A",
            "jp": "コーヒーです。",
            "rom": "Koohii desu.",
            "en": "Kopi."
          },
          {
            "speaker": "B",
            "jp": "どうも ありがとう ございます。",
            "rom": "Doumo arigatou gozaimasu.",
            "en": "Terima kasih banyak."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Kepemilikan Barang",
        "situation": "Bertanya siapa pemilik dari suatu barang yang tergeletak",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "この 傘は 誰の ですか。",
            "rom": "Kono kasa wa dare no desu ka.",
            "en": "Payung ini milik siapa?"
          },
          {
            "speaker": "B",
            "jp": "私のです。",
            "rom": "Watashi no desu.",
            "en": "Milik saya."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r2-1",
        "jp": "これは 辞書ですか。... はい、そうです。",
        "rom": "Kore wa jisho desu ka? ... Hai, sou desu.",
        "en": "Apakah ini kamus? ... Ya, benar."
      },
      {
        "id": "r2-2",
        "jp": "それは シャープペンシルですか。... いいえ、ボールペンです。",
        "rom": "Sore wa shaapupenshiru desu ka? ... Iie, boorupen desu.",
        "en": "Apakah itu pensil mekanik? ... Bukan, ini pulpen."
      },
      {
        "id": "r2-3",
        "jp": "あれは だれの 傘ですか。... 佐藤さんの 傘です。",
        "rom": "Are wa dare no kasa desu ka? ... Satou-san no kasa desu.",
        "en": "Itu payung siapa? ... Payung Ibu Sato."
      },
      {
        "id": "r2-4",
        "jp": "この 傘は あなたの ですか。... いいえ、わたしのじゃ ありません。",
        "rom": "Kono kasa wa anata no desu ka? ... Iie, watashi no ja arimasen.",
        "en": "Apakah payung ini milik Anda? ... Bukan, bukan milik saya."
      },
      {
        "id": "r2-5",
        "jp": "この コップは あなたの ですか。... はい、わたしのです。",
        "rom": "Kono koppu wa anata no desu ka? ... Hai, watashi no desu.",
        "en": "Apakah gelas ini milik Anda? ... Ya, milik saya."
      }
    ]
  },
  {
    "id": 3,
    "title": "Lesson 3: Kata Tunjuk Tempat (Koko, Soko, Asoko)",
    "desc": "Membedah Bab 3 Minna No Nihongo. Anda akan belajar menanyakan letak suatu tempat, menanyakan harga barang, asal perusahaan pembuat barang, serta tingkatan kesopanan penunjuk arah.",
    "locked": false,
    "vocab": [
      {
        "id": "v3-1",
        "rom": "Koko",
        "kana": "ここ",
        "kanji": "",
        "en": "Di sini (dekat pembicara)",
        "audio": ""
      },
      {
        "id": "v3-2",
        "rom": "Soko",
        "kana": "そこ",
        "kanji": "",
        "en": "Di situ (dekat lawan bicara)",
        "audio": ""
      },
      {
        "id": "v3-3",
        "rom": "Asoko",
        "kana": "あそこ",
        "kanji": "",
        "en": "Di sana (jauh dari keduanya)",
        "audio": ""
      },
      {
        "id": "v3-4",
        "rom": "Doko",
        "kana": "どこ",
        "kanji": "",
        "en": "Di mana?",
        "audio": ""
      },
      {
        "id": "v3-5",
        "rom": "Kochira",
        "kana": "こちら",
        "kanji": "",
        "en": "Sebelah sini (Bentuk sopan dari Koko)",
        "audio": ""
      },
      {
        "id": "v3-6",
        "rom": "Sochira",
        "kana": "そちら",
        "kanji": "",
        "en": "Sebelah situ (Bentuk sopan dari Soko)",
        "audio": ""
      },
      {
        "id": "v3-7",
        "rom": "Achira",
        "kana": "あちら",
        "kanji": "",
        "en": "Sebelah sana (Bentuk sopan dari Asoko)",
        "audio": ""
      },
      {
        "id": "v3-8",
        "rom": "Dochira",
        "kana": "どちら",
        "kanji": "",
        "en": "Ke arah mana? / Di mana? (Bentuk sopan dari Doko)",
        "audio": ""
      },
      {
        "id": "v3-9",
        "rom": "Kyoushitsu",
        "kana": "きょうしつ",
        "kanji": "教室",
        "en": "Ruang Kelas",
        "audio": ""
      },
      {
        "id": "v3-10",
        "rom": "Shokudou",
        "kana": "しょくどう",
        "kanji": "食堂",
        "en": "Kantin / Ruang makan",
        "audio": ""
      },
      {
        "id": "v3-11",
        "rom": "Jimusho",
        "kana": "じむしょ",
        "kanji": "事務所",
        "en": "Kantor",
        "audio": ""
      },
      {
        "id": "v3-12",
        "rom": "Kaigishitsu",
        "kana": "かいぎしつ",
        "kanji": "会議室",
        "en": "Ruang rapat",
        "audio": ""
      },
      {
        "id": "v3-13",
        "rom": "Uketsuke",
        "kana": "うけつけ",
        "kanji": "受付",
        "en": "Meja Resepsionis",
        "audio": ""
      },
      {
        "id": "v3-14",
        "rom": "Robii",
        "kana": "ロビー",
        "kanji": "",
        "en": "Lobi",
        "audio": ""
      },
      {
        "id": "v3-15",
        "rom": "Heya",
        "kana": "へや",
        "kanji": "部屋",
        "en": "Kamar / Ruangan",
        "audio": ""
      },
      {
        "id": "v3-16",
        "rom": "Toire",
        "kana": "トイレ",
        "kanji": "",
        "en": "Toilet / Kamar kecil",
        "audio": ""
      },
      {
        "id": "v3-17",
        "rom": "Otearai",
        "kana": "おてあらい",
        "kanji": "お手洗い",
        "en": "Toilet (Sangat sopan, harfiah: tempat cuci tangan)",
        "audio": ""
      },
      {
        "id": "v3-18",
        "rom": "Kaidan",
        "kana": "かいだん",
        "kanji": "階段",
        "en": "Tangga",
        "audio": ""
      },
      {
        "id": "v3-19",
        "rom": "Erebeetaa",
        "kana": "エレベーター",
        "kanji": "",
        "en": "Lift (Elevator)",
        "audio": ""
      },
      {
        "id": "v3-20",
        "rom": "Esukareetaa",
        "kana": "エスカレーター",
        "kanji": "",
        "en": "Eskalator",
        "audio": ""
      },
      {
        "id": "v3-21",
        "rom": "O-kuni",
        "kana": "おくに",
        "kanji": "お国",
        "en": "Negara (asal seseorang)",
        "audio": ""
      },
      {
        "id": "v3-22",
        "rom": "Kaisha",
        "kana": "かいしゃ",
        "kanji": "会社",
        "en": "Perusahaan",
        "audio": ""
      },
      {
        "id": "v3-23",
        "rom": "Uchi",
        "kana": "うち",
        "kanji": "家",
        "en": "Rumah",
        "audio": ""
      },
      {
        "id": "v3-24",
        "rom": "Denwa",
        "kana": "でんわ",
        "kanji": "電話",
        "en": "Telepon",
        "audio": ""
      },
      {
        "id": "v3-25",
        "rom": "Kutsu",
        "kana": "くつ",
        "kanji": "靴",
        "en": "Sepatu",
        "audio": ""
      },
      {
        "id": "v3-26",
        "rom": "Nekutai",
        "kana": "ネクタイ",
        "kanji": "",
        "en": "Dasi",
        "audio": ""
      },
      {
        "id": "v3-27",
        "rom": "Wain",
        "kana": "ワイン",
        "kanji": "",
        "en": "Anggur (Wine)",
        "audio": ""
      },
      {
        "id": "v3-28",
        "rom": "Tabako",
        "kana": "たばこ",
        "kanji": "",
        "en": "Rokok",
        "audio": ""
      },
      {
        "id": "v3-29",
        "rom": "Uriba",
        "kana": "うりば",
        "kanji": "売り場",
        "en": "Tempat penjualan / Konter",
        "audio": ""
      },
      {
        "id": "v3-30",
        "rom": "Chika",
        "kana": "ちか",
        "kanji": "地下",
        "en": "Bawah tanah (Basement)",
        "audio": ""
      },
      {
        "id": "v3-31",
        "rom": "~kai / ~gai",
        "kana": "〜かい / 〜がい",
        "kanji": "〜階",
        "en": "Lantai ke-~",
        "audio": ""
      },
      {
        "id": "v3-32",
        "rom": "Nangai",
        "kana": "なんがい",
        "kanji": "何階",
        "en": "Lantai berapa?",
        "audio": ""
      },
      {
        "id": "v3-33",
        "rom": "~en",
        "kana": "〜えん",
        "kanji": "〜円",
        "en": "Yen (Mata uang Jepang)",
        "audio": ""
      },
      {
        "id": "v3-34",
        "rom": "Ikura",
        "kana": "いくら",
        "kanji": "",
        "en": "Berapa harganya?",
        "audio": ""
      },
      {
        "id": "v3-35",
        "rom": "Hyaku",
        "kana": "ひゃく",
        "kanji": "百",
        "en": "Seratus",
        "audio": ""
      },
      {
        "id": "v3-36",
        "rom": "Sen / Zen",
        "kana": "せん / ぜん",
        "kanji": "千",
        "en": "Seribu",
        "audio": ""
      },
      {
        "id": "v3-37",
        "rom": "Man",
        "kana": "まん",
        "kanji": "万",
        "en": "Puluh Ribu (10.000)",
        "audio": ""
      },
      {
        "id": "v3-38",
        "rom": "Sumimasen",
        "kana": "すみません",
        "kanji": "",
        "en": "Permisi / Maaf",
        "audio": ""
      },
      {
        "id": "v3-39",
        "rom": "Misete kudasai",
        "kana": "みせて ください",
        "kanji": "見せて ください",
        "en": "Tolong perlihatkan",
        "audio": ""
      },
      {
        "id": "v3-40",
        "rom": "Kudasai",
        "kana": "ください",
        "kanji": "",
        "en": "Tolong beri saya ~",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g3-1",
        "title": "1. ここ / そこ / あそこ は [Tempat] です",
        "desc": "Sama seperti pola Kore/Sore/Are, pola ini menggunakan partikel WA untuk menjadikan TEMPAT (Koko/Soko/Asoko) sebagai topik kalimat.",
        "points": [
          "Koko wa shokudou desu. (Di sini adalah kantin).",
          "Jika ingin menanyakan nama/jenis ruangan, gunakan 'Doko' (Di mana).",
          "Koko wa doko desu ka. (Di sini itu di mana? - Cocok ditanyakan jika Anda tersesat dan bingung sedang berada di mana)."
        ],
        "formula": "ここ/そこ/あそこ は [Tempat] です",
        "native_note": "Toilet di Jepang lebih umum disebut 'Toire' (トイレ) daripada 'Oterai' (お手洗い) dalam percakapan kasual. 'Oterai' terdengar sangat sopan/halus (biasanya digunakan di kafe atau mal untuk menjaga etiket), sedangkan 'Toire' adalah istilah sehari-hari yang santai."
      },
      {
        "id": "g3-2",
        "title": "2. [Benda / Orang] は 場所(Tempat) です",
        "desc": "Untuk menjelaskan DIMANA seseorang atau suatu benda berada. Tidak perlu partikel rumit (seperti partikel 'ni' atau 'de' yang baru akan dipelajari di bab atas), cukup gunakan pola dasar N1 wa N2 desu.",
        "points": [
          "Menanyakan letak: Toire wa doko desu ka. (Toilet ada di mana?).",
          "Sato-san wa jimusho desu (Ibu Sato [ada di] kantor).",
          "Kamera no uriba wa 3-gai desu (Konter kamera [ada di] lantai 3)."
        ],
        "formula": "[Topik] は [Tempat] です"
      },
      {
        "id": "g3-3",
        "title": "3. Doko vs Dochira (Kesopanan Level Tinggi)",
        "desc": "Di Jepang, bahasa yang digunakan saat bekerja/berbisnis (Keigo) sangat membedakan kata tunjuk.",
        "points": [
          "Bentuk Kasual: Koko, Soko, Asoko, Doko.",
          "Bentuk Sopan: Kochira, Sochira, Achira, Dochira. Digunakan oleh pelayan toko, resepsionis, atau saat berbicara dengan klien.",
          "Toire wa doko desu ka (Kasual). Otearai wa dochira desu ka (Sangat Sopan).",
          "Bisa juga untuk bertanya ASAL NEGARA/PERUSAHAAN: O-kuni wa dochira desu ka? (Negara asal Anda dari mana?)"
        ],
        "formula": "どちら (Bentuk sopan dari どこ)"
      },
      {
        "id": "g3-4",
        "title": "4. N1 の N2 (Asal Pembuatan/Produksi)",
        "desc": "Partikel 'NO' berkembang lagi fungsinya. Sekarang digunakan untuk menyatakan BUATAN MANA sebuah barang atau MEREK.",
        "points": [
          "Jika N1 adalah Perusahaan atau Negara, dan N2 adalah Produk.",
          "Contoh: Kore wa Nihon NO kuruma desu. (Ini mobil buatan Jepang).",
          "Contoh: Sore wa Apple NO konpyuutaa desu. (Itu komputer buatan/merek Apple).",
          "Cara bertanya: Kore wa DOKO NO wain desu ka. (Ini anggur buatan mana?)"
        ],
        "formula": "[Negara/Perusahaan] の [Produk]"
      },
      {
        "id": "g3-5",
        "title": "5. Prefix O- (お) untuk Keshopanan",
        "desc": "Prefix 'O' (お) sering ditambahkan di depan kata benda tertentu untuk menunjukkan rasa hormat kepada lawan bicara.",
        "points": [
          "O-kuni (Negara), O-namae (Nama).",
          "PENTING: Jangan PERNAH menambahkan prefix 'O' untuk barang milik Anda sendiri atau saat Anda merujuk pada diri Anda sendiri. (Jangan bilang: Watashi no O-kuni wa Indonesia desu. Cukup: Kuni wa Indonesia desu)."
        ],
        "formula": "お + [Kata Benda lawan bicara]"
      },
      {
        "id": "g3-6",
        "title": "6. Membaca Harga (~Yen) dan Ikura",
        "desc": "Ikura artinya 'Berapa harganya?'. Angka dalam bahasa Jepang dihitung berbasis 10.000 (Man).",
        "points": [
          "Kono tokei wa ikura desu ka. (Jam tangan ini harganya berapa?).",
          "Hyaku (100), Sen (1.000), Ichi-man (10.000).",
          "25.000 Yen dibaca: Ni-man go-sen en. (Dua 'puluh-ribu' dan lima 'ribu')."
        ],
        "formula": "[Benda] は いくら ですか"
      }
    ],
    "patterns": [
      {
        "jp": "ここは 食堂です。",
        "rom": "Koko wa shokudou desu.",
        "en": "Di sini adalah kantin."
      },
      {
        "jp": "電話は あそこです。",
        "rom": "Denwa wa asoko desu.",
        "en": "Telepon ada di sana."
      },
      {
        "jp": "山田さんは 事務所です。",
        "rom": "Yamada-san wa jimusho desu.",
        "en": "Pak Yamada ada di kantor."
      },
      {
        "jp": "これは どこの ワインですか。イタリアの ワインです。",
        "rom": "Kore wa doko no wain desu ka. Itaria no wain desu.",
        "en": "Ini anggur (wine) buatan mana? Anggur buatan Italia."
      },
      {
        "jp": "この カメラは いくらですか。２万５千円です。",
        "rom": "Kono kamera wa ikura desu ka. Ni-man go-sen en desu.",
        "en": "Kamera ini harganya berapa? 25.000 yen."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: Kore wo Kudasai (Tolong Beri Saya Ini)",
      "dialogue": [
        {
          "speaker": "Miller",
          "jp": "すみません。ワインの 売り場は どこですか。",
          "rom": "Sumimasen. Wain no uriba wa doko desu ka.",
          "en": "Permisi. Konter anggur (wine) ada di mana?"
        },
        {
          "speaker": "Resepsionis",
          "jp": "地下１階で ございます。",
          "rom": "Chika ikkai de gozaimasu.",
          "en": "Ada di lantai bawah tanah 1 (Sangat Sopan / Keigo)."
        },
        {
          "speaker": "Miller",
          "jp": "どうも。",
          "rom": "Doumo.",
          "en": "Terima kasih."
        },
        {
          "speaker": "(Di Konter)",
          "jp": "...",
          "rom": "...",
          "en": "(Di konter wine lantai B1)"
        },
        {
          "speaker": "Miller",
          "jp": "すみません。その ワインを 見せて ください。",
          "rom": "Sumimasen. Sono wain o misete kudasai.",
          "en": "Permisi. Tolong perlihatkan anggur itu."
        },
        {
          "speaker": "Pelayan",
          "jp": "はい、どうぞ。",
          "rom": "Hai, douzo.",
          "en": "Baik, silakan."
        },
        {
          "speaker": "Miller",
          "jp": "これは フランスの ワインですか。",
          "rom": "Kore wa Furansu no wain desu ka.",
          "en": "Apakah ini anggur Prancis?"
        },
        {
          "speaker": "Pelayan",
          "jp": "いいえ、イタリアの です。",
          "rom": "Iie, Itaria no desu.",
          "en": "Bukan, (ini) buatan Italia."
        },
        {
          "speaker": "Miller",
          "jp": "いくらですか。",
          "rom": "Ikura desu ka.",
          "en": "Harganya berapa?"
        },
        {
          "speaker": "Pelayan",
          "jp": "２，５００円です。",
          "rom": "Nisen-gohyaku en desu.",
          "en": "2.500 Yen."
        },
        {
          "speaker": "Miller",
          "jp": "じゃ、これを ください。",
          "rom": "Ja, kore o kudasai.",
          "en": "Kalau begitu, tolong beri saya yang ini."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Jika Anda bertanya kepada klien di mana letak ruang rapat (Kaigishitsu) dengan BENTUK SOPAN, Anda harus bilang:",
        "options": [
          {
            "text": "Kaigishitsu wa doko desu ka.",
            "correct": false
          },
          {
            "text": "Kaigishitsu wa dochira desu ka.",
            "correct": true
          },
          {
            "text": "Kaigishitsu wa asoko desu ka.",
            "correct": false
          }
        ]
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] Bagaimana cara bertanya 'Sepatu ini buatan mana?'",
        "options": [
          {
            "text": "Kono kutsu wa doko no desu ka.",
            "correct": true
          },
          {
            "text": "Kono kutsu wa doko desu ka.",
            "correct": false
          },
          {
            "text": "Kore wa doko kutsu desu ka.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Terjemahkan: 'Kamera ini harganya berapa?'\nKono kamera wa [     ] desu ka.",
        "answer": "ikura"
      },
      {
        "type": "fill",
        "question": "[Renshuu C] Lengkapi kalimat: 'Saya berasal dari Amerika'.\nWatashi wa Amerika [     ] kimashita.",
        "answer": "kara"
      },
      {
        "type": "mcq",
        "question": "[Grammar Check] Di manakah letak konter sepatu? (Lantai 3).",
        "options": [
          {
            "text": "3-kai desu.",
            "correct": false
          },
          {
            "text": "3-gai desu.",
            "correct": true
          },
          {
            "text": "3-floor desu.",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Lokasi Tempat",
        "situation": "Bertanya tentang letak suatu ruangan dalam gedung sekolah/kantor",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "ここは どこですか。",
            "rom": "Koko wa doko desu ka.",
            "en": "Di sini di mana?"
          },
          {
            "speaker": "B",
            "jp": "教室です。",
            "rom": "Kyoushitsu desu.",
            "en": "Ruang kelas."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Asal Negara/Merek Benda",
        "situation": "Menanyakan di mana suatu benda diproduksi dan harganya",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "それは どこの 時計ですか。",
            "rom": "Sore wa doko no tokei desu ka.",
            "en": "Itu jam buatan mana?"
          },
          {
            "speaker": "B",
            "jp": "日本のです。",
            "rom": "Buatan Jepang."
          },
          {
            "speaker": "A",
            "jp": "いくらですか。",
            "rom": "Ikura desu ka.",
            "en": "Harganya berapa?"
          },
          {
            "speaker": "B",
            "jp": "15,000円です。",
            "rom": "Ichiman go-sen en desu.",
            "en": "15.000 Yen."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Letak Fasilitas (Elevator)",
        "situation": "Bertanya kepada staf gedung di mana letak elevator berada",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "エレベーターは どちらですか。",
            "rom": "Erebeetaa wa dochira desu ka.",
            "en": "Elevator ada di sebelah mana?"
          },
          {
            "speaker": "B",
            "jp": "あちらです。",
            "rom": "Achira desu.",
            "en": "Ada di sebelah sana."
          },
          {
            "speaker": "A",
            "jp": "どうも ありがとう ございます。",
            "rom": "Doumo arigatou gozaimasu.",
            "en": "Terima kasih banyak."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r3-1",
        "jp": "ここは 食堂ですか。... いいえ、会議室です。",
        "rom": "Koko wa shokudou desu ka? ... Iie, kaigishitsu desu.",
        "en": "Apakah di sini kantin? ... Bukan, di sini ruang rapat."
      },
      {
        "id": "r3-2",
        "jp": "お手洗いは どこですか。... あそこです。",
        "rom": "Oterai wa doko desu ka? ... Asoko desu.",
        "en": "Toiletnya di mana? ... Di sebelah sana."
      },
      {
        "id": "r3-3",
        "jp": "山田さんは どこですか。... 事務所です。",
        "rom": "Yamada-san wa doko desu ka? ... Di kantor."
      },
      {
        "id": "r3-4",
        "jp": "エレベーターは どちらですか。... あちらです。",
        "rom": "Erebeetaa wa dochira desu ka? ... Achira desu.",
        "en": "Liftnya di sebelah mana? ... Di sebelah sana."
      },
      {
        "id": "r3-5",
        "jp": "それは どこの 国の ワインですか。... フランスの ワインです。",
        "rom": "Sore wa doko no kuni no wain desu ka? ... Furanosu no wain desu.",
        "en": "Itu anggur (wine) buatan negara mana? ... Anggur buatan Prancis."
      }
    ]
  },
  {
    "id": 4,
    "title": "Lesson 4: Waktu & Aktivitas Dasar (Masu Form)",
    "desc": "Mempelajari cara menyebutkan jam, hari, dan memperkenalkan Kata Kerja formal (Masu-Form) untuk rutinitas masa kini dan masa lalu.",
    "locked": false,
    "vocab": [
      {
        "id": "v4-1",
        "rom": "Okimasu",
        "kana": "おきます",
        "kanji": "起きます",
        "en": "Bangun (tidur)",
        "audio": ""
      },
      {
        "id": "v4-2",
        "rom": "Nemasu",
        "kana": "ねます",
        "kanji": "寝ます",
        "en": "Tidur",
        "audio": ""
      },
      {
        "id": "v4-3",
        "rom": "Hatarakimasu",
        "kana": "はたらきます",
        "kanji": "働きます",
        "en": "Bekerja",
        "audio": ""
      },
      {
        "id": "v4-4",
        "rom": "Yasumimasu",
        "kana": "やすみます",
        "kanji": "休みます",
        "en": "Beristirahat / Libur",
        "audio": ""
      },
      {
        "id": "v4-5",
        "rom": "Benkyoushimasu",
        "kana": "べんきょうします",
        "kanji": "勉強します",
        "en": "Belajar",
        "audio": ""
      },
      {
        "id": "v4-6",
        "rom": "Owarimasu",
        "kana": "おわります",
        "kanji": "終わります",
        "en": "Selesai / Berakhir",
        "audio": ""
      },
      {
        "id": "v4-7",
        "rom": "Depaato",
        "kana": "デパート",
        "kanji": "",
        "en": "Department store",
        "audio": ""
      },
      {
        "id": "v4-8",
        "rom": "Ginkou",
        "kana": "ぎんこう",
        "kanji": "銀行",
        "en": "Bank",
        "audio": ""
      },
      {
        "id": "v4-9",
        "rom": "Yuubinkyoku",
        "kana": "ゆうびんきょく",
        "kanji": "郵便局",
        "en": "Kantor Pos",
        "audio": ""
      },
      {
        "id": "v4-10",
        "rom": "Toshokan",
        "kana": "としょかん",
        "kanji": "図書館",
        "en": "Perpustakaan",
        "audio": ""
      },
      {
        "id": "v4-11",
        "rom": "Bijutsukan",
        "kana": "びじゅつかん",
        "kanji": "美術館",
        "en": "Museum Seni",
        "audio": ""
      },
      {
        "id": "v4-12",
        "rom": "Ima",
        "kana": "いま",
        "kanji": "今",
        "en": "Sekarang",
        "audio": ""
      },
      {
        "id": "v4-13",
        "rom": "~Ji",
        "kana": "〜じ",
        "kanji": "〜時",
        "en": "Jam ~",
        "audio": ""
      },
      {
        "id": "v4-14",
        "rom": "~Fun / ~Pun",
        "kana": "〜ふん / 〜ぷん",
        "kanji": "〜分",
        "en": "Menit ~",
        "audio": ""
      },
      {
        "id": "v4-15",
        "rom": "Han",
        "kana": "はん",
        "kanji": "半",
        "en": "Setengah (30 Menit)",
        "audio": ""
      },
      {
        "id": "v4-16",
        "rom": "Nanji",
        "kana": "なんじ",
        "kanji": "何時",
        "en": "Jam berapa?",
        "audio": ""
      },
      {
        "id": "v4-17",
        "rom": "Nanpun",
        "kana": "なんぷん",
        "kanji": "何分",
        "en": "Menit berapa?",
        "audio": ""
      },
      {
        "id": "v4-18",
        "rom": "Gozen",
        "kana": "ごぜん",
        "kanji": "午前",
        "en": "AM (Pagi)",
        "audio": ""
      },
      {
        "id": "v4-19",
        "rom": "Gogo",
        "kana": "ごご",
        "kanji": "午後",
        "en": "PM (Siang-Malam)",
        "audio": ""
      },
      {
        "id": "v4-20",
        "rom": "Asa",
        "kana": "あさ",
        "kanji": "朝",
        "en": "Pagi hari",
        "audio": ""
      },
      {
        "id": "v4-21",
        "rom": "Hiru",
        "kana": "ひる",
        "kanji": "昼",
        "en": "Siang hari",
        "audio": ""
      },
      {
        "id": "v4-22",
        "rom": "Ban / Yoru",
        "kana": "ばん / よる",
        "kanji": "晩 / 夜",
        "en": "Malam hari",
        "audio": ""
      },
      {
        "id": "v4-23",
        "rom": "Ototoi",
        "kana": "おととい",
        "kanji": "",
        "en": "Kemarin lusa",
        "audio": ""
      },
      {
        "id": "v4-24",
        "rom": "Kinou",
        "kana": "きのう",
        "kanji": "昨日",
        "en": "Kemarin",
        "audio": ""
      },
      {
        "id": "v4-25",
        "rom": "Kyou",
        "kana": "きょう",
        "kanji": "今日",
        "en": "Hari ini",
        "audio": ""
      },
      {
        "id": "v4-26",
        "rom": "Ashita",
        "kana": "あした",
        "kanji": "明日",
        "en": "Besok",
        "audio": ""
      },
      {
        "id": "v4-27",
        "rom": "Asatte",
        "kana": "あさって",
        "kanji": "",
        "en": "Besok lusa",
        "audio": ""
      },
      {
        "id": "v4-28",
        "rom": "Kesa",
        "kana": "けさ",
        "kanji": "今朝",
        "en": "Pagi ini",
        "audio": ""
      },
      {
        "id": "v4-29",
        "rom": "Konban",
        "kana": "こんばん",
        "kanji": "今晩",
        "en": "Malam ini",
        "audio": ""
      },
      {
        "id": "v4-30",
        "rom": "Yasumi",
        "kana": "やすみ",
        "kanji": "休み",
        "en": "Libur / Istirahat",
        "audio": ""
      },
      {
        "id": "v4-31",
        "rom": "Hiruyasumi",
        "kana": "ひるやすみ",
        "kanji": "昼休み",
        "en": "Istirahat siang",
        "audio": ""
      },
      {
        "id": "v4-32",
        "rom": "Shiken",
        "kana": "しけん",
        "kanji": "試験",
        "en": "Ujian",
        "audio": ""
      },
      {
        "id": "v4-33",
        "rom": "Kaigi",
        "kana": "かいぎ",
        "kanji": "会議",
        "en": "Rapat",
        "audio": ""
      },
      {
        "id": "v4-34",
        "rom": "Eiga",
        "kana": "えいが",
        "kanji": "映画",
        "en": "Film",
        "audio": ""
      },
      {
        "id": "v4-35",
        "rom": "Maiasa",
        "kana": "まいあさ",
        "kanji": "毎朝",
        "en": "Setiap pagi",
        "audio": ""
      },
      {
        "id": "v4-36",
        "rom": "Maiban",
        "kana": "まいばん",
        "kanji": "毎晩",
        "en": "Setiap malam",
        "audio": ""
      },
      {
        "id": "v4-37",
        "rom": "Mainichi",
        "kana": "まいにち",
        "kanji": "毎日",
        "en": "Setiap hari",
        "audio": ""
      },
      {
        "id": "v4-38",
        "rom": "Getsuyoubi",
        "kana": "げつようび",
        "kanji": "月曜日",
        "en": "Hari Senin",
        "audio": ""
      },
      {
        "id": "v4-39",
        "rom": "Kayoubi",
        "kana": "かようび",
        "kanji": "火曜日",
        "en": "Hari Selasa",
        "audio": ""
      },
      {
        "id": "v4-40",
        "rom": "Suiyoubi",
        "kana": "すいようび",
        "kanji": "水曜日",
        "en": "Hari Rabu",
        "audio": ""
      },
      {
        "id": "v4-41",
        "rom": "Mokuyoubi",
        "kana": "もくようび",
        "kanji": "木曜日",
        "en": "Hari Kamis",
        "audio": ""
      },
      {
        "id": "v4-42",
        "rom": "Kinyoubi",
        "kana": "きんようび",
        "kanji": "金曜日",
        "en": "Hari Jumat",
        "audio": ""
      },
      {
        "id": "v4-43",
        "rom": "Doyoubi",
        "kana": "どようび",
        "kanji": "土曜日",
        "en": "Hari Sabtu",
        "audio": ""
      },
      {
        "id": "v4-44",
        "rom": "Nichiyoubi",
        "kana": "にちようび",
        "kanji": "日曜日",
        "en": "Hari Minggu",
        "audio": ""
      },
      {
        "id": "v4-45",
        "rom": "Nanyoubi",
        "kana": "なんようび",
        "kanji": "何曜日",
        "en": "Hari apa?",
        "audio": ""
      },
      {
        "id": "v4-46",
        "rom": "Taihen desu ne",
        "kana": "たいへんですね",
        "kanji": "大変ですね",
        "en": "Pasti berat ya (Simpati)",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g4-1",
        "title": "1. 今 〜時 〜分 です (Menyebutkan Jam)",
        "desc": "Struktur dasar menyebutkan waktu dalam bahasa Jepang.",
        "points": [
          "Format Jepang memasukkan penanda AM/PM (Gozen/Gogo) DI DEPAN jam. Contoh: Gogo 3-ji (3 PM / Jam 3 sore).",
          "Setengah (30 menit) menggunakan 半 (Han). Contoh: 4-ji han (Jam 4:30).",
          "Tanya jam: Ima nanji desu ka? (Sekarang jam berapa?)"
        ],
        "formula": "今 [AM/PM] [Angka]時 [Angka]分 です",
        "native_note": "Karena angka 4 (shi) dan 9 (ku) berbunyi mirip dengan kata 'Kematian' (shinu) dan 'Penderitaan' (kurushii) dalam kepercayaan tradisional Jepang, penyebutan jam 4 selalu dibaca 'yoji' (bukan shiji) dan jam 9 dibaca 'kuji' (bukan kyuuji) untuk menghindari kesialan."
      },
      {
        "id": "g4-2",
        "title": "2. Kata Kerja Formal: 〜ます (Masu Form)",
        "desc": "Akhiran 'Masu' digunakan untuk menyatakan rutinitas kebiasaan atau aktivitas masa depan secara sopan (Teineigo).",
        "points": [
          "Positif Masa Kini/Depan: 〜ます (Masu). Contoh: Okimasu (Saya bangun).",
          "Negatif Masa Kini/Depan: 〜ません (Masen). Contoh: Okimasen (Saya tidak bangun).",
          "Positif Masa Lalu (Past): 〜ました (Mashita). Contoh: Okimashita (Saya sudah/telah bangun).",
          "Negatif Masa Lalu: 〜ませんでした (Masen deshita). Contoh: Okimasen deshita (Saya tidak bangun tadinya)."
        ],
        "formula": "Kata Kerja (Masu / Masen / Mashita / Masen deshita)"
      },
      {
        "id": "g4-3",
        "title": "3. Partikel Waktu: 〜に (NI)",
        "desc": "Partikel NI (pada) digunakan JIKA suatu aksi terjadi di titik waktu yang ANGKA-NYA SPESIFIK (ada jam, tanggal, atau bulan).",
        "points": [
          "Pakai NI: 6-ji NI okimasu (Bangun PADA jam 6).",
          "Pakai NI (opsional): Nichiyoubi (ni) okimasu (Bangun pada hari Minggu).",
          "TIDAK BOLEH pakai NI: Jika keterangan waktunya relatif (hari ini, besok, minggu depan, setiap hari). Contoh BENAR: Kyou okimasu. Contoh SALAH: Kyou ni okimasu."
        ],
        "formula": "Waktu (Angka spesifik) に [Kata Kerja]"
      },
      {
        "id": "g4-4",
        "title": "4. N1 から N2 まで (Dari... Sampai...)",
        "desc": "Partikel KARA menandakan titik awal, sedangkan MADE menandakan titik akhir (bisa waktu atau tempat).",
        "points": [
          "9-ji KARA 5-ji MADE hatarakimasu (Bekerja DARI jam 9 SAMPAI jam 5).",
          "Bisa juga berdiri sendiri: 9-ji kara hatarakimasu (Saya mulai kerja dari jam 9).",
          "Bisa diletakkan langsung sebelum 'desu' jika menjelaskan jam operasional: Ginkou wa 9-ji kara 3-ji made desu (Bank buka dari jam 9 sampai 3)."
        ],
        "formula": "[Awal] から [Akhir] まで"
      },
      {
        "id": "g4-5",
        "title": "5. Kalimat1 と Kalimat2 (Partikel TO)",
        "desc": "Partikel 'TO' menghubungkan dua kata benda. Artinya 'Dan'.",
        "points": [
          "Ginkou no yasumi wa Doyoubi TO Nichiyoubi desu (Libur bank adalah hari Sabtu DAN Minggu).",
          "Tidak bisa digunakan untuk menyambungkan dua kalimat kerja! Hanya benda murni."
        ],
        "formula": "Benda1 と Benda2"
      }
    ],
    "patterns": [
      {
        "jp": "今 ４時５分です。",
        "rom": "Ima yo-ji go-fun desu.",
        "en": "Sekarang jam 4 lewat 5 menit."
      },
      {
        "jp": "わたしは 毎朝 ６時に 起きます。",
        "rom": "Watashi wa maiasa roku-ji ni okimasu.",
        "en": "Saya bangun pada jam 6 setiap pagi."
      },
      {
        "jp": "きのう 勉強しました。",
        "rom": "Kinou benkyoushimashita.",
        "en": "Kemarin saya (telah) belajar."
      },
      {
        "jp": "きのうの晩 勉強しませんでした。",
        "rom": "Kinou no ban benkyoushimasen deshita.",
        "en": "Tadi malam saya (telah) tidak belajar."
      },
      {
        "jp": "銀行は ９時から ３時までです。",
        "rom": "Ginkou wa ku-ji kara san-ji made desu.",
        "en": "Bank (buka) dari jam 9 sampai jam 3."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: そちらは何時までですか (Di sana buka sampai jam berapa?)",
      "dialogue": [
        {
          "speaker": "Nomor Bantuan",
          "jp": "はい、１０４の 石田です。",
          "rom": "Hai, hyaku-yon no Ishida desu.",
          "en": "Ya, ini bagian informasi (104), dengan Ishida."
        },
        {
          "speaker": "Karina",
          "jp": "大和美術館の 電話番号を お願いします。",
          "rom": "Yamato bijutsukan no denwabangou o onegaishimasu.",
          "en": "Tolong berikan nomor telepon Museum Seni Yamato."
        },
        {
          "speaker": "Nomor Bantuan",
          "jp": "大和美術館ですね。かしこまりました。",
          "rom": "Yamato bijutsukan desu ne. Kashikomarimashita.",
          "en": "Museum Seni Yamato ya. Baik, dimengerti."
        },
        {
          "speaker": "Museum Yamato",
          "jp": "はい、大和美術館です。",
          "rom": "Hai, Yamato bijutsukan desu.",
          "en": "Ya, ini Museum Seni Yamato."
        },
        {
          "speaker": "Karina",
          "jp": "すみません。そちらは 何時から 何時までですか。",
          "rom": "Sumimasen. Sochira wa nan-ji kara nan-ji made desu ka.",
          "en": "Permisi. Di sana buka dari jam berapa sampai jam berapa?"
        },
        {
          "speaker": "Museum Yamato",
          "jp": "９時から ４時までです。",
          "rom": "Ku-ji kara yo-ji made desu.",
          "en": "Dari jam 9 sampai jam 4."
        },
        {
          "speaker": "Karina",
          "jp": "休みは 何曜日ですか。",
          "rom": "Yasumi wa nan-youbi desu ka.",
          "en": "Liburnya hari apa?"
        },
        {
          "speaker": "Museum Yamato",
          "jp": "月曜日です。",
          "rom": "Getsuyoubi desu.",
          "en": "Hari Senin."
        },
        {
          "speaker": "Karina",
          "jp": "どうも ありがとうございました。",
          "rom": "Doumo arigatou gozaimashita.",
          "en": "Terima kasih banyak tadinya."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Jika hari ini saya memutuskan 'tidak belajar' (kebiasaan masa kini), kata kerjanya menjadi:",
        "options": [
          {
            "text": "Benkyoushimasu",
            "correct": false
          },
          {
            "text": "Benkyoushimasen",
            "correct": true
          },
          {
            "text": "Benkyoushimashita",
            "correct": false
          },
          {
            "text": "Benkyoushimasen deshita",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Terjemahkan: 'Tidur DARI jam 10 malam SAMPAI jam 6 pagi'.\nYoru 10-ji [     ] asa 6-ji [     ] nemasu. (Tulis dengan koma: kata1, kata2)",
        "answer": "kara, made"
      },
      {
        "type": "mcq",
        "question": "[Grammar Check] Kalimat mana yang penggunaan partikel NI-nya TEPAT?",
        "options": [
          {
            "text": "Ashita ni benkyoushimasu.",
            "correct": false
          },
          {
            "text": "Kyou ni 6-ji okimasu.",
            "correct": false
          },
          {
            "text": "Asa 6-ji ni okimasu.",
            "correct": true
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] Anda ingin bertanya jam operasional bank: 'Bank dari jam berapa sampai jam berapa?'\nGinkou wa [       ] kara nan-ji made desu ka.",
        "answer": "nan-ji"
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Jam Buka-Tutup",
        "situation": "Menanyakan jam operasional dari perpustakaan umum",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "図書館は 何時から 何時まで ですか。",
            "rom": "Toshokan wa nan-ji kara nan-ji made desu ka.",
            "en": "Perpustakaan buka dari jam berapa sampai jam berapa?"
          },
          {
            "speaker": "B",
            "jp": "午前9時から 午後5時まで です。",
            "rom": "Gozen ku-ji kara gogo go-ji made desu.",
            "en": "Dari jam 9 pagi sampai jam 5 sore."
          },
          {
            "speaker": "A",
            "jp": "休みは 何曜日ですか。",
            "rom": "Yasumi wa nan-youbi desu ka.",
            "en": "Liburnya hari apa?"
          },
          {
            "speaker": "B",
            "jp": "月曜日です。",
            "rom": "Getsuyoubi desu.",
            "en": "Hari Senin."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Waktu Ujian/Acara",
        "situation": "Bertanya tentang jam mulai suatu kegiatan formal",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "試験は 何時に 始まりますか。",
            "rom": "Shiken wa nan-ji ni hajimarimasu ka.",
            "en": "Ujian dimulai jam berapa?"
          },
          {
            "speaker": "B",
            "jp": "午前10時に 始まります。",
            "rom": "Gozen juu-ji ni hajimarimasu.",
            "en": "Dimulai jam 10 pagi."
          },
          {
            "speaker": "A",
            "jp": "そうですか。ありがとう ございます。",
            "rom": "Sou desu ka. Arigatou gozaimasu.",
            "en": "Oh begitu. Terima kasih banyak."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menyapa Teman yang Kerja Lembur",
        "situation": "Menyapa kolega kerja yang terlihat sangat lelah bekerja hingga malam",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "毎晩 遅いですね。大変ですね。",
            "rom": "Maiban osoi desu ne. Taihen desu ne.",
            "en": "Tiap malam pulang lambat ya. Berat/capek sekali ya."
          },
          {
            "speaker": "B",
            "jp": "ええ。10時まで 働きます。",
            "rom": "Ee. Juu-ji made hatarakimasu.",
            "en": "Iya. Saya bekerja sampai jam 10 malam."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r4-1",
        "jp": "今 何時ですか。... ２時１０分です。",
        "rom": "Ima nanji desu ka? ... Niji juppun desu.",
        "en": "Sekarang jam berapa? ... Jam 2 lewat 10 menit."
      },
      {
        "id": "r4-2",
        "jp": "ニューヨークは 今 何時ですか。... 午前４時です。",
        "rom": "Nyuuyooku wa ima nanji desu ka? ... Gozen yoji desu.",
        "en": "New York sekarang jam berapa? ... Jam 4 pagi."
      },
      {
        "id": "r4-3",
        "jp": "試験は 何曜日に ありますか。... 火曜日に あります。",
        "rom": "Shiken wa nanyoubi ni arimasu ka? ... Kayoubi ni arimasu.",
        "en": "Ujiannya hari apa? ... Hari Selasa."
      },
      {
        "id": "r4-4",
        "jp": "銀行は 何時から 何時まで ですか。... ９時から ３時まで です。",
        "rom": "Ginkou wa naji kara nanji made desu ka? ... Kujihana kara sanji made desu.",
        "en": "Bank buka dari jam berapa sampai jam berapa? ... Dari jam 9 sampai jam 3."
      },
      {
        "id": "r4-5",
        "jp": "毎日 何時に 起きますか。... ６時に 起きます。",
        "rom": "Mainichi nanji ni okimasu ka? ... Rokuji ni okimasu.",
        "en": "Setiap hari bangun jam berapa? ... Bangun jam 6."
      }
    ]
  },
  {
    "id": 5,
    "title": "Lesson 5: Pergerakan (Pergi, Datang, Pulang)",
    "desc": "Mempelajari kata kerja perpindahan arah (ikimasu, kimasu, kaerimasu) beserta partikel tujuan (e), kendaraan (de), dan kawan perjalanan (to).",
    "locked": false,
    "vocab": [
      {
        "id": "v5-1",
        "rom": "Ikimasu",
        "kana": "いきます",
        "kanji": "行きます",
        "en": "Pergi",
        "audio": ""
      },
      {
        "id": "v5-2",
        "rom": "Kimasu",
        "kana": "きます",
        "kanji": "来ます",
        "en": "Datang",
        "audio": ""
      },
      {
        "id": "v5-3",
        "rom": "Kaerimasu",
        "kana": "かえります",
        "kanji": "帰ります",
        "en": "Pulang",
        "audio": ""
      },
      {
        "id": "v5-4",
        "rom": "Gakkou",
        "kana": "がっこう",
        "kanji": "学校",
        "en": "Sekolah",
        "audio": ""
      },
      {
        "id": "v5-5",
        "rom": "Suupaa",
        "kana": "スーパー",
        "kanji": "",
        "en": "Supermarket",
        "audio": ""
      },
      {
        "id": "v5-6",
        "rom": "Eki",
        "kana": "えき",
        "kanji": "駅",
        "en": "Stasiun",
        "audio": ""
      },
      {
        "id": "v5-7",
        "rom": "Hikouki",
        "kana": "ひこうき",
        "kanji": "飛行機",
        "en": "Pesawat Terbang",
        "audio": ""
      },
      {
        "id": "v5-8",
        "rom": "Fune",
        "kana": "ふね",
        "kanji": "船",
        "en": "Kapal Laut",
        "audio": ""
      },
      {
        "id": "v5-9",
        "rom": "Densha",
        "kana": "でんしゃ",
        "kanji": "電車",
        "en": "Kereta Listrik (Commuter)",
        "audio": ""
      },
      {
        "id": "v5-10",
        "rom": "Chikatetsu",
        "kana": "ちかてつ",
        "kanji": "地下鉄",
        "en": "Kereta Bawah Tanah (Subway)",
        "audio": ""
      },
      {
        "id": "v5-11",
        "rom": "Shinkansen",
        "kana": "しんかんせん",
        "kanji": "新幹線",
        "en": "Kereta Cepat (Shinkansen)",
        "audio": ""
      },
      {
        "id": "v5-12",
        "rom": "Basu",
        "kana": "バス",
        "kanji": "",
        "en": "Bus",
        "audio": ""
      },
      {
        "id": "v5-13",
        "rom": "Takushii",
        "kana": "タクシー",
        "kanji": "",
        "en": "Taksi",
        "audio": ""
      },
      {
        "id": "v5-14",
        "rom": "Jitensha",
        "kana": "じてんしゃ",
        "kanji": "自転車",
        "en": "Sepeda",
        "audio": ""
      },
      {
        "id": "v5-15",
        "rom": "Aruite",
        "kana": "あるいて",
        "kanji": "歩いて",
        "en": "Jalan kaki (Tidak boleh pakai partikel De)",
        "audio": ""
      },
      {
        "id": "v5-16",
        "rom": "Hito",
        "kana": "ひと",
        "kanji": "人",
        "en": "Orang",
        "audio": ""
      },
      {
        "id": "v5-17",
        "rom": "Tomodachi",
        "kana": "ともだち",
        "kanji": "友達",
        "en": "Teman",
        "audio": ""
      },
      {
        "id": "v5-18",
        "rom": "Kare",
        "kana": "かれ",
        "kanji": "彼",
        "en": "Dia (Laki-laki) / Pacar laki-laki",
        "audio": ""
      },
      {
        "id": "v5-19",
        "rom": "Kanojo",
        "kana": "かのじょ",
        "kanji": "彼女",
        "en": "Dia (Perempuan) / Pacar perempuan",
        "audio": ""
      },
      {
        "id": "v5-20",
        "rom": "Kazoku",
        "kana": "かぞく",
        "kanji": "家族",
        "en": "Keluarga",
        "audio": ""
      },
      {
        "id": "v5-21",
        "rom": "Hitori de",
        "kana": "ひとりで",
        "kanji": "一人で",
        "en": "Sendirian",
        "audio": ""
      },
      {
        "id": "v5-22",
        "rom": "Senshuu",
        "kana": "せんしゅう",
        "kanji": "先週",
        "en": "Minggu lalu",
        "audio": ""
      },
      {
        "id": "v5-23",
        "rom": "Konshuu",
        "kana": "こんしゅう",
        "kanji": "今週",
        "en": "Minggu ini",
        "audio": ""
      },
      {
        "id": "v5-24",
        "rom": "Raishuu",
        "kana": "らいしゅう",
        "kanji": "来週",
        "en": "Minggu depan",
        "audio": ""
      },
      {
        "id": "v5-25",
        "rom": "Sengetsu",
        "kana": "せんげつ",
        "kanji": "先月",
        "en": "Bulan lalu",
        "audio": ""
      },
      {
        "id": "v5-26",
        "rom": "Kongetsu",
        "kana": "こんげつ",
        "kanji": "今月",
        "en": "Bulan ini",
        "audio": ""
      },
      {
        "id": "v5-27",
        "rom": "Raigetsu",
        "kana": "らいげつ",
        "kanji": "来月",
        "en": "Bulan depan",
        "audio": ""
      },
      {
        "id": "v5-28",
        "rom": "Kyonen",
        "kana": "きょねん",
        "kanji": "去年",
        "en": "Tahun lalu",
        "audio": ""
      },
      {
        "id": "v5-29",
        "rom": "Kotoshi",
        "kana": "ことし",
        "kanji": "今年",
        "en": "Tahun ini",
        "audio": ""
      },
      {
        "id": "v5-30",
        "rom": "Rainen",
        "kana": "らいねん",
        "kanji": "来年",
        "en": "Tahun depan",
        "audio": ""
      },
      {
        "id": "v5-31",
        "rom": "Nangatsu",
        "kana": "なんがつ",
        "kanji": "何月",
        "en": "Bulan apa?",
        "audio": ""
      },
      {
        "id": "v5-32",
        "rom": "Tsuitachi/Futsuka/Mikka/Yokka",
        "kana": "ついたち / ふつか / みっか / よっか",
        "kanji": "1日/2日/3日/4日",
        "en": "Tanggal 1 / 2 / 3 / 4",
        "audio": ""
      },
      {
        "id": "v5-33",
        "rom": "Itsu",
        "kana": "いつ",
        "kanji": "",
        "en": "Kapan?",
        "audio": ""
      },
      {
        "id": "v5-34",
        "rom": "Tanjoubi",
        "kana": "たんじょうび",
        "kanji": "誕生日",
        "en": "Ulang tahun",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g5-1",
        "title": "1. [Tempat] へ 行きます / 来ます / 帰ります",
        "desc": "Partikel 'E' (ditulis dengan huruf Hiragana へ/he, TAPI dibaca e) digunakan KHUSUS untuk menunjukkan ARAH TUJUAN dari sebuah pergerakan (Directional Particle).",
        "points": [
          "Ikimasu (Pergi): Arahnya menjauhi pembicara. Contoh: Kyouto e ikimasu (Pergi ke Kyoto).",
          "Kimasu (Datang): Arahnya mendekati pembicara. Contoh: Nihon e kimashita (Telah datang ke Jepang - diucapkan saat sudah di Jepang).",
          "Kaerimasu (Pulang): Digunakan HANYA jika tujuannya adalah tempat asal/markas (Rumah, Negara asal). Uchi e kaerimasu."
        ],
        "formula": "[Tempat] へ V (ikimasu/kimasu/kaerimasu)",
        "native_note": "Partikel arah 'e' (へ) sangat sering digantikan oleh partikel 'ni' (に) dalam percakapan lisan sehari-hari (misal: 'Toukyou ni iku' alih-alih 'Toukyou e iku'). Partikel 'ni' lebih menekankan pada titik kedatangan akhir, sedangkan 'e' menekankan pada arah proses perjalanannya."
      },
      {
        "id": "g5-2",
        "title": "2. どこへも 行きません (Penyangkalan Total)",
        "desc": "Jika Anda TIDAK pergi ke mana-mana, Anda tidak bisa menggunakan bentuk negatif biasa. Anda harus menggunakan kata tanya + partikel MO + Negatif.",
        "points": [
          "Doko = Ke mana.",
          "Doko e mo = Ke mana pun (ditambah 'e' untuk arah).",
          "Doko e mo ikimasen = Tidak pergi ke mana pun.",
          "Masa Lalu: Kinou doko e mo ikimasen deshita (Kemarin tidak pergi ke mana pun)."
        ],
        "formula": "Kata Tanya + (partikel) + も + V-negatif"
      },
      {
        "id": "g5-3",
        "title": "3. [Kendaraan] で 行きます (Alat Transportasi)",
        "desc": "Partikel DE menandakan ALAT, SARANA, atau METODE yang digunakan untuk melakukan suatu aksi. Di bab ini, fungsinya spesifik untuk kendaraan.",
        "points": [
          "Densha de ikimasu. (Pergi MENGGUNAKAN kereta).",
          "Takushii de kimasu. (Datang NAIK taksi).",
          "Pengecualian KRUSIAL: Jika Anda berjalan kaki, gunakan 'Aruite' (Bentuk Te dari Arukimasu) TANPA partikel de. Contoh: Eki e aruite ikimasu (BUKAN aruite de)."
        ],
        "formula": "[Kendaraan] で V"
      },
      {
        "id": "g5-4",
        "title": "4. [Orang/Hewan] と 行きます (Dengan Siapa)",
        "desc": "Partikel TO di sini berarti 'Bersama'. Menunjukkan partner/kawan yang menemani Anda.",
        "points": [
          "Tomodachi to ikimasu. (Pergi BERSAMA teman).",
          "Kazoku to Nihon e kimashita. (Datang ke Jepang bersama keluarga).",
          "Pengecualian KRUSIAL: Jika Anda sendirian, gunakan 'Hitori de' TANPA partikel to. Contoh: Hitori de ikimasu (BUKAN hitori to)."
        ],
        "formula": "[Orang/Partner] と V"
      },
      {
        "id": "g5-5",
        "title": "5. いつ (Kapan)",
        "desc": "Kata tanya 'Itsu' (Kapan) digunakan untuk menanyakan waktu bebas. Berbeda dengan 'Nanji' (Jam berapa), 'Itsu' TIDAK memerlukan partikel NI.",
        "points": [
          "Benar: Itsu Nihon e kimasuka. (Kapan datang ke Jepang?).",
          "Salah: Itsu NI Nihon e kimasuka. (Partikel NI dilarang menempel pada Itsu)."
        ],
        "formula": "いつ + Kalimat ~ か"
      }
    ],
    "patterns": [
      {
        "jp": "京都へ 行きます。",
        "rom": "Kyouto e ikimasu.",
        "en": "Saya pergi ke Kyoto."
      },
      {
        "jp": "タクシーで うちへ 帰ります。",
        "rom": "Takushii de uchi e kaerimasu.",
        "en": "Saya pulang ke rumah dengan (menggunakan) Taksi."
      },
      {
        "jp": "家族と 日本へ 来ました。",
        "rom": "Kazoku to Nihon e kimashita.",
        "en": "Saya (telah) datang ke Jepang bersama keluarga."
      },
      {
        "jp": "日曜日は どこへも 行きませんでした。",
        "rom": "Nichiyoubi wa doko e mo ikimasen deshita.",
        "en": "Hari Minggu (lalu) saya tidak pergi ke mana pun."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: Koushien e Ikimasuka (Pergi ke Koshien?)",
      "dialogue": [
        {
          "speaker": "Santos",
          "jp": "すみません。甲子園まで いくらですか。",
          "rom": "Sumimasen. Koushien made ikura desu ka.",
          "en": "Permisi. Sampai ke Koshien (tiket keretanya) berapa harganya?"
        },
        {
          "speaker": "Warga",
          "jp": "３５０円です。",
          "rom": "Sanbyaku-gojuu en desu.",
          "en": "350 Yen."
        },
        {
          "speaker": "Santos",
          "jp": "３５０円ですね。ありがとうございました。",
          "rom": "Sanbyaku-gojuu en desu ne. Arigatou gozaimashita.",
          "en": "350 Yen ya. Terima kasih banyak."
        },
        {
          "speaker": "Warga",
          "jp": "どういたしまして。",
          "rom": "Dou itashimashite.",
          "en": "Sama-sama."
        },
        {
          "speaker": "Santos",
          "jp": "すみません。甲子園は 何番線ですか。",
          "rom": "Sumimasen. Koushien wa nan-bansen desu ka.",
          "en": "Permisi. (Kereta ke) Koshien di peron (jalur) berapa?"
        },
        {
          "speaker": "Pegawai Eki",
          "jp": "５番線です。",
          "rom": "Go-bansen desu.",
          "en": "Peron jalur 5."
        },
        {
          "speaker": "Santos",
          "jp": "どうも。",
          "rom": "Doumo.",
          "en": "Terima kasih."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Jika Anda berjalan kaki menuju stasiun, kalimat yang BENAR secara gramatikal adalah:",
        "options": [
          {
            "text": "Eki e aruite de ikimasu",
            "correct": false
          },
          {
            "text": "Eki e aruite ikimasu",
            "correct": true
          },
          {
            "text": "Eki e aruite ni ikimasu",
            "correct": false
          },
          {
            "text": "Aruite wa eki e ikimasu",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Lengkapi kalimat: 'Tadi malam, saya tidak pergi ke mana pun'.\nKinou no ban, doko [     ] mo ikimasen deshita.",
        "answer": "e"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] Anda pergi liburan sendirian ke Kyoto. Apa partikel yang tepat untuk 'sendirian'?",
        "options": [
          {
            "text": "Hitori to ikimasu",
            "correct": false
          },
          {
            "text": "Hitori ni ikimasu",
            "correct": false
          },
          {
            "text": "Hitori de ikimasu",
            "correct": true
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] Terjemahkan: 'Kapan ulang tahun Anda?'\nTanjoubi wa [       ] desu ka.",
        "answer": "itsu"
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Transportasi & Pendamping",
        "situation": "Bertanya bagaimana seseorang pergi ke stasiun dan bersama siapa",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "何で 駅へ 行きますか。",
            "rom": "Nan de eki e ikimasu ka.",
            "en": "Naik apa pergi ke stasiun?"
          },
          {
            "speaker": "B",
            "jp": "自転車で 行きます。",
            "rom": "Jitensha de ikimasu.",
            "en": "Naik sepeda."
          },
          {
            "speaker": "A",
            "jp": "一人で 行きますか。",
            "rom": "Hitori de ikimasu ka.",
            "en": "Pergi sendirian?"
          },
          {
            "speaker": "B",
            "jp": "いいえ、友達と 行きます。",
            "rom": "Iie, tomodachi to ikimasu.",
            "en": "Tidak, pergi bersama teman."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Destinasi Liburan",
        "situation": "Mengobrol tentang rencana liburan musim panas rekan kerja",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "この 夏休みは どこへ 行きますか。",
            "rom": "Kono natsuyasumi wa doko e ikimasu ka.",
            "en": "Liburan musim panas ini pergi ke mana?"
          },
          {
            "speaker": "B",
            "jp": "京都へ 行きます。",
            "rom": "Kyouto e ikimasu.",
            "en": "Pergi ke Kyoto."
          },
          {
            "speaker": "A",
            "jp": "いいですね。",
            "rom": "Ii desu ne.",
            "en": "Asyik/bagus sekali ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Tanggal Ulang Tahun",
        "situation": "Mengobrol santai dan menanyakan hari lahir teman",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "お誕生日のは いつですか。",
            "rom": "O-tanjoubi wa itsu desu ka.",
            "en": "Ulang tahun Anda kapan?"
          },
          {
            "speaker": "B",
            "jp": "9月 15日です。",
            "rom": "Ku-gatsu juu-go-nichi desu.",
            "en": "Tanggal 15 September."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r5-1",
        "jp": "明日 どこへ 行きますか。... 奈良へ 行きます。",
        "rom": "Ashita doko e ikimasu ka? ... Nara e ikimasu.",
        "en": "Besok pergi ke mana? ... Pergi ke Nara."
      },
      {
        "id": "r5-2",
        "jp": "日曜日 どこへ 行きましたか。... どこ[へ]も 行きませんでした。",
        "rom": "Nichiyoubi doko e ikimashita ka? ... Doko [e] mo ikimasen deshita.",
        "en": "Hari Minggu kemarin pergi ke mana? ... Tidak pergi ke mana-mana."
      },
      {
        "id": "r5-3",
        "jp": "何で 東京へ 行きますか。... 新幹線で 行きます。",
        "rom": "Nande Toukyou e ikimasu ka? ... Shinkansen de ikimasu.",
        "en": "Pergi ke Tokyo naik apa? ... Naik Shinkansen."
      },
      {
        "id": "r5-4",
        "jp": "だれと 東京へ 行きますか。... 家族と 行きます。",
        "rom": "Dare to Toukyou e ikimasu ka? ... Kazoku to ikimasu.",
        "en": "Pergi ke Tokyo dengan siapa? ... Dengan keluarga."
      },
      {
        "id": "r5-5",
        "jp": "いつ 日本へ 来ましたか。... ３月２５日に 来ました。",
        "rom": "Itsu Nihon e kimashita ka? ... Sangatsu nijyuugonichi ni kimashita.",
        "en": "Kapan datang ke Jepang? ... Datang tanggal 25 Maret."
      }
    ]
  },
  {
    "id": 6,
    "title": "Lesson 6: Kata Kerja Transitif & Objek (Partikel O)",
    "desc": "Membedah Bab 6. Anda akan belajar bagaimana menunjuk objek penderita yang dikenai pekerjaan (makan nasi, minum air), menyatakan tempat terjadinya aktivitas, serta mengajak orang lain.",
    "locked": false,
    "vocab": [
      {
        "id": "v6-1",
        "rom": "Tabemasu",
        "kana": "たべます",
        "kanji": "食べます",
        "en": "Makan",
        "audio": ""
      },
      {
        "id": "v6-2",
        "rom": "Nomimasu",
        "kana": "のみます",
        "kanji": "飲みます",
        "en": "Minum",
        "audio": ""
      },
      {
        "id": "v6-3",
        "rom": "Suimasu",
        "kana": "すいます",
        "kanji": "吸います",
        "en": "Menghisap (merokok)",
        "audio": ""
      },
      {
        "id": "v6-4",
        "rom": "Mimasu",
        "kana": "みます",
        "kanji": "見ます",
        "en": "Melihat / Menonton",
        "audio": ""
      },
      {
        "id": "v6-5",
        "rom": "Kikimasu",
        "kana": "ききます",
        "kanji": "聞きます",
        "en": "Mendengar",
        "audio": ""
      },
      {
        "id": "v6-6",
        "rom": "Yomimasu",
        "kana": "よみます",
        "kanji": "読みます",
        "en": "Membaca",
        "audio": ""
      },
      {
        "id": "v6-7",
        "rom": "Kakimasu",
        "kana": "かきます",
        "kanji": "書きます",
        "en": "Menulis / Menggambar",
        "audio": ""
      },
      {
        "id": "v6-8",
        "rom": "Kaimasu",
        "kana": "かいます",
        "kanji": "買います",
        "en": "Membeli",
        "audio": ""
      },
      {
        "id": "v6-9",
        "rom": "Torimasu (shashin o)",
        "kana": "とります",
        "kanji": "撮ります",
        "en": "Mengambil (foto)",
        "audio": ""
      },
      {
        "id": "v6-10",
        "rom": "Shimasu",
        "kana": "します",
        "kanji": "",
        "en": "Melakukan / Mengerjakan / Bermain (olahraga)",
        "audio": ""
      },
      {
        "id": "v6-11",
        "rom": "Aimasu (tomodachi ni)",
        "kana": "あいます",
        "kanji": "会います",
        "en": "Bertemu (teman) -> Pakai partikel NI",
        "audio": ""
      },
      {
        "id": "v6-12",
        "rom": "Gohan",
        "kana": "ごはん",
        "kanji": "ご飯",
        "en": "Nasi / Makan",
        "audio": ""
      },
      {
        "id": "v6-13",
        "rom": "Asagohan",
        "kana": "あさごはん",
        "kanji": "朝ご飯",
        "en": "Makan pagi / Sarapan",
        "audio": ""
      },
      {
        "id": "v6-14",
        "rom": "Hirugohan",
        "kana": "ひるごはん",
        "kanji": "昼ご飯",
        "en": "Makan siang",
        "audio": ""
      },
      {
        "id": "v6-15",
        "rom": "Bangohan",
        "kana": "ばんごはん",
        "kanji": "晩ご飯",
        "en": "Makan malam",
        "audio": ""
      },
      {
        "id": "v6-16",
        "rom": "Pan",
        "kana": "パン",
        "kanji": "",
        "en": "Roti",
        "audio": ""
      },
      {
        "id": "v6-17",
        "rom": "Tamago",
        "kana": "たまご",
        "kanji": "卵",
        "en": "Telur",
        "audio": ""
      },
      {
        "id": "v6-18",
        "rom": "Niku",
        "kana": "にく",
        "kanji": "肉",
        "en": "Daging",
        "audio": ""
      },
      {
        "id": "v6-19",
        "rom": "Sakana",
        "kana": "さかな",
        "kanji": "魚",
        "en": "Ikan",
        "audio": ""
      },
      {
        "id": "v6-20",
        "rom": "Yasai",
        "kana": "やさい",
        "kanji": "野菜",
        "en": "Sayuran",
        "audio": ""
      },
      {
        "id": "v6-21",
        "rom": "Kudamono",
        "kana": "くだもの",
        "kanji": "果物",
        "en": "Buah-buahan",
        "audio": ""
      },
      {
        "id": "v6-22",
        "rom": "Mizu",
        "kana": "みず",
        "kanji": "水",
        "en": "Air",
        "audio": ""
      },
      {
        "id": "v6-23",
        "rom": "Ocha",
        "kana": "おちゃ",
        "kanji": "お茶",
        "en": "Teh hijau",
        "audio": ""
      },
      {
        "id": "v6-24",
        "rom": "Koucha",
        "kana": "こうちゃ",
        "kanji": "紅茶",
        "en": "Teh hitam (Teh celup/barat)",
        "audio": ""
      },
      {
        "id": "v6-25",
        "rom": "Gyuunyuu / Miruku",
        "kana": "ぎゅうにゅう / ミルク",
        "kanji": "牛乳",
        "en": "Susu",
        "audio": ""
      },
      {
        "id": "v6-26",
        "rom": "Juusu",
        "kana": "ジュース",
        "kanji": "",
        "en": "Jus",
        "audio": ""
      },
      {
        "id": "v6-27",
        "rom": "Biiru",
        "kana": "ビール",
        "kanji": "",
        "en": "Bir",
        "audio": ""
      },
      {
        "id": "v6-28",
        "rom": "Osake",
        "kana": "おさけ",
        "kanji": "お酒",
        "en": "Sake (Alkohol Jepang)",
        "audio": ""
      },
      {
        "id": "v6-29",
        "rom": "Eiga",
        "kana": "えいが",
        "kanji": "映画",
        "en": "Film",
        "audio": ""
      },
      {
        "id": "v6-30",
        "rom": "Tegami",
        "kana": "てがみ",
        "kanji": "手紙",
        "en": "Surat",
        "audio": ""
      },
      {
        "id": "v6-31",
        "rom": "Repooto",
        "kana": "レポート",
        "kanji": "",
        "en": "Laporan",
        "audio": ""
      },
      {
        "id": "v6-32",
        "rom": "Shashin",
        "kana": "しゃしん",
        "kanji": "写真",
        "en": "Foto",
        "audio": ""
      },
      {
        "id": "v6-33",
        "rom": "Mise",
        "kana": "みせ",
        "kanji": "店",
        "en": "Toko",
        "audio": ""
      },
      {
        "id": "v6-34",
        "rom": "Resutoran",
        "kana": "レストラン",
        "kanji": "",
        "en": "Restoran",
        "audio": ""
      },
      {
        "id": "v6-35",
        "rom": "Niwa",
        "kana": "にわ",
        "kanji": "庭",
        "en": "Halaman / Taman rumah",
        "audio": ""
      },
      {
        "id": "v6-36",
        "rom": "Shukudai",
        "kana": "しゅくだい",
        "kanji": "宿題",
        "en": "PR (Pekerjaan Rumah)",
        "audio": ""
      },
      {
        "id": "v6-37",
        "rom": "Tenisu",
        "kana": "テニス",
        "kanji": "",
        "en": "Tenis",
        "audio": ""
      },
      {
        "id": "v6-38",
        "rom": "Sakkaa",
        "kana": "サッカー",
        "kanji": "",
        "en": "Sepak bola",
        "audio": ""
      },
      {
        "id": "v6-39",
        "rom": "O-hanami",
        "kana": "おはなみ",
        "kanji": "お花見",
        "en": "Kegiatan melihat bunga sakura",
        "audio": ""
      },
      {
        "id": "v6-40",
        "rom": "Nani",
        "kana": "なに",
        "kanji": "何",
        "en": "Apa?",
        "audio": ""
      },
      {
        "id": "v6-41",
        "rom": "Issho ni",
        "kana": "いっしょに",
        "kanji": "一緒に",
        "en": "Bersama-sama",
        "audio": ""
      },
      {
        "id": "v6-42",
        "rom": "Chotto",
        "kana": "ちょっと",
        "kanji": "",
        "en": "Sebentar / Sedikit",
        "audio": ""
      },
      {
        "id": "v6-43",
        "rom": "Itsumo",
        "kana": "いつも",
        "kanji": "",
        "en": "Selalu",
        "audio": ""
      },
      {
        "id": "v6-44",
        "rom": "Tokidoki",
        "kana": "ときどき",
        "kanji": "時々",
        "en": "Kadang-kadang",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g6-1",
        "title": "1. [Objek] を Kata Kerja",
        "desc": "Partikel を (O) adalah penanda OBJEK PENDERITA. Huruf ini diketik dengan 'wo' tapi selalu dibaca 'o'. Partikel ini eksklusif dan HANYA dipakai untuk menghubungkan kata benda yang dikenai aksi langsung oleh kata kerja transitif.",
        "points": [
          "Gohan o tabemasu (Makan nasi). 'Nasi' adalah objek yang dikenai aksi 'makan'.",
          "Mizu o nomimasu (Minum air).",
          "Shashin o torimasu (Mengambil foto)."
        ],
        "formula": "[Objek] を [Kata Kerja]",
        "native_note": "Hampir 90% partikel objek 'o' (を) dihilangkan dalam percakapan kasual lisan. Misalnya, daripada bilang 'Gohan o taberu', native speaker akan langsung berkata 'Gohan taberu' atau 'Mizu nomu'. Ini terdengar sangat natural dan dinamis."
      },
      {
        "id": "g6-2",
        "title": "2. [Benda] を します (Melakukan / Bermain)",
        "desc": "Kata kerja SHIMASU sangat serbaguna. Ia bisa menyulap kata benda menjadi kata kerja (Noun-Verb), atau digunakan untuk olahraga dan permainan.",
        "points": [
          "Olahraga/Game: Sakkaa o shimasu (Bermain sepak bola).",
          "Kegiatan/Event: Paatii o shimasu (Mengadakan pesta).",
          "Tugas: Shukudai o shimasu (Mengerjakan PR)."
        ],
        "formula": "[Aktivitas] を します"
      },
      {
        "id": "g6-3",
        "title": "3. 何を しますか (Melakukan Apa?)",
        "desc": "Bentuk tanya untuk mengetahui aktivitas apa yang sedang/akan/telah dilakukan seseorang.",
        "points": [
          "Nani o shimasu ka? (Melakukan apa?)",
          "Getsuyoubi nani o shimasu ka? (Senin melakukan apa?).",
          "Kinou nani o shimashita ka? (Kemarin melakukan apa?) -> Bentuk lampau."
        ],
        "formula": "何を しますか / しましたか"
      },
      {
        "id": "g6-4",
        "title": "4. [Tempat] で Kata Kerja (Tempat Terjadinya Aksi)",
        "desc": "Di Bab 5, partikel DE berarti 'alat transportasi' (Densha de). Di Bab 6, jika dipasangkan dengan TEMPAT, partikel DE berarti 'DI tempat terjadinya aktivitas'. Harus ada aksi nyata yang dilakukan di tempat tersebut.",
        "points": [
          "Resutoran DE gohan o tabemasu. (Makan nasi DI restoran).",
          "Eki DE shinbun o kaimasu. (Membeli koran DI stasiun).",
          "PENTING: Jangan tertukar dengan partikel NI. 'Kyouto ni ikimasu' (Pergi ke Kyoto - arah perpindahan). 'Kyouto de kaimasu' (Membeli barang di Kyoto - aksi)."
        ],
        "formula": "[Tempat] で [Objek] を [Kata Kerja]"
      },
      {
        "id": "g6-5",
        "title": "5. 〜ませんか (Maukah...? / Mengajak Halus)",
        "desc": "Bentuk negatif tanya (Masen ka) digunakan secara sangat sopan untuk mengajak atau menawarkan sesuatu kepada orang lain.",
        "points": [
          "Issho ni Kyouto e ikimasen ka? (Maukah pergi ke Kyoto bersama-sama?)",
          "Kenapa pakai bentuk negatif? Karena dalam budaya Jepang, ini memberi ruang bagi lawan bicara untuk menolak dengan lebih halus (tidak memaksa)."
        ],
        "formula": "[Kata Kerja - masen] か"
      },
      {
        "id": "g6-6",
        "title": "6. 〜ましょう (Ayo... / Let's)",
        "desc": "Bentuk aktif dan positif untuk mengajak (Ayo), menyarankan, atau menyetujui ajakan seseorang dengan antusias.",
        "points": [
          "A: Eiga o mimasen ka? (Maukah menonton film?)",
          "B: Ee, mima-shou! (Ya, ayo kita tonton!)",
          "Chotto yasumimashou (Ayo istirahat sebentar - diucapkan bos ke bawahan, dll)."
        ],
        "formula": "[Kata Kerja - mashou]"
      }
    ],
    "patterns": [
      {
        "jp": "わたしは ジュースを 飲みます。",
        "rom": "Watashi wa juusu o nomimasu.",
        "en": "Saya meminum jus."
      },
      {
        "jp": "駅で 新聞を 買います。",
        "rom": "Eki de shinbun o kaimasu.",
        "en": "Saya membeli koran DI stasiun."
      },
      {
        "jp": "いっしょに 神戸へ 行きませんか。",
        "rom": "Issho ni Koube e ikimasen ka.",
        "en": "Maukah (Anda) pergi ke Kobe bersama-sama?"
      },
      {
        "jp": "ちょっと 休みましょう。",
        "rom": "Chotto yasumimashou.",
        "en": "Ayo beristirahat sejenak."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: Issho ni ikimasen ka (Maukah pergi bersama?)",
      "dialogue": [
        {
          "speaker": "Miller",
          "jp": "佐藤さん、明日 友達と お花見を します。佐藤さんも いっしょに 行きませんか。",
          "rom": "Satou-san, ashita tomodachi to ohanami o shimasu. Satou-san mo issho ni ikimasen ka.",
          "en": "Ibu Sato, besok saya akan melakukan Ohanami (melihat sakura) dengan teman. Maukah Ibu Sato juga pergi bersama-sama?"
        },
        {
          "speaker": "Sato",
          "jp": "いいですね。どこへ 行きますか。",
          "rom": "Ii desu ne. Doko e ikimasu ka.",
          "en": "Terdengar bagus ya. Pergi ke mana?"
        },
        {
          "speaker": "Miller",
          "jp": "大阪城公園です。",
          "rom": "Oosakajou-kouen desu.",
          "en": "Taman Kastil Osaka."
        },
        {
          "speaker": "Sato",
          "jp": "何時に 会いますか。",
          "rom": "Nan-ji ni aimasu ka.",
          "en": "Jam berapa (kita) bertemu?"
        },
        {
          "speaker": "Miller",
          "jp": "１０時に 大阪駅で 会いましょう。",
          "rom": "Juu-ji ni Oosaka-eki de aimashou.",
          "en": "Ayo bertemu di stasiun Osaka pada jam 10."
        },
        {
          "speaker": "Sato",
          "jp": "わかりました。",
          "rom": "Wakarimashita.",
          "en": "Saya mengerti."
        },
        {
          "speaker": "Miller",
          "jp": "じゃ、また 明日。",
          "rom": "Ja, mata ashita.",
          "en": "Kalau begitu, sampai jumpa besok."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Partikel apa yang dipakai untuk 'DI restoran' pada kalimat 'Makan nasi di restoran'?",
        "options": [
          {
            "text": "Ni",
            "correct": false
          },
          {
            "text": "De",
            "correct": true
          },
          {
            "text": "Wa",
            "correct": false
          },
          {
            "text": "E",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Terjemahkan: 'Apakah mau bermain tenis bersama?'\nIssho ni tenisu [   ] shimasen ka.",
        "answer": "o"
      },
      {
        "type": "mcq",
        "question": "[Grammar Check] Bagaimana cara merespon 'Issho ni biiru o nomimasen ka' dengan antusias?",
        "options": [
          {
            "text": "Ee, nomimasen.",
            "correct": false
          },
          {
            "text": "Ee, nomimashita.",
            "correct": false
          },
          {
            "text": "Ee, nomimashou.",
            "correct": true
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] PENTING: Anda 'bertemu' teman. Partikel untuk bertemu bukanlah O, melainkan... (Lihat vocab list)\nTomodachi [   ] aimasu.",
        "answer": "ni"
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Mengajak Makan Siang Bersama",
        "situation": "Mengajak teman kantor makan bersama dan menentukan lokasinya",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "一緒に 昼ご飯を 食べませんか。",
            "rom": "Issho ni hirugohan o tabemasen ka.",
            "en": "Maukah makan siang bersama?"
          },
          {
            "speaker": "B",
            "jp": "ええ、いいですね。食べましょう。",
            "rom": "Ee, ii desu ne. Tabemashou.",
            "en": "Wah, boleh juga ya. Mari kita makan."
          },
          {
            "speaker": "A",
            "jp": "どこで 食べますか。",
            "rom": "Doko de tabemasu ka.",
            "en": "Makan di mana?"
          },
          {
            "speaker": "B",
            "jp": "あの レストランで 食べましょう。",
            "rom": "Ano resutoran de tabemashou.",
            "en": "Mari makan di restoran itu."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Aktivitas Akhir Pekan",
        "situation": "Mengobrol tentang kegiatan yang dilakukan pada hari Minggu kemarin",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "日曜日 何を しましたか。",
            "rom": "Nichiyoubi nani o shimashita ka.",
            "en": "Hari Minggu kemarin melakukan apa?"
          },
          {
            "speaker": "B",
            "jp": "サッカーを しました。それから 映画を 見ました。",
            "rom": "Sakkaa o shimashita. Sorekara eiga o mimashita.",
            "en": "Bermain sepak bola. Setelah itu menonton film."
          },
          {
            "speaker": "A",
            "jp": "そうですか。いいですね。",
            "rom": "Sou desu ka. Ii desu ne.",
            "en": "Oh begitu. Asyik sekali ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menawarkan Minum Kopi (Penolakan Sopan)",
        "situation": "Menawarkan kopi pada tamu, namun tamu menolak dengan halus",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "ロビーで コーヒーを 飲みませんか。",
            "rom": "Robii de koohii o nomimasen ka.",
            "en": "Maukah minum kopi di lobi?"
          },
          {
            "speaker": "B",
            "jp": "すみません、コーヒーは ちょっと...",
            "rom": "Sumimasen, koohii wa chotto...",
            "en": "Maaf, kalau kopi agak kurang..."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r6-1",
        "jp": "お酒を 飲みますか。... いいえ、飲みません。",
        "rom": "Osake o nomimasu ka? ... Iie, nomimasen.",
        "en": "Apakah Anda minum sake? ... Tidak, saya tidak minum."
      },
      {
        "id": "r6-2",
        "jp": "毎朝 何を 食べますか。... パンと 卵を 食べます。",
        "rom": "Maiasa nani o tabemasu ka? ... Pan to tamago o tabemasu.",
        "en": "Setiap pagi makan apa? ... Makan roti dan telur."
      },
      {
        "id": "r6-3",
        "jp": "今朝 何を 食べましたか。... 何も 食べませんでした。",
        "rom": "Kesa nani o tabemashita ka? ... Nani mo tabemasen deshita.",
        "en": "Tadi pagi makan apa? ... Tidak makan apa-apa."
      },
      {
        "id": "r6-4",
        "jp": "土曜日 何を しましたか。... 日本語を 勉強しました。それから 映画を 見ました。",
        "rom": "Doyoubi nani o shimashita ka? ... Nihongo o benkyou shimashita. Sorekara eiga o mimashita.",
        "en": "Hari Sabtu kemarin melakukan apa? ... Belajar bahasa Jepang. Setelah itu menonton film."
      },
      {
        "id": "r6-5",
        "jp": "日曜日 何を しましたか。... 友達と テニスを しました。",
        "rom": "Nichiyoubi nani o shimashita ka? ... Tomodachi to tenisu o shimashita.",
        "en": "Hari Minggu kemarin melakukan apa? ... Bermain tenis dengan teman."
      }
    ]
  },
  {
    "id": 7,
    "title": "Lesson 7: Alat (De) & Transaksi Memberi/Menerima",
    "desc": "Membedah Bab 7. Anda akan belajar menggunakan partikel 'DE' sebagai alat/metode, dan fenomena memberi (Agemasu) serta menerima (Moraimasu) dalam budaya Jepang.",
    "locked": false,
    "vocab": [
      {
        "id": "v7-1",
        "rom": "Kirimasu",
        "kana": "きります",
        "kanji": "切ります",
        "en": "Memotong",
        "audio": ""
      },
      {
        "id": "v7-2",
        "rom": "Okurimasu",
        "kana": "おくります",
        "kanji": "送ります",
        "en": "Mengirim",
        "audio": ""
      },
      {
        "id": "v7-3",
        "rom": "Agemasu",
        "kana": "あげます",
        "kanji": "",
        "en": "Memberi / Memberikan",
        "audio": ""
      },
      {
        "id": "v7-4",
        "rom": "Moraimasu",
        "kana": "もらいます",
        "kanji": "",
        "en": "Menerima / Mendapatkan",
        "audio": ""
      },
      {
        "id": "v7-5",
        "rom": "Kashimasu",
        "kana": "かします",
        "kanji": "貸します",
        "en": "Meminjamkan",
        "audio": ""
      },
      {
        "id": "v7-6",
        "rom": "Karimasu",
        "kana": "かります",
        "kanji": "借ります",
        "en": "Meminjam",
        "audio": ""
      },
      {
        "id": "v7-7",
        "rom": "Oshiemasu",
        "kana": "おしえます",
        "kanji": "教えます",
        "en": "Mengajar / Memberitahu",
        "audio": ""
      },
      {
        "id": "v7-8",
        "rom": "Naraimasu",
        "kana": "ならいます",
        "kanji": "習います",
        "en": "Belajar (menerima ilmu dari orang lain)",
        "audio": ""
      },
      {
        "id": "v7-9",
        "rom": "Kakemasu (denwa o)",
        "kana": "かけます",
        "kanji": "",
        "en": "Menelepon",
        "audio": ""
      },
      {
        "id": "v7-10",
        "rom": "Te",
        "kana": "て",
        "kanji": "手",
        "en": "Tangan",
        "audio": ""
      },
      {
        "id": "v7-11",
        "rom": "Hashi",
        "kana": "はし",
        "kanji": "",
        "en": "Sumpit",
        "audio": ""
      },
      {
        "id": "v7-12",
        "rom": "Supuun",
        "kana": "スプーン",
        "kanji": "",
        "en": "Sendok",
        "audio": ""
      },
      {
        "id": "v7-13",
        "rom": "Naifu",
        "kana": "ナイフ",
        "kanji": "",
        "en": "Pisau",
        "audio": ""
      },
      {
        "id": "v7-14",
        "rom": "Fooku",
        "kana": "フォーク",
        "kanji": "",
        "en": "Garpu",
        "audio": ""
      },
      {
        "id": "v7-15",
        "rom": "Hasami",
        "kana": "はさみ",
        "kanji": "",
        "en": "Gunting",
        "audio": ""
      },
      {
        "id": "v7-16",
        "rom": "Fakusu",
        "kana": "ファクス",
        "kanji": "",
        "en": "Faks",
        "audio": ""
      },
      {
        "id": "v7-17",
        "rom": "Waapuro",
        "kana": "ワープロ",
        "kanji": "",
        "en": "Mesin ketik (Word Processor)",
        "audio": ""
      },
      {
        "id": "v7-18",
        "rom": "Pasokon",
        "kana": "パソコン",
        "kanji": "",
        "en": "PC / Laptop (Personal Computer)",
        "audio": ""
      },
      {
        "id": "v7-19",
        "rom": "Panchi",
        "kana": "パンチ",
        "kanji": "",
        "en": "Pembolong kertas",
        "audio": ""
      },
      {
        "id": "v7-20",
        "rom": "Hotchikisu",
        "kana": "ホッチキス",
        "kanji": "",
        "en": "Staples (Stapler)",
        "audio": ""
      },
      {
        "id": "v7-21",
        "rom": "Seroteepu",
        "kana": "セロテープ",
        "kanji": "",
        "en": "Selotip",
        "audio": ""
      },
      {
        "id": "v7-22",
        "rom": "Keshigomu",
        "kana": "けしゴム",
        "kanji": "消しゴム",
        "en": "Penghapus",
        "audio": ""
      },
      {
        "id": "v7-23",
        "rom": "Kami",
        "kana": "かみ",
        "kanji": "紙",
        "en": "Kertas",
        "audio": ""
      },
      {
        "id": "v7-24",
        "rom": "Hana",
        "kana": "はな",
        "kanji": "花",
        "en": "Bunga",
        "audio": ""
      },
      {
        "id": "v7-25",
        "rom": "Shatsu",
        "kana": "シャツ",
        "kanji": "",
        "en": "Kemeja",
        "audio": ""
      },
      {
        "id": "v7-26",
        "rom": "Purezento",
        "kana": "プレゼント",
        "kanji": "",
        "en": "Kado / Hadiah",
        "audio": ""
      },
      {
        "id": "v7-27",
        "rom": "Nimotsu",
        "kana": "にもつ",
        "kanji": "荷物",
        "en": "Barang bawaan / Paket",
        "audio": ""
      },
      {
        "id": "v7-28",
        "rom": "Okane",
        "kana": "おかね",
        "kanji": "お金",
        "en": "Uang",
        "audio": ""
      },
      {
        "id": "v7-29",
        "rom": "Kippu",
        "kana": "きっぷ",
        "kanji": "切符",
        "en": "Karcis / Tiket",
        "audio": ""
      },
      {
        "id": "v7-30",
        "rom": "Kurisumasu",
        "kana": "クリスマス",
        "kanji": "",
        "en": "Natal",
        "audio": ""
      },
      {
        "id": "v7-31",
        "rom": "Chichi",
        "kana": "ちち",
        "kanji": "父",
        "en": "Ayah (sendiri)",
        "audio": ""
      },
      {
        "id": "v7-32",
        "rom": "Haha",
        "kana": "はは",
        "kanji": "母",
        "en": "Ibu (sendiri)",
        "audio": ""
      },
      {
        "id": "v7-33",
        "rom": "Otousan",
        "kana": "おとうさん",
        "kanji": "お父さん",
        "en": "Ayah (orang lain / panggilan sopan)",
        "audio": ""
      },
      {
        "id": "v7-34",
        "rom": "Okaasan",
        "kana": "おかあさん",
        "kanji": "お母さん",
        "en": "Ibu (orang lain / panggilan sopan)",
        "audio": ""
      },
      {
        "id": "v7-35",
        "rom": "Mou",
        "kana": "もう",
        "kanji": "",
        "en": "Sudah",
        "audio": ""
      },
      {
        "id": "v7-36",
        "rom": "Mada",
        "kana": "まだ",
        "kanji": "",
        "en": "Belum",
        "audio": ""
      },
      {
        "id": "v7-37",
        "rom": "Korekara",
        "kana": "これからは",
        "kanji": "",
        "en": "Mulai sekarang / Sebentar lagi",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g7-1",
        "title": "1. Alat / Metode で (Dengan Menggunakan)",
        "desc": "Partikel DE berkembang lagi. Sekarang maknanya adalah sarana, alat, atau cara yang digunakan untuk menunaikan sebuah tindakan.",
        "points": [
          "Hashi DE gohan o tabemasu. (Makan nasi MENGGUNAKAN sumpit).",
          "Pasokon DE eiga o mimasu. (Menonton film DI/MENGGUNAKAN laptop).",
          "Nihongo DE hanashimasu. (Berbicara MENGGUNAKAN bahasa Jepang). Bahasa juga dihitung sebagai 'alat' komunikasi."
        ],
        "formula": "[Alat/Benda] で Kata Kerja",
        "native_note": "Di kalangan anak muda, kata terima kasih 'Thank you' diserap menjadi kata gaul 'Sankyuu' (サンキュー). Kata 'Arigatou' adalah bentuk kasual standar, sedangkan 'Arigatou gozaimasu' ditujukan kepada atasan atau orang yang lebih tua."
      },
      {
        "id": "g7-2",
        "title": "2. 〜は 〜語で 何ですか (Menanyakan Kosakata Bahasa)",
        "desc": "Pola paling wajib dihafal bagi pemula untuk menanyakan terjemahan bahasa.",
        "points": [
          "'Arigatou' wa Eigo de nan desu ka. ('Arigatou' dalam bahasa Inggris apa?) -> 'Thank you' desu.",
          "'Thank you' wa Nihongo de nan desu ka. ('Thank you' dalam bahasa Jepang apa?) -> 'Arigatou' desu."
        ],
        "formula": "[Kata/Frasa] は [Nama Bahasa]語で 何ですか"
      },
      {
        "id": "g7-3",
        "title": "3. あげます (Memberikan ke Orang Lain)",
        "desc": "Konsep memberi (barang/jasa) yang arah panahnya KELUAR menjauhi diri pembicara. Anda memberi kepada orang lain.",
        "points": [
          "Watashi wa Kimura-san NI hana o agemasu. (Saya memberi bunga KEPADA Bu Kimura).",
          "Sama halnya dengan kata kerja aksi searah lain: Kashimasu (Meminjamkan), Oshiemasu (Mengajari).",
          "Partikel NI digunakan sebagai penanda TARGET PENERIMA."
        ],
        "formula": "[Subjek] は [Penerima] に [Benda] を あげます"
      },
      {
        "id": "g7-4",
        "title": "4. もらいます (Menerima dari Orang Lain)",
        "desc": "Konsep menerima sesuatu yang arah panahnya MASUK menuju diri pembicara.",
        "points": [
          "Watashi wa Karina-san NI (atau KARA) chokoreeto o moraimashita. (Saya menerima cokelat DARI Bu Karina).",
          "Sama dengan: Karimasu (Meminjam dari orang), Naraimasu (Menerima ilmu/Belajar dari guru).",
          "Partikel NI atau KARA digunakan untuk penanda SUMBER PEMBERI."
        ],
        "formula": "[Subjek] は [Sumber/Pemberi] に/から [Benda] を もらいます"
      },
      {
        "id": "g7-5",
        "title": "5. もう V-ました / まだです (Sudah & Belum)",
        "desc": "Kata MOU (sudah) menandakan aksi tersebut telah rampung, jadi kata kerjanya wajib diakhiri dengan -mashita.",
        "points": [
          "A: Mou bangohan o tabemashita ka. (Apakah SUDAH makan malam?)",
          "B (Sudah): Hai, mou tabemashita. (Ya, sudah makan).",
          "B (Belum): Iie, mada desu. (Tidak, belum).",
          "PENTING: Jangan dijawab dengan 'tabemasen deshita' (tidak makan tadinya). Harus 'mada desu' (belum) jika niatnya akan makan nanti."
        ],
        "formula": "もう V-ましたか -> はい、もう V-ました / いいえ、まだです"
      }
    ],
    "patterns": [
      {
        "jp": "パソコンで 手紙を 書きます。",
        "rom": "Pasokon de tegami o kakimasu.",
        "en": "Saya menulis surat MENGGUNAKAN laptop/PC."
      },
      {
        "jp": "「ありがとう」は 英語で 何ですか。",
        "rom": "'Arigatou' wa Eigo de nan desu ka.",
        "en": "'Arigatou' dalam bahasa Inggris apa?"
      },
      {
        "jp": "わたしは 木村さんに 花を あげます。",
        "rom": "Watashi wa Kimura-san ni hana o agemasu.",
        "en": "Saya memberikan bunga KEPADA ibu Kimura."
      },
      {
        "jp": "わたしは カリナさんに チョコレートを もらいました。",
        "rom": "Watashi wa Karina-san ni chokoreeto o moraimashita.",
        "en": "Saya (telah) menerima cokelat DARI sdr. Karina."
      },
      {
        "jp": "もう 昼ごはんを 食べましたか。",
        "rom": "Mou hirugohan o tabemashita ka.",
        "en": "Apakah (kamu) SUDAH makan siang?"
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: ごめんください (Permisi - Bertamu ke Rumah)",
      "dialogue": [
        {
          "speaker": "Yamada",
          "jp": "ごめんください。",
          "rom": "Gomen kudasai.",
          "en": "Permisi (diucapkan tamu dari luar pintu rumah)."
        },
        {
          "speaker": "Santos",
          "jp": "いらっしゃい。どうぞ お上がり ください。",
          "rom": "Irasshai. Douzo oagari kudasai.",
          "en": "Selamat datang. Silakan naik/masuk."
        },
        {
          "speaker": "Yamada",
          "jp": "失礼します。",
          "rom": "Shitsurei shimasu.",
          "en": "Permisi (masuk ruangan orang)."
        },
        {
          "speaker": "Santos",
          "jp": "コーヒーは いかがですか。",
          "rom": "Koohii wa ikaga desu ka.",
          "en": "Bagaimana kalau (saya buatkan) kopi?"
        },
        {
          "speaker": "Yamada",
          "jp": "ありがとう ございます。",
          "rom": "Arigatou gozaimasu.",
          "en": "Terima kasih banyak."
        },
        {
          "speaker": "Santos",
          "jp": "どうぞ。",
          "rom": "Douzo.",
          "en": "Silakan (menyuguhkan kopi)."
        },
        {
          "speaker": "Yamada",
          "jp": "いただきます。…この スプーン、すてきですね。",
          "rom": "Itadakimasu... Kono supuun, suteki desu ne.",
          "en": "(Selamat makan/minum)... Sendok ini, bagus/indah ya."
        },
        {
          "speaker": "Santos",
          "jp": "ええ。会社の人に もらいました。ヨーロッパの お土産です。",
          "rom": "Ee. Kaisha no hito ni moraimashita. Yooroppa no omiyage desu.",
          "en": "Iya. Saya mendapatkannya (menerima) DARI orang kantor. Oleh-oleh dari Eropa."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Jika Anda memotong kertas MENGGUNAKAN gunting, partikel apa yang dipakai setelah 'Hasami' (gunting)?",
        "options": [
          {
            "text": "Ni",
            "correct": false
          },
          {
            "text": "De",
            "correct": true
          },
          {
            "text": "O",
            "correct": false
          },
          {
            "text": "To",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Terjemahkan: 'Saya meminjam buku DARI guru (sensei)'.\nWatashi wa sensei [     ] hon o karimashita.",
        "answer": "ni"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] Pertanyaan: 'Mou tabemashita ka?' Jika Anda BELUM makan, jawaban yang paling pantas adalah:",
        "options": [
          {
            "text": "Iie, tabemasen deshita.",
            "correct": false
          },
          {
            "text": "Iie, mada desu.",
            "correct": true
          },
          {
            "text": "Iie, tabemasen.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] Anda ingin tahu bahasa Jepangnya kata 'Thank you'.\n'Thank you' wa Nihongo [     ] nan desu ka.",
        "answer": "de"
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Terjemahan Kata",
        "situation": "Bertanya cara mengucapkan suatu frasa asing dalam bahasa Jepang",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "「Thank you」は 日本語で 何ですか。",
            "rom": "\"Thank you\" wa Nihongo de nan desu ka.",
            "en": "Apa bahasa Jepangnya \"Thank you\"?"
          },
          {
            "speaker": "B",
            "jp": "「ありがとう」です。",
            "rom": "\"Arigatou\" desu.",
            "en": "\"Arigatou\"."
          },
          {
            "speaker": "A",
            "jp": "「ありがとう」ですか。わかりました。",
            "rom": "\"Arigatou\" desu ka. Wakarimashita.",
            "en": "\"Arigatou\" ya. Saya mengerti."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Pengirim Hadiah",
        "situation": "Mengagumi barang indah milik teman dan menanyakan dari siapa ia memperolehnya",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "素敵な ネクタイですね。",
            "rom": "Suteki na nekutai desu ne.",
            "en": "Dasi yang sangat keren/indah ya."
          },
          {
            "speaker": "B",
            "jp": "ありがとうございます。誕生日に 彼女に もらいました。",
            "rom": "Arigatou gozaimasu. Tanjoubi ni kanojo ni moraimashita.",
            "en": "Terima kasih banyak. Saya mendapatkannya dari pacar saya saat ulang tahun."
          },
          {
            "speaker": "A",
            "jp": "そうですか。いいですね。",
            "rom": "Sou desu ka. Ii desu ne.",
            "en": "Oh begitu. Bagus sekali ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Progres Laporan",
        "situation": "Bertanya apakah laporan kerja sudah selesai ditulis",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "もう レポートを 書きましたか。",
            "rom": "Mou repooto o kakimashita ka.",
            "en": "Apakah Anda sudah menulis laporan?"
          },
          {
            "speaker": "B",
            "jp": "いいえ、まだです。これから 書きます。",
            "rom": "Iie, mada desu. Korekara kakimasu.",
            "en": "Belum, masih belum. Mulai sekarang saya mau menulis."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r7-1",
        "jp": "日本語を テレビで 勉強しましたか。... いいえ、ラジオで 勉強しました。",
        "rom": "Nihongo o terebi de benkyou shimashita ka? ... Iie, rajio de benkyou shimashita.",
        "en": "Apakah Anda belajar bahasa Jepang lewat TV? ... Bukan, saya belajar lewat radio."
      },
      {
        "id": "r7-2",
        "jp": "日本語で レポートを 書きますか。... いいえ、英語で 書きます。",
        "rom": "Nihongo de repooto o kakimasu ka? ... Iie, eigo de kakimasu.",
        "en": "Apakah Anda menulis laporan dalam bahasa Jepang? ... Tidak, saya menulis dalam bahasa Inggris."
      },
      {
        "id": "r7-3",
        "jp": "「Thank you」は 日本語で 何ですか。... 「ありがとう」です。",
        "rom": "\"Thank you\" wa Nihongo de nan desu ka? ... \"Arigatou\" desu.",
        "en": "Apa bahasa Jepangnya \"Thank you\"? ... \"Arigatou\"."
      },
      {
        "id": "r7-4",
        "jp": "だれに 年賀状を 書きますか。... 先生と 友達に 書きます。",
        "rom": "Dare ni nengajou o kakimasu ka? ... Sensei to tomodachi ni kakimasu.",
        "en": "Kepada siapa Anda menulis kartu tahun baru? ... Kepada guru dan teman."
      },
      {
        "id": "r7-5",
        "jp": "もう お昼ご飯を 食べましたか。... はい、もう 食べました。",
        "rom": "Mou ohirugohan o tabemashita ka? ... Hai, mou tabemashita.",
        "en": "Apakah Anda sudah makan siang? ... Ya, sudah makan."
      }
    ]
  },
  {
    "id": 8,
    "title": "Lesson 8: Kata Sifat (I-Adjective & Na-Adjective)",
    "desc": "Membedah Bab 8. Anda akan belajar dua jenis kata sifat bahasa Jepang beserta seluruh aturan konjugasinya (positif, negatif, lampau), cara mendeskripsikan benda, dan cara bertanya pendapat seseorang.",
    "locked": false,
    "vocab": [
      {
        "id": "v8-1",
        "rom": "Ookii",
        "kana": "おおきい",
        "kanji": "大きい",
        "en": "Besar",
        "audio": ""
      },
      {
        "id": "v8-2",
        "rom": "Chiisai",
        "kana": "ちいさい",
        "kanji": "小さい",
        "en": "Kecil",
        "audio": ""
      },
      {
        "id": "v8-3",
        "rom": "Atarashii",
        "kana": "あたらしい",
        "kanji": "新しい",
        "en": "Baru",
        "audio": ""
      },
      {
        "id": "v8-4",
        "rom": "Furui",
        "kana": "ふるい",
        "kanji": "古い",
        "en": "Tua / Usang (untuk benda, BUKAN orang)",
        "audio": ""
      },
      {
        "id": "v8-5",
        "rom": "Ii / Yoi",
        "kana": "いい / よい",
        "kanji": "",
        "en": "Bagus / Baik (Konjugasinya IRREGULIER)",
        "audio": ""
      },
      {
        "id": "v8-6",
        "rom": "Warui",
        "kana": "わるい",
        "kanji": "悪い",
        "en": "Buruk / Jelek",
        "audio": ""
      },
      {
        "id": "v8-7",
        "rom": "Atsui",
        "kana": "あつい",
        "kanji": "暑い",
        "en": "Panas (cuaca/suhu udara)",
        "audio": ""
      },
      {
        "id": "v8-8",
        "rom": "Samui",
        "kana": "さむい",
        "kanji": "寒い",
        "en": "Dingin (cuaca/suhu udara)",
        "audio": ""
      },
      {
        "id": "v8-9",
        "rom": "Atsui",
        "kana": "あつい",
        "kanji": "熱い",
        "en": "Panas (benda: sup, air, dll)",
        "audio": ""
      },
      {
        "id": "v8-10",
        "rom": "Tsumetai",
        "kana": "つめたい",
        "kanji": "冷たい",
        "en": "Dingin (benda: air es, dll)",
        "audio": ""
      },
      {
        "id": "v8-11",
        "rom": "Takai",
        "kana": "たかい",
        "kanji": "高い",
        "en": "Mahal / Tinggi",
        "audio": ""
      },
      {
        "id": "v8-12",
        "rom": "Yasui",
        "kana": "やすい",
        "kanji": "安い",
        "en": "Murah",
        "audio": ""
      },
      {
        "id": "v8-13",
        "rom": "Hikui",
        "kana": "ひくい",
        "kanji": "低い",
        "en": "Rendah",
        "audio": ""
      },
      {
        "id": "v8-14",
        "rom": "Omoshiroi",
        "kana": "おもしろい",
        "kanji": "面白い",
        "en": "Menarik / Lucu",
        "audio": ""
      },
      {
        "id": "v8-15",
        "rom": "Tsumaranai",
        "kana": "つまらない",
        "kanji": "",
        "en": "Membosankan",
        "audio": ""
      },
      {
        "id": "v8-16",
        "rom": "Oishii",
        "kana": "おいしい",
        "kanji": "",
        "en": "Enak / Lezat",
        "audio": ""
      },
      {
        "id": "v8-17",
        "rom": "Mazui",
        "kana": "まずい",
        "kanji": "",
        "en": "Tidak enak (rasa)",
        "audio": ""
      },
      {
        "id": "v8-18",
        "rom": "Isogashii",
        "kana": "いそがしい",
        "kanji": "忙しい",
        "en": "Sibuk",
        "audio": ""
      },
      {
        "id": "v8-19",
        "rom": "Tanoshii",
        "kana": "たのしい",
        "kanji": "楽しい",
        "en": "Menyenangkan",
        "audio": ""
      },
      {
        "id": "v8-20",
        "rom": "Muzukashii",
        "kana": "むずかしい",
        "kanji": "難しい",
        "en": "Sulit",
        "audio": ""
      },
      {
        "id": "v8-21",
        "rom": "Yasashii",
        "kana": "やさしい",
        "kanji": "優しい",
        "en": "Mudah / Lembut / Baik hati",
        "audio": ""
      },
      {
        "id": "v8-22",
        "rom": "Hiroi",
        "kana": "ひろい",
        "kanji": "広い",
        "en": "Luas",
        "audio": ""
      },
      {
        "id": "v8-23",
        "rom": "Semai",
        "kana": "せまい",
        "kanji": "狭い",
        "en": "Sempit",
        "audio": ""
      },
      {
        "id": "v8-24",
        "rom": "Wakai",
        "kana": "わかい",
        "kanji": "若い",
        "en": "Muda (untuk ORANG)",
        "audio": ""
      },
      {
        "id": "v8-25",
        "rom": "Nagai",
        "kana": "ながい",
        "kanji": "長い",
        "en": "Panjang",
        "audio": ""
      },
      {
        "id": "v8-26",
        "rom": "Mijikai",
        "kana": "みじかい",
        "kanji": "短い",
        "en": "Pendek (benda, bukan orang)",
        "audio": ""
      },
      {
        "id": "v8-27",
        "rom": "Akai / Shiroi / Kuroi / Aoi",
        "kana": "あかい / しろい / くろい / あおい",
        "kanji": "赤い/白い/黒い/青い",
        "en": "Merah / Putih / Hitam / Biru",
        "audio": ""
      },
      {
        "id": "v8-28",
        "rom": "Kirei (na)",
        "kana": "きれい",
        "kanji": "",
        "en": "Cantik / Bersih (Na-Adj! Jebakan!)",
        "audio": ""
      },
      {
        "id": "v8-29",
        "rom": "Shizuka (na)",
        "kana": "しずか",
        "kanji": "静か",
        "en": "Tenang / Sepi",
        "audio": ""
      },
      {
        "id": "v8-30",
        "rom": "Nigiyaka (na)",
        "kana": "にぎやか",
        "kanji": "",
        "en": "Ramai / Meriah",
        "audio": ""
      },
      {
        "id": "v8-31",
        "rom": "Yuumei (na)",
        "kana": "ゆうめい",
        "kanji": "有名",
        "en": "Terkenal",
        "audio": ""
      },
      {
        "id": "v8-32",
        "rom": "Shinsetsu (na)",
        "kana": "しんせつ",
        "kanji": "親切",
        "en": "Ramah / Baik hati",
        "audio": ""
      },
      {
        "id": "v8-33",
        "rom": "Genki (na)",
        "kana": "げんき",
        "kanji": "元気",
        "en": "Sehat / Bersemangat",
        "audio": ""
      },
      {
        "id": "v8-34",
        "rom": "Hima (na)",
        "kana": "ひま",
        "kanji": "暇",
        "en": "Senggang / Luang",
        "audio": ""
      },
      {
        "id": "v8-35",
        "rom": "Benri (na)",
        "kana": "べんり",
        "kanji": "便利",
        "en": "Praktis / Nyaman",
        "audio": ""
      },
      {
        "id": "v8-36",
        "rom": "Taihen (na)",
        "kana": "たいへん",
        "kanji": "大変",
        "en": "Susah / Melelahkan / Gawat",
        "audio": ""
      },
      {
        "id": "v8-37",
        "rom": "Suki (na)",
        "kana": "すき",
        "kanji": "好き",
        "en": "Suka",
        "audio": ""
      },
      {
        "id": "v8-38",
        "rom": "Kirai (na)",
        "kana": "きらい",
        "kanji": "嫌い",
        "en": "Benci / Tidak suka",
        "audio": ""
      },
      {
        "id": "v8-39",
        "rom": "Machi",
        "kana": "まち",
        "kanji": "町",
        "en": "Kota",
        "audio": ""
      },
      {
        "id": "v8-40",
        "rom": "Tokoro",
        "kana": "ところ",
        "kanji": "所",
        "en": "Tempat",
        "audio": ""
      },
      {
        "id": "v8-41",
        "rom": "Seikatsu",
        "kana": "せいかつ",
        "kanji": "生活",
        "en": "Kehidupan",
        "audio": ""
      },
      {
        "id": "v8-42",
        "rom": "Shigoto",
        "kana": "しごと",
        "kanji": "仕事",
        "en": "Pekerjaan",
        "audio": ""
      },
      {
        "id": "v8-43",
        "rom": "Totemo",
        "kana": "とても",
        "kanji": "",
        "en": "Sangat (Positif)",
        "audio": ""
      },
      {
        "id": "v8-44",
        "rom": "Amari",
        "kana": "あまり",
        "kanji": "",
        "en": "Tidak terlalu (Harus diikuti negatif)",
        "audio": ""
      },
      {
        "id": "v8-45",
        "rom": "Dou",
        "kana": "どう",
        "kanji": "",
        "en": "Bagaimana?",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g8-1",
        "title": "1. Dua Jenis Kata Sifat: い (I) vs な (Na)",
        "desc": "Bahasa Jepang memiliki DUA jenis kata sifat dengan aturan konjugasi yang sangat berbeda. Mengenali jenisnya adalah langkah pertama.",
        "points": [
          "I-Adjective: SELALU berakhiran い (i). Contoh: taka-I (mahal), ooki-I (besar), atsu-I (panas), omoshiro-I (menarik).",
          "Na-Adjective: TIDAK berakhiran い secara gramatikal. Contoh: Kirei, Shizuka, Genki, Hima.",
          "AWAS JEBAKAN KRITIS: 'Kirei' (きれい) dan 'Kirai' (きらい) berakhiran い tapi keduanya adalah Na-Adjective! Harus dihafal mati.",
          "Aturan Emas: Jika ragu, cek kamus. Mayoritas kata Yamato (asli Jepang) yang berakhiran い adalah I-Adj."
        ],
        "formula": "I-Adj: ~い + N / Na-Adj: ~な + N",
        "native_note": "Kata 'Kirei' (きれい) diakhiri dengan huruf 'i', namun ini adalah jebakan klasik! 'Kirei' adalah kata sifat-Na, sehingga bentuk negatifnya adalah 'Kirei ja nai' (bukan kireikunai). Selalu perhatikan pengecualian ini agar tidak salah ucap!"
      },
      {
        "id": "g8-2",
        "title": "2. N は [Adj] です (Mendeskripsikan Topik)",
        "desc": "Kata sifat bisa langsung menjadi predikat (keterangan akhir kalimat) dengan menambahkan 'desu'.",
        "points": [
          "I-Adj: Kono hon wa omoshiroi desu. (Buku ini menarik).",
          "Na-Adj: Osaka wa nigiyaka desu. (Osaka ramai).",
          "Catatan: Untuk I-Adj, 'desu' bersifat formalitas saja (kesopanan). Kata sifat I-Adj sudah lengkap maknanya tanpa 'desu'."
        ],
        "formula": "N は I-Adj です / N は Na-Adj です"
      },
      {
        "id": "g8-3",
        "title": "3. Konjugasi I-Adjective (Negatif & Lampau)",
        "desc": "Konjugasi I-Adj mengubah akhiran い secara langsung. Ini BERBEDA total dengan Na-Adj.",
        "points": [
          "Positif: Takai desu (Mahal).",
          "Negatif: Buang い, tambah くない(です). Takai -> Takaku-nai desu (Tidak mahal).",
          "Lampau: Buang い, tambah かった(です). Takai -> Taka-katta desu (Dulu mahal).",
          "Lampau Negatif: Buang い, tambah くなかった(です). Takai -> Takaku-nakatta desu (Dulu tidak mahal).",
          "PENGECUALIAN PENTING: 'Ii' (bagus) menjadi IRREGULIER! Negatif: Yoku-nai. Lampau: Yokatta. Lampau Negatif: Yoku-nakatta. (Bukan ikunai/ikatta!)"
        ],
        "formula": "~くない / ~かった / ~くなかった | ii -> yokunai/yokatta/yokunakatta"
      },
      {
        "id": "g8-4",
        "title": "4. Konjugasi Na-Adjective (Negatif & Lampau)",
        "desc": "Na-Adj tidak mengubah dirinya sendiri. Yang berubah adalah 'DESU' di belakangnya — sama persis dengan konjugasi kata benda.",
        "points": [
          "Positif: Shizuka desu (Tenang).",
          "Negatif: Shizuka ja arimasen (Tidak tenang).",
          "Lampau: Shizuka deshita (Dulu tenang).",
          "Lampau Negatif: Shizuka ja arimasen deshita (Dulu tidak tenang)."
        ],
        "formula": "~じゃありません / ~でした / ~じゃありませんでした"
      },
      {
        "id": "g8-5",
        "title": "5. Adj + N (Memodifikasi Kata Benda)",
        "desc": "Kata sifat bisa diletakkan SEBELUM kata benda untuk mendeskripsikannya secara langsung (adjective modifier).",
        "points": [
          "I-Adj: Langsung tempel. Ookii kaban (Tas besar). Oishii gohan (Nasi enak).",
          "Na-Adj: Harus menambahkan な sebelum benda. Kirei-NA hana (Bunga cantik). Shizuka-NA machi (Kota sepi).",
          "INGAT: 'na' HANYA muncul saat Na-Adj memodifikasi kata benda. Jika berdiri sendiri sebagai predikat, tanpa 'na'."
        ],
        "formula": "I-Adj + N / Na-Adj + な + N"
      },
      {
        "id": "g8-6",
        "title": "6. どうですか (Bagaimana?) & そして / でも",
        "desc": "Kata tanya untuk meminta pendapat atau kesan umum tentang sesuatu, serta kata sambung.",
        "points": [
          "Nihon no seikatsu wa dou desu ka. (Kehidupan di Jepang bagaimana?)",
          "Tanoshii desu. (Menyenangkan).",
          "Soshite/Demo: Kata sambung. Soshite = Dan/Lalu. Demo = Tetapi/Namun."
        ],
        "formula": "N は どうですか / そして(Dan) / でも(Tapi)"
      }
    ],
    "patterns": [
      {
        "jp": "富士山は 高いです。",
        "rom": "Fujisan wa takai desu.",
        "en": "Gunung Fuji itu tinggi."
      },
      {
        "jp": "この 部屋は あまり 広くないです。",
        "rom": "Kono heya wa amari hiroku-nai desu.",
        "en": "Kamar ini tidak terlalu luas."
      },
      {
        "jp": "奈良は 静かな 町です。",
        "rom": "Nara wa shizuka-na machi desu.",
        "en": "Nara adalah kota yang tenang."
      },
      {
        "jp": "きのうは あまり 暑くなかったです。",
        "rom": "Kinou wa amari atsuku-nakatta desu.",
        "en": "Kemarin tidak terlalu panas."
      },
      {
        "jp": "日本の 生活は どうですか。",
        "rom": "Nihon no seikatsu wa dou desu ka.",
        "en": "Kehidupan di Jepang bagaimana?"
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: どうでしたか (Bagaimana Tadi?)",
      "dialogue": [
        {
          "speaker": "Miller",
          "jp": "きのう 初めて お相撲を 見ました。",
          "rom": "Kinou hajimete osumo o mimashita.",
          "en": "Kemarin pertama kali saya menonton sumo."
        },
        {
          "speaker": "Matsumoto",
          "jp": "そうですか。どうでしたか。",
          "rom": "Sou desu ka. Dou deshita ka.",
          "en": "Oh begitu ya. Bagaimana (tadi)?"
        },
        {
          "speaker": "Miller",
          "jp": "とても おもしろかったです。",
          "rom": "Totemo omoshirokatta desu.",
          "en": "Sangat menarik."
        },
        {
          "speaker": "Matsumoto",
          "jp": "それは よかったですね。",
          "rom": "Sore wa yokatta desu ne.",
          "en": "Syukurlah (itu bagus ya)."
        },
        {
          "speaker": "Miller",
          "jp": "でも、チケットは ちょっと 高かったです。",
          "rom": "Demo, chiketto wa chotto takakatta desu.",
          "en": "Tapi, tiketnya sedikit mahal."
        },
        {
          "speaker": "Matsumoto",
          "jp": "そうですか。いくらでしたか。",
          "rom": "Sou desu ka. Ikura deshita ka.",
          "en": "Oh begitu. Berapa (harganya) tadi?"
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Bentuk NEGATIF dari kata sifat 'Takai' (mahal) adalah:",
        "options": [
          {
            "text": "Takai ja arimasen",
            "correct": false
          },
          {
            "text": "Takakunai desu",
            "correct": true
          },
          {
            "text": "Takainai desu",
            "correct": false
          },
          {
            "text": "Takai dewa arimasen",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Ubah ke bentuk lampau: 'Omoshiroi (menarik)' -> 'Dulu menarik'.\nOmoshiro-[     ] desu.",
        "answer": "katta"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] 'Ii' (bagus) adalah IRREGULIER. Bentuk lampaunya yang benar adalah:",
        "options": [
          {
            "text": "Iikatta",
            "correct": false
          },
          {
            "text": "Yokatta",
            "correct": true
          },
          {
            "text": "Ikatta",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] Isi yang benar: 'Nara adalah kota yang tenang'.\nNara wa shizuka-[   ] machi desu.",
        "answer": "na"
      },
      {
        "type": "mcq",
        "question": "[Jebakan] 'Kirei' (cantik) terlihat berakhiran い. Kategorinya adalah:",
        "options": [
          {
            "text": "I-Adjective",
            "correct": false
          },
          {
            "text": "Na-Adjective",
            "correct": true
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Kesan Kehidupan Baru",
        "situation": "Bertanya kepada orang asing tentang bagaimana rasanya tinggal di Jepang",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "日本の 生活は どうですか。",
            "rom": "Nihon no seikatsu wa dou desu ka.",
            "en": "Bagaimana kehidupan di Jepang?"
          },
          {
            "speaker": "B",
            "jp": "忙しいですが、とても 面白いです。",
            "rom": "Isogashii desu ga, totemo omoshiroi desu.",
            "en": "Sibuk sih, tapi sangat menarik."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Sifat Suatu Kota",
        "situation": "Bertanya tentang karakteristik kota asal lawan bicara",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "奈良は どんな 町ですか。",
            "rom": "Nara wa donna machi desu ka.",
            "en": "Nara itu kota yang seperti apa?"
          },
          {
            "speaker": "B",
            "jp": "静かで、とても 古い 町です。",
            "rom": "Shizuka de, totemo furui machi desu.",
            "en": "Kota yang sepi dan sangat kuno/tua."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menawarkan Teh Hangat pada Tamu",
        "situation": "Menawarkan minuman hangat secara sopan kepada tamu yang baru berkunjung",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "お茶は いかがですか。",
            "rom": "O-cha wa ikaga desu ka.",
            "en": "Bagaimana kalau minum teh?"
          },
          {
            "speaker": "B",
            "jp": "ありがとうございます。いただきます。",
            "rom": "Arigatou gozaimasu. Itadakimasu.",
            "en": "Terima kasih banyak. Saya terima (mari minum)."
          },
          {
            "speaker": "A",
            "jp": "どうぞ。熱いですよ。",
            "rom": "Douzo. Atsui desu yo.",
            "en": "Silakan. Agak panas lho."
          },
          {
            "speaker": "B",
            "jp": "美味しいですね。",
            "rom": "Oishii desu ne.",
            "en": "Enak sekali ya."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r8-1",
        "jp": "桜は きれいですか。... はい、とても きれいです。",
        "rom": "Sakura wa kirei desu ka? ... Hai, totemo kirei desu.",
        "en": "Apakah sakura indah? ... Ya, sangat indah."
      },
      {
        "id": "r8-2",
        "jp": "富士山は 高いですか。... はい、高いです。",
        "rom": "Fujisan wa takai desu ka? ... Hai, takai desu.",
        "en": "Apakah Gunung Fuji tinggi? ... Ya, tinggi."
      },
      {
        "id": "r8-3",
        "jp": "日本の 食べ物は おいしいですか。... はい、おいしいですが、高いです。",
        "rom": "Nihon no tabemono wa oishii desu ka? ... Hai, oishii desu ga, takai desu.",
        "en": "Apakah makanan Jepang enak? ... Ya, enak, tapi mahal."
      },
      {
        "id": "r8-4",
        "jp": "その 辞書は いいですか。... いいえ、あまり よくありません。",
        "rom": "Sono jisho wa ii desu ka? ... Iie, amari yoku arimasen.",
        "en": "Apakah kamus itu bagus? ... Tidak, tidak begitu bagus."
      },
      {
        "id": "r8-5",
        "jp": "日本の 生活に 慣れましたか。... はい、だいたい 慣れました。",
        "rom": "Nihon no seikatsu ni naremashita ka? ... Hai, daitai naremashita.",
        "en": "Apakah sudah terbiasa dengan kehidupan di Jepang? ... Ya, sebagian besar sudah terbiasa."
      }
    ]
  },
  {
    "id": 9,
    "title": "Lesson 9: Suka, Bisa, Mengerti (Ga + Adjective)",
    "desc": "Membedah Bab 9. Anda belajar menyatakan kegemaran (Suki/Kirai), kemampuan (Jouzu/Heta), pemahaman (Wakarimasu), dan cara memberikan alasan dengan KARA. Bab ini memperkenalkan partikel GA yang krusial.",
    "locked": false,
    "vocab": [
      {
        "id": "v9-1",
        "rom": "Suki (na)",
        "kana": "すき",
        "kanji": "好き",
        "en": "Suka (Na-Adj)",
        "audio": ""
      },
      {
        "id": "v9-2",
        "rom": "Daisuki (na)",
        "kana": "だいすき",
        "kanji": "大好き",
        "en": "Sangat suka / Cinta (Na-Adj)",
        "audio": ""
      },
      {
        "id": "v9-3",
        "rom": "Kirai (na)",
        "kana": "きらい",
        "kanji": "嫌い",
        "en": "Benci / Tidak suka (Na-Adj)",
        "audio": ""
      },
      {
        "id": "v9-4",
        "rom": "Daikirai (na)",
        "kana": "だいきらい",
        "kanji": "大嫌い",
        "en": "Sangat benci (Na-Adj)",
        "audio": ""
      },
      {
        "id": "v9-5",
        "rom": "Jouzu (na)",
        "kana": "じょうず",
        "kanji": "上手",
        "en": "Pandai / Mahir (Na-Adj) - untuk orang LAIN",
        "audio": ""
      },
      {
        "id": "v9-6",
        "rom": "Heta (na)",
        "kana": "へた",
        "kanji": "下手",
        "en": "Payah / Tidak mahir (Na-Adj)",
        "audio": ""
      },
      {
        "id": "v9-7",
        "rom": "Wakarimasu",
        "kana": "わかります",
        "kanji": "分かります",
        "en": "Mengerti / Paham (Pakai GA, bukan O!)",
        "audio": ""
      },
      {
        "id": "v9-8",
        "rom": "Arimasu",
        "kana": "あります",
        "kanji": "",
        "en": "Ada / Punya (benda mati)",
        "audio": ""
      },
      {
        "id": "v9-9",
        "rom": "Ongaku",
        "kana": "おんがく",
        "kanji": "音楽",
        "en": "Musik",
        "audio": ""
      },
      {
        "id": "v9-10",
        "rom": "Uta",
        "kana": "うた",
        "kanji": "歌",
        "en": "Lagu / Nyanyian",
        "audio": ""
      },
      {
        "id": "v9-11",
        "rom": "Kurassiku",
        "kana": "クラシック",
        "kanji": "",
        "en": "Musik Klasik",
        "audio": ""
      },
      {
        "id": "v9-12",
        "rom": "Jazu",
        "kana": "ジャズ",
        "kanji": "",
        "en": "Jazz",
        "audio": ""
      },
      {
        "id": "v9-13",
        "rom": "Dansu",
        "kana": "ダンス",
        "kanji": "",
        "en": "Tari / Menari",
        "audio": ""
      },
      {
        "id": "v9-14",
        "rom": "Ryouri",
        "kana": "りょうり",
        "kanji": "料理",
        "en": "Masakan / Memasak",
        "audio": ""
      },
      {
        "id": "v9-15",
        "rom": "Supootsu",
        "kana": "スポーツ",
        "kanji": "",
        "en": "Olahraga",
        "audio": ""
      },
      {
        "id": "v9-16",
        "rom": "Oyogi",
        "kana": "およぎ",
        "kanji": "泳ぎ",
        "en": "Berenang (kata benda)",
        "audio": ""
      },
      {
        "id": "v9-17",
        "rom": "E",
        "kana": "え",
        "kanji": "絵",
        "en": "Lukisan / Gambar",
        "audio": ""
      },
      {
        "id": "v9-18",
        "rom": "Ji",
        "kana": "じ",
        "kanji": "字",
        "en": "Huruf / Tulisan tangan",
        "audio": ""
      },
      {
        "id": "v9-19",
        "rom": "Kanji",
        "kana": "かんじ",
        "kanji": "漢字",
        "en": "Huruf Kanji (China)",
        "audio": ""
      },
      {
        "id": "v9-20",
        "rom": "Hiragana",
        "kana": "ひらがな",
        "kanji": "",
        "en": "Huruf Hiragana",
        "audio": ""
      },
      {
        "id": "v9-21",
        "rom": "Katakana",
        "kana": "カタカナ",
        "kanji": "",
        "en": "Huruf Katakana",
        "audio": ""
      },
      {
        "id": "v9-22",
        "rom": "Kotoba",
        "kana": "ことば",
        "kanji": "言葉",
        "en": "Kata / Bahasa",
        "audio": ""
      },
      {
        "id": "v9-23",
        "rom": "Mono",
        "kana": "もの",
        "kanji": "物",
        "en": "Benda / Barang",
        "audio": ""
      },
      {
        "id": "v9-24",
        "rom": "Anime",
        "kana": "アニメ",
        "kanji": "",
        "en": "Anime",
        "audio": ""
      },
      {
        "id": "v9-25",
        "rom": "Jikan",
        "kana": "じかん",
        "kanji": "時間",
        "en": "Waktu",
        "audio": ""
      },
      {
        "id": "v9-26",
        "rom": "Yoku",
        "kana": "よく",
        "kanji": "",
        "en": "Sering / Dengan baik",
        "audio": ""
      },
      {
        "id": "v9-27",
        "rom": "Daitai",
        "kana": "だいたい",
        "kanji": "",
        "en": "Kira-kira / Kurang lebih",
        "audio": ""
      },
      {
        "id": "v9-28",
        "rom": "Sukoshi",
        "kana": "すこし",
        "kanji": "少し",
        "en": "Sedikit",
        "audio": ""
      },
      {
        "id": "v9-29",
        "rom": "Zenzen",
        "kana": "ぜんぜん",
        "kanji": "全然",
        "en": "Sama sekali tidak (WAJIB + negatif)",
        "audio": ""
      },
      {
        "id": "v9-30",
        "rom": "Takusan",
        "kana": "たくさん",
        "kanji": "",
        "en": "Banyak",
        "audio": ""
      },
      {
        "id": "v9-31",
        "rom": "Hayaku",
        "kana": "はやく",
        "kanji": "早く",
        "en": "Cepat / Lebih awal",
        "audio": ""
      },
      {
        "id": "v9-32",
        "rom": "Donna",
        "kana": "どんな",
        "kanji": "",
        "en": "Jenis apa / Seperti apa?",
        "audio": ""
      },
      {
        "id": "v9-33",
        "rom": "Doushite",
        "kana": "どうして",
        "kanji": "",
        "en": "Mengapa / Kenapa?",
        "audio": ""
      },
      {
        "id": "v9-34",
        "rom": "Kara",
        "kana": "から",
        "kanji": "",
        "en": "Karena (di AKHIR klausa alasan)",
        "audio": ""
      },
      {
        "id": "v9-35",
        "rom": "Zannen (na)",
        "kana": "ざんねん",
        "kanji": "残念",
        "en": "Sayang sekali / Disayangkan",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g9-1",
        "title": "1. N が すきです / きらいです (Suka / Benci)",
        "desc": "Perubahan besar: Untuk menyatakan preferensi (suka/benci), partikel yang digunakan bukan は (WA) melainkan が (GA). GA menandai OBJEK dari perasaan.",
        "points": [
          "Watashi wa ongaku GA suki desu. (Saya suka musik).",
          "Perhatikan: 'Watashi wa' tetap wa (topik), tapi 'ongaku' memakai GA karena musik adalah OBJEK dari rasa suka.",
          "Tingkatan Preferensi: Daisuki (Sangat suka) -> Suki (Suka) -> Amari suki ja arimasen (Kurang suka) -> Kirai (Benci) -> Daikirai (Sangat benci).",
          "Poin Kritis: 'Suki' dan 'Kirai' adalah Na-Adjective, BUKAN kata kerja. Jadi konjugasi negatifnya adalah 'suki ja arimasen', bukan 'sukimasen'."
        ],
        "formula": "N は [Objek Perasaan] が すき / きらい です",
        "native_note": "Kata 'Suki' (Suka) dapat diubah menjadi sangat kasual dengan hanya mengucapkan 'Suki?' dengan nada naik di akhir untuk bertanya. Untuk memberi penekanan emosional yang tinggi, native speaker lebih suka memakai kata 'Daisuki' (Sangat suka) dalam percakapan akrab."
      },
      {
        "id": "g9-2",
        "title": "2. N が じょうずです / へたです (Mahir / Payah)",
        "desc": "Pola yang sama persis dengan suka/benci. Partikel GA menandai OBJEK kemahiran.",
        "points": [
          "Karina-san wa Nihongo GA jouzu desu. (Bu Karina mahir bahasa Jepang).",
          "CATATAN BUDAYA KRUSIAL: JANGAN PERNAH pakai 'jouzu' untuk diri sendiri. Itu dianggap sombong berat dalam budaya Jepang.",
          "Untuk diri sendiri, rendah hati: 'Mada mada desu' (Masih jauh). Atau gunakan batas bawah: 'Sukoshi dekimasu' (Sedikit bisa).",
          "Pasangan: Jouzu (Mahir) <-> Heta (Payah/Tidak mahir)."
        ],
        "formula": "N は [Keahlian] が じょうず / へた です"
      },
      {
        "id": "g9-3",
        "title": "3. N が わかります (Mengerti/Paham)",
        "desc": "Kata kerja 'wakarimasu' (mengerti) juga menggunakan partikel GA, bukan O. Ini salah satu kesalahan paling umum bagi pemula.",
        "points": [
          "BENAR: Nihongo GA wakarimasu. (Mengerti bahasa Jepang).",
          "SALAH: Nihongo O wakarimasu. (Ini error gramatikal berat).",
          "Tingkatan: Yoku wakarimasu (Betul-betul mengerti) -> Daitai wakarimasu (Kurang-lebih mengerti) -> Sukoshi wakarimasu (Sedikit mengerti) -> Zenzen wakarimasen (Sama sekali tidak mengerti)."
        ],
        "formula": "[Objek Pemahaman] が わかります"
      },
      {
        "id": "g9-4",
        "title": "4. N が あります (Punya/Ada)",
        "desc": "Kata kerja 'Arimasu' saat digunakan dengan partikel GA juga bisa berarti 'PUNYA' (kepemilikan), bukan hanya 'Ada' (keberadaan).",
        "points": [
          "Okane ga arimasu. (Punya uang / Ada uang).",
          "Jikan ga arimasen. (Tidak punya waktu).",
          "Konteks: Di Bab 10, Arimasu akan dibahas untuk keberadaan (Ada di lokasi). Di sini fokusnya pada kepemilikan abstrak."
        ],
        "formula": "[Benda] が あります / ありません"
      },
      {
        "id": "g9-5",
        "title": "5. どんな N (Jenis Apa / Seperti Apa?)",
        "desc": "Kata tanya untuk menanyakan jenis, karakteristik, atau tipe sesuatu secara spesifik.",
        "points": [
          "Donna ongaku ga suki desu ka. (Jenis musik APA yang kamu suka?)",
          "Jazu ga suki desu. (Saya suka Jazz).",
          "Donna supootsu ga dekimasu ka. (Olahraga jenis APA yang bisa kamu lakukan?)"
        ],
        "formula": "どんな [Kategori] が すきですか"
      },
      {
        "id": "g9-6",
        "title": "6. どうして... からです (Kenapa... Karena)",
        "desc": "Untuk menanyakan alasan (Doushite) dan memberikan jawaban dengan KARA (karena). Perhatikan bahwa urutan KARA berbeda dari bahasa Indonesia.",
        "points": [
          "A: Doushite kinou yasumimashita ka. (Kenapa kemarin libur?)",
          "B: Atama ga itai desu KARA. (KARENA kepala saya sakit).",
          "KARA (karena) ditaruh DI AKHIR klausa alasan, kebalikan dari bahasa Indonesia ('Karena sakit kepala').",
          "Bentuk lain: [Kalimat alasan] kara, [Kalimat hasil]. Contoh: Jikan ga arimasen kara, ikimasen. (Karena tidak punya waktu, tidak pergi)."
        ],
        "formula": "[Alasan kalimat lengkap] から、[Hasil/Keputusan]。"
      }
    ],
    "patterns": [
      {
        "jp": "わたしは イタリア料理が 好きです。",
        "rom": "Watashi wa Itaria-ryouri ga suki desu.",
        "en": "Saya suka masakan Italia."
      },
      {
        "jp": "カリナさんは 日本語が 上手です。",
        "rom": "Karina-san wa Nihongo ga jouzu desu.",
        "en": "Bu Karina mahir bahasa Jepang."
      },
      {
        "jp": "漢字が 少し わかります。",
        "rom": "Kanji ga sukoshi wakarimasu.",
        "en": "Saya sedikit mengerti Kanji."
      },
      {
        "jp": "どんな スポーツが 好きですか。",
        "rom": "Donna supootsu ga suki desu ka.",
        "en": "Jenis olahraga apa yang kamu suka?"
      },
      {
        "jp": "どうして 食べませんか。…おなかが 痛いですから。",
        "rom": "Doushite tabemasen ka. ...Onaka ga itai desu kara.",
        "en": "Kenapa tidak makan? ...Karena perut saya sakit."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: 残念ですね (Sayang Sekali Ya)",
      "dialogue": [
        {
          "speaker": "Miller",
          "jp": "もうすぐ 祇園祭ですね。",
          "rom": "Mousugu Gion-matsuri desu ne.",
          "en": "Sebentar lagi festival Gion ya."
        },
        {
          "speaker": "Santos",
          "jp": "ミラーさんは もう 見ましたか。",
          "rom": "Miraa-san wa mou mimashita ka.",
          "en": "Pak Miller sudah pernah melihat (festival itu)?"
        },
        {
          "speaker": "Miller",
          "jp": "いいえ、まだです。サントスさんは？",
          "rom": "Iie, mada desu. Santosu-san wa?",
          "en": "Belum. Pak Santos?"
        },
        {
          "speaker": "Santos",
          "jp": "わたしも まだです。いっしょに 行きませんか。",
          "rom": "Watashi mo mada desu. Issho ni ikimasen ka.",
          "en": "Saya juga belum. Maukah pergi bersama?"
        },
        {
          "speaker": "Miller",
          "jp": "いいですね。いつですか。",
          "rom": "Ii desu ne. Itsu desu ka.",
          "en": "Bagus ya. Kapan?"
        },
        {
          "speaker": "Santos",
          "jp": "７月１７日です。",
          "rom": "Shichigatsu juushichinichi desu.",
          "en": "17 Juli."
        },
        {
          "speaker": "Miller",
          "jp": "あ、１７日は ちょっと…。",
          "rom": "A, juushichinichi wa chotto...",
          "en": "Ah, tanggal 17 sedikit (bermasalah)..."
        },
        {
          "speaker": "Santos",
          "jp": "そうですか。残念ですね。",
          "rom": "Sou desu ka. Zannen desu ne.",
          "en": "Oh begitu ya. Sayang sekali."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Partikel apa yang digunakan untuk menandai objek dari kata 'suki' (suka)?",
        "options": [
          {
            "text": "を (O)",
            "correct": false
          },
          {
            "text": "が (GA)",
            "correct": true
          },
          {
            "text": "は (WA)",
            "correct": false
          },
          {
            "text": "に (NI)",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Jawab: 'Kenapa tidak pergi?' -> 'Karena saya sibuk.'\nIsogashii desu [     ].",
        "answer": "kara"
      },
      {
        "type": "mcq",
        "question": "[Budaya] Anda dipuji 'Nihongo ga jouzu desu ne!' oleh orang Jepang. Balasan paling sopan dan tepat secara budaya adalah:",
        "options": [
          {
            "text": "Hai, jouzu desu. (Ya, saya mahir.)",
            "correct": false
          },
          {
            "text": "Arigatou gozaimasu. Jouzu desu. (Terima kasih. Saya memang mahir.)",
            "correct": false
          },
          {
            "text": "Iie, mada mada desu. (Tidak, masih jauh.)",
            "correct": true
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Saya SAMA SEKALI tidak mengerti bahasa Jepang'.\nNihongo ga [       ] wakarimasen.",
        "answer": "zenzen"
      },
      {
        "type": "mcq",
        "question": "[Jebakan Partikel] Kalimat 'Nihongo O wakarimasu' adalah:",
        "options": [
          {
            "text": "Benar secara gramatikal",
            "correct": false
          },
          {
            "text": "SALAH. 'Wakarimasu' wajib pakai GA, bukan O.",
            "correct": true
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Kemahiran Lawan Bicara",
        "situation": "Bertanya tentang kemahiran menari/bernyanyi rekan kerja",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "木村さんは ダンスが 上手ですか。",
            "rom": "Kimura-san wa dansu ga jouzu desu ka.",
            "en": "Apakah Sdr. Kimura mahir menari?"
          },
          {
            "speaker": "B",
            "jp": "はい、とても 上手ですよ。",
            "rom": "Hai, totemo jouzu desu yo.",
            "en": "Ya, dia sangat mahir lho."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Mengajak Pergi Karena Ada Tiket Gratis",
        "situation": "Mengajak teman nonton konser musik klasik karena punya tiket ekstra",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "クラシックの 切符が あります。一緒に 行きませんか。",
            "rom": "Kurashikku no kippu ga arimasu. Issho ni ikimasen ka.",
            "en": "Saya punya tiket musik klasik. Maukah pergi bersama?"
          },
          {
            "speaker": "B",
            "jp": "いいですね。行きましょう。",
            "rom": "Ii desu ne. Ikimashou.",
            "en": "Boleh juga ya. Mari kita pergi!"
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menolak Ajakan Karena Ada Urusan Lain",
        "situation": "Menolak ajakan nonton film secara halus karena sudah ada janji lain",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "明日 一緒に 映画を 見に行きませんか。",
            "rom": "Ashita issho ni eiga o mini ikimasen ka.",
            "en": "Maukah besok pergi menonton film bersama?"
          },
          {
            "speaker": "B",
            "jp": "すみません、明日は ちょっと 用事が あります。",
            "rom": "Sumimasen, ashita wa chotto youji ga arimasu.",
            "en": "Maaf, kalau besok saya ada sedikit urusan."
          },
          {
            "speaker": "A",
            "jp": "そうですか。残念ですね。",
            "rom": "Sou desu ka. Zannen desu ne.",
            "en": "Oh begitu. Sayang sekali ya."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r9-1",
        "jp": "お酒が 好きですか。... いいえ、好きじゃありません。",
        "rom": "Osake ga suki desu ka? ... Iie, suki ja arimasen.",
        "en": "Apakah Anda suka sake? ... Tidak, saya tidak suka."
      },
      {
        "id": "r9-2",
        "jp": "どんな スポーツが 好きですか。... 野球が 好きです。",
        "rom": "Donna supootsu ga suki desu ka? ... Yakyuu ga suki desu.",
        "en": "Olahraga apa yang Anda sukai? ... Saya suka bisbol."
      },
      {
        "id": "r9-3",
        "jp": "英語が よく 分かりますか。... いいえ、よく 分かりません。",
        "rom": "Eigo ga yoku wakarimasu ka? ... Iie, yoku wakarimasen.",
        "en": "Apakah Anda mengerti bahasa Inggris dengan baik? ... Tidak, saya tidak begitu mengerti."
      },
      {
        "id": "r9-4",
        "jp": "漢字が 分かりますか。... はい、だいたい 分かります。",
        "rom": "Kanji ga wakarimasu ka? ... Hai, daitai wakarimasu.",
        "en": "Apakah Anda paham Kanji? ... Ya, kira-kira paham."
      },
      {
        "id": "r9-5",
        "jp": "用事が ありますから、早く 帰ります。... そうですか。",
        "rom": "Youji ga arimasu kara, hayaku kaerimasu. ... Sou desu ka.",
        "en": "Karena ada urusan, saya pulang cepat. ... Oh, begitu ya."
      }
    ]
  },
  {
    "id": 10,
    "title": "Lesson 10: Ada / Berada (Arimasu & Imasu)",
    "desc": "Membedah Bab 10. Anda belajar kata kerja keberadaan: Arimasu (benda mati) vs Imasu (makhluk hidup), kosakata posisi (atas, bawah, dalam, antara), serta dua pola kalimat penting untuk menanyakan 'Ada apa?' vs 'Ada di mana?'.",
    "locked": false,
    "vocab": [
      {
        "id": "v10-1",
        "rom": "Imasu",
        "kana": "います",
        "kanji": "",
        "en": "Ada (makhluk hidup: manusia, hewan)",
        "audio": ""
      },
      {
        "id": "v10-2",
        "rom": "Arimasu",
        "kana": "あります",
        "kanji": "",
        "en": "Ada (benda mati: buku, gedung, pohon)",
        "audio": ""
      },
      {
        "id": "v10-3",
        "rom": "Ue",
        "kana": "うえ",
        "kanji": "上",
        "en": "Atas",
        "audio": ""
      },
      {
        "id": "v10-4",
        "rom": "Shita",
        "kana": "した",
        "kanji": "下",
        "en": "Bawah",
        "audio": ""
      },
      {
        "id": "v10-5",
        "rom": "Mae",
        "kana": "まえ",
        "kanji": "前",
        "en": "Depan",
        "audio": ""
      },
      {
        "id": "v10-6",
        "rom": "Ushiro",
        "kana": "うしろ",
        "kanji": "後ろ",
        "en": "Belakang",
        "audio": ""
      },
      {
        "id": "v10-7",
        "rom": "Migi",
        "kana": "みぎ",
        "kanji": "右",
        "en": "Kanan",
        "audio": ""
      },
      {
        "id": "v10-8",
        "rom": "Hidari",
        "kana": "ひだり",
        "kanji": "左",
        "en": "Kiri",
        "audio": ""
      },
      {
        "id": "v10-9",
        "rom": "Naka",
        "kana": "なか",
        "kanji": "中",
        "en": "Di dalam",
        "audio": ""
      },
      {
        "id": "v10-10",
        "rom": "Soto",
        "kana": "そと",
        "kanji": "外",
        "en": "Di luar",
        "audio": ""
      },
      {
        "id": "v10-11",
        "rom": "Tonari",
        "kana": "となり",
        "kanji": "隣",
        "en": "Di sebelah / Samping",
        "audio": ""
      },
      {
        "id": "v10-12",
        "rom": "Aida",
        "kana": "あいだ",
        "kanji": "間",
        "en": "Di antara (dua benda)",
        "audio": ""
      },
      {
        "id": "v10-13",
        "rom": "Chikaku",
        "kana": "ちかく",
        "kanji": "近く",
        "en": "Dekat / Di sekitar",
        "audio": ""
      },
      {
        "id": "v10-14",
        "rom": "Inu",
        "kana": "いぬ",
        "kanji": "犬",
        "en": "Anjing",
        "audio": ""
      },
      {
        "id": "v10-15",
        "rom": "Neko",
        "kana": "ねこ",
        "kanji": "猫",
        "en": "Kucing",
        "audio": ""
      },
      {
        "id": "v10-16",
        "rom": "Ki",
        "kana": "き",
        "kanji": "木",
        "en": "Pohon",
        "audio": ""
      },
      {
        "id": "v10-17",
        "rom": "Hana",
        "kana": "はな",
        "kanji": "花",
        "en": "Bunga",
        "audio": ""
      },
      {
        "id": "v10-18",
        "rom": "Kouen",
        "kana": "こうえん",
        "kanji": "公園",
        "en": "Taman",
        "audio": ""
      },
      {
        "id": "v10-19",
        "rom": "Tsukue",
        "kana": "つくえ",
        "kanji": "机",
        "en": "Meja tulis",
        "audio": ""
      },
      {
        "id": "v10-20",
        "rom": "Isu",
        "kana": "いす",
        "kanji": "",
        "en": "Kursi",
        "audio": ""
      },
      {
        "id": "v10-21",
        "rom": "Tana",
        "kana": "たな",
        "kanji": "棚",
        "en": "Rak",
        "audio": ""
      },
      {
        "id": "v10-22",
        "rom": "Hako",
        "kana": "はこ",
        "kanji": "箱",
        "en": "Kotak",
        "audio": ""
      },
      {
        "id": "v10-23",
        "rom": "Beddo",
        "kana": "ベッド",
        "kanji": "",
        "en": "Tempat tidur",
        "audio": ""
      },
      {
        "id": "v10-24",
        "rom": "Terebi",
        "kana": "テレビ",
        "kanji": "",
        "en": "TV / Televisi",
        "audio": ""
      },
      {
        "id": "v10-25",
        "rom": "Reizouko",
        "kana": "れいぞうこ",
        "kanji": "冷蔵庫",
        "en": "Kulkas",
        "audio": ""
      },
      {
        "id": "v10-26",
        "rom": "Heya",
        "kana": "へや",
        "kanji": "部屋",
        "en": "Kamar",
        "audio": ""
      },
      {
        "id": "v10-27",
        "rom": "Ginkou",
        "kana": "ぎんこう",
        "kanji": "銀行",
        "en": "Bank",
        "audio": ""
      },
      {
        "id": "v10-28",
        "rom": "Yuubinkyoku",
        "kana": "ゆうびんきょく",
        "kanji": "郵便局",
        "en": "Kantor Pos",
        "audio": ""
      },
      {
        "id": "v10-29",
        "rom": "Byouin",
        "kana": "びょういん",
        "kanji": "病院",
        "en": "Rumah Sakit",
        "audio": ""
      },
      {
        "id": "v10-30",
        "rom": "Kissaten",
        "kana": "きっさてん",
        "kanji": "喫茶店",
        "en": "Kedai Kopi (Tradisional)",
        "audio": ""
      },
      {
        "id": "v10-31",
        "rom": "Konbini",
        "kana": "コンビニ",
        "kanji": "",
        "en": "Minimarket / Konbini",
        "audio": ""
      },
      {
        "id": "v10-32",
        "rom": "Biru",
        "kana": "ビル",
        "kanji": "",
        "en": "Gedung",
        "audio": ""
      },
      {
        "id": "v10-33",
        "rom": "ATM",
        "kana": "エーティーエム",
        "kanji": "",
        "en": "ATM",
        "audio": ""
      },
      {
        "id": "v10-34",
        "rom": "Otoko no hito",
        "kana": "おとこのひと",
        "kanji": "男の人",
        "en": "Pria / Laki-laki",
        "audio": ""
      },
      {
        "id": "v10-35",
        "rom": "Onna no hito",
        "kana": "おんなのひと",
        "kanji": "女の人",
        "en": "Wanita / Perempuan",
        "audio": ""
      },
      {
        "id": "v10-36",
        "rom": "Otoko no ko",
        "kana": "おとこのこ",
        "kanji": "男の子",
        "en": "Anak laki-laki",
        "audio": ""
      },
      {
        "id": "v10-37",
        "rom": "Onna no ko",
        "kana": "おんなのこ",
        "kanji": "女の子",
        "en": "Anak perempuan",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g10-1",
        "title": "1. [Tempat] に [Benda] が あります / います (Ada Apa?)",
        "desc": "Pola ini digunakan jika Anda ingin menyatakan APA yang ada di suatu tempat. Partikel NI menandai LOKASI, partikel GA menandai SUBJEK yang 'ada'.",
        "points": [
          "あります (Arimasu): Untuk benda MATI (kursi, gedung, bunga, uang, pohon, ATM).",
          "います (Imasu): Untuk makhluk HIDUP (orang, kucing, ikan, serangga).",
          "Contoh: Tsukue no ue ni hon GA arimasu. (DI ATAS meja ADA buku).",
          "Contoh: Niwa ni neko GA imasu. (DI taman ADA kucing).",
          "POIN TRICKY: Pohon/Tanaman pakai Arimasu (walau hidup, mereka tidak bergerak). Robot/Mobil juga Arimasu."
        ],
        "formula": "[Tempat] に [Benda/Makhluk] が あります / います",
        "native_note": "Kata keberadaan makhluk hidup 'iru' (います) dalam percakapan kasual sering diucapkan cepat dan mengalami kontraksi jika digabungkan dengan partikel penegas (misal: 'iru yo' menjadi 'iru' dengan penekanan suara)."
      },
      {
        "id": "g10-2",
        "title": "2. [Benda] は [Tempat] に あります / います (Ada Di Mana?)",
        "desc": "Pola KEBALIKAN dari pola 1. Jika Anda sudah tahu bendanya dan ingin menjelaskan atau menanyakan LOKASINYA.",
        "points": [
          "Pola 1 (ada APA?): Tsukue no ue NI hon GA arimasu. (Di atas meja ada buku).",
          "Pola 2 (ada DIMANA?): Hon WA tsukue no ue NI arimasu. (Buku ada di atas meja).",
          "Perbedaan Krusial: Pola 1 menjawab 'Ada apa di situ?'. Pola 2 menjawab 'Benda itu ada di mana?'.",
          "Pertanyaan: Toire wa doko ni arimasu ka. (Toilet ada di mana?)"
        ],
        "formula": "[Benda/Makhluk] は [Tempat] に あります / います"
      },
      {
        "id": "g10-3",
        "title": "3. Kata Posisi Relatif (Ue, Shita, Mae, Naka, dll.)",
        "desc": "Kosakata posisi selalu ditempel setelah kata benda + の (NO) untuk menyatakan letak RELATIF terhadap acuan.",
        "points": [
          "Tsukue NO Ue = Di ATAS meja. Isu NO Shita = Di BAWAH kursi.",
          "Ginkou NO Tonari = Di SEBELAH bank. Yuubinkyoku NO Mae = Di DEPAN kantor pos.",
          "Hako NO Naka = Di DALAM kotak. Biru NO Soto = Di LUAR gedung.",
          "A TO B NO Aida = Di ANTARA A dan B. Eki NO Chikaku = Di DEKAT stasiun."
        ],
        "formula": "[Acuan] の [Posisi] に"
      },
      {
        "id": "g10-4",
        "title": "4. 何もありません / 誰もいません (Penyangkalan Total)",
        "desc": "Untuk menyangkal keberadaan secara total — tidak ada apa-apa atau tidak ada siapa-siapa.",
        "points": [
          "Heya ni nani mo arimasen. (Di kamar tidak ada APA-APA sama sekali).",
          "Heya ni dare mo imasen. (Di kamar tidak ada SIAPA-SIAPA sama sekali).",
          "Ingat pola Bab 5: Kata tanya + MO + Negatif = Penyangkalan total."
        ],
        "formula": "[Tempat] に 何も ありません / 誰も いません"
      }
    ],
    "patterns": [
      {
        "jp": "部屋に 机が あります。",
        "rom": "Heya ni tsukue ga arimasu.",
        "en": "Di dalam kamar ada meja."
      },
      {
        "jp": "庭に 猫が います。",
        "rom": "Niwa ni neko ga imasu.",
        "en": "Di halaman ada kucing."
      },
      {
        "jp": "本は つくえの 上に あります。",
        "rom": "Hon wa tsukue no ue ni arimasu.",
        "en": "Buku ada di atas meja."
      },
      {
        "jp": "郵便局は 銀行の 隣に あります。",
        "rom": "Yuubinkyoku wa ginkou no tonari ni arimasu.",
        "en": "Kantor pos ada di sebelah bank."
      },
      {
        "jp": "教室に だれも いません。",
        "rom": "Kyoushitsu ni dare mo imasen.",
        "en": "Di kelas tidak ada siapa-siapa."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: 何がありますか (Ada Apa Saja?)",
      "dialogue": [
        {
          "speaker": "Santos",
          "jp": "すみません。チーズバーガーと サラダを お願いします。",
          "rom": "Sumimasen. Chiizubaagaa to sarada o onegaishimasu.",
          "en": "Permisi. Minta cheeseburger dan salad."
        },
        {
          "speaker": "Pelayan",
          "jp": "はい。お飲み物は？",
          "rom": "Hai. Onomimono wa?",
          "en": "Baik. Minumannya?"
        },
        {
          "speaker": "Santos",
          "jp": "何が ありますか。",
          "rom": "Nani ga arimasu ka.",
          "en": "Ada apa saja?"
        },
        {
          "speaker": "Pelayan",
          "jp": "コーラと オレンジジュースと お茶が あります。",
          "rom": "Koora to orenji-juusu to ocha ga arimasu.",
          "en": "Ada Coca-Cola, jus jeruk, dan teh."
        },
        {
          "speaker": "Santos",
          "jp": "じゃ、コーラを ください。",
          "rom": "Ja, koora o kudasai.",
          "en": "Kalau begitu, tolong Coca-Cola."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] 'Di taman ada anjing.' Kata kerja keberadaan yang tepat adalah:",
        "options": [
          {
            "text": "Arimasu (benda mati)",
            "correct": false
          },
          {
            "text": "Imasu (makhluk hidup)",
            "correct": true
          },
          {
            "text": "Desu",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Terjemahkan: 'Buku ada di atas meja'.\nHon wa tsukue no [     ] ni arimasu.",
        "answer": "ue"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] POHON ada di taman. Kata kerja yang dipakai untuk pohon adalah:",
        "options": [
          {
            "text": "Imasu (karena pohon hidup)",
            "correct": false
          },
          {
            "text": "Arimasu (karena pohon tidak bergerak)",
            "correct": true
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Di dalam kamar tidak ada apa-apa.'\nHeya ni [       ] arimasen.",
        "answer": "nani mo"
      },
      {
        "type": "mcq",
        "question": "[Pola Kalimat] 'Toilet ada di mana?' — Pola kalimat yang benar adalah:",
        "options": [
          {
            "text": "Doko ni toire ga arimasu ka.",
            "correct": false
          },
          {
            "text": "Toire wa doko ni arimasu ka.",
            "correct": true
          },
          {
            "text": "Toire ga doko arimasu ka.",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Keberadaan Seseorang",
        "situation": "Mencari keberadaan rekan kerja di kantor kepada resepsionis",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "すみません、ミラーさんは どこに いますか。",
            "rom": "Sumimasen, Miraa-san wa doko ni imasu ka.",
            "en": "Permisi, Mr. Miller ada di mana ya?"
          },
          {
            "speaker": "B",
            "jp": "会議室に いますよ。",
            "rom": "Kaigishitsu ni imasu yo.",
            "en": "Ada di ruang rapat lho."
          },
          {
            "speaker": "A",
            "jp": "そうですか。ありがとうございます。",
            "rom": "Sou desu ka. Arigatou gozaimasu.",
            "en": "Oh begitu. Terima kasih banyak."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Barang dalam Ruangan",
        "situation": "Bertanya benda apa saja yang diletakkan di atas meja kerja",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "机の 上に 何が ありますか。",
            "rom": "Tsukue no ue ni nani ga arimasu ka.",
            "en": "Di atas meja ada barang apa?"
          },
          {
            "speaker": "B",
            "jp": "本や ペンなどが あります。",
            "rom": "Hon ya pen nado ga arimasu.",
            "en": "Ada buku, pena, dan lain-lain."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Letak Supermarket Terdekat",
        "situation": "Bertanya kepada orang di jalan tentang keberadaan supermarket terdekat",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "すみません、この 近くに スーパーが ありますか。",
            "rom": "Sumimasen, kono chikaku ni suupaa ga arimasu ka.",
            "en": "Permisi, apakah di dekat sini ada supermarket?"
          },
          {
            "speaker": "B",
            "jp": "はい。あの 公園の 隣に あります。",
            "rom": "Hai. Ano kouen no tonari ni arimasu.",
            "en": "Ya. Ada di sebelah taman itu."
          },
          {
            "speaker": "A",
            "jp": "わかりました。ありがとう ございます。",
            "rom": "Wakarimashita. Arigatou gozaimasu.",
            "en": "Saya mengerti. Terima kasih banyak."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r10-1",
        "jp": "あそこに 男の人が いますね。あの人は だれですか。... IMCの 松本さんです。",
        "rom": "Asoko ni otoko no hito ga imasu ne. Ano hito wa dare desu ka? ... IMC no Matsumoto-san desu.",
        "en": "Di sana ada laki-laki ya. Siapakah orang itu? ... Tuan Matsumoto dari IMC."
      },
      {
        "id": "r10-2",
        "jp": "あなたの 部屋に 何が ありますか。... 机と ベッドがあります。",
        "rom": "Anata no heya ni nani ga arimasu ka? ... Tsukue to beddo ga arimasu.",
        "en": "Di kamar Anda ada apa? ... Ada meja dan tempat tidur."
      },
      {
        "id": "r10-3",
        "jp": "庭に だれが いますか。... だれも いません。猫が います。",
        "rom": "Niwa ni dare ga imasu ka? ... Dare mo imasen. Neko ga imasu.",
        "en": "Di halaman ada siapa? ... Tidak ada siapa-siapa. Ada kucing."
      },
      {
        "id": "r10-4",
        "jp": "箱の 中に 何が ありますか。... 古い 手紙や 写真などが あります。",
        "rom": "Hako no naka ni nani ga arimasu ka? ... Furui tegami ya shashin nado ga arimasu.",
        "en": "Di dalam kotak ada apa? ... Ada surat lama, foto, dan lain-lain."
      },
      {
        "id": "r10-5",
        "jp": "郵便局は どこに ありますか。... 駅の 近くに あります。銀行の 隣です。",
        "rom": "Yuubinkyoku wa doko ni arimasu ka? ... Eki no chikaku ni arimasu. Ginkou no tonari desu.",
        "en": "Kantor pos ada di mana? ... Ada di dekat stasiun. Di sebelah bank."
      }
    ]
  },
  {
    "id": 11,
    "title": "Lesson 11: Kata Bantu Bilangan (Counter/Satuan)",
    "desc": "Membedah Bab 11. Anda belajar menghitung benda, orang, dan durasi dengan satuan khusus (counter) yang berbeda-beda tergantung bentuk objeknya. Juga belajar menanyakan durasi dan frekuensi.",
    "locked": false,
    "vocab": [
      {
        "id": "v11-1",
        "rom": "Hitotsu",
        "kana": "ひとつ",
        "kanji": "一つ",
        "en": "1 buah (umum)",
        "audio": ""
      },
      {
        "id": "v11-2",
        "rom": "Futatsu",
        "kana": "ふたつ",
        "kanji": "二つ",
        "en": "2 buah (umum)",
        "audio": ""
      },
      {
        "id": "v11-3",
        "rom": "Mittsu",
        "kana": "みっつ",
        "kanji": "三つ",
        "en": "3 buah (umum)",
        "audio": ""
      },
      {
        "id": "v11-4",
        "rom": "Yottsu",
        "kana": "よっつ",
        "kanji": "四つ",
        "en": "4 buah (umum)",
        "audio": ""
      },
      {
        "id": "v11-5",
        "rom": "Itsutsu",
        "kana": "いつつ",
        "kanji": "五つ",
        "en": "5 buah (umum)",
        "audio": ""
      },
      {
        "id": "v11-6",
        "rom": "Muttsu",
        "kana": "むっつ",
        "kanji": "六つ",
        "en": "6 buah (umum)",
        "audio": ""
      },
      {
        "id": "v11-7",
        "rom": "Nanatsu",
        "kana": "ななつ",
        "kanji": "七つ",
        "en": "7 buah (umum)",
        "audio": ""
      },
      {
        "id": "v11-8",
        "rom": "Yattsu",
        "kana": "やっつ",
        "kanji": "八つ",
        "en": "8 buah (umum)",
        "audio": ""
      },
      {
        "id": "v11-9",
        "rom": "Kokonotsu",
        "kana": "ここのつ",
        "kanji": "九つ",
        "en": "9 buah (umum)",
        "audio": ""
      },
      {
        "id": "v11-10",
        "rom": "Toou",
        "kana": "とお",
        "kanji": "十",
        "en": "10 buah (umum)",
        "audio": ""
      },
      {
        "id": "v11-11",
        "rom": "Ikutsu",
        "kana": "いくつ",
        "kanji": "",
        "en": "Berapa buah? / Berapa umur?",
        "audio": ""
      },
      {
        "id": "v11-12",
        "rom": "Hitori",
        "kana": "ひとり",
        "kanji": "一人",
        "en": "1 orang (IRREGULIER)",
        "audio": ""
      },
      {
        "id": "v11-13",
        "rom": "Futari",
        "kana": "ふたり",
        "kanji": "二人",
        "en": "2 orang (IRREGULIER)",
        "audio": ""
      },
      {
        "id": "v11-14",
        "rom": "~Nin",
        "kana": "〜にん",
        "kanji": "〜人",
        "en": "~ orang (3 ke atas: san-nin, yo-nin...)",
        "audio": ""
      },
      {
        "id": "v11-15",
        "rom": "~Dai",
        "kana": "〜だい",
        "kanji": "〜台",
        "en": "~ buah (mesin/kendaraan)",
        "audio": ""
      },
      {
        "id": "v11-16",
        "rom": "~Mai",
        "kana": "〜まい",
        "kanji": "〜枚",
        "en": "~ lembar (benda tipis/datar)",
        "audio": ""
      },
      {
        "id": "v11-17",
        "rom": "~Kai",
        "kana": "〜かい",
        "kanji": "〜回",
        "en": "~ kali (frekuensi)",
        "audio": ""
      },
      {
        "id": "v11-18",
        "rom": "~Hon/Pon/Bon",
        "kana": "〜ほん/ぽん/ぼん",
        "kanji": "〜本",
        "en": "~ batang (benda silindris: pensil, payung, botol)",
        "audio": ""
      },
      {
        "id": "v11-19",
        "rom": "~Hai/Pai/Bai",
        "kana": "〜はい/ぱい/ばい",
        "kanji": "〜杯",
        "en": "~ gelas/cangkir (minuman, nasi mangkuk)",
        "audio": ""
      },
      {
        "id": "v11-20",
        "rom": "~Satsu",
        "kana": "〜さつ",
        "kanji": "〜冊",
        "en": "~ buah (buku, majalah)",
        "audio": ""
      },
      {
        "id": "v11-21",
        "rom": "~Fun/Pun",
        "kana": "〜ふん/ぷん",
        "kanji": "〜分",
        "en": "~ menit",
        "audio": ""
      },
      {
        "id": "v11-22",
        "rom": "~Jikan",
        "kana": "〜じかん",
        "kanji": "〜時間",
        "en": "~ jam (durasi)",
        "audio": ""
      },
      {
        "id": "v11-23",
        "rom": "~Nichi",
        "kana": "〜にち",
        "kanji": "〜日",
        "en": "~ hari (durasi)",
        "audio": ""
      },
      {
        "id": "v11-24",
        "rom": "~Shuukan",
        "kana": "〜しゅうかん",
        "kanji": "〜週間",
        "en": "~ minggu (durasi)",
        "audio": ""
      },
      {
        "id": "v11-25",
        "rom": "~Kagetsu",
        "kana": "〜かげつ",
        "kanji": "〜か月",
        "en": "~ bulan (durasi)",
        "audio": ""
      },
      {
        "id": "v11-26",
        "rom": "~Nen",
        "kana": "〜ねん",
        "kanji": "〜年",
        "en": "~ tahun (durasi)",
        "audio": ""
      },
      {
        "id": "v11-27",
        "rom": "Ringo",
        "kana": "りんご",
        "kanji": "",
        "en": "Apel",
        "audio": ""
      },
      {
        "id": "v11-28",
        "rom": "Mikan",
        "kana": "みかん",
        "kanji": "",
        "en": "Jeruk Mandarin",
        "audio": ""
      },
      {
        "id": "v11-29",
        "rom": "Sandoicchi",
        "kana": "サンドイッチ",
        "kanji": "",
        "en": "Sandwich",
        "audio": ""
      },
      {
        "id": "v11-30",
        "rom": "Hagaki",
        "kana": "はがき",
        "kanji": "葉書",
        "en": "Kartu Pos",
        "audio": ""
      },
      {
        "id": "v11-31",
        "rom": "Kitte",
        "kana": "きって",
        "kanji": "切手",
        "en": "Perangko",
        "audio": ""
      },
      {
        "id": "v11-32",
        "rom": "Kazoku",
        "kana": "かぞく",
        "kanji": "家族",
        "en": "Keluarga",
        "audio": ""
      },
      {
        "id": "v11-33",
        "rom": "Gaikokujin",
        "kana": "がいこくじん",
        "kanji": "外国人",
        "en": "Orang asing",
        "audio": ""
      },
      {
        "id": "v11-34",
        "rom": "Kakarimasu",
        "kana": "かかります",
        "kanji": "",
        "en": "Memakan (waktu/biaya)",
        "audio": ""
      },
      {
        "id": "v11-35",
        "rom": "Dono kurai",
        "kana": "どのくらい",
        "kanji": "",
        "en": "Berapa lama / Kira-kira berapa?",
        "audio": ""
      },
      {
        "id": "v11-36",
        "rom": "Zenbu de",
        "kana": "ぜんぶで",
        "kanji": "全部で",
        "en": "Semuanya / Totalnya",
        "audio": ""
      },
      {
        "id": "v11-37",
        "rom": "Gurai",
        "kana": "ぐらい",
        "kanji": "",
        "en": "Kira-kira / Sekitar (perkiraan)",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g11-1",
        "title": "1. Sistem Satuan Bilangan (Counter)",
        "desc": "Di bahasa Jepang, Anda TIDAK BISA menghitung benda dengan angka polos seperti 'ichi ringo' (1 apel). Setiap jenis benda memiliki 'counter' (satuan) sendiri.",
        "points": [
          "〜つ (Tsu): Counter UNIVERSAL untuk benda umum. Hanya berlaku 1-10. Hitotsu, futatsu, mittsu... toou. Jika bingung counter-nya, pakai ini.",
          "〜人 (Nin): Menghitung ORANG. Pengecualian: 1 orang = hitori, 2 orang = futari. 3+ = san-nin, yo-nin, go-nin...",
          "〜台 (Dai): Mesin dan kendaraan. Kuruma ga ni-dai arimasu (Ada 2 mobil).",
          "〜枚 (Mai): Benda tipis/datar (kertas, kaos, piring, tiket). Hagaki o go-mai kudasai (Minta 5 lembar kartu pos).",
          "〜本 (Hon/Pon/Bon): Benda silindris panjang (pensil, payung, botol, pisang). Perubahan bunyi: ip-pon, ni-hon, san-bon.",
          "〜杯 (Hai/Pai/Bai): Gelas/cangkir/mangkuk berisi. Ip-pai, ni-hai, san-bai.",
          "〜冊 (Satsu): Buku/majalah. Is-satsu, ni-satsu, san-satsu.",
          "〜回 (Kai): Frekuensi/berapa kali. Ik-kai, ni-kai, san-kai."
        ],
        "formula": "Angka + Counter (sebelum kata kerja)",
        "native_note": "Bila Anda makan di kedai ramen atau restoran Jepang dan bingung menentukan kata bantu bilangan (counter word) yang tepat, gunakan kata hitung universal 'hitotsu' (satu) atau 'futatsu' (dua) karena pelayan restoran akan langsung mengerti tanpa masalah."
      },
      {
        "id": "g11-2",
        "title": "2. Durasi Waktu (Berapa Lama?)",
        "desc": "Durasi BERBEDA dari titik waktu. Durasi menyatakan BERAPA LAMA, bukan JAM BERAPA. Durasi TIDAK menggunakan partikel NI.",
        "points": [
          "〜時間 (Jikan): Durasi jam. Ni-jikan (2 jam). BUKAN 'ni-ji' (jam 2 = titik waktu).",
          "〜日 (Nichi/Ka): Durasi hari. Futsuka (2 hari), mikka (3 hari). Bacaan irregulier di hari 1-10.",
          "〜週間 (Shuukan): Durasi minggu. Is-shuukan (1 minggu).",
          "〜か月 (Kagetsu): Durasi bulan. San-kagetsu (3 bulan).",
          "〜年 (Nen): Durasi tahun. Ichi-nen (1 tahun).",
          "PENTING: Durasi TIDAK pakai partikel NI. 'Ni-jikan benkyou shimasu' (Belajar SELAMA 2 jam). Bukan 'Ni-jikan NI'."
        ],
        "formula": "[Durasi] V (tanpa partikel NI)"
      },
      {
        "id": "g11-3",
        "title": "3. N を Quantifier V / N が Quantifier V",
        "desc": "Posisi counter dalam kalimat. Counter ditempatkan SEBELUM kata kerja (tepat di depannya).",
        "points": [
          "Ringo o mittsu kudasai. (Minta 3 buah apel). Counter 'mittsu' tepat sebelum 'kudasai'.",
          "Gakusei ga go-nin imasu. (Ada 5 orang pelajar). Counter 'go-nin' tepat sebelum 'imasu'.",
          "Koohii o ni-hai nomimashita. (Minum 2 cangkir kopi)."
        ],
        "formula": "N を/が [Counter] V"
      },
      {
        "id": "g11-4",
        "title": "4. どのくらい かかりますか (Berapa Lama Dibutuhkan?)",
        "desc": "Kata tanya untuk menanyakan durasi yang dibutuhkan. 'Kakarimasu' artinya 'memakan' (waktu/biaya).",
        "points": [
          "Osaka kara Toukyou made dono kurai kakarimasu ka. (Dari Osaka ke Tokyo berapa lama?)",
          "San-jikan gurai kakarimasu. (Kira-kira 3 jam).",
          "'Gurai' = kira-kira/sekitar (perkiraan, bukan angka pasti)."
        ],
        "formula": "どのくらい かかりますか -> [Durasi] ぐらい かかります"
      }
    ],
    "patterns": [
      {
        "jp": "りんごを ４つ 買いました。",
        "rom": "Ringo o yottsu kaimashita.",
        "en": "Saya membeli 4 buah apel."
      },
      {
        "jp": "外国人の 学生が ２人 います。",
        "rom": "Gaikokujin no gakusei ga futari imasu.",
        "en": "Ada 2 orang pelajar asing."
      },
      {
        "jp": "１週間に ２回 テニスを します。",
        "rom": "Is-shuukan ni ni-kai tenisu o shimasu.",
        "en": "Saya bermain tenis 2 kali per minggu."
      },
      {
        "jp": "大阪から 東京まで どのくらい かかりますか。",
        "rom": "Osaka kara Toukyou made dono kurai kakarimasu ka.",
        "en": "Dari Osaka ke Tokyo berapa lama?"
      },
      {
        "jp": "コーヒーを ３杯 飲みました。",
        "rom": "Koohii o san-bai nomimashita.",
        "en": "Saya minum 3 cangkir kopi."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: 郵便局で (Di Kantor Pos)",
      "dialogue": [
        {
          "speaker": "Miller",
          "jp": "80円の 切手を ５枚と はがきを ２枚 ください。",
          "rom": "Hachijuu-en no kitte o go-mai to hagaki o ni-mai kudasai.",
          "en": "Minta perangko 80 yen 5 lembar dan kartu pos 2 lembar."
        },
        {
          "speaker": "Petugas",
          "jp": "はい。全部で ５００円です。",
          "rom": "Hai. Zenbu de gohyaku-en desu.",
          "en": "Baik. Totalnya 500 yen."
        },
        {
          "speaker": "Miller",
          "jp": "この 荷物を アメリカへ お願いします。",
          "rom": "Kono nimotsu o Amerika e onegaishimasu.",
          "en": "Tolong kirimkan paket ini ke Amerika."
        },
        {
          "speaker": "Petugas",
          "jp": "船便ですか、航空便ですか。",
          "rom": "Funabin desu ka, koukuubin desu ka.",
          "en": "Via laut atau via udara?"
        },
        {
          "speaker": "Miller",
          "jp": "航空便で お願いします。どのくらい かかりますか。",
          "rom": "Koukuubin de onegaishimasu. Dono kurai kakarimasu ka.",
          "en": "Via udara. Berapa lama (sampai)?"
        },
        {
          "speaker": "Petugas",
          "jp": "１週間ぐらいです。",
          "rom": "Is-shuukan gurai desu.",
          "en": "Kira-kira 1 minggu."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Counter apa yang dipakai untuk menghitung 'lembar kertas'?",
        "options": [
          {
            "text": "〜台 (Dai)",
            "correct": false
          },
          {
            "text": "〜枚 (Mai)",
            "correct": true
          },
          {
            "text": "〜回 (Kai)",
            "correct": false
          },
          {
            "text": "〜本 (Hon)",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Terjemahkan: 'Ada 3 orang pelajar'.\nGakusei ga [     ] imasu.",
        "answer": "san-nin"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] Anda mau menghitung PENSIL (benda silindris). Counter yang tepat adalah:",
        "options": [
          {
            "text": "〜枚 (Mai)",
            "correct": false
          },
          {
            "text": "〜本 (Hon/Pon/Bon)",
            "correct": true
          },
          {
            "text": "〜つ (Tsu)",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Berapa lama dari Osaka ke Tokyo?' -> Kira-kira 3 jam.\nSan-jikan [       ] kakarimasu.",
        "answer": "gurai"
      },
      {
        "type": "mcq",
        "question": "[Jebakan] '1 orang' dan '2 orang' di bahasa Jepang adalah IRREGULIER. Yang benar adalah:",
        "options": [
          {
            "text": "Ichi-nin, ni-nin",
            "correct": false
          },
          {
            "text": "Hitori, futari",
            "correct": true
          },
          {
            "text": "Hitotsu, futatsu",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Jumlah Saudara",
        "situation": "Mengobrol tentang jumlah saudara kandung keluarga teman",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "ご兄弟は 何人 いますか。",
            "rom": "Go-kyoudai wa nani-nin imasu ka.",
            "en": "Saudaranya ada berapa orang?"
          },
          {
            "speaker": "B",
            "jp": "姉が 一人と 弟が 二人 います。",
            "rom": "Ane ga hitori to otouto ga futari imasu.",
            "en": "Ada satu kakak perempuan dan dua adik laki-laki."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Durasi Studi di Negara Asal",
        "situation": "Bertanya berapa lama rekan kerja belajar bahasa Jepang sebelum ke Jepang",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "国で どのくらい 日本語を 勉強しましたか。",
            "rom": "Kuni de dono-kurai Nihongo o benkyou shimashita ka.",
            "en": "Di negara asal, berapa lama belajar bahasa Jepang?"
          },
          {
            "speaker": "B",
            "jp": "6ヶ月 勉強しました。",
            "rom": "Rokkagetsu benkyou shimashita.",
            "en": "Belajar selama 6 bulan."
          },
          {
            "speaker": "A",
            "jp": "6ヶ月ですか。上手ですね。",
            "rom": "Rokkagetsu desu ka. Jouzu desu ne.",
            "en": "6 bulan ya? Hebat/pintar sekali ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Durasi Perjalanan ke Stasiun",
        "situation": "Bertanya berapa waktu tempuh dari posisi sekarang ke stasiun terdekat",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "ここから 駅まで どのくらい かかりますか。",
            "rom": "Koko kara eki made dono-kurai kakarimasu ka.",
            "en": "Dari sini ke stasiun butuh waktu berapa lama?"
          },
          {
            "speaker": "B",
            "jp": "歩いて 15分くらい かかります。",
            "rom": "Aruite juu-go-fun kurai kakarimasu.",
            "en": "Jalan kaki kira-kira memakan waktu 15 menit."
          },
          {
            "speaker": "A",
            "jp": "そうですか。ありがとうございます。",
            "rom": "Sou desu ka. Arigatou gozaimasu.",
            "en": "Oh begitu. Terima kasih banyak."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r11-1",
        "jp": "りんごを いくつ 買いましたか。... ４つ 買いました。",
        "rom": "Ringo o ikutsu kaimashita ka? ... Yotsu kaimashita.",
        "en": "Membeli buah apel berapa buah? ... Membeli 4 buah."
      },
      {
        "id": "r11-2",
        "jp": "８０円の 切手を 何枚 買いましたか。... ５枚 買いました。",
        "rom": "Hachijuyouen no kitte o nanmai kaimashita ka? ... Gomai kaimashita.",
        "en": "Membeli perangko seharga 80 yen berapa lembar? ... Membeli 5 lembar."
      },
      {
        "id": "r11-3",
        "jp": "富士大学に 外国人の 先生が いますか。... はい、３人 います。みんな アメリカ人です。",
        "rom": "Fuji daigaku ni gaikokujin no sensei ga imasu ka? ... Hai, sannin imasu. Minna Amerika-jin desu.",
        "en": "Apakah di Universitas Fuji ada dosen asing? ... Ya, ada 3 orang. Semuanya orang Amerika."
      },
      {
        "id": "r11-4",
        "jp": "国で 何年 英語を 勉強しましたか。... ３年 勉強しました。",
        "rom": "Kuni de nannen eigo o benkyou shimashita ka? ... Sannen benkyou shimashita.",
        "en": "Belajar bahasa Inggris di negara asal berapa tahun? ... Belajar selama 3 tahun."
      },
      {
        "id": "r11-5",
        "jp": "どのくらい 日本語を 勉強しましたか。... ３か月 勉強しました。",
        "rom": "Donokurai Nihongo o benkyou shimashita ka? ... Sankagetsu benkyou shimashita.",
        "en": "Sudah belajar bahasa Jepang kira-kira berapa lama? ... Belajar selama 3 bulan."
      }
    ]
  },
  {
    "id": 12,
    "title": "Lesson 12: Perbandingan (Motto, Ichiban)",
    "desc": "Membedah Bab 12. Anda belajar membandingkan dua benda (comparative) atau lebih (superlative), menyatakan yang paling, dan menanyakan preferensi antara pilihan.",
    "locked": false,
    "vocab": [
      {
        "id": "v12-1",
        "rom": "Motto",
        "kana": "もっと",
        "kanji": "",
        "en": "Lebih (lagi)",
        "audio": ""
      },
      {
        "id": "v12-2",
        "rom": "Ichiban",
        "kana": "いちばん",
        "kanji": "一番",
        "en": "Paling / Nomor satu",
        "audio": ""
      },
      {
        "id": "v12-3",
        "rom": "Dochira / Docchi",
        "kana": "どちら / どっち",
        "kanji": "",
        "en": "Yang mana (dari 2 pilihan)?",
        "audio": ""
      },
      {
        "id": "v12-4",
        "rom": "Dore",
        "kana": "どれ",
        "kanji": "",
        "en": "Yang mana (dari 3+ pilihan)?",
        "audio": ""
      },
      {
        "id": "v12-5",
        "rom": "Yori",
        "kana": "より",
        "kanji": "",
        "en": "Daripada / Dibanding (partikel pembanding)",
        "audio": ""
      },
      {
        "id": "v12-6",
        "rom": "~no hou ga",
        "kana": "〜のほうが",
        "kanji": "",
        "en": "Yang ~ (lebih) ... (pola jawaban)",
        "audio": ""
      },
      {
        "id": "v12-7",
        "rom": "Dochira mo",
        "kana": "どちらも",
        "kanji": "",
        "en": "Dua-duanya (netral)",
        "audio": ""
      },
      {
        "id": "v12-8",
        "rom": "Haru",
        "kana": "はる",
        "kanji": "春",
        "en": "Musim Semi",
        "audio": ""
      },
      {
        "id": "v12-9",
        "rom": "Natsu",
        "kana": "なつ",
        "kanji": "夏",
        "en": "Musim Panas",
        "audio": ""
      },
      {
        "id": "v12-10",
        "rom": "Aki",
        "kana": "あき",
        "kanji": "秋",
        "en": "Musim Gugur",
        "audio": ""
      },
      {
        "id": "v12-11",
        "rom": "Fuyu",
        "kana": "ふゆ",
        "kanji": "冬",
        "en": "Musim Dingin",
        "audio": ""
      },
      {
        "id": "v12-12",
        "rom": "Tenki",
        "kana": "てんき",
        "kanji": "天気",
        "en": "Cuaca",
        "audio": ""
      },
      {
        "id": "v12-13",
        "rom": "Ame",
        "kana": "あめ",
        "kanji": "雨",
        "en": "Hujan",
        "audio": ""
      },
      {
        "id": "v12-14",
        "rom": "Yuki",
        "kana": "ゆき",
        "kanji": "雪",
        "en": "Salju",
        "audio": ""
      },
      {
        "id": "v12-15",
        "rom": "Kumori",
        "kana": "くもり",
        "kanji": "曇り",
        "en": "Mendung / Berawan",
        "audio": ""
      },
      {
        "id": "v12-16",
        "rom": "Sugoi",
        "kana": "すごい",
        "kanji": "",
        "en": "Hebat / Luar biasa",
        "audio": ""
      },
      {
        "id": "v12-17",
        "rom": "Onaji",
        "kana": "おなじ",
        "kanji": "同じ",
        "en": "Sama",
        "audio": ""
      },
      {
        "id": "v12-18",
        "rom": "Sekai",
        "kana": "せかい",
        "kanji": "世界",
        "en": "Dunia",
        "audio": ""
      },
      {
        "id": "v12-19",
        "rom": "Tatemono",
        "kana": "たてもの",
        "kanji": "建物",
        "en": "Gedung / Bangunan",
        "audio": ""
      },
      {
        "id": "v12-20",
        "rom": "Kuni",
        "kana": "くに",
        "kanji": "国",
        "en": "Negara",
        "audio": ""
      },
      {
        "id": "v12-21",
        "rom": "Atatakai",
        "kana": "あたたかい",
        "kanji": "暖かい",
        "en": "Hangat",
        "audio": ""
      },
      {
        "id": "v12-22",
        "rom": "Suzushii",
        "kana": "すずしい",
        "kanji": "涼しい",
        "en": "Sejuk",
        "audio": ""
      },
      {
        "id": "v12-23",
        "rom": "Kisetsu",
        "kana": "きせつ",
        "kanji": "季節",
        "en": "Musim",
        "audio": ""
      },
      {
        "id": "v12-24",
        "rom": "Fuyuyasumi",
        "kana": "ふゆやすみ",
        "kanji": "冬休み",
        "en": "Liburan Musim Dingin",
        "audio": ""
      },
      {
        "id": "v12-25",
        "rom": "Natsuyasumi",
        "kana": "なつやすみ",
        "kanji": "夏休み",
        "en": "Liburan Musim Panas",
        "audio": ""
      },
      {
        "id": "v12-26",
        "rom": "Hayai",
        "kana": "はやい",
        "kanji": "早い",
        "en": "Cepat (waktu) / Pagi-pagi",
        "audio": ""
      },
      {
        "id": "v12-27",
        "rom": "Tsumetai",
        "kana": "つめたい",
        "kanji": "冷たい",
        "en": "Dingin (benda/minuman, bukan cuaca)",
        "audio": ""
      },
      {
        "id": "v12-28",
        "rom": "Ii / Yoi",
        "kana": "いい / よい",
        "kanji": "良い",
        "en": "Bagus / Baik",
        "audio": ""
      },
      {
        "id": "v12-29",
        "rom": "Warui",
        "kana": "わるい",
        "kanji": "悪い",
        "en": "Jelek / Buruk",
        "audio": ""
      },
      {
        "id": "v12-30",
        "rom": "Yasui",
        "kana": "やすい",
        "kanji": "安い",
        "en": "Murah",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g12-1",
        "title": "1. N1 は N2 より Adj です (N1 Lebih... Dari N2)",
        "desc": "Partikel YORI (より) berarti 'daripada' atau 'dibanding'. Posisinya di belakang benda yang dijadikan pembanding (inferior).",
        "points": [
          "Tokyo wa Osaka YORI ookii desu. (Tokyo lebih besar DARIPADA Osaka).",
          "Perhatikan: Urutan kalimatnya TERBALIK dari bahasa Indonesia. Yang LEBIH disebut duluan (sebelum WA), yang jadi pembanding disebut setelah YORI.",
          "Motto: 'Motto yukkuri hanashite kudasai' (Tolong bicara LEBIH pelan lagi). Motto = lebih (tanpa pembanding eksplisit)."
        ],
        "formula": "N1(lebih) は N2(kurang) より Adj です",
        "native_note": "Kata 'ichiban' (paling/nomor satu) sering digunakan di luar struktur perbandingan formal untuk menekankan kesukaan subjektif yang mutlak (misal: 'Ramen ga ichiban!' = 'Ramen adalah yang terbaik dari semuanya!')."
      },
      {
        "id": "g12-2",
        "title": "2. N1 と N2 と どちらが Adj ですか (Mana Yang Lebih...?)",
        "desc": "Pola pertanyaan untuk membandingkan tepat DUA benda. Jawaban menggunakan pola 'N no HOU GA'.",
        "points": [
          "A: Niku to sakana to dochira ga suki desu ka. (Antara daging dan ikan, mana yang kamu suka?)",
          "B: Niku NO HOU GA suki desu. (Daging YANG LEBIH saya suka).",
          "Jika SAMA: Dochira mo suki desu. (Dua-duanya suka). Dochira mo = keduanya.",
          "CATATAN: Dochira (sopan) = Docchi (kasual). Keduanya sama maknanya."
        ],
        "formula": "N1 と N2 と どちらが Adj ですか → N の ほうが Adj です / どちらも Adj です"
      },
      {
        "id": "g12-3",
        "title": "3. [Kategori] の中で N が 一番 Adj です (Paling...)",
        "desc": "Ichiban (一番) = Nomor 1 / Paling. Digunakan untuk superlative (3+ pilihan). Gunakan 'no naka de' untuk menentukan lingkup.",
        "points": [
          "Supootsu no naka de sakkaa ga ichiban suki desu. (Di antara olahraga, sepak bola yang PALING saya suka).",
          "Nihon de ichiban takai yama wa Fuji-san desu. (Gunung paling tinggi di Jepang adalah Gunung Fuji).",
          "Pertanyaan lingkup: Kisetsu no naka de itsu ga ichiban suki desu ka. (Di antara musim-musim, kapan yang paling disukai?)"
        ],
        "formula": "[Kategori] の中で 何/どこ/いつ/だれ が 一番 Adj ですか"
      }
    ],
    "patterns": [
      {
        "jp": "東京は 大阪より 大きいです。",
        "rom": "Tokyo wa Osaka yori ookii desu.",
        "en": "Tokyo lebih besar daripada Osaka."
      },
      {
        "jp": "肉と 魚と どちらが 好きですか。",
        "rom": "Niku to sakana to dochira ga suki desu ka.",
        "en": "Antara daging dan ikan, mana yang kamu suka?"
      },
      {
        "jp": "肉の ほうが 好きです。",
        "rom": "Niku no hou ga suki desu.",
        "en": "Daging yang lebih saya suka."
      },
      {
        "jp": "日本で 一番 高い 山は 富士山です。",
        "rom": "Nihon de ichiban takai yama wa Fuji-san desu.",
        "en": "Gunung paling tinggi di Jepang adalah Gunung Fuji."
      },
      {
        "jp": "季節の 中で いつが 一番 好きですか。",
        "rom": "Kisetsu no naka de itsu ga ichiban suki desu ka.",
        "en": "Di antara musim, kapan yang paling disukai?"
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: どちらがいいですか (Mana Yang Lebih Bagus?)",
      "dialogue": [
        {
          "speaker": "Santos",
          "jp": "もうすぐ 冬休みですね。どこか 行きますか。",
          "rom": "Mousugu fuyuyasumi desu ne. Dokoka ikimasu ka.",
          "en": "Sebentar lagi libur musim dingin ya. Mau pergi ke suatu tempat?"
        },
        {
          "speaker": "Miller",
          "jp": "ええ。北海道か 沖縄へ 行きたいです。",
          "rom": "Ee. Hokkaido ka Okinawa e ikitai desu.",
          "en": "Iya. Ingin pergi ke Hokkaido atau Okinawa."
        },
        {
          "speaker": "Santos",
          "jp": "そうですか。北海道と 沖縄と どちらが いいですか。",
          "rom": "Sou desu ka. Hokkaido to Okinawa to dochira ga ii desu ka.",
          "en": "Oh begitu. Antara Hokkaido dan Okinawa, mana yang lebih bagus?"
        },
        {
          "speaker": "Miller",
          "jp": "沖縄の ほうが いいです。沖縄は 北海道より 暖かいですから。",
          "rom": "Okinawa no hou ga ii desu. Okinawa wa Hokkaido yori atatakai desu kara.",
          "en": "Okinawa yang lebih baik. Karena Okinawa lebih hangat daripada Hokkaido."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Jika ingin mengatakan 'Tokyo lebih besar dari Osaka', partikel pembanding yang dipakai adalah:",
        "options": [
          {
            "text": "から (Kara)",
            "correct": false
          },
          {
            "text": "より (Yori)",
            "correct": true
          },
          {
            "text": "まで (Made)",
            "correct": false
          },
          {
            "text": "の方が (No hou ga)",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Terjemahkan: 'Gunung Fuji adalah gunung paling tinggi di Jepang'.\nNihon de [       ] takai yama wa Fuji-san desu.",
        "answer": "ichiban"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] Pertanyaan: 'Niku to sakana to dochira ga suki desu ka?'. Anda suka dua-duanya. Jawaban yang tepat:",
        "options": [
          {
            "text": "Niku no hou ga suki desu.",
            "correct": false
          },
          {
            "text": "Dochira mo suki desu.",
            "correct": true
          },
          {
            "text": "Niku ga ichiban suki desu.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Okinawa YANG LEBIH bagus (dari Hokkaido).'\nOkinawa [         ] ii desu.",
        "answer": "no hou ga"
      },
      {
        "type": "mcq",
        "question": "[Renshuu C] 'Dari semua musim, musim apa yang paling Anda suka?' Terjemahan yang tepat adalah:",
        "options": [
          {
            "text": "Kisetsu de ichiban suki na kisetsu wa nan desu ka.",
            "correct": false
          },
          {
            "text": "Kisetsu no naka de dore ga ichiban suki desu ka.",
            "correct": true
          },
          {
            "text": "Donna kisetsu ga suki desu ka.",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Cuaca Kemarin Liburan",
        "situation": "Mengobrol tentang cuaca dan liburan akhir pekan kemarin",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "昨日の 旅行は 寒かったですか。",
            "rom": "Kinou no ryokou wa samukatta desu ka.",
            "en": "Apakah liburan kemarin dingin?"
          },
          {
            "speaker": "B",
            "jp": "いいえ、あまり 寒くなかったです。いい 天気でしたよ。",
            "rom": "Iie, amari samukunakatta desu. Ii tenki deshita yo.",
            "en": "Tidak, tidak begitu dingin. Cuacanya bagus lho."
          },
          {
            "speaker": "A",
            "jp": "それは よかったですね。",
            "rom": "Sore wa yokatta desu ne.",
            "en": "Syukurlah kalau begitu."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Membandingkan Keramaian Dua Kota",
        "situation": "Membandingkan tingkat keramaian kota Tokyo dengan kota Osaka",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "東京と 大阪と どちらが にぎやかですか。",
            "rom": "Toukyou to Osaka to dochira ga nigiyaka desu ka.",
            "en": "Tokyo dan Osaka mana yang lebih ramai?"
          },
          {
            "speaker": "B",
            "jp": "東京の 方が にぎやかです。",
            "rom": "Toukyou no hou ga nigiyaka desu.",
            "en": "Tokyo yang lebih ramai."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Favorit dari Kategori (Olahraga)",
        "situation": "Bertanya tentang jenis olahraga yang paling digemari dari semua cabang olahraga",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "スポーツの 中で 何が 一番 好きですか。",
            "rom": "Supootsu no naka de nani ga ichiban suki desu ka.",
            "en": "Di antara olahraga, apa yang paling Anda sukai?"
          },
          {
            "speaker": "B",
            "jp": "サッカーが 一番 好きです。",
            "rom": "Sakkaa ga ichiban suki desu.",
            "en": "Sepak bola yang paling saya sukai."
          },
          {
            "speaker": "A",
            "jp": "そうですか。",
            "rom": "Sou desu ka.",
            "en": "Oh, begitu ya."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r12-1",
        "jp": "昨日は 雨でしたか。... いいえ、雨じゃありませんでした。いい 天気でした。",
        "rom": "Kinou wa ame deshita ka? ... Iie, ame ja arimasen deshita. Ii tenki deshita.",
        "en": "Apakah kemarin hujan? ... Tidak, tidak hujan. Cuacanya cerah."
      },
      {
        "id": "r12-2",
        "jp": "旅行は 楽しかったですか。... はい、とても 楽しかったです。",
        "rom": "Ryokou wa tanoshikatta desu ka? ... Hai, totemo tanoshikatta desu.",
        "en": "Apakah perjalanannya menyenangkan? ... Ya, sangat menyenangkan."
      },
      {
        "id": "r12-3",
        "jp": "天気は よかったですか。... いいえ、あまり よくありませんでした。",
        "rom": "Tenki wa yokatta desu ka? ... Iie, amari yoku arimasen deshita.",
        "en": "Apakah cuacanya bagus? ... Tidak, tidak begitu bagus."
      },
      {
        "id": "r12-4",
        "jp": "北海道は 九州より 寒いですか。... はい、ずっと 寒いです。",
        "rom": "Hokkaidoo wa Kyuushuu yori samui desu ka? ... Hai, zutto samui desu.",
        "en": "Apakah Hokkaido lebih dingin daripada Kyushu? ... Ya, jauh lebih dingin."
      },
      {
        "id": "r12-5",
        "jp": "どちらが 好きですか。... ビールと 日本酒と どちらが 好きですか。... ビールのほうが 好きです。",
        "rom": "Dochira ga suki desu ka? ... Biiru to nihonshu to dochira ga suki desu ka? ... Biiru no hou ga suki desu.",
        "en": "Yang mana yang Anda sukai? ... Antara bir dan sake Jepang, mana yang Anda sukai? ... Saya lebih suka bir."
      }
    ]
  },
  {
    "id": 13,
    "title": "Lesson 13: Keinginan & Tujuan (Tai-Form)",
    "desc": "Membedah Bab 13. Anda belajar mengekspresikan keinginan (ingin melakukan/ingin benda), menyatakan tujuan pergi ke suatu tempat, dan kata tak-tentu (sesuatu, ke suatu tempat).",
    "locked": false,
    "vocab": [
      {
        "id": "v13-1",
        "rom": "Hoshii",
        "kana": "ほしい",
        "kanji": "欲しい",
        "en": "Ingin (benda) - I-Adj",
        "audio": ""
      },
      {
        "id": "v13-2",
        "rom": "~Tai desu",
        "kana": "〜たいです",
        "kanji": "",
        "en": "Ingin melakukan ~ (akhiran V)",
        "audio": ""
      },
      {
        "id": "v13-3",
        "rom": "Oyogu / Oyogimasu",
        "kana": "およぐ / およぎます",
        "kanji": "泳ぐ",
        "en": "Berenang",
        "audio": ""
      },
      {
        "id": "v13-4",
        "rom": "Asobu / Asobimasu",
        "kana": "あそぶ / あそびます",
        "kanji": "遊ぶ",
        "en": "Bermain / Bersenang-senang",
        "audio": ""
      },
      {
        "id": "v13-5",
        "rom": "Toru / Torimasu",
        "kana": "とる / とります",
        "kanji": "撮る",
        "en": "Mengambil (foto)",
        "audio": ""
      },
      {
        "id": "v13-6",
        "rom": "Tsuri",
        "kana": "つり",
        "kanji": "釣り",
        "en": "Memancing (kata benda)",
        "audio": ""
      },
      {
        "id": "v13-7",
        "rom": "Sukii",
        "kana": "スキー",
        "kanji": "",
        "en": "Ski",
        "audio": ""
      },
      {
        "id": "v13-8",
        "rom": "Umi",
        "kana": "うみ",
        "kanji": "海",
        "en": "Laut",
        "audio": ""
      },
      {
        "id": "v13-9",
        "rom": "Yama",
        "kana": "やま",
        "kanji": "山",
        "en": "Gunung",
        "audio": ""
      },
      {
        "id": "v13-10",
        "rom": "Kawa",
        "kana": "かわ",
        "kanji": "川",
        "en": "Sungai",
        "audio": ""
      },
      {
        "id": "v13-11",
        "rom": "Bijutsukan",
        "kana": "びじゅつかん",
        "kanji": "美術館",
        "en": "Museum Seni",
        "audio": ""
      },
      {
        "id": "v13-12",
        "rom": "Tokoro",
        "kana": "ところ",
        "kanji": "所",
        "en": "Tempat",
        "audio": ""
      },
      {
        "id": "v13-13",
        "rom": "Dokoka",
        "kana": "どこか",
        "kanji": "",
        "en": "Ke suatu tempat (indefinite)",
        "audio": ""
      },
      {
        "id": "v13-14",
        "rom": "Nanika",
        "kana": "なにか",
        "kanji": "",
        "en": "Sesuatu (indefinite)",
        "audio": ""
      },
      {
        "id": "v13-15",
        "rom": "Natsuyasumi",
        "kana": "なつやすみ",
        "kanji": "夏休み",
        "en": "Liburan Musim Panas",
        "audio": ""
      },
      {
        "id": "v13-16",
        "rom": "Fuyuyasumi",
        "kana": "ふゆやすみ",
        "kanji": "冬休み",
        "en": "Liburan Musim Dingin",
        "audio": ""
      },
      {
        "id": "v13-17",
        "rom": "Tenpura",
        "kana": "てんぷら",
        "kanji": "",
        "en": "Tempura",
        "audio": ""
      },
      {
        "id": "v13-18",
        "rom": "Gyuudon",
        "kana": "ぎゅうどん",
        "kanji": "牛丼",
        "en": "Gyudon (semur daging sapi di atas nasi)",
        "audio": ""
      },
      {
        "id": "v13-19",
        "rom": "Teishoku",
        "kana": "ていしょく",
        "kanji": "定食",
        "en": "Set Menu (nasi + lauk + sup)",
        "audio": ""
      },
      {
        "id": "v13-20",
        "rom": "Okanjou",
        "kana": "おかんじょう",
        "kanji": "お勘定",
        "en": "Bon / Tagihan",
        "audio": ""
      },
      {
        "id": "v13-21",
        "rom": "Betsu-betsu ni",
        "kana": "べつべつに",
        "kanji": "別々に",
        "en": "Sendiri-sendiri / Terpisah (bayar)",
        "audio": ""
      },
      {
        "id": "v13-22",
        "rom": "Gochuumon",
        "kana": "ごちゅうもん",
        "kanji": "ご注文",
        "en": "Pesanan (bentuk sopan)",
        "audio": ""
      },
      {
        "id": "v13-23",
        "rom": "Shoushou",
        "kana": "しょうしょう",
        "kanji": "少々",
        "en": "Sedikit / Sebentar (formal)",
        "audio": ""
      },
      {
        "id": "v13-24",
        "rom": "Suteki (na)",
        "kana": "すてき",
        "kanji": "素敵",
        "en": "Keren / Menakjubkan / Luar biasa",
        "audio": ""
      },
      {
        "id": "v13-25",
        "rom": "Kirei (na)",
        "kana": "きれい",
        "kanji": "",
        "en": "Cantik / Bersih / Indah",
        "audio": ""
      },
      {
        "id": "v13-26",
        "rom": "Kaimono",
        "kana": "かいもの",
        "kanji": "買い物",
        "en": "Belanja / Berbelanja (~shimasu)",
        "audio": ""
      },
      {
        "id": "v13-27",
        "rom": "Eiga",
        "kana": "えいが",
        "kanji": "映画",
        "en": "Film / Bioskop",
        "audio": ""
      },
      {
        "id": "v13-28",
        "rom": "Shokuji",
        "kana": "しょくじ",
        "kanji": "食事",
        "en": "Makan (formal) (~shimasu)",
        "audio": ""
      },
      {
        "id": "v13-29",
        "rom": "Shashin",
        "kana": "しゃしん",
        "kanji": "写真",
        "en": "Foto",
        "audio": ""
      },
      {
        "id": "v13-30",
        "rom": "Ryokou",
        "kana": "りょこう",
        "kanji": "旅行",
        "en": "Perjalanan / Jalan-jalan / Wisata",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g13-1",
        "title": "1. V-ます → V-たいです (Ingin Melakukan)",
        "desc": "Ubah akhiran -masu menjadi -tai untuk menyatakan keinginan melakukan sesuatu. Hasilnya berperilaku seperti I-Adjective.",
        "points": [
          "Tabe-masu -> Tabe-TAI desu. (Ingin makan).",
          "Iki-masu -> Iki-TAI desu. (Ingin pergi).",
          "Nomi-masu -> Nomi-TAI desu. (Ingin minum).",
          "Negatif: Tabe-TAKU-NAI desu. (Tidak ingin makan). Konjugasi sama persis dengan I-Adj (karena tai adalah I-Adj).",
          "CATATAN BUDAYA KRITIS: Tai-form HANYA untuk diri sendiri atau bertanya langsung ke lawan bicara. JANGAN bilang 'Tanaka-san wa tabetai desu' (itu lancang menebak keinginan orang ketiga)."
        ],
        "formula": "V-ます stem + たいです (Negatif: ~たくないです)",
        "native_note": "Menyatakan keinginan langsung memakai '~tai desu' di depan umum terkadang terdengar terlalu blak-blakan atau menuntut. Untuk melembutkan ucapan, native speaker biasanya menambahkan akhiran '~ndesu kedo...' di belakangnya (misal: 'mizu o nomitai ndesu kedo' = 'saya ingin minum air...')."
      },
      {
        "id": "g13-2",
        "title": "2. N が ほしいです (Menginginkan Benda)",
        "desc": "Kata sifat 'hoshii' (ingin) digunakan khusus untuk benda fisik/abstrak, bukan aktivitas. Partikelnya GA, bukan O.",
        "points": [
          "Kuruma GA hoshii desu. (Saya menginginkan mobil).",
          "Atarashii pasokon GA hoshii desu. (Saya menginginkan laptop baru).",
          "Negatif: Kuruma ga hoshiku-nai desu. (Tidak menginginkan mobil).",
          "Sama seperti tai, JANGAN gunakan untuk menyatakan keinginan orang ketiga."
        ],
        "formula": "[Benda] が ほしいです (Negatif: ほしくないです)"
      },
      {
        "id": "g13-3",
        "title": "3. Tempat へ V-stem に 行きます (Pergi UNTUK Melakukan)",
        "desc": "Menyatakan TUJUAN dari pergi ke suatu tempat. Partikel NI di sini berarti 'untuk', bukan lokasi.",
        "points": [
          "Umi e oyogi NI ikimasu. (Pergi ke laut UNTUK berenang).",
          "Kobe e Indo-ryouri o tabe NI ikimasu. (Pergi ke Kobe UNTUK makan masakan India).",
          "Bentuk kata kerjanya: Gunakan STEM (tanpa -masu). Tabe-masu -> tabe. Oyogi-masu -> oyogi. Shi-masu -> shi.",
          "Kata kerja gerak yang bisa dipakai: ikimasu (pergi), kimasu (datang), kaerimasu (pulang)."
        ],
        "formula": "[Tempat] へ V-stem に 行きます/来ます/帰ります"
      },
      {
        "id": "g13-4",
        "title": "4. どこか / なにか (Suatu Tempat / Sesuatu)",
        "desc": "Kata tanya + KA berubah menjadi kata tak-tentu (indefinite). Artinya berubah dari 'pertanyaan' jadi 'ketidaktentuan'.",
        "points": [
          "Doko (Di mana) + ka = Dokoka (Di suatu tempat). Dokoka ikitai desu. (Ingin pergi ke suatu tempat).",
          "Nani (Apa) + ka = Nanika (Sesuatu). Nanika tabetai desu. (Ingin makan sesuatu).",
          "Dare (Siapa) + ka = Dareka (Seseorang). Dareka imasu ka. (Ada seseorang kah?).",
          "Dalam kalimat POSITIF, partikel e/o sering DIHILANGKAN: 'Dokoka ikitai' (bukan 'Dokoka e ikitai')."
        ],
        "formula": "Kata Tanya + か = Indefinite (どこか/なにか/だれか)"
      }
    ],
    "patterns": [
      {
        "jp": "神戸へ インド料理を 食べに 行きます。",
        "rom": "Koube e Indo-ryouri o tabe ni ikimasu.",
        "en": "Saya pergi ke Kobe untuk makan masakan India."
      },
      {
        "jp": "わたしは 新しい パソコンが ほしいです。",
        "rom": "Watashi wa atarashii pasokon ga hoshii desu.",
        "en": "Saya menginginkan laptop baru."
      },
      {
        "jp": "冬休みに 何を したいですか。",
        "rom": "Fuyuyasumi ni nani o shitai desu ka.",
        "en": "Di liburan musim dingin ingin melakukan apa?"
      },
      {
        "jp": "どこか 行きたいです。",
        "rom": "Dokoka ikitai desu.",
        "en": "Saya ingin pergi ke suatu tempat."
      },
      {
        "jp": "海へ 泳ぎに 行きたいです。",
        "rom": "Umi e oyogi ni ikitai desu.",
        "en": "Saya ingin pergi ke laut untuk berenang."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: 別々にお願いします (Bayar Sendiri-sendiri)",
      "dialogue": [
        {
          "speaker": "Pelayan",
          "jp": "ご注文は？",
          "rom": "Gochuumon wa?",
          "en": "Pesanannya?"
        },
        {
          "speaker": "Santos",
          "jp": "わたしは てんぷら定食。",
          "rom": "Watashi wa tenpura-teishoku.",
          "en": "Saya set tempura."
        },
        {
          "speaker": "Miller",
          "jp": "わたしは 牛丼。",
          "rom": "Watashi wa gyuudon.",
          "en": "Saya gyudon (semur daging sapi)."
        },
        {
          "speaker": "Pelayan",
          "jp": "定食と 牛丼ですね。少々 お待ちください。",
          "rom": "Teishoku to gyuudon desu ne. Shoushou omachi kudasai.",
          "en": "Set menu dan gyudon ya. Tolong tunggu sebentar."
        },
        {
          "speaker": "Miller",
          "jp": "すみません。お勘定 お願いします。",
          "rom": "Sumimasen. Okanjou onegaishimasu.",
          "en": "Permisi. Minta bonnya."
        },
        {
          "speaker": "Santos",
          "jp": "別々に お願いします。",
          "rom": "Betsu-betsu ni onegaishimasu.",
          "en": "Tolong pisahkan (bayarnya sendiri-sendiri)."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Jika ingin bilang 'Ingin makan sushi', bentuk kata kerjanya adalah:",
        "options": [
          {
            "text": "Sushi o tabemasu.",
            "correct": false
          },
          {
            "text": "Sushi o tabetai desu.",
            "correct": true
          },
          {
            "text": "Sushi ga hoshii desu.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Terjemahkan: 'Pergi ke laut untuk berenang'.\nUmi e oyogi [     ] ikimasu.",
        "answer": "ni"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] 'Saya menginginkan MOBIL (benda)'. Partikel yang dipakai sebelum 'hoshii' adalah:",
        "options": [
          {
            "text": "を (O)",
            "correct": false
          },
          {
            "text": "が (GA)",
            "correct": true
          },
          {
            "text": "は (WA)",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] Bentuk NEGATIF dari 'tabetai' (ingin makan) adalah:\nTabe-[         ] desu.",
        "answer": "takunai"
      },
      {
        "type": "mcq",
        "question": "[Budaya] Anda mengatakan keinginan orang ketiga: 'Tanaka-san wa tabetai desu'. Ini adalah:",
        "options": [
          {
            "text": "Benar dan sopan.",
            "correct": false
          },
          {
            "text": "SALAH. Tai-form hanya untuk diri sendiri atau pertanyaan langsung.",
            "correct": true
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Kado Impian",
        "situation": "Menanyakan barang yang paling diinginkan sebagai hadiah ulang tahun",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "誕生日に 何が 一番 欲しいですか。",
            "rom": "Tanjoubi ni nani ga ichiban hoshii desu ka.",
            "en": "Saat ulang tahun barang apa yang paling diinginkan?"
          },
          {
            "speaker": "B",
            "jp": "新しい パソコンが 欲しいです。",
            "rom": "Atarashii pasokon ga hoshii desu.",
            "en": "Ingin laptop baru."
          },
          {
            "speaker": "A",
            "jp": "そうですか。いいですね。",
            "rom": "Sou desu ka. Ii desu ne.",
            "en": "Oh begitu. Keren/bagus sekali ya."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Rencana Kegiatan Akhir Pekan",
        "situation": "Mengobrol tentang rencana aktivitas akhir pekan yang ingin dilaksanakan",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "今週の 土曜日に 何を したいですか。",
            "rom": "Konshuu no doyoubi ni nani o shitai desu ka.",
            "en": "Hari Sabtu minggu ini ingin melakukan apa?"
          },
          {
            "speaker": "B",
            "jp": "海へ 行って、泳ぎたいです。",
            "rom": "Umi e itte, oyogitai esu.",
            "en": "Pergi ke pantai dan ingin berenang."
          },
          {
            "speaker": "A",
            "jp": "いいですね。楽しそうですね。",
            "rom": "Ii desu ne. Tanoshisou desu ne.",
            "en": "Asyik ya. Kelihatannya menyenangkan."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Mengajak Pergi Makan Bersama",
        "situation": "Mengajak pergi makan bersama karena perut sudah lapar",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "お腹が 空きましたね。何か 食べに行きませんか。",
            "rom": "O-naka ga sukimashita ne. Nani ka tabeni ikimasen ka.",
            "en": "Perut sudah lapar ya. Maukah pergi makan sesuatu?"
          },
          {
            "speaker": "B",
            "jp": "ええ。あの 駅の 近くの 店へ 行きましょう。",
            "rom": "Ee. Ano eki no chikaku no mise e ikimashou.",
            "en": "Iya. Mari kita pergi ke toko dekat stasiun itu."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r13-1",
        "jp": "今 何が 一番 欲しいですか。... 車が 欲しいです。",
        "rom": "Ima nani ga ichiban hoshii desu ka? ... Kuruma ga hoshii desu.",
        "en": "Sekarang apa yang paling Anda inginkan? ... Saya ingin mobil."
      },
      {
        "id": "r13-2",
        "jp": "パソコンが 欲しいですか。... いいえ、欲しくありません。",
        "rom": "Pasokon ga hoshii desu ka? ... Iie, hoshiku arimasen.",
        "en": "Apakah Anda menginginkan komputer? ... Tidak, saya tidak menginginkannya."
      },
      {
        "id": "r13-3",
        "jp": "週末 何を したいですか。... 映画を 見たいです。",
        "rom": "Shuumatsu nani o shitai desu ka? ... Eiga o mitai desu.",
        "en": "Akhir pekan ini ingin melakukan apa? ... Ingin menonton film."
      },
      {
        "id": "r13-4",
        "jp": "どこへ 行きたいですか。... 京都へ 行きたいです。お寺を 見たいです。",
        "rom": "Doko e ikitai desu ka? ... Kyo-to e ikitai desu. Otera o mitai desu.",
        "en": "Ingin pergi ke mana? ... Ingin pergi ke Kyoto. Saya ingin melihat kuil Buddha."
      },
      {
        "id": "r13-5",
        "jp": "暑いですから、何か 飲みたいですね。... ええ、冷たい ビールを 飲みたいですね。",
        "rom": "Atsui desu kara, nanika nomitai desu ne. ... Ee, tsumetai biiru o nomitai desu ne.",
        "en": "Karena panas, kita ingin minum sesuatu ya. ... Benar, kita ingin minum bir dingin ya."
      }
    ]
  },
  {
    "id": 14,
    "title": "Lesson 14: Te-Form & Permintaan (Kudasai)",
    "desc": "BAB TERPENTING di seluruh MNN! Anda belajar mengubah kata kerja ke Bentuk-Te (Te-Form), yang menjadi fondasi MUTLAK dari hampir semua konjugasi lanjutan: sedang berlangsung, izin, larangan, dan sambungan kalimat.",
    "locked": false,
    "vocab": [
      {
        "id": "v14-1",
        "rom": "Tsukemasu",
        "kana": "つけます",
        "kanji": "",
        "en": "Menyalakan (lampu/AC)",
        "audio": ""
      },
      {
        "id": "v14-2",
        "rom": "Keshimasu",
        "kana": "けします",
        "kanji": "消します",
        "en": "Mematikan (lampu/AC)",
        "audio": ""
      },
      {
        "id": "v14-3",
        "rom": "Akemasu",
        "kana": "あけます",
        "kanji": "開けます",
        "en": "Membuka (pintu/jendela)",
        "audio": ""
      },
      {
        "id": "v14-4",
        "rom": "Shimemasu",
        "kana": "しめます",
        "kanji": "閉めます",
        "en": "Menutup (pintu/jendela)",
        "audio": ""
      },
      {
        "id": "v14-5",
        "rom": "Isogu / Isogimasu",
        "kana": "いそぐ",
        "kanji": "急ぐ",
        "en": "Bergegas / Terburu-buru",
        "audio": ""
      },
      {
        "id": "v14-6",
        "rom": "Matsu / Machimasu",
        "kana": "まつ",
        "kanji": "待つ",
        "en": "Menunggu",
        "audio": ""
      },
      {
        "id": "v14-7",
        "rom": "Tomeru / Tomemasu",
        "kana": "とめる",
        "kanji": "止める",
        "en": "Menghentikan / Memarkirkan",
        "audio": ""
      },
      {
        "id": "v14-8",
        "rom": "Mawasu / Mawashimasu",
        "kana": "まわす",
        "kanji": "回す",
        "en": "Memutar",
        "audio": ""
      },
      {
        "id": "v14-9",
        "rom": "Hiku / Hikimasu",
        "kana": "ひく",
        "kanji": "引く",
        "en": "Menarik",
        "audio": ""
      },
      {
        "id": "v14-10",
        "rom": "Osu / Oshimasu",
        "kana": "おす",
        "kanji": "押す",
        "en": "Mendorong / Menekan",
        "audio": ""
      },
      {
        "id": "v14-11",
        "rom": "Nomu / Nomimasu",
        "kana": "のむ",
        "kanji": "飲む",
        "en": "Minum",
        "audio": ""
      },
      {
        "id": "v14-12",
        "rom": "Yobu / Yobimasu",
        "kana": "よぶ",
        "kanji": "呼ぶ",
        "en": "Memanggil",
        "audio": ""
      },
      {
        "id": "v14-13",
        "rom": "Toru / Torimasu",
        "kana": "とる",
        "kanji": "撮る",
        "en": "Mengambil (foto)",
        "audio": ""
      },
      {
        "id": "v14-14",
        "rom": "Kiru / Kirimasu",
        "kana": "きる",
        "kanji": "切る",
        "en": "Memotong",
        "audio": ""
      },
      {
        "id": "v14-15",
        "rom": "Okuru / Okurimasu",
        "kana": "おくる",
        "kanji": "送る",
        "en": "Mengirim",
        "audio": ""
      },
      {
        "id": "v14-16",
        "rom": "Denki",
        "kana": "でんき",
        "kanji": "電気",
        "en": "Lampu / Listrik",
        "audio": ""
      },
      {
        "id": "v14-17",
        "rom": "Mado",
        "kana": "まど",
        "kanji": "窓",
        "en": "Jendela",
        "audio": ""
      },
      {
        "id": "v14-18",
        "rom": "Doa",
        "kana": "ドア",
        "kanji": "",
        "en": "Pintu",
        "audio": ""
      },
      {
        "id": "v14-19",
        "rom": "Shashin",
        "kana": "しゃしん",
        "kanji": "写真",
        "en": "Foto",
        "audio": ""
      },
      {
        "id": "v14-20",
        "rom": "Eakon",
        "kana": "エアコン",
        "kanji": "",
        "en": "AC (Air Conditioner)",
        "audio": ""
      },
      {
        "id": "v14-21",
        "rom": "Pasupōto",
        "kana": "パスポート",
        "kanji": "",
        "en": "Paspor",
        "audio": ""
      },
      {
        "id": "v14-22",
        "rom": "Namae",
        "kana": "なまえ",
        "kanji": "名前",
        "en": "Nama",
        "audio": ""
      },
      {
        "id": "v14-23",
        "rom": "Tabako",
        "kana": "たばこ",
        "kanji": "",
        "en": "Rokok",
        "audio": ""
      },
      {
        "id": "v14-24",
        "rom": "Suimasu (tabako o)",
        "kana": "すいます",
        "kanji": "吸います",
        "en": "Merokok / Menghisap",
        "audio": ""
      },
      {
        "id": "v14-25",
        "rom": "Misemasu",
        "kana": "みせます",
        "kanji": "見せます",
        "en": "Menunjukkan / Memperlihatkan",
        "audio": ""
      },
      {
        "id": "v14-26",
        "rom": "Oshiemasu",
        "kana": "おしえます",
        "kanji": "教えます",
        "en": "Mengajarkan / Memberitahu",
        "audio": ""
      },
      {
        "id": "v14-27",
        "rom": "Hanashimasu",
        "kana": "はなします",
        "kanji": "話します",
        "en": "Berbicara / Bercerita",
        "audio": ""
      },
      {
        "id": "v14-28",
        "rom": "Tsukaimasu",
        "kana": "つかいます",
        "kanji": "使います",
        "en": "Memakai / Menggunakan",
        "audio": ""
      },
      {
        "id": "v14-29",
        "rom": "Mochimasu",
        "kana": "もちます",
        "kanji": "持ちます",
        "en": "Memegang / Membawa (benda)",
        "audio": ""
      },
      {
        "id": "v14-30",
        "rom": "Chotto",
        "kana": "ちょっと",
        "kanji": "",
        "en": "Sebentar / Sedikit",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g14-1",
        "title": "1. Te-Form: Aturan Konversi (WAJIB HAFAL MATI)",
        "desc": "Te-Form adalah FONDASI seluruh bahasa Jepang lanjutan. Tanpa menghafal ini, Anda TIDAK bisa maju. Ada 3 kelompok kata kerja dengan aturan berbeda.",
        "points": [
          "--- KELOMPOK 1 (Godan / U-verbs) --- Akhiran berubah tergantung huruf terakhir SEBELUM -masu:",
          "い/ち/り → って: Kai-masu→Katte. Machi-masu→Matte. Kaeri-masu→Kaette.",
          "み/に/び → んで: Nomi-masu→Nonde. Shini-masu→Shinde. Yobi-masu→Yonde.",
          "き → いて: Kaki-masu→Kaite. Kiki-masu→Kiite. ★PENGECUALIAN: Iki-masu→Itte (bukan Iite!).",
          "ぎ → いで: Isogi-masu→Isoide. Oyogi-masu→Oyoide.",
          "し → して: Hanashi-masu→Hanashite. Kashi-masu→Kashite.",
          "--- KELOMPOK 2 (Ichidan / Ru-verbs) --- SIMPLE: Buang -masu, tambah -te. Tabe-masu→Tabe-te. Mi-masu→Mi-te. Ake-masu→Ake-te.",
          "--- KELOMPOK 3 (Irregular) --- Hanya 2: Shi-masu→Shite. Ki-masu→Kite."
        ],
        "formula": "HAFAL TABEL! い/ち/り→って | み/に/び→んで | き→いて | ぎ→いで | し→して | Grp2: -て | Grp3: して/きて",
        "native_note": "Dalam lingkungan pertemanan akrab, Anda cukup mengucapkan kata kerja bentuk '~te' tanpa 'kudasai' untuk meminta tolong secara ramah dan santai (misal: 'Chotto matte!' = 'Tunggu sebentar!', 'Kore, mite!' = 'Coba lihat ini!')."
      },
      {
        "id": "g14-2",
        "title": "2. V-て ください (Tolong Lakukan ~)",
        "desc": "Te-Form + Kudasai = Permintaan sopan untuk melakukan sesuatu. Ini bentuk permintaan paling umum dan versatile.",
        "points": [
          "Chotto matte kudasai. (Tolong tunggu sebentar).",
          "Shashin o totte kudasai. (Tolong ambilkan foto).",
          "Namae o kaite kudasai. (Tolong tuliskan nama Anda).",
          "Sumimasen ga, mou ichido itte kudasai. (Maaf, tolong ucapkan sekali lagi)."
        ],
        "formula": "V-て ください"
      },
      {
        "id": "g14-3",
        "title": "3. V-て います (Sedang ~ / Keadaan)",
        "desc": "Te-Form + Imasu memiliki DUA makna penting: (A) Aksi SEDANG berlangsung (Progressive), dan (B) KEADAAN yang masih berlaku (State).",
        "points": [
          "(A) Progressive: Ima gohan o tabete imasu. (Saya SEDANG makan nasi sekarang).",
          "(A) Progressive: Dare ga denwa o kakete imasu ka. (Siapa yang SEDANG menelepon?).",
          "(B) State: Miller-san wa kekkon shite imasu. (Pak Miller SUDAH menikah / dalam keadaan menikah).",
          "(B) State: Watashi wa Osaka ni sunde imasu. (Saya tinggal di Osaka — keadaan permanen)."
        ],
        "formula": "V-て います (Progressive & State)"
      },
      {
        "id": "g14-4",
        "title": "4. V-ても いいですか (Bolehkah Saya ~?)",
        "desc": "Te-Form + Mo ii desu ka = Meminta izin. Ini cara paling standar untuk meminta izin dalam bahasa Jepang sopan.",
        "points": [
          "Shashin o tottemo ii desu ka. (Bolehkah saya mengambil foto?).",
          "Koko de tabako o suttemo ii desu ka. (Bolehkah saya merokok di sini?).",
          "Jawab YA: Ee, ii desu yo. (Ya, boleh). / Ee, doozo. (Ya, silakan).",
          "Jawab TIDAK: Sumimasen, chotto... (Maaf, sedikit [bermasalah]...). Pola penolakan halus khas Jepang."
        ],
        "formula": "V-ても いいですか → はい、いいですよ / すみません、ちょっと…"
      },
      {
        "id": "g14-5",
        "title": "5. V-ては いけません (Tidak Boleh / Dilarang)",
        "desc": "Te-Form + Wa Ikemasen = Larangan tegas. Kebalikan dari 'temo ii desu ka'. Ini adalah perintah LARANGAN.",
        "points": [
          "Koko de tabako o suttewa ikemasen. (TIDAK BOLEH merokok di sini).",
          "Koko ni kuruma o tometewa ikemasen. (TIDAK BOLEH memarkirkan mobil di sini).",
          "Shashin o tottewa ikemasen. (TIDAK BOLEH mengambil foto — misal di museum)."
        ],
        "formula": "V-ては いけません"
      }
    ],
    "patterns": [
      {
        "jp": "すみませんが、ちょっと 待って ください。",
        "rom": "Sumimasen ga, chotto matte kudasai.",
        "en": "Maaf, tolong tunggu sebentar."
      },
      {
        "jp": "ミラーさんは 今 電話を かけて います。",
        "rom": "Miraa-san wa ima denwa o kakete imasu.",
        "en": "Pak Miller sedang menelepon sekarang."
      },
      {
        "jp": "写真を 撮っても いいですか。",
        "rom": "Shashin o tottemo ii desu ka.",
        "en": "Bolehkah saya mengambil foto?"
      },
      {
        "jp": "ここで たばこを 吸っては いけません。",
        "rom": "Koko de tabako o suttewa ikemasen.",
        "en": "Tidak boleh merokok di sini."
      },
      {
        "jp": "もう 一度 言って ください。",
        "rom": "Mou ichido itte kudasai.",
        "en": "Tolong ucapkan sekali lagi."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: 京都行きは何番線ですか (Ke Kyoto Jalur Berapa?)",
      "dialogue": [
        {
          "speaker": "Miller",
          "jp": "すみません。京都行きは 何番線ですか。",
          "rom": "Sumimasen. Kyouto-iki wa nan-bansen desu ka.",
          "en": "Permisi. Kereta menuju Kyoto di jalur berapa?"
        },
        {
          "speaker": "Pegawai",
          "jp": "４番線です。",
          "rom": "Yon-bansen desu.",
          "en": "Jalur 4."
        },
        {
          "speaker": "Miller",
          "jp": "次の「のぞみ」は 何時ですか。",
          "rom": "Tsugi no 'Nozomi' wa nan-ji desu ka.",
          "en": "Nozomi berikutnya jam berapa?"
        },
        {
          "speaker": "Pegawai",
          "jp": "１１時１０分です。",
          "rom": "Juuichi-ji juppun desu.",
          "en": "Jam 11:10."
        },
        {
          "speaker": "Miller",
          "jp": "ありがとう ございます。",
          "rom": "Arigatou gozaimasu.",
          "en": "Terima kasih banyak."
        },
        {
          "speaker": "Miller",
          "jp": "（友達に）急いで ください！",
          "rom": "(Tomodachi ni) Isoide kudasai!",
          "en": "(Ke teman) Tolong bergegas!"
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Te-Form dari 'Nomimasu' (minum: み→んで) adalah:",
        "options": [
          {
            "text": "Nomite",
            "correct": false
          },
          {
            "text": "Nonde",
            "correct": true
          },
          {
            "text": "Nominde",
            "correct": false
          },
          {
            "text": "Nomite",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Te-Form dari 'Machimasu' (menunggu: ち→って) adalah:\nMa-[     ]",
        "answer": "tte"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] Te-Form dari 'Ikimasu' (pergi) adalah IRREGULIER. Bentuk yang benar:",
        "options": [
          {
            "text": "Iite",
            "correct": false
          },
          {
            "text": "Itte",
            "correct": true
          },
          {
            "text": "Ikite",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] Pak Miller SEDANG membaca buku.\nMiraa-san wa hon o [       ] imasu.",
        "answer": "yonde"
      },
      {
        "type": "mcq",
        "question": "[Renshuu D] Anda ingin meminta izin mengambil foto. Kalimat yang tepat:",
        "options": [
          {
            "text": "Shashin o tottewa ikemasen ka.",
            "correct": false
          },
          {
            "text": "Shashin o tottemo ii desu ka.",
            "correct": true
          },
          {
            "text": "Shashin o totte kudasai.",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Meminta Tolong Diambilkan Barang (Garam)",
        "situation": "Meminta tolong kepada rekan semeja untuk mengambilkan wadah garam",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "すみませんが、その 塩を 取って ください。",
            "rom": "Sumimasen ga, sono shio o totte kudasai.",
            "en": "Maaf/permisi, tolong ambilkan garam itu."
          },
          {
            "speaker": "B",
            "jp": "はい、どうぞ。",
            "rom": "Hai, douzo.",
            "en": "Ya, silakan."
          },
          {
            "speaker": "A",
            "jp": "ありがとうございます。",
            "rom": "Arigatou gozaimasu.",
            "en": "Terima kasih banyak."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menawarkan Bantuan Membawa Barang",
        "situation": "Menawarkan bantuan membawakan barang bawaan teman yang sangat berat",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "荷物が 重そうですね。手伝いましょうか。",
            "rom": "Nimotsu ga omosou desu ne. Tetsudaimashou ka.",
            "en": "Barang bawaannya kelihatan berat ya. Boleh saya bantu?"
          },
          {
            "speaker": "B",
            "jp": "ありがとうございます。お願いします。",
            "rom": "Arigatou gozaimasu. Onegai shimasu.",
            "en": "Terima kasih banyak. Tolong ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Lokasi Layanan (Loket Tiket)",
        "situation": "Bertanya arah lokasi loket penjualan tiket di stasiun",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "すみません、切符売り場は どこですか。",
            "rom": "Sumimasen, kippu uriba wa doko desu ka.",
            "en": "Permisi, loket penjualan tiket ada di mana?"
          },
          {
            "speaker": "B",
            "jp": "あの 角を 右へ 曲がって ください。",
            "rom": "Ano kado o migi e magatte kudasai.",
            "en": "Tolong belok ke kanan di sudut jalan itu."
          },
          {
            "speaker": "A",
            "jp": "わかりました。ありがとう ございます。",
            "rom": "Wakarimashita. Arigatou gozaimasu.",
            "en": "Saya mengerti. Terima kasih banyak."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r14-1",
        "jp": "ちょっと 待ってください。... はい、分かりました。",
        "rom": "Chotto matte kudasai. ... Hai, wakarimashita.",
        "en": "Tolong tunggu sebentar. ... Ya, baiklah."
      },
      {
        "id": "r14-2",
        "jp": "荷物を 持ちましょうか。... すみません。お願いします。",
        "rom": "Nimotsu o mochimashou ka? ... Sumimasen. Onegaishimasu.",
        "en": "Bolehkah saya bawakan barang Anda? ... Permisi (Maaf merepotkan). Tolong ya."
      },
      {
        "id": "r14-3",
        "jp": "塩を 取ってください。... はい、どうぞ。",
        "rom": "Shio o totte kudasai. ... Hai, douzo.",
        "en": "Tolong ambilkan garam. ... Ya, ini silakan."
      },
      {
        "id": "r14-4",
        "jp": "今 雨が 降っていますか。... いいえ、降っていません。",
        "rom": "Ima ame ga futte imasu ka? ... Iie, futte imasen.",
        "en": "Apakah sekarang sedang turun hujan? ... Tidak, tidak sedang hujan."
      },
      {
        "id": "r14-5",
        "jp": "タクsiを 呼びましょうか。... いいえ、結構です。",
        "rom": "Takushii o yobimashou ka? ... Iie, kekkou desu.",
        "en": "Bolehkah saya panggilkan taksi? ... Tidak, terima kasih (sudah cukup)."
      }
    ]
  },
  {
    "id": 15,
    "title": "Lesson 15: Te-Form Sambung & Izin",
    "desc": "Membedah Bab 15. Memperluas Te-Form untuk menghubungkan beberapa aksi berurutan, mendeskripsikan keadaan permanen (tinggal, tahu), dan menyambung kata sifat.",
    "locked": false,
    "vocab": [
      {
        "id": "v15-1",
        "rom": "Tatsu / Tachimasu",
        "kana": "たつ",
        "kanji": "立つ",
        "en": "Berdiri",
        "audio": ""
      },
      {
        "id": "v15-2",
        "rom": "Suwaru / Suwarimasu",
        "kana": "すわる",
        "kanji": "座る",
        "en": "Duduk",
        "audio": ""
      },
      {
        "id": "v15-3",
        "rom": "Tsukau / Tsukaimasu",
        "kana": "つかう",
        "kanji": "使う",
        "en": "Menggunakan",
        "audio": ""
      },
      {
        "id": "v15-4",
        "rom": "Oku / Okimasu",
        "kana": "おく",
        "kanji": "置く",
        "en": "Menaruh / Meletakkan",
        "audio": ""
      },
      {
        "id": "v15-5",
        "rom": "Tsukuru / Tsukurimasu",
        "kana": "つくる",
        "kanji": "作る",
        "en": "Membuat",
        "audio": ""
      },
      {
        "id": "v15-6",
        "rom": "Uru / Urimasu",
        "kana": "うる",
        "kanji": "売る",
        "en": "Menjual",
        "audio": ""
      },
      {
        "id": "v15-7",
        "rom": "Shiru / Shirimasu",
        "kana": "しる",
        "kanji": "知る",
        "en": "Mengetahui (★Spesial: negatifnya 'shirimasen')",
        "audio": ""
      },
      {
        "id": "v15-8",
        "rom": "Sumu / Sumimasu",
        "kana": "すむ",
        "kanji": "住む",
        "en": "Tinggal / Berdomisili",
        "audio": ""
      },
      {
        "id": "v15-9",
        "rom": "Hataraku / Hatarakimasu",
        "kana": "はたらく",
        "kanji": "働く",
        "en": "Bekerja",
        "audio": ""
      },
      {
        "id": "v15-10",
        "rom": "Motsu / Mochimasu",
        "kana": "もつ",
        "kanji": "持つ",
        "en": "Memegang / Membawa / Memiliki",
        "audio": ""
      },
      {
        "id": "v15-11",
        "rom": "Kekkon suru",
        "kana": "けっこんする",
        "kanji": "結婚する",
        "en": "Menikah",
        "audio": ""
      },
      {
        "id": "v15-12",
        "rom": "Kenkyuu",
        "kana": "けんきゅう",
        "kanji": "研究",
        "en": "Penelitian / Riset",
        "audio": ""
      },
      {
        "id": "v15-13",
        "rom": "Shiryou",
        "kana": "しりょう",
        "kanji": "資料",
        "en": "Bahan / Dokumen",
        "audio": ""
      },
      {
        "id": "v15-14",
        "rom": "Juusho",
        "kana": "じゅうしょ",
        "kanji": "住所",
        "en": "Alamat",
        "audio": ""
      },
      {
        "id": "v15-15",
        "rom": "Denwabangou",
        "kana": "でんわばんごう",
        "kanji": "電話番号",
        "en": "Nomor Telepon",
        "audio": ""
      },
      {
        "id": "v15-16",
        "rom": "Shiyakusho",
        "kana": "しやくしょ",
        "kanji": "市役所",
        "en": "Balai Kota / Kantor Pemerintah Kota",
        "audio": ""
      },
      {
        "id": "v15-17",
        "rom": "Futoi / Hosoi",
        "kana": "ふとい / ほそい",
        "kanji": "太い / 細い",
        "en": "Tebal-Gemuk / Tipis-Kurus",
        "audio": ""
      },
      {
        "id": "v15-18",
        "rom": "Akarui / Kurai",
        "kana": "あかるい / くらい",
        "kanji": "明るい / 暗い",
        "en": "Terang / Gelap",
        "audio": ""
      },
      {
        "id": "v15-19",
        "rom": "Katarogu",
        "kana": "カタログ",
        "kanji": "",
        "en": "Katalog",
        "audio": ""
      },
      {
        "id": "v15-20",
        "rom": "Jikokuhyou",
        "kana": "じこくひょう",
        "kanji": "時刻表",
        "en": "Jadwal kereta / Tabel waktu",
        "audio": ""
      },
      {
        "id": "v15-21",
        "rom": "Fuku",
        "kana": "ふく",
        "kanji": "服",
        "en": "Pakaian / Baju",
        "audio": ""
      },
      {
        "id": "v15-22",
        "rom": "Seihin",
        "kana": "せいひん",
        "kanji": "製品",
        "en": "Produk / Barang buatan",
        "audio": ""
      },
      {
        "id": "v15-23",
        "rom": "Sofuto",
        "kana": "ソフト",
        "kanji": "",
        "en": "Perangkat lunak / Software",
        "audio": ""
      },
      {
        "id": "v15-24",
        "rom": "Senmon",
        "kana": "せんもん",
        "kanji": "専門",
        "en": "Spesialisasi / Keahlian",
        "audio": ""
      },
      {
        "id": "v15-25",
        "rom": "Haisha",
        "kana": "はいしゃ",
        "kanji": "歯医者",
        "en": "Dokter gigi",
        "audio": ""
      },
      {
        "id": "v15-26",
        "rom": "Tokoya",
        "kana": "とこや",
        "kanji": "床屋",
        "en": "Tukang cukur / Barbershop",
        "audio": ""
      },
      {
        "id": "v15-27",
        "rom": "Pureigaido",
        "kana": "プレイガイド",
        "kanji": "",
        "en": "Loket tiket / Agen tiket",
        "audio": ""
      },
      {
        "id": "v15-28",
        "rom": "Dokushin",
        "kana": "どくしん",
        "kanji": "独身",
        "en": "Belum menikah / Lajang",
        "audio": ""
      },
      {
        "id": "v15-29",
        "rom": "Tokuni",
        "kana": "とくに",
        "kanji": "特に",
        "en": "Terutama / Khususnya",
        "audio": ""
      },
      {
        "id": "v15-30",
        "rom": "Omoidashimasu",
        "kana": "おもいだします",
        "kanji": "思い出します",
        "en": "Teringat kembali / Mengingat kembali",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g15-1",
        "title": "1. V-て、V-て、V (Merangkai Aksi Berurutan)",
        "desc": "Te-Form bisa menyambung beberapa aksi secara kronologis dalam satu kalimat panjang. Hanya kalimat TERAKHIR yang dikonjugasikan penuh.",
        "points": [
          "Asa okite, gohan o tabete, kaisha e ikimasu. (Pagi bangun, makan nasi, lalu pergi ke kantor).",
          "Te-Form menyatakan urutan temporal. Kata kerja TERAKHIR saja yang bentuk -masu/-mashita.",
          "Bisa juga untuk aksi yang TIDAK berurutan ketat, tapi saling berkaitan: Kyou wa toshokan de hon o yonde, repōto o kakimashita. (Hari ini membaca buku di perpustakaan DAN menulis laporan)."
        ],
        "formula": "V1-て、V2-て、V3-ます (hanya V terakhir yang formal)",
        "native_note": "Meminta izin secara kasual kepada teman sangat mudah: cukup hilangkan 'mo ii desu ka' dan ganti menjadi '~te ii?' dengan intonasi bertanya (misal: 'Kore, tabete ii?' = 'Boleh makan ini?')."
      },
      {
        "id": "g15-2",
        "title": "2. V-て います (Keadaan Permanen / Status)",
        "desc": "Perluasan dari Bab 14. Te-imasu juga berarti KEADAAN PERMANEN/KEBIASAAN, bukan hanya 'sedang'.",
        "points": [
          "Watashi wa Osaka ni sunde imasu. (Saya TINGGAL/berdomisili di Osaka). Bukan 'sedang tinggal sementara'.",
          "Kono kotoba o shitte imasu ka. (Apakah Anda TAHU kata ini?). Shitte imasu = Tahu (keadaan tetap).",
          "★AWAS PENTING: Negatif dari 'shitte imasu' (tahu) adalah 'shirimasen' (tidak tahu). BUKAN 'shitte imasen'!",
          "Miller-san wa IMC de hataraite imasu. (Pak Miller BEKERJA di perusahaan IMC)."
        ],
        "formula": "V-て います (keadaan tetap/status)"
      },
      {
        "id": "g15-3",
        "title": "3. I-Adj-くて / Na-Adj-で / N-で (Menyambung Sifat & Benda)",
        "desc": "Kata sifat dan kata benda juga punya 'Te-Form' untuk menyambung keterangan dalam satu kalimat.",
        "points": [
          "I-Adj: Buang い, tambah くて. Yasui→Yasukute oishii desu. (Murah DAN enak).",
          "I-Adj Negatif sambung: ~kunakute. Takaku-nakute ii desu. (Tidak mahal DAN bagus).",
          "Na-Adj: Tambah で. Shizuka→Shizuka de kirei na machi desu. (Kota yang tenang DAN cantik).",
          "Kata Benda: Tambah で. Gakusei→Gakusei de, 20-sai desu. (Pelajar, DAN berumur 20 tahun).",
          "CATATAN: い-Adj negatif: kunakute. Na-Adj negatif: ja nakute."
        ],
        "formula": "I-Adj-くて / Na-Adj-で / N-で (sambungan DAN)"
      }
    ],
    "patterns": [
      {
        "jp": "朝 起きて、ご飯を 食べて、会社へ 行きます。",
        "rom": "Asa okite, gohan o tabete, kaisha e ikimasu.",
        "en": "Pagi bangun, makan, lalu pergi ke kantor."
      },
      {
        "jp": "わたしは 大阪に 住んで います。",
        "rom": "Watashi wa Osaka ni sunde imasu.",
        "en": "Saya tinggal/berdomisili di Osaka."
      },
      {
        "jp": "この レストランは 安くて おいしいです。",
        "rom": "Kono resutoran wa yasukute oishii desu.",
        "en": "Restoran ini murah DAN enak."
      },
      {
        "jp": "カリナさんは きれいで 親切です。",
        "rom": "Karina-san wa kirei de shinsetsu desu.",
        "en": "Bu Karina cantik DAN baik hati."
      },
      {
        "jp": "この 言葉を 知って いますか。",
        "rom": "Kono kotoba o shitte imasu ka.",
        "en": "Apakah Anda tahu kata ini?"
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: 知っていますか (Apakah Anda Tahu?)",
      "dialogue": [
        {
          "speaker": "Karina",
          "jp": "すみません。市役所の 電話番号を 知って いますか。",
          "rom": "Sumimasen. Shiyakusho no denwabangou o shitte imasu ka.",
          "en": "Permisi. Apakah Anda tahu nomor telepon balai kota?"
        },
        {
          "speaker": "Sato",
          "jp": "いいえ、知りません。",
          "rom": "Iie, shirimasen.",
          "en": "Tidak, saya tidak tahu."
        },
        {
          "speaker": "Karina",
          "jp": "そうですか。じゃ、住所を 教えて ください。",
          "rom": "Sou desu ka. Ja, juusho o oshiete kudasai.",
          "en": "Oh begitu ya. Kalau begitu, tolong beritahu alamatnya."
        },
        {
          "speaker": "Sato",
          "jp": "住所ですか。ちょっと 待って ください。…ここに 書いて あります。",
          "rom": "Juusho desu ka. Chotto matte kudasai. ...Koko ni kaite arimasu.",
          "en": "Alamatnya ya. Tunggu sebentar. ...Tertulis di sini."
        },
        {
          "speaker": "Karina",
          "jp": "ありがとう ございます。",
          "rom": "Arigatou gozaimasu.",
          "en": "Terima kasih banyak."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Negatif dari 'Shitte imasu' (Tahu) yang BENAR adalah:",
        "options": [
          {
            "text": "Shitte imasen",
            "correct": false
          },
          {
            "text": "Shirimasen",
            "correct": true
          },
          {
            "text": "Shittekunai",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Sambung kalimat: 'Murah DAN enak'.\nYasu-[     ] oishii desu.",
        "answer": "kute"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] Menyambung Na-Adjective 'Kirei' (cantik) dengan 'Shinsetsu' (ramah). Sambungannya:",
        "options": [
          {
            "text": "Kireikute shinsetsu desu.",
            "correct": false
          },
          {
            "text": "Kirei de shinsetsu desu.",
            "correct": true
          },
          {
            "text": "Kirei to shinsetsu desu.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Pagi bangun, makan, lalu pergi ke kantor.'\nAsa [       ], gohan o tabete, kaisha e ikimasu.",
        "answer": "okite"
      },
      {
        "type": "mcq",
        "question": "[Pola Kalimat] 'Watashi wa Osaka ni sunde imasu' artinya:",
        "options": [
          {
            "text": "Saya sedang tinggal sementara di Osaka.",
            "correct": false
          },
          {
            "text": "Saya tinggal/berdomisili di Osaka (keadaan tetap).",
            "correct": true
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Meminta Izin Mengambil Foto",
        "situation": "Meminta izin mengambil gambar/foto di dalam area pameran",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "ここで 写真を 撮っても いいですか。",
            "rom": "Koko de shashin o tottemo ii desu ka.",
            "en": "Bolehkah saya mengambil foto di sini?"
          },
          {
            "speaker": "B",
            "jp": "すみません、写真は ちょっと ダメです。",
            "rom": "Sumimasen, shashin wa chotto dame desu.",
            "en": "Maaf, kalau foto tidak boleh."
          },
          {
            "speaker": "A",
            "jp": "そうですか。わかりました。",
            "rom": "Sou desu ka. Wakarimashita.",
            "en": "Oh begitu. Saya mengerti."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Pekerjaan Utama",
        "situation": "Mengobrol tentang profesi dan produk yang dibuat oleh perusahaan lawan bicara",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "お仕事は 何を して いますか。",
            "rom": "O-shigoto wa nani o shite imasu ka.",
            "en": "Pekerjaan Anda melakukan apa?"
          },
          {
            "speaker": "B",
            "jp": "パワー電気で コンピューターの ソフトを 作って います。",
            "rom": "Pawaa Denki de konpyuutaa no sofuto o tsukutte imasu.",
            "en": "Membuat software komputer di perusahaan Power Denki."
          },
          {
            "speaker": "A",
            "jp": "そうですか。すごいですね。",
            "rom": "Sou desu ka. Sugoi desu ne.",
            "en": "Oh begitu. Hebat sekali ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Kegiatan Kuliah Teman",
        "situation": "Bertanya tentang jurusan atau bidang yang ditekuni teman di universitas",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "カリナさんは 大学で 何を 勉強して いますか。",
            "rom": "Karina-san wa daigaku de nani o benkyou shite imasu ka.",
            "en": "Sdri. Karina sedang belajar apa di universitas?"
          },
          {
            "speaker": "B",
            "jp": "美術を 勉強して います。絵を 描いて いますよ。",
            "rom": "Bijutsu o benkyou shite imasu. E o kaite imasu yo.",
            "en": "Belajar seni rupa. Sedang melukis/menggambar lho."
          },
          {
            "speaker": "A",
            "jp": "面白そうですね。",
            "rom": "Omoshirosou desu ne.",
            "en": "Kelihatannya menarik sekali ya."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r15-1",
        "jp": "写真を 撮っても いいですか。... はい、いいですよ。",
        "rom": "Shashin o totte mo ii desu ka? ... Hai, ii desu yo.",
        "en": "Bolehkah saya mengambil foto? ... Ya, boleh."
      },
      {
        "id": "r15-2",
        "jp": "この 辞書を 借りても いいですか。... いいえ、使っていますから、だめです。",
        "rom": "Kono jisho o karite mo ii desu ka? ... Iie, tsukatte imasu kara, dame desu.",
        "en": "Bolehkah saya meminjam kamus ini? ... Jangan, karena sedang saya pakai."
      },
      {
        "id": "r15-3",
        "jp": "ここで タバコを 吸ってはいけません。... 分かりました。すみません。",
        "rom": "Koko de tabako o sutte wa ikemasen. ... Wakarimashita. Sumimasen.",
        "en": "Tidak boleh merokok di sini. ... Baik, saya paham. Maaf."
      },
      {
        "id": "r15-4",
        "jp": "サントスさんは どこに 住んでいますか。... 神戸に 住んでいます。",
        "rom": "Santosu-san wa doko ni sunde imasu ka? ... Koube ni sunde imasu.",
        "en": "Tuan Santos tinggal di mana? ... Tinggal di Kobe."
      },
      {
        "id": "r15-5",
        "jp": "お仕事は 何ですか。... 教師です。富士大学で 教えています。",
        "rom": "Oshigoto wa nan desu ka? ... Kyoushi desu. Fuji daigaku de oshiete imasu.",
        "en": "Pekerjaan Anda apa? ... Saya guru. Mengajar di Universitas Fuji."
      }
    ]
  },
  {
    "id": 16,
    "title": "Lesson 16: Setelah (Te-kara) & Deskripsi Fisik",
    "desc": "Membedah Bab 16. Belajar menyatakan urutan mutlak ('setelah melakukan A, baru B'), mendeskripsikan ciri-ciri fisik seseorang dengan pola WA-GA, dan aturan partikel naik/turun kendaraan.",
    "locked": false,
    "vocab": [
      {
        "id": "v16-1",
        "rom": "Norimasu",
        "kana": "のります",
        "kanji": "乗ります",
        "en": "Naik (kendaraan) [+NI]",
        "audio": ""
      },
      {
        "id": "v16-2",
        "rom": "Orimasu",
        "kana": "おります",
        "kanji": "降ります",
        "en": "Turun (kendaraan) [+O]",
        "audio": ""
      },
      {
        "id": "v16-3",
        "rom": "Norikaemasu",
        "kana": "のりかえます",
        "kanji": "乗り換えます",
        "en": "Transit / Pindah kendaraan",
        "audio": ""
      },
      {
        "id": "v16-4",
        "rom": "Abimasu",
        "kana": "あびます",
        "kanji": "浴びます",
        "en": "Mandi (diguyur air) / Shower",
        "audio": ""
      },
      {
        "id": "v16-5",
        "rom": "Iremasu",
        "kana": "いれます",
        "kanji": "入れます",
        "en": "Memasukkan",
        "audio": ""
      },
      {
        "id": "v16-6",
        "rom": "Dashimasu",
        "kana": "だします",
        "kanji": "出します",
        "en": "Mengeluarkan / Menyerahkan",
        "audio": ""
      },
      {
        "id": "v16-7",
        "rom": "Hairimasu",
        "kana": "はいります",
        "kanji": "入ります",
        "en": "Masuk [+NI]",
        "audio": ""
      },
      {
        "id": "v16-8",
        "rom": "Demasu",
        "kana": "でます",
        "kanji": "出ます",
        "en": "Keluar [+O]",
        "audio": ""
      },
      {
        "id": "v16-9",
        "rom": "Yamemasu",
        "kana": "やめます",
        "kanji": "辞めます",
        "en": "Berhenti (dari pekerjaan/kebiasaan)",
        "audio": ""
      },
      {
        "id": "v16-10",
        "rom": "Oshimasu",
        "kana": "おします",
        "kanji": "押します",
        "en": "Menekan (tombol)",
        "audio": ""
      },
      {
        "id": "v16-11",
        "rom": "Karada",
        "kana": "からだ",
        "kanji": "体",
        "en": "Badan / Tubuh",
        "audio": ""
      },
      {
        "id": "v16-12",
        "rom": "Atama",
        "kana": "あたま",
        "kanji": "頭",
        "en": "Kepala",
        "audio": ""
      },
      {
        "id": "v16-13",
        "rom": "Kami",
        "kana": "かみ",
        "kanji": "髪",
        "en": "Rambut",
        "audio": ""
      },
      {
        "id": "v16-14",
        "rom": "Kao",
        "kana": "かお",
        "kanji": "顔",
        "en": "Wajah",
        "audio": ""
      },
      {
        "id": "v16-15",
        "rom": "Me",
        "kana": "め",
        "kanji": "目",
        "en": "Mata",
        "audio": ""
      },
      {
        "id": "v16-16",
        "rom": "Mimi",
        "kana": "みみ",
        "kanji": "耳",
        "en": "Telinga",
        "audio": ""
      },
      {
        "id": "v16-17",
        "rom": "Kuchi",
        "kana": "くち",
        "kanji": "口",
        "en": "Mulut",
        "audio": ""
      },
      {
        "id": "v16-18",
        "rom": "Ha",
        "kana": "は",
        "kanji": "歯",
        "en": "Gigi",
        "audio": ""
      },
      {
        "id": "v16-19",
        "rom": "Hana",
        "kana": "はな",
        "kanji": "鼻",
        "en": "Hidung",
        "audio": ""
      },
      {
        "id": "v16-20",
        "rom": "Te / Ashi",
        "kana": "て / あし",
        "kanji": "手 / 足",
        "en": "Tangan / Kaki",
        "audio": ""
      },
      {
        "id": "v16-21",
        "rom": "Onaka",
        "kana": "おなか",
        "kanji": "",
        "en": "Perut",
        "audio": ""
      },
      {
        "id": "v16-22",
        "rom": "Se",
        "kana": "せ",
        "kanji": "背",
        "en": "Punggung / Tinggi Badan",
        "audio": ""
      },
      {
        "id": "v16-23",
        "rom": "Kikai",
        "kana": "きかい",
        "kanji": "機械",
        "en": "Mesin / Alat",
        "audio": ""
      },
      {
        "id": "v16-24",
        "rom": "Tsukaikata",
        "kana": "つかいかた",
        "kanji": "使い方",
        "en": "Cara menggunakan",
        "audio": ""
      },
      {
        "id": "v16-25",
        "rom": "Anshoubangou",
        "kana": "あんしょうばんごう",
        "kanji": "暗証番号",
        "en": "PIN / Nomor Rahasia",
        "audio": ""
      },
      {
        "id": "v16-26",
        "rom": "Kingaku",
        "kana": "きんがく",
        "kanji": "金額",
        "en": "Jumlah Uang / Nominal",
        "audio": ""
      },
      {
        "id": "v16-27",
        "rom": "Kakunin",
        "kana": "かくにん",
        "kanji": "確認",
        "en": "Konfirmasi",
        "audio": ""
      },
      {
        "id": "v16-28",
        "rom": "Botan",
        "kana": "ボタン",
        "kanji": "",
        "en": "Tombol",
        "audio": ""
      },
      {
        "id": "v16-29",
        "rom": "Mazu",
        "kana": "まず",
        "kanji": "",
        "en": "Pertama-tama / Pertama",
        "audio": ""
      },
      {
        "id": "v16-30",
        "rom": "Tsugi ni",
        "kana": "つぎに",
        "kanji": "次に",
        "en": "Selanjutnya / Berikutnya",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g16-1",
        "title": "1. V1-てから、V2 (Setelah Melakukan V1, Baru V2)",
        "desc": "KARA di sini bukan 'karena' atau 'dari', tapi 'SETELAH'. Menempel pada TE-FORM. Menyatakan urutan MUTLAK — V2 tidak terjadi sebelum V1 selesai.",
        "points": [
          "Shigoto ga owatte KARA, nomi ni ikimasu. (SETELAH pekerjaan selesai, pergi minum).",
          "Kaimono o shite KARA, kaerimasu. (SETELAH belanja, pulang).",
          "Okane o irete kara, botan o oshite kudasai. (SETELAH memasukkan uang, tekan tombolnya).",
          "Perbedaan V-te, V vs V-te kara, V: Te-kara menekankan bahwa V1 WAJIB selesai dulu."
        ],
        "formula": "V1-て から、V2",
        "native_note": "Meskipun tata bahasa membolehkan Anda menyambungkan banyak kata kerja menggunakan bentuk '~te', usahakan batasi maksimal 3 tindakan saja. Menyambung terlalu banyak aksi dalam satu nafas akan terdengar kaku dan melelahkan bagi pendengar Jepang."
      },
      {
        "id": "g16-2",
        "title": "2. N1 は N2 が [Kata Sifat] (Deskripsi Ciri Fisik)",
        "desc": "Pola UNIK bahasa Jepang untuk mendeskripsikan atribut spesifik dari sebuah subjek. Topik (WA) dan Bagian (GA) harus tepat.",
        "points": [
          "Zou WA hana GA nagai desu. (Gajah ITU hidungnya panjang).",
          "Maria-san WA kami GA nagai desu. (Maria ITU rambutnya panjang).",
          "Miraa-san WA se GA takai desu. (Miller ITU badannya tinggi).",
          "Topik utama ditandai WA. Bagian spesifik yang dideskripsikan ditandai GA."
        ],
        "formula": "[Topik] は [Bagian Tubuh] が Adj です"
      },
      {
        "id": "g16-3",
        "title": "3. Partikel Kendaraan: Naik (NI) vs Turun (O)",
        "desc": "Aturan KETAT untuk partikel saat naik/turun kendaraan atau masuk/keluar tempat.",
        "points": [
          "NAIK/MASUK = Partikel NI (に). Basu NI norimasu. Daigaku NI hairimasu.",
          "TURUN/KELUAR = Partikel O (を). Densha O orimasu. Daigaku O demasu.",
          "Logika: NI = tujuan masuk (ke dalam), O = titik yang ditinggalkan (menjauh dari)."
        ],
        "formula": "Naik/Masuk → NI に | Turun/Keluar → O を"
      }
    ],
    "patterns": [
      {
        "jp": "コンサートが 終わってから、レストランで 食事を しました。",
        "rom": "Konsaato ga owatte kara, resutoran de shokuji o shimashita.",
        "en": "Setelah konser selesai, kami makan di restoran."
      },
      {
        "jp": "ミラーさんは 背が 高くて、髪が 黒いです。",
        "rom": "Miraa-san wa se ga takakute, kami ga kuroi desu.",
        "en": "Pak Miller badannya tinggi, dan rambutnya hitam."
      },
      {
        "jp": "どの 人ですか。…あの 髪が 長くて、きれいな 人です。",
        "rom": "Dono hito desu ka. ...Ano kami ga nagakute, kirei na hito desu.",
        "en": "Orang yang mana? ...Orang yang rambutnya panjang dan cantik itu."
      },
      {
        "jp": "東京駅で 中央線に 乗って、新宿で 降ります。",
        "rom": "Toukyou-eki de Chuuou-sen ni notte, Shinjuku de orimasu.",
        "en": "Naik Jalur Chuo di Stasiun Tokyo, lalu turun di Shinjuku."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: 使い方を教えてください (Ajari Cara Pakainya)",
      "dialogue": [
        {
          "speaker": "Miller",
          "jp": "すみません。この 機械の 使い方を 教えて ください。",
          "rom": "Sumimasen. Kono kikai no tsukaikata o oshiete kudasai.",
          "en": "Permisi. Tolong ajari cara menggunakan mesin ini."
        },
        {
          "speaker": "Petugas",
          "jp": "はい。まず ここに キャッシュカードを 入れて ください。",
          "rom": "Hai. Mazu koko ni kyasshukaado o irete kudasai.",
          "en": "Baik. Pertama-tama, masukkan kartu ATM ke sini."
        },
        {
          "speaker": "Miller",
          "jp": "はい。それから？",
          "rom": "Hai. Sorekara?",
          "en": "Baik. Setelah itu?"
        },
        {
          "speaker": "Petugas",
          "jp": "暗証番号を 押して ください。",
          "rom": "Anshoubangou o oshite kudasai.",
          "en": "Tolong tekan PIN."
        },
        {
          "speaker": "Miller",
          "jp": "はい。押しました。",
          "rom": "Hai. Oshimashita.",
          "en": "Baik. Sudah ditekan."
        },
        {
          "speaker": "Petugas",
          "jp": "次に 金額を 押して、この「確認」ボタンを 押して ください。",
          "rom": "Tsugi ni kingaku o oshite, kono 'kakunin' botan o oshite kudasai.",
          "en": "Selanjutnya tekan nominal, lalu tekan tombol 'Konfirmasi'."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] 'Densha [ ? ] orimasu' (Turun kereta). Partikel yang tepat:",
        "options": [
          {
            "text": "に (NI)",
            "correct": false
          },
          {
            "text": "を (O)",
            "correct": true
          },
          {
            "text": "で (DE)",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] 'Gajah belalainya panjang'.\nZou wa hana [     ] nagai desu.",
        "answer": "ga"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] 'SETELAH belanja, pulang.' Pola yang tepat:",
        "options": [
          {
            "text": "Kaimono o shite, kaerimasu. (Sambung biasa)",
            "correct": false
          },
          {
            "text": "Kaimono o shite KARA, kaerimasu. (Setelah selesai baru pulang)",
            "correct": true
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Naik bus.' Partikel yang dipakai:\nBasu [     ] norimasu.",
        "answer": "ni"
      },
      {
        "type": "mcq",
        "question": "[Pola Kalimat] Mendeskripsikan orang: 'Orang yang rambutnya panjang dan cantik'. Struktur kalimat:",
        "options": [
          {
            "text": "Kami ga nagakute, kirei na hito.",
            "correct": true
          },
          {
            "text": "Nagakute kami ga kirei na hito.",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Rencana Urutan Perjalanan",
        "situation": "Menanyakan rencana urutan kegiatan saat berkunjung ke wilayah Asakusa",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "浅草へ 行って、何を しますか。",
            "rom": "Asakusa e itte, nani o shimasu ka.",
            "en": "Setelah sampai di Asakusa, apa yang akan dilakukan?"
          },
          {
            "speaker": "B",
            "jp": "古い お寺を 見て、それから 買い物します。",
            "rom": "Furui o-tera o mite, sorekara kaimonoshimasu.",
            "en": "Melihat kuil kuno, lalu berbelanja."
          },
          {
            "speaker": "A",
            "jp": "いいですね。私も 行きたいです。",
            "rom": "Ii desu ne. Watashi mo ikitai desu.",
            "en": "Asyik ya. Saya juga ingin ikut pergi."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Rute Transportasi ke Kampus",
        "situation": "Bertanya bagaimana cara menuju ke Universitas Fuji menggunakan kendaraan umum",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "富士大学まで どうやって 行きますか。",
            "rom": "Fuji Daigaku made douyatte ikimasu ka.",
            "en": "Bagaimana cara pergi ke Universitas Fuji?"
          },
          {
            "speaker": "B",
            "jp": "駅から 2番の バスに 乗って、大学前で 降ります。",
            "rom": "Eki kara ni-ban no basu ni notte, daigaku-mae de orimasu.",
            "en": "Naik bus nomor 2 dari stasiun, lalu turun di halte depan universitas."
          },
          {
            "speaker": "A",
            "jp": "簡単ですね。ありがとうございます。",
            "rom": "Kantan desu ne. Arigatou gozaimasu.",
            "en": "Mudah sekali ya. Terima kasih banyak."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Ciri Fisik Teman yang Dicari",
        "situation": "Bertanya ciri-ciri fisik seseorang yang ingin ditemui di tengah pesta",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "サントスさんは どの 人ですか。",
            "rom": "Santosu-san wa dono hito desu ka.",
            "en": "Sdr. Santos yang sebelah mana?"
          },
          {
            "speaker": "B",
            "jp": "あの 背が 高くて、髪が 短い 人ですよ。",
            "rom": "Ano se ga takakute, kami ga mijikai hito desu yo.",
            "en": "Orang yang badannya tinggi dan rambutnya pendek di sebelah sana itu lho."
          },
          {
            "speaker": "A",
            "jp": "あ、わかりました。ありがとうございます。",
            "rom": "A, wakarimashita. Arigatou gozaimasu.",
            "en": "Ah, saya tahu. Terima kasih banyak."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r16-1",
        "jp": "朝 何を しますか。... ジョギングをして、シャワーを 浴びて、会社へ 行きます。",
        "rom": "Asa nani o shimasu ka? ... Jogingu o shite, shawaa o abite, kaisha e ikimasu.",
        "en": "Pagi hari melakukan apa saja? ... Jogging, mandi shower, lalu pergi ke kantor."
      },
      {
        "id": "r16-2",
        "jp": "神戸へ 行って、何を しましたか。... 映画を 見て、おいしい 肉を 食べました。",
        "rom": "Koube e itte, nani o shimashita ka? ... Eiga o mite, oishii niku o tabemashita.",
        "en": "Pergi ke Kobe dan melakukan apa? ... Menonton film, lalu makan daging yang lezat."
      },
      {
        "id": "r16-3",
        "jp": "大学まで どうやって 行きますか。... 京都駅から バスに 乗って、大学前で 降ります。",
        "rom": "Daigaku made douyatte ikimasu ka? ... Kyo-to eki kara basu ni notte, daigakumae de orimasu.",
        "en": "Bagaimana caranya pergi sampai ke universitas? ... Naik bus dari stasiun Kyoto, lalu turun di depan universitas."
      },
      {
        "id": "r16-4",
        "jp": "サントスさんは どの 人ですか。... あの 背が 高くて、髪が 黒い 人です。",
        "rom": "Santosu-san wa dono hito desu ka? ... Ano se ga takakute, kami ga kuroi hito desu.",
        "en": "Tuan Santos orang yang mana? ... Orang yang tinggi dan berambut hitam itu."
      },
      {
        "id": "r16-5",
        "jp": "奈良は どんな 町ですか。... 静かで、きれいな 町です。",
        "rom": "Nara wa donna machi desu ka? ... Shizuka de, kirei na machi desu.",
        "en": "Nara kota yang bagaimana? ... Kota yang sunyi dan indah."
      }
    ]
  },
  {
    "id": 17,
    "title": "Lesson 17: Nai-Form & Kewajiban (Harus)",
    "desc": "Membedah Bab 17. Pengenalan NAI-FORM (Bentuk Negatif Kasual) — bentuk ketiga setelah Te-Form dan Dict-Form. Dipakai untuk larangan sopan, kewajiban (harus), dan ketiadaan kewajiban (tidak usah).",
    "locked": false,
    "vocab": [
      {
        "id": "v17-1",
        "rom": "Oboemasu",
        "kana": "おぼえます",
        "kanji": "覚えます",
        "en": "Mengingat / Menghafal",
        "audio": ""
      },
      {
        "id": "v17-2",
        "rom": "Wasuremasu",
        "kana": "わすれます",
        "kanji": "忘れます",
        "en": "Melupakan / Lupa",
        "audio": ""
      },
      {
        "id": "v17-3",
        "rom": "Nakushimasu",
        "kana": "なくします",
        "kanji": "無くします",
        "en": "Kehilangan (benda)",
        "audio": ""
      },
      {
        "id": "v17-4",
        "rom": "Haraimasu",
        "kana": "はらいます",
        "kanji": "払います",
        "en": "Membayar",
        "audio": ""
      },
      {
        "id": "v17-5",
        "rom": "Kaeshimasu",
        "kana": "かえします",
        "kanji": "返します",
        "en": "Mengembalikan",
        "audio": ""
      },
      {
        "id": "v17-6",
        "rom": "Dekakemasu",
        "kana": "でかけます",
        "kanji": "出かけます",
        "en": "Pergi keluar (rumah)",
        "audio": ""
      },
      {
        "id": "v17-7",
        "rom": "Nugimasu",
        "kana": "ぬぎます",
        "kanji": "脱ぎます",
        "en": "Melepas (pakaian/sepatu)",
        "audio": ""
      },
      {
        "id": "v17-8",
        "rom": "Motte ikimasu",
        "kana": "もっていきます",
        "kanji": "持って行きます",
        "en": "Membawa pergi",
        "audio": ""
      },
      {
        "id": "v17-9",
        "rom": "Motte kimasu",
        "kana": "もってきます",
        "kanji": "持って来ます",
        "en": "Membawa datang",
        "audio": ""
      },
      {
        "id": "v17-10",
        "rom": "Zangyou shimasu",
        "kana": "ざんぎょうします",
        "kanji": "残業します",
        "en": "Lembur",
        "audio": ""
      },
      {
        "id": "v17-11",
        "rom": "Shukkin shimasu",
        "kana": "しゅっきんします",
        "kanji": "出勤します",
        "en": "Masuk kerja",
        "audio": ""
      },
      {
        "id": "v17-12",
        "rom": "Taisetsu (na)",
        "kana": "たいせつ",
        "kanji": "大切",
        "en": "Penting (Na-Adj)",
        "audio": ""
      },
      {
        "id": "v17-13",
        "rom": "Daijoubu (na)",
        "kana": "だいじょうぶ",
        "kanji": "大丈夫",
        "en": "Tidak apa-apa / Aman (Na-Adj)",
        "audio": ""
      },
      {
        "id": "v17-14",
        "rom": "Abunai",
        "kana": "あぶない",
        "kanji": "危ない",
        "en": "Berbahaya (I-Adj)",
        "audio": ""
      },
      {
        "id": "v17-15",
        "rom": "Kusuri",
        "kana": "くすり",
        "kanji": "薬",
        "en": "Obat",
        "audio": ""
      },
      {
        "id": "v17-16",
        "rom": "Nodo",
        "kana": "のど",
        "kanji": "",
        "en": "Tenggorokan",
        "audio": ""
      },
      {
        "id": "v17-17",
        "rom": "Netsu",
        "kana": "ねつ",
        "kanji": "熱",
        "en": "Demam / Panas (badan)",
        "audio": ""
      },
      {
        "id": "v17-18",
        "rom": "Kaze",
        "kana": "かぜ",
        "kanji": "風邪",
        "en": "Masuk Angin / Flu",
        "audio": ""
      },
      {
        "id": "v17-19",
        "rom": "Ofuro",
        "kana": "おふろ",
        "kanji": "お風呂",
        "en": "Bak Mandi / Berendam",
        "audio": ""
      },
      {
        "id": "v17-20",
        "rom": "Odaijini",
        "kana": "おだいじに",
        "kanji": "お大事に",
        "en": "Semoga cepat sembuh (ungkapan)",
        "audio": ""
      },
      {
        "id": "v17-21",
        "rom": "Shinpai-shimasu",
        "kana": "しんぱいします",
        "kanji": "心配します",
        "en": "Khawatir / Cemas",
        "audio": ""
      },
      {
        "id": "v17-22",
        "rom": "Shucchou-shimasu",
        "kana": "しゅっちょうします",
        "kanji": "出張します",
        "en": "Dinas ke luar kota / Perjalanan bisnis",
        "audio": ""
      },
      {
        "id": "v17-23",
        "rom": "Mondai",
        "kana": "もんだい",
        "kanji": "問題",
        "en": "Soal / Masalah / Pertanyaan",
        "audio": ""
      },
      {
        "id": "v17-24",
        "rom": "Kotae",
        "kana": "こたえ",
        "kanji": "答え",
        "en": "Jawaban",
        "audio": ""
      },
      {
        "id": "v17-25",
        "rom": "Kin'en",
        "kana": "きんえん",
        "kanji": "禁煙",
        "en": "Dilarang merokok",
        "audio": ""
      },
      {
        "id": "v17-26",
        "rom": "Hoken-shou",
        "kana": "ほけんしょう",
        "kanji": "保険証",
        "en": "Kartu asuransi kesehatan",
        "audio": ""
      },
      {
        "id": "v17-27",
        "rom": "Byouki",
        "kana": "びょうき",
        "kanji": "病気",
        "en": "Sakit / Penyakit",
        "audio": ""
      },
      {
        "id": "v17-28",
        "rom": "Uwagi",
        "kana": "うわぎ",
        "kanji": "上着",
        "en": "Jaket / Pakaian luar atas",
        "audio": ""
      },
      {
        "id": "v17-29",
        "rom": "Shitagi",
        "kana": "したぎ",
        "kanji": "下着",
        "en": "Pakaian dalam",
        "audio": ""
      },
      {
        "id": "v17-30",
        "rom": "Repooto",
        "kana": "レポート",
        "kanji": "",
        "en": "Laporan / Report",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g17-1",
        "title": "1. Nai-Form: Aturan Konversi (Bentuk Negatif Kasual)",
        "desc": "Bentuk negatif kasual — bentuk ketiga setelah Te-Form dan Dict-Form. Sangat krusial untuk membuat pola tata bahasa lanjutan.",
        "points": [
          "KELOMPOK 1 (Godan): Ubah vokal (i) sebelum -masu menjadi (a) lalu tambah NAI.",
          "Kaki-masu → Kaka-nai. Nomi-masu → Noma-nai. Hanashi-masu → Hanasa-nai.",
          "★PENGECUALIAN: Jika sebelum -masu adalah (i), maka berubah jadi (wa). Kai-masu → Kawa-nai (BUKAN kaa-nai!).",
          "KELOMPOK 2 (Ichidan): Buang -masu, tambah NAI. Tabe-masu → Tabe-nai. Mi-masu → Mi-nai.",
          "KELOMPOK 3: Shi-masu → Shi-nai. Ki-masu → Ko-nai. ★Hati-hati: Kimasu→KONAI (bukan kinai!)."
        ],
        "formula": "Grp1: Vokal i→a + NAI (★い段→わ) | Grp2: stem+NAI | Grp3: Shinai/Konai",
        "native_note": "Ungkapan keharusan '~nakereba narimasen' (harus) sangat panjang dan melelahkan untuk percakapan sehari-hari. Native speaker menyingkatnya secara kasual menjadi '~nakya' atau '~nakucha' (misal: 'Ikanakya!' = 'Harus pergi!')."
      },
      {
        "id": "g17-2",
        "title": "2. V-ないで ください (Tolong Jangan ~)",
        "desc": "Meminta seseorang secara sopan agar TIDAK melakukan sesuatu. Kebalikan dari 'V-te kudasai'.",
        "points": [
          "Shashin o tora-NAIDE kudasai. (Tolong JANGAN mengambil foto).",
          "Wasure-NAIDE kudasai. (Tolong JANGAN lupa).",
          "Ofuro ni haira-NAIDE kudasai. (Tolong JANGAN mandi berendam).",
          "Perbandingan: V-te kudasai (Tolong lakukan) ↔ V-naide kudasai (Tolong jangan)."
        ],
        "formula": "V-ないで ください (Tolong jangan ~)"
      },
      {
        "id": "g17-3",
        "title": "3. V-なければ なりません (Harus)",
        "desc": "Secara harfiah: 'Jika tidak dilakukan, maka tidak boleh' (Double Negative = Positif). Terjemahan praktis: HARUS.",
        "points": [
          "Kusuri o noma-NAKEREBA NARIMASEN. (HARUS minum obat).",
          "Mainichi benkyou shi-nakereba narimasen. (Setiap hari HARUS belajar).",
          "Cara membuat: Dari Nai-form (nomanai) → buang 'i' → tambah 'kereba narimasen'.",
          "Contoh lengkap: Noma-nai → Noma-nakereba narimasen."
        ],
        "formula": "V-ない → coret い → ければ なりません"
      },
      {
        "id": "g17-4",
        "title": "4. V-なくても いいです (Tidak Usah / Tidak Perlu)",
        "desc": "Kebalikan dari 'harus'. Memberi kebebasan untuk TIDAK melakukan sesuatu.",
        "points": [
          "Ashita ko-NAKUTEMO II DESU. (Besok tidak datang pun tidak apa-apa / Tidak usah datang).",
          "Kutsu o nuga-nakutemo ii desu. (Tidak usah lepas sepatu).",
          "Cara membuat: Dari Nai-form → buang 'i' → tambah 'kutemo ii desu'.",
          "Perbandingan: ~nakereba narimasen (HARUS) ↔ ~nakutemo ii desu (TIDAK USAH)."
        ],
        "formula": "V-ない → coret い → くても いいです"
      }
    ],
    "patterns": [
      {
        "jp": "ここで 写真を 撮らないで ください。",
        "rom": "Koko de shashin o toranaide kudasai.",
        "en": "Tolong jangan mengambil foto di sini."
      },
      {
        "jp": "パスポートを 見せなければ なりません。",
        "rom": "Pasupooto o misenakereba narimasen.",
        "en": "Harus memperlihatkan paspor."
      },
      {
        "jp": "日曜日は 早く 起きなくても いいです。",
        "rom": "Nichiyoubi wa hayaku okinakutemo ii desu.",
        "en": "Hari Minggu tidak usah bangun pagi."
      },
      {
        "jp": "毎日 薬を 飲まなければ なりません。",
        "rom": "Mainichi kusuri o nomanakereba narimasen.",
        "en": "Setiap hari harus minum obat."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: どうしましたか (Sakit Apa?)",
      "dialogue": [
        {
          "speaker": "Dokter",
          "jp": "どう しましたか。",
          "rom": "Dou shimashita ka.",
          "en": "Sakit apa? (Ada keluhan apa?)"
        },
        {
          "speaker": "Miller",
          "jp": "きのうから のどが 痛くて、熱も あります。",
          "rom": "Kinou kara nodo ga itakute, netsu mo arimasu.",
          "en": "Sejak kemarin tenggorokan sakit, dan ada demam juga."
        },
        {
          "speaker": "Dokter",
          "jp": "風邪ですね。ゆっくり 休んで ください。",
          "rom": "Kaze desu ne. Yukkuri yasunde kudasai.",
          "en": "Masuk angin ya. Tolong istirahat pelan-pelan."
        },
        {
          "speaker": "Miller",
          "jp": "はい。",
          "rom": "Hai.",
          "en": "Baik."
        },
        {
          "speaker": "Dokter",
          "jp": "それから、今日は お風呂に 入らないで ください。",
          "rom": "Sorekara, kyou wa ofuro ni hairanaide kudasai.",
          "en": "Dan hari ini tolong jangan berendam dulu."
        },
        {
          "speaker": "Miller",
          "jp": "わかりました。",
          "rom": "Wakarimashita.",
          "en": "Saya mengerti."
        },
        {
          "speaker": "Dokter",
          "jp": "じゃ、お大事に。",
          "rom": "Ja, odaijini.",
          "en": "Semoga cepat sembuh."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Nai-form dari 'Kaimasu' (Membeli) adalah:",
        "options": [
          {
            "text": "Kaanai",
            "correct": false
          },
          {
            "text": "Kawanai",
            "correct": true
          },
          {
            "text": "Kakinai",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] 'Besok tolong jangan datang'.\nAshita [       ] de kudasai.",
        "answer": "konai"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] 'Harus minum obat' (Kusuri o ___). Pola yang tepat:",
        "options": [
          {
            "text": "Nomanakereba narimasen",
            "correct": true
          },
          {
            "text": "Nomanakutemo ii desu",
            "correct": false
          },
          {
            "text": "Nomanaide kudasai",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Hari Minggu TIDAK USAH bangun pagi.'\nNichiyoubi wa hayaku oki-[           ] ii desu.",
        "answer": "nakutemo"
      },
      {
        "type": "mcq",
        "question": "[Jebakan] Nai-form dari 'Kimasu' (Datang) — Kelompok 3 Irregular. Yang benar:",
        "options": [
          {
            "text": "Kinai",
            "correct": false
          },
          {
            "text": "Konai",
            "correct": true
          },
          {
            "text": "Shinai",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Meminta untuk Tidak Mengambil Foto",
        "situation": "Petugas museum meminta pengunjung untuk tidak mengambil foto artefak kuno",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "すみませんが、ここでは 写真を 撮らないで ください。",
            "rom": "Sumimasen ga, koko dewa shashin o toranaide kudasai.",
            "en": "Maaf/permisi, tolong jangan mengambil foto di sini."
          },
          {
            "speaker": "B",
            "jp": "あ、すみません。わかりました。",
            "rom": "A, sumimasen. Wakarimashita.",
            "en": "Ah, maaf. Saya mengerti."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Keharusan Minum Obat",
        "situation": "Bertanya kepada dokter apakah harus meminum obat yang diberikan secara rutin",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "この 薬を 毎日 飲まなければ なりませんか。",
            "rom": "Kono kusuri o maihichi nomanakereba narimasen ka.",
            "en": "Apakah obat ini harus diminum setiap hari?"
          },
          {
            "speaker": "B",
            "jp": "はい。朝と 晩に 飲んで ください。",
            "rom": "Hai. Asa to ban ni nonde kudasai.",
            "en": "Ya. Tolong diminum pagi dan malam hari."
          },
          {
            "speaker": "A",
            "jp": "わかりました。",
            "rom": "Wakarimashita.",
            "en": "Baik, saya mengerti."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Keharusan Membawa Dokumen",
        "situation": "Bertanya kepada guru apakah besok harus membawa paspor ke kelas",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "明日 パスポートを 持って 来なければ なりませんか。",
            "rom": "Ashita pasupooto o motte konakereba narimasen ka.",
            "en": "Apakah besok harus membawa paspor?"
          },
          {
            "speaker": "B",
            "jp": "いいえ、持って 来なくても いいですよ。",
            "rom": "Iie, motte konakutemo ii desu yo.",
            "en": "Tidak, tidak usah dibawa juga tidak apa-apa lho."
          },
          {
            "speaker": "A",
            "jp": "そうですか。安心しました。",
            "rom": "Sou desu ka. Anshin shimashita.",
            "en": "Oh begitu. Syukurlah (saya tenang)."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r17-1",
        "jp": "薬を 飲まなければなりません。... はい、分かりました。",
        "rom": "Kusuri o nomanakereba narimasen. ... Hai, wakarimashita.",
        "en": "Harus minum obat. ... Ya, baiklah."
      },
      {
        "id": "r17-2",
        "jp": "傘を 忘れないでください。... はい、気を つけます。",
        "rom": "Kasa o wasurenaide kudasai. ... Hai, ki o tsukemasu.",
        "en": "Tolong jangan lupakan payung Anda. ... Ya, saya akan berhati-hati."
      },
      {
        "id": "r17-3",
        "jp": "土曜日も 働かなければなりませんか。... いいえ、働かなくても いいです。",
        "rom": "Doyoubi mo hatarakanakereba narimasen ka? ... Iie, hatarakanakute mo ii desu.",
        "en": "Apakah hari Sabtu juga harus bekerja? ... Tidak, tidak bekerja juga tidak apa-apa (tidak wajib)."
      },
      {
        "id": "r17-4",
        "jp": "レポートは いつまでに出さなければなりませんか。... 金曜日までに 出してください。",
        "rom": "Repooto wa itsu made ni dasanakereba narimasen ka? ... Kinyoubi made ni dashite kudasai.",
        "en": "Laporan harus dikumpulkan paling lambat kapan? ... Tolong kumpulkan paling lambat hari Jumat."
      },
      {
        "id": "r17-5",
        "jp": "靴を 脱がなくても いいですか。... いいえ、脱いでください。",
        "rom": "Kutsu o nuganakute mo ii desu ka? ... Iie, nuide kudasai.",
        "en": "Apakah tidak usah melepas sepatu tidak apa-apa? ... Tidak, tolong lepas sepatunya."
      }
    ]
  },
  {
    "id": 18,
    "title": "Lesson 18: Dictionary-Form & Kemampuan",
    "desc": "Membedah Bab 18. Pengenalan Bentuk Kamus (Jisho-kei) — bentuk dasar kata kerja di kamus. Digunakan untuk menyatakan kebisaan (koto ga dekimasu), hobi (koto desu), dan urutan waktu 'Sebelum' (mae ni).",
    "locked": false,
    "vocab": [
      {
        "id": "v18-1",
        "rom": "Dekimasu",
        "kana": "できます",
        "kanji": "出来ます",
        "en": "Bisa / Mampu",
        "audio": ""
      },
      {
        "id": "v18-2",
        "rom": "Araimasu",
        "kana": "あらいます",
        "kanji": "洗います",
        "en": "Mencuci",
        "audio": ""
      },
      {
        "id": "v18-3",
        "rom": "Hikimasu (piano)",
        "kana": "ひきます",
        "kanji": "弾きます",
        "en": "Memainkan (alat musik dawai/piano)",
        "audio": ""
      },
      {
        "id": "v18-4",
        "rom": "Utaimasu",
        "kana": "うたいます",
        "kanji": "歌います",
        "en": "Bernyanyi",
        "audio": ""
      },
      {
        "id": "v18-5",
        "rom": "Atsumemasu",
        "kana": "あつめます",
        "kanji": "集めます",
        "en": "Mengumpulkan / Mengoleksi",
        "audio": ""
      },
      {
        "id": "v18-6",
        "rom": "Sutemasu",
        "kana": "すてます",
        "kanji": "捨てます",
        "en": "Membuang",
        "audio": ""
      },
      {
        "id": "v18-7",
        "rom": "Kaemasu",
        "kana": "かえます",
        "kanji": "換えます",
        "en": "Menukar",
        "audio": ""
      },
      {
        "id": "v18-8",
        "rom": "Unten-shimasu",
        "kana": "うんてんします",
        "kanji": "運転します",
        "en": "Menyetir",
        "audio": ""
      },
      {
        "id": "v18-9",
        "rom": "Yoyaku-shimasu",
        "kana": "よやくします",
        "kanji": "予約します",
        "en": "Memesan (Booking/Reservasi)",
        "audio": ""
      },
      {
        "id": "v18-10",
        "rom": "Kengaku-shimasu",
        "kana": "けんがくします",
        "kanji": "見学します",
        "en": "Kunjungan studi / Observasi",
        "audio": ""
      },
      {
        "id": "v18-11",
        "rom": "Piano",
        "kana": "ピアノ",
        "kanji": "",
        "en": "Piano",
        "audio": ""
      },
      {
        "id": "v18-12",
        "rom": "Shumi",
        "kana": "しゅみ",
        "kanji": "趣味",
        "en": "Hobi",
        "audio": ""
      },
      {
        "id": "v18-13",
        "rom": "Genkin",
        "kana": "げんきん",
        "kanji": "現金",
        "en": "Uang tunai",
        "audio": ""
      },
      {
        "id": "v18-14",
        "rom": "Nikki",
        "kana": "にっき",
        "kanji": "日記",
        "en": "Buku Harian / Diary",
        "audio": ""
      },
      {
        "id": "v18-15",
        "rom": "Doubutsu",
        "kana": "どうぶつ",
        "kanji": "動物",
        "en": "Hewan / Binatang",
        "audio": ""
      },
      {
        "id": "v18-16",
        "rom": "Uma",
        "kana": "うま",
        "kanji": "馬",
        "en": "Kuda",
        "audio": ""
      },
      {
        "id": "v18-17",
        "rom": "Tokuni",
        "kana": "とくに",
        "kanji": "特に",
        "en": "Terutama / Khususnya",
        "audio": ""
      },
      {
        "id": "v18-18",
        "rom": "Koto",
        "kana": "こと",
        "kanji": "事",
        "en": "Hal / Perihal (nominalizer)",
        "audio": ""
      },
      {
        "id": "v18-19",
        "rom": "~Meetoru",
        "kana": "〜メートル",
        "kanji": "",
        "en": "~meter (satuan panjang)",
        "audio": ""
      },
      {
        "id": "v18-20",
        "rom": "Kokusai~",
        "kana": "こくさい〜",
        "kanji": "国際〜",
        "en": "Internasional~ (awalan)",
        "audio": ""
      },
      {
        "id": "v18-21",
        "rom": "Oinori",
        "kana": "おいのり",
        "kanji": "お祈り",
        "en": "Doa / Berdoa (~shimasu)",
        "audio": ""
      },
      {
        "id": "v18-22",
        "rom": "Kachou",
        "kana": "かちょう",
        "kanji": "課長",
        "en": "Kepala seksi / Manajer bagian",
        "audio": ""
      },
      {
        "id": "v18-23",
        "rom": "Buchou",
        "kana": "ぶちょう",
        "kanji": "部長",
        "en": "Kepala departemen",
        "audio": ""
      },
      {
        "id": "v18-24",
        "rom": "Shachou",
        "kana": "しゃちょう",
        "kanji": "社長",
        "en": "Direktur / Presiden perusahaan",
        "audio": ""
      },
      {
        "id": "v18-25",
        "rom": "Hee",
        "kana": "へえ",
        "kanji": "",
        "en": "Wah / Oh ya? (ekspresi terkejut)",
        "audio": ""
      },
      {
        "id": "v18-26",
        "rom": "Nakanaka",
        "kana": "なかなか",
        "kanji": "",
        "en": "Tidak mudah / Sulit (diikuti bentuk negatif)",
        "audio": ""
      },
      {
        "id": "v18-27",
        "rom": "Bokujou",
        "kana": "ぼくじょう",
        "kanji": "牧場",
        "en": "Peternakan / Ranch",
        "audio": ""
      },
      {
        "id": "v18-28",
        "rom": "Zehi",
        "kana": "ぜひ",
        "kanji": "",
        "en": "Tentu saja / Silakan (ajakan kuat)",
        "audio": ""
      },
      {
        "id": "v18-29",
        "rom": "Bunka",
        "kana": "ぶんか",
        "kanji": "文化",
        "en": "Budaya / Kebudayaan",
        "audio": ""
      },
      {
        "id": "v18-30",
        "rom": "Matsuri",
        "kana": "まつり",
        "kanji": "祭り",
        "en": "Festival / Perayaan tradisional",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g18-1",
        "title": "1. Dictionary-Form (Jisho-kei): Aturan Konversi",
        "desc": "Bentuk DASAR dari kata kerja — bentuk yang tercantum di kamus Jepang. Bukan bentuk -masu. Ini bentuk ke-4 yang harus dihafal.",
        "points": [
          "KELOMPOK 1 (Godan): Ubah vokal (i) sebelum -masu menjadi (u). Kaki-masu→Kaku. Nomi-masu→Nomu. Kai-masu→Kau. Machi-masu→Matsu.",
          "KELOMPOK 2 (Ichidan): Buang -masu, tambah RU. Tabe-masu→Taberu. Mi-masu→Miru. Ake-masu→Akeru.",
          "KELOMPOK 3 (Irregular): Shi-masu→Suru. Ki-masu→Kuru.",
          "RANGKUMAN 4 BENTUK: Masu-form (sopan) | Te-form (sambung) | Nai-form (negatif) | Dict-form (dasar kamus)."
        ],
        "formula": "Grp1: i→u | Grp2: stem+RU | Grp3: Suru/Kuru",
        "native_note": "Menyatakan kemampuan menggunakan '~koto ga dekimasu' terdengar sangat kaku seperti buku cetak. Native speaker sehari-hari lebih suka menggunakan bentuk potensial (kata kerja bentuk dapat, misal: 'nihongo ga hanaseru' alih-alih 'nihongo o hanasu koto ga dekimasu')."
      },
      {
        "id": "g18-2",
        "title": "2. V-Dictionary ことが できます (Bisa / Mampu)",
        "desc": "'Dekimasu' (bisa) butuh KATA BENDA. Untuk bilang 'bisa melakukan V', V harus dijadikan kata benda pakai 'KOTO'.",
        "points": [
          "Nihongo GA dekimasu. (Bisa bahasa Jepang) → Langsung kata benda, tanpa 'koto'.",
          "Nihongo o hanasu KOTO GA dekimasu. (Bisa BERBICARA bahasa Jepang). Hanasu (Dict) + Koto = nominalizer.",
          "Piano o hiku koto ga dekimasu. (Bisa memainkan piano).",
          "Negatif: ~koto ga dekimasen. (Tidak bisa ~)."
        ],
        "formula": "V-Dict ことが できます / できません"
      },
      {
        "id": "g18-3",
        "title": "3. 趣味は V-Dictionary ことです (Hobi Saya Adalah ~)",
        "desc": "Hobi butuh kata benda. Jika hobi adalah suatu TINDAKAN, ubah ke Dict-form + Koto untuk menjadikannya kata benda.",
        "points": [
          "Watashi no shumi wa ongaku desu. (Hobi saya musik). → Langsung kata benda.",
          "Watashi no shumi wa ongaku o KIKU KOTO desu. (Hobi saya MENDENGARKAN musik). → V-Dict + Koto.",
          "Watashi no shumi wa shashin o toru koto desu. (Hobi saya mengambil foto)."
        ],
        "formula": "趣味は V-Dict ことです"
      },
      {
        "id": "g18-4",
        "title": "4. V-Dictionary まえに、~ (Sebelum ~)",
        "desc": "'Mae ni' (Sebelum) SELALU disambung dengan Bentuk Kamus. JANGAN pakai bentuk lampau (Ta-form) di sini — itu kesalahan fatal.",
        "points": [
          "Neru MAE NI, hon o yomimasu. (SEBELUM tidur, baca buku).",
          "Gohan o taberu MAE NI, te o araimasu. (SEBELUM makan, cuci tangan).",
          "Bisa juga dengan KATA BENDA: Jugyou NO mae ni (Sebelum pelajaran).",
          "Bisa juga dengan DURASI: 5-nen mae ni (5 tahun yang lalu).",
          "AWAS: Mae ni selalu Dict-form. Te-kara (Bab 16) selalu Te-form. Jangan tertukar!"
        ],
        "formula": "V-Dict まえに、~ | N の まえに、~"
      }
    ],
    "patterns": [
      {
        "jp": "ミラーさんは 漢字を 読む ことが できます。",
        "rom": "Miraa-san wa kanji o yomu koto ga dekimasu.",
        "en": "Pak Miller bisa membaca Kanji."
      },
      {
        "jp": "わたしの 趣味は 映画を 見る ことです。",
        "rom": "Watashi no shumi wa eiga o miru koto desu.",
        "en": "Hobi saya adalah menonton film."
      },
      {
        "jp": "寝る 前に、日記を 書きます。",
        "rom": "Neru mae ni, nikki o kakimasu.",
        "en": "Sebelum tidur, saya menulis buku harian."
      },
      {
        "jp": "ご飯を 食べる 前に、手を 洗います。",
        "rom": "Gohan o taberu mae ni, te o araimasu.",
        "en": "Sebelum makan, saya mencuci tangan."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: 趣味は何ですか (Hobinya Apa?)",
      "dialogue": [
        {
          "speaker": "Yamada",
          "jp": "サントスさんの 趣味は 何ですか。",
          "rom": "Santosu-san no shumi wa nan desu ka.",
          "en": "Hobi Pak Santos apa?"
        },
        {
          "speaker": "Santos",
          "jp": "写真です。",
          "rom": "Shashin desu.",
          "en": "Fotografi."
        },
        {
          "speaker": "Yamada",
          "jp": "どんな 写真を 撮りますか。",
          "rom": "Donna shashin o torimasu ka.",
          "en": "Foto seperti apa yang Anda ambil?"
        },
        {
          "speaker": "Santos",
          "jp": "動物の 写真です。特に 馬が 好きです。",
          "rom": "Doubutsu no shashin desu. Tokuni uma ga suki desu.",
          "en": "Foto hewan. Terutama saya suka kuda."
        },
        {
          "speaker": "Yamada",
          "jp": "へえ、それは おもしろいですね。",
          "rom": "Hee, sore wa omoshiroi desu ne.",
          "en": "Wah, itu menarik ya."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Dictionary-Form dari 'Machimasu' (menunggu) adalah:",
        "options": [
          {
            "text": "Mate",
            "correct": false
          },
          {
            "text": "Matsu",
            "correct": true
          },
          {
            "text": "Machiru",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] 'Sebelum tidur, saya membaca buku.'\n[       ] mae ni, hon o yomimasu.",
        "answer": "neru"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] 'Bisa memainkan piano.' Pola kalimat yang benar:",
        "options": [
          {
            "text": "Piano o hikimasu koto ga dekimasu.",
            "correct": false
          },
          {
            "text": "Piano o hiku koto ga dekimasu.",
            "correct": true
          },
          {
            "text": "Piano o hiite koto ga dekimasu.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Hobi saya adalah MENDENGARKAN musik.'\nWatashi no shumi wa ongaku o kiku [       ] desu.",
        "answer": "koto"
      },
      {
        "type": "mcq",
        "question": "[Jebakan] 'Sebelum makan' — Bentuk yang dipasangkan dengan 'mae ni' adalah:",
        "options": [
          {
            "text": "Tabete mae ni (Te-form)",
            "correct": false
          },
          {
            "text": "Taberu mae ni (Dict-form)",
            "correct": true
          },
          {
            "text": "Tabeta mae ni (Ta-form)",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Kemampuan Membaca Kanji",
        "situation": "Bertanya tentang tingkat kemampuan membaca huruf kanji Jepang",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "ミラーさんは 漢字を 読む ことが できますか。",
            "rom": "Miraa-san wa kanji o yomu koto ga dekimasu ka.",
            "en": "Apakah Mr. Miller bisa membaca kanji?"
          },
          {
            "speaker": "B",
            "jp": "はい。少し 読む ことが できますよ。",
            "rom": "Hai. Sukoshi yomu koto ga dekimasu yo.",
            "en": "Ya. Saya bisa membaca sedikit lho."
          },
          {
            "speaker": "A",
            "jp": "すごいですね。",
            "rom": "Sugoi desu ne.",
            "en": "Hebat sekali ya."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Mengobrol tentang Hobi Utama",
        "situation": "Mengobrol santai mengenai kegemaran mengoleksi atau mendengarkan lagu",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "趣味は 何ですか。",
            "rom": "Shumi wa nan desu ka.",
            "en": "Hobi Anda apa?"
          },
          {
            "speaker": "B",
            "jp": "古い レコードを 集める ことです。",
            "rom": "Furui rekoodo o atsumeru koto desu.",
            "en": "Mengumpulkan piringan hitam kuno."
          },
          {
            "speaker": "A",
            "jp": "面白そうですね。今度 聞かせて ください。",
            "rom": "Omoshirosou desu ne. Kondo kikasete kudasai.",
            "en": "Kelihatannya seru ya. Kapan-kapan tolong perdengarkan ke saya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Kebiasaan Sebelum Tidur",
        "situation": "Bertanya tentang kebiasaan membaca atau berdoa sebelum istirahat malam",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "寝る 前に 何を しますか。",
            "rom": "Neru mae ni nani o shimasu ka.",
            "en": "Sebelum tidur melakukan apa?"
          },
          {
            "speaker": "B",
            "jp": "本を 読んだり、音楽を 聞いたり します。",
            "rom": "Hon o yondari, ongaku o kiitari shimasu.",
            "en": "Membaca buku atau mendengarkan musik."
          },
          {
            "speaker": "A",
            "jp": "そうですか。いいですね。",
            "rom": "Sou desu ka. Ii desu ne.",
            "en": "Oh begitu. Bagus sekali ya."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r18-1",
        "jp": "日本語を 話す ことが できますか。... はい、少し 話す ことが できます。",
        "rom": "Nihongo o hanasu koto ga dekimasu ka? ... Hai, sukoshi hanasu koto ga dekimasu.",
        "en": "Apakah Anda bisa berbicara bahasa Jepang? ... Ya, bisa berbicara sedikit."
      },
      {
        "id": "r18-2",
        "jp": "趣味は 何ですか。... 音楽を 聴く ことです。",
        "rom": "Shumi wa nan desu ka? ... Ongaku o kiku koto desu.",
        "en": "Hobi Anda apa? ... Mendengarkan musik."
      },
      {
        "id": "r18-3",
        "jp": "寝る 前に、何を しますか。... 本を 読んだり、日記を 書いたりします。",
        "rom": "Neru mae ni, nani o shimasu ka? ... Hon o yondari, nikki o kaitari shimasu.",
        "en": "Sebelum tidur, melakukan apa? ... Membaca buku, menulis buku harian, dan sebagainya."
      },
      {
        "id": "r18-4",
        "jp": "いつ 日本語を 勉強しますか。... 寝る 前に 勉強します。",
        "rom": "Itsu Nihongo o benkyou shimasu ka? ... Neru mae ni benkyou shimasu.",
        "en": "Kapan Anda belajar bahasa Jepang? ... Belajar sebelum tidur."
      },
      {
        "id": "r18-5",
        "jp": "カードで 払う ことが できますか。... はい、できますよ。",
        "rom": "Kaado de harau koto ga dekimasu ka? ... Hai, dekimasu yo.",
        "en": "Apakah bisa membayar menggunakan kartu? ... Ya, bisa."
      }
    ]
  },
  {
    "id": 19,
    "title": "Lesson 19: Ta-Form & Pengalaman",
    "desc": "Membedah Bab 19. Memperkenalkan Ta-Form (Bentuk Lampau Kasual) — bentuk ke-5. Digunakan untuk menceritakan pengalaman hidup (pernah), mendaftar aktivitas acak (tari-tari), dan menyatakan perubahan keadaan (narimasu).",
    "locked": false,
    "vocab": [
      {
        "id": "v19-1",
        "rom": "Noborimasu",
        "kana": "のぼります",
        "kanji": "登ります",
        "en": "Mendaki [yama NI]",
        "audio": ""
      },
      {
        "id": "v19-2",
        "rom": "Tomarimasu",
        "kana": "とまります",
        "kanji": "泊まります",
        "en": "Menginap [hoteru NI]",
        "audio": ""
      },
      {
        "id": "v19-3",
        "rom": "Souji-shimasu",
        "kana": "そうじします",
        "kanji": "掃除します",
        "en": "Bersih-bersih (ruangan)",
        "audio": ""
      },
      {
        "id": "v19-4",
        "rom": "Sentaku-shimasu",
        "kana": "せんたくします",
        "kanji": "洗濯します",
        "en": "Mencuci (pakaian)",
        "audio": ""
      },
      {
        "id": "v19-5",
        "rom": "Narimasu",
        "kana": "なります",
        "kanji": "",
        "en": "Menjadi (Become)",
        "audio": ""
      },
      {
        "id": "v19-6",
        "rom": "Nemui",
        "kana": "ねむい",
        "kanji": "眠い",
        "en": "Mengantuk (I-Adj)",
        "audio": ""
      },
      {
        "id": "v19-7",
        "rom": "Tsuyoi",
        "kana": "つよい",
        "kanji": "強い",
        "en": "Kuat (I-Adj)",
        "audio": ""
      },
      {
        "id": "v19-8",
        "rom": "Yowai",
        "kana": "よわい",
        "kanji": "弱い",
        "en": "Lemah (I-Adj)",
        "audio": ""
      },
      {
        "id": "v19-9",
        "rom": "Renshuu",
        "kana": "れんしゅう",
        "kanji": "練習",
        "en": "Latihan",
        "audio": ""
      },
      {
        "id": "v19-10",
        "rom": "Gorufu",
        "kana": "ゴルフ",
        "kanji": "",
        "en": "Golf",
        "audio": ""
      },
      {
        "id": "v19-11",
        "rom": "Sumou",
        "kana": "すもう",
        "kanji": "相撲",
        "en": "Sumo",
        "audio": ""
      },
      {
        "id": "v19-12",
        "rom": "Ocha",
        "kana": "おちゃ",
        "kanji": "お茶",
        "en": "Teh (atau Upacara Minum Teh)",
        "audio": ""
      },
      {
        "id": "v19-13",
        "rom": "Ichido",
        "kana": "いちど",
        "kanji": "一度",
        "en": "Satu kali / Sekali",
        "audio": ""
      },
      {
        "id": "v19-14",
        "rom": "Ichido mo",
        "kana": "いちども",
        "kanji": "一度も",
        "en": "Sekali pun (+ negatif = belum pernah)",
        "audio": ""
      },
      {
        "id": "v19-15",
        "rom": "Dandan",
        "kana": "だんだん",
        "kanji": "",
        "en": "Lama-kelamaan / Perlahan-lahan",
        "audio": ""
      },
      {
        "id": "v19-16",
        "rom": "Sukkari",
        "kana": "すっかり",
        "kanji": "",
        "en": "Sepenuhnya / Seutuhnya",
        "audio": ""
      },
      {
        "id": "v19-17",
        "rom": "Daietto",
        "kana": "ダイエット",
        "kanji": "",
        "en": "Diet",
        "audio": ""
      },
      {
        "id": "v19-18",
        "rom": "Hajimemasu",
        "kana": "はじめます",
        "kanji": "始めます",
        "en": "Memulai",
        "audio": ""
      },
      {
        "id": "v19-19",
        "rom": "Pachinko",
        "kana": "パチンコ",
        "kanji": "",
        "en": "Pachinko (permainan mesin bola Jepang)",
        "audio": ""
      },
      {
        "id": "v19-20",
        "rom": "Hi",
        "kana": "ひ",
        "kanji": "日",
        "en": "Hari / Tanggal",
        "audio": ""
      },
      {
        "id": "v19-21",
        "rom": "Mousugu",
        "kana": "もうすぐ",
        "kanji": "",
        "en": "Sebentar lagi / Hampir",
        "audio": ""
      },
      {
        "id": "v19-22",
        "rom": "Okagesama de",
        "kana": "おかげさまで",
        "kanji": "",
        "en": "Alhamdulillah / Berkat doa Anda (ungkapan syukur)",
        "audio": ""
      },
      {
        "id": "v19-23",
        "rom": "Kanpai",
        "kana": "かんぱい",
        "kanji": "乾杯",
        "en": "Bersulang! / Cheers!",
        "audio": ""
      },
      {
        "id": "v19-24",
        "rom": "Jitsu wa",
        "kana": "じつは",
        "kanji": "実は",
        "en": "Sebenarnya / Sejujurnya",
        "audio": ""
      },
      {
        "id": "v19-25",
        "rom": "Nankai mo",
        "kana": "なんかいも",
        "kanji": "何回も",
        "en": "Berkali-kali / Berulang kali",
        "audio": ""
      },
      {
        "id": "v19-26",
        "rom": "Shikashi",
        "kana": "しかし",
        "kanji": "",
        "en": "Namun / Akan tetapi (formal)",
        "audio": ""
      },
      {
        "id": "v19-27",
        "rom": "Muri (na)",
        "kana": "むり",
        "kanji": "無理",
        "en": "Mustahil / Tidak masuk akal / Memaksakan diri",
        "audio": ""
      },
      {
        "id": "v19-28",
        "rom": "Karada ni ii",
        "kana": "からだにいい",
        "kanji": "体にいい",
        "en": "Baik untuk kesehatan / Menyehatkan",
        "audio": ""
      },
      {
        "id": "v19-29",
        "rom": "Keeki",
        "kana": "ケーキ",
        "kanji": "",
        "en": "Kue tart / Cake",
        "audio": ""
      },
      {
        "id": "v19-30",
        "rom": "Choushi",
        "kana": "ちょうし",
        "kanji": "調子",
        "en": "Kondisi / Keadaan (mesin/badan)",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g19-1",
        "title": "1. Ta-Form: Aturan Konversi (Bentuk Lampau Kasual)",
        "desc": "Ta-Form memiliki aturan konversi yang 100% PERSIS SAMA dengan Te-Form! Cukup ganti '-te' menjadi '-ta', dan '-de' menjadi '-da'.",
        "points": [
          "Kaite → Kaita. (Menulis). Nonde → Nonda. (Minum).",
          "Matte → Matta. (Menunggu). Yonde → Yonda. (Membaca/Memanggil).",
          "Tabete → Tabeta. (Makan). Mite → Mita. (Melihat).",
          "Shite → Shita. (Melakukan). Kite → Kita. (Datang).",
          "RANGKUMAN 5 BENTUK: Masu | Te | Nai | Dict | Ta. Jika hafal Te-form, Ta-form otomatis bisa!"
        ],
        "formula": "Te-form → ganti -te/-de menjadi -ta/-da",
        "native_note": "Saat menceritakan aktivitas liburan yang acak menggunakan pola '~tari ~tari shimasu', dalam bahasa gaul lisan sering diakhiri dengan kata '~tari shiteru' untuk menggambarkan kebiasaan santai di akhir pekan."
      },
      {
        "id": "g19-2",
        "title": "2. V-た ことが あります (Pernah ~)",
        "desc": "Digunakan untuk menceritakan PENGALAMAN HIDUP (Pernah melakukan sesuatu setidaknya sekali). Harus menggunakan Ta-form.",
        "points": [
          "Nihon e itTA KOTO GA ARIMASU. (Saya PERNAH pergi ke Jepang).",
          "Uma ni notta koto ga arimasu ka. (Apakah Anda PERNAH naik kuda?).",
          "Negatif: ~ta koto ga ARIMASEN. (BELUM PERNAH sama sekali).",
          "Penekanan: Ichido mo ~ta koto ga arimasen. (Sekali pun belum pernah)."
        ],
        "formula": "V-た ことが あります / ありません"
      },
      {
        "id": "g19-3",
        "title": "3. V1-たり、V2-たり します (Mendaftar Aktivitas Acak)",
        "desc": "Berbeda dari V-te V-te (kronologis wajib berurutan), pola TARI-TARI menyebutkan beberapa CONTOH kegiatan secara ACAK (kadang A, kadang B, dll).",
        "points": [
          "Nichiyoubi wa tenisu o shiTARI, eiga o miTARI SHIMASU. (Hari Minggu saya [antara lain] main tenis, nonton film, dsb).",
          "Cara membuat: Ta-form → ganti -ta/-da → -tari/-dari.",
          "Selalu ditutup dengan 'shimasu' (atau 'shimashita' jika lampau).",
          "Bisa juga untuk Kata Sifat: Atsukattari samukattari shimasu. (Kadang panas kadang dingin)."
        ],
        "formula": "V1-たり、V2-たり します"
      },
      {
        "id": "g19-4",
        "title": "4. I-Adj-く / Na-Adj-に なります (Menjadi ~)",
        "desc": "Digunakan untuk menyatakan PERUBAHAN keadaan — dari satu kondisi menjadi kondisi lain.",
        "points": [
          "I-Adj: Buang 'i', ganti 'ku'. Samui → Samuku narimasu. (Menjadi dingin).",
          "I-Adj: Atsui → Atsuku narimashita. (Telah menjadi panas).",
          "Na-Adj/Kata Benda: Tambah 'ni'. Genki → Genki NI narimasu. (Menjadi sehat).",
          "Kata Benda: 25-sai NI narimashita. (Telah menjadi [berusia] 25 tahun).",
          "Adverb: Dandan (lama-kelamaan). Dandan atsuku narimashita. (Perlahan menjadi panas)."
        ],
        "formula": "I-Adj-く / Na-Adj-に / N-に + なります"
      }
    ],
    "patterns": [
      {
        "jp": "馬に 乗った ことが あります。",
        "rom": "Uma ni notta koto ga arimasu.",
        "en": "Saya pernah naik kuda."
      },
      {
        "jp": "日本へ 一度も 行った ことが ありません。",
        "rom": "Nihon e ichido mo itta koto ga arimasen.",
        "en": "Sekali pun belum pernah pergi ke Jepang."
      },
      {
        "jp": "日曜日は テニスを したり、映画を 見たり します。",
        "rom": "Nichiyoubi wa tenisu o shitari, eiga o mitari shimasu.",
        "en": "Hari Minggu saya bermain tenis, menonton film, dll."
      },
      {
        "jp": "だんだん 暑く なりました。",
        "rom": "Dandan atsuku narimashita.",
        "en": "Lama-kelamaan menjadi panas."
      },
      {
        "jp": "すっかり 元気に なりました。",
        "rom": "Sukkari genki ni narimashita.",
        "en": "Sudah sepenuhnya sehat."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: ダイエットをしていますか (Sedang Diet?)",
      "dialogue": [
        {
          "speaker": "Maria",
          "jp": "サントスさん、ダイエットを して いますか。",
          "rom": "Santosu-san, daietto o shite imasu ka.",
          "en": "Pak Santos, apakah Anda sedang diet?"
        },
        {
          "speaker": "Santos",
          "jp": "いいえ。でも、毎日 りんごを 食べたり、水を たくさん 飲んだり して います。",
          "rom": "Iie. Demo, mainichi ringo o tabetari, mizu o takusan nondari shite imasu.",
          "en": "Tidak. Tapi setiap hari saya makan apel, banyak minum air, dll."
        },
        {
          "speaker": "Maria",
          "jp": "そうですか。",
          "rom": "Sou desu ka.",
          "en": "Oh begitu ya."
        },
        {
          "speaker": "Santos",
          "jp": "ええ。それから、テニスも 始めました。",
          "rom": "Ee. Sorekara, tenisu mo hajimemashita.",
          "en": "Iya. Selain itu, saya juga mulai tenis."
        },
        {
          "speaker": "Maria",
          "jp": "いいですね。すっかり 元気に なりましたね。",
          "rom": "Ii desu ne. Sukkari genki ni narimashita ne.",
          "en": "Bagus ya. Sudah sepenuhnya sehat ya."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Ta-Form dari 'Nomimasu' (Minum: nonde→nonda) adalah:",
        "options": [
          {
            "text": "Nonda",
            "correct": true
          },
          {
            "text": "Nota",
            "correct": false
          },
          {
            "text": "Nomata",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] 'Telah menjadi dingin'.\nSamu-[     ] narimashita.",
        "answer": "ku"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] 'Apakah Anda PERNAH naik kuda?' Pola kalimat yang benar:",
        "options": [
          {
            "text": "Uma ni noru koto ga arimasu ka.",
            "correct": false
          },
          {
            "text": "Uma ni notta koto ga arimasu ka.",
            "correct": true
          },
          {
            "text": "Uma ni notte koto ga arimasu ka.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Hari Minggu saya (antara lain) main tenis, nonton film, dll.'\nNichiyoubi wa tenisu o shi-[       ], eiga o mitari shimasu.",
        "answer": "tari"
      },
      {
        "type": "mcq",
        "question": "[Jebakan] 'Menjadi sehat'. Na-Adj 'Genki' + narimasu. Partikel yang tepat:",
        "options": [
          {
            "text": "Genki ku narimasu",
            "correct": false
          },
          {
            "text": "Genki ni narimasu",
            "correct": true
          },
          {
            "text": "Genki de narimasu",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Pengalaman Mendaki Gunung Fuji",
        "situation": "Bertanya apakah lawan bicara memiliki pengalaman mendaki gunung tertinggi di Jepang",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "富士山に 登った ことが ありますか。",
            "rom": "Fuji-san ni nobotta koto ga arimasu ka.",
            "en": "Apakah pernah mendaki Gunung Fuji?"
          },
          {
            "speaker": "B",
            "jp": "はい、一度 あります。とても 綺麗でしたよ。",
            "rom": "Hai, ichido arimasu. Totemo kirei deshita yo.",
            "en": "Ya, pernah sekali. Sangat indah lho."
          },
          {
            "speaker": "A",
            "jp": "いいですね。私も 登りたいです。",
            "rom": "Ii desu ne. Watashi mo noboritai desu.",
            "en": "Wah bagus ya. Saya juga ingin mendaki."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Aktivitas Variatif di Akhir Pekan",
        "situation": "Menjelaskan berbagai aktivitas seperti olahraga atau rekreasi di kala libur",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "休みの 日は いつも 何を しますか。",
            "rom": "Yasumi no hi wa itsumo nani o shimasu ka.",
            "en": "Hari libur biasanya melakukan apa?"
          },
          {
            "speaker": "B",
            "jp": "テニスを したり、買い物に 行ったり します。",
            "rom": "Tenisu o shitari, kaimono ni ittari shimasu.",
            "en": "Bermain tenis atau pergi berbelanja."
          },
          {
            "speaker": "A",
            "jp": "そうですか。忙しいですね。",
            "rom": "Sou desu ka. Isogashii desu ne.",
            "en": "Oh begitu. Sibuk sekali ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Mengobrol tentang Perubahan Musim",
        "situation": "Mengobrol tentang udara yang mulai terasa dingin karena menjelang musim dingin",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "最近 寒く なりましたね。",
            "rom": "Saikin samuku narimashita ne.",
            "en": "Akhir-akhir ini udara menjadi dingin ya."
          },
          {
            "speaker": "B",
            "jp": "ええ。もう すぐ 冬に なりますね。",
            "rom": "Ee. Mou sugu fuyu ni narimasu ne.",
            "en": "Iya. Sebentar lagi menjadi musim dingin ya."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r19-1",
        "jp": "日本料理を 食べた ことが ありますか。... はい、一度 あります。",
        "rom": "Nihonryouri o tabeta koto ga arimasu ka? ... Hai, ichido arimasu.",
        "en": "Apakah pernah makan masakan Jepang? ... Ya, pernah satu kali."
      },
      {
        "id": "r19-2",
        "jp": "日曜日は 何を しますか。... テニスを したり、買い物を したりします。",
        "rom": "Nichiyoubi wa nani o shimasu ka? ... Tenisu o shitari, kaimono o shitari shimasu.",
        "en": "Hari Minggu melakukan apa? ... Bermain tenis, berbelanja, dan sebagainya."
      },
      {
        "id": "r19-3",
        "jp": "だんだん 寒く なりますね。... そうですね。もう １１月ですから。",
        "rom": "Dandan samuku narimasu ne. ... Sou desu ne. Mou juuichigatsu desu kara.",
        "en": "Lama-kelamaan menjadi dingin ya. ... Benar ya. Karena sudah bulan November."
      },
      {
        "id": "r19-4",
        "jp": "相撲を 見た ことが ありますか。... いいえ、一度も ありません。",
        "rom": "Sumou o mita koto ga arimasu ka? ... Iie, ichido mo arimasen.",
        "en": "Apakah pernah menonton Sumo? ... Tidak, belum pernah sekali pun."
      },
      {
        "id": "r19-5",
        "jp": "体調は どうですか。... おかげさまで よく なりました。",
        "rom": "Taichou wa dou desu ka? ... Okagesama de yoku narimashita.",
        "en": "Bagaimana kondisi badan Anda? ... Syukurlah, sudah membaik."
      }
    ]
  },
  {
    "id": 20,
    "title": "Lesson 20: Plain Form (Bentuk Kasual)",
    "desc": "Membedah Bab 20. TITIK BALIK BESAR. Anda membuang 'Desu/Masu' dan belajar cara orang Jepang berbicara santai (Futsukei). Juga FONDASI penting karena hampir semua tata bahasa N4/N3 membutuhkan Plain Form.",
    "locked": false,
    "vocab": [
      {
        "id": "v20-1",
        "rom": "Irimasu",
        "kana": "いります",
        "kanji": "要ります",
        "en": "Membutuhkan [Benda + GA]",
        "audio": ""
      },
      {
        "id": "v20-2",
        "rom": "Shirabemasu",
        "kana": "しらべます",
        "kanji": "調べます",
        "en": "Memeriksa / Mencari info",
        "audio": ""
      },
      {
        "id": "v20-3",
        "rom": "Naoshimasu",
        "kana": "なおします",
        "kanji": "直します",
        "en": "Memperbaiki",
        "audio": ""
      },
      {
        "id": "v20-4",
        "rom": "Shuuri-shimasu",
        "kana": "しゅうりします",
        "kanji": "修理します",
        "en": "Reparasi",
        "audio": ""
      },
      {
        "id": "v20-5",
        "rom": "Boku",
        "kana": "ぼく",
        "kanji": "僕",
        "en": "Saya (maskulin informal)",
        "audio": ""
      },
      {
        "id": "v20-6",
        "rom": "Kimi",
        "kana": "きみ",
        "kanji": "君",
        "en": "Kamu (informal, ke bawahan/sebaya)",
        "audio": ""
      },
      {
        "id": "v20-7",
        "rom": "~Kun",
        "kana": "〜くん",
        "kanji": "〜君",
        "en": "~ saudara (panggilan akrab untuk pria)",
        "audio": ""
      },
      {
        "id": "v20-8",
        "rom": "Un / Uun",
        "kana": "うん / ううん",
        "kanji": "",
        "en": "Ya / Tidak (kasual dari Hai/Iie)",
        "audio": ""
      },
      {
        "id": "v20-9",
        "rom": "Kotoba",
        "kana": "ことば",
        "kanji": "言葉",
        "en": "Kata / Bahasa",
        "audio": ""
      },
      {
        "id": "v20-10",
        "rom": "Bukka",
        "kana": "ぶっか",
        "kanji": "物価",
        "en": "Harga barang (secara umum)",
        "audio": ""
      },
      {
        "id": "v20-11",
        "rom": "Kimono",
        "kana": "きもの",
        "kanji": "着物",
        "en": "Kimono",
        "audio": ""
      },
      {
        "id": "v20-12",
        "rom": "Biza",
        "kana": "ビザ",
        "kanji": "",
        "en": "Visa",
        "audio": ""
      },
      {
        "id": "v20-13",
        "rom": "Hontou",
        "kana": "ほんとう",
        "kanji": "本当",
        "en": "Sungguh / Benar",
        "audio": ""
      },
      {
        "id": "v20-14",
        "rom": "Uso",
        "kana": "うそ",
        "kanji": "嘘",
        "en": "Bohong",
        "audio": ""
      },
      {
        "id": "v20-15",
        "rom": "Futsukei",
        "kana": "ふつうけい",
        "kanji": "普通形",
        "en": "Bentuk Biasa / Plain Form",
        "audio": ""
      },
      {
        "id": "v20-16",
        "rom": "Denwa-shimasu",
        "kana": "でんわします",
        "kanji": "電話します",
        "en": "Menelepon",
        "audio": ""
      },
      {
        "id": "v20-17",
        "rom": "Sarariiman",
        "kana": "サラリーマン",
        "kanji": "",
        "en": "Pekerja kantoran / Karyawan gajian",
        "audio": ""
      },
      {
        "id": "v20-18",
        "rom": "Hajime",
        "kana": "はじめ",
        "kanji": "初め",
        "en": "Awal / Permulaan",
        "audio": ""
      },
      {
        "id": "v20-19",
        "rom": "Owari",
        "kana": "おわり",
        "kanji": "終わり",
        "en": "Akhir / Selesai",
        "audio": ""
      },
      {
        "id": "v20-20",
        "rom": "Kocchi",
        "kana": "こっち",
        "kanji": "",
        "en": "Sebelah sini (kasual dari Kochira)",
        "audio": ""
      },
      {
        "id": "v20-21",
        "rom": "Socchi",
        "kana": "そっち",
        "kanji": "",
        "en": "Sebelah situ (kasual dari Sochira)",
        "audio": ""
      },
      {
        "id": "v20-22",
        "rom": "Acchi",
        "kana": "あっち",
        "kanji": "",
        "en": "Sebelah sana (kasual dari Achira)",
        "audio": ""
      },
      {
        "id": "v20-23",
        "rom": "Docchi",
        "kana": "どっち",
        "kanji": "",
        "en": "Sebelah mana? (kasual dari Dochira)",
        "audio": ""
      },
      {
        "id": "v20-24",
        "rom": "Kono aida",
        "kana": "このあいだ",
        "kanji": "この間",
        "en": "Tempo hari / Beberapa waktu lalu",
        "audio": ""
      },
      {
        "id": "v20-25",
        "rom": "Minna de",
        "kana": "みんなで",
        "kanji": "",
        "en": "Bersama-sama (semua orang)",
        "audio": ""
      },
      {
        "id": "v20-26",
        "rom": "~kedo",
        "kana": "〜けど",
        "kanji": "",
        "en": "Tapi / Namun (kasual, penghubung kalimat)",
        "audio": ""
      },
      {
        "id": "v20-27",
        "rom": "Yokattara",
        "kana": "よかったら",
        "kanji": "",
        "en": "Kalau berkenan / Kalau tidak keberatan",
        "audio": ""
      },
      {
        "id": "v20-28",
        "rom": "Iroiro",
        "kana": "いろいろ",
        "kanji": "色々",
        "en": "Bermacam-macam / Berbagai hal",
        "audio": ""
      },
      {
        "id": "v20-29",
        "rom": "Byouki",
        "kana": "びょうき",
        "kanji": "病気",
        "en": "Sakit / Penyakit",
        "audio": ""
      },
      {
        "id": "v20-30",
        "rom": "Nichiyoubi",
        "kana": "にちようび",
        "kanji": "日曜日",
        "en": "Hari Minggu",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g20-1",
        "title": "1. Konsep Futsukei (Plain Form / Bentuk Kasual)",
        "desc": "Bahasa Jepang terbagi dua register: Teineigo (Sopan: Masu/Desu) dan Futsukei (Kasual: Plain Form). Bab ini adalah gerbang menuju bahasa Jepang sesungguhnya.",
        "points": [
          "Futsukei WAJIB dipakai saat berbicara dengan: keluarga, teman dekat, atau bawahan.",
          "WAJIB dikuasai karena banyak pola tata bahasa N4/N3 membutuhkan klausa dalam Plain Form.",
          "Contoh pola yang MEMBUTUHKAN Plain Form: ~to omoimasu (Bab 21), ~deshou (Bab 22), ~noni (Bab 25)."
        ],
        "formula": "Sopan (Masu/Desu) → Kasual (Plain/Futsukei)",
        "native_note": "Di dunia nyata, intonasi suara memegang peranan vital dalam Futsukei. Pria sering menggunakan partikel tegas di akhir seperti 'yo' atau 'zo', sementara wanita lebih sering menggunakan partikel lembut 'ne' or 'wa' untuk mencegah kalimat kasual terdengar kasar."
      },
      {
        "id": "g20-2",
        "title": "2. Konversi Kata Kerja ke Plain Form",
        "desc": "KABAR BAIK: Anda sudah hafal semua bentuk kasual kata kerja! Ini hanya merangkum 4 bentuk yang sudah dipelajari.",
        "points": [
          "Positif: Masu → Dictionary Form. Ikimasu → Iku. Tabemasu → Taberu.",
          "Negatif: Masen → Nai Form. Ikimasen → Ikanai. Tabemasen → Tabenai.",
          "Lampau: Mashita → Ta Form. Ikimashita → Itta. Tabemashita → Tabeta.",
          "Lampau Negatif: Masen deshita → Nakatta Form. Ikimasen deshita → Ikanakatta."
        ],
        "formula": "Masu→Dict | Masen→Nai | Mashita→Ta | Masen deshita→Nakatta"
      },
      {
        "id": "g20-3",
        "title": "3. Konversi Kata Sifat & Benda ke Plain Form",
        "desc": "Kata sifat dan kata benda juga membuang 'Desu' dalam percakapan kasual. Perhatikan perbedaan I-Adj vs Na-Adj.",
        "points": [
          "I-Adj Positif: Tinggal hapus 'desu'. Takai desu → Takai.",
          "I-Adj Negatif: Hapus 'desu'. Takaku nai desu → Takaku nai.",
          "I-Adj Lampau: Hapus 'desu'. Takakatta desu → Takakatta.",
          "Na-Adj/N Positif: 'Desu' → 'DA'. Hima desu → Hima DA. Ame desu → Ame DA.",
          "Na-Adj/N Negatif: 'Ja arimasen' → 'Ja nai'. Hima ja arimasen → Hima ja nai.",
          "Na-Adj/N Lampau: 'Deshita' → 'Datta'. Ame deshita → Ame datta.",
          "Na-Adj/N Lampau Neg: 'Ja arimasen deshita' → 'Ja nakatta'. Hima ja nakatta."
        ],
        "formula": "I-Adj: hapus desu | Na-Adj/N: desu→da / ja arimasen→ja nai / deshita→datta"
      },
      {
        "id": "g20-4",
        "title": "4. Ciri Khas Percakapan Kasual (Lisan)",
        "desc": "Dalam Futsukei LISAN, banyak aturan sopan yang dilanggar demi kecepatan dan kedekatan.",
        "points": [
          "TANYA: Naikkan intonasi saja, TANPA 'ka'. Nomu? (Mau minum?). Jawab: Un, nomu. / Uun, nomanai.",
          "PARTIKEL O, WA, E sering DIBUANG: Gohan [o] taberu? Asoko [e] iku?",
          "KONTRAKSI '~te iru' → '~teru': Nani shite iru? → Nani shiteru? (Lagi ngapain?)",
          "AWAS: JANGAN pakai kasual ke orang asing, atasan, atau orang lebih tua. Itu SANGAT tidak sopan!"
        ],
        "formula": "Naikkan intonasi = tanya | Buang partikel | ~teru = ~te iru"
      }
    ],
    "patterns": [
      {
        "jp": "あした 東京へ 行く？ …うん、行く。",
        "rom": "Ashita Toukyou e iku? ...Un, iku.",
        "en": "(Kasual) Besok pergi ke Tokyo? ...Ya, pergi."
      },
      {
        "jp": "毎日 忙しい？ …ううん、忙しくない。",
        "rom": "Mainichi isogashii? ...Uun, isogashiku nai.",
        "en": "(Kasual) Tiap hari sibuk? ...Tidak, gak sibuk."
      },
      {
        "jp": "富士山に 登った こと ある？",
        "rom": "Fuji-san ni nobotta koto aru?",
        "en": "(Kasual) Pernah mendaki gunung Fuji?"
      },
      {
        "jp": "何 してる？ …テレビ 見てる。",
        "rom": "Nani shiteru? ...Terebi miteru.",
        "en": "(Kasual) Lagi ngapain? ...Lagi nonton TV."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: 夏休みはどうする？ (Libur Musim Panas Mau Ngapain?)",
      "dialogue": [
        {
          "speaker": "Taro",
          "jp": "夏休みは 国へ 帰る？",
          "rom": "Natsu-yasumi wa kuni e kaeru?",
          "en": "Libur musim panas mau pulang ke negara asal?"
        },
        {
          "speaker": "Jose",
          "jp": "ううん、帰らない。太郎君は？",
          "rom": "Uun, kaeranai. Tarou-kun wa?",
          "en": "Enggak, gak pulang. Kamu Taro?"
        },
        {
          "speaker": "Taro",
          "jp": "僕も 帰らない。富士山に 登りたいから。",
          "rom": "Boku mo kaeranai. Fuji-san ni noboritai kara.",
          "en": "Aku juga gak pulang. Soalnya pengen mendaki Gunung Fuji."
        },
        {
          "speaker": "Jose",
          "jp": "へえ、いいね。富士山に 登った こと ある？",
          "rom": "Hee, ii ne. Fuji-san ni nobotta koto aru?",
          "en": "Wah, bagus ya. Pernah daki Gunung Fuji?"
        },
        {
          "speaker": "Taro",
          "jp": "ううん、ない。じゃ、いっしょに 行かない？",
          "rom": "Uun, nai. Ja, issho ni ikanai?",
          "en": "Enggak, belum. Kalau gitu, gak mau pergi bareng?"
        },
        {
          "speaker": "Jose",
          "jp": "うん、いいね。",
          "rom": "Un, ii ne.",
          "en": "Ya, boleh tuh."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Plain Form dari 'Ikimasen deshita' (tidak pergi - lampau) adalah:",
        "options": [
          {
            "text": "Ikanakatta",
            "correct": true
          },
          {
            "text": "Ikanai",
            "correct": false
          },
          {
            "text": "Ikatta",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Bentuk kasual dari 'Ame desu' (Hujan — kata benda).\nAme [     ].",
        "answer": "da"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] Plain Form LAMPAU dari Na-Adj 'Hima deshita' (senggang) adalah:",
        "options": [
          {
            "text": "Hima da",
            "correct": false
          },
          {
            "text": "Hima datta",
            "correct": true
          },
          {
            "text": "Hima nakatta",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] Plain Form NEGATIF dari 'Hima ja arimasen' (tidak senggang).\nHima [          ].",
        "answer": "ja nai"
      },
      {
        "type": "mcq",
        "question": "[Budaya] Anda menggunakan Plain Form ke dosen universitas. Ini adalah:",
        "options": [
          {
            "text": "Normal dan diterima di Jepang.",
            "correct": false
          },
          {
            "text": "SANGAT tidak sopan. Dosen wajib Teineigo (Masu/Desu).",
            "correct": true
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Percakapan Kasual tentang Makanan",
        "situation": "Menawarkan makanan pencuci mulut kepada teman dekat menggunakan gaya bahasa santai",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "この ケーキ、食べる？",
            "rom": "Kono keeki, taberu?",
            "en": "Mau makan kue ini?"
          },
          {
            "speaker": "B",
            "jp": "うん、食べる。美味しそうだね。",
            "rom": "Un, taberu. Oishisou dane.",
            "en": "Iya, mau. Kelihatannya enak ya."
          },
          {
            "speaker": "A",
            "jp": "美味しい？",
            "rom": "Oishii?",
            "en": "Enak?"
          },
          {
            "speaker": "B",
            "jp": "うん、すごく 美味しいよ。ありがとう。",
            "rom": "Un, sugoku oishii yo. Arigatou.",
            "en": "Iya, enak banget lho. Makasih."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Percakapan Kasual Rencana Liburan",
        "situation": "Menanyakan rencana jalan-jalan esok hari kepada sahabat menggunakan bentuk Plain",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "明日 どこか 行く？",
            "rom": "Ashita doko ka iku?",
            "en": "Besok mau pergi ke mana?"
          },
          {
            "speaker": "B",
            "jp": "ううん、どこも 行かない。家で ゆっくり 休むよ。",
            "rom": "Uun, doko mo ikanai. Uchi de yukkuri yasumu yo.",
            "en": "Nggak, nggak pergi ke mana-mana. Santai istirahat di rumah aja."
          },
          {
            "speaker": "A",
            "jp": "そう。じゃあ、またね。",
            "rom": "Sou. Jaa, matane.",
            "en": "Oh gitu. Ya udah, dah!"
          }
        ]
      },
      {
        "title": "Renshuu C 3: Percakapan Kasual tentang Kesulitan Kanji",
        "situation": "Mengobrol santai dengan teman sekelas tentang sulitnya belajar karakter kanji",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "日本の 漢字、わかる？",
            "rom": "Nihon no kanji, wakaru?",
            "en": "Ngerti kanji Jepang nggak?"
          },
          {
            "speaker": "B",
            "jp": "ううん、あまり わからない。難しいね。",
            "rom": "Uun, amari wakaranai. Muzukashii ne.",
            "en": "Nggak, nggak begitu ngerti. Susah ya."
          },
          {
            "speaker": "A",
            "jp": "そうだね。一緒に 勉強しようよ。",
            "rom": "Sou dane. Issho ni benkyou shiyou yo.",
            "en": "Iya ya. Belajar bareng yuk!"
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r20-1",
        "jp": "辞書、持っている？... うん、持っているよ。",
        "rom": "Jisho, motte iru? ... Un, motte iru yo.",
        "en": "Punya kamus? (Kasual) ... Ya, punya kok."
      },
      {
        "id": "r20-2",
        "jp": "ご飯、食べる？... ううん、食べない。お腹が いっぱいだから。",
        "rom": "Gohan, taberu? ... Uun, tabenai. Onaka ga ippai daka ra.",
        "en": "Mau makan nasi? (Kasual) ... Nggak, nggak makan. Soalnya kenyang."
      },
      {
        "id": "r20-3",
        "jp": "昨日 暇だった？... うん、暇だったよ。",
        "rom": "Kinou hima datta? ... Un, hima datta yo.",
        "en": "Kemarin senggang? (Kasual) ... Ya, senggang kok."
      },
      {
        "id": "r20-4",
        "jp": "日本語、面白い？... うん、面白いけど、難しい。",
        "rom": "Nihongo, omoshiroi? ... Un, omoshiroi kedo, muzukashii.",
        "en": "Bahasa Jepang menarik? (Kasual) ... Ya, menarik tapi sulit."
      },
      {
        "id": "r20-5",
        "jp": "今日 暇？... うん、暇。どこか 行く？",
        "rom": "Kyou hima? ... Un, hima. Dokoka iku?",
        "en": "Hari ini luang? (Kasual) ... Ya, luang. Mau pergi ke suatu tempat?"
      }
    ]
  },
  {
    "id": 21,
    "title": "Lesson 21: Opini & Kutipan (To Omoimasu)",
    "desc": "Membedah Bab 21. Belajar cara mengungkapkan pendapat pribadi ('Saya pikir...') dan mengutip perkataan orang lain ('Dia berkata bahwa...'). Keduanya menggunakan Plain Form sebagai pondasi.",
    "locked": false,
    "vocab": [
      {
        "id": "v21-1",
        "rom": "Omoimasu",
        "kana": "おもいます",
        "kanji": "思います",
        "en": "Berpikir / Menganggap",
        "audio": ""
      },
      {
        "id": "v21-2",
        "rom": "Iimasu",
        "kana": "いいます",
        "kanji": "言います",
        "en": "Berkata",
        "audio": ""
      },
      {
        "id": "v21-3",
        "rom": "Tarimasu",
        "kana": "たります",
        "kanji": "足ります",
        "en": "Cukup (tidak kurang)",
        "audio": ""
      },
      {
        "id": "v21-4",
        "rom": "Kachimasu",
        "kana": "かちます",
        "kanji": "勝ちます",
        "en": "Menang",
        "audio": ""
      },
      {
        "id": "v21-5",
        "rom": "Makemasu",
        "kana": "まけます",
        "kanji": "負けます",
        "en": "Kalah",
        "audio": ""
      },
      {
        "id": "v21-6",
        "rom": "Yakuni tachimasu",
        "kana": "やくに たちます",
        "kanji": "役に 立ちます",
        "en": "Berguna / Bermanfaat",
        "audio": ""
      },
      {
        "id": "v21-7",
        "rom": "Muda (na)",
        "kana": "むだ",
        "kanji": "無駄",
        "en": "Sia-sia / Percuma",
        "audio": ""
      },
      {
        "id": "v21-8",
        "rom": "Fuben (na)",
        "kana": "ふべん",
        "kanji": "不便",
        "en": "Tidak praktis / Inconvenient",
        "audio": ""
      },
      {
        "id": "v21-9",
        "rom": "Onaji",
        "kana": "おなじ",
        "kanji": "同じ",
        "en": "Sama",
        "audio": ""
      },
      {
        "id": "v21-10",
        "rom": "Shushou",
        "kana": "しゅしょう",
        "kanji": "首相",
        "en": "Perdana Menteri",
        "audio": ""
      },
      {
        "id": "v21-11",
        "rom": "Daitouryou",
        "kana": "だいとうりょう",
        "kanji": "大統領",
        "en": "Presiden",
        "audio": ""
      },
      {
        "id": "v21-12",
        "rom": "Seiji",
        "kana": "せいじ",
        "kanji": "政治",
        "en": "Politik",
        "audio": ""
      },
      {
        "id": "v21-13",
        "rom": "Nyuusu",
        "kana": "ニュース",
        "kanji": "",
        "en": "Berita",
        "audio": ""
      },
      {
        "id": "v21-14",
        "rom": "Iken",
        "kana": "いけん",
        "kanji": "意見",
        "en": "Pendapat / Opini",
        "audio": ""
      },
      {
        "id": "v21-15",
        "rom": "Hanashi",
        "kana": "はなし",
        "kanji": "話",
        "en": "Pembicaraan / Cerita",
        "audio": ""
      },
      {
        "id": "v21-16",
        "rom": "Tsutaemasu",
        "kana": "つたえます",
        "kanji": "伝えます",
        "en": "Menyampaikan / Mengabarkan",
        "audio": ""
      },
      {
        "id": "v21-17",
        "rom": "Shinjimasu",
        "kana": "しんじます",
        "kanji": "信じます",
        "en": "Mempercayai / Yakin",
        "audio": ""
      },
      {
        "id": "v21-18",
        "rom": "Hantai-shimasu",
        "kana": "はんたいします",
        "kanji": "反対します",
        "en": "Menentang / Menolak",
        "audio": ""
      },
      {
        "id": "v21-19",
        "rom": "Sansei-shimasu",
        "kana": "さんせいします",
        "kanji": "賛成します",
        "en": "Menyetujui / Mendukung",
        "audio": ""
      },
      {
        "id": "v21-20",
        "rom": "Sensou",
        "kana": "せんそう",
        "kanji": "戦争",
        "en": "Perang",
        "audio": ""
      },
      {
        "id": "v21-21",
        "rom": "Heiwa",
        "kana": "へいわ",
        "kanji": "平和",
        "en": "Perdamaian / Damai",
        "audio": ""
      },
      {
        "id": "v21-22",
        "rom": "Jiyuu",
        "kana": "じゆう",
        "kanji": "自由",
        "en": "Kebebasan / Bebas",
        "audio": ""
      },
      {
        "id": "v21-23",
        "rom": "Mondai",
        "kana": "もんだい",
        "kanji": "問題",
        "en": "Masalah / Persoalan",
        "audio": ""
      },
      {
        "id": "v21-24",
        "rom": "Keizai",
        "kana": "けいざい",
        "kanji": "経済",
        "en": "Ekonomi",
        "audio": ""
      },
      {
        "id": "v21-25",
        "rom": "Shakai",
        "kana": "しゃかい",
        "kanji": "社会",
        "en": "Masyarakat / Sosial",
        "audio": ""
      },
      {
        "id": "v21-26",
        "rom": "Hontou",
        "kana": "ほんとう",
        "kanji": "本当",
        "en": "Benar / Sungguhan",
        "audio": ""
      },
      {
        "id": "v21-27",
        "rom": "Tashika",
        "kana": "たしか",
        "kanji": "確か",
        "en": "Pasti / Kalau tidak salah",
        "audio": ""
      },
      {
        "id": "v21-28",
        "rom": "Tabun",
        "kana": "たぶん",
        "kanji": "",
        "en": "Mungkin / Barangkali",
        "audio": ""
      },
      {
        "id": "v21-29",
        "rom": "Kitto",
        "kana": "きっと",
        "kanji": "",
        "en": "Pasti (keyakinan kuat)",
        "audio": ""
      },
      {
        "id": "v21-30",
        "rom": "Deshou",
        "kana": "でしょう",
        "kanji": "",
        "en": "Mungkin / ~kan? (meminta persetujuan)",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g21-1",
        "title": "1. Plain Form + と 思います (Saya pikir...)",
        "desc": "Digunakan untuk menyampaikan pendapat pribadi atau tebakan. Bagian kalimat sebelum 'to omoimasu' WAJIB dalam bentuk Plain Form (Futsukei).",
        "points": [
          "V-Plain: Ashita ame ga furu TO OMOIMASU. (Saya pikir besok turun hujan).",
          "I-Adj: Kono hon wa omoshiroi to omoimasu. (Saya pikir buku ini menarik).",
          "Na-Adj/N + DA: Nihon wa anzen DA to omoimasu. (Saya pikir Jepang aman). ★HATI-HATI: Jangan lupakan 'da'!",
          "Kalimat Negatif: Bentuk negatifnya ditaruh di dalam klausa. Ashita ikanai to omoimasu. (Saya pikir dia tidak pergi)."
        ],
        "formula": "Futsukei(Plain) + と 思います",
        "native_note": "Menyatakan opini secara terlalu langsung dinilai kurang sopan dalam budaya Jepang yang menyukai harmoni (Wa). Native speaker biasanya melunakkannya dengan menambahkan kata 'tabun' (mungkin) di depan kalimat opini."
      },
      {
        "id": "g21-2",
        "title": "2. Plain Form + と 言いました (Telah berkata...)",
        "desc": "Digunakan untuk menyampaikan kembali (mengutip) apa yang dikatakan orang lain (Indirect Speech).",
        "points": [
          "KUTIPAN LANGSUNG (pakai tanda kutip): Tanaka-san wa 'Ashita yasumimasu' to iimashita. (Pak Tanaka berkata 'Besok libur').",
          "KUTIPAN TIDAK LANGSUNG (tanpa tanda kutip): Tanaka-san wa ashita yasumu TO IIMASHITA. (Pak Tanaka berkata bahwa besok dia libur).",
          "Syarat Kutipan Tidak Langsung: Kalimat di dalamnya harus diubah menjadi Plain Form."
        ],
        "formula": "Futsukei(Plain) + と 言いました"
      },
      {
        "id": "g21-3",
        "title": "3. ~でしょう？ (Bukan? / Kan?)",
        "desc": "Digunakan ketika pembicara meminta persetujuan dari lawan bicara. Diucapkan dengan intonasi naik di akhir.",
        "points": [
          "Nihongo no benkyou wa omoshiroi DESHOU? ↗ (Belajar bahasa Jepang menarik KAN?)",
          "Untuk Na-Adj dan Noun, JANGAN tambah 'da' sebelum deshou. Koko wa shizuka deshou? (Di sini tenang kan?)"
        ],
        "formula": "Futsukei(Plain tanpa DA) + でしょう？"
      }
    ],
    "patterns": [
      {
        "jp": "あした 雨が 降ると 思います。",
        "rom": "Ashita ame ga furu to omoimasu.",
        "en": "Saya pikir besok akan turun hujan."
      },
      {
        "jp": "日本の 交通は 便利だと 思います。",
        "rom": "Nihon no koutsuu wa benri da to omoimasu.",
        "en": "Saya pikir transportasi Jepang praktis."
      },
      {
        "jp": "首相は 来月 アメリカへ 行くと 言いました。",
        "rom": "Shushou wa raigetsu Amerika e iku to iimashita.",
        "en": "Perdana menteri berkata bahwa bulan depan beliau akan pergi ke Amerika."
      },
      {
        "jp": "東京は 人が 多いでしょう？",
        "rom": "Toukyou wa hito ga ooi deshou?",
        "en": "Tokyo orangnya banyak kan?"
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: どう思いますか (Bagaimana Pendapatmu?)",
      "dialogue": [
        {
          "speaker": "Taro",
          "jp": "新しい 空港について どう 思いますか。",
          "rom": "Atarashii kuukou ni tsuite dou omoimasu ka.",
          "en": "Bagaimana pendapat Anda tentang bandara yang baru?"
        },
        {
          "speaker": "Miller",
          "jp": "きれいで、大きいと 思います。",
          "rom": "Kirei de, ookii to omoimasu.",
          "en": "Saya pikir cantik dan besar."
        },
        {
          "speaker": "Taro",
          "jp": "交通は 便利だと 思いますか。",
          "rom": "Koutsuu wa benri da to omoimasu ka.",
          "en": "Apakah Anda pikir transportasinya praktis?"
        },
        {
          "speaker": "Miller",
          "jp": "いいえ、あまり 便利じゃ ないと 思います。",
          "rom": "Iie, amari benri ja nai to omoimasu.",
          "en": "Tidak, saya pikir tidak terlalu praktis."
        },
        {
          "speaker": "Taro",
          "jp": "そうですか。",
          "rom": "Sou desu ka.",
          "en": "Begitu ya."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] 'Saya pikir Pak Miller sibuk'.\nMiraa-san wa [ ? ] to omoimasu.",
        "options": [
          {
            "text": "isogashii",
            "correct": true
          },
          {
            "text": "isogashii da",
            "correct": false
          },
          {
            "text": "isogashikute",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] 'Saya pikir ini penting'. (Na-Adj)\nKore wa taisetsu [     ] to omoimasu.",
        "answer": "da"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] 'Bulan depan libur kan? (Libur = Yasumi/Kata benda)'.\nRaigetsu wa [ ? ] deshou?",
        "options": [
          {
            "text": "yasumi da",
            "correct": false
          },
          {
            "text": "yasumi",
            "correct": true
          },
          {
            "text": "yasumikatta",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Orang itu berkata bahwa besok dia datang'.\nAno hito wa ashita [       ] to iimashita.",
        "answer": "kuru"
      },
      {
        "type": "mcq",
        "question": "[Jebakan] 'Saya pikir besok tidak turun hujan'. (Ame ga furimasen -> furinai? furakanai?)",
        "options": [
          {
            "text": "Ame ga furanai to omoimasu",
            "correct": true
          },
          {
            "text": "Ame ga furinai to omoimasu",
            "correct": false
          },
          {
            "text": "Ame ga furimasen to omoimasu",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Opini Mengenai Tingginya Biaya Hidup",
        "situation": "Menyampaikan dan mendiskusikan pendapat tentang harga barang di Jepang",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "日本は 物価が 高いと 思います。",
            "rom": "Nihon wa bukka ga takai to omoimasu.",
            "en": "Saya pikir harga barang/biaya hidup di Jepang tinggi."
          },
          {
            "speaker": "B",
            "jp": "私も そう 思います。本当に 大変ですね。",
            "rom": "Watashi mo sou omoimasu. Hontou ni taihen desu ne.",
            "en": "Saya juga berpikir begitu. Sungguh berat ya."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menyampaikan Perkataan Rekan Kerja",
        "situation": "Melaporkan pesan yang dikatakan oleh Mr. Miller kepada anggota tim kantor",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "ミラーさんは 何と 言いましたか。",
            "rom": "Miraa-san wa nan to iimashita ka.",
            "en": "Mr. Miller berkata apa?"
          },
          {
            "speaker": "B",
            "jp": "明日 東京へ 出張すると 言っていました。",
            "rom": "Ashita Toukyou e shucchou suru to itte imashita.",
            "en": "Dia berkata bahwa besok dia akan dinas ke Tokyo."
          },
          {
            "speaker": "A",
            "jp": "そうですか。わかりました。",
            "rom": "Sou desu ka. Wakarimashita.",
            "en": "Oh begitu. Saya mengerti."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Memprediksi Pemenang Pertandingan Bola",
        "situation": "Bertanya opini teman mengenai tim mana yang akan memenangkan laga sepak bola nanti malam",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "今晩の サッカーは どちらが 勝つと 思いますか。",
            "rom": "Konban no sakkaa wa dochira ga katsu to omoimasu ka.",
            "en": "Sepak bola nanti malam menurutmu mana yang akan menang?"
          },
          {
            "speaker": "B",
            "jp": "ブラジルが 勝つと 思いますよ。強いですから。",
            "rom": "Burajiru ga katsu to omoimasu yo. Tsuyoi desu kara.",
            "en": "Saya pikir Brasil yang menang. Karena mereka kuat lho."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r21-1",
        "jp": "日本は 物価が 高いと 思います。... そうですね。わたしも そう 思います。",
        "rom": "Nihon wa bukka ga takai to omoimasu. ... Sou desu ne. Watashi mo sou omoimasu.",
        "en": "Saya pikir harga barang di Jepang mahal. ... Benar ya. Saya juga berpikir begitu."
      },
      {
        "id": "r21-2",
        "jp": "ミラーさんは どこですか。... 会議室に いると 思います。",
        "rom": "Miraa-san wa doko desu ka? ... Kaigishitsu ni iru to omoimasu.",
        "en": "Sdr. Miller ada di mana? ... Saya pikir ada di ruang rapat."
      },
      {
        "id": "r21-3",
        "jp": "寝る 前に、「おやすみなさい」と言います。... そうですね。",
        "rom": "Neru mae ni, \"Oyasuminasai\" to iimasu. ... Sou desu ne.",
        "en": "Sebelum tidur mengucapkan \"Oyasuminasai\". ... Benar ya."
      },
      {
        "id": "r21-4",
        "jp": "会議で 何か 意見を 言いましたか。... はい、日本語は 難しいと 言いました。",
        "rom": "Kaigi de nanika iken o iimashita ka? ... Hai, Nihongo wa muzukashii to iimashita.",
        "en": "Apakah Anda mengemukakan pendapat di rapat? ... Ya, saya mengatakan bahwa bahasa Jepang sulit."
      },
      {
        "id": "r21-5",
        "jp": "明日 雨が 降るでしょう。... そうですね。曇っていますから。",
        "rom": "Ashita ame ga furu deshou. ... Sou desu ne. Kumotte imasu kara.",
        "en": "Besok mungkin akan hujan ya. ... Benar ya, karena mendung."
      }
    ]
  },
  {
    "id": 22,
    "title": "Lesson 22: Klausa Modifikasi (Menjelaskan Kata Benda)",
    "desc": "Membedah Bab 22. Di sinilah grammar Jepang menjadi 'terbalik' dari bahasa Indonesia/Inggris. Anda belajar menjelaskan kata benda menggunakan KESELURUHAN KALIMAT (Relative Clauses).",
    "locked": false,
    "vocab": [
      {
        "id": "v22-1",
        "rom": "Kimasu",
        "kana": "きます",
        "kanji": "着ます",
        "en": "Memakai (pakaian atas/kemeja)"
      },
      {
        "id": "v22-2",
        "rom": "Hakimasu",
        "kana": "はきます",
        "kanji": "",
        "en": "Memakai (pakaian bawah/sepatu)"
      },
      {
        "id": "v22-3",
        "rom": "Kaburimasu",
        "kana": "かぶります",
        "kanji": "",
        "en": "Memakai (topi)"
      },
      {
        "id": "v22-4",
        "rom": "Kakemasu",
        "kana": "かけます",
        "kanji": "",
        "en": "Memakai (kacamata)"
      },
      {
        "id": "v22-5",
        "rom": "Umaremasu",
        "kana": "うまれます",
        "kanji": "生まれます",
        "en": "Lahir"
      },
      {
        "id": "v22-6",
        "rom": "Kooto",
        "kana": "コート",
        "kanji": "",
        "en": "Mantel"
      },
      {
        "id": "v22-7",
        "rom": "Suutsu",
        "kana": "スーツ",
        "kanji": "",
        "en": "Setelan jas"
      },
      {
        "id": "v22-8",
        "rom": "Seetaa",
        "kana": "セーター",
        "kanji": "",
        "en": "Baju hangat / Sweater"
      },
      {
        "id": "v22-9",
        "rom": "Boushi",
        "kana": "ぼうし",
        "kanji": "帽子",
        "en": "Topi"
      },
      {
        "id": "v22-10",
        "rom": "Megane",
        "kana": "めがね",
        "kanji": "眼鏡",
        "en": "Kacamata"
      },
      {
        "id": "v22-11",
        "rom": "Yoku",
        "kana": "よく",
        "kanji": "",
        "en": "Sering / Dengan baik"
      },
      {
        "id": "v22-12",
        "rom": "Yotei",
        "kana": "よてい",
        "kanji": "予定",
        "en": "Rencana / Jadwal"
      },
      {
        "id": "v22-13",
        "rom": "Tsukurimasu",
        "kana": "つくります",
        "kanji": "作ります",
        "en": "Membuat",
        "audio": ""
      },
      {
        "id": "v22-14",
        "rom": "Sutemasu",
        "kana": "すてます",
        "kanji": "捨てます",
        "en": "Membuang",
        "audio": ""
      },
      {
        "id": "v22-15",
        "rom": "Nuremasu",
        "kana": "ぬれます",
        "kanji": "濡れます",
        "en": "Basah / Menjadi basah",
        "audio": ""
      },
      {
        "id": "v22-16",
        "rom": "Kawakimasu",
        "kana": "かわきます",
        "kanji": "乾きます",
        "en": "Kering / Mengering",
        "audio": ""
      },
      {
        "id": "v22-17",
        "rom": "Shimemasu",
        "kana": "しめます",
        "kanji": "締めます",
        "en": "Memakai (dasi) / Mengencangkan",
        "audio": ""
      },
      {
        "id": "v22-18",
        "rom": "Kutsushita",
        "kana": "くつした",
        "kanji": "靴下",
        "en": "Kaus kaki",
        "audio": ""
      },
      {
        "id": "v22-19",
        "rom": "Kutsu",
        "kana": "くつ",
        "kanji": "靴",
        "en": "Sepatu",
        "audio": ""
      },
      {
        "id": "v22-20",
        "rom": "Zubon",
        "kana": "ズボン",
        "kanji": "",
        "en": "Celana panjang",
        "audio": ""
      },
      {
        "id": "v22-21",
        "rom": "Sukaato",
        "kana": "スカート",
        "kanji": "",
        "en": "Rok",
        "audio": ""
      },
      {
        "id": "v22-22",
        "rom": "Waishatsu",
        "kana": "ワイシャツ",
        "kanji": "",
        "en": "Kemeja putih / Dress shirt",
        "audio": ""
      },
      {
        "id": "v22-23",
        "rom": "Nekutai",
        "kana": "ネクタイ",
        "kanji": "",
        "en": "Dasi",
        "audio": ""
      },
      {
        "id": "v22-24",
        "rom": "Tokei",
        "kana": "とけい",
        "kanji": "時計",
        "en": "Jam tangan / Jam dinding",
        "audio": ""
      },
      {
        "id": "v22-25",
        "rom": "Kasa",
        "kana": "かさ",
        "kanji": "傘",
        "en": "Payung",
        "audio": ""
      },
      {
        "id": "v22-26",
        "rom": "Saifu",
        "kana": "さいふ",
        "kanji": "財布",
        "en": "Dompet",
        "audio": ""
      },
      {
        "id": "v22-27",
        "rom": "Kagi",
        "kana": "かぎ",
        "kanji": "鍵",
        "en": "Kunci",
        "audio": ""
      },
      {
        "id": "v22-28",
        "rom": "Kami",
        "kana": "かみ",
        "kanji": "髪",
        "en": "Rambut",
        "audio": ""
      },
      {
        "id": "v22-29",
        "rom": "Nagai",
        "kana": "ながい",
        "kanji": "長い",
        "en": "Panjang",
        "audio": ""
      },
      {
        "id": "v22-30",
        "rom": "Mijikai",
        "kana": "みじかい",
        "kanji": "短い",
        "en": "Pendek (ukuran, bukan tinggi badan)",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g22-1",
        "title": "1. Klausa Relatif (Kalimat yang menjadi Kata Sifat)",
        "desc": "Dalam bahasa Indonesia: 'Orang YANG membaca buku'. Dalam bahasa Jepang: '[Membaca buku] Orang'. Anak kalimat (klausa) ditaruh TEPAT DI DEPAN kata benda yang dijelaskan.",
        "points": [
          "Hon o yonde iru + Hito -> Hon o yonde iru HITO. (Orang yang sedang membaca buku).",
          "Kinoo katta + Hon -> Kinoo katta HON. (Buku yang saya beli kemarin).",
          "Klausa penjelas WAJIB dalam bentuk Plain Form (Futsukei)."
        ],
        "formula": "[Klausa Plain Form] + Noun",
        "native_note": "Dalam obrolan santai yang spontan, susunan Klausa Relatif terkadang diucapkan terbalik untuk penekanan cepat. Misal: 'Kore, kinoo katta kaban' (Ini tas yang saya beli kemarin) atau 'Kore kaban, kinoo katta yatsu' (Ini tas, yang kemarin saya beli)."
      },
      {
        "id": "g22-2",
        "title": "2. Partikel GA dalam Anak Kalimat",
        "desc": "Jika di dalam anak kalimat (klausa relatif) terdapat subjek, maka subjek tersebut TIDAK BOLEH ditandai dengan WA. Harus diganti menjadi GA.",
        "points": [
          "Watashi WA keki o tsukurimashita. (Kalimat normal: Saya membuat kue).",
          "Klausa: [Watashi GA tsukutta] keeki. (Kue yang SAYA buat).",
          "Miraa-san GA sunde iru uchi. (Rumah yang Pak Miller tinggali)."
        ],
        "formula": "Subjek dalam klausa pakai が (Bukan は)"
      },
      {
        "id": "g22-3",
        "title": "3. Kata Kerja 'Memakai' (Bervariasi)",
        "desc": "Bahasa Jepang sangat spesifik untuk aksi 'memakai', tergantung di bagian tubuh mana benda itu dikenakan.",
        "points": [
          "Kimasu: Untuk badan atas (Kemeja, T-shirt, Jas).",
          "Hakimasu: Untuk badan bawah/kaki (Celana, Rok, Sepatu, Kaus kaki).",
          "Kaburimasu: Untuk kepala (Topi).",
          "Kakemasu: Untuk mata (Kacamata)."
        ],
        "formula": "Hafalkan sesuai letak anatomis"
      }
    ],
    "patterns": [
      {
        "jp": "これは ミラーさんが 作った ケーキです。",
        "rom": "Kore wa Miraa-san ga tsukutta keeki desu.",
        "en": "Ini adalah kue yang dibuat oleh Pak Miller."
      },
      {
        "jp": "あそこで 本を 読んで いる 人は ミラーさんです。",
        "rom": "Asoko de hon o yonde iru hito wa Miraa-san desu.",
        "en": "Orang yang sedang membaca buku di sana itu adalah Pak Miller."
      },
      {
        "jp": "きのう 買った 傘を なくしました。",
        "rom": "Kinou katta kasa o nakushimashita.",
        "en": "Saya menghilangkan payung yang saya beli kemarin."
      },
      {
        "jp": "わたしが よく 行く 店は あの 店です。",
        "rom": "Watashi ga yoku iku mise wa ano mise desu.",
        "en": "Toko yang sering saya kunjungi adalah toko itu."
      },
      {
        "jp": "髪が 長い 人は カリナさんです。",
        "rom": "Kami ga nagai hito wa Karina-san desu.",
        "en": "Orang yang rambutnya panjang itu Bu Karina."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: Donna Hito Desu Ka (Orangnya Seperti Apa?)",
      "dialogue": [
        {
          "speaker": "Sato",
          "jp": "あの 人は 誰ですか。",
          "rom": "Ano hito wa dare desu ka.",
          "en": "Orang itu siapa?"
        },
        {
          "speaker": "Miller",
          "jp": "どの 人ですか。",
          "rom": "Dono hito desu ka.",
          "en": "Orang yang mana?"
        },
        {
          "speaker": "Sato",
          "jp": "あの、赤い セーターを 着て いる 人です。",
          "rom": "Ano, akai seetaa o kite iru hito desu.",
          "en": "Itu, orang yang sedang memakai sweater merah."
        },
        {
          "speaker": "Miller",
          "jp": "ああ、木村さんです。わたしが よく 話す 人です。",
          "rom": "Aa, Kimura-san desu. Watashi ga yoku hanasu hito desu.",
          "en": "Ah, itu Bu Kimura. Orang yang sering (diajak) ngobrol oleh saya."
        },
        {
          "speaker": "Sato",
          "jp": "あの 眼鏡を かけて いる 人は 誰ですか。",
          "rom": "Ano megane o kakete iru hito wa dare desu ka.",
          "en": "Orang yang memakai kacamata itu siapa?"
        },
        {
          "speaker": "Miller",
          "jp": "ああ、きのう 日本に 来た 新しい 研究者ですよ。",
          "rom": "Aa, kinou Nihon ni kita atarashii kenkyuusha desu yo.",
          "en": "Ah, itu peneliti baru yang datang ke Jepang kemarin lho."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "Terjemahkan: 'Tas yang saya beli di Tokyo'.",
        "options": [
          {
            "text": "Kaban wa Toukyou de katta",
            "correct": false
          },
          {
            "text": "Toukyou de katta kaban",
            "correct": true
          },
          {
            "text": "Katta kaban de Toukyou",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "Kata kerja untuk 'Memakai topi' adalah boushi o [     ].",
        "answer": "kaburimasu"
      },
      {
        "type": "mcq",
        "question": "[Renshuu A] 'Orang yang sedang memakai topi' dalam bahasa Jepang, urutan yang benar adalah:",
        "options": [
          {
            "text": "Boushi o kabutte iru hito",
            "correct": true
          },
          {
            "text": "Hito ga boushi o kabutte iru",
            "correct": false
          },
          {
            "text": "Kabutte iru boushi no hito",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] 'Buku yang dipinjam dari perpustakaan'.\nToshokan de [         ] hon.",
        "answer": "karita"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] Dalam anak kalimat (klausa relatif), subjek menggunakan partikel apa?",
        "options": [
          {
            "text": "が (Ga)",
            "correct": true
          },
          {
            "text": "は (Wa)",
            "correct": false
          },
          {
            "text": "を (O)",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Menanyakan Kepemilikan Kunci Mobil Baru",
        "situation": "Menanyakan kunci apa yang diletakkan di atas meja, yang ternyata kunci mobil baru",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "これは 何の 鍵ですか。",
            "rom": "Kore wa nan no kagi desu ka.",
            "en": "Ini kunci apa?"
          },
          {
            "speaker": "B",
            "jp": "私が 先週 買った 車の 鍵ですよ。",
            "rom": "Watashi ga senshuu katta kuruma no kagi desu yo.",
            "en": "Ini kunci mobil yang saya beli minggu lalu lho."
          },
          {
            "speaker": "A",
            "jp": "わあ、いいですね。見せて ください。",
            "rom": "Waa, ii desu ne. Misete kudasai.",
            "en": "Wah, keren ya. Tolong perlihatkan ke saya."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menanyakan Letak Rumah Baru Rekan Kerja",
        "situation": "Mengobrol tentang rumah baru teman yang ternyata dekat dengan stasiun",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "ミラーさんが 住んで いる 家は どこに ありますか。",
            "rom": "Miraa-san ga sunde iru uchi wa doko ni arimasu ka.",
            "en": "Rumah tempat tinggal Mr. Miller ada di mana?"
          },
          {
            "speaker": "B",
            "jp": "駅の 近くの 静かな 町に あります。",
            "rom": "Eki no chikaku no shizuka na machi ni arimasu.",
            "en": "Ada di kota yang tenang dekat stasiun."
          },
          {
            "speaker": "A",
            "jp": "そうですか。一度 行きたいですね。",
            "rom": "Sou desu ka. Ichido ikitai desu ne.",
            "en": "Oh begitu. Sekali-kali ingin berkunjung ya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menanyakan Janji Kegiatan Hari Ini",
        "situation": "Mengobrol tentang kesibukan hari ini yang terikat janji bertemu teman lama",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "今日 何か 予定が ありますか。",
            "rom": "Kyou nani ka yotei ga arimasu ka.",
            "en": "Apakah hari ini ada rencana/jadwal kegiatan?"
          },
          {
            "speaker": "B",
            "jp": "はい。高校の 友達と 晩ご飯を 食べる 約束が あります。",
            "rom": "Hai. Koukou no tomodachi to bangohan o taberu yakusoku ga arimasu.",
            "en": "Ya. Ada janji makan malam bersama teman masa SMA."
          },
          {
            "speaker": "A",
            "jp": "そうですか。楽しんで くださいね。",
            "rom": "Sou desu ka. Tanoshinde kudasai ne.",
            "en": "Oh begitu. Selamat bersenang-senang ya."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r22-1",
        "jp": "これは わたしが 作った ケーキです。... わあ、おいしそうですね。",
        "rom": "Kore wa watashi ga tsukutta keeki desu. ... Waa, oishisou desu ne.",
        "en": "Ini kue yang telah saya buat. ... Wah, kelihatan enak ya."
      },
      {
        "id": "r22-2",
        "jp": "あそこにある 本は 誰のですか。... わたしが 図書館から 借りた 本です。",
        "rom": "Asoko ni aru hon wa dare no desu ka? ... Watashi ga toshokan kara karita hon desu.",
        "en": "Buku yang ada di sana milik siapa? ... Buku yang saya pinjam dari perpustakaan."
      },
      {
        "id": "r22-3",
        "jp": "どんな 人が 好きですか。... 髪が 長くて、やさしい 人が 好きです。",
        "rom": "Donna hito ga suki desu ka? ... Kami ga nagakute, yasashii hito ga suki desu.",
        "en": "Orang yang bagaimana yang Anda sukai? ... Saya suka orang yang berambut panjang dan baik hati."
      },
      {
        "id": "r22-4",
        "jp": "昨日 買った 傘を 忘れてしまいました。... ええっ、どこで？",
        "rom": "Kinou katta kasa o wasurete shimaimashita. ... Ee, doko de?",
        "en": "Payung yang saya beli kemarin sudah ketinggalan (hilang). ... Hah, di mana?"
      },
      {
        "id": "r22-5",
        "jp": "友達と 会う 約束が あります。... そうですか。楽しんでくださいね。",
        "rom": "Tomodachi to au yakusoku ga arimasu. ... Sou desu ka. Tanoshinde kudasai ne.",
        "en": "Saya ada janji bertemu teman. ... Oh ya? Selamat bersenang-senang ya."
      }
    ]
  },
  {
    "id": 23,
    "title": "Lesson 23: Toki (Saat) & Kondisional To",
    "desc": "Membedah Bab 23. Anda belajar menyatakan 'Ketika/Saat' terjadi sesuatu (Toki), dan penggunaan 'To' untuk hubungan sebab-akibat yang absolut (Jika A ditekan, maka pasti B keluar).",
    "locked": false,
    "vocab": [
      {
        "id": "v23-1",
        "rom": "Kikimasu",
        "kana": "ききます",
        "kanji": "聞きます",
        "en": "Bertanya [Sensei NI]",
        "audio": ""
      },
      {
        "id": "v23-2",
        "rom": "Mawashimasu",
        "kana": "まわします",
        "kanji": "回します",
        "en": "Memutar (knob/tombol)",
        "audio": ""
      },
      {
        "id": "v23-3",
        "rom": "Hikimasu",
        "kana": "ひきます",
        "kanji": "引きます",
        "en": "Menarik",
        "audio": ""
      },
      {
        "id": "v23-4",
        "rom": "Kaemasu",
        "kana": "かえます",
        "kanji": "変えます",
        "en": "Mengubah",
        "audio": ""
      },
      {
        "id": "v23-5",
        "rom": "Sawarimasu",
        "kana": "さわります",
        "kanji": "触ります",
        "en": "Menyentuh [+NI]",
        "audio": ""
      },
      {
        "id": "v23-6",
        "rom": "Demasu",
        "kana": "でます",
        "kanji": "出ます",
        "en": "Keluar [Otsuri GA - kembaliannya keluar]",
        "audio": ""
      },
      {
        "id": "v23-7",
        "rom": "Ugokimasu",
        "kana": "うごきます",
        "kanji": "動きます",
        "en": "Bergerak / Berjalan (mesin)",
        "audio": ""
      },
      {
        "id": "v23-8",
        "rom": "Arukimasu",
        "kana": "あるきます",
        "kanji": "歩きます",
        "en": "Berjalan kaki [Michi O]",
        "audio": ""
      },
      {
        "id": "v23-9",
        "rom": "Watarimasu",
        "kana": "わたります",
        "kanji": "渡ります",
        "en": "Menyeberang [Hashi O]",
        "audio": ""
      },
      {
        "id": "v23-10",
        "rom": "Kiwotsukemasu",
        "kana": "きをつけます",
        "kanji": "気をつけます",
        "en": "Berhati-hati",
        "audio": ""
      },
      {
        "id": "v23-11",
        "rom": "Hikkoshi-shimasu",
        "kana": "ひっこしします",
        "kanji": "引っ越しします",
        "en": "Pindah rumah",
        "audio": ""
      },
      {
        "id": "v23-12",
        "rom": "Oto",
        "kana": "おと",
        "kanji": "音",
        "en": "Suara (benda mati)",
        "audio": ""
      },
      {
        "id": "v23-13",
        "rom": "Kikai",
        "kana": "きかい",
        "kanji": "機械",
        "en": "Mesin",
        "audio": ""
      },
      {
        "id": "v23-14",
        "rom": "Koshou",
        "kana": "こしょう",
        "kanji": "故障",
        "en": "Kerusakan (mesin)",
        "audio": ""
      },
      {
        "id": "v23-15",
        "rom": "Michi",
        "kana": "みち",
        "kanji": "道",
        "en": "Jalan",
        "audio": ""
      },
      {
        "id": "v23-16",
        "rom": "Kousaten",
        "kana": "こうさてん",
        "kanji": "交差点",
        "en": "Perempatan",
        "audio": ""
      },
      {
        "id": "v23-17",
        "rom": "Shingou",
        "kana": "しんごう",
        "kanji": "信号",
        "en": "Lampu lalu lintas",
        "audio": ""
      },
      {
        "id": "v23-18",
        "rom": "Kado",
        "kana": "かど",
        "kanji": "角",
        "en": "Sudut jalan",
        "audio": ""
      },
      {
        "id": "v23-19",
        "rom": "Tomemasu",
        "kana": "とめます",
        "kanji": "止めます",
        "en": "Menghentikan / Mematikan (mesin)",
        "audio": ""
      },
      {
        "id": "v23-20",
        "rom": "Ochimasu",
        "kana": "おちます",
        "kanji": "落ちます",
        "en": "Jatuh / Terjatuh",
        "audio": ""
      },
      {
        "id": "v23-21",
        "rom": "Torimasu",
        "kana": "とります",
        "kanji": "取ります",
        "en": "Mengambil",
        "audio": ""
      },
      {
        "id": "v23-22",
        "rom": "Tsukemasu",
        "kana": "つけます",
        "kanji": "",
        "en": "Menyalakan (lampu/AC)",
        "audio": ""
      },
      {
        "id": "v23-23",
        "rom": "Keshimasu",
        "kana": "けします",
        "kanji": "消します",
        "en": "Mematikan (lampu) / Menghapus",
        "audio": ""
      },
      {
        "id": "v23-24",
        "rom": "Iremasu",
        "kana": "いれます",
        "kanji": "入れます",
        "en": "Memasukkan",
        "audio": ""
      },
      {
        "id": "v23-25",
        "rom": "Massugu",
        "kana": "まっすぐ",
        "kanji": "",
        "en": "Lurus (arah)",
        "audio": ""
      },
      {
        "id": "v23-26",
        "rom": "Migi",
        "kana": "みぎ",
        "kanji": "右",
        "en": "Kanan",
        "audio": ""
      },
      {
        "id": "v23-27",
        "rom": "Hidari",
        "kana": "ひだり",
        "kanji": "左",
        "en": "Kiri",
        "audio": ""
      },
      {
        "id": "v23-28",
        "rom": "Eki",
        "kana": "えき",
        "kanji": "駅",
        "en": "Stasiun (kereta)",
        "audio": ""
      },
      {
        "id": "v23-29",
        "rom": "Kippu",
        "kana": "きっぷ",
        "kanji": "切符",
        "en": "Tiket / Karcis",
        "audio": ""
      },
      {
        "id": "v23-30",
        "rom": "Densha",
        "kana": "でんしゃ",
        "kanji": "電車",
        "en": "Kereta api listrik",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g23-1",
        "title": "1. ~時 (Toki = Saat / Ketika)",
        "desc": "Toki menyambungkan dua kalimat. Aturan sambungannya persis seperti menyambungkan kata benda di Bab 22.",
        "points": [
          "V-Plain + Toki. Toshokan de hon o kariru TOKI, kaado ga irimasu. (SAAT meminjam buku, butuh kartu).",
          "I-Adj + Toki. Nemui TOKI, koohii o nomimasu. (SAAT ngantuk, minum kopi).",
          "Na-Adj + NA + Toki. Hima NA TOKI, terebi o mimasu. (SAAT senggang, nonton TV).",
          "Noun + NO + Toki. Gakusei NO TOKI, yoku asobimashita. (SAAT jadi mahasiswa, sering main)."
        ],
        "formula": "Futsukei / Nの / Naな + 時",
        "native_note": "Pola kondisional fakta alam '~to' memiliki aturan mutlak: kalimat kedua TIDAK boleh berisi keinginan, perintah, atau ajakan. Jika ingin menyatakan ajakan kondisional, gunakan pola '~tara' yang akan dipelajari di Bab 25."
      },
      {
        "id": "g23-2",
        "title": "2. V-る / V-た 時 (Perbedaan Nuansa Waktu)",
        "desc": "Kapan pakai Dictionary form (V-ru) dan kapan pakai Ta-form (V-ta) sebelum Toki? Tergantung apakah aksinya SUDAH selesai atau BELUM saat kejadian kedua terjadi.",
        "points": [
          "Toukyou e IKU toki, kaban o kaimashita. (Saat MAU pergi ke Tokyo, saya beli tas). Artinya beli tasnya belum sampai Tokyo (misal beli di stasiun awal).",
          "Toukyou e ITTA toki, kaban o kaimashita. (Saat SUDAH pergi ke Tokyo, saya beli tas). Artinya beli tasnya di Tokyo."
        ],
        "formula": "V-る (Belum selesai) vs V-た (Sudah selesai)"
      },
      {
        "id": "g23-3",
        "title": "3. V-る と、~ (Kondisional Absolut: Kalau... pasti...)",
        "desc": "Digunakan untuk hal yang bersifat ABSOLUT: fakta alam, cara pakai mesin, atau panduan arah jalan. JIKA A terjadi, maka B PASTI otomatis terjadi.",
        "points": [
          "Kono botan o osu TO, mizu ga demasu. (KALAU tombol ini ditekan, air [pasti] keluar). Konteks: Mesin.",
          "Haru ni naru TO, sakura ga sakimasu. (KALAU musim semi tiba, sakura [pasti] mekar). Konteks: Fakta Alam.",
          "Migi e magaru TO, ginkou ga arimasu. (KALAU belok kanan, [pasti] ada bank). Konteks: Panduan Arah.",
          "★AWAS: Bagian belakang kalimat JANGAN diisi dengan keinginan (tai), ajakan (mashou), atau perintah (kudasai)."
        ],
        "formula": "V-る (Dict) + と"
      }
    ],
    "patterns": [
      {
        "jp": "図書館で 本を 借りる 時、カードが 要ります。",
        "rom": "Toshokan de hon o kariru toki, kaado ga irimasu.",
        "en": "Saat meminjam buku di perpustakaan, kartu (member) dibutuhkan."
      },
      {
        "jp": "道が わからない 時、人に 聞きます。",
        "rom": "Michi ga wakaranai toki, hito ni kikimasu.",
        "en": "Saat tidak tahu jalan, (saya) bertanya pada orang."
      },
      {
        "jp": "この ボタンを 押すと、お釣りが 出ます。",
        "rom": "Kono botan o osu to, otsuri ga demasu.",
        "en": "Kalau tombol ini ditekan, uang kembalian akan keluar."
      },
      {
        "jp": "右へ 曲がると、郵便局が あります。",
        "rom": "Migi e magaru to, yuubinkyoku ga arimasu.",
        "en": "Kalau belok kanan, akan ada kantor pos."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: どう行きますか (Perginya Bagaimana?)",
      "dialogue": [
        {
          "speaker": "Miller",
          "jp": "すみません。市役所まで どう 行きますか。",
          "rom": "Sumimasen. Shiyakusho made dou ikimasu ka.",
          "en": "Permisi. Ke balai kota perginya bagaimana?"
        },
        {
          "speaker": "Warga",
          "jp": "市役所ですか。この 道を まっすぐ 行くと、角に 銀行が あります。",
          "rom": "Shiyakusho desu ka. Kono michi o massugu iku to, kado ni ginkou ga arimasu.",
          "en": "Balai kota ya. Kalau pergi lurus di jalan ini, (nanti) di sudut ada bank."
        },
        {
          "speaker": "Miller",
          "jp": "はい。",
          "rom": "Hai.",
          "en": "Ya."
        },
        {
          "speaker": "Warga",
          "jp": "そこを 右へ 曲がって ください。５０メートルぐらい 行くと、左に あります。",
          "rom": "Soko o migi e magatte kudasai. Gojuu meetoru gurai iku to, hidari ni arimasu.",
          "en": "Tolong belok kanan di sana. Kalau maju sekitar 50 meter, ada di sebelah kiri."
        },
        {
          "speaker": "Miller",
          "jp": "わかりました。どうも。",
          "rom": "Wakarimashita. Doumo.",
          "en": "Saya mengerti. Terima kasih."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Terjemahkan: 'Saat anak-anak (kodomo/Kata Benda)'.",
        "options": [
          {
            "text": "Kodomo no toki",
            "correct": true
          },
          {
            "text": "Kodomo toki",
            "correct": false
          },
          {
            "text": "Kodomo na toki",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] 'Kalau musim semi tiba, sakura mekar'.\nHaru ni naru [     ], sakura ga sakimasu.",
        "answer": "to"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] 'Kalau tombol ini ditekan...'. Pola kalimat di belakangnya yang BOLEH:",
        "options": [
          {
            "text": "Kippu ga demasu (Tiket keluar - Fakta Mesin)",
            "correct": true
          },
          {
            "text": "Kippu o katte kudasai (Tolong beli tiket - Perintah)",
            "correct": false
          },
          {
            "text": "Kippu o kaitai desu (Ingin beli tiket - Keinginan)",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Saat TIDAK TAHU (wakaranai) jalan'.\nMichi ga wakara-[         ] toki, hito ni kikimasu.",
        "answer": "nai"
      },
      {
        "type": "mcq",
        "question": "[Jebakan Nuansa] 'Saat ke Jepang, saya beli tas (di stasiun awal, tasnya belum sampai Jepang)'.",
        "options": [
          {
            "text": "Nihon e IKU toki, kaban o kaimashita.",
            "correct": true
          },
          {
            "text": "Nihon e ITTA toki, kaban o kaimashita.",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Mengatasi Pusing Saat Belajar",
        "situation": "Mengobrol tentang solusi yang biasa dilakukan teman ketika kepalanya terasa pusing",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "頭が 痛い 時、どう しますか。",
            "rom": "Atama ga itai toki, dou shimasu ka.",
            "en": "Saat kepala terasa pusing, apa yang dilakukan?"
          },
          {
            "speaker": "B",
            "jp": "薬を 飲んで、早く 寝る ように して います。",
            "rom": "Kusuri o nonde, hayaku neru youni shite imasu.",
            "en": "Minum obat, dan diusahakan tidur lebih cepat."
          },
          {
            "speaker": "A",
            "jp": "そうですか。お大事に。",
            "rom": "Sou desu ka. O-daiji ni.",
            "en": "Oh begitu. Semoga lekas sembuh."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menjelaskan Cara Kerja Mesin Tiket",
        "situation": "Menjelaskan cara menggunakan tombol mesin tiket otomatis di stasiun",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "すみません、切符の 買い方を 教えて ください。",
            "rom": "Sumimasen, kippu no kaika-ta o oshiete kudasai.",
            "en": "Permisi, tolong ajarkan cara membeli tiket."
          },
          {
            "speaker": "B",
            "jp": "この ボタンを 押すと、切符が 出ますよ。",
            "rom": "Kono botan o osu to, kippu ga demasu yo.",
            "en": "Jika menekan tombol ini, tiketnya akan keluar lho."
          },
          {
            "speaker": "A",
            "jp": "ああ、簡単ですね。ありがとうございました。",
            "rom": "Aa, kantan desu ne. Arigatou gozaimashita.",
            "en": "Ah, mudah sekali ya. Terima kasih banyak."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Petunjuk Arah Menuju Taman Kota",
        "situation": "Memberikan petunjuk jalan ke taman kota yang posisinya lurus setelah jembatan",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "すみません、中央公園は どちらですか。",
            "rom": "Sumimasen, Chuuou Kouen wa dochira desu ka.",
            "en": "Permisi, Taman Pusat ada di sebelah mana?"
          },
          {
            "speaker": "B",
            "jp": "この 道を まっすぐ 行くと、右側に ありますよ。",
            "rom": "Kono michi o massugu iku to, migigawa ni arimasu yo.",
            "en": "Jika pergi lurus mengikuti jalan ini, letaknya ada di sebelah kanan lho."
          },
          {
            "speaker": "A",
            "jp": "わかりました。ありがとうございます。",
            "rom": "Wakarimashita. Arigatou gozaimasu.",
            "en": "Saya mengerti. Terima kasih banyak."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r23-1",
        "jp": "図書館で 本を 借りる とき、カードが 要ります。... そうですか。分かりました。",
        "rom": "Toshokan de hon o kariru toki, kaado ga irimasu. ... Sou desu ka. Wakarimashita.",
        "en": "Saat meminjam buku di perpustakaan, memerlukan kartu. ... Oh ya? Saya paham."
      },
      {
        "id": "r23-2",
        "jp": "この ボタンを 押すと、お釣りが出ます。... そうですか。便利ですね。",
        "rom": "Kono botan o osu to, otsuri ga demasu. ... Sou desu ka. Benri desu ne.",
        "en": "Kalau menekan tombol ini, uang kembalian akan keluar. ... Oh ya? Praktis sekali ya."
      },
      {
        "id": "r23-3",
        "jp": "暇な とき、何を聞きますか。... 音楽を 聞きます。",
        "rom": "Hima na toki, nani o kikimasu ka? ... Ongaku o kikimasu.",
        "en": "Saat senggang, Anda mendengarkan apa? ... Mendengarkan musik."
      },
      {
        "id": "r23-4",
        "jp": "道を 渡る とき、車に 気を つけてください。... はい、気を つけます。",
        "rom": "Michi o wataru toki, kuruma ni ki o tsukete kudasai. ... Hai, ki o tsukemasu.",
        "en": "Saat menyeberang jalan, tolong berhati-hati pada mobil. ... Ya, saya akan berhati-hati."
      },
      {
        "id": "r23-5",
        "jp": "これを 回すと、音が 大きく なります。... そうですか。やってみます。",
        "rom": "Kore o mawasu to, oto ga ookiku narimasu. ... Sou desu ka. Yatte mimasu.",
        "en": "Kalau memutar ini, suaranya akan membesar. ... Oh ya? Saya coba ya."
      }
    ]
  },
  {
    "id": 24,
    "title": "Lesson 24: Memberi & Menerima (Kuremasu)",
    "desc": "Membedah Bab 24. Fokus pada sistem transaksi kebaikan hati Jepang: Agemasu (Memberi keluar), Moraimasu (Menerima), dan Kuremasu (Orang lain memberi ke SAYA).",
    "locked": false,
    "vocab": [
      {
        "id": "v24-1",
        "rom": "Kuremasu",
        "kana": "くれます",
        "kanji": "",
        "en": "Memberi (ke saya / keluarga saya)",
        "audio": ""
      },
      {
        "id": "v24-2",
        "rom": "Naoshimasu",
        "kana": "なおします",
        "kanji": "直します",
        "en": "Memperbaiki",
        "audio": ""
      },
      {
        "id": "v24-3",
        "rom": "Tsurete ikimasu",
        "kana": "つれて いきます",
        "kanji": "連れて 行きます",
        "en": "Membawa pergi (orang)",
        "audio": ""
      },
      {
        "id": "v24-4",
        "rom": "Tsurete kimasu",
        "kana": "つれて きます",
        "kanji": "連れて 来ます",
        "en": "Membawa datang (orang)",
        "audio": ""
      },
      {
        "id": "v24-5",
        "rom": "Okurimasu",
        "kana": "おくります",
        "kanji": "送ります",
        "en": "Mengantar [Hito O]",
        "audio": ""
      },
      {
        "id": "v24-6",
        "rom": "Shoukai-shimasu",
        "kana": "しょうかいします",
        "kanji": "紹介します",
        "en": "Memperkenalkan",
        "audio": ""
      },
      {
        "id": "v24-7",
        "rom": "Annai-shimasu",
        "kana": "あんないします",
        "kanji": "案内します",
        "en": "Memandu / Memberi petunjuk",
        "audio": ""
      },
      {
        "id": "v24-8",
        "rom": "Setsumei-shimasu",
        "kana": "せつめいします",
        "kanji": "説明します",
        "en": "Menjelaskan",
        "audio": ""
      },
      {
        "id": "v24-9",
        "rom": "Ojiisan / Ojisan",
        "kana": "おじいさん / おじさん",
        "kanji": "お祖父さん / 叔父さん",
        "en": "Kakek (orang lain) / Paman",
        "audio": ""
      },
      {
        "id": "v24-10",
        "rom": "Obaasan / Obasan",
        "kana": "おばあさん / おばさん",
        "kanji": "お祖母さん / 叔母さん",
        "en": "Nenek (orang lain) / Bibi",
        "audio": ""
      },
      {
        "id": "v24-11",
        "rom": "Junbi",
        "kana": "じゅんび",
        "kanji": "準備",
        "en": "Persiapan",
        "audio": ""
      },
      {
        "id": "v24-12",
        "rom": "Hikkoshi",
        "kana": "ひっこし",
        "kanji": "引っ越し",
        "en": "Pindah rumah (Noun)",
        "audio": ""
      },
      {
        "id": "v24-13",
        "rom": "Okashi",
        "kana": "おかし",
        "kanji": "お菓子",
        "en": "Camilan / Kue manisan",
        "audio": ""
      },
      {
        "id": "v24-14",
        "rom": "Houmu-sutei",
        "kana": "ホームステイ",
        "kanji": "",
        "en": "Homestay (Tinggal dengan keluarga lokal)",
        "audio": ""
      },
      {
        "id": "v24-15",
        "rom": "Zenbu",
        "kana": "ぜんぶ",
        "kanji": "全部",
        "en": "Semuanya",
        "audio": ""
      },
      {
        "id": "v24-16",
        "rom": "Jibun de",
        "kana": "じぶんで",
        "kanji": "自分で",
        "en": "Oleh diri sendiri",
        "audio": ""
      },
      {
        "id": "v24-17",
        "rom": "Agemasu",
        "kana": "あげます",
        "kanji": "",
        "en": "Memberi (kepada orang lain)",
        "audio": ""
      },
      {
        "id": "v24-18",
        "rom": "Moraimasu",
        "kana": "もらいます",
        "kanji": "",
        "en": "Menerima / Dapat (dari seseorang)",
        "audio": ""
      },
      {
        "id": "v24-19",
        "rom": "Kashimasu",
        "kana": "かします",
        "kanji": "貸します",
        "en": "Meminjamkan",
        "audio": ""
      },
      {
        "id": "v24-20",
        "rom": "Karimasu",
        "kana": "かります",
        "kanji": "借ります",
        "en": "Meminjam",
        "audio": ""
      },
      {
        "id": "v24-21",
        "rom": "Tetsudaimasu",
        "kana": "てつだいます",
        "kanji": "手伝います",
        "en": "Membantu",
        "audio": ""
      },
      {
        "id": "v24-22",
        "rom": "Todokemasu",
        "kana": "とどけます",
        "kanji": "届けます",
        "en": "Mengantarkan / Menyerahkan",
        "audio": ""
      },
      {
        "id": "v24-23",
        "rom": "Purezento",
        "kana": "プレゼント",
        "kanji": "",
        "en": "Hadiah / Kado",
        "audio": ""
      },
      {
        "id": "v24-24",
        "rom": "Kurisumasu",
        "kana": "クリスマス",
        "kanji": "",
        "en": "Natal / Hari Natal",
        "audio": ""
      },
      {
        "id": "v24-25",
        "rom": "Tanjoubi",
        "kana": "たんじょうび",
        "kanji": "誕生日",
        "en": "Hari ulang tahun",
        "audio": ""
      },
      {
        "id": "v24-26",
        "rom": "Orei",
        "kana": "おれい",
        "kanji": "お礼",
        "en": "Ucapan terima kasih / Balasan budi",
        "audio": ""
      },
      {
        "id": "v24-27",
        "rom": "Okaasan",
        "kana": "おかあさん",
        "kanji": "お母さん",
        "en": "Ibu (orang lain) / Mama",
        "audio": ""
      },
      {
        "id": "v24-28",
        "rom": "Otousan",
        "kana": "おとうさん",
        "kanji": "お父さん",
        "en": "Ayah (orang lain) / Papa",
        "audio": ""
      },
      {
        "id": "v24-29",
        "rom": "Musume",
        "kana": "むすめ",
        "kanji": "娘",
        "en": "Anak perempuan (sendiri)",
        "audio": ""
      },
      {
        "id": "v24-30",
        "rom": "Musuko",
        "kana": "むすこ",
        "kanji": "息子",
        "en": "Anak laki-laki (sendiri)",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g24-1",
        "title": "1. くれます (Seseorang memberi ke SAYA)",
        "desc": "Di Bab 7 Anda belajar 'Agemasu' (Saya memberi ke orang) dan 'Moraimasu' (Saya menerima dari orang). 'Kuremasu' KHUSUS dipakai jika Subjeknya orang lain, dan Objeknya (yang menerima) adalah SAYA atau kelompok saya.",
        "points": [
          "Sato-san wa WATASHI NI tokei o kuremashita. (Pak Sato MENGHADIAHKAN jam tangan ke saya).",
          "TIDAK BOLEH pakai agemasu jika penerimanya SAYA: Sato-san wa watashi ni tokei o agemashita (X SALAH!).",
          "Partikel Watashi NI sering kali dihilangkan karena sudah jelas (pasti) kuremasu mengarah ke 'saya'."
        ],
        "formula": "Orang は (わたし に) Benda を くれます",
        "native_note": "Sangat DILARANG menggunakan pola '~te ageru' (memberi bantuan) kepada atasan atau orang yang lebih tua karena pola ini menyiratkan sikap 'sok berjasa' dan merendahkan lawan bicara. Gunakan bentuk sopan yang formal."
      },
      {
        "id": "g24-2",
        "title": "2. V-て あげます (Melakukan jasa untuk orang lain)",
        "desc": "Sama seperti barang, tindakan juga bisa 'diberikan' sebagai jasa.",
        "points": [
          "Watashi wa Yamada-san NI kasa o kashiTE AGEMASHITA. (Saya meminjamkan payung UNTUK Pak Yamada).",
          "Watashi wa Kimura-san NI tetsudatTE AGEMASU. (Saya membantu Bu Kimura).",
          "★Catatan Budaya: Pola ini bisa terdengar sombong ('Saya berjasa lho buat Anda') jika dipakai ke orang yang tidak dekat atau atasan. Lebih aman menawarkan dengan '~mashou ka?'."
        ],
        "formula": "V-て あげます"
      },
      {
        "id": "g24-3",
        "title": "3. V-て もらいます (Menerima jasa dari orang lain)",
        "desc": "Sangat sering digunakan. Menunjukkan rasa syukur karena Anda 'menerima' kebaikan/jasa dari orang lain.",
        "points": [
          "Watashi wa Suzuki-san NI nihongo o oshiete moraimashita. (Saya DIBANTU diajari bahasa Jepang oleh Pak Suzuki / Saya menerima jasa pengajaran dari Pak Suzuki).",
          "Subjek kalimatnya adalah SAYA (Watashi wa).",
          "Pelaku jasanya ditandai dengan NI (bisa juga KARA)."
        ],
        "formula": "V-て もらいます (Subjek: Saya)"
      },
      {
        "id": "g24-4",
        "title": "4. V-て くれます (Orang lain melakukan jasa untuk SAYA)",
        "desc": "Fokus kalimat ada pada kebaikan hati sang pelaku (Subjek).",
        "points": [
          "Suzuki-san WA (watashi ni) nihongo o oshiete kuremashita. (Pak Suzuki MENGAJARKAN bahasa Jepang untuk saya).",
          "Perbedaan dengan Moraimasu: Moraimasu subjek utamanya SAYA (Watashi wa... moraimasu). Kuremasu subjek utamanya ORANG LAIN (Dia wa... kuremasu)."
        ],
        "formula": "Orang は V-て くれます (Subjek: Orang lain)"
      }
    ],
    "patterns": [
      {
        "jp": "佐藤さんは わたしに クリスマスカードを くれました。",
        "rom": "Satou-san wa watashi ni kurisumasu-kaado o kuremashita.",
        "en": "Pak Sato memberikan saya kartu Natal."
      },
      {
        "jp": "わたしは 木村さんに 本を 貸して あげました。",
        "rom": "Watashi wa Kimura-san ni hon o kashite agemashita.",
        "en": "Saya meminjamkan buku untuk Bu Kimura."
      },
      {
        "jp": "わたしは 山田さんに 病院へ 連れて 行って もらいました。",
        "rom": "Watashi wa Yamada-san ni byouin e tsurete itte moraimashita.",
        "en": "Saya diantar (dibawa) ke rumah sakit oleh Pak Yamada."
      },
      {
        "jp": "山田さんは わたしに 病院へ 連れて 行って くれました。",
        "rom": "Yamada-san wa watashi ni byouin e tsurete itte kuremashita.",
        "en": "Pak Yamada mengantarkan (membawa) saya ke rumah sakit."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: 手伝って くれますか (Bisa bantu saya?)",
      "dialogue": [
        {
          "speaker": "Miller",
          "jp": "太郎君、お弁当は 誰が 作りましたか。",
          "rom": "Tarou-kun, obentou wa dare ga tsukurimashita ka.",
          "en": "Taro, bekalnya siapa yang buat?"
        },
        {
          "speaker": "Taro",
          "jp": "母が 作って くれました。",
          "rom": "Haha ga tsukutte kuremashita.",
          "en": "Ibu yang buatkan untuk saya."
        },
        {
          "speaker": "Miller",
          "jp": "おいしいですね。…あ、太郎君、自転車が 壊れましたか。",
          "rom": "Oishii desu ne. ...A, Tarou-kun, jitensha ga kowaremashita ka.",
          "en": "Enak ya. ...Ah, Taro, sepedanya rusak kah?"
        },
        {
          "speaker": "Taro",
          "jp": "ええ。あとで 父に 修理して もらいます。",
          "rom": "Ee. Ato de chichi ni shuuri-shite moraimasu.",
          "en": "Iya. (Nanti) Saya minta tolong ayah untuk memperbaikinya."
        },
        {
          "speaker": "Miller",
          "jp": "そうですか。お父さんは やさしいですね。",
          "rom": "Sou desu ka. Otousan wa yasashii desu ne.",
          "en": "Oh begitu. Ayahnya baik ya."
        },
        {
          "speaker": "Taro",
          "jp": "ええ。母も よく お弁当を 作って くれます。",
          "rom": "Ee. Haha mo yoku obentou o tsukutte kuremasu.",
          "en": "Iya. Ibu juga sering buatkan bekal untuk saya."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Jika Subjeknya adalah 'Pak Tanaka' dan dia membelikan buku UNTUK SAYA, pola yang tepat adalah:",
        "options": [
          {
            "text": "Tanaka-san wa hon o katte kuremashita.",
            "correct": true
          },
          {
            "text": "Tanaka-san wa hon o katte agemashita.",
            "correct": false
          },
          {
            "text": "Tanaka-san wa hon o katte moraimashita.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] 'Saya meminjamkan payung (untuknya)'.\nWatashi wa kasa o kashite [           ].",
        "answer": "agemashita"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] 'Saya diantar ke bandara oleh Pak Miller'. (Saya sebagai Subjek)",
        "options": [
          {
            "text": "Watashi wa Miraa-san ni okutte moraimashita.",
            "correct": true
          },
          {
            "text": "Watashi wa Miraa-san ni okutte kuremashita.",
            "correct": false
          },
          {
            "text": "Miraa-san wa watashi ni okutte moraimashita.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Buku ini, Bu Karina yang membelikannya (untuk saya)'. (Bu Karina sebagai Subjek).\nKono hon wa Karina-san ga katte [           ].",
        "answer": "kuremashita"
      },
      {
        "type": "mcq",
        "question": "[Budaya] Kenapa orang Jepang lebih sering pakai '~te moraimashita' daripada '~te kuremashita' ketika dibantu orang?",
        "options": [
          {
            "text": "Karena itu menempatkan diri sendiri di posisi lebih rendah/berterima kasih.",
            "correct": true
          },
          {
            "text": "Karena kuremasu tidak sopan.",
            "correct": false
          },
          {
            "text": "Hanya sekadar beda tata bahasa.",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Meminta Tolong Mengajarkan Software",
        "situation": "Meminta tolong diajarkan cara mengoperasikan software baru oleh rekan kerja yang mahir",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "パソコンの 使い方を 教えて くれませんか。",
            "rom": "Pasokon no tsukaikata o oshiete kuremasen ka.",
            "en": "Maukah Anda mengajarkan saya cara menggunakan komputer/software?"
          },
          {
            "speaker": "B",
            "jp": "いいですよ。暇な 時、教えて あげます。",
            "rom": "Ii desu yo. Hima na toki, oshiete agemasu.",
            "en": "Boleh saja. Saat waktu senggang, saya akan ajarkan."
          },
          {
            "speaker": "A",
            "jp": "ありがとうございます。嬉しいです。",
            "rom": "Arigatou gozaimasu. Ureshii desu.",
            "en": "Terima kasih banyak. Senang sekali."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Menawarkan Pinjaman Payung Saat Hujan",
        "situation": "Menawarkan payung miliknya untuk dipinjamkan kepada teman yang kehujanan",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "雨が 降って いますね。傘を 貸しましょうか。",
            "rom": "Ame ga futte imasu ne. Kasa o kashimashou ka.",
            "en": "Hujan turun ya. Boleh saya pinjamkan payung?"
          },
          {
            "speaker": "B",
            "jp": "すみません。貸して くれて ありがとうございます。",
            "rom": "Sumimasen. Kashite kurete arigatou gozaimasu.",
            "en": "Maaf merepotkan. Terima kasih banyak sudah meminjamkannya."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menawarkan Tumpangan Mobil ke Stasiun",
        "situation": "Menawarkan tumpangan mobil kepada teman yang terburu-buru pergi ke stasiun",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "駅まで 送りましょうか。車が ありますから。",
            "rom": "Eki made okurimashou ka. Kuruma ga arimasu kara.",
            "en": "Mau saya antarkan ke stasiun? Soalnya saya ada mobil."
          },
          {
            "speaker": "B",
            "jp": "すみません、お願いします。助かります。",
            "rom": "Sumimasen, onegai shimasu. Tasukarimasu.",
            "en": "Maaf merepotkan, tolong ya. Sangat membantu."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r24-1",
        "jp": "佐藤さんは わたしに チョコレートを くれました。... わあ、いいですね。",
        "rom": "Satou-san wa watashi ni chokoreeto o kuremashita. ... Waa, ii desu ne.",
        "en": "Ibu Sato memberi cokelat kepada saya. ... Wah, enaknya."
      },
      {
        "id": "r24-2",
        "jp": "わたしは 木村さんに 本を 貸して あげました。... そうですか。親切ですね。",
        "rom": "Watashi wa Kimura-san ni hon o kashite agemashita. ... Sou desu ka. Shinsetsu desu ne.",
        "en": "Saya meminjamkan buku kepada Ibu Kimura. ... Oh ya? Baik sekali ya."
      },
      {
        "id": "r24-3",
        "jp": "お母さんが セーターを 送って くれました。... 暖かいですね。",
        "rom": "Okaasan ga seetaa o okutte kuremashita. ... Atatakai desu ne.",
        "en": "Ibu mengirimi saya sweater. ... Hangat ya."
      },
      {
        "id": "r24-4",
        "jp": "道が 分かりませんから、地図を 書いて あげましょうか。... はい、お願いします。",
        "rom": "Michi ga wakarimasen kara, chizu o kaite agemashou ka? ... Hai, onegaishimasu.",
        "en": "Karena tidak tahu jalannya, maukah saya gambarkan peta? ... Ya, tolong ya."
      },
      {
        "id": "r24-5",
        "jp": "だれが 日本語を 教えて くれましたか。... 田中先生が 教えて くれました。",
        "rom": "Dare ga Nihongo o oshiete kuremashita ka? ... Tanaka-sensei ga oshiete kuremashita.",
        "en": "Siapa yang telah mengajarkan bahasa Jepang kepada Anda? ... Ibu Guru Tanaka yang mengajarkannya."
      }
    ]
  },
  {
    "id": 25,
    "title": "Lesson 25: Kondisional (Tara) & Konsesi (Temo)",
    "desc": "Membedah Bab 25 (BAB TERAKHIR SHOKYU I!). Anda akan belajar menyatakan 'Jika/Kalau' (Tara) untuk pengandaian, dan 'Meskipun/Walaupun' (Temo). Kedua pola ini sangat luas pemakaiannya.",
    "locked": false,
    "vocab": [
      {
        "id": "v25-1",
        "rom": "Kangaemasu",
        "kana": "かんがえます",
        "kanji": "考えます",
        "en": "Memikirkan / Mempertimbangkan",
        "audio": ""
      },
      {
        "id": "v25-2",
        "rom": "Tsukimasu",
        "kana": "つきます",
        "kanji": "着きます",
        "en": "Tiba / Sampai [Eki NI]",
        "audio": ""
      },
      {
        "id": "v25-3",
        "rom": "Ryuugaku-shimasu",
        "kana": "りゅうがくします",
        "kanji": "留学します",
        "en": "Sekolah ke luar negeri",
        "audio": ""
      },
      {
        "id": "v25-4",
        "rom": "Torimasu",
        "kana": "とります",
        "kanji": "取ります",
        "en": "Bertambah [Toshi o ~ (Menua)]",
        "audio": ""
      },
      {
        "id": "v25-5",
        "rom": "Inaka",
        "kana": "いなか",
        "kanji": "田舎",
        "en": "Pedesaan / Kampung halaman",
        "audio": ""
      },
      {
        "id": "v25-6",
        "rom": "Taishikan",
        "kana": "たいしかん",
        "kanji": "大使館",
        "en": "Kedutaan besar",
        "audio": ""
      },
      {
        "id": "v25-7",
        "rom": "Guruupu",
        "kana": "グループ",
        "kanji": "",
        "en": "Grup / Kelompok",
        "audio": ""
      },
      {
        "id": "v25-8",
        "rom": "Chansu",
        "kana": "チャンス",
        "kanji": "",
        "en": "Peluang / Kesempatan",
        "audio": ""
      },
      {
        "id": "v25-9",
        "rom": "Oku",
        "kana": "おく",
        "kanji": "億",
        "en": "Seratus juta (100.000.000)",
        "audio": ""
      },
      {
        "id": "v25-10",
        "rom": "Moshi",
        "kana": "もし",
        "kanji": "",
        "en": "Seandainya (If...)",
        "audio": ""
      },
      {
        "id": "v25-11",
        "rom": "Ikura",
        "kana": "いくら",
        "kanji": "",
        "en": "Berapapun / Sekalipun (Even if...)",
        "audio": ""
      },
      {
        "id": "v25-12",
        "rom": "Ganbarimasu",
        "kana": "がんばります",
        "kanji": "頑張ります",
        "en": "Bersemangat / Berjuang keras",
        "audio": ""
      },
      {
        "id": "v25-13",
        "rom": "Tenkin",
        "kana": "てんきん",
        "kanji": "転勤",
        "en": "Pindah tempat kerja (mutasi)",
        "audio": ""
      },
      {
        "id": "v25-14",
        "rom": "Koto",
        "kana": "こと",
        "kanji": "事",
        "en": "Hal / Perkara",
        "audio": ""
      },
      {
        "id": "v25-15",
        "rom": "Osewa ni narimashita",
        "kana": "おせわに なりました",
        "kanji": "お世話に なりました",
        "en": "Terima kasih atas bantuan Anda (perpisahan)",
        "audio": ""
      },
      {
        "id": "v25-16",
        "rom": "Tsukaremasu",
        "kana": "つかれます",
        "kanji": "疲れます",
        "en": "Lelah / Capek",
        "audio": ""
      },
      {
        "id": "v25-17",
        "rom": "Yamemasu",
        "kana": "やめます",
        "kanji": "辞めます",
        "en": "Berhenti (kerja/aktivitas) / Mengundurkan diri",
        "audio": ""
      },
      {
        "id": "v25-18",
        "rom": "Todokimasu",
        "kana": "とどきます",
        "kanji": "届きます",
        "en": "Sampai / Tiba (surat/paket)",
        "audio": ""
      },
      {
        "id": "v25-19",
        "rom": "Sugimasu",
        "kana": "すぎます",
        "kanji": "過ぎます",
        "en": "Lewat / Berlalu (waktu)",
        "audio": ""
      },
      {
        "id": "v25-20",
        "rom": "Okane",
        "kana": "おかね",
        "kanji": "お金",
        "en": "Uang",
        "audio": ""
      },
      {
        "id": "v25-21",
        "rom": "Jikan",
        "kana": "じかん",
        "kanji": "時間",
        "en": "Waktu / Jam (durasi)",
        "audio": ""
      },
      {
        "id": "v25-22",
        "rom": "Shigoto",
        "kana": "しごと",
        "kanji": "仕事",
        "en": "Pekerjaan / Kerja",
        "audio": ""
      },
      {
        "id": "v25-23",
        "rom": "Ryokou",
        "kana": "りょこう",
        "kanji": "旅行",
        "en": "Perjalanan / Wisata / Jalan-jalan",
        "audio": ""
      },
      {
        "id": "v25-24",
        "rom": "Byouki",
        "kana": "びょうき",
        "kanji": "病気",
        "en": "Sakit / Penyakit",
        "audio": ""
      },
      {
        "id": "v25-25",
        "rom": "Toshi",
        "kana": "とし",
        "kanji": "年",
        "en": "Umur / Usia / Tahun",
        "audio": ""
      },
      {
        "id": "v25-26",
        "rom": "Kaisha",
        "kana": "かいしゃ",
        "kanji": "会社",
        "en": "Perusahaan / Kantor",
        "audio": ""
      },
      {
        "id": "v25-27",
        "rom": "Natsuyasumi",
        "kana": "なつやすみ",
        "kanji": "夏休み",
        "en": "Liburan musim panas",
        "audio": ""
      },
      {
        "id": "v25-28",
        "rom": "Takusan",
        "kana": "たくさん",
        "kanji": "",
        "en": "Banyak / Berlimpah",
        "audio": ""
      },
      {
        "id": "v25-29",
        "rom": "Hima (na)",
        "kana": "ひま",
        "kanji": "暇",
        "en": "Senggang / Kosong (waktu luang)",
        "audio": ""
      },
      {
        "id": "v25-30",
        "rom": "Isogashii",
        "kana": "いそがしい",
        "kanji": "忙しい",
        "en": "Sibuk",
        "audio": ""
      }
    ],
    "grammar": [
      {
        "id": "g25-1",
        "title": "1. ~たら (Tara: Kalau / Jika)",
        "desc": "Kondisional paling umum dalam bahasa Jepang. Jauh lebih fleksibel daripada 'To' di Bab 23. Bisa dipakai untuk tebakan masa depan, ajakan, perintah, atau niat.",
        "points": [
          "Cara buat: Ambil Ta-Form (Bentuk lampau) lalu tambah 'ra'.",
          "V-tara: Ame ga futTARA, ikimasen. (KALAU turun hujan, saya tidak pergi).",
          "I-Adj-kattara: YasukatTARA, kaimasu. (KALAU murah, saya beli).",
          "Na-Adj/N-dattara: Hima DATTARA, asobi ni kimasu ka. (KALAU senggang, maukah datang main?).",
          "Negatif: ~nakattara. Okane ga nakatTARA... (KALAU tidak ada uang...)"
        ],
        "formula": "V-たら / Adj-かったら / N-だったら",
        "native_note": "Meskipun ada beberapa jenis pola pengandaian dalam bahasa Jepang (seperti ~ba, ~to, ~tara), pola '~tara' adalah bentuk yang paling aman, paling fleksibel, dan paling sering digunakan dalam percakapan lisan karena minim batasan."
      },
      {
        "id": "g25-2",
        "title": "2. ~ても (Temo: Walaupun / Meskipun)",
        "desc": "Kebalikan dari Tara (Kondisi berlawanan). Diartikan 'Sekalipun A, B tetap terjadi'.",
        "points": [
          "Cara buat: Gunakan Te-Form.",
          "Verb + Temo: Ame ga futTEMO, ikimasu. (WALAUPUN hujan, saya tetap pergi).",
          "I-Adj + Kutemo: TakakuTEMO, kaimasu. (WALAUPUN mahal, saya beli).",
          "Na-Adj/Noun + Demo: Hima DEMO, asobimasen. (WALAUPUN senggang, saya tidak main)."
        ],
        "formula": "V-ても / Adj-くても / N-でも"
      },
      {
        "id": "g25-3",
        "title": "3. もし (Moshi) & いくら (Ikura)",
        "desc": "Kata penegas yang sering ditaruh di awal kalimat untuk memperjelas dan memperkuat nuansa pengandaian.",
        "points": [
          "MOSHI + ~tara. (SEANDAINYA... kalau). Moshi 1-oku en attara... (Seandainya punya 100 juta yen...). Memperkuat unsur 'Jika'.",
          "IKURA + ~temo. (SEKALIPUN / BAGAIMANAPUN ... meskipun). Ikura kangaetemo, wakarimasen. (Bagaimanapun/Berapa kali pun saya pikirkan, tetap tidak mengerti). Memperkuat unsur 'Meskipun'."
        ],
        "formula": "もし ~たら / いくら ~ても"
      }
    ],
    "patterns": [
      {
        "jp": "雨が 降ったら、出かけません。",
        "rom": "Ame ga futtara, dekakemasen.",
        "en": "Kalau turun hujan, saya tidak akan keluar."
      },
      {
        "jp": "お金が あったら、旅行 します。",
        "rom": "Okane ga attara, ryokou shimasu.",
        "en": "Kalau ada uang, saya akan jalan-jalan (traveling)."
      },
      {
        "jp": "安くても、わたしは グループ旅行が 嫌いです。",
        "rom": "Yasukutemo, watashi wa guruupu-ryokou ga kirai desu.",
        "en": "Walaupun murah, saya benci travel rombongan."
      },
      {
        "jp": "いくら 考えても、わかりません。",
        "rom": "Ikura kangaetemo, wakarimasen.",
        "en": "Bagaimanapun dipikirkan, saya tetap tidak mengerti."
      }
    ],
    "conversation": {
      "title": "Penerapan Nyata: もし １億円 あったら (Seandainya Punya 100 Juta Yen...)",
      "dialogue": [
        {
          "speaker": "Miller",
          "jp": "太郎君は もし １億円 あったら、何を したいですか。",
          "rom": "Tarou-kun wa moshi ichi-oku en attara, nani o shitai desu ka.",
          "en": "Taro, kalau seandainya punya 100 juta yen, ingin melakukan apa?"
        },
        {
          "speaker": "Taro",
          "jp": "コンピューターの 会社を 作りたいです。",
          "rom": "Konpyuutaa no kaisha o tsukuritai desu.",
          "en": "Ingin membuat perusahaan komputer."
        },
        {
          "speaker": "Miller",
          "jp": "サントスさんは？",
          "rom": "Santosu-san wa?",
          "en": "Kalau Pak Santos?"
        },
        {
          "speaker": "Santos",
          "jp": "わたしは 会社を 辞めて、海で 釣りを したいです。",
          "rom": "Watashi wa kaisha o yamete, umi de tsuri o shitai desu.",
          "en": "Saya ingin berhenti dari perusahaan, lalu memancing di laut."
        },
        {
          "speaker": "Taro",
          "jp": "ミラーさんは？",
          "rom": "Miraa-san wa?",
          "en": "Kalau Pak Miller?"
        },
        {
          "speaker": "Miller",
          "jp": "わたしですか。わたしは もう少し 頑張ります。",
          "rom": "Watashi desu ka. Watashi wa mou sukoshi ganbarimasu.",
          "en": "Saya? Saya akan berjuang (bekerja keras) sedikit lagi."
        }
      ]
    },
    "practice": [
      {
        "type": "mcq",
        "question": "[Renshuu A] Kata sifat I (contoh: Takai/mahal) jika diubah ke bentuk kondisional 'Tara' (Kalau mahal) menjadi:",
        "options": [
          {
            "text": "Takakattara",
            "correct": true
          },
          {
            "text": "Takaitara",
            "correct": false
          },
          {
            "text": "Takakara",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Mondai] Terjemahkan: 'Meskipun sibuk, saya belajar'.\nIsogashiku-[     ], benkyou shimasu.",
        "answer": "temo"
      },
      {
        "type": "mcq",
        "question": "[Renshuu B] 'Kalau tidak mengerti (wakarimasen), bertanyalah pada guru'.",
        "options": [
          {
            "text": "Wakaranakattara, sensei ni kiite kudasai.",
            "correct": true
          },
          {
            "text": "Wakaranaitara, sensei ni kiite kudasai.",
            "correct": false
          },
          {
            "text": "Wakattara, sensei ni kiite kudasai.",
            "correct": false
          }
        ]
      },
      {
        "type": "fill",
        "question": "[Renshuu C] 'Kalau hujan, saya tidak main tenis'.\nAme [        ], tenisu o shimasen.",
        "answer": "dattara"
      },
      {
        "type": "mcq",
        "question": "[Akhir MNN I] Kata penegas yang berpasangan dengan '~Temo' (Meskipun/Bagaimanapun) adalah:",
        "options": [
          {
            "text": "Ikura",
            "correct": true
          },
          {
            "text": "Moshi",
            "correct": false
          },
          {
            "text": "Zutto",
            "correct": false
          }
        ]
      }
    ],
    "mini_kaiwa": [
      {
        "title": "Renshuu C 1: Andai Memiliki Banyak Uang",
        "situation": "Mengobrol santai membayangkan rencana jika memiliki banyak uang tabungan",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "お金が たくさん あったら、何が したいですか。",
            "rom": "Okane ga takusan attara, nani ga shitai desu ka.",
            "en": "Jika punya banyak uang, apa yang ingin dilakukan?"
          },
          {
            "speaker": "B",
            "jp": "大きな 家を 買って、世界旅行を したいです。",
            "rom": "Ookina ie o katte, sekai-ryokou o shitai desu.",
            "en": "Membeli rumah besar dan ingin jalan-jalan keliling dunia."
          },
          {
            "speaker": "A",
            "jp": "いいですね。夢の ようですね。",
            "rom": "Ii desu ne. Yume no you desu ne.",
            "en": "Bagus ya. Kelihatannya seperti mimpi ya."
          }
        ]
      },
      {
        "title": "Renshuu C 2: Tindakan Andai Besok Turun Hujan",
        "situation": "Mengobrol tentang rencana kegiatan esok hari seandainya cuaca hujan",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "明日 雨が 降ったら、ピクニックは 中止ですか。",
            "rom": "Ashita ame ga futtara, pikunikku wa chuushi desu ka.",
            "en": "Jika besok hujan turun, apakah pikniknya batal?"
          },
          {
            "speaker": "B",
            "jp": "はい。雨が 降ったら、家で ビデオを 見ましょう。",
            "rom": "Hai. Ame ga futtara, uchi de bideo o mimashou.",
            "en": "Ya. Jika hujan turun, mari kita menonton video di rumah saja."
          }
        ]
      },
      {
        "title": "Renshuu C 3: Menolak Membeli Barang Murah",
        "situation": "Menolak membeli jam tangan murah karena desainnya yang tidak disukai",
        "dialogue": [
          {
            "speaker": "A",
            "jp": "この 時計は 安いですよ。買いませんか。",
            "rom": "Kono tokei wa yasui desu yo. Kaimasen ka.",
            "en": "Jam tangan ini murah lho. Maukah membelinya?"
          },
          {
            "speaker": "B",
            "jp": "いいえ、安くても 買いません。あまり 好きじゃないですから。",
            "rom": "Iie, yasukutemo kaimasen. Amari suki janai desu kara.",
            "en": "Tidak, meskipun murah saya tidak membelinya. Karena saya kurang suka."
          }
        ]
      }
    ],
    "reibun": [
      {
        "id": "r25-1",
        "jp": "雨が 降ったら、ピクニックは 中止です。... そうですか。残念ですね。",
        "rom": "Ame ga futtara, pikunikku wa chuushi desu. ... Sou desu ka. Zannen desu ne.",
        "en": "Kalau turun hujan, piknik dibatalkan. ... Oh ya? Sayang sekali ya."
      },
      {
        "id": "r25-2",
        "jp": "安かったら、パソコンを 買いたいです。... そうですね。今 安いですから。",
        "rom": "Yasukattara, pasokon o kaitai desu. ... Sou desu ne. Ima yasui desu kara.",
        "en": "Kalau murah, saya ingin membeli komputer. ... Benar ya, karena sekarang sedang murah."
      },
      {
        "id": "r25-3",
        "jp": "雨が 降っても、サッカーを します。... 風邪を ひかないでくださいね。",
        "rom": "Ame ga futte mo, sakkaa o shimasu. ... Kaze o hikanaide kudasai ne.",
        "en": "Walaupun hujan turun, kita tetap main sepak bola. ... Tolong jangan sampai masuk angin ya."
      },
      {
        "id": "r25-4",
        "jp": "年を とったら、静かな 田舎に 住みたいです。... いいですね。わたしもです。",
        "rom": "Toshi o tottara, shizuka na inaka ni sumitai desu. ... Ii desu ne. Watashi mo desu.",
        "en": "Kalau sudah tua, saya ingin tinggal di desa yang tenang. ... Bagus ya. Saya juga."
      },
      {
        "id": "r25-5",
        "jp": "いくら 考えても、分かりません。... 先生に 聞きましょう。",
        "rom": "Ikura kangaete mo, wakarimasen. ... Sensei ni kikimashou.",
        "en": "Biar dipikirkan bagaimanapun, saya tidak mengerti. ... Mari bertanya kepada guru."
      }
    ]
  }
];

const chaptersDir = path.join(__dirname, '../src/data/chapters');
if (!fs.existsSync(chaptersDir)) {
  fs.mkdirSync(chaptersDir, { recursive: true });
}

// Inject expanded schema for Workbooks and Exams
data.forEach(chapter => {
  chapter.workbook = chapter.workbook || [];
  chapter.exam = chapter.exam || [];
});

// Write individual JSON files
data.forEach(chapter => {
  const chapterPath = path.join(chaptersDir, 'chapter_' + chapter.id + '.json');
  fs.writeFileSync(chapterPath, JSON.stringify(chapter, null, 2));
});

// Write bundled JS file
const fileContent = '// Auto-generated detailed MNN Data\nexport const MNN_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, '../src/data/chapter_data.js'), fileContent);

console.log('Successfully updated chapter_data.js and generated individual chapter files in src/data/chapters/');
