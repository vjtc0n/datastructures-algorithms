// Google Question

// Given an array = [2,5,1,2,3,5,2,4]
// should return 2
// Given = [2,1,1,2,3,5]
// should return 1
// Given = [2,3,4,5]
// should return undefined

function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if (!map[element]) {
      return element;
    } else {
      map[element] = i;
    }
  }
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 2, 4]));
