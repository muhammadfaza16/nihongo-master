import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the existing seedMNN.js as text
const seedPath = path.join(__dirname, 'seedMNN.js');
if (!fs.existsSync(seedPath)) {
  console.error("Error: seedMNN.js not found!");
  process.exit(1);
}

const content = fs.readFileSync(seedPath, 'utf-8');

// Extract the data array string between "const data = [" and the closing "];"
const dataStartMarker = 'const data = ';
const dataEndMarker = '\nconst chaptersDir';
const dataStart = content.indexOf(dataStartMarker) + dataStartMarker.length;
const dataEnd = content.indexOf(dataEndMarker);
const dataStr = content.substring(dataStart, dataEnd).trim();
const cleanDataStr = dataStr.endsWith(';') ? dataStr.slice(0, -1) : dataStr;

// Parse the data array using eval
const data = eval('(' + cleanDataStr + ')');
console.log(`Loaded ${data.length} chapters from seedMNN.js for Reibun injection.`);

// Define Reibun data for chapters 1-25 (original textbook content translated to Indonesian)
const reibunData = {
  1: [
    {
      id: "r1-1",
      jp: "あなたは マイク・ミラーさんですか。... はい、わたしは マイク・ミラーです。",
      rom: "Anata wa Maiku Miraa-san desu ka? ... Hai, watashi wa Maiku Miraa desu.",
      en: "Apakah Anda Sdr. Mike Miller? ... Ya, saya Mike Miller."
    },
    {
      id: "r1-2",
      jp: "ミラーさんは 学生ですか。... いいえ、わたしは 学生じゃありません。会社員です。",
      rom: "Miraa-san wa gakusei desu ka? ... Iie, watashi wa gakusei ja arimasen. Kaishain desu.",
      en: "Apakah Sdr. Miller mahasiswa? ... Bukan, saya bukan mahasiswa. Saya karyawan perusahaan."
    },
    {
      id: "r1-3",
      jp: "ワンさんは 先生ですか。... いいえ、先生じゃありません。学生です。",
      rom: "Wan-san wa sensei desu ka? ... Iie, sensei ja arimasen. Gakusei desu.",
      en: "Apakah Sdr. Wang guru? ... Bukan, bukan guru. Dia mahasiswa."
    },
    {
      id: "r1-4",
      jp: "あの人は だれですか。... サントスさんです。ブラジルエアーの 社員です。",
      rom: "Ano hito wa dare desu ka? ... Santosu-san desu. Burajiru Eaa no shain desu.",
      en: "Siapakah orang itu? ... Tuan Santos. Dia karyawan Brazil Air."
    },
    {
      id: "r1-5",
      jp: "テレサちゃんは 何歳ですか。... ９歳です。",
      rom: "Teresa-chan wa nansai desu ka? ... Kyuusai desu.",
      en: "Dek Teresa umur berapa? ... 9 tahun."
    }
  ],
  2: [
    {
      id: "r2-1",
      jp: "これは 辞書ですか。... はい、そうです。",
      rom: "Kore wa jisho desu ka? ... Hai, sou desu.",
      en: "Apakah ini kamus? ... Ya, benar."
    },
    {
      id: "r2-2",
      jp: "それは シャープペンシルですか。... いいえ、ボールペンです。",
      rom: "Sore wa shaapupenshiru desu ka? ... Iie, boorupen desu.",
      en: "Apakah itu pensil mekanik? ... Bukan, ini pulpen."
    },
    {
      id: "r2-3",
      jp: "あれは だれの 傘ですか。... 佐藤さんの 傘です。",
      rom: "Are wa dare no kasa desu ka? ... Satou-san no kasa desu.",
      en: "Itu payung siapa? ... Payung Ibu Sato."
    },
    {
      id: "r2-4",
      jp: "この 傘は あなたの ですか。... いいえ、わたしのじゃ ありません。",
      rom: "Kono kasa wa anata no desu ka? ... Iie, watashi no ja arimasen.",
      en: "Apakah payung ini milik Anda? ... Bukan, bukan milik saya."
    },
    {
      id: "r2-5",
      jp: "この コップは あなたの ですか。... はい、わたしのです。",
      rom: "Kono koppu wa anata no desu ka? ... Hai, watashi no desu.",
      en: "Apakah gelas ini milik Anda? ... Ya, milik saya."
    }
  ],
  3: [
    {
      id: "r3-1",
      jp: "ここは 食堂ですか。... いいえ、会議室です。",
      rom: "Koko wa shokudou desu ka? ... Iie, kaigishitsu desu.",
      en: "Apakah di sini kantin? ... Bukan, di sini ruang rapat."
    },
    {
      id: "r3-2",
      jp: "お手洗いは どこですか。... あそこです。",
      rom: "Oterai wa doko desu ka? ... Asoko desu.",
      en: "Toiletnya di mana? ... Di sebelah sana."
    },
    {
      id: "r3-3",
      jp: "山田さんは どこですか。... 事務所です。",
      rom: "Yamada-san wa doko desu ka? ... Di kantor."
    },
    {
      id: "r3-4",
      jp: "エレベーターは どちらですか。... あちらです。",
      rom: "Erebeetaa wa dochira desu ka? ... Achira desu.",
      en: "Liftnya di sebelah mana? ... Di sebelah sana."
    },
    {
      id: "r3-5",
      jp: "それは どこの 国の ワインですか。... フランスの ワインです。",
      rom: "Sore wa doko no kuni no wain desu ka? ... Furanosu no wain desu.",
      en: "Itu anggur (wine) buatan negara mana? ... Anggur buatan Prancis."
    }
  ],
  4: [
    {
      id: "r4-1",
      jp: "今 何時ですか。... ２時１０分です。",
      rom: "Ima nanji desu ka? ... Niji juppun desu.",
      en: "Sekarang jam berapa? ... Jam 2 lewat 10 menit."
    },
    {
      id: "r4-2",
      jp: "ニューヨークは 今 何時ですか。... 午前４時です。",
      rom: "Nyuuyooku wa ima nanji desu ka? ... Gozen yoji desu.",
      en: "New York sekarang jam berapa? ... Jam 4 pagi."
    },
    {
      id: "r4-3",
      jp: "試験は 何曜日に ありますか。... 火曜日に あります。",
      rom: "Shiken wa nanyoubi ni arimasu ka? ... Kayoubi ni arimasu.",
      en: "Ujiannya hari apa? ... Hari Selasa."
    },
    {
      id: "r4-4",
      jp: "銀行は 何時から 何時まで ですか。... ９時から ３時まで です。",
      rom: "Ginkou wa naji kara nanji made desu ka? ... Kujihana kara sanji made desu.",
      en: "Bank buka dari jam berapa sampai jam berapa? ... Dari jam 9 sampai jam 3."
    },
    {
      id: "r4-5",
      jp: "毎日 何時に 起きますか。... ６時に 起きます。",
      rom: "Mainichi nanji ni okimasu ka? ... Rokuji ni okimasu.",
      en: "Setiap hari bangun jam berapa? ... Bangun jam 6."
    }
  ],
  5: [
    {
      id: "r5-1",
      jp: "明日 どこへ 行きますか。... 奈良へ 行きます。",
      rom: "Ashita doko e ikimasu ka? ... Nara e ikimasu.",
      en: "Besok pergi ke mana? ... Pergi ke Nara."
    },
    {
      id: "r5-2",
      jp: "日曜日 どこへ 行きましたか。... どこ[へ]も 行きませんでした。",
      rom: "Nichiyoubi doko e ikimashita ka? ... Doko [e] mo ikimasen deshita.",
      en: "Hari Minggu kemarin pergi ke mana? ... Tidak pergi ke mana-mana."
    },
    {
      id: "r5-3",
      jp: "何で 東京へ 行きますか。... 新幹線で 行きます。",
      rom: "Nande Toukyou e ikimasu ka? ... Shinkansen de ikimasu.",
      en: "Pergi ke Tokyo naik apa? ... Naik Shinkansen."
    },
    {
      id: "r5-4",
      jp: "だれと 東京へ 行きますか。... 家族と 行きます。",
      rom: "Dare to Toukyou e ikimasu ka? ... Kazoku to ikimasu.",
      en: "Pergi ke Tokyo dengan siapa? ... Dengan keluarga."
    },
    {
      id: "r5-5",
      jp: "いつ 日本へ 来ましたか。... ３月２５日に 来ました。",
      rom: "Itsu Nihon e kimashita ka? ... Sangatsu nijyuugonichi ni kimashita.",
      en: "Kapan datang ke Jepang? ... Datang tanggal 25 Maret."
    }
  ],
  6: [
    {
      id: "r6-1",
      jp: "お酒を 飲みますか。... いいえ、飲みません。",
      rom: "Osake o nomimasu ka? ... Iie, nomimasen.",
      en: "Apakah Anda minum sake? ... Tidak, saya tidak minum."
    },
    {
      id: "r6-2",
      jp: "毎朝 何を 食べますか。... パンと 卵を 食べます。",
      rom: "Maiasa nani o tabemasu ka? ... Pan to tamago o tabemasu.",
      en: "Setiap pagi makan apa? ... Makan roti dan telur."
    },
    {
      id: "r6-3",
      jp: "今朝 何を 食べましたか。... 何も 食べませんでした。",
      rom: "Kesa nani o tabemashita ka? ... Nani mo tabemasen deshita.",
      en: "Tadi pagi makan apa? ... Tidak makan apa-apa."
    },
    {
      id: "r6-4",
      jp: "土曜日 何を しましたか。... 日本語を 勉強しました。それから 映画を 見ました。",
      rom: "Doyoubi nani o shimashita ka? ... Nihongo o benkyou shimashita. Sorekara eiga o mimashita.",
      en: "Hari Sabtu kemarin melakukan apa? ... Belajar bahasa Jepang. Setelah itu menonton film."
    },
    {
      id: "r6-5",
      jp: "日曜日 何を しましたか。... 友達と テニスを しました。",
      rom: "Nichiyoubi nani o shimashita ka? ... Tomodachi to tenisu o shimashita.",
      en: "Hari Minggu kemarin melakukan apa? ... Bermain tenis dengan teman."
    }
  ],
  7: [
    {
      id: "r7-1",
      jp: "日本語を テレビで 勉強しましたか。... いいえ、ラジオで 勉強しました。",
      rom: "Nihongo o terebi de benkyou shimashita ka? ... Iie, rajio de benkyou shimashita.",
      en: "Apakah Anda belajar bahasa Jepang lewat TV? ... Bukan, saya belajar lewat radio."
    },
    {
      id: "r7-2",
      jp: "日本語で レポートを 書きますか。... いいえ、英語で 書きます。",
      rom: "Nihongo de repooto o kakimasu ka? ... Iie, eigo de kakimasu.",
      en: "Apakah Anda menulis laporan dalam bahasa Jepang? ... Tidak, saya menulis dalam bahasa Inggris."
    },
    {
      id: "r7-3",
      jp: "「Thank you」は 日本語で 何ですか。... 「ありがとう」です。",
      rom: "\"Thank you\" wa Nihongo de nan desu ka? ... \"Arigatou\" desu.",
      en: "Apa bahasa Jepangnya \"Thank you\"? ... \"Arigatou\"."
    },
    {
      id: "r7-4",
      jp: "だれに 年賀状を 書きますか。... 先生と 友達に 書きます。",
      rom: "Dare ni nengajou o kakimasu ka? ... Sensei to tomodachi ni kakimasu.",
      en: "Kepada siapa Anda menulis kartu tahun baru? ... Kepada guru dan teman."
    },
    {
      id: "r7-5",
      jp: "もう お昼ご飯を 食べましたか。... はい、もう 食べました。",
      rom: "Mou ohirugohan o tabemashita ka? ... Hai, mou tabemashita.",
      en: "Apakah Anda sudah makan siang? ... Ya, sudah makan."
    }
  ],
  8: [
    {
      id: "r8-1",
      jp: "桜は きれいですか。... はい、とても きれいです。",
      rom: "Sakura wa kirei desu ka? ... Hai, totemo kirei desu.",
      en: "Apakah sakura indah? ... Ya, sangat indah."
    },
    {
      id: "r8-2",
      jp: "富士山は 高いですか。... はい、高いです。",
      rom: "Fujisan wa takai desu ka? ... Hai, takai desu.",
      en: "Apakah Gunung Fuji tinggi? ... Ya, tinggi."
    },
    {
      id: "r8-3",
      jp: "日本の 食べ物は おいしいですか。... はい、おいしいですが、高いです。",
      rom: "Nihon no tabemono wa oishii desu ka? ... Hai, oishii desu ga, takai desu.",
      en: "Apakah makanan Jepang enak? ... Ya, enak, tapi mahal."
    },
    {
      id: "r8-4",
      jp: "その 辞書は いいですか。... いいえ、あまり よくありません。",
      rom: "Sono jisho wa ii desu ka? ... Iie, amari yoku arimasen.",
      en: "Apakah kamus itu bagus? ... Tidak, tidak begitu bagus."
    },
    {
      id: "r8-5",
      jp: "日本の 生活に 慣れましたか。... はい、だいたい 慣れました。",
      rom: "Nihon no seikatsu ni naremashita ka? ... Hai, daitai naremashita.",
      en: "Apakah sudah terbiasa dengan kehidupan di Jepang? ... Ya, sebagian besar sudah terbiasa."
    }
  ],
  9: [
    {
      id: "r9-1",
      jp: "お酒が 好きですか。... いいえ、好きじゃありません。",
      rom: "Osake ga suki desu ka? ... Iie, suki ja arimasen.",
      en: "Apakah Anda suka sake? ... Tidak, saya tidak suka."
    },
    {
      id: "r9-2",
      jp: "どんな スポーツが 好きですか。... 野球が 好きです。",
      rom: "Donna supootsu ga suki desu ka? ... Yakyuu ga suki desu.",
      en: "Olahraga apa yang Anda sukai? ... Saya suka bisbol."
    },
    {
      id: "r9-3",
      jp: "英語が よく 分かりますか。... いいえ、よく 分かりません。",
      rom: "Eigo ga yoku wakarimasu ka? ... Iie, yoku wakarimasen.",
      en: "Apakah Anda mengerti bahasa Inggris dengan baik? ... Tidak, saya tidak begitu mengerti."
    },
    {
      id: "r9-4",
      jp: "漢字が 分かりますか。... はい、だいたい 分かります。",
      rom: "Kanji ga wakarimasu ka? ... Hai, daitai wakarimasu.",
      en: "Apakah Anda paham Kanji? ... Ya, kira-kira paham."
    },
    {
      id: "r9-5",
      jp: "用事が ありますから、早く 帰ります。... そうですか。",
      rom: "Youji ga arimasu kara, hayaku kaerimasu. ... Sou desu ka.",
      en: "Karena ada urusan, saya pulang cepat. ... Oh, begitu ya."
    }
  ],
  10: [
    {
      id: "r10-1",
      jp: "あそこに 男の人が いますね。あの人は だれですか。... IMCの 松本さんです。",
      rom: "Asoko ni otoko no hito ga imasu ne. Ano hito wa dare desu ka? ... IMC no Matsumoto-san desu.",
      en: "Di sana ada laki-laki ya. Siapakah orang itu? ... Tuan Matsumoto dari IMC."
    },
    {
      id: "r10-2",
      jp: "あなたの 部屋に 何が ありますか。... 机と ベッドがあります。",
      rom: "Anata no heya ni nani ga arimasu ka? ... Tsukue to beddo ga arimasu.",
      en: "Di kamar Anda ada apa? ... Ada meja dan tempat tidur."
    },
    {
      id: "r10-3",
      jp: "庭に だれが いますか。... だれも いません。猫が います。",
      rom: "Niwa ni dare ga imasu ka? ... Dare mo imasen. Neko ga imasu.",
      en: "Di halaman ada siapa? ... Tidak ada siapa-siapa. Ada kucing."
    },
    {
      id: "r10-4",
      jp: "箱の 中に 何が ありますか。... 古い 手紙や 写真などが あります。",
      rom: "Hako no naka ni nani ga arimasu ka? ... Furui tegami ya shashin nado ga arimasu.",
      en: "Di dalam kotak ada apa? ... Ada surat lama, foto, dan lain-lain."
    },
    {
      id: "r10-5",
      jp: "郵便局は どこに ありますか。... 駅の 近くに あります。銀行の 隣です。",
      rom: "Yuubinkyoku wa doko ni arimasu ka? ... Eki no chikaku ni arimasu. Ginkou no tonari desu.",
      en: "Kantor pos ada di mana? ... Ada di dekat stasiun. Di sebelah bank."
    }
  ],
  11: [
    {
      id: "r11-1",
      jp: "りんごを いくつ 買いましたか。... ４つ 買いました。",
      rom: "Ringo o ikutsu kaimashita ka? ... Yotsu kaimashita.",
      en: "Membeli buah apel berapa buah? ... Membeli 4 buah."
    },
    {
      id: "r11-2",
      jp: "８０円の 切手を 何枚 買いましたか。... ５枚 買いました。",
      rom: "Hachijuyouen no kitte o nanmai kaimashita ka? ... Gomai kaimashita.",
      en: "Membeli perangko seharga 80 yen berapa lembar? ... Membeli 5 lembar."
    },
    {
      id: "r11-3",
      jp: "富士大学に 外国人の 先生が いますか。... はい、３人 います。みんな アメリカ人です。",
      rom: "Fuji daigaku ni gaikokujin no sensei ga imasu ka? ... Hai, sannin imasu. Minna Amerika-jin desu.",
      en: "Apakah di Universitas Fuji ada dosen asing? ... Ya, ada 3 orang. Semuanya orang Amerika."
    },
    {
      id: "r11-4",
      jp: "国で 何年 英語を 勉強しましたか。... ３年 勉強しました。",
      rom: "Kuni de nannen eigo o benkyou shimashita ka? ... Sannen benkyou shimashita.",
      en: "Belajar bahasa Inggris di negara asal berapa tahun? ... Belajar selama 3 tahun."
    },
    {
      id: "r11-5",
      jp: "どのくらい 日本語を 勉強しましたか。... ３か月 勉強しました。",
      rom: "Donokurai Nihongo o benkyou shimashita ka? ... Sankagetsu benkyou shimashita.",
      en: "Sudah belajar bahasa Jepang kira-kira berapa lama? ... Belajar selama 3 bulan."
    }
  ],
  12: [
    {
      id: "r12-1",
      jp: "昨日は 雨でしたか。... いいえ、雨じゃありませんでした。いい 天気でした。",
      rom: "Kinou wa ame deshita ka? ... Iie, ame ja arimasen deshita. Ii tenki deshita.",
      en: "Apakah kemarin hujan? ... Tidak, tidak hujan. Cuacanya cerah."
    },
    {
      id: "r12-2",
      jp: "旅行は 楽しかったですか。... はい、とても 楽しかったです。",
      rom: "Ryokou wa tanoshikatta desu ka? ... Hai, totemo tanoshikatta desu.",
      en: "Apakah perjalanannya menyenangkan? ... Ya, sangat menyenangkan."
    },
    {
      id: "r12-3",
      jp: "天気は よかったですか。... いいえ、あまり よくありませんでした。",
      rom: "Tenki wa yokatta desu ka? ... Iie, amari yoku arimasen deshita.",
      en: "Apakah cuacanya bagus? ... Tidak, tidak begitu bagus."
    },
    {
      id: "r12-4",
      jp: "北海道は 九州より 寒いですか。... はい、ずっと 寒いです。",
      rom: "Hokkaidoo wa Kyuushuu yori samui desu ka? ... Hai, zutto samui desu.",
      en: "Apakah Hokkaido lebih dingin daripada Kyushu? ... Ya, jauh lebih dingin."
    },
    {
      id: "r12-5",
      jp: "どちらが 好きですか。... ビールと 日本酒と どちらが 好きですか。... ビールのほうが 好きです。",
      rom: "Dochira ga suki desu ka? ... Biiru to nihonshu to dochira ga suki desu ka? ... Biiru no hou ga suki desu.",
      en: "Yang mana yang Anda sukai? ... Antara bir dan sake Jepang, mana yang Anda sukai? ... Saya lebih suka bir."
    }
  ],
  13: [
    {
      id: "r13-1",
      jp: "今 何が 一番 欲しいですか。... 車が 欲しいです。",
      rom: "Ima nani ga ichiban hoshii desu ka? ... Kuruma ga hoshii desu.",
      en: "Sekarang apa yang paling Anda inginkan? ... Saya ingin mobil."
    },
    {
      id: "r13-2",
      jp: "パソコンが 欲しいですか。... いいえ、欲しくありません。",
      rom: "Pasokon ga hoshii desu ka? ... Iie, hoshiku arimasen.",
      en: "Apakah Anda menginginkan komputer? ... Tidak, saya tidak menginginkannya."
    },
    {
      id: "r13-3",
      jp: "週末 何を したいですか。... 映画を 見たいです。",
      rom: "Shuumatsu nani o shitai desu ka? ... Eiga o mitai desu.",
      en: "Akhir pekan ini ingin melakukan apa? ... Ingin menonton film."
    },
    {
      id: "r13-4",
      jp: "どこへ 行きたいですか。... 京都へ 行きたいです。お寺を 見たいです。",
      rom: "Doko e ikitai desu ka? ... Kyo-to e ikitai desu. Otera o mitai desu.",
      en: "Ingin pergi ke mana? ... Ingin pergi ke Kyoto. Saya ingin melihat kuil Buddha."
    },
    {
      id: "r13-5",
      jp: "暑いですから、何か 飲みたいですね。... ええ、冷たい ビールを 飲みたいですね。",
      rom: "Atsui desu kara, nanika nomitai desu ne. ... Ee, tsumetai biiru o nomitai desu ne.",
      en: "Karena panas, kita ingin minum sesuatu ya. ... Benar, kita ingin minum bir dingin ya."
    }
  ],
  14: [
    {
      id: "r14-1",
      jp: "ちょっと 待ってください。... はい、分かりました。",
      rom: "Chotto matte kudasai. ... Hai, wakarimashita.",
      en: "Tolong tunggu sebentar. ... Ya, baiklah."
    },
    {
      id: "r14-2",
      jp: "荷物を 持ちましょうか。... すみません。お願いします。",
      rom: "Nimotsu o mochimashou ka? ... Sumimasen. Onegaishimasu.",
      en: "Bolehkah saya bawakan barang Anda? ... Permisi (Maaf merepotkan). Tolong ya."
    },
    {
      id: "r14-3",
      jp: "塩を 取ってください。... はい、どうぞ。",
      rom: "Shio o totte kudasai. ... Hai, douzo.",
      en: "Tolong ambilkan garam. ... Ya, ini silakan."
    },
    {
      id: "r14-4",
      jp: "今 雨が 降っていますか。... いいえ、降っていません。",
      rom: "Ima ame ga futte imasu ka? ... Iie, futte imasen.",
      en: "Apakah sekarang sedang turun hujan? ... Tidak, tidak sedang hujan."
    },
    {
      id: "r14-5",
      jp: "タクsiを 呼びましょうか。... いいえ、結構です。",
      rom: "Takushii o yobimashou ka? ... Iie, kekkou desu.",
      en: "Bolehkah saya panggilkan taksi? ... Tidak, terima kasih (sudah cukup)."
    }
  ],
  15: [
    {
      id: "r15-1",
      jp: "写真を 撮っても いいですか。... はい、いいですよ。",
      rom: "Shashin o totte mo ii desu ka? ... Hai, ii desu yo.",
      en: "Bolehkah saya mengambil foto? ... Ya, boleh."
    },
    {
      id: "r15-2",
      jp: "この 辞書を 借りても いいですか。... いいえ、使っていますから、だめです。",
      rom: "Kono jisho o karite mo ii desu ka? ... Iie, tsukatte imasu kara, dame desu.",
      en: "Bolehkah saya meminjam kamus ini? ... Jangan, karena sedang saya pakai."
    },
    {
      id: "r15-3",
      jp: "ここで タバコを 吸ってはいけません。... 分かりました。すみません。",
      rom: "Koko de tabako o sutte wa ikemasen. ... Wakarimashita. Sumimasen.",
      en: "Tidak boleh merokok di sini. ... Baik, saya paham. Maaf."
    },
    {
      id: "r15-4",
      jp: "サントスさんは どこに 住んでいますか。... 神戸に 住んでいます。",
      rom: "Santosu-san wa doko ni sunde imasu ka? ... Koube ni sunde imasu.",
      en: "Tuan Santos tinggal di mana? ... Tinggal di Kobe."
    },
    {
      id: "r15-5",
      jp: "お仕事は 何ですか。... 教師です。富士大学で 教えています。",
      rom: "Oshigoto wa nan desu ka? ... Kyoushi desu. Fuji daigaku de oshiete imasu.",
      en: "Pekerjaan Anda apa? ... Saya guru. Mengajar di Universitas Fuji."
    }
  ],
  16: [
    {
      id: "r16-1",
      jp: "朝 何を しますか。... ジョギングをして、シャワーを 浴びて、会社へ 行きます。",
      rom: "Asa nani o shimasu ka? ... Jogingu o shite, shawaa o abite, kaisha e ikimasu.",
      en: "Pagi hari melakukan apa saja? ... Jogging, mandi shower, lalu pergi ke kantor."
    },
    {
      id: "r16-2",
      jp: "神戸へ 行って、何を しましたか。... 映画を 見て、おいしい 肉を 食べました。",
      rom: "Koube e itte, nani o shimashita ka? ... Eiga o mite, oishii niku o tabemashita.",
      en: "Pergi ke Kobe dan melakukan apa? ... Menonton film, lalu makan daging yang lezat."
    },
    {
      id: "r16-3",
      jp: "大学まで どうやって 行きますか。... 京都駅から バスに 乗って、大学前で 降ります。",
      rom: "Daigaku made douyatte ikimasu ka? ... Kyo-to eki kara basu ni notte, daigakumae de orimasu.",
      en: "Bagaimana caranya pergi sampai ke universitas? ... Naik bus dari stasiun Kyoto, lalu turun di depan universitas."
    },
    {
      id: "r16-4",
      jp: "サントスさんは どの 人ですか。... あの 背が 高くて、髪が 黒い 人です。",
      rom: "Santosu-san wa dono hito desu ka? ... Ano se ga takakute, kami ga kuroi hito desu.",
      en: "Tuan Santos orang yang mana? ... Orang yang tinggi dan berambut hitam itu."
    },
    {
      id: "r16-5",
      jp: "奈良は どんな 町ですか。... 静かで、きれいな 町です。",
      rom: "Nara wa donna machi desu ka? ... Shizuka de, kirei na machi desu.",
      en: "Nara kota yang bagaimana? ... Kota yang sunyi dan indah."
    }
  ],
  17: [
    {
      id: "r17-1",
      jp: "薬を 飲まなければなりません。... はい、分かりました。",
      rom: "Kusuri o nomanakereba narimasen. ... Hai, wakarimashita.",
      en: "Harus minum obat. ... Ya, baiklah."
    },
    {
      id: "r17-2",
      jp: "傘を 忘れないでください。... はい、気を つけます。",
      rom: "Kasa o wasurenaide kudasai. ... Hai, ki o tsukemasu.",
      en: "Tolong jangan lupakan payung Anda. ... Ya, saya akan berhati-hati."
    },
    {
      id: "r17-3",
      jp: "土曜日も 働かなければなりませんか。... いいえ、働かなくても いいです。",
      rom: "Doyoubi mo hatarakanakereba narimasen ka? ... Iie, hatarakanakute mo ii desu.",
      en: "Apakah hari Sabtu juga harus bekerja? ... Tidak, tidak bekerja juga tidak apa-apa (tidak wajib)."
    },
    {
      id: "r17-4",
      jp: "レポートは いつまでに出さなければなりませんか。... 金曜日までに 出してください。",
      rom: "Repooto wa itsu made ni dasanakereba narimasen ka? ... Kinyoubi made ni dashite kudasai.",
      en: "Laporan harus dikumpulkan paling lambat kapan? ... Tolong kumpulkan paling lambat hari Jumat."
    },
    {
      id: "r17-5",
      jp: "靴を 脱がなくても いいですか。... いいえ、脱いでください。",
      rom: "Kutsu o nuganakute mo ii desu ka? ... Iie, nuide kudasai.",
      en: "Apakah tidak usah melepas sepatu tidak apa-apa? ... Tidak, tolong lepas sepatunya."
    }
  ],
  18: [
    {
      id: "r18-1",
      jp: "日本語を 話す ことが できますか。... はい、少し 話す ことが できます。",
      rom: "Nihongo o hanasu koto ga dekimasu ka? ... Hai, sukoshi hanasu koto ga dekimasu.",
      en: "Apakah Anda bisa berbicara bahasa Jepang? ... Ya, bisa berbicara sedikit."
    },
    {
      id: "r18-2",
      jp: "趣味は 何ですか。... 音楽を 聴く ことです。",
      rom: "Shumi wa nan desu ka? ... Ongaku o kiku koto desu.",
      en: "Hobi Anda apa? ... Mendengarkan musik."
    },
    {
      id: "r18-3",
      jp: "寝る 前に、何を しますか。... 本を 読んだり、日記を 書いたりします。",
      rom: "Neru mae ni, nani o shimasu ka? ... Hon o yondari, nikki o kaitari shimasu.",
      en: "Sebelum tidur, melakukan apa? ... Membaca buku, menulis buku harian, dan sebagainya."
    },
    {
      id: "r18-4",
      jp: "いつ 日本語を 勉強しますか。... 寝る 前に 勉強します。",
      rom: "Itsu Nihongo o benkyou shimasu ka? ... Neru mae ni benkyou shimasu.",
      en: "Kapan Anda belajar bahasa Jepang? ... Belajar sebelum tidur."
    },
    {
      id: "r18-5",
      jp: "カードで 払う ことが できますか。... はい、できますよ。",
      rom: "Kaado de harau koto ga dekimasu ka? ... Hai, dekimasu yo.",
      en: "Apakah bisa membayar menggunakan kartu? ... Ya, bisa."
    }
  ],
  19: [
    {
      id: "r19-1",
      jp: "日本料理を 食べた ことが ありますか。... はい、一度 あります。",
      rom: "Nihonryouri o tabeta koto ga arimasu ka? ... Hai, ichido arimasu.",
      en: "Apakah pernah makan masakan Jepang? ... Ya, pernah satu kali."
    },
    {
      id: "r19-2",
      jp: "日曜日は 何を しますか。... テニスを したり、買い物を したりします。",
      rom: "Nichiyoubi wa nani o shimasu ka? ... Tenisu o shitari, kaimono o shitari shimasu.",
      en: "Hari Minggu melakukan apa? ... Bermain tenis, berbelanja, dan sebagainya."
    },
    {
      id: "r19-3",
      jp: "だんだん 寒く なりますね。... そうですね。もう １１月ですから。",
      rom: "Dandan samuku narimasu ne. ... Sou desu ne. Mou juuichigatsu desu kara.",
      en: "Lama-kelamaan menjadi dingin ya. ... Benar ya. Karena sudah bulan November."
    },
    {
      id: "r19-4",
      jp: "相撲を 見た ことが ありますか。... いいえ、一度も ありません。",
      rom: "Sumou o mita koto ga arimasu ka? ... Iie, ichido mo arimasen.",
      en: "Apakah pernah menonton Sumo? ... Tidak, belum pernah sekali pun."
    },
    {
      id: "r19-5",
      jp: "体調は どうですか。... おかげさまで よく なりました。",
      rom: "Taichou wa dou desu ka? ... Okagesama de yoku narimashita.",
      en: "Bagaimana kondisi badan Anda? ... Syukurlah, sudah membaik."
    }
  ],
  20: [
    {
      id: "r20-1",
      jp: "辞書、持っている？... うん、持っているよ。",
      rom: "Jisho, motte iru? ... Un, motte iru yo.",
      en: "Punya kamus? (Kasual) ... Ya, punya kok."
    },
    {
      id: "r20-2",
      jp: "ご飯、食べる？... ううん、食べない。お腹が いっぱいだから。",
      rom: "Gohan, taberu? ... Uun, tabenai. Onaka ga ippai daka ra.",
      en: "Mau makan nasi? (Kasual) ... Nggak, nggak makan. Soalnya kenyang."
    },
    {
      id: "r20-3",
      jp: "昨日 暇だった？... うん、暇だったよ。",
      rom: "Kinou hima datta? ... Un, hima datta yo.",
      en: "Kemarin senggang? (Kasual) ... Ya, senggang kok."
    },
    {
      id: "r20-4",
      jp: "日本語、面白い？... うん、面白いけど、難しい。",
      rom: "Nihongo, omoshiroi? ... Un, omoshiroi kedo, muzukashii.",
      en: "Bahasa Jepang menarik? (Kasual) ... Ya, menarik tapi sulit."
    },
    {
      id: "r20-5",
      jp: "今日 暇？... うん、暇。どこか 行く？",
      rom: "Kyou hima? ... Un, hima. Dokoka iku?",
      en: "Hari ini luang? (Kasual) ... Ya, luang. Mau pergi ke suatu tempat?"
    }
  ],
  21: [
    {
      id: "r21-1",
      jp: "日本は 物価が 高いと 思います。... そうですね。わたしも そう 思います。",
      rom: "Nihon wa bukka ga takai to omoimasu. ... Sou desu ne. Watashi mo sou omoimasu.",
      en: "Saya pikir harga barang di Jepang mahal. ... Benar ya. Saya juga berpikir begitu."
    },
    {
      id: "r21-2",
      jp: "ミラーさんは どこですか。... 会議室に いると 思います。",
      rom: "Miraa-san wa doko desu ka? ... Kaigishitsu ni iru to omoimasu.",
      en: "Sdr. Miller ada di mana? ... Saya pikir ada di ruang rapat."
    },
    {
      id: "r21-3",
      jp: "寝る 前に、「おやすみなさい」と言います。... そうですね。",
      rom: "Neru mae ni, \"Oyasuminasai\" to iimasu. ... Sou desu ne.",
      en: "Sebelum tidur mengucapkan \"Oyasuminasai\". ... Benar ya."
    },
    {
      id: "r21-4",
      jp: "会議で 何か 意見を 言いましたか。... はい、日本語は 難しいと 言いました。",
      rom: "Kaigi de nanika iken o iimashita ka? ... Hai, Nihongo wa muzukashii to iimashita.",
      en: "Apakah Anda mengemukakan pendapat di rapat? ... Ya, saya mengatakan bahwa bahasa Jepang sulit."
    },
    {
      id: "r21-5",
      jp: "明日 雨が 降るでしょう。... そうですね。曇っていますから。",
      rom: "Ashita ame ga furu deshou. ... Sou desu ne. Kumotte imasu kara.",
      en: "Besok mungkin akan hujan ya. ... Benar ya, karena mendung."
    }
  ],
  22: [
    {
      id: "r22-1",
      jp: "これは わたしが 作った ケーキです。... わあ、おいしそうですね。",
      rom: "Kore wa watashi ga tsukutta keeki desu. ... Waa, oishisou desu ne.",
      en: "Ini kue yang telah saya buat. ... Wah, kelihatan enak ya."
    },
    {
      id: "r22-2",
      jp: "あそこにある 本は 誰のですか。... わたしが 図書館から 借りた 本です。",
      rom: "Asoko ni aru hon wa dare no desu ka? ... Watashi ga toshokan kara karita hon desu.",
      en: "Buku yang ada di sana milik siapa? ... Buku yang saya pinjam dari perpustakaan."
    },
    {
      id: "r22-3",
      jp: "どんな 人が 好きですか。... 髪が 長くて、やさしい 人が 好きです。",
      rom: "Donna hito ga suki desu ka? ... Kami ga nagakute, yasashii hito ga suki desu.",
      en: "Orang yang bagaimana yang Anda sukai? ... Saya suka orang yang berambut panjang dan baik hati."
    },
    {
      id: "r22-4",
      jp: "昨日 買った 傘を 忘れてしまいました。... ええっ、どこで？",
      rom: "Kinou katta kasa o wasurete shimaimashita. ... Ee, doko de?",
      en: "Payung yang saya beli kemarin sudah ketinggalan (hilang). ... Hah, di mana?"
    },
    {
      id: "r22-5",
      jp: "友達と 会う 約束が あります。... そうですか。楽しんでくださいね。",
      rom: "Tomodachi to au yakusoku ga arimasu. ... Sou desu ka. Tanoshinde kudasai ne.",
      en: "Saya ada janji bertemu teman. ... Oh ya? Selamat bersenang-senang ya."
    }
  ],
  23: [
    {
      id: "r23-1",
      jp: "図書館で 本を 借りる とき、カードが 要ります。... そうですか。分かりました。",
      rom: "Toshokan de hon o kariru toki, kaado ga irimasu. ... Sou desu ka. Wakarimashita.",
      en: "Saat meminjam buku di perpustakaan, memerlukan kartu. ... Oh ya? Saya paham."
    },
    {
      id: "r23-2",
      jp: "この ボタンを 押すと、お釣りが出ます。... そうですか。便利ですね。",
      rom: "Kono botan o osu to, otsuri ga demasu. ... Sou desu ka. Benri desu ne.",
      en: "Kalau menekan tombol ini, uang kembalian akan keluar. ... Oh ya? Praktis sekali ya."
    },
    {
      id: "r23-3",
      jp: "暇な とき、何を聞きますか。... 音楽を 聞きます。",
      rom: "Hima na toki, nani o kikimasu ka? ... Ongaku o kikimasu.",
      en: "Saat senggang, Anda mendengarkan apa? ... Mendengarkan musik."
    },
    {
      id: "r23-4",
      jp: "道を 渡る とき、車に 気を つけてください。... はい、気を つけます。",
      rom: "Michi o wataru toki, kuruma ni ki o tsukete kudasai. ... Hai, ki o tsukemasu.",
      en: "Saat menyeberang jalan, tolong berhati-hati pada mobil. ... Ya, saya akan berhati-hati."
    },
    {
      id: "r23-5",
      jp: "これを 回すと、音が 大きく なります。... そうですか。やってみます。",
      rom: "Kore o mawasu to, oto ga ookiku narimasu. ... Sou desu ka. Yatte mimasu.",
      en: "Kalau memutar ini, suaranya akan membesar. ... Oh ya? Saya coba ya."
    }
  ],
  24: [
    {
      id: "r24-1",
      jp: "佐藤さんは わたしに チョコレートを くれました。... わあ、いいですね。",
      rom: "Satou-san wa watashi ni chokoreeto o kuremashita. ... Waa, ii desu ne.",
      en: "Ibu Sato memberi cokelat kepada saya. ... Wah, enaknya."
    },
    {
      id: "r24-2",
      jp: "わたしは 木村さんに 本を 貸して あげました。... そうですか。親切ですね。",
      rom: "Watashi wa Kimura-san ni hon o kashite agemashita. ... Sou desu ka. Shinsetsu desu ne.",
      en: "Saya meminjamkan buku kepada Ibu Kimura. ... Oh ya? Baik sekali ya."
    },
    {
      id: "r24-3",
      jp: "お母さんが セーターを 送って くれました。... 暖かいですね。",
      rom: "Okaasan ga seetaa o okutte kuremashita. ... Atatakai desu ne.",
      en: "Ibu mengirimi saya sweater. ... Hangat ya."
    },
    {
      id: "r24-4",
      jp: "道が 分かりませんから、地図を 書いて あげましょうか。... はい、お願いします。",
      rom: "Michi ga wakarimasen kara, chizu o kaite agemashou ka? ... Hai, onegaishimasu.",
      en: "Karena tidak tahu jalannya, maukah saya gambarkan peta? ... Ya, tolong ya."
    },
    {
      id: "r24-5",
      jp: "だれが 日本語を 教えて くれましたか。... 田中先生が 教えて くれました。",
      rom: "Dare ga Nihongo o oshiete kuremashita ka? ... Tanaka-sensei ga oshiete kuremashita.",
      en: "Siapa yang telah mengajarkan bahasa Jepang kepada Anda? ... Ibu Guru Tanaka yang mengajarkannya."
    }
  ],
  25: [
    {
      id: "r25-1",
      jp: "雨が 降ったら、ピクニックは 中止です。... そうですか。残念ですね。",
      rom: "Ame ga futtara, pikunikku wa chuushi desu. ... Sou desu ka. Zannen desu ne.",
      en: "Kalau turun hujan, piknik dibatalkan. ... Oh ya? Sayang sekali ya."
    },
    {
      id: "r25-2",
      jp: "安かったら、パソコンを 買いたいです。... そうですね。今 安いですから。",
      rom: "Yasukattara, pasokon o kaitai desu. ... Sou desu ne. Ima yasui desu kara.",
      en: "Kalau murah, saya ingin membeli komputer. ... Benar ya, karena sekarang sedang murah."
    },
    {
      id: "r25-3",
      jp: "雨が 降っても、サッカーを します。... 風邪を ひかないでくださいね。",
      rom: "Ame ga futte mo, sakkaa o shimasu. ... Kaze o hikanaide kudasai ne.",
      en: "Walaupun hujan turun, kita tetap main sepak bola. ... Tolong jangan sampai masuk angin ya."
    },
    {
      id: "r25-4",
      jp: "年を とったら、静かな 田舎に 住みたいです。... いいですね。わたしもです。",
      rom: "Toshi o tottara, shizuka na inaka ni sumitai desu. ... Ii desu ne. Watashi mo desu.",
      en: "Kalau sudah tua, saya ingin tinggal di desa yang tenang. ... Bagus ya. Saya juga."
    },
    {
      id: "r25-5",
      jp: "いくら 考えても、分かりません。... 先生に 聞きましょう。",
      rom: "Ikura kangaete mo, wakarimasen. ... Sensei ni kikimashou.",
      en: "Biar dipikirkan bagaimanapun, saya tidak mengerti. ... Mari bertanya kepada guru."
    }
  ]
};

