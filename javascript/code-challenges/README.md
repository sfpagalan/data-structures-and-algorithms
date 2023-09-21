## Table of Contents

- [Code 1](#ReverseArray)
- [Code 2](#ArrayInsertShift)
- [Code 3](#BinarySearch)

# Code 1: ReverseArray

## Whiteboard Process

![Reverse Array](401codechallenge-reverseArray.jpg)

## Approach & Efficiency

- Approach: The approach taken is an iterative one, which reverses an array by creating a new array and adding elements from the input array in reverse order.

- Why: This approach was chosen because it adheres to the challenge requirement of not using built-in methods and is straightforward to implement.

- Big O Time Complexity: The time complexity is O(n) because it iterates through the input array once, performing a constant-time operation for each element.

- Big O Space Complexity: The space complexity is also O(n) because it creates a new array to store the reversed elements, with space proportional to the size of the input array.

## Solution

![Output](reversedArray.png)

# Code 2: ArrayInsertShift

## Whiteboard Process

![Insert Shift Array](401codechallenge-reverseArray.jpg)

## Approach & Efficiency

- Approach:
  - Calculate the middle index of the input array.
  - Initialize a new result array.
  - Iterate through the original array and insert elements into the result array, adding the new value at the middle index.
  - Return the result array as the output.

- Why:
  - This approach was chosen because it allows us to insert a value into the middle of the array without using built-in methods, such as splice, which can directly add elements at a specified position.

- Big O Time Complexity:
  - Time Complexity: O(n), where n is the number of elements in the input array. We iterate through the input array once to copy its elements into the result array. The calculation of the middle index takes constant time.

- Big O Space Complexity:
  - Space Complexity: O(n) as well. We create a new result array that can potentially contain all elements of the input array plus one additional element (the new value). Therefore, the space required is proportional to the size of the input array. The calculation of the middle index and other variables have constant space overhead.

## Solution
![Output](reversedArray.png)


# Code 3: BinarySearch

## Whiteboard Process

![Binary Search](BinarySearch.png)

## Approach & Efficiency

- Approach:
  - The approach taken here is the Binary Search algorithm.

- Why:
  - This algorithm is used because it efficiently searches a sorted array by repeatedly dividing the search space in half, reducing the time complexity significantly compared to linear search.

- Big O Time Complexity:
  - Binary search efficiently narrows down the search space by half with each comparison.

- Big O Space Complexity:
  - Binary search uses a constant amount of extra space for variables, making it space-efficient.

## Solution
![Output](BinarySearch-output1.png)
![Output](BinarySearch-output2.png)
