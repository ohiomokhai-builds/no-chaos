
attempt = 0;

guess_number = 100

for number in range (1, guess_number + 1):

	number = int(input("Enter Number to guess: "))

	if number != guess_number:
		attempt += 1

	elif number == guess_number:
		break

print (attempt)
