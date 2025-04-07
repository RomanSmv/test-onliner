import { Given, When, Then } from '@wdio/cucumber-framework';

Given('the user is on the homepage', async () => {
    await browser.url('https://www.onliner.by');
    await expect(browser).toHaveUrl('https://www.onliner.by/');
});

When('the user selects the {string} product', async (product: string) => {
    const searchInput = $(`//input[contains(@class, 'fast-search__input')]`);
    await searchInput.setValue(product);
    await browser.keys('Enter');

    const iframe = $(`//iframe[contains(@class, 'modal-iframe')]`);
    await expect(iframe).toExist();
    await browser.switchFrame(iframe);

    const firstProduct = $(`(//a[contains(@class, 'product__title-link')])[1]`);
    await expect(firstProduct).toBeDisplayed();
    await firstProduct.click();

    await browser.switchToParentFrame();

    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);
});

When('the user adds the product to the cart', async () => {
    const buyButton = $(`//a[@href='https://cart.onliner.by' and contains(@class, 'product-aside__button_cart')]`);
    await expect(buyButton).toBeClickable();
    await buyButton.click();
});

When('the user opens the cart', async () => {
    const cartButton = $(`//a[@href='https://cart.onliner.by' and contains(@class, 'product-recommended__button')]`);
    await expect(cartButton).toBeClickable();
    await cartButton.click();
});

Then('the cart should contain {string} item', async (itemName: string) => {
    const cartItem = $(`//div[contains(@class, 'cart-form__offers-list')]//a[contains(text(), '${itemName}')]`);

    await expect(cartItem).toBeDisplayed();
});

When('the user removes the {string} product from the cart', async (itemName: string) => {
    const cartItem = $(`//div[contains(@class, 'cart-form__offers-item')]//*[contains(text(), '${itemName}')]/ancestor::div[contains(@class, 'cart-form__offers-item')]`);
    const deleteButton = $(`//div[contains(@class, 'cart-form__offers-item')]//a[contains(text(), '${itemName}')]/ancestor::div[contains(@class, 'cart-form__offers-item')]//a[contains(@class, 'cart-form__button_remove')]`);
    await cartItem.click();
    await deleteButton.waitForDisplayed({ timeout: 1000 });
    await deleteButton.click();
    await browser.pause(20000);
});