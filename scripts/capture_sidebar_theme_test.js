import puppeteer from 'puppeteer-core';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });

  // 1. Mobile Drawer View - Light Theme
  const pageLight = await browser.newPage();
  await pageLight.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await pageLight.goto('http://localhost:5173/#/curriculum', { waitUntil: 'networkidle0' });
  await pageLight.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  });
  await new Promise(r => setTimeout(r, 600));
  const menuBtnLight = await pageLight.$('#topbar-menu-btn');
  if (menuBtnLight) {
    await menuBtnLight.click();
    await new Promise(r => setTimeout(r, 600));
    await pageLight.screenshot({ path: 'screenshots_mobile/test_sidebar_light.png' });
    console.log('Saved test_sidebar_light.png');
  }

  // 2. Mobile Drawer View - Dark Theme
  const pageDark = await browser.newPage();
  await pageDark.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await pageDark.goto('http://localhost:5173/#/curriculum', { waitUntil: 'networkidle0' });
  await pageDark.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await new Promise(r => setTimeout(r, 600));
  const menuBtnDark = await pageDark.$('#topbar-menu-btn');
  if (menuBtnDark) {
    await menuBtnDark.click();
    await new Promise(r => setTimeout(r, 600));
    await pageDark.screenshot({ path: 'screenshots_mobile/test_sidebar_dark.png' });
    console.log('Saved test_sidebar_dark.png');
  }

  await browser.close();
}

run();
