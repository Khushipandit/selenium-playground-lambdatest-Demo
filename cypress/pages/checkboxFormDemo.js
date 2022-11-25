const checkboxlink = ".text-black:eq(1)";
const singleCheckboxSection = ".pt-20";
const singleCheckbox = "#isAgeSelected";
const successMessage = "#txtAge";
const multipleCheckboxSection = ".input-body";
const multipleCheckbox = "div .input-body .flex input[type='checkbox']";
const checkAllButton = "#box";
class CheckBoxPage {
  static getcheckboxlink() {
    return cy.get(checkboxlink);
  }
  static getSingleCheckboxSection() {
    return cy.get(singleCheckboxSection);
  }
  static getsingleCheckbox() {
    return cy.get(singleCheckbox);
  }
  static getSuccessMessage() {
    return cy.get(successMessage);
  }
  static getMultipleCheckboxSection() {
    return cy.get(multipleCheckboxSection);
  }
  static getMultipleCheckbox() {
    return cy.get(multipleCheckbox);
  }
  static getCheckAllButton() {
    return cy.get(checkAllButton);
  }
}
export default CheckBoxPage;
