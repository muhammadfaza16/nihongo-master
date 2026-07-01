import { renderTopbar, showToast, renderBackBtn } from '../components/layout.js';
import { speakJP } from '../audio.js';

// Setup window.playAudio for standalone loading fallback
if (!window.playAudio) {
  window.playAudio = (text) => speakJP(text, 0.8);
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
      "rom": "ICHI / ITSU / hito(tsu)",
      "en": "Satu"
    },
    {
      "jp": "二",
      "rom": "NI / futa(tsu)",
      "en": "Dua"
    },
    {
      "jp": "三",
      "rom": "SAN / mit(tsu)",
      "en": "Tiga"
    },
    {
      "jp": "四",
      "rom": "SHI / yot(tsu) / yo",
      "en": "Empat"
    },
    {
      "jp": "五",
      "rom": "GO / itsu(tsu)",
      "en": "Lima"
    },
    {
      "jp": "六",
      "rom": "ROKU / mut(tsu)",
      "en": "Enam"
    },
    {
      "jp": "七",
      "rom": "SHICHI / nana(tsu)",
      "en": "Tujuh"
    },
    {
      "jp": "八",
      "rom": "HACHI / yat(tsu)",
      "en": "Delapan"
    },
    {
      "jp": "九",
      "rom": "KU / KIュU / kokono(tsu)",
      "en": "Sembilan"
    },
    {
      "jp": "十",
      "rom": "JIュU / too",
      "en": "Sepuluh"
    },
    {
      "jp": "百",
      "rom": "HIャKU",
      "en": "Seratus"
    },
    {
      "jp": "千",
      "rom": "SEN / chi",
      "en": "Seribu"
    },
    {
      "jp": "万",
      "rom": "MAN / BAN",
      "en": "Sepuluh Ribu"
    },
    {
      "jp": "円",
      "rom": "EN / maru(i)",
      "en": "Yen / Lingkaran"
    },
    {
      "jp": "年",
      "rom": "NEN / toshi",
      "en": "Tahun"
    },
    {
      "jp": "月",
      "rom": "GETSU / GATSU / tsuki",
      "en": "Bulan / Rembulan"
    },
    {
      "jp": "日",
      "rom": "NICHI / JITSU / hi / ka",
      "en": "Hari / Matahari"
    },
    {
      "jp": "時",
      "rom": "JI / toki",
      "en": "Waktu / Jam"
    },
    {
      "jp": "分",
      "rom": "FUN / PUN / BUN / wa(karu)",
      "en": "Menit / Bagian"
    },
    {
      "jp": "半",
      "rom": "HAN / naka(ba)",
      "en": "Setengah"
    }
  ],
  "nature_places": [
    {
      "jp": "山",
      "rom": "SAN / yama",
      "en": "Gunung"
    },
    {
      "jp": "川",
      "rom": "SEN / kawa",
      "en": "Sungai"
    },
    {
      "jp": "海",
      "rom": "KAI / umi",
      "en": "Laut"
    },
    {
      "jp": "空",
      "rom": "KUU / sora / a(ku)",
      "en": "Langit / Kosong"
    },
    {
      "jp": "木",
      "rom": "MOKU / ボKU / ki",
      "en": "Pohon / Kayu"
    },
    {
      "jp": "花",
      "rom": "KA / hana",
      "en": "Bunga"
    },
    {
      "jp": "雨",
      "rom": "U / ame",
      "en": "Hujan"
    },
    {
      "jp": "火",
      "rom": "KA / hi",
      "en": "Api"
    },
    {
      "jp": "水",
      "rom": "SUI / mizu",
      "en": "Air"
    },
    {
      "jp": "土",
      "rom": "DO / TO / tsuchi",
      "en": "Tanah"
    },
    {
      "jp": "金",
      "rom": "KIN / KON / kane / kana",
      "en": "Emas / Uang"
    },
    {
      "jp": "上",
      "rom": "JIョU / SHIョU / ue / a(garu)",
      "en": "Atas"
    },
    {
      "jp": "下",
      "rom": "KA / GE / shita / sa(garu)",
      "en": "Bawah"
    },
    {
      "jp": "中",
      "rom": "CHIュU / naka",
      "en": "Tengah / Dalam"
    },
    {
      "jp": "外",
      "rom": "GAI / GE / soto",
      "en": "Luar"
    },
    {
      "jp": "右",
      "rom": "U / YUU / migi",
      "en": "Kanan"
    },
    {
      "jp": "左",
      "rom": "SA / hidari",
      "en": "Kiri"
    },
    {
      "jp": "前",
      "rom": "ZEN / mae",
      "en": "Depan / Sebelum"
    },
    {
      "jp": "後",
      "rom": "GO / KOU / ato / ushi(ro)",
      "en": "Belakang / Sesudah"
    },
    {
      "jp": "東",
      "rom": "TOU / higashi",
      "en": "Timur"
    }
  ],
  "people_family": [
    {
      "jp": "人",
      "rom": "JIN / NIN / hito",
      "en": "Orang"
    },
    {
      "jp": "父",
      "rom": "FU / chichi / tou",
      "en": "Ayah"
    },
    {
      "jp": "母",
      "rom": "ボ / haha / kaa",
      "en": "Ibu"
    },
    {
      "jp": "子",
      "rom": "SHI / SU / ko",
      "en": "Anak"
    },
    {
      "jp": "男",
      "rom": "DAN / NAN / otoko",
      "en": "Laki-laki"
    },
    {
      "jp": "女",
      "rom": "JIョ / NIョ / onna",
      "en": "Perempuan"
    },
    {
      "jp": "友",
      "rom": "YUU / tomo",
      "en": "Teman"
    },
    {
      "jp": "先",
      "rom": "SEN / saki",
      "en": "Dahulu / Depan"
    },
    {
      "jp": "生",
      "rom": "SEI / SHIョU / i(kiru) / u(mare)",
      "en": "Lahir / Hidup"
    },
    {
      "jp": "名",
      "rom": "MEI / MIョU / na",
      "en": "Nama"
    },
    {
      "jp": "気",
      "rom": "KI / KE",
      "en": "Energi / Jiwa"
    },
    {
      "jp": "元",
      "rom": "GEN / GAN / moto",
      "en": "Asal / Sehat"
    },
    {
      "jp": "西",
      "rom": "SEI / SAI / nishi",
      "en": "Barat"
    },
    {
      "jp": "南",
      "rom": "NAN / minami",
      "en": "Selatan"
    },
    {
      "jp": "北",
      "rom": "HOKU / kita",
      "en": "Utara"
    },
    {
      "jp": "本",
      "rom": "HON / moto",
      "en": "Buku / Asal"
    },
    {
      "jp": "天",
      "rom": "TEN / ama",
      "en": "Langit / Surga"
    },
    {
      "jp": "口",
      "rom": "KOU / KU / kuchi / guchi",
      "en": "Mulut"
    },
    {
      "jp": "目",
      "rom": "MOKU / ボKU / me",
      "en": "Mata"
    },
    {
      "jp": "耳",
      "rom": "JI / mimi",
      "en": "Telinga"
    }
  ],
  "places_buildings": [
    {
      "jp": "国",
      "rom": "KOKU / KOT / kuni",
      "en": "Negara"
    },
    {
      "jp": "店",
      "rom": "TEN / mise",
      "en": "Toko"
    },
    {
      "jp": "駅",
      "rom": "EKI",
      "en": "Stasiun"
    },
    {
      "jp": "電",
      "rom": "DEN",
      "en": "Listrik"
    },
    {
      "jp": "車",
      "rom": "SHIャ / kuruma",
      "en": "Kendaraan / Roda"
    },
    {
      "jp": "道",
      "rom": "DOU / TOU / michi",
      "en": "Jalan"
    },
    {
      "jp": "学",
      "rom": "GAKU / GAT / mana(bu)",
      "en": "Belajar"
    },
    {
      "jp": "校",
      "rom": "KOU",
      "en": "Sekolah"
    },
    {
      "jp": "会",
      "rom": "KAI / E / a(u)",
      "en": "Pertemuan / Bertemu"
    },
    {
      "jp": "社",
      "rom": "SHIャ / yashiro",
      "en": "Perusahaan / Kuil"
    },
    {
      "jp": "入",
      "rom": "NIュU / hai(ru) / i(reru)",
      "en": "Masuk"
    },
    {
      "jp": "出",
      "rom": "SHIュTSU / de(ru) / da(su)",
      "en": "Keluar"
    },
    {
      "jp": "立",
      "rom": "RITSU / ta(tsu)",
      "en": "Berdiri"
    },
    {
      "jp": "休",
      "rom": "KIュU / yasu(mu)",
      "en": "Istirahat"
    },
    {
      "jp": "買",
      "rom": "BAI / ka(u)",
      "en": "Membeli"
    },
    {
      "jp": "何",
      "rom": "KA / nani / nan",
      "en": "Apa"
    },
    {
      "jp": "手",
      "rom": "SHIュ / te",
      "en": "Tangan"
    },
    {
      "jp": "足",
      "rom": "SOKU / ashi / ta(ru)",
      "en": "Kaki / Cukup"
    },
    {
      "jp": "白",
      "rom": "HAKU / BIャKU / shiro(i)",
      "en": "Putih"
    },
    {
      "jp": "赤",
      "rom": "SEKI / SHIャKU / aka(i)",
      "en": "Merah"
    }
  ]
};

