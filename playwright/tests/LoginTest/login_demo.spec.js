import {test, expect} from "@playwright/test";

test('Demo Login Test 1', async ({page}) => {

    await page.goto('https://demo.applitools.com/');
    await page.pause();
    // await page.locator('[placeholder="Enter your username"]').fill('Oleksandra');
    await page.getByPlaceholder('Enter your username').fill('Oleksandra');
    await page.getByPlaceholder('Enter your password').fill('Zaiets');
    // await page.waitForSelector('id="log-in"', {timeout: 5000});
    await page.getByRole('link', {name: 'Sign in'}).click();

})

test('Demo Login Test 2', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').press('CapsLock');
    await page.getByPlaceholder('Username').fill('O');
    await page.getByPlaceholder('Username').press('CapsLock');
    await page.getByPlaceholder('Username').fill('Oleksandra');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').press('CapsLock');
    await page.getByPlaceholder('Password').fill('Z');
    await page.getByPlaceholder('Password').press('CapsLock');
    await page.getByPlaceholder('Password').fill('Zaiets');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.close();

});

test.only('Demo Login Test 3', async ({page}) => {
    await page.pause();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').press('CapsLock');
    await page.getByPlaceholder('Username').fill('O');
    await page.getByPlaceholder('Username').press('CapsLock');
    await page.getByPlaceholder('Username').fill('Oleksandra');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('11111111111');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.close();
});