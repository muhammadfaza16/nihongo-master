import { renderTopbar } from '../components/layout.js';

// ── 80 N5 KANJI COMPLETE DATABASE ────────────────────────────────────────────
const KANJI_N5_LIBRARY = {
  "numbers_time": [
    {
      "jp": "一",
      "meaning": "Satu",
      "on": "イチ、イツ",
      "kun": "ひと(つ)",
      "example": "一月 (ichigatsu) = Januari"
    },
    {
      "jp": "二",
      "meaning": "Dua",
      "on": "ニ",
      "kun": "ふta(tsu)",
      "example": "二年生 (ninensei) = Siswa tahun ke-2"
    },
    {
      "jp": "三",
      "meaning": "Tiga",
      "on": "サン",
      "kun": "みっ(tsu)",
      "example": "三角 (sankaku) = Segitiga"
    },
    {
      "jp": "四",
      "meaning": "Empat",
      "on": "シ",
      "kun": "よっ(tsu)、よ",
      "example": "四月 (shigatsu) = April"
    },
    {
      "jp": "五",
      "meaning": "Lima",
      "on": "ゴ",
      "kun": "いつ(tsu)",
      "example": "五十 (gojuu) = Lima puluh"
    },
    {
      "jp": "六",
      "meaning": "Enam",
      "on": "ロク",
      "kun": "むっ(tsu)",
      "example": "六月 (rokugatsu) = Juni"
    },
    {
      "jp": "七",
      "meaning": "Tujuh",
      "on": "シチ",
      "kun": "なな(tsu)",
      "example": "七夕 (tanabata) = Festival bintang"
    },
    {
      "jp": "八",
      "meaning": "Delapan",
      "on": "ハチ",
      "kun": "やっ(tsu)",
      "example": "八月 (hachigatsu) = Agustus"
    },
    {
      "jp": "九",
      "meaning": "Sembilan",
      "on": "ク、キュウ",
      "kun": "ここの(tsu)",
      "example": "九月 (kugatsu) = September"
    },
    {
      "jp": "十",
      "meaning": "Sepuluh",
      "on": "ジュウ",
      "kun": "とお",
      "example": "十分 (juppun) = Sepuluh menit"
    },
    {
      "jp": "百",
      "meaning": "Seratus",
      "on": "ヒャク",
      "kun": "—",
      "example": "三百 (sanbyaku) = Tiga ratus"
    },
    {
      "jp": "千",
      "meaning": "Seribu",
      "on": "セン",
      "kun": "ち",
      "example": "千円 (senen) = Seribu yen"
    },
    {
      "jp": "万",
      "meaning": "Sepuluh Ribu",
      "on": "マン、バン",
      "kun": "—",
      "example": "一万円 (ichiman-en) = 10.000 yen"
    },
    {
      "jp": "円",
      "meaning": "Yen / Lingkaran",
      "on": "エン",
      "kun": "maru(i)",
      "example": "千円 (senen) = Seribu yen"
    },
    {
      "jp": "年",
      "meaning": "Tahun",
      "on": "ネン",
      "kun": "とし",
      "example": "今年 (kotoshi) = Tahun ini"
    },
    {
      "jp": "月",
      "meaning": "Bulan / Rembulan",
      "on": "ゲツ、ガツ",
      "kun": "tsuki",
      "example": "月曜日 (getsuyōbi) = Senin"
    },
    {
      "jp": "日",
      "meaning": "Hari / Matahari",
      "on": "ニチ、ジツ",
      "kun": "hi、ka",
      "example": "日曜日 (nichiyōbi) = Minggu"
    },
    {
      "jp": "時",
      "meaning": "Waktu / Jam",
      "on": "ジ",
      "kun": "とき",
      "example": "三時 (sanji) = Jam tiga"
    },
    {
      "jp": "分",
      "meaning": "Menit / Bagian",
      "on": "フン、プン、ブン",
      "kun": "wa(karu)",
      "example": "五分 (gofun) = Lima menit"
    },
    {
      "jp": "半",
      "meaning": "Setengah",
      "on": "ハン",
      "kun": "naka(ba)",
      "example": "三時半 (sanji-han) = Setengah empat"
    }
  ],
  "nature_places": [
    {
      "jp": "山",
      "meaning": "Gunung",
      "on": "サン",
      "kun": "yama",
      "example": "富士山 (Fujisan) = Gunung Fuji"
    },
    {
      "jp": "川",
      "meaning": "Sungai",
      "on": "セン",
      "kun": "kawa",
      "example": "川口 (Kawaguchi) = Muara sungai"
    },
    {
      "jp": "海",
      "meaning": "Laut",
      "on": "カイ",
      "kun": "umi",
      "example": "海水浴 (kaisuiyoku) = Mandi laut"
    },
    {
      "jp": "空",
      "meaning": "Langit / Kosong",
      "on": "クウ",
      "kun": "sora、a(ku)",
      "example": "空港 (kūkō) = Bandara"
    },
    {
      "jp": "木",
      "meaning": "Pohon / Kayu",
      "on": "モク、ボク",
      "kun": "ki",
      "example": "木曜日 (mokuyōbi) = Kamis"
    },
    {
      "jp": "花",
      "meaning": "Bunga",
      "on": "カ",
      "kun": "hana",
      "example": "花見 (hanami) = Hanami sakura"
    },
    {
      "jp": "雨",
      "meaning": "Hujan",
      "on": "ウ",
      "kun": "ame",
      "example": "大雨 (ōame) = Hujan deras"
    },
    {
      "jp": "火",
      "meaning": "Api",
      "on": "カ",
      "kun": "hi",
      "example": "火曜日 (kayōbi) = Selasa"
    },
    {
      "jp": "水",
      "meaning": "Air",
      "on": "スイ",
      "kun": "mizu",
      "example": "水曜日 (suiyōbi) = Rabu"
    },
    {
      "jp": "土",
      "meaning": "Tanah",
      "on": "ド、ト",
      "kun": "tsuchi",
      "example": "土曜日 (doyōbi) = Sabtu"
    },
    {
      "jp": "金",
      "meaning": "Emas / Uang",
      "on": "キン、コン",
      "kun": "kane、kana",
      "example": "金曜日 (kin'yōbi) = Jumat"
    },
    {
      "jp": "上",
      "meaning": "Atas",
      "on": "ジョウ、ショウ",
      "kun": "ue、a(garu)",
      "example": "上手 (jōzu) = Mahir"
    },
    {
      "jp": "下",
      "meaning": "Bawah",
      "on": "カ、ゲ",
      "kun": "shita、sa(garu)",
      "example": "地下 (chika) = Bawah tanah"
    },
    {
      "jp": "中",
      "meaning": "Tengah / Dalam",
      "on": "チュウ",
      "kun": "naka",
      "example": "中学校 (chūgakkō) = SMP"
    },
    {
      "jp": "外",
      "meaning": "Luar",
      "on": "ガイ、ゲ",
      "kun": "soto",
      "example": "外国 (gaikoku) = Luar negeri"
    },
    {
      "jp": "右",
      "meaning": "Kanan",
      "on": "ウ、ユウ",
      "kun": "migi",
      "example": "右折 (usetsu) = Belok kanan"
    },
    {
      "jp": "左",
      "meaning": "Kiri",
      "on": "サ",
      "kun": "hidari",
      "example": "左折 (sasetsu) = Belok kiri"
    },
    {
      "jp": "前",
      "meaning": "Depan / Sebelum",
      "on": "ゼン",
      "kun": "mae",
      "example": "名前 (namae) = Nama"
    },
    {
      "jp": "後",
      "meaning": "Belakang / Sesudah",
      "on": "ゴ、コウ",
      "kun": "ato、ushi(ro)",
      "example": "午後 (gogo) = Sore/PM"
    },
    {
      "jp": "東",
      "meaning": "Timur",
      "on": "トウ",
      "kun": "higashi",
      "example": "東京 (Tōkyō) = Tokyo"
    }
  ],
  "people_family": [
    {
      "jp": "人",
      "meaning": "Orang",
      "on": "ジン、ニン",
      "kun": "hito",
      "example": "日本人 (Nihonjin) = Orang Jepang"
    },
    {
      "jp": "父",
      "meaning": "Ayah",
      "on": "フ",
      "kun": "chichi、tou",
      "example": "お父さん (otōsan) = Ayah"
    },
    {
      "jp": "母",
      "meaning": "Ibu",
      "on": "ボ",
      "kun": "haha、kaa",
      "example": "お母さん (okāsan) = Ibu"
    },
    {
      "jp": "子",
      "meaning": "Anak",
      "on": "シ、ス",
      "kun": "ko",
      "example": "子供 (kodomo) = Anak-anak"
    },
    {
      "jp": "男",
      "meaning": "Laki-laki",
      "on": "ダン、ナン",
      "kun": "otoko",
      "example": "男の子 (otoko no ko) = Anak laki-laki"
    },
    {
      "jp": "女",
      "meaning": "Perempuan",
      "on": "ジョ、ニョ",
      "kun": "onna",
      "example": "女の子 (onna no ko) = Anak perempuan"
    },
    {
      "jp": "友",
      "meaning": "Teman",
      "on": "ユウ",
      "kun": "tomo",
      "example": "友達 (tomodachi) = Teman"
    },
    {
      "jp": "先",
      "meaning": "Dahulu / Depan",
      "on": "セン",
      "kun": "saki",
      "example": "先生 (sensei) = Guru"
    },
    {
      "jp": "生",
      "meaning": "Lahir / Hidup",
      "on": "セイ、ショウ",
      "kun": "i(kiru)、u(mare)",
      "example": "学生 (gakusei) = Pelajar"
    },
    {
      "jp": "名",
      "meaning": "Nama",
      "on": "メイ、ミョウ",
      "kun": "na",
      "example": "名前 (namae) = Nama"
    },
    {
      "jp": "気",
      "meaning": "Energi / Jiwa",
      "on": "キ、ケ",
      "kun": "—",
      "example": "元気 (genki) = Sehat/Bugar"
    },
    {
      "jp": "元",
      "meaning": "Asal / Sehat",
      "on": "ゲン、ガン",
      "kun": "moto",
      "example": "元気 (genki) = Sehat/Bugar"
    },
    {
      "jp": "西",
      "meaning": "Barat",
      "on": "セイ、サイ",
      "kun": "nishi",
      "example": "関西 (Kansai) = Wilayah Kansai"
    },
    {
      "jp": "南",
      "meaning": "Selatan",
      "on": "ナン",
      "kun": "minami",
      "example": "南口 (minamiguchi) = Pintu selatan"
    },
    {
      "jp": "北",
      "meaning": "Utara",
      "on": "ホク",
      "kun": "kita",
      "example": "北海道 (Hokkaidō) = Hokkaido"
    },
    {
      "jp": "本",
      "meaning": "Buku / Asal",
      "on": "ホン",
      "kun": "moto",
      "example": "日本語 (Nihongo) = Bahasa Jepang"
    },
    {
      "jp": "天",
      "meaning": "Langit / Surga",
      "on": "テン",
      "kun": "ama",
      "example": "天気 (tenki) = Cuaca"
    },
    {
      "jp": "口",
      "meaning": "Mulut",
      "on": "コウ、ク",
      "kun": "kuchi、guchi",
      "example": "出口 (deguchi) = Pintu keluar"
    },
    {
      "jp": "目",
      "meaning": "Mata",
      "on": "モク、ボク",
      "kun": "me",
      "example": "目的 (mokuteki) = Tujuan"
    },
    {
      "jp": "耳",
      "meaning": "Telinga",
      "on": "ジ",
      "kun": "mimi",
      "example": "耳鳴り (miminari) = Telinga berdengung"
    }
  ],
  "places_buildings": [
    {
      "jp": "国",
      "meaning": "Negara",
      "on": "コク、コッ",
      "kun": "kuni",
      "example": "外国人 (gaikokujin) = Orang asing"
    },
    {
      "jp": "店",
      "meaning": "Toko",
      "on": "テン",
      "kun": "mise",
      "example": "書店 (shoten) = Toko buku"
    },
    {
      "jp": "駅",
      "meaning": "Stasiun",
      "on": "エキ",
      "kun": "—",
      "example": "東京駅 (Tōkyō-eki) = Stasiun Tokyo"
    },
    {
      "jp": "電",
      "meaning": "Listrik",
      "on": "デン",
      "kun": "—",
      "example": "電車 (densha) = Kereta listrik"
    },
    {
      "jp": "車",
      "meaning": "Kendaraan / Roda",
      "on": "シャ",
      "kun": "kuruma",
      "example": "自転車 (jitensha) = Sepeda"
    },
    {
      "jp": "道",
      "meaning": "Jalan",
      "on": "ドウ、トウ",
      "kun": "michi",
      "example": "北海道 (Hokkaidō) = Hokkaido"
    },
    {
      "jp": "学",
      "meaning": "Belajar",
      "on": "ガク、ガッ",
      "kun": "mana(bu)",
      "example": "大学 (daigaku) = Universitas"
    },
    {
      "jp": "校",
      "meaning": "Sekolah",
      "on": "コウ",
      "kun": "—",
      "example": "高校 (kōkō) = SMA"
    },
    {
      "jp": "会",
      "meaning": "Pertemuan / Bertemu",
      "on": "カイ、エ",
      "kun": "a(u)",
      "example": "会社 (kaisha) = Perusahaan"
    },
    {
      "jp": "社",
      "meaning": "Perusahaan / Kuil",
      "on": "シャ",
      "kun": "yashiro",
      "example": "会社員 (kaishain) = Karyawan"
    },
    {
      "jp": "入",
      "meaning": "Masuk",
      "on": "ニュウ",
      "kun": "hai(ru)、i(reru)",
      "example": "入口 (iriguchi) = Pintu masuk"
    },
    {
      "jp": "出",
      "meaning": "Keluar",
      "on": "シュツ",
      "kun": "de(ru)、da(su)",
      "example": "出口 (deguchi) = Pintu keluar"
    },
    {
      "jp": "立",
      "meaning": "Berdiri",
      "on": "リツ",
      "kun": "ta(tsu)",
      "example": "起立 (kiritsu) = Berdiri"
    },
    {
      "jp": "休",
      "meaning": "Istirahat",
      "on": "キュウ",
      "kun": "yasu(mu)",
      "example": "休み (yasumi) = Liburan"
    },
    {
      "jp": "買",
      "meaning": "Membeli",
      "on": "バイ",
      "kun": "ka(u)",
      "example": "買い物 (kaimono) = Belanja"
    },
    {
      "jp": "何",
      "meaning": "Apa",
      "on": "カ",
      "kun": "nani、nan",
      "example": "何か (nanika) = Sesuatu"
    },
    {
      "jp": "手",
      "meaning": "Tangan",
      "on": "シュ",
      "kun": "te",
      "example": "歌手 (kashu) = Penyanyi"
    },
    {
      "jp": "足",
      "meaning": "Kaki / Cukup",
      "on": "ソク",
      "kun": "ashi、ta(ru)",
      "example": "遠足 (ensoku) = Piknik/Karyawisata"
    },
    {
      "jp": "白",
      "meaning": "Putih",
      "on": "ハク、ビャク",
      "kun": "shiro(i)",
      "example": "面白い (omoshiroi) = Menarik"
    },
    {
      "jp": "赤",
      "meaning": "Merah",
      "on": "セキ、シャク",
      "kun": "aka(i)",
      "example": "赤ちゃん (akachan) = Bayi"
    }
  ]
};

