
let prompt = require("prompt-sync")();
let string = prompt("Enter a word: ");

let counter = 0;

let lengthVowel = 0
let lengthConsonant = 0

	while (counter <= string.length) {

		let char = string.charAt(counter);

		if (char == "A" || char == "E" 
		|| char == "I" || char == "O" 
		|| char == "U" || char == "a" 
		|| char == "e" || char == "i" 
        || char == "o" || char == "u") {

			lengthVowel += 1;
			}	
		else if ( char != "A" || char != "E" 
		|| char != "I" || char != "O" 
		|| char != "U" || char != "a" 
		|| char != "e" || char != "i" 
        || char != "o" || char != "u") {
		
			lengthConsonant += 1;
		}

		counter++

	}

console.log(lengthVowel);
console.log(lengthConsonant - 1);

