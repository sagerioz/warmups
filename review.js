// concat integers to form highest number, and lowest number possible
let input = [94,6,2]
function minToMax(arr){
  let stringArr = arr.map((el) => {
    return el.toString()
  })
  return {
    min: stringArr.sort((a,b) => {
      if((a+b) > (b+a)) {
        return 1;
      }else if ((a+b) < (b+a)){
        return -1;
      }else{
        return 0;
      }
    }).join('')
    ,
    max: stringArr.reverse().join('')
  }
}
let answer = minToMax(input)
console.log(answer.min, answer.max);
