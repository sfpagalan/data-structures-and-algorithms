function insert(arr, value) {
  let i = 0;
  while (value > arr[i]) {
      i++;
  }
  while (i < arr.length) {
      const temp = arr[i];
      arr[i] = value;
      value = temp;
      i++;
  }
  arr.push(value);
}

function insertionSort(arr) {
  const sortedArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
      insert(sortedArr, arr[i]);
  }
  return sortedArr;
}

module.exports = { insertionSort };
