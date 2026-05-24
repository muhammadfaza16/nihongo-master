import { renderTopbar } from '../components/layout.js';
import { MINNA_LESSONS } from '../data/minnaData.js';
import { createAudioButton } from '../audio.js';

export function MinnaView(container) {
  renderTopbar('Grammar Digest (Minna)');

  // Shell HTML
  let html = `
    <div class="minna-container" style="max-width: 1000px; margin: 0 auto; padding-bottom: 60px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;" class="no-print">
        <div>
          <div style="font-size: var(--text-xs); color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: var(--tracking-widest); margin-bottom: 6px;">
            Referensi Akademik
          </div>
          <h2 style="font-size: 2rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px; letter-spacing: var(--tracking-tight);">Minna no Nihongo: Deep Digest</h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem; max-width: 650px; line-height: var(--leading-relaxed); margin: 0;">
            Ekstraksi komprehensif dari buku <i>Grammatical Notes</i>. Format ringkas ini dirancang agar Anda dapat memahami pola kalimat, rumus, dan nuansa secara cepat dan mendalam.
          </p>
        </div>
        <button class="btn btn-secondary no-print" onclick="window.print()" style="padding: 10px 18px; height: fit-content; flex-shrink: 0; margin-left: 16px;">
          <i data-lucide="printer" style="width:16px;height:16px;"></i> Cetak PDF
        </button>
      </div>

      <!-- Search Bar -->
      <div class="no-print" style="position: relative; margin-bottom: 28px;">
        <input type="text" id="grammar-search" placeholder="Cari pola kalimat, rumus, penjelasan, atau arti..." class="fill-input" style="padding-left: 44px; height: 48px; border-radius: var(--radius-md); font-weight: 600; width: 100%;">
        <i data-lucide="search" style="position: absolute; left: 16px; top: 15px; width: 18px; height: 18px; color: var(--text-muted);"></i>
        <button id="search-clear" style="position: absolute; right: 16px; top: 14px; background: transparent; border: none; color: var(--text-muted); cursor: pointer; display: none;">
          <i data-lucide="x" style="width: 18px; height: 18px;"></i>
        </button>
      </div>

      <!-- Lessons List Container -->
      <div id="lessons-list-container" class="minna-list no-print" style="display: flex; flex-direction: column; gap: 28px;">
        <!-- Filled dynamically -->
      </div>

      <!-- Printable Document Format (Hidden on Screen) -->
      <div class="print-only-doc" style="display: none;">
        <div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #000; padding-bottom: 20px;">
          <h1 style="font-size: 2.5rem; color: #000; margin-bottom: 10px;">Minna no Nihongo - Deep Digest</h1>
          <p style="color: #333; font-size: 1.2rem;">Panduan Komprehensif Tata Bahasa Lengkap</p>
        </div>
  `;

  MINNA_LESSONS.forEach(lesson => {
    html += `
        <div style="margin-bottom: 40px; page-break-inside: avoid;">
          <h2 style="font-size: 1.8rem; background: #eee; padding: 10px 15px; border-left: 5px solid #000; margin-bottom: 15px;">Bab ${lesson.id}: ${lesson.title.split(': ')[1]}</h2>
          <p style="font-style: italic; color: #444; margin-bottom: 20px; font-size: 1.1rem;">${lesson.intro}</p>
          
          ${lesson.points.map((pt, idx) => `
            <div style="margin-bottom: 25px; padding-left: 20px; border-left: 2px dashed #ccc;">
              <h3 style="font-size: 1.4rem; font-family: var(--font-jp); margin-bottom: 8px; color: #000;">${idx+1}. ${pt.pattern}</h3>
              <div style="font-family: monospace; background: #f9f9f9; padding: 5px 10px; display: inline-block; margin-bottom: 10px; border: 1px solid #ddd;">Rumus: ${pt.formula}</div>
              <p style="font-size: 1rem; color: #222; margin-bottom: 10px; line-height: 1.5;"><strong>Penjelasan:</strong> ${pt.explanation}</p>
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

  html += `
      </div>
    </div>

    <style>
      @media print {
        .no-print, .sidebar, .topbar {
          display: none !important;
        }
        .print-only-doc {
          display: block !important;
        }
        body, html, #app, .main-content, .page-content {
          background: white !important;
          color: black !important;
          overflow: visible !important;
          height: auto !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .minna-container {
          max-width: 100% !important;
          padding: 0 !important;
        }
      }
    </style>
  `;

  container.innerHTML = html;

  // Render list of lessons based on query
  const listContainer = document.getElementById('lessons-list-container');
  const searchInput = document.getElementById('grammar-search');
  const clearBtn = document.getElementById('search-clear');

  const performRender = (query = '') => {
    const normQuery = query.toLowerCase().trim();
    let contentHtml = '';

    const filteredLessons = MINNA_LESSONS.map(lesson => {
      // Filter the grammar points in the lesson
      const filteredPoints = lesson.points.filter(pt => {
        if (!normQuery) return true;
        
        return pt.pattern.toLowerCase().includes(normQuery) || 
               pt.formula.toLowerCase().includes(normQuery) || 
               pt.explanation.toLowerCase().includes(normQuery) || 
               (pt.nuance && pt.nuance.toLowerCase().includes(normQuery)) ||
               lesson.title.toLowerCase().includes(normQuery) ||
               pt.examples.some(ex => 
                 ex.jp.toLowerCase().includes(normQuery) || 
                 ex.rom.toLowerCase().includes(normQuery) || 
                 ex.id.toLowerCase().includes(normQuery)
               );
      });

      if (filteredPoints.length > 0) {
        return {
          ...lesson,
          points: filteredPoints
        };
      }
      return null;
    }).filter(Boolean);

    if (filteredLessons.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align: center; padding: 48px 16px; border: 1px dashed var(--border); border-radius: var(--radius-lg); background: var(--bg-card);" class="fade-in">
          <i data-lucide="search-code" style="width: 40px; height: 40px; color: var(--text-muted); margin-bottom: 12px;"></i>
          <div style="font-weight: 700; font-size: var(--text-md); color: var(--text-main); margin-bottom: 4px;">Pola Tidak Ditemukan</div>
          <div style="color: var(--text-secondary); font-size: var(--text-sm);">Kata kunci "${query}" tidak cocok dengan pola tata bahasa mana pun.</div>
        </div>
      `;
      if (window.lucide) lucide.createIcons({ root: listContainer });
      return;
    }

    filteredLessons.forEach(lesson => {
      contentHtml += `
        <div class="card fade-in" style="border-left: 4px solid var(--accent); padding: 0; overflow: hidden; background: var(--bg-card);">
          <div style="padding: 20px 24px; background: var(--bg-elevated); border-bottom: 1px solid var(--border);">
            <div style="font-size: var(--text-2xs); color: var(--text-muted); font-weight: 700; margin-bottom: 4px; letter-spacing: var(--tracking-wider); text-transform: uppercase;">BAB ${lesson.id}</div>
            <h3 style="font-size: var(--text-lg); font-weight: 800; margin-bottom: 8px; color: var(--text-main);">${lesson.title.split(': ')[1] || lesson.title}</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed); margin: 0;">${lesson.intro}</p>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 0;">
      `;

      lesson.points.forEach((pt, idx) => {
        contentHtml += `
            <div style="padding: 24px; border-bottom: ${idx < lesson.points.length - 1 ? '1px solid var(--border)' : 'none'};">
              <div style="display: flex; flex-wrap: wrap; gap: 24px;">
                
                <!-- Kiri: Pola & Penjelasan -->
                <div style="flex: 1.2; min-width: 280px;">
                  <div style="margin-bottom: 16px;">
                    <span style="display: inline-block; background: var(--accent-dim); color: var(--accent-bright); padding: 4px 10px; border-radius: var(--radius-xs); font-size: var(--text-2xs); font-weight: 700; margin-bottom: 10px; border: 1px solid var(--border-accent);">Pola ${idx + 1}</span>
                    <div style="font-family: var(--font-jp); font-size: 1.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">${pt.pattern}</div>
                    <code style="font-size: var(--text-sm); color: var(--accent-bright); background: var(--bg-elevated); padding: 6px 12px; border-radius: var(--radius-sm); font-weight: 600; display: inline-block; border-left: 3px solid var(--accent); border-top: 1px solid var(--border); border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); font-family: var(--font-mono);">${pt.formula}</code>
                  </div>
                  
                  <div style="margin-bottom: 16px;">
                    <div style="font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase; letter-spacing: var(--tracking-wide);">Penjelasan Logika</div>
                    <p style="font-size: var(--text-sm); color: var(--text-secondary); line-height: var(--leading-relaxed); margin: 0;">${pt.explanation}</p>
                  </div>
                  
                  ${pt.nuance ? `
                  <div style="background: rgba(245, 158, 11, 0.08); border-left: 3px solid #f59e0b; padding: 12px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0; border-top: 1px solid rgba(245, 158, 11, 0.15); border-right: 1px solid rgba(245, 158, 11, 0.15); border-bottom: 1px solid rgba(245, 158, 11, 0.15);">
                    <div style="font-size: var(--text-2xs); font-weight: 700; color: #f59e0b; margin-bottom: 4px; display: flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: var(--tracking-wide);">
                      <i data-lucide="alert-circle" style="width:14px;height:14px;"></i> Nuansa & Pengecualian
                    </div>
                    <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0; line-height: var(--leading-normal);">${pt.nuance}</p>
                  </div>
                  ` : ''}
                </div>

                <!-- Kanan: Contoh -->
                <div style="flex: 1; min-width: 280px;">
                  <div style="font-size: var(--text-2xs); font-weight: 700; color: var(--text-muted); margin-bottom: 12px; text-transform: uppercase; letter-spacing: var(--tracking-wide);">Contoh Penggunaan</div>
                  <div style="display: flex; flex-direction: column; gap: 10px;">
                    ${pt.examples.map((ex, exIdx) => `
                      <div style="background: var(--bg-elevated); padding: 14px 16px; border-radius: var(--radius-md); border: 1px solid var(--border); display: flex; justify-content: space-between; align-items: flex-start; transition: border-color 0.2s;" class="vocab-card-item">
                        <div style="min-width: 0; flex: 1;">
                          <div style="font-family: var(--font-jp); font-size: 1.2rem; font-weight: 700; color: var(--text-main); margin-bottom: 4px; line-height: 1.3;">${ex.jp}</div>
                          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 4px; font-family: var(--font-sans);">${ex.rom}</div>
                          <div style="font-size: 0.88rem; color: var(--accent-bright); font-weight: 600; line-height: 1.3;">&rarr; ${ex.id}</div>
                        </div>
                        <div id="audio-btn-${lesson.id}-${idx}-${exIdx}" style="margin-left: 12px; flex-shrink: 0; margin-top: 2px;"></div>
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

    // Mount Audio Buttons
    filteredLessons.forEach(lesson => {
      lesson.points.forEach((pt, idx) => {
        pt.examples.forEach((ex, exIdx) => {
          const btnContainer = document.getElementById(`audio-btn-${lesson.id}-${idx}-${exIdx}`);
          if (btnContainer) {
            btnContainer.appendChild(createAudioButton(ex.jp, '1.25rem'));
          }
        });
      });
    });

    if (window.lucide) lucide.createIcons({ root: listContainer });
  };

  // Run initial render
  performRender();

  // Search listeners
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (val) {
      clearBtn.style.display = 'block';
    } else {
      clearBtn.style.display = 'none';
    }
    performRender(val);
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    searchInput.focus();
    performRender('');
  });

  if (window.lucide) lucide.createIcons({ root: container });
}

