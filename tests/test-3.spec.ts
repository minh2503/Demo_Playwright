import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/DatetimeChecker-master%20(1)/DatetimeChecker-master/index.html');
  await page.getByLabel('Day:').fill('10');
  await page.pause;
});

// test('test', async ({ page }) => {
//   await page.goto('http://127.0.0.1:5500/DatetimeChecker-master%20(1)/DatetimeChecker-master/index.html');
//   await page.screenshot({ path: 'screenshot.png', fullPage: true });
// });

