// (function($){
//   new WOW().init();
// })(jQuery);

// var fields = {};

// document.addEventListener("DOMContentLoaded", function() {
//   fields.yourName = document.getElementById('yourName');
//   fields.email = document.getElementById('email');
//   fields.message = document.getElementById('message');
// })

// function isNotEmpty(value) {
//   if (value == null || typeof value == 'undefined' ) return false;
//   return (value.length > 0);
// }

// function isEmail(email) {
//   let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//   return regex.test(String(email).toLowerCase());
// }

// function fieldValidation(field, validationFunction) {
//   if (field == null) return false;
 
//   let isFieldValid = validationFunction(field.value)
//   if (!isFieldValid) {
//   field.className = 'placeholderRed';
//   } else {
//   field.className = '';
//   }
 
//   return isFieldValid;
// }

// function isValid() {
//   var valid = true;
  
//   valid &= fieldValidation(fields.yourName, isNotEmpty);
//   valid &= fieldValidation(fields.email, isEmail);
//   valid &= fieldValidation(fields.message, isNotEmpty);
 
//   return valid;
// }

// class User {
//   constructor(yourName, email, message) {
//   this.yourName = yourName;
//   this.email = email;
//   this.message = message;
//   }
// }

// function sendContact() {
//   if (isValid()) {
//     let usr = new User(yourName.value, email.value, message.value)
//     alert(`${usr.yourName} thanks for your message!`)
//   } else {
//     alert("Something went wrong...")
//   }
// }



