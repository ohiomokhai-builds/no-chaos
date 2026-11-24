import java.util.Scanner;

public class NumberTwo {

	public static void main (String... args) {
  
  Scanner input = new Scanner (System.in);
 // System.out.print("Enter any number: ");
		int counter = 1;
    int number = 0;
    int  numberStorage = 0;
    int average = number / counter;

    while (number > -1) {
    
      System.out.println("Enter any number: ");    
      number = input.nextInt();
      
      if (number == -1){
		    break;
	    }
      
	    numberStorage += number;
	    counter++;
	    average = numberStorage / counter;
	    System.out.printf("The increasing average : %d\n", average);

  }


	}






}
