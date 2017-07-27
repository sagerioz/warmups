// factorial
function factorial(n) {
  // your code here:
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }

};

console.log(factorial(3));


// fibonacci-sequence-algorithm-in-javascript

function fib(n){
  if(n === 0){ return 0}
  if(n=== 1){ return 1}
  return fib(n-1) + fib(n-2)
}

console.log(fib(10));

function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

console.log(fibonacci(6));
