class Login
{   
    
    clickAdjust()
    {
        cy.get('#onetrust-accept-btn-handler').click()
    }

    clickEntry()
    {
        cy.get('.login.d-none').click();
    }
    clickAccept()
    {
        cy.get('#onetrust-accept-btn-handler').click()
    }

    setUserName(username)
    {
        cy.get('#member_email').type(username);
    }

    setPassword(password)
    {
        cy.get("#passwd").type(password);
    }

    clickSubmit()
    {
        cy.get('#loginModal > .modal-dialog > .modal-content > .modal-body > form > .d-grid > .btn').click()
    }
}


export default Login;


