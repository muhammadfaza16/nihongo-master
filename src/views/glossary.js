// ── Glosarium Istilah Jepang (Glossary) untuk Pemula

const GLOSSARY_TERMS = [
  {
    term: "Hiragana",
    jp: "平仮名",
    rom: "ひらがな",
    cat: "Aksara",
    catId: "writing",
    desc: "Aksara fonetik Jepang dasar yang melambangkan bunyi suku kata. Digunakan untuk menulis kata-kata asli Jepang, partikel, kata bantu kerja, serta imbuhan kata.",
    example: "Contoh: わたし (watashi), ありがとう (arigatou), これ (kore)."
  },
  {
    term: "Katakana",
    jp: "片仮名",
    rom: "カタカナ",
    cat: "Aksara",
    catId: "writing",
    desc: "Aksara fonetik dengan garis-garis bersudut tegas yang digunakan khusus untuk menulis kata serapan dari bahasa asing, nama orang asing, negara, serta onomatope (tiruan bunyi).",
    example: "Contoh: テレビ (terebi - TV), カメラ (kamera), インドネシア (Indonesia)."
  },
  {
    term: "Kanji",
    jp: "漢字",
    rom: "かんじ",
    cat: "Aksara",
    catId: "writing",
    desc: "Karakter logogram (ideogram) yang diadopsi dari huruf Tiongkok. Setiap karakter Kanji melambangkan suatu makna atau konsep dasar, serta memiliki cara baca ganda (Onyomi & Kunyomi).",
    example: "Contoh: 山 (gunung - yama), 水 (air - mizu), 日本 (Jepang - Nihon)."
  },
  {
    term: "Romaji",
    jp: "ローマ字",
    rom: "ろーまじ",
    cat: "Aksara",
    catId: "writing",
    desc: "Penulisan transliterasi pelafalan bahasa Jepang menggunakan huruf Latin (alfabet standard) untuk membantu orang asing mempermudah cara membaca aksara Jepang.",
    example: "Contoh: Menulis 'Arigatou' untuk kata Jepang 'ありがとう'."
  },
  {
    term: "Furigana",
    jp: "振り仮名",
    rom: "ふりがな",
    cat: "Aksara",
    catId: "writing",
    desc: "Karakter Hiragana kecil yang diletakkan di atas atau di samping huruf Kanji. Berfungsi sebagai penunjuk cara baca Kanji tersebut, sangat membantu bagi pemula atau anak-anak.",
    example: "Contoh: Cara baca Kanji [私](私 \"わたし\") ditulis dengan furigana 'わたし' di atasnya."
  },
  {
    term: "Kana",
    jp: "仮名",
    rom: "かな",
    cat: "Aksara",
    catId: "writing",
    desc: "Istilah umum atau sebutan gabungan yang merujuk pada sistem aksara fonetik Jepang asli, yaitu Hiragana dan Katakana.",
    example: "Konteks: Hiragana dan Katakana dikategorikan sebagai sistem penulisan Kana."
  },
  {
    term: "Bunkei",
    jp: "文型",
    rom: "ぶんけい",
    cat: "Tata Bahasa",
    catId: "grammar",
    desc: "Pola kalimat baku atau bentuk kalimat standar yang menjadi acuan utama dalam menyusun kalimat bahasa Jepang sesuai tata bahasa yang benar.",
    example: "Contoh: Pola dasar [KB1] wa [KB2] desu (わたしは ミラーです)."
  },
  {
    term: "Reibun",
    jp: "例文",
    rom: "れいぶん",
    cat: "Tata Bahasa",
    catId: "grammar",
    desc: "Contoh kalimat praktis, umumnya disajikan dalam bentuk tanya-jawab (Q&A) pendek, yang memperagakan bagaimana pola kalimat (Bunkei) diterapkan dalam percakapan nyata.",
    example: "Konteks: Menjelaskan nuansa praktis pola kalimat di tab 'Reibun' tiap bab."
  },
  {
    term: "Kaiwa",
    jp: "会話",
    rom: "かいわ",
    cat: "Sistem Belajar",
    catId: "learning",
    desc: "Percakapan atau dialog kehidupan sehari-hari yang menyatukan kosakata dan pola tata bahasa baru dalam skenario sosial terstruktur (seperti perkenalan, belanja, janji temu).",
    example: "Konteks: Percakapan interaktif tokoh utama 'Miller-san' di akhir tiap bab."
  },
  {
    term: "Kotoba",
    jp: "言葉",
    rom: "ことば",
    cat: "Sistem Belajar",
    catId: "learning",
    desc: "Kumpulan kosakata atau perbendaharaan kata dasar yang wajib dipelajari dan dihafalkan di awal setiap bab sebelum masuk ke pembahasan tata bahasa.",
    example: "Konteks: Daftar kartu kosakata interaktif di tab pertama setiap bab."
  },
  {
    term: "Bunpou",
    jp: "文法",
    rom: "ぶんぽう",
    cat: "Tata Bahasa",
    catId: "grammar",
    desc: "Aturan sintaksis, struktur pembentukan kalimat, konjugasi kata kerja/sifat, dan tata cara berbahasa Jepang secara formal dan informal.",
    example: "Konteks: Penjelasan gramatikal detail pada tab 'Bunpou' di setiap bab."
  },
  {
    term: "SRS (Spaced Repetition)",
    jp: "間隔反復",
    rom: "srs",
    cat: "Sistem Belajar",
    catId: "learning",
    desc: "Metode pembelajaran pintar menggunakan jeda waktu pengulangan yang diatur otomatis (algoritma memori) untuk membantu hafalan berpindah dari memori jangka pendek ke memori jangka panjang.",
    example: "Konteks: Fitur menu 'SRS Review' untuk menghafal kartu kosakata."
  },
  {
    term: "TTS (Text-to-Speech)",
    jp: "音声合成",
    rom: "tts",
    cat: "Sistem Belajar",
    catId: "learning",
    desc: "Teknologi pengubah teks menjadi suara sintetis penutur asli Jepang (native speaker) untuk memandu pengucapan, intonasi, dan aksen pelafalan kata maupun kalimat.",
    example: "Konteks: Tombol ikon pengeras suara di setiap kosakata dan Reibun."
  },
  {
    term: "Renshuu",
    jp: "練習",
    rom: "れんしゅう",
    cat: "Sistem Belajar",
    catId: "learning",
    desc: "Soal-soal latihan interaktif, baik dalam bentuk pilihan ganda (MCQ) maupun mengisi bagian rumpang, untuk menguji daya serap pemahaman pengguna terhadap isi bab.",
    example: "Konteks: Menu kuis/uji pemahaman di tab 'Latihan' di ujung bab."
  },
  {
    term: "Partikel / Joshi",
    jp: "助詞",
    rom: "じょし",
    cat: "Tata Bahasa",
    catId: "grammar",
    desc: "Kata tugas pendek (seperti wa, ga, o, ni, de, e, mo) yang ditempelkan di belakang kata benda/kerja untuk menandai fungsi gramatikal kata tersebut di dalam kalimat.",
    example: "Contoh: Partikel は (wa) sebagai penanda topik, を (o) sebagai penanda objek langsung."
  },
  {
    term: "Kopula (Desu/Da)",
    jp: "です / だ",
    rom: "です / だ",
    cat: "Tata Bahasa",
    catId: "grammar",
    desc: "Kata bantu penegas di akhir kalimat nominal (kata benda/sifat-na) yang menandai kesopanan (Desu - sopan) atau keakraban (Da - kasual), serupa dengan kata bantu 'to be' dalam bahasa Inggris.",
    example: "Contoh: わたしは 学生です (Watashi wa gakusei desu - Saya adalah siswa)."
  }
];