const KANJI_N4_DATABASE = {
  "movement": [
    {
      "jp": "開",
      "rom": "KAI / a(keru) / hira(ku)",
      "en": "Membuka"
    },
    {
      "jp": "閉",
      "rom": "HEI / shi(meru) / to(jiru)",
      "en": "Menutup"
    },
    {
      "jp": "帰",
      "rom": "KI / kae(ru)",
      "en": "Pulang"
    },
    {
      "jp": "歩",
      "rom": "HO / aru(ku)",
      "en": "Berjalan"
    },
    {
      "jp": "走",
      "rom": "SOU / hashi(ru)",
      "en": "Berlari"
    },
    {
      "jp": "止",
      "rom": "SHI / to(maru)",
      "en": "Berhenti"
    },
    {
      "jp": "曜",
      "rom": "YOU",
      "en": "Hari Seminggu"
    },
    {
      "jp": "送",
      "rom": "SOU / oku(ru)",
      "en": "Mengirim"
    },
    {
      "jp": "急",
      "rom": "KIュU / iso(gu)",
      "en": "Cepat / Tergesa"
    },
    {
      "jp": "引",
      "rom": "IN / hi(ku)",
      "en": "Menarik"
    },
    {
      "jp": "押",
      "rom": "OU / o(su)",
      "en": "Mendorong"
    },
    {
      "jp": "使",
      "rom": "SHI / tsuka(u)",
      "en": "Menggunakan"
    },
    {
      "jp": "始",
      "rom": "SHI / haji(meru)",
      "en": "Memulai"
    },
    {
      "jp": "終",
      "rom": "SHIュU / o(waru)",
      "en": "Selesai"
    },
    {
      "jp": "借",
      "rom": "SHIャKU / ka(riru)",
      "en": "Meminjam"
    },
    {
      "jp": "貸",
      "rom": "TAI / ka(su)",
      "en": "Meminjamkan"
    },
    {
      "jp": "待",
      "rom": "TAI / ma(tsu)",
      "en": "Menunggu"
    },
    {
      "jp": "持",
      "rom": "JI / mo(tsu)",
      "en": "Membawa / Memiliki"
    },
    {
      "jp": "住",
      "rom": "JIュU / su(mu)",
      "en": "Tinggal / Menetap"
    },
    {
      "jp": "週",
      "rom": "SHIュU",
      "en": "Minggu"
    }
  ],
  "time_body": [
    {
      "jp": "朝",
      "rom": "CHIョU / asa",
      "en": "Pagi"
    },
    {
      "jp": "昼",
      "rom": "CHIュU / hiru",
      "en": "Siang"
    },
    {
      "jp": "夜",
      "rom": "YA / yoru",
      "en": "Malam"
    },
    {
      "jp": "春",
      "rom": "SHIュN / haru",
      "en": "Musim Semi"
    },
    {
      "jp": "夏",
      "rom": "KA / natsu",
      "en": "Musim Panas"
    },
    {
      "jp": "秋",
      "rom": "SHIュU / aki",
      "en": "Musim Gugur"
    },
    {
      "jp": "冬",
      "rom": "TOU / fuyu",
      "en": "Musim Dingin"
    },
    {
      "jp": "体",
      "rom": "TAI / karada",
      "en": "Tubuh"
    },
    {
      "jp": "心",
      "rom": "SHIN / kokoro",
      "en": "Hati / Jiwa"
    },
    {
      "jp": "首",
      "rom": "SHIュ / kubi",
      "en": "Leher"
    },
    {
      "jp": "声",
      "rom": "SEI / koe",
      "en": "Suara"
    },
    {
      "jp": "自",
      "rom": "JI / SHI / mizuka(ra)",
      "en": "Diri Sendiri"
    },
    {
      "jp": "頭",
      "rom": "TOU / ZU / atama",
      "en": "Kepala"
    },
    {
      "jp": "顔",
      "rom": "GAN / kao",
      "en": "Wajah"
    },
    {
      "jp": "病",
      "rom": "BIョU / ya(mu)",
      "en": "Sakit"
    },
    {
      "jp": "院",
      "rom": "IN",
      "en": "Institusi"
    },
    {
      "jp": "医",
      "rom": "I",
      "en": "Medis / Dokter"
    },
    {
      "jp": "薬",
      "rom": "YAKU / kusuri",
      "en": "Obat"
    },
    {
      "jp": "度",
      "rom": "DO / TAKU / ta(bi)",
      "en": "Derajat / Kali"
    },
    {
      "jp": "力",
      "rom": "RIョKU / RIKI / chikara",
      "en": "Kekuatan"
    }
  ],
  "society_business": [
    {
      "jp": "民",
      "rom": "MIN / tami",
      "en": "Rakyat / Warga"
    },
    {
      "jp": "作",
      "rom": "SAKU / SA / tsuku(ru)",
      "en": "Membuat"
    },
    {
      "jp": "仕",
      "rom": "SHI / tsuka(eru)",
      "en": "Melayani"
    },
    {
      "jp": "事",
      "rom": "JI / koto",
      "en": "Hal / Tugas"
    },
    {
      "jp": "品",
      "rom": "HIN / shina",
      "en": "Barang"
    },
    {
      "jp": "業",
      "rom": "GIョU / waza",
      "en": "Industri"
    },
    {
      "jp": "長",
      "rom": "CHIョU / naga(i)",
      "en": "Panjang / Kepala"
    },
    {
      "jp": "強",
      "rom": "KIョU / tsuyo(i)",
      "en": "Kuat"
    },
    {
      "jp": "新",
      "rom": "SHIN / atara(shii)",
      "en": "Baru"
    },
    {
      "jp": "古",
      "rom": "KO / furu(i)",
      "en": "Lama"
    },
    {
      "jp": "安",
      "rom": "AN / yasu(i)",
      "en": "Murah / Aman"
    },
    {
      "jp": "高",
      "rom": "KOU / taka(i)",
      "en": "Tinggi / Mahal"
    },
    {
      "jp": "同",
      "rom": "DOU / onaji",
      "en": "Sama"
    },
    {
      "jp": "主",
      "rom": "SHIュ / nushi",
      "en": "Pemilik / Utama"
    },
    {
      "jp": "代",
      "rom": "DAI / TAI / ka(waru)",
      "en": "Era / Mengganti"
    },
    {
      "jp": "用",
      "rom": "YOU / mochi(iru)",
      "en": "Menggunakan / Urusan"
    },
    {
      "jp": "理",
      "rom": "RI",
      "en": "Alasan / Kebenaran"
    },
    {
      "jp": "物",
      "rom": "BUTSU / MOTSU / mono",
      "en": "Benda"
    },
    {
      "jp": "特",
      "rom": "TOKU",
      "en": "Khusus"
    },
    {
      "jp": "売",
      "rom": "BAI / u(ru)",
      "en": "Menjual"
    }
  ],
  "school_action": [
    {
      "jp": "考",
      "rom": "KOU / kanga(eru)",
      "en": "Berpikir"
    },
    {
      "jp": "教",
      "rom": "KIョU / oshi(eru)",
      "en": "Mengajar"
    },
    {
      "jp": "室",
      "rom": "SHITSU / muro",
      "en": "Ruangan"
    },
    {
      "jp": "文",
      "rom": "BUN / MON / fumi",
      "en": "Kalimat"
    },
    {
      "jp": "字",
      "rom": "JI / aza",
      "en": "Huruf"
    },
    {
      "jp": "音",
      "rom": "ON / oto",
      "en": "Bunyi"
    },
    {
      "jp": "楽",
      "rom": "GAKU / RAKU / tano(shii)",
      "en": "Senang / Musik"
    },
    {
      "jp": "林",
      "rom": "RIN / hayashi",
      "en": "Hutan Kecil"
    },
    {
      "jp": "森",
      "rom": "SHIN / mori",
      "en": "Hutan Lebat"
    },
    {
      "jp": "親",
      "rom": "SHIN / oya / shita(shii)",
      "en": "Orang Tua / Dekat"
    },
    {
      "jp": "少",
      "rom": "SHIョU / suku(nai) / suko(shi)",
      "en": "Sedikit"
    },
    {
      "jp": "多",
      "rom": "TA / oo(i)",
      "en": "Banyak"
    },
    {
      "jp": "近",
      "rom": "KIN / chika(i)",
      "en": "Dekat"
    },
    {
      "jp": "遠",
      "rom": "EN / too(i)",
      "en": "Jauh"
    },
    {
      "jp": "犬",
      "rom": "KEN / inu",
      "en": "Anjing"
    },
    {
      "jp": "牛",
      "rom": "GIュU / ushi",
      "en": "Sapi"
    },
    {
      "jp": "鳥",
      "rom": "CHIョU / tori",
      "en": "Burung"
    },
    {
      "jp": "風",
      "rom": "FUU / kaze",
      "en": "Angin"
    },
    {
      "jp": "台",
      "rom": "DAI / TAI",
      "en": "Landasan / Unit"
    },
    {
      "jp": "世",
      "rom": "SEI / SE / yo",
      "en": "Dunia / Generasi"
    }
  ]
};

