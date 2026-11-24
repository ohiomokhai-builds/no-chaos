
let prompt = require('prompt-sync')();

let number = Number(prompt("Enter any Number: "));

if (number % 2 == 0) {

let track = 9;

let evenCount = 0

let numberOne = 0;
let numberTwo = 0;
let numberThree = 0;

	for (let count = 1; count <= track; count++) {

		if ( count % 2 == 0) {

			evenCount += 1;

			switch (evenCount){
				case 1: numberOne += count;
				break;
				case 2: numberTwo += count;
				break;
				case 3: numberThree += count;
			}

		}

}

let sum = numberOne + numberTwo + numberThree;

if (sum == number){
	console.log("Eureka!!");
} else {

	console.log("I go find am  soon!");
}

} else if (number % 3 == 0) {

let track = 9;

let oddCount = 0

let numberOne = 0;
let numberTwo = 0;
let numberThree = 0;

	for (let count = 1; count <= track; count++) {

		if ( count % 3 == 0) {

			oddCount += 1;

			switch (oddCount){
				case 1: numberOne += count;
				break;
				case 2: numberTwo += count;
				break;
				case 3: numberThree += count;
			}

		}

}

let sum = numberOne + numberTwo + numberThree;

if (sum == number){
	console.log("Eureka!!");
} else {

	console.log("I go find am  soon!");
}

}
