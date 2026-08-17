import { renderTopbar, getDisplayMode, navigateChapter, showToast, renderBackBtn, renderLoader } from '../components/layout.js';
import { loadChapter, MNN_INDEX } from '../data/chapter_index.js';
import { addSRSItem, removeSRSItem, getSRSItemStatus } from '../srs.js';
import { speakJP } from '../audio.js';
import { isUnitCompleted } from '../store.js';
import { getUnitDetails } from '../data/curriculum.js';

window._showPremiumToast = showToast;

function getAvatarColor(name) {
  if (!name) return '#222222';
  const str = name.replace(/[^a-zA-Z]/g, '');
  if (!str) return '#222222';
  const colors = [
    '#223E3E', // deep teal
    '#252D3D', // slate blue
    '#2D2230', // muted plum
    '#222E26', // sage green
    '#332522', // warm rust
    '#242426', // charcoal
    '#2E2A20'  // muted gold
  ];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}


// Expose as window.playAudio for inline onclick handlers in templates
if (!window.playAudio) {
  window.playAudio = (text) => speakJP(text, 0.85);
}

export function ChapterView(container, params) {
  const parsed = parseInt(params.id);
  const chapterId = isNaN(parsed) ? 1 : parsed;
  const unitDetails = getUnitDetails(chapterId);
  const backRoute = unitDetails ? `#/phase/${unitDetails.phaseId}` : `#/curriculum`;

  renderTopbar(`Bab ${chapterId}`, true, backRoute);

  // Show loading skeleton while chapter data loads
  renderLoader(container, `Memuat Bab ${chapterId}...`);

  loadChapter(chapterId).then(chapterData => {
    if (!chapterData) {
      container.innerHTML = '<h2>Chapter not found</h2>';
      return;
    }
    _initChapterView(container, chapterId, chapterData, params);
  }).catch(err => {
    container.innerHTML = `<div style="padding:40px;text-align:center;color:var(--red);">Gagal memuat bab: ${err.message}</div>`;
  });
}

