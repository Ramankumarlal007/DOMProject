***DOMProject/DOM P9**

**//to change the colorto red of class "title"**

let gabriellePerfume = document.querySelector('.caption h1');

gabriellePerfume.style.color = "#E21717";


![1](https://github.com/Ramankumarlal007/DOMProject/assets/121278104/422e838b-338e-47b4-aa57-5707e4189755)

***//to change the button color on hover of mouse***

let button = document.querySelector('.add-to-cart');

button.addEventListener('mouseenter', changeColor);

button.addEventListener('mouseleave', Color);

function changeColor() {
    gabriellePerfume.style.color = "black";
    button.style.backgroundColor = "#E21717";
};

function Color() {
    gabriellePerfume.style.color = "#B4161B";
    
    button.style.backgroundColor = "#1C8D73";
};


![2](https://github.com/Ramankumarlal007/DOMProject/assets/121278104/920ffdde-3789-498f-a475-f287a595fc37)
