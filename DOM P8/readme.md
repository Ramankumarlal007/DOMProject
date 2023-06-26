***DOMProject/DOM P8***


**// to make aside scroll**

let aside = document.querySelectorAll('.col-lg-4.new')[0];

aside.style.maxHeight = '450px';

aside.style.overflow = 'scroll';

aside.style.border = "5px solid red"


![Image1](https://github.com/Ramankumarlal007/DOMProject/assets/121278104/79b86532-2ea5-4e5d-aa39-033fd71b7671)


**//to hide the scroll bar and to hide the horizontal line**

**// to hide the scroll bar**

aside.style.overflow = 'hidden';

aside.style.border = 'none'

**// to hide the body lines**

let colorLines = document.querySelector('body');

colorLines.style.backgroundImage = 'none';

![Image2](https://github.com/Ramankumarlal007/DOMProject/assets/121278104/8beb3a6b-8ee2-41a1-9bc8-a0c490f9762c)


//restore backgroundImage 

colorLines.style.backgroundImage = '';

![Image3](https://github.com/Ramankumarlal007/DOMProject/assets/121278104/068f3476-3722-44e0-8934-d992e3f1f333)


**//to show the navbar vertically in small screen**

const navbarToggler = document.querySelector('.collapse');

navbarToggler.style.display = "flex";


![Image4](https://github.com/Ramankumarlal007/DOMProject/assets/121278104/30c0413e-48d3-41ae-9988-6b191f73ca9c)
