///<reference types="cypress"/>
import SimpleFormPage from "../../pages/simpleFormDemo";
describe("Simple Form Demo", function () {
  it("I am on the homepage of the Selenium Playground", function () {
    cy.visit("/");
  });
  it("I click on the simple form demo link in the input forms section", function () {
    SimpleFormPage.getSimpleFormLink().click({ force: true });
  });
  it("I navigate to the simple form demo page", function () {
    cy.url().should("include", "/simple-form-demo");
  });
  it("I should see the single input field section", function () {
    SimpleFormPage.getSimpleInputFormSection().should("be.visible");
  });
  it("I fill automation using cypress in message input field", function () {
    SimpleFormPage.getmessageInputField().scrollIntoView();
    SimpleFormPage.getmessageInputField().type("automation using cypress");
  });
  it("I click on the checked value button in the input forms section", function () {
    SimpleFormPage.getCheckedValueButton().click();
  });
  it("I should see my text in the message display section", function () {
    SimpleFormPage.getMessageSection().contains("automation using cypress");
  });
  it("I should see the two input field section", function () {
    SimpleFormPage.getTwoInputField().should("be.visible");
  });
  it("I fill 10 in first message input field in two input field section", function () {
    SimpleFormPage.getFirstMessageInputField().scrollIntoView();
    SimpleFormPage.getFirstMessageInputField().type("20");
  });
  it("I fill 30 in second message input field in two input field section", function () {
    SimpleFormPage.getSecondMessageInputField().scrollIntoView();
    SimpleFormPage.getSecondMessageInputField().type("30");
  });
  it("I click on the checked value button in the input forms section", function () {
    SimpleFormPage.getValueButton().click();
  });
  it("I should see total of both the input field in total section", function () {
    SimpleFormPage.getTotalSection().contains("50");
  });
});
