// to make aside scroll

let aside = document.querySelectorAll('.col-lg-4.new')[0];
aside.style.maxHeight = '450px';
aside.style.overflow = 'scroll';
aside.style.border = "5px solid red"

![Scroll-image](image.png)

//to hide the scroll bar and to hide the horizontal line
// to hide the scroll bar
aside.style.overflow = 'hidden';
aside.style.border = 'none'

// to hide the body lines
let colorLines = document.querySelector('body');
colorLines.style.backgroundImage = 'none';
![ackgrround Image](image-1.png)

//restore backgroundImage 
colorLines.style.backgroundImage = '';
![restore backgroundImage ](image-2.png)

//to show the navbar vertically in small screen
const navbarToggler = document.querySelector('.collapse');
navbarToggler.style.display = "flex";
![navbar](image-3.png)