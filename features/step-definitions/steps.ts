import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../../pageobject/HomePage'
import SearchProduct from '../../pageobject/SearchPage'
import ProductPage from '../../pageobject/ProductPage'
import CartPage from '../../pageobject/CartPage'

Given('the user is on the homepage', async () => {
    await HomePage.open()
});

When('the user selects the {string} product', async (product: string) => {
    await HomePage.searchForProduct(product)
    await SearchProduct.selectFirstProduct()
});

When('the user adds the product to the cart', async () => {
    await ProductPage.addToCart()
});

When('the user opens the cart', async () => {
    await ProductPage.openCard()
});

Then('the cart should contain {string} item', async (itemName: string) => {
    await CartPage.verifyProductInCart(itemName)
});

When('the user removes the {string} product from the cart', async (itemName: string) => {
    await CartPage.removeProduct(itemName)
});