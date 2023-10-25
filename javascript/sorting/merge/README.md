# Code 27: Merge Sort

## Approach & Efficiency

- Approach:
  - Divide: The main array is divided into two equal (or nearly equal) subarrays until each subarray contains only one element. This is achieved through recursive splitting.
  - Conquer: Once we have small subarrays with one element each, they are inherently sorted.
  - Merge: The sorted subarrays are then merged back together in a sorted manner. This is the crucial step where the algorithm combines two sorted arrays into a larger sorted array.

- Why:
  - Merge Sort divides the problem into smaller, manageable subproblems. Sorting smaller subarrays is easier than sorting the entire array.

- Big O Complexity:
  Time Complexity:
  - O(n log n)

  Space Complexity:
  - O(n)

## Solution
[Code](mergeSort.js)
![Testing](mergeSort.test.js)