function _initChapterView(container, chapterId, chapterData, params) {
  // Persist theory read flag in localStorage

  // Persist theory read flag in localStorage
  localStorage.setItem(`nihongo_master_theory_ch${chapterId}`, 'true');

  // Default active tab (check url query params first)
  let activeTab = chapterId === 0 ? 'kana' : 'vocab'; 
  const hash = window.location.hash;
  if (hash.includes('?')) {
    const query = hash.split('?')[1];
    const urlParams = new URLSearchParams(query);
    const urlTab = urlParams.get('tab');
    const validTabsForZero = ['kana', 'pelafalan', 'vocab_salam'];
    const validTabsForOthers = ['vocab', 'grammar', 'conversation'];
    const isValid = chapterId === 0 ? validTabsForZero.includes(urlTab) : validTabsForOthers.includes(urlTab);
    if (isValid) {
      activeTab = urlTab;
    }
  }

  // Active state for flashcard
  let activeVocabIndex = 0;
  let isVocabFlipped = false;
  let selectedKanaScript = 'hiragana';

  // Helper to format Japanese text based on global display mode
  const formatJP = (item) => {
    const mode = getDisplayMode();
    if (mode === 'romaji') return item.rom || item.kana;
    if (mode === 'furigana') {
      if (!item.kanji) return item.kana;
      return `<ruby>${item.kanji}<rt>${item.kana}</rt></ruby>`;
    }
    return item.kanji || item.kana;
  };

  const renderContent = () => {
    const renderKanaChart = () => {
      const hira = [
        ['あ a', 'い i', 'う u', 'え e', 'お o'],
        ['か ka', 'き ki', 'く ku', 'け ke', 'こ ko'],
        ['さ sa', 'し shi', 'す su', 'せ se', 'そ so'],
        ['た ta', 'ち chi', 'つ tsu', 'て te', 'と to'],
        ['な na', 'に ni', 'ぬ nu', 'ね ne', 'の no'],
        ['は ha', 'ひ hi', 'ふ fu', 'へ he', 'ほ ho'],
        ['ま ma', 'み mi', 'む mu', 'め me', 'も mo'],
        ['や ya', '', 'ゆ yu', '', 'よ yo'],
        ['ら ra', 'り ri', 'る ru', 'れ re', 'ろ ro'],
        ['わ wa', '', '', '', 'を wo'],
        ['ん n', '', '', '', '']
      ];
      
      const hiraDaku = [
        ['が ga', 'ぎ gi', 'ぐ gu', 'げ ge', 'ご go'],
        ['ざ za', 'じ ji', 'ず zu', 'ぜ ze', 'ぞ zo'],
        ['だ da', 'ぢ ji', 'づ zu', 'で de', 'ど do'],
        ['ば ba', 'び bi', 'ぶ bu', 'べ be', 'ぼ bo'],
        ['ぱ pa', 'ぴ pi', 'ぷ pu', 'ぺ pe', 'ぽ po']
      ];

      const hiraYoon = [
        ['きゃ kya', 'きゅ kyu', 'きょ kyo'],
        ['しゃ sha', 'しゅ shu', 'しょ sho'],
        ['ちゃ cha', 'ちゅ chu', 'ちょ cho'],
        ['にゃ nya', 'にゅ nyu', 'にょ nyo'],
        ['ひゃ hya', 'ひゅ hyu', 'ひょ hyo'],
        ['みゃ mya', 'みゅ myu', 'みょ myo'],
        ['りゃ rya', 'りゅ ryu', 'りょ ryo'],
        ['ぎゃ gya', 'ぎゅ gyu', 'ぎょ gyo'],
        ['じゃ ja', 'じゅ ju', 'じょ jo'],
        ['びゃ bya', 'びゅ byu', 'びょ byo'],
        ['ぴゃ pya', 'ぴゅ pyu', 'ぴょ pyo']
      ];

      const kata = [
        ['ア a', 'イ i', 'ウ u', 'エ e', 'オ o'],
        ['カ ka', 'キ ki', 'ク ku', 'ケ ke', 'コ ko'],
        ['サ sa', 'シ shi', 'ス su', 'セ se', 'ソ so'],
        ['タ ta', 'チ chi', 'ツ tsu', 'テ te', 'ト to'],
        ['ナ na', 'ニ ni', 'ヌ nu', 'ネ ne', 'ノ no'],
        ['ハ ha', 'ヒ hi', 'フ fu', 'ヘ he', 'ホ ho'],
        ['マ ma', 'ミ mi', 'ム mu', 'メ me', 'モ mo'],
        ['ヤ ya', '', 'ユ yu', '', 'ヨ yo'],
        ['ラ ra', 'リ ri', 'ル ru', 'レ re', 'ロ ro'],
        ['ワ wa', '', '', '', 'ヲ wo'],
        ['ン n', '', '', '', '']
      ];

      const kataDaku = [
        ['ガ ga', 'ギ gi', 'グ gu', 'ゲ ge', 'ゴ go'],
        ['ザ za', 'ジ ji', 'ズ zu', 'ぜ ze', 'ゾ zo'],
        ['ダ da', 'ヂ ji', 'ヅ zu', 'デ de', 'ド do'],
        ['バ ba', 'ビ bi', 'ブ bu', 'ベ be', 'ボ bo'],
        ['パ pa', 'ピ pi', 'プ pu', 'ペ pe', 'ポ po']
      ];

      const kataYoon = [
        ['キャ kya', 'キュ kyu', 'キョ kyo'],
        ['シャ sha', 'シュ shu', 'ショ sho'],
        ['チャ cha', 'チュ chu', 'チョ cho'],
        ['ニャ nya', 'ニュ nyu', 'ニョ nyo'],
        ['ヒゃ hya', 'ヒュ hyu', 'ヒょ hyo'], // 'ヒゃ hya' -> 'ヒャ hya'
        ['ミャ mya', 'ミュ myu', 'ミョ myo'],
        ['リャ rya', 'リュ ryu', 'リョ ryo'],
        ['ギャ gya', 'ギュ gyu', 'ギょ gyo'], // 'ギョ gyo'
        ['ジャ ja', 'ジュ ju', 'ジョ jo'],
        ['ビャ bya', 'ビュ byu', 'ビョ byo'],
        ['ピャ pya', 'ピュ pyu', 'ピョ pyo']
      ];

      // Fix typos in grid data for correctness
      hira[3][0] = 'た ta';
      hira[3][1] = 'ち chi';
      hira[3][2] = 'つ tsu';
      hira[3][3] = 'て te';
      hira[3][4] = 'と to';
      hira[8][1] = 'り ri';

      hiraDaku[0][0] = 'が ga';

      kataYoon[4][0] = 'ヒャ hya';
      kataYoon[4][2] = 'ヒョ hyo';
      kataYoon[7][2] = 'ギョ gyo';

      const isHira = selectedKanaScript === 'hiragana';
      const activeGojuon = isHira ? hira : kata;
      const activeDakuon = isHira ? hiraDaku : kataDaku;
      const activeYoon = isHira ? hiraYoon : kataYoon;

      const renderGrid = (badge, title, desc, grid, cols = 5) => `
        <div class="kana-group-section">
          <div class="kana-group-head">
            <span class="kana-group-badge">${badge}</span>
            <span style="font-size: 13px; font-weight: 700; color: var(--text-main);">${title}</span>
            ${desc ? `<span class="kana-group-desc">· ${desc}</span>` : ''}
          </div>
          <div class="kana-grid ${cols === 3 ? 'kana-grid-3' : 'kana-grid-5'}">
            ${grid.flat().map(cell => {
              if (!cell) return `<div style="visibility: hidden;"></div>`;
              const [jp, rom] = cell.split(' ');
              return `
                <div onclick="window.playAudio('${jp}')" class="kana-cell" title="${jp} (${rom})">
                  <span class="kana-char">${jp}</span>
                  <span class="kana-rom">${rom}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

      return `
        <div class="card" style="margin-bottom: 24px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 22px;">
          <div class="kana-top-bar">
            <div class="kana-top-info">
              <h2>Tabel Huruf Kana Komprehensif</h2>
              <p>Ketuk kotak huruf untuk mendengarkan audio pelafalan aslinya.</p>
            </div>
            <div class="kana-script-tabs">
              <button class="kana-script-btn ${selectedKanaScript === 'hiragana' ? 'active' : ''}" data-script="hiragana">Hiragana (ひらがな)</button>
              <button class="kana-script-btn ${selectedKanaScript === 'katakana' ? 'active' : ''}" data-script="katakana">Katakana (カタカナ)</button>
            </div>
          </div>
          
          <div class="kana-sections-container" style="margin-top: 18px;">
            ${renderGrid('Dasar', 'Gojuon · 46 Huruf', 'Vokal A-I-U-E-O & Konsonan Utama', activeGojuon, 5)}
            ${renderGrid('Turunan', 'Dakuon & Handakuon · 25 Huruf', 'Bunyi Ten-ten (゛) & Maru (゜)', activeDakuon, 5)}
            ${renderGrid('Kombinasi', 'Yoon · 33 Bunyi', 'Kombinasi Konsonan + ya/yu/yo kecil', activeYoon, 3)}
          </div>
        </div>
      `;
    };

    // Chapter nav helpers
    const sorted = [...MNN_INDEX].sort((a, b) => a.id - b.id);
    const curIdx = sorted.findIndex(c => c.id === chapterId);
    const prevCh = curIdx > 0 ? sorted[curIdx - 1] : null;
    const nextCh = curIdx < sorted.length - 1 ? sorted[curIdx + 1] : null;

    let backTrack = 'all';
    if (chapterId === 0) {
      backTrack = 'pra-mnn';
    } else if (chapterId >= 1 && chapterId <= 25) {
      backTrack = 'minna1';
    } else if (chapterId >= 26 && chapterId <= 50) {
      backTrack = 'minna2';
    }

    const unitDetails = getUnitDetails(chapterId);
    const chapterCleanTitle = chapterData && chapterData.title ? chapterData.title.replace(/^Bab\s*\d+\s*:\s*/i, '').trim() : '';

    let html = `
      <div class="chapter-container page-container-standard fade-in" style="padding-bottom: 60px;">
        <!-- Breadcrumb Navigation -->
        <div style="margin-bottom: 14px;">
          <nav class="phase-hero-nav" aria-label="Breadcrumb">
            <a href="#/curriculum?track=${backTrack}" class="phase-nav-back">
              <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Kurikulum
            </a>
            ${unitDetails && unitDetails.phaseId !== 'fase-aksara' && chapterId !== 0 ? `
              <span class="phase-nav-sep">/</span>
              <a href="#/phase/${unitDetails.phaseId}" class="phase-nav-back">${unitDetails.phaseTitle.includes(':') ? unitDetails.phaseTitle.split(':')[0].trim() : unitDetails.phaseTitle}</a>
            ` : chapterId === 0 ? `
              <span class="phase-nav-sep">/</span>
              <a href="#/phase/fase-aksara" class="phase-nav-back">Pra-MNN</a>
            ` : ''}
            <span class="phase-nav-sep">/</span>
            <span class="phase-nav-level">${chapterId === 0 ? 'Bab 0 &middot; Fondasi Aksara' : `Bab ${chapterId} &middot; Materi`}</span>
          </nav>
        </div>

      <div style="margin-bottom: 22px;">
        <h1 style="font-size: 1.5rem; font-weight: 750; color: var(--text-main); margin-bottom: 6px; letter-spacing: -0.025em; line-height: 1.25;">${chapterData.title}</h1>
        <p style="color: var(--text-secondary); font-size: 13.5px; line-height: 1.55; margin: 0; max-width: 600px;">${chapterData.desc}</p>
      </div>

      <!-- STICKY TABS (Segmented Control) -->
      <div class="chapter-tabs-sticky-wrap">
        <div class="segmented-control" style="width: 100%; max-width: 480px;">
          ${chapterId === 0 ? `
            <button class="segmented-btn tab-btn ${activeTab === 'kana' ? 'active' : ''}" data-tab="kana">Huruf Kana</button>
            <button class="segmented-btn tab-btn ${activeTab === 'pelafalan' ? 'active' : ''}" data-tab="pelafalan">Pelafalan</button>
            <button class="segmented-btn tab-btn ${activeTab === 'vocab_salam' ? 'active' : ''}" data-tab="vocab_salam">Ungkapan Salam</button>
          ` : `
            <button class="segmented-btn tab-btn ${activeTab === 'vocab' ? 'active' : ''}" data-tab="vocab">Kosakata</button>
            <button class="segmented-btn tab-btn ${activeTab === 'grammar' ? 'active' : ''}" data-tab="grammar">Tata Bahasa</button>
            <button class="segmented-btn tab-btn ${activeTab === 'conversation' ? 'active' : ''}" data-tab="conversation">Percakapan</button>
          `}
        </div>
      </div>

      <div class="tab-content">
    `;

    // TAB: KANA (Only for Chapter 0)
    if (activeTab === 'kana' && chapterId === 0) {
      html += renderKanaChart();
    }

    // TAB: PELAFALAN (Only for Chapter 0)
    if (activeTab === 'pelafalan' && chapterId === 0) {
      html += `
        <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px;">
          ${chapterData.grammar.map((g, idx) => `
            <div class="card" style="padding: 16px 18px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); display: flex; flex-direction: column; gap: 8px;">
              <div>
                <span class="chapter-rule-badge">Aturan ${idx + 1}</span>
              </div>
              <h3 style="font-size: 14.5px; font-weight: 700; color: var(--text-main); margin: 0; line-height: 1.35;">${g.title}</h3>
              <p style="color: var(--text-secondary); font-size: 12.5px; margin: 0; line-height: 1.5;">${g.desc}</p>
              <ul style="padding-left: 18px; margin: 4px 0 0 0; display: flex; flex-direction: column; gap: 6px; font-size: 12.5px;">
                ${g.points.map(pt => `<li style="line-height: 1.5; color: var(--text-secondary);"><span style="color: var(--text-main);">${pt}</span></li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `;
    }

    // TAB: VOCAB_SALAM (Only for Chapter 0)
    if (activeTab === 'vocab_salam' && chapterId === 0) {
      const vocabList = chapterData.vocab || [];
      const currentVocab = vocabList[activeVocabIndex];

      html += `
        <div class="vocab-deck-wrapper">
          <div class="vocab-card-list-title">
            <span>Dek Aisatsu (Salam)</span>
            <span style="font-variant-numeric: tabular-nums;">${activeVocabIndex + 1} / ${vocabList.length}</span>
          </div>
          
          <div class="flip-card flip-card-vocab ${isVocabFlipped ? 'flipped' : ''}" id="vocab-flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="padding: 20px;">
                <div style="font-family: var(--font-jp); font-size: 2.5rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">
                  ${currentVocab.kana}
                </div>
                <span style="font-size: var(--text-xs); color: var(--text-muted); display: flex; align-items: center; gap: 4px;">
                  <i data-lucide="eye" style="width: 13px; height: 13px;"></i> Klik untuk melihat arti
                </span>
              </div>
              
              <div class="flip-card-back" style="padding: 20px;">
                <span style="font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 4px;">Arti</span>
                <div style="font-size: 1.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">
                  ${currentVocab.en}
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">
                  Romaji: ${currentVocab.rom}
                </div>
              </div>
            </div>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 8px;">
            <button class="btn btn-secondary" id="vocab-prev-btn" style="padding: 10px; border-radius: var(--radius-sm); width: 44px; height: 44px; justify-content: center; flex-shrink: 0;" ${activeVocabIndex === 0 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''}>
              <i data-lucide="chevron-left" style="width: 20px; height: 20px;"></i>
            </button>
            
            <button class="btn btn-primary" id="vocab-audio-btn" style="flex: 1; height: 44px; font-weight: 800; border-radius: var(--radius-sm); text-transform: uppercase; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
              Dengar Suara
            </button>
            
            <button class="btn btn-secondary" id="vocab-next-btn" style="padding: 10px; border-radius: var(--radius-sm); width: 44px; height: 44px; justify-content: center; flex-shrink: 0;" ${activeVocabIndex === vocabList.length - 1 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''}>
              <i data-lucide="chevron-right" style="width: 20px; height: 20px;"></i>
            </button>
          </div>
        </div>

        <!-- High-density Reference List -->
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 24px; padding-bottom: 8px; border-bottom: 1px solid var(--border);">
          <span style="font-size: var(--text-xs); font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: var(--tracking-wider);">
            Daftar Salam Aisatsu • ${vocabList.length} Ungkapan
          </span>
        </div>
        
        <div class="vocab-list-group">
          ${vocabList.map((v, vIdx) => `
            <div class="vocab-list-item vocab-list-row" data-vocab-idx="${vIdx}">
              <div class="vocab-item-top">
                <div class="vocab-item-jp">${v.kana}</div>
                <div class="vocab-item-actions">
                  <button class="vocab-list-play-btn" data-vocab-text="${v.kana}" style="width: 28px; height: 28px; border-radius: var(--radius-sm); background: var(--bg-elevated); color: var(--text-secondary); display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--border); cursor: pointer; transition: all 0.2s;" title="Dengarkan Suara">
                    <i data-lucide="volume-2" style="width: 12px; height: 12px;"></i>
                  </button>
                </div>
              </div>
              <div class="vocab-item-meaning">
                ${v.en} <span style="font-size: var(--text-3xs); color: var(--text-muted); font-family: var(--font-mono); margin-left: 6px;">(${v.rom})</span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Aisatsu Dialogue (Kaiwa) styled in Chat bubble format -->
        <div class="vocab-card-list-title" style="margin-top: 36px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
          <span>Simulasi Percakapan Salam (Kaiwa)</span>
        </div>
        
        <div style="max-width: 600px; margin: 16px auto 0 auto; width: 100%; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); overflow: hidden; display: flex; flex-direction: column;">
          <div style="padding: 16px 20px; display: flex; flex-direction: column; gap: 14px; background: var(--bg-main);">
            ${chapterData.conversation.dialogue.map((line, index) => {
              const isSelf = index % 2 === 0;
              return `
                <div style="display: flex; gap: 10px; align-items: flex-end; align-self: ${isSelf ? 'flex-end' : 'flex-start'}; flex-direction: ${isSelf ? 'row-reverse' : 'row'}; max-width: 88%;">
                  <div style="width: 28px; height: 28px; border-radius: var(--radius-sm); background: ${getAvatarColor(line.speaker)}; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 800; flex-shrink: 0; border: 1px solid var(--border-bright);">
                    ${line.speaker[0].toUpperCase()}
                  </div>
                  <div style="display: flex; flex-direction: column; align-items: ${isSelf ? 'flex-end' : 'flex-start'}; min-width: 0;">
                    <span style="font-size: 0.68rem; color: var(--text-muted); font-weight: 700; margin-bottom: 3px; padding: 0 4px;">${line.speaker}</span>
                    
                    <div class="dialogue-bubble" style="padding: 10px 14px; border-radius: var(--radius-md); ${isSelf ? 'background: var(--accent); color: var(--bg-main); border-bottom-right-radius: 2px;' : 'background: var(--bg-card); border: 1px solid var(--border); color: var(--text-main); border-bottom-left-radius: 2px;'}">
                      <div style="font-family: var(--font-jp); font-weight: 700; font-size: 0.98rem; margin-bottom: 4px; display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;">
                        <span>${line.jp}</span>
                        <button onclick="window.playAudio('${line.jp}')" style="background: ${isSelf ? 'var(--bg-main)' : 'var(--bg-hover)'}; border: none; color: ${isSelf ? 'var(--text-main)' : 'var(--text-secondary)'}; cursor: pointer; width: 22px; height: 22px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: -1px;">
                          <i data-lucide="volume-2" style="width: 11px; height: 11px;"></i>
                        </button>
                      </div>
                      <div style="font-size: 0.72rem; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-muted)'}; opacity: 0.8; font-family: var(--font-mono); margin-bottom: 2px;">${line.rom}</div>
                      <div style="font-size: 0.8rem; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-secondary)'}; opacity: 0.9;">${line.en}</div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // TAB: VOCABULARY (Chapter 1-50)
    if (activeTab === 'vocab' && chapterId > 0) {
      const vocabList = chapterData.vocab || [];
      const currentVocab = vocabList[activeVocabIndex];
      
      html += `
        <div class="vocab-deck-wrapper">
          <div class="vocab-card-list-title">
            <span>Dek Kartu Belajar</span>
            <span style="font-variant-numeric: tabular-nums;">${activeVocabIndex + 1} / ${vocabList.length}</span>
          </div>
          
          <div class="flip-card flip-card-vocab ${isVocabFlipped ? 'flipped' : ''}" id="vocab-flip-card">
            <div class="flip-card-inner">
              <!-- Depan (Japanese) -->
              <div class="flip-card-front" style="padding: 20px;">
                <div style="font-family: var(--font-jp); font-size: ${currentVocab.kanji && currentVocab.kanji.length > 5 ? '2.0rem' : '2.8rem'}; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">
                  ${formatJP(currentVocab)}
                </div>
                <span style="font-size: var(--text-xs); color: var(--text-muted); display: flex; align-items: center; gap: 4px;">
                  <i data-lucide="eye" style="width: 13px; height: 13px;"></i> Klik untuk melihat arti
                </span>
              </div>
              
              <!-- Belakang (Translation) -->
              <div class="flip-card-back" style="padding: 20px;">
                <span style="font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 4px;">Arti</span>
                <div style="font-size: 1.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px; text-align: center; max-width: 100%; white-space: normal; line-height: 1.3;">
                  ${currentVocab.en}
                </div>
                ${currentVocab.kanji && currentVocab.kana ? `
                  <div style="font-family: var(--font-jp); font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 4px;">
                    Cara baca: ${currentVocab.kana}
                  </div>
                ` : ''}
                ${currentVocab.rom ? `
                  <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
                    Romaji: ${currentVocab.rom}
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
          
          <!-- Controls -->
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 8px;">
            <button class="btn btn-secondary" id="vocab-prev-btn" style="padding: 10px; border-radius: var(--radius-sm); width: 44px; height: 44px; justify-content: center; flex-shrink: 0;" ${activeVocabIndex === 0 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''}>
              <i data-lucide="chevron-left" style="width: 20px; height: 20px;"></i>
            </button>
            
            <button class="btn btn-primary" id="vocab-audio-btn" style="flex: 1; height: 44px; font-weight: 800; border-radius: var(--radius-sm); text-transform: uppercase; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
              Dengar Suara
            </button>
            
            <button class="btn btn-secondary" id="vocab-next-btn" style="padding: 10px; border-radius: var(--radius-sm); width: 44px; height: 44px; justify-content: center; flex-shrink: 0;" ${activeVocabIndex === vocabList.length - 1 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''}>
              <i data-lucide="chevron-right" style="width: 20px; height: 20px;"></i>
            </button>
          </div>
        </div>
        
        <!-- High-density Reference List -->
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 24px; padding-bottom: 8px; border-bottom: 1px solid var(--border); flex-wrap: wrap;">
          <span style="font-size: var(--text-xs); font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: var(--tracking-wider);">
            Daftar Kosakata Bab ${chapterId} • ${vocabList.length} Kata
          </span>
          <button id="btn-chapter-sync-all-srs" class="btn btn-secondary" style="font-size: var(--text-3xs); padding: 5px 12px; border-radius: var(--radius-sm); font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
            <i data-lucide="layers" style="width: 12px; height: 12px; color: var(--accent);"></i> Antrekan Semua ke SRS
          </button>
        </div>
        
        <div class="vocab-list-group">
          ${vocabList.map((v, vIdx) => {
            const itemId = `vocab-${v.kana || v.kanji || v.rom}`;
            const srsStatus = getSRSItemStatus(itemId);
            
            const kanjis = (v.kanji || '').split('').filter(c => c >= '\u4e00' && c <= '\u9faf');
            let writingLinksHtml = '';
            if (kanjis.length > 0) {
              writingLinksHtml = `
                <div class="vocab-item-kanji-bar">
                  <span style="font-size: var(--text-3xs); color: var(--text-muted); font-weight: 600;">Tulis:</span>
                  ${kanjis.map(kj => `
                    <button class="vocab-kanji-chip no-print kanji-write-btn" data-kanji="${kj}" data-word="${v.kanji || ''}" data-meaning="${(v.en || v.id || '').replace(/"/g, '&quot;')}" onclick="event.stopPropagation();">
                      <i data-lucide="pen-tool" style="width: 9px; height: 9px;"></i> ${kj}
                    </button>
                  `).join('')}
                </div>
              `;
            }
            
            let srsActionHtml = '';
            if (!srsStatus) {
              srsActionHtml = `
                <button class="vocab-row-srs-btn add no-print" data-vocab-id="${itemId}" title="Masukkan ke Antrean SRS" style="background: var(--bg-elevated); border: 1px solid var(--border); color: var(--text-muted); padding: 4px 10px; border-radius: var(--radius-sm); font-size: var(--text-3xs); cursor: pointer; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
                  <i data-lucide="plus" style="width:11px;height:11px;"></i> Antrekan
                </button>
              `;
            } else if (srsStatus === 'learning' || srsStatus === 'new') {
              srsActionHtml = `
                <button class="vocab-row-srs-btn remove no-print" data-vocab-id="${itemId}" title="Hapus dari SRS" style="background: var(--accent-dim); border: 1px solid var(--border-accent); color: var(--accent); padding: 4px 10px; border-radius: var(--radius-sm); font-size: var(--text-3xs); cursor: pointer; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
                  <i data-lucide="bookmark" style="width:11px;height:11px;"></i> Belajar
                </button>
              `;
            } else if (srsStatus === 'mastered') {
              srsActionHtml = `
                <button class="vocab-row-srs-btn remove no-print" data-vocab-id="${itemId}" title="Hapus dari SRS" style="background: var(--green-dim); border: 1px solid rgba(52,211,153,0.3); color: var(--green); padding: 4px 10px; border-radius: var(--radius-sm); font-size: var(--text-3xs); cursor: pointer; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
                  <i data-lucide="check" style="width:11px;height:11px;"></i> Hafal
                </button>
              `;
            }

            return `
              <div class="vocab-list-item vocab-list-row" data-vocab-idx="${vIdx}">
                <div class="vocab-item-top">
                  <div class="vocab-item-jp">${formatJP(v)}</div>
                  <div class="vocab-item-actions">
                    ${srsActionHtml}
                    <button class="vocab-list-play-btn" data-vocab-text="${v.kana || v.kanji || v.rom}" style="width: 28px; height: 28px; border-radius: var(--radius-sm); background: var(--bg-elevated); color: var(--text-secondary); display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--border); cursor: pointer; transition: all 0.2s;" title="Dengarkan Suara">
                      <i data-lucide="volume-2" style="width: 12px; height: 12px;"></i>
                    </button>
                  </div>
                </div>
                
                <div class="vocab-item-meaning">${v.en}</div>
                ${writingLinksHtml}
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // TAB: GRAMMAR (Tata Bahasa: Bunpou & Bunkei)
    if (activeTab === 'grammar' && chapterId > 0) {
      html += `<div style="display: flex; flex-direction: column; gap: 24px;">`;
      
      // 1. Grammar Points (Bunpou)
      html += `
        <div class="vocab-card-list-title" style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
          <span>Tata Bahasa (Bunpou)</span>
          <span>${chapterData.grammar.length} Aturan</span>
        </div>
      `;
      
      chapterData.grammar.forEach((g, idx) => {
        html += `
          <div class="card" style="border-left: 3px solid var(--accent); padding: 16px 20px; background: var(--bg-card); position: relative; border-radius: var(--radius-md); border-top-left-radius: 0; border-bottom-left-radius: 0;">
            <div style="font-size: var(--text-2xs); font-weight: 800; color: var(--text-muted); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.05em;">Aturan ${idx + 1}</div>
            <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px; letter-spacing: -0.01em;">${g.title}</h3>
            <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 12px; line-height: 1.5;">${g.desc}</p>
            
            <div style="margin-bottom: 12px;">
              <code style="display: inline-block; background: var(--bg-main); border: 1px solid var(--border); padding: 6px 12px; border-radius: var(--radius-sm); font-weight: 700; color: var(--text-main); font-family: var(--font-mono); font-size: 0.82rem;">
                Formula: ${g.formula}
              </code>
            </div>
            
            <ul style="padding-left: 18px; color: var(--text-main); display: flex; flex-direction: column; gap: 6px; font-size: 0.85rem;">
              ${g.points.map(pt => `<li style="line-height: 1.5; list-style-type: square; color: var(--text-secondary);"><span style="color: var(--text-main);">${pt}</span></li>`).join('')}
            </ul>
            ${g.native_note ? `
            <div style="margin-top: 14px; background: var(--accent-dim); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px 14px; display: flex; gap: 10px; align-items: flex-start;">
              <i data-lucide="info" style="width: 14px; height: 14px; color: var(--text-main); flex-shrink: 0; margin-top: 2px;"></i>
              <div>
                <div style="font-size: var(--text-2xs); font-weight: 800; color: var(--text-main); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 2px;">Catatan Praktis</div>
                <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.45;">${g.native_note}</div>
              </div>
            </div>
            ` : ''}
          </div>
        `;
      });
      
      // 2. Sentence Patterns (Bunkei)
      if (chapterData.patterns && chapterData.patterns.length > 0) {
        html += `
          <div class="vocab-card-list-title" style="margin-top: 20px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span>Pola Kalimat Utama (Bunkei)</span>
            <span>${chapterData.patterns.length} Pola</span>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 10px;">
        `;
        
        chapterData.patterns.forEach(p => {
          html += `
            <div class="card" style="display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 18px; background: var(--bg-card); border-radius: var(--radius-md);">
              <div style="flex: 1; min-width: 0;">
                <div style="font-size: 1.05rem; font-family: var(--font-jp); font-weight: 700; color: var(--text-main); margin-bottom: 4px; line-height: 1.4;">
                  ${getDisplayMode() === 'romaji' ? p.rom : p.jp}
                </div>
                <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 500;">${p.en}</div>
              </div>
              <button onclick="window.playAudio('${p.jp || p.kana || p.rom}')" style="width: 32px; height: 32px; border-radius: 50%; background: var(--bg-hover); color: var(--accent-bright); display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: none; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='var(--accent)'; this.style.color='var(--bg-main)';" onmouseout="this.style.background='var(--bg-hover)'; this.style.color='var(--accent-bright)';">
                <i data-lucide="volume-2" style="width: 14px; height: 14px;"></i>
              </button>
            </div>
          `;
        });
        
        html += `</div>`;
      }
      
      html += `</div>`;
    }

    // TAB: CONVERSATION (Percakapan & Contoh: Kaiwa & Reibun)
    if (activeTab === 'conversation' && chapterId > 0) {
      html += `<div style="display: flex; flex-direction: column; gap: 28px;">`;
      
      // 1. Conversation (Kaiwa)
      const conv = chapterData.conversation;
      html += `
        <div class="vocab-card-list-title" style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
          <span>Percakapan Utama (Kaiwa)</span>
          <span>Dialog</span>
        </div>
        
        <div style="max-width: 600px; margin: 0 auto; width: 100%; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <!-- Chat Header -->
          <div style="background: var(--bg-card); border-bottom: 1px solid var(--border); padding: 14px 18px; display: flex; align-items: center; gap: 10px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--accent-dim); display: flex; align-items: center; justify-content: center; color: var(--accent-bright); border: 1px solid var(--border);">
              <i data-lucide="users" style="width: 16px; height: 16px;"></i>
            </div>
            <div>
              <h3 style="font-size: 0.95rem; font-weight: 800; color: var(--text-main); line-height: 1.2;">${conv.title}</h3>
              <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Skenario Utama</div>
            </div>
          </div>
          
          <!-- Chat Area -->
          <div style="padding: 20px; display: flex; flex-direction: column; gap: 16px; background: var(--bg-main);">
      `;
      
      let lastSpeaker = null;
      conv.dialogue.forEach((line, index) => {
        const isSelf = index % 2 === 0;
        const showAvatar = line.speaker !== lastSpeaker;
        html += `
          <div style="display: flex; gap: 10px; align-items: flex-end; align-self: ${isSelf ? 'flex-end' : 'flex-start'}; flex-direction: ${isSelf ? 'row-reverse' : 'row'}; max-width: 88%;">
            <!-- Avatar -->
            <div style="width: 28px; height: 28px; border-radius: 50%; background: ${getAvatarColor(line.speaker)}; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 800; flex-shrink: 0; opacity: ${showAvatar ? '1' : '0'}; box-shadow: var(--shadow-sm);">
              ${line.speaker.charAt(0).toUpperCase()}
            </div>
            
            <!-- Message Bubble -->
            <div style="display: flex; flex-direction: column; align-items: ${isSelf ? 'flex-end' : 'flex-start'}; min-width: 0;">
              ${showAvatar ? `<span style="font-size: 0.68rem; color: var(--text-muted); font-weight: 700; margin-bottom: 3px; padding: 0 4px;">${line.speaker}</span>` : ''}
              
              <div class="dialogue-bubble" style="padding: 10px 14px; border-radius: var(--radius-md); ${isSelf ? 'background: var(--accent); color: var(--bg-main); border-bottom-right-radius: 2px;' : 'background: var(--bg-card); border: 1px solid var(--border); color: var(--text-main); border-bottom-left-radius: 2px;'} position: relative;">
                
                <div style="font-family: var(--font-jp); font-weight: 700; font-size: 0.98rem; margin-bottom: 4px; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; line-height: 1.4;">
                  <span>${getDisplayMode() === 'romaji' ? line.rom : line.jp}</span>
                  <button onclick="window.playAudio('${line.jp || line.rom}')" style="background: ${isSelf ? 'var(--bg-main)' : 'var(--bg-hover)'}; border: none; color: ${isSelf ? 'var(--text-main)' : 'var(--text-secondary)'}; cursor: pointer; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: -1px;">
                    <i data-lucide="volume-2" style="width: 11px; height: 11px;"></i>
                  </button>
                </div>
                ${getDisplayMode() !== 'romaji' && line.rom ? `<div style="font-size: 0.72rem; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-muted)'}; opacity: 0.8; font-family: var(--font-mono); margin-bottom: 2px;">${line.rom}</div>` : ''}
                <div style="font-size: 0.8rem; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-secondary)'}; opacity: 0.9; line-height: 1.4;">${line.en}</div>
              </div>
            </div>
          </div>
        `;
        lastSpeaker = line.speaker;
      });
      html += `
          </div>
        </div>
      `;
      
      // 2. Mini-Percakapan (Renshuu C)
      if (chapterData.mini_kaiwa && chapterData.mini_kaiwa.length > 0) {
        html += `
          <div class="vocab-card-list-title" style="margin-top: 20px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span>Mini Percakapan (Renshuu C)</span>
            <span>${chapterData.mini_kaiwa.length} Skenario</span>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 20px; max-width: 600px; margin: 0 auto; width: 100%;">
        `;
        
        chapterData.mini_kaiwa.forEach((mini, mIdx) => {
          html += `
            <div class="card" style="padding: 14px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; border-bottom: 1px dashed var(--border); padding-bottom: 8px;">
                <div>
                  <h4 style="font-size: 0.9rem; font-weight: 800; color: var(--text-main); margin-bottom: 2px;">${mini.title}</h4>
                  <div style="font-size: 0.7rem; color: var(--text-muted); display: flex; align-items: center; gap: 4px; font-weight: 600;">
                    <i data-lucide="info" style="width: 10px; height: 10px;"></i>
                    <span>Situasi: ${mini.situation}</span>
                  </div>
                </div>
                <span style="font-size: var(--text-2xs); font-weight: 800; color: var(--text-muted); background: var(--bg-hover); border: 1px solid var(--border); padding: 2px 6px; border-radius: var(--radius-xs); text-transform: uppercase;">
                  C${mIdx + 1}
                </span>
              </div>
              
              <div style="display: flex; flex-direction: column; gap: 12px;">
          `;
          
          mini.dialogue.forEach((line, lineIdx) => {
            const isSelf = lineIdx % 2 === 0;
            html += `
              <div style="display: flex; gap: 8px; align-items: flex-end; align-self: ${isSelf ? 'flex-end' : 'flex-start'}; flex-direction: ${isSelf ? 'row-reverse' : 'row'}; max-width: 90%;">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: ${getAvatarColor(line.speaker)}; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 800; flex-shrink: 0; box-shadow: var(--shadow-sm);">
                  ${line.speaker[0]}
                </div>
                <div style="display: flex; flex-direction: column; align-items: ${isSelf ? 'flex-end' : 'flex-start'}; min-width: 0;">
                  <span style="font-size: 0.65rem; color: var(--text-muted); font-weight: 700; margin-bottom: 2px; padding: 0 4px;">${line.speaker}</span>
                  <div class="dialogue-bubble dialogue-bubble-mini" style="padding: 8px 12px; border-radius: var(--radius-md); ${isSelf ? 'background: var(--accent); color: var(--bg-main); border-bottom-right-radius: 2px;' : 'background: var(--bg-main); border: 1px solid var(--border); color: var(--text-main); border-bottom-left-radius: 2px;'}">
                    <div style="font-family: var(--font-jp); font-weight: 700; font-size: 0.88rem; margin-bottom: 4px; display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;">
                      <span>${getDisplayMode() === 'romaji' ? line.rom : line.jp}</span>
                      <button onclick="window.playAudio('${line.jp || line.rom}')" style="background: transparent; border: none; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-muted)'}; opacity: 0.8; cursor: pointer; padding: 0; margin-top: 1px;">
                        <i data-lucide="volume-2" style="width: 11px; height: 11px;"></i>
                      </button>
                    </div>
                    ${getDisplayMode() !== 'romaji' && line.rom ? `<div style="font-size: 0.68rem; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-muted)'}; opacity: 0.8; font-family: var(--font-mono); margin-bottom: 2px;">${line.rom}</div>` : ''}
                    <div style="font-size: 0.75rem; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-secondary)'}; opacity: 0.9; line-height: 1.35;">${line.en}</div>
                  </div>
                </div>
              </div>
            `;
          });
          
          html += `
              </div>
            </div>
          `;
        });
        
        html += `</div>`;
      }
      
      // 3. Example Sentences (Reibun)
      if (chapterData.reibun && chapterData.reibun.length > 0) {
        html += `
          <div class="vocab-card-list-title" style="margin-top: 20px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
            <span>Contoh Kalimat (Reibun)</span>
            <span>${chapterData.reibun.length} Kalimat</span>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 14px; max-width: 600px; margin: 0 auto; width: 100%;">
        `;
        
        chapterData.reibun.forEach((r, idx) => {
          const jpParts = (r.jp || '').split('...');
          const romParts = (r.rom || '').split('...');
          const enParts = (r.en || '').split('...');

          const qJp = jpParts[0]?.trim() || '';
          const aJp = jpParts[1]?.trim() || '';
          const qRom = romParts[0]?.trim() || '';
          const aRom = romParts[1]?.trim() || '';
          const qEn = enParts[0]?.trim() || '';
          const aEn = enParts[1]?.trim() || '';
          
          html += `
            <div class="card" style="padding: 14px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 10px;">
              <div style="font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: var(--tracking-wider); border-bottom: 1px dashed var(--border); padding-bottom: 6px; margin-bottom: 2px;">
                Contoh Kalimat ${idx + 1}
              </div>
              
              <!-- Q Bubble -->
              <div style="display: flex; gap: 8px; align-items: flex-end; align-self: flex-start; max-width: 90%;">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--accent-dim); color: var(--text-main); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 800; flex-shrink: 0;">
                  Q
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-start; min-width: 0;">
                  <div class="dialogue-bubble dialogue-bubble-mini" style="padding: 8px 12px; border-radius: var(--radius-md); background: var(--bg-main); border: 1px solid var(--border); color: var(--text-main); border-bottom-left-radius: 2px;">
                    <div style="font-family: var(--font-jp); font-weight: 700; font-size: 0.88rem; margin-bottom: 4px; display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;">
                      <span>${getDisplayMode() === 'romaji' ? qRom : qJp}</span>
                      <button onclick="window.playAudio('${qJp || qRom}')" style="background: transparent; border: none; color: var(--text-secondary); cursor: pointer; padding: 0; margin-top: 1px;">
                        <i data-lucide="volume-2" style="width: 11px; height: 11px;"></i>
                      </button>
                    </div>
                    ${getDisplayMode() !== 'romaji' && qRom ? `<div style="font-size: 0.68rem; color: var(--text-muted); font-family: var(--font-mono); margin-bottom: 2px;">${qRom}</div>` : ''}
                    <div style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.35;">${qEn}</div>
                  </div>
                </div>
              </div>
              
              <!-- A Bubble -->
              <div style="display: flex; gap: 8px; align-items: flex-end; align-self: flex-end; flex-direction: row-reverse; max-width: 90%;">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--accent); color: var(--bg-main); display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 800; flex-shrink: 0; box-shadow: var(--shadow-sm);">
                  A
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 0;">
                  <div class="dialogue-bubble dialogue-bubble-mini" style="padding: 8px 12px; border-radius: var(--radius-md); background: var(--accent); color: var(--bg-main); border-bottom-right-radius: 2px;">
                    <div style="font-family: var(--font-jp); font-weight: 700; font-size: 0.88rem; margin-bottom: 4px; display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;">
                      <span>${getDisplayMode() === 'romaji' ? aRom : aJp}</span>
                      <button onclick="window.playAudio('${aJp || aRom}')" style="background: transparent; border: none; color: var(--bg-main); opacity: 0.8; cursor: pointer; padding: 0; margin-top: 1px;">
                        <i data-lucide="volume-2" style="width: 11px; height: 11px;"></i>
                      </button>
                    </div>
                    ${getDisplayMode() !== 'romaji' && aRom ? `<div style="font-size: 0.68rem; color: var(--bg-main); opacity: 0.8; font-family: var(--font-mono); margin-bottom: 2px;">${aRom}</div>` : ''}
                    <div style="font-size: 0.75rem; color: var(--bg-main); opacity: 0.9; line-height: 1.35;">${aEn}</div>
                  </div>
                </div>
              </div>
            </div>
          `;
        });
        
        html += `</div>`;
      }

      html += `</div>`;
    }

    html += `</div>`; // Close tab-content

    // Sticky Floating Action Button (Stack Icon in Bottom-Right)
    html += `
      <button class="chapter-fab-btn" id="chapter-fab-btn" aria-label="Daftar Bab" title="Buka Daftar 50 Bab Belajar">
        <i data-lucide="layers" style="width: 19px; height: 19px;"></i>
      </button>
    `;

    // Chapter Picker Clean Modal (Direct list of all 50 chapters)
    html += `
      <div class="modal-overlay" id="chapter-picker-modal" style="display: none;">
        <div class="modal-box ch-picker-modal-box">
          <div class="ch-modal-header">
            <div>
              <div class="ch-modal-title">Pilih Bab Belajar</div>
              <div class="ch-modal-sub">Minna no Nihongo (50 Bab Lengkap)</div>
            </div>
            <button class="modal-close-btn" id="ch-modal-close-btn" aria-label="Tutup">
              <i data-lucide="x" style="width: 16px; height: 16px;"></i>
            </button>
          </div>

          <div class="ch-modal-list-scroll" id="ch-modal-list"></div>
        </div>
      </div>
    `;

    html += `</div>`; // Close chapter-container

    container.innerHTML = html;

    // Attach Event Listeners
    
    // Tab switching
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeTab = e.currentTarget.dataset.tab;
        renderContent();
      });
    });

    // Kana Script switching (Hiragana <-> Katakana)
    container.querySelectorAll('.kana-script-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const script = e.currentTarget.getAttribute('data-script');
        if (script && script !== selectedKanaScript) {
          selectedKanaScript = script;
          renderContent();
        }
      });
    });

    // Wire Chapter Picker Modal (Triggered by bottom-right Stack FAB)
    const fabBtn = container.querySelector('#chapter-fab-btn');
    const pickerModal = container.querySelector('#chapter-picker-modal');
    const modalCloseBtn = container.querySelector('#ch-modal-close-btn');
    const listContainer = container.querySelector('#ch-modal-list');

    const renderModalChapterList = () => {
      const groups = [
        { name: 'Pra-MNN · Fondasi Aksara', chapters: sorted.filter(c => c.id === 0) },
        { name: 'Shokyu I · JLPT N5 (Bab 1 – 25)', chapters: sorted.filter(c => c.id >= 1 && c.id <= 25) },
        { name: 'Shokyu II · JLPT N4 (Bab 26 – 50)', chapters: sorted.filter(c => c.id >= 26 && c.id <= 50) }
      ];

      return groups.map(g => `
        <div>
          <div class="ch-modal-group-title">${g.name}</div>
          <div class="ch-modal-items-list">
            ${g.chapters.map(c => {
              const isCurrent = c.id === chapterId;
              const isDone = isUnitCompleted(c.id);
              const cleanTitle = c.title.includes(':') ? c.title.split(':').slice(1).join(':').trim() : c.title;
              return `
                <a href="#/chapter/${c.id}" class="ch-modal-item ${isCurrent ? 'is-current' : ''}" data-ch-id="${c.id}">
                  <div class="ch-modal-num">BAB ${c.id}</div>
                  <div class="ch-modal-content">
                    <div class="ch-modal-item-title">${cleanTitle}</div>
                    ${c.desc ? `<div class="ch-modal-item-desc">${c.desc}</div>` : ''}
                  </div>
                  <div>
                    ${isCurrent ? '<span style="font-size: 10.5px; font-weight: 750; color: var(--accent);">Aktif</span>' : isDone ? '<span style="font-size: 11px; font-weight: 600; color: var(--green);">✓ Selesai</span>' : '<i data-lucide="chevron-right" style="width: 14px; height: 14px; color: var(--text-muted);"></i>'}
                  </div>
                </a>
              `;
            }).join('')}
          </div>
        </div>
      `).join('');
    };

    const openChapterModal = () => {
      if (!pickerModal || !listContainer) return;
      listContainer.innerHTML = renderModalChapterList();
      if (window.lucide) lucide.createIcons({ root: listContainer });
      pickerModal.style.display = 'flex';
      
      // Wire item clicks to close modal immediately upon selecting
      listContainer.querySelectorAll('.ch-modal-item').forEach(item => {
        item.addEventListener('click', () => {
          pickerModal.style.display = 'none';
        });
      });

      setTimeout(() => {
        const cur = listContainer.querySelector('.ch-modal-item.is-current');
        if (cur) cur.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }, 50);
    };

    const closeChapterModal = () => {
      if (pickerModal) pickerModal.style.display = 'none';
    };

    fabBtn?.addEventListener('click', openChapterModal);
    modalCloseBtn?.addEventListener('click', closeChapterModal);
    pickerModal?.addEventListener('click', (e) => {
      if (e.target === pickerModal) closeChapterModal();
    });

    // Wire vocab flashcard flips & navigation (only if on vocab tab)
    const flipCard = container.querySelector('#vocab-flip-card');
    if (flipCard) {
      flipCard.addEventListener('click', () => {
        isVocabFlipped = !isVocabFlipped;
        flipCard.classList.toggle('flipped', isVocabFlipped);
      });
    }

    container.querySelector('#vocab-prev-btn')?.addEventListener('click', () => {
      if (activeVocabIndex > 0) {
        activeVocabIndex--;
        isVocabFlipped = false;
        renderContent();
      }
    });

    container.querySelector('#vocab-next-btn')?.addEventListener('click', () => {
      const vocabList = chapterData.vocab || [];
      if (activeVocabIndex < vocabList.length - 1) {
        activeVocabIndex++;
        isVocabFlipped = false;
        renderContent();
      }
    });

    container.querySelector('#vocab-audio-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const vocabList = chapterData.vocab || [];
      const currentVocab = vocabList[activeVocabIndex];
      window.playAudio(currentVocab.kana || currentVocab.kanji || currentVocab.rom);
    });

    // Wire vocabulary list row click interaction
    container.querySelectorAll('.vocab-list-row').forEach(row => {
      row.addEventListener('click', () => {
        const idx = parseInt(row.dataset.vocabIdx);
        activeVocabIndex = idx;
        isVocabFlipped = false;
        renderContent();
        container.querySelector('.vocab-deck-wrapper')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });

    container.querySelectorAll('.vocab-list-play-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.playAudio(btn.dataset.vocabText);
      });
    });

    // Wire sync all button
    container.querySelector('#btn-chapter-sync-all-srs')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const vocabList = chapterData.vocab || [];
      vocabList.forEach(v => {
        addSRSItem(`vocab-${v.kana || v.kanji || v.rom}`, 'vocab');
      });
      showToast(`Berhasil menambahkan semua kosakata bab ini ke antrean SRS!`, 'success');
      renderContent();
    });

    // Wire individual add/remove buttons
    container.querySelectorAll('.vocab-row-srs-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const vocabId = btn.dataset.vocabId;
        if (btn.classList.contains('add')) {
          addSRSItem(vocabId, 'vocab');
          showToast('Kosakata ditambahkan ke antrean SRS!', 'success');
        } else {
          removeSRSItem(vocabId);
          showToast('Kosakata dihapus dari antrean SRS.', 'info');
        }
        renderContent();
      });
    });

    if (window.lucide) lucide.createIcons({ root: container });

    // ── Quick Kanji Writing Modal ───────────────────────────────────────────
    container.querySelectorAll('.kanji-write-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const kanji = btn.dataset.kanji;
        const word  = btn.dataset.word;
        const meaning = btn.dataset.meaning;
        showKanjiWritingModal(kanji, word, meaning, chapterId);
      });
    });
  };

  // Listen to global display mode changes
  const onDisplayModeChange = () => renderContent();
  window.addEventListener('displayModeChanged', onDisplayModeChange);

  // Listen to keyboard tab switching
  const onSwitchTab = (e) => {
    let targetTab = e.detail.tab;
    if (chapterId === 0) {
      if (targetTab === 'vocab' || targetTab === 'conversation' || targetTab === 'reibun') targetTab = 'vocab_salam';
      if (targetTab === 'grammar' || targetTab === 'patterns') targetTab = 'pelafalan';
    } else {
      if (targetTab === 'patterns') targetTab = 'grammar';
      if (targetTab === 'reibun') targetTab = 'conversation';
    }
    
    const validTabs = chapterId === 0 
      ? ['kana', 'pelafalan', 'vocab_salam'] 
      : ['vocab', 'grammar', 'conversation'];
      
    if (validTabs.includes(targetTab)) {
      activeTab = targetTab;
      renderContent();
    }
  };
  window.addEventListener('switchTab', onSwitchTab);

  // Clean up listeners when leaving this view
  const cleanup = () => {
    window.removeEventListener('displayModeChanged', onDisplayModeChange);
    window.removeEventListener('switchTab', onSwitchTab);
    window.removeEventListener('hashchange', cleanup);
  };
  window.addEventListener('hashchange', cleanup);

  // Initial render
  renderContent();
}

