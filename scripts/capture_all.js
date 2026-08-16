import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('screenshots');
const ARTIFACTS_DIR = 'C:\\Users\\ThinkPad\\.gemini\\antigravity\\brain\\5f80a22a-a765-40f2-b3bb-df2e9b3f959d\\screenshots';

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
if (!fs.existsSync(ARTIFACTS_DIR)) fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

const pages = [
  { id: '01_dashboard', title: 'Dashboard Utama', route: '#/' },
  { id: '02_curriculum', title: 'Peta Kurikulum', route: '#/curriculum' },
  { id: '03_guide', title: 'Panduan Belajar', route: '#/guide' },
  { id: '04_grammar_digest', title: 'Grammar Digest (Minna)', route: '#/minna' },
  { id: '05_srs_review', title: 'SRS Review', route: '#/review' },
  { id: '06_writing_practice', title: 'Latihan Menulis (Kana & Kanji)', route: '#/writing' },
  { id: '07_kanji_hub', title: 'Kanji Hub', route: '#/kanji' },
  { id: '08_glossary', title: 'Glosarium Istilah', route: '#/glossary' },
  { id: '09_chapter_study_ch1', title: 'Studi Bab (Bab 1)', route: '#/chapter/1' },
  { id: '10_chapter_study_ch14', title: 'Studi Bab (Bab 14 - Te Form)', route: '#/chapter/14' },
  { id: '11_workbook_ch1', title: 'Buku Kerja (Workbook Bab 1)', route: '#/workbook/1' },
  { id: '12_exam_n5', title: 'Simulasi Ujian JLPT N5', route: '#/exam/N5' },
  { id: '13_chapter_quiz_ch1', title: 'Kuis Evaluasi Bab 1', route: '#/exam/1' }
];

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,960']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 1.5 });

  for (const item of pages) {
    const url = `http://localhost:5173/${item.route}`;
    console.log(`Capturing [${item.id}] ${item.title} -> ${url}`);
    
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 }).catch(e => console.log('goto err:', e.message));
    // Wait extra time for animations and Lucide icons
    await new Promise(r => setTimeout(r, 1200));

    const filename = `${item.id}.png`;
    const localPath = path.join(OUTPUT_DIR, filename);
    const artifactPath = path.join(ARTIFACTS_DIR, filename);

    await page.screenshot({ path: localPath, fullPage: false });
    fs.copyFileSync(localPath, artifactPath);
    console.log(`Saved: ${filename}`);
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

run().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
