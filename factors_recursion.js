
function factor(num){
  let half = Math.floor(num / 2),
      i,
      j,
      k,
      tempArr = [],
      str = '1',
      str2 = [];

  num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

  for (i; i <= half; i += j) {
     num % i === 0 ? str += ', ' + i : false;
     }

  str += ', ' + num;
  console.log("ANSWER", str);
  tempArr = str.split(',').map((n) => parseInt(n))

    function pair(){
      for (var k = 0; k < tempArr.length; k++) {
      str2.push(`${tempArr[0]} * ${tempArr[tempArr.length -1]} = ${num}`)
      tempArr.shift();
      tempArr.pop();
      console.log(tempArr, str2[str2.length - 1]);
      pair();
  }
  }
  pair();
  return str;
}
console.log(factor(24));
