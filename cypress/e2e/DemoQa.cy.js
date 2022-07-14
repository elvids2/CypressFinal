import { it } from "mocha";
import BasePage from "../pageObjects2/basePage";
import PracticeForm from "../pageObjects2/practiceFrom";


context("Sauce Demon scenarios", () => {
    beforeEach(() => {
        BasePage.visit();
    });

    it("Practice form", () => {
        PracticeForm.nameField.type('Bob');
        PracticeForm.lastNameField.type('Builder');
        PracticeForm.emailField.type('Bobby@gmail.com');
        PracticeForm.genderRadio.contains('Male').click();
        PracticeForm.mobileField.type('27402043');
        PracticeForm.dateField.click();
        PracticeForm.selectMonth.select('February');
        PracticeForm.selectYear.select('1984');
        PracticeForm.selectDay.click();
        PracticeForm.subjectField.type('M{enter}');
        PracticeForm.chooseHobbies.contains('Sports').click();
        PracticeForm.addressField.type('Some construction site');
        PracticeForm.stateField.click().type('N{enter}');
        PracticeForm.cityField.click().type('G{enter}');
        PracticeForm.submit.click();

        PracticeForm.nameSurnameValidation.should('contain', 'Bob Builder');
        PracticeForm.emailValidation.should ('contain', 'Bobby@gmail.com');
        PracticeForm.genderValidation.should ('contain', 'Male');
        PracticeForm.mobileValidation.should ('contain', '27402043');
        PracticeForm.dateValidation.should ('contain', '29 February,1984');
        PracticeForm.subjectValidation.should('contain','Maths');
        PracticeForm.hobbiesValidation.should ('contain', 'Sports');
        PracticeForm.currentAddressValidation.should ('contain', 'Some construction site');
        PracticeForm.stateCityValidation.should('contain', 'NCR Gurgaon');

    });

})