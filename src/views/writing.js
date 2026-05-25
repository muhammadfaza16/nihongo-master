import { renderTopbar, showToast } from '../components/layout.js';

// Setup window.playAudio for standalone loading fallback
if (!window.playAudio) {
  window.playAudio = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };
}

// ── CHARACTER DATABASES ──────────────────────────────────────────────────────
const HIRAGANA_DATABASE = {
  vowels: [
    { jp: 'あ', rom: 'a', en: 'Vokal a' },
    { jp: 'い', rom: 'i', en: 'Vokal i' },
    { jp: 'う', rom: 'u', en: 'Vokal u' },
    { jp: 'え', rom: 'e', en: 'Vokal e' },
    { jp: 'お', rom: 'o', en: 'Vokal o' }
  ],
  k_row: [
    { jp: 'か', rom: 'ka', en: 'Baris ka' },
    { jp: 'き', rom: 'ki', en: 'Baris ki' },
    { jp: 'く', rom: 'ku', en: 'Baris ku' },
    { jp: 'け', rom: 'ke', en: 'Baris ke' },
    { jp: 'こ', rom: 'ko', en: 'Baris ko' }
  ],
  s_row: [
    { jp: 'さ', rom: 'sa', en: 'Baris sa' },
    { jp: 'し', rom: 'shi', en: 'Baris shi' },
    { jp: 'す', rom: 'su', en: 'Baris su' },
    { jp: 'せ', rom: 'se', en: 'Baris se' },
    { jp: 'そ', rom: 'so', en: 'Baris so' }
  ],
  t_row: [
    { jp: 'た', rom: 'ta', en: 'Baris ta' },
    { jp: 'ち', rom: 'chi', en: 'Baris chi' },
    { jp: 'つ', rom: 'tsu', en: 'Baris tsu' },
    { jp: 'て', rom: 'te', en: 'Baris te' },
    { jp: 'と', rom: 'to', en: 'Baris to' }
  ],
  n_row: [
    { jp: 'な', rom: 'na', en: 'Baris na' },
    { jp: 'に', rom: 'ni', en: 'Baris ni' },
    { jp: 'ぬ', rom: 'nu', en: 'Baris nu' },
    { jp: 'ね', rom: 'ne', en: 'Baris ne' },
    { jp: 'の', rom: 'no', en: 'Baris no' }
  ],
  h_row: [
    { jp: 'は', rom: 'ha', en: 'Baris ha' },
    { jp: 'ひ', rom: 'hi', en: 'Baris hi' },
    { jp: 'ふ', rom: 'fu', en: 'Baris fu' },
    { jp: 'へ', rom: 'he', en: 'Baris he' },
    { jp: 'ほ', rom: 'ho', en: 'Baris ho' }
  ],
  m_row: [
    { jp: 'ま', rom: 'ma', en: 'Baris ma' },
    { jp: 'み', rom: 'mi', en: 'Baris mi' },
    { jp: 'む', rom: 'mu', en: 'Baris mu' },
    { jp: 'め', rom: 'me', en: 'Baris me' },
    { jp: 'も', rom: 'mo', en: 'Baris mo' }
  ],
  y_row: [
    { jp: 'や', rom: 'ya', en: 'Baris ya' },
    { jp: 'ゆ', rom: 'yu', en: 'Baris yu' },
    { jp: 'よ', rom: 'yo', en: 'Baris yo' }
  ],
  r_row: [
    { jp: 'ら', rom: 'ra', en: 'Baris ra' },
    { jp: 'り', rom: 'ri', en: 'Baris ri' },
    { jp: 'る', rom: 'ru', en: 'Baris ru' },
    { jp: 'れ', rom: 're', en: 'Baris re' },
    { jp: 'ろ', rom: 'ro', en: 'Baris ro' }
  ],
  w_row: [
    { jp: 'わ', rom: 'wa', en: 'Baris wa' },
    { jp: 'を', rom: 'wo', en: 'Baris wo' },
    { jp: 'ん', rom: 'n', en: 'Sengau n' }
  ]
};

const KATAKANA_DATABASE = {
  vowels: [
    { jp: 'ア', rom: 'a', en: 'Vokal a' },
    { jp: 'イ', rom: 'i', en: 'Vokal i' },
    { jp: 'ウ', rom: 'u', en: 'Vokal u' },
    { jp: 'エ', rom: 'e', en: 'Vokal e' },
    { jp: 'オ', rom: 'o', en: 'Vokal o' }
  ],
  k_row: [
    { jp: 'カ', rom: 'ka', en: 'Baris ka' },
    { jp: 'キ', rom: 'ki', en: 'Baris ki' },
    { jp: 'ク', rom: 'ku', en: 'Baris ku' },
    { jp: 'ケ', rom: 'ke', en: 'Baris ke' },
    { jp: 'コ', rom: 'ko', en: 'Baris ko' }
  ],
  s_row: [
    { jp: 'サ', rom: 'sa', en: 'Baris sa' },
    { jp: 'シ', rom: 'shi', en: 'Baris shi' },
    { jp: 'ス', rom: 'su', en: 'Baris su' },
    { jp: 'セ', rom: 'se', en: 'Baris se' },
    { jp: 'ソ', rom: 'so', en: 'Baris so' }
  ],
  t_row: [
    { jp: 'タ', rom: 'ta', en: 'Baris ta' },
    { jp: 'チ', rom: 'chi', en: 'Baris chi' },
    { jp: 'ツ', rom: 'tsu', en: 'Baris tsu' },
    { jp: 'テ', rom: 'te', en: 'Baris te' },
    { jp: 'ト', rom: 'to', en: 'Baris to' }
  ],
  n_row: [
    { jp: 'ナ', rom: 'na', en: 'Baris na' },
    { jp: 'ニ', rom: 'ni', en: 'Baris ni' },
    { jp: 'ヌ', rom: 'nu', en: 'Baris nu' },
    { jp: 'ネ', rom: 'ne', en: 'Baris ne' },
    { jp: 'ノ', rom: 'no', en: 'Baris no' }
  ],
  h_row: [
    { jp: 'ハ', rom: 'ha', en: 'Baris ha' },
    { jp: 'ヒ', rom: 'hi', en: 'Baris hi' },
    { jp: 'フ', rom: 'fu', en: 'Baris fu' },
    { jp: 'ヘ', rom: 'he', en: 'Baris he' },
    { jp: 'ホ', rom: 'ho', en: 'Baris ho' }
  ],
  m_row: [
    { jp: 'マ', rom: 'ma', en: 'Baris ma' },
    { jp: 'ミ', rom: 'mi', en: 'Baris mi' },
    { jp: 'ム', rom: 'mu', en: 'Baris mu' },
    { jp: 'メ', rom: 'me', en: 'Baris me' },
    { jp: 'モ', rom: 'mo', en: 'Baris mo' }
  ],
  y_row: [
    { jp: 'ヤ', rom: 'ya', en: 'Baris ya' },
    { jp: 'ユ', rom: 'yu', en: 'Baris yu' },
    { jp: 'ヨ', rom: 'yo', en: 'Baris yo' }
  ],
  r_row: [
    { jp: 'ラ', rom: 'ra', en: 'Baris ra' },
    { jp: 'リ', rom: 'ri', en: 'Baris ri' },
    { jp: 'ル', rom: 'ru', en: 'Baris ru' },
    { jp: 'レ', rom: 're', en: 'Baris re' },
    { jp: 'ロ', rom: 'ro', en: 'Baris ro' }
  ],
  w_row: [
    { jp: 'ワ', rom: 'wa', en: 'Baris wa' },
    { jp: 'ヲ', rom: 'wo', en: 'Baris wo' },
    { jp: 'ン', rom: 'n', en: 'Sengau n' }
  ]
};

