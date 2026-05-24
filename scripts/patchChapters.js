import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the existing seedMNN.js as text
const seedPath = path.join(__dirname, 'seedMNN.js');
const content = fs.readFileSync(seedPath, 'utf-8');

// Extract the data array string between "const data = [" and the closing "];" before "const chaptersDir"
const dataStartMarker = 'const data = ';
const dataEndMarker = '\nconst chaptersDir';
const dataStart = content.indexOf(dataStartMarker) + dataStartMarker.length;
const dataEnd = content.indexOf(dataEndMarker);
const dataStr = content.substring(dataStart, dataEnd).trim();
// Remove trailing semicolon if present
const cleanDataStr = dataStr.endsWith(';') ? dataStr.slice(0, -1) : dataStr;

// Parse the data array using eval (it's valid JS)
const data = eval('(' + cleanDataStr + ')');

console.log(`Loaded ${data.length} chapters from seedMNN.js`);

// ═══════════════════════════════════════════════════
// CHAPTER 12 - Perbandingan (25→30 vocab, 4→5 practice)
// ═══════════════════════════════════════════════════
const ch12 = data.find(c => c.id === 12);
ch12.vocab.push(
  { id: "v12-26", rom: "Hayai", kana: "はやい", kanji: "早い", en: "Cepat (waktu) / Pagi-pagi", audio: "" },
  { id: "v12-27", rom: "Tsumetai", kana: "つめたい", kanji: "冷たい", en: "Dingin (benda/minuman, bukan cuaca)", audio: "" },
  { id: "v12-28", rom: "Ii / Yoi", kana: "いい / よい", kanji: "良い", en: "Bagus / Baik", audio: "" },
  { id: "v12-29", rom: "Warui", kana: "わるい", kanji: "悪い", en: "Jelek / Buruk", audio: "" },
  { id: "v12-30", rom: "Yasui", kana: "やすい", kanji: "安い", en: "Murah", audio: "" }
);
ch12.practice.push({
  type: "mcq",
  question: "[Renshuu C] 'Dari semua musim, musim apa yang paling Anda suka?' Terjemahan yang tepat adalah:",
  options: [
    { text: "Kisetsu de ichiban suki na kisetsu wa nan desu ka.", correct: false },
    { text: "Kisetsu no naka de dore ga ichiban suki desu ka.", correct: true },
    { text: "Donna kisetsu ga suki desu ka.", correct: false }
  ]
});
console.log(`Ch12: ${ch12.vocab.length} vocab, ${ch12.practice.length} practice`);

// ═══════════════════════════════════════════════════
// CHAPTER 13 - Keinginan & Tujuan (23→30 vocab)
// ═══════════════════════════════════════════════════
const ch13 = data.find(c => c.id === 13);
ch13.vocab.push(
  { id: "v13-24", rom: "Suteki (na)", kana: "すてき", kanji: "素敵", en: "Keren / Menakjubkan / Luar biasa", audio: "" },
  { id: "v13-25", rom: "Kirei (na)", kana: "きれい", kanji: "", en: "Cantik / Bersih / Indah", audio: "" },
  { id: "v13-26", rom: "Kaimono", kana: "かいもの", kanji: "買い物", en: "Belanja / Berbelanja (~shimasu)", audio: "" },
  { id: "v13-27", rom: "Eiga", kana: "えいが", kanji: "映画", en: "Film / Bioskop", audio: "" },
  { id: "v13-28", rom: "Shokuji", kana: "しょくじ", kanji: "食事", en: "Makan (formal) (~shimasu)", audio: "" },
  { id: "v13-29", rom: "Shashin", kana: "しゃしん", kanji: "写真", en: "Foto", audio: "" },
  { id: "v13-30", rom: "Ryokou", kana: "りょこう", kanji: "旅行", en: "Perjalanan / Jalan-jalan / Wisata", audio: "" }
);
console.log(`Ch13: ${ch13.vocab.length} vocab, ${ch13.practice.length} practice`);