import { renderTopbar, renderBackBtn } from '../components/layout.js';

export function GlossaryView(container) {
  renderTopbar('Glosarium Istilah', false, '#/');
  let currentCategory = 'all';
  let searchQuery = '';

  container.innerHTML = `
    <div class="glossary-container page-container-standard fade-in" style="padding-bottom: 60px;">
      <!-- Minimalist Header Block -->
      <div style="margin-bottom: 18px; border-bottom: 1px solid var(--border); padding-bottom: 16px;">
        <span style="font-size: var(--text-3xs); font-weight: 600; color: var(--text-muted); letter-spacing: var(--tracking-wide);">
          Referensi & Glosarium Pemula
        </span>
        <h2 style="font-size: var(--text-lg); font-weight: 700; color: var(--text-main); margin: 2px 0 6px 0; letter-spacing: var(--tracking-tight);">
          Glosarium Istilah Bahasa Jepang
        </h2>
        <p style="color: var(--text-secondary); font-size: var(--text-xs); line-height: 1.5; margin: 0; max-width: 680px;">
          Panduan istilah dasar aksara, tata bahasa, dan sistem belajar untuk mempermudah pemahaman langkah awal Anda.
        </p>
      </div>

      <!-- SEARCH & FILTERS CONTROLS -->
      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 22px;">
        
        <!-- Search Bar -->
        <div style="position: relative; display: flex; align-items: center; width: 100%;">
          <i data-lucide="search" style="position: absolute; left: 12px; width: 15px; height: 15px; color: var(--text-muted); pointer-events: none;"></i>
          <input type="text" id="glossary-search-input" placeholder="Cari istilah, romaji, kanji, atau definisi..." 
            style="width: 100%; padding: 8px 14px 8px 34px; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--text-main); font-size: var(--text-xs); outline: none; transition: all 0.15s ease;"
          />
        </div>

        <!-- Segmented Kategori Tabs -->
        <div style="display: flex; gap: 4px; background: var(--bg-elevated); padding: 4px; border-radius: var(--radius-md); border: 1px solid var(--border); overflow-x: auto; -webkit-overflow-scrolling: touch;">
          <button class="filter-tab-btn glossary-tab-btn active" data-cat="all" style="flex: 1; min-width: 65px;">Semua</button>
          <button class="filter-tab-btn glossary-tab-btn" data-cat="writing" style="flex: 1; min-width: 110px;">Aksara & Tulisan</button>
          <button class="filter-tab-btn glossary-tab-btn" data-cat="grammar" style="flex: 1; min-width: 95px;">Tata Bahasa</button>
          <button class="filter-tab-btn glossary-tab-btn" data-cat="learning" style="flex: 1; min-width: 100px;">Sistem Belajar</button>
        </div>
      </div>

      <!-- CARDS GRID CONTAINER -->
      <div id="glossary-cards-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;"></div>
    </div>
  `;

  renderBackBtn(container, '#/', 'Dashboard');

  const cardsContainer = container.querySelector('#glossary-cards-container');
  const searchInput = container.querySelector('#glossary-search-input');
  const tabButtons = container.querySelectorAll('.glossary-tab-btn');

  // Quiet category badge
  function getCategoryBadge(catName) {
    return `
      <span style="font-size: 10px; font-weight: 500; padding: 2px 8px; border-radius: var(--radius-xs); border: 1px solid var(--border); background: var(--bg-hover); color: var(--text-muted); flex-shrink: 0;">
        ${catName}
      </span>
    `;
  }

  // Render cards based on query and filters
  function performRender() {
    const filtered = GLOSSARY_TERMS.filter(item => {
      const matchesCat = (currentCategory === 'all' || item.catId === currentCategory);
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.term.toLowerCase().includes(q) ||
        item.jp.toLowerCase().includes(q) ||
        item.rom.toLowerCase().includes(q) ||
        item.cat.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      cardsContainer.style.display = 'block';
      cardsContainer.innerHTML = `
        <div style="text-align: center; padding: 48px 20px; border: 1px dashed var(--border); border-radius: var(--radius-lg); background: var(--bg-card); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--bg-hover); display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
            <i data-lucide="search-x" style="width: 18px; height: 18px;"></i>
          </div>
          <div>
            <h4 style="font-size: var(--text-sm); font-weight: 600; color: var(--text-main); margin-bottom: 2px;">Istilah tidak ditemukan</h4>
            <p style="font-size: var(--text-xs); color: var(--text-muted); max-width: 300px; margin: 0 auto; line-height: 1.4;">Tidak ada hasil untuk "${searchQuery}". Coba kata kunci lain!</p>
          </div>
        </div>
      `;
    } else {
      cardsContainer.style.display = 'grid';
      cardsContainer.innerHTML = filtered.map(item => `
        <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 18px; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; transition: border-color 0.15s ease;" class="glossary-term-card">
          
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <!-- Top Section: Term Title and Category Badge -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
              <div>
                <h3 style="font-size: 15px; font-weight: 600; color: var(--text-main); margin: 0 0 2px 0; letter-spacing: -0.01em;">
                  ${item.term}
                </h3>
                <span class="text-jp" style="font-size: 12px; color: var(--text-muted); font-weight: 400;">
                  ${item.jp} (${item.rom})
                </span>
              </div>
              ${getCategoryBadge(item.cat)}
            </div>

            <!-- Kindle Reading Definition Text -->
            <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6; font-weight: 400; margin: 0;">
              ${item.desc}
            </p>
          </div>

          <!-- Kindle Warm Formula Card Example -->
          <div style="background: var(--bg-hover); border-left: 3px solid var(--accent); border-radius: var(--radius-xs); padding: 8px 12px; font-size: 12px; color: var(--text-main); line-height: 1.5; font-weight: 400;">
            ${item.example}
          </div>

        </div>
      `).join('');
    }

    if (window.lucide) lucide.createIcons({ root: cardsContainer });
  }

  // Bind Search input event
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    performRender();
  });

  // Bind Category tabs click event
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentCategory = e.currentTarget.dataset.cat;
      performRender();
    });
  });

  // Focus search input on load
  setTimeout(() => searchInput.focus(), 150);

  // Initial Render
  performRender();

  // Create Header icons
  if (window.lucide) lucide.createIcons({ root: container });
}
