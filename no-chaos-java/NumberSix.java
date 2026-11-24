import java.util.Scanner;

public class NumberSix {

    public static void main(String... args) {

        Scanner input = new Scanner(System.in);
	System.out.println ("Enter any string: ");
        String word = input.nextLine();

        int counter = 0;
        char letter;

        int number = word.length();

        while (counter < number) {

            if (counter % 2 == 0) {

                letter = word.charAt(counter);

                System.out.println("The character at index position of a string: " + letter);
            }

            counter++;
        }
    }
}