const KANJI_N3_DATABASE = {
  "society": [
    {
      "jp": "政",
      "rom": "SEI / matsuri",
      "en": "Politik"
    },
    {
      "jp": "治",
      "rom": "JI / CHI / osa(maru)",
      "en": "Memerintah"
    },
    {
      "jp": "経",
      "rom": "KEI / he(ru)",
      "en": "Ekonomi / Lewat"
    },
    {
      "jp": "済",
      "rom": "SAI / su(mu)",
      "en": "Selesai"
    },
    {
      "jp": "法",
      "rom": "HOU",
      "en": "Hukum"
    },
    {
      "jp": "律",
      "rom": "RITSU",
      "en": "Aturan"
    },
    {
      "jp": "際",
      "rom": "SAI / kiwa",
      "en": "Batas / Internasional"
    },
    {
      "jp": "関",
      "rom": "KAN / seki",
      "en": "Hubungan"
    },
    {
      "jp": "係",
      "rom": "KEI / kaka(ri)",
      "en": "Penanggung Jawab"
    },
    {
      "jp": "義",
      "rom": "GI",
      "en": "Keadilan / Makna"
    },
    {
      "jp": "議",
      "rom": "GI",
      "en": "Diskusi / Parlemen"
    },
    {
      "jp": "党",
      "rom": "TOU",
      "en": "Partai Politik"
    },
    {
      "jp": "都",
      "rom": "TO / TSU / miyako",
      "en": "Metropolis / Kota"
    },
    {
      "jp": "府",
      "rom": "FU",
      "en": "Prefektur Kotamadya"
    },
    {
      "jp": "県",
      "rom": "KEN",
      "en": "Prefektur Provinsi"
    },
    {
      "jp": "区",
      "rom": "KU",
      "en": "Distrik / Wilayah"
    },
    {
      "jp": "諸",
      "rom": "SHIョ",
      "en": "Berbagai / Banyak"
    },
    {
      "jp": "権",
      "rom": "KEN / GON",
      "en": "Kekuasaan / Hak"
    },
    {
      "jp": "財",
      "rom": "ZAI / SAI",
      "en": "Harta / Kekayaan"
    },
    {
      "jp": "障",
      "rom": "SHIョU / sawa(ru)",
      "en": "Rintangan / Hambatan"
    }
  ],
  "business_science": [
    {
      "jp": "研",
      "rom": "KEN / to(gu)",
      "en": "Meneliti"
    },
    {
      "jp": "究",
      "rom": "KIュU / kiwa(meru)",
      "en": "Menyelidiki"
    },
    {
      "jp": "科",
      "rom": "KA",
      "en": "Sains / Bidang"
    },
    {
      "jp": "数",
      "rom": "SUU / kazu",
      "en": "Angka"
    },
    {
      "jp": "算",
      "rom": "SAN",
      "en": "Berhitung"
    },
    {
      "jp": "組",
      "rom": "SO / kumi",
      "en": "Kelompok / Kelas"
    },
    {
      "jp": "設",
      "rom": "SETSU / mou(keru)",
      "en": "Mendirikan"
    },
    {
      "jp": "建",
      "rom": "KEN / ta(teru)",
      "en": "Membangun"
    },
    {
      "jp": "築",
      "rom": "CHIKU / kizu(ku)",
      "en": "Konstruksi"
    },
    {
      "jp": "造",
      "rom": "ZOU / tsuku(ru)",
      "en": "Membuat"
    },
    {
      "jp": "術",
      "rom": "JIュTSU / sube",
      "en": "Teknik / Seni"
    },
    {
      "jp": "技",
      "rom": "GI / waza",
      "en": "Keterampilan"
    },
    {
      "jp": "複",
      "rom": "FUKU",
      "en": "Ganda / Kompleks"
    },
    {
      "jp": "冊",
      "rom": "SATSU / SAKU",
      "en": "Counter Buku / Jilid"
    },
    {
      "jp": "製",
      "rom": "SEI",
      "en": "Buatan / Pabrik"
    },
    {
      "jp": "輸",
      "rom": "YU",
      "en": "Mengangkut / Kirim"
    },
    {
      "jp": "貿",
      "rom": "ボU",
      "en": "Perdagangan"
    },
    {
      "jp": "易",
      "rom": "EKI / I / yasa(shii)",
      "en": "Mudah / Barter"
    },
    {
      "jp": "企",
      "rom": "KI / kuwada(teru)",
      "en": "Merencanakan"
    },
    {
      "jp": "創",
      "rom": "SOU / haji(meru)",
      "en": "Menciptakan"
    }
  ],
  "mind_emotion": [
    {
      "jp": "想",
      "rom": "SOU / omo(u)",
      "en": "Ide / Pikiran"
    },
    {
      "jp": "念",
      "rom": "NEN",
      "en": "Perasaan"
    },
    {
      "jp": "感",
      "rom": "KAN",
      "en": "Indra / Perasaan"
    },
    {
      "jp": "情",
      "rom": "JIョU / nasa(ke)",
      "en": "Emosi"
    },
    {
      "jp": "信",
      "rom": "SHIN",
      "en": "Percaya"
    },
    {
      "jp": "愛",
      "rom": "AI",
      "en": "Cinta"
    },
    {
      "jp": "悲",
      "rom": "HI / kana(shii)",
      "en": "Sedih"
    },
    {
      "jp": "怒",
      "rom": "DO / oko(ru)",
      "en": "Marah"
    },
    {
      "jp": "望",
      "rom": "ボU / nozo(mu)",
      "en": "Berharap"
    },
    {
      "jp": "欲",
      "rom": "YOKU / ho(shii)",
      "en": "Ingin / Hasrat"
    },
    {
      "jp": "願",
      "rom": "GAN / nega(u)",
      "en": "Memohon"
    },
    {
      "jp": "恐",
      "rom": "KIョU / kowa(i) / oso(reru)",
      "en": "Takut / Ngeri"
    },
    {
      "jp": "悩",
      "rom": "NOU / naya(mu)",
      "en": "Khawatir / Cemas"
    },
    {
      "jp": "憎",
      "rom": "ZOU / niku(mu)",
      "en": "Benci"
    },
    {
      "jp": "恥",
      "rom": "CHI / ha(zukashii)",
      "en": "Malu"
    },
    {
      "jp": "意",
      "rom": "I",
      "en": "Maksud / Pikiran"
    },
    {
      "jp": "志",
      "rom": "SHI / kokorozashi",
      "en": "Kehendak / Aspirasi"
    },
    {
      "jp": "憶",
      "rom": "OKU",
      "en": "Ingat / Memori"
    },
    {
      "jp": "忘",
      "rom": "ボU / wasu(reru)",
      "en": "Lupa"
    },
    {
      "jp": "恋",
      "rom": "REN / koi",
      "en": "Cinta / Asmara"
    }
  ],
  "action_state": [
    {
      "jp": "選",
      "rom": "SEN / era(bu)",
      "en": "Memilih"
    },
    {
      "jp": "決",
      "rom": "KETSU / ki(meru)",
      "en": "Memutuskan"
    },
    {
      "jp": "認",
      "rom": "NIN / mito(meru)",
      "en": "Mengakui"
    },
    {
      "jp": "表",
      "rom": "HIョU / omote",
      "en": "Tabel / Ungkapan"
    },
    {
      "jp": "現",
      "rom": "GEN / arawa(reru)",
      "en": "Muncul / Nyata"
    },
    {
      "jp": "調",
      "rom": "CHIョU / shira(beru)",
      "en": "Meneliti / Nada"
    },
    {
      "jp": "査",
      "rom": "SA",
      "en": "Memeriksa"
    },
    {
      "jp": "確",
      "rom": "KA防 / tashi(ka)",
      "en": "Pasti / Yakin"
    },
    {
      "jp": "果",
      "rom": "KA / ha(teru)",
      "en": "Hasil / Buah"
    },
    {
      "jp": "連",
      "rom": "REN / tsu(reru)",
      "en": "Menghubungkan"
    },
    {
      "jp": "絡",
      "rom": "RAKU / kara(mu)",
      "en": "Keterikatan"
    },
    {
      "jp": "戦",
      "rom": "SEN / tataka(u)",
      "en": "Perang / Tarung"
    },
    {
      "jp": "争",
      "rom": "SOU / araso(u)",
      "en": "Berjuang / Rebut"
    },
    {
      "jp": "幸",
      "rom": "KOU / shiawa(se)",
      "en": "Bahagia"
    },
    {
      "jp": "福",
      "rom": "FUKU",
      "en": "Keberuntungan"
    },
    {
      "jp": "難",
      "rom": "NAN / muzuka(shii)",
      "en": "Sulit / Bencana"
    },
    {
      "jp": "若",
      "rom": "JIャKU / waka(i)",
      "en": "Muda"
    },
    {
      "jp": "老",
      "rom": "ROU / o(iru)",
      "en": "Tua / Lansia"
    },
    {
      "jp": "忙",
      "rom": "ボU / isoga(shii)",
      "en": "Sibuk"
    },
    {
      "jp": "降",
      "rom": "KOU / o(riru) / fu(ru)",
      "en": "Turun"
    }
  ]
};

