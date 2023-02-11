const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 0, 2, 1, 1];
const input2 = [4, 2, 0, 3, 2, 5];

function trap(height) {
  let maxLeft = height[0],
      maxRight = height[height.length - 1];

  let left = 1,
      right = height.length - 2;

  let total = 0;

  while (left <= right) {
    if (maxLeft <= maxRight) {
      if (maxLeft - height[left] > 0) {
        total += maxLeft - height[left];
      }
      maxLeft = Math.max(maxLeft, height[left]);
      left += 1;
    }else{
      if (maxRight - height[right]) {
        total += maxRight - height[right];
      }
      maxRight = Math.max(maxRight, height[right])
      right -= 1;
    }
  }
  return total;
}
console.log(trap(input));
console.log(trap(input2));