const KANJI_DATABASE = {
  "numbers_time": [
    {
      "jp": "一",
      "rom": "ひと",
      "en": "Satu"
    },
    {
      "jp": "二",
      "rom": "ふta",
      "en": "Dua"
    },
    {
      "jp": "三",
      "rom": "みt",
      "en": "Tiga"
    },
    {
      "jp": "四",
      "rom": "よt / よ",
      "en": "Empat"
    },
    {
      "jp": "五",
      "rom": "いつ",
      "en": "Lima"
    },
    {
      "jp": "六",
      "rom": "むt",
      "en": "Enam"
    },
    {
      "jp": "七",
      "rom": "なな",
      "en": "Tujuh"
    },
    {
      "jp": "八",
      "rom": "やt",
      "en": "Delapan"
    },
    {
      "jp": "九",
      "rom": "ここの",
      "en": "Sembilan"
    },
    {
      "jp": "十",
      "rom": "とお",
      "en": "Sepuluh"
    },
    {
      "jp": "百",
      "rom": "ヒャク",
      "en": "Seratus"
    },
    {
      "jp": "千",
      "rom": "ち",
      "en": "Seribu"
    },
    {
      "jp": "万",
      "rom": "マン / バン",
      "en": "Sepuluh Ribu"
    },
    {
      "jp": "円",
      "rom": "maru",
      "en": "Yen / Lingkaran"
    },
    {
      "jp": "年",
      "rom": "とし",
      "en": "Tahun"
    },
    {
      "jp": "月",
      "rom": "tsuki",
      "en": "Bulan / Rembulan"
    },
    {
      "jp": "日",
      "rom": "hi / ka",
      "en": "Hari / Matahari"
    },
    {
      "jp": "時",
      "rom": "とき",
      "en": "Waktu / Jam"
    },
    {
      "jp": "分",
      "rom": "wa",
      "en": "Menit / Bagian"
    },
    {
      "jp": "半",
      "rom": "naka",
      "en": "Setengah"
    }
  ],
  "nature_places": [
    {
      "jp": "山",
      "rom": "yama",
      "en": "Gunung"
    },
    {
      "jp": "川",
      "rom": "kawa",
      "en": "Sungai"
    },
    {
      "jp": "海",
      "rom": "umi",
      "en": "Laut"
    },
    {
      "jp": "空",
      "rom": "sora / a",
      "en": "Langit / Kosong"
    },
    {
      "jp": "木",
      "rom": "ki",
      "en": "Pohon / Kayu"
    },
    {
      "jp": "花",
      "rom": "hana",
      "en": "Bunga"
    },
    {
      "jp": "雨",
      "rom": "ame",
      "en": "Hujan"
    },
    {
      "jp": "火",
      "rom": "hi",
      "en": "Api"
    },
    {
      "jp": "水",
      "rom": "mizu",
      "en": "Air"
    },
    {
      "jp": "土",
      "rom": "tsuchi",
      "en": "Tanah"
    },
    {
      "jp": "金",
      "rom": "kane / kana",
      "en": "Emas / Uang"
    },
    {
      "jp": "上",
      "rom": "ue / a",
      "en": "Atas"
    },
    {
      "jp": "下",
      "rom": "shita / sa",
      "en": "Bawah"
    },
    {
      "jp": "中",
      "rom": "naka",
      "en": "Tengah / Dalam"
    },
    {
      "jp": "外",
      "rom": "soto",
      "en": "Luar"
    },
    {
      "jp": "右",
      "rom": "migi",
      "en": "Kanan"
    },
    {
      "jp": "左",
      "rom": "hidari",
      "en": "Kiri"
    },
    {
      "jp": "前",
      "rom": "mae",
      "en": "Depan / Sebelum"
    },
    {
      "jp": "後",
      "rom": "ato / ushi",
      "en": "Belakang / Sesudah"
    },
    {
      "jp": "東",
      "rom": "higashi",
      "en": "Timur"
    }
  ],
  "people_family": [
    {
      "jp": "人",
      "rom": "hito",
      "en": "Orang"
    },
    {
      "jp": "父",
      "rom": "chichi / tou",
      "en": "Ayah"
    },
    {
      "jp": "母",
      "rom": "haha / kaa",
      "en": "Ibu"
    },
    {
      "jp": "子",
      "rom": "ko",
      "en": "Anak"
    },
    {
      "jp": "男",
      "rom": "otoko",
      "en": "Laki-laki"
    },
    {
      "jp": "女",
      "rom": "onna",
      "en": "Perempuan"
    },
    {
      "jp": "友",
      "rom": "tomo",
      "en": "Teman"
    },
    {
      "jp": "先",
      "rom": "saki",
      "en": "Dahulu / Depan"
    },
    {
      "jp": "生",
      "rom": "i / u",
      "en": "Lahir / Hidup"
    },
    {
      "jp": "名",
      "rom": "na",
      "en": "Nama"
    },
    {
      "jp": "気",
      "rom": "キ / ケ",
      "en": "Energi / Jiwa"
    },
    {
      "jp": "元",
      "rom": "moto",
      "en": "Asal / Sehat"
    },
    {
      "jp": "西",
      "rom": "nishi",
      "en": "Barat"
    },
    {
      "jp": "南",
      "rom": "minami",
      "en": "Selatan"
    },
    {
      "jp": "北",
      "rom": "kita",
      "en": "Utara"
    },
    {
      "jp": "本",
      "rom": "moto",
      "en": "Buku / Asal"
    },
    {
      "jp": "天",
      "rom": "ama",
      "en": "Langit / Surga"
    },
    {
      "jp": "口",
      "rom": "kuchi / guchi",
      "en": "Mulut"
    },
    {
      "jp": "目",
      "rom": "me",
      "en": "Mata"
    },
    {
      "jp": "耳",
      "rom": "mimi",
      "en": "Telinga"
    }
  ],
  "places_buildings": [
    {
      "jp": "国",
      "rom": "kuni",
      "en": "Negara"
    },
    {
      "jp": "店",
      "rom": "mise",
      "en": "Toko"
    },
    {
      "jp": "駅",
      "rom": "エキ",
      "en": "Stasiun"
    },
    {
      "jp": "電",
      "rom": "デン",
      "en": "Listrik"
    },
    {
      "jp": "車",
      "rom": "kuruma",
      "en": "Kendaraan / Roda"
    },
    {
      "jp": "道",
      "rom": "michi",
      "en": "Jalan"
    },
    {
      "jp": "学",
      "rom": "mana",
      "en": "Belajar"
    },
    {
      "jp": "校",
      "rom": "コウ",
      "en": "Sekolah"
    },
    {
      "jp": "会",
      "rom": "a",
      "en": "Pertemuan / Bertemu"
    },
    {
      "jp": "社",
      "rom": "yashiro",
      "en": "Perusahaan / Kuil"
    },
    {
      "jp": "入",
      "rom": "hai / i",
      "en": "Masuk"
    },
    {
      "jp": "出",
      "rom": "de / da",
      "en": "Keluar"
    },
    {
      "jp": "立",
      "rom": "ta",
      "en": "Berdiri"
    },
    {
      "jp": "休",
      "rom": "yasu",
      "en": "Istirahat"
    },
    {
      "jp": "買",
      "rom": "ka",
      "en": "Membeli"
    },
    {
      "jp": "何",
      "rom": "nani / nan",
      "en": "Apa"
    },
    {
      "jp": "手",
      "rom": "te",
      "en": "Tangan"
    },
    {
      "jp": "足",
      "rom": "ashi / ta",
      "en": "Kaki / Cukup"
    },
    {
      "jp": "白",
      "rom": "shiro",
      "en": "Putih"
    },
    {
      "jp": "赤",
      "rom": "aka",
      "en": "Merah"
    }
  ]
};

