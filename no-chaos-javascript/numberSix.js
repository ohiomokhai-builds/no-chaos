

let prompt = require("prompt-sync")();
let string = prompt("Enter a word: ");

let counter = 0;
let char = 0;
let number = string.length;

	while (counter < number ) {

		if (counter % 2 == 0) {

			char = string.charAt(counter);
			console.log("The character at index positon of a string: ", char);

		}

	counter++;

}

