import BasePage from "../pageObjects/basePage";
import LoginPage from "../pageObjects/loginPage";
import HomePage from "../pageObjects/homePage";
import ItemPage from "../pageObjects/itemPage";
import ShoppingCartPage from "../pageObjects/shoppingCartPage";
import CheckoutPage from "../pageObjects/checkoutPage";

context("Login Page", () => {
    context("Sauce Demon scenarios", () => {
      beforeEach(() => {
        BasePage.visit();
      });

      it("1.Login with locked_out_user", () => {
        LoginPage.usernameField.type('locked_out_user');
        LoginPage.passField.type('12345');
        LoginPage.loginButton.click();
        LoginPage.validateError.should('contain', 'Epic sadface: Username and password do not match any user in this service');
      });
      it("2.Login with wrong password", () => {
        LoginPage.usernameField.type('standard_user');
        LoginPage.passField.type('12345');
        LoginPage.loginButton.click();
        LoginPage.validateError.should('contain', 'Epic sadface: Username and password do not match any user in this service');
      });
      it("3.Validate item amount", () => {
        LoginPage.usernameField.type('standard_user');
        LoginPage.passField.type('secret_sauce');
        LoginPage.loginButton.click();
        HomePage.itemList.should('have.length', 6);
      });
      it("4.Sort items - Price high to low", () => {
        LoginPage.usernameField.type('standard_user');
        LoginPage.passField.type('secret_sauce');
        LoginPage.loginButton.click();
        HomePage.filterItems.select('Price (high to low)');
        HomePage.filterItems.should('contain', 'Price (high to low)');
        HomePage.itemList.first().should('contain', 'Sauce Labs Fleece Jacket');
        HomePage.itemList.first().should('contain', '$49.99');
      });
      it("5.Sort items - Price low to High", () => {
        LoginPage.usernameField.type('standard_user');
        LoginPage.passField.type('secret_sauce');
        LoginPage.loginButton.click();
        HomePage.filterItems.select('Price (low to high)');
        HomePage.filterItems.should('contain', 'Price (low to high)');
        HomePage.itemList.first().should('contain', 'Sauce Labs Onesie');
        HomePage.itemList.first().should('contain', '$7.99');
      });
      it("6.Sort items - Z to A", () => {
        LoginPage.usernameField.type('standard_user');
        LoginPage.passField.type('secret_sauce');
        LoginPage.loginButton.click();
        HomePage.filterItems.select('Name (Z to A)');
        HomePage.filterItems.should('contain', 'Name (Z to A)');
        HomePage.itemList.first().should('contain', 'Test.allTheThings() T-Shirt (Red)');
      });
      it("7.Validate shopping cart badge amount", () => {
        LoginPage.usernameField.type('standard_user');
        LoginPage.passField.type('secret_sauce');
        LoginPage.loginButton.click();
        HomePage.itemList.contains('Sauce Labs Bolt T-Shirt').click();
        ItemPage.addToCart.contains('Add to cart').click();
        HomePage.validateCart.should('contain', "1");
        ItemPage.backButton.click();
        HomePage.itemList.contains('Sauce Labs Bike Light').click();
        ItemPage.addToCart.contains('Add to cart').click();
        HomePage.validateCart.should('contain', "2");
      });
      it("8.Reset App State", () => {
        LoginPage.usernameField.type('standard_user');
        LoginPage.passField.type('secret_sauce');
        LoginPage.loginButton.click();
        HomePage.itemList.contains('Sauce Labs Bolt T-Shirt').click();
        ItemPage.addToCart.contains('Add to cart').click();
        ItemPage.backButton.click();
        HomePage.validateCart.should('contain', "1");
        HomePage.stackBurger.click();
        HomePage.stackBurgerOptions.contains('Reset App State').click();
        HomePage.validateCart.should('not.exist');
      });
      it("9.Validate shopping cart remove button functionality", () => {
        LoginPage.usernameField.type('standard_user');
        LoginPage.passField.type('secret_sauce');
        LoginPage.loginButton.click();
        HomePage.itemList.contains('Sauce Labs Bolt T-Shirt').click();
        ItemPage.addToCart.contains('Add to cart').click();
        HomePage.validateCart.should('contain', "1");
        ItemPage.removeFromCart.contains('Remove').click();
        HomePage.validateCart.should('not.exist');
      });
      it.only("10.Buy a T-shirt", () => {
        LoginPage.usernameField.type('standard_user');
        LoginPage.passField.type('secret_sauce');
        LoginPage.loginButton.click();
        HomePage.itemList.contains('Test.allTheThings() T-Shirt (Red)').click();
        ItemPage.addToCart.contains('Add to cart').click();
        HomePage.shoppingCart.click();
        ShoppingCartPage.checkout.click();
        CheckoutPage.nameField.type('Bob');
        CheckoutPage.lastNameField.type('Builder');
        CheckoutPage.postalField.type('LV-3230');
        CheckoutPage.continueButton.click();
        CheckoutPage.validateName.should('contain', 'Test.allTheThings() T-Shirt (Red)');
        CheckoutPage.finishButton.click();
        CheckoutPage.validateFinish.should('contain','THANK YOU FOR YOUR ORDER');
      });
        
    });

})