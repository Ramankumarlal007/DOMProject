//to remove 2.0 from assingment 2 

let courses = document.querySelectorAll('.main__languages a');
courses.forEach((e)=>{
  if (e.textContent.includes('2.0')) {
    e.style.display = "none";
  } else {
    e.style.display = "inline-block";
  }
});

//to add ineuron to input text
let inputText = document.querySelector('.main__form-input');
inputText.placeholder = 'ineuron';
//to enable submit

inputText.removeAttribute('disabled');



// to enable  button
let button = document.querySelector('.main__form-btn');
button.removeAttribute('disabled');


//to put languages in form text and to do submit
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {e.preventDefault()
  
  let inputText = document.querySelector('.main__form-input');
  let UserInput = inputText.value;
  localStorage.setItem('key', UserInput);

  let storedUserInput = localStorage.getItem('key');
  if (storedUserInput) {
    UserInput = storedUserInput;
  }



  let anchor = document.createElement('a');
  anchor.href = "https://www.ineuron.ai";
  anchor.innerText = UserInput;
  anchor.target = "_blank";
  
  let parentElement = document.querySelector('.main .main__languages');
  parentElement.appendChild(anchor);
  inputText.value = '';});

//to getback the input data after the page refresh: 
