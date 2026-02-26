import { test, expect } from '@playwright/test';
import testData from '../../utilities/agentTestData.json';

test('AIAgentCode - Registration Flow', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    // Click on Register link
    await page.getByRole('link', { name: /register/i }).click();

    // Fill all fields using placeholders and test data
    await page.getByPlaceholder('First Name').fill(testData.username);
    await page.getByPlaceholder('Last Name').fill(testData.lastName);
    await page.getByPlaceholder('email@example.com').fill(testData.email);
    await page.getByPlaceholder('enter your number').fill(testData.phoneNumber);

    // Select occupation from dropdown
    await page.locator('.custom-select').selectOption(testData.occupation);

    // Select Gender as Male (radio)
    await page.getByRole('radio', { name: /^Male$/ }).check();

    await page.locator('#userPassword').fill(testData.password);
    await page.locator('#confirmPassword').fill(testData.confirmPassword);

    await page.locator('text=I am 18 year or Older').locator('..').locator('input[type="checkbox"]').check();

    await page.getByRole('button', { name: /^Register$/ }).click();
    // await expect(page.getByText('Account Created Successfully')).toBeVisible();
});
