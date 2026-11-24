
let prompt = require('prompt-sync')();

let attempt = 0;

let numberGuess = 1;
let dummy = 100;

 		while (numberGuess < dummy) {
 		
 		let number = prompt("Enter any integer: ");

			if (number == numberGuess) {
				break;
			} else {

			attempt += 1;

			}
    numberGuess += 1;
}

console.log("Your attempt is: ", attempt);
