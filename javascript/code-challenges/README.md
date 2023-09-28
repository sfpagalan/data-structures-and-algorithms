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

# Code 5: Singly Linked Lists

## Whiteboard Process

![LinkedList](LinkedListWhiteboard.png)

## Approach & Efficiency

- Approach:
  - LinkedList Class:
    - Implemented a singly linked list with a head property.
  - Insertion (insert method):
    - Added new nodes to the head of the list for O(1) time complexity.
  - Search (includes method):
    - Used linear search to check for value existence, resulting in O(n) worst-case time complexity.
  - String Representation (toString method):
    - Constructed a human-readable string representation of the linked list for visualization.

- Why:
  - Insertion at the Head:
    - Chose insertion at the head for O(1) time complexity.
  - Linear Search for Inclusion:
    - Linear search ensures examining each node once for value existence.
  - String Representation:
    - Built a clear and concise string for easier debugging.

- Big O Time Complexity:
  - `insert` method: O(1)
  - `includes` method: O(n) (worst-case), O(1) (best-case)
  - `toString` method: O(n)

- Big O Space Complexity:
  - The space complexity of this implementation is O(n), where n is the number of nodes in the linked list. This space is primarily used for storing the nodes themselves, and the space complexity does not depend on the number of operations performed on the linked list.

## Solution
[Code](code-challenges/LinkedList.js)
![Output](LinkedListOutput.png)

# Code 7: k-th value

## Whiteboard Process

![k-th value](LinkedListWhiteboard.png)

## Approach & Efficiency

- Approach:
  The kthFromEnd method uses two pointers, a slow pointer and a fast pointer, to find the kth node from the end of the linked list. The approach involves iterating through the linked list using these pointers in a way that ensures the desired result is obtained efficiently.

  - Initialize both the slow and fast pointers to the head of the linked list.

  - Move the fast pointer k nodes ahead of the slow pointer. This is done by iterating over the list with the fast pointer.

  - After the fast pointer has been moved k nodes ahead, iterate both the slow and fast pointers simultaneously until the fast pointer reaches the end of the list. This ensures that the slow pointer will be at the kth node from the end when the fast pointer reaches the end.

  - Return the value of the node pointed to by the slow pointer, which represents the kth node from the end.

- Why:
  This approach is efficient because it requires only one pass through the linked list, with both the slow and fast pointers moving at different speeds. The fast pointer moves k nodes ahead, and then both pointers move together until the end of the list is reached. This ensures that the slow pointer is always positioned at the kth node from the end when the fast pointer reaches the end.

- Big O Time Complexity:
  The time complexity of this approach is O(n), where n is the number of nodes in the linked list. This is because we iterate through the list once, and the number of iterations is proportional to the length of the list.

- Big O Space Complexity:
  The space complexity is O(1) because we use a constant amount of extra space for the two pointers regardless of the size of thc e linked list.

## Solution
[Code](code-challenges/kthFromEnd.js)
![Output](kthFromEndOutput.png)

# Code 8: Zip two linked lists

## Whiteboard Process

![Linked List](LinkedListWhiteboard.png)

## Approach & Efficiency

- Approach:
  The kthFromEnd method uses two pointers, a slow pointer and a fast pointer, to find the kth node from the end of the linked list. The approach involves iterating through the linked list using these pointers in a way that ensures the desired result is obtained efficiently.

  - Initialize both the slow and fast pointers to the head of the linked list.

  - Move the fast pointer k nodes ahead of the slow pointer. This is done by iterating over the list with the fast pointer.

  - After the fast pointer has been moved k nodes ahead, iterate both the slow and fast pointers simultaneously until the fast pointer reaches the end of the list. This ensures that the slow pointer will be at the kth node from the end when the fast pointer reaches the end.

  - Return the value of the node pointed to by the slow pointer, which represents the kth node from the end.

- Why:
  This approach is efficient because it requires only one pass through the linked list, with both the slow and fast pointers moving at different speeds. The fast pointer moves k nodes ahead, and then both pointers move together until the end of the list is reached. This ensures that the slow pointer is always positioned at the kth node from the end when the fast pointer reaches the end.

- Big O Time Complexity:
  The time complexity of this approach is O(n), where n is the number of nodes in the linked list. This is because we iterate through the list once, and the number of iterations is proportional to the length of the list.

- Big O Space Complexity:
  The space complexity is O(1) because we use a constant amount of extra space for the two pointers regardless of the size of thc e linked list.

## Solution
[Code](code-challenges/kthFromEnd.js)
![Output](kthFromEndOutput.png)