// ── 80 N4 KANJI COMPLETE DATABASE ────────────────────────────────────────────
const KANJI_N4_LIBRARY = {
  "movement": [
    {
      "jp": "開",
      "meaning": "Membuka",
      "on": "カイ",
      "kun": "a(keru)、ひら(ku)",
      "example": "開会 (kaikai) = Pembukaan rapat"
    },
    {
      "jp": "閉",
      "meaning": "Menutup",
      "on": "ヘイ",
      "kun": "し(meru)、と(じる)",
      "example": "閉会 (heikai) = Penutupan rapat"
    },
    {
      "jp": "帰",
      "meaning": "Pulang",
      "on": "キ",
      "kun": "かえ(ru)",
      "example": "帰国 (kikoku) = Pulang ke tanah air"
    },
    {
      "jp": "歩",
      "meaning": "Berjalan",
      "on": "ホ",
      "kun": "ある(ku)",
      "example": "歩道 (hodou) = Trotoar/Jalan kaki"
    },
    {
      "jp": "走",
      "meaning": "Berlari",
      "on": "ソウ",
      "kun": "はし(ru)",
      "example": "走者 (sousha) = Pelari"
    },
    {
      "jp": "止",
      "meaning": "Berhenti",
      "on": "シ",
      "kun": "to(maru)",
      "example": "中止 (chuushi) = Penghentian/Batal"
    },
    {
      "jp": "曜",
      "meaning": "Hari Seminggu",
      "on": "ヨウ",
      "kun": "—",
      "example": "月曜日 (getsuyōbi) = Hari Senin"
    },
    {
      "jp": "送",
      "meaning": "Mengirim",
      "on": "ソウ",
      "kun": "oku(ru)",
      "example": "送信 (soushin) = Pengiriman pesan"
    },
    {
      "jp": "急",
      "meaning": "Cepat / Tergesa",
      "on": "キュウ",
      "kun": "iso(gu)",
      "example": "急行 (kyuukou) = Kereta cepat"
    },
    {
      "jp": "引",
      "meaning": "Menarik",
      "on": "イン",
      "kun": "hi(ku)",
      "example": "引き出し (hikidashi) = Laci"
    },
    {
      "jp": "押",
      "meaning": "Mendorong",
      "on": "おう",
      "kun": "o(su)",
      "example": "押し入れ (oshiire) = Lemari dinding"
    },
    {
      "jp": "使",
      "meaning": "Menggunakan",
      "on": "シ",
      "kun": "tsuka(u)",
      "example": "使用 (shiyou) = Penggunaan"
    },
    {
      "jp": "始",
      "meaning": "Memulai",
      "on": "シ",
      "kun": "haji(meru)",
      "example": "開始 (kaishi) = Permulaan"
    },
    {
      "jp": "終",
      "meaning": "Selesai",
      "on": "シュウ",
      "kun": "o(waru)",
      "example": "終電 (shuuden) = Kereta terakhir"
    },
    {
      "jp": "借",
      "meaning": "Meminjam",
      "on": "シャク",
      "kun": "ka(riru)",
      "example": "借金 (shakkin) = Utang"
    },
    {
      "jp": "貸",
      "meaning": "Meminjamkan",
      "on": "タイ",
      "kun": "ka(su)",
      "example": "貸し出し (kashidashi) = Peminjaman"
    },
    {
      "jp": "待",
      "meaning": "Menunggu",
      "on": "タイ",
      "kun": "ma(tsu)",
      "example": "待合室 (machiaishitsu) = Ruang tunggu"
    },
    {
      "jp": "持",
      "meaning": "Membawa / Memiliki",
      "on": "ジ",
      "kun": "mo(tsu)",
      "example": "気持ち (kimochi) = Perasaan"
    },
    {
      "jp": "住",
      "meaning": "Tinggal / Menetap",
      "on": "ジュウ",
      "kun": "su(mu)",
      "example": "住所 (juusho) = Alamat"
    },
    {
      "jp": "週",
      "meaning": "Minggu",
      "on": "シュウ",
      "kun": "—",
      "example": "毎週 (maishu) = Setiap minggu"
    }
  ],
  "time_body": [
    {
      "jp": "朝",
      "meaning": "Pagi",
      "on": "チョウ",
      "kun": "asa",
      "example": "朝食 (choushoku) = Makan pagi"
    },
    {
      "jp": "昼",
      "meaning": "Siang",
      "on": "チュウ",
      "kun": "hiru",
      "example": "昼食 (chuushoku) = Makan siang"
    },
    {
      "jp": "夜",
      "meaning": "Malam",
      "on": "ヤ",
      "kun": "yoru",
      "example": "夜食 (yashoku) = Camilan malam"
    },
    {
      "jp": "春",
      "meaning": "Musim Semi",
      "on": "シュン",
      "kun": "haru",
      "example": "春休み (haruyasumi) = Libur musim semi"
    },
    {
      "jp": "夏",
      "meaning": "Musim Panas",
      "on": "カ",
      "kun": "natsu",
      "example": "夏休み (natsuyasumi) = Libur musim panas"
    },
    {
      "jp": "秋",
      "meaning": "Musim Gugur",
      "on": "シュウ",
      "kun": "aki",
      "example": "秋分 (shuubun) = Ekuinoks musim gugur"
    },
    {
      "jp": "冬",
      "meaning": "Musim Dingin",
      "on": "トウ",
      "kun": "fuyu",
      "example": "冬休み (fuyuyasumi) = Libur musim dingin"
    },
    {
      "jp": "体",
      "meaning": "Tubuh",
      "on": "タイ",
      "kun": "karada",
      "example": "体力 (tairyoku) = Kekuatan fisik"
    },
    {
      "jp": "心",
      "meaning": "Hati / Jiwa",
      "on": "シン",
      "kun": "kokoro",
      "example": "安心 (anshin) = Lega/Tenang"
    },
    {
      "jp": "首",
      "meaning": "Leher",
      "on": "シュ",
      "kun": "kubi",
      "example": "首都 (shuto) = Ibu kota"
    },
    {
      "jp": "声",
      "meaning": "Suara",
      "on": "セイ",
      "kun": "koe",
      "example": "発声 (hassei) = Vokalisasi/Ucap"
    },
    {
      "jp": "自",
      "meaning": "Diri Sendiri",
      "on": "ジ、シ",
      "kun": "mizuka(ra)",
      "example": "自転車 (jitensha) = Sepeda"
    },
    {
      "jp": "頭",
      "meaning": "Kepala",
      "on": "トウ、ズ",
      "kun": "atama",
      "example": "頭痛 (zutsuu) = Sakit kepala"
    },
    {
      "jp": "顔",
      "meaning": "Wajah",
      "on": "ガン",
      "kun": "kao",
      "example": "笑顔 (egao) = Wajah tersenyum"
    },
    {
      "jp": "病",
      "meaning": "Sakit",
      "on": "ビョウ",
      "kun": "ya(mu)",
      "example": "病院 (byouin) = Rumah sakit"
    },
    {
      "jp": "院",
      "meaning": "Institusi",
      "on": "イン",
      "kun": "—",
      "example": "入院 (nyūin) = Masuk rumah sakit"
    },
    {
      "jp": "医",
      "meaning": "Medis / Dokter",
      "on": "イ",
      "kun": "—",
      "example": "医者 (isha) = Dokter"
    },
    {
      "jp": "薬",
      "meaning": "Obat",
      "on": "ヤク",
      "kun": "kusuri",
      "example": "薬局 (yakkyoku) = Apotek"
    },
    {
      "jp": "度",
      "meaning": "Derajat / Kali",
      "on": "ド、タク",
      "kun": "ta(bi)",
      "example": "一度 (ichido) = Satu kali"
    },
    {
      "jp": "力",
      "meaning": "Kekuatan",
      "on": "リョク、リキ",
      "kun": "chikara",
      "example": "協力 (kyouryoku) = Kerja sama"
    }
  ],
  "society_business": [
    {
      "jp": "民",
      "meaning": "Rakyat / Warga",
      "on": "ミン",
      "kun": "tami",
      "example": "市民 (shimin) = Warga kota"
    },
    {
      "jp": "作",
      "meaning": "Membuat",
      "on": "サク、サ",
      "kun": "つく(ru)",
      "example": "作文 (sakubun) = Karangan/Esai"
    },
    {
      "jp": "仕",
      "meaning": "Melayani",
      "on": "シ",
      "kun": "tsuka(eru)",
      "example": "仕事 (shigoto) = Pekerjaan"
    },
    {
      "jp": "事",
      "meaning": "Hal / Tugas",
      "on": "ジ",
      "kun": "koto",
      "example": "事故 (jiko) = Kecelakaan"
    },
    {
      "jp": "品",
      "meaning": "Barang",
      "on": "ヒン",
      "kun": "shina",
      "example": "作品 (sakuhin) = Karya seni"
    },
    {
      "jp": "業",
      "meaning": "Industri",
      "on": "ギョウ",
      "kun": "waza",
      "example": "授業 (jugyou) = Pelajaran di kelas"
    },
    {
      "jp": "長",
      "meaning": "Panjang / Kepala",
      "on": "チョウ",
      "kun": "naga(i)",
      "example": "社長 (shachou) = Direktur utama"
    },
    {
      "jp": "强",
      "meaning": "Kuat",
      "on": "キョウ",
      "kun": "tsuyo(i)",
      "example": "勉強 (benkyou) = Belajar"
    },
    {
      "jp": "新",
      "meaning": "Baru",
      "on": "シン",
      "kun": "atara(shii)",
      "example": "新聞 (shinbun) = Koran/Surat kabar"
    },
    {
      "jp": "古",
      "meaning": "Lama",
      "on": "コ",
      "kun": "furu(i)",
      "example": "中古 (chuuko) = Barang bekas"
    },
    {
      "jp": "安",
      "meaning": "Murah / Aman",
      "on": "アン",
      "kun": "yasu(i)",
      "example": "安全 (anzen) = Aman/Keselamatan"
    },
    {
      "jp": "高",
      "meaning": "Tinggi / Mahal",
      "on": "コウ",
      "kun": "taka(i)",
      "example": "高校 (kōkō) = SMA"
    },
    {
      "jp": "同",
      "meaning": "Sama",
      "on": "ドウ",
      "kun": "onaji",
      "example": "同時に (doujini) = Sekaligus/Bersamaan"
    },
    {
      "jp": "主",
      "meaning": "Pemilik / Utama",
      "on": "シュ",
      "kun": "nushi",
      "example": "主人 (shujin) = Suami/Tuan"
    },
    {
      "jp": "代",
      "meaning": "Era / Mengganti",
      "on": "ダイ、タイ",
      "kun": "ka(waru)",
      "example": "時代 (jidai) = Era/Zaman"
    },
    {
      "jp": "用",
      "meaning": "Menggunakan / Urusan",
      "on": "ヨウ",
      "kun": "mochi(iru)",
      "example": "用意 (youi) = Persiapan"
    },
    {
      "jp": "理",
      "meaning": "Alasan / Kebenaran",
      "on": "リ",
      "kun": "—",
      "example": "理由 (riyuu) = Alasan"
    },
    {
      "jp": "物",
      "meaning": "Benda",
      "on": "ブツ、モツ",
      "kun": "mono",
      "example": "荷物 (nimotsu) = Barang bawaan"
    },
    {
      "jp": "特",
      "meaning": "Khusus",
      "on": "トク",
      "kun": "—",
      "example": "特に (tokuni) = Khususnya"
    },
    {
      "jp": "売",
      "meaning": "Menjual",
      "on": "バイ",
      "kun": "u(ru)",
      "example": "売店 (baiten) = Kios/Toko kecil"
    }
  ],
  "school_action": [
    {
      "jp": "考",
      "meaning": "Berpikir",
      "on": "コウ",
      "kun": "kanga(eru)",
      "example": "思考 (shikou) = Pemikiran"
    },
    {
      "jp": "教",
      "meaning": "Mengajar",
      "on": "キョウ",
      "kun": "oshi(eru)",
      "example": "教室 (kyoushitsu) = Ruang kelas"
    },
    {
      "jp": "室",
      "meaning": "Ruangan",
      "on": "シツ",
      "kun": "muro",
      "example": "和室 (washitsu) = Kamar gaya Jepang"
    },
    {
      "jp": "文",
      "meaning": "Kalimat",
      "on": "ブン、モン",
      "kun": "fumi",
      "example": "文学 (bungaku) = Kesusastraan"
    },
    {
      "jp": "字",
      "meaning": "Huruf",
      "on": "ジ",
      "kun": "aza",
      "example": "漢字 (kanji) = Aksara Kanji"
    },
    {
      "jp": "音",
      "meaning": "Bunyi",
      "on": "オン",
      "kun": "oto",
      "example": "音楽 (ongaku) = Musik"
    },
    {
      "jp": "楽",
      "meaning": "Senang / Musik",
      "on": "ガク、ラク",
      "kun": "tano(shii)",
      "example": "楽観 (rakkan) = Optimis"
    },
    {
      "jp": "林",
      "meaning": "Hutan Kecil",
      "on": "リン",
      "kun": "hayashi",
      "example": "小林 (Kobayashi) = Nama marga Jepang"
    },
    {
      "jp": "森",
      "meaning": "Hutan Lebat",
      "on": "シン",
      "kun": "mori",
      "example": "森林 (shinrin) = Hutan rimba"
    },
    {
      "jp": "親",
      "meaning": "Orang Tua / Dekat",
      "on": "シン",
      "kun": "oya、shita(shii)",
      "example": "両親 (ryoushin) = Kedua orang tua"
    },
    {
      "jp": "少",
      "meaning": "Sedikit",
      "on": "ショウ",
      "kun": "suku(nai)、suko(shi)",
      "example": "少々 (shoushou) = Sedikit/Sebentar"
    },
    {
      "jp": "多",
      "meaning": "Banyak",
      "on": "タ",
      "kun": "oo(i)",
      "example": "多分 (tabun) = Mungkin"
    },
    {
      "jp": "近",
      "meaning": "Dekat",
      "on": "キン",
      "kun": "chika(i)",
      "example": "近所 (kinjo) = Tetangga/Dekat rumah"
    },
    {
      "jp": "遠",
      "meaning": "Jauh",
      "on": "エン",
      "kun": "too(i)",
      "example": "遠足 (ensoku) = Piknik"
    },
    {
      "jp": "犬",
      "meaning": "Anjing",
      "on": "ケン",
      "kun": "inu",
      "example": "子犬 (koinu) = Anak anjing"
    },
    {
      "jp": "牛",
      "meaning": "Sapi",
      "on": "ギュウ",
      "kun": "ushi",
      "example": "牛肉 (gyuuniku) = Daging sapi"
    },
    {
      "jp": "鳥",
      "meaning": "Burung",
      "on": "チョウ",
      "kun": "tori",
      "example": "小鳥 (kotori) = Burung kecil"
    },
    {
      "jp": "風",
      "meaning": "Angin",
      "on": "フウ",
      "kun": "kaze",
      "example": "台風 (taifu) = Topan"
    },
    {
      "jp": "台",
      "meaning": "Landasan / Unit",
      "on": "ダイ、タイ",
      "kun": "—",
      "example": "台風 (taifu) = Topan"
    },
    {
      "jp": "世",
      "meaning": "Dunia / Generasi",
      "on": "セイ、セ",
      "kun": "yo",
      "example": "世界 (sekai) = Dunia"
    }
  ]
};

