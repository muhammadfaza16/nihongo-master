import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const refDir = path.join(__dirname, '../references');

async function testPdf(pdfName) {
  const pdfPath = path.join(refDir, pdfName);
  if (!fs.existsSync(pdfPath)) {
    console.log(`[NOT FOUND] ${pdfName}`);
    return;
  }
  
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText({ first: 3 });
    await parser.destroy();
    
    const textLength = result.text ? result.text.trim().length : 0;
    console.log(`[OK] ${pdfName} - Pages: ${result.total}, Extracted Text Length (first 3 pages): ${textLength}`);
    if (textLength > 100) {
      console.log(`--- SAMPLE TEXT FROM ${pdfName} ---`);
      console.log(result.text.trim().substring(0, 300));
      console.log(`----------------------------------\n`);
    } else {
      console.log(`--- SAMPLE TEXT FROM ${pdfName} is EMPTY or too short. ---\n`);
    }
  } catch (err) {
    console.error(`[ERROR] ${pdfName}:`, err.message);
  }
}

async function run() {
  const files = [
    'Minna No Nihongo I (main text book).pdf',
    'Minna No Nihongo I Terjemahan dan Keterangan Tata Bahasa.pdf',
    'Minna No Nihongo II Terjemahan dan Keterangan Tata Bahasa.pdf',
    'Minna No Nihongo II.pdf',
    'Minna no Nihongo I Sentence Pattern Workbook (Kaite Oboeru).pdf',
    'Minna no Nihongo I Standard Workbook (Mondaishuu).pdf',
    'Minna no Nihongo II Sentence Pattern Workbook.pdf',
    'Minna no Nihongo II Standard Workbook (Mondaishuu).pdf'
  ];
  
  for (const file of files) {
    await testPdf(file);
  }
}

run();
