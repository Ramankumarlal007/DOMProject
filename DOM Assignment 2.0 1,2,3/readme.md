**DOM Assingment 2.0 1,2,3

**DOM Assingment 1

**Task 1 
Q1. To hide the socoal media icons present on right side bottom

const footerIcons = document.querySelectorAll("footer ul li");

footerIcons.forEach(element => {
    element.style.display = "none";
});

Q2. To display Hire ME on header section

let HireMe = document.createElement("li");
HireMe.innerText = "Hire ME";
let ul = document.querySelector("ul");
ul.appendChild(HireMe);

Q3.  To remove contact with Projects
let Projects = document.querySelector("nav > ul li:nth-child(3) > a");
Projects.innerText = "Projects";

![question 1 answer](image.png)

**Task 2 

//to hide Hire ME from the nav > ul

let hideme = document.querySelector("nav > ul > li:nth-child(4)");
hideme.style.display = "none";

//to update input text with "Search My Project"

let searchBox = document.querySelector(".search-field > input");
searchBox.placeholder = "Search My Project";
![Alt text](<task 2.png>)

// **Task 3 
//to display Search on input text in navbar, to display footer icons also.

const Icons = document.querySelectorAll("footer ul li");

footerIcons.forEach(element => {
    element.style.display = "inline";
});

// **Task 3 
//to display Search on input text in navbar, to display footer icons also.

const Icons = document.querySelectorAll("footer ul li");

footerIcons.forEach(element => {
    element.style.display = "inline";
});

// to remove "Search My Project"
let searchBox1 = document.querySelector(".search-field > input");
searchBox1.placeholder = "Search";
![Alt text](<task 3.png>)

//**Task 4
// To insert an image 
let image = document.querySelector(".hero-right-section > img");
image.src = `./hitesh.png`
![Alt text](task4.png)

//Task 5
// to remove image and to add a div with text"Support me"

// to remove an image
let image1 = document.querySelector(".hero-right-section > img");
image1.src = './avtar.png'

//to create and add a button with text"Support me"
const supportMe = document.createElement('button');
supportMe.innerText = "Support Me";

let heroRightBtns = document.querySelector('.hero-right-section-btns');
heroRightBtns.appendChild(supportMe);
![Alt text](image-1.png)



**DOM Assingment 2
Task 1

//To add background color to every h3 element.

//to change the background Color of h3
 
accordian.forEach( (changeBackgroundColor) => {
  changeBackgroundColor.style.backgroundColor = "#46B2E0";
});


//to change the background Color of h3
 
accordian.forEach( (changeBackgroundColor) => {
  changeBackgroundColor.style.backgroundColor = "#dadaf8";
});


let Contact = document.querySelector(`nav ul li:nth-child(3)`);
Contact.firstChild.textContent = "Projects";

![Assingment 2 task 1](image-2.png)

**DOM Assingment 2
Task 2
//to add div h3 and p in accordian

/ //Task 2
// //to add div h3 and p in accordian

let Newdiv = document.createElement('div');
Newdiv.className = "accordian";
let h3 = document.createElement('h3');
h3.innerText = "Skills"
let paragraph = document.createElement('p');
paragraph.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over GitHub";

Newdiv.appendChild(h3);
Newdiv.appendChild(paragraph);
let accordianWrapper = document.querySelector('.accordian-wrapper');
accordianWrapper.appendChild(Newdiv);
// h3.nextElementSibling(paragraph);
paragraph.style.display = 'none';
h3.style.backgroundColor = '#dadaf8';
h3.addEventListener('click', displayParagraph);


function displayParagraph () {
  let color = randomColor();
 h3.style.color = "green"
  if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block';
    h3.style.color = color;
    paragraph.style.color = color;
  } else {
    paragraph.style.display = 'none';
    h3.style.color = color;
    
  }
};

function randomColor () {
  let value = '0123456789ABCDEF';
  // console.log(value[14]);
  let hash = '#';
 for (let i = 0; i < 6; i++) {
   hash = hash + value[(Math.floor(Math.random() * 16))];
  }
  return hash;
};

![Assingment 2 task 2](image-3.png)


//**DOM Assingment 3 Task 1
//to update the input text on user board

let enterName = document.querySelector('.enterName');
enterName.placeholder = "FSJS2.0";
enterName.readOnly = true;

let enterMail = document.querySelector('.enterMail');
enterMail.placeholder = "fsjs@ineuron.ai";
enterMail.readOnly = true;

let enterMessage = document.querySelector('.enterMessage');
enterMessage.placeholder = "Hello World";
enterMessage.readOnly = true;


//User Input Board
let userName = document.querySelector('.userName');
userName.placeholder = "FSJS2.0";
userName.readOnly = true;

let userEmail = document.querySelector('.userEmail');
userEmail.placeholder = "fsjs@ineuron.ai";
userEmail.readOnly = true;

let userMessage = document.querySelector('.userMessage');
userMessage.placeholder = "Hello World";
userMessage.readOnly = true;

![Assingment 3 task 1](image-4.png)
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

![Assingment 3 task 1 image 1](image-5.png)