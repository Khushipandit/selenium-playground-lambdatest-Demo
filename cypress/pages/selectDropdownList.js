const dropdownListlink = ".text-black.text-size-14:eq(3)";
const selectListSection = "div .px-15 .pt-10";
const dropdownInput = "div #select-demo";
const daySelected = "div .selected-value";
const multiselectSection = "div .input-body";
const dropdownInputField = "div #multi-select";
const firstSelectedButton = "div #printMe";
const allSelectedButton = "div #printAll";
const optionsOutput = "div .input-body .flex";
class SelectDropdownPage {
  static getDropdownListlink() {
    return cy.get(dropdownListlink);
  }
  static getSelectListSection() {
    return cy.get(selectListSection);
  }
  static getDropdownInput() {
    return cy.get(dropdownInput);
  }
  static getDaySelected() {
    return cy.get(daySelected);
  }
  static getMultiselectSection() {
    return cy.get(multiselectSection);
  }
  static getDropdownInputField() {
    return cy.get(dropdownInputField);
  }
  static getFirstSelectedButton() {
    return cy.get(firstSelectedButton);
  }
  static getAllSelectedButton() {
    return cy.get(allSelectedButton);
  }
  static getOptionsOutput() {
    return cy.get(optionsOutput);
  }
}
export default SelectDropdownPage;
