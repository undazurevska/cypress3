import BasePage from "./Base.page";

class HomePage extends BasePage{
    static get url() {
        return "/";
    }

    static get dismissButton() {
        return cy.get(".cc-dismiss");
    }

    static get closeDiolog() {
        return cy.get(".close-dialog");
    }

    static get accoutButton() {
        return cy.get("#navbarAccount");
    }

    static get loginButton() {
       return cy.get("#navbarLoginButton");
    }

    static get searchIcon(){
        return cy.get("#searchQuery");
    }

    static get searchField(){
        return cy.get(".mat-search_field");
    }

    static get itemsSumButton() {
        return cy.get("mat-select[aria-label='Items per page:']");
    }

    static get selectItemsSumButton() {
        return cy.get(".mat-option-text");
    }

    static get reviewsButton() {
        return cy.get(".mat-expansion-panel");
    }

    static get reviewText() {
        return cy.get(".review-text")
    }

}

export default HomePage;