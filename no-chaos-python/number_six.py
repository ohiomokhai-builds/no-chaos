
word = input("Enter any number: ")

count = 0
number = len(word)

for char in word:
    if count % 2 == 0:
        for number in range (count, count+1):
            print (char)
    count += 1

