import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUTPUT_DIR = path.resolve('screenshots_mobile');
const ARTIFACTS_DIR = 'C:\\Users\\ThinkPad\\.gemini\\antigravity\\brain\\5f80a22a-a765-40f2-b3bb-df2e9b3f959d\\screenshots_mobile';

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
if (!fs.existsSync(ARTIFACTS_DIR)) fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

const pages = [
  { id: '01_mobile_dashboard', title: 'Dashboard Utama (Mobile)', route: '#/' },
  { id: '02_mobile_sidebar_drawer', title: 'Mobile Navigation Drawer (Menu Terbuka)', route: '#/', openDrawer: true },
  { id: '03_mobile_curriculum', title: 'Peta Kurikulum (Mobile)', route: '#/curriculum' },
  { id: '03b_mobile_phase_view', title: 'Dedicated Page Fase 1 (Mobile)', route: '#/phase/mnn1-fase1' },
  { id: '04_mobile_guide', title: 'Panduan Belajar (Mobile)', route: '#/guide' },
  { id: '05_mobile_grammar_digest', title: 'Grammar Digest (Mobile)', route: '#/minna' },
  { id: '06_mobile_srs_review', title: 'SRS Review (Mobile)', route: '#/review' },
  { id: '07_mobile_writing_practice', title: 'Latihan Menulis (Mobile)', route: '#/writing' },
  { id: '08_mobile_kanji_hub', title: 'Kanji Hub (Mobile)', route: '#/kanji' },
  { id: '09_mobile_glossary', title: 'Glosarium Istilah (Mobile)', route: '#/glossary' },
  { id: '10_mobile_chapter_study_ch1', title: 'Studi Bab 1 (Mobile)', route: '#/chapter/1' },
  { id: '11_mobile_chapter_study_ch14', title: 'Studi Bab 14 (Mobile - Te Form)', route: '#/chapter/14' },
  { id: '12_mobile_workbook_ch1', title: 'Buku Kerja Bab 1 (Mobile)', route: '#/workbook/1' },
  { id: '13_mobile_exam_n5', title: 'Simulasi Ujian JLPT N5 (Mobile)', route: '#/exam/N5' },
  { id: '14_mobile_chapter_quiz_ch1', title: 'Kuis Evaluasi Bab 1 (Mobile)', route: '#/exam/1' }
];

async function run() {
  console.log('Launching browser in Mobile Viewport (390 x 844, 2x DPR)...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  for (const item of pages) {
    const url = `http://localhost:5173/${item.route}`;
    console.log(`Capturing [${item.id}] ${item.title} -> ${url}`);
    
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 }).catch(e => console.log('goto err:', e.message));
    await new Promise(r => setTimeout(r, 1000));

    if (item.openDrawer) {
      // Trigger mobile sidebar drawer open
      await page.evaluate(() => {
        const btn = document.getElementById('topbar-menu-btn');
        if (btn) btn.click();
      });
      await new Promise(r => setTimeout(r, 500));
    } else {
      await page.evaluate(() => {
        const closeBtn = document.getElementById('sidebar-close-btn');
        if (closeBtn) closeBtn.click();
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');
        const backdrop = document.getElementById('sidebar-backdrop');
        if (backdrop) backdrop.classList.remove('open');
      });
      await new Promise(r => setTimeout(r, 200));
    }

    const filename = `${item.id}.png`;
    const localPath = path.join(OUTPUT_DIR, filename);
    const artifactPath = path.join(ARTIFACTS_DIR, filename);

    await page.screenshot({ path: localPath, fullPage: false });
    fs.copyFileSync(localPath, artifactPath);
    console.log(`Saved: ${filename}`);
  }

  await browser.close();
  console.log('All mobile screenshots captured successfully!');
}

run().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
