import { renderTopbar, showToast } from '../components/layout.js';
import { getState, updateSettings } from '../store.js';

export function SettingsView(container) {
  renderTopbar('Pengaturan');
  const s = getState();
  const st = s.settings;

  container.innerHTML = `
    <div style="max-width: 600px; margin: 0 auto;">
      
      <div class="settings-section">
        <h3>Tampilan & Audio</h3>
        
        <div class="setting-row">
          <div>
            <div style="font-weight: 600">Tampilkan Furigana</div>
            <label>Tampilkan cara baca di atas kanji (sangat disarankan untuk pemula).</label>
          </div>
          <div class="toggle-switch ${st.showFurigana ? 'on' : ''}" data-key="showFurigana"></div>
        </div>

        <div class="setting-row">
          <div>
            <div style="font-weight: 600; color: var(--danger)">Tampilkan Romaji</div>
            <label>Tampilkan huruf alfabet. Sangat TIDAK disarankan jika sudah lewat Fase 1.</label>
          </div>
          <div class="toggle-switch ${st.showRomaji ? 'on' : ''}" data-key="showRomaji"></div>
        </div>

        <div class="setting-row">
          <div>
            <div style="font-weight: 600">Audio Otomatis</div>
            <label>Putar pengucapan otomatis saat melihat flashcard kosakata baru.</label>
          </div>
          <div class="toggle-switch ${st.autoPlayAudio ? 'on' : ''}" data-key="autoPlayAudio"></div>
        </div>
      </div>


      <div class="settings-section">
        <h3>Manajemen Data</h3>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
          Semua progres belajar Anda (XP, statistik, review) disimpan di dalam browser ini.
        </p>
        <div style="display:flex; gap:12px;">
          <button id="btn-export" class="btn btn-secondary">Ekspor Data</button>
          <button id="btn-reset" class="btn btn-danger">Reset Semua Progres</button>
        </div>
      </div>

    </div>
  `;

  // Toggles
  container.querySelectorAll('.toggle-switch').forEach(el => {
    el.addEventListener('click', () => {
      const key = el.dataset.key;
      const newVal = !el.classList.contains('on');
      if (newVal) el.classList.add('on');
      else el.classList.remove('on');
      
      updateSettings({ [key]: newVal });
    });
  });

  // Reset
  container.querySelector('#btn-reset').addEventListener('click', () => {
    if (confirm('Yakin ingin mereset SEMUA progres? Tindakan ini tidak bisa dibatalkan.')) {
      localStorage.removeItem('nihongo_master_data');
      window.location.reload();
    }
  });
}
