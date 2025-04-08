class CartPage {
    
    async verifyProductInCart(itemName: string) {
    const item = await $(`//div[contains(@class, "cart-form__offers-list")]//a[contains(text(), "${itemName}")]`);
    await expect(item).toBeDisplayed();
    }

    async removeProduct(itemName: string) {
    const cartItem = $(`//div[contains(@class, 'cart-form__offers-item')]//*[contains(text(), '${itemName}')]/ancestor::div[contains(@class, 'cart-form__offers-item')]`);
    const deleteButton = $(`//div[contains(@class, 'cart-form__offers-item')]//a[contains(text(), '${itemName}')]/ancestor::div[contains(@class, 'cart-form__offers-item')]//a[contains(@class, 'cart-form__button_remove')]`);
    await cartItem.click();
    await deleteButton.waitForDisplayed({ timeout: 1000 });
    await deleteButton.click();
    await browser.pause(2000);

    }

}
export default new CartPage();