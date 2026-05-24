import fs from 'fs';
import path from 'path';

const chaptersDir = 'src/data/chapters';
const missingFields = [];
const invalidJson = [];

for (let i = 0; i <= 50; i++) {
  const fileName = `chapter_${i}.json`;
  const filePath = path.join(chaptersDir, fileName);
  if (!fs.existsSync(filePath)) {
    missingFields.push(`${fileName} does not exist`);
    continue;
  }
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const required = ['id', 'title', 'vocab', 'grammar', 'patterns', 'conversation', 'reibun', 'workbook', 'exam'];
    const missing = required.filter(field => !data.hasOwnProperty(field));
    if (missing.length > 0) {
      missingFields.push(`${fileName} is missing fields: ${missing.join(', ')}`);
    }
  } catch (e) {
    invalidJson.push(`${fileName} is invalid JSON: ${e.message}`);
  }
}

console.log('--- AUDIT RESULTS ---');
console.log('Invalid JSON files:', invalidJson.length);
invalidJson.forEach(f => console.log('  ', f));
console.log('Files with missing/incomplete fields:', missingFields.length);
missingFields.forEach(f => console.log('  ', f));
