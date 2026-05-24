/**
 * seedMNN2_31_35.js — Minna no Nihongo II, Lesson 31-35
 * Run: node scripts/seedMNN2_31_35.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const chaptersDir = path.join(__dirname, '../src/data/chapters');

const CHAPTERS = [
  {
    "id": 31,
    "title": "Lesson 31: Permintaan Formal (〜ていただけませんか)",
    "desc": "Mempelajari cara meminta bantuan secara sangat sopan menggunakan 〜ていただけませんか dan 〜てくださいませんか, serta perbedaan tingkat kesopanannya.",
    "locked": false,
    "vocab": [
      {"id":"v31-1","rom":"Oshiete itadakemasu ka","kana":"おしえていただけますか","kanji":"教えていただけますか","en":"Bolehkah saya minta Anda mengajari saya? (sangat sopan)","audio":""},
      {"id":"v31-2","rom":"Onegai shimasu","kana":"おねがいします","kanji":"お願いします","en":"Mohon / Tolong (permintaan)","audio":""},
      {"id":"v31-3","rom":"Setsumei (shimasu)","kana":"せつめい（します）","kanji":"説明（します）","en":"Menjelaskan / Penjelasan","audio":""},
      {"id":"v31-4","rom":"Kakunin (shimasu)","kana":"かくにん（します）","kanji":"確認（します）","en":"Mengonfirmasi / Memeriksa","audio":""},
      {"id":"v31-5","rom":"Shiryō","kana":"しりょう","kanji":"資料","en":"Materi / Dokumen referensi","audio":""},
      {"id":"v31-6","rom":"Hookoku (shimasu)","kana":"ほうこく（します）","kanji":"報告（します）","en":"Melaporkan / Laporan","audio":""},
      {"id":"v31-7","rom":"Kansha shimasu","kana":"かんしゃします","kanji":"感謝します","en":"Berterima kasih / Menghargai","audio":""},
      {"id":"v31-8","rom":"Goannai (shimasu)","kana":"ごあんない（します）","kanji":"ご案内（します）","en":"Memandu / Mengarahkan (sopan)","audio":""},
      {"id":"v31-9","rom":"Teruchi","kana":"てつづき","kanji":"手続き","en":"Prosedur / Proses administrasi","audio":""},
      {"id":"v31-10","rom":"Mooshikomi (shimasu)","kana":"もうしこみ（します）","kanji":"申し込み（します）","en":"Mendaftar / Permohonan","audio":""},
      {"id":"v31-11","rom":"Kinyuu (shimasu)","kana":"きにゅう（します）","kanji":"記入（します）","en":"Mengisi (formulir)","audio":""},
      {"id":"v31-12","rom":"Shorui","kana":"しょるい","kanji":"書類","en":"Dokumen / Berkas","audio":""},
      {"id":"v31-13","rom":"Toritsugi","kana":"とりつぎ","kanji":"取り次ぎ","en":"Menyambungkan (telepon) / Perantara","audio":""},
      {"id":"v31-14","rom":"Meiwaku","kana":"めいわく","kanji":"迷惑","en":"Gangguan / Merepotkan","audio":""},
      {"id":"v31-15","rom":"Sassoku","kana":"さっそく","kanji":"早速","en":"Segera / Langsung","audio":""}
    ],
    "grammar": [
      {
        "id":"g31-1",
        "title":"1. 〜ていただけませんか (Permintaan Paling Sopan)",
        "desc":"Bentuk permintaan paling formal dan hormat dalam bahasa Jepang. Digunakan kepada atasan, klien, atau orang yang jauh lebih senior.",
        "points":[
          "Pola: V-te form + いただけませんか",
          "Contoh: Kono shorui wo kakunin shite itadakemasen ka. (Apakah Anda berkenan memeriksa dokumen ini?)",
          "Lebih sopan dari: ~てもらえませんか → ~てくれませんか → ~てください (urutan dari paling sopan ke kasual)",
          "Versi positif (sedikit kurang sopan): ~ていただけますか",
          "Digunakan dalam situasi: permohonan kepada klien, surat resmi, permohonan kepada atasan"
        ],
        "formula":"V-て + いただけませんか",
        "native_note":"Dalam email bisnis formal Jepang, ungkapan ini hampir selalu muncul. Menggunakannya menunjukkan Anda memahami budaya bisnis Jepang."
      },
      {
        "id":"g31-2",
        "title":"2. 〜てくださいませんか (Alternatif Formal)",
        "desc":"Setingkat kesopanan dengan いただけませんか, namun posisinya lebih pada 'memohon dengan hormat'.",
        "points":[
          "Pola: V-te form + くださいませんか",
          "Contoh: Mou ichido oshiete kudasaimasen ka. (Bolehkah Anda mengajari saya sekali lagi?)",
          "Perbedaan nuansa: いただけませんか = 'apakah saya boleh menerima...'; くださいませんか = 'apakah Anda berkenan memberi...'",
          "Dalam praktik, keduanya dapat digunakan bergantian"
        ],
        "formula":"V-て + くださいませんか"
      },
      {
        "id":"g31-3",
        "title":"3. Hierarki Kesopanan Permintaan",
        "desc":"Memahami tingkatan permintaan dari paling kasual ke paling formal.",
        "points":[
          "Level 1 (kasual/perintah): V-て ください",
          "Level 2 (sopan): V-て もらえませんか / V-て くれませんか",
          "Level 3 (formal): V-て いただけませんか / V-て くださいませんか",
          "Level 4 (sangat formal/tertulis): お + V-stem + いただけますでしょうか"
        ],
        "formula":"Semakin panjang ekspresi → semakin sopan"
      }
    ],
    "patterns": [
      {"jp":"この書類を確認していただけませんか。","rom":"Kono shorui wo kakunin shite itadakemasen ka.","en":"Apakah Anda berkenan memeriksa dokumen ini?"},
      {"jp":"もう一度説明していただけますか。","rom":"Mou ichido setsumei shite itadakemasu ka.","en":"Bolehkah Anda menjelaskan sekali lagi?"},
      {"jp":"駅まで案内してくださいませんか。","rom":"Eki made goannai shite kudasaimasen ka.","en":"Apakah Anda berkenan memandu saya ke stasiun?"},
      {"jp":"こちらにご記入いただけますでしょうか。","rom":"Kochira ni gokinyuu itadakemasu deshoo ka.","en":"Apakah Anda berkenan mengisi di sini?"}
    ],
    "conversation": {
      "title":"Memohon Bantuan Rekan Senior di Kantor",
      "dialogue": [
        {"speaker":"Yamada","jp":"田中さん、少しよろしいですか。","rom":"Tanaka-san, sukoshi yoroshii desu ka.","en":"Tanaka-san, ada waktu sebentar?"},
        {"speaker":"Tanaka","jp":"はい、どうぞ。","rom":"Hai, douzo.","en":"Ya, silakan."},
        {"speaker":"Yamada","jp":"この報告書の書き方を教えていただけませんか。","rom":"Kono hookokusho no kakikata wo oshiete itadakemasen ka.","en":"Apakah Anda berkenan mengajari saya cara menulis laporan ini?"},
        {"speaker":"Tanaka","jp":"もちろん。一緒に見ましょう。","rom":"Mochiron. Issho ni mimashou.","en":"Tentu saja. Mari kita lihat bersama."},
        {"speaker":"Yamada","jp":"ありがとうございます。助かります。","rom":"Arigatou gozaimasu. Tasukarimasu.","en":"Terima kasih banyak. Sangat membantu."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Permintaan yang paling sopan dari pilihan berikut adalah:","options":[{"text":"教えてください。","correct":false},{"text":"教えてもらえませんか。","correct":false},{"text":"教えていただけませんか。","correct":true}]},
      {"type":"fill","question":"Terjemahkan dengan sopan: 'Bolehkah Anda menunggu sebentar?'\nShoushou omachi [   ] ka.","answer":"itadakemasen"},
      {"type":"mcq","question":"Perbedaan 〜ていただけませんか dan 〜てくれませんか:","options":[{"text":"Tidak ada perbedaan","correct":false},{"text":"いただけませんか jauh lebih sopan dan formal","correct":true},{"text":"くれませんか lebih sopan","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Di Loket Bank","situation":"Nasabah meminta bantuan petugas bank","dialogue":[
        {"speaker":"Nasabah","jp":"すみません、この用紙の書き方を教えていただけませんか。","rom":"Sumimasen, kono youshi no kakikata wo oshiete itadakemasen ka.","en":"Permisi, bolehkah Anda mengajari cara mengisi formulir ini?"},
        {"speaker":"Petugas","jp":"はい、もちろんです。こちらへどうぞ。","rom":"Hai, mochiron desu. Kochira e douzo.","en":"Tentu saja. Silakan ke sini."}
      ]}
    ],
    "reibun": [
      {"id":"r31-1","jp":"この資料を明日までに送っていただけませんか。","rom":"Kono shiryou wo ashita made ni okutte itadakemasen ka.","en":"Apakah Anda berkenan mengirimkan dokumen ini sebelum besok?"},
      {"id":"r31-2","jp":"もう少し大きい声で話していただけますか。","rom":"Mou sukoshi ookii koe de hanashite itadakemasu ka.","en":"Bolehkah Anda berbicara sedikit lebih keras?"},
      {"id":"r31-3","jp":"ここにサインしていただけますでしょうか。","rom":"Koko ni sain shite itadakemasu deshou ka.","en":"Apakah Anda berkenan menandatangani di sini?"},
      {"id":"r31-4","jp":"電話番号を教えていただけませんか。","rom":"Denwa bangou wo oshiete itadakemasen ka.","en":"Bolehkah saya minta nomor telepon Anda?"},
      {"id":"r31-5","jp":"もう一度確認してくださいませんか。","rom":"Mou ichido kakunin shite kudasaimasen ka.","en":"Apakah Anda berkenan memeriksa sekali lagi?"}
    ],
    "workbook": [
      {"id":"wb31-1","pattern":"V-て + いただけませんか","instruction":"Ubah permintaan biasa ini menjadi sangat sopan.","question":"Mite kudasai → itadakemasen ka","correct":"みていただけませんか。","romaji":"Mite itadakemasen ka.","translation":"Apakah Anda berkenan melihatnya?"},
      {"id":"wb31-2","pattern":"V-て + くださいませんか","instruction":"Buat permintaan formal: 'Tolong ajari saya bahasa Jepang'.","question":"Nihongo / oshieru / kudasaimasen ka","correct":"にほんごを おしえてくださいませんか。","romaji":"Nihongo wo oshiete kudasaimasen ka.","translation":"Apakah Anda berkenan mengajari saya bahasa Jepang?"},
      {"id":"wb31-3","pattern":"お + V-stem + いただけますでしょうか","instruction":"Buat permintaan paling formal.","question":"Machi kudasai → paling formal","correct":"おまちいただけますでしょうか。","romaji":"Omachi itadakemasu deshou ka.","translation":"Apakah Anda berkenan menunggu? (paling sopan)"},
      {"id":"wb31-4","pattern":"Hierarki permintaan","instruction":"Pilih ekspresi yang tepat untuk konteks: meminta klien VIP menandatangani dokumen.","question":"Sain suru / VIP client / most polite","correct":"こちらにサインしていただけますでしょうか。","romaji":"Kochira ni sain shite itadakemasu deshou ka.","translation":"Apakah Anda berkenan menandatangani di sini?"},
      {"id":"wb31-5","pattern":"Respons terhadap permintaan sopan","instruction":"Berikan respons yang sesuai saat menerima permintaan sopan.","question":"Kakunin shite itadakemasen ka → jawab positif","correct":"はい、かしこまりました。","romaji":"Hai, kashikomarimashita.","translation":"Baik, saya mengerti (sangat sopan)."}
    ],
    "exam": {
      "part1": [
        {"id":"ex31-1","sentence":"この しょるいを かくにんして [ ] ませんか。","correct":"いただけ","translation":"Apakah Anda berkenan memeriksa dokumen ini?"},
        {"id":"ex31-2","sentence":"もういちど せつめいして [ ] ますか。","correct":"いただけ","translation":"Bolehkah Anda menjelaskan sekali lagi?"},
        {"id":"ex31-3","sentence":"ここに サインして [ ] ませんか。","correct":"くださいませんか→くださいませ","translation":"Apakah Anda berkenan menandatangani di sini?"},
        {"id":"ex31-4","sentence":"おなまえを おしえて [ ] でしょうか。","correct":"いただけます","translation":"Bolehkah saya tahu nama Anda?"},
        {"id":"ex31-5","sentence":"しりょうを おくって [ ] ませんか。","correct":"いただけ","translation":"Apakah Anda berkenan mengirimkan dokumen?"}
      ],
      "part2": [
        {"id":"ex31-6","question":"Urutan kesopanan permintaan dari yang PALING SOPAN adalah:","options":[{"text":"ください → もらえませんか → いただけませんか","correct":false},{"text":"いただけませんか → もらえませんか → ください","correct":true},{"text":"もらえませんか → いただけませんか → ください","correct":false}]},
        {"id":"ex31-7","question":"'Kashikomarimashita' adalah respons yang paling tepat dari:","options":[{"text":"Teman kepada teman","correct":false},{"text":"Staf/pelayan kepada pelanggan/atasan","correct":true},{"text":"Atasan kepada bawahan","correct":false}]},
        {"id":"ex31-8","question":"Dalam email bisnis formal, permintaan yang paling tepat adalah:","options":[{"text":"〜てください","correct":false},{"text":"〜ていただけますでしょうか","correct":true},{"text":"〜てくれませんか","correct":false}]}
      ],
      "part3": {
        "text":"ABCのやまだです。いつもおせわになっております。さきほどおおくりしたしりょうについて、ごかくにんいただけますでしょうか。ごふめいなてんがございましたら、おしらせいただけますようおねがいいたします。",
        "questions":[
          {"id":"ex31-9","question":"このメールはビジネスのメールです。","correct":"T"},
          {"id":"ex31-10","question":"やまださんはしりょうをまだおくっていません。","correct":"F"},
          {"id":"ex31-11","question":"やまださんはしつもんがあればれんらくしてほしいとおもっています。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 32,
    "title": "Lesson 32: 〜ので vs 〜のに (Alasan vs Kontras)",
    "desc": "Memahami perbedaan halus antara 〜ので (alasan/karena — lebih halus dari から) dan 〜のに (meskipun/padahal — mengekspresikan kejutan atau kekecewaan).",
    "locked": false,
    "vocab": [
      {"id":"v32-1","rom":"Jijoo","kana":"じじょう","kanji":"事情","en":"Keadaan / Situasi / Alasan","audio":""},
      {"id":"v32-2","rom":"Riyuu","kana":"りゆう","kanji":"理由","en":"Alasan / Sebab","audio":""},
      {"id":"v32-3","rom":"Wake","kana":"わけ","kanji":"訳","en":"Artinya / Alasannya / Maknanya","audio":""},
      {"id":"v32-4","rom":"Zannen (na)","kana":"ざんねん（な）","kanji":"残念（な）","en":"Sayang sekali / Mengecewakan","audio":""},
      {"id":"v32-5","rom":"Odoroku","kana":"おどろきます","kanji":"驚きます","en":"Terkejut / Kaget","audio":""},
      {"id":"v32-6","rom":"Fushigi (na)","kana":"ふしぎ（な）","kanji":"不思議（な）","en":"Aneh / Misterius / Tidak masuk akal","audio":""},
      {"id":"v32-7","rom":"Shinyuu","kana":"しんゆう","kanji":"親友","en":"Sahabat karib","audio":""},
      {"id":"v32-8","rom":"Yakusoku","kana":"やくそく","kanji":"約束","en":"Janji","audio":""},
      {"id":"v32-9","rom":"Okureru","kana":"おくれます","kanji":"遅れます","en":"Terlambat","audio":""},
      {"id":"v32-10","rom":"Majime (na)","kana":"まじめ（な）","kanji":"真面目（な）","en":"Serius / Rajin / Tekun","audio":""},
      {"id":"v32-11","rom":"Kyookasho","kana":"きょうかしょ","kanji":"教科書","en":"Buku pelajaran","audio":""},
      {"id":"v32-12","rom":"Tsukarete iru","kana":"つかれています","kanji":"疲れています","en":"Sedang kelelahan","audio":""},
      {"id":"v32-13","rom":"Gan'baru","kana":"がんばります","kanji":"頑張ります","en":"Berjuang keras / Berusaha maksimal","audio":""},
      {"id":"v32-14","rom":"Taishita","kana":"たいした","kanji":"大した","en":"Luar biasa / Signifikan (sering dipakai negatif: taishita koto nai)","audio":""},
      {"id":"v32-15","rom":"Toriaezu","kana":"とりあえず","kanji":"","en":"Pertama-tama / Untuk sementara","audio":""}
    ],
    "grammar": [
      {
        "id":"g32-1",
        "title":"1. 〜ので (Alasan — Lebih Halus dari から)",
        "desc":"Digunakan untuk menyatakan alasan secara lebih sopan dan objektif dibanding から. Sering dipakai dalam situasi formal atau saat ingin terdengar tidak memaksa.",
        "points":[
          "Pola: Plain form + ので。(Verb/i-adj langsung; na-adj dan noun + な + ので)",
          "Contoh V: Byooki na NODE, yasumimasu. (Karena sakit, saya istirahat).",
          "Contoh na-adj: Shizuka NA NODE, benkyoo ga dekimasu. (Karena tenang, saya bisa belajar).",
          "Dibanding から: から lebih langsung/subjektif; ので lebih halus/objektif dan sopan.",
          "Penggunaan: penjelasan kepada atasan, permintaan maaf, situasi formal."
        ],
        "formula":"Plain form (na-adj/N: + な) + ので",
        "native_note":"Dalam percakapan formal di Jepang, menggunakan ので daripada から terdengar lebih sopan dan dewasa. Ini perbedaan kecil yang sangat diperhatikan orang Jepang."
      },
      {
        "id":"g32-2",
        "title":"2. 〜のに (Padahal / Meskipun — Kontras + Kekecewaan)",
        "desc":"Menyatakan kontras yang mengandung unsur kejutan, kekecewaan, atau komplain. Berbeda dari が/けど yang lebih netral.",
        "points":[
          "Pola: Plain form + のに (na-adj/N: + な + のに)",
          "Contoh: Isshoukenmei benkyoo shita NONI, shiken ni ochimashita. (Padahal sudah belajar keras, gagal ujian).",
          "Contoh: Ame na NONI, kasa wo motte imasen. (Padahal hujan, tidak membawa payung).",
          "Kunci emosi: のに selalu mengandung nuansa negatif — kekecewaan, komplain, atau heran.",
          "Bandingkan: が/けど = kontras netral; のに = kontras + kekecewaan/kejutan."
        ],
        "formula":"Plain form (na-adj/N: + な) + のに ← selalu ada nuansa negatif",
        "native_note":"Hati-hati: のに dan ので mudah tertukar karena bentuknya mirip, tapi maknanya SANGAT berbeda! のに = kontras+kecewa; ので = alasan+sopan."
      }
    ],
    "patterns": [
      {"jp":"雨なので、出かけるのをやめました。","rom":"Ame na node, dekakeru no wo yamemashita.","en":"Karena hujan, saya membatalkan rencana keluar."},
      {"jp":"一生懸命勉強したのに、試験に落ちました。","rom":"Isshoukenmei benkyoo shita noni, shiken ni ochimashita.","en":"Padahal sudah belajar keras, saya gagal ujian."},
      {"jp":"頭が痛いので、早退させていただきます。","rom":"Atama ga itai node, sootai sasete itadakimasu.","en":"Karena kepala sakit, saya mohon izin pulang lebih awal."},
      {"jp":"約束したのに、来ませんでした。","rom":"Yakusoku shita noni, kimasen deshita.","en":"Padahal sudah berjanji, dia tidak datang."}
    ],
    "conversation": {
      "title":"Komplain dan Penjelasan",
      "dialogue":[
        {"speaker":"A","jp":"昨日、どうして来なかったんですか。","rom":"Kinou, dooshite konakatta n desu ka.","en":"Kemarin kenapa tidak datang?"},
        {"speaker":"B","jp":"すみません。急に子供が熱を出したので…。","rom":"Sumimasen. Kyuu ni kodomo ga netsu wo dashita node...","en":"Maaf. Tiba-tiba anak saya demam, jadi..."},
        {"speaker":"A","jp":"そうでしたか。でも、連絡してくれればよかったのに。","rom":"Soo deshita ka. Demo, renraku shite kurereba yokatta noni.","en":"Begitu ya. Tapi, padahal seharusnya beri kabar dulu."},
        {"speaker":"B","jp":"本当に申し訳ありません。次回からは必ず連絡します。","rom":"Hontoo ni mooshiwake arimasen. Jikai kara wa kanarazu renraku shimasu.","en":"Sungguh saya minta maaf. Mulai sekarang pasti saya beri kabar."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Pilih yang tepat: 'Karena sibuk (formal), saya tidak bisa hadir'.","options":[{"text":"忙しいから、出席できません。","correct":false},{"text":"忙しいので、出席できません。","correct":true},{"text":"忙しいのに、出席できません。","correct":false}]},
      {"type":"fill","question":"'Padahal sudah makan, masih lapar'.\nTabeta [   ], mada onaka ga sukimasu.","answer":"noni"},
      {"type":"mcq","question":"Kalimat yang menggunakan のに dengan BENAR:","options":[{"text":"雨なので、外に出ません。","correct":false},{"text":"雨なのに、外に出ます。(padahal hujan, tetap keluar)","correct":true},{"text":"雨だから、外に出ます。","correct":false}]}
    ],
    "mini_kaiwa":[
      {"title":"Heran dengan Teman","situation":"Teman datang terlambat tanpa alasan jelas","dialogue":[
        {"speaker":"A","jp":"もう10時なのに、まだ来ていないんですか。","rom":"Moo juuji na noni, mada kite inain desu ka.","en":"Padahal sudah jam 10, belum datang juga?"},
        {"speaker":"B","jp":"電車が遅れたので…。すみません。","rom":"Densha ga okureta node... Sumimasen.","en":"Karena keretanya terlambat... Maaf."}
      ]}
    ],
    "reibun":[
      {"id":"r32-1","jp":"眠いので、コーヒーを飲みます。","rom":"Nemui node, koohii wo nomimasu.","en":"Karena mengantuk, saya minum kopi."},
      {"id":"r32-2","jp":"毎日練習しているのに、うまくなりません。","rom":"Mainichi renshuu shite iru noni, umaku narimasen.","en":"Padahal berlatih setiap hari, tidak kunjung mahir."},
      {"id":"r32-3","jp":"静かなので、ここで勉強できます。","rom":"Shizuka na node, koko de benkyoo dekimasu.","en":"Karena tenang, saya bisa belajar di sini."},
      {"id":"r32-4","jp":"高いのに、すぐ壊れてしまいました。","rom":"Takai noni, sugu kowarete shimaimashita.","en":"Padahal mahal, cepat rusak."},
      {"id":"r32-5","jp":"風邪を引いたので、今日は休みます。","rom":"Kaze wo hiita node, kyoo wa yasumimasu.","en":"Karena masuk angin, saya istirahat hari ini."}
    ],
    "workbook":[
      {"id":"wb32-1","pattern":"〜ので (alasan sopan)","instruction":"Buat kalimat dengan ので: 'Karena ada rapat, tidak bisa pergi'.","question":"Kaigi / aru / node / ikenai","correct":"かいぎが あるので、いけません。","romaji":"Kaigi ga aru node, ikemasen.","translation":"Karena ada rapat, saya tidak bisa pergi."},
      {"id":"wb32-2","pattern":"〜のに (kekecewaan)","instruction":"Buat kalimat dengan のに: 'Padahal jauh-jauh datang, tutup'.","question":"Tooku / kita / noni / shimatte iru","correct":"とおくから きたのに、しまっています。","romaji":"Tooku kara kita noni, shimatte imasu.","translation":"Padahal jauh-jauh datang, tokonya tutup."},
      {"id":"wb32-3","pattern":"〜ので vs 〜から","instruction":"Pilih ので atau から: situasi formal (minta izin atasan).","question":"Byooki / node or kara / yasumitai (formal)","correct":"びょうきなので、やすませてください。","romaji":"Byooki na node, yasumasete kudasai.","translation":"Karena sakit, tolong izinkan saya istirahat. (formal)"},
      {"id":"wb32-4","pattern":"Na-adj + なのに","instruction":"Buat kalimat dengan na-adj + のに.","question":"Benri / na noni / tsukaiinikui","correct":"べんりなのに、つかいにくいです。","romaji":"Benri na noni, tsukaiinikui desu.","translation":"Padahal praktis, susah dipakai."},
      {"id":"wb32-5","pattern":"N + なのに","instruction":"Buat kalimat dengan noun + のに.","question":"Yasumi / na noni / shigoto shite iru","correct":"やすみなのに、しごとを しています。","romaji":"Yasumi na noni, shigoto wo shite imasu.","translation":"Padahal hari libur, masih bekerja."}
    ],
    "exam":{
      "part1":[
        {"id":"ex32-1","sentence":"あたまが いたい [ ]、はやく かえります。","correct":"ので","translation":"Karena kepala sakit, saya pulang cepat."},
        {"id":"ex32-2","sentence":"まいにち れんしゅうした [ ]、うまく なりません。","correct":"のに","translation":"Padahal berlatih setiap hari, tidak mahir juga."},
        {"id":"ex32-3","sentence":"しずかな [ ]、べんきょうが できます。","correct":"ので","translation":"Karena tenang, bisa belajar."},
        {"id":"ex32-4","sentence":"やくそくした [ ]、きませんでした。","correct":"のに","translation":"Padahal sudah berjanji, tidak datang."},
        {"id":"ex32-5","sentence":"でんしゃが おくれた [ ]、ちこくしました。","correct":"ので","translation":"Karena kereta terlambat, saya terlambat."}
      ],
      "part2":[
        {"id":"ex32-6","question":"のに digunakan untuk menyatakan:","options":[{"text":"Alasan yang sopan","correct":false},{"text":"Kontras yang mengandung kekecewaan atau kejutan","correct":true},{"text":"Kondisi jika-maka","correct":false}]},
        {"id":"ex32-7","question":"Perbedaan ので dan から:","options":[{"text":"Keduanya sama persis","correct":false},{"text":"ので lebih sopan/objektif; から lebih langsung/subjektif","correct":true},{"text":"から lebih sopan dari ので","correct":false}]},
        {"id":"ex32-8","question":"Kalimat yang benar untuk 'Padahal murah, kualitasnya bagus':","options":[{"text":"安いので、品質がいいです。","correct":false},{"text":"安いのに、品質がいいです。","correct":true},{"text":"安くて、品質がいいです。","correct":false}]}
      ],
      "part3":{
        "text":"きょうは やすみなのに、かいしゃから でんわが かかってきました。しごとの もんだいが あったので、でんわで たいおう しました。たいへんでしたが、もんだいは かいけつできました。やすみの ひに しごとを するのは、すこし かなしいです。",
        "questions":[
          {"id":"ex32-9","question":"きょうは しごとの ひです。","correct":"F"},
          {"id":"ex32-10","question":"かいしゃから れんらくが ありました。","correct":"T"},
          {"id":"ex32-11","question":"もんだいは かいけつ できませんでした。","correct":"F"}
        ]
      }
    }
  },
  {
    "id": 33,
    "title": "Lesson 33: 〜ために vs 〜ように (Tujuan)",
    "desc": "Membedakan dua pola tujuan yang sering tertukar: 〜ために (untuk/demi — dengan kata kerja kemauan) dan 〜ように (agar/supaya — dengan kata kerja potensial atau negatif).",
    "locked": false,
    "vocab": [
      {"id":"v33-1","rom":"Mokuhyoo","kana":"もくひょう","kanji":"目標","en":"Target / Tujuan","audio":""},
      {"id":"v33-2","rom":"Yume","kana":"ゆめ","kanji":"夢","en":"Mimpi / Impian","audio":""},
      {"id":"v33-3","rom":"Shoorai","kana":"しょうらい","kanji":"将来","en":"Masa depan","audio":""},
      {"id":"v33-4","rom":"Ikiru","kana":"いきます","kanji":"生きます","en":"Hidup / Tinggal","audio":""},
      {"id":"v33-5","rom":"Tasukeru","kana":"たすけます","kanji":"助けます","en":"Menolong / Membantu","audio":""},
      {"id":"v33-6","rom":"Sodateru","kana":"そだてます","kanji":"育てます","en":"Membesarkan / Mendidik","audio":""},
      {"id":"v33-7","rom":"Kyouiku","kana":"きょういく","kanji":"教育","en":"Pendidikan","audio":""},
      {"id":"v33-8","rom":"Eiyoo","kana":"えいよう","kanji":"栄養","en":"Nutrisi / Gizi","audio":""},
      {"id":"v33-9","rom":"Undoo","kana":"うんどう","kanji":"運動","en":"Olahraga / Gerakan","audio":""},
      {"id":"v33-10","rom":"Taijuu","kana":"たいじゅう","kanji":"体重","en":"Berat badan","audio":""},
      {"id":"v33-11","rom":"Herasu","kana":"へらします","kanji":"減らします","en":"Mengurangi","audio":""},
      {"id":"v33-12","rom":"Fusegu","kana":"ふせぎます","kanji":"防ぎます","en":"Mencegah / Menghalangi","audio":""},
      {"id":"v33-13","rom":"Jibun","kana":"じぶん","kanji":"自分","en":"Diri sendiri","audio":""},
      {"id":"v33-14","rom":"Shakai","kana":"しゃかい","kanji":"社会","en":"Masyarakat / Sosial","audio":""},
      {"id":"v33-15","rom":"Kifu (shimasu)","kana":"きふ（します）","kanji":"寄付（します）","en":"Berdonasi / Menyumbang","audio":""}
    ],
    "grammar": [
      {
        "id":"g33-1",
        "title":"1. 〜ために (Untuk / Demi — Tujuan dengan Kemauan)",
        "desc":"Digunakan ketika subjek secara aktif dan sadar melakukan sesuatu untuk mencapai tujuan tertentu. Kata kerja sebelum ために harus berupa kata kerja kemauan (volitional verb).",
        "points":[
          "Pola: V dictionary form + ために / N + のために",
          "Contoh V: Nihongo wo jouzu ni naru TAME NI, mainichi benkyoo shimasu. (Untuk menjadi pandai berbahasa Jepang, saya belajar setiap hari).",
          "Contoh N: Kazoku NO TAME NI, isshookenmei hatarakimasu. (Demi keluarga, saya bekerja keras).",
          "BATASAN: Kata kerja sebelum ために harus kata kerja 'kehendak' (bukan kondisi alami). ✗ Ame ga furu tame ni (salah) → gunakan ように"
        ],
        "formula":"V-dict + ために / N + のために",
        "native_note":"ために bisa berarti 'untuk' (tujuan positif) atau 'karena' (sebab) tergantung konteks. Ketika berarti sebab, sering menunjukkan situasi negatif: Byooki no tame ni, yasumimashita (Karena sakit, saya absen)."
      },
      {
        "id":"g33-2",
        "title":"2. 〜ように (Agar / Supaya — Target dengan Potensial/Negatif)",
        "desc":"Digunakan ketika tujuannya adalah mencapai suatu kondisi atau kemampuan, atau menghindari sesuatu. Berbeda dengan ために, kata kerja sebelum ように sering berupa bentuk potensial atau negatif.",
        "points":[
          "Pola: V-potential / V-negative + ように + V",
          "Contoh potensial: Nihongo ga hanaSERU YOO NI, renshuu shimasu. (Berlatih agar bisa berbicara bahasa Jepang).",
          "Contoh negatif: Wasurenai YOO NI, memo wo torimasu. (Agar tidak lupa, saya mencatat).",
          "Perbedaan kunci: ために → tujuan dengan aksi aktif; ように → target kondisi/kemampuan/pencegahan.",
          "Penggunaan bersama ください: ~youni shite kudasai = Tolong usahakan untuk..."
        ],
        "formula":"V-potential/negative + ように"
      },
      {
        "id":"g33-3",
        "title":"3. Perbandingan ために vs ように",
        "desc":"Panduan praktis memilih antara ために dan ように.",
        "points":[
          "Gunakan ために: tujuan = aksi aktif yang Anda kontrol (beli, pergi, belajar, dll.)",
          "Gunakan ように: tujuan = kondisi/kemampuan yang ingin dicapai (bisa berbicara, tidak lupa, dll.)",
          "Test sederhana: Apakah kalimatnya 'saya [aktif melakukan X] untuk [tujuan]'? → ために",
          "Apakah kalimatnya 'saya [melakukan X] agar [kondisi/kemampuan terpenuhi]'? → ように"
        ],
        "formula":"Aksi aktif → ために / Kondisi/kemampuan → ように"
      }
    ],
    "patterns":[
      {"jp":"医者になるために、一生懸命勉強しています。","rom":"Isha ni naru tame ni, isshoukenmei benkyoo shite imasu.","en":"Untuk menjadi dokter, saya belajar keras."},
      {"jp":"日本語が話せるように、毎日練習しています。","rom":"Nihongo ga hanaseru you ni, mainichi renshuu shite imasu.","en":"Agar bisa berbicara bahasa Jepang, saya berlatih setiap hari."},
      {"jp":"家族のために、毎日働いています。","rom":"Kazoku no tame ni, mainichi hataraite imasu.","en":"Demi keluarga, saya bekerja setiap hari."},
      {"jp":"遅刻しないように、早く起きます。","rom":"Chikoku shinai you ni, hayaku okimasu.","en":"Agar tidak terlambat, saya bangun pagi."}
    ],
    "conversation":{
      "title":"Berbagi Impian dan Usaha",
      "dialogue":[
        {"speaker":"A","jp":"将来、何になりたいですか。","rom":"Shourai, nani ni naritai desu ka.","en":"Ke depannya, ingin menjadi apa?"},
        {"speaker":"B","jp":"通訳になりたいです。そのために、今英語と日本語を勉強しています。","rom":"Tsuuyaku ni naritai desu. Sono tame ni, ima eigo to nihongo wo benkyoo shite imasu.","en":"Saya ingin menjadi penerjemah. Untuk itu, sekarang saya belajar bahasa Inggris dan Jepang."},
        {"speaker":"A","jp":"すごいですね。二つの言語が話せるようになりたいんですね。","rom":"Sugoi desu ne. Futatsu no gengo ga hanaseru you ni naritain desu ne.","en":"Keren ya. Ingin bisa berbicara dua bahasa ya."},
        {"speaker":"B","jp":"はい。夢のために、毎日頑張っています。","rom":"Hai. Yume no tame ni, mainichi ganbatte imasu.","en":"Ya. Demi impian, saya berjuang setiap hari."}
      ]
    },
    "practice":[
      {"type":"mcq","question":"Kalimat yang menggunakan ために dengan BENAR:","options":[{"text":"日本語が話せるために、練習します。","correct":false},{"text":"日本語を上手にするために、練習します。","correct":true},{"text":"遅刻しないために、早起きします。","correct":false}]},
      {"type":"fill","question":"'Agar tidak sakit, saya makan sayuran'.\nByooki ni naranai [   ], yasai wo tabemasu.","answer":"you ni"},
      {"type":"mcq","question":"Perbedaan ために dan ように:","options":[{"text":"ために untuk kondisi/kemampuan; ように untuk aksi aktif","correct":false},{"text":"ために untuk aksi aktif; ように untuk kondisi/kemampuan/pencegahan","correct":true},{"text":"Keduanya sama","correct":false}]}
    ],
    "mini_kaiwa":[
      {"title":"Motivasi Belajar","situation":"Teman bertanya tentang alasan belajar Jepang","dialogue":[
        {"speaker":"A","jp":"なぜ日本語を勉強しているんですか。","rom":"Naze nihongo wo benkyoo shite iru n desu ka.","en":"Kenapa belajar bahasa Jepang?"},
        {"speaker":"B","jp":"日本で働くために勉強しています。日本語が話せるようになりたいんです。","rom":"Nihon de hataraku tame ni benkyoo shite imasu. Nihongo ga hanaseru you ni naritain desu.","en":"Saya belajar untuk bekerja di Jepang. Saya ingin bisa berbicara bahasa Jepang."}
      ]}
    ],
    "reibun":[
      {"id":"r33-1","jp":"健康のために、毎日運動しています。","rom":"Kenkou no tame ni, mainichi undoo shite imasu.","en":"Demi kesehatan, saya berolahraga setiap hari."},
      {"id":"r33-2","jp":"忘れないように、メモを取りました。","rom":"Wasurenai you ni, memo wo torimashita.","en":"Agar tidak lupa, saya mencatat."},
      {"id":"r33-3","jp":"日本の大学に入るために、日本語の試験を受けます。","rom":"Nihon no daigaku ni hairu tame ni, nihongo no shiken wo ukemasu.","en":"Untuk masuk universitas di Jepang, saya ikut ujian bahasa Jepang."},
      {"id":"r33-4","jp":"よく聞こえるように、大きい声で話してください。","rom":"Yoku kikoeru you ni, ookii koe de hanashite kudasai.","en":"Agar terdengar jelas, tolong bicara lebih keras."},
      {"id":"r33-5","jp":"病気にならないように、手を洗います。","rom":"Byooki ni naranai you ni, te wo araimasu.","en":"Agar tidak sakit, saya cuci tangan."}
    ],
    "workbook":[
      {"id":"wb33-1","pattern":"V-dict + ために","instruction":"Buat kalimat tujuan: 'Untuk membeli rumah, menabung'.","question":"Ie / kau / tame ni / chokin shimasu","correct":"いえを かうために、ちょきんします。","romaji":"Ie wo kau tame ni, chokin shimasu.","translation":"Untuk membeli rumah, saya menabung."},
      {"id":"wb33-2","pattern":"N + のために","instruction":"Gunakan のために: 'Demi perdamaian dunia, bekerja keras'.","question":"Sekai heiwa / no tame ni / hatarakimasu","correct":"せかいへいわのために、はたらきます。","romaji":"Sekai heiwa no tame ni, hatarakimasu.","translation":"Demi perdamaian dunia, saya bekerja."},
      {"id":"wb33-3","pattern":"V-potential + ように","instruction":"Buat kalimat target kemampuan: 'Berlatih agar bisa berenang'.","question":"Oyogeru / you ni / renshuu shimasu","correct":"およげるように、れんしゅうします。","romaji":"Oyogeru you ni, renshuu shimasu.","translation":"Berlatih agar bisa berenang."},
      {"id":"wb33-4","pattern":"V-negative + ように","instruction":"Buat kalimat pencegahan: 'Agar tidak lupa, menempel catatan'.","question":"Wasurenai / you ni / memo wo harimasu","correct":"わすれないように、めもをはります。","romaji":"Wasurenai you ni, memo wo harimasu.","translation":"Agar tidak lupa, saya menempel catatan."},
      {"id":"wb33-5","pattern":"Pilih ために atau ように","instruction":"Pilih yang tepat: 'Berolahraga agar bisa menurunkan berat badan'.","question":"Taijuu / herasu / [tame ni / you ni] / undoo shimasu","correct":"たいじゅうを へらせるように、うんどうします。","romaji":"Taijuu wo heraseru you ni, undoo shimasu.","translation":"Berolahraga agar bisa menurunkan berat badan. (ように karena target kemampuan)"}
    ],
    "exam":{
      "part1":[
        {"id":"ex33-1","sentence":"いしゃに なる [ ]、いっしょうけんめい べんきょうします。","correct":"ために","translation":"Untuk menjadi dokter, belajar keras."},
        {"id":"ex33-2","sentence":"にほんごが はなせる [ ]、まいにち れんしゅうします。","correct":"ように","translation":"Agar bisa berbicara Jepang, berlatih setiap hari."},
        {"id":"ex33-3","sentence":"かぞく [ ] ために、はたらいています。","correct":"の","translation":"Bekerja demi keluarga."},
        {"id":"ex33-4","sentence":"わすれない [ ]、めもを とりました。","correct":"ように","translation":"Agar tidak lupa, mencatat."},
        {"id":"ex33-5","sentence":"けんこう [ ] ために、やさいを たべます。","correct":"の","translation":"Makan sayuran demi kesehatan."}
      ],
      "part2":[
        {"id":"ex33-6","question":"Gunakan ために atau ように: 'Berlatih agar bisa bermain piano'","options":[{"text":"ピアノが弾けるために、練習します。","correct":false},{"text":"ピアノが弾けるように、練習します。","correct":true},{"text":"ピアノを弾くために、練習します。","correct":false}]},
        {"id":"ex33-7","question":"Kata kerja yang bisa langsung mengikuti ために:","options":[{"text":"Bentuk potensial (〜られる/〜える)","correct":false},{"text":"Bentuk kamus (dictionary form)","correct":true},{"text":"Bentuk negatif (〜ない)","correct":false}]},
        {"id":"ex33-8","question":"'Yasai wo taberu you ni shite imasu' berarti:","options":[{"text":"Saya makan sayuran (fakta)","correct":false},{"text":"Saya berusaha untuk makan sayuran","correct":true},{"text":"Saya ingin makan sayuran","correct":false}]}
      ],
      "part3":{
        "text":"わたしの ゆめは ひしょです。そのために、まいにち えいごを べんきょうしています。えいごで しごとが できるように、かいわの れんしゅうも して います。むずかしいですが、ゆめの ために あきらめません。",
        "questions":[
          {"id":"ex33-9","question":"この人の ゆめは いしゃに なることです。","correct":"F"},
          {"id":"ex33-10","question":"この人は えいごを べんきょうしています。","correct":"T"},
          {"id":"ex33-11","question":"この人は むずかしいから あきらめます。","correct":"F"}
        ]
      }
    }
  },
  {
    "id": 34,
    "title": "Lesson 34: 〜ようになります / 〜ようにします",
    "desc": "Menguasai dua pola perubahan penting: 〜ようになります (perubahan yang terjadi secara gradual — akhirnya bisa/tidak lagi) dan 〜ようにします (usaha aktif untuk membiasakan diri).",
    "locked": false,
    "vocab": [
      {"id":"v34-1","rom":"Nareru","kana":"なれます","kanji":"慣れます","en":"Terbiasa / Beradaptasi","audio":""},
      {"id":"v34-2","rom":"Tsuzukeru","kana":"つづけます","kanji":"続けます","en":"Melanjutkan / Meneruskan","audio":""},
      {"id":"v34-3","rom":"Yaめる","kana":"やめます","kanji":"やめます","en":"Berhenti / Meninggalkan","audio":""},
      {"id":"v34-4","rom":"Kawaru","kana":"かわります","kanji":"変わります","en":"Berubah","audio":""},
      {"id":"v34-5","rom":"Seichoo (shimasu)","kana":"せいちょう（します）","kanji":"成長（します）","en":"Berkembang / Tumbuh","audio":""},
      {"id":"v34-6","rom":"Shuukan","kana":"しゅうかん","kanji":"習慣","en":"Kebiasaan","audio":""},
      {"id":"v34-7","rom":"Mainichi","kana":"まいにち","kanji":"毎日","en":"Setiap hari","audio":""},
      {"id":"v34-8","rom":"Sukoshi zutsu","kana":"すこしずつ","kanji":"少しずつ","en":"Sedikit demi sedikit","audio":""},
      {"id":"v34-9","rom":"Jibun de","kana":"じぶんで","kanji":"自分で","en":"Sendiri / Oleh diri sendiri","audio":""},
      {"id":"v34-10","rom":"Ki wo tsukeru","kana":"きをつけます","kanji":"気をつけます","en":"Berhati-hati / Waspada","audio":""},
      {"id":"v34-11","rom":"Kirei ni naru","kana":"きれいになります","kanji":"きれいになります","en":"Menjadi cantik/bersih","audio":""},
      {"id":"v34-12","rom":"Taberaeru","kana":"たべられます","kanji":"食べられます","en":"Bisa dimakan / Dapat memakan","audio":""},
      {"id":"v34-13","rom":"Oyogeru","kana":"およげます","kanji":"泳げます","en":"Bisa berenang","audio":""},
      {"id":"v34-14","rom":"Hayakime","kana":"はやめに","kanji":"早めに","en":"Sedikit lebih awal / Sebelum terlambat","audio":""},
      {"id":"v34-15","rom":"Kotoba","kana":"ことば","kanji":"言葉","en":"Kata / Bahasa / Ungkapan","audio":""}
    ],
    "grammar":[
      {
        "id":"g34-1",
        "title":"1. 〜ようになります (Perubahan Gradual — Jadi Bisa / Tidak Lagi)",
        "desc":"Menyatakan perubahan kemampuan atau kebiasaan yang terjadi secara bertahap dari waktu ke waktu.",
        "points":[
          "Pola positif: V-potential + ようになりました. Contoh: Nihongo ga hanaSERU you ni narimashita. (Akhirnya bisa berbicara bahasa Jepang).",
          "Pola negatif: V-negative + ようになりました. Contoh: Sake wo noma NAKU naru you ni narimashita. (Tidak lagi minum sake).",
          "Nuansa kunci: Ini bukan keputusan sadar, tapi perubahan alami yang terjadi seiring waktu.",
          "Bandingkan: 〜ことができるようになりました = versi yang lebih formal.",
          "Juga digunakan: Adj/Noun + に + なりました (perubahan yang lebih sederhana)."
        ],
        "formula":"V-potential/negative + ようになります",
        "native_note":"Ketika orang Jepang ingin menunjukkan progress belajar, mereka sering berkata '〜できるようになりました' daripada sekedar '〜できます'. Ini menunjukkan proses perkembangan."
      },
      {
        "id":"g34-2",
        "title":"2. 〜ようにします (Usaha Aktif — Membiasakan Diri)",
        "desc":"Menyatakan upaya aktif dan sadar untuk membiasakan diri melakukan atau tidak melakukan sesuatu. Ini adalah KEPUTUSAN, bukan perubahan alami.",
        "points":[
          "Pola: V-dict/negative + ようにします",
          "Contoh positif: Mainichi undo suru YOO NI shite imasu. (Saya berusaha berolahraga setiap hari).",
          "Contoh negatif: Osoku made OKINAI you ni shite imasu. (Saya berusaha tidak begadang).",
          "Untuk saran/instruksi: ~you ni shite kudasai. (Tolong usahakan untuk ~).",
          "Perbedaan dengan ようになります: します = usaha aktif; なります = perubahan alami."
        ],
        "formula":"V-dict/negative + ようにします / ようにしています",
        "native_note":"Ketika dokter memberi nasihat, sering berkata: 'Tabako wo suwanai you ni shite kudasai' (Tolong berusaha tidak merokok). Ini adalah pola yang sangat umum dalam konteks medis dan kesehatan."
      }
    ],
    "patterns":[
      {"jp":"日本に来て、生魚が食べられるようになりました。","rom":"Nihon ni kite, namazakana ga taberareru you ni narimashita.","en":"Setelah datang ke Jepang, akhirnya bisa makan ikan mentah."},
      {"jp":"毎日野菜を食べるようにしています。","rom":"Mainichi yasai wo taberu you ni shite imasu.","en":"Saya berusaha makan sayuran setiap hari."},
      {"jp":"子供の頃は泳げませんでしたが、今は泳げるようになりました。","rom":"Kodomo no koro wa oyogemasen deshita ga, ima wa oyogeru you ni narimashita.","en":"Waktu kecil tidak bisa berenang, tapi sekarang sudah bisa."},
      {"jp":"夜遅くまで起きないようにしています。","rom":"Yoru osoku made okinai you ni shite imasu.","en":"Saya berusaha tidak begadang sampai larut malam."}
    ],
    "conversation":{
      "title":"Progres Belajar Bahasa",
      "dialogue":[
        {"speaker":"Sensei","jp":"最近、日本語の上達はどうですか。","rom":"Sakin, nihongo no joutatsu wa doo desu ka.","en":"Bagaimana kemajuan bahasa Jepang belakangan ini?"},
        {"speaker":"Gakusei","jp":"だいぶ話せるようになりました。最初は全然話せませんでしたが…。","rom":"Daibu hanaseru you ni narimashita. Saisho wa zenzen hanasemasen deshita ga...","en":"Sudah bisa berbicara cukup banyak. Di awal sama sekali tidak bisa berbicara..."},
        {"speaker":"Sensei","jp":"よく頑張りましたね。何か特別なことをしましたか。","rom":"Yoku ganbari mashita ne. Nanika tokubetsu na koto wo shimashita ka.","en":"Sungguh kerja keras ya. Ada yang dilakukan secara khusus?"},
        {"speaker":"Gakusei","jp":"毎日日本語で日記を書くようにしました。それが効果的だったと思います。","rom":"Mainichi nihongo de nikki wo kaku you ni shimashita. Sore ga kookateki datta to omoimasu.","en":"Saya membiasakan diri menulis buku harian dalam bahasa Jepang setiap hari. Sepertinya itu efektif."}
      ]
    },
    "practice":[
      {"type":"mcq","question":"'Oyogeru you ni narimashita' berarti:","options":[{"text":"Saya berusaha bisa berenang","correct":false},{"text":"Akhirnya saya bisa berenang (perubahan gradual)","correct":true},{"text":"Saya memutuskan untuk bisa berenang","correct":false}]},
      {"type":"fill","question":"'Saya berusaha tidak merokok'.\nTabako wo suwanai [   ] shite imasu.","answer":"you ni"},
      {"type":"mcq","question":"Perbedaan ようになります dan ようにします:","options":[{"text":"Keduanya sama","correct":false},{"text":"なります = perubahan alami; します = usaha/keputusan aktif","correct":true},{"text":"します = perubahan alami; なります = usaha aktif","correct":false}]}
    ],
    "mini_kaiwa":[
      {"title":"Nasehat Kesehatan","situation":"Dokter memberi nasihat kepada pasien","dialogue":[
        {"speaker":"Dokter","jp":"毎日30分、歩くようにしてください。","rom":"Mainichi sanjuppun, aruku you ni shite kudasai.","en":"Tolong usahakan berjalan kaki 30 menit setiap hari."},
        {"speaker":"Pasien","jp":"わかりました。脂っこいものも食べないようにします。","rom":"Wakarimashita. Abura kko i mono mo tabenai you ni shimasu.","en":"Baik. Saya juga akan berusaha tidak makan makanan berlemak."}
      ]}
    ],
    "reibun":[
      {"id":"r34-1","jp":"練習を続けて、ギターが弾けるようになりました。","rom":"Renshuu wo tsuzukete, gitaa ga hikeru you ni narimashita.","en":"Terus berlatih, akhirnya bisa bermain gitar."},
      {"id":"r34-2","jp":"健康のために、毎朝ジョギングするようにしています。","rom":"Kenkou no tame ni, maiasa jogingu suru you ni shite imasu.","en":"Demi kesehatan, saya berusaha jogging setiap pagi."},
      {"id":"r34-3","jp":"日本に来てから、生の魚が食べられるようになりました。","rom":"Nihon ni kite kara, nama no sakana ga taberareru you ni narimashita.","en":"Sejak datang ke Jepang, bisa makan ikan mentah."},
      {"id":"r34-4","jp":"お酒を飲みすぎないようにしています。","rom":"Osake wo nomisuginai you ni shite imasu.","en":"Saya berusaha tidak minum alkohol berlebihan."},
      {"id":"r34-5","jp":"最近、漢字が少し読めるようになりました。","rom":"Sakin, kanji ga sukoshi yomeru you ni narimashita.","en":"Belakangan ini, sudah bisa membaca sedikit kanji."}
    ],
    "workbook":[
      {"id":"wb34-1","pattern":"V-potential + ようになりました","instruction":"Nyatakan perubahan kemampuan: 'Sekarang bisa makan natto'.","question":"Ima / nattoo / taberareru / you ni narimashita","correct":"いまは なっとうが たべられるように なりました。","romaji":"Ima wa nattoo ga taberareru you ni narimashita.","translation":"Sekarang sudah bisa makan natto."},
      {"id":"wb34-2","pattern":"V-negative + ようになりました","instruction":"Nyatakan berhentinya kebiasaan: 'Tidak lagi merokok'.","question":"Tabako / suwanaku / naru / you ni narimashita","correct":"たばこを すわなくなりました。","romaji":"Tabako wo suwanaku narimashita.","translation":"Tidak lagi merokok."},
      {"id":"wb34-3","pattern":"V + ようにしています","instruction":"Nyatakan kebiasaan aktif: 'Berusaha tidur sebelum jam 11'.","question":"Juuichiji mae / neru / you ni shite imasu","correct":"じゅういちじまえに ねるように しています。","romaji":"Juuichiji mae ni neru you ni shite imasu.","translation":"Saya berusaha tidur sebelum jam 11."},
      {"id":"wb34-4","pattern":"V-negative + ようにしています","instruction":"Nyatakan pencegahan aktif: 'Berusaha tidak makan manis terlalu banyak'.","question":"Amai mono / tabesuginai / you ni shite imasu","correct":"あまいものを たべすぎないように しています。","romaji":"Amai mono wo tabesuginai you ni shite imasu.","translation":"Saya berusaha tidak makan terlalu banyak manis."},
      {"id":"wb34-5","pattern":"ようにしてください (instruksi)","instruction":"Beri instruksi sopan: 'Tolong usahakan datang tepat waktu'.","question":"Jikan doori / kuru / you ni shite kudasai","correct":"じかんどおりに くるように してください。","romaji":"Jikan doori ni kuru you ni shite kudasai.","translation":"Tolong usahakan untuk datang tepat waktu."}
    ],
    "exam":{
      "part1":[
        {"id":"ex34-1","sentence":"れんしゅうを つづけて、ギターが ひける [ ] なりました。","correct":"ように","translation":"Terus berlatih, akhirnya bisa bermain gitar."},
        {"id":"ex34-2","sentence":"まいにち やさいを たべる [ ] しています。","correct":"ように","translation":"Berusaha makan sayuran setiap hari."},
        {"id":"ex34-3","sentence":"にほんに きてから、なまの さかなが たべられる [ ] なりました。","correct":"ように","translation":"Sejak ke Jepang, bisa makan ikan mentah."},
        {"id":"ex34-4","sentence":"おそく まで おきない [ ] しています。","correct":"ように","translation":"Berusaha tidak begadang."},
        {"id":"ex34-5","sentence":"さいきん かんじが すこし よめる [ ] なりました。","correct":"ように","translation":"Belakangan bisa membaca sedikit kanji."}
      ],
      "part2":[
        {"id":"ex34-6","question":"'Oyogeru you ni narimashita' vs 'Oyogu you ni shite imasu':","options":[{"text":"Keduanya sama maknanya","correct":false},{"text":"narimashita = sudah bisa (perubahan terjadi); shite imasu = sedang berusaha (keputusan aktif)","correct":true},{"text":"shite imasu = sudah bisa; narimashita = masih berusaha","correct":false}]},
        {"id":"ex34-7","question":"Dokter berkata 'Tabesuginai you ni shite kudasai'. Artinya:","options":[{"text":"Silakan makan banyak","correct":false},{"text":"Tolong usahakan untuk tidak makan berlebihan","correct":true},{"text":"Anda tidak boleh makan","correct":false}]},
        {"id":"ex34-8","question":"Kalimat yang menyatakan perubahan alami/gradual adalah:","options":[{"text":"毎日野菜を食べるようにしています。","correct":false},{"text":"日本語が少し話せるようになりました。","correct":true},{"text":"タバコを吸わないようにします。","correct":false}]}
      ],
      "part3":{
        "text":"わたしは こどもの ころ、にんじんが きらいでした。でも、おとなに なってから、たべられるように なりました。いまは けんこうの ために、まいにち やさいを たべるように しています。しょくじに きをつけるように なって、からだの ちょうしが よくなりました。",
        "questions":[
          {"id":"ex34-9","question":"こどもの ころから にんじんが すきでした。","correct":"F"},
          {"id":"ex34-10","question":"いまは まいにち やさいを たべるように しています。","correct":"T"},
          {"id":"ex34-11","question":"しょくじに きをつけてから、けんこうに なりました。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 35,
    "title": "Lesson 35: 〜てほしいです / 〜といいです",
    "desc": "Mempelajari cara menyatakan keinginan agar orang lain melakukan sesuatu (〜てほしいです) dan harapan yang bersifat umum atau untuk diri sendiri (〜といいです / 〜といいのですが).",
    "locked": false,
    "vocab": [
      {"id":"v35-1","rom":"Negau","kana":"ねがいます","kanji":"願います","en":"Memohon / Berharap","audio":""},
      {"id":"v35-2","rom":"Kiboo","kana":"きぼう","kanji":"希望","en":"Harapan / Keinginan","audio":""},
      {"id":"v35-3","rom":"Kitai","kana":"きたい","kanji":"期待","en":"Ekspektasi / Harapan besar","audio":""},
      {"id":"v35-4","rom":"Tanomi","kana":"たのみ","kanji":"頼み","en":"Permintaan / Permohonan bantuan","audio":""},
      {"id":"v35-5","rom":"Joukyoo","kana":"じょうきょう","kanji":"状況","en":"Situasi / Kondisi","audio":""},
      {"id":"v35-6","rom":"Chuui (shimasu)","kana":"ちゅうい（します）","kanji":"注意（します）","en":"Memperhatikan / Mengingatkan / Waspada","audio":""},
      {"id":"v35-7","rom":"Naosu","kana":"なおします","kanji":"直します","en":"Memperbaiki / Mengoreksi","audio":""},
      {"id":"v35-8","rom":"Mitsukaru","kana":"みつかります","kanji":"見つかります","en":"Ditemukan (intransitif)","audio":""},
      {"id":"v35-9","rom":"Hayaku naorimasu","kana":"はやくなおります","kanji":"早く治ります","en":"Cepat sembuh","audio":""},
      {"id":"v35-10","rom":"Umai","kana":"うまい","kanji":"うまい","en":"Enak / Mahir (kasual)","audio":""},
      {"id":"v35-11","rom":"Seikoo (shimasu)","kana":"せいこう（します）","kanji":"成功（します）","en":"Berhasil / Sukses","audio":""},
      {"id":"v35-12","rom":"Shiken","kana":"しけん","kanji":"試験","en":"Ujian / Tes","audio":""},
      {"id":"v35-13","rom":"Ukaru","kana":"うかります","kanji":"受かります","en":"Lulus ujian","audio":""},
      {"id":"v35-14","rom":"Kekkon","kana":"けっこん","kanji":"結婚","en":"Pernikahan","audio":""},
      {"id":"v35-15","rom":"Shiawase","kana":"しあわせ","kanji":"幸せ","en":"Kebahagiaan / Bahagia","audio":""}
    ],
    "grammar":[
      {
        "id":"g35-1",
        "title":"1. 〜てほしいです (Ingin Orang Lain Melakukan ~)",
        "desc":"Menyatakan keinginan atau permintaan agar orang tertentu melakukan sesuatu. Subjek yang diinginkan melakukan sesuatu ditandai dengan partikel に.",
        "points":[
          "Pola: [Orang に] V-te form + ほしいです",
          "Contoh: Kare NI hayaku kaette hoshii desu. (Saya ingin dia cepat pulang).",
          "Negatif: [Orang に] V-negative + でほしいです. Contoh: Soko ni ikanaide hoshii. (Saya tidak ingin kamu pergi ke sana).",
          "Lebih sopan: ~ていただきたいです (kenjōgo version).",
          "PERHATIAN: Jangan gunakan untuk permintaan kepada orang yang lebih tinggi statusnya — gunakan 〜ていただけませんか."
        ],
        "formula":"[Person に] V-te + ほしいです / V-ないで + ほしいです",
        "native_note":"てほしい sering dipakai dalam lagu-lagu Jepang! Misalnya: 'そばにいてほしい' (ingin kamu selalu di sisiku) adalah ungkapan yang sangat umum dalam J-pop."
      },
      {
        "id":"g35-2",
        "title":"2. 〜といいです / 〜といいのですが (Semoga / Mudah-mudahan)",
        "desc":"Menyatakan harapan yang bersifat umum, untuk diri sendiri, atau untuk orang lain. Berbeda dari てほしい yang lebih spesifik kepada seseorang.",
        "points":[
          "Pola: Plain form + といいです / といいですね",
          "Contoh harapan untuk orang lain: Hayaku naoru TO II desu ne. (Semoga cepat sembuh ya).",
          "Contoh harapan untuk diri sendiri: Shiken ni ukaru TO II N desu ga... (Saya harap bisa lulus ujian, tapi...).",
          "~といいですね → harapan untuk orang lain (dengan nuansa simpati).",
          "~といいんですが → harapan pribadi yang tidak pasti, sering dengan nuansa kekhawatiran."
        ],
        "formula":"Plain form + といいです(ね) / といいんですが"
      }
    ],
    "patterns":[
      {"jp":"もっとよく考えてほしいです。","rom":"Motto yoku kangaete hoshii desu.","en":"Saya ingin Anda memikirkannya lebih baik lagi."},
      {"jp":"早く元気になるといいですね。","rom":"Hayaku genki ni naru to ii desu ne.","en":"Semoga cepat pulih ya."},
      {"jp":"彼に本当のことを話してほしいです。","rom":"Kare ni hontoo no koto wo hanashite hoshii desu.","en":"Saya ingin dia menceritakan yang sebenarnya."},
      {"jp":"明日、晴れるといいですね。","rom":"Ashita, hareru to ii desu ne.","en":"Mudah-mudahan besok cerah ya."}
    ],
    "conversation":{
      "title":"Mendoakan dan Meminta",
      "dialogue":[
        {"speaker":"A","jp":"明日、大事な発表があるんです。","rom":"Ashita, daiji na happyoo ga aru n desu.","en":"Besok ada presentasi penting."},
        {"speaker":"B","jp":"そうですか。うまくいくといいですね。","rom":"Soo desu ka. Umaku iku to ii desu ne.","en":"Begitu ya. Semoga berjalan dengan baik ya."},
        {"speaker":"A","jp":"ありがとうございます。山田さんにも来てほしいんですが…。","rom":"Arigatoo gozaimasu. Yamada-san ni mo kite hoshiin desu ga...","en":"Terima kasih. Saya ingin Yamada-san juga datang, tapi..."},
        {"speaker":"B","jp":"わかりました。できる限り参加するようにします。","rom":"Wakarimashita. Dekiru kagiri sanka suru you ni shimasu.","en":"Baik. Saya akan berusaha hadir semampu saya."}
      ]
    },
    "practice":[
      {"type":"mcq","question":"'Kare ni shinjitsu wo itte hoshii desu' berarti:","options":[{"text":"Dia ingin saya mengatakan kebenaran","correct":false},{"text":"Saya ingin dia mengatakan kebenaran","correct":true},{"text":"Saya harap dia berkata jujur (harapan umum)","correct":false}]},
      {"type":"fill","question":"'Semoga cuacanya bagus besok'.\nAshita, ii tenki ni naru [   ] desu ne.","answer":"to ii"},
      {"type":"mcq","question":"Perbedaan てほしい dan といいです:","options":[{"text":"Keduanya sama","correct":false},{"text":"てほしい = permintaan kepada orang tertentu; といいです = harapan umum/personal","correct":true},{"text":"といいです = permintaan kepada orang tertentu","correct":false}]}
    ],
    "mini_kaiwa":[
      {"title":"Mendoakan Teman Sakit","situation":"Mengunjungi teman yang sakit","dialogue":[
        {"speaker":"A","jp":"早く元気になってほしいです。","rom":"Hayaku genki ni natte hoshii desu.","en":"Saya ingin kamu cepat sembuh."},
        {"speaker":"B","jp":"ありがとう。もう少しで治ると思う。","rom":"Arigatoo. Moo sukoshi de naoru to omou.","en":"Makasih. Sepertinya sebentar lagi sembuh."}
      ]}
    ],
    "reibun":[
      {"id":"r35-1","jp":"彼女に早く来てほしいです。","rom":"Kanojo ni hayaku kite hoshii desu.","en":"Saya ingin dia cepat datang."},
      {"id":"r35-2","jp":"試験に合格するといいですね。","rom":"Shiken ni goukaku suru to ii desu ne.","en":"Semoga lulus ujian ya."},
      {"id":"r35-3","jp":"子供には健康でいてほしいです。","rom":"Kodomo ni wa kenkou de ite hoshii desu.","en":"Saya ingin anak-anak tetap sehat."},
      {"id":"r35-4","jp":"明日の天気が良くなるといいんですが…。","rom":"Ashita no tenki ga yoku naru to ii n desu ga...","en":"Mudah-mudahan cuaca besok membaik, tapi..."},
      {"id":"r35-5","jp":"もっと時間があるといいのに。","rom":"Motto jikan ga aru to ii noni.","en":"Kalau saja ada lebih banyak waktu (menyesal)."}
    ],
    "workbook":[
      {"id":"wb35-1","pattern":"[Person に] V-te + ほしいです","instruction":"Nyatakan keinginan: 'Saya ingin teman saya membantu'.","question":"Tomodachi / tetsudau / hoshii","correct":"ともだちに てつだってほしいです。","romaji":"Tomodachi ni tetsudatte hoshii desu.","translation":"Saya ingin teman saya membantu."},
      {"id":"wb35-2","pattern":"V-naide + ほしいです (negatif)","instruction":"Nyatakan larangan yang diinginkan: 'Saya tidak ingin dia pergi'.","question":"Kare / ikanaide / hoshii","correct":"かれに いかないでほしいです。","romaji":"Kare ni ikanaide hoshii desu.","translation":"Saya tidak ingin dia pergi."},
      {"id":"wb35-3","pattern":"〜といいですね (harapan untuk orang lain)","instruction":"Berikan harapan: 'Semoga bisnis Anda sukses'.","question":"Shigoto / umaku iku / to ii desu ne","correct":"しごとが うまく いくといいですね。","romaji":"Shigoto ga umaku iku to ii desu ne.","translation":"Semoga pekerjaan Anda berjalan baik."},
      {"id":"wb35-4","pattern":"〜といいんですが (harapan pribadi)","instruction":"Ungkapkan harapan pribadi yang tidak pasti.","question":"Shiken / ukaru / to ii n desu ga","correct":"しけんに うかるといいんですが...","romaji":"Shiken ni ukaru to ii n desu ga..","translation":"Saya harap bisa lulus ujian, tapi..."},
      {"id":"wb35-5","pattern":"〜といいのに (penyesalan)","instruction":"Ungkapkan penyesalan atas situasi saat ini.","question":"Motto / okane / aru / to ii noni","correct":"もっと おかねが あるといいのに。","romaji":"Motto okane ga aru to ii noni.","translation":"Kalau saja ada lebih banyak uang (tapi tidak ada)."}
    ],
    "exam":{
      "part1":[
        {"id":"ex35-1","sentence":"かれに しんじつを はなして [ ] です。","correct":"ほしい","translation":"Saya ingin dia mengatakan kebenaran."},
        {"id":"ex35-2","sentence":"あした はれる [ ] いいですね。","correct":"と","translation":"Semoga besok cerah ya."},
        {"id":"ex35-3","sentence":"こどもに けんこうで いて [ ] です。","correct":"ほしい","translation":"Saya ingin anak-anak tetap sehat."},
        {"id":"ex35-4","sentence":"しけんに ごうかく する [ ] いいんですが...","correct":"と","translation":"Saya harap bisa lulus ujian, tapi..."},
        {"id":"ex35-5","sentence":"もっと じかんが ある [ ] いいのに。","correct":"と","translation":"Kalau saja ada lebih banyak waktu."}
      ],
      "part2":[
        {"id":"ex35-6","question":"てほしいです digunakan untuk:","options":[{"text":"Harapan umum yang tidak ditujukan kepada siapapun","correct":false},{"text":"Keinginan agar orang tertentu melakukan sesuatu","correct":true},{"text":"Harapan untuk diri sendiri","correct":false}]},
        {"id":"ex35-7","question":"'Hayaku naoru to ii desu ne' paling tepat dikatakan kepada:","options":[{"text":"Diri sendiri yang sedang sakit","correct":false},{"text":"Orang lain yang sedang sakit (harapan/doa)","correct":true},{"text":"Dokter","correct":false}]},
        {"id":"ex35-8","question":"Versi sopan dari てほしいです untuk permintaan kepada atasan:","options":[{"text":"〜てもらいたいです","correct":false},{"text":"〜ていただきたいです","correct":true},{"text":"〜てください","correct":false}]}
      ],
      "part3":{
        "text":"ともだちが しごとの めんせつを うけます。わたしは かれに うまく いってほしいです。めんせつで じぶんの きもちを しっかり つたえられるといいですね。かれは とても まじめなので、きっと だいじょうぶだと おもいます。せいこうを いのっています。",
        "questions":[
          {"id":"ex35-9","question":"ともだちは しごとの めんせつを うけます。","correct":"T"},
          {"id":"ex35-10","question":"わたしは ともだちが しっぱいしてほしいです。","correct":"F"},
          {"id":"ex35-11","question":"わたしは ともだちは だいじょうぶだと おもっています。","correct":"T"}
        ]
      }
    }
  }
];

// Write each chapter
let count = 0;
for (const ch of CHAPTERS) {
  const fp = path.join(chaptersDir, `chapter_${ch.id}.json`);
  fs.writeFileSync(fp, JSON.stringify(ch, null, 2), 'utf-8');
  console.log(`  ✅ chapter_${ch.id}.json — ${ch.title}`);
  count++;
}
console.log(`\n✨ Done! Written ${count} chapters (31-35).`);
