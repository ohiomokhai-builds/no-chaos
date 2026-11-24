
import java.util.Scanner;

public class NumberEleven {

	public static void main (String... args) {

		Scanner input = new Scanner (System.in);
		System.out.print("Enter any word: ");
		String word = input.nextLine();

		int counter = 0;

	  while (counter <= word.length()) {
		int letter = word.charAt(counter);
		System.out.println(letter);
		counter++;
	  }

	}


}
