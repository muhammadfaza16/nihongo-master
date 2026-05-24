import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the existing seedMNN.js as text
const seedPath = path.join(__dirname, 'seedMNN.js');
const content = fs.readFileSync(seedPath, 'utf-8');

// Extract the data array string between "const data = [" and the closing "];"
const dataStartMarker = 'const data = ';
const dataEndMarker = '\nconst chaptersDir';
const dataStart = content.indexOf(dataStartMarker) + dataStartMarker.length;
const dataEnd = content.indexOf(dataEndMarker);
const dataStr = content.substring(dataStart, dataEnd).trim();
const cleanDataStr = dataStr.endsWith(';') ? dataStr.slice(0, -1) : dataStr;

// Parse the data array using eval (it's valid JS)
const data = eval('(' + cleanDataStr + ')');
console.log(`Loaded ${data.length} chapters from seedMNN.js for Mini Kaiwa insertion.`);

const miniKaiwaData = {
  1: [
    {
      title: "Renshuu C 1: Menanyakan Nama Seseorang",
      situation: "Bertemu seseorang untuk pertama kali dan menanyakan namanya secara sopan",
      dialogue: [
        { speaker: "A", jp: "失礼ですが、お名前は？", rom: "Shitsurei desu ga, onamae wa?", en: "Maaf / permisi, nama Anda siapa?" },
        { speaker: "B", jp: "サントスです。", rom: "Santosu desu.", en: "Saya Santos." },
        { speaker: "A", jp: "サントスさんですか。", rom: "Santosu-san desu ka.", en: "Apakah Anda Sdr. Santos?" },
        { speaker: "B", jp: "はい、そうです。", rom: "Hai, sou desu.", en: "Ya, benar." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Pekerjaan",
      situation: "Bertanya tentang pekerjaan atau status profesional lawan bicara",
      dialogue: [
        { speaker: "A", jp: "失礼ですが、お仕事は？", rom: "Shitsurei desu ga, o-shigoto wa?", en: "Permisi, pekerjaan Anda apa?" },
        { speaker: "B", jp: "IMCの 社員です。", rom: "IMC no shain desu.", en: "Saya karyawan perusahaan IMC." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    },
    {
      title: "Renshuu C 3: Memperkenalkan Orang Lain",
      situation: "Memperkenalkan rekan kerja atau teman baru kepada orang lain",
      dialogue: [
        { speaker: "A", jp: "こちらは サントスさんです。", rom: "Kochira wa Santosu-san desu.", en: "Di sebelah sini adalah Sdr. Santos." },
        { speaker: "B", jp: "はじめまして。サントスです。ブラジルから 来ました。どうぞ よろしく。", rom: "Hajimemashite. Santosu desu. Burajiru kara kimashita. Douzo yoroshiku.", en: "Senang bertemu Anda pertama kali. Saya Santos. Datang dari Brasil. Senang berkenalan dengan Anda." },
        { speaker: "C", jp: "佐藤です。どうぞ よろしく。", rom: "Satou desu. Douzo yoroshiku.", en: "Saya Sato. Senang berkenalan dengan Anda juga." }
      ]
    }
  ],
  2: [
    {
      title: "Renshuu C 1: Menanyakan Benda Terdekat",
      situation: "Bertanya tentang benda yang dipegang atau dekat dengan lawan bicara",
      dialogue: [
        { speaker: "A", jp: "それは 何ですか。", rom: "Sore wa nan desu ka.", en: "Itu apa?" },
        { speaker: "B", jp: "テレホンカードです。", rom: "Terefon kaado desu.", en: "Ini kartu telepon." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    },
    {
      title: "Renshuu C 2: Memberikan Hadiah Kecil",
      situation: "Memberikan hadiah kecil atau oleh-oleh kepada tetangga/teman baru",
      dialogue: [
        { speaker: "A", jp: "これ、どうぞ。", rom: "Kore, douzo.", en: "Ini, silakan." },
        { speaker: "B", jp: "何ですか。", rom: "Nan desu ka.", en: "Apakah ini?" },
        { speaker: "A", jp: "コーヒーです。", rom: "Koohii desu.", en: "Kopi." },
        { speaker: "B", jp: "どうも ありがとう ございます。", rom: "Doumo arigatou gozaimasu.", en: "Terima kasih banyak." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Kepemilikan Barang",
      situation: "Bertanya siapa pemilik dari suatu barang yang tergeletak",
      dialogue: [
        { speaker: "A", jp: "この 傘は 誰の ですか。", rom: "Kono kasa wa dare no desu ka.", en: "Payung ini milik siapa?" },
        { speaker: "B", jp: "私のです。", rom: "Watashi no desu.", en: "Milik saya." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    }
  ],
  3: [
    {
      title: "Renshuu C 1: Menanyakan Lokasi Tempat",
      situation: "Bertanya tentang letak suatu ruangan dalam gedung sekolah/kantor",
      dialogue: [
        { speaker: "A", jp: "ここは どこですか。", rom: "Koko wa doko desu ka.", en: "Di sini di mana?" },
        { speaker: "B", jp: "教室です。", rom: "Kyoushitsu desu.", en: "Ruang kelas." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Asal Negara/Merek Benda",
      situation: "Menanyakan di mana suatu benda diproduksi dan harganya",
      dialogue: [
        { speaker: "A", jp: "それは どこの 時計ですか。", rom: "Sore wa doko no tokei desu ka.", en: "Itu jam buatan mana?" },
        { speaker: "B", jp: "日本のです。", rom: "Buatan Jepang." },
        { speaker: "A", jp: "いくらですか。", rom: "Ikura desu ka.", en: "Harganya berapa?" },
        { speaker: "B", jp: "15,000円です。", rom: "Ichiman go-sen en desu.", en: "15.000 Yen." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Letak Fasilitas (Elevator)",
      situation: "Bertanya kepada staf gedung di mana letak elevator berada",
      dialogue: [
        { speaker: "A", jp: "エレベーターは どちらですか。", rom: "Erebeetaa wa dochira desu ka.", en: "Elevator ada di sebelah mana?" },
        { speaker: "B", jp: "あちらです。", rom: "Achira desu.", en: "Ada di sebelah sana." },
        { speaker: "A", jp: "どうも ありがとう ございます。", rom: "Doumo arigatou gozaimasu.", en: "Terima kasih banyak." }
      ]
    }
  ],
  4: [
    {
      title: "Renshuu C 1: Menanyakan Jam Buka-Tutup",
      situation: "Menanyakan jam operasional dari perpustakaan umum",
      dialogue: [
        { speaker: "A", jp: "図書館は 何時から 何時まで ですか。", rom: "Toshokan wa nan-ji kara nan-ji made desu ka.", en: "Perpustakaan buka dari jam berapa sampai jam berapa?" },
        { speaker: "B", jp: "午前9時から 午後5時まで です。", rom: "Gozen ku-ji kara gogo go-ji made desu.", en: "Dari jam 9 pagi sampai jam 5 sore." },
        { speaker: "A", jp: "休みは 何曜日ですか。", rom: "Yasumi wa nan-youbi desu ka.", en: "Liburnya hari apa?" },
        { speaker: "B", jp: "月曜日です。", rom: "Getsuyoubi desu.", en: "Hari Senin." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Waktu Ujian/Acara",
      situation: "Bertanya tentang jam mulai suatu kegiatan formal",
      dialogue: [
        { speaker: "A", jp: "試験は 何時に 始まりますか。", rom: "Shiken wa nan-ji ni hajimarimasu ka.", en: "Ujian dimulai jam berapa?" },
        { speaker: "B", jp: "午前10時に 始まります。", rom: "Gozen juu-ji ni hajimarimasu.", en: "Dimulai jam 10 pagi." },
        { speaker: "A", jp: "そうですか。ありがとう ございます。", rom: "Sou desu ka. Arigatou gozaimasu.", en: "Oh begitu. Terima kasih banyak." }
      ]
    },
    {
      title: "Renshuu C 3: Menyapa Teman yang Kerja Lembur",
      situation: "Menyapa kolega kerja yang terlihat sangat lelah bekerja hingga malam",
      dialogue: [
        { speaker: "A", jp: "毎晩 遅いですね。大変ですね。", rom: "Maiban osoi desu ne. Taihen desu ne.", en: "Tiap malam pulang lambat ya. Berat/capek sekali ya." },
        { speaker: "B", jp: "ええ。10時まで 働きます。", rom: "Ee. Juu-ji made hatarakimasu.", en: "Iya. Saya bekerja sampai jam 10 malam." }
      ]
    }
  ],
  5: [
    {
      title: "Renshuu C 1: Menanyakan Transportasi & Pendamping",
      situation: "Bertanya bagaimana seseorang pergi ke stasiun dan bersama siapa",
      dialogue: [
        { speaker: "A", jp: "何で 駅へ 行きますか。", rom: "Nan de eki e ikimasu ka.", en: "Naik apa pergi ke stasiun?" },
        { speaker: "B", jp: "自転車で 行きます。", rom: "Jitensha de ikimasu.", en: "Naik sepeda." },
        { speaker: "A", jp: "一人で 行きますか。", rom: "Hitori de ikimasu ka.", en: "Pergi sendirian?" },
        { speaker: "B", jp: "いいえ、友達と 行きます。", rom: "Iie, tomodachi to ikimasu.", en: "Tidak, pergi bersama teman." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Destinasi Liburan",
      situation: "Mengobrol tentang rencana liburan musim panas rekan kerja",
      dialogue: [
        { speaker: "A", jp: "この 夏休みは どこへ 行きますか。", rom: "Kono natsuyasumi wa doko e ikimasu ka.", en: "Liburan musim panas ini pergi ke mana?" },
        { speaker: "B", jp: "京都へ 行きます。", rom: "Kyouto e ikimasu.", en: "Pergi ke Kyoto." },
        { speaker: "A", jp: "いいですね。", rom: "Ii desu ne.", en: "Asyik/bagus sekali ya." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Tanggal Ulang Tahun",
      situation: "Mengobrol santai dan menanyakan hari lahir teman",
      dialogue: [
        { speaker: "A", jp: "お誕生日のは いつですか。", rom: "O-tanjoubi wa itsu desu ka.", en: "Ulang tahun Anda kapan?" },
        { speaker: "B", jp: "9月 15日です。", rom: "Ku-gatsu juu-go-nichi desu.", en: "Tanggal 15 September." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    }
  ],
  6: [
    {
      title: "Renshuu C 1: Mengajak Makan Siang Bersama",
      situation: "Mengajak teman kantor makan bersama dan menentukan lokasinya",
      dialogue: [
        { speaker: "A", jp: "一緒に 昼ご飯を 食べませんか。", rom: "Issho ni hirugohan o tabemasen ka.", en: "Maukah makan siang bersama?" },
        { speaker: "B", jp: "ええ、いいですね。食べましょう。", rom: "Ee, ii desu ne. Tabemashou.", en: "Wah, boleh juga ya. Mari kita makan." },
        { speaker: "A", jp: "どこで 食べますか。", rom: "Doko de tabemasu ka.", en: "Makan di mana?" },
        { speaker: "B", jp: "あの レストランで 食べましょう。", rom: "Ano resutoran de tabemashou.", en: "Mari makan di restoran itu." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Aktivitas Akhir Pekan",
      situation: "Mengobrol tentang kegiatan yang dilakukan pada hari Minggu kemarin",
      dialogue: [
        { speaker: "A", jp: "日曜日 何を しましたか。", rom: "Nichiyoubi nani o shimashita ka.", en: "Hari Minggu kemarin melakukan apa?" },
        { speaker: "B", jp: "サッカーを しました。それから 映画を 見ました。", rom: "Sakkaa o shimashita. Sorekara eiga o mimashita.", en: "Bermain sepak bola. Setelah itu menonton film." },
        { speaker: "A", jp: "そうですか。いいですね。", rom: "Sou desu ka. Ii desu ne.", en: "Oh begitu. Asyik sekali ya." }
      ]
    },
    {
      title: "Renshuu C 3: Menawarkan Minum Kopi (Penolakan Sopan)",
      situation: "Menawarkan kopi pada tamu, namun tamu menolak dengan halus",
      dialogue: [
        { speaker: "A", jp: "ロビーで コーヒーを 飲みませんか。", rom: "Robii de koohii o nomimasen ka.", en: "Maukah minum kopi di lobi?" },
        { speaker: "B", jp: "すみません、コーヒーは ちょっと...", rom: "Sumimasen, koohii wa chotto...", en: "Maaf, kalau kopi agak kurang..." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    }
  ],
  7: [
    {
      title: "Renshuu C 1: Menanyakan Terjemahan Kata",
      situation: "Bertanya cara mengucapkan suatu frasa asing dalam bahasa Jepang",
      dialogue: [
        { speaker: "A", jp: "「Thank you」は 日本語で 何ですか。", rom: "\"Thank you\" wa Nihongo de nan desu ka.", en: "Apa bahasa Jepangnya \"Thank you\"?" },
        { speaker: "B", jp: "「ありがとう」です。", rom: "\"Arigatou\" desu.", en: "\"Arigatou\"." },
        { speaker: "A", jp: "「ありがとう」ですか。わかりました。", rom: "\"Arigatou\" desu ka. Wakarimashita.", en: "\"Arigatou\" ya. Saya mengerti." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Pengirim Hadiah",
      situation: "Mengagumi barang indah milik teman dan menanyakan dari siapa ia memperolehnya",
      dialogue: [
        { speaker: "A", jp: "素敵な ネクタイですね。", rom: "Suteki na nekutai desu ne.", en: "Dasi yang sangat keren/indah ya." },
        { speaker: "B", jp: "ありがとうございます。誕生日に 彼女に もらいました。", rom: "Arigatou gozaimasu. Tanjoubi ni kanojo ni moraimashita.", en: "Terima kasih banyak. Saya mendapatkannya dari pacar saya saat ulang tahun." },
        { speaker: "A", jp: "そうですか。いいですね。", rom: "Sou desu ka. Ii desu ne.", en: "Oh begitu. Bagus sekali ya." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Progres Laporan",
      situation: "Bertanya apakah laporan kerja sudah selesai ditulis",
      dialogue: [
        { speaker: "A", jp: "もう レポートを 書きましたか。", rom: "Mou repooto o kakimashita ka.", en: "Apakah Anda sudah menulis laporan?" },
        { speaker: "B", jp: "いいえ、まだです。これから 書きます。", rom: "Iie, mada desu. Korekara kakimasu.", en: "Belum, masih belum. Mulai sekarang saya mau menulis." }
      ]
    }
  ],
  8: [
    {
      title: "Renshuu C 1: Menanyakan Kesan Kehidupan Baru",
      situation: "Bertanya kepada orang asing tentang bagaimana rasanya tinggal di Jepang",
      dialogue: [
        { speaker: "A", jp: "日本の 生活は どうですか。", rom: "Nihon no seikatsu wa dou desu ka.", en: "Bagaimana kehidupan di Jepang?" },
        { speaker: "B", jp: "忙しいですが、とても 面白いです。", rom: "Isogashii desu ga, totemo omoshiroi desu.", en: "Sibuk sih, tapi sangat menarik." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Sifat Suatu Kota",
      situation: "Bertanya tentang karakteristik kota asal lawan bicara",
      dialogue: [
        { speaker: "A", jp: "奈良は どんな 町ですか。", rom: "Nara wa donna machi desu ka.", en: "Nara itu kota yang seperti apa?" },
        { speaker: "B", jp: "静かで、とても 古い 町です。", rom: "Shizuka de, totemo furui machi desu.", en: "Kota yang sepi dan sangat kuno/tua." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    },
    {
      title: "Renshuu C 3: Menawarkan Teh Hangat pada Tamu",
      situation: "Menawarkan minuman hangat secara sopan kepada tamu yang baru berkunjung",
      dialogue: [
        { speaker: "A", jp: "お茶は いかがですか。", rom: "O-cha wa ikaga desu ka.", en: "Bagaimana kalau minum teh?" },
        { speaker: "B", jp: "ありがとうございます。いただきます。", rom: "Arigatou gozaimasu. Itadakimasu.", en: "Terima kasih banyak. Saya terima (mari minum)." },
        { speaker: "A", jp: "どうぞ。熱いですよ。", rom: "Douzo. Atsui desu yo.", en: "Silakan. Agak panas lho." },
        { speaker: "B", jp: "美味しいですね。", rom: "Oishii desu ne.", en: "Enak sekali ya." }
      ]
    }
  ],
  9: [
    {
      title: "Renshuu C 1: Menanyakan Kemahiran Lawan Bicara",
      situation: "Bertanya tentang kemahiran menari/bernyanyi rekan kerja",
      dialogue: [
        { speaker: "A", jp: "木村さんは ダンスが 上手ですか。", rom: "Kimura-san wa dansu ga jouzu desu ka.", en: "Apakah Sdr. Kimura mahir menari?" },
        { speaker: "B", jp: "はい、とても 上手ですよ。", rom: "Hai, totemo jouzu desu yo.", en: "Ya, dia sangat mahir lho." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    },
    {
      title: "Renshuu C 2: Mengajak Pergi Karena Ada Tiket Gratis",
      situation: "Mengajak teman nonton konser musik klasik karena punya tiket ekstra",
      dialogue: [
        { speaker: "A", jp: "クラシックの 切符が あります。一緒に 行きませんか。", rom: "Kurashikku no kippu ga arimasu. Issho ni ikimasen ka.", en: "Saya punya tiket musik klasik. Maukah pergi bersama?" },
        { speaker: "B", jp: "いいですね。行きましょう。", rom: "Ii desu ne. Ikimashou.", en: "Boleh juga ya. Mari kita pergi!" }
      ]
    },
    {
      title: "Renshuu C 3: Menolak Ajakan Karena Ada Urusan Lain",
      situation: "Menolak ajakan nonton film secara halus karena sudah ada janji lain",
      dialogue: [
        { speaker: "A", jp: "明日 一緒に 映画を 見に行きませんか。", rom: "Ashita issho ni eiga o mini ikimasen ka.", en: "Maukah besok pergi menonton film bersama?" },
        { speaker: "B", jp: "すみません、明日は ちょっと 用事が あります。", rom: "Sumimasen, ashita wa chotto youji ga arimasu.", en: "Maaf, kalau besok saya ada sedikit urusan." },
        { speaker: "A", jp: "そうですか。残念ですね。", rom: "Sou desu ka. Zannen desu ne.", en: "Oh begitu. Sayang sekali ya." }
      ]
    }
  ],
  10: [
    {
      title: "Renshuu C 1: Menanyakan Keberadaan Seseorang",
      situation: "Mencari keberadaan rekan kerja di kantor kepada resepsionis",
      dialogue: [
        { speaker: "A", jp: "すみません、ミラーさんは どこに いますか。", rom: "Sumimasen, Miraa-san wa doko ni imasu ka.", en: "Permisi, Mr. Miller ada di mana ya?" },
        { speaker: "B", jp: "会議室に いますよ。", rom: "Kaigishitsu ni imasu yo.", en: "Ada di ruang rapat lho." },
        { speaker: "A", jp: "そうですか。ありがとうございます。", rom: "Sou desu ka. Arigatou gozaimasu.", en: "Oh begitu. Terima kasih banyak." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Barang dalam Ruangan",
      situation: "Bertanya benda apa saja yang diletakkan di atas meja kerja",
      dialogue: [
        { speaker: "A", jp: "机の 上に 何が ありますか。", rom: "Tsukue no ue ni nani ga arimasu ka.", en: "Di atas meja ada barang apa?" },
        { speaker: "B", jp: "本や ペンなどが あります。", rom: "Hon ya pen nado ga arimasu.", en: "Ada buku, pena, dan lain-lain." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Letak Supermarket Terdekat",
      situation: "Bertanya kepada orang di jalan tentang keberadaan supermarket terdekat",
      dialogue: [
        { speaker: "A", jp: "すみません、この 近くに スーパーが ありますか。", rom: "Sumimasen, kono chikaku ni suupaa ga arimasu ka.", en: "Permisi, apakah di dekat sini ada supermarket?" },
        { speaker: "B", jp: "はい。あの 公園の 隣に あります。", rom: "Hai. Ano kouen no tonari ni arimasu.", en: "Ya. Ada di sebelah taman itu." },
        { speaker: "A", jp: "わかりました。ありがとう ございます。", rom: "Wakarimashita. Arigatou gozaimasu.", en: "Saya mengerti. Terima kasih banyak." }
      ]
    }
  ],
  11: [
    {
      title: "Renshuu C 1: Menanyakan Jumlah Saudara",
      situation: "Mengobrol tentang jumlah saudara kandung keluarga teman",
      dialogue: [
        { speaker: "A", jp: "ご兄弟は 何人 いますか。", rom: "Go-kyoudai wa nani-nin imasu ka.", en: "Saudaranya ada berapa orang?" },
        { speaker: "B", jp: "姉が 一人と 弟が 二人 います。", rom: "Ane ga hitori to otouto ga futari imasu.", en: "Ada satu kakak perempuan dan dua adik laki-laki." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Durasi Studi di Negara Asal",
      situation: "Bertanya berapa lama rekan kerja belajar bahasa Jepang sebelum ke Jepang",
      dialogue: [
        { speaker: "A", jp: "国で どのくらい 日本語を 勉強しましたか。", rom: "Kuni de dono-kurai Nihongo o benkyou shimashita ka.", en: "Di negara asal, berapa lama belajar bahasa Jepang?" },
        { speaker: "B", jp: "6ヶ月 勉強しました。", rom: "Rokkagetsu benkyou shimashita.", en: "Belajar selama 6 bulan." },
        { speaker: "A", jp: "6ヶ月ですか。上手ですね。", rom: "Rokkagetsu desu ka. Jouzu desu ne.", en: "6 bulan ya? Hebat/pintar sekali ya." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Durasi Perjalanan ke Stasiun",
      situation: "Bertanya berapa waktu tempuh dari posisi sekarang ke stasiun terdekat",
      dialogue: [
        { speaker: "A", jp: "ここから 駅まで どのくらい かかりますか。", rom: "Koko kara eki made dono-kurai kakarimasu ka.", en: "Dari sini ke stasiun butuh waktu berapa lama?" },
        { speaker: "B", jp: "歩いて 15分くらい かかります。", rom: "Aruite juu-go-fun kurai kakarimasu.", en: "Jalan kaki kira-kira memakan waktu 15 menit." },
        { speaker: "A", jp: "そうですか。ありがとうございます。", rom: "Sou desu ka. Arigatou gozaimasu.", en: "Oh begitu. Terima kasih banyak." }
      ]
    }
  ],
  12: [
    {
      title: "Renshuu C 1: Menanyakan Cuaca Kemarin Liburan",
      situation: "Mengobrol tentang cuaca dan liburan akhir pekan kemarin",
      dialogue: [
        { speaker: "A", jp: "昨日の 旅行は 寒かったですか。", rom: "Kinou no ryokou wa samukatta desu ka.", en: "Apakah liburan kemarin dingin?" },
        { speaker: "B", jp: "いいえ、あまり 寒くなかったです。いい 天気でしたよ。", rom: "Iie, amari samukunakatta desu. Ii tenki deshita yo.", en: "Tidak, tidak begitu dingin. Cuacanya bagus lho." },
        { speaker: "A", jp: "それは よかったですね。", rom: "Sore wa yokatta desu ne.", en: "Syukurlah kalau begitu." }
      ]
    },
    {
      title: "Renshuu C 2: Membandingkan Keramaian Dua Kota",
      situation: "Membandingkan tingkat keramaian kota Tokyo dengan kota Osaka",
      dialogue: [
        { speaker: "A", jp: "東京と 大阪と どちらが にぎやかですか。", rom: "Toukyou to Osaka to dochira ga nigiyaka desu ka.", en: "Tokyo dan Osaka mana yang lebih ramai?" },
        { speaker: "B", jp: "東京の 方が にぎやかです。", rom: "Toukyou no hou ga nigiyaka desu.", en: "Tokyo yang lebih ramai." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Favorit dari Kategori (Olahraga)",
      situation: "Bertanya tentang jenis olahraga yang paling digemari dari semua cabang olahraga",
      dialogue: [
        { speaker: "A", jp: "スポーツの 中で 何が 一番 好きですか。", rom: "Supootsu no naka de nani ga ichiban suki desu ka.", en: "Di antara olahraga, apa yang paling Anda sukai?" },
        { speaker: "B", jp: "サッカーが 一番 好きです。", rom: "Sakkaa ga ichiban suki desu.", en: "Sepak bola yang paling saya sukai." },
        { speaker: "A", jp: "そうですか。", rom: "Sou desu ka.", en: "Oh, begitu ya." }
      ]
    }
  ],
  13: [
    {
      title: "Renshuu C 1: Menanyakan Kado Impian",
      situation: "Menanyakan barang yang paling diinginkan sebagai hadiah ulang tahun",
      dialogue: [
        { speaker: "A", jp: "誕生日に 何が 一番 欲しいですか。", rom: "Tanjoubi ni nani ga ichiban hoshii desu ka.", en: "Saat ulang tahun barang apa yang paling diinginkan?" },
        { speaker: "B", jp: "新しい パソコンが 欲しいです。", rom: "Atarashii pasokon ga hoshii desu.", en: "Ingin laptop baru." },
        { speaker: "A", jp: "そうですか。いいですね。", rom: "Sou desu ka. Ii desu ne.", en: "Oh begitu. Keren/bagus sekali ya." }
      ]
    },
    {
      title: "Renshuu C 2: Rencana Kegiatan Akhir Pekan",
      situation: "Mengobrol tentang rencana aktivitas akhir pekan yang ingin dilaksanakan",
      dialogue: [
        { speaker: "A", jp: "今週の 土曜日に 何を したいですか。", rom: "Konshuu no doyoubi ni nani o shitai desu ka.", en: "Hari Sabtu minggu ini ingin melakukan apa?" },
        { speaker: "B", jp: "海へ 行って、泳ぎたいです。", rom: "Umi e itte, oyogitai esu.", en: "Pergi ke pantai dan ingin berenang." },
        { speaker: "A", jp: "いいですね。楽しそうですね。", rom: "Ii desu ne. Tanoshisou desu ne.", en: "Asyik ya. Kelihatannya menyenangkan." }
      ]
    },
    {
      title: "Renshuu C 3: Mengajak Pergi Makan Bersama",
      situation: "Mengajak pergi makan bersama karena perut sudah lapar",
      dialogue: [
        { speaker: "A", jp: "お腹が 空きましたね。何か 食べに行きませんか。", rom: "O-naka ga sukimashita ne. Nani ka tabeni ikimasen ka.", en: "Perut sudah lapar ya. Maukah pergi makan sesuatu?" },
        { speaker: "B", jp: "ええ。あの 駅の 近くの 店へ 行きましょう。", rom: "Ee. Ano eki no chikaku no mise e ikimashou.", en: "Iya. Mari kita pergi ke toko dekat stasiun itu." }
      ]
    }
  ],
  14: [
    {
      title: "Renshuu C 1: Meminta Tolong Diambilkan Barang (Garam)",
      situation: "Meminta tolong kepada rekan semeja untuk mengambilkan wadah garam",
      dialogue: [
        { speaker: "A", jp: "すみませんが、その 塩を 取って ください。", rom: "Sumimasen ga, sono shio o totte kudasai.", en: "Maaf/permisi, tolong ambilkan garam itu." },
        { speaker: "B", jp: "はい、どうぞ。", rom: "Hai, douzo.", en: "Ya, silakan." },
        { speaker: "A", jp: "ありがとうございます。", rom: "Arigatou gozaimasu.", en: "Terima kasih banyak." }
      ]
    },
    {
      title: "Renshuu C 2: Menawarkan Bantuan Membawa Barang",
      situation: "Menawarkan bantuan membawakan barang bawaan teman yang sangat berat",
      dialogue: [
        { speaker: "A", jp: "荷物が 重そうですね。手伝いましょうか。", rom: "Nimotsu ga omosou desu ne. Tetsudaimashou ka.", en: "Barang bawaannya kelihatan berat ya. Boleh saya bantu?" },
        { speaker: "B", jp: "ありがとうございます。お願いします。", rom: "Arigatou gozaimasu. Onegai shimasu.", en: "Terima kasih banyak. Tolong ya." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Lokasi Layanan (Loket Tiket)",
      situation: "Bertanya arah lokasi loket penjualan tiket di stasiun",
      dialogue: [
        { speaker: "A", jp: "すみません、切符売り場は どこですか。", rom: "Sumimasen, kippu uriba wa doko desu ka.", en: "Permisi, loket penjualan tiket ada di mana?" },
        { speaker: "B", jp: "あの 角を 右へ 曲がって ください。", rom: "Ano kado o migi e magatte kudasai.", en: "Tolong belok ke kanan di sudut jalan itu." },
        { speaker: "A", jp: "わかりました。ありがとう ございます。", rom: "Wakarimashita. Arigatou gozaimasu.", en: "Saya mengerti. Terima kasih banyak." }
      ]
    }
  ],
  15: [
    {
      title: "Renshuu C 1: Meminta Izin Mengambil Foto",
      situation: "Meminta izin mengambil gambar/foto di dalam area pameran",
      dialogue: [
        { speaker: "A", jp: "ここで 写真を 撮っても いいですか。", rom: "Koko de shashin o tottemo ii desu ka.", en: "Bolehkah saya mengambil foto di sini?" },
        { speaker: "B", jp: "すみません、写真は ちょっと ダメです。", rom: "Sumimasen, shashin wa chotto dame desu.", en: "Maaf, kalau foto tidak boleh." },
        { speaker: "A", jp: "そうですか。わかりました。", rom: "Sou desu ka. Wakarimashita.", en: "Oh begitu. Saya mengerti." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Pekerjaan Utama",
      situation: "Mengobrol tentang profesi dan produk yang dibuat oleh perusahaan lawan bicara",
      dialogue: [
        { speaker: "A", jp: "お仕事は 何を して いますか。", rom: "O-shigoto wa nani o shite imasu ka.", en: "Pekerjaan Anda melakukan apa?" },
        { speaker: "B", jp: "パワー電気で コンピューターの ソフトを 作って います。", rom: "Pawaa Denki de konpyuutaa no sofuto o tsukutte imasu.", en: "Membuat software komputer di perusahaan Power Denki." },
        { speaker: "A", jp: "そうですか。すごいですね。", rom: "Sou desu ka. Sugoi desu ne.", en: "Oh begitu. Hebat sekali ya." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Kegiatan Kuliah Teman",
      situation: "Bertanya tentang jurusan atau bidang yang ditekuni teman di universitas",
      dialogue: [
        { speaker: "A", jp: "カリナさんは 大学で 何を 勉強して いますか。", rom: "Karina-san wa daigaku de nani o benkyou shite imasu ka.", en: "Sdri. Karina sedang belajar apa di universitas?" },
        { speaker: "B", jp: "美術を 勉強して います。絵を 描いて いますよ。", rom: "Bijutsu o benkyou shite imasu. E o kaite imasu yo.", en: "Belajar seni rupa. Sedang melukis/menggambar lho." },
        { speaker: "A", jp: "面白そうですね。", rom: "Omoshirosou desu ne.", en: "Kelihatannya menarik sekali ya." }
      ]
    }
  ],
  16: [
    {
      title: "Renshuu C 1: Menanyakan Rencana Urutan Perjalanan",
      situation: "Menanyakan rencana urutan kegiatan saat berkunjung ke wilayah Asakusa",
      dialogue: [
        { speaker: "A", jp: "浅草へ 行って、何を しますか。", rom: "Asakusa e itte, nani o shimasu ka.", en: "Setelah sampai di Asakusa, apa yang akan dilakukan?" },
        { speaker: "B", jp: "古い お寺を 見て、それから 買い物します。", rom: "Furui o-tera o mite, sorekara kaimonoshimasu.", en: "Melihat kuil kuno, lalu berbelanja." },
        { speaker: "A", jp: "いいですね。私も 行きたいです。", rom: "Ii desu ne. Watashi mo ikitai desu.", en: "Asyik ya. Saya juga ingin ikut pergi." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Rute Transportasi ke Kampus",
      situation: "Bertanya bagaimana cara menuju ke Universitas Fuji menggunakan kendaraan umum",
      dialogue: [
        { speaker: "A", jp: "富士大学まで どうやって 行きますか。", rom: "Fuji Daigaku made douyatte ikimasu ka.", en: "Bagaimana cara pergi ke Universitas Fuji?" },
        { speaker: "B", jp: "駅から 2番の バスに 乗って、大学前で 降ります。", rom: "Eki kara ni-ban no basu ni notte, daigaku-mae de orimasu.", en: "Naik bus nomor 2 dari stasiun, lalu turun di halte depan universitas." },
        { speaker: "A", jp: "簡単ですね。ありがとうございます。", rom: "Kantan desu ne. Arigatou gozaimasu.", en: "Mudah sekali ya. Terima kasih banyak." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Ciri Fisik Teman yang Dicari",
      situation: "Bertanya ciri-ciri fisik seseorang yang ingin ditemui di tengah pesta",
      dialogue: [
        { speaker: "A", jp: "サントスさんは どの 人ですか。", rom: "Santosu-san wa dono hito desu ka.", en: "Sdr. Santos yang sebelah mana?" },
        { speaker: "B", jp: "あの 背が 高くて、髪が 短い 人ですよ。", rom: "Ano se ga takakute, kami ga mijikai hito desu yo.", en: "Orang yang badannya tinggi dan rambutnya pendek di sebelah sana itu lho." },
        { speaker: "A", jp: "あ、わかりました。ありがとうございます。", rom: "A, wakarimashita. Arigatou gozaimasu.", en: "Ah, saya tahu. Terima kasih banyak." }
      ]
    }
  ],
  17: [
    {
      title: "Renshuu C 1: Meminta untuk Tidak Mengambil Foto",
      situation: "Petugas museum meminta pengunjung untuk tidak mengambil foto artefak kuno",
      dialogue: [
        { speaker: "A", jp: "すみませんが、ここでは 写真を 撮らないで ください。", rom: "Sumimasen ga, koko dewa shashin o toranaide kudasai.", en: "Maaf/permisi, tolong jangan mengambil foto di sini." },
        { speaker: "B", jp: "あ、すみません。わかりました。", rom: "A, sumimasen. Wakarimashita.", en: "Ah, maaf. Saya mengerti." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Keharusan Minum Obat",
      situation: "Bertanya kepada dokter apakah harus meminum obat yang diberikan secara rutin",
      dialogue: [
        { speaker: "A", jp: "この 薬を 毎日 飲まなければ なりませんか。", rom: "Kono kusuri o maihichi nomanakereba narimasen ka.", en: "Apakah obat ini harus diminum setiap hari?" },
        { speaker: "B", jp: "はい。朝と 晩に 飲んで ください。", rom: "Hai. Asa to ban ni nonde kudasai.", en: "Ya. Tolong diminum pagi dan malam hari." },
        { speaker: "A", jp: "わかりました。", rom: "Wakarimashita.", en: "Baik, saya mengerti." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Keharusan Membawa Dokumen",
      situation: "Bertanya kepada guru apakah besok harus membawa paspor ke kelas",
      dialogue: [
        { speaker: "A", jp: "明日 パスポートを 持って 来なければ なりませんか。", rom: "Ashita pasupooto o motte konakereba narimasen ka.", en: "Apakah besok harus membawa paspor?" },
        { speaker: "B", jp: "いいえ、持って 来なくても いいですよ。", rom: "Iie, motte konakutemo ii desu yo.", en: "Tidak, tidak usah dibawa juga tidak apa-apa lho." },
        { speaker: "A", jp: "そうですか。安心しました。", rom: "Sou desu ka. Anshin shimashita.", en: "Oh begitu. Syukurlah (saya tenang)." }
      ]
    }
  ],
  18: [
    {
      title: "Renshuu C 1: Menanyakan Kemampuan Membaca Kanji",
      situation: "Bertanya tentang tingkat kemampuan membaca huruf kanji Jepang",
      dialogue: [
        { speaker: "A", jp: "ミラーさんは 漢字を 読む ことが できますか。", rom: "Miraa-san wa kanji o yomu koto ga dekimasu ka.", en: "Apakah Mr. Miller bisa membaca kanji?" },
        { speaker: "B", jp: "はい。少し 読む ことが できますよ。", rom: "Hai. Sukoshi yomu koto ga dekimasu yo.", en: "Ya. Saya bisa membaca sedikit lho." },
        { speaker: "A", jp: "すごいですね。", rom: "Sugoi desu ne.", en: "Hebat sekali ya." }
      ]
    },
    {
      title: "Renshuu C 2: Mengobrol tentang Hobi Utama",
      situation: "Mengobrol santai mengenai kegemaran mengoleksi atau mendengarkan lagu",
      dialogue: [
        { speaker: "A", jp: "趣味は 何ですか。", rom: "Shumi wa nan desu ka.", en: "Hobi Anda apa?" },
        { speaker: "B", jp: "古い レコードを 集める ことです。", rom: "Furui rekoodo o atsumeru koto desu.", en: "Mengumpulkan piringan hitam kuno." },
        { speaker: "A", jp: "面白そうですね。今度 聞かせて ください。", rom: "Omoshirosou desu ne. Kondo kikasete kudasai.", en: "Kelihatannya seru ya. Kapan-kapan tolong perdengarkan ke saya." }
      ]
    },
    {
      title: "Renshuu C 3: Kebiasaan Sebelum Tidur",
      situation: "Bertanya tentang kebiasaan membaca atau berdoa sebelum istirahat malam",
      dialogue: [
        { speaker: "A", jp: "寝る 前に 何を しますか。", rom: "Neru mae ni nani o shimasu ka.", en: "Sebelum tidur melakukan apa?" },
        { speaker: "B", jp: "本を 読んだり、音楽を 聞いたり します。", rom: "Hon o yondari, ongaku o kiitari shimasu.", en: "Membaca buku atau mendengarkan musik." },
        { speaker: "A", jp: "そうですか。いいですね。", rom: "Sou desu ka. Ii desu ne.", en: "Oh begitu. Bagus sekali ya." }
      ]
    }
  ],
  19: [
    {
      title: "Renshuu C 1: Pengalaman Mendaki Gunung Fuji",
      situation: "Bertanya apakah lawan bicara memiliki pengalaman mendaki gunung tertinggi di Jepang",
      dialogue: [
        { speaker: "A", jp: "富士山に 登った ことが ありますか。", rom: "Fuji-san ni nobotta koto ga arimasu ka.", en: "Apakah pernah mendaki Gunung Fuji?" },
        { speaker: "B", jp: "はい、一度 あります。とても 綺麗でしたよ。", rom: "Hai, ichido arimasu. Totemo kirei deshita yo.", en: "Ya, pernah sekali. Sangat indah lho." },
        { speaker: "A", jp: "いいですね。私も 登りたいです。", rom: "Ii desu ne. Watashi mo noboritai desu.", en: "Wah bagus ya. Saya juga ingin mendaki." }
      ]
    },
    {
      title: "Renshuu C 2: Aktivitas Variatif di Akhir Pekan",
      situation: "Menjelaskan berbagai aktivitas seperti olahraga atau rekreasi di kala libur",
      dialogue: [
        { speaker: "A", jp: "休みの 日は いつも 何を しますか。", rom: "Yasumi no hi wa itsumo nani o shimasu ka.", en: "Hari libur biasanya melakukan apa?" },
        { speaker: "B", jp: "テニスを したり、買い物に 行ったり します。", rom: "Tenisu o shitari, kaimono ni ittari shimasu.", en: "Bermain tenis atau pergi berbelanja." },
        { speaker: "A", jp: "そうですか。忙しいですね。", rom: "Sou desu ka. Isogashii desu ne.", en: "Oh begitu. Sibuk sekali ya." }
      ]
    },
    {
      title: "Renshuu C 3: Mengobrol tentang Perubahan Musim",
      situation: "Mengobrol tentang udara yang mulai terasa dingin karena menjelang musim dingin",
      dialogue: [
        { speaker: "A", jp: "最近 寒く なりましたね。", rom: "Saikin samuku narimashita ne.", en: "Akhir-akhir ini udara menjadi dingin ya." },
        { speaker: "B", jp: "ええ。もう すぐ 冬に なりますね。", rom: "Ee. Mou sugu fuyu ni narimasu ne.", en: "Iya. Sebentar lagi menjadi musim dingin ya." }
      ]
    }
  ],
  20: [
    {
      title: "Renshuu C 1: Percakapan Kasual tentang Makanan",
      situation: "Menawarkan makanan pencuci mulut kepada teman dekat menggunakan gaya bahasa santai",
      dialogue: [
        { speaker: "A", jp: "この ケーキ、食べる？", rom: "Kono keeki, taberu?", en: "Mau makan kue ini?" },
        { speaker: "B", jp: "うん、食べる。美味しそうだね。", rom: "Un, taberu. Oishisou dane.", en: "Iya, mau. Kelihatannya enak ya." },
        { speaker: "A", jp: "美味しい？", rom: "Oishii?", en: "Enak?" },
        { speaker: "B", jp: "うん、すごく 美味しいよ。ありがとう。", rom: "Un, sugoku oishii yo. Arigatou.", en: "Iya, enak banget lho. Makasih." }
      ]
    },
    {
      title: "Renshuu C 2: Percakapan Kasual Rencana Liburan",
      situation: "Menanyakan rencana jalan-jalan esok hari kepada sahabat menggunakan bentuk Plain",
      dialogue: [
        { speaker: "A", jp: "明日 どこか 行く？", rom: "Ashita doko ka iku?", en: "Besok mau pergi ke mana?" },
        { speaker: "B", jp: "ううん、どこも 行かない。家で ゆっくり 休むよ。", rom: "Uun, doko mo ikanai. Uchi de yukkuri yasumu yo.", en: "Nggak, nggak pergi ke mana-mana. Santai istirahat di rumah aja." },
        { speaker: "A", jp: "そう。じゃあ、またね。", rom: "Sou. Jaa, matane.", en: "Oh gitu. Ya udah, dah!" }
      ]
    },
    {
      title: "Renshuu C 3: Percakapan Kasual tentang Kesulitan Kanji",
      situation: "Mengobrol santai dengan teman sekelas tentang sulitnya belajar karakter kanji",
      dialogue: [
        { speaker: "A", jp: "日本の 漢字、わかる？", rom: "Nihon no kanji, wakaru?", en: "Ngerti kanji Jepang nggak?" },
        { speaker: "B", jp: "ううん、あまり わからない。難しいね。", rom: "Uun, amari wakaranai. Muzukashii ne.", en: "Nggak, nggak begitu ngerti. Susah ya." },
        { speaker: "A", jp: "そうだね。一緒に 勉強しようよ。", rom: "Sou dane. Issho ni benkyou shiyou yo.", en: "Iya ya. Belajar bareng yuk!" }
      ]
    }
  ],
  21: [
    {
      title: "Renshuu C 1: Opini Mengenai Tingginya Biaya Hidup",
      situation: "Menyampaikan dan mendiskusikan pendapat tentang harga barang di Jepang",
      dialogue: [
        { speaker: "A", jp: "日本は 物価が 高いと 思います。", rom: "Nihon wa bukka ga takai to omoimasu.", en: "Saya pikir harga barang/biaya hidup di Jepang tinggi." },
        { speaker: "B", jp: "私も そう 思います。本当に 大変ですね。", rom: "Watashi mo sou omoimasu. Hontou ni taihen desu ne.", en: "Saya juga berpikir begitu. Sungguh berat ya." }
      ]
    },
    {
      title: "Renshuu C 2: Menyampaikan Perkataan Rekan Kerja",
      situation: "Melaporkan pesan yang dikatakan oleh Mr. Miller kepada anggota tim kantor",
      dialogue: [
        { speaker: "A", jp: "ミラーさんは 何と 言いましたか。", rom: "Miraa-san wa nan to iimashita ka.", en: "Mr. Miller berkata apa?" },
        { speaker: "B", jp: "明日 東京へ 出張すると 言っていました。", rom: "Ashita Toukyou e shucchou suru to itte imashita.", en: "Dia berkata bahwa besok dia akan dinas ke Tokyo." },
        { speaker: "A", jp: "そうですか。わかりました。", rom: "Sou desu ka. Wakarimashita.", en: "Oh begitu. Saya mengerti." }
      ]
    },
    {
      title: "Renshuu C 3: Memprediksi Pemenang Pertandingan Bola",
      situation: "Bertanya opini teman mengenai tim mana yang akan memenangkan laga sepak bola nanti malam",
      dialogue: [
        { speaker: "A", jp: "今晩の サッカーは どちらが 勝つと 思いますか。", rom: "Konban no sakkaa wa dochira ga katsu to omoimasu ka.", en: "Sepak bola nanti malam menurutmu mana yang akan menang?" },
        { speaker: "B", jp: "ブラジルが 勝つと 思いますよ。強いですから。", rom: "Burajiru ga katsu to omoimasu yo. Tsuyoi desu kara.", en: "Saya pikir Brasil yang menang. Karena mereka kuat lho." }
      ]
    }
  ],
  22: [
    {
      title: "Renshuu C 1: Menanyakan Kepemilikan Kunci Mobil Baru",
      situation: "Menanyakan kunci apa yang diletakkan di atas meja, yang ternyata kunci mobil baru",
      dialogue: [
        { speaker: "A", jp: "これは 何の 鍵ですか。", rom: "Kore wa nan no kagi desu ka.", en: "Ini kunci apa?" },
        { speaker: "B", jp: "私が 先週 買った 車の 鍵ですよ。", rom: "Watashi ga senshuu katta kuruma no kagi desu yo.", en: "Ini kunci mobil yang saya beli minggu lalu lho." },
        { speaker: "A", jp: "わあ、いいですね。見せて ください。", rom: "Waa, ii desu ne. Misete kudasai.", en: "Wah, keren ya. Tolong perlihatkan ke saya." }
      ]
    },
    {
      title: "Renshuu C 2: Menanyakan Letak Rumah Baru Rekan Kerja",
      situation: "Mengobrol tentang rumah baru teman yang ternyata dekat dengan stasiun",
      dialogue: [
        { speaker: "A", jp: "ミラーさんが 住んで いる 家は どこに ありますか。", rom: "Miraa-san ga sunde iru uchi wa doko ni arimasu ka.", en: "Rumah tempat tinggal Mr. Miller ada di mana?" },
        { speaker: "B", jp: "駅の 近くの 静かな 町に あります。", rom: "Eki no chikaku no shizuka na machi ni arimasu.", en: "Ada di kota yang tenang dekat stasiun." },
        { speaker: "A", jp: "そうですか。一度 行きたいですね。", rom: "Sou desu ka. Ichido ikitai desu ne.", en: "Oh begitu. Sekali-kali ingin berkunjung ya." }
      ]
    },
    {
      title: "Renshuu C 3: Menanyakan Janji Kegiatan Hari Ini",
      situation: "Mengobrol tentang kesibukan hari ini yang terikat janji bertemu teman lama",
      dialogue: [
        { speaker: "A", jp: "今日 何か 予定が ありますか。", rom: "Kyou nani ka yotei ga arimasu ka.", en: "Apakah hari ini ada rencana/jadwal kegiatan?" },
        { speaker: "B", jp: "はい。高校の 友達と 晩ご飯を 食べる 約束が あります。", rom: "Hai. Koukou no tomodachi to bangohan o taberu yakusoku ga arimasu.", en: "Ya. Ada janji makan malam bersama teman masa SMA." },
        { speaker: "A", jp: "そうですか。楽しんで くださいね。", rom: "Sou desu ka. Tanoshinde kudasai ne.", en: "Oh begitu. Selamat bersenang-senang ya." }
      ]
    }
  ],
  23: [
    {
      title: "Renshuu C 1: Mengatasi Pusing Saat Belajar",
      situation: "Mengobrol tentang solusi yang biasa dilakukan teman ketika kepalanya terasa pusing",
      dialogue: [
        { speaker: "A", jp: "頭が 痛い 時、どう しますか。", rom: "Atama ga itai toki, dou shimasu ka.", en: "Saat kepala terasa pusing, apa yang dilakukan?" },
        { speaker: "B", jp: "薬を 飲んで、早く 寝る ように して います。", rom: "Kusuri o nonde, hayaku neru youni shite imasu.", en: "Minum obat, dan diusahakan tidur lebih cepat." },
        { speaker: "A", jp: "そうですか。お大事に。", rom: "Sou desu ka. O-daiji ni.", en: "Oh begitu. Semoga lekas sembuh." }
      ]
    },
    {
      title: "Renshuu C 2: Menjelaskan Cara Kerja Mesin Tiket",
      situation: "Menjelaskan cara menggunakan tombol mesin tiket otomatis di stasiun",
      dialogue: [
        { speaker: "A", jp: "すみません、切符の 買い方を 教えて ください。", rom: "Sumimasen, kippu no kaika-ta o oshiete kudasai.", en: "Permisi, tolong ajarkan cara membeli tiket." },
        { speaker: "B", jp: "この ボタンを 押すと、切符が 出ますよ。", rom: "Kono botan o osu to, kippu ga demasu yo.", en: "Jika menekan tombol ini, tiketnya akan keluar lho." },
        { speaker: "A", jp: "ああ、簡単ですね。ありがとうございました。", rom: "Aa, kantan desu ne. Arigatou gozaimashita.", en: "Ah, mudah sekali ya. Terima kasih banyak." }
      ]
    },
    {
      title: "Renshuu C 3: Petunjuk Arah Menuju Taman Kota",
      situation: "Memberikan petunjuk jalan ke taman kota yang posisinya lurus setelah jembatan",
      dialogue: [
        { speaker: "A", jp: "すみません、中央公園は どちらですか。", rom: "Sumimasen, Chuuou Kouen wa dochira desu ka.", en: "Permisi, Taman Pusat ada di sebelah mana?" },
        { speaker: "B", jp: "この 道を まっすぐ 行くと、右側に ありますよ。", rom: "Kono michi o massugu iku to, migigawa ni arimasu yo.", en: "Jika pergi lurus mengikuti jalan ini, letaknya ada di sebelah kanan lho." },
        { speaker: "A", jp: "わかりました。ありがとうございます。", rom: "Wakarimashita. Arigatou gozaimasu.", en: "Saya mengerti. Terima kasih banyak." }
      ]
    }
  ],
  24: [
    {
      title: "Renshuu C 1: Meminta Tolong Mengajarkan Software",
      situation: "Meminta tolong diajarkan cara mengoperasikan software baru oleh rekan kerja yang mahir",
      dialogue: [
        { speaker: "A", jp: "パソコンの 使い方を 教えて くれませんか。", rom: "Pasokon no tsukaikata o oshiete kuremasen ka.", en: "Maukah Anda mengajarkan saya cara menggunakan komputer/software?" },
        { speaker: "B", jp: "いいですよ。暇な 時、教えて あげます。", rom: "Ii desu yo. Hima na toki, oshiete agemasu.", en: "Boleh saja. Saat waktu senggang, saya akan ajarkan." },
        { speaker: "A", jp: "ありがとうございます。嬉しいです。", rom: "Arigatou gozaimasu. Ureshii desu.", en: "Terima kasih banyak. Senang sekali." }
      ]
    },
    {
      title: "Renshuu C 2: Menawarkan Pinjaman Payung Saat Hujan",
      situation: "Menawarkan payung miliknya untuk dipinjamkan kepada teman yang kehujanan",
      dialogue: [
        { speaker: "A", jp: "雨が 降って いますね。傘を 貸しましょうか。", rom: "Ame ga futte imasu ne. Kasa o kashimashou ka.", en: "Hujan turun ya. Boleh saya pinjamkan payung?" },
        { speaker: "B", jp: "すみません。貸して くれて ありがとうございます。", rom: "Sumimasen. Kashite kurete arigatou gozaimasu.", en: "Maaf merepotkan. Terima kasih banyak sudah meminjamkannya." }
      ]
    },
    {
      title: "Renshuu C 3: Menawarkan Tumpangan Mobil ke Stasiun",
      situation: "Menawarkan tumpangan mobil kepada teman yang terburu-buru pergi ke stasiun",
      dialogue: [
        { speaker: "A", jp: "駅まで 送りましょうか。車が ありますから。", rom: "Eki made okurimashou ka. Kuruma ga arimasu kara.", en: "Mau saya antarkan ke stasiun? Soalnya saya ada mobil." },
        { speaker: "B", jp: "すみません、お願いします。助かります。", rom: "Sumimasen, onegai shimasu. Tasukarimasu.", en: "Maaf merepotkan, tolong ya. Sangat membantu." }
      ]
    }
  ],
  25: [
    {
      title: "Renshuu C 1: Andai Memiliki Banyak Uang",
      situation: "Mengobrol santai membayangkan rencana jika memiliki banyak uang tabungan",
      dialogue: [
        { speaker: "A", jp: "お金が たくさん あったら、何が したいですか。", rom: "Okane ga takusan attara, nani ga shitai desu ka.", en: "Jika punya banyak uang, apa yang ingin dilakukan?" },
        { speaker: "B", jp: "大きな 家を 買って、世界旅行を したいです。", rom: "Ookina ie o katte, sekai-ryokou o shitai desu.", en: "Membeli rumah besar dan ingin jalan-jalan keliling dunia." },
        { speaker: "A", jp: "いいですね。夢の ようですね。", rom: "Ii desu ne. Yume no you desu ne.", en: "Bagus ya. Kelihatannya seperti mimpi ya." }
      ]
    },
    {
      title: "Renshuu C 2: Tindakan Andai Besok Turun Hujan",
      situation: "Mengobrol tentang rencana kegiatan esok hari seandainya cuaca hujan",
      dialogue: [
        { speaker: "A", jp: "明日 雨が 降ったら、ピクニックは 中止ですか。", rom: "Ashita ame ga futtara, pikunikku wa chuushi desu ka.", en: "Jika besok hujan turun, apakah pikniknya batal?" },
        { speaker: "B", jp: "はい。雨が 降ったら、家で ビデオを 見ましょう。", rom: "Hai. Ame ga futtara, uchi de bideo o mimashou.", en: "Ya. Jika hujan turun, mari kita menonton video di rumah saja." }
      ]
    },
    {
      title: "Renshuu C 3: Menolak Membeli Barang Murah",
      situation: "Menolak membeli jam tangan murah karena desainnya yang tidak disukai",
      dialogue: [
        { speaker: "A", jp: "この 時計は 安いですよ。買いませんか。", rom: "Kono tokei wa yasui desu yo. Kaimasen ka.", en: "Jam tangan ini murah lho. Maukah membelinya?" },
        { speaker: "B", jp: "いいえ、安くても 買いません。あまり 好きじゃないですから。", rom: "Iie, yasukutemo kaimasen. Amari suki janai desu kara.", en: "Tidak, meskipun murah saya tidak membelinya. Karena saya kurang suka." }
      ]
    }
  ]
};

// Apply Mini Kaiwa data to each chapter
data.forEach(chapter => {
  if (chapter.id > 0 && miniKaiwaData[chapter.id]) {
    chapter.mini_kaiwa = miniKaiwaData[chapter.id];
    console.log(`- Chapter ${chapter.id}: Added ${chapter.mini_kaiwa.length} Mini Kaiwa dialogues`);
  }
});

// Reconstruct the seedMNN.js file
const header = content.substring(0, content.indexOf(dataStartMarker));
const footer = content.substring(content.indexOf(dataEndMarker));
const newDataStr = JSON.stringify(data, null, 2);

const newContent = header + dataStartMarker + newDataStr + ';\n' + footer;

// Save updated seedMNN.js
fs.writeFileSync(seedPath, newContent, 'utf-8');
console.log(`\n✅ Successfully updated seedMNN.js (${newContent.length} bytes)`);

// Write individual JSON files
const chaptersDir = path.join(__dirname, '../src/data/chapters');
if (!fs.existsSync(chaptersDir)) {
  fs.mkdirSync(chaptersDir, { recursive: true });
}

data.forEach(chapter => {
  const chapterPath = path.join(chaptersDir, `chapter_${chapter.id}.json`);
  fs.writeFileSync(chapterPath, JSON.stringify(chapter, null, 2));
});
console.log(`✅ Successfully updated individual chapter JSON files`);

// Write bundled JS file
const fileContent = `// Auto-generated detailed MNN Data\nexport const MNN_DATA = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, '../src/data/chapter_data.js'), fileContent);
console.log(`✅ Successfully updated chapter_data.js`);
