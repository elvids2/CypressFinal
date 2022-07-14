
import BasePage from './basePage'

class PracticeForm extends BasePage {
  
  static get nameField(){
    return cy.get('[id="firstName"]');
  }
  static get lastNameField(){
    return cy.get('[id="lastName"]');
  }
  static get emailField(){
    return cy.get('[id="userEmail"]');
  }
  static get genderRadio(){
    return cy.get('[class="custom-control-label"]');
  }
  static get mobileField(){
    return cy.get('[id="userNumber"]');
  }
  static get dateField(){
    return cy.get('[id="dateOfBirthInput"]');
  }
  static get selectMonth(){
    return cy.get('[class="react-datepicker__month-select"]');
  }
  static get selectYear(){
    return cy.get('[class="react-datepicker__year-select"]');
  }
  static get selectDay(){
    return cy.get('[class="react-datepicker__day react-datepicker__day--029"]');
  }
  static get subjectField(){
    return cy.get('[id="subjectsWrapper"');
  }
  static get chooseHobbies(){
    return cy.get('[id="hobbiesWrapper"]');
  }
  static get addressField(){
    return cy.get('[id="currentAddress"]');
  }
  static get stateField(){
    return cy.get('[id="state"]');
  }
  static get cityField(){
    return cy.get('[id="city"]');
  }
  static get submit(){
    return cy.get('[id="submit"]');
  }

  static get nameSurnameValidation(){
    return cy.get('tbody > :nth-child(1) > :nth-child(2)')
  }
  static get emailValidation(){
    return cy.get('tbody > :nth-child(2) > :nth-child(2)')
  }
  static get genderValidation(){
    return cy.get('tbody > :nth-child(3) > :nth-child(2)')
  }
  static get mobileValidation(){
    return cy.get('tbody > :nth-child(4) > :nth-child(2)')
  }
  static get dateValidation(){
    return cy.get('tbody > :nth-child(5) > :nth-child(2)')
  }
  static get subjectValidation(){
    return cy.get('tbody > :nth-child(6) > :nth-child(2)')
  }
  static get hobbiesValidation(){
    return cy.get('tbody > :nth-child(7) > :nth-child(2)')
  }
  static get currentAddressValidation(){
    return cy.get('tbody > :nth-child(9) > :nth-child(2)')
  }
  static get stateCityValidation(){
    return cy.get('tbody > :nth-child(10) > :nth-child(2)')
  }

  
  
  
  
  
  
  
}

export default PracticeForm;