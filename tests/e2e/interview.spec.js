
// #3 What is the difference between browser, context, and page?

// Browser is the browser instance, Context is an isolated session like an 
// incognito window, and Page is a single tab where user actions
// are performed.

import { test, expect } from '@playwright/test'

/* test('browser | context | page', async ({ browser }) => {
    const context = await browser.newContext(); // creates isolated session
    const page = await context.newPage(); // Opens new tab inside created session
    await page.goto('https://www.google.com/');
}) */

//////////////////////////////////////////////////////////////////////////


// A specific test file by passing the file path

// npx playwright test tests/login.spec.js

test('Specific Test', async ({ page }) => {
    await page.goto('https://www.google.com/'); // Opens website
});

// A single test using the -g (grep) option with the test name

// npx playwright test -g "valid login" # Runs only the test whose name contains "valid login"

test('valid login', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login'); // Opens website
});




//////////////////////////////////////////////////////////////////////////