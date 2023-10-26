# Sort Comparison

  Sorting an array of Movie objects based on two criteria: year and title.

## Pseudocode

- Sorting movies by year
  - Look at two movies.
  - If the first movie is newer, it comes first.
  - If the second movie is newer, it comes first.
- Sorting movies by title
  - Look at two movies.
  - Remove any leading "A", "An", or "The" from their titles.
  - Compare the cleaned-up titles.
  - The one that comes first alphabetically goes first in the list.

## Approach & Efficiency

- Approach
  - Sorting by Year: The function sortByYear sorts movies in descending order of their year using JavaScript's native .sort().
  - Sorting by Title: The function sortByTitle sorts movies in ascending alphabetical order of their title, again using .sort().
  - Duplicate Checker: The test Alerts for duplicate movies defines a function duplicateChecker to detect duplicates based on titles.

- Why
  - Year: Movies are sorted by release year to perhaps focus on newer productions.
  - Title: Alphabetical sorting aids in easier identification.
  - Duplicate Checker: Ensures data integrity by identifying duplicates.

- Big O Complexity:
  Time Complexity:
  - Both sortByYear and sortByTitle have a time complexity of O(n log n).
  - When the array is nearly sorted, the best-case time complexity is O(n), as the algorithm makes fewer comparisons and shifts.

  Space Complexity:
  - O(n) for storing the sorted movies.

## Solution

[Code](sortMovie.js)
![Testing](sortMovie.test.js)