const KANJI_N4_DATABASE = {
  "movement": [
    {
      "jp": "開",
      "rom": "a / ひら",
      "en": "Membuka"
    },
    {
      "jp": "閉",
      "rom": "し / と",
      "en": "Menutup"
    },
    {
      "jp": "帰",
      "rom": "かえ",
      "en": "Pulang"
    },
    {
      "jp": "歩",
      "rom": "ある",
      "en": "Berjalan"
    },
    {
      "jp": "走",
      "rom": "はし",
      "en": "Berlari"
    },
    {
      "jp": "止",
      "rom": "to",
      "en": "Berhenti"
    },
    {
      "jp": "曜",
      "rom": "ヨウ",
      "en": "Hari Seminggu"
    },
    {
      "jp": "送",
      "rom": "oku",
      "en": "Mengirim"
    },
    {
      "jp": "急",
      "rom": "iso",
      "en": "Cepat / Tergesa"
    },
    {
      "jp": "引",
      "rom": "hi",
      "en": "Menarik"
    },
    {
      "jp": "押",
      "rom": "o",
      "en": "Mendorong"
    },
    {
      "jp": "使",
      "rom": "tsuka",
      "en": "Menggunakan"
    },
    {
      "jp": "始",
      "rom": "haji",
      "en": "Memulai"
    },
    {
      "jp": "終",
      "rom": "o",
      "en": "Selesai"
    },
    {
      "jp": "借",
      "rom": "ka",
      "en": "Meminjam"
    },
    {
      "jp": "貸",
      "rom": "ka",
      "en": "Meminjamkan"
    },
    {
      "jp": "待",
      "rom": "ma",
      "en": "Menunggu"
    },
    {
      "jp": "持",
      "rom": "mo",
      "en": "Membawa / Memiliki"
    },
    {
      "jp": "住",
      "rom": "su",
      "en": "Tinggal / Menetap"
    },
    {
      "jp": "週",
      "rom": "シュウ",
      "en": "Minggu"
    }
  ],
  "time_body": [
    {
      "jp": "朝",
      "rom": "asa",
      "en": "Pagi"
    },
    {
      "jp": "昼",
      "rom": "hiru",
      "en": "Siang"
    },
    {
      "jp": "夜",
      "rom": "yoru",
      "en": "Malam"
    },
    {
      "jp": "春",
      "rom": "haru",
      "en": "Musim Semi"
    },
    {
      "jp": "夏",
      "rom": "natsu",
      "en": "Musim Panas"
    },
    {
      "jp": "秋",
      "rom": "aki",
      "en": "Musim Gugur"
    },
    {
      "jp": "冬",
      "rom": "fuyu",
      "en": "Musim Dingin"
    },
    {
      "jp": "体",
      "rom": "karada",
      "en": "Tubuh"
    },
    {
      "jp": "心",
      "rom": "kokoro",
      "en": "Hati / Jiwa"
    },
    {
      "jp": "首",
      "rom": "kubi",
      "en": "Leher"
    },
    {
      "jp": "声",
      "rom": "koe",
      "en": "Suara"
    },
    {
      "jp": "自",
      "rom": "mizuka",
      "en": "Diri Sendiri"
    },
    {
      "jp": "頭",
      "rom": "atama",
      "en": "Kepala"
    },
    {
      "jp": "顔",
      "rom": "kao",
      "en": "Wajah"
    },
    {
      "jp": "病",
      "rom": "ya",
      "en": "Sakit"
    },
    {
      "jp": "院",
      "rom": "イン",
      "en": "Institusi"
    },
    {
      "jp": "医",
      "rom": "イ",
      "en": "Medis / Dokter"
    },
    {
      "jp": "薬",
      "rom": "kusuri",
      "en": "Obat"
    },
    {
      "jp": "度",
      "rom": "ta",
      "en": "Derajat / Kali"
    },
    {
      "jp": "力",
      "rom": "chikara",
      "en": "Kekuatan"
    }
  ],
  "society_business": [
    {
      "jp": "民",
      "rom": "tami",
      "en": "Rakyat / Warga"
    },
    {
      "jp": "作",
      "rom": "つく",
      "en": "Membuat"
    },
    {
      "jp": "仕",
      "rom": "tsuka",
      "en": "Melayani"
    },
    {
      "jp": "事",
      "rom": "koto",
      "en": "Hal / Tugas"
    },
    {
      "jp": "品",
      "rom": "shina",
      "en": "Barang"
    },
    {
      "jp": "業",
      "rom": "waza",
      "en": "Industri"
    },
    {
      "jp": "長",
      "rom": "naga",
      "en": "Panjang / Kepala"
    },
    {
      "jp": "强",
      "rom": "tsuyo",
      "en": "Kuat"
    },
    {
      "jp": "新",
      "rom": "atara",
      "en": "Baru"
    },
    {
      "jp": "古",
      "rom": "furu",
      "en": "Lama"
    },
    {
      "jp": "安",
      "rom": "yasu",
      "en": "Murah / Aman"
    },
    {
      "jp": "高",
      "rom": "taka",
      "en": "Tinggi / Mahal"
    },
    {
      "jp": "同",
      "rom": "onaji",
      "en": "Sama"
    },
    {
      "jp": "主",
      "rom": "nushi",
      "en": "Pemilik / Utama"
    },
    {
      "jp": "代",
      "rom": "ka",
      "en": "Era / Mengganti"
    },
    {
      "jp": "用",
      "rom": "mochi",
      "en": "Menggunakan / Urusan"
    },
    {
      "jp": "理",
      "rom": "リ",
      "en": "Alasan / Kebenaran"
    },
    {
      "jp": "物",
      "rom": "mono",
      "en": "Benda"
    },
    {
      "jp": "特",
      "rom": "トク",
      "en": "Khusus"
    },
    {
      "jp": "売",
      "rom": "u",
      "en": "Menjual"
    }
  ],
  "school_action": [
    {
      "jp": "考",
      "rom": "kanga",
      "en": "Berpikir"
    },
    {
      "jp": "教",
      "rom": "oshi",
      "en": "Mengajar"
    },
    {
      "jp": "室",
      "rom": "muro",
      "en": "Ruangan"
    },
    {
      "jp": "文",
      "rom": "fumi",
      "en": "Kalimat"
    },
    {
      "jp": "字",
      "rom": "aza",
      "en": "Huruf"
    },
    {
      "jp": "音",
      "rom": "oto",
      "en": "Bunyi"
    },
    {
      "jp": "楽",
      "rom": "tano",
      "en": "Senang / Musik"
    },
    {
      "jp": "林",
      "rom": "hayashi",
      "en": "Hutan Kecil"
    },
    {
      "jp": "森",
      "rom": "mori",
      "en": "Hutan Lebat"
    },
    {
      "jp": "親",
      "rom": "oya / shita",
      "en": "Orang Tua / Dekat"
    },
    {
      "jp": "少",
      "rom": "suku / suko",
      "en": "Sedikit"
    },
    {
      "jp": "多",
      "rom": "oo",
      "en": "Banyak"
    },
    {
      "jp": "近",
      "rom": "chika",
      "en": "Dekat"
    },
    {
      "jp": "遠",
      "rom": "too",
      "en": "Jauh"
    },
    {
      "jp": "犬",
      "rom": "inu",
      "en": "Anjing"
    },
    {
      "jp": "牛",
      "rom": "ushi",
      "en": "Sapi"
    },
    {
      "jp": "鳥",
      "rom": "tori",
      "en": "Burung"
    },
    {
      "jp": "風",
      "rom": "kaze",
      "en": "Angin"
    },
    {
      "jp": "台",
      "rom": "ダイ / タイ",
      "en": "Landasan / Unit"
    },
    {
      "jp": "世",
      "rom": "yo",
      "en": "Dunia / Generasi"
    }
  ]
};

