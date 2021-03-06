// Original problem:
// https://www.reddit.com/r/dailyprogrammer/comments/69y21t/20170508_challenge_314_easy_concatenated_integers/
let arr = [2, 5, 88, 342]

function minMax(input) {
  // let newArr = arr.map((num) => {
  //   return num.toString()
  // })
      return {



    min: arr.sort((a, b) => {
        if ((a + b) > (b + a)) {
          return 1;
        } else if ((a + b) < (b + a)) {
          return -1;
        } else {
          return 0;
        }
        // the above is the longer way of writing:
        // return (a + b) - (b + a)
      })
      .join(','),
    // .reduce((string, value) => {
    //   console.log(string, value);
    //   return string + value
    //}),

    max: arr
      .reverse().join(',')
    // .reduce((string, value) => {
    //   return string + value
    // })
  }
}
let results = minMax(arr)
console.log(results.min);
console.log(results.max);
