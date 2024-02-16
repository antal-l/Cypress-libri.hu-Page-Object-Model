class Search
{
    clickAdjust()
    {
        cy.get('#onetrust-accept-btn-handler').click()
    }

    searchHeader(item)
    {
        cy.get('#headerSearch').type(item);
    }

    searchButton()
    {
        cy.get('#autocomplete-form > .btn').click();
    }

    clickItem()
    {
        cy.get(':nth-child(2) > .product-list-item > .thmb-holder > .thmb > .gtm-click > img').click();
    }

    
  
}


export default Search;

