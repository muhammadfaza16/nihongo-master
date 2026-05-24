import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const refDir = path.join(__dirname, '../references');
const scratchDir = path.join(__dirname, '../../brain/aacb08f6-8bbd-4637-88f3-7dc1d846e970/scratch');

// Ensure scratch directory exists
if (!fs.existsSync(scratchDir)) {
  fs.mkdirSync(scratchDir, { recursive: true });
}

async function extractPdfText(pdfName, outputName) {
  const pdfPath = path.join(refDir, pdfName);
  if (!fs.existsSync(pdfPath)) {
    console.error(`PDF not found: ${pdfPath}`);
    return;
  }
  
  console.log(`Parsing ${pdfName}...`);
  const dataBuffer = fs.readFileSync(pdfPath);
  
  try {
    const parser = new PDFParse({ data: dataBuffer });
    const result = await parser.getText();
    await parser.destroy();
    
    console.log(`Successfully parsed ${pdfName}! Total Pages: ${result.total || 'unknown'}`);
    
    const outputPath = path.join(scratchDir, outputName);
    fs.writeFileSync(outputPath, result.text, 'utf-8');
    console.log(`Saved text to ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Error parsing ${pdfName}:`, err);
  }
}

async function run() {
  await extractPdfText('Minna no Nihongo I Sentence Pattern Workbook (Kaite Oboeru).pdf', 'kaite_oboeru_1.txt');
  await extractPdfText('Minna no Nihongo I Standard Workbook (Mondaishuu).pdf', 'mondaishuu_1.txt');
}

run();
