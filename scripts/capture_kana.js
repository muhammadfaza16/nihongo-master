import puppeteer from 'puppeteer-core';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });
  const page = await browser.newPage();

  // Mobile Light - Kana Grid Hiragana
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/#/chapter/0', { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'light'));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'screenshots_mobile/ch0_kana_modern_mobile_light.png' });

  // Mobile Light - Katakana
  await page.click('[data-script="katakana"]');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'screenshots_mobile/ch0_katakana_modern_mobile_light.png' });

  // Desktop Light - Kana Grid Hiragana
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
  await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'light'));
  await page.click('[data-script="hiragana"]');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'screenshots/ch0_kana_modern_desktop_light.png' });

  // Desktop Dark - Kana Grid Hiragana
  await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'screenshots/ch0_kana_modern_desktop_dark.png' });

  await browser.close();
  console.log('All screenshots captured!');
}
capture();
