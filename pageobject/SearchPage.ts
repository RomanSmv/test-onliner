import { $, browser } from '@wdio/globals'


class SearchProduct {

get iframe() {
    return $(`//iframe[contains(@class, 'modal-iframe')]`)
}

get firstProduct() {
    return $(`(//a[contains(@class, 'product__title-link')])[1]`)
}

async selectFirstProduct() {
    await this.iframe.waitForExist()
    
    await browser.switchFrame(this.iframe);

    await this.firstProduct.waitForDisplayed()
    await this.firstProduct.click();

    await browser.switchToParentFrame();
}

}
export default new SearchProduct();