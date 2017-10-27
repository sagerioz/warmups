function combine(array1, array2) {
let newArr = array2;
  for (var j = 0; j < array1.length; j++) {
    newArr.unshift(array1[j]);
  }
  return newArr;

};
console.log(combine([1,2,3], [3,4,5]));
