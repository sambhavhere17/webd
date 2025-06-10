//Async functions vs sync functions
function greet() {
  let ans = console.log("hello");
  return ans;
}

setTimeout(greet, 1000 * 2);

//this is will run after some time till then the next code start runing

console.log("hello world");

//filesystem module
const fs = require("fs");
function kiratsreadfile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
  });
}

//callback fuction to call
function ondone(data) {
  console.log(data);
}

//take very long , longer than the file read
console.log("hi there02");
let a = 0;
for (let i = 0; i < 1000000000; i++) {
  a++;
}

console.log("hi there");

//promises