// ── COMPONENT VIEW ──────────────────────────────────────────────────────────
export function WritingView(container) {
  renderTopbar('❖ Latihan Menulis', false, '#/');
  renderBackBtn(container, '#/', 'Dashboard');

  // Application session states
  let activeTab = 'hiragana'; // 'hiragana' | 'katakana' | 'kanji' | 'kanji-n4' | 'kanji-n3'
  let sessionQueue = []; // Queue of active characters in the session
  let currentIndex = 0;
  let isDrawing = false;
  let canvas = null;
  let ctx = null;
  let lastX = 0;
  let lastY = 0;
  let lastMidX = 0;
  let lastMidY = 0;
  let currentWidth = 8;
  let lastTime = 0;
  let undoStack = []; // Stack for canvas snapshots to support Undo
  let brushSizePreset = 'medium'; // 'thin' | 'medium' | 'thick' brush size selector
  let brushColorPreset = 'default'; // 'default' | 'vermilion' | 'indigo' | 'bamboo' brush ink color selector

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
          Latih Semua Kanji N5 (80 Huruf)
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
          Latih Semua Kanji N4 (80 Huruf)
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
          Latih Semua Kanji N3 (80 Huruf)
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
      <div class="writing-practice-container fade-in">
        
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

        <!-- Dynamic Brush Settings Control Panel -->
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 12px; margin-bottom: 16px; background: var(--bg-hover); padding: 10px 14px; border-radius: var(--radius-md); border: 1px solid var(--border); align-items: center;">
          <!-- Brush Size Segment -->
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <span style="font-size: var(--text-2xs); font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">Ukuran Kuas</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <button id="btn-brush-thin" class="brush-size-btn" title="Tipis" style="width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid ${brushSizePreset === 'thin' ? 'var(--accent)' : 'var(--border)'}; background: ${brushSizePreset === 'thin' ? 'var(--accent-dim)' : 'transparent'}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;">
                <div style="width: 3px; height: 3px; border-radius: 50%; background: ${brushSizePreset === 'thin' ? 'var(--accent-bright)' : 'var(--text-main)'};"></div>
              </button>
              
              <button id="btn-brush-medium" class="brush-size-btn" title="Sedang" style="width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid ${brushSizePreset === 'medium' ? 'var(--accent)' : 'var(--border)'}; background: ${brushSizePreset === 'medium' ? 'var(--accent-dim)' : 'transparent'}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;">
                <div style="width: 7px; height: 7px; border-radius: 50%; background: ${brushSizePreset === 'medium' ? 'var(--accent-bright)' : 'var(--text-main)'};"></div>
              </button>
              
              <button id="btn-brush-thick" class="brush-size-btn" title="Tebal" style="width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid ${brushSizePreset === 'thick' ? 'var(--accent)' : 'var(--border)'}; background: ${brushSizePreset === 'thick' ? 'var(--accent-dim)' : 'transparent'}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background: ${brushSizePreset === 'thick' ? 'var(--accent-bright)' : 'var(--text-main)'};"></div>
              </button>
            </div>
          </div>
          
          <!-- Ink Color Segment -->
          <div style="display: flex; flex-direction: column; gap: 6px; border-left: 1px solid var(--border); padding-left: 12px;">
            <span style="font-size: var(--text-2xs); font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">Warna Tinta</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <!-- Theme Default (Monochrome Split Circle) -->
              <button id="btn-color-default" class="brush-color-btn" title="Default" style="width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid ${brushColorPreset === 'default' ? 'var(--accent)' : 'var(--border)'}; background: ${brushColorPreset === 'default' ? 'var(--accent-dim)' : 'transparent'}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background: linear-gradient(135deg, var(--text-main) 50%, var(--bg-hover) 50%); border: 1px solid var(--border-bright);"></div>
              </button>
              <!-- Vermilion Red -->
              <button id="btn-color-vermilion" class="brush-color-btn" title="Shu (Merah)" style="width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid ${brushColorPreset === 'vermilion' ? 'var(--accent)' : 'var(--border)'}; background: ${brushColorPreset === 'vermilion' ? 'var(--accent-dim)' : 'transparent'}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--red);"></div>
              </button>
              <!-- Indigo Blue -->
              <button id="btn-color-indigo" class="brush-color-btn" title="Ai (Biru)" style="width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid ${brushColorPreset === 'indigo' ? 'var(--accent)' : 'var(--border)'}; background: ${brushColorPreset === 'indigo' ? 'var(--accent-dim)' : 'transparent'}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--blue);"></div>
              </button>
              <!-- Bamboo Green -->
              <button id="btn-color-bamboo" class="brush-color-btn" title="Take (Hijau)" style="width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid ${brushColorPreset === 'bamboo' ? 'var(--accent)' : 'var(--border)'}; background: ${brushColorPreset === 'bamboo' ? 'var(--accent-dim)' : 'transparent'}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;">
                <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--green);"></div>
              </button>
            </div>
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

    // ── BRUSH SIZE & COLOR PICKER CONTROLLERS ─────────────────────────────────
    
    // Size picker logic
    const selectBrushSize = (preset) => {
      brushSizePreset = preset;
      
      document.querySelectorAll('.brush-size-btn').forEach(btn => {
        btn.style.borderColor = 'var(--border)';
        btn.style.background = 'transparent';
        const inner = btn.querySelector('div');
        if (inner) inner.style.background = 'var(--text-main)';
      });
      
      const activeBtn = document.getElementById(`btn-brush-${preset}`);
      if (activeBtn) {
        activeBtn.style.borderColor = 'var(--accent)';
        activeBtn.style.background = 'var(--accent-dim)';
        const inner = activeBtn.querySelector('div');
        if (inner) inner.style.background = 'var(--accent-bright)';
      }
    };

    document.getElementById('btn-brush-thin').addEventListener('click', () => selectBrushSize('thin'));
    document.getElementById('btn-brush-medium').addEventListener('click', () => selectBrushSize('medium'));
    document.getElementById('btn-brush-thick').addEventListener('click', () => selectBrushSize('thick'));

    // Color picker logic
    const selectBrushColor = (preset) => {
      brushColorPreset = preset;
      
      document.querySelectorAll('.brush-color-btn').forEach(btn => {
        btn.style.borderColor = 'var(--border)';
        btn.style.background = 'transparent';
      });
      
      const activeBtn = document.getElementById(`btn-color-${preset}`);
      if (activeBtn) {
        activeBtn.style.borderColor = 'var(--accent)';
        activeBtn.style.background = 'var(--accent-dim)';
      }
    };

    document.getElementById('btn-color-default').addEventListener('click', () => selectBrushColor('default'));
    document.getElementById('btn-color-vermilion').addEventListener('click', () => selectBrushColor('vermilion'));
    document.getElementById('btn-color-indigo').addEventListener('click', () => selectBrushColor('indigo'));
    document.getElementById('btn-color-bamboo').addEventListener('click', () => selectBrushColor('bamboo'));

    // Bind Back Menu Click
    document.getElementById('btn-back-menu').addEventListener('click', () => {
      sessionQueue = [];
      currentIndex = 0;
      undoStack = [];
      renderLayout();
    });
  };

  const renderControls = () => {
    const controls = container.querySelector('#writing-controls');
    if (!controls) return;

    if (!isComparing) {
      controls.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
          <button id="btn-clear-canvas" class="btn btn-secondary btn-lg" style="height: 48px; font-weight: 700; padding: 0 4px; font-size: var(--text-xs); display: flex; align-items: center; justify-content: center; gap: 4px;">
            <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i> Hapus
          </button>
          
          <button id="btn-undo-canvas" class="btn btn-secondary btn-lg" style="height: 48px; font-weight: 700; padding: 0 4px; font-size: var(--text-xs); display: flex; align-items: center; justify-content: center; gap: 4px;" ${undoStack.length === 0 ? 'disabled' : ''}>
            <i data-lucide="undo" style="width: 14px; height: 14px;"></i> Urung
          </button>
          
          <button id="btn-toggle-hint" class="btn btn-secondary btn-lg" style="height: 48px; font-weight: 700; padding: 0 4px; font-size: var(--text-xs); display: flex; align-items: center; justify-content: center; gap: 4px; background: ${showGuide ? 'var(--accent-dim)' : 'transparent'}; border-color: ${showGuide ? 'var(--accent)' : 'var(--border)'}; color: ${showGuide ? 'var(--accent-bright)' : 'var(--text-main)'};">
            <i data-lucide="${showGuide ? 'eye-off' : 'eye'}" style="width: 14px; height: 14px;"></i> Petunjuk
          </button>
        </div>

        <button id="btn-compare-canvas" class="btn btn-primary btn-lg" style="height: 52px; font-weight: 800; width: 100%; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px;">
          <i data-lucide="columns" style="width: 18px; height: 18px;"></i> Bandingkan Coretan
        </button>
      `;

      if (window.lucide) lucide.createIcons({ root: controls });

      // Bind drawing view actions
      document.getElementById('btn-clear-canvas').addEventListener('click', clearCanvas);
      
      document.getElementById('btn-undo-canvas').addEventListener('click', () => {
        if (undoStack.length === 0) return;
        const previousState = undoStack.pop();
        if (canvas && ctx && previousState) {
          ctx.putImageData(previousState, 0, 0);
        }
        // Update Undo button state dynamically
        const undoBtn = document.getElementById('btn-undo-canvas');
        if (undoBtn && undoStack.length === 0) {
          undoBtn.setAttribute('disabled', 'true');
        }
      });
      
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

      // Retry handler: resets drawing state for the current character to allow immediate retry
      document.getElementById('btn-practice-retry').addEventListener('click', () => {
        isComparing = false;
        showGuide = false;
        undoStack = []; // Reset undo stack for the retried target
        clearCanvas();
        renderPracticeScreen();
      });

      // Correct handler: steps index forward
      document.getElementById('btn-practice-correct').addEventListener('click', () => {
        currentIndex++;
        isComparing = false;
        showGuide = false;
        undoStack = []; // Reset undo stack for the next character
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
        
        <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 8px;">Latihan Selesai!</h2>
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
      undoStack = [];
      renderLayout();
    });
  };

  // ── HTML5 CANVAS INTERACTIVE DRAWING SYSTEM ────────────────────────────────
  
  const setupCanvasDrawing = () => {
    canvas = document.getElementById('writing-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. HIGH-DPI RESOLUTION SUPPORT (Retina / Ultra-Sharp Line rendering)
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Scale backing store physically, keep style layout matching container
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Reset transform to identity, then scale
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // Ink color solver that reads current CSS variables dynamically
    const getThemeColor = () => {
      return getComputedStyle(document.documentElement).getPropertyValue('--text-main').trim() || '#ffffff';
    };

    // Dynamic ink color solver based on chosen color preset
    const getActiveColor = () => {
      if (brushColorPreset === 'vermilion') return '#d84315';
      if (brushColorPreset === 'indigo') return '#1565c0';
      if (brushColorPreset === 'bamboo') return '#2e7d32';
      return getThemeColor();
    };

    // Relative mouse/finger coordinate solver (Viewport to canvas matrix)
    const getCoords = (e) => {
      const rect = canvas.getBoundingClientRect();
      let clientX, clientY;
      
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e.clientX !== undefined) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return [0, 0];
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      return [x, y];
    };

    const startDrawing = (e) => {
      if (isComparing) return; // Prevent writing during active overlay review
      isDrawing = true;
      
      // Save snapshot for Undo functionality before drawing
      undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
      if (undoStack.length > 25) undoStack.shift();
      const undoBtn = document.getElementById('btn-undo-canvas');
      if (undoBtn) undoBtn.removeAttribute('disabled');

      const [x, y] = getCoords(e);
      lastX = x;
      lastY = y;
      lastMidX = x;
      lastMidY = y;
      
      // Reset width and time
      currentWidth = brushSizePreset === 'thin' ? 4 : brushSizePreset === 'thick' ? 12 : 8;
      lastTime = performance.now();

      const activeColor = getActiveColor();
      ctx.fillStyle = activeColor;
      ctx.strokeStyle = activeColor;
      
      // Draw smooth calligraphic starting dot
      ctx.beginPath();
      ctx.arc(x, y, currentWidth / 2, 0, Math.PI * 2);
      ctx.fill();
    };

    // SMOOTH PATH INTERPOLATION (Bezier Quadratic Curve smoothing + LERP brush width + Velocity/Pressure Dynamics)
    const draw = (e) => {
      if (!isDrawing || isComparing) return;
      e.preventDefault(); // Stop mobile screen scrolling gestures while writing
      
      const [x, y] = getCoords(e);
      
      // Calculate velocity & target width
      const dist = Math.hypot(x - lastX, y - lastY);
      const now = performance.now();
      const timeDiff = now - lastTime || 16;
      const velocity = dist / timeDiff;
      lastTime = now;

      let targetWidth;
      // Utilize stylus pressure sensitivity if available
      if (e.pressure && e.pressure > 0 && e.pressure !== 0.5 && e.pointerType !== 'mouse') {
        if (brushSizePreset === 'thin') {
          targetWidth = 2 + e.pressure * 6; // Thin stylus: 2px to 8px
        } else if (brushSizePreset === 'thick') {
          targetWidth = 6 + e.pressure * 16; // Thick stylus: 6px to 22px
        } else {
          targetWidth = 4 + e.pressure * 10; // Medium stylus: 4px to 14px
        }
      } else {
        // Slower movement = thicker calligraphic ink line, faster movement = thinner tapered line
        const speedFactor = Math.min(2.5, velocity); // clamp speed factor
        if (brushSizePreset === 'thin') {
          targetWidth = 8 - speedFactor * 2.2; // Thin finger/mouse: 2.5px to 8px
        } else if (brushSizePreset === 'thick') {
          targetWidth = 18 - speedFactor * 4.8; // Thick finger/mouse: 6px to 18px
        } else {
          targetWidth = 12 - speedFactor * 3.2; // Medium finger/mouse: 4px to 12px
        }
      }

      // Smooth the brush width transition using LERP (Low-pass filter)
      currentWidth = currentWidth + (targetWidth - currentWidth) * 0.25;

      const midX = (lastX + x) / 2;
      const midY = (lastY + y) / 2;

      const activeColor = getActiveColor();
      ctx.strokeStyle = activeColor;
      ctx.fillStyle = activeColor;
      
      // Slight organic calligraphic glow for natural calligraphic brush aesthetics
      ctx.shadowBlur = 0.8;
      ctx.shadowColor = activeColor;

      ctx.beginPath();
      ctx.moveTo(lastMidX, lastMidY);
      ctx.quadraticCurveTo(lastX, lastY, midX, midY);
      
      ctx.lineWidth = currentWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      lastX = x;
      lastY = y;
      lastMidX = midX;
      lastMidY = midY;
    };

    const stopDrawing = () => {
      if (!isDrawing) return;
      isDrawing = false;
      
      // Finish the final segment to the release point
      if (ctx && (lastMidX !== lastX || lastMidY !== lastY)) {
        const activeColor = getActiveColor();
        ctx.strokeStyle = activeColor;
        ctx.fillStyle = activeColor;
        ctx.shadowBlur = 0.8;
        ctx.shadowColor = activeColor;

        ctx.beginPath();
        ctx.moveTo(lastMidX, lastMidY);
        ctx.lineTo(lastX, lastY);
        ctx.lineWidth = currentWidth;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      ctx.beginPath();
    };

    // Unified Modern Pointer Events with full robust fallback compatibility
    if (window.PointerEvent) {
      canvas.addEventListener('pointerdown', startDrawing);
      canvas.addEventListener('pointermove', draw);
      canvas.addEventListener('pointerup', stopDrawing);
      canvas.addEventListener('pointercancel', stopDrawing);
      canvas.addEventListener('pointerleave', stopDrawing);
    } else {
      // Mouse events fallback
      canvas.addEventListener('mousedown', startDrawing);
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', stopDrawing);
      canvas.addEventListener('mouseleave', stopDrawing);

      // Touch events fallback
      canvas.addEventListener('touchstart', startDrawing, { passive: false });
      canvas.addEventListener('touchmove', draw, { passive: false });
      canvas.addEventListener('touchend', stopDrawing);
    }
  };

  const clearCanvas = () => {
    if (!canvas || !ctx) return;
    
    // Save state before clearing, so clear can be undone!
    undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    if (undoStack.length > 25) undoStack.shift();
    const undoBtn = document.getElementById('btn-undo-canvas');
    if (undoBtn) undoBtn.removeAttribute('disabled');

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  };

  // ── MOUNT ENTRY POINT ──────────────────────────────────────────────────────
  renderLayout();
}
