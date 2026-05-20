import { test, expect } from '@playwright/test'

test('first test', async ({page}) => {
    await page.goto('https://example.com/')

    await expect(page).toHaveURL(/example/)
})