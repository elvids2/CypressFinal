import BasePage from './basePage'

class CheckoutPage extends BasePage {
  static get url () {
    return '/checkout-step-one.html';
  }

  static get nameField(){
    return cy.get('[id="first-name"]');
  }
  static get lastNameField(){
    return cy.get('[id="last-name"]');
  }
  static get postalField(){
    return cy.get('[id="postal-code"]');
  }
  static get continueButton(){
    return cy.get('[id="continue"]');
  }
  static get validateName(){
    return cy.get('[class="inventory_item_name"]');
  }
  static get finishButton(){
    return cy.get('[id="finish"]');
  }
  static get validateFinish(){
    return cy.get('[class="complete-header"]');
  }

  

  

  

  

      
  
}


export default CheckoutPage;