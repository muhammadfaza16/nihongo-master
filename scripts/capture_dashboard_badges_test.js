import puppeteer from 'puppeteer-core';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });

  // 1. Mobile Dashboard View - Light Theme with Due Items
  const pageLight = await browser.newPage();
  await pageLight.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await pageLight.goto('http://localhost:5173/#/', { waitUntil: 'networkidle0' });
  await pageLight.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    // Add mock SRS due items to localStorage to test badge
    const state = JSON.parse(localStorage.getItem('nihongo_master_state') || '{}');
    state.srsItems = [
      { id: 'vocab-1', type: 'vocab', nextReview: Date.now() - 10000 },
      { id: 'vocab-2', type: 'vocab', nextReview: Date.now() - 10000 },
      { id: 'vocab-3', type: 'vocab', nextReview: Date.now() - 10000 },
    ];
    localStorage.setItem('nihongo_master_state', JSON.stringify(state));
  });
  await pageLight.reload({ waitUntil: 'networkidle0' });
  await pageLight.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  });
  await new Promise(r => setTimeout(r, 600));
  await pageLight.screenshot({ path: 'screenshots_mobile/test_dashboard_badges_light.png', fullPage: true });
  console.log('Saved test_dashboard_badges_light.png');

  // 2. Mobile Dashboard View - Dark Theme with Due Items
  const pageDark = await browser.newPage();
  await pageDark.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await pageDark.goto('http://localhost:5173/#/', { waitUntil: 'networkidle0' });
  await pageDark.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await new Promise(r => setTimeout(r, 600));
  await pageDark.screenshot({ path: 'screenshots_mobile/test_dashboard_badges_dark.png', fullPage: true });
  console.log('Saved test_dashboard_badges_dark.png');

  await browser.close();
}

run();
