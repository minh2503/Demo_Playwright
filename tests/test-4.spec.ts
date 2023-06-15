import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Open the website and navigate to the input form
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:5500/DatetimeChecker-master%20(1)/DatetimeChecker-master/index.html');
  
  // Enter valid day, month, and year values
  await page.fill('#day', '15');
  await page.fill('#month', '6');
  await page.fill('#year', '2023');
  
  // Click the validate button
  await page.click('#checkBtn');
  
  // Wait for the validation message to appear and check its contents
  const message = await page.waitForSelector('#message');
  expect(await message.innerText()).toEqual('dd/mm/yyyy is correct date time!');
  
  // Clear the inputs and enter invalid values for day and month
  await page.fill('#day', '32'); // Invalid day value
  await page.fill('#month', '13'); // Invalid month value
  await page.fill('#year', '2023'); // Valid year value
  
  // Click the validate button
  await page.click('#checkBtn');
  
  // Wait for the validation message to appear and check its contents
  const errorMessage = await page.waitForSelector('#message');
  expect(await errorMessage.innerText()).toContain('Input data for Day is out of range!');
  expect(await errorMessage.innerText()).toContain('Input data for Month is out of range!');
  
  // Close the browser
  await browser.close();
})();

});