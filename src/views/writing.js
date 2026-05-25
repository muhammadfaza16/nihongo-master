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
  numbers: [
    { jp: '一', rom: 'ichi', en: 'Satu' },
    { jp: '二', rom: 'ni', en: 'Dua' },
    { jp: '三', rom: 'san', en: 'Tiga' },
    { jp: '四', rom: 'yon', en: 'Empat' },
    { jp: '五', rom: 'go', en: 'Lima' },
    { jp: '六', rom: 'roku', en: 'Enam' },
    { jp: '七', rom: 'nana', en: 'Tujuh' },
    { jp: '八', rom: 'hachi', en: 'Delapan' },
    { jp: '九', rom: 'kyuu', en: 'Sembilan' },
    { jp: '十', rom: 'juu', en: 'Sepuluh' }
  ],
  nature: [
    { jp: '日', rom: 'hi / nichi', en: 'Matahari / Hari' },
    { jp: '月', rom: 'tsuki / getsu', en: 'Bulan' },
    { jp: '火', rom: 'hi / ka', en: 'Api' },
    { jp: '水', rom: 'mizu / sui', en: 'Air' },
    { jp: '木', rom: 'ki / moku', en: 'Pohon / Kayu' },
    { jp: '金', rom: 'kane / kin', en: 'Emas / Uang / Hari Jumat' },
    { jp: '土', rom: 'tsuchi / do', en: 'Tanah / Hari Sabtu' },
    { jp: '山', rom: 'yama / san', en: 'Gunung' },
    { jp: '川', rom: 'kawa', en: 'Sungai' },
    { jp: '田', rom: 'ta / den', en: 'Sawah' }
  ],
  human_direction: [
    { jp: '人', rom: 'hito / jin', en: 'Orang' },
    { jp: '子', rom: 'ko / shi', en: 'Anak' },
    { jp: '男', rom: 'otoko / dan', en: 'Laki-laki' },
    { jp: '女', rom: 'onna / jo', en: 'Perempuan' },
    { jp: '目', rom: 'me / moku', en: 'Mata' },
    { jp: '口', rom: 'kuchi / kou', en: 'Mulut' },
    { jp: '手', rom: 'te / shu', en: 'Tangan' },
    { jp: '耳', rom: 'mimi / ji', en: 'Telinga' },
    { jp: '上', rom: 'ue / jou', en: 'Atas' },
    { jp: '下', rom: 'shita / ka', en: 'Bawah' },
    { jp: '中', rom: 'naka / chuu', en: 'Tengah / Dalam' }
  ],
  verbs: [
    { jp: '行', rom: 'i(ku) / kou', en: 'Pergi' },
    { jp: '来', rom: 'ku(ru) / rai', en: 'Datang' },
    { jp: '食', rom: 'ta(beru) / shoku', en: 'Makan' },
    { jp: '飲', rom: 'no(mu) / in', en: 'Minum' },
    { jp: '見', rom: 'mi(ru) / ken', en: 'Melihat' },
    { jp: '書', rom: 'ka(ku) / sho', en: 'Menulis' },
    { jp: '読', rom: 'yo(mu) / doku', en: 'Membaca' },
    { jp: '話', rom: 'hana(su) / wa', en: 'Berbicara' }
  ]
};

// ── COMPONENT VIEW ──────────────────────────────────────────────────────────
export function WritingView(container) {
  renderTopbar('❖ Latihan Menulis');

  // Application session states
  let activeTab = 'hiragana'; // 'hiragana' | 'katakana' | 'kanji'
  let sessionQueue = []; // Queue of active characters in the session
  let currentIndex = 0;
  let isDrawing = false;
  let canvas = null;
  let ctx = null;
  let lastX = 0;
  let lastY = 0;

  let showGuide = false; // Toggles trace helper overlay (low opacity)
  let isComparing = false; // Toggles full comparison overlay

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
        <div style="display: flex; gap: 4px; background: var(--bg-hover); padding: 4px; border-radius: var(--radius-md); margin-bottom: 20px;">
          <button class="tab-btn selection-tab ${activeTab === 'hiragana' ? 'active' : ''}" data-target="hiragana" style="flex: 1; padding: 10px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm);">Hiragana</button>
          <button class="tab-btn selection-tab ${activeTab === 'katakana' ? 'active' : ''}" data-target="katakana" style="flex: 1; padding: 10px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm);">Katakana</button>
          <button class="tab-btn selection-tab ${activeTab === 'kanji' ? 'active' : ''}" data-target="kanji" style="flex: 1; padding: 10px 0; text-align: center; font-weight: 700; border-radius: var(--radius-sm);">Kanji N5</button>
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
          <button class="char-select-card" data-type="kanji" data-key="numbers">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">一二三四五</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Angka Dasar</div>
          </button>
          <button class="char-select-card" data-type="kanji" data-key="nature">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">日月火水木</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Alam & Waktu</div>
          </button>
          <button class="char-select-card" data-type="kanji" data-key="human_direction">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">人子男女手</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Manusia & Arah</div>
          </button>
          <button class="char-select-card" data-type="kanji" data-key="verbs">
            <div style="font-size: 1.5rem; font-family: var(--font-jp); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">行来食事書</div>
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">Kata Kerja Dasar</div>
          </button>
        </div>
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
    const categoryTitle = activeTab === 'hiragana' ? 'Hiragana' : activeTab === 'katakana' ? 'Katakana' : 'Kanji N5';

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
