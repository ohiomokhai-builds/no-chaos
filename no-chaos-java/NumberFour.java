
import java.util.Scanner;

public class NumberFour {

	public static void main (String... args){

	Scanner input = new Scanner (System.in);
	System.out.print("Enter any word: ");
	String word = input.nextLine();

	int counter = 0;

	String reverse = "";

	while (counter < word.length()) {

		char letter = word.charAt(counter);
		reverse = letter + reverse;
		counter++;
	}

	if (reverse == word) {
		System.out.println("Palindrome");

	} else {
		System.out.println("Not a palindrome");

	}
	}
}
