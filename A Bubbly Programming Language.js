/* 
Your goal is to make a stack based programming language with the following functions/tokens:

start - Marks the start of the program.
end - Marks the end of the program, and returns the top element in the stack.
push x - Pushes the integer x into the stack.
add - Adds together the top two elements on the stack.
sub - Subtracts the top-most element by the second top-most element on the stack.
mul - Multiplies the top two elements on the stack.
div - Divides (integer division) the top-most element by the second top-most element on the stack.

*/

// const start = undefined;
// const end = undefined;
// const push = undefined;
// const add = undefined;
// const sub = undefined;
// const mul = undefined;
// const div = undefined;

function start(fun) {
  const arr = [1, 2];
  return fun(arr);
}

function push(pushArr) {
  return function(count) {
    return function(fun) {
      return fun([...pushArr, count])
    }
  }
}

function add(addArr) {
  const sum = addArr.pop() + addArr.pop(); 
    return function (fun) {
      return fun([...addArr, sum])
    }
  }

function sub(subArr) {
  const res = subArr.pop() - subArr.pop();
  return function (fun) {
    return fun([...subArr, res])
  }
}

function div(divArr) {
  const res = ~~(divArr.pop() / divArr.pop());
  return function (fun) {
    return fun([...divArr, res])
  }
}

function mul(mulArr) {
  const res = mulArr.pop() * mulArr.pop();
  return function (fun) {
    return fun([...mulArr, res])
  }
}


function end(endArr) {
  return endArr.pop();
}

console.log((start)(push)(5)(push)(10)(add)(sub)(push)(5)(div)(end));