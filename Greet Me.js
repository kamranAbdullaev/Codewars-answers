let greet = function (name) {
  let name2 = name.toLowerCase();
  return `Hello ${name2[0].toUpperCase() + name2.slice(1)}!`
}

console.log(greet('riley'));