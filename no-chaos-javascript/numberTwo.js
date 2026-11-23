
let counter = 0;

let prompt = require('prompt-sync')();
let number = 0;
let numberStorage = 0;
let average = number / counter;

while (number > -1) {

	number = Number(prompt("Enter a number: "));

	numberStorage += number;
	counter++;
	average = numberStorage / counter;
	console.log(average);

	if (number === -1){
		break;
	}
}

//console.log(average);
