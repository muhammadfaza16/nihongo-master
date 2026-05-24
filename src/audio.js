// Text-to-Speech helper for Japanese pronunciation
let synth = null;
let jpVoice = null;

function init() {
  if (synth) return;
  synth = window.speechSynthesis;
  
  function findJPVoice() {
    const voices = synth.getVoices();
    jpVoice = voices.find(v => v.lang === 'ja-JP') 
      || voices.find(v => v.lang.startsWith('ja'))
      || null;
  }

  findJPVoice();
  synth.addEventListener('voiceschanged', findJPVoice);
}

/**
 * Speak Japanese text using browser TTS
 * @param {string} text - Japanese text to speak
 * @param {number} rate - Speech rate (0.5 - 2.0)
 */
export function speakJP(text, rate = 0.9) {
  init();
  if (!synth) return;
  
  synth.cancel(); // stop any current speech
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  utterance.rate = rate;
  utterance.pitch = 1;
  if (jpVoice) utterance.voice = jpVoice;
  synth.speak(utterance);
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
