///<refecrence types="cypress"/>
import CheckBoxPage from "../../pages/checkboxFormDemo";
describe("Checkbox Demo", function () {
  it("I am on the homepage of the Selenium Playground", function () {
    cy.visit("/");
  });
  it("I click on the checkbox demo link in the input forms section", function () {
    CheckBoxPage.getcheckboxlink().click({ force: true });
  });
  it("I navigated to the checkbox demo page", function () {
    cy.url().should("include", "/checkbox-demo");
  });
  it("I should see the single checkbox section", function () {
    CheckBoxPage.getSingleCheckboxSection().should("be.visible");
  });
  it("I click on checkbox in the single checkbox section", function () {
    CheckBoxPage.getsingleCheckbox().click();
  });
  it("I should see the success message", function () {
    CheckBoxPage.getSuccessMessage().should(
      "have.text",
      "Success - Check box is checked"
    );
  });
  it("I should see the multiple checkbox section", function () {
    CheckBoxPage.getMultipleCheckboxSection().should("be.visible");
  });
  it("I click on checkbox in the single checkbox section", function () {
    CheckBoxPage.getMultipleCheckbox().click({ multiple: true });
  });
  it("I click on check all button", function () {
    CheckBoxPage.getCheckAllButton().click();
  });
  it("I should see the uncheck all button in place of the check all button", function () {
    CheckBoxPage.getCheckAllButton().should("be.visible");
  });
});
