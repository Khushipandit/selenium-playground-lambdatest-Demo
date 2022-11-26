import InputFormSubmitPage from "./../../pages/inputFormSubmit";
describe("Input form Demo", function () {
  it("I am on the homepage of the Selenium Playground", function () {
    cy.visit("/");
  });
  it("I click on the input form link in the input forms section", function () {
    InputFormSubmitPage.getInputFormlink().click({ force: true });
  });
  it("I should navigate to the input form submit page", function () {
    cy.url().should("include", "/input-form-demo");
  });

  it("I should see input form section", function () {
    InputFormSubmitPage.getInputFormSection().should("be.visible");
  });
  it("I fill test data on the name input field", function () {
    InputFormSubmitPage.getNameInputField().type("test data");
  });
  it("I fill email on the email input field", function () {
    InputFormSubmitPage.getEmailInputField();
  });
  it("I fill password on the password input field", function () {
    InputFormSubmitPage.getPasswordInputField();
  });
  it("I fill xyz.co on the company input field", function () {
    InputFormSubmitPage.getCompanyName().type("XYZ.co");
  });
  it("I fill xyz.com on the website input field", function () {
    InputFormSubmitPage.getWebsiteName().type("XYZhosting.com");
  });
  it("I fill india on the country input field", function () {
    InputFormSubmitPage.getCountryDropDown().select("India");
  });
  it("I fill delhi on the city input field", function () {
    InputFormSubmitPage.getcityName().type("Delhi");
  });
  it("I fill dwarka morh on the address input field", function () {
    InputFormSubmitPage.getAddressLocation().type("Dwarka Morh");
  });
  it("I fill west delhi on the address input field", function () {
    InputFormSubmitPage.getSecondAddressLocation().type("West Delhi");
  });
  it("I fill delhi on the state input field", function () {
    InputFormSubmitPage.getStateInputField().type("Delhi");
  });
  it("I fill 110059 on the zip code input field", function () {
    InputFormSubmitPage.getZipCode().type("110059");
  });
  it("I click on submit button", function () {
    InputFormSubmitPage.getSubmitButton().click();
  });
  it("I should see the thanks message on the screen", function () {
    InputFormSubmitPage.getOutputMessage().should(
      "have.text",
      "Thanks for contacting us, we will get back to you shortly."
    );
  });
});
