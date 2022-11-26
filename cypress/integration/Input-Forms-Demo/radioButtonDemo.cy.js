///<reference types="cypress"/>
import radioButtonPage from "./../../pages/radioButtonDemo";
describe("Simple Form Demo", function () {
  it("I am on the homepage of the Selenium Playground", function () {
    cy.visit("/");
  });
  it("I click on the radio button demo link in the input forms section", function () {
    radioButtonPage.getRadioButtonlink().click({ force: true });
  });
  it("I navigated to the radio button demo page", function () {
    cy.url().should("include", "/radiobutton-demo");
  });
  it("I should see the radio button section", function () {
    radioButtonPage.getRadioButtonSection().should("be.visible");
  });
  it("I click on female gender radio button", function () {
    radioButtonPage.getRadioButton().click();
  });
  it("I click on get checked value button", function () {
    radioButtonPage.getCheckedValueButton().click();
  });
  it("I should see the text radio button 'Female' is checked", function () {
    radioButtonPage
      .getVerifyingText()
      .should("have.text", "Radio button 'Female' is checked");
  });

  it("I should see the grouped radio button section", function () {
    radioButtonPage.getGroupedRadioButtonSection().should("be.visible");
  });
  it("I click on female gender radio button", function () {
    radioButtonPage.getGenderRadioButton().click({ force: true });
  });
  it("I click on 15-50 age radio button", function () {
    radioButtonPage.getAgeRadioButton().click();
  });
  it("I click on get value button", function () {
    radioButtonPage.getValueButton().click();
  });
  it("I should see the selected values in output field", function () {
    radioButtonPage.getOutputField().contains("Gender : Female");
  });
});
