import BasePage from './basePage'

class HomePage extends BasePage {
  static get url () {
    return '/inventory.html';
  }
  
  static get itemList(){
    return cy.get('[class="inventory_item"]');
  }
  static get filterItems(){
    return cy.get('[class="product_sort_container"]');
  }
  static get filterItems(){
    return cy.get('[class="product_sort_container"]');
  }
  static get validateCart(){
    return cy.get('[class="shopping_cart_badge"]');
  }
  static get stackBurger(){
    return cy.get('[id="react-burger-menu-btn"]');
  }
  static get stackBurgerOptions(){
    return cy.get('[class="bm-item menu-item"]');
  }
  static get shoppingCart(){
    return cy.get('[id="shopping_cart_container"]');
  }
  
  
  
  
    
}

export default HomePage;






