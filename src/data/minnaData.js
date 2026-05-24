// Deep digest version of Minna no Nihongo Data
export const MINNA_LESSONS = [
  {
    "id": 1,
    "title": "Lesson 1: Identitas, Profesi & Kewarganegaraan",
    "intro": "Bab ini meletakkan fondasi absolut struktur kalimat bahasa Jepang (Subjek - Objek - Predikat). Berfokus pada pembentukan kalimat nominal dasar untuk memperkenalkan diri dan orang lain.",
    "points": [
      {
        "pattern": "N1 は N2 です",
        "explanation": "Partikel は (ditulis 'ha', dibaca 'wa') adalah penanda topik. Ia memberi tahu pendengar: 'Inilah topik yang akan saya bicarakan'. Kata です (desu) diletakkan di akhir kalimat nominal untuk menunjukkan rasa hormat (kesopanan) kepada lawan bicara sekaligus berfungsi menegaskan kalimat.",
        "formula": "[Topik/Subjek] は [Identitas/Profesi] です",
        "nuance": "Berbeda dengan partikel が (ga) yang spesifik menunjuk subjek, は (wa) bersifat lebih luas menyoroti topik kalimat secara keseluruhan.",
        "examples": [
          {
            "jp": "わたしはマイク・ミラーです。",
            "rom": "Watashi wa Maiku Mirā desu.",
            "id": "Saya adalah Mike Miller."
          },
          {
            "jp": "シュミットさんはエンジニアです。",
            "rom": "Shumitto-san wa enjinia desu.",
            "id": "Sdr. Schmidt adalah seorang insinyur."
          }
        ]
      },
      {
        "pattern": "N1 は N2 じゃありません",
        "explanation": "Merupakan bentuk negatif (penyangkalan) dari です. Dalam percakapan lisan sehari-hari, kita menggunakan じゃありません (ja arimasen). Untuk konteks tertulis yang sangat formal atau pidato resmi, digunakan ではありません (dewa arimasen).",
        "formula": "[Topik/Subjek] は [Identitas/Profesi] じゃありません",
        "nuance": "'じゃ' (ja) sebenarnya adalah peleburan fonetik (singkatan lisan) dari 'では' (dewa).",
        "examples": [
          {
            "jp": "サントスさんは学生じゃありません。",
            "rom": "Santosu-san wa gakusei ja arimasen.",
            "id": "Sdr. Santos bukan seorang pelajar."
          },
          {
            "jp": "わたしは医者ではありません。",
            "rom": "Watashi wa isha dewa arimasen.",
            "id": "Saya bukan seorang dokter. (Sangat formal)"
          }
        ]
      },
      {
        "pattern": "S か (Kalimat Tanya)",
        "explanation": "Partikel か (ka) berfungsi persis seperti tanda tanya (?). Diletakkan di akhir kalimat tanpa perlu mengubah intonasi drastis atau susunan kata. Untuk menjawabnya, selalu awali dengan 'はい' (Ya) atau 'いいえ' (Tidak).",
        "formula": "[Kalimat lengkap] + か",
        "nuance": "Dalam bahasa Jepang tulisan standar, kalimat yang diakhiri dengan partikel か biasanya disudahi dengan tanda titik (。), bukan tanda tanya (？), meskipun modern ini tanda tanya sering dipakai.",
        "examples": [
          {
            "jp": "ミラーさんはアメリカ人ですか。",
            "rom": "Miraa-san wa Amerika-jin desu ka.",
            "id": "Apakah Sdr. Miller orang Amerika?"
          },
          {
            "jp": "はい、アメリカ人です。",
            "rom": "Hai, Amerika-jin desu.",
            "id": "Ya, orang Amerika."
          }
        ]
      },
      {
        "pattern": "N も (Juga)",
        "explanation": "Partikel も (mo) menggantikan partikel は (wa) ketika subjek/topik yang dibicarakan memiliki status, kondisi, atau predikat yang SAMA dengan subjek sebelumnya.",
        "formula": "[Topik Baru] も [Identitas/Profesi Sama] です",
        "nuance": "Jangan gunakan 'N も は' atau 'N は も'. Partikel も secara otomatis menelan partikel は.",
        "examples": [
          {
            "jp": "ミラーさんは会社員です。グプタさんも会社員です。",
            "rom": "Miraa-san wa kaishain desu. Guputa-san mo kaishain desu.",
            "id": "Sdr. Miller adalah karyawan. Sdr. Gupta juga karyawan."
          }
        ]
      },
      {
        "pattern": "N1 の N2 (Kepemilikan / Atribut)",
        "explanation": "Partikel の (no) berfungsi menghubungkan dua kata benda. N1 selalu bertindak sebagai penjelas (pemilik/asal/kategori), sedangkan N2 adalah benda utama yang dijelaskan.",
        "formula": "[Penjelas/Pemilik] の [Benda Utama]",
        "nuance": "Strukturnya terbalik dari bahasa Indonesia. 'Buku saya' menjadi 'Saya no Buku' (Watashi no hon).",
        "examples": [
          {
            "jp": "IMCの社員",
            "rom": "IMC no shain",
            "id": "Karyawan (dari perusahaan) IMC."
          },
          {
            "jp": "わたしの本",
            "rom": "Watashi no hon",
            "id": "Buku milik saya."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Lesson 2: Kata Tunjuk (Demonstrativa)",
    "intro": "Bab ini memperkenalkan sistem kata tunjuk (Ko-So-A-Do) bahasa Jepang. Kunci memahaminya terletak pada posisi benda relatif terhadap jarak pembicara dan lawan bicara.",
    "points": [
      {
        "pattern": "これ / それ / あれ は N です",
        "explanation": "Berfungsi sebagai KATA GANTI benda (Pronoun). 'Kore' untuk benda di dekat pembicara. 'Sore' untuk benda di dekat pendengar. 'Are' untuk benda yang jauh dari keduanya.",
        "formula": "これ/それ/あれ は [Benda] です",
        "nuance": "Kata-kata ini berdiri sendiri dan tidak bisa diikuti kata benda secara langsung tanpa partikel は.",
        "examples": [
          {
            "jp": "これは辞書です。",
            "rom": "Kore wa jisho desu.",
            "id": "Ini (di dekatku) adalah kamus."
          },
          {
            "jp": "それは傘ですか。",
            "rom": "Sore wa kasa desu ka.",
            "id": "Apakah itu (di dekatmu) payung?"
          }
        ]
      },
      {
        "pattern": "この N / その N / あの N",
        "explanation": "Berfungsi sebagai KATA SIFAT penunjuk. HARUS diikuti langsung oleh kata benda. Aturan jaraknya sama dengan Kore/Sore/Are.",
        "formula": "この/その/あの [Benda] は [Keterangan] です",
        "nuance": "Gunakan pola ini ketika Anda ingin menspesifikkan benda yang mana yang sedang dibahas.",
        "examples": [
          {
            "jp": "この本はわたしのです。",
            "rom": "Kono hon wa watashi no desu.",
            "id": "Buku ini adalah milik saya."
          },
          {
            "jp": "あの人は誰ですか。",
            "rom": "Ano hito wa dare desu ka.",
            "id": "Orang itu (di sana) siapa?"
          }
        ]
      },
      {
        "pattern": "そうです / そうじゃありません",
        "explanation": "Untuk kalimat nominal, alih-alih mengulang seluruh kalimat benda ketika menjawab pertanyaan, Anda cukup menggunakan 'sou desu' (benar begitu) atau 'sou ja arimasen' (bukan begitu).",
        "formula": "はい、そうです / いいえ、そうじゃありません",
        "nuance": "Sangat natural dan efisien dibanding mengulang kata bendanya. Untuk penyangkalan, kadang juga dipakai 'いいえ、違います' (iie, chigaimasu = Tidak, Anda salah/keliru).",
        "examples": [
          {
            "jp": "それはテレホンカードですか。",
            "rom": "Sore wa terehonkaado desu ka.",
            "id": "Apakah itu kartu telepon?"
          },
          {
            "jp": "はい、そうです。",
            "rom": "Hai, sou desu.",
            "id": "Ya, benar (begitu)."
          },
          {
            "jp": "いいえ、違います。",
            "rom": "Iie, chigaimasu.",
            "id": "Tidak, keliru / bukan."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Lesson 3: Lokasi & Eksistensi Spasial",
    "intro": "Bab ini memperluas konsep Ko-So-A-Do ke penunjukan lokasi/tempat, ruangan, dan harga, serta memperkenalkan versi bahasa yang lebih sopan.",
    "points": [
      {
        "pattern": "ここ / そこ / あそこ / どこ",
        "explanation": "Kata ganti penunjuk tempat. 'Koko' (di sini, ruang pembicara), 'Soko' (di situ, ruang pendengar), 'Asoko' (di sana, jauh dari keduanya), dan 'Doko' (di mana?).",
        "formula": "[Subjek] は ここ/そこ/あそこ です",
        "nuance": "Jika pembicara dan pendengar berada di ruang/tempat yang sama, 'koko' adalah ruang mereka, 'soko' agak jauh, dan 'asoko' jauh sekali.",
        "examples": [
          {
            "jp": "お手洗いはあそこです。",
            "rom": "Otearai wa asoko desu.",
            "id": "Toilet ada di sana."
          },
          {
            "jp": "エレベーターはどこですか。",
            "rom": "Erebeetaa wa doko desu ka.",
            "id": "Lift ada di mana?"
          }
        ]
      },
      {
        "pattern": "こちら / そちら / あちら / どちら",
        "explanation": "Versi KRAMA (jauh lebih sopan) dari koko/soko/asoko/doko. Secara harfiah berarti 'sebelah sini/situ/sana/mana'. Sering dipakai dalam bisnis, resepsionis, atau pada orang tak dikenal.",
        "formula": "[Subjek] は こちら/そちら/あちら です",
        "nuance": "Selain arah, 'kochira' juga bisa merujuk ke seseorang (memperkenalkan orang dengan sopan: 'Kochira wa Tanaka-san desu').",
        "examples": [
          {
            "jp": "会議室はこちらです。",
            "rom": "Kaigishitsu wa kochira desu.",
            "id": "Ruang rapat ada di sebelah sini."
          },
          {
            "jp": "お国はどちらですか。",
            "rom": "Okuni wa dochira desu ka.",
            "id": "Negara Anda di mana? (Berasal dari negara mana?)"
          }
        ]
      },
      {
        "pattern": "N1 の N2 (Tempat Asal Buatan)",
        "explanation": "Perluasan dari fungsi kepemilikan. Jika N1 adalah nama negara/perusahaan dan N2 adalah produk, maka partikel の menunjukkan 'buatan dari / asal produksi'.",
        "formula": "[Negara/Perusahaan Pembuat] の [Produk]",
        "nuance": "Untuk menanyakan buatan mana, gunakan kata tanya 'どこ' (doko).",
        "examples": [
          {
            "jp": "これはどこのコンピューターですか。",
            "rom": "Kore wa doko no konpyuutaa desu ka.",
            "id": "Ini komputer buatan mana?"
          },
          {
            "jp": "日本のコンピューターです。",
            "rom": "Nihon no konpyuutaa desu.",
            "id": "Komputer buatan Jepang."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Lesson 4: Waktu, Jam & Konjugasi Kata Kerja",
    "intro": "Bab pertama yang memperkenalkan KATA KERJA (Verbs) dalam bahasa Jepang. Anda akan mempelajari bentuk sopan (masu-form) dan cara menyatakan rutinitas temporal.",
    "points": [
      {
        "pattern": "V-ます / V-ません / V-ました / V-ませんでした",
        "explanation": "Kata kerja bahasa Jepang tidak berubah karena subjek (saya, dia, mereka), melainkan berubah karena WAKTU (tense) dan AFEKSI (positif/negatif). '-masu' adalah bentuk sopan (non-past) untuk kebiasaan atau masa depan.",
        "formula": "Positif: ます (masu), Negatif: ません (masen), Lampau: ました (mashita), Lampau Negatif: ませんでした (masen deshita)",
        "nuance": "Bentuk '-masu' dipakai saat berbicara dengan orang yang tidak akrab, atasan, atau dalam konteks formal.",
        "examples": [
          {
            "jp": "毎日勉強します。",
            "rom": "Mainichi benkyou shimasu.",
            "id": "Setiap hari belajar. (Kebiasaan/Positif)"
          },
          {
            "jp": "きのう勉強しませんでした。",
            "rom": "Kinou benkyou shimasen deshita.",
            "id": "Kemarin tidak belajar. (Lampau/Negatif)"
          }
        ]
      },
      {
        "pattern": "～時 ～分 に V",
        "explanation": "Partikel に (ni) dipakai untuk merujuk pada TITIK WAKTU spesifik terjadinya sebuah aksi (jam, tanggal, hari raya).",
        "formula": "[Waktu] に [Aksi]",
        "nuance": "Kata waktu yang TIDAK pasti atau relatif (seperti besok, kemarin, hari ini, setiap hari) TIDAK boleh menggunakan partikel 'ni'.",
        "examples": [
          {
            "jp": "６時半に起きます。",
            "rom": "Rokuji han ni okimasu.",
            "id": "Bangun pada jam 6.30."
          },
          {
            "jp": "明日勉強します。",
            "rom": "Ashita benkyou shimasu.",
            "id": "Besok saya belajar. (Tanpa partikel 'ni')"
          }
        ]
      },
      {
        "pattern": "～から ～まで",
        "explanation": "Kara berarti 'dari' (titik mulai) dan made berarti 'sampai' (titik akhir). Bisa dipakai untuk WAKTU maupun TEMPAT.",
        "formula": "[Waktu/Tempat Awal] から [Waktu/Tempat Akhir] まで",
        "nuance": "Keduanya bisa dipakai bersamaan, atau salah satunya saja secara mandiri.",
        "examples": [
          {
            "jp": "９時から５時まで働きます。",
            "rom": "Kuji kara goji made hatarakimasu.",
            "id": "Bekerja dari jam 9 sampai jam 5."
          },
          {
            "jp": "銀行は９時からです。",
            "rom": "Ginkou wa kuji kara desu.",
            "id": "Bank (buka) dari jam 9."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Lesson 5: Gerak, Tujuan, & Kendaraan",
    "intro": "Mendalami kata kerja pergerakan (motion verbs) secara spesifik dan partikel-partikel pendamping untuk merancang logistik perjalanan.",
    "points": [
      {
        "pattern": "N (Tempat) へ 行きます/来ます/帰ります",
        "explanation": "Partikel へ (ditulis 'he', dibaca 'e') menunjukkan 'arah pergerakan'. Hanya dipakai bersama kata kerja gerak absolut: ikimasu (pergi), kimasu (datang), kaerimasu (pulang).",
        "formula": "[Tempat Tujuan] へ [Kata Kerja Gerak]",
        "nuance": "Dalam bahasa Jepang modern, partikel 'ni' sering dipakai untuk menggantikan 'e' dalam konteks tujuan tempat (N ni ikimasu).",
        "examples": [
          {
            "jp": "明日京都へ行きます。",
            "rom": "Ashita Kyouto e ikimasu.",
            "id": "Besok pergi ke Kyoto."
          },
          {
            "jp": "うちへ帰ります。",
            "rom": "Uchi e kaerimasu.",
            "id": "Pulang ke rumah."
          }
        ]
      },
      {
        "pattern": "どこへも行きません",
        "explanation": "Ketika kata tanya (doko, dare, nani) diikuti partikel も dan kata kerja negatif (masen), ia membentuk makna penolakan/kekosongan total (tidak ke mana-mana, tidak siapa-siapa, tidak apa-apa).",
        "formula": "[Kata Tanya] + も + [V-Negatif]",
        "nuance": "Penghilangan partikel 'e' (dokomo ikimasen) juga bisa diterima dalam percakapan.",
        "examples": [
          {
            "jp": "日曜日はどこへも行きませんでした。",
            "rom": "Nichiyoubi wa doko e mo ikimasen deshita.",
            "id": "Hari minggu tidak pergi ke mana pun."
          }
        ]
      },
      {
        "pattern": "N (Kendaraan) で 行きます",
        "explanation": "Partikel で (de) di sini bermakna 'dengan menggunakan (alat/sarana)'. Dalam konteks perpindahan, ini merujuk pada moda transportasi.",
        "formula": "[Kendaraan] で [Kata Kerja Gerak]",
        "nuance": "Pengecualian mutlak: 'Berjalan kaki' bukan menggunakan alat, melainkan aksi, sehingga menggunakan '歩いて' (aruite), bukan 'ashi de'.",
        "examples": [
          {
            "jp": "自転車で学校へ行きます。",
            "rom": "Jitensha de gakkou e ikimasu.",
            "id": "Pergi ke sekolah dengan sepeda."
          },
          {
            "jp": "歩いて帰ります。",
            "rom": "Aruite kaerimasu.",
            "id": "Pulang dengan berjalan kaki."
          }
        ]
      },
      {
        "pattern": "N (Orang/Hewan) と V",
        "explanation": "Partikel と (to) ketika diletakkan setelah benda hidup (orang/hewan) bermakna 'bersama dengan (partner)'.",
        "formula": "[Partner] と [Kata Kerja]",
        "nuance": "Jika melakukan sesuatu sendirian, gunakan kata keterangan '一人で' (hitori de) tanpa partikel と.",
        "examples": [
          {
            "jp": "家族と日本へ来ました。",
            "rom": "Kazoku to Nihon e kimashita.",
            "id": "Datang ke Jepang bersama keluarga."
          },
          {
            "jp": "一人で東京へ行きます。",
            "rom": "Hitori de Toukyou e ikimasu.",
            "id": "Pergi ke Tokyo sendirian."
          }
        ]
      }
    ]
  }
];
