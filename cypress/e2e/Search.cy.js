import Search from "../PageObjects/SearchPage.js";

describe('pageObjectModel', () => {


    it('SearchTest', () => {
        cy.visit("https://www.libri.hu/")

        const sc = new Search()

        sc.clickAdjust();
        sc.searchHeader("Steve Jobs");
        cy.wait(1000);
        sc.searchButton();
        sc.clickItem();


        

    })
})