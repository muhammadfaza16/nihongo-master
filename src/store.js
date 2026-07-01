// Centralized state manager with localStorage persistence
const STORAGE_KEY = 'nihongo_master_data';

const defaultState = {
  // User progress
  xp: 0,
  streak: 0,
  lastStudyDate: null,
  totalMinutes: 0,
  sessionStart: null,

  // Level titles: 初心者 → 学習者 → 中級者 → 上級者
  // Levels based on XP thresholds
  
  // Curriculum progress - tracks completed unit IDs
  completedUnits: [],
  // Current active unit
  currentUnit: null,

  // SRS items: { id, type, nextReview, interval, easeFactor, repetitions }
  srsItems: [],

  // Quiz history: { unitId, score, total, date }
  quizHistory: [],

  // Exam results: { level, score, sections, date }
  examResults: [],

  // Chapter exam passes: [chapterId]
  passedChapterExams: [],

  // Achievements unlocked
  achievements: [],

  // Activity log: { date: minutesStudied }
  activityLog: {},

  // Settings
  settings: {
    showFurigana: true,
    showRomaji: false,
    dailyGoalMinutes: 30,
    autoPlayAudio: false,
  },

  // Study Plan target settings for accelerate mode
  studyPlan: {
    active: false,
    level: 'N5',
    duration: 6,
    startDate: null,
  },
};

let state = null;

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...defaultState, ...parsed, settings: { ...defaultState.settings, ...(parsed.settings || {}) } };
      // Normalize completedUnits to strings
      state.completedUnits = (state.completedUnits || []).map(String);
    } else {
      state = { ...defaultState };
    }
  } catch {
    state = { ...defaultState };
  }
  // Rebuild lookup Set after every load
  _completedSet = new Set(state.completedUnits);
}

let _saveTimer = null;
function saveState() {
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }, 300);
}


// Event system for reactive updates
const listeners = new Map();

export function on(event, callback) {
  if (!listeners.has(event)) listeners.set(event, []);
  listeners.get(event).push(callback);
}

export function emit(event, data) {
  if (listeners.has(event)) {
    listeners.get(event).forEach(cb => cb(data));
  }
}

// Set for O(1) unit completion lookups (rebuilt on loadState)
let _completedSet = new Set();

export function getState() {
  if (!state) loadState();
  return state;
}

export function setState(updates) {
  if (!state) loadState();
  Object.assign(state, updates);
  // Keep Set in sync when completedUnits changes
  if (updates.completedUnits) {
    _completedSet = new Set(updates.completedUnits.map(String));
  }
  saveState();
  emit('stateChanged', state);
}

export function updateSettings(updates) {
  if (!state) loadState();
  state.settings = { ...state.settings, ...updates };
  saveState();
  emit('settingsChanged', state.settings);
}

export function updateStudyPlan(updates) {
  if (!state) loadState();
  state.studyPlan = { ...state.studyPlan, ...updates };
  saveState();
  emit('studyPlanChanged', state.studyPlan);
}

// ===== Progress helpers =====

export function addXP(amount) {
  const s = getState();
  setState({ xp: s.xp + amount });
  emit('xpGained', amount);
  checkAchievements();
}

export function getLevel() {
  const xp = getState().xp;
  if (xp >= 10000) return { name: '上級者', nameId: 'Ahli', level: 4 };
  if (xp >= 4000) return { name: '中級者', nameId: 'Menengah', level: 3 };
  if (xp >= 1000) return { name: '学習者', nameId: 'Pelajar', level: 2 };
  return { name: '初心者', nameId: 'Pemula', level: 1 };
}

export function updateStreak() {
  const s = getState();
  const today = new Date().toISOString().split('T')[0];
  if (s.lastStudyDate === today) return;

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const newStreak = s.lastStudyDate === yesterday ? s.streak + 1 : 1;
  setState({ streak: newStreak, lastStudyDate: today });
  checkAchievements();
}

export function logActivity(minutes) {
  const s = getState();
  const today = new Date().toISOString().split('T')[0];
  const log = { ...s.activityLog };
  log[today] = (log[today] || 0) + minutes;
  setState({ activityLog: log, totalMinutes: s.totalMinutes + minutes });
}

export function completeUnit(unitId) {
  const id = String(unitId);
  if (!_completedSet.has(id)) {
    const s = getState();
    setState({ completedUnits: [...s.completedUnits, id] });
    addXP(50);
    emit('unitCompleted', id);
  }
}

export function isUnitCompleted(unitId) {
  if (!state) loadState();
  return _completedSet.has(String(unitId));
}

