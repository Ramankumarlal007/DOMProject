//toinsert ineuronImage
let ineuronImage = document.createElement('img');
ineuronImage.src = './assets/ineuron-logo.png';
ineuronImage.alt = 'ineuronImage logo'; 
ineuronImage.classList.add('logo');

let header = document.querySelector('main > header');
let paste = header.appendChild(ineuronImage);

let equalizer = document.querySelector('main > header > img');
equalizer.style.display = 'none';

//to change $4 to $10 
let dollar = document.querySelector('.app_price > span')
dollar.innerText = '$10';

