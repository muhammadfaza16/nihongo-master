import puppeteer from 'puppeteer-core';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });

  // 1. Desktop Dashboard View (Dark)
  const pageDesktop = await browser.newPage();
  await pageDesktop.setViewport({ width: 1280, height: 950, deviceScaleFactor: 2 });
  await pageDesktop.goto('http://localhost:5173/#/', { waitUntil: 'networkidle0' });
  await pageDesktop.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await new Promise(r => setTimeout(r, 800));
  await pageDesktop.screenshot({ path: 'screenshots/01_dashboard.png', fullPage: true });
  console.log('Saved 01_dashboard.png');

  // 2. Mobile Dashboard View (Dark)
  const pageMobile = await browser.newPage();
  await pageMobile.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await pageMobile.goto('http://localhost:5173/#/', { waitUntil: 'networkidle0' });
  await pageMobile.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await new Promise(r => setTimeout(r, 800));
  await pageMobile.screenshot({ path: 'screenshots_mobile/01_mobile_dashboard.png', fullPage: true });
  console.log('Saved 01_mobile_dashboard.png');

  // 3. Desktop Dashboard View (Light)
  const pageLight = await browser.newPage();
  await pageLight.setViewport({ width: 1280, height: 950, deviceScaleFactor: 2 });
  await pageLight.goto('http://localhost:5173/#/', { waitUntil: 'networkidle0' });
  await pageLight.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  });
  await new Promise(r => setTimeout(r, 800));
  await pageLight.screenshot({ path: 'screenshots/01_dashboard_light.png', fullPage: true });
  console.log('Saved 01_dashboard_light.png');

  await browser.close();
}

run();
