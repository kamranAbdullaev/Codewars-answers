
/* 
Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

For example, the following call:

getRectangleString(3, 3);
Should return the following string:

***
* *
***
End each line of the string (including the last one) with a carriage return-line feed combination.

Note: You may assume that width and height will always be greater than zero.

*/



// Сылка на катту: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
//Решение 1:
function getRectangleString(width, height) {
  const rn = '\r\n',
        tb = '*'.repeat(width) + rn; //repeat - повторяет сколько указанно в скобки!
  const center = (width > 1) ? ('*' + ' '.repeat(width - 2) + '*' + rn).repeat(height - 2) : ""; //repeat -  поторяет указанное количество раз

  return height > 1 ? (tb + center + tb) : tb.repeat(height)
}

console.log(getRectangleString(15, 6));
console.log(getRectangleString(5, 5));
console.log(getRectangleString(10, 20));

