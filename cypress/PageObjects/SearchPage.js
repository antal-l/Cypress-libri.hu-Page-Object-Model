class Search
{
    clickAdjust()
    {
        cy.get('#onetrust-accept-btn-handler').click()
    }

    SearcHeader(item)
    {
        cy.get('#headerSearch').type(item);
    }

    SearchButton()
    {
        cy.get('#autocomplete-form > .btn').click();
    }

    clickItem()
    {
        cy.get(':nth-child(2) > .product-list-item > .flex-grow-1 > .text-top > .book > .gtm-click').click();
    }
  
}


export default Search;

