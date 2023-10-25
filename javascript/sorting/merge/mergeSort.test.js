const { expect } = require('chai');
const { mergeSort } = require('./mergeSort.js');

describe('Merge Sort', () => {
  it('should correctly sort an array', () => {
    const unsortedArray = [8, 4, 23, 42, 16, 15];
    const sortedArray = mergeSort(unsortedArray);
    console.log(sortedArray);
    expect(sortedArray).to.deep.equal([4, 8, 15, 16, 23, 42]);
  });

});
