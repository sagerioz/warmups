var arr0 = [2, 3, 3, 1, 5, 2]
var arr1 = [1,2,3]
var arr2 = [1,0,0,1,2,3,3,2,4];
function firstDuplicate(a) {
  let answer = -1;
  let check = false;
  let tempArray = a.sort()
  console.log(tempArray)
  for(let i=0; i<tempArray.length; i++){
    if(tempArray[i] === tempArray[i + 1]){
      return tempArray[i]
      check = true
    }
  }
  if(check === false){
    return answer;
  }
}
console.log(firstDuplicate(arr0));


// Find an element in a string

var arr = ['hi', 'hello', 'hola'];
var str = 'i';

function contains(arr, str){
  var check = true;
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].indexOf(str));
    if (arr[i].indexOf(str) != -1){
      check = true;
}else{
  check = false;
}
return check;
}
};
console.log(contains(arr, str));