// ═══════════════════════════════════════════════════
// CHAPTER 14 - Te-Form & Permintaan (26→30 vocab)
// ═══════════════════════════════════════════════════
const ch14 = data.find(c => c.id === 14);
ch14.vocab.push(
  { id: "v14-27", rom: "Hanashimasu", kana: "はなします", kanji: "話します", en: "Berbicara / Bercerita", audio: "" },
  { id: "v14-28", rom: "Tsukaimasu", kana: "つかいます", kanji: "使います", en: "Memakai / Menggunakan", audio: "" },
  { id: "v14-29", rom: "Mochimasu", kana: "もちます", kanji: "持ちます", en: "Memegang / Membawa (benda)", audio: "" },
  { id: "v14-30", rom: "Chotto", kana: "ちょっと", kanji: "", en: "Sebentar / Sedikit", audio: "" }
);
console.log(`Ch14: ${ch14.vocab.length} vocab, ${ch14.practice.length} practice`);

// ═══════════════════════════════════════════════════
// CHAPTER 15 - Te-Form Sambung & Izin (18→30 vocab)
// ═══════════════════════════════════════════════════
const ch15 = data.find(c => c.id === 15);
ch15.vocab.push(
  { id: "v15-19", rom: "Katarogu", kana: "カタログ", kanji: "", en: "Katalog", audio: "" },
  { id: "v15-20", rom: "Jikokuhyou", kana: "じこくひょう", kanji: "時刻表", en: "Jadwal kereta / Tabel waktu", audio: "" },
  { id: "v15-21", rom: "Fuku", kana: "ふく", kanji: "服", en: "Pakaian / Baju", audio: "" },
  { id: "v15-22", rom: "Seihin", kana: "せいひん", kanji: "製品", en: "Produk / Barang buatan", audio: "" },
  { id: "v15-23", rom: "Sofuto", kana: "ソフト", kanji: "", en: "Perangkat lunak / Software", audio: "" },
  { id: "v15-24", rom: "Senmon", kana: "せんもん", kanji: "専門", en: "Spesialisasi / Keahlian", audio: "" },
  { id: "v15-25", rom: "Haisha", kana: "はいしゃ", kanji: "歯医者", en: "Dokter gigi", audio: "" },
  { id: "v15-26", rom: "Tokoya", kana: "とこや", kanji: "床屋", en: "Tukang cukur / Barbershop", audio: "" },
  { id: "v15-27", rom: "Pureigaido", kana: "プレイガイド", kanji: "", en: "Loket tiket / Agen tiket", audio: "" },
  { id: "v15-28", rom: "Dokushin", kana: "どくしん", kanji: "独身", en: "Belum menikah / Lajang", audio: "" },
  { id: "v15-29", rom: "Tokuni", kana: "とくに", kanji: "特に", en: "Terutama / Khususnya", audio: "" },
  { id: "v15-30", rom: "Omoidashimasu", kana: "おもいだします", kanji: "思い出します", en: "Teringat kembali / Mengingat kembali", audio: "" }
);
console.log(`Ch15: ${ch15.vocab.length} vocab, ${ch15.practice.length} practice`);

// ═══════════════════════════════════════════════════
// CHAPTER 17 - Nai-Form & Kewajiban (20→30 vocab)
// ═══════════════════════════════════════════════════
const ch17 = data.find(c => c.id === 17);
ch17.vocab.push(
  { id: "v17-21", rom: "Shinpai-shimasu", kana: "しんぱいします", kanji: "心配します", en: "Khawatir / Cemas", audio: "" },
  { id: "v17-22", rom: "Shucchou-shimasu", kana: "しゅっちょうします", kanji: "出張します", en: "Dinas ke luar kota / Perjalanan bisnis", audio: "" },
  { id: "v17-23", rom: "Mondai", kana: "もんだい", kanji: "問題", en: "Soal / Masalah / Pertanyaan", audio: "" },
  { id: "v17-24", rom: "Kotae", kana: "こたえ", kanji: "答え", en: "Jawaban", audio: "" },
  { id: "v17-25", rom: "Kin'en", kana: "きんえん", kanji: "禁煙", en: "Dilarang merokok", audio: "" },
  { id: "v17-26", rom: "Hoken-shou", kana: "ほけんしょう", kanji: "保険証", en: "Kartu asuransi kesehatan", audio: "" },
  { id: "v17-27", rom: "Byouki", kana: "びょうき", kanji: "病気", en: "Sakit / Penyakit", audio: "" },
  { id: "v17-28", rom: "Uwagi", kana: "うわぎ", kanji: "上着", en: "Jaket / Pakaian luar atas", audio: "" },
  { id: "v17-29", rom: "Shitagi", kana: "したぎ", kanji: "下着", en: "Pakaian dalam", audio: "" },
  { id: "v17-30", rom: "Repooto", kana: "レポート", kanji: "", en: "Laporan / Report", audio: "" }
);
console.log(`Ch17: ${ch17.vocab.length} vocab, ${ch17.practice.length} practice`);

