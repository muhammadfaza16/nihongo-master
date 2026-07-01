import { renderTopbar, showToast, renderBackBtn } from '../components/layout.js';
import { getState, updateSettings, updateStudyPlan } from '../store.js';

export function SettingsView(container) {
  renderTopbar('Pengaturan', false, '#/');
  renderBackBtn(container, '#/', 'Dashboard');
  const s = getState();
  const st = s.settings;

  container.innerHTML = `
    <div style="max-width: 600px; margin: 0 auto; padding-bottom: 40px;">
      
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
        <h3>Target & Gaya Belajar (JLPT)</h3>
        
        <div class="setting-row" style="display:flex; flex-direction:column; align-items:stretch; gap:12px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-weight: 600">Aktifkan Target Belajar (Guided Mode)</div>
              <label>Ikuti rencana belajar terstruktur untuk persiapan ujian JLPT.</label>
            </div>
            <div class="toggle-switch ${s.studyPlan?.active ? 'on' : ''}" id="toggle-study-plan"></div>
          </div>
          
          <div id="study-plan-options" style="display: ${s.studyPlan?.active ? 'block' : 'none'}; border-top:1px solid var(--border); padding-top:14px; margin-top:4px;">
            <div style="margin-bottom:14px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
              <span style="font-size:0.85rem; font-weight:600; color:var(--text-secondary);">Target Level Ujian:</span>
              <select id="select-plan-level" class="chapter-picker" style="max-width:180px; padding:6px 28px 6px 12px; font-size:var(--text-xs); margin:0;">
                <option value="N5" ${s.studyPlan?.level === 'N5' ? 'selected' : ''}>JLPT N5 (Dasar)</option>
                <option value="N4" ${s.studyPlan?.level === 'N4' ? 'selected' : ''}>JLPT N4 (Lanjutan I)</option>
                <option value="N3" ${s.studyPlan?.level === 'N3' ? 'selected' : ''}>JLPT N3 (Lanjutan II)</option>
              </select>
            </div>
            
            <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
              <span style="font-size:0.85rem; font-weight:600; color:var(--text-secondary);">Durasi Rencana:</span>
              <select id="select-plan-duration" class="chapter-picker" style="max-width:180px; padding:6px 28px 6px 12px; font-size:var(--text-xs); margin:0;">
                <option value="3" ${s.studyPlan?.duration === 3 ? 'selected' : ''}>3 Bulan (Intensif)</option>
                <option value="6" ${s.studyPlan?.duration === 6 ? 'selected' : ''}>6 Bulan (Akselerasi)</option>
                <option value="12" ${s.studyPlan?.duration === 12 ? 'selected' : ''}>12 Bulan (Santai)</option>
              </select>
            </div>
          </div>
        </div>
      </div>


      <div class="settings-section">
        <h3>Manajemen Data</h3>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
          Semua progres belajar Anda (XP, statistik, review) disimpan di dalam browser ini.
        </p>
        <div style="display:flex; gap:12px;">
          <button id="btn-reset" class="btn btn-danger" style="padding: 10px 20px;">Reset Semua Progres</button>
        </div>
      </div>

    </div>
  `;

  // Toggles
  container.querySelectorAll('.toggle-switch:not(#toggle-study-plan)').forEach(el => {
    el.addEventListener('click', () => {
      const key = el.dataset.key;
      const newVal = !el.classList.contains('on');
      if (newVal) el.classList.add('on');
      else el.classList.remove('on');
      
      updateSettings({ [key]: newVal });
    });
  });

  // Study plan toggle
  const spToggle = container.querySelector('#toggle-study-plan');
  const spOptions = container.querySelector('#study-plan-options');
  const levelSelect = container.querySelector('#select-plan-level');
  const durationSelect = container.querySelector('#select-plan-duration');

  spToggle.addEventListener('click', () => {
    const active = !spToggle.classList.contains('on');
    if (active) {
      spToggle.classList.add('on');
      spOptions.style.display = 'block';
    } else {
      spToggle.classList.remove('on');
      spOptions.style.display = 'none';
    }
    updateStudyPlan({
      active,
      startDate: active ? new Date().toISOString() : null
    });
    showToast(active ? 'Target Belajar diaktifkan!' : 'Target Belajar dinonaktifkan.');
  });

  levelSelect.addEventListener('change', () => {
    updateStudyPlan({ level: levelSelect.value });
    showToast(`Target level diubah ke ${levelSelect.value}!`);
  });

  durationSelect.addEventListener('change', () => {
    updateStudyPlan({ duration: parseInt(durationSelect.value, 10) });
    showToast(`Durasi target diubah ke ${durationSelect.value} Bulan!`);
  });

  // Reset
  container.querySelector('#btn-reset').addEventListener('click', () => {
    if (confirm('Yakin ingin mereset SEMUA progres? Tindakan ini tidak bisa dibatalkan.')) {
      localStorage.removeItem('nihongo_master_data');
      window.location.reload();
    }
  });
}
