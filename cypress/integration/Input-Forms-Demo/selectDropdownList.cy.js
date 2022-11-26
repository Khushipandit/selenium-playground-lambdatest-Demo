///<reference types="cypress"/>
import SelectDropdownPage from "./../../pages/selectDropdownList";
describe("Select DropdownList Demo", function () {
  it("I am on the homepage of the Selenium Playground", function () {
    cy.visit("/");
  });
  it("I click on the dropdown list link in the input forms section", function () {
    SelectDropdownPage.getDropdownListlink().click({ force: true });
  });
  it("I navigate to the dropdown list demo page", function () {
    cy.url().should("include", "/select-dropdown-demo");
  });

  it("I should see select list demo section", function () {
    SelectDropdownPage.getSelectListSection().should("be.visible");
  });
  it("I select friday from the dropdown dropdown input field", function () {
    SelectDropdownPage.getDropdownInput().select("Friday");
  });
  it("I should see the day selected as friday", function () {
    SelectDropdownPage.getDaySelected().contains("Friday");
  });

  it("I should see Multi select list demo section", function () {
    SelectDropdownPage.getMultiselectSection().should("be.visible");
  });
  it("I select new jersey from the dropdown input field", function () {
    SelectDropdownPage.getDropdownInputField().select("New Jersey");
  });
  it("I click on first selected button", function () {
    SelectDropdownPage.getFirstSelectedButton().click({ force: true });
  });
  it("I should see new jersey as first selected option", function () {
    SelectDropdownPage.getOptionsOutput().contains("New Jersey");
  });

  it("I select new york from the dropdown input field", function () {
    SelectDropdownPage.getDropdownInputField().select("New York");
  });
  it("I click on first selected button", function () {
    SelectDropdownPage.getAllSelectedButton().click({ force: true });
  });
  it("I should see new york as options selected are", function () {
    SelectDropdownPage.getOptionsOutput().contains("New York");
  });
});