// ═══════════════════════════════════════════════════
// CHAPTER 18 - Dictionary-Form & Kemampuan (18→30 vocab)
// ═══════════════════════════════════════════════════
const ch18 = data.find(c => c.id === 18);
ch18.vocab.push(
  { id: "v18-19", rom: "~Meetoru", kana: "〜メートル", kanji: "", en: "~meter (satuan panjang)", audio: "" },
  { id: "v18-20", rom: "Kokusai~", kana: "こくさい〜", kanji: "国際〜", en: "Internasional~ (awalan)", audio: "" },
  { id: "v18-21", rom: "Oinori", kana: "おいのり", kanji: "お祈り", en: "Doa / Berdoa (~shimasu)", audio: "" },
  { id: "v18-22", rom: "Kachou", kana: "かちょう", kanji: "課長", en: "Kepala seksi / Manajer bagian", audio: "" },
  { id: "v18-23", rom: "Buchou", kana: "ぶちょう", kanji: "部長", en: "Kepala departemen", audio: "" },
  { id: "v18-24", rom: "Shachou", kana: "しゃちょう", kanji: "社長", en: "Direktur / Presiden perusahaan", audio: "" },
  { id: "v18-25", rom: "Hee", kana: "へえ", kanji: "", en: "Wah / Oh ya? (ekspresi terkejut)", audio: "" },
  { id: "v18-26", rom: "Nakanaka", kana: "なかなか", kanji: "", en: "Tidak mudah / Sulit (diikuti bentuk negatif)", audio: "" },
  { id: "v18-27", rom: "Bokujou", kana: "ぼくじょう", kanji: "牧場", en: "Peternakan / Ranch", audio: "" },
  { id: "v18-28", rom: "Zehi", kana: "ぜひ", kanji: "", en: "Tentu saja / Silakan (ajakan kuat)", audio: "" },
  { id: "v18-29", rom: "Bunka", kana: "ぶんか", kanji: "文化", en: "Budaya / Kebudayaan", audio: "" },
  { id: "v18-30", rom: "Matsuri", kana: "まつり", kanji: "祭り", en: "Festival / Perayaan tradisional", audio: "" }
);
console.log(`Ch18: ${ch18.vocab.length} vocab, ${ch18.practice.length} practice`);

