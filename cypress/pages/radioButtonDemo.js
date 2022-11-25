const radioButtonlink = ".text-black.text-size-14:eq(2)";
const radioButtonSection = "div .pt-20";
const radioButton = "div .pt-20 input[type='radio']:last()";
const getCheckedValueButton = "div #buttoncheck";
const verifyingText = "div .my-10";
const groupedRadioButtonSection = "div .input-body";
const genderRadioButton = "div .input-body .flex input[type='radio']:eq('1')";
const ageRadioButton = "div .input-body .flex input[type='radio']:eq('5')";
const getValueButton = "div .input-body .flex [type='button']";
const outputField = "div .input-body .flex ";
class radioButtonPage {
  static getRadioButtonlink() {
    return cy.get(radioButtonlink);
  }
  static getRadioButtonSection() {
    return cy.get(radioButtonSection);
  }
  static getRadioButton() {
    return cy.get(radioButton);
  }
  static getCheckedValueButton() {
    return cy.get(getCheckedValueButton);
  }
  static getVerifyingText() {
    return cy.get(verifyingText);
  }
  static getGroupedRadioButtonSection() {
    return cy.get(groupedRadioButtonSection);
  }
  static getGenderRadioButton() {
    return cy.get(genderRadioButton);
  }
  static getAgeRadioButton() {
    return cy.get(ageRadioButton);
  }
  static getValueButton() {
    return cy.get(getValueButton);
  }
  static getOutputField() {
    return cy.get(outputField);
  }
}
export default radioButtonPage;
