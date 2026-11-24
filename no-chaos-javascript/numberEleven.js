
let prompt = require('prompt-sync')();

let string = prompt("Enter any string: ");

let counter = 0;

	while (counter <= string.length) {
		let char = string.charAt(counter);
		console.log(char);
		counter++;
	}
