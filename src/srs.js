// Spaced Repetition System (SM-2 algorithm variant)
import { getState, setState } from './store.js';

/**
 * Add an item to the SRS queue
 * @param {string} id - unique item ID (e.g. "vocab-taberu", "kanji-食")
 * @param {string} type - "vocab" | "kanji" | "grammar"
 */
export function addSRSItem(id, type) {
  const s = getState();
  if (s.srsItems.find(item => item.id === id)) return; // already exists

  const item = {
    id,
    type,
    nextReview: new Date().toISOString(),
    interval: 1, // days
    easeFactor: 2.5,
    repetitions: 0,
  };
  _invalidateDueCache();
  setState({ srsItems: [...s.srsItems, item] });
}


/**
 * Grade a review (SM-2 algorithm)
 * @param {string} id - item ID
 * @param {number} quality - 0-5 (0=forgot completely, 5=perfect)
 */
export function gradeReview(id, quality) {
  const s = getState();
  const items = [...s.srsItems];
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return;

  const item = { ...items[idx] };

  if (quality >= 3) {
    // Correct response
    if (item.repetitions === 0) {
      item.interval = 1;
    } else if (item.repetitions === 1) {
      item.interval = 3;
    } else {
      item.interval = Math.round(item.interval * item.easeFactor);
    }
    item.repetitions++;
  } else {
    // Incorrect — reset
    item.repetitions = 0;
    item.interval = 1;
  }

  // Update ease factor
  item.easeFactor = Math.max(1.3,
    item.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  // Set next review date
  const next = new Date();
  next.setDate(next.getDate() + item.interval);
  item.nextReview = next.toISOString();

  items[idx] = item;
  _invalidateDueCache();
  setState({ srsItems: items });
}


// ── Due-items cache (60s TTL) ─────────────────────────────────────────────
let _dueCache = null;
let _dueCacheTime = 0;
const DUE_CACHE_TTL = 60_000;

function _invalidateDueCache() {
  _dueCache = null;
  _dueCacheTime = 0;
}

/**
 * Get items due for review today
 */
export function getDueItems(type = null) {
  const now = Date.now();
  if (!_dueCache || now - _dueCacheTime > DUE_CACHE_TTL) {
    const s = getState();
    _dueCache = s.srsItems.filter(item => new Date(item.nextReview).getTime() <= now);
    _dueCacheTime = now;
  }
  return type ? _dueCache.filter(item => item.type === type) : _dueCache;
}


/**
 * Get count of items due today
 */
export function getDueCount() {
  return getDueItems().length;
}

/**
 * Get SRS stats
 */
export function getSRSStats() {
  const s = getState();
  const items = s.srsItems;
  return {
    total: items.length,
    due: getDueItems().length,
    mastered: items.filter(i => i.repetitions >= 5).length,
    learning: items.filter(i => i.repetitions > 0 && i.repetitions < 5).length,
    new: items.filter(i => i.repetitions === 0).length,
    byType: {
      vocab: items.filter(i => i.type === 'vocab').length,
      kanji: items.filter(i => i.type === 'kanji').length,
      grammar: items.filter(i => i.type === 'grammar').length,
    }
  };
}

/**
 * Get the SRS status of an item
 * @param {string} id - item ID
 * @returns {'new' | 'learning' | 'mastered' | null}
 */
export function getSRSItemStatus(id) {
  const s = getState();
  const item = s.srsItems.find(i => i.id === id);
  if (!item) return null;
  if (item.repetitions >= 5) return 'mastered';
  if (item.repetitions === 0) return 'new';
  return 'learning';
}

/**
 * Remove an item from the SRS queue
 * @param {string} id - item ID
 */
export function removeSRSItem(id) {
  const s = getState();
  const filtered = s.srsItems.filter(item => item.id !== id);
  _invalidateDueCache();
  setState({ srsItems: filtered });
}

