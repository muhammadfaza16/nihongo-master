import { renderTopbar, getDisplayMode, navigateChapter, showToast, renderBackBtn } from '../components/layout.js';
import { loadChapter, MNN_INDEX } from '../data/chapter_index.js';
import { addSRSItem, removeSRSItem, getSRSItemStatus } from '../srs.js';
import { speakJP } from '../audio.js';

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

  renderTopbar(`Bab ${chapterId} — Minna no Nihongo`, true);

  // Show loading skeleton while chapter data loads
  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;height:200px;color:var(--text-muted);">
      <span style="font-size:0.9rem;font-weight:600;">Memuat bab ${chapterId}...</span>
    </div>`;

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
  localStorage.setItem(`nihongo_master_theory_ch${chapterId}`, 'true');

  // Default active tab (check url query params first)
  let activeTab = chapterId === 0 ? 'kana' : 'vocab'; 
  const hash = window.location.hash;
  if (hash.includes('?')) {
    const query = hash.split('?')[1];
    const urlParams = new URLSearchParams(query);
    const urlTab = urlParams.get('tab');
    const validTabsForZero = ['kana', 'pelafalan', 'vocab_salam', 'practice'];
    const validTabsForOthers = ['vocab', 'grammar', 'conversation', 'practice'];
    const isValid = chapterId === 0 ? validTabsForZero.includes(urlTab) : validTabsForOthers.includes(urlTab);
    if (isValid) {
      activeTab = urlTab;
    }
  }

  // Active state for flashcard
  let activeVocabIndex = 0;
  let isVocabFlipped = false;

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
        ['た ta', 'ち chi', 'つ tsu', 'て te', 'ot to'], // 'と to'
        ['な na', 'に ni', 'ぬ nu', 'ね ne', 'の no'],
        ['は ha', 'ひ hi', 'ふ fu', 'へ he', 'ほ ho'],
        ['ま ma', 'み mi', 'む mu', 'め me', 'も mo'],
        ['や ya', '', 'ゆ yu', '', 'よ yo'],
        ['ら ra', 'ri ri', 'る ru', 'れ re', 'ろ ro'],
        ['わ wa', '', '', '', 'を wo'],
        ['ん n', '', '', '', '']
      ];
      
      const hiraDaku = [
        ['g ga', 'ぎ gi', 'ぐ gu', 'げ ge', 'ご go'], // 'が ga'
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

      const renderGrid = (title, grid, cols = 5) => `
        <div style="margin-bottom: 16px;">
          <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">${title}</h4>
          <div style="display: grid; grid-template-columns: repeat(${cols}, 1fr); gap: 6px;">
            ${grid.flat().map(cell => {
              if (!cell) return `<div style="background: transparent;"></div>`;
              const [jp, rom] = cell.split(' ');
              return `
                <div onclick="window.playAudio('${jp}')" class="kana-cell">
                  <div class="kana-char">${jp}</div>
                  <div class="kana-rom">${rom}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

      return `
        <div class="card" style="margin-bottom: 24px; background: var(--bg-hover); border: none;">
          <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 4px; color: var(--text-main); letter-spacing: -0.02em;">Tabel Huruf Kana Komprehensif</h2>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">Klik pada huruf untuk mendengarkan pelafalannya.</p>
          
          <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); border-bottom: 1px solid var(--border); padding-bottom: 6px; margin-bottom: 16px;">Hiragana (ひらがな)</h3>
          <div class="kana-layout-grid">
            <div>
              ${renderGrid('Dasar (Gojuon)', hira, 5)}
              ${renderGrid('Turunan (Dakuon/Handakuon)', hiraDaku, 5)}
            </div>
            <div>
              ${renderGrid('Kombinasi (Yoon)', hiraYoon, 3)}
            </div>
          </div>

          <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main); border-bottom: 1px solid var(--border); padding-bottom: 6px; margin-bottom: 16px; margin-top: 24px;">Katakana (カタカナ)</h3>
          <div class="kana-layout-grid">
            <div>
              ${renderGrid('Dasar (Gojuon)', kata, 5)}
              ${renderGrid('Turunan (Dakuon/Handakuon)', kataDaku, 5)}
            </div>
            <div>
              ${renderGrid('Kombinasi (Yoon)', kataYoon, 3)}
            </div>
          </div>
        </div>
      `;
    };

    // Chapter nav helpers
    const sorted = [...MNN_INDEX].sort((a, b) => a.id - b.id);
    const unlocked = sorted.filter(c => !c.locked);
    const curIdx = unlocked.findIndex(c => c.id === chapterId);
    const prevCh = curIdx > 0 ? unlocked[curIdx - 1] : null;
    const nextCh = curIdx < unlocked.length - 1 ? unlocked[curIdx + 1] : null;

    let backTrack = 'all';
    if (chapterId === 0) {
      backTrack = 'pra-mnn';
    } else if (chapterId >= 1 && chapterId <= 25) {
      backTrack = 'minna1';
    } else if (chapterId >= 26 && chapterId <= 50) {
      backTrack = 'minna2';
    }

    let html = `
      <!-- Breadcrumb Navigation -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">
          <a href="#/curriculum?track=${backTrack}" style="color: var(--text-muted); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='var(--text-main)'" onmouseout="this.style.color='var(--text-muted)'">
            Kurikulum
          </a>
          <span>/</span>
          <span style="color: var(--text-main);">Bab ${chapterId}</span>
        </div>
        
        <!-- Practice / Exam Buttons Header Row -->
        <div style="display: flex; gap: 8px;">
          <a href="#/workbook/${chapterId}" class="btn btn-secondary" style="font-size: var(--text-2xs); padding: 8px 14px; border-radius: var(--radius-sm); text-transform: uppercase; font-weight: 800; letter-spacing: 0.02em;">
            <i data-lucide="edit-3" style="width: 12px; height: 12px; margin-right: 4px;"></i> Buku Kerja
          </a>
          <a href="#/exam/${chapterId}" class="btn btn-secondary" style="font-size: var(--text-2xs); padding: 8px 14px; border-radius: var(--radius-sm); text-transform: uppercase; font-weight: 800; letter-spacing: 0.02em;">
            <i data-lucide="award" style="width: 12px; height: 12px; margin-right: 4px;"></i> Ujian Bab
          </a>
        </div>
      </div>

      <!-- Chapter Nav Bar -->
      <div class="chapter-nav-bar" style="margin-bottom: 20px;">
        <button class="chapter-nav-btn" id="ch-prev-btn" ${!prevCh ? 'disabled' : ''}
          aria-label="${prevCh ? 'Bab ' + prevCh.id : 'Sudah bab pertama'}">
          <i data-lucide="chevron-left" style="width:15px;height:15px;"></i>
          <span class="kbd-hint">[</span>
        </button>

        <select class="chapter-picker" id="chapter-picker" aria-label="Pilih bab">
          ${unlocked.map(c => {
            const short = c.title.includes(':') ? c.title.split(':').slice(1).join(':').trim() : c.title;
            return `<option value="${c.id}" ${c.id === chapterId ? 'selected' : ''}>Bab ${c.id} — ${short}</option>`;
          }).join('')}
        </select>

        <button class="chapter-nav-btn" id="ch-next-btn" ${!nextCh ? 'disabled' : ''}
          aria-label="${nextCh ? 'Bab ' + nextCh.id : 'Sudah bab terakhir'}">
          <span class="kbd-hint">]</span>
          <i data-lucide="chevron-right" style="width:15px;height:15px;"></i>
        </button>

        <div class="chapter-kbd-hint">
          <kbd>←</kbd><kbd>→</kbd> pindah bab
        </div>
      </div>

      <div style="margin-bottom:28px;">
        <h2 style="font-size:var(--text-xl);font-weight:800;color:var(--text-main);margin-bottom:6px;letter-spacing:var(--tracking-tight);line-height:var(--leading-tight);">${chapterData.title}</h2>
        <p style="color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-normal);">${chapterData.desc}</p>
      </div>

      <!-- TABS -->
      <div class="tabs" style="margin-bottom: 24px;">
        ${chapterId === 0 ? `
          <button class="tab-btn ${activeTab === 'kana' ? 'active' : ''}" data-tab="kana">Huruf</button>
          <button class="tab-btn ${activeTab === 'pelafalan' ? 'active' : ''}" data-tab="pelafalan">Pelafalan</button>
          <button class="tab-btn ${activeTab === 'vocab_salam' ? 'active' : ''}" data-tab="vocab_salam">Salam</button>
          <button class="tab-btn ${activeTab === 'practice' ? 'active' : ''}" data-tab="practice">Latihan</button>
        ` : `
          <button class="tab-btn ${activeTab === 'vocab'        ? 'active' : ''}" data-tab="vocab">Kosakata</button>
          <button class="tab-btn ${activeTab === 'grammar'      ? 'active' : ''}" data-tab="grammar">Tata Bahasa</button>
          <button class="tab-btn ${activeTab === 'conversation' ? 'active' : ''}" data-tab="conversation">Percakapan</button>
          <button class="tab-btn ${activeTab === 'practice'     ? 'active' : ''}" data-tab="practice">Latihan</button>
        `}
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
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; align-items: start; margin-bottom: 24px;">
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <h3 style="font-size: var(--text-md); font-weight: 800; color: var(--text-main); margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="book-open" style="width: 18px; height: 18px;"></i>
              Aturan Pelafalan Dasar
            </h3>
            ${chapterData.grammar.map((g, idx) => `
              <div class="card" style="border-left: 3px solid var(--accent); padding: 16px; background: var(--bg-card); border-top-right-radius: var(--radius-md); border-bottom-right-radius: var(--radius-md);">
                <div style="font-size: var(--text-2xs); font-weight: 800; color: var(--text-muted); margin-bottom: 4px; text-transform: uppercase;">Aturan ${idx + 1}</div>
                <h4 style="font-size: 0.98rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">${g.title}</h4>
                <p style="color: var(--text-secondary); font-size: 0.82rem; margin-bottom: 12px; line-height: 1.5;">${g.desc}</p>
                <ul style="padding-left: 18px; color: var(--text-main); display: flex; flex-direction: column; gap: 6px; font-size: 0.82rem;">
                  ${g.points.map(pt => `<li style="line-height: 1.5; color: var(--text-secondary); list-style-type: square;"><span style="color: var(--text-main);">${pt}</span></li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
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
        <div class="vocab-card-list-title" style="margin-top: 24px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
          <span>Daftar Salam Aisatsu</span>
          <span>${vocabList.length} Ungkapan</span>
        </div>
        
        <table class="vocab-list-table">
          <tbody>
            ${vocabList.map((v, vIdx) => `
              <tr class="vocab-list-row" data-vocab-idx="${vIdx}">
                <td class="vocab-list-cell vocab-list-cell-jp">
                  ${v.kana}
                </td>
                <td class="vocab-list-cell vocab-list-cell-translation">
                  ${v.en} <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); margin-left: 6px;">(${v.rom})</span>
                </td>
                <td class="vocab-list-cell vocab-list-cell-action">
                  <button class="vocab-list-play-btn" data-vocab-text="${v.kana}" style="width: 28px; height: 28px; border-radius: 50%; background: var(--bg-elevated); color: var(--text-secondary); display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--border); cursor: pointer; transition: all 0.2s;">
                    <i data-lucide="volume-2" style="width: 12px; height: 12px;"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>

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
        <div class="vocab-card-list-title" style="margin-top: 24px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <span>Daftar Kosakata Bab ${chapterId} (${vocabList.length} Kata)</span>
          <button id="btn-chapter-sync-all-srs" style="background: var(--text-main); color: var(--bg-main); border: none; padding: 6px 12px; border-radius: var(--radius-sm); font-size: 0.72rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 4px;">
            <i data-lucide="bookmark" style="width:12px;height:12px;"></i> Antrekan Semua ke SRS
          </button>
        </div>
        
        <table class="vocab-list-table">
          <tbody>
            ${vocabList.map((v, vIdx) => {
              const itemId = `vocab-${v.kana || v.kanji || v.rom}`;
              const srsStatus = getSRSItemStatus(itemId);
              
              const kanjis = (v.kanji || '').split('').filter(c => c >= '\u4e00' && c <= '\u9faf');
              let writingLinksHtml = '';
              if (kanjis.length > 0) {
                writingLinksHtml = `<div style="display: flex; gap: 4px; margin-top: 4px; flex-wrap: wrap;">`;
                kanjis.forEach(kj => {
                  writingLinksHtml += `
                    <a href="#/writing?char=${encodeURIComponent(kj)}" class="no-print" style="font-size: 0.68rem; color: var(--text-muted); text-decoration: none; border: 1px solid var(--border); padding: 1px 4px; border-radius: var(--radius-sm); display: inline-flex; align-items: center; gap: 2px;">
                      <i data-lucide="edit-3" style="width: 10px; height: 10px;"></i> Tulis ${kj}
                    </a>
                  `;
                });
                writingLinksHtml += `</div>`;
              }
              
              let srsActionHtml = '';
              if (!srsStatus) {
                srsActionHtml = `
                  <button class="vocab-row-srs-btn add no-print" data-vocab-id="${itemId}" title="Masukkan ke Antrean SRS" style="background: transparent; border: 1px solid var(--border); color: var(--text-muted); padding: 4px 8px; border-radius: var(--radius-sm); font-size: 0.72rem; cursor: pointer; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
                    <i data-lucide="bookmark-plus" style="width:11px;height:11px;"></i> Antrekan
                  </button>
                `;
              } else if (srsStatus === 'learning' || srsStatus === 'new') {
                srsActionHtml = `
                  <button class="vocab-row-srs-btn remove no-print" data-vocab-id="${itemId}" title="Hapus dari SRS" style="background: var(--text-main); border: 1px solid var(--text-main); color: var(--bg-main); padding: 4px 8px; border-radius: var(--radius-sm); font-size: 0.72rem; cursor: pointer; font-weight: 800; display: inline-flex; align-items: center; gap: 4px;">
                    <i data-lucide="bookmark" style="width:11px;height:11px;"></i> Belajar
                  </button>
                `;
              } else if (srsStatus === 'mastered') {
                srsActionHtml = `
                  <button class="vocab-row-srs-btn remove no-print" data-vocab-id="${itemId}" title="Hapus dari SRS" style="background: var(--text-main); border: 1px solid var(--text-main); color: var(--bg-main); padding: 4px 8px; border-radius: var(--radius-sm); font-size: 0.72rem; cursor: pointer; font-weight: 800; display: inline-flex; align-items: center; gap: 4px;">
                    <i data-lucide="check" style="width:11px;height:11px;"></i> Hafal
                  </button>
                `;
              }

              return `
                <tr class="vocab-list-row" data-vocab-idx="${vIdx}">
                  <td class="vocab-list-cell vocab-list-cell-jp">
                    ${formatJP(v)}
                    ${writingLinksHtml}
                  </td>
                  <td class="vocab-list-cell vocab-list-cell-translation">
                    ${v.en}
                  </td>
                  <td class="vocab-list-cell vocab-list-cell-action" style="white-space: nowrap; display: flex; gap: 8px; justify-content: flex-end; align-items: center;">
                    ${srsActionHtml}
                    <button class="vocab-list-play-btn" data-vocab-text="${v.kana || v.kanji || v.rom}" style="width: 28px; height: 28px; border-radius: 50%; background: var(--bg-elevated); color: var(--text-secondary); display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--border); cursor: pointer; transition: all 0.2s;">
                      <i data-lucide="volume-2" style="width: 12px; height: 12px;"></i>
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
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

    // TAB: PRACTICE (Latihan Quizzes)
    if (activeTab === 'practice') {
      html += `
        <div style="max-width: 600px; margin: 0 auto; padding-bottom: 24px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <span style="font-size: var(--text-2xs); font-weight: 800; color: var(--text-main); background: var(--accent-dim); border: 1px solid var(--border); padding: 4px 12px; border-radius: 99px; text-transform: uppercase; letter-spacing: 0.05em;">
              Latihan Pemahaman (Renshuu A/B)
            </span>
          </div>
      `;

      if (!chapterData.practice || chapterData.practice.length === 0) {
        html += `
          <div style="text-align: center; color: var(--text-muted); padding: 40px;">
            <p>Tidak ada latihan kuis untuk bab ini.</p>
          </div>
        `;
      } else {
        html += `<div style="display: flex; flex-direction: column; gap: 20px;">`;
        
        chapterData.practice.forEach((q, i) => {
          if (q.type === 'mcq') {
            html += `
              <div class="card" style="padding: 18px; border: 1px solid var(--border); border-radius: var(--radius-lg); position: relative; box-shadow: var(--shadow-sm); background: var(--bg-card);">
                <div style="font-size: 0.7rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Pilihan Ganda • Q${i+1}</div>
                <div style="font-weight: 800; color: var(--text-main); margin-bottom: 16px; font-size: 1.0rem; line-height: 1.45; font-family: var(--font-jp);">${q.question}</div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${q.options.map(opt => {
                    const checkJs = `
                      const isCorrect = ${opt.correct ? 'true' : 'false'};
                      if (isCorrect) {
                        window._showPremiumToast('Benar! Kerja bagus.', 'success');
                      } else {
                        window._showPremiumToast('Kurang tepat. Coba lagi.', 'error');
                      }
                    `;
                    return `
                      <button class="btn btn-secondary" style="justify-content: flex-start; text-align: left; padding: 10px 14px; font-size: 0.85rem; border-radius: var(--radius-md); transition: all 0.2s; border: 1px solid var(--border); width: 100%; cursor: pointer;" onclick="${checkJs.replace(/\s+/g, ' ')}">
                        ${opt.text}
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          } else if (q.type === 'fill') {
            const checkInputJs = `
              const v = document.getElementById('ans-${i}').value.trim().toLowerCase();
              const expected = '${q.answer.toLowerCase().replace(/'/g, "\\'")}';
              if (v === expected) {
                window._showPremiumToast('Luar biasa, jawaban tepat.', 'success');
              } else {
                window._showPremiumToast('Belum tepat. Coba periksa ejaan Anda.', 'error');
              }
            `;
            html += `
              <div class="card" style="padding: 18px; border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); background: var(--bg-card);">
                <div style="font-size: 0.7rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Isian Singkat • Q${i+1}</div>
                <div style="font-weight: 800; color: var(--text-main); margin-bottom: 16px; font-size: 1.0rem; line-height: 1.45; white-space: pre-line;">${q.question}</div>
                <div style="display: flex; gap: 8px; align-items: center;">
                  <input type="text" placeholder="Ketik jawaban Anda..." id="ans-${i}" style="flex: 1; padding: 10px 14px; border-radius: var(--radius-md); border: 1px solid var(--border); background: var(--bg-input); color: var(--text-main); font-size: 0.85rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--text-main)'" onblur="this.style.borderColor='var(--border)'" />
                  <button class="btn btn-primary" style="padding: 10px 18px; border-radius: var(--radius-md); font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.78rem;" onclick="${checkInputJs.replace(/\s+/g, ' ')}">Periksa</button>
                </div>
              </div>
            `;
          }
        });
        
        html += `</div>`;
      }
      
      html += `</div>`;
    }

    html += `</div>`; // Close tab-content

    container.innerHTML = html;
    renderBackBtn(container, '#/curriculum', 'Kurikulum');

    // Attach Event Listeners
    
    // Tab switching
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeTab = e.currentTarget.dataset.tab;
        renderContent();
      });
    });

    // Chapter nav: prev / next buttons
    container.querySelector('#ch-prev-btn')?.addEventListener('click', () => navigateChapter('prev'));
    container.querySelector('#ch-next-btn')?.addEventListener('click', () => navigateChapter('next'));

    // Chapter picker dropdown
    container.querySelector('#chapter-picker')?.addEventListener('change', e => {
      window.location.hash = `#/chapter/${e.target.value}`;
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
      ? ['kana', 'pelafalan', 'vocab_salam', 'practice'] 
      : ['vocab', 'grammar', 'conversation', 'practice'];
      
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
