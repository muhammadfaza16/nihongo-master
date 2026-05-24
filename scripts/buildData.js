import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdPath = path.join(__dirname, '../kurikulum_detail_n5_n4_n3.md');
const content = fs.readFileSync(mdPath, 'utf-8');

const lines = content.split('\n');

let currentLevel = null;
let currentPhase = null;
let currentUnit = null;

let curriculum = [];
let registry = {};

// Helper to normalize IDs
const makeId = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  // Parse Level
  if (line.startsWith('# LEVEL')) {
    const title = line.replace('# ', '');
    const levelId = title.split(' ')[1].toLowerCase();
    currentLevel = { levelId, title, desc: '', phases: [] };
    curriculum.push(currentLevel);
    currentPhase = null;
    currentUnit = null;
  }
  // Parse Phase
  else if (line.startsWith('## ')) {
    if (!currentLevel) continue;
    const title = line.replace('## ', '');
    const phaseId = makeId(title);
    currentPhase = { phaseId, title, desc: '', units: [] };
    currentLevel.phases.push(currentPhase);
    currentUnit = null;
  }
  // Parse Unit
  else if (line.startsWith('### ')) {
    if (!currentPhase) continue;
    const title = line.replace('### ', '');
    
    // determine type
    let type = 'grammar';
    if (title.toLowerCase().includes('hiragana') || title.toLowerCase().includes('katakana')) type = 'kana';
    else if (title.toLowerCase().includes('kanji')) type = 'kanji';
    else if (title.toLowerCase().includes('kosakata')) type = 'vocab';
    
    const unitId = makeId(currentLevel.levelId + '-' + title);
    currentUnit = { id: unitId, title, type, desc: '' };
    
    // Add prerequisite logic (previous unit)
    if (currentPhase.units.length > 0) {
      currentUnit.prerequisite = currentPhase.units[currentPhase.units.length - 1].id;
    } else if (currentLevel.phases.length > 1) {
      const prevPhase = currentLevel.phases[currentLevel.phases.length - 2];
      if (prevPhase.units.length > 0) {
        currentUnit.prerequisite = prevPhase.units[prevPhase.units.length - 1].id;
      }
    }

    currentPhase.units.push(currentUnit);
    registry[unitId] = [];
  }
  // Parse Tables (Kanji, Vocab, Kana)
  else if (line.startsWith('|') && !line.includes('---')) {
    if (!currentUnit) continue;
    
    // Skip header row
    if (line.toLowerCase().includes('karakter') || line.toLowerCase().includes('kanji') || line.toLowerCase().includes('arti')) {
      continue;
    }

    const cols = line.split('|').map(c => c.trim()).filter(c => c);
    if (cols.length >= 2) {
      let q, sub, ans;
      
      if (currentUnit.type === 'kana' && cols.length >= 2) {
        q = cols[0];
        ans = cols[1];
        sub = '';
      } else if (currentUnit.type === 'kanji' && cols.length >= 4) {
        q = cols[0];
        ans = cols[1];
        sub = cols[2] + ' / ' + cols[3]; // on'yomi / kun'yomi
      } else if (cols.length >= 3) { // general vocab
        q = cols[0];
        sub = cols[1];
        ans = cols[2];
      } else {
        q = cols[0];
        ans = cols[1];
        sub = '';
      }
      
      registry[currentUnit.id].push({ q, sub, ans });
    }
  }
  // Parse Grammar Bullet Points
  else if (line.startsWith('- ') && currentUnit && currentUnit.type === 'grammar') {
    const text = line.replace('- ', '');
    // Example: わたしは インドネシア人 です。(Watashi wa Indoneshia-jin desu.) = Saya adalah orang Indonesia.
    const match = text.match(/^(.*?)(?:\((.*?)\))?\s*=\s*(.*)$/);
    if (match) {
      const q = match[1].trim();
      const sub = match[2] ? match[2].trim() : '';
      const ans = match[3].trim();
      registry[currentUnit.id].push({ q, sub, ans });
    } else {
      // maybe no romaji
      const parts = text.split('=');
      if (parts.length >= 2) {
        registry[currentUnit.id].push({ q: parts[0].trim(), sub: '', ans: parts.slice(1).join('=').trim() });
      }
    }
  }
}

// Clean up empty units
curriculum.forEach(level => {
  level.phases.forEach(phase => {
    phase.units = phase.units.filter(u => registry[u.id] && registry[u.id].length > 0);
  });
  level.phases = level.phases.filter(p => p.units.length > 0);
});

const curCode = `export const CURRICULUM = ${JSON.stringify(curriculum, null, 2)};\n
export function getUnitDetails(unitId) {
  for (const level of CURRICULUM) {
    for (const phase of level.phases) {
      for (const unit of phase.units) {
        if (unit.id === unitId) {
          return { ...unit, levelId: level.levelId, phaseTitle: phase.title };
        }
      }
    }
  }
  return null;
}
`;

const regCode = `export const DATA_REGISTRY = ${JSON.stringify(registry, null, 2)};\n
export function getUnitData(unitId) {
  return DATA_REGISTRY[unitId] || [];
}

export function findItemById(id) {
  const [type, q] = id.split('-');
  for (const items of Object.values(DATA_REGISTRY)) {
    const found = items.find(item => item.q === q);
    if (found) return found;
  }
  return null;
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/curriculum.js'), curCode);
fs.writeFileSync(path.join(__dirname, '../src/data/registry.js'), regCode);

console.log('Successfully generated curriculum and registry from markdown!');
