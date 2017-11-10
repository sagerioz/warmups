let myArr = ["red", "orange", "yellow"]
let newArr = ["green", "blue", "purple"]
let arr3 = [1,2,3]
let arr4 = ["fizz", "buzz", "fizzbuzz"]

function testSpread(x, y, z){
for (var i = 100; i >= 0; i--) {
   i % 3 === 0 && i % 5 === 0 ? console.log(z) : i % 3 === 0 ? console.log(x) : i % 5 === 0 ? console.log(y) : console.log(i);
}
}
console.log(testSpread(...arr4));