// ═══════════════════════════════════════════════════
// CHAPTER 19 - Ta-Form & Pengalaman (18→30 vocab)
// ═══════════════════════════════════════════════════
const ch19 = data.find(c => c.id === 19);
ch19.vocab.push(
  { id: "v19-19", rom: "Pachinko", kana: "パチンコ", kanji: "", en: "Pachinko (permainan mesin bola Jepang)", audio: "" },
  { id: "v19-20", rom: "Hi", kana: "ひ", kanji: "日", en: "Hari / Tanggal", audio: "" },
  { id: "v19-21", rom: "Mousugu", kana: "もうすぐ", kanji: "", en: "Sebentar lagi / Hampir", audio: "" },
  { id: "v19-22", rom: "Okagesama de", kana: "おかげさまで", kanji: "", en: "Alhamdulillah / Berkat doa Anda (ungkapan syukur)", audio: "" },
  { id: "v19-23", rom: "Kanpai", kana: "かんぱい", kanji: "乾杯", en: "Bersulang! / Cheers!", audio: "" },
  { id: "v19-24", rom: "Jitsu wa", kana: "じつは", kanji: "実は", en: "Sebenarnya / Sejujurnya", audio: "" },
  { id: "v19-25", rom: "Nankai mo", kana: "なんかいも", kanji: "何回も", en: "Berkali-kali / Berulang kali", audio: "" },
  { id: "v19-26", rom: "Shikashi", kana: "しかし", kanji: "", en: "Namun / Akan tetapi (formal)", audio: "" },
  { id: "v19-27", rom: "Muri (na)", kana: "むり", kanji: "無理", en: "Mustahil / Tidak masuk akal / Memaksakan diri", audio: "" },
  { id: "v19-28", rom: "Karada ni ii", kana: "からだにいい", kanji: "体にいい", en: "Baik untuk kesehatan / Menyehatkan", audio: "" },
  { id: "v19-29", rom: "Keeki", kana: "ケーキ", kanji: "", en: "Kue tart / Cake", audio: "" },
  { id: "v19-30", rom: "Choushi", kana: "ちょうし", kanji: "調子", en: "Kondisi / Keadaan (mesin/badan)", audio: "" }
);
console.log(`Ch19: ${ch19.vocab.length} vocab, ${ch19.practice.length} practice`);

// ═══════════════════════════════════════════════════
// CHAPTER 20 - Plain Form (15→30 vocab)
// ═══════════════════════════════════════════════════
const ch20 = data.find(c => c.id === 20);
ch20.vocab.push(
  { id: "v20-16", rom: "Denwa-shimasu", kana: "でんわします", kanji: "電話します", en: "Menelepon", audio: "" },
  { id: "v20-17", rom: "Sarariiman", kana: "サラリーマン", kanji: "", en: "Pekerja kantoran / Karyawan gajian", audio: "" },
  { id: "v20-18", rom: "Hajime", kana: "はじめ", kanji: "初め", en: "Awal / Permulaan", audio: "" },
  { id: "v20-19", rom: "Owari", kana: "おわり", kanji: "終わり", en: "Akhir / Selesai", audio: "" },
  { id: "v20-20", rom: "Kocchi", kana: "こっち", kanji: "", en: "Sebelah sini (kasual dari Kochira)", audio: "" },
  { id: "v20-21", rom: "Socchi", kana: "そっち", kanji: "", en: "Sebelah situ (kasual dari Sochira)", audio: "" },
  { id: "v20-22", rom: "Acchi", kana: "あっち", kanji: "", en: "Sebelah sana (kasual dari Achira)", audio: "" },
  { id: "v20-23", rom: "Docchi", kana: "どっち", kanji: "", en: "Sebelah mana? (kasual dari Dochira)", audio: "" },
  { id: "v20-24", rom: "Kono aida", kana: "このあいだ", kanji: "この間", en: "Tempo hari / Beberapa waktu lalu", audio: "" },
  { id: "v20-25", rom: "Minna de", kana: "みんなで", kanji: "", en: "Bersama-sama (semua orang)", audio: "" },
  { id: "v20-26", rom: "~kedo", kana: "〜けど", kanji: "", en: "Tapi / Namun (kasual, penghubung kalimat)", audio: "" },
  { id: "v20-27", rom: "Yokattara", kana: "よかったら", kanji: "", en: "Kalau berkenan / Kalau tidak keberatan", audio: "" },
  { id: "v20-28", rom: "Iroiro", kana: "いろいろ", kanji: "色々", en: "Bermacam-macam / Berbagai hal", audio: "" },
  { id: "v20-29", rom: "Byouki", kana: "びょうき", kanji: "病気", en: "Sakit / Penyakit", audio: "" },
  { id: "v20-30", rom: "Nichiyoubi", kana: "にちようび", kanji: "日曜日", en: "Hari Minggu", audio: "" }
);
console.log(`Ch20: ${ch20.vocab.length} vocab, ${ch20.practice.length} practice`);

