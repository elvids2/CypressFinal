class SortablePage {
    static get url() {
      return "https://demoqa.com/sortable";
    }
  
    static visit() {
      cy.visit(this.url);
    }
  }
  
  export default SortablePage;