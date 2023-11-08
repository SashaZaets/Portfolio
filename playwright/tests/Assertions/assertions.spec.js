import {test, expect} from "@playwright/test";

test('Assertions Demo', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/');
    //await page.pause();
    //ASSERTIONS
    //chek element present or not
    await expect(page.getByRole('heading', {name: 'The Kitchen'})).toHaveCount(1);

    if (await page.$('text=The Kitchen')) {
        await page.getByRole('heading', {name: 'The Kitchen'}).click();
    }
    //chek element visible or hidden
    await expect(page.getByRole('heading', {name: 'The Kitchen'})).toBeVisible();
    await expect.soft(page.getByRole('heading', {name: 'The Kitchen'})).toBeHidden();
    //chek element enabled or disabled
    await expect(page.getByRole('heading', {name: 'The Kitchen'})).toBeEnabled();
    await expect.soft(page.getByRole('heading', {name: 'The Kitchen'})).toBeDisabled();
    //chek text
    await expect(page.getByRole('heading', {name: 'The Kitchen'})).toHaveText('The Kitchen');
    await expect.soft(page.getByRole('heading', {name: 'The Kitchen'})).not.toHaveText('The Kitchen');
    //chek attribute value
    await expect(page.getByRole('heading', {name: 'The Kitchen'})).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
    await expect(page.getByRole('heading', {name: 'The Kitchen'})).toHaveAttribute('class', /.* css-dpmy2a/);
    await expect(page.getByRole('heading', {name: 'The Kitchen'})).toHaveClass(/.* css-dpmy2a/);
    await page.pause();
    //chek page URL and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*The Kitchen/);
    //visual validation with screenshot
    await expect(page).toHaveScreenshot();

})