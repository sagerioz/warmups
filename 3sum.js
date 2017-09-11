// find three numbers in an array that equal zero when summed
function threeSum(array){
  let results = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = (i+1); j < array.length; j++) {
      for (var k = (j +1); k < array.length; k++) {
        console.log(array[i]+array[j]+ array[k]);
        if(array[i] + array[j] + array[k] === 0){
          results.push(array[i])
          results.push(array[j])
          results.push(array[k])
        }

  }
}
}
  return results;
}
console.log(threeSum([1, -10, 5, 5, 2, 4]))
