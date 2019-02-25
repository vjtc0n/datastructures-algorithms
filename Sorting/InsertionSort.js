const numbers = [99, 44, 6, 2, 1, 3, 4, 5, 65, 87, 556, 4, 0];

const insertionSort = (array) => {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 0; j < i; j++) {
        if ((array[i] > array[j - 1] && array[i] < array[j]) || array[i] === array[j - 1]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
};

const sortedArray = insertionSort(numbers);
console.log(sortedArray);
