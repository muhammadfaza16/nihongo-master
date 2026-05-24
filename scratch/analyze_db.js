import fs from 'fs';
import path from 'path';

const chaptersDir = 'src/data/chapters';
let totalVocab = 0;
let totalGrammarPoints = 0;
let totalWorkbookItems = 0;
let totalExamParts = { part1: 0, part2: 0, part3: 0 };

for (let i = 0; i <= 50; i++) {
  const fileName = `chapter_${i}.json`;
  const filePath = path.join(chaptersDir, fileName);
  if (!fs.existsSync(filePath)) continue;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  totalVocab += (data.vocab || []).length;
  totalGrammarPoints += (data.grammar || []).length;
  totalWorkbookItems += (data.workbook || []).length;

  if (data.exam) {
    if (data.exam.part1) totalExamParts.part1 += data.exam.part1.length;
    if (data.exam.part2) totalExamParts.part2 += data.exam.part2.length;
    if (data.exam.part3) {
      if (Array.isArray(data.exam.part3)) {
        totalExamParts.part3 += data.exam.part3.length;
      } else if (data.exam.part3.questions && Array.isArray(data.exam.part3.questions)) {
        totalExamParts.part3 += data.exam.part3.questions.length;
      }
    }
  }
}

console.log('--- DATABASE METRICS (CORRECTED) ---');
console.log('Total Chapters:', 51);
console.log('Total Vocab Items:', totalVocab);
console.log('Total Grammar Points:', totalGrammarPoints);
console.log('Total Workbook (Kaite Oboeru) Items:', totalWorkbookItems);
console.log('Total Exam (Mondaishuu) Items:', totalExamParts.part1 + totalExamParts.part2 + totalExamParts.part3);
console.log('  - Part 1 (Isian Partikel):', totalExamParts.part1);
console.log('  - Part 2 (Pilihan Ganda):', totalExamParts.part2);
console.log('  - Part 3 (Dokkai T/F):', totalExamParts.part3);
