function trim(str, size) {
  if (size > 3) {
    if (str.length <= size) {
      return str;
    }
    else if (str.length > size) {
      return str.slice(0, size - 3) + "..."
    }
  }
  else if (size <= 3) {
    if (str.length <= size) {
      return str;
    }
    else if (str.length > size) {
      return str.slice(0, size) + "..."
    }

  }
}

function trim(str, size) {
  if (str.length <= size) {
    return str;
  }

  const real = str.slice(0, size);

  return `${real.length < 4 ? real : real.slice(0, -3)}...`;
}


console.log(
  trim("Creating kata is fun", 14),
  trim("He", 1),
  trim("BTS ckDr wZGGy", 2),
  trim("oiE uP NiDI lDQyJ", 17)

);