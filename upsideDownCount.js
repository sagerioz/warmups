let arr = [0,1,6,8,9];

function solve(x, y) {
let count = 0;
while(x < y ){
  let temp = x.toString().split('').map(n => parseInt(n));
  let answer = temp.filter(function(item, index, theOriginalArray){
    return item === 0 || item === 1 || item === 6 || item === 8 || item === 9;
  })
  answer.reverse();
console.log("=============ORIGINAL NUM", temp);
let flip = answer.map(function(item, index, theOriginalArray){
  if(item === 6){
        return item = 9
      }else if (item === 9 ){
        return item = 6
      }else{
        return item;
      }
  })
  console.log("FLIPPED", flip);
  if(temp.reverse().join() === flip.join()){
    count += 1;
  }
  console.log("T", temp, "A", answer, "#", count);

  x++;
}
return count;
};
console.log(solve(9110,9118));
