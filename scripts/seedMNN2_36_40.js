/**
 * seedMNN2_36_40.js — Minna no Nihongo II, Lesson 36-40
 * Run: node scripts/seedMNN2_36_40.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const chaptersDir = path.join(__dirname, '../src/data/chapters');

const CHAPTERS = [
  {
    "id": 36,
    "title": "Lesson 36: Penyesalan & Persiapan (〜てしまう / 〜ておく)",
    "desc": "Mempelajari cara menyatakan penyelesaian suatu tindakan dengan penyesalan menggunakan 〜てしまう (atau kasual 〜ちゃう), serta persiapan tindakan sebelum suatu waktu dengan 〜ておく (atau kasual 〜とく).",
    "locked": false,
    "vocab": [
      {"id":"v36-1","rom":"Wasureru","kana":"わすれます","kanji":"忘れます","en":"Lupa / Melupakan","audio":""},
      {"id":"v36-2","rom":"Nakusu","kana":"なくします","kanji":"無くします","en":"Menghilangkan","audio":""},
      {"id":"v36-3","rom":"Kowasu","kana":"こわします","kanji":"壊します","en":"Merusak / Memecahkan","audio":""},
      {"id":"v36-4","rom":"Junbi (shimasu)","kana":"じゅんび（します）","kanji":"準備（します）","en":"Mempersiapkan / Persiapan","audio":""},
      {"id":"v36-5","rom":"Yoyaku (shimasu)","kana":"よやく（します）","kanji":"予約（します）","en":"Memesan / Reservasi","audio":""},
      {"id":"v36-6","rom":"Keikaku (shimasu)","kana":"けいかく（します）","kanji":"計画（します）","en":"Merencanakan / Rencana","audio":""},
      {"id":"v36-7","rom":"Katazukeru","kana":"かたづけます","kanji":"片付けます","en":"Merapikan / Membereskan","audio":""},
      {"id":"v36-8","rom":"Shimau","kana":"しまいます","kanji":"仕舞います","en":"Menyimpan / Menaruh kembali","audio":""},
      {"id":"v36-9","rom":"Otosu","kana":"おとします","kanji":"落とします","en":"Menjatuhkan / Kehilangan","audio":""},
      {"id":"v36-10","rom":"Yogosu","kana":"よごします","kanji":"汚します","en":"Mengotori","audio":""},
      {"id":"v36-11","rom":"Saifu","kana":"さいふ","kanji":"財布","en":"Dompet","audio":""},
      {"id":"v36-12","rom":"Torioki (shimasu)","kana":"とりおき（します）","kanji":"取り置き（します）","en":"Menyisihkan / Menyimpan terlebih dahulu","audio":""},
      {"id":"v36-13","rom":"Kowareru","kana":"こわれます","kanji":"壊れます","en":"Rusak / Pecah (intransitif)","audio":""},
      {"id":"v36-14","rom":"Yotei","kana":"よてい","kanji":"予定","en":"Jadwal / Rencana","audio":""},
      {"id":"v36-15","rom":"Sakuin","kana":"さくいん","kanji":"索引","en":"Indeks / Daftar isi","audio":""}
    ],
    "grammar": [
      {
        "id":"g36-1",
        "title":"1. 〜てしまいます (Selesai Tuntas / Penyesalan)",
        "desc":"Menyatakan tindakan yang telah selesai secara menyeluruh. Jika tindakannya tidak disengaja, pola ini mengandung nuansa penyesalan atau kekecewaan.",
        "points":[
          "Pola: V-te + しまいます (Bentuk lampau: 〜てしまいました)",
          "Nuansa 1 (Selesai Tuntas): Syukudai wo zenbu yatte shimaimashita (Saya menyelesaikan semua PR sampai habis).",
          "Nuansa 2 (Penyesalan): Saifu wo nakushite shimaimashita (Dompet saya terlanjur hilang — menyesal).",
          "Bentuk kasual: V-te + しまう → 〜ちゃう / V-de + しまう → 〜じゃう"
        ],
        "formula":"V-て + しまいます / しまいました",
        "native_note":"Dalam percakapan kasual sehari-hari, orang Jepang hampir selalu menyingkat 'shichatta' atau 'tabechatta' untuk menyatakan ketidaksengajaan."
      },
      {
        "id":"g36-2",
        "title":"2. 〜ておきます (Tindakan Persiapan)",
        "desc":"Melakukan suatu aksi sebagai persiapan untuk masa depan, atau membiarkan situasi tetap seperti semula untuk langkah selanjutnya.",
        "points":[
          "Pola: V-te + おきます (Bentuk lampau: 〜ておきました)",
          "Contoh: Ryokou no mae ni, hoteru wo yoyaku shite okimasu. (Sebelum perjalanan, saya memesan hotel terlebih dahulu).",
          "Bentuk kasual: V-te + おく → 〜とく / V-de + おく → 〜どく. Contoh: kattoku (membeli dulu)."
        ],
        "formula":"V-て + おきます / おきました"
      }
    ],
    "patterns": [
      {"jp":"パスポートをなくしてしまいました。","rom":"Pasupooto wo nakushite shimaimashita.","en":"Paspor saya terlanjur hilang (menyesal)."},
      {"jp":"宿題はもうやってしまいました。","rom":"Syukudai wa mou yatte shimaimashita.","en":"Saya sudah menyelesaikan semua PR saya."},
      {"jp":"旅行の前に、切符を買っておきます。","rom":"Ryokou no mae ni, kippu wo katte okimasu.","en":"Sebelum pergi berwisata, saya akan membeli tiket dulu (persiapan)."},
      {"jp":"ハサミを使ったら、元の場所に戻しておいてください。","rom":"Hasami wo tsukattara, moto no basho ni modoshite oite kudasai.","en":"Kalau sudah pakai gunting, tolong kembalikan ke tempat semula (agar siap dipakai nanti)."}
    ],
    "conversation": {
      "title":"Terlanjur Kehilangan Barang",
      "dialogue": [
        {"speaker":"A","jp":"どうしたんですか。暗い顔をして。","rom":"Dō shitan desu ka. Kurai kao wo shite.","en":"Ada apa? Wajahmu tampak murung."},
        {"speaker":"B","jp":"電車の会社で、財布を落としてしまったんです。","rom":"Densha no kaisha de, saifu wo otoshite shimatta n desu.","en":"Saya terlanjur menjatuhkan dompet saya di stasiun kereta."},
        {"speaker":"A","jp":"えっ、それは大変ですね。警察に行きましたか。","rom":"Ets, sore wa taihen desu ne. Keisatsu ni ikimashita ka.","en":"Eh, gawat ya. Apakah sudah pergi ke polisi?"},
        {"speaker":"B","jp":"はい。クレジットカードはもう止めておきました。","rom":"Hai. Kurejitto kaado wa mou tomete okimashita.","en":"Sudah. Kartu kreditnya sudah saya blokir terlebih dahulu."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Pilih bentuk kasual dari 'wasurete shimaimashita':","options":[{"text":"わすれちゃった","correct":true},{"text":"わすれといた","correct":false},{"text":"わすれちゃう","correct":false}]},
      {"type":"fill","question":"Terjemahkan: 'Sebelum rapat, menyalin dokumen'.\nKaigi no mae ni, shiryoo woコピーして [   ]ます。","answer":"oki"},
      {"type":"mcq","question":"Perbedaan nuansa 〜てしまう dan 〜ておく:","options":[{"text":"てしまう = penyesalan/tuntas; ておく = aksi persiapan","correct":true},{"text":"てしまう = aksi persiapan; ておく = penyesalan","correct":false},{"text":"Keduanya sama saja","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Mempersiapkan Pesta","situation":"Dua rekan mempersiapkan pesta ulang tahun","dialogue":[
        {"speaker":"A","jp":"パーティーの準備はどうですか。","rom":"Paatii no junbi wa dō desu ka.","en":"Bagaimana persiapan pestanya?"},
        {"speaker":"B","jp":"飲み物はもう買っておきました。ケーキは予約してあります。","rom":"Nomimono wa mou katte okimashita. Keeki wa yoyaku shite arimasu.","en":"Minuman sudah saya beli dulu. Kue sudah dipesan."}
      ]}
    ],
    "reibun": [
      {"id":"r36-1","jp":"お気に入りのコップを壊してしまいました。","rom":"Okiniri no koppu wo kowashite shimaimashita.","en":"Gelas kesukaan saya terlanjur pecah."},
      {"id":"r36-2","jp":"会議資料は昨日コピーしておきました。","rom":"Kaigi shiryoo wa kinou kopii shite okimashita.","en":"Dokumen rapat sudah saya salin kemarin (sebagai persiapan)."},
      {"id":"r36-3","jp":"本を全部読んでしまいました。","rom":"Hon wo zenbu yonde shimaimashita.","en":"Saya sudah membaca habis bukunya."},
      {"id":"r36-4","jp":"来週までにレポートを書いておきます。","rom":"Raishuu made ni repooto wo kaite okimasu.","en":"Saya akan menulis laporan terlebih dahulu sebelum minggu depan."},
      {"id":"r36-5","jp":"名前を間違えて書いてしまいました。","rom":"Namae wo machigaete kaite shimaimashita.","en":"Saya terlanjur menulis nama dengan salah."}
    ],
    "workbook": [
      {"id":"wb36-1","pattern":"V-te + しまいました","instruction":"Nyatakan penyesalan: 'Saya kehilangan paspor'.","question":"Pasupooto / nakusu / shimau","correct":"パスポートをなくしてしまいました。","romaji":"Pasupooto wo nakushite shimaimashita.","translation":"Paspor saya terlanjur hilang."},
      {"id":"wb36-2","pattern":"V-te + おきます","instruction":"Nyatakan aksi persiapan: 'Memesan hotel sebelum wisata'.","question":"Ryokou / hoteru / yoyaku suru / oku","correct":"りょこうのまえにホテルをよやくしておきます。","romaji":"Ryokou no mae ni hoteru wo yoyaku shite okimasu.","translation":"Memesan hotel terlebih dahulu sebelum wisata."},
      {"id":"wb36-3","pattern":"V-te + おいてください","instruction":"Minta persiapan: 'Tolong biarkan pintu terbuka'.","question":"Doa / akeru / oite kudasai","correct":"ドアをあけておいてください。","romaji":"Doa wo akete oite kudasai.","translation":"Tolong biarkan pintunya terbuka."},
      {"id":"wb36-4","pattern":"Bentuk kasual 〜ちゃう","instruction":"Ubah kalimat berikut menjadi bentuk kasual.","question":"Wasurete shimaimashita","correct":"わすれちゃいました。","romaji":"Wasurechaimashita.","translation":"Terlanjur lupa."},
      {"id":"wb36-5","pattern":"Bentuk kasual 〜とく","instruction":"Ubah kalimat berikut menjadi bentuk kasual.","question":"Katte okimasu","correct":"かっときます。","romaji":"Kattokimasu.","translation":"Membeli dulu."}
    ],
    "exam": {
      "part1": [
        {"id":"ex36-1","sentence":"たいせつな かぎを なくして [ ] ました。","correct":"しまい","translation":"Kunci penting saya terlanjur hilang."},
        {"id":"ex36-2","sentence":"りょこうの まえに、きっぷを かって [ ] ます。","correct":"おき","translation":"Sebelum perjalanan, membeli tiket terlebih dahulu."},
        {"id":"ex36-3","sentence":"この ほんは もう よんで [ ] ました。","correct":"しまい","translation":"Buku ini sudah saya baca habis."},
        {"id":"ex36-4","sentence":"つかったら、もとの ばしょに もどして [ ] ください。","correct":"おいて","translation":"Kalau sudah dipakai, tolong kembalikan ke tempat semula."},
        {"id":"ex36-5","sentence":"あした テストが あるので、べんきょうして [ ] ます。","correct":"おき","translation":"Karena besok ada ujian, saya belajar dulu."}
      ],
      "part2": [
        {"id":"ex36-6","question":"'Tabechaotta' artinya:","options":[{"text":"Terlanjur makan habis (kasual)","correct":true},{"text":"Ingin makan","correct":false},{"text":"Makan sebagai persiapan","correct":false}]},
        {"id":"ex36-7","question":"Ekspresi mana yang digunakan untuk persiapan?","options":[{"text":"〜ておきます","correct":true},{"text":"〜てしまいます","correct":false},{"text":"〜ています","correct":false}]},
        {"id":"ex36-8","question":"Contoh penggunaan 〜ておく yang berarti 'membiarkan suatu kondisi tetap':","options":[{"text":"エアコンを消しておきます。","correct":false},{"text":"エアコンをつけておきます。(biarkan AC menyala)","correct":true},{"text":"エアコンが壊れてしまいました。","correct":false}]}
      ],
      "part3": {
        "text":"あしたは ともだちの たんじょうびパーティーが あります。わたしは もう プレゼントを かっておきました。しかし、かばんの なかに いれるのを わすれてしまいました。あしたの あさ、でかけるまえに かならず かばんに いれておきます。",
        "questions": [
          {"id":"ex36-9","question":"ともだちの パーティーは あしたです。","correct":"T"},
          {"id":"ex36-10","question":"プレゼントは まだ かっていません。","correct":"F"},
          {"id":"ex36-11","question":"プレゼントを かばんに いれるのを わすれました。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 37,
    "title": "Lesson 37: Aksi Bersamaan & Urutan (〜ながら / 〜てから vs あとで)",
    "desc": "Mempelajari cara menyatakan dua aksi yang dilakukan bersamaan dengan 〜ながら, serta perbedaan antara 〜てから (segera setelah) dan 〜あとで (setelah beberapa waktu).",
    "locked": false,
    "vocab": [
      {"id":"v37-1","rom":"Dōjini","kana":"どうじに","kanji":"同時に","en":"Secara bersamaan / Sekaligus","audio":""},
      {"id":"v37-2","rom":"Ayumu","kana":"あゆみます","kanji":"歩みます","en":"Berjalan / Melangkah","audio":""},
      {"id":"v37-3","rom":"Heikō (shimasu)","kana":"へいこう（します）","kanji":"並行（します）","en":"Beriringan / Sejajar","audio":""},
      {"id":"v37-4","rom":"Onaji jikan","kana":"おなじじかん","kanji":"同じ時間","en":"Waktu yang sama","audio":""},
      {"id":"v37-5","rom":"Utau","kana":"うたいます","kanji":"歌います","en":"Bernyanyi","audio":""},
      {"id":"v37-6","rom":"Odoru","kana":"おどります","kanji":"踊ります","en":"Menari","audio":""},
      {"id":"v37-7","rom":"Bangohan","kana":"ばんごはん","kanji":"晩ご飯","en":"Makan malam","audio":""},
      {"id":"v37-8","rom":"Nagara","kana":"ながら","kanji":"","en":"Sambil","audio":""},
      {"id":"v37-9","rom":"Ato de","kana":"あとで","kanji":"後で","en":"Nanti / Setelah","audio":""},
      {"id":"v37-10","rom":"Shawaa","kana":"シャワー","kanji":"","en":"Shower / Mandi pancuran","audio":""},
      {"id":"v37-11","rom":"Unten (shimasu)","kana":"うんてん（します）","kanji":"運転（します）","en":"Menyetir / Mengemudi","audio":""},
      {"id":"v37-12","rom":"Kiku","kana":"ききます","kanji":"聞きます","en":"Mendengarkan","audio":""},
      {"id":"v37-13","rom":"Rajio","kana":"ラジオ","kanji":"","en":"Radio","audio":""},
      {"id":"v37-14","rom":"Omo na","kana":"おもな","kanji":"主な","en":"Utama","audio":""},
      {"id":"v37-15","rom":"Dousa","kana":"どうさ","kanji":"動作","en":"Gerakan / Tindakan","audio":""}
    ],
    "grammar": [
      {
        "id":"g37-1",
        "title":"1. 〜ながら (Sambil — Dua Aksi Bersamaan)",
        "desc":"Menyatakan dua tindakan yang dilakukan secara bersamaan oleh subjek yang sama. Tindakan utama diletakkan di akhir.",
        "points":[
          "Pola: V1-stem + ながら, V2",
          "Aturan penting: Subjek V1 dan V2 harus sama.",
          "Tindakan utama: V2 adalah aksi yang lebih penting/utama.",
          "Contoh: Ongaku wo KIKI-nagara benkyoo shimasu. (Saya belajar sambil mendengarkan musik — belajar adalah aksi utama)."
        ],
        "formula":"V-stem + ながら",
        "native_note":"Saat berbicara dengan atasan, hindari melakukan sesuatu sambil lalu. Orang Jepang menganggap 'nagara-dousa' (melakukan dua hal sekaligus) dalam situasi formal kurang sopan."
      },
      {
        "id":"g37-2",
        "title":"2. 〜てから vs 〜あとで (Urutan Waktu)",
        "desc":"Memahami perbedaan urutan waktu. 〜てから menandakan aksi kedua langsung dilakukan setelah aksi pertama. 〜あとで menunjukkan waktu setelah aksi pertama selesai (tidak harus langsung).",
        "points":[
          "〜てから: V1-te + から, V2. Urutan kronologis erat. (Contoh: Tangan dicuci baru makan).",
          "〜あとで: V1-ta + あとで, V2 / N + のあとで. Hanya urutan umum di masa lalu atau masa depan.",
          "Contoh: Shigoto ga owatta ato de, nomini ikimasu (Setelah kerja selesai, pergi minum — ada jeda)."
        ],
        "formula":"V-て + から (Kronologis langsung) / V-た + あとで / N + のあとで"
      }
    ],
    "patterns": [
      {"jp":"音楽を聞きながらご飯を食べます。","rom":"Ongaku wo kiki-nagaraごはん wo tabemasu.","en":"Makan nasi sambil mendengarkan musik."},
      {"jp":"手を洗ってから食事をします。","rom":"Te wo arautte kara shokuji wo shimasu.","en":"Setelah mencuci tangan, baru makan (seketika)."},
      {"jp":"仕事が終わったあとで、映画を見に行きます。","rom":"Shigoto ga owatta ato de, eiga wo mi ni ikimasu.","en":"Setelah pekerjaan selesai, saya pergi menonton film (ada jeda waktu)."},
      {"jp":"運転しながらスマホを使ってはいけません。","rom":"Unten shi-nagara sumaho wo tsukatte wa ikemasen.","en":"Tidak boleh menggunakan ponsel sambil menyetir."}
    ],
    "conversation": {
      "title":"Kebiasaan Belajar",
      "dialogue": [
        {"speaker":"A","jp":"毎日どうやって勉強していますか。","rom":"Mainichi dō yatte benkyō shite imasu ka.","en":"Bagaimana kamu belajar setiap hari?"},
        {"speaker":"B","jp":"ラジオを聞きながら日本語を書いています。","rom":"Rajio wo kiki-nagara Nihongo wo kaite imasu.","en":"Saya menulis bahasa Jepang sambil mendengarkan radio."},
        {"speaker":"A","jp":"へえ、器用ですね。私は宿題が終わったあとで音楽を聞きます。","rom":"Hee, kiyō desu ne. Watashi wa syukudai ga owatta ato de ongaku wo kikimasu.","en":"Wah, terampil ya. Kalau saya mendengarkan musik setelah PR selesai."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Aksi utama dalam pola 'A-nagara B' adalah aksi ke-____:","options":[{"text":"B (kedua)","correct":true},{"text":"A (kesatu)","correct":false},{"text":"Keduanya setara","correct":false}]},
      {"type":"fill","question":"'Setelah mandi shower (shawaa wo abiru), saya tidur'.\nShawaa wo abi[   ] kara nemasu.","answer":"te"},
      {"type":"mcq","question":"Gunakan 'ato de' yang tepat: 'Setelah makan siang (lunch)':","options":[{"text":"ランチのあとで","correct":true},{"text":"ランチしたあとで","correct":false},{"text":"ランチながら","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Rencana Setelah Kelas","situation":"Teman sekelas mengobrol setelah kelas selesai","dialogue":[
        {"speaker":"A","jp":"授業が終わったらどうしますか。","rom":"Jugyō ga owattara dō shimasu ka.","en":"Apa yang akan kamu lakukan jika kelas selesai?"},
        {"speaker":"B","jp":"アルバイトのあとで、友達と晩ご飯を食べに行きます。","rom":"Arubaito no ato de, tomodachi to bangohan wo tabe ni ikimasu.","en":"Setelah kerja paruh waktu, saya akan pergi makan malam dengan teman."}
      ]}
    ],
    "reibun": [
      {"id":"r37-1","jp":"歩きながらスマホを見ないでください。","rom":"Aruki-nagara sumaho wo minaide kudasai.","en":"Tolong jangan melihat ponsel sambil berjalan."},
      {"id":"r37-2","jp":"シャワーを浴びてから寝ます。","rom":"Shawaa wo abite kara nemasu.","en":"Saya tidur setelah mandi shower."},
      {"id":"r37-3","jp":"ご飯を食べたあとで、薬を飲みます。","rom":"Gohan wo tabeta ato de, kusuri wo nomimasu.","en":"Saya minum obat setelah makan."},
      {"id":"r37-4","jp":"お茶を飲みながら話をしましょう。","rom":"Ocha wo nomi-nagara hanashi wo shimashou.","en":"Mari kita mengobrol sambil minum teh."},
      {"id":"r37-5","jp":"日本に来てから日本語の勉強を始めました。","rom":"Nihon ni kite kara Nihongo no benkyō wo hajimemashita.","en":"Saya mulai belajar bahasa Jepang setelah datang ke Jepang."}
    ],
    "workbook": [
      {"id":"wb37-1","pattern":"V-stem + ながら","instruction":"Buat kalimat: 'Membaca koran sambil minum kopi'.","question":"Koohii / nomu / shinbun / yomu","correct":"コーヒーをのみながらしんぶんをよみます。","romaji":"Koohii wo nomi-nagara shinbun wo yomimasu.","translation":"Membaca koran sambil minum kopi."},
      {"id":"wb37-2","pattern":"V-て + から","instruction":"Nyatakan urutan kronologis langsung: 'Mengerjakan PR setelah pulang rumah'.","question":"Uchi / kaeru / syukudai / suru","correct":"うちに帰ってから宿題をします。","romaji":"Uchi ni kaette kara syukudai wo shimasu.","translation":"Saya mengerjakan PR setelah pulang ke rumah."},
      {"id":"wb37-3","pattern":"V-た + あとで","instruction":"Nyatakan urutan waktu: 'Menonton TV setelah belajar'.","question":"Benkyō suru / terebi / miru","correct":"勉強したあとでテレビを見ます。","romaji":"Benkyō shita ato de terebi wo mimasu.","translation":"Saya menonton TV setelah belajar."},
      {"id":"wb37-4","pattern":"N + のあとで","instruction":"Nyatakan urutan waktu dengan kata benda: 'Pergi belanja setelah rapat'.","question":"Kaigi / shoppingu / iku","correct":"会議のあとでショッピングに行きます。","romaji":"Kaigi no ato de shoppingu ni ikimasu.","translation":"Saya pergi belanja setelah rapat."},
      {"id":"wb37-5","pattern":"Subjek sama pada ながら","instruction":"Perbaiki kesalahan kalimat ini jika subjeknya berbeda.","question":"Aksi A dan B harus dikerjakan oleh satu subjek saja.","correct":"はい、わかりました。","romaji":"Hai, wakarimashita.","translation":"Ya, saya paham."}
    ],
    "exam": {
      "part1": [
        {"id":"ex37-1","sentence":"こうひいを のみ [ ] しんぶんを よみます。","correct":"ながら","translation":"Membaca koran sambil minum kopi."},
        {"id":"ex37-2","sentence":"てを あらっ [ ] から ごはんを たべます。","correct":"て","translation":"Setelah mencuci tangan, makan."},
        {"id":"ex37-3","sentence":"しごとが おわった [ ] で、おさけを のみに行きます。","correct":"あと","translation":"Setelah pekerjaan selesai, pergi minum."},
        {"id":"ex37-4","sentence":"うたい [ ] おどるのが すきです。","correct":"ながら","translation":"Suka menari sambil bernyanyi."},
        {"id":"ex37-5","sentence":"かいぎ [ ] あとで れんらくします。","correct":"の","translation":"Akan saya hubungi setelah rapat."}
      ],
      "part2": [
        {"id":"ex37-6","question":"Kalimat yang SALAH secara tata bahasa adalah:","options":[{"text":"テレビを見ながら勉強します。","correct":false},{"text":"私が歌いながら彼がギターを弾きます。(subjek berbeda)","correct":true},{"text":"晩ご飯を食べたあとで宿題をします。","correct":false}]},
        {"id":"ex37-7","question":"'Kitte kara kaerimasu' berarti:","options":[{"text":"Saya pulang langsung setelah memotong/datang","correct":true},{"text":"Saya memotong sambil pulang","correct":false},{"text":"Saya akan pulang setelah beberapa waktu","correct":false}]},
        {"id":"ex37-8","question":"Partikel setelah kata benda pada pola 'setelah N' adalah:","options":[{"text":"の","correct":true},{"text":"を","correct":false},{"text":"に","correct":false}]}
      ],
      "part3": {
        "text":"わたしは 毎朝 コーヒーを のみながら ニュースを よみます。ニュースを よんだあとで、シャワーを あびてから 会社へ いきます。会社へ いってからは、いそがしくて ニュースを よむ じかんが ありません。",
        "questions": [
          {"id":"ex37-9","question":"この人は 朝コーヒーを のみます。","correct":"T"},
          {"id":"ex37-10","question":"この人は シャワーを あびるまえに ニュースを よみます。","correct":"T"},
          {"id":"ex37-11","question":"この人は 会社でも ニュースを よみます。","correct":"F"}
        ]
      }
    }
  },
  {
    "id": 38,
    "title": "Lesson 38: Dua Bentuk Potensial (〜ことができます vs V-potential)",
    "desc": "Menguasai perbedaan dua ekspresi untuk menyatakan 'bisa/kemampuan': bentuk panjang (〜ことができます) yang lebih formal dan tertulis, dan bentuk pendek (kata kerja potensial) yang lebih kasual dan lisan.",
    "locked": false,
    "vocab": [
      {"id":"v38-1","rom":"Jiyuu (na)","kana":"じゆう（な）","kanji":"自由（な）","en":"Bebas","audio":""},
      {"id":"v38-2","rom":"Kanō (na)","kana":"かのう（な）","kanji":"可能（な）","en":"Mungkin / Memungkinkan","audio":""},
      {"id":"v38-3","rom":"Kikaiki","kana":"きかいき","kanji":"機械器","en":"Peralatan mesin","audio":""},
      {"id":"v38-4","rom":"Ginō","kana":"ぎのう","kanji":"技能","en":"Keterampilan / Skill","audio":""},
      {"id":"v38-5","rom":"Supiido","kana":"スピード","kanji":"","en":"Kecepatan (speed)","audio":""},
      {"id":"v38-6","rom":"Oyogeru","kana":"およげます","kanji":"泳げます","en":"Bisa berenang","audio":""},
      {"id":"v38-7","rom":"Taberareru","kana":"たべられます","kanji":"食べられます","en":"Bisa makan / Dapat dimakan","audio":""},
      {"id":"v38-8","rom":"Nihongo ga hanaseru","kana":"にほんごがはなせる","kanji":"日本語が話せる","en":"Bisa berbicara bahasa Jepang","audio":""},
      {"id":"v38-9","rom":"Kanji ga kakeru","kana":"かんじがかける","kanji":"漢字が書ける","en":"Bisa menulis kanji","audio":""},
      {"id":"v38-10","rom":"Koto ga dekiru","kana":"ことができる","kanji":"ことができる","en":"Bisa melakukan sesuatu","audio":""},
      {"id":"v38-11","rom":"Riyou (shimasu)","kana":"りよう（します）","kanji":"利用（します）","en":"Menggunakan / Memanfaatkan","audio":""},
      {"id":"v38-12","rom":"Unten ga dekiru","kana":"うんてんができる","kanji":"運転ができる","en":"Bisa menyetir","audio":""},
      {"id":"v38-13","rom":"Piano ga hakeru","kana":"ぴあのがひける","kanji":"ピアノが弾ける","en":"Bisa bermain piano","audio":""},
      {"id":"v38-14","rom":"Kokusai","kana":"こくさい","kanji":"国際","en":"Internasional","audio":""},
      {"id":"v38-15","rom":"Gengo","kana":"げんご","kanji":"言語","en":"Bahasa","audio":""}
    ],
    "grammar": [
      {
        "id":"g38-1",
        "title":"1. Bentuk Potensial Pendek (V-potential)",
        "desc":"Cara mengonjugasikan kata kerja biasa menjadi bentuk potensial untuk menunjukkan kemampuan atau kemungkinan.",
        "points":[
          "Grup I (godan): akhiran u → e. Contoh: iku→ikeru, hanasu→hanaseru, yomu→yomeru.",
          "Grup II (ichidan): akhiran ru → rareru. Contoh: taberu→taberareru, miru→mirareru.",
          "Grup III (irregular): suru → dekiru, kuru → korareru.",
          "Partikel: Partikel objek を (wo) berubah menjadi が (ga) saat menggunakan bentuk potensial."
        ],
        "formula":"Grup I: V-e + ます / Grup II: V-rare + ます",
        "native_note":"Dalam percakapan kasual, bentuk 'rareru' dari Grup II sering disingkat menjadi 'reru' (ranuki-kotoba). Contoh: 'taberareru' menjadi 'tabereru'."
      },
      {
        "id":"g38-2",
        "title":"2. V-dictionary + ことができます",
        "desc":"Bentuk formal panjang untuk menyatakan kemampuan. Paling sering digunakan dalam dokumen tertulis atau situasi formal bisnis.",
        "points":[
          "Pola: V-dictionary form + ことができます。",
          "Contoh: Kono hoteru de wa kurejitto kaado wo tsukau koto ga dekimasu. (Di hotel ini Anda bisa menggunakan kartu kredit).",
          "Nuansa: Lebih formal dibanding bentuk potensial pendek V-potential."
        ],
        "formula":"V-dict + ことができます"
      }
    ],
    "patterns": [
      {"jp":"日本語を話すことができます。","rom":"Nihongo wo hanasu koto ga dekimasu.","en":"Saya bisa berbicara bahasa Jepang (formal)."},
      {"jp":"漢字が書けます。","rom":"Kanji ga kakemasu.","en":"Saya bisa menulis kanji (potensial pendek)."},
      {"jp":"刺身が食べられますか。","rom":"Sashimi ga taberareru ka.","en":"Apakah kamu bisa makan sashimi?"},
      {"jp":"カードで払うことができます。","rom":"Kaado de harau koto ga dekimasu.","en":"Bisa membayar menggunakan kartu."}
    ],
    "conversation": {
      "title":"Pertanyaan Kemampuan saat Wawancara Kerja",
      "dialogue": [
        {"speaker":"Interviewer","jp":"日本語でレポートを書くことができますか。","rom":"Nihongo de repooto wo kaku koto ga dekimasu ka.","en":"Apakah Anda bisa menulis laporan dalam bahasa Jepang?"},
        {"speaker":"Candidate","jp":"はい、少し時間はかかりますが、書くことができます。","rom":"Hai, sukoshi jikan wa kakarimasu ga, kaku koto ga dekimasu.","en":"Ya, meskipun butuh waktu sedikit, saya bisa menulisnya."},
        {"speaker":"Interviewer","jp":"英語はどうですか。話せますか。","rom":"Eigo wa dō desu ka. Hanasemasu ka.","en":"Bagaimana dengan bahasa Inggris? Bisa berbicara?"},
        {"speaker":"Candidate","jp":"はい、日常会話なら話せます。","rom":"Hai, nichijou kaiwa nara hanasemasu.","en":"Ya, kalau percakapan sehari-hari saya bisa."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Bentuk potensial pendek dari 'kaku' (menulis) adalah:","options":[{"text":"かける","correct":true},{"text":"かかれる","correct":false},{"text":"かくことができる","correct":false}]},
      {"type":"fill","question":"'Saya bisa berenang (oyogu)'.\nWatashi wa oyogu koto [   ] dekimasu.","answer":"ga"},
      {"type":"mcq","question":"Partikel objek を (wo) pada kalimat potensial biasanya diganti dengan partikel apa?","options":[{"text":"が","correct":true},{"text":"に","correct":false},{"text":"で","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Bisa Bermain Musik","situation":"Dua mahasiswa membicarakan instrumen musik","dialogue":[
        {"speaker":"A","jp":"ピアノが弾けますか。","rom":"Piano ga hikemasu ka.","en":"Bisa bermain piano?"},
        {"speaker":"B","jp":"いいえ、弾けません。ギターなら弾くことができます。","rom":"Iie, hikemasen. Gitaa nara hiku koto ga dekimasu.","en":"Tidak, tidak bisa. Kalau gitar saya bisa memainkannya."}
      ]}
    ],
    "reibun": [
      {"id":"r38-1","jp":"一人で日本の病院に行けますか。","rom":"Hitori de Nihon no byōin ni ikemasu ka.","en":"Apakah kamu bisa pergi ke rumah sakit Jepang sendirian?"},
      {"id":"r38-2","jp":"このお店ではインドネシアの通貨を使うことができません。","rom":"Kono omise de wa Indoneshia no tsūka wo tsau koto ga dekimasen.","en":"Di toko ini Anda tidak bisa menggunakan mata uang Indonesia."},
      {"id":"r38-3","jp":"明日は早く来られます。","rom":"Ashita wa hayaku koraremasu.","en":"Besok saya bisa datang lebih awal."},
      {"id":"r38-4","jp":"英語のニュースを理解することができます。","rom":"Eigo no nyūsu wo rikai suru koto ga dekimasu.","en":"Saya bisa memahami berita bahasa Inggris."},
      {"id":"r38-5","jp":"辛い食べ物が食べられます。","rom":"Karai tabemono ga taberareru.","en":"Saya bisa makan makanan pedas."}
    ],
    "workbook": [
      {"id":"wb38-1","pattern":"V-potential (Grup I)","instruction":"Ubah kata kerja ke bentuk potensial pendek.","question":"Utamasu → potential","correct":"うたえます", "romaji":"utamasu", "translation":"Bisa menyanyi"},
      {"id":"wb38-2","pattern":"V-potential (Grup II)","instruction":"Ubah kata kerja ke bentuk potensial pendek.","question":"Taberu → potential","correct":"たべられます", "romaji":"taberareru", "translation":"Bisa makan"},
      {"id":"wb38-3","pattern":"V-potential (Grup III)","instruction":"Ubah kata kerja ke bentuk potensial pendek.","question":"Kuru → potential","correct":"こられます", "romaji":"koraremasu", "translation":"Bisa datang"},
      {"id":"wb38-4","pattern":"V-dictionary + ことができます","instruction":"Buat kalimat dengan bentuk formal panjang: 'Bisa mengemudi mobil'.","question":"Kuruma / unten suru / koto / dekiru","correct":"くるまを うんてんすることができます。","romaji":"Kuruma wo unten suru koto ga dekimasu.","translation":"Bisa menyetir mobil."},
      {"id":"wb38-5","pattern":"Partikel が dalam bentuk potensial","instruction":"Perbaiki partikel: 'Nihongo wo hanasemasu'.","question":"Nihongo / wo / hanasemasu","correct":"にほんごが はなせます。","romaji":"Nihongo ga hanasemasu.","translation":"Bisa berbahasa Jepang."}
    ],
    "exam": {
      "part1": [
        {"id":"ex38-1","sentence":"わたしは にほんご [ ] はなせます。","correct":"が","translation":"Saya bisa berbicara bahasa Jepang."},
        {"id":"ex38-2","sentence":"ここから ふじさんが [ ] ます。","correct":"みえ","translation":"Gunung Fuji bisa terlihat dari sini."},
        {"id":"ex38-3","sentence":"クレジットカードを つかう [ ] が できます。","correct":"こと","translation":"Bisa menggunakan kartu kredit."},
        {"id":"ex38-4","sentence":"あしたは はやく こ [ ] ますか。","correct":"られ","translation":"Apakah besok bisa datang cepat?"},
        {"id":"ex38-5","sentence":"かんじを 100こ かくことができます [ ]。","correct":"か","translation":"Apakah Anda bisa menulis 100 kanji?"}
      ],
      "part2": [
        {"id":"ex38-6","question":"Bentuk potensial pendek dari 'suru' adalah:","options":[{"text":"できる","correct":true},{"text":"すれる","correct":false},{"text":"される","correct":false}]},
        {"id":"ex38-7","question":"Mana yang merupakan ranuki-kotoba (singkatan) dari 'taberareru'?","options":[{"text":"たべれる","correct":true},{"text":"たべられる","correct":false},{"text":"たべできる","correct":false}]},
        {"id":"ex38-8","question":"'Koko de taberu koto ga dekimasen' artinya:","options":[{"text":"Dilarang makan di sini / Tidak bisa makan di sini","correct":true},{"text":"Silakan makan di sini","correct":false},{"text":"Makan di sini sangat sulit","correct":false}]}
      ],
      "part3": {
        "text":"わたしは ギターを ひくことができますが、ピアノは ひけません。あねは ピアノも ギターも ひくことができます。あねは とても じょうずで、うたも うたえます。わたしも あねのように にぎやかに えんそうしたいです。",
        "questions": [
          {"id":"ex38-9","question":"わたしは ピアノが ひけます。","correct":"F"},
          {"id":"ex38-10","question":"あねは ギターを ひくことができます。","correct":"T"},
          {"id":"ex38-11","question":"あねは うたを うたうことも できます。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 39,
    "title": "Lesson 39: Keputusan Pribadi & Sosial (〜ことにする / 〜ことになる)",
    "desc": "Mempelajari perbedaan antara 〜ことにする (memutuskan sendiri untuk melakukan sesuatu) dan 〜ことになる (telah diputuskan oleh keadaan luar/orang lain).",
    "locked": false,
    "vocab": [
      {"id":"v39-1","rom":"Kimeru","kana":"きめます","kanji":"決めます","en":"Memutuskan","audio":""},
      {"id":"v39-2","rom":"Kettei (shimasu)","kana":"けってい（します）","kanji":"決定（します）","en":"Keputusan / Menetapkan","audio":""},
      {"id":"v39-3","rom":"Kisoku","kana":"きそく","kanji":"規則","en":"Peraturan","audio":""},
      {"id":"v39-4","rom":"Shuukan","kana":"しゅうかん","kanji":"習慣","en":"Kebiasaan","audio":""},
      {"id":"v39-5","rom":"Tenkin (shimasu)","kana":"てんきん（します）","kanji":"転勤（します）","en":"Pindah tugas / Mutasi kerja","audio":""},
      {"id":"v39-6","rom":"Koto ni suru","kana":"ことにする","kanji":"","en":"Memutuskan untuk","audio":""},
      {"id":"v39-7","rom":"Koto ni naru","kana":"ことになる","kanji":"","en":"Telah diputuskan (oleh keadaan)","audio":""},
      {"id":"v39-8","rom":"Sake wo yameru","kana":"さけをやめる","kanji":"酒をやめる","en":"Berhenti minum sake","audio":""},
      {"id":"v39-9","rom":"Kaisha no kisoku","kana":"かいしゃのきそく","kanji":"会社の規則","en":"Peraturan perusahaan","audio":""},
      {"id":"v39-10","rom":"Zangyou","kana":"ざんぎょう","kanji":"残業","en":"Lembur","audio":""},
      {"id":"v39-11","rom":"Kinyuu (shimasu)","kana":"きにゅう（します）","kanji":"記入（します）","en":"Mengisi (formulir)","audio":""},
      {"id":"v39-12","rom":"Hikkoshi (shimasu)","kana":"ひっこし（します）","kanji":"引っ越し（します）","en":"Pindah rumah","audio":""},
      {"id":"v39-13","rom":"Kaigai","kana":"かいがい","kanji":"海外","en":"Luar negeri","audio":""},
      {"id":"v39-14","rom":"Shutchou (shimasu)","kana":"しゅっちょう（します）","kanji":"出張（します）","en":"Perjalanan dinas","audio":""},
      {"id":"v39-15","rom":"Kimerareta","kana":"きめられた","kanji":"決められた","en":"Ditentukan / Diputuskan","audio":""}
    ],
    "grammar": [
      {
        "id":"g39-1",
        "title":"1. 〜ことにする (Keputusan Pribadi)",
        "desc":"Menyatakan keputusan aktif yang dibuat oleh pembicara sendiri. Bentuk 〜ことにしています menunjukkan kebiasaan/aturan pribadi yang dijalankan secara konsisten.",
        "points":[
          "Pola: V-dictionary / V-nai + ことにする (Bentuk lampau: 〜ことにしました)",
          "Contoh: Kenkoo no tame ni, mainichi jogingu suru koto ni shimashita. (Untuk kesehatan, saya memutuskan joging setiap hari).",
          "V-ことにしています: Komitmen pribadi. Mainichi kanji wo 5-tsu oboyeru koto ni shite imasu."
        ],
        "formula":"V-dict/nai + ことにする / ことにしている",
        "native_note":"Ketika diwawancarai, menyatakan komitmen pribadi dengan '〜ことにしています' menunjukkan Anda orang yang berdisiplin tinggi."
      },
      {
        "id":"g39-2",
        "title":"2. 〜ことになる (Keputusan Keadaan / Pihak Luar)",
        "desc":"Menyatakan keputusan atau situasi yang telah ditetapkan oleh aturan, keadaan, keputusan kantor, atau kesepakatan bersama, bukan dari kehendak pribadi pembicara saja.",
        "points":[
          "Pola: V-dictionary / V-nai + ことにする → ことになる (Bentuk lampau: 〜ことになりました)",
          "Contoh: Raigetsu, Osaka e tenkin suru koto ni narimashita. (Bulan depan telah diputuskan saya mutasi ke Osaka — keputusan kantor).",
          "V-ことになっています: Menunjukkan peraturan atau adat masyarakat. Koko de wa tabako wo suwanai koto ni natte imasu."
        ],
        "formula":"V-dict/nai + ことになる / ことになっている"
      }
    ],
    "patterns": [
      {"jp":"今日からお酒を飲まないことにしました。","rom":"Kyō kara osake wo nomanai koto ni shimashita.","en":"Saya memutuskan untuk tidak minum sake mulai hari ini."},
      {"jp":"来月、日本へ出張することになりました。","rom":"Raigetsu, Nihon e shutchō suru koto ni narimashita.","en":"Bulan depan telah diputuskan saya dinas ke Jepang (keputusan kantor)."},
      {"jp":"毎朝、水を一杯飲むことにしています。","rom":"Maiasa, mizu wo ippai nomu koto ni shite imasu.","en":"Saya membiasakan diri minum segelas air setiap pagi (komitmen diri)."},
      {"jp":"この部屋では靴を脱ぐことになっています。","rom":"Kono heya de wa kutsu wo nugu koto ni natte imasu.","en":"Di kamar ini diatur untuk melepas sepatu (peraturan)."}
    ],
    "conversation": {
      "title":"Mutasi Tugas yang Mengejutkan",
      "dialogue": [
        {"speaker":"A","jp":"来月から東京の支社へ行くことになりました。","rom":"Raigetsu kara Tōkyō no shisha e iku koto ni narimashita.","en":"Mulai bulan depan telah diputuskan saya pindah ke kantor cabang Tokyo."},
        {"speaker":"B","jp":"えっ、そうなんですか。ご家族はどうしますか。","rom":"Ets, sō nan desu ka. Go-kazoku wa dō shimasu ka.","en":"Eh, benarkah? Bagaimana dengan keluarga Anda?"},
        {"speaker":"A","jp":"家族はここに残して, 一人で行くことにしました。","rom":"Kazoku wa koko ni nokoshite, hitori de iku koto ni shimashita.","en":"Keluarga saya tinggal di sini, dan saya memutuskan pergi sendiri."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Pilih arti dari 'koto ni shite imasu':","options":[{"text":"Membiasakan diri (keputusan pribadi rutin)","correct":true},{"text":"Telah diatur oleh hukum luar","correct":false},{"text":"Terpaksa melakukan","correct":false}]},
      {"type":"fill","question":"'Telah diputuskan saya akan menikah (kekkon suru)'.\nKekkon suru koto ni [   ]mashita.","answer":"nari"},
      {"type":"mcq","question":"Manakah pola yang tepat untuk mengekspresikan peraturan sekolah?","options":[{"text":"ことになっている","correct":true},{"text":"ことにしている","correct":false},{"text":"ことにする","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"Aturan Di Lapangan Olahraga","situation":"Pemain menanyakan aturan lapangan","dialogue":[
        {"speaker":"Pemain","jp":"ここでは夜10時まで練習できますか。","rom":"Koko de wa yoru juuji made renshū dekimasu ka.","en":"Apakah bisa latihan di sini sampai jam 10 malam?"},
        {"speaker":"Petugas","jp":"いいえ、夜9時以降は音を出さないことになっています。","rom":"Iie, yoru kuji ikō wa oto wo dasanai koto ni natte imasu.","en":"Tidak, diatur untuk tidak membuat kebisingan setelah jam 9 malam."}
      ]}
    ],
    "reibun": [
      {"id":"r39-1","jp":"健康のために、エスカレーターを使わないことにしました。","rom":"Kenkoo no tame ni, esukareetaa wo tsukawanai koto ni shimashita.","en":"Demi kesehatan, saya memutuskan untuk tidak menggunakan eskalator."},
      {"id":"r39-2","jp":"会社の規則で、制服を着ることになっています。","rom":"Kaisha no kisoku de, seifuku wo kiru koto ni natte imasu.","en":"Menurut peraturan perusahaan, diatur untuk memakai seragam."},
      {"id":"r39-3","jp":"これから毎日日記を書くことにしています。","rom":"Korekara mainichi nikki wo kaku koto ni shite imasu.","en":"Saya berkomitmen menulis buku harian setiap hari mulai sekarang."},
      {"id":"r39-4","jp":"ビザが取れたので、来週日本へ行くことになりました。","rom":"Biza ga toreta node, raishuu Nihon e iku koto ni narimashita.","en":"Karena visa sudah didapat, diputuskan saya pergi ke Jepang minggu depan."},
      {"id":"r39-5","jp":"夜遅くには電話をかけないことにしています。","rom":"Yoru osoku ni wa denwa wo kakenai koto ni shite imasu.","en":"Saya membiasakan diri untuk tidak menelepon larut malam."}
    ],
    "workbook": [
      {"id":"wb39-1","pattern":"V-dict + ことにする","instruction":"Nyatakan keputusan pribadi: 'Saya memutuskan untuk membeli rumah'.","question":"Ie / kau / koto / suru","correct":"いえをかうことにしました。","romaji":"Ie wo kau koto ni shimashita.","translation":"Saya memutuskan membeli rumah."},
      {"id":"wb39-2","pattern":"V-nai + ことにする","instruction":"Nyatakan keputusan pribadi: 'Memutuskan tidak makan gorengan'.","question":"Tenpura / tabenai / koto / suru","correct":"てんぷらをたべないことにしました。","romaji":"Tenpura wo tabenai koto ni shimashita.","translation":"Saya memutuskan tidak makan tempura."},
      {"id":"wb39-3","pattern":"V-dict + ことになる","instruction":"Nyatakan keputusan dari luar: 'Diputuskan untuk pindah rumah'.","question":"Hikkoshi / suru / koto / naru","correct":"ひっこしすることになりました。","romaji":"Hikkoshi suru koto ni narimashita.","translation":"Telah diputuskan saya pindah rumah."},
      {"id":"wb39-4","pattern":"V-dict + ことにしている","instruction":"Nyatakan komitmen kebiasaan pribadi: 'Berolahraga tiap sore'.","question":"Gogo / undoo / suru / koto / shite iru","correct":"ごごにうんどうすることにしています。","romaji":"Gogo ni undoo suru koto ni shite imasu.","translation":"Saya membiasakan diri berolahraga sore hari."},
      {"id":"wb39-5","pattern":"V-dict + ことになっている","instruction":"Nyatakan aturan sosial: 'Memakai dasi saat jam kerja'.","question":"Dasi / tsukeru / koto / natte iru","correct":"ネクタイをつけることになっています。","romaji":"Nekutai wo tsukeru koto ni natte imasu.","translation":"Diatur untuk memakai dasi."}
    ],
    "exam": {
      "part1": [
        {"id":"ex39-1","sentence":"けんこうのために 毎日 はしる [ ] に しました。","correct":"こと","translation":"Demi kesehatan, memutuskan berlari setiap hari."},
        {"id":"ex39-2","sentence":"かいしゃの きそくで 8じまでに くること [ ] います。","correct":"になって","translation":"Menurut aturan kantor, diatur untuk datang sebelum jam 8."},
        {"id":"ex39-3","sentence":"らいげつ、おおさかへ てんきんすることに [ ] ました。","correct":"なり","translation":"Bulan depan diputuskan mutasi ke Osaka."},
        {"id":"ex39-4","sentence":"よる おそく 食べない [ ] に しています。","correct":"こと","translation":"Membiasakan diri tidak makan larut malam."},
        {"id":"ex39-5","sentence":"じぶんの へ局は じぶんで かたづける [ ] に しました。","correct":"こと","translation":"Memutuskan merapikan kamar sendiri."}
      ],
      "part2": [
        {"id":"ex39-6","question":"'Koto ni shimashita' menunjukkan keputusan dari:","options":[{"text":"Diri sendiri","correct":true},{"text":"Atasan/Perusahaan","correct":false},{"text":"Hukum/Aturan luar","correct":false}]},
        {"id":"ex39-7","question":"'Koto ni narimashita' paling tepat digunakan saat:","options":[{"text":"Mengumumkan pernikahan atau mutasi resmi","correct":true},{"text":"Menolak ajakan makan teman","correct":false},{"text":"Menyatakan kebiasaan mencuci baju","correct":false}]},
        {"id":"ex39-8","question":"Bentuk negatif dari 'koto ni shite imasu' adalah:","options":[{"text":"〜ないことにしています","correct":true},{"text":"〜ことにしていません","correct":false},{"text":"〜ないことになっています","correct":false}]}
      ],
      "part3": {
        "text":"わたしは ことしから 毎日 タバコを すわないことに しました。さいしょは むずかしかったですが、いまも すわないことに しています。また、かいしゃでは 禁煙することに なっているので、すうことが できません。とても いい 習慣だと おもいます。",
        "questions": [
          {"id":"ex39-9","question":"この人は 今年タバコを やめました。","correct":"T"},
          {"id":"ex39-10","question":"会社では タバコを すっても いいです。","correct":"F"},
          {"id":"ex39-11","question":"この人は 今も タバコを すっていません。","correct":"T"}
        ]
      }
    }
  },
  {
    "id": 40,
    "title": "Lesson 40: Kondisi Tetap & Kelalaian (〜まま / 〜っぱなし)",
    "desc": "Mempelajari cara menyatakan kondisi yang dibiarkan tetap tidak berubah menggunakan 〜まま, serta kelalaian membiarkan sesuatu berantakan atau menyala dengan 〜っぱなし.",
    "locked": false,
    "vocab": [
      {"id":"v40-1","rom":"Jōtai","kana":"じょうたい","kanji":"状態","en":"Keadaan / Kondisi","audio":""},
      {"id":"v40-2","rom":"Nokoru","kana":"のこります","kanji":"残ります","en":"Tersisa / Tinggal","audio":""},
      {"id":"v40-3","rom":"Sono mama","kana":"そのまま","kanji":"","en":"Tetap seperti itu","audio":""},
      {"id":"v40-4","rom":"Aketamama","kana":"あけたまま","kanji":"開けたまま","en":"Dibiarkan terbuka","audio":""},
      {"id":"v40-5","rom":"Kakeppanashi","kana":"かけっぱなし","kanji":"","en":"Dibiarkan tergantung / menyala","audio":""},
      {"id":"v40-6","rom":"Tsukepapanashi","kana":"つけっぱなし","kanji":"","en":"Dibiarkan menyala (AC/TV)","audio":""},
      {"id":"v40-7","rom":"Keshitsure","kana":"けしわすれ","kanji":"消し忘れ","en":"Lupa mematikan","audio":""},
      {"id":"v40-8","rom":"Doa","kana":"ドア","kanji":"","en":"Pintu (door)","audio":""},
      {"id":"v40-9","rom":"Kutsu no mama","kana":"くつのまま","kanji":"靴のまま","en":"Tetap memakai sepatu","audio":""},
      {"id":"v40-10","rom":"Hadashi","kana":"はだし","kanji":"裸足","en":"Nyeker / Telanjang kaki","audio":""},
      {"id":"v40-11","rom":"Terebi","kana":"テレビ","kanji":"","en":"Televisi","audio":""},
      {"id":"v40-12","rom":"Shashin","kana":"しゃしん","kanji":"写真","en":"Foto","audio":""},
      {"id":"v40-13","rom":"Megane","kana":"めがね","kanji":"眼鏡","en":"Kacamata","audio":""},
      {"id":"v40-14","rom":"Nemuru","kana":"ねむります","kanji":"眠ります","en":"Tidur / Tertidur","audio":""},
      {"id":"v40-15","rom":"Katazukenai","kana":"かたづけない","kanji":"片付けない","en":"Tidak merapikan","audio":""}
    ],
    "grammar": [
      {
        "id":"g40-1",
        "title":"1. 〜まま (Kondisi Tetap Tidak Berubah)",
        "desc":"Menyatakan melakukan suatu aksi lain dengan kondisi awal yang dibiarkan tetap tidak berubah (misalnya masuk rumah tetap memakai sepatu).",
        "points":[
          "Pola: V-ta / V-nai / N + の / Adj-i + まま / Adj-na + な + まま",
          "Contoh V-ta: Doa wo aketa MAMA nemurimashita. (Tidur dengan pintu dibiarkan terbuka).",
          "Contoh N: Kutsu NO MAMA ie ni hairimashita. (Masuk ke rumah tetap mengenakan sepatu)."
        ],
        "formula":"V-た/ない + まま / N + の + まま",
        "native_note":"Di Jepang, masuk rumah dengan 'kutsu no mama' (tetap pakai sepatu) adalah hal tabu besar. Jadi ungkapan ini sering dipakai untuk menegur anak-anak atau tamu asing."
      },
      {
        "id":"g40-2",
        "title":"2. 〜っぱなし (Kelalaian / Membiarkan Menyala/Berantakan)",
        "desc":"Pola ekspresi lisan yang cenderung bernada komplain/kekesalan, menyatakan tindakan yang dibiarkan menyala, berantakan, atau terbuka karena lalai.",
        "points":[
          "Pola: V-stem + っぱなし",
          "Contoh: Terebi wo tsuke-PPANASHI de dekakemashita. (Keluar rumah dengan TV dibiarkan tetap menyala saja — lalai).",
          "Beda dengan まま: っぱなし selalu mengandung nuansa negatif/lalai/menyesal, sedangkan まま lebih netral."
        ],
        "formula":"V-stem + っぱなし"
      }
    ],
    "patterns": [
      {"jp":"電気をつけたままで寝てしまいました。","rom":"Denki wo tsuketa mama de nete shimaimashita.","en":"Saya terlanjur tidur dengan lampu dibiarkan menyala."},
      {"jp":"水が出しっぱなしになっていますよ。","rom":"Mizu ga dashi-ppanashi ni natte imasu yo.","en":"Airnya dibiarkan mengalir terus tuh (lalai)."},
      {"jp":"日本は昔のままの建物が残っています。","rom":"Nihon wa mukashi no mama no tatemono ga nokotte imasu.","en":"Di Jepang, bangunan yang tetap seperti zaman dulu masih tersisa."},
      {"jp":"本を開きっぱなしにしないでください。","rom":"Hon wo hiraki-ppanashi ni shinaide kudasai.","en":"Tolong jangan biarkan bukunya terbuka begitu saja (lalai/kotor)."}
    ],
    "conversation": {
      "title":"Teguran Ibu kepada Anak",
      "dialogue": [
        {"speaker":"Ibu","jp":"コップが置きっぱなしになっているわよ。片付けなさい。","rom":"Koppu ga oki-ppanashi ni natte iru wa yo. Katazukenasai.","en":"Gelasnya dibiarkan tergeletak begitu saja tuh. Rapikan!"},
        {"speaker":"Anak","jp":"あ、ごめんなさい。後でやります。","rom":"A, gomen nasai. Ato de yarimasu.","en":"Ah, maaf. Nanti saya lakukan."},
        {"speaker":"Ibu","jp":"テレビもつけっぱなしよ。電気代がもったいないでしょ。","rom":"Terebi mo tsuke-ppanashi yo. Denkidai ga mottainai desho.","en":"TV-nya juga dibiarkan menyala. Kan sayang listriknya."}
      ]
    },
    "practice": [
      {"type":"mcq","question":"Pola mana yang tepat jika ingin menyampaikan komplain tentang TV menyala seharian?","options":[{"text":"つけっぱなし","correct":true},{"text":"つけたまま","correct":false},{"text":"つけおく","correct":false}]},
      {"type":"fill","question":"'Masuk rumah dengan mengenakan sepatu (kutsu)'.\nKutsu [   ] mama de hairimashita.","answer":"no"},
      {"type":"mcq","question":"Nuansa utama dari 〜っぱなし adalah:","options":[{"text":"Kelalaian yang menjengkelkan/negatif","correct":true},{"text":"Persiapan yang rapi","correct":false},{"text":"Aksi yang tidak sengaja tetapi positif","correct":false}]}
    ],
    "mini_kaiwa": [
      {"title":"AC Menyala di Kantor","situation":"Rekan menegur karena AC lupa dimatikan","dialogue":[
        {"speaker":"A","jp":"エアコンがつけっぱなしですよ。","rom":"Eakon ga tsuke-ppanashi desu yo.","en":"AC-nya dibiarkan menyala terus tuh."},
        {"speaker":"B","jp":"すみません、消し忘れてしまいました。","rom":"Sumimasen, keshi-wasurete shimaimashita.","en":"Maaf, saya terlanjur lupa mematikannya."}
      ]}
    ],
    "reibun": [
      {"id":"r40-1","jp":"メガネをかけたままお風呂に入ってしまいました。","rom":"Megane wo kaketa mama ofuro ni haitte shimaimashita.","en":"Saya terlanjur masuk bak mandi dengan kacamata tetap terpasang."},
      {"id":"r40-2","jp":"ドアを開けっぱなしにすると虫が入りますよ。","rom":"Doa wo ake-ppanashi ni suru to mushi ga hairimasu yo.","en":"Kalau pintu dibiarkan terbuka terus, serangga akan masuk."},
      {"id":"r40-3","jp":"生魚のままでは食べられません。","rom":"Nama zakana no mama de wa taberaremasen.","en":"Kalau tetap dalam keadaan ikan mentah, tidak bisa dimakan."},
      {"id":"r40-4","jp":"ハサミが出しっぱなしになっています。","rom":"Hasami ga dashi-ppanashi ni natte imasu.","en":"Guntingnya dibiarkan tergeletak di luar."},
      {"id":"r40-5","jp":"昨日は疲れて、服を着たまま寝てしまいました。","rom":"Kinou wa tsukarete, fuku wo kita mama nete shimaimashita.","en":"Kemarin saya capek sekali, sampai tertidur dengan baju tetap terpakai."}
    ],
    "workbook": [
      {"id":"wb40-1","pattern":"V-ta + まま","instruction":"Buat kalimat: 'Tidur dengan memakai kacamata'.","question":"Megane / kakeru / nete shimau","correct":"メガネをかけたままねてしまいました。","romaji":"Megane wo kaketa mama nete shimaimashita.","translation":"Tidur dengan memakai kacamata."},
      {"id":"wb40-2","pattern":"N + の + まま","instruction":"Buat kalimat: 'Masuk dengan memakai sepatu'.","question":"Kutsu / hairu","correct":"くつのままはいりました。","romaji":"Kutsu no mama hairimashita.","translation":"Masuk dengan memakai sepatu."},
      {"id":"wb40-3","pattern":"V-stem + っぱなし","instruction":"Nyatakan kelalaian: 'Air dibiarkan mengalir'.","question":"Mizu / dasu / ppanashi","correct":"みずをだしっぱなしにしました。","romaji":"Mizu wo dashi-ppanashi ni shimashita.","translation":"Membiarkan air mengalir terus."},
      {"id":"wb40-4","pattern":"Adj-i + まま","instruction":"Buat kalimat: 'Ikan dimakan mentah-mentah (raw/nama)'.","question":"Nama / taberu","correct":"なまのままたべます。","romaji":"Nama no mama tabemasu.","translation":"Dimakan mentah-mentah."},
      {"id":"wb40-5","pattern":"Perbedaan まま vs っぱなし","instruction":"Pilih yang bermakna komplain karena TV menyala.","question":"Terebi / tsukeru / [mama / ppanashi]","correct":"テレビをつけっぱなしにしています。","romaji":"Terebi wo tsuke-ppanashi ni shite imasu.","translation":"Membiarkan TV menyala terus (lalai)."}
    ],
    "exam": {
      "part1": [
        {"id":"ex40-1","sentence":"ドアを あけた [ ] ねてしまいました。","correct":"まま","translation":"Tidur dengan pintu dibiarkan terbuka."},
        {"id":"ex40-2","sentence":"みずが だし [ ] に なっています。","correct":"っぱなし","translation":"Air dibiarkan mengalir terus."},
        {"id":"ex40-3","sentence":"くつ [ ] まま いえに はいってはいけません。","correct":"の","translation":"Tidak boleh masuk rumah tetap memakai sepatu."},
        {"id":"ex40-4","sentence":"エアコンが つけ [ ] ですよ。","correct":"っぱなし","translation":"AC-nya dibiarkan menyala terus tuh."},
        {"id":"ex40-5","sentence":"めがねを [ ] まま おふろに はいりました。","correct":"かけた","translation":"Masuk bak mandi dengan kacamata terpasang."}
      ],
      "part2": [
        {"id":"ex40-6","question":"Pernyataan mana yang menunjukkan 'kelalaian menyebalkan'?","options":[{"text":"テレビをつけっぱなしにする","correct":true},{"text":"テレビをつけたまま見る","correct":false},{"text":"テレビをつけておく","correct":false}]},
        {"id":"ex40-7","question":"'Kutsu no mama' berarti:","options":[{"text":"Tetap menggunakan sepatu","correct":true},{"text":"Sepatu baru","correct":false},{"text":"Tanpa sepatu (nyeker)","correct":false}]},
        {"id":"ex40-8","question":"Contoh penggunaan adjektif dengan 'mama' yang benar:","options":[{"text":"冷たいまま飲む (minum dingin-dingin)","correct":true},{"text":"冷たいのまま飲む","correct":false},{"text":"冷たまま飲む","correct":false}]}
      ],
      "part3": {
        "text":"わたしの おとうとは いつも へやを かたづけません。ほんを ひらきっぱなしにしたり、ようふくを ぬぎっぱなしにしたりします。きょうも ドアを あけたまま でかけてしまいました。わたしは いつも おこっています。",
        "questions": [
          {"id":"ex40-9","question":"おとうとは へyaを きれいに かたづけます。","correct":"F"},
          {"id":"ex40-10","question":"おとうとは ほんを ひらきっぱなしにします。","correct":"T"},
          {"id":"ex40-11","question":"おとうとは ドアを しめて でかけました。","correct":"F"}
        ]
      }
    }
  }
];

// Write chapters
let count = 0;
for (const ch of CHAPTERS) {
  const fp = path.join(chaptersDir, `chapter_${ch.id}.json`);
  fs.writeFileSync(fp, JSON.stringify(ch, null, 2), 'utf-8');
  console.log(`  ✅ chapter_${ch.id}.json — ${ch.title}`);
  count++;
}
console.log(`\n✨ Done! Written ${count} chapters (36-40).`);
