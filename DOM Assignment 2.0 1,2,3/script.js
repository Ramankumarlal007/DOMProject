// **Task 1 
//Q1. To hide the socoal media icons present on right side bottom

// let footerIcons = document.querySelector("footer ul");
// footerIcons.style.display = 'none';


// let footerIcons = document.querySelectorAll("footer ul")[0];
// footerIcons.style.display = 'none';

// let footerIcons = document.querySelectorAll("footer ul")[0];
// footerIcons.children[2].style.display = "none";

const footerIcons = document.querySelectorAll("footer ul li");

footerIcons.forEach(element => {
    element.style.display = "none";
});

//Q2. To display Hire ME on header section

let HireMe = document.createElement("li");
HireMe.innerText = "Hire ME";
let ul = document.querySelector("ul");
ul.appendChild(HireMe);

// let HireMe = document.createElement("li");
// HireMe.innerText = "Hire ME";
// let ul = document.querySelectorAll("nav > ul")[0];
// ul.appendChild(HireMe);

// let HireME = document.createElement('li');
// HireME.innerText = "Hire ME";
// let Unlist = document.querySelectorAll("nav > ul");

// Unlist.forEach( (e) => {
//     e.appendChild(HireME)
// })

// Q3.  To remove contact with Projects

// let contact = document.querySelector("nav > ul li:nth-child(3) a");
// contact.style.display = "none"
// let Projects = document.querySelector("nav > ul li:nth-child(3) a");
// Projects.innerText = "Projects";



// let contact = document.querySelector("nav > ul li:nth-child(3) > a");
// contact.style.display = "none";

let Projects = document.querySelector("nav > ul li:nth-child(3) > a");
Projects.innerText = "Projects";

// **Task 2 

//to hide Hire ME from the nav > ul

let hideme = document.querySelector("nav > ul > li:nth-child(4)");
hideme.style.display = "none";

//to update input text with "Search My Project"

let searchBox = document.querySelector(".search-field > input");
searchBox.placeholder = "Search My Project";

// **Task 3 
//to display Search on input text in navbar, to display footer icons also.

const Icons = document.querySelectorAll("footer ul li");

footerIcons.forEach(element => {
    element.style.display = "inline";
});

// to remove "Search My Project"
let searchBox1 = document.querySelector(".search-field > input");
searchBox1.placeholder = "Search";

//Task 4
// To insert an image 
let image = document.querySelector(".hero-right-section > img");
image.src = `./hitesh.png`

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

