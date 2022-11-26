const inputFormlink = ".text-black.text-size-14:eq(4)";
const inputFormSection = "div .wrapper .mt-50 .container";
const emailInputField = "div #inputEmail4";
const passwordInputField = "div #inputPassword4";
const nameInputField = "div #name";
const companyName = "div #company";
const websiteName = "div #websitename";
const cityName = "div #inputCity";
const addressLocation = "div #inputAddress1";
const secondAddressLocation = "div #inputAddress2";
const stateInputField = "div #inputState";
const zipCode = "div #inputZip";
const countryDropDown = "div .pr-20 .w-full:eq('3')";
const submitButton = "div .btn";
const outputMessage = ".success-msg";
class InputFormSubmitPage {
  static getInputFormlink() {
    return cy.get(inputFormlink);
  }
  static getInputFormSection() {
    return cy.get(inputFormSection);
  }
  static getOutputMessage() {
    return cy.get(outputMessage);
  }
  static getNameInputField() {
    return cy.get(nameInputField);
  }
  static getCompanyName() {
    return cy.get(companyName);
  }
  static getSubmitButton() {
    return cy.get(submitButton);
  }
  static getCountryDropDown() {
    return cy.get(countryDropDown);
  }
  static getZipCode() {
    return cy.get(zipCode);
  }
  static getSecondAddressLocation() {
    return cy.get(secondAddressLocation);
  }
  static getStateInputField() {
    return cy.get(stateInputField);
  }
  static getcityName() {
    return cy.get(cityName);
  }
  static getAddressLocation() {
    return cy.get(addressLocation);
  }

  static getWebsiteName() {
    return cy.get(websiteName);
  }

  static getEmailInputField() {
    let email = this.getRandomEmail();
    return cy.get(emailInputField).type(email);
  }
  static getRandomEmail() {
    let str = " ";
    let chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let ii = 0; ii < 13; ii++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str + "@gmail.com";
  }
  static getPasswordInputField() {
    let password = this.getRandomPassword();
    return cy.get(passwordInputField).type(password);
  }
  static getRandomPassword() {
    let num = " ";
    let number = "0123456789";
    for (let ii = 0; ii <= 10; ii++) {
      num += number[Math.floor(Math.random * number.length)];
    }
    return num;
  }
}
export default InputFormSubmitPage;
