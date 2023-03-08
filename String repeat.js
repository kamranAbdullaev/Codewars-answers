// Метод 1-----------

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// Метод 2--------

// function repeatStr(n, s) {
//   return Array(n).fill(s).join('');
// }

// Метод 3--------

function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++)
    str += s;
  return str;
}

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));
