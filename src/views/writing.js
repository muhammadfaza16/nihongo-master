import { renderTopbar, showToast, renderBackBtn } from '../components/layout.js';
import { speakJP } from '../audio.js';
import { getUnitDetails } from '../data/curriculum.js';
import KANJI_DATA from '../data/kanji_data.json';

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

function transformKanjiLib(lib) {
  const res = {};
  for (const cat in lib) {
    res[cat] = lib[cat].map(k => ({
      jp: k.jp,
      rom: (k.on + ' / ' + k.kun).replace(/^\s*\/\s*|\s*\/\s*$/g, ''),
      en: k.meaning
    }));
  }
  return res;
}

const KANJI_DATABASE = transformKanjiLib(KANJI_DATA.n5);
const KANJI_N4_DATABASE = transformKanjiLib(KANJI_DATA.n4);
const KANJI_N3_DATABASE = transformKanjiLib(KANJI_DATA.n3);


// ── COMPONENT VIEW ──────────────────────────────────────────────────────────
export function WritingView(container) {
  // Application session states
  let fromChapter = null;
  let unitDetails = null;
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
  let currentWidth = 3;
  let lastTime = 0;
  let undoStack = []; // Stack for canvas snapshots to support Undo
  let brushSizePreset = 'ultra-thin'; // 'ultra-thin' | 'thin' | 'medium' | 'thick' | 'extra-thick' brush size selector
  let brushColorPreset = 'default'; // 'default' | 'vermilion' | 'indigo' | 'bamboo' brush ink color selector

  let showGuide = false; // Toggles trace helper overlay (low opacity)
  let isComparing = false; // Toggles full comparison overlay

  // Check for "?char=X" query parameter in the URL hash
  const hash = window.location.hash;
  const qIndex = hash.indexOf('?');
  if (qIndex !== -1) {
    const query = hash.slice(qIndex + 1);
    const params = new URLSearchParams(query);
    const charParam = decodeURIComponent(params.get('char') || '').trim();
    fromChapter = params.get('fromChapter');
    if (fromChapter) {
      unitDetails = getUnitDetails(fromChapter);
    }
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

      // Dynamic fallback for any Kanji or Kana character from curriculum!
      if (!foundItem) {
        foundItem = {
          jp: charParam,
          rom: charParam,
          en: `Latihan Menulis ${charParam}`
        };
        activeTab = 'kanji';
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
    renderTopbar('Latihan Menulis', false, '#/');

    container.innerHTML = `
      <div class="writing-container page-container-standard fade-in" style="max-width: 780px; margin: 0 auto; padding-bottom: 48px; display: flex; flex-direction: column; gap: 14px;">
        
        <!-- Dashboard Standard Hero Card -->
        <section class="hero-learning-card phase-hero-card">
          <nav class="phase-hero-nav" aria-label="Breadcrumb">
            <a href="#/" class="phase-nav-back">
              <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Dashboard
            </a>
            <span class="phase-nav-sep">/</span>
            <span class="phase-nav-level">Latihan Menulis</span>
          </nav>

          <div class="hero-main-content">
            <div class="dash-track-badge n5" style="align-self: flex-start; margin-bottom: 4px;">DELIBERATE PRACTICE</div>
            <h1 class="hero-chapter-title" style="font-size: 1.35rem; margin: 0 0 4px 0;">Latihan Menulis &amp; Stroke Order</h1>
            <p class="hero-chapter-desc" style="margin: 0;">
              Latih urutan goresan (<em>stroke order</em>) karakter Hiragana, Katakana, dan Kanji N5–N3 untuk memperkuat ingatan motorik.
            </p>
          </div>
        </section>

        <!-- Sticky Script Tabs -->
        <div class="writing-tabs-sticky-wrapper">
          <div class="writing-tabs-bar">
            <button class="writing-tab-btn selection-tab ${activeTab === 'hiragana' ? 'active' : ''}" data-target="hiragana">Hiragana</button>
            <button class="writing-tab-btn selection-tab ${activeTab === 'katakana' ? 'active' : ''}" data-target="katakana">Katakana</button>
            <button class="writing-tab-btn selection-tab ${activeTab === 'kanji' ? 'active' : ''}" data-target="kanji">Kanji N5</button>
            <button class="writing-tab-btn selection-tab ${activeTab === 'kanji-n4' ? 'active' : ''}" data-target="kanji-n4">Kanji N4</button>
            <button class="writing-tab-btn selection-tab ${activeTab === 'kanji-n3' ? 'active' : ''}" data-target="kanji-n3">Kanji N3</button>
          </div>
        </div>

        <div id="selection-grid-container" style="display: flex; flex-direction: column; gap: 14px;">
        </div>
      </div>
    `;

    renderSelectionGrid();
    bindSelectionEvents();
    if (window.lucide) lucide.createIcons({ root: container });
  };

  const renderSelectionGrid = () => {
    const grid = container.querySelector('#selection-grid-container');
    if (!grid) return;

    let html = '';

    if (activeTab === 'hiragana') {
      html = `
        <div class="writing-section-header">
          <span class="writing-section-title">Paket Huruf Hiragana</span>
          <span class="writing-section-badge">10 Paket • 46 Huruf</span>
        </div>
        <div class="writing-pack-grid">
          <button class="writing-pack-card" data-type="hiragana" data-key="vowels">
            <div class="pack-chars">あいうえお</div>
            <div class="pack-label">Vokal Dasar</div>
          </button>
          <button class="writing-pack-card" data-type="hiragana" data-key="k_row">
            <div class="pack-chars">かきくけこ</div>
            <div class="pack-label">Baris Ka</div>
          </button>
          <button class="writing-pack-card" data-type="hiragana" data-key="s_row">
            <div class="pack-chars">さしすせそ</div>
            <div class="pack-label">Baris Sa</div>
          </button>
          <button class="writing-pack-card" data-type="hiragana" data-key="t_row">
            <div class="pack-chars">たちつてと</div>
            <div class="pack-label">Baris Ta</div>
          </button>
          <button class="writing-pack-card" data-type="hiragana" data-key="n_row">
            <div class="pack-chars">なにぬねの</div>
            <div class="pack-label">Baris Na</div>
          </button>
          <button class="writing-pack-card" data-type="hiragana" data-key="h_row">
            <div class="pack-chars">はひふへほ</div>
            <div class="pack-label">Baris Ha</div>
          </button>
          <button class="writing-pack-card" data-type="hiragana" data-key="m_row">
            <div class="pack-chars">まみむめも</div>
            <div class="pack-label">Baris Ma</div>
          </button>
          <button class="writing-pack-card" data-type="hiragana" data-key="y_row">
            <div class="pack-chars">や・ゆ・よ</div>
            <div class="pack-label">Baris Ya</div>
          </button>
          <button class="writing-pack-card" data-type="hiragana" data-key="r_row">
            <div class="pack-chars">らりるれろ</div>
            <div class="pack-label">Baris Ra</div>
          </button>
          <button class="writing-pack-card" data-type="hiragana" data-key="w_row">
            <div class="pack-chars">わ・を・ん</div>
            <div class="pack-label">Baris Wa & N</div>
          </button>
        </div>
        <button class="btn btn-primary writing-pack-all-btn" data-type="hiragana" data-key="all">
          <i data-lucide="edit-3" style="width: 15px; height: 15px;"></i> Latih Semua Hiragana (46 Huruf)
        </button>
      `;
    } else if (activeTab === 'katakana') {
      html = `
        <div class="writing-section-header">
          <span class="writing-section-title">Paket Huruf Katakana</span>
          <span class="writing-section-badge">10 Paket • 46 Huruf</span>
        </div>
        <div class="writing-pack-grid">
          <button class="writing-pack-card" data-type="katakana" data-key="vowels">
            <div class="pack-chars">アイウエオ</div>
            <div class="pack-label">Vokal Dasar</div>
          </button>
          <button class="writing-pack-card" data-type="katakana" data-key="k_row">
            <div class="pack-chars">カキクケコ</div>
            <div class="pack-label">Baris Ka</div>
          </button>
          <button class="writing-pack-card" data-type="katakana" data-key="s_row">
            <div class="pack-chars">サシスセソ</div>
            <div class="pack-label">Baris Sa</div>
          </button>
          <button class="writing-pack-card" data-type="katakana" data-key="t_row">
            <div class="pack-chars">タチツテト</div>
            <div class="pack-label">Baris Ta</div>
          </button>
          <button class="writing-pack-card" data-type="katakana" data-key="n_row">
            <div class="pack-chars">ナニヌネノ</div>
            <div class="pack-label">Baris Na</div>
          </button>
          <button class="writing-pack-card" data-type="katakana" data-key="h_row">
            <div class="pack-chars">ハヒフヘホ</div>
            <div class="pack-label">Baris Ha</div>
          </button>
          <button class="writing-pack-card" data-type="katakana" data-key="m_row">
            <div class="pack-chars">マミムメモ</div>
            <div class="pack-label">Baris Ma</div>
          </button>
          <button class="writing-pack-card" data-type="katakana" data-key="y_row">
            <div class="pack-chars">ヤ・ユ・ヨ</div>
            <div class="pack-label">Baris Ya</div>
          </button>
          <button class="writing-pack-card" data-type="katakana" data-key="r_row">
            <div class="pack-chars">ラリルレロ</div>
            <div class="pack-label">Baris Ra</div>
          </button>
          <button class="writing-pack-card" data-type="katakana" data-key="w_row">
            <div class="pack-chars">ワ・ヲ・ン</div>
            <div class="pack-label">Baris Wa & N</div>
          </button>
        </div>
        <button class="btn btn-primary writing-pack-all-btn" data-type="katakana" data-key="all">
          <i data-lucide="edit-3" style="width: 15px; height: 15px;"></i> Latih Semua Katakana (46 Huruf)
        </button>
      `;
    } else if (activeTab === 'kanji') {
      html = `
        <div class="writing-section-header">
          <span class="writing-section-title">Kategori Kanji N5</span>
          <span class="writing-section-badge">4 Kategori • 80 Kanji</span>
        </div>
        <div class="writing-pack-grid">
          <button class="writing-pack-card" data-type="kanji" data-key="numbers_time">
            <div class="pack-chars">一二三四五</div>
            <div class="pack-label">Angka & Waktu</div>
          </button>
          <button class="writing-pack-card" data-type="kanji" data-key="nature_places">
            <div class="pack-chars">日月火水木</div>
            <div class="pack-label">Alam & Tempat</div>
          </button>
          <button class="writing-pack-card" data-type="kanji" data-key="people_family">
            <div class="pack-chars">人子男女手</div>
            <div class="pack-label">Orang & Keluarga</div>
          </button>
          <button class="writing-pack-card" data-type="kanji" data-key="places_buildings">
            <div class="pack-chars">国店駅電車</div>
            <div class="pack-label">Tempat & Bangunan</div>
          </button>
        </div>
        <button class="btn btn-primary writing-pack-all-btn" data-type="kanji" data-key="all">
          <i data-lucide="edit-3" style="width: 15px; height: 15px;"></i> Latih Semua Kanji N5 (80 Huruf)
        </button>
      `;
    } else if (activeTab === 'kanji-n4') {
      html = `
        <div class="writing-section-header">
          <span class="writing-section-title">Kategori Kanji N4</span>
          <span class="writing-section-badge">4 Kategori • 80 Kanji</span>
        </div>
        <div class="writing-pack-grid">
          <button class="writing-pack-card" data-type="kanji-n4" data-key="movement">
            <div class="pack-chars">出入立開閉</div>
            <div class="pack-label">Gerakan</div>
          </button>
          <button class="writing-pack-card" data-type="kanji-n4" data-key="time_body">
            <div class="pack-chars">朝昼夜春夏</div>
            <div class="pack-label">Waktu & Tubuh</div>
          </button>
          <button class="writing-pack-card" data-type="kanji-n4" data-key="society_business">
            <div class="pack-chars">民使作仕事</div>
            <div class="pack-label">Masyarakat & Bisnis</div>
          </button>
          <button class="writing-pack-card" data-type="kanji-n4" data-key="school_action">
            <div class="pack-chars">考教室文字</div>
            <div class="pack-label">Sekolah & Aksi</div>
          </button>
        </div>
        <button class="btn btn-primary writing-pack-all-btn" data-type="kanji-n4" data-key="all">
          <i data-lucide="edit-3" style="width: 15px; height: 15px;"></i> Latih Semua Kanji N4 (80 Huruf)
        </button>
      `;
    } else if (activeTab === 'kanji-n3') {
      html = `
        <div class="writing-section-header">
          <span class="writing-section-title">Kategori Kanji N3</span>
          <span class="writing-section-badge">4 Kategori • 80 Kanji</span>
        </div>
        <div class="writing-pack-grid">
          <button class="writing-pack-card" data-type="kanji-n3" data-key="society">
            <div class="pack-chars">政治経済法</div>
            <div class="pack-label">Masyarakat</div>
          </button>
          <button class="writing-pack-card" data-type="kanji-n3" data-key="business_science">
            <div class="pack-chars">研究科数算</div>
            <div class="pack-label">Bisnis & Sains</div>
          </button>
          <button class="writing-pack-card" data-type="kanji-n3" data-key="mind_emotion">
            <div class="pack-chars">想念感情緒</div>
            <div class="pack-label">Pikiran & Emosi</div>
          </button>
          <button class="writing-pack-card" data-type="kanji-n3" data-key="action_state">
            <div class="pack-chars">選決認表現</div>
            <div class="pack-label">Aksi & Keadaan</div>
          </button>
        </div>
        <button class="btn btn-primary writing-pack-all-btn" data-type="kanji-n3" data-key="all">
          <i data-lucide="edit-3" style="width: 15px; height: 15px;"></i> Latih Semua Kanji N3 (80 Huruf)
        </button>
      `;
    }

    grid.innerHTML = html;
    if (window.lucide) lucide.createIcons({ root: grid });
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

    container.querySelectorAll('.writing-pack-card, .writing-pack-all-btn, .btn-primary').forEach(el => {
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

    if (fromChapter) {
      renderTopbar(`Tulis Kanji — Bab ${fromChapter}`, false, `#/chapter/${fromChapter}`);
    } else {
      renderTopbar('Latihan Menulis', false, '#/');
    }

    container.innerHTML = `
      <div class="writing-practice-layout fade-in">
        
        ${fromChapter ? `
          <!-- Deep-link from Minna / Chapter Mode -->
          <div class="writing-meta-bar">
            <a href="#/chapter/${fromChapter}" class="writing-back-btn">
              <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Bab ${fromChapter}
            </a>
            <div class="writing-category-badge">Kosakata Bab ${fromChapter}</div>
          </div>

          <!-- Character info cue -->
          <div class="writing-cue-card">
            <div>
              <div class="cue-tag">LATIHAN MENULIS</div>
              <div class="cue-main-row">
                <span class="cue-char">${char.jp}</span>
                ${char.en ? `<span class="cue-meaning">· ${char.en}</span>` : ''}
              </div>
            </div>
            <button id="btn-audio-pronounce" class="writing-cue-audio" title="Dengarkan Suara">
              <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
            </button>
          </div>
        ` : `
          <!-- Standard Core Mode -->
          <div class="writing-meta-bar">
            <button id="btn-back-menu" class="writing-back-btn">
              <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Menu
            </button>
            <div class="writing-meta-right">
              <span class="writing-counter-pill">${currentIndex + 1} / ${sessionQueue.length}</span>
              <div class="writing-category-badge">${categoryTitle}</div>
            </div>
          </div>

          <!-- Slim Progress Track -->
          <div class="writing-progress-track">
            <div class="writing-progress-bar" style="width: ${((currentIndex + 1) / sessionQueue.length) * 100}%"></div>
          </div>

          <!-- Cue Prompt -->
          <div class="writing-cue-card">
            <div>
              <div class="cue-tag">TULIS KARAKTER</div>
              <div class="cue-main-row">
                <span class="cue-char">${char.rom ? char.rom.toUpperCase() : char.jp}</span>
                ${char.en ? `<span class="cue-meaning">(${char.en})</span>` : ''}
              </div>
            </div>
            <button id="btn-audio-pronounce" class="writing-cue-audio" aria-label="Putar Pengucapan" title="Putar Suara">
              <i data-lucide="volume-2" style="width: 17px; height: 17px;"></i>
            </button>
          </div>
        `}

        <!-- Brush Toolbar -->
        <div class="writing-toolbar">
          <span class="toolbar-label">Kuas</span>
          <div class="toolbar-group">
            <button id="btn-brush-ultra-thin" class="toolbar-dot-btn ${brushSizePreset === 'ultra-thin' ? 'active' : ''}" title="Sangat Tipis (2px)">
              <div class="dot-inner" style="width: 2.5px; height: 2.5px;"></div>
            </button>
            <button id="btn-brush-thin" class="toolbar-dot-btn ${brushSizePreset === 'thin' ? 'active' : ''}" title="Tipis (4px)">
              <div class="dot-inner" style="width: 4.5px; height: 4.5px;"></div>
            </button>
            <button id="btn-brush-medium" class="toolbar-dot-btn ${brushSizePreset === 'medium' ? 'active' : ''}" title="Sedang (8px)">
              <div class="dot-inner" style="width: 7px; height: 7px;"></div>
            </button>
            <button id="btn-brush-thick" class="toolbar-dot-btn ${brushSizePreset === 'thick' ? 'active' : ''}" title="Tebal (12px)">
              <div class="dot-inner" style="width: 10px; height: 10px;"></div>
            </button>
            <button id="btn-brush-extra-thick" class="toolbar-dot-btn ${brushSizePreset === 'extra-thick' ? 'active' : ''}" title="Sangat Tebal (18px)">
              <div class="dot-inner" style="width: 13.5px; height: 13.5px;"></div>
            </button>
          </div>
          <div class="toolbar-sep"></div>
          <span class="toolbar-label">Tinta</span>
          <div class="toolbar-group">
            <button id="btn-color-default" class="toolbar-color-btn ${brushColorPreset === 'default' ? 'active' : ''}" title="Default">
              <div class="color-swatch" style="background: linear-gradient(135deg, var(--text-main) 50%, var(--bg-hover) 50%);"></div>
            </button>
            <button id="btn-color-vermilion" class="toolbar-color-btn ${brushColorPreset === 'vermilion' ? 'active' : ''}" title="Shu (Merah)">
              <div class="color-swatch" style="background: var(--red);"></div>
            </button>
            <button id="btn-color-indigo" class="toolbar-color-btn ${brushColorPreset === 'indigo' ? 'active' : ''}" title="Ai (Biru)">
              <div class="color-swatch" style="background: var(--blue);"></div>
            </button>
            <button id="btn-color-bamboo" class="toolbar-color-btn ${brushColorPreset === 'bamboo' ? 'active' : ''}" title="Take (Hijau)">
              <div class="color-swatch" style="background: var(--green);"></div>
            </button>
          </div>
        </div>

        <!-- Canvas -->
        <div class="writing-canvas-container">
          <div class="genkouyoushi-grid genkouyoushi-grid-diagonal"></div>
          <div id="writing-guide" class="writing-guide-overlay ${showGuide ? 'show-guide' : ''} ${isComparing ? 'show-comparison' : ''}">
            ${char.jp}
          </div>
          <canvas id="writing-canvas" class="writing-canvas" width="640" height="640"></canvas>
        </div>

        <!-- Actions -->
        <div id="writing-controls">
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
      document.querySelectorAll('.toolbar-dot-btn').forEach(btn => btn.classList.remove('active'));
      const activeBtn = document.getElementById(`btn-brush-${preset}`);
      if (activeBtn) activeBtn.classList.add('active');
    };

    const brushPresets = ['ultra-thin', 'thin', 'medium', 'thick', 'extra-thick'];
    brushPresets.forEach(preset => {
      const btn = document.getElementById(`btn-brush-${preset}`);
      if (btn) {
        btn.addEventListener('click', () => selectBrushSize(preset));
      }
    });

    // Color picker logic
    const selectBrushColor = (preset) => {
      brushColorPreset = preset;
      document.querySelectorAll('.toolbar-color-btn').forEach(btn => btn.classList.remove('active'));
      const activeBtn = document.getElementById(`btn-color-${preset}`);
      if (activeBtn) activeBtn.classList.add('active');
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
        <div class="writing-action-row">
          <button id="btn-clear-canvas" class="writing-action-btn" title="Hapus Gambar">
            <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i> Hapus
          </button>
          
          <button id="btn-undo-canvas" class="writing-action-btn" title="Urung Goresan Terakhir" ${undoStack.length === 0 ? 'disabled' : ''}>
            <i data-lucide="undo" style="width: 14px; height: 14px;"></i> Urung
          </button>
          
          <button id="btn-toggle-hint" class="writing-action-btn ${showGuide ? 'active-hint' : ''}" title="Tampilkan Panduan Trace">
            <i data-lucide="${showGuide ? 'eye-off' : 'eye'}" style="width: 14px; height: 14px;"></i> Petunjuk
          </button>
        </div>

        <button id="btn-compare-canvas" class="btn btn-primary writing-compare-btn">
          <i data-lucide="columns" style="width: 16px; height: 16px;"></i> Bandingkan Coretan
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
        if (guideEl) {
          if (showGuide) {
            guideEl.classList.add('show-guide');
          } else {
            guideEl.classList.remove('show-guide');
          }
        }
        renderControls(); // Redraw buttons for state changes
      });

      document.getElementById('btn-compare-canvas').addEventListener('click', () => {
        isComparing = true;
        const guideEl = document.getElementById('writing-guide');
        if (guideEl) {
          guideEl.classList.remove('show-guide');
          guideEl.classList.add('show-comparison');
        }
        
        // Auto announce pronunciation for auditory confirmation upon comparison
        window.playAudio(sessionQueue[currentIndex].jp);

        renderControls();
      });

    } else {
      // Comparison View (Evaluation Buttons)
      controls.innerHTML = `
        <div class="writing-eval-hint">
          Bandingkan goresan Anda dengan referensi karakter di atas
        </div>
        
        <div class="writing-eval-row">
          <button id="btn-practice-retry" class="btn btn-secondary">
            <i data-lucide="rotate-ccw" style="width: 16px; height: 16px;"></i> Latih Lagi
          </button>
          
          <button id="btn-practice-correct" class="btn btn-primary">
            <i data-lucide="check" style="width: 16px; height: 16px;"></i> Cocok
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
    renderTopbar('Latihan Menulis', false, '#/');

    container.innerHTML = `
      <div style="max-width: 440px; margin: 40px auto 80px; text-align: center; padding: 0 16px;" class="fade-in">
        <div class="writing-complete-hero">
          <i data-lucide="award" style="width:40px;height:40px;"></i>
        </div>
        
        <h2 style="font-size: var(--text-xl); font-weight: 800; color: var(--text-main); margin-bottom: 6px; letter-spacing: var(--tracking-tight);">Latihan Selesai!</h2>
        <p style="color: var(--text-secondary); font-size: var(--text-xs); margin-bottom: 24px; line-height: 1.6; max-width: 340px; margin-left: auto; margin-right: auto;">
          Hebat! Anda telah menyelesaikan latihan menulis deliberate untuk paket ini. Ingatan kinestetik Anda semakin kuat!
        </p>

        <div class="writing-stats-card">
          <div>
            <div class="stat-value">${sessionQueue.length}</div>
            <div class="stat-label">Total Karakter</div>
          </div>
          
          <div class="stat-divider"></div>
          
          <div>
            <div class="stat-value">100%</div>
            <div class="stat-label">Keberhasilan</div>
          </div>
        </div>

        ${fromChapter ? `
          <a href="#/chapter/${fromChapter}" class="btn btn-primary btn-lg" style="width: 100%; height: 48px; font-weight: 800; border-radius: var(--radius-md); text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: var(--text-xs);">
            <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i> Kembali ke Materi Bab ${fromChapter}
          </a>
          <button id="btn-restart-writing" class="btn btn-secondary btn-lg" style="width: 100%; height: 44px; font-weight: 700; border-radius: var(--radius-md); margin-top: 10px; font-size: var(--text-xs);">
            Latih Ulang Huruf ${sessionQueue[0] ? sessionQueue[0].jp : ''}
          </button>
        ` : `
          <button id="btn-restart-writing" class="btn btn-primary btn-lg" style="width: 100%; height: 48px; font-weight: 800; border-radius: var(--radius-md); font-size: var(--text-xs);">
            Mulai Latihan Baru
          </button>
        `}
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
      
      // Reset width and time based on preset
      const baseWidths = { 'ultra-thin': 3, 'thin': 5, 'medium': 8, 'thick': 12, 'extra-thick': 17 };
      currentWidth = baseWidths[brushSizePreset] || 8;
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
        if (brushSizePreset === 'ultra-thin') {
          targetWidth = 1.5 + e.pressure * 4; // 1.5px to 5.5px
        } else if (brushSizePreset === 'thin') {
          targetWidth = 2.5 + e.pressure * 6; // 2.5px to 8.5px
        } else if (brushSizePreset === 'thick') {
          targetWidth = 6 + e.pressure * 16; // 6px to 22px
        } else if (brushSizePreset === 'extra-thick') {
          targetWidth = 9 + e.pressure * 22; // 9px to 31px
        } else {
          targetWidth = 4 + e.pressure * 10; // 4px to 14px (Medium)
        }
      } else {
        // Slower movement = thicker calligraphic ink line, faster movement = thinner tapered line
        const speedFactor = Math.min(2.5, velocity); // clamp speed factor
        if (brushSizePreset === 'ultra-thin') {
          targetWidth = 5.5 - speedFactor * 1.5; // 2px to 5.5px
        } else if (brushSizePreset === 'thin') {
          targetWidth = 8.5 - speedFactor * 2.2; // 3px to 8.5px
        } else if (brushSizePreset === 'thick') {
          targetWidth = 19 - speedFactor * 5.0; // 6.5px to 19px
        } else if (brushSizePreset === 'extra-thick') {
          targetWidth = 26 - speedFactor * 7.0; // 8.5px to 26px
        } else {
          targetWidth = 13 - speedFactor * 3.4; // 4.5px to 13px (Medium)
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
