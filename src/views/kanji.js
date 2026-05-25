import { renderTopbar } from '../components/layout.js';

// ── 80 N5 KANJI COMPLETE DATABASE ────────────────────────────────────────────
// Sourced exactly from kurikulum_detail_n5_n4_n3.md
const KANJI_N5_LIBRARY = {
  numbers_time: [
    { jp: '一', meaning: 'Satu', on: 'イチ、イツ', kun: 'ひと(つ)', example: '一月 (ichigatsu) = Januari' },
    { jp: '二', meaning: 'Dua', on: 'ニ', kun: 'ふた(つ)', example: '二年生 (ninensei) = Siswa tahun ke-2' },
    { jp: '三', meaning: 'Tiga', on: 'サン', kun: 'みっ(つ)', example: '三角 (sankaku) = Segitiga' },
    { jp: '四', meaning: 'Empat', on: 'シ', kun: 'よっ(つ)、よ', example: '四月 (shigatsu) = April' },
    { jp: '五', meaning: 'Lima', on: 'ゴ', kun: 'いつ(つ)', example: '五十 (gojuu) = Lima puluh' },
    { jp: '六', meaning: 'Enam', on: 'ロク', kun: 'むっ(つ)', example: '六月 (rokugatsu) = Juni' },
    { jp: '七', meaning: 'Tujuh', on: 'シチ', kun: 'なな(つ)', example: '七夕 (tanabata) = Festival bintang' },
    { jp: '八', meaning: 'Delapan', on: 'ハチ', kun: 'ยっ(つ)', example: '八月 (hachigatsu) = Agustus' },
    { jp: '九', meaning: 'Sembilan', on: 'ク、キュウ', kun: 'ここの(つ)', example: '九月 (kugatsu) = September' },
    { jp: '十', meaning: 'Sepuluh', on: 'ジュウ', kun: 'とお', example: '十分 (juppun) = Sepuluh menit' },
    { jp: '百', meaning: 'Seratus', on: 'ヒャク', kun: '—', example: '三百 (sanbyaku) = Tiga ratus' },
    { jp: '千', meaning: 'Seribu', on: 'セン', kun: 'ち', example: '千円 (senen) = Seribu yen' },
    { jp: '万', meaning: 'Sepuluh Ribu', on: 'マン、バン', kun: '—', example: '一万円 (ichiman-en) = 10.000 yen' },
    { jp: '年', meaning: 'Tahun', on: 'ネン', kun: 'とし', example: '今年 (kotoshi) = Tahun ini' },
    { jp: '月', meaning: 'Bulan / Rembulan', on: 'ゲツ、ガツ', kun: 'tsuki', example: '月曜日 (getsuyōbi) = Senin' },
    { jp: '日', meaning: 'Hari / Matahari', on: 'ニチ、ジツ', kun: 'hi、ka', example: '日曜日 (nichiyōbi) = Minggu' },
    { jp: '時', meaning: 'Waktu / Jam', on: 'ジ', kun: 'とき', example: '三時 (sanji) = Jam tiga' },
    { jp: '分', meaning: 'Menit / Bagian', on: 'フン、プン、ブン', kun: 'wa(karu)', example: '五分 (gofun) = Lima menit' },
    { jp: '半', meaning: 'Setengah', on: 'ハン', kun: 'naka(ba)', example: '三時半 (sanji-han) = Setengah empat' },
    { jp: '週', meaning: 'Minggu', on: 'シュウ', kun: '—', example: '今週 (konshū) = Minggu ini' }
  ],
  nature_places: [
    { jp: '山', meaning: 'Gunung', on: 'サン', kun: 'yama', example: '富士山 (Fujisan) = Gunung Fuji' },
    { jp: '川', meaning: 'Sungai', on: 'セン', kun: 'kawa', example: '川口 (Kawaguchi) = Muara sungai' },
    { jp: '海', meaning: 'Laut', on: 'カイ', kun: 'umi', example: '海水浴 (kaisuiyoku) = Mandi laut' },
    { jp: '空', meaning: 'Langit / Kosong', on: 'クウ', kun: 'sora、a(ku)', example: '空港 (kūkō) = Bandara' },
    { jp: '木', meaning: 'Pohon / Kayu', on: 'モク、ボク', kun: 'ki', example: '木曜日 (mokuyōbi) = Kamis' },
    { jp: '花', meaning: 'Bunga', on: 'カ', kun: 'hana', example: '花見 (hanami) = Hanami sakura' },
    { jp: '雨', meaning: 'Hujan', on: 'ウ', kun: 'ame', example: '大雨 (ōame) = Hujan deras' },
    { jp: '火', meaning: 'Api', on: 'カ', kun: 'hi', example: '火曜日 (kayōbi) = Selasa' },
    { jp: '水', meaning: 'Air', on: 'スイ', kun: 'mizu', example: '水曜日 (suiyōbi) = Rabu' },
    { jp: '土', meaning: 'Tanah', on: 'ド、ト', kun: 'tsuchi', example: '土曜日 (doyōbi) = Sabtu' },
    { jp: '金', meaning: 'Emas / Uang', on: 'キン、コン', kun: 'kane、kana', example: '金曜日 (kin\'yōbi) = Jumat' },
    { jp: '上', meaning: 'Atas', on: 'ジョウ、ショウ', kun: 'ue、a(garu)', example: '上手 (jōzu) = Mahir' },
    { jp: '下', meaning: 'Bawah', on: 'カ、ゲ', kun: 'shita、sa(garu)', example: '地下 (chika) = Bawah tanah' },
    { jp: '中', meaning: 'Tengah / Dalam', on: 'チュウ', kun: 'naka', example: '中学校 (chūgakkō) = SMP' },
    { jp: '外', meaning: 'Luar', on: 'ガイ、ゲ', kun: 'soto', example: '外国 (gaikoku) = Luar negeri' },
    { jp: '右', meaning: 'Kanan', on: 'ウ、ユウ', kun: 'migi', example: '右折 (usetsu) = Belok kanan' },
    { jp: '左', meaning: 'Kiri', on: 'サ', kun: 'hidari', example: '左折 (sasetsu) = Belok kiri' },
    { jp: '前', meaning: 'Depan / Sebelum', on: 'ゼン', kun: 'mae', example: '名前 (namae) = Nama' },
    { jp: '後', meaning: 'Belakang / Sesudah', on: 'ゴ、コウ', kun: 'ato、ushi(ro)', example: '午後 (gogo) = Sore/PM' }
  ],
  people_family: [
    { jp: '人', meaning: 'Orang', on: 'ジン、ニン', kun: 'hito', example: '日本人 (Nihonjin) = Orang Jepang' },
    { jp: '父', meaning: 'Ayah', on: 'フ', kun: 'chichi、tou', example: 'お父さん (otōsan) = Ayah' },
    { jp: '母', meaning: 'Ibu', on: 'ボ', kun: 'haha、kaa', example: 'お母さん (okāsan) = Ibu' },
    { jp: '子', meaning: 'Anak', on: 'シ、ス', kun: 'ko', example: '子供 (kodomo) = Anak-anak' },
    { jp: '男', meaning: 'Laki-laki', on: 'ダン、ナン', kun: 'otoko', example: '男の子 (otoko no ko) = Anak laki-laki' },
    { jp: '女', meaning: 'Perempuan', on: 'ジョ、ニョ', kun: 'onna', example: '女の子 (onna no ko) = Anak perempuan' },
    { jp: '友', meaning: 'Teman', on: 'ユウ', kun: 'tomo', example: '友達 (tomodachi) = Teman' },
    { jp: '先', meaning: 'Dahulu / Depan', on: 'セン', kun: 'saki', example: '先生 (sensei) = Guru' },
    { jp: '生', meaning: 'Lahir / Hidup', on: 'セイ、ショウ', kun: 'i(kiru)、u(mare)', example: '学生 (gakusei) = Pelajar' }
  ],
  places_buildings: [
    { jp: '国', meaning: 'Negara', on: 'コク、コッ', kun: 'kuni', example: '外国人 (gaikokujin) = Orang asing' },
    { jp: '店', meaning: 'Toko', on: 'テン', kun: 'mise', example: '書店 (shoten) = Toko buku' },
    { jp: '駅', meaning: 'Stasiun', on: 'エキ', kun: '—', example: '東京駅 (Tōkyō-eki) = Stasiun Tokyo' },
    { jp: '電', meaning: 'Listrik', on: 'デン', kun: '—', example: '電車 (densha) = Kereta listrik' },
    { jp: '車', meaning: 'Kendaraan / Roda', on: 'シャ', kun: 'kuruma', example: '自転車 (jitensha) = Sepeda' },
    { jp: '道', meaning: 'Jalan', on: 'ドウ、トウ', kun: 'michi', example: '北海道 (Hokkaidō) = Hokkaido' },
    { jp: '学', meaning: 'Belajar', on: 'ガク、ガッ', kun: 'mana(bu)', example: '大学 (daigaku) = Universitas' },
    { jp: '校', meaning: 'Sekolah', on: 'コウ', kun: '—', example: '高校 (kōkō) = SMA' },
    { jp: '会', meaning: 'Pertemuan / Bertemu', on: 'カイ、エ', kun: 'a(u)', example: '会社 (kaisha) = Perusahaan' },
    { jp: '社', meaning: 'Perusahaan / Kuil', on: 'シャ', kun: 'yashiro', example: '会社員 (kaishain) = Karyawan' }
  ]
};

