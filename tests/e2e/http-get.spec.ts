import { test, expect } from '@playwright/test';

test.describe('HTTP Requests', () => {
    test('make a GET call', async ({ request }) => {
        // perform a simple HTTP GET using Playwright's API
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        // verify response body contains expected text
        const body = await response.text();
        expect(body).toContain('Example Domain');
    });
});