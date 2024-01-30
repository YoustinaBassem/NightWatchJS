const contactpage = require("../page-objects/Contactpage");

module.exports = {
    'Contact Form Submission': function (browser) {
        let contactpage = browser.page.Contactpage();
  
      // Navigate to the contact page
        contactpage.navigate()
             .setValue('@subjectHeadingDropdown', 'Customer service')
             .setValue('@emailInput', 'Mystore@gmail.com')
             .setValue('@orderReferenceInput', '123456')
             .setValue('@messageTextarea', 'This is a test message')
             .click('@submitButton')
             .waitForElementVisible('@successMessage')
        
        contactpage.navigate()
             .setValue('@subjectHeadingDropdown', '')
             .setValue('@emailInput', 'Mystore@gmail.com')
             .setValue('@orderReferenceInput', '123456')
             .setValue('@messageTextarea', 'This is a test message')
             .click('@submitButton')
             .waitForElementVisible('@errorMessage')
        
             contactpage.navigate()
             .setValue('@subjectHeadingDropdown', 'Customer service')
             .setValue('@emailInput', '')
             .setValue('@orderReferenceInput', '123456')
             .setValue('@messageTextarea', 'This is a test message')
             .click('@submitButton')
             .waitForElementVisible('@errorMessage')

             contactpage.navigate()
             .setValue('@subjectHeadingDropdown', 'Customer service')
             .setValue('@emailInput', 'Mystore@gmail.com')
             .setValue('@orderReferenceInput', '123456')
             .setValue('@messageTextarea', '')
             .click('@submitButton')
             .waitForElementVisible('@errorMessage')
    },

    
}
  