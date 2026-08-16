import puppeteer from 'puppeteer-core';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/#/', { waitUntil: 'networkidle0' });
  
  // Set SRS items in app state
  await page.evaluate(() => {
    const raw = localStorage.getItem('jlpt_app_state') || localStorage.getItem('nihongo_master_state') || '{}';
    const state = JSON.parse(raw);
    state.srs = {
      items: {
        'vocab_ch1_1': { nextReview: Date.now() - 100000 },
        'vocab_ch1_2': { nextReview: Date.now() - 100000 },
        'vocab_ch1_3': { nextReview: Date.now() - 100000 },
        'vocab_ch1_4': { nextReview: Date.now() - 100000 },
        'vocab_ch1_5': { nextReview: Date.now() - 100000 }
      }
    };
    localStorage.setItem('jlpt_app_state', JSON.stringify(state));
    localStorage.setItem('nihongo_master_state', JSON.stringify(state));
  });

  await page.reload({ waitUntil: 'networkidle0' });
  await page.evaluate(() => { document.documentElement.setAttribute('data-theme', 'light'); });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'screenshots_mobile/test_amber_badge_light.png', fullPage: true });

  await page.evaluate(() => { document.documentElement.setAttribute('data-theme', 'dark'); });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'screenshots_mobile/test_amber_badge_dark.png', fullPage: true });

  console.log('Done capturing amber badge tests');
  await browser.close();
}

run();
