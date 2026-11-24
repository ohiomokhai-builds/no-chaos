
word = input("Enter any word: ")

reverse = ""

for char in word:
		reverse = char + reverse
		print(char)
		
if reverse == word:
	print("palindrome")
else:
	("not palindrome")
