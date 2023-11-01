# Hashmap

  Find the first repeating word in a string using a hashmap.

## Pseudocode

HashMap.repeatedWord(str)
  words = str.toLowerCase().split(/\w+/)
  seen = new Set()

  for word in words
    if seen.has(word)
      return word
    seen.add(word)

  return null

## Approach & Efficiency

- Approach
  - Split the string into words.
  - Iterate through each word.
  - Check if the word is already in the hashmap.

- Why
  - The approach is a marriage of computational efficiency and logical elegance, optimizing for speed without sacrificing readability or accuracy.

- Big O Complexity:
  Time Complexity:
  - O(n), where n is the number of words.

  Space Complexity:
  - O(n), where n is the number of unique words.

## Solution

[Code](hashmap.js)
![Testing](hashmap.test.js)
