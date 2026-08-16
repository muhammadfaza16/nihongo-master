import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });

  const page = await browser.newPage();
  
  // Desktop
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/#/curriculum', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'screenshots/02_curriculum.png' });
  console.log('Saved 02_curriculum.png');

  // Mobile
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/#/curriculum', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'screenshots_mobile/03_mobile_curriculum.png' });
  console.log('Saved 03_mobile_curriculum.png');

  // Mobile Light Mode
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: 'screenshots_mobile/03_mobile_curriculum_light.png' });
  console.log('Saved 03_mobile_curriculum_light.png');

  // Desktop Light Mode
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
  await page.screenshot({ path: 'screenshots/02_curriculum_light.png' });
  console.log('Saved 02_curriculum_light.png');

  // Reset theme to dark
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });

  // Phase View - Mobile Dark
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/#/phase/fase-aksara', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'screenshots_mobile/03b_mobile_phase_view.png' });
  console.log('Saved 03b_mobile_phase_view.png');

  // Phase View - Mobile Light
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  });
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: 'screenshots_mobile/03b_mobile_phase_view_light.png' });
  console.log('Saved 03b_mobile_phase_view_light.png');

  // Phase View - Mobile Dark (Bab 1 - 7)
  await page.goto('http://localhost:5173/#/phase/mnn1-fase1', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'screenshots_mobile/03b_mobile_phase_view_mnn1.png' });
  console.log('Saved 03b_mobile_phase_view_mnn1.png');

  await browser.close();
}

run();
