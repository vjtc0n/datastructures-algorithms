const numbers = [99, 44, 6, 2, 1, 3, 4, 5, 65, 87, 556, 4, 0];

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }

  // split array into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  console.log(result);
  console.log(leftIndex);
  console.log(left.slice(leftIndex));
  console.log(right.slice(rightIndex));
  console.log('\n\n\n');

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

const sortedList = mergeSort(numbers);

console.log(sortedList);
