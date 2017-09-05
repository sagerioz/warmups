// Original problem:
// https://www.reddit.com/r/dailyprogrammer/comments/69y21t/20170508_challenge_314_easy_concatenated_integers/
let arr = [7, 3, 45, 2]
function minMax(input){
let newArr = arr.map((num) => {
  return num.toString()
})
return {
  min : newArr.sort((a,b) => {
    if((a+b) > (b+a)) {
      return 1;
    }else if ((a+b) < (b+a)){
      return -1;
    }else{
      return 0;
    }
    // the above is the longer way of writing:
    // return (a + b) - (b + a)
  })
  .reduce((string, value) => {
    return string + value
  }),

  max : newArr
    .reverse()
    .reduce((string, value) => {
      return string + value
    })
}
}
let results = minMax(arr)
console.log(results.min);
console.log(results.max);
