/**
 * seedMNN2_41_50.js — Minna no Nihongo II, Lesson 41-50
 * Run: node scripts/seedMNN2_41_50.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const chaptersDir = path.join(__dirname, '../src/data/chapters');

const CHAPTERS = [
  {
    "id": 41,
    "title": "Lesson 41: Definisi & Kabar (〜という / 〜というのは / 〜ということ)",
    "desc": "Mempelajari cara mendefinisikan suatu istilah menggunakan 〜というのは, menyebut nama sesuatu dengan 〜という, serta mengubah kalimat/kabar menjadi kata benda dengan 〜ということ.",
    "locked": false,
    "vocab": [
      {"id":"v41-1","rom":"Imi","kana":"いみ","kanji":"意味","en":"Arti / Makna","audio":""},
      {"id":"v41-2","rom":"Teigi (shimasu)","kana":"ていぎ（します）","kanji":"定義（します）","en":"Definisi / Mendefinisikan","audio":""},
      {"id":"v41-3","rom":"Kotoba","kana":"ことば","kanji":"言葉","en":"Kata / Bahasa","audio":""},
      {"id":"v41-4","rom":"Yobi (shimasu)","kana":"よび（します）","kanji":"呼び（します）","en":"Panggilan / Memanggil","audio":""},
      {"id":"v41-5","rom":"Hyougen (shimasu)","kana":"ひょうげん（します）","kanji":"表現（します）","en":"Ekspresi / Mengungkapkan","audio":""},
      {"id":"v41-6","rom":"Sain (shimasu)","kana":"サイン（します）","kanji":"","en":"Tanda tangan","audio":""},
      {"id":"v41-7","rom":"Kanji","kana":"かんじ","kanji":"漢字","en":"Karakter Kanji","audio":""},
      {"id":"v41-8","rom":"Kana","kana":"かな","kanji":"仮名","en":"Karakter Kana (Hiragana/Katakana)","audio":""},
      {"id":"v41-9","rom":"Bunshou","kana":"ぶんしょう","kanji":"文章","en":"Kalimat / Paragraf","audio":""},
      {"id":"v41-10","rom":"Honyaku (shimasu)","kana":"ほんやく（します）","kanji":"翻訳（します）","en":"Menerjemahkan (tulisan)","audio":""},
      {"id":"v41-11","rom":"Tsuyaku (shimasu)","kana":"つうやく（します）","kanji":"通訳（します）","en":"Menerjemahkan (lisan)","audio":""},
      {"id":"v41-12","rom":"Setaka","kana":"せたか","kanji":"背丈","en":"Tinggi badan","audio":""},
      {"id":"v41-13","rom":"Kawaii","kana":"かわいい","kanji":"","en":"Lucu / Imut","audio":""},
      {"id":"v41-14","rom":"Meishi","kana":"めいし","kanji":"名刺","en":"Kartu nama","audio":""},
      {"id":"v41-15","rom":"Shinbun","kana":"しんぶん","kanji":"新聞","en":"Surat kabar / Koran","audio":""}
    ],
    "grammar": [
      {
        "id":"g41-1",
        "title":"1. N1 という N2 (Bernama/Disebut)",
        "desc":"Menjelaskan kata benda N2 dengan menyebut namanya N1. Sangat berguna ketika menyebut nama benda, tempat, atau orang yang mungkin belum dikenal oleh lawan bicara.",
        "points":[
          "Pola: N1 + という + N2",
          "Artinya: N2 yang bernama/disebut N1.",
          "Contoh: Sakura to iu hana (Bunga yang bernama Sakura).",
          "Contoh: Tanaka to iu hito (Orang yang bernama Tanaka)."
        ],
        "formula":"N1 + という + N2",
        "native_note":"Digunakan untuk memperkenalkan sesuatu yang belum diketahui lawan bicara agar mereka memahami kategorinya (misal: 'Indomie' to iu instant ramen)."
      },
      {
        "id":"g41-2",
        "title":"2. N というのは (Definisi)",
        "desc":"Digunakan untuk mendefinisikan suatu istilah atau kata benda N. Bagian akhir kalimat biasanya diakhiri dengan ~ no koto desu (adalah hal tentang) atau ~ to iu imi desu (artinya adalah).",
        "points":[
          "Pola: N + というのは ~ のことです / 〜という意味です",
          "Artinya: Yang dimaksud dengan N adalah...",
          "Contoh: 'Keigo' to iu no wa teinei na kotoba no koto desu (Yang dimaksud keigo adalah bahasa sopan)."
        ],
        "formula":"N + というのは 〜 のことです / 〜という意味です"
      },
      {
        "id":"g41-3",
        "title":"3. Plain Form + ということ (Hal bahwa / Kabar bahwa)",
        "desc":"Mengubah suatu klausa kalimat menjadi kata benda untuk melaporkan isi informasi atau kabar yang didengar.",
        "points":[
          "Pola: Plain Form + ということ",
          "Artinya: Hal/Kabar bahwa...",
          "Contoh: Kare ga kekkon suru to iu koto wo kikimashita. (Saya mendengar kabar bahwa dia akan menikah)."
        ],
        "formula":"Plain Form + ということ"
      }
    ],
    "patterns": [
      {"jp":"田中さんという人を知っていますか。","rom":"Tanaka-san to iu hito wo shitte imasu ka.","en":"Apakah Anda kenal orang yang bernama Tanaka?"},
      {"jp":"「禁煙」というのはタバコを吸ってはいけないということです。","rom":"'Kinen' to iu no wa tabako wo sutte wa ikenai to iu koto desu.","en":"Yang dimaksud dengan 'Kinen' adalah dilarang merokok."},
      {"jp":"彼が日本へ行くということを聞きました。","rom":"Kare ga Nihon e iku to iu koto wo kikimashita.","en":"Saya mendengar kabar bahwa dia akan pergi ke Jepang."},
      {"jp":"「研修」というのは何の意味ですか。","rom":"'Kenshuu' to iu no wa nan no imi desu ka.","en":"Apa arti dari kata 'Kenshuu'?"}
    ],
    "conversation": {
      "title":"Orang Bernama Hayashi",
      "dialogue": [
        {"speaker":"A","jp":"すみません、林さんという人はいますか。","rom":"Sumimasen, Hayashi-san to iu hito wa imasu ka.","en":"Permisi, apakah ada orang bernama Hayashi?"},
        {"speaker":"B","jp":"林さんですか。ああ、いま会議中ですよ。","rom":"Hayashi-san desu ka. Aa, ima kaigi-chuu desu yo.","en":"Hayashi? Oh, dia sedang rapat sekarang."},
        {"speaker":"A","jp":"そうですか。この書類を預かったということを伝えてください。","rom":"Soo desu ka. Kono shorui wo azukata to iu koto wo tsutaete kudasai.","en":"Begitu ya. Tolong sampaikan bahwa saya menitipkan dokumen ini."},
        {"speaker":"B","jp":"はい、わかりました。伝えておきます。","rom":"Hai, wakarimashita. Tsutaete okimasu.","en":"Baik, saya mengerti. Akan saya sampaikan nanti."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Pilih terjemahan yang tepat untuk 'Bunga yang bernama Sakura':","options":[{"text":"さくらというはな","correct":true},{"text":"さくらのためのなは","correct":false},{"text":"さくらのようにはな","correct":false}]},
      {"type":"fill","question":"Isi partikel: 'Yang dimaksud dengan 'tsuyaku' adalah interpreter'.\nTsuuyaku to iu no [   ] tsuuyakusha no koto desu.","answer":"wa"},
      {"type":"mcq","question":"Pola 'Plain Form + to iu koto' digunakan untuk:","options":[{"text":"Mengubah kalimat kabar menjadi kata benda","correct":true},{"text":"Menyatakan alasan","correct":false},{"text":"Menunjukkan syarat","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Menanyakan Arti Rambu","situation":"Di jalan melihat tanda larangan masuk","dialogue":[
        {"speaker":"A","jp":"あの看板はなんという意味ですか。","rom":"Ano kanban wa nan to iu imi desu ka.","en":"Rambu itu artinya apa?"},
        {"speaker":"B","jp":"「立入禁止」という意味です。入ってはいけません。","rom":"'Tachiri-kinshi' to iu imi desu. Haitte wa ikemasen.","en":"Artinya 'Dilarang Masuk'. Tidak boleh masuk."}
      ]}
    ],
    "reibun": [
      {"id":"r41-1","jp":"さくらという花が好きです。","rom":"Sakura to iu hana ga suki desu.","en":"Saya suka bunga yang bernama Sakura."},
      {"id":"r41-2","jp":"「記入」というのは書くことです。","rom":"'Kinyuu' to iu no wa kaku koto desu.","en":"Yang dimaksud dengan 'Kinyuu' adalah menulis/mengisi."},
      {"id":"r41-3","jp":"彼が小説を書いたということを知っていますか。","rom":"Kare ga shousetsu wo kaita to iu koto wo shitte imasu ka.","en":"Apakah Anda tahu hal bahwa dia telah menulis novel?"},
      {"id":"r41-4","jp":"ハリセンボンという魚は棘があります。","rom":"Harisenbon to iu sakana wa toge ga arimasu.","en":"Ikan yang bernama pufferfish (harisenbon) memiliki duri."},
      {"id":"r41-5","jp":"「アルバイト」というのはドイツ語から来た言葉です。","rom":"'Arubaito' to iu no wa doitsu-go kara kita kotoba desu.","en":"'Arubaito' adalah kata yang berasal dari bahasa Jerman."}
    ],
    "workbook": [
      {"id":"wb41-1","pattern":"N1 + という + N2","instruction":"Buat frase: 'Orang yang bernama Budi'.","question":"Budi / hito","correct":"ブディというひと","romaji":"Budi to iu hito.","translation":"Orang bernama Budi."},
      {"id":"wb41-2","pattern":"N + というのは","instruction":"Buat pola definisi: 'Yang dimaksud dengan PC'.","question":"PC / N-to iu no wa","correct":"PCというのは","romaji":"PC to iu no wa.","translation":"Yang dimaksud dengan PC."},
      {"id":"wb41-3","pattern":"Plain + ということ","instruction":"Mendengar kabar: 'Mendengar bahwa dia lulus ujian'.","question":"Shiken / goukaku shita / koto / kiku","correct":"しけんにごうかくしたということをききました。","romaji":"Shiken ni goukaku shita to iu koto wo kikimashita.","translation":"Mendengar kabar bahwa dia lulus ujian."},
      {"id":"wb41-4","pattern":"N1 + という + N2","instruction":"Buat frase: 'Buku yang berjudul Minna no Nihongo'.","question":"Minna no Nihongo / hon","correct":"みんなのにほんごというほん","romaji":"Minna no Nihongo to iu hon.","translation":"Buku yang berjudul Minna no Nihongo."},
      {"id":"wb41-5","pattern":"N + というのは","instruction":"Jelaskan rambu: 'Tachiri-kinshi berarti jangan masuk'.","question":"Tachiri-kinshi / hairu na / imi desu","correct":"たちいりきんしというのははいるなという意味です。","romaji":"Tachiri-kinshi to iu no wa hairu na to iu imi desu.","translation":"Yang dimaksud 'Tachiri-kinshi' adalah jangan masuk."}
    ],
    "exam": {
      "part1": [
        {"id":"ex41-1","sentence":"この しょるいを かりにんした [ ] ことを つたえてください。","correct":"という","translation":"Tolong sampaikan hal bahwa Anda sudah menerima dokumen ini."},
        {"id":"ex41-2","sentence":"「きんえん」と [ ] のは、タバコを すってはいけない ということです。","correct":"いう","translation":"Yang dimaksud dengan 'Kinen' adalah dilarang merokok."},
        {"id":"ex41-3","sentence":"やまださん [ ] ひとから でんわが ありましたよ。","correct":"という","translation":"Tadi ada telepon dari orang bernama Yamada lho."},
        {"id":"ex41-4","sentence":"かれが しけんを うけたという [ ] を しっています。","correct":"こと","translation":"Saya tahu hal bahwa dia telah mengikuti ujian."},
        {"id":"ex41-5","sentence":"「ありがとう」というのは インドネシアごで 「Terima kasih」 [ ] いう意味です。","correct":"と","translation":"'Arigatou' itu artinya 'Terima kasih' dalam bahasa Indonesia."}
      ],
      "part2": [
        {"id":"ex41-6","question":"Pola 'N1 to iu N2' paling tepat digunakan ketika:","options":[{"text":"N1 adalah nama spesifik dan N2 adalah kategorinya","correct":true},{"text":"N1 adalah alasan dan N2 adalah akibat","correct":false},{"text":"N1 adalah kata kerja potensial","correct":false}]},
        {"id":"ex41-7","question":"Apa arti 'Nihon e iku to iu koto wo kikitai'?","options":[{"text":"Saya ingin mendengar hal/kabar tentang pergi ke Jepang","correct":true},{"text":"Saya harus pergi ke Jepang","correct":false},{"text":"Saya tidak mau pergi ke Jepang","correct":false}]},
        {"id":"ex41-8","question":"Definisi dari 'Tsuyaku' yang benar adalah:","options":[{"text":"Penerjemah lisan","correct":true},{"text":"Penerjemah tulisan","correct":false},{"text":"Guru bahasa","correct":false}]}
      ],
      "part3": {
        "text":"きょう、かいしゃで 「サクラ」という おみせの ケーキを もらいました。とても おいしかったです。ケーキを くれた やまださんは、らいげつ けっこんするという ことを はなしていました。みんなで お祝いを するつもりです。",
        "questions": [
          {"id":"ex41-9","question":"サクラは ケーキのお店の なまえです。","correct":"T"},
          {"id":"ex41-10","question":"やまださんは らいげつ けっこんします。","correct":"T"},
          {"id":"ex41-11","question":"わたしは やまださんが けっこんするのを しりませんでした。","correct":"F"}
        ]
      }
    }
  },
  {
    "id": 42,
    "title": "Lesson 42: Konsekuensi & Alasan Moral (〜わけです / 〜わけではありません / 〜わけにはいきません)",
    "desc": "Mempelajari cara menyatakan kesimpulan logis (〜わけです), menyangkal anggapan mutlak (〜わけではありません), serta menyatakan ketidakmungkinan karena norma sosial/moral (〜わけにはいきません).",
    "locked": false,
    "vocab": [
      {"id":"v42-1","rom":"Riyuu","kana":"りゆう","kanji":"理由","en":"Alasan / Sebab","audio":""},
      {"id":"v42-2","rom":"Wake","kana":"わけ","kanji":"訳","en":"Arti / Sebab / Alasan","audio":""},
      {"id":"v42-3","rom":"Gimu","kana":"ぎむ","kanji":"義務","en":"Kewajiban","audio":""},
      {"id":"v42-4","rom":"Tatoeba","kana":"たとえば","kanji":"例えば","en":"Contohnya / Misalkan","audio":""},
      {"id":"v42-5","rom":"Moushibun nai","kana":"もうしぶんない","kanji":"申し分ない","en":"Tidak ada keluhan / Sempurna","audio":""},
      {"id":"v42-6","rom":"Kanzen","kana":"かんぜん","kanji":"完全","en":"Sempurna / Lengkap","audio":""},
      {"id":"v42-7","rom":"Keiken","kana":"けいけん","kanji":"経験","en":"Pengalaman","audio":""},
      {"id":"v42-8","rom":"Tokuchou","kana":"とくちょう","kanji":"特徴","en":"Ciri khas / Karakteristik","audio":""},
      {"id":"v42-9","rom":"Benri","kana":"べんり","kanji":"便利","en":"Praktis / Praktis / Nyaman","audio":""},
      {"id":"v42-10","rom":"Futsuu","kana":"ふつう","kanji":"普通","en":"Biasa / Umum","audio":""},
      {"id":"v42-11","rom":"Tokubetsu","kana":"とくべつ","kanji":"特別","en":"Khusus / Istimewa","audio":""},
      {"id":"v42-12","rom":"Kettei","kana":"けってい","kanji":"決定","en":"Keputusan / Ketetapan","audio":""},
      {"id":"v42-13","rom":"Setsumei","kana":"せつめい","kanji":"説明","en":"Penjelasan / Keterangan","audio":""},
      {"id":"v42-14","rom":"Hitsuyou","kana":"ひつよう","kanji":"必要","en":"Penting / Perlu","audio":""},
      {"id":"v42-15","rom":"Junbi","kana":"じゅんび","kanji":"準備","en":"Persiapan","audio":""}
    ],
    "grammar": [
      {
        "id":"g42-1",
        "title":"1. 〜わけです (Pantas Saja / Wajarnya)",
        "desc":"Menyatakan konsekuensi logis atau kesimpulan wajar dari suatu fakta atau alasan yang telah dikemukakan sebelumnya.",
        "points":[
          "Pola: Plain Form (Na-adj + na, N + no/de aru) + わけです",
          "Artinya: Pantas saja... / Wajar jika... / Berarti...",
          "Contoh: Yuki ga futte iru kara, samui wake desu. (Karena salju turun, pantas saja dingin)."
        ],
        "formula":"Plain Form + わけです",
        "native_note":"Gunakan ini untuk menunjukkan pengertian mendalam Anda atas situasi yang baru saja dijelaskan oleh lawan bicara."
      },
      {
        "id":"g42-2",
        "title":"2. 〜わけではありません (Bukan Berarti)",
        "desc":"Menyangkal kesimpulan mutlak atau dugaan umum. Menjelaskan bahwa meskipun situasinya demikian, tidak berarti segalanya 100% seperti itu.",
        "points":[
          "Pola: Plain Form + わけではありません",
          "Artinya: Bukan berarti... / Tidak selalu...",
          "Contoh: Nihon-ryouri ga kirai na wake dewa arimasen. (Bukan berarti saya membenci masakan Jepang - hanya kurang suka saja)."
        ],
        "formula":"Plain Form + わけではありません"
      },
      {
        "id":"g42-3",
        "title":"3. 〜わけにはいきません (Tidak Boleh/Bisa secara Moral)",
        "desc":"Menyatakan ketidakmungkinan melakukan suatu tindakan karena alasan tanggung jawab, moral, etika, atau norma sosial, meskipun secara fisik bisa dilakukan.",
        "points":[
          "Pola positif: V-dict + わけにはいきません (Tidak boleh dilakukan/tidak pantas).",
          "Contoh: Unten-chuu na node, osake wo nomu wake ni wa ikimasen (Karena sedang menyetir, saya tidak boleh minum sake).",
          "Pola negatif: V-nai + わけにはいきません (Tidak boleh tidak dilakukan = harus dilakukan).",
          "Contoh: Yakusoku shita kara, ikanai wake ni wa ikimasen (Karena sudah berjanji, saya tidak boleh tidak pergi)."
        ],
        "formula":"V-dict + わけにはいきません / V-nai + わけにはいきません"
      }
    ],
    "patterns": [
      {"jp":"雪が降っているから、寒いわけです。","rom":"Yuki ga futte iru kara, samui wake desu.","en":"Karena salju turun, pantas saja dingin."},
      {"jp":"日本語が下手なわけではありませんが、話すのが苦手です。","rom":"Nihongo ga heta na wake dewa arimasen ga, hanasu no ga nigate desu.","en":"Bukan berarti bahasa Jepang saya buruk, tapi saya kurang mahir berbicara."},
      {"jp":"明日は大事な試験があるから、休むわけにはいきません。","rom":"Ashita wa daiji na shiken ga aru kara, yasumu wake ni wa ikimasen.","en":"Karena besok ada ujian penting, saya tidak boleh/bisa libur."},
      {"jp":"社長の命令だから、従わないわけにはいきません。","rom":"Shachou no meirei dakara, shitagawanai wake ni wa ikimasen.","en":"Karena ini perintah direktur, saya tidak boleh tidak patuh (harus patuh)."}
    ],
    "conversation": {
      "title":"Tanggung Jawab Pekerjaan",
      "dialogue": [
        {"speaker":"A","jp":"今日も残業ですか。大変ですね。","rom":"Kyou mo zangyou desu ka. Taihen desu ne.","en":"Hari ini lembur lagi ya? Berat ya."},
        {"speaker":"B","jp":"ええ、この仕事は今日中に終わらせなければならないので、帰るわけにはいかないんです。","rom":"Ee, kono shigoto wa kyou-juu ni owarase neba naranai node, kaeru wake ni wa ikanai n desu.","en":"Ya, karena pekerjaan ini harus selesai hari ini, saya tidak boleh pulang dulu."},
        {"speaker":"A","jp":"そうですか。体には気をつけてくださいね。","rom":"Soo desu ka. Karada ni wa ki wo tsukete kudasai ne.","en":"Begitu ya. Tolong jaga kesehatan Anda ya."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Arti dari 'yasumu wake ni wa ikimasen':","options":[{"text":"Tidak bisa/tidak boleh libur karena tanggung jawab","correct":true},{"text":"Sangat ingin libur","correct":false},{"text":"Pasti akan libur","correct":false}]},
      {"type":"fill","question":"Terjemahkan: 'Bukan berarti tidak punya uang'.\nOkane ga nai [   ] dewa arimasen.","answer":"wake"},
      {"type":"mcq","question":"'Kare wa 10-nen kan Nihon ni ita kara, Nihongo ga jouzu na wake desu' artinya:","options":[{"text":"Pantas saja dia mahir bahasa Jepang karena sudah 10 tahun di Jepang","correct":true},{"text":"Bahasa Jepangnya tidak terlalu mahir","correct":false},{"text":"Dia harus belajar bahasa Jepang selama 10 tahun","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Batas Pengembalian Buku","situation":"Meminjam buku perpustakaan yang harus segera dikembalikan","dialogue":[
        {"speaker":"A","jp":"この本、明日まで貸してもらえませんか。","rom":"Kono hon, ashita made kashite moraemasen ka.","en":"Buku ini, bolehkah saya pinjam sampai besok?"},
        {"speaker":"B","jp":"すみません、明日が返却日なので、貸すわけにはいかないんです。","rom":"Sumimasen, ashita ga henkyou-bi na node, kasu wake ni wa ikanai n desu.","en":"Maaf, karena besok batas pengembaliannya, saya tidak boleh meminjamkannya."}
      ]}
    ],
    "reibun": [
      {"id":"r42-1","jp":"彼は10年間日本にいたから、日本語が上手なわけです。","rom":"Kare wa 10-nen kan Nihon ni ita kara, Nihongo ga jouzu na wake desu.","en":"Karena dia tinggal di Jepang selama 10 tahun, pantas saja bahasa Jepangnya mahir."},
      {"id":"r42-2","jp":"毎日外食するわけではありません。","rom":"Mainichi gaia-shoku suru wake dewa arimasen.","en":"Bukan berarti saya makan di luar setiap hari."},
      {"id":"r42-3","jp":"運転中なので、お酒を飲むわけにはいきません。","rom":"Unten-chuu na node, osake wo nomu wake ni wa ikimasen.","en":"Karena sedang menyetir, saya tidak boleh minum sake."},
      {"id":"r42-4","jp":"風邪を引いたけれど、仕事を休むわけにはいきません。","rom":"Kaze wo hiita keredo, shigoto wo yasumu wake ni wa ikimasen.","en":"Meskipun pilek, saya tidak boleh meliburkan diri dari pekerjaan."},
      {"id":"r42-5","jp":"約束したから、行かないわけにはいきません。","rom":"Yakusoku shita kara, ikanai wake ni wa ikimasen.","en":"Karena sudah berjanji, saya tidak boleh tidak pergi (harus pergi)."}
    ],
    "workbook": [
      {"id":"wb42-1","pattern":"Plain + わけです","instruction":"Nyatakan konsekuensi: 'Pantas saja mahir'.","question":"Jouzu / wake desu","correct":"じょうずなわけです。","romaji":"Jouzu na wake desu.","translation":"Pantas saja mahir."},
      {"id":"wb42-2","pattern":"Plain + わけではありません","instruction":"Nyatakan sangkalan umum: 'Bukan berarti tidak punya uang'.","question":"Okane / nai / wake dewa arimasen","correct":"おかねがないわけではありません。","romaji":"Okane ga nai wake dewa arimasen.","translation":"Bukan berarti tidak punya uang."},
      {"id":"wb42-3","pattern":"V-dict + わけにはいきません","instruction":"Nyatakan larangan moral: 'Tidak boleh makan kue ini (diet)'.","question":"Taberu / wake ni wa ikimasen","correct":"たべるわけにはいきません。","romaji":"Taberu wake ni wa ikimasen.","translation":"Tidak boleh makan."},
      {"id":"wb42-4","pattern":"V-nai + わけにはいきません","instruction":"Nyatakan keharusan moral: 'Harus belajar'.","question":"Benkyou shinai / wake ni wa ikimasen","correct":"べんきょうしないわけにはいきません。","romaji":"Benkyou shinai wake ni wa ikimasen.","translation":"Tidak boleh tidak belajar (harus belajar)."},
      {"id":"wb42-5","pattern":"Plain + わけ desu","instruction":"Nyatakan konsekuensi: 'Pantas saja lelah'.","question":"Tsukareta / wake desu","correct":"つかれたわけです。","romaji":"Tsukareta wake desu.","translation":"Pantas saja lelah."}
    ],
    "exam": {
      "part1": [
        {"id":"ex42-1","sentence":"あしたは テストが あるから、やすむ [ ] には いきません。","correct":"わけ","translation":"Karena besok ada ujian, saya tidak boleh libur."},
        {"id":"ex42-2","sentence":"かれは にほんごが はなせる [ ] です。10ねん すんでいますから。","correct":"wake","translation":"Pantas saja dia bisa bahasa Jepang, karena sudah tinggal 10 tahun."},
        {"id":"ex42-3","sentence":"にほんりょうりが きらいな [ ] では ありません。","correct":"わけ","translation":"Bukan berarti saya membenci makanan Jepang."},
        {"id":"ex42-4","sentence":"やくそくしたから、いかない わけ [ ] は いきません。","correct":"に","translation":"Karena sudah berjanji, saya harus pergi."},
        {"id":"ex42-5","sentence":"うんてんするから、おさけを のむ わけには [ ]。","correct":"いきません","translation":"Karena menyetir, saya tidak boleh minum sake."}
      ],
      "part2": [
        {"id":"ex42-6","question":"Pilih kalimat yang berarti 'Saya harus pergi' (secara moral):","options":[{"text":"行かないわけにはいきません。","correct":true},{"text":"行くわけにはいきません。","correct":false},{"text":"行くわけです。","correct":false}]},
        {"id":"ex42-7","question":"Apa arti dari 'Keren na wake desu'?","options":[{"text":"Pantas saja keren.","correct":true},{"text":"Bukan berarti keren.","correct":false},{"text":"Tidak boleh keren.","correct":false}]},
        {"id":"ex42-8","question":"Kapan kita menggunakan 'wake ni wa ikimasen'?","options":[{"text":"Ketika ada aturan moral/tanggung jawab menghalangi tindakan","correct":true},{"text":"Ketika kemampuan fisik kita terbatas","correct":false},{"text":"Ketika kita memprediksi cuaca","correct":false}]}
      ],
      "part3": {
        "text":"わたしは あした かいしゃを やすむわけにはいきません。だいじな かいぎが あるからです。かぜを ひいて あたまが いたいわけですが、薬を のんで がんばります。しごとが おわったあとで、ゆっくり やすむことにします。",
        "questions": [
          {"id":"ex42-9","question":"この人は あした 会社を 休むことができます。","correct":"F"},
          {"id":"ex42-10","question":"この人は かぜを ひいています。","correct":"T"},
          {"id":"ex42-11","question":"あしたは 大事な 会議が あります。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 43,
    "title": "Lesson 43: Hubungan Aksi & Sudut Pandang (〜に対して / 〜について / 〜にとって)",
    "desc": "Mempelajari perbedaan penting antara 〜に対して (sikap terhadap target), 〜について (topik bahasan), dan 〜にとって (sudut pandang/perspektif subjek).",
    "locked": false,
    "vocab": [
      {"id":"v43-1","rom":"Taido","kana":"たいど","kanji":"態度","en":"Sikap / Tingkah laku","audio":""},
      {"id":"v43-2","rom":"Ikken","kana":"いっけん","kanji":"意見","en":"Pendapat / Opini","audio":""},
      {"id":"v43-3","rom":"Kanten","kana":"かんてん","kanji":"観点","en":"Sudut pandang / Aspek","audio":""},
      {"id":"v43-4","rom":"Mikata","kana":"みかた","kanji":"見方","en":"Cara melihat / Sudut pandang","audio":""},
      {"id":"v43-5","rom":"Kenkai","kana":"けんかい","kanji":"見解","en":"Pendapat / Pandangan resmi","audio":""},
      {"id":"v43-6","rom":"Tai-shite","kana":"たいして","kanji":"に対して","en":"Terhadap / Kontras dengan","audio":""},
      {"id":"v43-7","rom":"Tsui-te","kana":"ついて","kanji":"について","en":"Tentang / Mengenai","audio":""},
      {"id":"v43-8","rom":"Tot-te","kana":"とって","kanji":"にとって","en":"Bagi / Dari sudut pandang","audio":""},
      {"id":"v43-9","rom":"Shitsumon","kana":"しつもん","kanji":"質問","en":"Pertanyaan","audio":""},
      {"id":"v43-10","rom":"Kyoumi","kana":"きょうみ","kanji":"興味","en":"Minat / Ketertarikan","audio":""},
      {"id":"v43-11","rom":"Nihon-bunka","kana":"にほんぶんか","kanji":"日本文化","en":"Kebudayaan Jepang","audio":""},
      {"id":"v43-12","rom":"Kankyo-mondai","kana":"かんきょうもんだい","kanji":"環境問題","en":"Masalah lingkungan","audio":""},
      {"id":"v43-13","rom":"Kokumin","kana":"こくみん","kanji":"国民","en":"Rakyat / Warga negara","audio":""},
      {"id":"v43-14","rom":"Seifu","kana":"せいふ","kanji":"政府","en":"Pemerintah","audio":""},
      {"id":"v43-15","rom":"Hihan","kana":"ひはん","kanji":"批判","en":"Kritik / Kritikan","audio":""}
    ],
    "grammar": [
      {
        "id":"g43-1",
        "title":"1. 〜に対して (Terhadap / Berlawanan)",
        "desc":"Menunjukkan target dari suatu sikap, tindakan, atau perasaan. Bisa juga digunakan untuk membandingkan dua hal yang kontras.",
        "points":[
          "Pola: N + に対して (ni taishite)",
          "Nuansa 1 (Sikap/Target): Gakusei ni taishite shinsetsu desu (Bersikap baik terhadap murid).",
          "Nuansa 2 (Kontras): Ani ga eigo ga得意 na no ni taishite, otouto wa suugaku ga得意 desu (Berlawanan dengan kakak yang ahli bahasa Inggris, adik ahli matematika)."
        ],
        "formula":"N + に対して",
        "native_note":"Gunakan ini untuk mengekspresikan aksi yang diarahkan ke luar, seperti keluhan atau rasa terima kasih kepada lembaga."
      },
      {
        "id":"g43-2",
        "title":"2. 〜について (Tentang / Mengenai)",
        "desc":"Menunjukkan topik pembicaraan, isi pikiran, penelitian, atau penyelidikan.",
        "points":[
          "Pola: N + について (ni tsuite)",
          "Artinya: Tentang N / Mengenai N.",
          "Contoh: Nihon no rekishi ni tsuite shirabeています. (Saya sedang meneliti tentang sejarah Jepang)."
        ],
        "formula":"N + について"
      },
      {
        "id":"g43-3",
        "title":"3. 〜にとって (Bagi / Dari Sudut Pandang)",
        "desc":"Menyatakan penilaian, nilai penting, atau pendapat subjek N terhadap suatu hal.",
        "points":[
          "Pola: N + にとって (ni totte)",
          "Artinya: Bagi N / Menurut N.",
          "Contoh: Watashi ni totte kazoku ga ichiban taisetsu desu. (Bagi saya, keluarga adalah yang paling penting)."
        ],
        "formula":"N + にとって"
      }
    ],
    "patterns": [
      {"jp":"子どもに対して優しくしてください。","rom":"Kodomo ni taishite yasashiku shite kudasai.","en":"Tolong bersikap lembut terhadap anak-anak."},
      {"jp":"この問題についてどう思いますか。","rom":"Kono mondai ni tsuite dou omoimasu ka.","en":"Bagaimana pendapat Anda tentang masalah ini?"},
      {"jp":"外国人にとって漢字は難しいです。","rom":"Gaikokujin ni totte kanji wa muzukashii desu.","en":"Bagi orang asing, kanji itu sulit."},
      {"jp":"兄が英語が得意なのにたいして、弟は数学が得意です。","rom":"Ani ga eigo ga tokui na no ni taishite, otouto wa suugaku ga tokui desu.","en":"Berlawanan dengan kakak yang mahir bahasa Inggris, adik laki-laki mahir matematika."}
    ],
    "conversation": {
      "title":"Kehidupan di Jepang",
      "dialogue": [
        {"speaker":"A","jp":"日本の生活はあなたにとってどうですか。","rom":"Nihon no seikatsu wa anata ni totte dou desu ka.","en":"Bagaimana kehidupan di Jepang bagi Anda?"},
        {"speaker":"B","jp":"私にとってとても楽しいですが、物価が高いですね。","rom":"Watashi ni totte wa totemo tanoshii desu ga, bukka ga takai desu ne.","en":"Bagi saya sangat menyenangkan, tapi biaya hidupnya tinggi ya."},
        {"speaker":"A","jp":"そうですね。その問題について、政府も考えています。","rom":"Soo desu ne. Sono mondai ni tsuite, seifu mo kangaete imasu.","en":"Betul sekali. Mengenai masalah itu, pemerintah juga sedang memikirkannya."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Pilih arti yang tepat untuk 'Watashi ni totte':","options":[{"text":"Bagi saya","correct":true},{"text":"Tentang saya","correct":false},{"text":"Terhadap saya","correct":false}]},
      {"type":"fill","question":"Isi partikel: 'Pendidikan tentang kebersihan'.\nEisei [   ] tsuite no kyouiku.","answer":"ni"},
      {"type":"mcq","question":"Apa perbedaan 'ni taishite' dan 'ni totte'?","options":[{"text":"ni taishite = ditujukan ke target; ni totte = dari perspektif/penilaian","correct":true},{"text":"Keduanya sama saja","correct":false},{"text":"ni totte = ditujukan ke target; ni taishite = dari perspektif","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Topik Penelitian","situation":"Dua mahasiswa membicarakan topik skripsi mereka","dialogue":[
        {"speaker":"A","jp":"何について研究していますか。","rom":"Nani ni tsuite kenkyuu shite imasu ka.","en":"Kamu sedang meneliti tentang apa?"},
        {"speaker":"B","jp":"インドネシアの経済発展について研究しています。","rom":"Indoneshia no keizai-hatten ni tsuite kenkyuu shite imasu.","en":"Saya sedang meneliti tentang perkembangan ekonomi Indonesia."}
      ]}
    ],
    "reibun": [
      {"id":"r43-1","jp":"社長の意見に対して、反対の人が多いです。","rom":"Shachou no iken ni taishite, hantai no hito ga ooi desu.","en":"Terhadap pendapat direktur, banyak orang yang menentang."},
      {"id":"r43-2","jp":"この商品について、説明書を読んでください。","rom":"Kono shouhin ni tsuite, setsumei-sho wo yonde kudasai.","en":"Mengenai produk ini, tolong baca buku penjelasannya."},
      {"id":"r43-3","jp":"健康は誰にとっても大切です。","rom":"Kenkoo wa dare ni totte mo taisetsu desu.","en":"Kesehatan adalah hal penting bagi siapapun."},
      {"id":"r43-4","jp":"恵子さんは親切なのにたいして、妹は冷淡です。","rom":"Keiko-san wa shinsetsu na no ni taishite, imouto wa reitan desu.","en":"Berbeda dengan Keiko yang ramah, adiknya dingin."},
      {"id":"r43-5","jp":"将来について話しましょう。","rom":"Shourai ni tsuite hanashimashou.","en":"Mari kita berbicara tentang masa depan."}
    ],
    "workbook": [
      {"id":"wb43-1","pattern":"N + に対して","instruction":"Terjemahkan: 'Ramah terhadap tamu'.","question":"Kyaku / shinsetsu","correct":"きゃくにたいしてしんせつです。","romaji":"Kyaku ni taishite shinsetsu desu.","translation":"Ramah terhadap tamu."},
      {"id":"wb43-2","pattern":"N + について","instruction":"Terjemahkan: 'Bertanya tentang harga'.","question":"Nedan / kiku","correct":"ねだんについてききます。","romaji":"Nedan ni tsuite kikimasu.","translation":"Bertanya tentang harga."},
      {"id":"wb43-3","pattern":"N + にとって","instruction":"Terjemahkan: 'Bagi anak-anak'.","question":"Kodomo / taisetsu","correct":"こどもにとってたいせつです。","romaji":"Kodomo ni totte taisetsu desu.","translation":"Bagi anak-anak adalah hal berharga."},
      {"id":"wb43-4","pattern":"N + について","instruction":"Terjemahkan: 'Belajar tentang Jepang'.","question":"Nihon / benkyou","correct":"にほんについてべんきょうします。","romaji":"Nihon ni tsuite benkyou shimasu.","translation":"Belajar tentang Jepang."},
      {"id":"wb43-5","pattern":"N + に対して","instruction":"Terjemahkan: 'Menentang terhadap keputusan itu'.","question":"Kettei / hantai","correct":"けっていに対してはんたいします。","romaji":"Kettei ni taishite hantai shimasu.","translation":"Menentang terhadap keputusan itu."}
    ],
    "exam": {
      "part1": [
        {"id":"ex43-1","sentence":"にほんごの べんきょうは わたし [ ] とって とても たのしいです。","correct":"に","translation":"Belajar bahasa Jepang bagi saya sangat menyenangkan."},
        {"id":"ex43-2","sentence":"しつもん [ ] ついて れんらくしてください。","correct":"に","translation":"Tolong hubungi saya mengenai pertanyaan Anda."},
        {"id":"ex43-3","sentence":"せんせい [ ] たいして しつれいな ことを 言ってはいけません。","correct":"に","translation":"Tidak boleh berkata tidak sopan terhadap guru."},
        {"id":"ex43-4","sentence":"しょうらいの ゆめ [ ] ついて はなしましょう。","correct":"に","translation":"Mari kita berbicara tentang impian masa depan."},
        {"id":"ex43-5","sentence":"だれ [ ] とっても、かぞくは たいせつな ものです。","correct":"に","translation":"Bagi siapapun, keluarga adalah hal yang berharga."}
      ],
      "part2": [
        {"id":"ex43-6","question":"Pilih partikel yang tepat: 'Nihon no kyouiku [  ] tsuite shiraberu'","options":[{"text":"に","correct":true},{"text":"を","correct":false},{"text":"へ","correct":false}]},
        {"id":"ex43-7","question":"Apa arti 'Senshu ni taishite h批判 ga ooi'?","options":[{"text":"Kritikan banyak ditujukan terhadap pemain","correct":true},{"text":"Pemain banyak mengkritik orang lain","correct":false},{"text":"Bagi pemain, kritikan adalah hal biasa","correct":false}]},
        {"id":"ex43-8","question":"Contoh penggunaan 'ni totte' yang benar:","options":[{"text":"私にとって水は必要不可欠です。","correct":true},{"text":"私にとって歴史を調べます。","correct":false},{"text":"先生にとって挨拶します。","correct":false}]}
      ],
      "part3": {
        "text":"外国人にとって、日本語の漢字はとても難しいです。漢字について 勉強するとき、書き方に対して 興味を持つことが 大切です。漢字の歴史について 知ることも、漢字を覚えるのに 役に立ちます。",
        "questions": [
          {"id":"ex43-9","question":"外国人にとって 漢字は 簡単です。","correct":"F"},
          {"id":"ex43-10","question":"漢字の 書き方に対して 興味を 持つのが 大切です。","correct":"T"},
          {"id":"ex43-11","question":"漢字の 歴史について 知ることは 役に立ちます。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 44,
    "title": "Lesson 44: Kausalitas & Sumber Informasi (〜によって / 〜によると)",
    "desc": "Mempelajari empat kegunaan pola 〜によって (pelaku pasif, metode, penyebab, variasi) serta cara menyampaikan sumber informasi resmi menggunakan 〜によると.",
    "locked": false,
    "vocab": [
      {"id":"v44-1","rom":"Houhou","kana":"ほうほう","kanji":"方法","en":"Cara / Metode","audio":""},
      {"id":"v44-2","rom":"Shudan","kana":"しゅだん","kanji":"手段","en":"Sarana / Alat","audio":""},
      {"id":"v44-3","rom":"Gen'in","kana":"げんいん","kanji":"原因","en":"Penyebab","audio":""},
      {"id":"v44-4","rom":"Kekka","kana":"けっか","kanji":"結果","en":"Hasil","audio":""},
      {"id":"v44-5","rom":"Eikyou","kana":"えいきょう","kanji":"影響","en":"Pengaruh","audio":""},
      {"id":"v44-6","rom":"Yoru","kana":"よる","kanji":"依る","en":"Bergantung pada / Berdasarkan","audio":""},
      {"id":"v44-7","rom":"Houdo (shimasu)","kana":"ほうどう（します）","kanji":"報道（します）","en":"Pemberitaan / Menyiarkan","audio":""},
      {"id":"v44-8","rom":"Nyusu","kana":"ニュース","kanji":"","en":"Berita","audio":""},
      {"id":"v44-9","rom":"Yogen","kana":"よげん","kanji":"予言","en":"Ramalan / Prediksi","audio":""},
      {"id":"v44-10","rom":"Tenki-yohou","kana":"てんきよほう","kanji":"天気予報","en":"Prakiraan cuaca","audio":""},
      {"id":"v44-11","rom":"Chishiki","kana":"ちしき","kanji":"知識","en":"Pengetahuan","audio":""},
      {"id":"v44-12","rom":"Kaji","kana":"かじ","kanji":"火事","en":"Kebakaran","audio":""},
      {"id":"v44-13","rom":"Jishin","kana":"じしん","kanji":"地震","en":"Gempa bumi","audio":""},
      {"id":"v44-14","rom":"Taifuu","kana":"たいふう","kanji":"台風","en":"Topan / Badai besar","audio":""},
      {"id":"v44-15","rom":"Hakken (shimasu)","kana":"はっけん（します）","kanji":"発見（します）","en":"Penemuan / Menemukan","audio":""}
    ],
    "grammar": [
      {
        "id":"g44-1",
        "title":"1. 〜によって (Oleh / Dengan cara / Karena / Tergantung)",
        "desc":"Pola serbaguna yang memiliki empat fungsi tata bahasa utama tergantung pada konteksnya.",
        "points":[
          "a. Pelaku kalimat pasif: Kono hon wa Natsume Soseki ni yotte kakaremashita (Buku ini ditulis oleh Natsume Soseki).",
          "b. Metode/Sarana: Internet ni yotte jouhou wo emasu (Mendapatkan informasi melalui internet).",
          "c. Penyebab: Jishin ni yotte ie ga kowaremashita (Rumah rusak karena gempa).",
          "d. Tergantung pada (variasi): Hito ni yotte kangaekata ga chigaimasu (Cara berpikir berbeda tergantung orangnya)."
        ],
        "formula":"N + によって / により",
        "native_note":"Dalam percakapan bisnis, 'ni yotte' sering disingkat menjadi 'ni yori' untuk nuansa yang lebih formal."
      },
      {
        "id":"g44-2",
        "title":"2. 〜によると (Menurut / Berdasarkan)",
        "desc":"Menunjukkan sumber informasi. Kalimat harus diakhiri dengan bentuk hearsay seperti 〜そうです atau 〜ということです.",
        "points":[
          "Pola: N + によると + ~ そうです / ということです",
          "Artinya: Menurut N, kabarnya...",
          "Contoh: Tenki yohou ni yoru to, ashita wa ame ga furu sou desu (Menurut prakiraan cuaca, kabarnya besok hujan)."
        ],
        "formula":"N + によると 〜 そうです"
      }
    ],
    "patterns": [
      {"jp":"天気予報によると、台風が来るそうです。","rom":"Tenki yohou ni yoru to, taifuu ga kuru sou desu.","en":"Menurut prakiraan cuaca, topan dikabarkan akan datang."},
      {"jp":"この本はコロンブスによって書かれました。","rom":"Kono hon wa Koronbusu ni yotte kakaremashita.","en":"Buku ini ditulis oleh Columbus."},
      {"jp":"人によって考え方が違います。","rom":"Hito ni yotte kangaekata ga chigaimasu.","en":"Tergantung orangnya, cara berpikirnya berbeda."},
      {"jp":"車の事故によって、道が込んでいます。","rom":"Kuruma no jiko ni yotte, michi ga konde imasu.","en":"Karena kecelakaan mobil, jalannya macet."}
    ],
    "conversation": {
      "title":"Berita Gempa Bumi",
      "dialogue": [
        {"speaker":"A","jp":"テレビのニュースによると、昨日 地震があったそうですね。","rom":"Terebi no nyuusu ni yoru to, kinou jishin ga atta sou desu ne.","en":"Menurut berita televisi, kemarin dikabarkan ada gempa bumi ya."},
        {"speaker":"B","jp":"ええ、その地震によって、いくつかの古い建物が壊れたそうです。","rom":"Ee, sono jishin ni yotte, ikutsu ka no furui tatemono ga kowareta sou desu.","en":"Ya, karena gempa bumi itu, beberapa bangunan tua dikabarkan rusak."},
        {"speaker":"A","jp":"大変ですね。被害が大きくないといいですが。","rom":"Taihen desu ne. Higai ga ookikunai to ii desu ga.","en":"Gawat ya. Semoga kerusakannya tidak besar."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Pilih fungsi 'ni yotte' dalam kalimat 'Jishin ni yotte ie ga kowareta':","options":[{"text":"Menunjukkan penyebab","correct":true},{"text":"Menunjukkan pelaku pasif","correct":false},{"text":"Menunjukkan sarana","correct":false}]},
      {"type":"fill","question":"Terjemahkan: 'Menurut prakiraan cuaca'.\nTenki-yohou ni yoru [   ].","answer":"to"},
      {"type":"mcq","question":"Pola 'N ni yoru to' harus diakhiri dengan bentuk apa?","options":[{"text":"〜そうです / 〜ということです","correct":true},{"text":"〜てください","correct":false},{"text":"〜なければなりません","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Prakiraan Cuaca Hari Ini","situation":"Mengobrol sebelum berangkat kerja","dialogue":[
        {"speaker":"A","jp":"今日は雨が降りますか。","rom":"Kyou wa ame ga furimasu ka?","en":"Apakah hari ini hujan?"},
        {"speaker":"B","jp":"天気予報によると、午後から大雨が降るそうですよ。","rom":"Tenki-yohou ni yoru to, gogo kara ooame ga furu sou desu yo.","en":"Menurut prakiraan cuaca, kabarnya hujan lebat akan turun mulai siang."}
      ]}
    ],
    "reibun": [
      {"id":"r44-1","jp":"ラジオのニュースによると、事故があったそうです。","rom":"Rajio no nyuusu ni yoru to, jiko ga atta sou desu.","en":"Menurut berita radio, dikabarkan telah terjadi kecelakaan."},
      {"id":"r44-2","jp":"この建物は有名な建築家によって設計されました。","rom":"Kono tatemono wa yuumei na kenchikuka ni yotte sekkei saremashita.","en":"Gedung ini dirancang oleh arsitek terkenal."},
      {"id":"r44-3","jp":"強風によって窓ガラスが割れました。","rom":"Kyoufuu ni yotte mado-garasu ga waremashita.","en":"Kaca jendela pecah karena angin kencang."},
      {"id":"r44-4","jp":"国によって生活の習慣が違います。","rom":"Kuni ni yotte seikatsu no shuukan ga chigaimasu.","en":"Tergantung negaranya, adat istiadat kehidupannya berbeda."},
      {"id":"r44-5","jp":"調査によると、スマホの利用者が増えているそうです。","rom":"Chousa ni yoru to, sumaho no riyou-sha ga fuete iru sou desu.","en":"Menurut survei, kabarnya pengguna ponsel pintar terus bertambah."}
    ],
    "workbook": [
      {"id":"wb44-1","pattern":"N + によると","instruction":"Terjemahkan: 'Menurut ramalan cuaca'.","question":"Tenki-yohou","correct":"てんきよほうによると","romaji":"Tenki-yohou ni yoru to.","translation":"Menurut ramalan cuaca."},
      {"id":"wb44-2","pattern":"N + によって (pelaku)","instruction":"Terjemahkan: 'Ditemukan oleh Columbus'.","question":"Koronbusu / hakken","correct":"コロンブスによってはっけんされました。","romaji":"Koronbusu ni yotte hakken saremashita.","translation":"Ditemukan oleh Columbus."},
      {"id":"wb44-3","pattern":"N + によって (sebab)","instruction":"Terjemahkan: 'Rusak karena gempa'.","question":"Jishin / kowareru","correct":"じしんによってこわれました。","romaji":"Jishin ni yotte kowaremashita.","translation":"Rusak karena gempa bumi."},
      {"id":"wb44-4","pattern":"N + によって (tergantung)","instruction":"Terjemahkan: 'Berbeda tergantung hari'.","question":"Hi / chigau","correct":"ひによってちがいます。","romaji":"Hi ni yotte chigaimasu.","translation":"Berbeda tergantung hari."},
      {"id":"wb44-5","pattern":"N + によると","instruction":"Terjemahkan: 'Menurut koran'.","question":"Shinbun","correct":"しんぶんによると","romaji":"Shinbun ni yoru to.","translation":"Menurut koran."}
    ],
    "exam": {
      "part1": [
        {"id":"ex44-1","sentence":"てんきよほう [ ] よると、あしたは はれるそうです。","correct":"に","translation":"Menurut prakiraan cuaca, kabarnya besok akan cerah."},
        {"id":"ex44-2","sentence":"じしん [ ] よって、たくさんの いえが こわれました。","correct":"に","translation":"Banyak rumah rusak karena gempa bumi."},
        {"id":"ex44-3","sentence":"この えは ゆうめいな がかによって かかれ [ ]。","correct":"ました","translation":"Lukisan ini dilukis oleh pelukis terkenal."},
        {"id":"ex44-4","sentence":"くにによって ことばが [ ] ます。","correct":"ちがい","translation":"Bahasanya berbeda tergantung negaranya."},
        {"id":"ex44-5","sentence":"うわさによると、かれは 会社を やめる [ ] です。","correct":"そうだ","translation":"Menurut desas-desus, kabarnya dia akan mengundurkan diri."}
      ],
      "part2": [
        {"id":"ex44-6","question":"Pola 'N ni yoru to' dipadukan dengan:","options":[{"text":"Bentuk desas-desus (sou desu)","correct":true},{"text":"Bentuk larangan (naide kudasai)","correct":false},{"text":"Bentuk keinginan (tai desu)","correct":false}]},
        {"id":"ex44-7","question":"Mana penggunaan 'ni yotte' sebagai sarana/metode?","options":[{"text":"インターネットによって情報を集める。","correct":true},{"text":"台風によって木が倒れた。","correct":false},{"text":"人によって好きな食べ物が違う。","correct":false}]},
        {"id":"ex44-8","question":"Arti dari 'Hi ni yotte konde imasu':","options":[{"text":"Macet tergantung pada harinya.","correct":true},{"text":"Selalu macet setiap hari.","correct":false},{"text":"Tidak pernah macet.","correct":false}]}
      ],
      "part3": {
        "text":"ニュースによると、昨日の 夜 台風が 来たそうです。その台風によって、いくつかの 電柱が 倒れました。地域によっては、電気が 使えなくなりました。今日の 午後には 直るそうです。",
        "questions": [
          {"id":"ex44-9","question":"ニュースによると 台風は 今日の 朝 来ました。","correct":"F"},
          {"id":"ex44-10","question":"台風によって 電柱が 倒れました。","correct":"T"},
          {"id":"ex44-11","question":"すべての 地域で 電気が 使えません。","correct":"F"}
        ]
      }
    }
  },
  {
    "id": 45,
    "title": "Lesson 45: Pola Pembatasan (〜だけ / 〜しか〜ない / 〜ばかり)",
    "desc": "Mempelajari tiga ekspresi pembatasan: 〜だけ (hanya - umum), 〜しか〜ない (hanya - nuansa negatif/kurang), dan 〜ばかり (hanya/melulu - mendominasi/mengkritik).",
    "locked": false,
    "vocab": [
      {"id":"v45-1","rom":"Kagiru","kana":"かぎります","kanji":"限ります","en":"Membatasi / Terbatas","audio":""},
      {"id":"v45-2","rom":"Seigen (shimasu)","kana":"せいげん（します）","kanji":"制限（します）","en":"Batasan / Membatasi","audio":""},
      {"id":"v45-3","rom":"Saigen","kana":"さいげん","kanji":"再現","en":"Batas akhir / Reproduksi","audio":""},
      {"id":"v45-4","rom":"Dake","kana":"だけ","kanji":"","en":"Hanya / Saja (umum)","audio":""},
      {"id":"v45-5","rom":"Shika","kana":"しか","kanji":"","en":"Hanya (diikuti bentuk negatif)","audio":""},
      {"id":"v45-6","rom":"Bakari","kana":"ばかり","kanji":"","en":"Hanya / Melulu (jengkel/kritik)","audio":""},
      {"id":"v45-7","rom":"Okane","kana":"おかね","kanji":"お金","en":"Uang","audio":""},
      {"id":"v45-8","rom":"Tomodachi","kana":"ともだち","kanji":"友達","en":"Teman","audio":""},
      {"id":"v45-9","rom":"Sukoshi","kana":"すこし","kanji":"少し","en":"Sedikit / Sebentar","audio":""},
      {"id":"v45-10","rom":"Nokoru","kana":"のこります","kanji":"残ります","en":"Tersisa / Tinggal","audio":""},
      {"id":"v45-11","rom":"Taberu","kana":"たべます","kanji":"食べます","en":"Makan","audio":""},
      {"id":"v45-12","rom":"Asobu","kana":"あそびます","kanji":"遊びます","en":"Bermain / Bermain-main","audio":""},
      {"id":"v45-13","rom":"Nemui","kana":"ねむい","kanji":"","en":"Mengantuk","audio":""},
      {"id":"v45-14","rom":"Kaisha","kana":"かいしゃ","kanji":"会社","en":"Perusahaan","audio":""},
      {"id":"v45-15","rom":"Benkyou (shimasu)","kana":"べんきょう（します）","kanji":"勉強（します）","en":"Belajar / Studi","audio":""}
    ],
    "grammar": [
      {
        "id":"g45-1",
        "title":"1. 〜だけ (Hanya / Saja)",
        "desc":"Menyatakan batasan murni secara netral. Dapat digunakan pada kalimat bermakna positif maupun negatif.",
        "points":[
          "Pola: N / Plain + だけ",
          "Artinya: Hanya N / Saja.",
          "Contoh: Watashi dake ga shitte imasu. (Hanya saya saja yang tahu)."
        ],
        "formula":"N + だけ",
        "native_note":"Dapat digabung dengan partikel lain seperti 'dake ni' (hanya pada) atau 'dake de' (hanya dengan)."
      },
      {
        "id":"g45-2",
        "title":"2. 〜しか 〜 ない (Hanya / Tiada lain selain)",
        "desc":"Menyatakan batasan eksklusif yang bernuansa negatif. Pembicara merasa jumlah tersebut sedikit, kurang, atau tidak cukup.",
        "points":[
          "Pola: N + しか + V-negatif (nai/masen)",
          "Artinya: Hanya... saja (dan merasa tidak cukup).",
          "Contoh: Saifu ni wa 100-en shika arimasen. (Di dompet hanya ada 100 yen saja - mengeluh)."
        ],
        "formula":"N + しか 〜 ない / ません"
      },
      {
        "id":"g45-3",
        "title":"3. 〜ばかり (Melulu / Terus-menerus)",
        "desc":"Menyatakan bahwa suatu hal mendominasi situasi, atau suatu tindakan dilakukan berulang kali sehingga menimbulkan kritik atau kejengkelan.",
        "points":[
          "Pola: N + ばかり / V-te + ばかり + いる",
          "Artinya: ... melulu / ... terus-menerus.",
          "Contoh: Mainichi niku bakari tabete imasu. (Makan daging melulu setiap hari).",
          "Contoh: Terebi wo mite bakari iru. (Menonton TV melulu)."
        ],
        "formula":"N + ばかり / V-te + ばかりいる"
      }
    ],
    "patterns": [
      {"jp":"この部屋には机だけがあります。","rom":"Kono heya ni wa tsue dake ga arimasu.","en":"Di kamar ini hanya ada meja (netral)."},
      {"jp":"財布には千円しか残っていません。","rom":"Saifu ni wa sen-en shika nokotte imasen.","en":"Di dompet hanya tersisa 1000 yen saja (merasa kurang)."},
      {"jp":"彼は毎日遊んでばかりいます。","rom":"Kare wa mainichi asonde bakari imasu.","en":"Dia kerjanya bermain melulu setiap hari (kritik)."},
      {"jp":"少しだけ待ってください。","rom":"Sukoshi dake matte kudasai.","en":"Tolong tunggu sebentar saja."}
    ],
    "conversation": {
      "title":"Belajar Melulu",
      "dialogue": [
        {"speaker":"A","jp":"どうしたんですか。疲れた顔をして。","rom":"Dou shitan desu ka. Tsukareta kao wo shite.","en":"Ada apa? Wajahmu tampak lelah."},
        {"speaker":"B","jp":"最近試験があるので、勉強ばかりしているんです。","rom":"Saikin shiken ga aru node, benkyou bakari shite iru n desu.","en":"Akhir-akhir ini karena ada ujian, saya belajar melulu."},
        {"speaker":"A","jp":"無理をしないで、少しだけ休んでくださいね。","rom":"Muri wo shinaide, sukoshi dake yasunde kudasai ne.","en":"Jangan dipaksakan, tolong istirahat sebentar saja ya."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Kalimat yang menggunakan 'shika' dengan benar:","options":[{"text":"財布に百円しかありません。","correct":true},{"text":"財布に百円しかあります。","correct":false},{"text":"財布に百円だけありません。","correct":false}]},
      {"type":"fill","question":"Terjemahkan: 'Makan daging melulu'.\nNiku [   ] tabete imasu.","answer":"bakari"},
      {"type":"mcq","question":"Apa perbedaan nuansa antara 'dake' dan 'shika'?","options":[{"text":"dake bersifat netral; shika bernuansa kurang/negatif","correct":true},{"text":"Keduanya sama saja","correct":false},{"text":"shika bersifat netral; dake bernuansa negatif","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Hanya Satu Yang Tersisa","situation":"Memeriksa persediaan makanan di lemari","dialogue":[
        {"speaker":"A","jp":"ラーメンはまだありますか。","rom":"Ramen wa mada arimasu ka.","en":"Apakah ramennya masih ada?"},
        {"speaker":"B","jp":"いいえ、もう一つしかありません。","rom":"Iie, mou hitotsu shika arimasen.","en":"Tidak, tinggal satu buah saja."}
      ]}
    ],
    "reibun": [
      {"id":"r45-1","jp":"この電車は京都だけに止まります。","rom":"Kono densha wa Kyoto dake ni tomarimasu.","en":"Kereta ini hanya berhenti di Kyoto."},
      {"id":"r45-2","jp":"平仮名しか書くことができません。","rom":"Hiragana shika kaku koto ga dekimasen.","en":"Saya hanya bisa menulis hiragana saja."},
      {"id":"r45-3","jp":"彼は毎日肉ばかり食べています。","rom":"Kare wa mainichi niku bakari tabete imasu.","en":"Dia makan daging melulu setiap hari."},
      {"id":"r45-4","jp":"五分だけ休みましょう。","rom":"Go-fun dake yasumashou.","en":"Mari kita beristirahat selama 5 menit saja."},
      {"id":"r45-5","jp":"テストの点が悪かったので、泣きばかりでした。","rom":"Tesuto no ten ga warakatta node, naki bakari deshita.","en":"Karena nilai ujiannya buruk, kerjanya menangis melulu."}
    ],
    "workbook": [
      {"id":"wb45-1","pattern":"N + だけ","instruction":"Terjemahkan: 'Hanya hari Minggu'.","question":"Nichiyoubi","correct":"にちようびだけ","romaji":"Nichiyoubi dake.","translation":"Hanya hari Minggu."},
      {"id":"wb45-2","pattern":"N + しか + ない","instruction":"Terjemahkan: 'Hanya bisa bicara sedikit'.","question":"Sukoshi / hanaseru","correct":"すこししかはなせません。","romaji":"Sukoshi shika hanasemasen.","translation":"Hanya bisa bicara sedikit."},
      {"id":"wb45-3","pattern":"N + ばかり","instruction":"Terjemahkan: 'Belanja melulu'.","question":"Kaimono / suru","correct":"かいものばかりしています。","romaji":"Kaimono bakari shite imasu.","translation":"Belanja melulu."},
      {"id":"wb45-4","pattern":"V-te + ばかりいる","instruction":"Terjemahkan: 'Tidur melulu'.","question":"Neru","correct":"ねてばかりいます。","romaji":"Nete bakari imasu.","translation":"Tidur melulu."},
      {"id":"wb45-5","pattern":"N + しか + ない","instruction":"Terjemahkan: 'Hanya ada satu orang'.","question":"Hitori / iru","correct":"ひとりしかいません。","romaji":"Hitori shika imasen.","translation":"Hanya ada satu orang."}
    ],
    "exam": {
      "part1": [
        {"id":"ex45-1","sentence":"ひらがな [ ] かくことが できません。","correct":"しか","translation":"Hanya bisa menulis hiragana saja."},
        {"id":"ex45-2","sentence":"この ケーキは わたし [ ] 食べました。","correct":"だけ","translation":"Kue ini hanya saya saja yang makan."},
        {"id":"ex45-3","sentence":"あそんで [ ] いると、しけんに おちますよ。","correct":"ばかり","translation":"Kalau bermain melulu, kamu akan gagal ujian lho."},
        {"id":"ex45-4","sentence":"じかんが 5ふん [ ] ありません。いそぎましょう。","correct":"しか","translation":"Waktunya tinggal 5 menit saja. Mari bergegas."},
        {"id":"ex45-5","sentence":"すこし [ ] まってください。","correct":"だけ","translation":"Tolong tunggu sebentar saja."}
      ],
      "part2": [
        {"id":"ex45-6","question":"Pola 'shika' harus berpasangan dengan bentuk kata kerja:","options":[{"text":"Negatif","correct":true},{"text":"Positif","correct":false},{"text":"Bentuk kamus","correct":false}]},
        {"id":"ex45-7","question":"Apa arti kalimat 'Nete bakari iru'?","options":[{"text":"Tidur melulu","correct":true},{"text":"Baru saja tidur","correct":false},{"text":"Sulit tidur","correct":false}]},
        {"id":"ex45-8","question":"Pola pembatasan mana yang bernuansa netral?","options":[{"text":"dake","correct":true},{"text":"shika","correct":false},{"text":"bakari","correct":false}]}
      ],
      "part3": {
        "text":"わたしの おとうとは 毎日 ゲームをしてばかりいます。勉強は 少ししかしません。テストの 前だけ 勉強しますが、点数は いつも 悪いです。母は いつも 怒ってばかりいます。",
        "questions": [
          {"id":"ex45-9","question":"おとうとは よく ゲームを します。","correct":"T"},
          {"id":"ex45-10","question":"おとうとは 毎日 たくさん 勉強します。","correct":"F"},
          {"id":"ex45-11","question":"母は おとうとに 怒っています。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 46,
    "title": "Lesson 46: Syarat Mutlak & Penekanan (〜さえ〜ば / 〜さえ)",
    "desc": "Mempelajari cara menyatakan satu-satunya syarat agar suatu hal terwujud dengan 〜さえ〜ば (asalkan), serta memberikan penekanan ekstrem dengan 〜さえ (bahkan).",
    "locked": false,
    "vocab": [
      {"id":"v46-1","rom":"Jouken","kana":"じょうけん","kanji":"条件","en":"Syarat / Kondisi","audio":""},
      {"id":"v46-2","rom":"Taisetsu","kana":"たいせつ","kanji":"大切","en":"Penting / Berharga","audio":""},
      {"id":"v46-3","rom":"Saishou","kana":"さいしょう","kanji":"最小","en":"Paling kecil / Minimal","audio":""},
      {"id":"v46-4","rom":"Okane","kana":"おかね","kanji":"お金","en":"Uang","audio":""},
      {"id":"v46-5","rom":"Keitai","kana":"けいたい","kanji":"携帯","en":"Ponsel / Handphone","audio":""},
      {"id":"v46-6","rom":"Jikan","kana":"じかん","kanji":"時間","en":"Waktu","audio":""},
      {"id":"v46-7","rom":"Sae","kana":"さえ","kanji":"","en":"Bahkan / Asalkan","audio":""},
      {"id":"v46-8","rom":"Ba","kana":"ば","kanji":"","en":"Bentuk pengandaian (if)","audio":""},
      {"id":"v46-9","rom":"Yomu","kana":"よみます","kanji":"読みます","en":"Membaca","audio":""},
      {"id":"v46-1","rom":"Kaku","kana":"かきます","kanji":"書きます","en":"Menulis","audio":""},
      {"id":"v46-11","rom":"Iku","kana":"いきます","kanji":"行きます","en":"Pergi","audio":""},
      {"id":"v46-12","rom":"Taberu","kana":"たべます","kanji":"食べます","en":"Makan","audio":""},
      {"id":"v46-13","rom":"Kosho","kana":"こしょう","kanji":"故障","en":"Kerusakan / Breakdown","audio":""},
      {"id":"v46-14","rom":"Shunkan","kana":"しゅんかん","kanji":"瞬間","en":"Momen / Seketika","audio":""},
      {"id":"v46-15","rom":"Anshin (shimasu)","kana":"あんしん（します）","kanji":"安心（します）","en":"Lega / Tenang","audio":""}
    ],
    "grammar": [
      {
        "id":"g46-1",
        "title":"1. 〜さえ 〜 ば (Asalkan)",
        "desc":"Menyatakan syarat minimum/mutlak yang diperlukan agar suatu hal bisa terwujud. Jika syarat satu ini terpenuhi, hal lainnya bukan masalah.",
        "points":[
          "Pola kata benda: N + さえ + V-ba (areba/sureba)",
          "Artinya: Asalkan ada/melakukan N.",
          "Contoh: Okane sae areba shiawase desu. (Asalkan ada uang, saya bahagia).",
          "Pola kata kerja: V-stem + さえすれば (Asalkan melakukan V).",
          "Contoh: Benkyou shi sae sureba goukaku dekimasu. (Asalkan belajar, pasti lulus)."
        ],
        "formula":"N + さえ + V-ば / V-stem + さえすれば",
        "native_note":"Pola ini menekankan jalan pintas atau syarat utama yang paling krusial dalam suatu masalah."
      },
      {
        "id":"g46-2",
        "title":"2. 〜さえ (Bahkan)",
        "desc":"Menyebutkan contoh ekstrem untuk menekankan bahwa keadaan di sekitarnya pun sama atau lebih dari itu.",
        "points":[
          "Pola: N + さえ",
          "Artinya: Bahkan N pun...",
          "Contoh: Kono mondai wa kodomo sae dekimasu. (Masalah ini bahkan anak kecil pun bisa mengerjakannya)."
        ],
        "formula":"N + さえ"
      }
    ],
    "patterns": [
      {"jp":"時間さえあれば、日本に行きたいです。","rom":"Jikan sae areba, Nihon ni ikitai desu.","en":"Asalkan ada waktu, saya ingin pergi ke Jepang."},
      {"jp":"この問題は子どもさえできます。","rom":"Kono mondai wa kodomo sae dekimasu.","en":"Masalah ini bahkan anak kecil pun bisa mengerjakannya."},
      {"jp":"薬を飲みさえすれば、風邪は治ります。","rom":"Kusuri wo nomi sae sureba, kaze wa naorimasu.","en":"Asalkan meminum obat, pilek/flu akan sembuh."},
      {"jp":"あなたさえいれば、私は何も必要ありません。","rom":"Anata sae ireba, watashi wa nani mo hitsuyou arimasen.","en":"Asalkan ada kamu, saya tidak butuh apa-apa lagi."}
    ],
    "conversation": {
      "title":"Asalkan Sehat",
      "dialogue": [
        {"speaker":"A","jp":"明日の試験がとても心配です。","rom":"Ashita no shiken ga totemo shinpai desu.","en":"Saya sangat khawatir tentang ujian besok."},
        {"speaker":"B","jp":"大丈夫ですよ。体調さえ良ければ、実力を出すことができます。","rom":"Daijoubu desu yo. Taichou sae yokereba, jitsuryoku wo dasu koto ga dekimasu.","en":"Tidak apa-apa kok. Asalkan kondisi tubuh baik, kamu pasti bisa mengeluarkan kemampuanmu."},
        {"speaker":"A","jp":"そうですね。今夜は早く寝ることにします。","rom":"Soo desu ne. Konya wa hayaku neru koto ni shimasu.","en":"Benar juga. Malam ini saya memutuskan untuk tidur cepat."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Pilih terjemahan 'Asalkan ada uang':","options":[{"text":"おかねさえあれば","correct":true},{"text":"おかねがあるのに","correct":false},{"text":"おかねだけあれば","correct":false}]},
      {"type":"fill","question":"Terjemahkan: 'Bahkan guru pun tidak tahu'.\nSensei [   ] shirimasen.","answer":"sae"},
      {"type":"mcq","question":"Pola kerja 'asalkan minum' yang tepat:","options":[{"text":"のみさえすれば","correct":true},{"text":"のむだけで","correct":false},{"text":"のむようにすれば","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Syarat Kelulusan","situation":"Siswa bertanya syarat lulus ujian","dialogue":[
        {"speaker":"Siswa","jp":"このテストに合格する条件は何ですか。","rom":"Kono tesuto ni goukaku suru jouken wa nan desu ka.","en":"Apa syarat lulus ujian ini?"},
        {"speaker":"Guru","jp":"毎日復習しさえすれば、簡単に合格できますよ。","rom":"Mainichi fukushuu shi sae sureba, kantan ni goukaku dekimasu yo.","en":"Asalkan mengulang pelajaran setiap hari, kamu bisa lulus dengan mudah."}
      ]}
    ],
    "reibun": [
      {"id":"r46-1","jp":"あなたさえ良ければ、明日会いましょう。","rom":"Anata sae yokereba, ashita aimashou.","en":"Asalkan Anda setuju/baik, mari besok bertemu."},
      {"id":"r46-2","jp":"平仮名さえ書けない人がいます。","rom":"Hiragana sae kakenai hito ga imasu.","en":"Ada orang yang bahkan tidak bisa menulis hiragana."},
      {"id":"r46-3","jp":"辞書さえあれば、この本が読めます。","rom":"Jisho sae areba, kono hon ga yomemasu.","en":"Asalkan ada kamus, saya bisa membaca buku ini."},
      {"id":"r46-4","jp":"この部屋は静かさえあれば、十分です。","rom":"Kono heya wa shizuka sae areba, juubun desu.","en":"Kamar ini asalkan tenang saja sudah cukup."},
      {"id":"r46-5","jp":"体さえ丈夫なら、何でもできます。","rom":"Karada sae joubu nara, nani demo dekimasu.","en":"Asalkan tubuh sehat/kuat, apapun bisa dilakukan."}
    ],
    "workbook": [
      {"id":"wb46-1","pattern":"N + さえ + V-ba","instruction":"Terjemahkan: 'Asalkan ada komputer'.","question":"Konpyuutaa / areba","correct":"コンピューターさえあれば","romaji":"Konpyuutaa sae areba.","translation":"Asalkan ada komputer."},
      {"id":"wb46-2","pattern":"N + さえ","instruction":"Terjemahkan: 'Bahkan istri pun'.","question":"Tsuma","correct":"つまさえ","romaji":"Tsuma sae.","translation":"Bahkan istri pun."},
      {"id":"wb46-3","pattern":"V-stem + さえすれば","instruction":"Terjemahkan: 'Asalkan belajar'.","question":"Benkyou suru","correct":"べんきょうしさえすれば","romaji":"Benkyou shi sae sureba.","translation":"Asalkan belajar."},
      {"id":"wb46-4","pattern":"N + さえ + Adj-ba","instruction":"Terjemahkan: 'Asalkan harganya murah'.","question":"Nedan / yasui","correct":"ねだんさえやすければ","romaji":"Nedan sae yasukereba.","translation":"Asalkan harganya murah."},
      {"id":"wb46-5","pattern":"N + さえ","instruction":"Terjemahkan: 'Bahkan bayi pun'.","question":"Akachan","correct":"あかちゃんさえ","romaji":"Akachan sae.","translation":"Bahkan bayi pun."}
    ],
    "exam": {
      "part1": [
        {"id":"ex46-1","sentence":"おかね [ ] あれば、なんでも かえます。","correct":"さえ","translation":"Asalkan ada uang, apapun bisa dibeli."},
        {"id":"ex46-2","sentence":"しずか [ ] あれば、このへやで いいです。","correct":"さえ","translation":"Asalkan tenang, kamar ini tidak apa-apa."},
        {"id":"ex46-3","sentence":"あのひとは ひらがな [ ] かけません。","correct":"さえ","translation":"Orang itu bahkan hiragana pun tidak bisa menulis."},
        {"id":"ex46-4","sentence":"まいにち れんしゅうし [ ] すれば、じょうずになります。","correct":"さえ","translation":"Asalkan latihan setiap hari, kamu akan menjadi mahir."},
        {"id":"ex46-5","sentence":"てんき [ ] よければ、あした ハイキングに いきます。","correct":"さえ","translation":"Asalkan cuacanya bagus, besok pergi mendaki gunung."}
      ],
      "part2": [
        {"id":"ex46-6","question":"Pilih arti 'Anata sae ireba shiawase':","options":[{"text":"Asalkan ada kamu saya bahagia","correct":true},{"text":"Bahkan kamu pun bahagia","correct":false},{"text":"Hanya kamu yang bahagia","correct":false}]},
        {"id":"ex46-7","question":"Apa arti 'Hiragana sae kakenai'?","options":[{"text":"Bahkan hiragana pun tidak bisa menulis","correct":true},{"text":"Hanya bisa menulis hiragana","correct":false},{"text":"Bisa menulis hiragana dengan baik","correct":false}]},
        {"id":"ex46-8","question":"Bagaimana cara membuat kata kerja 'asalkan makan'?","options":[{"text":"食べさえすれば","correct":true},{"text":"食べるだけなら","correct":false},{"text":"食べれば","correct":false}]}
      ],
      "part3": {
        "text":"現代の 人々は、携帯電話さえあれば どこでも 仕事が できます。しかし、携帯電話が あるために 忙しすぎることも あります。休みの日さえ 仕事の メールが 来るので、休む時間が ないと 怒る人も います。",
        "questions": [
          {"id":"ex46-9","question":"携帯電話が あれば どこでも 仕事が できます。","correct":"T"},
          {"id":"ex46-10","question":"携帯電話が あるのは 良いことばかりです。","correct":"F"},
          {"id":"ex46-11","question":"休みの日に メールが 来るのを 嫌がる人が います。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 47,
    "title": "Lesson 47: Kalimat Majemuk Tingkat Lanjut (〜上で / 〜上に / 〜上は)",
    "desc": "Mempelajari struktur sambungan formal: 〜上で (setelah melakukan persiapan), 〜上に (selain itu/ditambah lagi), dan 〜上は (karena sudah/kini setelah).",
    "locked": false,
    "vocab": [
      {"id":"v47-1","rom":"Katei","kana":"かてい","kanji":"過程","en":"Proses / Tahapan","audio":""},
      {"id":"v47-2","rom":"Jouken","kana":"じょうけん","kanji":"条件","en":"Syarat / Ketentuan","audio":""},
      {"id":"v47-3","rom":"Kakugo","kana":"かくご","kanji":"覚悟","en":"Kesiapan mental / Ketetapan hati","audio":""},
      {"id":"v47-4","rom":"Keikaku","kana":"けいかく","kanji":"計画","en":"Rencana / Program","audio":""},
      {"id":"v47-5","rom":"Ue de","kana":"うえで","kanji":"上で","en":"Setelah melakukan / Berdasarkan","audio":""},
      {"id":"v47-6","rom":"Ue ni","kana":"うえに","kanji":"上に","en":"Di samping itu / Selain itu","audio":""},
      {"id":"v47-7","rom":"Ue wa","kana":"うえは","kanji":"上は","en":"Kini setelah / Karena sudah","audio":""},
      {"id":"v47-8","rom":"Shigoto","kana":"しごと","kanji":"仕事","en":"Pekerjaan","audio":""},
      {"id":"v47-9","rom":"Shiken","kana":"しけん","kanji":"試験","en":"Ujian","audio":""},
      {"id":"v47-10","rom":"Keiyaku","kana":"けいやく","kanji":"契約","en":"Kontrak / Perjanjian","audio":""},
      {"id":"v47-11","rom":"Soudan","kana":"そうだん","kanji":"相談","en":"Konsultasi / Diskusi","audio":""},
      {"id":"v47-12","rom":"Kettei","kana":"けってい","kanji":"決定","en":"Keputusan","audio":""},
      {"id":"v47-13","rom":"Bijin","kana":"びじん","kanji":"美人","en":"Wanita cantik","audio":""},
      {"id":"v47-14","rom":"Seikaku","kana":"せいかく","kanji":"性格","en":"Kepribadian / Sifat","audio":""},
      {"id":"v47-15","rom":"Kakunin","kana":"かくにん","kanji":"確認","en":"Konfirmasi / Pemeriksaan","audio":""}
    ],
    "grammar": [
      {
        "id":"g47-1",
        "title":"1. 〜上で (Setelah Melakukan / Berdasarkan)",
        "desc":"Menyatakan bahwa tindakan B dilakukan setelah melakukan tindakan A sebagai persiapan, penyelidikan, atau landasan berpikir yang matang.",
        "points":[
          "Pola: V-ta + 上で / N + の上で (no ue de)",
          "Artinya: Setelah melakukan A, baru melakukan B.",
          "Contoh: Kazoku to soudan shita ue de kめます (Saya memutuskan setelah berdiskusi dengan keluarga)."
        ],
        "formula":"V-ta + 上で / N + の上で",
        "native_note":"Ini lebih formal daripada '~te kara' dan menunjukkan proses pengambilan keputusan yang hati-hati."
      },
      {
        "id":"g47-2",
        "title":"2. 〜上に (Selain itu / Di samping itu)",
        "desc":"Menyatakan penambahan informasi yang searah (positif ditambah positif, atau negatif ditambah negatif).",
        "points":[
          "Pola: Plain Form (Na-adj + na/de aru, N + no/de aru) + 上に",
          "Artinya: Sudah... ditambah lagi... / Selain...",
          "Contoh: Kono heya wa hiroi ue ni, yachin mo yasui desu. (Kamar ini selain luas, uang sewanya juga murah)."
        ],
        "formula":"Plain Form + 上に"
      },
      {
        "id":"g47-3",
        "title":"3. 〜上は (Karena Sudah / Kini Setelah)",
        "desc":"Menyatakan tekad kuat, keputusan mutlak, atau kewajiban moral yang muncul karena suatu keadaan tidak bisa dihindari lagi (serupa dengan からには).",
        "points":[
          "Pola: V-dict / V-ta + 上は",
          "Artinya: Kini setelah... / Karena sudah...",
          "Contoh: Konyaku shita ue wa, kekkon shinai wake ni wa ikimasen. (Kini setelah bertunangan, tidak boleh tidak menikah)."
        ],
        "formula":"V-dict/ta + 上は"
      }
    ],
    "patterns": [
      {"jp":"実施計画を確認した上で、署名します。","rom":"Jisshi-keikaku wo kakunin shita ue de, shomei shimasu.","en":"Saya menandatangani setelah mengonfirmasi rencana pelaksanaan."},
      {"jp":"この部屋は広い上に、家賃も安いです。","rom":"Kono heya wa hiroi ue ni, yachin mo yasui desu.","en":"Kamar ini selain luas, uang sewanya juga murah."},
      {"jp":"日本に来た上は、日本語を一生懸命勉強します。","rom":"Nihon ni kita ue wa, Nihongo wo isshoukenmei benkyou shimasu.","en":"Karena sudah datang ke Jepang, saya akan belajar bahasa Jepang dengan sungguh-sungguh."},
      {"jp":"契約書を読んだ上で、サインしてください。","rom":"Keiyakusho wo yonda ue de, sain shite kudasai.","en":"Tolong tanda tangani setelah Anda membaca surat kontrak."}
    ],
    "conversation": {
      "title":"Menandatangani Kontrak",
      "dialogue": [
        {"speaker":"A","jp":"これにすぐ署mしていいですか。","rom":"Kore ni sugu shomei shite ii desu ka?","en":"Bolehkah saya langsung menandatangani ini?"},
        {"speaker":"B","jp":"いいえ、課長と相談した上で署名してください。","rom":"Iie, kachou to soudan shita ue de shomei shite kudasai.","en":"Tidak, tolong tanda tangani setelah berdiskusi dengan manajer terlebih dahulu."},
        {"speaker":"A","jp":"わかりました。相談の上で署名します。","rom":"Wakarimashita. Soudan no ue de shomei shimasu.","en":"Baiklah. Saya akan tanda tangan setelah berkonsultasi."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Arti dari 'Kono heya wa hiroi ue ni, yasui':","options":[{"text":"Kamar ini selain luas, juga murah","correct":true},{"text":"Kamar ini murah setelah luas","correct":false},{"text":"Kamar ini harus luas agar murah","correct":false}]},
      {"type":"fill","question":"Terjemahkan: 'Setelah mengonfirmasi fakta'.\nJijitsu wo kakunin shita [   ] de.","answer":"ue"},
      {"type":"mcq","question":"Pola 'ue wa' menunjukkan:","options":[{"text":"Tekad kuat karena situasi sudah terjadi","correct":true},{"text":"Perbandingan dua hal kontras","correct":false},{"text":"Saran yang santai","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Memilih Universitas","situation":"Dua siswa membicarakan pilihan kampus mereka","dialogue":[
        {"speaker":"A","jp":"どこの大学にするか決めましたか。","rom":"Doko no daigaku ni suru ka kimemashita ka.","en":"Apakah kamu sudah memutuskan universitas mana?"},
        {"speaker":"B","jp":"いいえ、大学を見学した上で決めたいと思います。","rom":"Iie, daigaku wo kemgaku shita ue de kimetai to omoimasu.","en":"Belum, saya ingin memutuskan setelah mengunjungi universitasnya."}
      ]}
    ],
    "reibun": [
      {"id":"r47-1","jp":"よく考えた上で、返事をします。","rom":"Yoku kangaeta ue de, henji wo shimasu.","en":"Saya akan membalas setelah memikirkannya baik-baik."},
      {"id":"r47-2","jp":"今日は寒い上に、風も強いです。","rom":"Kyou wa samui ue ni, kaze mo tsuyoi desu.","en":"Hari ini selain dingin, anginnya juga kencang."},
      {"id":"r47-3","jp":"決断した上は、後悔しません。","rom":"Ketsudan shita ue wa, koukai shimasen.","en":"Kini setelah mengambil keputusan, saya tidak akan menyesal."},
      {"id":"r47-4","jp":"両親の許可を得た上で、留学します。","rom":"Ryooshin no kyoka wo eta ue de, ryugaku shimasu.","en":"Saya kuliah di luar negeri setelah mendapat izin orang tua."},
      {"id":"r47-5","jp":"あの店は安い上に、味も美味しいです。","rom":"Ano mise wa yasui ue ni, aji mo oishii desu.","en":"Toko itu selain murah, rasanya juga lezat."}
    ],
    "workbook": [
      {"id":"wb47-1","pattern":"V-ta + 上で","instruction":"Terjemahkan: 'Memutuskan setelah memeriksa'.","question":"Kakunin suru / kimeru","correct":"かくにんしたうえできめます。","romaji":"Kakunin shita ue de kimemasu.","translation":"Memutuskan setelah memeriksa."},
      {"id":"wb47-2","pattern":"Plain + 上に","instruction":"Terjemahkan: 'Selain pintar, ramah'.","question":"Atama ga ii / shinsetsu","correct":"あたまがいいいうえにしんせつです。","romaji":"Atama ga ii ue ni shinsetsu desu.","translation":"Selain pintar, ramah."},
      {"id":"wb47-3","pattern":"V-dict/ta + 上は","instruction":"Terjemahkan: 'Karena sudah berjanji, harus menepati'.","question":"Yakusoku shita / mamoru","correct":"やくそくしたうえはまもります。","romaji":"Yakusoku shita ue wa mamorimasu.","translation":"Karena sudah berjanji, saya akan menepatinya."},
      {"id":"wb47-4","pattern":"N + の上で","instruction":"Terjemahkan: 'Setelah berkonsultasi'.","question":"Soudan","correct":"そうだんのうえで","romaji":"Soudan no ue de.","translation":"Setelah berkonsultasi."},
      {"id":"wb47-5","pattern":"Plain + 上に","instruction":"Terjemahkan: 'Selain hujan, ada badai'.","question":"Ame / taifuu","correct":"あめがふるいうえにたいふうもきています。","romaji":"Ame ga furu ue ni taifuu mo kite imasu.","translation":"Selain hujan, badai juga datang."}
    ],
    "exam": {
      "part1": [
        {"id":"ex47-1","sentence":"けいやくしょを よく よんだ [ ] で サインしてください。","correct":"うえ","translation":"Silakan tanda tangan setelah membaca surat kontrak dengan baik."},
        {"id":"ex47-2","sentence":"かれは あたまが いい [ ] に、スポーツも できます。","correct":"うえ","translation":"Dia selain pintar, juga bisa berolahraga."},
        {"id":"ex47-3","sentence":"しゅっぱつする [ ] は、じゅんびを かんぜんに しなければなりません。","correct":"うえは","translation":"Kini setelah akan berangkat, persiapan harus dilakukan dengan sempurna."},
        {"id":"ex47-4","sentence":"そうだんの [ ] で、お返事いたします。","correct":"うえ","translation":"Akan kami kabari setelah berkonsultasi."},
        {"id":"ex47-5","sentence":"このアパートは せまい [ ] に、やちんが たかいです。","correct":"うえ","translation":"Apartemen ini selain sempit, uang sewanya juga mahal."}
      ],
      "part2": [
        {"id":"ex47-6","question":"Pilih sambungan yang tepat: 'Nihon ni ryugaku suru [  ] wa, isshoukenmei benkyou suru'","options":[{"text":"上は","correct":true},{"text":"上で","correct":false},{"text":"上に","correct":false}]},
        {"id":"ex47-7","question":"Apa arti 'Kono ryuri wa tsukuri-kata ga kantan na ue ni, oishii'?","options":[{"text":"Masakan ini cara buatnya mudah dan juga enak","correct":true},{"text":"Masakan ini dibuat setelah mudah","correct":false},{"text":"Masakan ini tidak terlalu enak","correct":false}]},
        {"id":"ex47-8","question":"Pola 'N no ue de' setara dengan:","options":[{"text":"N + shita ue de","correct":true},{"text":"N + suru ue ni","correct":false},{"text":"N + suru ue wa","correct":false}]}
      ],
      "part3": {
        "text":"私たちは 新しい 事業計画を よく 話し合った上で、スタートすることにしました。計画は 難しい 上に、時間も あまり ありません。しかし、スタートした 上は、成功するまで 全員で がんばる覚悟です。",
        "questions": [
          {"id":"ex47-9","question":"話し合う前に スタートしました。","correct":"F"},
          {"id":"ex47-10","question":"計画は 難しくて 時間も 少ないです。","correct":"T"},
          {"id":"ex47-11","question":"スタートしたからには 成功するまで がんばります。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 48,
    "title": "Lesson 48: Ekspresi Pertentangan Formal (〜ものの / 〜とはいえ / 〜ながらも)",
    "desc": "Mempelajari ungkapan pertentangan yang lebih formal: 〜ものの (meskipun - tertulis), 〜とはいえ (walaupun dikatakan demikian), dan 〜ながらも (meskipun berada dalam kondisi).",
    "locked": false,
    "vocab": [
      {"id":"v48-1","rom":"Jijitsu","kana":"じじつ","kanji":"事実","en":"Kenyataan / Fakta","audio":""},
      {"id":"v48-2","rom":"Genjitsu","kana":"げんじつ","kanji":"現実","en":"Realitas","audio":""},
      {"id":"v48-3","rom":"Rikai (shimasu)","kana":"りかい（します）","kanji":"理解（します）","en":"Pemahaman / Memahami","audio":""},
      {"id":"v48-4","rom":"Monono","kana":"ものの","kanji":"","en":"Meskipun / Walaupun (tertulis)","audio":""},
      {"id":"v48-5","rom":"To wa ie","kana":"とはいえ","kanji":"","en":"Meskipun demikian / Walaupun","audio":""},
      {"id":"v48-6","rom":"Nagara mo","kana":"ながらも","kanji":"","en":"Meskipun / Walaupun dalam keadaan","audio":""},
      {"id":"v48-7","rom":"Kotoba","kana":"ことば","kanji":"言葉","en":"Kata-kata","audio":""},
      {"id":"v48-8","rom":"Kaisha","kana":"かいしゃ","kanji":"会社","en":"Perusahaan","audio":""},
      {"id":"v48-9","rom":"Shakai","kana":"しゃかい","kanji":"社会","en":"Masyarakat","audio":""},
      {"id":"v48-10","rom":"Keiken","kana":"けいけん","kanji":"経験","en":"Pengalaman","audio":""},
      {"id":"v48-11","rom":"Muzukashii","kana":"むずかしい","kanji":"難しい","en":"Sulit","audio":""},
      {"id":"v48-12","rom":"Kantan (na)","kana":"かんたん（な）","kanji":"簡単（な）","en":"Mudah / Sederhana","audio":""},
      {"id":"v48-13","rom":"Okane","kana":"おかね","kanji":"お金","en":"Uang","audio":""},
      {"id":"v48-14","rom":"Kiboo","kana":"きぼう","kanji":"希望","en":"Harapan / Keinginan","audio":""},
      {"id":"v48-15","rom":"Genki (na)","kana":"げんき（な）","kanji":"元気（な）","en":"Sehat / Bersemangat","audio":""}
    ],
    "grammar": [
      {
        "id":"g48-1",
        "title":"1. 〜ものの (Meskipun / Walaupun — Tertulis)",
        "desc":"Menyatakan kontradiksi antara fakta yang diakui dengan kenyataan sesudahnya yang tidak sesuai harapan (mirip keredo/ga namun lebih formal).",
        "points":[
          "Pola: Plain Form (Na-adj + na, N + de aru) + ものの",
          "Artinya: Meskipun... namun kenyataannya...",
          "Contoh: Nihon-ryoko ni ikitai monono, okane ga arimasen. (Meskipun ingin wisata ke Jepang, saya tidak punya uang)."
        ],
        "formula":"Plain Form + ものの",
        "native_note":"Biasa ditemukan dalam teks tulisan, artikel berita, atau laporan bisnis resmi."
      },
      {
        "id":"g48-2",
        "title":"2. 〜とはいえ (Meskipun Demikian)",
        "desc":"Mengakui kebenaran suatu pernyataan A, namun menekankan bahwa kenyataan B tidak sepenuhnya sama atau terdapat batasan.",
        "points":[
          "Pola: N / Plain Form + とはいえ",
          "Artinya: Walaupun dikatakan demikian... / Meskipun...",
          "Contoh: Pro to wa ie, machigau koto mo arimasu. (Meskipun dia profesional, ada kalanya dia salah juga)."
        ],
        "formula":"N / Plain Form + とはいえ"
      },
      {
        "id":"g48-3",
        "title":"3. 〜ながらも (Meskipun dalam Keadaan)",
        "desc":"Menyatakan pertentangan di mana subjek melakukan sesuatu yang luar biasa meskipun berada dalam kondisi yang kurang mendukung.",
        "points":[
          "Pola: V-stem / N / Adj + ながらも",
          "Artinya: Meskipun... (dalam kondisi tersebut).",
          "Contoh: Semai nagara mo tanoshii uchi desu. (Meskipun sempit, ini adalah rumah yang menyenangkan)."
        ],
        "formula":"V-stem / N / Adj + ながらも"
      }
    ],
    "patterns": [
      {"jp":"日本語を３年勉強しているものの、まだ話せません。","rom":"Nihongo wo 3-nen benkyou shite iru monono, mada hanasemasen.","en":"Meskipun sudah belajar bahasa Jepang selama 3 tahun, saya belum bisa berbicara."},
      {"jp":"春とはいえ、まだ寒い日があります。","rom":"Haru to wa ie, mada samui hi ga arimasu.","en":"Meskipun sudah musim semi, hari-hari dingin masih ada."},
      {"jp":"残念ながらも、試験に落ちてしまいました。","rom":"Zannen nagara mo, shiken ni ochite shimaimashita.","en":"Meskipun disayangkan, saya telah gagal dalam ujian."},
      {"jp":"車を買ったものの、運転ができません。","rom":"Kuruma wo katta monono, unten ga dekimasen.","en":"Meskipun sudah membeli mobil, saya tidak bisa menyetir."}
    ],
    "conversation": {
      "title":"Meskipun Musim Semi",
      "dialogue": [
        {"speaker":"A","jp":"今日はとても寒いですね。本当に春ですか。","rom":"Kyou wa totemo samui desu ne. Hontou ni haru desu ka?","en":"Hari ini dingin sekali ya. Apakah ini benar-benar musim semi?"},
        {"speaker":"B","jp":"ええ、春とはいえ、冷たい風がまだ吹きますね。","rom":"Ee, haru to wa ie, tsumetai kaze ga mada fukimasu ne.","en":"Ya, meskipun sudah musim semi, angin dingin masih bertiup ya."},
        {"speaker":"A","jp":"早く暖かくなるといいですね。","rom":"Hayaku atatakaku naru to ii desu ne.","en":"Semoga cepat hangat ya."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Arti dari 'Pro to wa ie':","options":[{"text":"Meskipun dikatakan profesional","correct":true},{"text":"Agar menjadi profesional","correct":false},{"text":"Karena profesional","correct":false}]},
      {"type":"fill","question":"Terjemahkan: 'Meskipun tahu fakta itu'.\nJijitsu wo shitte iru [   ]...","answer":"monono"},
      {"type":"mcq","question":"Pilih kalimat 'Meskipun kecil, menyenangkan' yang tepat:","options":[{"text":"狭いながらも楽しい","correct":true},{"text":"狭いといいながら","correct":false},{"text":"狭いとはいえ","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Membeli Gadget Baru","situation":"Membicarakan barang elektronik yang baru dibeli","dialogue":[
        {"speaker":"A","jp":"新しいタブレットはどうですか。","rom":"Atarashii taburetto wa dou desu ka?","en":"Bagaimana tablet barumu?"},
        {"speaker":"B","jp":"買ったものの、あまり使っていません。","rom":"Katta monono, amari tsukatte imasen.","en":"Meskipun sudah dibeli, saya jarang menggunakannya."}
      ]}
    ],
    "reibun": [
      {"id":"r48-1","jp":"勉強したものの、試験の点は悪かったです。","rom":"Benkyou shita monono, shiken no ten wa warakatta desu.","en":"Meskipun sudah belajar, nilai ujiannya buruk."},
      {"id":"r48-2","jp":"実力があるとはいえ、本番は緊張します。","rom":"Jitsuryoku ga aru to wa ie, honban wa kinchou shimasu.","en":"Meskipun dikatakan memiliki kemampuan, saat pertunjukan tetap gugup."},
      {"id":"r48-3","jp":"少しながらも、お金を寄付しました。","rom":"Sukoshi nagara mo, okane wo kifuu shimashita.","en":"Meskipun hanya sedikit, saya menyumbangkan uang."},
      {"id":"r48-4","jp":"計画を立てたものの、実施できません。","rom":"Keikaku wo tateta monono, jisshi dekimasen.","en":"Meskipun sudah membuat rencana, itu tidak bisa dilaksanakan."},
      {"id":"r48-5","jp":"子どもながらも、社会の規則を守ります。","rom":"Kodomo nagara mo, shakai no kisoku wo mamorimasu.","en":"Meskipun anak-anak, dia mematuhi aturan masyarakat."}
    ],
    "workbook": [
      {"id":"wb48-1","pattern":"Plain + ものの","instruction":"Terjemahkan: 'Meskipun ingin membeli'.","question":"Kaitai","correct":"かいたいものの","romaji":"Kaitai monono.","translation":"Meskipun ingin membeli."},
      {"id":"wb48-2","pattern":"N + とはいえ","instruction":"Terjemahkan: 'Meskipun dokter'.","question":"Isha","correct":"いしゃとはいえ","romaji":"Isha to wa ie.","translation":"Meskipun dokter."},
      {"id":"wb48-3","pattern":"Adj + ながらも","instruction":"Terjemahkan: 'Meskipun kecil'.","question":"Chiisai","correct":"ちいさいながらも","romaji":"Chiisai nagara mo.","translation":"Meskipun kecil."},
      {"id":"wb48-4","pattern":"Plain + ものの","instruction":"Terjemahkan: 'Meskipun sudah berjanji'.","question":"Yakusoku shita","correct":"やくそくしたものの","romaji":"Yakusoku shita monono.","translation":"Meskipun sudah berjanji."},
      {"id":"wb48-5","pattern":"N + とはいえ","instruction":"Terjemahkan: 'Meskipun hari libur'.","question":"Yasumi no hi","correct":"やすみのひとはいえ","romaji":"Yasumi no hi to wa ie.","translation":"Meskipun hari libur."}
    ],
    "exam": {
      "part1": [
        {"id":"ex48-1","sentence":"カメラを 買った [ ]、あまり つかっていません。","correct":"ものの","translation":"Meskipun membeli kamera, saya jarang memakainya."},
        {"id":"ex48-2","sentence":"あき [ ] は いえ、まだ あつい ひが つづきます。","correct":"と","translation":"Meskipun dikatakan sudah musim gugur, hari-hari panas masih berlanjut."},
        {"id":"ex48-3","sentence":"すこし [ ] も、ボランティア活動に さんかしたいです。","correct":"ながら","translation":"Meskipun hanya sedikit, saya ingin berpartisipasi dalam aktivitas relawan."},
        {"id":"ex48-4","sentence":"にほんごが じょうずだ [ ] いえ、かんじは まだ かけません。","correct":"とは","translation":"Meskipun dikatakan mahir bahasa Jepang, kanji masih belum bisa ditulis."},
        {"id":"ex48-5","sentence":"やくそくは した [ ]、いけるか どうか わかりません。","correct":"ものの","translation":"Meskipun sudah berjanji, saya tidak tahu bisa pergi atau tidak."}
      ],
      "part2": [
        {"id":"ex48-6","question":"Pilih makna 'Kantan to wa ie':","options":[{"text":"Meskipun dikatakan mudah","correct":true},{"text":"Karena mudah","correct":false},{"text":"Jika mudah","correct":false}]},
        {"id":"ex48-7","question":"Apa perbedaan 'monono' dibanding 'ga/keredo'?","options":[{"text":"Lebih formal dan sering dalam tulisan","correct":true},{"text":"Artinya sama sekali berbeda","correct":false},{"text":"Digunakan untuk menyatakan sebab","correct":false}]},
        {"id":"ex48-8","question":"Contoh penggunaan 'nagara mo' yang benar:","options":[{"text":"貧しいながらも幸せです。","correct":true},{"text":"行くながらも帰ります。","correct":false},{"text":"子供ながらも知りません。","correct":false}]}
      ],
      "part3": {
        "text":"彼は プロの 歌手であるものの、最近は あまり 歌を 歌っていません。病気を したためです。病気は 治ったとはいえ、まだ 無理は できません。ファンは 心配しながらも、彼の 復帰を 待っています。",
        "questions": [
          {"id":"ex48-9","question":"彼は プロの 歌手ですが、最近は 歌っていません。","correct":"T"},
          {"id":"ex48-10","question":"彼の 病気は まだ 全然 治っていません。","correct":"F"},
          {"id":"ex48-11","question":"ファンは 彼の 復帰を 待っています。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 49,
    "title": "Lesson 49: Kejadian Formal & Antisipasi (〜にあたって / 〜を前に)",
    "desc": "Mempelajari ungkapan upacara formal: 〜にあたって (pada kesempatan penting/dalam rangka) dan 〜を前に (menjelang/di hadapan peristiwa besar).",
    "locked": false,
    "vocab": [
      {"id":"v49-1","rom":"Shiki","kana":"しき","kanji":"式","en":"Upacara / Seremoni","audio":""},
      {"id":"v49-2","rom":"Girei","kana":"ぎれい","kanji":"儀礼","en":"Etika / Tata cara ritual","audio":""},
      {"id":"v49-3","rom":"Kaimaku","kana":"かいまく","kanji":"開幕","en":"Pembukaan tirai / Kickoff","audio":""},
      {"id":"v49-4","rom":"Sanka (shimasu)","kana":"さんか（します）","kanji":"参加（します）","en":"Partisipasi / Ikut serta","audio":""},
      {"id":"v49-5","rom":"Ni atatte","kana":"にあたって","kanji":"","en":"Pada kesempatan / Dalam rangka","audio":""},
      {"id":"v49-6","rom":"Ni atari","kana":"にあたり","kanji":"","en":"Pada kesempatan (sangat formal)","audio":""},
      {"id":"v49-7","rom":"Wo mae ni","kana":"をまえに","kanji":"","en":"Menjelang / Di hadapan","audio":""},
      {"id":"v49-8","rom":"Kekkon","kana":"けっこん","kanji":"結婚","en":"Pernikahan","audio":""},
      {"id":"v49-9","rom":"Shuppatsu (shimasu)","kana":"しゅっぱつ（します）","kanji":"出発（します）","en":"Keberangkatan / Berangkat","audio":""},
      {"id":"v49-10","rom":"Kaishi (shimasu)","kana":"かいし（します）","kanji":"開始（します）","en":"Memulai / Permulaan","audio":""},
      {"id":"v49-11","rom":"Ketsudan (shimasu)","kana":"けつだん（します）","kanji":"決断（します）","en":"Keputusan / Mengambil keputusan","audio":""},
      {"id":"v49-12","rom":"Junbi","kana":"じゅんび","kanji":"準備","en":"Persiapan","audio":""},
      {"id":"v49-13","rom":"Shiai","kana":"しあい","kanji":"試合","en":"Pertandingan / Lomba","audio":""},
      {"id":"v49-14","rom":"Senshu","kana":"せんしゅ","kanji":"選手","en":"Atlet / Pemain","audio":""},
      {"id":"v49-15","rom":"Seijin","kana":"せいじん","kanji":"成人","en":"Orang dewasa / Akil balig","audio":""}
    ],
    "grammar": [
      {
        "id":"g49-1",
        "title":"1. 〜にあたって / 〜にあたり (Pada Kesempatan / Dalam Rangka)",
        "desc":"Digunakan saat melakukan persiapan atau menyatakan sikap mental di awal suatu peristiwa penting, upacara formal, atau acara besar berskala sosial.",
        "points":[
          "Pola: V-dict / N + にあたって (atau formal: にあたり)",
          "Artinya: Dalam rangka... / Pada kesempatan...",
          "Contoh: Nihon-ryugaku ni atatte, shinpaigoto ga ooi desu (Dalam rangka kuliah di Jepang, banyak hal yang saya khawatirkan)."
        ],
        "formula":"V-dict / N + にあたって / にあたり",
        "native_note":"Sering digunakan dalam pidato sambutan formal di pernikahan, upacara kelulusan, atau pembukaan kantor baru."
      },
      {
        "id":"g49-2",
        "title":"2. 〜を前にして / 〜を前に (Menjelang / Di Hadapan)",
        "desc":"Menyatakan situasi psikologis atau fisik seseorang yang berada tepat sebelum/menghadapi peristiwa penting.",
        "points":[
          "Pola: N + を前にして / を前に",
          "Artinya: Menjelang... / Di hadapan N...",
          "Contoh: Shiken wo mae ni shite, minna kinchou shite imasu (Menjelang ujian, semuanya merasa gugup)."
        ],
        "formula":"N + を前に（して）"
      }
    ],
    "patterns": [
      {"jp":"新規事業の開始にあたって、社長が挨拶します。","rom":"Shinki-jigyou no kaishi ni atatte, shachou ga aisatsu shimasu.","en":"Dalam rangka memulai bisnis baru, direktur memberikan sambutan."},
      {"jp":"結婚式を前にして、彼女はとても嬉しそうです。","rom":"Kekkon-shiki wo mae ni shite, kanojo wa totemo ureshisou desu.","en":"Menjelang upacara pernikahan, dia terlihat sangat bahagia."},
      {"jp":"出発にあたり、注意事項を説明します。","rom":"Shuppatsu ni atari, chuui-jikou wo setsumei shimasu.","en":"Pada kesempatan keberangkatan, saya akan menjelaskan hal-hal yang perlu diperhatikan."},
      {"jp":"大先生を前にして、何も言えませんでした。","rom":"Dai-sensei wo mae ni shite, nani mo iemasen deshita.","en":"Di hadapan guru besar, saya tidak bisa berkata apa-apa."}
    ],
    "conversation": {
      "title":"Sambutan Pembukaan Toko",
      "dialogue": [
        {"speaker":"A","jp":"社長の挨拶の準備はできましたか。","rom":"Shachou no aisatsu no junbi wa dekimashita ka?","en":"Apakah persiapan pidato sambutan direktur sudah selesai?"},
        {"speaker":"B","jp":"ええ。新しい店のオープンにあたって、感謝の言葉を伝えます。","rom":"Ee. Atarashii mise no oopun ni atatte, kansha no kotoba wo tsutaemasu.","en":"Ya. Pada kesempatan pembukaan toko baru ini, beliau akan menyampaikan rasa terima kasih."},
        {"speaker":"A","jp":"素晴らしいですね。新規事業がうまくいくといいですね。","rom":"Subarashii desu ne. Shinki-jigyou ga umaku iku to ii desu ne.","en":"Bagus sekali ya. Semoga bisnis barunya berjalan dengan lancar."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Pilih konteks penggunaan 'ni atatte' yang paling tepat:","options":[{"text":"Pidato kelulusan sekolah","correct":true},{"text":"Mengobrol santai dengan teman","correct":false},{"text":"Membeli sayur di pasar","correct":false}]},
      {"type":"fill","question":"Terjemahkan: 'Menjelang pertandingan (shiai)'.\nShiai wo [   ] ni shite.","answer":"mae"},
      {"type":"mcq","question":"Arti dari 'Kekkon ni atatte':","options":[{"text":"Dalam rangka/Pada kesempatan pernikahan","correct":true},{"text":"Karena sudah menikah","correct":false},{"text":"Jika ingin menikah","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Menjelang Keberangkatan","situation":"Mahasiswa bersiap pergi belajar ke luar negeri","dialogue":[
        {"speaker":"A","jp":"荷物の準備はできましたか。","rom":"Nimotsu no junbi wa dekimashita ka?","en":"Apakah barang bawaanmu sudah siap?"},
        {"speaker":"B","jp":"はい。明日の出発を前にして、パスポートをもう一度確認します。","rom":"Hai. Menjelang keberangkatan besok, saya memeriksa paspor sekali lagi.","en":"Sudah. Menjelang keberangkatan besok, saya akan memeriksa paspor sekali lagi."}
      ]}
    ],
    "reibun": [
      {"id":"r49-1","jp":"契約にあたって、条件をよく確認してください。","rom":"Keiyaku ni atatte, jouken wo yoku kakunin shite kudasai.","en":"Dalam rangka penandatanganan kontrak, tolong konfirmasi ketentuannya baik-baik."},
      {"id":"r49-2","jp":"試験を前に、学生たちは一生懸命勉強しています。","rom":"Shiken wo mae ni, gakusei-tachi wa isshoukenmei benkyou shite imasu.","en":"Menjelang ujian, para siswa belajar dengan sungguh-sungguh."},
      {"id":"r49-3","jp":"開幕にあたり、選手代表が宣誓します。","rom":"Kaimaku ni atari, senshu-daihyou ga sensei shimasu.","en":"Pada upacara pembukaan, perwakilan atlet mengucapkan sumpah."},
      {"id":"r49-4","jp":"決勝戦を前に、選手たちは覚悟を決めました。","rom":"Kesshou-sen wo mae ni, senshu-tachi wa kakugo wo kimemashita.","en":"Menjelang babak final, para pemain telah memantapkan tekad mereka."},
      {"id":"r49-5","jp":"この本を書くにあたって、多くの人に助けられました。","rom":"Kono hon wo kaku ni atatte, ooku no hito ni tasukeraremashita.","en":"Dalam rangka menulis buku ini, saya dibantu oleh banyak orang."}
    ],
    "workbook": [
      {"id":"wb49-1","pattern":"N + にあたって","instruction":"Terjemahkan: 'Dalam rangka memulai bisnis'.","question":"Jigyou no kaishi","correct":"じぎょうのかいしにあたって","romaji":"Jigyou no kaishi ni atatte.","translation":"Dalam rangka memulai bisnis."},
      {"id":"wb49-2","pattern":"N + を前に","instruction":"Terjemahkan: 'Menjelang ujian'.","question":"Shiken","correct":"しけんをまえに","romaji":"Shiken wo mae ni.","translation":"Menjelang ujian."},
      {"id":"wb49-3","pattern":"V-dict + にあたって","instruction":"Terjemahkan: 'Pada kesempatan membeli rumah'.","question":"Ie wo kau","correct":"いえをかうにあたって","romaji":"Ie wo kau ni atatte.","translation":"Pada kesempatan membeli rumah."},
      {"id":"wb49-4","pattern":"N + を前にして","instruction":"Terjemahkan: 'Di depan direktur'.","question":"Shachou","correct":"しゃちょうをまえにして","romaji":"Shachou wo mae ni shite.","translation":"Di hadapan direktur."},
      {"id":"wb49-5","pattern":"N + にあたり","instruction":"Terjemahkan: 'Pada kesempatan keberangkatan'.","question":"Shuppatsu","correct":"しゅっぱつにあたり","romaji":"Shuppatsu ni atari.","translation":"Pada kesempatan keberangkatan."}
    ],
    "exam": {
      "part1": [
        {"id":"ex49-1","sentence":"あたらしい 事業の 開始に [ ]、しきが おこなわれました。","correct":"あたって","translation":"Dalam rangka memulai bisnis baru, upacara diselenggarakan."},
        {"id":"ex49-2","sentence":"しゅっぱつを [ ] にして、みんなで 写真を とりました。","correct":"まえ","translation":"Menjelang keberangkatan, kami semua berfoto bersama."},
        {"id":"ex49-3","sentence":"けっこんに [ ]、あたらしく いえを かいました。","correct":"あたって","translation":"Dalam rangka pernikahan, kami membeli rumah baru."},
        {"id":"ex49-4","sentence":"しあいを 前 [ ]、せんしゅたちは きんちょうしています。","correct":"に","translation":"Menjelang pertandingan, para pemain merasa gugup."},
        {"id":"ex49-5","sentence":"かいまくに [ ]、ごあいさつ 申し上げます。","correct":"あたり","translation":"Pada kesempatan pembukaan, saya menyampaikan sambutan."}
      ],
      "part2": [
        {"id":"ex49-6","question":"Pola 'ni atatte' paling tepat dipadukan dengan kata benda yang bermakna:","options":[{"text":"Aksi/Kejadian besar yang direncanakan","correct":true},{"text":"Hal-hal sepele sehari-hari","correct":false},{"text":"Kejadian tidak sengaja","correct":false}]},
        {"id":"ex49-7","question":"Apa arti 'Shachou wo mae ni shite'?","options":[{"text":"Di hadapan Direktur","correct":true},{"text":"Sebelum menjadi Direktur","correct":false},{"text":"Karena ada Direktur","correct":false}]},
        {"id":"ex49-8","question":"Bentuk formal dari 'ni atatte' adalah:","options":[{"text":"にあたり","correct":true},{"text":"にとって","correct":false},{"text":"にたいして","correct":false}]}
      ],
      "part3": {
        "text":"新しい 工場の 完成に あたって、記念式典が 行われました。社長は 式典を 前に 緊張していましたが、スピーチでは 感謝の 気持ちを 伝えました。工場の 開始に あたり、安全第一で がんばるつもりです。",
        "questions": [
          {"id":"ex49-9","question":"工場の 完成に あたって 式典が ありました。","correct":"T"},
          {"id":"ex49-10","question":"社長は 式典の 前、緊張していませんでした。","correct":"F"},
          {"id":"ex49-11","question":"これからは 安全第一で 仕事を します。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 50,
    "title": "Lesson 50: Review Komprehensif Minna no Nihongo II (MNN II)",
    "desc": "Bab final Minna no Nihongo II. Melakukan review menyeluruh pola tata bahasa utama N4-N3 (Lessons 26-50), serta perayaan kelulusan perjalanan belajar Anda.",
    "locked": false,
    "vocab": [
      {"id":"v50-1","rom":"Oiwai","kana":"おいわい","kanji":"お祝い","en":"Perayaan / Ucapan selamat","audio":""},
      {"id":"v50-2","rom":"Sotsugyou (shimasu)","kana":"そつぎょう（します）","kanji":"卒業（します）","en":"Kelulusan / Lulus sekolah","audio":""},
      {"id":"v50-3","rom":"Kandou (shimasu)","kana":"かんどう（します）","kanji":"感動（します）","en":"Terharu / Tersentuh","audio":""},
      {"id":"v50-4","rom":"Kansha (shimasu)","kana":"かんしゃ（します）","kanji":"感謝（します）","en":"Rasa syukur / Berterima kasih","audio":""},
      {"id":"v50-5","rom":"Seichou (shimasu)","kana":"せいちょう（します）","kanji":"成長（します）","en":"Pertumbuhan / Perkembangan","audio":""},
      {"id":"v50-6","rom":"Ganbaru","kana":"がんばります","kanji":"頑張ります","en":"Berusaha keras / Berjuang","audio":""},
      {"id":"v50-7","rom":"Doryoku (shimasu)","kana":"どりょく（します）","kanji":"努力（します）","en":"Usaha / Upaya keras","audio":""},
      {"id":"v50-8","rom":"Seikou (shimasu)","kana":"せいこう（します）","kanji":"成功（します）","en":"Kesuksesan / Berhasil","audio":""},
      {"id":"v50-9","rom":"Yume","kana":"ゆめ","kanji":"夢","en":"Impian / Mimpi","audio":""},
      {"id":"v50-10","rom":"Mirai","kana":"みらい","kanji":"未来","en":"Masa depan","audio":""},
      {"id":"v50-11","rom":"Omoide","kana":"おもいで","kanji":"思い出","en":"Kenangan","audio":""},
      {"id":"v50-12","rom":"Kankei","kana":"かんけい","kanji":"関係","en":"Hubungan / Relasi","audio":""},
      {"id":"v50-13","rom":"Tomodachi","kana":"ともだち","kanji":"友達","en":"Teman / Sahabat","audio":""},
      {"id":"v50-14","rom":"Nihongo","kana":"にほんご","kanji":"日本語","en":"Bahasa Jepang","audio":""},
      {"id":"v50-15","rom":"Saigo","kana":"さいご","kanji":"最後","en":"Terakhir / Akhir","audio":""}
    ],
    "grammar": [
      {
        "id":"g50-1",
        "title":"1. Review: Perbandingan Kabar vs Tampilan (そうです)",
        "desc":"Poin yang sering membingungkan: Hearsay (kabarnya) dan Appearance (tampaknya/kelihatannya).",
        "points":[
          "Hearsay (Kabar): Plain form + そうです (Contoh: Ame ga furu sou desu = Kabarnya akan turun hujan).",
          "Appearance (Tampilan): V-stem / Adj-stem + そうです (Contoh: Ame ga furisou desu = Kelihatannya akan turun hujan - melihat langit mendung)."
        ],
        "formula":"Plain + そうです (Kabar) vs Stem + そうです (Kelihatan)",
        "native_note":"Perhatikan baik-baik perubahan bentuk kata kerjanya agar tidak salah menyampaikan informasi."
      },
      {
        "id":"g50-2",
        "title":"2. Review: Dugaan (ようです vs らしい vs みたい)",
        "desc":"Membandingkan tingkat dugaan dan subjektivitas pembicara.",
        "points":[
          "よう desu: Berdasarkan bukti objektif/sensorik yang dilihat langsung (formal).",
          "らしい desu: Berdasarkan rumor/kabar angin dari luar, atau menunjukkan sifat khas (Kare wa otoko-rashii = dia sangat kelaki-lakian).",
          "みたい desu: Digunakan dalam lisan kasual (serupa dengan よう desu)."
        ],
        "formula":"ようです (Objektif) / らしい (Hearsay/Khas) / みたい (Kasual)"
      },
      {
        "id":"g50-3",
        "title":"3. Review: Pengandaian (ば vs たら vs と vs なら)",
        "desc":"Merangkum empat jenis pola pengandaian dalam bahasa Jepang.",
        "points":[
          "と (to): Kepastian alamiah/pasti terjadi. (Contoh: Menekan tombol maka air keluar).",
          "たら (tara): Kronologis. (Contoh: Jika sampai stasiun, kabari saya).",
          "ば (ba): Syarat logis. (Contoh: Jika murah, saya beli).",
          "なら (nara): Topik percakapan. (Contoh: Jika tentang komputer, serahkan pada saya)."
        ],
        "formula":"と (pasti) / たら (kronologis) / ば (syarat) / なら (topik)"
      }
    ],
    "patterns": [
      {"jp":"日本語の勉強は難しかったですが、頑張って良かったです。","rom":"Nihongo no benkyou wa muzukashikatta desu ga, ganbatte yokatta desu.","en":"Belajar bahasa Jepang memang sulit, tapi syukurlah saya sudah berjuang keras."},
      {"jp":"明日は雨が降るそうです。","rom":"Ashita wa ame ga furu sou desu.","en":"Kabarnya besok akan turun hujan (hearsay)."},
      {"jp":"あの人はお医者さんのようです。","rom":"Ano hito wa o-isha-san no you desu.","en":"Orang itu sepertinya adalah seorang dokter (dugaan objektif)."},
      {"jp":"日本に行けたら、富士山に登りたいです。","rom":"Nihon ni iketara, Fujisan ni noboritai desu.","en":"Jika bisa pergi ke Jepang, saya ingin mendaki Gunung Fuji (pengandaian)."}
    ],
    "conversation": {
      "title":"Kelulusan Minna no Nihongo",
      "dialogue": [
        {"speaker":"A","jp":"おめでとうございます！ついに「みんなの日本語II」を終わりましたね。","rom":"Omedetou gozaimasu! Tsui ni 'Minna no Nihongo II' wo owarimashita ne.","en":"Selamat! Akhirnya kita menyelesaikan semua pelajaran Minna no Nihongo II ya."},
        {"speaker":"B","jp":"ありがとうございます。長い道でしたが、とても価値がありました。","rom":"Arigatou gozaimasu. Nagai michi deshita ga, totemo kachi ga arimashita.","en":"Terima kasih banyak. Perjalanan yang panjang, tapi rasanya sangat berharga."},
        {"speaker":"A","jp":"未来は明るいです。夢を目指して頑張り続けましょう！","rom":"Mirai wa akarui desu. Yume wo mezashite ganbari tsuzukeshashou!","en":"Masa depan kita cerah. Mari terus berjuang menggapai impian!"},
        {"speaker":"B","jp":"はい、これからも日本語の勉強を続けます！","rom":"Hai, korekara mo Nihongo no benkyou wo tsuzukemasu!","en":"Ya, mulai sekarang pun saya akan terus belajar bahasa Jepang!"}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Pilih kalimat yang menyatakan kabar bahwa besok hujan:","options":[{"text":"明日は雨が降るそうです。","correct":true},{"text":"明日は雨が降りそうです。","correct":false},{"text":"明日は雨が降るようです。","correct":false}]},
      {"type":"fill","question":"Terjemahkan: 'Kelihatannya hujan akan turun' (melihat langit mendung).\nAme ga [   ] desu.","answer":"furisou"},
      {"type":"mcq","question":"Pola pengandaian mana yang digunakan jika 'A pasti mengakibatkan B secara alamiah'?","options":[{"text":"と (to)","correct":true},{"text":"たら (tara)","correct":false},{"text":"なら (nara)","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Kenangan Belajar","situation":"Dua murid mengobrol tentang kenangan mereka belajar bersama","dialogue":[
        {"speaker":"A","jp":"どのレッスンが一番思い出に残っていますか。","rom":"Dono ressun ga ichiban omoide ni nokotte imasu ka?","en":"Pelajaran mana yang paling membekas dalam ingatanmu?"},
        {"speaker":"B","jp":"敬語のレッスンは難しかったですが、理解したあとは嬉しかったです。","rom":"Keigo no ressun wa muzukashikatta desu ga, rikai shita ato wa ureshikatta desu.","en":"Pelajaran Keigo sangat sulit, tapi setelah memahaminya saya merasa senang."}
      ]}
    ],
    "reibun": [
      {"id":"r50-1","jp":"日本の生活に慣れたようです。","rom":"Nihon no seikatsu ni nareta you desu.","en":"Tampaknya dia sudah terbiasa dengan kehidupan di Jepang."},
      {"id":"r50-2","jp":"春になると、桜が咲きます。","rom":"Haru ni naru to, sakura ga sakimasu.","en":"Ketika musim semi tiba, bunga sakura pasti bermekaran."},
      {"id":"r50-3","jp":"この本を読めば、日本語がわかるようになります。","rom":"Kono hon wo yomeba, Nihongo ga wakaru you ni narimasu.","en":"Jika membaca buku ini, Anda akan menjadi paham bahasa Jepang."},
      {"id":"r50-4","jp":"彼は頭が良いらしいです。","rom":"Kare wa atama ga ii rashii desu.","en":"Kabarnya dia pintar."},
      {"id":"r50-5","jp":"みんなで一緒にがんばりましょう。","rom":"Minna de issho ni ganbarimashou.","en":"Mari kita berjuang bersama-sama semuanya."}
    ],
    "workbook": [
      {"id":"wb50-1","pattern":"Kondisional 〜たら","instruction":"Terjemahkan: 'Jika lulus ujian'.","question":"Goukaku suru","correct":"ごうかくしたら","romaji":"Goukaku shitara.","translation":"Jika lulus ujian."},
      {"id":"wb50-2","pattern":"Hearsay そう desu","instruction":"Terjemahkan: 'Kabarnya besok dingin'.","question":"Ashita / samui","correct":"あしたはさむいだそうです。","romaji":"Ashita wa samui sou desu.","translation":"Kabarnya besok dingin."},
      {"id":"wb50-3","pattern":"Dugaan ようです","instruction":"Terjemahkan: 'Sepertinya dia sibuk'.","question":"Isogashii","correct":"いそがしいようです。","romaji":"Isogashii you desu.","translation":"Sepertinya sibuk."},
      {"id":"wb50-4","pattern":"Kondisional 〜と","instruction":"Terjemahkan: 'Kalau menekan tombol ini, air keluar'.","question":"Botan wo osu / mizu ga deru","correct":"ボタンをおすとみずがでます。","romaji":"Botan wo osu to mizu ga demasu.","translation":"Kalau menekan tombol ini, air akan keluar."},
      {"id":"wb50-5","pattern":"Perbandingan みたい desu","instruction":"Terjemahkan: 'Seperti mimpi'.","question":"Yume","correct":"ゆめのみたいです。","romaji":"Yume no mitai desu.","translation":"Seperti mimpi."}
    ],
    "exam": {
      "part1": [
        {"id":"ex50-1","sentence":"あしたは てんきが よい [ ] です。ニュースで 言っていました。","correct":"そう","translation":"Kabarnya besok cuacanya bagus. Tadi di berita dikatakan demikian."},
        {"id":"ex50-2","sentence":"ボタンを [ ] と、きっぷが でます。","correct":"おす","translation":"Jika tombol ditekan, tiket akan keluar."},
        {"id":"ex50-3","sentence":"あめが ふり [ ] です。かさを もっていきましょう。","correct":"そう","translation":"Kelihatannya hujan akan turun. Mari bawa payung."},
        {"id":"ex50-4","sentence":"かれは びょうきの [ ] です。きょう 休みました。","correct":"よう","translation":"Sepertinya dia sedang sakit. Hari ini dia absen."},
        {"id":"ex50-5","sentence":"にほんごの 勉強なら、この ほんが [ ] ですよ。","correct":"いい","translation":"Jika tentang belajar bahasa Jepang, buku ini bagus lho."}
      ],
      "part2": [
        {"id":"ex50-6","question":"Pola mana yang berarti 'Kelihatannya enak' (saat melihat makanan)?","options":[{"text":"美味しそうです。","correct":true},{"text":"美味しいそうです。","correct":false},{"text":"美味しいようです。","correct":false}]},
        {"id":"ex50-7","question":"Apa arti pengandaian 'Yasukereba kaimasu'?","options":[{"text":"Jika murah, saya beli","correct":true},{"text":"Meskipun murah, saya beli","correct":false},{"text":"Pasti murah jika dibeli","correct":false}]},
        {"id":"ex50-8","question":"Perbedaan antara 'yo desu' dan 'rashii desu':","options":[{"text":"yo desu = dugaan sensorik pribadi; rashii desu = dugaan rumor/sifat khas","correct":true},{"text":"Keduanya persis sama","correct":false},{"text":"rashii desu = dugaan sensorik pribadi; yo desu = dugaan rumor","correct":false}]}
      ],
      "part3": {
        "text":"日本語の 勉強を 始めてから、ついに 「みんなの日本語」を 終わりました。最初は 難しそうでしたが、勉強すれば するほど 面白くなりました。将来、日本で 仕事を するのが 私の 夢です。これからも 努力を 続けるつもりです。",
        "questions": [
          {"id":"ex50-9","question":"この人は 「みんなの日本語」の 勉強を 終わりました。","correct":"T"},
          {"id":"ex50-10","question":"日本語の 勉強は 最初は 簡単そうでした。","correct":"F"},
          {"id":"ex50-11","question":"この人の 将来の 夢は 日本で 仕事を することです。","correct":"T"}
        ]
      }
    }
  }
];

// Write chapters
CHAPTERS.forEach((ch) => {
  const filePath = path.join(chaptersDir, `chapter_${ch.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(ch, null, 2), 'utf-8');
  console.log(`  ✅ chapter_${ch.id}.json — ${ch.title}`);
});

console.log(`\n✨ Done! Written ${CHAPTERS.length} chapters (41-50).\n`);
