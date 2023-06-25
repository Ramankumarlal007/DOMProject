// User Output Board
// let enterName = document.querySelector('.enterName');
// enterName.placeholder = "FSJS2.0";
// enterName.readOnly = true;

// let enterMail = document.querySelector('.enterMail');
// enterMail.placeholder = "fsjs@ineuron.ai";
// enterMail.readOnly = true;

// let enterMessage = document.querySelector('.enterMessage');
// enterMessage.placeholder = "Hello World";
// enterMessage.readOnly = true;


// User Input Board
// let userName = document.querySelector('.userName');
// userName.placeholder = "FSJS4522.0";
// userName.readOnly = true;

// let userEmail = document.querySelector('.userEmail');
// userEmail.placeholder = "fsjs@ineur42on.ai";
// userEmail.readOnly = true;

// let userMessage = document.querySelector('.userMessage');
// userMessage.placeholder = "Hello Wor42343ld";
// userMessage.readOnly = true;

//rightside
let userName = document.querySelector('.userName');
let userEmail = document.querySelector('.userEmail');
let userMessage = document.querySelector('.userMessage');
//left side
let enterName = document.querySelector('.enterName');
let enterMail = document.querySelector('.enterMail');
let enterMessage = document.querySelector('.enterMessage');

let submit  = document.querySelector('button[type="submit"]');

submit.addEventListener('click', outputBoard);

function outputBoard (e) {
e.preventDefault();
enterName.value = userName.value;
enterMail.value = userEmail.value;
enterMessage.value =    userMessage.value;

userName.value = '';
userEmail.value = '';
userMessage.value = '';
};




