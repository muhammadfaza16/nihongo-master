import { renderTopbar } from '../components/layout.js';
import { CURRICULUM } from '../data/curriculum.js';
import { DATA_REGISTRY } from '../data/registry.js';

export function HandbookView(container) {
  renderTopbar('Buku Panduan JLPT N5-N3');
  
  let html = `
    <div class="handbook-container" style="max-width: 900px; margin: 0 auto; background: var(--bg-card); padding: 40px; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
        <div>
          <h1 style="font-size: 2.5rem; color: var(--primary); margin-bottom: 8px;">日本語 Handbook</h1>
          <p style="color: var(--text-secondary); font-size: 1.1rem;">Panduan Lengkap JLPT N5, N4, dan N3</p>
        </div>
        <button class="btn btn-primary" onclick="window.print()">
          <i data-lucide="printer" style="width:18px;height:18px;"></i> Cetak PDF
        </button>
      </div>

      <div class="handbook-content">
  `;

  CURRICULUM.forEach(level => {
    html += `
      <div class="hb-level" style="margin-bottom: 60px;">
        <h2 style="font-size: 2rem; border-bottom: 2px solid var(--border-color); padding-bottom: 16px; margin-bottom: 24px; color: var(--text-primary);">
          ${level.title}
        </h2>
        <p style="color: var(--text-secondary); margin-bottom: 32px;">${level.desc}</p>
    `;

    level.phases.forEach(phase => {
      html += `
        <div class="hb-phase" style="margin-bottom: 40px; padding-left: 20px; border-left: 4px solid var(--primary-dark);">
          <h3 style="font-size: 1.5rem; margin-bottom: 8px;">${phase.title}</h3>
          <p style="color: var(--text-secondary); margin-bottom: 24px;">${phase.desc}</p>
      `;

      phase.units.forEach(unit => {
        const items = DATA_REGISTRY[unit.id] || [];
        
        html += `
          <div class="hb-unit" style="margin-bottom: 32px;">
            <h4 style="font-size: 1.2rem; margin-bottom: 12px; color: var(--primary-light);">
              ${unit.title} <span style="font-size: 0.8rem; padding: 2px 8px; border-radius: 12px; background: var(--bg-card-hover); color: var(--text-muted); margin-left: 8px;">${unit.type.toUpperCase()}</span>
            </h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px;">${unit.desc}</p>
        `;

        if (items.length > 0) {
          html += `<table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <thead>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <th style="text-align: left; padding: 12px; color: var(--text-muted);">Jepang</th>
                <th style="text-align: left; padding: 12px; color: var(--text-muted);">Furigana / Romaji</th>
                <th style="text-align: left; padding: 12px; color: var(--text-muted);">Arti / Penjelasan</th>
              </tr>
            </thead>
            <tbody>
          `;
          
          items.forEach(item => {
            html += `
              <tr style="border-bottom: 1px solid var(--border-color); background: var(--bg-primary);">
                <td style="padding: 12px; font-size: 1.2rem; font-family: var(--font-jp); font-weight: 700;">${item.q}</td>
                <td style="padding: 12px; color: var(--text-secondary); font-size: 0.9rem;">${item.sub || '-'}</td>
                <td style="padding: 12px; color: var(--text-primary); font-size: 0.95rem;">${item.ans}</td>
              </tr>
            `;
          });
          html += `</tbody></table>`;
        } else {
          html += `<div style="padding: 16px; background: var(--bg-primary); border-radius: 8px; color: var(--text-muted); font-size: 0.9rem; font-style: italic;">Materi sedang disiapkan...</div>`;
        }

        html += `</div>`;
      });
      html += `</div>`;
    });
    html += `</div>`;
  });

  html += `
      </div>
    </div>
    
    <style>
      @media print {
        * {
          animation: none !important;
          transition: none !important;
          transform: none !important;
        }
        html, body, #app, .main-content, .page-content {
          overflow: visible !important;
          height: auto !important;
          min-height: auto !important;
          display: block !important;
          position: static !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        body { background: white !important; color: black !important; }
        .sidebar, .topbar { display: none !important; }
        .handbook-container { 
          border: none !important; 
          background: white !important;
          padding: 0 !important;
          max-width: 100% !important;
          margin: 0 !important;
          box-shadow: none !important;
        }
        h1, h2, h3, h4, td, th, p { color: black !important; margin-top: 0 !important; }
        .hb-level { margin-top: 0 !important; padding-top: 0 !important; }
        .hb-phase { border-left-color: #333 !important; }
        .hb-unit { margin-bottom: 24px !important; }
        table { page-break-inside: auto !important; }
        table th, table td, table tr { border-color: #ccc !important; }
        tr { background: white !important; page-break-inside: avoid; page-break-after: auto; }
        button { display: none !important; }
        
        /* Ensure pages don't get cut arbitrarily */
        h2, h3, h4 { page-break-after: avoid !important; }
        thead { display: table-header-group !important; }
      }
    </style>
  `;

  container.innerHTML = html;
  
  if (window.lucide) {
    lucide.createIcons({ root: container });
  }
}
