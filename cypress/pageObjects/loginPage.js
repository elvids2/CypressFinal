import BasePage from './basePage'

class LoginPage extends BasePage {
  static get url () {
    return '';
  }

  static get usernameField(){
    return cy.get('[id="user-name"]');
  }
  static get passField(){
    return cy.get('[id="password"]');
  }
  static get loginButton(){
    return cy.get('[id="login-button"]');
  } 
  static get validateError(){
    return cy.get('[class="error-message-container error"]');
  }

    
}


export default LoginPage;