export function isUnitUnlocked(unitId, prerequisiteId) {
  if (!prerequisiteId) return true;
  return isUnitCompleted(prerequisiteId);
}

export function saveQuizResult(unitId, score, total) {
  const s = getState();
  const result = { unitId: String(unitId), score, total, date: new Date().toISOString() };
  // Cap quizHistory at last 200 entries
  const capped = [...s.quizHistory, result].slice(-200);
  setState({ quizHistory: capped });
  
  // Pass threshold = 70%
  if (score / total >= 0.7) {
    completeUnit(unitId);
  }
  addXP(Math.round(score * 10));
  updateStreak();
}

export function saveExamResult(level, score, total, sections) {
  const s = getState();
  const result = { level, score, total, sections, date: new Date().toISOString() };
  setState({ examResults: [...s.examResults, result] });
  addXP(score * 5);
}

export function saveChapterExamResult(chapterId, score, passed) {
  const s = getState();
  const passedExams = s.passedChapterExams || [];
  const alreadyPassed = passedExams.includes(chapterId);
  
  if (passed) {
    if (!alreadyPassed) {
      setState({ passedChapterExams: [...passedExams, chapterId] });
      addXP(50); // 50 XP award for passing a chapter exam
    }
    completeUnit(chapterId.toString());
  }
  updateStreak();
}

export function isChapterExamPassed(chapterId) {
  return (getState().passedChapterExams || []).includes(chapterId);
}

export function isChapterQuizPassed(chapterId) {
  const s = getState();
  // check if any quiz result in quizHistory matches chapterId and score >= 70%
  return s.quizHistory.some(q => q.unitId === chapterId.toString() && (q.score / q.total) >= 0.7);
}

// ===== Achievements =====
const ACHIEVEMENT_DEFS = [
  { id: 'first_lesson', icon: 'target', name: 'Langkah Pertama', desc: 'Selesaikan pelajaran pertama', check: s => s.completedUnits.length >= 1 },
  { id: 'hiragana_master', icon: 'flag', name: 'Master Hiragana', desc: 'Selesaikan semua unit Hiragana', check: s => s.completedUnits.some(u => u.includes('hiragana-complete')) },
  { id: 'streak_7', icon: 'flame', name: '7 Hari Berturut', desc: 'Streak 7 hari', check: s => s.streak >= 7 },
  { id: 'streak_30', icon: 'gem', name: '30 Hari Berturut', desc: 'Streak 30 hari', check: s => s.streak >= 30 },
  { id: 'xp_1000', icon: 'star', name: '1000 XP', desc: 'Kumpulkan 1000 XP', check: s => s.xp >= 1000 },
  { id: 'xp_5000', icon: 'sparkles', name: '5000 XP', desc: 'Kumpulkan 5000 XP', check: s => s.xp >= 5000 },
  { id: 'n5_clear', icon: 'trophy', name: 'N5 Lulus!', desc: 'Lulus simulasi ujian N5', check: s => s.examResults.some(e => e.level === 'N5' && e.score/e.total >= 0.7) },
  { id: 'n4_clear', icon: 'medal', name: 'N4 Lulus!', desc: 'Lulus simulasi ujian N4', check: s => s.examResults.some(e => e.level === 'N4' && e.score/e.total >= 0.7) },
  { id: 'n3_clear', icon: 'crown', name: 'N3 Lulus!', desc: 'Lulus simulasi ujian N3', check: s => s.examResults.some(e => e.level === 'N3' && e.score/e.total >= 0.7) },
  { id: 'vocab_100', icon: 'book', name: '100 Kosakata', desc: 'Hafal 100 kosakata', check: s => s.srsItems.filter(i => i.type === 'vocab' && i.repetitions >= 3).length >= 100 },
  { id: 'kanji_50', icon: 'pen-tool', name: '50 Kanji', desc: 'Hafal 50 kanji', check: s => s.srsItems.filter(i => i.type === 'kanji' && i.repetitions >= 3).length >= 50 },
  { id: 'hours_10', icon: 'clock', name: '10 Jam Belajar', desc: 'Total 10 jam belajar', check: s => s.totalMinutes >= 600 },
];

export function getAchievements() { return ACHIEVEMENT_DEFS; }

function checkAchievements() {
  const s = getState();
  const newAchievements = [...s.achievements];
  let changed = false;
  for (const a of ACHIEVEMENT_DEFS) {
    if (!newAchievements.includes(a.id) && a.check(s)) {
      newAchievements.push(a.id);
      changed = true;
      emit('achievementUnlocked', a);
    }
  }
  if (changed) setState({ achievements: newAchievements });
}

// Initialize
loadState();
