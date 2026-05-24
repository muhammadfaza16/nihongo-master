import { renderTopbar } from '../components/layout.js';
import { getState, setState } from '../store.js';

export function AiTutorView(container) {
  renderTopbar('AI Tutor Sensei');
  const s = getState();
  const apiKey = s.settings?.apiKey;

  if (!apiKey) {
    container.innerHTML = `
      <div class="fade-in" style="max-width: 500px; margin: 60px auto; text-align: center; background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-xl); padding: 40px 32px; box-shadow: var(--shadow-lg);">
        <div style="margin-bottom: 20px; color: var(--accent-bright); display: inline-flex; align-items: center; justify-content: center; width: 80px; height: 80px; border-radius: 50%; background: var(--accent-dim);">
          <i data-lucide="bot" style="width: 40px; height: 40px;"></i>
        </div>
        <h2 style="font-size: 1.5rem; font-weight: 900; color: var(--text-main); margin-bottom: 12px; letter-spacing: var(--tracking-tight);">AI Tutor Sensei Belum Aktif</h2>
        <p style="color: var(--text-secondary); margin-bottom: 28px; font-size: 0.9rem; line-height: 1.6;">Untuk berkonsultasi tata bahasa dan mengobrol dengan AI Sensei, Anda perlu memasukkan API Key Anthropic Anda terlebih dahulu di Pengaturan.</p>
        <button class="btn-primary" onclick="window.location.hash='#/settings'" style="padding: 12px 28px; font-size: 0.9rem; border-radius: var(--radius-md); font-weight: 800; cursor: pointer; border: none;">Buka Pengaturan</button>
      </div>
    `;
    if (window.lucide) lucide.createIcons({ root: container });
    return;
  }

  const defaultSuggestions = [
    "Bedanya Wa (は) dan Ga (が)?",
    "Apa itu bentuk Kamus (Jisho-kei)?",
    "Jelaskan tata bahasa ~te kudasai",
    "Bagaimana cara membedakan Kanji?"
  ];

  container.innerHTML = `
    <style>
      .chat-wrapper {
        display: flex;
        flex-direction: column;
        height: calc(100vh - var(--topbar-h) - 48px - var(--safe-bottom));
        max-width: 800px;
        margin: 0 auto;
        gap: 16px;
      }
      @media (max-width: 768px) {
        .chat-wrapper {
          height: calc(100vh - var(--topbar-h) - var(--bottom-nav-h) - 32px - var(--safe-bottom));
        }
      }
      .chat-messages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        display: flex;
        flex-direction: column;
        gap: 16px;
        box-shadow: var(--shadow-sm);
        scroll-behavior: smooth;
      }
      .chat-bubble {
        max-width: 75%;
        padding: 14px 18px;
        border-radius: var(--radius-lg);
        font-size: 0.92rem;
        line-height: 1.6;
        word-break: break-word;
        box-shadow: var(--shadow-sm);
        animation: bubbleAppear 0.25s cubic-bezier(0.4, 0, 0.2, 1) both;
      }
      @keyframes bubbleAppear {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .chat-bubble.ai {
        align-self: flex-start;
        background: var(--bg-elevated);
        border: 1px solid var(--border-bright);
        color: var(--text-main);
        border-bottom-left-radius: 4px;
      }
      .chat-bubble.user {
        align-self: flex-end;
        background: var(--accent);
        color: white;
        border-bottom-right-radius: 4px;
      }
      .chat-bubble.error {
        align-self: flex-start;
        background: var(--red-dim);
        border: 1px solid var(--red);
        color: var(--red);
      }
      .chat-input-area {
        display: flex;
        gap: 12px;
        align-items: center;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        padding: 8px 12px;
        box-shadow: var(--shadow-sm);
      }
      .chat-input {
        flex: 1;
        background: transparent;
        border: none;
        color: var(--text-main);
        font-size: 0.95rem;
        font-family: var(--font-sans);
        padding: 8px 4px;
      }
      .chat-input:focus {
        outline: none;
      }
      .chat-send-btn {
        background: var(--accent);
        color: white;
        border: none;
        border-radius: var(--radius-md);
        padding: 8px 16px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.2s;
      }
      .chat-send-btn:hover:not(:disabled) {
        background: var(--accent-bright);
        transform: translateY(-1px);
      }
      .chat-send-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .chip-container {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 4px;
        padding: 0 4px;
      }
      .suggest-chip {
        background: var(--bg-elevated);
        border: 1px solid var(--border);
        border-radius: 99px;
        padding: 8px 16px;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-secondary);
        cursor: pointer;
        transition: all 0.2s;
      }
      .suggest-chip:hover {
        background: var(--accent-dim);
        border-color: var(--border-accent);
        color: var(--accent-bright);
        transform: translateY(-1px);
      }
    </style>

    <div class="chat-wrapper fade-in">
      <div class="chat-messages" id="chat-messages">
        <div class="chat-bubble ai">
          Konnichiwa! Saya AI Tutor Anda. Ada yang ingin ditanyakan tentang bahasa Jepang hari ini?
        </div>
      </div>
      <div id="chips-container" class="chip-container" style="display: none;"></div>
      <div class="chat-input-area">
        <input type="text" id="chat-input" class="chat-input" placeholder="Tanya sesuatu (misal: bedanya wa dan ga?)" />
        <button id="chat-send" class="chat-send-btn">
          <span>Kirim</span>
          <i data-lucide="send" style="width: 14px; height: 14px;"></i>
        </button>
      </div>
    </div>
  `;

  const messagesDiv = document.getElementById('chat-messages');
  const inputEl = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const chipsContainer = document.getElementById('chips-container');

  // Load history
  const history = s.chatHistory || [];
  if (history.length > 0) {
    history.forEach(msg => {
      appendMessage(msg.role, msg.content, false);
    });
    scrollToBottom();
  } else {
    // Show suggestion chips only if history is empty
    renderSuggestions();
  }

  function renderSuggestions() {
    chipsContainer.style.display = 'flex';
    chipsContainer.innerHTML = defaultSuggestions.map(q => `
      <button class="suggest-chip">${q}</button>
    `).join('');
    
    chipsContainer.querySelectorAll('.suggest-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        sendMessage(btn.textContent);
      });
    });
  }

  function appendMessage(role, content, save = true) {
    const el = document.createElement('div');
    el.className = `chat-bubble ${role === 'user' ? 'user' : role === 'error' ? 'error' : 'ai'}`;
    
    // Simple markdown formatting for bold and code
    let formatted = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<span style="font-family:monospace;background:var(--bg-elevated);border:1px solid var(--border);padding:2px 4px;border-radius:4px;">$1</span>');
      
    // Format JP text
    formatted = formatted.replace(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\uFAFF]+/g, match => {
       return `<span class="jp-text">${match}</span>`;
    });

    el.innerHTML = formatted;
    messagesDiv.appendChild(el);
    scrollToBottom();

    if (save) {
      const hist = getState().chatHistory || [];
      setState({ chatHistory: [...hist, { role, content }] });
    }
  }

  function showTypingIndicator() {
    hideTypingIndicator();
    const indicator = document.createElement('div');
    indicator.id = 'typing-indicator-bubble';
    indicator.className = 'typing-indicator';
    indicator.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    messagesDiv.appendChild(indicator);
    scrollToBottom();
  }

  function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator-bubble');
    if (indicator) {
      indicator.remove();
    }
  }

  function scrollToBottom() {
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  async function sendMessage(overrideText) {
    const text = (overrideText || inputEl.value).trim();
    if (!text) return;

    // Hide suggestion chips as soon as interaction starts
    chipsContainer.style.display = 'none';

    inputEl.value = '';
    inputEl.disabled = true;
    sendBtn.disabled = true;

    appendMessage('user', text);
    showTypingIndicator();

    // Prepare API call
    const hist = getState().chatHistory || [];
    const messages = hist.map(m => ({ role: m.role === 'ai' ? 'assistant' : 'user', content: m.content }));
    
    const systemPrompt = "Anda adalah Sensei bahasa Jepang yang sabar, ramah, dan sangat kompeten. Tujuan Anda membantu orang Indonesia belajar bahasa Jepang dari nol hingga JLPT N3. Jawab dalam bahasa Indonesia. Jika memberikan contoh kalimat bahasa Jepang, selalu sertakan huruf hiragana/kanji, cara baca (romaji hanya jika diminta atau sangat perlu), dan terjemahan bahasa Indonesia. Jangan terlalu panjang, berikan penjelasan padat dan mudah dimengerti.";

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-cors-bypass': 'true'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20240620',
          max_tokens: 1024,
          system: systemPrompt,
          messages: messages
        })
      });

      hideTypingIndicator();

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      appendMessage('ai', data.content[0].text);
    } catch (e) {
      console.error(e);
      hideTypingIndicator();
      appendMessage('error', `*Error: Gagal menghubungi API.* Pastikan API Key valid atau CORS proxy aktif (jika dijalankan lokal browser). ${e.message}`);
    } finally {
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  sendBtn.addEventListener('click', () => sendMessage());
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  if (window.lucide) lucide.createIcons({ root: container });
}
