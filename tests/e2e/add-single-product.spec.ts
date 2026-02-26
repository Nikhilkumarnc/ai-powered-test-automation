// spec: specs/greenKart.testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('GreenKart E2E Tests', () => {
  test('Add Single Product to Cart', async ({ page }) => {
    // 1. Assumption: Start with a fresh browser and empty cart.
    // 2. Open https://rahulshettyacademy.com/seleniumPractise/#/
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // 3. Verify the search box is visible.
    const search = page.getByPlaceholder('Search for Vegetables and Fruits');
    await expect(search).toBeVisible();

    // 4. In the search box type 'tom' to filter products.
    await search.fill('tom');

    // 5. From filtered results, for the first visible product click 'ADD TO CART'.
    await page.locator('text=ADD TO CART').first().click();

    // 6. Click the Cart link/icon to open the cart summary.
    await page.getByRole('link', { name: 'Cart' }).click();

    // 7. Verify the cart item count shows 1 and the added product appears in the cart.
    const cartCount = page.locator('.cart-count');
    await expect(cartCount).toHaveText('1');
    // Verify product appears in the cart panel specifically to avoid ambiguous matches
    // Scope to the cart list to avoid matching product names elsewhere on the page
    const cartList = page.getByRole('list');
    await expect(cartList).toBeVisible();
    await expect(cartList.getByText('Tomato - 1 Kg')).toBeVisible();
  });
});