// ═══════════════════════════════════════════════════
// CHAPTER 21 - Opini & Kutipan (15→30 vocab)
// ═══════════════════════════════════════════════════
const ch21 = data.find(c => c.id === 21);
ch21.vocab.push(
  { id: "v21-16", rom: "Tsutaemasu", kana: "つたえます", kanji: "伝えます", en: "Menyampaikan / Mengabarkan", audio: "" },
  { id: "v21-17", rom: "Shinjimasu", kana: "しんじます", kanji: "信じます", en: "Mempercayai / Yakin", audio: "" },
  { id: "v21-18", rom: "Hantai-shimasu", kana: "はんたいします", kanji: "反対します", en: "Menentang / Menolak", audio: "" },
  { id: "v21-19", rom: "Sansei-shimasu", kana: "さんせいします", kanji: "賛成します", en: "Menyetujui / Mendukung", audio: "" },
  { id: "v21-20", rom: "Sensou", kana: "せんそう", kanji: "戦争", en: "Perang", audio: "" },
  { id: "v21-21", rom: "Heiwa", kana: "へいわ", kanji: "平和", en: "Perdamaian / Damai", audio: "" },
  { id: "v21-22", rom: "Jiyuu", kana: "じゆう", kanji: "自由", en: "Kebebasan / Bebas", audio: "" },
  { id: "v21-23", rom: "Mondai", kana: "もんだい", kanji: "問題", en: "Masalah / Persoalan", audio: "" },
  { id: "v21-24", rom: "Keizai", kana: "けいざい", kanji: "経済", en: "Ekonomi", audio: "" },
  { id: "v21-25", rom: "Shakai", kana: "しゃかい", kanji: "社会", en: "Masyarakat / Sosial", audio: "" },
  { id: "v21-26", rom: "Hontou", kana: "ほんとう", kanji: "本当", en: "Benar / Sungguhan", audio: "" },
  { id: "v21-27", rom: "Tashika", kana: "たしか", kanji: "確か", en: "Pasti / Kalau tidak salah", audio: "" },
  { id: "v21-28", rom: "Tabun", kana: "たぶん", kanji: "", en: "Mungkin / Barangkali", audio: "" },
  { id: "v21-29", rom: "Kitto", kana: "きっと", kanji: "", en: "Pasti (keyakinan kuat)", audio: "" },
  { id: "v21-30", rom: "Deshou", kana: "でしょう", kanji: "", en: "Mungkin / ~kan? (meminta persetujuan)", audio: "" }
);
console.log(`Ch21: ${ch21.vocab.length} vocab, ${ch21.practice.length} practice`);

