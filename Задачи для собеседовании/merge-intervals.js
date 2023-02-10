let input1 = [[1,3],[2,6],[8,10],[15,18]];
let input2 = [[1, 4], [4, 5]];

function merge(inter) {
  if (inter.length < 2) {
    return inter;
  }
  inter.sort((a, b) => a[0] - b[0]);

  let res = [inter[0]];

for (const interval of inter) {
  let recent = res[res.length - 1]

  if (recent[1] >= interval[0]) {
    recent[1] = Math.max(recent[1], interval[1])
  }else{
    res.push(interval)
  }
}
  return res;
}

console.log(merge(input1));
console.log(merge(input2));
// --------------------------------------------------------
let inputOne = [[1, 3], [3, 6], [8, 10], [10, 18],[19,25],[35,48],[52,120],[120,150]];
let inputTwo = [[1, 4], [4, 5]];

function merge2(intervals) {

  if (intervals.length < 2) {
    return intervals
  }

  intervals.sort((a, b) => a[0] - b[0])
  let res = [intervals[0]];
  
  for (const interval of intervals) {
    console.log("res--",res);
    let count = res[res.length - 1]
    console.log("interval[0]--", interval[0]);
    
    if (count[1] >= interval[0]) {
      count[1] = Math.max(count[1], interval[1]);
      console.log("count[1]--",count[1]);
    } else {
      res.push(interval)
    }
  }
  return res;
}

console.log(merge2(inputOne));
console.log(merge2(inputTwo));