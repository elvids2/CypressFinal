import BasePage from "../pageObjects/basePage";
import LoginPage from "../pageObjects/loginPage";

context("Login Page", () => {
    context("Sauce Demon scenarios", () => {
      beforeEach(() => {
        BasePage.visit();
      });

      it("Login with locked_out_user", () => {
        LoginPage.usernameField.type('locked_out_user');
        LoginPage.passField.type('12345');
        LoginPage.loginButton.click();
        LoginPage.validateError.should('contain', 'Epic sadface: Username and password do not match any user in this service');
      });
      it("Login with wrong password", () => {
        LoginPage.usernameField.type('standard_user')
        LoginPage.passField.type('12345');
        LoginPage.loginButton.click();
        LoginPage.validateError.should('contain', 'Epic sadface: Username and password do not match any user in this service');
      });
      it("Validate item amount", () => {
        LoginPage.usernameField.type('standard_user')
        LoginPage.passField.type('secret_sauce');
        LoginPage.loginButton.click();
        LoginPage.itemAmount.should('have.length', 6);
      });
      it.only("Sort items - Price high to low", () => {
        LoginPage.usernameField.type('standard_user')
        LoginPage.passField.type('secret_sauce');
        LoginPage.loginButton.click();
      });

        
    });

})