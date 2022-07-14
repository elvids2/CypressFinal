import BasePage from './basePage'

class Sortable extends BasePage {
    static get url () {
        return '/sortable';
    }
    static get getList(){
        return cy.get('[id="demo-tabpane-list"]')
      }
    

}

export default Sortable;