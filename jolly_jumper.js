// Jolly Jumper
// Return true or false

function isJollyJumper(numsArr){
  const set = [];
  const n = numsArr.length;
  for (var i = 1; i <= n-1; i++) {
    set.push(i)
  }
for (var i = 0; i < numsArr.length - 1 ; i++) {
  const a = numsArr[i];
  const b = numsArr[i + 1];
  const diff = Math.abs(a-b);
  console.log("DIFF",diff);
  if(set.indexOf(diff) !== -1){
    set.splice(set.indexOf(diff), 1)
  }
}

  return set.length === 0;

}

console.log(isJollyJumper([1,4,2,3]));
