import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/DatetimeChecker-master%20(1)/DatetimeChecker-master/index.html');
  await page.locator('body').click();
  await page.locator('body').click();
  await page.getByLabel('Day:').click();
  await page.getByLabel('Day:').fill('10');
  await page.getByLabel('Month:').click();
  await page.getByLabel('Month:').fill('2');
  await page.getByLabel('Year:').click();
  await page.getByLabel('Year:').fill('2023');
  await page.getByRole('button', { name: 'Check' }).click();
  await page.getByRole('button', { name: 'Clear' }).click();
});