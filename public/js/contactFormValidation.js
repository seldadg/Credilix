// Name validation
function validateName() {
    var name = document.getElementById('contact-name').value;
    var valid = true;

    if(name.length == 0) {
      producePrompt('Името е задължително', 'name-error' , 'red')
      return false;
  }
// If First and Last names are required

//   if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
//       producePrompt('Име и фамилия моля.','name-error', 'red');
//       return false;
//   }

  producePrompt(' ', 'name-error', 'green');
  return valid;
}

// Phone validation
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    var valid = true;
  
    if(phone.length == 0) {
        producePrompt('Телефонния номер е задължителен.', 'phone-error', 'red');
        return false;
    }
  
    if(!phone.match(/^[0-9]{10}$/)) {
        producePrompt('Телефонният номер трябва да започва с (08..) и да съдържа 10 цифрени символа' ,'phone-error', 'red');
        return false;
    }
  
    producePrompt(' ', 'phone-error', 'green');
    return valid;
  }

  // Email validation
  function validateEmail () {
    var email = document.getElementById('contact-email').value;
    var valid = true;
  
    if(email.length == 0) {
      producePrompt('Невалиден емайл','email-error', 'red');
      return false;
  
    }
    
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        producePrompt('Невалиден емайл', 'email-error', 'red');
        return false;
    }
    
    producePrompt(' ', 'email-error', 'green');
    return valid;
  }

  // Message validation

  function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 10;
    var left = required - message.length;
    var valid = true;
  
    if (left > 0) {
      producePrompt(left + ' и повече символи са нужни','message-error','red');
      return false;
    }
  
    producePrompt(' ', 'message-error', 'green');
    return valid;
  }
  
  function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
      jsShow('submit-error');
      producePrompt('Моля попълнете липсващата информация', 'submit-error', 'red');
      setTimeout(function(){jsHide('submit-error');}, 2000);
      return false;
  }
  else {
  }
  }
  function jsShow(id) {
    document.getElementById(id).style.display = 'block';
  }
  function jsHide(id) {
    document.getElementById(id).style.display = 'none';
  } 
  function producePrompt(message, promptLocation, color) {  
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color; 
  }

  document.querySelector("form").reset();


