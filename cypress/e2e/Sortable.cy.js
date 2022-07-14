import Sortable from "../pageObjects2/sortable";
import SortablePage from "../pageObjects2/sortablePage";


context("Sauce Demon scenarios", () => {
    beforeEach(() => {
        SortablePage.visit();
    });
    it("Sortable", () => {
        const dataTransfer = new DataTransfer();
        Sortable.getList.first().should('contain', "One");
        Sortable.getList.first().next().should('contain', "Two");
        Sortable.getList.contains('Two').next().should("contain",'Three');
        Sortable.getList.contains('Three').next().should('contain', "Four");
        Sortable.getList.contains('Four').next().should('contain', "Five");
        Sortable.getList.contains('Five').next().should('contain', "Six");

        Sortable.getList.contains('One')
        .trigger('mousedown')
        .trigger('mousemove', { which: 1, pageX: 600, pageY: 100, force:true })
        .trigger('mouseup',{force: true});
        Sortable.getList.contains('Two')
        .trigger('mousedown')
        .trigger('mousemove', { which: 1, pageX: 600, pageY: 100, force:true })
        .trigger('mouseup',{force: true});
        Sortable.getList.contains('Three')
        .trigger('mousedown')
        .trigger('mousemove', { which: 1, pageX: 600, pageY: 100, force:true })
        .trigger('mouseup',{force: true});
        Sortable.getList.contains('Four')
        .trigger('mousedown')
        .trigger('mousemove', { which: 1, pageX: 600, pageY: 100, force:true })
        .trigger('mouseup',{force: true});
        Sortable.getList.contains('Five')
        .trigger('mousedown')
        .trigger('mousemove', { which: 1, pageX: 600, pageY: 100, force:true })
        .trigger('mouseup',{force: true});
        Sortable.getList.contains('Six')
        .trigger('mousedown')
        .trigger('mousemove', { which: 1, pageX: 600, pageY: 100, force:true })
        .trigger('mouseup',{force: true});

        Sortable.getList.first().should('contain', "Six");
        Sortable.getList.first().next().should('contain', "Five");
        Sortable.getList.contains('Five').next().should("contain",'Four');
        Sortable.getList.contains('Four').next().should('contain', "Three");
        Sortable.getList.contains('Three').next().should('contain', "Two");
        Sortable.getList.contains('Two').next().should('contain', "One");
    });

})