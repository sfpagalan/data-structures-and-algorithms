const { expect } = require('chai');
const { insertionSort } = require('./selectionSort.js');


describe('Insertion Sort', function() {
  it('should correctly sort an array', function() {
      const unsortedArray = [8, 4, 23, 42, 16, 15];
      const sortedArray = insertionSort(unsortedArray);
      expect(sortedArray).to.deep.equal([4, 8, 15, 16, 23, 42]);
  });
  it('should correctly sort a reverse-sorted array', function() {
    const reverseSortedArray = [20, 18, 12, 8, 5, -2];
    const sortedArray = insertionSort(reverseSortedArray);
    expect(sortedArray).to.deep.equal([-2, 5, 8, 12, 18, 20]);
  });

  it('should correctly sort an array with few unique values', function() {
      const fewUniquesArray = [5, 12, 7, 5, 5, 7];
      const sortedArray = insertionSort(fewUniquesArray);
      expect(sortedArray).to.deep.equal([5, 5, 5, 7, 7, 12]);
  });

  it('should correctly sort a nearly-sorted array', function() {
      const nearlySortedArray = [2, 3, 5, 7, 13, 11];
      const sortedArray = insertionSort(nearlySortedArray);
      expect(sortedArray).to.deep.equal([2, 3, 5, 7, 11, 13]);
  });
});
