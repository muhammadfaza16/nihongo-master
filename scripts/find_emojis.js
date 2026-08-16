import fs from 'fs';
import path from 'path';

// Broader regex for emojis, symbols, pictographs
const emojiRegex = /[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{200D}]/u;

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scanDir(full);
    } else if (f.endsWith('.js') || f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf-8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (emojiRegex.test(line) && !full.includes('chapter_data.js')) {
          console.log(`${full}:${idx + 1}: ${line.trim()}`);
        }
      });
    }
  }
}

scanDir('src');