// ═══════════════════════════════════════════════════
// CHAPTER 22 - Klausa Modifikasi (12→30 vocab, 2→5 practice, +patterns, +dialogue)
// ═══════════════════════════════════════════════════
const ch22 = data.find(c => c.id === 22);
ch22.vocab.push(
  { id: "v22-13", rom: "Tsukurimasu", kana: "つくります", kanji: "作ります", en: "Membuat", audio: "" },
  { id: "v22-14", rom: "Sutemasu", kana: "すてます", kanji: "捨てます", en: "Membuang", audio: "" },
  { id: "v22-15", rom: "Nuremasu", kana: "ぬれます", kanji: "濡れます", en: "Basah / Menjadi basah", audio: "" },
  { id: "v22-16", rom: "Kawakimasu", kana: "かわきます", kanji: "乾きます", en: "Kering / Mengering", audio: "" },
  { id: "v22-17", rom: "Shimemasu", kana: "しめます", kanji: "締めます", en: "Memakai (dasi) / Mengencangkan", audio: "" },
  { id: "v22-18", rom: "Kutsushita", kana: "くつした", kanji: "靴下", en: "Kaus kaki", audio: "" },
  { id: "v22-19", rom: "Kutsu", kana: "くつ", kanji: "靴", en: "Sepatu", audio: "" },
  { id: "v22-20", rom: "Zubon", kana: "ズボン", kanji: "", en: "Celana panjang", audio: "" },
  { id: "v22-21", rom: "Sukaato", kana: "スカート", kanji: "", en: "Rok", audio: "" },
  { id: "v22-22", rom: "Waishatsu", kana: "ワイシャツ", kanji: "", en: "Kemeja putih / Dress shirt", audio: "" },
  { id: "v22-23", rom: "Nekutai", kana: "ネクタイ", kanji: "", en: "Dasi", audio: "" },
  { id: "v22-24", rom: "Tokei", kana: "とけい", kanji: "時計", en: "Jam tangan / Jam dinding", audio: "" },
  { id: "v22-25", rom: "Kasa", kana: "かさ", kanji: "傘", en: "Payung", audio: "" },
  { id: "v22-26", rom: "Saifu", kana: "さいふ", kanji: "財布", en: "Dompet", audio: "" },
  { id: "v22-27", rom: "Kagi", kana: "かぎ", kanji: "鍵", en: "Kunci", audio: "" },
  { id: "v22-28", rom: "Kami", kana: "かみ", kanji: "髪", en: "Rambut", audio: "" },
  { id: "v22-29", rom: "Nagai", kana: "ながい", kanji: "長い", en: "Panjang", audio: "" },
  { id: "v22-30", rom: "Mijikai", kana: "みじかい", kanji: "短い", en: "Pendek (ukuran, bukan tinggi badan)", audio: "" }
);
// Add patterns
ch22.patterns.push(
  { jp: "わたしが よく 行く 店は あの 店です。", rom: "Watashi ga yoku iku mise wa ano mise desu.", en: "Toko yang sering saya kunjungi adalah toko itu." },
  { jp: "髪が 長い 人は カリナさんです。", rom: "Kami ga nagai hito wa Karina-san desu.", en: "Orang yang rambutnya panjang itu Bu Karina." }
);
// Add dialogue lines
ch22.conversation.dialogue.push(
  { speaker: "Sato", jp: "あの 眼鏡を かけて いる 人は 誰ですか。", rom: "Ano megane o kakete iru hito wa dare desu ka.", en: "Orang yang memakai kacamata itu siapa?" },
  { speaker: "Miller", jp: "ああ、きのう 日本に 来た 新しい 研究者ですよ。", rom: "Aa, kinou Nihon ni kita atarashii kenkyuusha desu yo.", en: "Ah, itu peneliti baru yang datang ke Jepang kemarin lho." }
);
// Add 3 more practice items (currently 2 → target 5)
ch22.practice.push(
  {
    type: "mcq",
    question: "[Renshuu A] 'Orang yang sedang memakai topi' dalam bahasa Jepang, urutan yang benar adalah:",
    options: [
      { text: "Boushi o kabutte iru hito", correct: true },
      { text: "Hito ga boushi o kabutte iru", correct: false },
      { text: "Kabutte iru boushi no hito", correct: false }
    ]
  },
  {
    type: "fill",
    question: "[Mondai] 'Buku yang dipinjam dari perpustakaan'.\nToshokan de [         ] hon.",
    answer: "karita"
  },
  {
    type: "mcq",
    question: "[Renshuu B] Dalam anak kalimat (klausa relatif), subjek menggunakan partikel apa?",
    options: [
      { text: "が (Ga)", correct: true },
      { text: "は (Wa)", correct: false },
      { text: "を (O)", correct: false }
    ]
  }
);
console.log(`Ch22: ${ch22.vocab.length} vocab, ${ch22.practice.length} practice, ${ch22.patterns.length} patterns, ${ch22.conversation.dialogue.length} dialogue`);

