// Text-to-Speech helper for Japanese pronunciation
let synth = null;
let jpVoice = null;
let ttsStatus = 'loading'; // 'available' | 'no-synthesis' | 'no-japanese-voice' | 'loading'
let statusListeners = [];

function updateStatus(newStatus) {
  if (ttsStatus !== newStatus) {
    ttsStatus = newStatus;
    statusListeners.forEach(cb => cb(ttsStatus));
  }
}

function init() {
  if (synth) return;
  if (!('speechSynthesis' in window)) {
    updateStatus('no-synthesis');
    return;
  }
  
  synth = window.speechSynthesis;
  
  function findJPVoice() {
    const voices = synth.getVoices();
    if (voices.length === 0) return; // Wait for voices to load
    
    jpVoice = voices.find(v => v.lang === 'ja-JP') 
      || voices.find(v => v.lang.startsWith('ja'))
      || null;
      
    if (jpVoice) {
      updateStatus('available');
    } else {
      updateStatus('no-japanese-voice');
    }
  }

  findJPVoice();
  synth.addEventListener('voiceschanged', findJPVoice);
}

export function isTTSAvailable() {
  return ttsStatus === 'available';
}

export function getTTSStatus() {
  // Try to init if not done
  init();
  return ttsStatus;
}

export function onTTSStatusChange(callback) {
  statusListeners.push(callback);
  callback(ttsStatus);
  return () => {
    statusListeners = statusListeners.filter(cb => cb !== callback);
  };
}

/**
 * Speak Japanese text using browser TTS
 * @param {string} text - Japanese text to speak
 * @param {number} rate - Speech rate (0.5 - 2.0)
 */
export function speakJP(text, rate = 0.9) {
  init();
  if (ttsStatus !== 'available' || !synth) {
    console.warn('TTS not available. Status:', ttsStatus);
    return;
  }
  
  try {
    synth.cancel(); // stop any current speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = rate;
    utterance.pitch = 1;
    if (jpVoice) utterance.voice = jpVoice;
    synth.speak(utterance);
  } catch (e) {
    console.error('TTS speech failed:', e);
  }
}

/**
 * Create an audio play button element
 */
export function createAudioButton(text, size = '1.2rem') {
  const btn = document.createElement('button');
  btn.className = 'btn-ghost audio-btn';
  btn.innerHTML = '<i data-lucide="volume-2"></i>';
  btn.style.fontSize = size;
  btn.style.padding = '4px 8px';
  btn.style.borderRadius = '6px';
  btn.style.cursor = 'pointer';
  btn.title = 'Dengarkan pengucapan';
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    speakJP(text);
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => btn.style.transform = '', 200);
  });
  return btn;
}

/**
 * Create a small DOM element indicating TTS status
 */
export function createTTSStatusBadge() {
  const badge = document.createElement('span');
  badge.className = 'tts-status-badge';
  badge.style.display = 'inline-flex';
  badge.style.alignItems = 'center';
  badge.style.fontSize = '0.75rem';
  badge.style.padding = '2px 6px';
  badge.style.borderRadius = '12px';
  badge.style.marginLeft = '8px';
  
  onTTSStatusChange((status) => {
    if (status === 'available') {
      badge.style.display = 'none'; // Hide if available
    } else {
      badge.style.display = 'inline-flex';
      badge.style.backgroundColor = '#fee2e2'; // Light red
      badge.style.color = '#991b1b'; // Dark red
      
      if (status === 'no-synthesis') {
        badge.textContent = 'Audio tidak didukung';
        badge.title = 'Browser Anda tidak mendukung fitur Text-to-Speech.';
      } else if (status === 'no-japanese-voice') {
        badge.textContent = 'Suara Jepang tidak tersedia';
        badge.title = 'Mohon instal paket suara bahasa Jepang di perangkat Anda.';
      } else if (status === 'loading') {
        badge.style.backgroundColor = '#fef3c7'; // Light yellow
        badge.style.color = '#92400e'; // Dark yellow
        badge.textContent = 'Memuat audio...';
      }
    }
  });
  
  // Trigger initial check
  getTTSStatus();
  
  return badge;
}
