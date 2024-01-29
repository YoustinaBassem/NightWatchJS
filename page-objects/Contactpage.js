module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
  
    elements: {
      subjectHeadingDropdown: {
        selector: '#id_contact' 
      },
      emailInput: {
        selector: '#email' 
      }, 
      orderReferenceInput: {
        selector: '#id_order' 
      },  
      messageTextarea: {
        selector: '#message' 
      }, 
      submitButton: {
        selector: '#submitMessage'
      }, 
      successMessage: {
        selector: '.alert.alert-success'
      },  
      errorMessage: {
        selector: '.alert.alert-danger'
      }, 
    },

    
  };
  