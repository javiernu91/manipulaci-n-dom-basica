const title = document.querySelector('.title');
const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const btnCalc = document.querySelector('#btnAdd');
const form = document.querySelector('#form');
const textResult = document.querySelector('#result');


form.addEventListener('submit', btnCalcularAdd);

function btnCalcularAdd(){
    event.preventDefault();
    let result;
    result = parseInt(firstNumber.value, 10)  + parseInt(secondNumber.value ,10);
    textResult.innerText = "Total: " + result; 
}