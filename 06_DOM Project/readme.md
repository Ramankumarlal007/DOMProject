***DOMProject/06_DOM Project***


**//toinsert ineuronImage**

let ineuronImage = document.createElement('img');

ineuronImage.src = './assets/ineuron-logo.png';

ineuronImage.alt = 'ineuronImage logo'; 

ineuronImage.classList.add('logo');

let header = document.querySelector('main > header');

let paste = header.appendChild(ineuronImage);

let equalizer = document.querySelector('main > header > img');

equalizer.style.display = 'none';

![ineuronImage](https://github.com/Ramankumarlal007/DOMProject/assets/121278104/6e56f130-cb85-46a3-894d-998c48d6be19)


//to change $4 to $10 

let dollar = document.querySelector('.app_price > span')

dollar.innerText = '$10';

![dollarPrice](https://github.com/Ramankumarlal007/DOMProject/assets/121278104/271bab26-a713-405e-bf1b-945add459081)
