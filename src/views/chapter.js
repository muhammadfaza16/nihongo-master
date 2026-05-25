import { renderTopbar, getDisplayMode, navigateChapter, showToast } from '../components/layout.js';
import { MNN_DATA } from '../data/chapter_data.js';

window._showPremiumToast = showToast;


function getAvatarColor(name) {
  if (!name) return '#6b7280';
  const str = name.replace(/[^a-zA-Z]/g, '');
  if (!str) return '#6b7280';
  const colors = [
    'linear-gradient(135deg, #f43f5e, #e11d48)',
    'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    'linear-gradient(135deg, #3b82f6, #2563eb)',
    'linear-gradient(135deg, #10b981, #059669)',
    'linear-gradient(135deg, #f59e0b, #d97706)',
    'linear-gradient(135deg, #ec4899, #db2777)',
    'linear-gradient(135deg, #06b6d4, #0891b2)'
  ];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

if (!window.playAudio) {
  window.playAudio = (text) => {
    if (!('speechSynthesis' in window)) {
      alert('Browser Anda tidak mendukung Text-to-Speech.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85; // slightly slower for beginners
    window.speechSynthesis.speak(utterance);
  };
}

export function ChapterView(container, params) {
  const parsed = parseInt(params.id);
  const chapterId = isNaN(parsed) ? 1 : parsed;
  const chapterData = MNN_DATA.find(ch => ch.id === chapterId);
  
  if (!chapterData) {
    container.innerHTML = '<h2>Chapter not found</h2>';
    return;
  }

  renderTopbar(`Bab ${chapterId} — Minna no Nihongo`);

  // Default active tab (check url query params first)
  let activeTab = chapterId === 0 ? 'kana' : 'vocab'; 
  const hash = window.location.hash;
  if (hash.includes('?')) {
    const query = hash.split('?')[1];
    const urlParams = new URLSearchParams(query);
    const urlTab = urlParams.get('tab');
    const validTabs = ['kana', 'pelafalan', 'vocab_salam', 'vocab', 'grammar', 'patterns', 'reibun', 'conversation', 'practice'];
    if (validTabs.includes(urlTab)) {
      activeTab = urlTab;
    }
  }

  // Helper to format Japanese text based on global display mode
  const formatJP = (item) => {
    const mode = getDisplayMode();
    if (mode === 'romaji') return item.rom || item.kana;
    if (mode === 'furigana') {
      if (!item.kanji) return item.kana;
      // Very naive furigana fallback (real furigana parsing needs proper ruby generation)
      return `<ruby>${item.kanji}<rt>${item.kana}</rt></ruby>`;
    }
    // Kana/Kanji only
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
        ['ザ za', 'ジ ji', 'ズ zu', 'ゼ ze', 'ゾ zo'],
        ['ダ da', 'ヂ ji', 'ヅ zu', 'デ de', 'ド do'],
        ['バ ba', 'ビ bi', 'ブ bu', 'ベ be', 'ボ bo'],
        ['パ pa', 'ピ pi', 'プ pu', 'ペ pe', 'ポ po']
      ];

      const kataYoon = [
        ['キャ kya', 'キュ kyu', 'キョ kyo'],
        ['シャ sha', 'シュ shu', 'ショ sho'],
        ['チャ cha', 'チュ chu', 'チョ cho'],
        ['ニャ nya', 'ニュ nyu', 'ニョ nyo'],
        ['ヒャ hya', 'ヒュ hyu', 'ヒョ hyo'],
        ['ミャ mya', 'ミュ myu', 'ミョ myo'],
        ['リャ rya', 'リュ ryu', 'リョ ryo'],
        ['ギャ gya', 'ギュ gyu', 'ギョ gyo'],
        ['ジャ ja', 'ジュ ju', 'ジョ jo'],
        ['ビャ bya', 'ビュ byu', 'ビョ byo'],
        ['ピャ pya', 'ピュ pyu', 'ピョ pyo']
      ];

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
    const sorted = [...MNN_DATA].sort((a, b) => a.id - b.id);
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
      <style>
        .kana-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .kana-layout-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      </style>

      <!-- Breadcrumb Navigation -->
      <div class="chapter-breadcrumb">
        <a href="#/curriculum?track=${backTrack}">
          <i data-lucide="arrow-left" style="width: 14px; height: 14px;"></i>
          Kurikulum
        </a>
        <span>/</span>
        <span style="color: var(--text-main);">Bab ${chapterId}</span>
      </div>

      <!-- Chapter Nav Bar -->
      <div class="chapter-nav-bar">
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

      <div class="chapter-header-info">
        <h2 class="chapter-title">${chapterData.title}</h2>
        <p class="chapter-desc">${chapterData.desc}</p>
      </div>

      <!-- Quick Resource Access Grid -->
      <div class="resource-card-grid">
        <div id="res-card-teori" class="resource-card ${activeTab !== 'practice' ? 'active' : ''}">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i data-lucide="book-open" style="width: 16px; height: 16px;"></i>
            <span style="font-weight: 800; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.02em;">Teori</span>
          </div>
          <span class="resource-subtitle">${chapterId === 0 ? 'Kana & Pelafalan' : 'Kotoba & Bunpou'}</span>
        </div>
        
        <div id="res-card-latihan" class="resource-card ${activeTab === 'practice' ? 'active' : ''}">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i data-lucide="dumbbell" style="width: 16px; height: 16px;"></i>
            <span style="font-weight: 800; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.02em;">Latihan</span>
          </div>
          <span class="resource-subtitle">Renshuu</span>
        </div>

        <a href="#/workbook/${chapterId}" class="resource-card">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i data-lucide="pen-tool" style="width: 16px; height: 16px;"></i>
            <span style="font-weight: 800; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.02em;">Workbook</span>
          </div>
          <span class="resource-subtitle">Kaite Oboeru</span>
        </a>

        <a href="#/exam/${chapterId}" class="resource-card">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i data-lucide="award" style="width: 16px; height: 16px;"></i>
            <span style="font-weight: 800; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.02em;">Ujian</span>
          </div>
          <span class="resource-subtitle">Mondaishuu</span>
        </a>
      </div>

      <!-- TABS (Hidden when Latihan/practice is active) -->
      <div class="tabs" style="${activeTab === 'practice' ? 'display: none;' : ''}">
        ${chapterId === 0 ? `
          <button class="tab-btn ${activeTab === 'kana' ? 'active' : ''}" data-tab="kana">Huruf <kbd style="font-size:0.6rem;opacity:0.35;margin-left:2px;">Alt+A</kbd></button>
          <button class="tab-btn ${activeTab === 'pelafalan' ? 'active' : ''}" data-tab="pelafalan">Pelafalan <kbd style="font-size:0.6rem;opacity:0.35;margin-left:2px;">Alt+W</kbd></button>
          <button class="tab-btn ${activeTab === 'vocab_salam' ? 'active' : ''}" data-tab="vocab_salam">Kosakata & Salam <kbd style="font-size:0.6rem;opacity:0.35;margin-left:2px;">Alt+Q</kbd></button>
        ` : `
          <button class="tab-btn ${activeTab === 'vocab'        ? 'active' : ''}" data-tab="vocab">Kotoba <kbd style="font-size:0.6rem;opacity:0.35;margin-left:2px;">Alt+Q</kbd></button>
          <button class="tab-btn ${activeTab === 'grammar'      ? 'active' : ''}" data-tab="grammar">Bunpou <kbd style="font-size:0.6rem;opacity:0.35;margin-left:2px;">Alt+W</kbd></button>
          <button class="tab-btn ${activeTab === 'patterns'     ? 'active' : ''}" data-tab="patterns">Bunkei <kbd style="font-size:0.6rem;opacity:0.35;margin-left:2px;">Alt+E</kbd></button>
          <button class="tab-btn ${activeTab === 'reibun'       ? 'active' : ''}" data-tab="reibun">Reibun <kbd style="font-size:0.6rem;opacity:0.35;margin-left:2px;">Alt+S</kbd></button>
          <button class="tab-btn ${activeTab === 'conversation' ? 'active' : ''}" data-tab="conversation">Kaiwa <kbd style="font-size:0.6rem;opacity:0.35;margin-left:2px;">Alt+R</kbd></button>
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
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; align-items: start; margin-bottom: 24px;">
          <!-- Kiri: Aturan Pelafalan (Bunpou) -->
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <h3 style="font-size: var(--text-lg); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="book-open" style="width: 20px; height: 20px;"></i>
              Aturan Pelafalan Dasar
            </h3>
            ${chapterData.grammar.map((g, idx) => `
              <div class="card" style="border-left: 3px solid var(--accent); padding: 16px; background: var(--bg-card); border-top-right-radius: var(--radius-md); border-bottom-right-radius: var(--radius-md);">
                <div style="font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); margin-bottom: 4px; text-transform: uppercase;">Aturan ${idx + 1}</div>
                <h4 style="font-size: var(--text-md); font-weight: 800; color: var(--text-main); margin-bottom: 6px;">${g.title}</h4>
                <p style="color: var(--text-muted); font-size: var(--text-sm); margin-bottom: 12px; line-height: 1.5;">${g.desc}</p>
                <ul style="padding-left: 20px; color: var(--text-main); display: flex; flex-direction: column; gap: 6px; font-size: var(--text-sm);">
                  ${g.points.map(pt => `<li style="line-height: 1.5;">${pt}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

          <!-- Kanan: Contoh Penggunaan (Bunkei) -->
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <h3 style="font-size: var(--text-lg); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="play-circle" style="width: 20px; height: 20px;"></i>
              Contoh Pelafalan
            </h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${chapterData.patterns.map(p => `
                <div class="pattern-card-revamp">
                  <div style="flex: 1;">
                    <div class="vocab-kana-title">${p.jp}</div>
                    <div class="vocab-rom-sub">${p.rom}</div>
                    <div class="vocab-meaning-sub">${p.en}</div>
                  </div>
                  <button onclick="window.playAudio('${p.jp}')" style="width: 36px; height: 36px; border-radius: 50%; background: var(--bg-hover); color: var(--accent-bright); display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: none; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='var(--accent)'; this.style.color='var(--bg-main)';" onmouseout="this.style.background='var(--bg-hover)'; this.style.color='var(--accent-bright)';">
                    <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    // TAB: VOCAB_SALAM (Only for Chapter 0)
    if (activeTab === 'vocab_salam' && chapterId === 0) {
      html += `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; align-items: start; margin-bottom: 24px;">
          <!-- Kiri: Kosakata Dasar (Greetings) -->
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <h3 style="font-size: var(--text-lg); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="message-square" style="width: 20px; height: 20px;"></i>
              Aisatsu (Salam Dasar)
            </h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              ${chapterData.vocab.map(v => `
                <div class="vocab-card">
                  <div>
                    <div class="vocab-kana-title">${v.kana}</div>
                    <div class="vocab-rom-sub">${v.rom}</div>
                    <div class="vocab-meaning-sub">${v.en}</div>
                  </div>
                  <button onclick="window.playAudio('${v.kana}')" style="width: 36px; height: 36px; border-radius: 50%; background: var(--bg-hover); color: var(--accent-bright); display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='var(--accent)'; this.style.color='var(--bg-main)';" onmouseout="this.style.background='var(--bg-hover)'; this.style.color='var(--accent-bright)';">
                    <i data-lucide="volume-2" style="width: 16px; height: 16px;"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Kanan: Dialog Aisatsu (Kaiwa) -->
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <h3 style="font-size: var(--text-lg); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="users" style="width: 20px; height: 20px;"></i>
              Simulasi Percakapan Salam
            </h3>
            <div class="card" style="padding: 20px; background: var(--bg-card); border: 1px solid var(--border);">
              <h4 style="text-align: center; font-size: var(--text-md); font-weight: 700; margin-bottom: 16px; color: var(--text-main); border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                ${chapterData.conversation.title}
              </h4>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                ${chapterData.conversation.dialogue.map((line, index) => {
                  const isSelf = index % 2 === 0;
                  return `
                    <div style="display: flex; flex-direction: column; align-items: ${isSelf ? 'flex-start' : 'flex-end'};">
                      <span style="font-size: var(--text-2xs); color: var(--text-muted); font-weight: 700; margin-bottom: 2px;">
                        ${line.speaker}
                      </span>
                      <div class="dialogue-bubble ${isSelf ? 'dialogue-bubble-other' : 'dialogue-bubble-self'}" style="max-width: 85%;">
                        <div style="font-family: var(--font-jp); font-weight: 700; font-size: 1.05rem; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
                          <span>${line.jp}</span>
                          <button onclick="window.playAudio('${line.jp}')" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; padding: 2px; display: inline-flex; align-items: center; justify-content: center; transition: color 0.15s;" onmouseover="this.style.color='var(--accent-bright)'" onmouseout="this.style.color='var(--text-muted)'">
                            <i data-lucide="volume-2" style="width: 14px; height: 14px;"></i>
                          </button>
                        </div>
                        <div class="vocab-rom-sub" style="margin-bottom: 2px;">${line.rom}</div>
                        <div class="vocab-meaning-sub" style="margin-top: 0; color: inherit; opacity: 0.95;">${line.en}</div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // TAB: VOCABULARY
    if (activeTab === 'vocab' && chapterId > 0) {
      html += `
        <div class="vocab-grid">
      `;
      chapterData.vocab.forEach(v => {
        html += `
          <div class="vocab-card">
            <div>
              <div class="vocab-kana-title">${formatJP(v)}</div>
              <div class="vocab-meaning-sub">${v.en}</div>
            </div>
            <button onclick="window.playAudio('${v.kana || v.kanji || v.rom}')" class="vocab-play-btn">
              <i data-lucide="play" style="width: 14px; height: 14px;"></i>
            </button>
          </div>
        `;
      });
      html += `</div>`;
    }

    // TAB: GRAMMAR
    if (activeTab === 'grammar' && chapterId > 0) {
      html += `<div style="display: flex; flex-direction: column; gap: 16px;">`;
      chapterData.grammar.forEach((g, idx) => {
        html += `
          <div class="card grammar-card-revamp">
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">Grammar Point ${idx + 1}</div>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--text-main); margin-bottom: 6px; letter-spacing: -0.01em;">${g.title}</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 12px;">${g.desc}</p>
            
            <code class="grammar-formula">
              Formula: ${g.formula}
            </code>
            
            <ul style="padding-left: 20px; color: var(--text-main); display: flex; flex-direction: column; gap: 6px; font-size: 0.9rem;">
              ${g.points.map(pt => `<li style="line-height: 1.6;">${pt}</li>`).join('')}
            </ul>
            ${g.native_note ? `
            <div class="grammar-note-box">
              <i data-lucide="lightbulb" style="width: 20px; height: 20px; color: var(--accent-bright); flex-shrink: 0; margin-top: 2px;"></i>
              <div>
                <div style="font-size: 0.75rem; font-weight: 800; color: var(--accent-bright); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Catatan Native / Nuansa Praktis</div>
                <div style="font-size: 0.9rem; color: var(--text-main); line-height: 1.6;">${g.native_note}</div>
              </div>
            </div>
            ` : ''}
          </div>
        `;
      });
      html += `</div>`;
    }

    // TAB: PATTERNS
    if (activeTab === 'patterns' && chapterId > 0) {
      html += `<div style="display: flex; flex-direction: column; gap: 12px;">`;
      chapterData.patterns.forEach(p => {
        html += `
          <div class="pattern-card-revamp">
            <div style="flex: 1;">
              <div style="font-size: 1.15rem; font-family: var(--font-jp); font-weight: 700; color: var(--text-main); margin-bottom: 4px;">
                ${getDisplayMode() === 'romaji' ? p.rom : p.jp}
              </div>
              <div style="font-size: 0.85rem; color: var(--text-secondary);">${p.en}</div>
            </div>
            <button onclick="window.playAudio('${p.jp || p.kana || p.rom}')" style="width: 32px; height: 32px; border-radius: 50%; background: var(--bg-hover); color: var(--accent-bright); display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: none; cursor: pointer;">
              <i data-lucide="play" style="width: 14px; height: 14px;"></i>
            </button>
          </div>
        `;
      });
      html += `</div>`;
    }

    // TAB: REIBUN
    if (activeTab === 'reibun' && chapterId > 0) {
      html += `
        <div style="display: flex; flex-direction: column; gap: 16px; max-width: 700px; margin: 0 auto; padding-bottom: 24px;">
          <div style="text-align: center; margin-bottom: 8px;">
            <span style="font-size: var(--text-2xs); font-weight: 700; color: var(--accent); background: var(--accent-dim); border: 1px solid var(--border-accent); padding: 4px 10px; border-radius: 99px; text-transform: uppercase; letter-spacing: 1px;">
              例文 (Reibun) — Contoh Tanya Jawab Kalimat
            </span>
          </div>
      `;

      if (chapterData.reibun && chapterData.reibun.length > 0) {
        chapterData.reibun.forEach((r, idx) => {
          // Split Q&A by the "..." marker
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
            <div class="reibun-card">
              <!-- Q&A Row index -->
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-bottom: 4px;">
                <span style="font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
                  Contoh Kalimat ${idx + 1}
                </span>
                <span style="font-size: var(--text-2xs); font-weight: 600; color: var(--accent-bright); background: var(--accent-dim); padding: 2px 8px; border-radius: var(--radius-xs);">
                  Q&A Dialog
                </span>
              </div>

              <!-- QUESTION (Q) -->
              <div style="display: flex; gap: 12px; align-items: flex-start;">
                <div style="width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, var(--green), #059669); color: white; display: flex; align-items: center; justify-content: center; font-size: var(--text-sm); font-weight: 800; flex-shrink: 0; margin-top: 2px; box-shadow: 0 2px 8px var(--green-dim);">
                  Q
                </div>
                <div style="flex: 1;">
                  <div style="font-family: var(--font-jp); font-weight: 700; font-size: var(--text-base); color: var(--text-main); display: flex; align-items: center; gap: 6px;">
                    <span>${getDisplayMode() === 'romaji' ? qRom : qJp}</span>
                    <button onclick="window.playAudio('${qJp || qRom}')" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; padding: 2px; display: inline-flex; align-items: center; justify-content: center; transition: color 0.15s;" onmouseover="this.style.color='var(--green)'" onmouseout="this.style.color='var(--text-muted)'" aria-label="Putar Suara (TTS)">
                      <i data-lucide="volume-2" style="width: 15px; height: 15px;"></i>
                    </button>
                  </div>
                  <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-top: 2px;">${qEn}</div>
                </div>
              </div>

              <!-- ANSWER (A) -->
              ${aJp ? `
              <div class="reibun-ans-row">
                <div style="width: 26px; height: 26px; border-radius: 50%; background: var(--accent); color: var(--bg-main); display: flex; align-items: center; justify-content: center; font-size: var(--text-sm); font-weight: 800; flex-shrink: 0; margin-top: 2px; box-shadow: 0 2px 8px var(--accent-glow);">
                  A
                </div>
                <div style="flex: 1;">
                  <div style="font-family: var(--font-jp); font-weight: 700; font-size: var(--text-base); color: var(--accent-bright); display: flex; align-items: center; gap: 6px;">
                    <span>${getDisplayMode() === 'romaji' ? aRom : aJp}</span>
                    <button onclick="window.playAudio('${aJp || aRom}')" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; padding: 2px; display: inline-flex; align-items: center; justify-content: center; transition: color 0.15s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'" aria-label="Putar Suara (TTS)">
                      <i data-lucide="volume-2" style="width: 15px; height: 15px;"></i>
                    </button>
                  </div>
                  <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-top: 2px;">${aEn}</div>
                </div>
              </div>
              ` : ''}
            </div>
          `;
        });
      } else {
        html += `<div style="text-align:center;color:var(--text-muted);padding:40px;">Belum ada Reibun untuk bab ini.</div>`;
      }

      html += `</div>`;
    }

    // TAB: CONVERSATION
    if (activeTab === 'conversation' && chapterId > 0) {
      const conv = chapterData.conversation;
      html += `
        <div class="conversation-container">
          <!-- Sticky Header -->
          <div class="chat-sticky-header">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--accent-dim); display: flex; align-items: center; justify-content: center; color: var(--accent-bright);">
              <i data-lucide="users" style="width: 20px; height: 20px;"></i>
            </div>
            <div>
              <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); line-height: 1.2;">${conv.title}</h3>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Percakapan Utama (Kaiwa)</div>
            </div>
          </div>
          
          <!-- Chat Area -->
          <div class="chat-area">
      `;
      let lastSpeaker = null;
      conv.dialogue.forEach((line, index) => {
        const isSelf = index % 2 === 0;
        const showAvatar = line.speaker !== lastSpeaker;
        html += `
          <div style="display: flex; gap: 12px; align-items: flex-end; align-self: ${isSelf ? 'flex-end' : 'flex-start'}; flex-direction: ${isSelf ? 'row-reverse' : 'row'}; max-width: 85%;">
            <!-- Avatar -->
            <div style="width: 32px; height: 32px; border-radius: 50%; background: ${getAvatarColor(line.speaker)}; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 800; flex-shrink: 0; opacity: ${showAvatar ? '1' : '0'}; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              ${line.speaker.charAt(0).toUpperCase()}
            </div>
            
            <!-- Message Bubble -->
            <div style="display: flex; flex-direction: column; align-items: ${isSelf ? 'flex-end' : 'flex-start'}; min-width: 0;">
              ${showAvatar ? `<span style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700; margin-bottom: 4px; padding: 0 4px;">${line.speaker}</span>` : ''}
              
              <div class="dialogue-bubble ${isSelf ? 'dialogue-bubble-self' : 'dialogue-bubble-other'}">
                
                <div style="font-family: var(--font-jp); font-weight: 700; font-size: 1.05rem; margin-bottom: 6px; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; line-height: 1.4;">
                  <span>${getDisplayMode() === 'romaji' ? line.rom : line.jp}</span>
                  <button onclick="window.playAudio('${line.jp || line.rom}')" style="background: ${isSelf ? 'var(--bg-main)' : 'var(--bg-hover)'}; border: none; color: ${isSelf ? 'var(--text-main)' : 'var(--accent-bright)'}; cursor: pointer; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: -2px; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <i data-lucide="play" style="width: 12px; height: 12px; margin-left: 2px;"></i>
                  </button>
                </div>
                ${getDisplayMode() !== 'romaji' && line.rom ? `<div style="font-size: 0.75rem; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-muted)'}; opacity: 0.7; font-family: var(--font-mono); margin-bottom: 4px;">${line.rom}</div>` : ''}
                <div style="font-size: 0.85rem; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-secondary)'}; opacity: 0.9; line-height: 1.4;">${line.en}</div>
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

      if (chapterData.mini_kaiwa && chapterData.mini_kaiwa.length > 0) {
        html += `
          <div style="max-width: 600px; margin: 32px auto 0 auto;">
            <h3 style="font-size: var(--text-lg); font-weight: 800; color: var(--text-main); margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="message-square" style="width: 20px; height: 20px; color: var(--accent-bright);"></i>
              Mini Percakapan (Renshuu C)
            </h3>
            <p style="color: var(--text-muted); font-size: var(--text-sm); margin-bottom: 20px;">Latihan skenario percakapan pendek yang interaktif dari buku Minna no Nihongo.</p>
            
            <div style="display: flex; flex-direction: column; gap: 20px;">
        `;
        
        chapterData.mini_kaiwa.forEach((mini, mIdx) => {
          html += `
            <div class="card" style="padding: 16px; background: var(--bg-hover); border: 1px solid var(--border); border-radius: var(--radius-md);">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; border-bottom: 1px solid var(--border); padding-bottom: 10px;">
                <div>
                  <h4 style="font-size: var(--text-base); font-weight: 800; color: var(--accent-bright); margin-bottom: 4px;">${mini.title}</h4>
                  <div style="font-size: var(--text-xs); color: var(--text-muted); display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="info" style="width: 12px; height: 12px;"></i>
                    <span>Situasi: ${mini.situation}</span>
                  </div>
                </div>
                <span style="font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); background: var(--bg-main); border: 1px solid var(--border); padding: 2px 6px; border-radius: var(--radius-sm); text-transform: uppercase;">
                  C${mIdx + 1}
                </span>
              </div>
              
          <div style="display: flex; flex-direction: column; gap: 12px;">
          `;
          
          mini.dialogue.forEach((line, lineIdx) => {
            const isSelf = lineIdx % 2 === 0;
            html += `
              <div style="display: flex; gap: 10px; align-items: flex-end; align-self: ${isSelf ? 'flex-end' : 'flex-start'}; flex-direction: ${isSelf ? 'row-reverse' : 'row'}; max-width: 90%;">
                <div style="width: 26px; height: 26px; border-radius: 50%; background: ${getAvatarColor(line.speaker)}; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 800; flex-shrink: 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  ${line.speaker[0]}
                </div>
                <div style="display: flex; flex-direction: column; align-items: ${isSelf ? 'flex-end' : 'flex-start'}; min-width: 0;">
                  <span style="font-size: 0.65rem; color: var(--text-muted); font-weight: 700; margin-bottom: 2px; padding: 0 4px;">${line.speaker}</span>
                  <div class="dialogue-bubble dialogue-bubble-mini ${isSelf ? 'dialogue-bubble-self' : 'dialogue-bubble-other'}">
                    <div style="font-family: var(--font-jp); font-weight: 700; font-size: 1rem; margin-bottom: 4px; display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;">
                      <span>${getDisplayMode() === 'romaji' ? line.rom : line.jp}</span>
                      <button onclick="window.playAudio('${line.jp || line.rom}')" style="background: transparent; border: none; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-muted)'}; opacity: 0.7; cursor: pointer; padding: 0; margin-top: 2px;" onmouseover="this.style.color='${isSelf ? 'var(--bg-main)' : 'var(--accent)'}'; this.style.opacity='1';" onmouseout="this.style.color='${isSelf ? 'var(--bg-main)' : 'var(--text-muted)'}'; this.style.opacity='0.7';">
                        <i data-lucide="volume-2" style="width: 14px; height: 14px;"></i>
                      </button>
                    </div>
                    ${getDisplayMode() !== 'romaji' && line.rom ? `<div style="font-size: 0.7rem; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-muted)'}; opacity: 0.7; font-family: var(--font-mono); margin-bottom: 2px;">${line.rom}</div>` : ''}
                    <div style="font-size: 0.8rem; color: ${isSelf ? 'var(--bg-main)' : 'var(--text-secondary)'}; opacity: 0.9;">${line.en}</div>
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
        
        html += `
            </div>
          </div>
        `;
      }
    }

    // TAB: PRACTICE
    if (activeTab === 'practice') {
      html += `<div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px; margin: 0 auto;">`;
      chapterData.practice.forEach((q, i) => {
        if (q.type === 'mcq') {
          html += `
            <div class="card practice-card">
              <div style="font-size: 0.72rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Pilihan Ganda • Q${i+1}</div>
              <div style="font-weight: 800; color: var(--text-main); margin-bottom: 18px; font-size: 1.05rem; line-height: 1.45; font-family: var(--font-jp);">${q.question}</div>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${q.options.map(opt => {
                  const checkJs = `
                    const isCorrect = ${opt.correct ? 'true' : 'false'};
                    if (isCorrect) {
                      window._showPremiumToast('Benar! 🎉 Kerja bagus.', 'success');
                    } else {
                      window._showPremiumToast('Kurang tepat. Coba lagi! 💡', 'error');
                    }
                  `;
                  return `
                    <button class="btn btn-secondary" style="justify-content: flex-start; text-align: left; padding: 12px 16px; font-size: 0.9rem; border-radius: var(--radius-md); transition: all 0.2s; border: 1px solid var(--border); width: 100%; cursor: pointer;" onclick="${checkJs.replace(/\s+/g, ' ')}">
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
              window._showPremiumToast('Luar biasa, jawaban tepat! 🎉', 'success');
            } else {
              window._showPremiumToast('Belum tepat. Coba periksa ejaan Anda! ✍️', 'error');
            }
          `;
          html += `
            <div class="card practice-card">
              <div style="font-size: 0.72rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Isian Singkat • Q${i+1}</div>
              <div style="font-weight: 800; color: var(--text-main); margin-bottom: 18px; font-size: 1.05rem; line-height: 1.45; white-space: pre-line;">${q.question}</div>
              <div style="display: flex; gap: 10px; align-items: center;">
                <input type="text" placeholder="Ketik jawaban Anda..." id="ans-${i}" style="flex: 1; padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--border); background: var(--bg-input); color: var(--text-main); font-size: 0.9rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--text-main)'" onblur="this.style.borderColor='var(--border)'" />
                <button class="btn btn-primary" style="padding: 12px 24px; border-radius: var(--radius-md); font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.8rem;" onclick="${checkInputJs.replace(/\s+/g, ' ')}">Periksa</button>
              </div>
            </div>
          `;
        }
      });
      html += `</div>`;
    }

    html += `</div>`; // Close tab-content
    
    // Minimal styles for tabs moved to main.css

    container.innerHTML = html;
    
    // Tab switching
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeTab = e.currentTarget.dataset.tab;
        renderContent();
      });
    });

    // Resource card switching
    container.querySelector('#res-card-teori')?.addEventListener('click', () => {
      if (activeTab === 'practice') {
        activeTab = chapterId === 0 ? 'kana' : 'vocab';
        renderContent();
      }
    });

    container.querySelector('#res-card-latihan')?.addEventListener('click', () => {
      if (activeTab !== 'practice') {
        activeTab = 'practice';
        renderContent();
      }
    });

    // Chapter nav: prev / next buttons
    container.querySelector('#ch-prev-btn')?.addEventListener('click', () => navigateChapter('prev'));
    container.querySelector('#ch-next-btn')?.addEventListener('click', () => navigateChapter('next'));

    // Chapter picker dropdown → navigate directly
    container.querySelector('#chapter-picker')?.addEventListener('change', e => {
      window.location.hash = `#/chapter/${e.target.value}`;
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
      if (targetTab === 'vocab' || targetTab === 'conversation') targetTab = 'vocab_salam';
      if (targetTab === 'grammar' || targetTab === 'patterns') targetTab = 'pelafalan';
    }
    const validTabs = ['kana', 'pelafalan', 'vocab_salam', 'vocab', 'grammar', 'patterns', 'reibun', 'conversation', 'practice'];
    if (validTabs.includes(targetTab)) {
      activeTab = targetTab;
      renderContent();
    }
  };
  window.addEventListener('switchTab', onSwitchTab);

  // Initial render
  renderContent();
}
