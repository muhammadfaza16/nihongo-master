import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new'
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto('http://localhost:5173/#/chapter/1', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 800));

const btn = await page.$('.kanji-write-btn');
if (btn) {
  await btn.click();
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: 'screenshots_mobile/test_kanji_modal_open.png' });
  console.log('Modal captured');
} else {
  console.log('No kanji-write-btn found, capturing debug');
  await page.screenshot({ path: 'screenshots_mobile/test_debug.png' });
}

await browser.close();