// ── COMPONENT VIEW ──────────────────────────────────────────────────────────
export function KanjiView(container) {
  renderTopbar('🏮 Kanji Hub N5');

  let activeSubTab = 'theory'; // 'theory' | 'kamus'

  const renderLayout = () => {
    container.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto; padding: 12px 16px;" class="fade-in">
        
        <!-- Header Section -->
        <div style="text-align: center; margin-bottom: 24px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">
          <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px; letter-spacing: -0.02em;">Kanal Kanji Masterclass N5</h2>
          <p style="color: var(--text-muted); font-size: 0.85rem; max-width: 500px; margin: 0 auto; line-height: 1.5;">
            Pelajari hukum dasar penulisan Kanji, kuasai perbedaan cara baca Onyomi/Kunyomi, dan latih 80 Kanji N5 secara fisik di layar sentuh Anda.
          </p>
        </div>

        <!-- Mode Tabs -->
        <div style="display: flex; gap: 4px; background: var(--bg-hover); padding: 4px; border-radius: var(--radius-md); margin-bottom: 28px; max-width: 400px; margin-left: auto; margin-right: auto;">
          <button class="tab-btn sub-tab-btn ${activeSubTab === 'theory' ? 'active' : ''}" data-target="theory" style="flex: 1; padding: 8px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm); font-size: var(--text-xs);">Teori & Aturan</button>
          <button class="tab-btn sub-tab-btn ${activeSubTab === 'kamus' ? 'active' : ''}" data-target="kamus" style="flex: 1; padding: 8px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm); font-size: var(--text-xs);">Katalog 80 Kanji</button>
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
      // Catalog 80 Kanji N5
      contentArea.innerHTML = `
        <div class="fade-in" style="display: flex; flex-direction: column; gap: 36px;">
          ${renderCatalogSection('I. KANJI ANGKA & WAKTU (20 Kanji)', KANJI_N5_LIBRARY.numbers_time)}
          ${renderCatalogSection('II. KANJI ALAM & TEMPAT (19 Kanji)', KANJI_N5_LIBRARY.nature_places)}
          ${renderCatalogSection('III. KANJI ORANG & KELUARGA (9 Kanji)', KANJI_N5_LIBRARY.people_family)}
          ${renderCatalogSection('IV. KANJI TEMPAT & BANGUNAN (10 Kanji)', KANJI_N5_LIBRARY.places_buildings)}
        </div>
      `;
    }

    if (window.lucide) lucide.createIcons({ root: contentArea });
  };

  const renderCatalogSection = (title, list) => {
    const cardsHtml = list.map(item => `
      <div class="kanji-catalog-card">
        <div class="kanji-catalog-char">${item.jp}</div>
        <div class="kanji-catalog-meaning">${item.meaning}</div>
        
        <div class="kanji-catalog-readings">
          <div style="margin-bottom: 4px;"><strong>On:</strong> <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-main);">${item.on}</span></div>
          <div><strong>Kun:</strong> <span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-main);">${item.kun}</span></div>
          <div style="margin-top: 6px; font-size: 0.65rem; color: var(--text-muted); border-top: 1px dotted var(--border); padding-top: 4px;">
            💬 ${item.example}
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

  // Mount View
  renderLayout();
}
