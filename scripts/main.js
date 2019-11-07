function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (array) {
	let total = 0;;
	array.forEach(element => {
		total += element;
	});
	return total;
}

function multiply () {
	let x = 1;
	  const args = Array.from(arguments);
	  args.forEach(element => {
	  x *= element;
	});
	return x;
  }
function divide(dividend, divisor){
    return dividend/ divisor;
}

function power(base, exponent) {
	let start = 1;
	for(x = 0; x < exponent; x++){
		start *= base;
	}
	return start;
}

function factorial(number) {
	let product = 1;
	for(let x = 1; x <= number; number--){
		product *= number;
	}
	return(product);
}

function operate(operant1, operator, operant2){
    switch(operator){
        case "+":
            return add(operant1, operant2);
            break;
        case "-":
            return subtract(operant1, operant2);
            break;
        case "*":
            return multiply(operant1, operant2);
            break;
        case "/":
            return divide(operant1, operant2); 
            break;
        default:
            return "Invalid operator";
    }
}

//UI
const display = document.querySelector('#display');
const numbers = document.querySelectorAll('button.number');

let currentNum1 = " " ;
let currentOperator = " ";
let currentNum2 = " ";
let currentOutput = " ";
function getDisplayValue(){
	return display.innerText;
}

function setDisplayValue(value){
	display.innerText = value;
}

function clearDisplayValue(){
	display.innerText = "0";
}

Array.from(numbers).forEach(number => {
	number.addEventListener('click', function(e) {
		if(currentOperator == " "){
			currentNum1 += number.innerText;
			setDisplayValue(currentNum1);
		}else if(currentNum1 != " " ){
			currentNum2 += number.innerText;
			setDisplayValue(currentNum2);

		}
	})
})

const operators = document.querySelectorAll("button.operator")
Array.from(operators).forEach(operator => {
	operator.addEventListener('click', function(e) {
		currentOperator = operator.innerText;
		console.log(currentOperator);
	})
})
const equals = document.querySelector('#equals');
equals.addEventListener('click', function(e){
	let currentOutput = operate(parseFloat(currentNum1), currentOperator, parseFloat(currentNum2));
	display.innerText = currentOutput;
})