const KANJI_N3_DATABASE = {
  "society": [
    {
      "jp": "政",
      "rom": "matsuri",
      "en": "Politik"
    },
    {
      "jp": "治",
      "rom": "osama",
      "en": "Memerintah"
    },
    {
      "jp": "経",
      "rom": "he",
      "en": "Ekonomi / Lewat"
    },
    {
      "jp": "済",
      "rom": "su",
      "en": "Selesai"
    },
    {
      "jp": "法",
      "rom": "ホウ",
      "en": "Hukum"
    },
    {
      "jp": "律",
      "rom": "リツ",
      "en": "Aturan"
    },
    {
      "jp": "際",
      "rom": "kiwa",
      "en": "Batas / Internasional"
    },
    {
      "jp": "関",
      "rom": "seki",
      "en": "Hubungan"
    },
    {
      "jp": "係",
      "rom": "kaka",
      "en": "Penanggung Jawab"
    },
    {
      "jp": "義",
      "rom": "ギ",
      "en": "Keadilan / Makna"
    },
    {
      "jp": "議",
      "rom": "ギ",
      "en": "Diskusi / Parlemen"
    },
    {
      "jp": "党",
      "rom": "トウ",
      "en": "Partai Politik"
    },
    {
      "jp": "都",
      "rom": "miako",
      "en": "Metropolis / Kota"
    },
    {
      "jp": "府",
      "rom": "フ",
      "en": "Prefektur Kotamadya"
    },
    {
      "jp": "県",
      "rom": "ケン",
      "en": "Prefektur Provinsi"
    },
    {
      "jp": "区",
      "rom": "ク",
      "en": "Distrik / Wilayah"
    },
    {
      "jp": "諸",
      "rom": "ショ",
      "en": "Berbagai / Banyak"
    },
    {
      "jp": "権",
      "rom": "ケン / ゴン",
      "en": "Kekuasaan / Hak"
    },
    {
      "jp": "財",
      "rom": "ザイ / サイ",
      "en": "Harta / Kekayaan"
    },
    {
      "jp": "障",
      "rom": "sawa",
      "en": "Rintangan / Hambatan"
    }
  ],
  "business_science": [
    {
      "jp": "研",
      "rom": "to",
      "en": "Meneliti"
    },
    {
      "jp": "究",
      "rom": "kiwa",
      "en": "Menyelidiki"
    },
    {
      "jp": "科",
      "rom": "カ",
      "en": "Sains / Bidang"
    },
    {
      "jp": "数",
      "rom": "kazu",
      "en": "Angka"
    },
    {
      "jp": "算",
      "rom": "サン",
      "en": "Berhitung"
    },
    {
      "jp": "組",
      "rom": "kumi",
      "en": "Kelompok / Kelas"
    },
    {
      "jp": "設",
      "rom": "mou",
      "en": "Mendirikan"
    },
    {
      "jp": "建",
      "rom": "ta",
      "en": "Membangun"
    },
    {
      "jp": "築",
      "rom": "kizu",
      "en": "Konstruksi"
    },
    {
      "jp": "造",
      "rom": "tsuku",
      "en": "Membuat"
    },
    {
      "jp": "術",
      "rom": "sube",
      "en": "Teknik / Seni"
    },
    {
      "jp": "技",
      "rom": "waza",
      "en": "Keterampilan"
    },
    {
      "jp": "複",
      "rom": "フク",
      "en": "Ganda / Kompleks"
    },
    {
      "jp": "册",
      "rom": "サツ / サク",
      "en": "Counter Buku / Jilid"
    },
    {
      "jp": "製",
      "rom": "セイ",
      "en": "Buatan / Pabrik"
    },
    {
      "jp": "輸",
      "rom": "ユ",
      "en": "Mengangkut / Kirim"
    },
    {
      "jp": "貿",
      "rom": "ボウ",
      "en": "Perdagangan"
    },
    {
      "jp": "易",
      "rom": "yasa",
      "en": "Mudah / Barter"
    },
    {
      "jp": "企",
      "rom": "kuwada",
      "en": "Merencanakan"
    },
    {
      "jp": "創",
      "rom": "haji",
      "en": "Menciptakan"
    }
  ],
  "mind_emotion": [
    {
      "jp": "想",
      "rom": "omo",
      "en": "Ide / Pikiran"
    },
    {
      "jp": "念",
      "rom": "ネン",
      "en": "Perasaan"
    },
    {
      "jp": "感",
      "rom": "カン",
      "en": "Indra / Perasaan"
    },
    {
      "jp": "情",
      "rom": "nasa",
      "en": "Emosi"
    },
    {
      "jp": "信",
      "rom": "シン",
      "en": "Percaya"
    },
    {
      "jp": "愛",
      "rom": "アイ",
      "en": "Cinta"
    },
    {
      "jp": "悲",
      "rom": "kana",
      "en": "Sedih"
    },
    {
      "jp": "怒",
      "rom": "oko",
      "en": "Marah"
    },
    {
      "jp": "望",
      "rom": "nozo",
      "en": "Berharap"
    },
    {
      "jp": "欲",
      "rom": "ho",
      "en": "Ingin / Hasrat"
    },
    {
      "jp": "願",
      "rom": "nega",
      "en": "Memohon"
    },
    {
      "jp": "恐",
      "rom": "kowa / oso",
      "en": "Takut / Ngeri"
    },
    {
      "jp": "悩",
      "rom": "nayo",
      "en": "Khawatir / Cemas"
    },
    {
      "jp": "憎",
      "rom": "niga",
      "en": "Benci"
    },
    {
      "jp": "恥",
      "rom": "ha",
      "en": "Malu"
    },
    {
      "jp": "意",
      "rom": "イ",
      "en": "Maksud / Pikiran"
    },
    {
      "jp": "志",
      "rom": "kokorozashi",
      "en": "Kehendak / Aspirasi"
    },
    {
      "jp": "憶",
      "rom": "オク",
      "en": "Ingat / Memori"
    },
    {
      "jp": "忘",
      "rom": "wasu",
      "en": "Lupa"
    },
    {
      "jp": "恋",
      "rom": "koi",
      "en": "Cinta / Asmara"
    }
  ],
  "action_state": [
    {
      "jp": "選",
      "rom": "era",
      "en": "Memilih"
    },
    {
      "jp": "決",
      "rom": "ki",
      "en": "Memutuskan"
    },
    {
      "jp": "認",
      "rom": "mito",
      "en": "Mengakui"
    },
    {
      "jp": "表",
      "rom": "omote",
      "en": "Tabel / Ungkapan"
    },
    {
      "jp": "現",
      "rom": "arawa",
      "en": "Muncul / Nyata"
    },
    {
      "jp": "調",
      "rom": "shirabe",
      "en": "Meneliti / Nada"
    },
    {
      "jp": "査",
      "rom": "サ",
      "en": "Memeriksa"
    },
    {
      "jp": "確",
      "rom": "tashi",
      "en": "Pasti / Yakin"
    },
    {
      "jp": "果",
      "rom": "ha",
      "en": "Hasil / Buah"
    },
    {
      "jp": "連",
      "rom": "tsu",
      "en": "Menghubungkan"
    },
    {
      "jp": "絡",
      "rom": "kara",
      "en": "Keterikatan"
    },
    {
      "jp": "戦",
      "rom": "tataka",
      "en": "Perang / Tarung"
    },
    {
      "jp": "争",
      "rom": "araso",
      "en": "Berjuang / Rebut"
    },
    {
      "jp": "幸",
      "rom": "shiawa",
      "en": "Bahagia"
    },
    {
      "jp": "福",
      "rom": "フク",
      "en": "Keberuntungan"
    },
    {
      "jp": "難",
      "rom": "muzuka",
      "en": "Sulit / Bencana"
    },
    {
      "jp": "若",
      "rom": "waka",
      "en": "Muda"
    },
    {
      "jp": "老",
      "rom": "o",
      "en": "Tua / Lansia"
    },
    {
      "jp": "忙",
      "rom": "isoga",
      "en": "Sibuk"
    },
    {
      "jp": "降",
      "rom": "o / fu",
      "en": "Turun"
    }
  ]
};

