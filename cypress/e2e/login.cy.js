
import Login from "../PageObjects/LoginPage.js";

describe('pageObjectModel', () => {


    it('LoginTest', () => {
        cy.visit("https://www.libri.hu/")

        const ln = new Login();
        ln.clickAdjust()
        ln.clickEntry()
        cy.wait(2000);
        ln.setUserName("antaltesztelo@gmail.com");
        cy.wait(1000);
        ln.setPassword("Tesztelo01");
        ln.clickSubmit() 
    })

})