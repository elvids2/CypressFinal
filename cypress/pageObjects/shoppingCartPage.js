
import BasePage from './basePage'

class ShoppingCartPage extends BasePage {
  static get url () {
    return '/cart.html';
  }

  static get checkout(){
    return cy.get('[id="checkout"]');
  }

      
}


export default ShoppingCartPage;