
word = input("Enter any number: ")

vowel = ""
vowel_dummy = "AEIOUaeiou"
vowel_count = 0
consonant_count = 0


for char in word:
    if char in vowel_dummy:
        if char == "A" or char == "a":
            if "A" not in vowel and "a" not in vowel:
                vowel += char
                vowel_count += 1

        elif char == "E" or char == "e":
            if "E" not in vowel and "e" not in vowel:
                vowel += char
                vowel_count += 1

        elif char == "I" or char == "i":
            if "I" not in vowel and "i" not in vowel:
                vowel += char
                vowel_count += 1

        elif char == "O" or char == "o":
            if "O" not in vowel and "o" not in vowel:
                vowel += char
                vowel_count += 1

        elif char == "U" or char == "u":
            if "U" not in vowel and "u" not in vowel:
                vowel += char
                vowel_count += 1
                
    elif char not in vowel_dummy: 
        consonant_count += 1

print(vowel_count)
print(consonant_count)
