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

# Tree-Intersection

  Find common elements between two binary trees.

## Pseudocode

treeIntersection(tree1, tree2)
  map = new HashMap
  result = []

  traversePopulate(node)
    if node == null return
    map.add(node.value, true)
    traversePopulate(node.left)
    traversePopulate(node.right)

  traverseCheck(node)
    if node == null return
    if map.repeatedWord(String(node.value))
      result.push(node.value)
    traverseCheck(node.left)
    traverseCheck(node.right)

  traversePopulate(tree1.root)
  traverseCheck(tree2.root)

  return result

## Approach & Efficiency

- Approach
  - Traverse the first tree and populate a hashmap.
  - Traverse the second tree and check for common elements.

- Why
  - The approach capitalizes on the strengths of both binary trees and hashmaps to efficiently find intersecting elements.

- Big O Complexity:
  Time Complexity:
  - O(n + m), where n and m are the number of nodes in tree1 and tree2, respectively.

  Space Complexity:
  - O(n), where n is the number of unique elements in the trees.

## Solution

[Code](tree-intersection.js)
![Testing](tree-intersection.test.js)
