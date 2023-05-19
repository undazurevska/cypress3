import BasePage from "./Base.page";

class RegistrationPage extends BasePage {
    static get url() {
        return "/#/register";
    }

    static get email(){
        return cy.get("#emailControl");
    }

    static get password(){
        return cy.get("#passwordControl");
    }

    static get repeatPassword(){
        return cy.get("#repeatPasswordControl");
    }

    static get questionSelectorField(){
        return cy.get('.mat-select[role="combobox"]');
    }

    static get questionSelect(){
       return cy.get(".mat-option-text");
    }

    static get questionFieldFill(){
        return cy.get("#securityAnswerControl");
    }

    static get registratinButton() {
        return cy.get("#registerButton");
    }
}

export default RegistrationPage;