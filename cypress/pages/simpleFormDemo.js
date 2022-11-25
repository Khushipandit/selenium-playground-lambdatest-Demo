const simpleFormlink = ".text-black.text-size-14:eq(0)";
const simpleInputFormSection = "div.pt-20";
const messageInputField = "div #user-message:first()";
const checkedValueButton = "#showInput";
const messageSection = "#message";
const twoInputField = ".input-body";
const firstMessageInputField = "#sum1";
const secondMessageInputField = "#sum2";
const getValuesButton = "#gettotal .bg-black";
const totalSection = "#addmessage";
class SimpleFormPage {
  static getSimpleFormLink() {
    return cy.get(simpleFormlink);
  }
  static getSimpleInputFormSection() {
    return cy.get(simpleInputFormSection);
  }
  static getmessageInputField() {
    return cy.get(messageInputField);
  }
  static getCheckedValueButton() {
    return cy.get(checkedValueButton);
  }
  static getMessageSection() {
    return cy.get(messageSection);
  }
  static getTwoInputField() {
    return cy.get(twoInputField);
  }
  static getFirstMessageInputField() {
    return cy.get(firstMessageInputField);
  }
  static getSecondMessageInputField() {
    return cy.get(secondMessageInputField);
  }
  static getValueButton() {
    return cy.get(getValuesButton);
  }
  static getTotalSection() {
    return cy.get(totalSection);
  }
}
export default SimpleFormPage;