// ═══════════════════════════════════════════════════
// CHAPTER 23 - Toki & Kondisional To (18→30 vocab)
// ═══════════════════════════════════════════════════
const ch23 = data.find(c => c.id === 23);
ch23.vocab.push(
  { id: "v23-19", rom: "Tomemasu", kana: "とめます", kanji: "止めます", en: "Menghentikan / Mematikan (mesin)", audio: "" },
  { id: "v23-20", rom: "Ochimasu", kana: "おちます", kanji: "落ちます", en: "Jatuh / Terjatuh", audio: "" },
  { id: "v23-21", rom: "Torimasu", kana: "とります", kanji: "取ります", en: "Mengambil", audio: "" },
  { id: "v23-22", rom: "Tsukemasu", kana: "つけます", kanji: "", en: "Menyalakan (lampu/AC)", audio: "" },
  { id: "v23-23", rom: "Keshimasu", kana: "けします", kanji: "消します", en: "Mematikan (lampu) / Menghapus", audio: "" },
  { id: "v23-24", rom: "Iremasu", kana: "いれます", kanji: "入れます", en: "Memasukkan", audio: "" },
  { id: "v23-25", rom: "Massugu", kana: "まっすぐ", kanji: "", en: "Lurus (arah)", audio: "" },
  { id: "v23-26", rom: "Migi", kana: "みぎ", kanji: "右", en: "Kanan", audio: "" },
  { id: "v23-27", rom: "Hidari", kana: "ひだり", kanji: "左", en: "Kiri", audio: "" },
  { id: "v23-28", rom: "Eki", kana: "えき", kanji: "駅", en: "Stasiun (kereta)", audio: "" },
  { id: "v23-29", rom: "Kippu", kana: "きっぷ", kanji: "切符", en: "Tiket / Karcis", audio: "" },
  { id: "v23-30", rom: "Densha", kana: "でんしゃ", kanji: "電車", en: "Kereta api listrik", audio: "" }
);
console.log(`Ch23: ${ch23.vocab.length} vocab, ${ch23.practice.length} practice`);

// ═══════════════════════════════════════════════════
// CHAPTER 24 - Memberi & Menerima (16→30 vocab, 4→6 dialogue)
// ═══════════════════════════════════════════════════
const ch24 = data.find(c => c.id === 24);
ch24.vocab.push(
  { id: "v24-17", rom: "Agemasu", kana: "あげます", kanji: "", en: "Memberi (kepada orang lain)", audio: "" },
  { id: "v24-18", rom: "Moraimasu", kana: "もらいます", kanji: "", en: "Menerima / Dapat (dari seseorang)", audio: "" },
  { id: "v24-19", rom: "Kashimasu", kana: "かします", kanji: "貸します", en: "Meminjamkan", audio: "" },
  { id: "v24-20", rom: "Karimasu", kana: "かります", kanji: "借ります", en: "Meminjam", audio: "" },
  { id: "v24-21", rom: "Tetsudaimasu", kana: "てつだいます", kanji: "手伝います", en: "Membantu", audio: "" },
  { id: "v24-22", rom: "Todokemasu", kana: "とどけます", kanji: "届けます", en: "Mengantarkan / Menyerahkan", audio: "" },
  { id: "v24-23", rom: "Purezento", kana: "プレゼント", kanji: "", en: "Hadiah / Kado", audio: "" },
  { id: "v24-24", rom: "Kurisumasu", kana: "クリスマス", kanji: "", en: "Natal / Hari Natal", audio: "" },
  { id: "v24-25", rom: "Tanjoubi", kana: "たんじょうび", kanji: "誕生日", en: "Hari ulang tahun", audio: "" },
  { id: "v24-26", rom: "Orei", kana: "おれい", kanji: "お礼", en: "Ucapan terima kasih / Balasan budi", audio: "" },
  { id: "v24-27", rom: "Okaasan", kana: "おかあさん", kanji: "お母さん", en: "Ibu (orang lain) / Mama", audio: "" },
  { id: "v24-28", rom: "Otousan", kana: "おとうさん", kanji: "お父さん", en: "Ayah (orang lain) / Papa", audio: "" },
  { id: "v24-29", rom: "Musume", kana: "むすめ", kanji: "娘", en: "Anak perempuan (sendiri)", audio: "" },
  { id: "v24-30", rom: "Musuko", kana: "むすこ", kanji: "息子", en: "Anak laki-laki (sendiri)", audio: "" }
);
// Add 2 more dialogue lines (currently 4 → target 6)
ch24.conversation.dialogue.push(
  { speaker: "Miller", jp: "そうですか。お父さんは やさしいですね。", rom: "Sou desu ka. Otousan wa yasashii desu ne.", en: "Oh begitu. Ayahnya baik ya." },
  { speaker: "Taro", jp: "ええ。母も よく お弁当を 作って くれます。", rom: "Ee. Haha mo yoku obentou o tsukutte kuremasu.", en: "Iya. Ibu juga sering buatkan bekal untuk saya." }
);
console.log(`Ch24: ${ch24.vocab.length} vocab, ${ch24.practice.length} practice, ${ch24.conversation.dialogue.length} dialogue`);