// ── 80 N3 KANJI COMPLETE DATABASE ────────────────────────────────────────────
const KANJI_N3_LIBRARY = {
  "society": [
    {
      "jp": "政",
      "meaning": "Politik",
      "on": "セイ",
      "kun": "matsuri",
      "example": "政治 (seiji) = Politik"
    },
    {
      "jp": "治",
      "meaning": "Memerintah",
      "on": "ジ、チ",
      "kun": "osama(ru)",
      "example": "治療 (chiryou) = Pengobatan/Terapi"
    },
    {
      "jp": "経",
      "meaning": "Ekonomi / Lewat",
      "on": "ケイ",
      "kun": "he(ru)",
      "example": "経済 (keizai) = Ekonomi"
    },
    {
      "jp": "済",
      "meaning": "Selesai",
      "on": "サイ",
      "kun": "su(mu)",
      "example": "経済 (keizai) = Ekonomi"
    },
    {
      "jp": "法",
      "meaning": "Hukum",
      "on": "ホウ",
      "kun": "—",
      "example": "法律 (houritsu) = Undang-undang"
    },
    {
      "jp": "律",
      "meaning": "Aturan",
      "on": "リツ",
      "kun": "—",
      "example": "法律 (houritsu) = Undang-undang"
    },
    {
      "jp": "際",
      "meaning": "Batas / Internasional",
      "on": "サイ",
      "kun": "kiwa",
      "example": "国際 (kokusai) = Internasional"
    },
    {
      "jp": "関",
      "meaning": "Hubungan",
      "on": "カン",
      "kun": "seki",
      "example": "関係 (kankei) = Hubungan/Koneksi"
    },
    {
      "jp": "係",
      "meaning": "Penanggung Jawab",
      "on": "ケイ",
      "kun": "kaka(ri)",
      "example": "係員 (kakariin) = Petugas/Staf"
    },
    {
      "jp": "義",
      "meaning": "Keadilan / Makna",
      "on": "ギ",
      "kun": "—",
      "example": "義務 (gimu) = Kewajiban"
    },
    {
      "jp": "議",
      "meaning": "Diskusi / Parlemen",
      "on": "ギ",
      "kun": "—",
      "example": "会議 (kaigi) = Rapat/Konferensi"
    },
    {
      "jp": "党",
      "meaning": "Partai Politik",
      "on": "トウ",
      "kun": "—",
      "example": "政党 (seitou) = Partai politik"
    },
    {
      "jp": "都",
      "meaning": "Metropolis / Kota",
      "on": "ト、ツ",
      "kun": "miako",
      "example": "都市 (toshi) = Kota besar"
    },
    {
      "jp": "府",
      "meaning": "Prefektur Kotamadya",
      "on": "フ",
      "kun": "—",
      "example": "京都府 (Kyōto-fu) = Prefektur Kyoto"
    },
    {
      "jp": "県",
      "meaning": "Prefektur Provinsi",
      "on": "ケン",
      "kun": "—",
      "example": "青森県 (Aomori-ken) = Prefektur Aomori"
    },
    {
      "jp": "区",
      "meaning": "Distrik / Wilayah",
      "on": "ク",
      "kun": "—",
      "example": "新宿区 (Shinjuku-ku) = Distrik Shinjuku"
    },
    {
      "jp": "諸",
      "meaning": "Berbagai / Banyak",
      "on": "ショ",
      "kun": "—",
      "example": "諸国 (shokoku) = Berbagai negara"
    },
    {
      "jp": "権",
      "meaning": "Kekuasaan / Hak",
      "on": "ケン、ゴン",
      "kun": "—",
      "example": "権利 (kenri) = Hak"
    },
    {
      "jp": "財",
      "meaning": "Harta / Kekayaan",
      "on": "ザイ、サイ",
      "kun": "—",
      "example": "財布 (saifu) = Dompet"
    },
    {
      "jp": "障",
      "meaning": "Rintangan / Hambatan",
      "on": "ショウ",
      "kun": "sawa(ru)",
      "example": "障害 (shougai) = Hambatan/Disabilitas"
    }
  ],
  "business_science": [
    {
      "jp": "研",
      "meaning": "Meneliti",
      "on": "ケン",
      "kun": "to(gu)",
      "example": "研究 (kenkyuu) = Penelitian"
    },
    {
      "jp": "究",
      "meaning": "Menyelidiki",
      "on": "キュウ",
      "kun": "kiwa(meru)",
      "example": "研究 (kenkyuu) = Penelitian"
    },
    {
      "jp": "科",
      "meaning": "Sains / Bidang",
      "on": "カ",
      "kun": "—",
      "example": "科学 (kagaku) = Ilmu sains"
    },
    {
      "jp": "数",
      "meaning": "Angka",
      "on": "スウ",
      "kun": "kazu",
      "example": "数学 (suugaku) = Matematika"
    },
    {
      "jp": "算",
      "meaning": "Berhitung",
      "on": "サン",
      "kun": "—",
      "example": "計算 (keisan) = Penghitungan"
    },
    {
      "jp": "組",
      "meaning": "Kelompok / Kelas",
      "on": "ソ",
      "kun": "kumi",
      "example": "番組 (bangumi) = Acara TV"
    },
    {
      "jp": "設",
      "meaning": "Mendirikan",
      "on": "セツ",
      "kun": "mou(keru)",
      "example": "設計 (sekkei) = Perancangan/Desain"
    },
    {
      "jp": "建",
      "meaning": "Membangun",
      "on": "ケン",
      "kun": "ta(teru)",
      "example": "建物 (tatemono) = Bangunan"
    },
    {
      "jp": "築",
      "meaning": "Konstruksi",
      "on": "チク",
      "kun": "kizu(ku)",
      "example": "建築 (kenchiku) = Arsitektur"
    },
    {
      "jp": "造",
      "meaning": "Membuat",
      "on": "ゾウ",
      "kun": "tsuku(ru)",
      "example": "製造 (seizou) = Manufaktur"
    },
    {
      "jp": "術",
      "meaning": "Teknik / Seni",
      "on": "ジュツ",
      "kun": "sube",
      "example": "技術 (gijutsu) = Teknologi/Keterampilan"
    },
    {
      "jp": "技",
      "meaning": "Keterampilan",
      "on": "ギ",
      "kun": "waza",
      "example": "技術 (gijutsu) = Teknologi/Keterampilan"
    },
    {
      "jp": "複",
      "meaning": "Ganda / Kompleks",
      "on": "フク",
      "kun": "—",
      "example": "複数 (fukusuu) = Jamak/Ganda"
    },
    {
      "jp": "册",
      "meaning": "Counter Buku / Jilid",
      "on": "サツ、サク",
      "kun": "—",
      "example": "三冊 (sansatsu) = Tiga jilid buku"
    },
    {
      "jp": "製",
      "meaning": "Buatan / Pabrik",
      "on": "セイ",
      "kun": "—",
      "example": "日本製 (Nihon-sei) = Buatan Jepang"
    },
    {
      "jp": "輸",
      "meaning": "Mengangkut / Kirim",
      "on": "ユ",
      "kun": "—",
      "example": "輸入 (yunyuu) = Impor"
    },
    {
      "jp": "貿",
      "meaning": "Perdagangan",
      "on": "ボウ",
      "kun": "—",
      "example": "貿易 (boueki) = Perdagangan luar negeri"
    },
    {
      "jp": "易",
      "meaning": "Mudah / Barter",
      "on": "エキ、イ",
      "kun": "yasa(shii)",
      "example": "容易 (youi) = Mudah"
    },
    {
      "jp": "企",
      "meaning": "Merencanakan",
      "on": "キ",
      "kun": "kuwada(teru)",
      "example": "企業 (kigyou) = Perusahaan/Bisnis"
    },
    {
      "jp": "創",
      "meaning": "Menciptakan",
      "on": "ソウ",
      "kun": "haji(meru)",
      "example": "創造 (souzou) = Kreasi/Penciptaan"
    }
  ],
  "mind_emotion": [
    {
      "jp": "想",
      "meaning": "Ide / Pikiran",
      "on": "ソウ",
      "kun": "omo(u)",
      "example": "想像 (souzou) = Imajinasi"
    },
    {
      "jp": "念",
      "meaning": "Perasaan",
      "on": "ネン",
      "kun": "—",
      "example": "残念 (zannen) = Sayang sekali"
    },
    {
      "jp": "感",
      "meaning": "Indra / Perasaan",
      "on": "カン",
      "kun": "—",
      "example": "感謝 (kansha) = Terima kasih"
    },
    {
      "jp": "情",
      "meaning": "Emosi",
      "on": "ジョウ",
      "kun": "nasa(ke)",
      "example": "情報 (jouhou) = Informasi"
    },
    {
      "jp": "信",
      "meaning": "Percaya",
      "on": "シン",
      "kun": "—",
      "example": "信用 (shinyou) = Kepercayaan"
    },
    {
      "jp": "愛",
      "meaning": "Cinta",
      "on": "アイ",
      "kun": "—",
      "example": "愛情 (aijou) = Kasih sayang"
    },
    {
      "jp": "悲",
      "meaning": "Sedih",
      "on": "ヒ",
      "kun": "kana(shii)",
      "example": "悲劇 (higeki) = Tragedi"
    },
    {
      "jp": "怒",
      "meaning": "Marah",
      "on": "ド",
      "kun": "oko(ru)",
      "example": "怒気 (doki) = Kemarahan"
    },
    {
      "jp": "望",
      "meaning": "Berharap",
      "on": "ボウ",
      "kun": "nozo(mu)",
      "example": "希望 (kibou) = Harapan"
    },
    {
      "jp": "欲",
      "meaning": "Ingin / Hasrat",
      "on": "ヨク",
      "kun": "ho(shii)",
      "example": "食欲 (shokuyoku) = Nafsu makan"
    },
    {
      "jp": "願",
      "meaning": "Memohon",
      "on": "ガン",
      "kun": "nega(u)",
      "example": "お願い (onegai) = Permintaan/Tolong"
    },
    {
      "jp": "恐",
      "meaning": "Takut / Ngeri",
      "on": "キョウ",
      "kun": "kowa(i)、oso(reru)",
      "example": "恐竜 (kyouryuu) = Dinosaurus"
    },
    {
      "jp": "悩",
      "meaning": "Khawatir / Cemas",
      "on": "ノウ",
      "kun": "nayo(mu)",
      "example": "悩み (nayami) = Kekhawatiran/Masalah"
    },
    {
      "jp": "憎",
      "meaning": "Benci",
      "on": "ゾウ",
      "kun": "niga(mu)",
      "example": "憎しみ (nikushimi) = Kebencian"
    },
    {
      "jp": "恥",
      "meaning": "Malu",
      "on": "チ",
      "kun": "ha(zuka-shii)",
      "example": "恥ずかしい (hazukashii) = Malu"
    },
    {
      "jp": "意",
      "meaning": "Maksud / Pikiran",
      "on": "イ",
      "kun": "—",
      "example": "意味 (imi) = Arti/Makna"
    },
    {
      "jp": "志",
      "meaning": "Kehendak / Aspirasi",
      "on": "シ",
      "kun": "kokorozashi",
      "example": "志望 (shibou) = Aspirasi/Cita-cita"
    },
    {
      "jp": "憶",
      "meaning": "Ingat / Memori",
      "on": "オク",
      "kun": "—",
      "example": "記憶 (kioku) = Ingatan/Memori"
    },
    {
      "jp": "忘",
      "meaning": "Lupa",
      "on": "ボウ",
      "kun": "wasu(reru)",
      "example": "忘れ物 (wasuremono) = Barang tertinggal"
    },
    {
      "jp": "恋",
      "meaning": "Cinta / Asmara",
      "on": "レン",
      "kun": "koi",
      "example": "恋人 (koibito) = Pacar"
    }
  ],
  "action_state": [
    {
      "jp": "選",
      "meaning": "Memilih",
      "on": "セン",
      "kun": "era(bu)",
      "example": "選手 (senshu) = Atlet/Pemain"
    },
    {
      "jp": "決",
      "meaning": "Memutuskan",
      "on": "ケツ",
      "kun": "ki(meru)",
      "example": "決定 (kettei) = Keputusan"
    },
    {
      "jp": "認",
      "meaning": "Mengakui",
      "on": "ニン",
      "kun": "mito(meru)",
      "example": "確認 (kakunin) = Konfirmasi"
    },
    {
      "jp": "表",
      "meaning": "Tabel / Ungkapan",
      "on": "ヒョウ",
      "kun": "omote",
      "example": "発表 (happyou) = Presentasi/Pengumuman"
    },
    {
      "jp": "現",
      "meaning": "Muncul / Nyata",
      "on": "ゲン",
      "kun": "arawa(reru)",
      "example": "Present (genzai) = Saat ini"
    },
    {
      "jp": "調",
      "meaning": "Meneliti / Nada",
      "on": "チョウ",
      "kun": "shirabe(ru)",
      "example": "調査 (chousa) = Investigasi"
    },
    {
      "jp": "査",
      "meaning": "Memeriksa",
      "on": "サ",
      "kun": "—",
      "example": "検査 (kensa) = Pemeriksaan medis"
    },
    {
      "jp": "確",
      "meaning": "Pasti / Yakin",
      "on": "カ防",
      "kun": "tashi(ka)",
      "example": "確認 (kakunin) = Konfirmasi"
    },
    {
      "jp": "果",
      "meaning": "Hasil / Buah",
      "on": "カ",
      "kun": "ha(teru)",
      "example": "結果 (kekka) = Hasil"
    },
    {
      "jp": "連",
      "meaning": "Menghubungkan",
      "on": "レン",
      "kun": "tsu(reru)",
      "example": "連絡 (renraku) = Hubungi/Kontak"
    },
    {
      "jp": "絡",
      "meaning": "Keterikatan",
      "on": "ラク",
      "kun": "kara(mu)",
      "example": "連絡 (renraku) = Hubungi/Kontak"
    },
    {
      "jp": "戦",
      "meaning": "Perang / Tarung",
      "on": "セン",
      "kun": "tataka(u)",
      "example": "戦争 (sensou) = Perang"
    },
    {
      "jp": "争",
      "meaning": "Berjuang / Rebut",
      "on": "ソウ",
      "kun": "araso(u)",
      "example": "戦争 (sensou) = Perang"
    },
    {
      "jp": "幸",
      "meaning": "Bahagia",
      "on": "コウ",
      "kun": "shiawa(se)",
      "example": "幸せ (shiawase) = Bahagia"
    },
    {
      "jp": "福",
      "meaning": "Keberuntungan",
      "on": "フク",
      "kun": "—",
      "example": "幸福 (koufuku) = Kebahagiaan"
    },
    {
      "jp": "難",
      "meaning": "Sulit / Bencana",
      "on": "ナン",
      "kun": "muzuka(shii)",
      "example": "難しい (muzukashii) = Sulit"
    },
    {
      "jp": "若",
      "meaning": "Muda",
      "on": "ジャク",
      "kun": "waka(i)",
      "example": "若者 (wakamono) = Kaum muda"
    },
    {
      "jp": "老",
      "meaning": "Tua / Lansia",
      "on": "ロウ",
      "kun": "o(iru)",
      "example": "老人 (roujin) = Orang tua"
    },
    {
      "jp": "忙",
      "meaning": "Sibuk",
      "on": "ボウ",
      "kun": "isoga(shii)",
      "example": "忙しい (isogashii) = Sibuk"
    },
    {
      "jp": "降",
      "meaning": "Turun",
      "on": "コウ",
      "kun": "o(riru)、fu(ru)",
      "example": "降車 (kousha) = Turun kendaraan"
    }
  ]
};

