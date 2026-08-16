import puppeteer from 'puppeteer-core';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });

  // 1. Mobile Drawer View
  const pageMobile = await browser.newPage();
  await pageMobile.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await pageMobile.goto('http://localhost:5173/#/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  const menuBtn = await pageMobile.$('#topbar-menu-btn');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await pageMobile.screenshot({ path: 'screenshots_mobile/test_sidebar_mobile.png' });
    console.log('Saved test_sidebar_mobile.png');
  }

  // 2. Desktop Sidebar View
  const pageDesktop = await browser.newPage();
  await pageDesktop.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
  await pageDesktop.goto('http://localhost:5173/#/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await pageDesktop.screenshot({ path: 'screenshots/test_sidebar_desktop.png' });
  console.log('Saved test_sidebar_desktop.png');

  await browser.close();
}

run();