// Seed the reibun list to all chapters
data.forEach(chapter => {
  if (reibunData[chapter.id]) {
    chapter.reibun = reibunData[chapter.id];
    console.log(`Injected ${chapter.reibun.length} Reibun items into Chapter ${chapter.id}`);
  } else {
    // For chapter 0 or other chapters not in list, keep empty array
    chapter.reibun = [];
  }
});

// Reconstruct the file header (imports)
const header = content.substring(0, content.indexOf(dataStartMarker));
// Reconstruct the file footer (chaptersDir and write logic)
const footer = content.substring(content.indexOf(dataEndMarker));

// Build the new content
const newDataStr = JSON.stringify(data, null, 2);
const newContent = header + dataStartMarker + newDataStr + ';\n' + footer;

// Write the updated file
fs.writeFileSync(seedPath, newContent, 'utf-8');
console.log(`\n✅ Successfully patched seedMNN.js (${newContent.length} bytes)`);

// Now regenerate the chapter files
const chaptersDir = path.join(__dirname, '../src/data/chapters');
if (!fs.existsSync(chaptersDir)) {
  fs.mkdirSync(chaptersDir, { recursive: true });
}

// Write individual JSON files
data.forEach(chapter => {
  const chapterPath = path.join(chaptersDir, `chapter_${chapter.id}.json`);
  fs.writeFileSync(chapterPath, JSON.stringify(chapter, null, 2));
});

// Write bundled JS file
const fileContent = `// Auto-generated detailed MNN Data\nexport const MNN_DATA = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, '../src/data/chapter_data.js'), fileContent);

console.log('✅ Successfully regenerated chapter JSON files and chapter_data.js');