// ── COMPONENT VIEW ──────────────────────────────────────────────────────────
export function WritingView(container) {
  renderTopbar('❖ Latihan Menulis');

  // Application session states
  let activeTab = 'hiragana'; // 'hiragana' | 'katakana' | 'kanji' | 'kanji-n4' | 'kanji-n3'
  let sessionQueue = []; // Queue of active characters in the session
  let currentIndex = 0;
  let isDrawing = false;
  let canvas = null;
  let ctx = null;
  let lastX = 0;
  let lastY = 0;

  let showGuide = false; // Toggles trace helper overlay (low opacity)
  let isComparing = false; // Toggles full comparison overlay

  // Check for "?char=X" query parameter in the URL hash
  const hash = window.location.hash;
  const qIndex = hash.indexOf('?');
  if (qIndex !== -1) {
    const query = hash.slice(qIndex + 1);
    const params = new URLSearchParams(query);
    const charParam = params.get('char');
    if (charParam) {
      let foundItem = null;
      // Search in Kanji N5
      Object.keys(KANJI_DATABASE).forEach(key => {
        const match = KANJI_DATABASE[key].find(item => item.jp === charParam);
        if (match) {
          foundItem = match;
          activeTab = 'kanji';
        }
      });
      // Search in Kanji N4
      if (!foundItem) {
        Object.keys(KANJI_N4_DATABASE).forEach(key => {
          const match = KANJI_N4_DATABASE[key].find(item => item.jp === charParam);
          if (match) {
            foundItem = match;
            activeTab = 'kanji-n4';
          }
        });
      }
      // Search in Kanji N3
      if (!foundItem) {
        Object.keys(KANJI_N3_DATABASE).forEach(key => {
          const match = KANJI_N3_DATABASE[key].find(item => item.jp === charParam);
          if (match) {
            foundItem = match;
            activeTab = 'kanji-n3';
          }
        });
      }
      // Search in Hiragana
      if (!foundItem) {
        Object.keys(HIRAGANA_DATABASE).forEach(key => {
          const match = HIRAGANA_DATABASE[key].find(item => item.jp === charParam);
          if (match) {
            foundItem = match;
            activeTab = 'hiragana';
          }
        });
      }
      // Search in Katakana
      if (!foundItem) {
        Object.keys(KATAKANA_DATABASE).forEach(key => {
          const match = KATAKANA_DATABASE[key].find(item => item.jp === charParam);
          if (match) {
            foundItem = match;
            activeTab = 'katakana';
          }
        });
      }

      if (foundItem) {
        sessionQueue = [foundItem];
        currentIndex = 0;
      }
    }
  }

  // ── SECTOR RENDERING ───────────────────────────────────────────────────────
  
  const renderLayout = () => {
    if (sessionQueue.length > 0) {
      if (currentIndex >= sessionQueue.length) {
        renderCompletedScreen();
      } else {
        renderPracticeScreen();
      }
    } else {
      renderSelectionScreen();
    }
  };

  // Screen 1: Selection Tab Lists
  const renderSelectionScreen = () => {
    container.innerHTML = `
      <div style="max-width: 600px; margin: 0 auto; padding: 12px 16px;" class="fade-in">
        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px; letter-spacing: -0.01em;">Latihan Menulis Deliberate</h2>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 24px; line-height: 1.5;">
          Pilih kategori karakter di bawah ini untuk melatih ingatan motorik dan stroke order Anda pada touchscreen mobile secara terarah.
        </p>

        <!-- Dynamic Sub Tabs -->
        <div style="display: flex; gap: 4px; background: var(--bg-hover); padding: 4px; border-radius: var(--radius-md); margin-bottom: 20px; overflow-x: auto; -webkit-overflow-scrolling: touch;">
          <button class="tab-btn selection-tab ${activeTab === 'hiragana' ? 'active' : ''}" data-target="hiragana" style="flex: 1; padding: 10px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm); white-space: nowrap; min-width: 75px;">Hiragana</button>
          <button class="tab-btn selection-tab ${activeTab === 'katakana' ? 'active' : ''}" data-target="katakana" style="flex: 1; padding: 10px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm); white-space: nowrap; min-width: 75px;">Katakana</button>
          <button class="tab-btn selection-tab ${activeTab === 'kanji' ? 'active' : ''}" data-target="kanji" style="flex: 1; padding: 10px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm); white-space: nowrap; min-width: 75px;">Kanji N5</button>
          <button class="tab-btn selection-tab ${activeTab === 'kanji-n4' ? 'active' : ''}" data-target="kanji-n4" style="flex: 1; padding: 10px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm); white-space: nowrap; min-width: 75px;">Kanji N4</button>
          <button class="tab-btn selection-tab ${activeTab === 'kanji-n3' ? 'active' : ''}" data-target="kanji-n3" style="flex: 1; padding: 10px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm); white-space: nowrap; min-width: 75px;">Kanji N3</button>
        </div>

        <div id="selection-grid-container" style="display: flex; flex-direction: column; gap: 24px;">
          <!-- Active categories will render dynamically here -->
        </div>
      </div>
    `;

    renderSelectionGrid();
    bindSelectionEvents();
  };

  const renderSelectionGrid = () => {
    const grid = container.querySelector('#selection-grid-container');
    if (!grid) return;

    let html = '';

    if (activeTab === 'hiragana') {
      html = `
        <h3 style="font-size: 0.8rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--border); padding-bottom: 6px; margin-bottom: -8px;">Paket Huruf Hiragana</h3>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
          <button class="char-select-card" data-type="hiragana" data-key="vowels">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">あいうえお</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Vokal Dasar</div>
          </button>
          <button class="char-select-card" data-type="hiragana" data-key="k_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">かきくけこ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ka</div>
          </button>
          <button class="char-select-card" data-type="hiragana" data-key="s_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">さしすせそ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Sa</div>
          </button>
          <button class="char-select-card" data-type="hiragana" data-key="t_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">たちつてと</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ta</div>
          </button>
          <button class="char-select-card" data-type="hiragana" data-key="n_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">なにぬねの</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Na</div>
          </button>
          <button class="char-select-card" data-type="hiragana" data-key="h_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">はひふへほ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ha</div>
          </button>
          <button class="char-select-card" data-type="hiragana" data-key="m_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">まみむめも</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ma</div>
          </button>
          <button class="char-select-card" data-type="hiragana" data-key="y_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">や・ゆ・よ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ya</div>
          </button>
          <button class="char-select-card" data-type="hiragana" data-key="r_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">らりるれろ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ra</div>
          </button>
          <button class="char-select-card" data-type="hiragana" data-key="w_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">わ・を・ん</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Wa & N</div>
          </button>
        </div>
        <button class="btn btn-primary" data-type="hiragana" data-key="all" style="width: 100%; padding: 14px; font-weight: 800; margin-top: 6px;">
          Latih Semua Hiragana (46 Huruf)
        </button>
      `;
    } else if (activeTab === 'katakana') {
      html = `
        <h3 style="font-size: 0.8rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--border); padding-bottom: 6px; margin-bottom: -8px;">Paket Huruf Katakana</h3>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
          <button class="char-select-card" data-type="katakana" data-key="vowels">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">アイウエオ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Vokal Dasar</div>
          </button>
          <button class="char-select-card" data-type="katakana" data-key="k_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">カキクケコ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ka</div>
          </button>
          <button class="char-select-card" data-type="katakana" data-key="s_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">サシスセソ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Sa</div>
          </button>
          <button class="char-select-card" data-type="katakana" data-key="t_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">タチツテト</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ta</div>
          </button>
          <button class="char-select-card" data-type="katakana" data-key="n_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">ナニヌネノ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Na</div>
          </button>
          <button class="char-select-card" data-type="katakana" data-key="h_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">ハヒフヘホ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ha</div>
          </button>
          <button class="char-select-card" data-type="katakana" data-key="m_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">マミムメモ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ma</div>
          </button>
          <button class="char-select-card" data-type="katakana" data-key="y_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">ヤ・ユ・ヨ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ya</div>
          </button>
          <button class="char-select-card" data-type="katakana" data-key="r_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">ラリルレロ</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Ra</div>
          </button>
          <button class="char-select-card" data-type="katakana" data-key="w_row">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">ワ・ヲ・ン</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Baris Wa & N</div>
          </button>
        </div>
        <button class="btn btn-primary" data-type="katakana" data-key="all" style="width: 100%; padding: 14px; font-weight: 800; margin-top: 6px;">
          Latih Semua Katakana (46 Huruf)
        </button>
      `;
    } else if (activeTab === 'kanji') {
      html = `
        <h3 style="font-size: 0.8rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--border); padding-bottom: 6px; margin-bottom: -8px;">Kategori Kanji N5</h3>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
          <button class="char-select-card" data-type="kanji" data-key="numbers_time">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">一二三四五</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Angka & Waktu</div>
          </button>
          <button class="char-select-card" data-type="kanji" data-key="nature_places">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">日月火水木</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Alam & Tempat</div>
          </button>
          <button class="char-select-card" data-type="kanji" data-key="people_family">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">人子男女手</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Orang & Keluarga</div>
          </button>
          <button class="char-select-card" data-type="kanji" data-key="places_buildings">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">国店駅電車</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Tempat & Bangunan</div>
          </button>
        </div>
        <button class="btn btn-primary" data-type="kanji" data-key="all" style="width: 100%; padding: 14px; font-weight: 800; margin-top: 6px;">
          Latih Semua Kanji N5 (39 Huruf)
        </button>
      `;
    } else if (activeTab === 'kanji-n4') {
      html = `
        <h3 style="font-size: 0.8rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--border); padding-bottom: 6px; margin-bottom: -8px;">Kategori Kanji N4</h3>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
          <button class="char-select-card" data-type="kanji-n4" data-key="movement">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">出入立開閉</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Gerakan</div>
          </button>
          <button class="char-select-card" data-type="kanji-n4" data-key="time_body">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">朝昼夜春夏</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Waktu & Tubuh</div>
          </button>
          <button class="char-select-card" data-type="kanji-n4" data-key="society_business">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">民使作仕事</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Masyarakat & Bisnis</div>
          </button>
          <button class="char-select-card" data-type="kanji-n4" data-key="school_action">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">考教室文字</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Sekolah & Aksi</div>
          </button>
        </div>
        <button class="btn btn-primary" data-type="kanji-n4" data-key="all" style="width: 100%; padding: 14px; font-weight: 800; margin-top: 6px;">
          Latih Semua Kanji N4 (42 Huruf)
        </button>
      `;
    } else if (activeTab === 'kanji-n3') {
      html = `
        <h3 style="font-size: 0.8rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--border); padding-bottom: 6px; margin-bottom: -8px;">Kategori Kanji N3</h3>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
          <button class="char-select-card" data-type="kanji-n3" data-key="society">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">政治経済法</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Masyarakat</div>
          </button>
          <button class="char-select-card" data-type="kanji-n3" data-key="business_science">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">研究科数算</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Bisnis & Sains</div>
          </button>
          <button class="char-select-card" data-type="kanji-n3" data-key="mind_emotion">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">想念感情緒</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Pikiran & Emosi</div>
          </button>
          <button class="char-select-card" data-type="kanji-n3" data-key="action_state">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">選決認表現</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Aksi & Keadaan</div>
          </button>
        </div>
        <button class="btn btn-primary" data-type="kanji-n3" data-key="all" style="width: 100%; padding: 14px; font-weight: 800; margin-top: 6px;">
          Latih Semua Kanji N3 (38 Huruf)
        </button>
      `;
    }

    grid.innerHTML = html;
  };

  const bindSelectionEvents = () => {
    // Bind Tab Switching Click
    container.querySelectorAll('.selection-tab').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target.closest('.selection-tab');
        if (!target) return;
        activeTab = target.getAttribute('data-target');
        
        container.querySelectorAll('.selection-tab').forEach(b => b.classList.remove('active'));
        target.classList.add('active');

        renderSelectionGrid();
        bindSelectionEvents(); // Rebind cards click inside grid
      });
    });

    // Bind Category Cards Click
    const handleStartPractice = (type, key) => {
      let sourceDb = null;
      if (type === 'hiragana') sourceDb = HIRAGANA_DATABASE;
      else if (type === 'katakana') sourceDb = KATAKANA_DATABASE;
      else if (type === 'kanji') sourceDb = KANJI_DATABASE;
      else if (type === 'kanji-n4') sourceDb = KANJI_N4_DATABASE;
      else if (type === 'kanji-n3') sourceDb = KANJI_N3_DATABASE;

      if (!sourceDb) return;

      let list = [];
      if (key === 'all') {
        // Flatten all keys
        Object.keys(sourceDb).forEach(k => {
          list = list.concat(sourceDb[k]);
        });
      } else {
        list = sourceDb[key] || [];
      }

      if (list.length === 0) return;

      // Clone and Shuffle characters for deliberate practice
      sessionQueue = [...list].sort(() => Math.random() - 0.5);
      currentIndex = 0;
      showGuide = false;
      isComparing = false;

      renderLayout();
    };

    container.querySelectorAll('.char-select-card, .btn-primary').forEach(el => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest('[data-type]');
        if (!target) return;
        const type = target.getAttribute('data-type');
        const key = target.getAttribute('data-key');
        handleStartPractice(type, key);
      });
    });
  };

  // Screen 2: Drawing / Deliberate Practice Stage
  const renderPracticeScreen = () => {
    const char = sessionQueue[currentIndex];
    const categoryTitle = 
      activeTab === 'hiragana' ? 'Hiragana' : 
      activeTab === 'katakana' ? 'Katakana' : 
      activeTab === 'kanji' ? 'Kanji N5' : 
      activeTab === 'kanji-n4' ? 'Kanji N4' : 'Kanji N3';

    container.innerHTML = `
      <div style="max-width: 500px; margin: 0 auto; padding: 12px 16px; display: flex; flex-direction: column;" class="fade-in">
        
        <!-- Upper Navigation & Meta -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
          <button id="btn-back-menu" class="btn btn-secondary" style="padding: 6px 12px; font-size: var(--text-xs); height: 32px; display: flex; align-items: center; gap: 4px;">
            <i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i> Menu Latihan
          </button>
          
          <div style="font-size: var(--text-2xs); font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; background: var(--bg-hover); padding: 4px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
            ${categoryTitle}
          </div>
        </div>

        <!-- Upper Progress Bar -->
        <div style="margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: var(--text-xs); color: var(--text-secondary); font-weight: 600;">
            <span>Huruf <strong>${currentIndex + 1}</strong> dari <strong>${sessionQueue.length}</strong></span>
            <span>Sisa ${sessionQueue.length - currentIndex}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${(currentIndex / sessionQueue.length) * 100}%"></div>
          </div>
        </div>

        <!-- Practice Cue Display Card -->
        <div class="card" style="padding: 16px 20px; text-align: center; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; background: var(--bg-hover); border: none;">
          <div style="text-align: left;">
            <div style="font-size: var(--text-xs); color: var(--text-muted); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Tulis Huruf Berikut:</div>
            <div style="display: flex; align-items: baseline; gap: 8px;">
              <h1 style="font-size: 1.8rem; font-weight: 800; color: var(--accent-bright); font-family: var(--font-mono);">${char.rom.toUpperCase()}</h1>
              <span style="font-size: var(--text-xs); color: var(--text-secondary); font-weight: 600;">(${char.en})</span>
            </div>
          </div>
          
          <button id="btn-audio-pronounce" class="vocab-play-btn" style="width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center;" aria-label="Putar Pengucapan TTS">
            <i data-lucide="volume-2" style="width: 20px; height: 20px;"></i>
          </button>
        </div>

        <!-- HTML5 Genkouyoushi Writing Box -->
        <div class="writing-canvas-container">
          <!-- Guide Cross Overlay Grid -->
          <div class="genkouyoushi-grid genkouyoushi-grid-diagonal"></div>
          
          <!-- Large Character Guide (Tracing Overlay / Self Comparison Overlay) -->
          <div id="writing-guide" class="writing-guide-overlay ${showGuide ? 'show-guide' : ''} ${isComparing ? 'show-comparison' : ''}">
            ${char.jp}
          </div>
          
          <!-- Drawing Canvas -->
          <canvas id="writing-canvas" class="writing-canvas" width="640" height="640"></canvas>
        </div>

        <!-- Action Control Area (Tactile Buttons) -->
        <div id="writing-controls" style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">
          <!-- Contextual controls will render here dynamically based on isComparing state -->
        </div>

      </div>
    `;

    if (window.lucide) lucide.createIcons({ root: container });

    setupCanvasDrawing();
    renderControls();
    
    // Bind Cue Play Sound
    document.getElementById('btn-audio-pronounce').addEventListener('click', () => {
      window.playAudio(char.jp);
    });

    // Bind Back Menu Click
    document.getElementById('btn-back-menu').addEventListener('click', () => {
      sessionQueue = [];
      currentIndex = 0;
      renderLayout();
    });
  };

  const renderControls = () => {
    const controls = container.querySelector('#writing-controls');
    if (!controls) return;

    if (!isComparing) {
      controls.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
          <button id="btn-clear-canvas" class="btn btn-secondary btn-lg" style="height: 48px; font-weight: 700;">
            <i data-lucide="trash-2" style="width: 16px; height: 16px; margin-right: 6px;"></i> Hapus
          </button>
          
          <button id="btn-toggle-hint" class="btn btn-secondary btn-lg" style="height: 48px; font-weight: 700; background: ${showGuide ? 'var(--accent-dim)' : 'transparent'}; border-color: ${showGuide ? 'var(--accent)' : 'var(--border)'}; color: ${showGuide ? 'var(--accent-bright)' : 'var(--text-main)'};">
            <i data-lucide="${showGuide ? 'eye-off' : 'eye'}" style="width: 16px; height: 16px; margin-right: 6px;"></i> Petunjuk
          </button>
        </div>

        <button id="btn-compare-canvas" class="btn btn-primary btn-lg" style="height: 52px; font-weight: 800; width: 100%; border-radius: var(--radius-md);">
          <i data-lucide="columns" style="width: 18px; height: 18px; margin-right: 6px;"></i> Bandingkan Coretan
        </button>
      `;

      if (window.lucide) lucide.createIcons({ root: controls });

      // Bind drawing view actions
      document.getElementById('btn-clear-canvas').addEventListener('click', clearCanvas);
      
      document.getElementById('btn-toggle-hint').addEventListener('click', () => {
        showGuide = !showGuide;
        const guideEl = document.getElementById('writing-guide');
        if (showGuide) {
          guideEl.classList.add('show-guide');
        } else {
          guideEl.classList.remove('show-guide');
        }
        renderControls(); // Redraw buttons for state changes
      });

      document.getElementById('btn-compare-canvas').addEventListener('click', () => {
        isComparing = true;
        const guideEl = document.getElementById('writing-guide');
        guideEl.classList.remove('show-guide');
        guideEl.classList.add('show-comparison');
        
        // Auto announce pronunciation for auditory confirmation upon comparison
        window.playAudio(sessionQueue[currentIndex].jp);

        renderControls();
      });

    } else {
      // Comparison View (Evaluation Buttons)
      controls.innerHTML = `
        <div style="text-align: center; font-size: var(--text-xs); color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">
          Bandingkan lukisan Anda dengan referensi di atas
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; width: 100%;">
          <button id="btn-practice-retry" class="btn btn-secondary btn-lg" style="height: 52px; font-weight: 700; border-color: var(--border-bright); background: var(--bg-hover);">
            <i data-lucide="rotate-ccw" style="width: 18px; height: 18px; margin-right: 6px;"></i> Latih Lagi
          </button>
          
          <button id="btn-practice-correct" class="btn btn-primary btn-lg" style="height: 52px; font-weight: 800; background: var(--text-main); color: var(--bg-main); border: none;">
            <i data-lucide="check" style="width: 18px; height: 18px; margin-right: 6px;"></i> Cocok
          </button>
        </div>
      `;

      if (window.lucide) lucide.createIcons({ root: controls });

      // Retry handler: pushes current card back to the end of the queue for spaced active practice
      document.getElementById('btn-practice-retry').addEventListener('click', () => {
        const item = sessionQueue[currentIndex];
        // Remove from current index, append to the end of queue rotation
        sessionQueue.splice(currentIndex, 1);
        sessionQueue.push(item);

        isComparing = false;
        showGuide = false;
        clearCanvas();
        renderPracticeScreen();
      });

      // Correct handler: steps index forward
      document.getElementById('btn-practice-correct').addEventListener('click', () => {
        currentIndex++;
        isComparing = false;
        showGuide = false;
        renderLayout();
      });
    }
  };

  // Screen 3: Practice Completed Scorecard
  const renderCompletedScreen = () => {
    container.innerHTML = `
      <div style="max-width: 500px; margin: 60px auto; text-align: center; padding: 0 16px;" class="fade-in">
        <div style="font-size: 5rem; margin-bottom: 24px; color: var(--accent-bright); display: inline-flex; align-items: center; justify-content: center; width: 96px; height: 96px; border-radius: 50%; background: var(--accent-dim); border: 1px solid var(--border-accent);">
          <i data-lucide="award" style="width:48px;height:48px;"></i>
        </div>
        
        <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 8px;">Latihan Selesai! 🎉</h2>
        <p style="color: var(--text-secondary); font-size: var(--text-md); margin-bottom: 28px; line-height: 1.5; max-width: 360px; margin-left: auto; margin-right: auto;">
          Hebat! Anda telah menyelesaikan latihan menulis deliberate untuk kategori karakter ini secara sukses. Ingatan kinestetik Anda semakin kuat!
        </p>

        <div style="background: var(--bg-hover); padding: 16px 20px; border-radius: var(--radius-md); margin-bottom: 32px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: space-around;">
          <div>
            <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-bright);">${sessionQueue.length}</div>
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Total Karakter</div>
          </div>
          
          <div style="width: 1px; height: 40px; background: var(--border);"></div>
          
          <div>
            <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-bright);">100%</div>
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Keberhasilan</div>
          </div>
        </div>

        <button id="btn-restart-writing" class="btn btn-primary btn-lg" style="width: 100%; height: 50px; font-weight: 800; border-radius: var(--radius-md);">
          Mulai Latihan Baru
        </button>
      </div>
    `;

    if (window.lucide) lucide.createIcons({ root: container });

    document.getElementById('btn-restart-writing').addEventListener('click', () => {
      sessionQueue = [];
      currentIndex = 0;
      renderLayout();
    });
  };

  // ── HTML5 CANVAS INTERACTIVE DRAWING SYSTEM ────────────────────────────────
  
  const setupCanvasDrawing = () => {
    canvas = document.getElementById('writing-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high-fidelity anti-alias lines
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Ink color: dynamically maps to var(--text-main) color theme
    const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--text-main').trim() || '#ffffff';
    ctx.strokeStyle = themeColor;

    // Relative mouse/finger coordinate solver
    const getCoords = (e) => {
      const rect = canvas.getBoundingClientRect();
      let clientX, clientY;
      
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Proportional math mapping screen layout viewport to 640x640 canvas matrix
      const x = (clientX - rect.left) * (canvas.width / rect.width);
      const y = (clientY - rect.top) * (canvas.height / rect.height);
      return [x, y];
    };

    const startDrawing = (e) => {
      if (isComparing) return; // Prevent writing during active overlay review
      isDrawing = true;
      const [x, y] = getCoords(e);
      [lastX, lastY] = [x, y];
      
      // Draw single touch dot fallback
      ctx.beginPath();
      ctx.arc(x, y, ctx.lineWidth / 2, 0, Math.PI * 2);
      ctx.fillStyle = ctx.strokeStyle;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const draw = (e) => {
      if (!isDrawing || isComparing) return;
      e.preventDefault(); // Stop mobile screen scrolling gestures while writing
      
      const [x, y] = getCoords(e);
      ctx.lineTo(x, y);
      ctx.stroke();
      [lastX, lastY] = [x, y];
    };

    const stopDrawing = () => {
      isDrawing = false;
      ctx.beginPath();
    };

    // Bind Mouse Events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    // Bind Touchscreen Mobile Touch Events
    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
  };

  const clearCanvas = () => {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // ── MOUNT ENTRY POINT ──────────────────────────────────────────────────────
  renderLayout();
}
