counter = 0

number = 0
numberStorage = 0
average = 0

while number > -1:
    number = int(input("Enter a number: "))
    
    if number == -1:
        break
    
    numberStorage += number
    counter += 1
    average = numberStorage / counter

    print("The increasing average number:", average)
