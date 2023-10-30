# Hash Tables

  Create a Hashtable in JavaScript, adhering to the specified interface and testing requirements.

## Pseudocode

- constructor: Create an array.
- hash: Simplified to key length mod array size.
- set: Puts key-value pair in array.
- get: Fetches value for a key.
- has: Checks if key exists.
- keys: Returns all keys.

## Approach & Efficiency

- Approach
  - Initialize a fixed-size array and a simple hash function to map keys to array indices.
  - Use separate chaining to manage collisions by storing key-value pairs in sub-arrays within each "bucket."
  - Implement set, get, has, and keys methods for CRUD operations.

- Why
  - The code uses JavaScript's native array and object structures, avoiding any complex data types or dependencies.

- Big O Complexity:
  Time Complexity:
  - hash: O(1)
  - set: O(1) average, O(n) worst-case (collisions)
  - get: O(1) average, O(n) worst-case (collisions)
  - has: O(1) average, O(n) worst-case (collisions)
  - keys: O(n)

  Space Complexity:
  - Hashtable: O(n)
  - Each method: O(1)

## Solution

[Code](hashtable.js)
![Testing](hashtable.test.js)
