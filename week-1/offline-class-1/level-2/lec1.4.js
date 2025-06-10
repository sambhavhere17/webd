//function
function findsum(n) {
  let ans = 0;

  //loop
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  console.log(ans);
}

//calling of funciton

console.log(findsum(50));

//callback funciton meaning is calling the other funciton inside a funcion

function square(n) {
  //function
  return n * n;
}

function cube(n) {
  return n * n * n; //fuction
}

function sumofSquare(a, b) {
  let sum = square(a) + square(b); // call back function
  return sum;
}
function sumofCube(a, b, c) {
  let sum = cube(a) + cube(b) + cube(c);
  return sum;
}

console.log(sumofSquare(2, 2)); //fuction calling
console.log(sumofCube(2, 2, 2)); //  function calling

// other way to write the code

function sumofSomthing(a, b, c, fn) {
  let sum = fn(a) + fn(b) + fn(c);
  return sum;
}
console.log(sumofSomthing(2, 2, 2, cube));
console.log(sumofSomthing(2, 2, 2, square));

//anourmous function we will give a whole function as in argument in other fuction

let ans = sumofSomthing(2, 2, 1, function square(n) {
  //function
  return n * n;
});

console.log(ans);
