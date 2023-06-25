let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

//Task 1
//to change the background Color of h3
 
accordian.forEach( (changeBackgroundColor) => {
  changeBackgroundColor.style.backgroundColor = "#dadaf8";
});

// to change contact to project in nav bar
// let Contact = document.querySelectorAll(`nav ul li:nth-child(3)`)[0];
// Contact.innerText = "Project";

let Contact = document.querySelector(`nav ul li:nth-child(3)`);
Contact.firstChild.innerText = "Projects";

// //Task 2
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


// setInterval(() => {
//   let color = randomColor();
//   h3.style.color = color;
//   // paragraph.style.color = color;
// }, 1000);

// setInterval(() => {
//   let color = randomColor();
//   // h3.style.color = color;
//   paragraph.style.color = color;
// }, 1000);