// ═══════════════════════════════════════════════════
// CHAPTER 25 - Tara & Temo (15→30 vocab)
// ═══════════════════════════════════════════════════
const ch25 = data.find(c => c.id === 25);
ch25.vocab.push(
  { id: "v25-16", rom: "Tsukaremasu", kana: "つかれます", kanji: "疲れます", en: "Lelah / Capek", audio: "" },
  { id: "v25-17", rom: "Yamemasu", kana: "やめます", kanji: "辞めます", en: "Berhenti (kerja/aktivitas) / Mengundurkan diri", audio: "" },
  { id: "v25-18", rom: "Todokimasu", kana: "とどきます", kanji: "届きます", en: "Sampai / Tiba (surat/paket)", audio: "" },
  { id: "v25-19", rom: "Sugimasu", kana: "すぎます", kanji: "過ぎます", en: "Lewat / Berlalu (waktu)", audio: "" },
  { id: "v25-20", rom: "Okane", kana: "おかね", kanji: "お金", en: "Uang", audio: "" },
  { id: "v25-21", rom: "Jikan", kana: "じかん", kanji: "時間", en: "Waktu / Jam (durasi)", audio: "" },
  { id: "v25-22", rom: "Shigoto", kana: "しごと", kanji: "仕事", en: "Pekerjaan / Kerja", audio: "" },
  { id: "v25-23", rom: "Ryokou", kana: "りょこう", kanji: "旅行", en: "Perjalanan / Wisata / Jalan-jalan", audio: "" },
  { id: "v25-24", rom: "Byouki", kana: "びょうき", kanji: "病気", en: "Sakit / Penyakit", audio: "" },
  { id: "v25-25", rom: "Toshi", kana: "とし", kanji: "年", en: "Umur / Usia / Tahun", audio: "" },
  { id: "v25-26", rom: "Kaisha", kana: "かいしゃ", kanji: "会社", en: "Perusahaan / Kantor", audio: "" },
  { id: "v25-27", rom: "Natsuyasumi", kana: "なつやすみ", kanji: "夏休み", en: "Liburan musim panas", audio: "" },
  { id: "v25-28", rom: "Takusan", kana: "たくさん", kanji: "", en: "Banyak / Berlimpah", audio: "" },
  { id: "v25-29", rom: "Hima (na)", kana: "ひま", kanji: "暇", en: "Senggang / Kosong (waktu luang)", audio: "" },
  { id: "v25-30", rom: "Isogashii", kana: "いそがしい", kanji: "忙しい", en: "Sibuk", audio: "" }
);
console.log(`Ch25: ${ch25.vocab.length} vocab, ${ch25.practice.length} practice`);

// ═══════════════════════════════════════════════════
// WRITE BACK
// ═══════════════════════════════════════════════════

// Reconstruct the file header (imports)
const header = content.substring(0, content.indexOf(dataStartMarker));
// Reconstruct the file footer (chaptersDir and write logic)
const footer = content.substring(content.indexOf(dataEndMarker));

// Build the new content
const newDataStr = JSON.stringify(data, null, 2)
  // Convert JSON to JS object literal style (unquote keys)
  // Actually, JSON.stringify with indent works fine for eval, and seedMNN.js
  // uses a different style. Let's keep JSON style since the seeder just
  // writes JSON anyway.
  ;

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

// Print summary table
console.log('\n=== FINAL SUMMARY ===');
console.log('| Chapter | Vocab | Grammar | Patterns | Dialogue | Practice |');
console.log('|---------|-------|---------|----------|----------|----------|');
for (const ch of data) {
  const v = ch.vocab ? ch.vocab.length : 0;
  const g = ch.grammar ? ch.grammar.length : 0;
  const p = ch.patterns ? ch.patterns.length : 0;
  const d = (ch.conversation && ch.conversation.dialogue) ? ch.conversation.dialogue.length : 0;
  const pr = ch.practice ? ch.practice.length : 0;
  console.log(`| ${ch.id} | ${v} | ${g} | ${p} | ${d} | ${pr} |`);
}
