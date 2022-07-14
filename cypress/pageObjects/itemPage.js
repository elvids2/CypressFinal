
import BasePage from './basePage'

class ItemPage extends BasePage {
  
  static get addToCart(){
    return cy.get('[class="btn btn_primary btn_small btn_inventory"]');
  }
  static get backButton(){
    return cy.get('[id="back-to-products"]');
  }
  static get removeFromCart(){
    return cy.get('[class="btn btn_secondary btn_small btn_inventory"]');
  }

  
}

export default ItemPage;