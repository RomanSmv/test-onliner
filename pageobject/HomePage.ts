import { $, browser } from '@wdio/globals'


class HomePage {

get cookieAcceptButton() {
    return $('//a[@id="submit-button" and contains(@class, "auth-button")]'); 
}

get searchInput() {
    return $(`//input[contains(@class, 'fast-search__input')]`)
}

async open() {
    await browser.url('https://www.onliner.by');
    await expect(browser).toHaveUrl('https://www.onliner.by/');
}

async searchForProduct(product:string) {

const isCookieVisible = await this.cookieAcceptButton.isExisting();
    
if (isCookieVisible) {
    await this.cookieAcceptButton.waitForClickable({ timeout: 10000 });
    await this.cookieAcceptButton.click();
    
    await this.cookieAcceptButton.waitForDisplayed({ reverse: true, timeout: 10000 });
    }


await this.searchInput.setValue(product)
await browser.keys('Enter')
}

}
export default new HomePage();