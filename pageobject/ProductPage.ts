import { $ } from '@wdio/globals'

class ProductPage {
    
get addToCartButton() {
    return $(`//a[@href='https://cart.onliner.by' and contains(@class, 'product-aside__button_cart')]`)
}

get goToCartButton() {
    return $(`//a[@href='https://cart.onliner.by' and contains(@class, 'product-recommended__button')]`);
}

async addToCart() {
    await this.addToCartButton.waitForClickable()
    await this.addToCartButton.click();
}

async openCard() {
    await this.addToCartButton.waitForDisplayed()
    await this.addToCartButton.click();
}

}
export default new ProductPage();