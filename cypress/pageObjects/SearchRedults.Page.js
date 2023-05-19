import BasePage from "./Base.page";

class SearchResultsPage extends BasePage{
    static get url() {
        return "/#/search";
    }

    static get product() {
        return cy.get(".product");
    }

    static get header() {
        return cy.get("h1");
    }

    static get searchList(){
        return cy.get(".mat-grid-tile");
    }

    static get closeProduct(){
        return cy.get(".close-dialog");
    }
}

export default SearchResultsPage;