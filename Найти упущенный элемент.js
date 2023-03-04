// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

//   find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// The first array will always have at least one element.

// Сылка на катту: https://www.codewars.com/kata/find-the-missing-element-between-two-arrays/train/javascript


// Решение 1

function findMissing(arr1, arr2) {
  let index;
  for (let i = 0; i < arr1.length; i++) {
    index = arr2.indexOf(arr1[i])
    if (index > -1) {
      arr2.splice(index, 1);
      console.log(arr1, arr2);
    } else {
      console.log(arr1[i]);
      return arr1[i];
    }
  }
}
findMissing([1, 2, 3], [1, 3]);
findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]);
findMissing([7], []);
findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]);
findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]);