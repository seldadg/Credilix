const contactForm = document.querySelector('.contact-form');
const name = document.getElementById('names');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let formData = {
    names: names.value,
    email: email.value,
    phone: phone.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if(xhr.responseText == 'success') {
      alert('Email was sent');
      names.value = '';
      email.value = '';
      phone.value = '';
      message.value = '';
    }else{
      alert('Something went wrong!')
    }
  }
  xhr.send(JSON.stringify(formData));

});