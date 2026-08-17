import { renderTopbar, renderBackBtn, renderLoader } from '../components/layout.js';
import { MNN_INDEX, loadChapter } from '../data/chapter_index.js';
import { createAudioButton } from '../audio.js';
import { getState } from '../store.js';

export function MinnaView(container) {
  renderTopbar('Referensi Tata Bahasa', false, '#/');

  let fullLessonsData = null;

  async function getFullLessons() {
    if (fullLessonsData) return fullLessonsData;
    const { MNN_DATA } = await import('../data/chapter_data.js');
    fullLessonsData = MNN_DATA.map(ch => {
      return {
        id: ch.id,
        title: ch.title,
        intro: ch.desc,
        points: (ch.grammar || []).map(g => {
          const patternMatch = g.title.match(/^\d+\.\s*(.*)/);
          const patternClean = patternMatch ? patternMatch[1] : g.title;
          return {
            pattern: patternClean,
            formula: g.formula || '—',
            explanation: g.desc,
            points: g.points || [],
            nuance: g.native_note || null,
            examples: (ch.patterns || []).map(p => ({
              jp: p.jp,
              rom: p.rom,
              id: p.en
            }))
          };
        })
      };
    }).filter(l => l.points.length > 0);
    return fullLessonsData;
  }

  // Determine default segment based on user progress
  const _state = getState();
  const _completedUnits = _state.completedUnits || [];
  const _lastCompletedId = _completedUnits
    .map(u => parseInt(u))
    .filter(n => !isNaN(n))
    .sort((a, b) => b - a)[0] ?? 0;
  const _defaultSegment = _lastCompletedId >= 26 ? 'n4' : 'n5';

  // Shell HTML
  let html = `
    <div class="minna-container page-container-standard fade-in" style="max-width: 780px; margin: 0 auto; padding-bottom: 48px; display: flex; flex-direction: column; gap: 14px;">
      
      <!-- Dashboard Standard Hero Card -->
      <section class="hero-learning-card phase-hero-card">
        <nav class="phase-hero-nav" aria-label="Breadcrumb">
          <a href="#/" class="phase-nav-back">
            <i data-lucide="arrow-left" style="width: 13px; height: 13px;"></i> Dashboard
          </a>
          <span class="phase-nav-sep">/</span>
          <span class="phase-nav-level">Referensi Tata Bahasa</span>
        </nav>

        <div class="hero-main-content">
          <div class="dash-track-badge n5" style="align-self: flex-start; margin-bottom: 4px;">REFERENSI LENGKAP &middot; 50 BAB</div>
          <h1 class="hero-chapter-title" style="font-size: 1.35rem; margin: 0 0 4px 0;">Katalog Tata Bahasa Minna no Nihongo</h1>
          <p class="hero-chapter-desc" style="margin: 0;">
            Kompilasi rumus, pola kalimat, dan contoh penggunaan ringkas per bab untuk referensi cepat.
          </p>
        </div>

        <div class="hero-actions-bar" style="margin-top: 4px; padding-top: 8px;">
          <button id="btn-print-doc" class="btn btn-secondary no-print" style="font-size: 12px; padding: 6px 14px;">
            <i data-lucide="printer" style="width: 13px; height: 13px;"></i> Cetak PDF Ringkas
          </button>
        </div>
      </section>

      <!-- Search Bar -->
      <div class="no-print" style="position: relative;">
        <input type="text" id="grammar-search" placeholder="Cari pola, rumus, atau arti... (lintas semua bab)" class="fill-input" style="padding-left: 38px; padding-right: 36px; height: 42px; border-radius: var(--radius-md); font-size: 13px; width: 100%; background: var(--bg-card); border: 1px solid var(--border);">
        <i data-lucide="search" style="position: absolute; left: 12px; top: 13px; width: 16px; height: 16px; color: var(--text-muted);"></i>
        <button id="search-clear" style="position: absolute; right: 10px; top: 12px; background: transparent; border: none; color: var(--text-muted); cursor: pointer; display: none; padding: 2px;">
          <i data-lucide="x" style="width: 16px; height: 16px;"></i>
        </button>
      </div>

      <!-- Segmented Control N5 / N4 -->
      <div class="segmented-control no-print" id="segment-control-wrapper" style="width: 100%;">
        <button class="segmented-btn segment-btn ${_defaultSegment === 'n5' ? 'active' : ''}" data-segment="n5">N5 — Bab 0–25</button>
        <button class="segmented-btn segment-btn ${_defaultSegment === 'n4' ? 'active' : ''}" data-segment="n4">N4 — Bab 26–50</button>
      </div>

      <!-- Lessons List Container -->
      <div id="lessons-list-container" class="minna-list no-print" style="display: flex; flex-direction: column; gap: 12px;">
        <!-- Filled dynamically -->
      </div>

      <!-- Printable Document Format (Hidden on Screen) -->
      <div class="print-only-doc" id="print-only-doc" style="display: none;">
        <!-- Filled dynamically on demand before printing -->
      </div>
    </div>
  `;

  container.innerHTML = html;

  const listContainer = document.getElementById('lessons-list-container');
  const searchInput = document.getElementById('grammar-search');
  const clearBtn = document.getElementById('search-clear');
  const printBtn = document.getElementById('btn-print-doc');
  const printDocContainer = document.getElementById('print-only-doc');
  const segmentWrapper = document.getElementById('segment-control-wrapper');

  let activeSegment = _defaultSegment;
  const expandedChapters = new Set();
  const loadedChapters = new Map(); // id -> html string

  function renderChapterGrammar(chId, chapterData) {
    let grammarHtml = '';
    const points = chapterData.grammar || [];
    if (points.length === 0) {
      return `<div style="color:var(--text-muted);font-size:var(--text-xs);text-align:center;padding:16px;">Tidak ada tata bahasa pada bab ini.</div>`;
    }
    
    points.forEach((pt, idx) => {
      const patternMatch = pt.title.match(/^\d+\.\s*(.*)/);
      const patternClean = patternMatch ? patternMatch[1] : pt.title;
      const formula = pt.formula || '—';
      const explanation = pt.desc || '';
      const bullets = pt.points || [];
      const nativeNote = pt.native_note || '';
      const patterns = chapterData.patterns || [];
      
      grammarHtml += `
        <div style="padding: 18px 0; border-bottom: ${idx < points.length - 1 ? '1px solid var(--border)' : 'none'};">
          
          <!-- Kindle Pattern Header -->
          <div style="margin-bottom: 10px;">
            <div style="font-size: var(--text-3xs); font-weight: 600; color: var(--accent); margin-bottom: 2px;">
              Pola ${idx + 1}
            </div>
            <h4 style="font-size: var(--text-sm); font-weight: 600; color: var(--text-main); line-height: 1.4; margin: 0; letter-spacing: -0.01em;">
              ${patternClean}
            </h4>
          </div>

          <!-- Warm Kindle Formula Card -->
          ${formula && formula !== '—' ? `
          <div style="background: var(--bg-hover); border-left: 3px solid var(--accent); padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0; margin-bottom: 14px;">
            <div style="font-size: var(--text-3xs); color: var(--text-muted); font-weight: 600; margin-bottom: 2px;">Rumus Kalimat</div>
            <div style="font-size: var(--text-xs); color: var(--text-main); font-weight: 600; line-height: 1.45; font-family: var(--font-sans);">${formula}</div>
          </div>
          ` : ''}
          
          <!-- Kindle Explanation Paragraph -->
          <p style="font-size: var(--text-xs); color: var(--text-secondary); line-height: var(--leading-relaxed); margin: 0 0 12px 0; font-weight: 400;">
            ${explanation}
          </p>

          <!-- Kindle Dash Bullets -->
          ${bullets.length > 0 ? `
          <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
            ${bullets.map(b => {
              const cleanBullet = b
                .replace(/\bHIRAGANA\b/g, 'Hiragana')
                .replace(/\bKATAKANA\b/g, 'Katakana')
                .replace(/\bKANJI\b/g, 'Kanji')
                .replace(/\bPENTING\b/g, 'Penting');
              return `
                <div style="display: flex; gap: 8px; font-size: var(--text-xs); color: var(--text-secondary); line-height: var(--leading-relaxed);">
                  <span style="color: var(--text-muted); font-weight: 600; flex-shrink: 0;">—</span>
                  <div>${cleanBullet}</div>
                </div>
              `;
            }).join('')}
          </div>
          ` : ''}
          
          <!-- Nuance Callout -->
          ${nativeNote ? `
          <div style="background: var(--amber-dim); border-left: 3px solid var(--amber); padding: 10px 14px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0; margin-bottom: 14px;">
            <div style="font-size: var(--text-3xs); font-weight: 600; color: var(--amber); margin-bottom: 2px; display: flex; align-items: center; gap: 6px;">
              <i data-lucide="alert-circle" style="width:13px;height:13px;"></i> Catatan Penggunaan
            </div>
            <p style="font-size: var(--text-xs); color: var(--text-secondary); margin: 0; line-height: 1.5;">${nativeNote}</p>
          </div>
          ` : ''}

          <!-- Kindle Example Cards List (Decluttered to Clean Rows) -->
          <div style="margin-top: var(--space-4); padding-top: var(--space-3);">
            <div style="font-size: var(--text-3xs); font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: var(--tracking-wide); margin-bottom: var(--space-2);">Contoh Kalimat</div>
            <div style="display: flex; flex-direction: column; gap: var(--space-2);">
              ${patterns.map((ex, exIdx) => `
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: var(--space-3); padding: var(--space-2) 0; border-bottom: ${exIdx < patterns.length - 1 ? '1px solid var(--border)' : 'none'};" class="kindle-example-card">
                  <div style="min-width: 0; flex: 1;">
                    <div style="font-family: var(--font-jp); font-size: var(--text-base); font-weight: 600; color: var(--text-main); line-height: 1.4; margin-bottom: 2px;">${ex.jp}</div>
                    <div style="font-size: var(--text-3xs); color: var(--text-muted); font-family: var(--font-sans); margin-bottom: 2px;">${ex.rom}</div>
                    <div style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.4;">${ex.en}</div>
                  </div>
                  <div id="audio-btn-${chId}-${idx}-${exIdx}" style="flex-shrink: 0; margin-top: 2px;"></div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      `;
    });
    return grammarHtml;
  }

  function mountAudioButtons(chId, chapterData) {
    const points = chapterData.grammar || [];
    const patterns = chapterData.patterns || [];
    points.forEach((pt, idx) => {
      patterns.forEach((ex, exIdx) => {
        const btnContainer = document.getElementById(`audio-btn-${chId}-${idx}-${exIdx}`);
        if (btnContainer && !btnContainer.hasChildNodes()) {
          btnContainer.appendChild(createAudioButton(ex.jp, '1.0rem'));
        }
      });
    });
  }

  // Render initial collapsed view (Single Fluid Borderless Card Container)
  // activeSegment: 'n5' (bab 0-25) | 'n4' (bab 26-50)
  const renderIndexList = (seg = activeSegment) => {
    // Filter chapters by segment
    const segChapters = MNN_INDEX.filter(ch => {
      if (seg === 'n5') return ch.id <= 25;
      if (seg === 'n4') return ch.id >= 26;
      return true;
    });

    let indexHtml = `
      <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden;" class="fade-in">
    `;

    segChapters.forEach((ch, index) => {
      const isExpanded = expandedChapters.has(ch.id);
      const isLast = index === segChapters.length - 1;
      
      indexHtml += `
        <div class="lesson-accordion-row" id="lesson-card-${ch.id}" style="border-bottom: ${isLast ? 'none' : '1px solid var(--border)'};">
          <div class="lesson-header" data-chapter-id="${ch.id}" style="padding: 11px 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: background 0.15s ease;">
            <div style="min-width: 0; flex: 1;">
              <h3 style="font-size: var(--text-xs); font-weight: 500; color: var(--text-main); margin: 0; line-height: 1.4; letter-spacing: -0.01em;">${ch.title}</h3>
            </div>
            <div style="display: flex; align-items: center; gap: 10px; flex-shrink: 0; margin-left: 12px;">
              <span style="font-size: var(--text-3xs); color: var(--text-muted); font-weight: 500;">${ch.vocabCount} Kosakata</span>
              <i data-lucide="chevron-down" class="lesson-chevron" style="width: 14px; height: 14px; color: var(--text-muted); transition: transform 0.2s; transform: ${isExpanded ? 'rotate(180deg)' : 'none'};"></i>
            </div>
          </div>
          <div class="lesson-details" id="lesson-details-${ch.id}" style="display: ${isExpanded ? 'block' : 'none'}; padding: 12px 18px 16px; border-top: 1px solid var(--border); background: var(--bg-elevated);">
            <!-- Loaded dynamically -->
          </div>
        </div>
      `;
    });

    indexHtml += `</div>`;
    
    listContainer.innerHTML = indexHtml;
    if (window.lucide) lucide.createIcons({ root: listContainer });

    // Attach click listeners to headers
    listContainer.querySelectorAll('.lesson-header').forEach(header => {
      header.addEventListener('click', () => {
        const chId = parseInt(header.dataset.chapterId);
        const details = document.getElementById(`lesson-details-${chId}`);
        const chevron = header.querySelector('.lesson-chevron');
        
        if (expandedChapters.has(chId)) {
          // Collapse
          expandedChapters.delete(chId);
          details.style.display = 'none';
          chevron.style.transform = 'none';
        } else {
          // Expand
          expandedChapters.add(chId);
          details.style.display = 'block';
          chevron.style.transform = 'rotate(180deg)';
          
          if (!loadedChapters.has(chId)) {
            renderLoader(details, 'Memuat Tata Bahasa...');
            loadChapter(chId).then(chapterData => {
              const content = renderChapterGrammar(chId, chapterData);
              loadedChapters.set(chId, content);
              details.innerHTML = content;
              mountAudioButtons(chId, chapterData);
              if (window.lucide) lucide.createIcons({ root: details });
            }).catch(err => {
              console.error('[Minna Digest] Failed to load chapter grammar details:', err);
              details.innerHTML = `<div style="color:var(--red);font-size:var(--text-xs);padding:12px;">Gagal memuat tata bahasa.</div>`;
            });
          } else {
            // Already loaded, restore HTML and re-mount audio buttons
            details.innerHTML = loadedChapters.get(chId);
            loadChapter(chId).then(chapterData => {
              mountAudioButtons(chId, chapterData);
              if (window.lucide) lucide.createIcons({ root: details });
            });
          }
        }
      });
    });
  };

  const performSearch = async (query) => {
    const normQuery = query.toLowerCase().trim();
    if (!normQuery) {
      renderIndexList();
      return;
    }
    
    renderLoader(listContainer, 'Mencari Pola Kalimat...');
    try {
      const lessons = await getFullLessons();
      let contentHtml = '';
      
      const filteredLessons = lessons.map(lesson => {
        const filteredPoints = lesson.points.filter(pt => {
          return pt.pattern.toLowerCase().includes(normQuery) || 
                 pt.formula.toLowerCase().includes(normQuery) || 
                 pt.explanation.toLowerCase().includes(normQuery) || 
                 (pt.nuance && pt.nuance.toLowerCase().includes(normQuery)) ||
                 lesson.title.toLowerCase().includes(normQuery) ||
                 pt.points.some(bullet => bullet.toLowerCase().includes(normQuery)) ||
                 pt.examples.some(ex => 
                   ex.jp.toLowerCase().includes(normQuery) || 
                   ex.rom.toLowerCase().includes(normQuery) || 
                   ex.id.toLowerCase().includes(normQuery)
                 );
        });

        if (filteredPoints.length > 0) {
          return { ...lesson, points: filteredPoints };
        }
        return null;
      }).filter(Boolean);

      if (filteredLessons.length === 0) {
        listContainer.innerHTML = `
          <div style="text-align: center; padding: 40px 16px; border: 1px dashed var(--border); border-radius: var(--radius-md); background: var(--bg-card);" class="fade-in">
            <i data-lucide="search-code" style="width: 36px; height: 36px; color: var(--text-muted); margin-bottom: 10px;"></i>
            <div style="font-weight: 700; font-size: var(--text-sm); color: var(--text-main); margin-bottom: 4px;">Pola Tidak Ditemukan</div>
            <div style="color: var(--text-secondary); font-size: var(--text-xs);">Kata kunci "${query}" tidak cocok dengan pola tata bahasa mana pun.</div>
          </div>
        `;
        if (window.lucide) lucide.createIcons({ root: listContainer });
        return;
      }

      filteredLessons.forEach(lesson => {
        contentHtml += `
          <div class="card fade-in" style="border-left: 3px solid var(--accent); padding: 0; overflow: hidden; background: var(--bg-card); margin-bottom: 14px;">
            <div style="padding: 14px 18px; background: var(--bg-elevated); border-bottom: 1px solid var(--border);">
              <h3 style="font-size: var(--text-sm); font-weight: 700; margin-bottom: 4px; color: var(--text-main);">${lesson.title}</h3>
              <p style="color: var(--text-secondary); font-size: var(--text-xs); line-height: 1.5; margin: 0;">${lesson.intro}</p>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 0; padding: 0 18px;">
        `;

        lesson.points.forEach((pt, idx) => {
          const formula = pt.formula || '—';
          const nativeNote = pt.nuance || '';
          
          contentHtml += `
              <div style="padding: 16px 0; border-bottom: ${idx < lesson.points.length - 1 ? '1px solid var(--border)' : 'none'};">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
                  <!-- Kiri: Pola & Penjelasan -->
                  <div>
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 6px;">
                      <span style="font-size: var(--text-3xs); font-weight: 600; color: var(--accent); background: var(--accent-dim); padding: 2px 8px; border-radius: 99px; border: 1px solid var(--border-accent);">Pola ${idx + 1}</span>
                      <h4 style="font-family: var(--font-jp); font-size: var(--text-md); font-weight: 700; color: var(--text-main); margin: 0;">${pt.pattern}</h4>
                    </div>

                    <div style="margin-bottom: 8px;">
                      <code style="font-size: var(--text-xs); color: var(--text-main); background: var(--bg-elevated); padding: 4px 10px; border-radius: var(--radius-xs); border: 1px solid var(--border); font-family: var(--font-mono); font-weight: 600; display: inline-block;">${formula}</code>
                    </div>
                    
                    <div style="margin-bottom: 10px;">
                      <p style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5; margin: 0; font-weight: 500;">${pt.explanation}</p>
                      ${pt.points && pt.points.length > 0 ? `
                      <ul style="padding-left: 16px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 3px; font-size: var(--text-xs); margin-top: 6px;">
                        ${pt.points.map(bullet => `<li style="line-height: 1.45;">${bullet}</li>`).join('')}
                      </ul>
                      ` : ''}
                    </div>
                    
                    ${nativeNote ? `
                    <div style="background: var(--amber-dim); border-left: 3px solid var(--amber); padding: 8px 12px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0;">
                      <div style="font-size: var(--text-3xs); font-weight: 600; color: var(--amber); margin-bottom: 2px; display: flex; align-items: center; gap: 4px; text-transform: uppercase; letter-spacing: var(--tracking-wide);">
                        <i data-lucide="alert-circle" style="width:12px;height:12px;"></i> Catatan
                      </div>
                      <p style="font-size: var(--text-xs); color: var(--text-secondary); margin: 0; line-height: 1.45;">${nativeNote}</p>
                    </div>
                    ` : ''}
                  </div>

                  <!-- Kanan: Contoh Penggunaan (Compact List) -->
                  <div>
                    <div style="font-size: var(--text-3xs); font-weight: 600; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; letter-spacing: var(--tracking-wide);">Contoh Kalimat</div>
                    <div style="display: flex; flex-direction: column; gap: 6px;">
                      ${pt.examples.map((ex, exIdx) => `
                        <div style="background: var(--bg-elevated); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; gap: 10px;" class="example-row-sleek">
                          <div style="min-width: 0; flex: 1;">
                            <div style="display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; margin-bottom: 2px;">
                              <span style="font-family: var(--font-jp); font-size: var(--text-sm); font-weight: 600; color: var(--text-main);">${ex.jp}</span>
                              <span style="font-size: var(--text-3xs); color: var(--text-muted); font-family: var(--font-sans);">${ex.rom}</span>
                            </div>
                            <div style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.35;">${ex.en}</div>
                          </div>
                          <div id="audio-btn-${lesson.id}-${idx}-${exIdx}" style="flex-shrink: 0;"></div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>
              </div>
          `;
        });

        contentHtml += `
            </div>
          </div>
        `;
      });

      listContainer.innerHTML = contentHtml;

      // Mount audio buttons
      filteredLessons.forEach(lesson => {
        lesson.points.forEach((pt, idx) => {
          pt.examples.forEach((ex, exIdx) => {
            const btnContainer = document.getElementById(`audio-btn-${lesson.id}-${idx}-${exIdx}`);
            if (btnContainer) {
              btnContainer.appendChild(createAudioButton(ex.jp, '1.1rem'));
            }
          });
        });
      });

      if (window.lucide) lucide.createIcons({ root: listContainer });

    } catch (e) {
      console.error('[Minna Digest] Search failure:', e);
      listContainer.innerHTML = `<div style="color:var(--red);text-align:center;padding:20px;">Gagal memproses pencarian.</div>`;
    }
  };

  // Segment button wiring (FIX 3)
  segmentWrapper?.querySelectorAll('.segment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSegment = btn.dataset.segment;
      // Update visual state
      segmentWrapper.querySelectorAll('.segment-btn').forEach(b => {
        const isActive = b.dataset.segment === activeSegment;
        b.style.background = isActive ? 'var(--accent)' : 'var(--bg-elevated)';
        b.style.color = isActive ? '#fff' : 'var(--text-secondary)';
      });
      renderIndexList(activeSegment);
    });
  });

  // Run initial render of collapsed list
  renderIndexList();

  // Search event listeners
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (val) {
      clearBtn.style.display = 'block';
      // Hide segment control while searching (search is global)
      if (segmentWrapper) segmentWrapper.style.display = 'none';
    } else {
      clearBtn.style.display = 'none';
      // Restore segment control
      if (segmentWrapper) segmentWrapper.style.display = 'flex';
    }
    performSearch(val);
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    if (segmentWrapper) segmentWrapper.style.display = 'flex';
    searchInput.focus();
    performSearch('');
  });

  // Print button click handler (lazy-loads print layout on-demand)
  printBtn.addEventListener('click', async () => {
    printBtn.disabled = true;
    const oldText = printBtn.innerHTML;
    printBtn.innerHTML = `⏳ Menyiapkan Dokumen...`;
    
    try {
      const lessons = await getFullLessons();
      let printHtml = `
        <div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #000; padding-bottom: 20px;">
          <h1 style="font-size: 2.5rem; color: #000; margin-bottom: 10px;">Nihongo Master - Catatan Tata Bahasa</h1>
          <p style="color: #333; font-size: 1.2rem;">Panduan Komprehensif Tata Bahasa Lengkap</p>
        </div>
      `;
      
      lessons.forEach(lesson => {
        const cleanTitle = lesson.title.includes(':') ? lesson.title.split(':').slice(1).join(':').trim() : lesson.title;
        printHtml += `
          <div style="margin-bottom: 40px; page-break-inside: avoid;">
            <h2 style="font-size: 1.8rem; background: #eee; padding: 10px 15px; border-left: 5px solid #000; margin-bottom: 15px;">Bab ${lesson.id}: ${cleanTitle}</h2>
            <p style="font-style: italic; color: #444; margin-bottom: 20px; font-size: 1.1rem;">${lesson.intro}</p>
            
            ${lesson.points.map((pt, idx) => `
              <div style="margin-bottom: 25px; padding-left: 20px; border-left: 2px dashed #ccc;">
                <h3 style="font-size: 1.4rem; font-family: var(--font-jp); margin-bottom: 8px; color: #000;">${idx+1}. ${pt.pattern}</h3>
                <div style="font-family: monospace; background: #f9f9f9; padding: 5px 10px; display: inline-block; margin-bottom: 10px; border: 1px solid #ddd;">Rumus: ${pt.formula}</div>
                <p style="font-size: 1rem; color: #222; margin-bottom: 6px; line-height: 1.5;"><strong>Penjelasan:</strong> ${pt.explanation}</p>
                ${pt.points && pt.points.length > 0 ? `
                <ul style="padding-left: 20px; color: #222; margin-bottom: 12px; font-size: 0.95rem;">
                  ${pt.points.map(bullet => `<li style="line-height: 1.4; margin-bottom: 4px;">${bullet}</li>`).join('')}
                </ul>
                ` : ''}
                ${pt.nuance ? `<p style="font-size: 0.95rem; color: #555; margin-bottom: 10px; line-height: 1.5;"><em>Catatan Nuansa: ${pt.nuance}</em></p>` : ''}
                
                <div style="margin-top: 15px;">
                  <strong style="font-size: 0.95rem;">Contoh Kalimat:</strong>
                  <ul style="margin-top: 5px; padding-left: 20px;">
                    ${pt.examples.map(ex => `
                      <li style="margin-bottom: 8px;">
                        <span style="font-family: var(--font-jp); font-size: 1.1rem; font-weight: bold;">${ex.jp}</span> (${ex.rom})<br>
                        &rarr; ${ex.id}
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      });
      
      printDocContainer.innerHTML = printHtml;
      window.print();
    } catch (err) {
      console.error('[Minna Digest] Print preparation failed:', err);
      alert('Gagal menyiapkan dokumen untuk dicetak.');
    } finally {
      printBtn.disabled = false;
      printBtn.innerHTML = oldText;
    }
  });

  if (window.lucide) lucide.createIcons({ root: container });
}

