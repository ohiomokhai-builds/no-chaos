
let prompt = require('prompt-sync')();

let string = prompt("Enter any string: ");

let counter = 0;

let reverse = "";

	while (counter <= string.length) {
		let char = string.charAt(counter);
		reverse = char + reverse;
		counter++;
	}

	if (reverse === string) {
		console.log("Palindrome");

	} else {
		console.log("Not a palindrome");

	}
