import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";
import RegistrationPage from "../pageObjects/Registration.Page";
import SearchResultsPage from "../pageObjects/SearchRedults.Page";

describe("Juice-Shop scenarios", () => {
  context("With no login", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:3000");
    });

    it("Registration", () => {
      HomePage.dismissButton.click();
      HomePage.closeDiolog.click();
      HomePage.accoutButton.click();
      HomePage.loginButton.click();
      LoginPage.newCostumerLink.click();
      RegistrationPage.email.type(
        "test" + Math.floor(Math.random()*100000) + "@test.com"
      );
      RegistrationPage.password.type("12345");
      RegistrationPage.repeatPassword.type("12345");
      RegistrationPage.questionSelectorField.click();
      RegistrationPage.questionSelect.contains("Mother's maiden name?").click();
      RegistrationPage.questionFieldFill.type("test");
      RegistrationPage.registratinButton.click();
      LoginPage.toastMessage.should("have.text", "Registration completed successfully. You can now log in.");

    });
  });

  context("with login", () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.dismissButton.click();
      LoginPage.closeDiolog.click();
      LoginPage.loginto("demo", "demo");
    });

    it("Search for lemons",() => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("lemon{enter}");
      SearchResultsPage.product.contains("Lemon Juice").click();
      SearchResultsPage.header.should("have.text", "Lemon Juice (500ml)");
    });

    it("Search 500ml", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("500ml{enter}");
      SearchResultsPage.searchList.should("have.length",3);
      SearchResultsPage.product.contains("Eggfruit Juice").click();
      SearchResultsPage.header.should("have.text", "Eggfruit Juice (500ml)");
      SearchResultsPage.closeProduct.click();
      SearchResultsPage.product.contains("Strawberry Juice").click();
      SearchResultsPage.header.should("have.text", "Strawberry Juice (500ml)");
      SearchResultsPage.closeProduct.click();
      SearchResultsPage.product.contains("Lemon Juice").click();
      SearchResultsPage.header.should("have.text", "Lemon Juice (500ml)");
      SearchResultsPage.closeProduct.click();
    });

    it("Filter product amount", () => {
      HomePage.itemsSumButton.click();
      HomePage.selectItemsSumButton.contains("12").click();
      SearchResultsPage.searchList.should("have.length",12);
      HomePage.itemsSumButton.click();
      HomePage.selectItemsSumButton.contains("24").click();
      SearchResultsPage.searchList.should("have.length",24);
      HomePage.itemsSumButton.click();
      HomePage.selectItemsSumButton.contains("36").click();
      SearchResultsPage.searchList.should("have.length",35);
    });

    it.only("Validate item reviews", () => {
      HomePage.searchIcon.click();
      HomePage.searchField.type("king{enter}");
      SearchResultsPage.product.contains("King").click();
      cy.wait(200);
      HomePage.reviewsButton.click();
      HomePage.reviewText.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");

    });
  });
});