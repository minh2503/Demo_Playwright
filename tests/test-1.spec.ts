import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/DatetimeChecker-master%20(1)/DatetimeChecker-master/index.html');
  
  await page.getByLabel('Day:').click();
  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.getByLabel('Day:').fill('10');
  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.getByLabel('Day:').press('Tab');
  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.getByLabel('Month:').fill('3');
  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.getByLabel('Month:').press('Tab');
  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.getByLabel('Year:').fill('2021');
  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.getByRole('button', { name: 'Check' }).click();
  await new Promise(resolve => setTimeout(resolve, 2000));
  await expect(page.getByText('dd/mm/yyyy is correct date time!')).toHaveCount(1);

});