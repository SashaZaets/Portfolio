import {test, expect, mergeTests} from '@playwright/test';

test('Selectors Demo', async ({page}) => {

    await page.goto('https://www.saucedemo.com/v1/');
    await page.pause();
    //using any object property
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('Edison');
    await page.locator('[id="user-name"]').fill('Einstein');
    //using CSS Selectors
    await page.locator('#login-button').click();
    //using Xpath
    await page.locator('//*[@id="password"]').fill('Faraday');
    await page.locator('xpath =//input[@name="password"]').fill('Bloom');
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click();

});