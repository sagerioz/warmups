/* Given two integers, which can be positive and negative,
find the sum of all the numbers between and including a and b,
and return the sum. If both numbers are equal return a or b.

Note! a and b are not ordered!

Example:
getSum(1, 0) == 1   // 1 + 0 = 1
getSum(1, 2) == 3   // 1 + 2 = 3
getSum(0, 1) == 1   // 0 + 1 = 1
getSum(1, 1) == 1   // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function getSum( a, b ) {
  let answer = 0;
  let temp = 0;
  if(a > b){
    temp = a;
    a = b;
    b = temp;
  }
if( a === b ){
  return a;
}else{
  for (var i = a; i <= b; i++) {
    console.log(answer);
    answer += i
  }
}
return answer;
} // END FUNCTION

console.log(getSum(5, 10));
