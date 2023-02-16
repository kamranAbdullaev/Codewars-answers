/* 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/

const reverseSeq = n => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i)
  }
  return arr;
};

console.log(reverseSeq(5));
console.log(reverseSeq(50));
console.log(reverseSeq(9));