// ── COMPONENT VIEW ──────────────────────────────────────────────────────────
export function KanjiView(container) {
  renderTopbar('🏮 Kanji Hub');

  let activeSubTab = 'theory'; // 'theory' | 'kamus'
  let activeLevel = 'N5'; // 'N5' | 'N4' | 'N3'

  const renderLayout = () => {
    container.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto; padding: 12px 16px;" class="fade-in">
        
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 24px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">
          <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px; letter-spacing: -0.02em;">Kanal Kanji Masterclass Hub</h2>
          <p style="color: var(--text-muted); font-size: 0.85rem; max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Pelajari hukum dasar penulisan Kanji, kuasai perbedaan cara baca Onyomi/Kunyomi, dan latih Kanji N5/N4/N3 Anda langsung di layar sentuh.
          </p>
        </div>

        <!-- Mode Tabs -->
        <div style="display: flex; gap: 4px; background: var(--bg-hover); padding: 4px; border-radius: var(--radius-md); margin-bottom: 28px; max-width: 400px; margin-left: auto; margin-right: auto;">
          <button class="tab-btn sub-tab-btn ${activeSubTab === 'theory' ? 'active' : ''}" data-target="theory" style="flex: 1; padding: 8px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm); font-size: var(--text-xs); cursor: pointer;">Teori & Aturan</button>
          <button class="tab-btn sub-tab-btn ${activeSubTab === 'kamus' ? 'active' : ''}" data-target="kamus" style="flex: 1; padding: 8px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm); font-size: var(--text-xs); cursor: pointer;">Katalog Kanji</button>
        </div>

        <!-- Tab Contents -->
        <div id="kanji-tab-content">
          <!-- Rendered dynamically -->
        </div>

      </div>
    `;

    renderContent();
    bindEvents();
  };

  const renderContent = () => {
    const contentArea = container.querySelector('#kanji-tab-content');
    if (!contentArea) return;

    if (activeSubTab === 'theory') {
      contentArea.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 32px;" class="fade-in">
          
          <!-- Theory 1: Onyomi vs Kunyomi -->
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-bright); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="book-open" style="width: 20px; height: 20px;"></i>
              1. Mengapa Kanji Punya Banyak Cara Baca? (Onyomi vs Kunyomi)
            </h3>
            <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6; margin-bottom: 16px;">
              Kanji berasal dari Tiongkok yang diadopsi ke dalam bahasa Jepang. Hal ini melahirkan dua metode cara baca yang digunakan bersamaan:
            </p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
              <div style="background: var(--bg-main); padding: 16px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent);">
                <h4 style="font-weight: 800; font-size: 0.9rem; color: var(--text-main); margin-bottom: 4px;">音読み (Onyomi)</h4>
                <p style="color: var(--text-muted); font-size: 0.78rem; line-height: 1.4; margin-bottom: 8px;">
                  Cara baca adaptasi Tiongkok kuno. Biasanya ditulis dalam kamus menggunakan huruf **Katakana**.
                </p>
                <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">
                  💡 <strong>Kapan dipakai?</strong> Ketika Kanji bergabung dengan Kanji lain membentuk kata majemuk (*Jukugo*).<br>
                  <em>Contoh: 水曜日 (sui-yōbi - Rabu)</em>
                </div>
              </div>
              
              <div style="background: var(--bg-main); padding: 16px; border-radius: var(--radius-sm); border-left: 3px solid var(--border-bright);">
                <h4 style="font-weight: 800; font-size: 0.9rem; color: var(--text-main); margin-bottom: 4px;">訓読み (Kunyomi)</h4>
                <p style="color: var(--text-muted); font-size: 0.78rem; line-height: 1.4; margin-bottom: 8px;">
                  Cara baca asli bahasa Jepang. Biasanya ditulis dalam kamus menggunakan huruf **Hiragana**.
                </p>
                <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">
                  💡 <strong>Kapan dipakai?</strong> Ketika Kanji berdiri sendiri sebagai kata tunggal, atau berakhiran huruf Hiragana (*Okurigana*).<br>
                  <em>Contoh: 水 (mizu - air)</em>
                </div>
              </div>
            </div>

            <div style="font-size: 0.8rem; color: var(--text-secondary); background: var(--bg-hover); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--border); line-height: 1.5;">
              📌 <strong>Aturan Emas:</strong> Jika Anda melihat gabungan Kanji seperti <strong>火山</strong>, bacalah menggunakan Onyomi: <em>kazan</em> (gunung berapi). Namun jika Kanji berdiri sendiri seperti <strong>山</strong>, bacalah menggunakan Kunyomi: <em>yama</em> (gunung).
            </div>
          </div>

          <!-- Theory 2: Stroke Order Laws -->
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-bright); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="edit" style="width: 20px; height: 20px;"></i>
              2. Tujuh Hukum Mutlak Stroke Order (Urutan Coretan)
            </h3>
            <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6; margin-bottom: 16px;">
              Menulis Kanji bukanlah menggambar bebas. Ada logika urutan coretan baku agar keseimbangan huruf stabil, terbaca indah, dan mempermudah ingatan otot jari Anda di kanvas touchscreen:
            </p>

            <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
              <div style="display: flex; gap: 12px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong style="color: var(--accent-bright); min-width: 24px;">#1</strong>
                <span><strong>Kiri ke Kanan, Atas ke Bawah:</strong> Tulis garis horizontal kiri-ke-kanan terlebih dahulu sebelum menggambar garis vertikal atas-ke-bawah (Contoh: Kanji '十' ditulis garis tidur dulu, baru garis tegak).</span>
              </div>
              <div style="display: flex; gap: 12px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong style="color: var(--accent-bright); min-width: 24px;">#2</strong>
                <span><strong>Garis Melintang Memotong Terakhir:</strong> Jika ada garis horizontal/vertikal panjang yang memotong banyak coretan lain di tengah, garis pemotong itu ditulis paling akhir (Contoh: Garis vertikal '中' atau '車').</span>
              </div>
              <div style="display: flex; gap: 12px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong style="color: var(--accent-bright); min-width: 24px;">#3</strong>
                <span><strong>Garis Diagonal Kiri Dulu:</strong> Coretan miring ke kiri ('ノ') ditulis sebelum coretan miring ke kanan ('乀') (Contoh: Kanji '人' atau '父').</span>
              </div>
              <div style="display: flex; gap: 12px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong style="color: var(--accent-bright); min-width: 24px;">#4</strong>
                <span><strong>Tengah Dulu untuk Huruf Simetris:</strong> Untuk Kanji yang memiliki sayap kanan-kiri simetris, tulis tiang tengah terlebih dahulu baru sayapnya (Contoh: Kanji '山' atau '水').</span>
              </div>
              <div style="display: flex; gap: 12px; background: var(--bg-hover); padding: 8px 12px; border-radius: var(--radius-sm);">
                <strong style="color: var(--accent-bright); min-width: 24px;">#5</strong>
                <span><strong>Isi Kotak Sebelum Ditutup:</strong> Jika ada bingkai kotak luar, gambar tiang kiri, atas-kanan siku, lalu lukis seluruh isi di dalamnya terlebih dahulu, kemudian tutup bagian bawah kotak paling akhir (Contoh: Kanji '国' atau '四').</span>
              </div>
            </div>
          </div>

          <!-- Theory 3: Radicals -->
          <div class="card" style="padding: 24px;">
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-bright); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="puzzle" style="width: 20px; height: 20px;"></i>
              3. Kekuatan Radikal (Bushu)
            </h3>
            <p style="color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6; margin-bottom: 12px;">
              Kanji bukanlah kumpulan coretan acak yang rumit. Hampir semua Kanji dibangun oleh komponen lego pembentuk yang disebut **Radikal (Bushu)**. Radikal memberikan petunjuk makna dasar Kanji tersebut secara seketika:
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
              <div style="background: var(--bg-hover); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div style="font-size: 1.3rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">氵(Sanzui)</div>
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">Radikal Air</div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">Hadir di Kanji bertema air. Contoh: '海' (laut), '洋' (samudra), '池' (kolam).</div>
              </div>
              
              <div style="background: var(--bg-hover); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div style="font-size: 1.3rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">亻(Ninben)</div>
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">Radikal Manusia</div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">Hadir di Kanji bertema aksi manusia. Contoh: '休' (istirahat), '信' (percaya), '体' (tubuh).</div>
              </div>

              <div style="background: var(--bg-hover); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
                <div style="font-size: 1.3rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">門 (Mon)</div>
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">Radikal Gerbang/Pintu</div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">Hadir di Kanji bertema gerbang atau celah. Contoh: '聞' (mendengar), '間' (antara), '開' (membuka).</div>
              </div>
            </div>
          </div>

        </div>
      `;
    } else {
      // Catalog Tab: Levels selective render
      contentArea.innerHTML = `
        <div class="fade-in">
          <!-- Level Selector Pills -->
          <div style="display: flex; gap: 8px; justify-content: center; margin-bottom: 32px; flex-wrap: wrap;">
            <button class="level-pill-btn" data-level="N5" style="cursor: pointer; border-radius: 99px; padding: 6px 18px; font-size: var(--text-xs); font-weight: 700; border: 1px solid var(--border); transition: all 0.15s; background: ${activeLevel === 'N5' ? 'var(--text-main)' : 'var(--bg-card)'}; color: ${activeLevel === 'N5' ? 'var(--bg-main)' : 'var(--text-main)'};">N5 (Dasar)</button>
            <button class="level-pill-btn" data-level="N4" style="cursor: pointer; border-radius: 99px; padding: 6px 18px; font-size: var(--text-xs); font-weight: 700; border: 1px solid var(--border); transition: all 0.15s; background: ${activeLevel === 'N4' ? 'var(--text-main)' : 'var(--bg-card)'}; color: ${activeLevel === 'N4' ? 'var(--bg-main)' : 'var(--text-main)'};">N4 (Lanjutan I)</button>
            <button class="level-pill-btn" data-level="N3" style="cursor: pointer; border-radius: 99px; padding: 6px 18px; font-size: var(--text-xs); font-weight: 700; border: 1px solid var(--border); transition: all 0.15s; background: ${activeLevel === 'N3' ? 'var(--text-main)' : 'var(--bg-card)'}; color: ${activeLevel === 'N3' ? 'var(--bg-main)' : 'var(--text-main)'};">N3 (Lanjutan II)</button>
          </div>

          <!-- Dynamic List Wrapper -->
          <div id="level-catalog-container" style="display: flex; flex-direction: column; gap: 36px;">
            <!-- Rendered dynamically -->
          </div>
        </div>
      `;

      renderCatalogList();
      bindLevelPillEvents();
    }

    if (window.lucide) lucide.createIcons({ root: contentArea });
  };

  const renderCatalogList = () => {
    const listContainer = container.querySelector('#level-catalog-container');
    if (!listContainer) return;

    let html = '';

    if (activeLevel === 'N5') {
      html = `
        ${renderCatalogSection('I. KANJI ANGKA & WAKTU (20 Kanji)', KANJI_N5_LIBRARY.numbers_time)}
        ${renderCatalogSection('II. KANJI ALAM & TEMPAT (20 Kanji)', KANJI_N5_LIBRARY.nature_places)}
        ${renderCatalogSection('III. KANJI ORANG & KELUARGA (20 Kanji)', KANJI_N5_LIBRARY.people_family)}
        ${renderCatalogSection('IV. KANJI TEMPAT & BANGUNAN (20 Kanji)', KANJI_N5_LIBRARY.places_buildings)}
      `;
    } else if (activeLevel === 'N4') {
      html = `
        ${renderCatalogSection('I. KANJI GERAKAN & PERJALANAN (20 Kanji)', KANJI_N4_LIBRARY.movement)}
        ${renderCatalogSection('II. KANJI WAKTU & TUBUH (20 Kanji)', KANJI_N4_LIBRARY.time_body)}
        ${renderCatalogSection('III. KANJI MASYARAKAT & BISNIS (20 Kanji)', KANJI_N4_LIBRARY.society_business)}
        ${renderCatalogSection('IV. KANJI SEKOLAH & AKSI (20 Kanji)', KANJI_N4_LIBRARY.school_action)}
      `;
    } else if (activeLevel === 'N3') {
      html = `
        ${renderCatalogSection('I. KANJI MASYARAKAT & KEHIDUPAN (20 Kanji)', KANJI_N3_LIBRARY.society)}
        ${renderCatalogSection('II. KANJI BISNIS & SAINS (20 Kanji)', KANJI_N3_LIBRARY.business_science)}
        ${renderCatalogSection('III. KANJI PIKIRAN & EMOSI (20 Kanji)', KANJI_N3_LIBRARY.mind_emotion)}
        ${renderCatalogSection('IV. KANJI AKSI & KEADAAN (20 Kanji)', KANJI_N3_LIBRARY.action_state)}
      `;
    }

    listContainer.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: listContainer });
  };

  const renderCatalogSection = (title, list) => {
    const cardsHtml = list.map(item => `
      <div class="kanji-catalog-card">
        <div class="kanji-catalog-char">${item.jp}</div>
        <div class="kanji-catalog-meaning">${item.meaning}</div>
        
        <div class="kanji-catalog-readings">
          <div style="margin-bottom: 6px; display: flex; justify-content: space-between; align-items: baseline; gap: 8px; border-bottom: 1px dashed var(--border); padding-bottom: 4px;">
            <strong style="font-size: 0.62rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.02em;">Onyomi (Gabungan)</strong>
            <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 700; color: var(--text-main); text-align: right; word-break: break-all;">${item.on}</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 8px; border-bottom: 1px dashed var(--border); padding-bottom: 4px;">
            <strong style="font-size: 0.62rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.02em;">Kunyomi (Sendiri)</strong>
            <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 700; color: var(--text-main); text-align: right; word-break: break-all;">${item.kun}</span>
          </div>
          <div style="margin-top: 8px; font-size: 0.68rem; color: var(--text-secondary); padding-top: 2px; line-height: 1.4;">
            💬 <strong>Contoh:</strong> ${item.example}
          </div>
        </div>

        <button class="kanji-catalog-btn" onclick="window.location.hash='#/writing?char=${encodeURIComponent(item.jp)}'" aria-label="Latih nulis kanji ${item.jp}">
          <i data-lucide="edit-3" style="width: 13px; height: 13px;"></i> Latih Nulis
        </button>
      </div>
    `).join('');

    return `
      <div>
        <h3 style="font-size: 0.85rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid var(--border); padding-bottom: 8px; margin-bottom: 16px;">
          ${title}
        </h3>
        <div class="kanji-catalog-grid">
          ${cardsHtml}
        </div>
      </div>
    `;
  };

  const bindEvents = () => {
    // Bind Tab click switching
    container.querySelectorAll('.sub-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target.closest('.sub-tab-btn');
        if (!target) return;

        activeSubTab = target.getAttribute('data-target');

        container.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
        target.classList.add('active');

        renderContent();
      });
    });
  };

  const bindLevelPillEvents = () => {
    container.querySelectorAll('.level-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target.closest('.level-pill-btn');
        if (!target) return;

        activeLevel = target.getAttribute('data-level');

        container.querySelectorAll('.level-pill-btn').forEach(b => {
          b.style.background = 'var(--bg-card)';
          b.style.color = 'var(--text-main)';
        });
        target.style.background = 'var(--text-main)';
        target.style.color = 'var(--bg-main)';

        renderCatalogList();
      });
    });
  };

  // Mount View
  renderLayout();
}
