
import java.util.Scanner;

public class NumberTen {

	public static void main(String... args) {

		Scanner input = new Scanner (System.in);

		int attempt = 0;

		int numberGuess = 1;
		int  dummy = 100;

 		while (numberGuess < dummy) {


		System.out.println("Enter guess number: ");
 		int number = input.nextInt();

			if (number == numberGuess) {
				break;
			} else {

			attempt += 1;

			}
    numberGuess += 1;
}

System.out.println("Your attempt is: " +  attempt);

	}

}