// ── Quick Kanji Writing Modal ─────────────────────────────────────────────────
function showKanjiWritingModal(kanji, word, meaning, chapterId) {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  // State
  let qCanvas = null, qCtx = null;
  let qDrawing = false, qShowGuide = false;
  let qUndoStack = [];
  let qLastX = 0, qLastY = 0, qLastMidX = 0, qLastMidY = 0;
  let qCurrentWidth = 8, qLastTime = 0;

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay kanji-modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box kanji-modal-box">
      <!-- Header -->
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:2rem; font-family:var(--font-jp); font-weight:800; line-height:1; color:var(--text-main);">${kanji}</span>
          <div>
            <div style="font-size:var(--text-sm); font-weight:700; color:var(--text-main); line-height:1.2;">${word || kanji}</div>
            ${meaning ? `<div style="font-size:var(--text-xs); color:var(--text-secondary); margin-top:2px;">${meaning}</div>` : ''}
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:6px;">
          <button id="qw-audio" title="Dengarkan Suara" style="width:32px; height:32px; border-radius:50%; background:var(--bg-hover); border:1px solid var(--border); cursor:pointer; display:flex; align-items:center; justify-content:center;">
            <i data-lucide="volume-2" style="width:14px; height:14px;"></i>
          </button>
          <button id="qw-close" style="width:32px; height:32px; border-radius:50%; background:var(--bg-hover); border:1px solid var(--border); cursor:pointer; display:flex; align-items:center; justify-content:center;">
            <i data-lucide="x" style="width:14px; height:14px;"></i>
          </button>
        </div>
      </div>

      <!-- Canvas area -->
      <div class="kanji-modal-canvas-wrap">
        <div class="genkouyoushi-grid genkouyoushi-grid-diagonal"></div>
        <div id="qw-guide" class="writing-guide-overlay" style="font-size:min(46vw, 220px);">${kanji}</div>
        <canvas id="qw-canvas" class="writing-canvas" style="touch-action:none;"></canvas>
      </div>

      <!-- Controls -->
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; margin-top:12px;">
        <button id="qw-clear" class="btn btn-secondary" style="height:40px; font-size:var(--text-xs); font-weight:700; display:flex; align-items:center; justify-content:center; gap:4px;">
          <i data-lucide="trash-2" style="width:13px; height:13px;"></i> Hapus
        </button>
        <button id="qw-undo" class="btn btn-secondary" style="height:40px; font-size:var(--text-xs); font-weight:700; display:flex; align-items:center; justify-content:center; gap:4px;" disabled>
          <i data-lucide="undo" style="width:13px; height:13px;"></i> Urung
        </button>
        <button id="qw-guide-btn" class="btn btn-secondary" style="height:40px; font-size:var(--text-xs); font-weight:700; display:flex; align-items:center; justify-content:center; gap:4px;">
          <i data-lucide="eye" style="width:13px; height:13px;"></i> Panduan
        </button>
      </div>

      <!-- Footer -->
      <div style="display:flex; align-items:center; justify-content:space-between; margin-top:10px; gap:8px;">
        <a href="#/writing?char=${encodeURIComponent(kanji)}&fromChapter=${chapterId}" id="qw-open-full" style="font-size:var(--text-xs); color:var(--text-muted); display:flex; align-items:center; gap:4px; text-decoration:none; font-weight:600;">
          <i data-lucide="maximize-2" style="width:11px; height:11px;"></i> Buka Kanvas Penuh
        </a>
        <button id="qw-done" class="btn btn-primary" style="height:38px; padding:0 20px; font-size:var(--text-xs); font-weight:800;">
          Selesai
        </button>
      </div>
    </div>
  `;

  function close() { overlay.remove(); }

  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  overlay.querySelector('#qw-close').addEventListener('click', close);
  overlay.querySelector('#qw-done').addEventListener('click', close);
  overlay.querySelector('#qw-open-full').addEventListener('click', close);
  overlay.querySelector('#qw-audio').addEventListener('click', () => window.playAudio && window.playAudio(kanji));

  // Guide toggle
  overlay.querySelector('#qw-guide-btn').addEventListener('click', () => {
    qShowGuide = !qShowGuide;
    const guideEl = overlay.querySelector('#qw-guide');
    const guideBtn = overlay.querySelector('#qw-guide-btn');
    if (qShowGuide) {
      guideEl.classList.add('show-guide');
      guideBtn.style.background = 'var(--accent-dim)';
      guideBtn.style.borderColor = 'var(--accent)';
      guideBtn.style.color = 'var(--accent-bright)';
    } else {
      guideEl.classList.remove('show-guide');
      guideBtn.style.background = '';
      guideBtn.style.borderColor = '';
      guideBtn.style.color = '';
    }
  });

  modalRoot.appendChild(overlay);
  if (window.lucide) lucide.createIcons({ root: overlay });

  // Setup canvas after DOM insertion
  requestAnimationFrame(() => {
    qCanvas = overlay.querySelector('#qw-canvas');
    if (!qCanvas) return;
    qCtx = qCanvas.getContext('2d');
    if (!qCtx) return;

    const rect = qCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    qCanvas.width = rect.width * dpr;
    qCanvas.height = rect.height * dpr;
    qCtx.setTransform(1, 0, 0, 1, 0, 0);
    qCtx.scale(dpr, dpr);

    const getColor = () => getComputedStyle(document.documentElement).getPropertyValue('--text-main').trim() || '#ffffff';

    const getCoords = (e) => {
      const r = qCanvas.getBoundingClientRect();
      const src = (e.touches && e.touches[0]) ? e.touches[0] : e;
      return [src.clientX - r.left, src.clientY - r.top];
    };

    const qClearCanvas = () => {
      qUndoStack.push(qCtx.getImageData(0, 0, qCanvas.width, qCanvas.height));
      if (qUndoStack.length > 20) qUndoStack.shift();
      const undoBtn = overlay.querySelector('#qw-undo');
      if (undoBtn) undoBtn.removeAttribute('disabled');
      qCtx.save();
      qCtx.setTransform(1, 0, 0, 1, 0, 0);
      qCtx.clearRect(0, 0, qCanvas.width, qCanvas.height);
      qCtx.restore();
    };

    overlay.querySelector('#qw-clear').addEventListener('click', qClearCanvas);
    overlay.querySelector('#qw-undo').addEventListener('click', () => {
      if (!qUndoStack.length) return;
      qCtx.putImageData(qUndoStack.pop(), 0, 0);
      const undoBtn = overlay.querySelector('#qw-undo');
      if (undoBtn && qUndoStack.length === 0) undoBtn.setAttribute('disabled', 'true');
    });

    const startQ = (e) => {
      qDrawing = true;
      qUndoStack.push(qCtx.getImageData(0, 0, qCanvas.width, qCanvas.height));
      if (qUndoStack.length > 20) qUndoStack.shift();
      const undoBtn = overlay.querySelector('#qw-undo');
      if (undoBtn) undoBtn.removeAttribute('disabled');
      const [x, y] = getCoords(e);
      qLastX = x; qLastY = y; qLastMidX = x; qLastMidY = y;
      qCurrentWidth = 8; qLastTime = performance.now();
      const col = getColor();
      qCtx.fillStyle = col; qCtx.strokeStyle = col;
      qCtx.beginPath(); qCtx.arc(x, y, 4, 0, Math.PI * 2); qCtx.fill();
    };
    const drawQ = (e) => {
      if (!qDrawing) return;
      e.preventDefault();
      const [x, y] = getCoords(e);
      const dist = Math.hypot(x - qLastX, y - qLastY);
      const now = performance.now();
      const vel = dist / ((now - qLastTime) || 16);
      qLastTime = now;
      const target = 12 - Math.min(2.5, vel) * 3.2;
      qCurrentWidth = qCurrentWidth + (target - qCurrentWidth) * 0.25;
      const midX = (qLastX + x) / 2, midY = (qLastY + y) / 2;
      const col = getColor();
      qCtx.strokeStyle = col; qCtx.fillStyle = col;
      qCtx.shadowBlur = 0.8; qCtx.shadowColor = col;
      qCtx.beginPath();
      qCtx.moveTo(qLastMidX, qLastMidY);
      qCtx.quadraticCurveTo(qLastX, qLastY, midX, midY);
      qCtx.lineWidth = qCurrentWidth;
      qCtx.lineCap = 'round'; qCtx.lineJoin = 'round';
      qCtx.stroke();
      qLastX = x; qLastY = y; qLastMidX = midX; qLastMidY = midY;
    };
    const stopQ = () => { qDrawing = false; qCtx.beginPath(); };

    if (window.PointerEvent) {
      qCanvas.addEventListener('pointerdown', startQ);
      qCanvas.addEventListener('pointermove', drawQ);
      qCanvas.addEventListener('pointerup', stopQ);
      qCanvas.addEventListener('pointercancel', stopQ);
      qCanvas.addEventListener('pointerleave', stopQ);
    } else {
      qCanvas.addEventListener('mousedown', startQ);
      qCanvas.addEventListener('mousemove', drawQ);
      qCanvas.addEventListener('mouseup', stopQ);
      qCanvas.addEventListener('mouseleave', stopQ);
      qCanvas.addEventListener('touchstart', startQ, { passive: false });
      qCanvas.addEventListener('touchmove', drawQ, { passive: false });
      qCanvas.addEventListener('touchend', stopQ);
    }
  });
}


