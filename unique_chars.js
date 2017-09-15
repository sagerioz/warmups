// Return a boolean for whether or not a string has all unique characters.
function uniqueChars(string){
  let obj = {}
  let answer = true;
  let arr = string.split('')
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
  let letter = arr[i];
    if(obj[letter]){
      return answer = false;
    }
    else{
      obj[letter] = 1;
    }
}
return answer;
}
console.log(uniqueChars("caaat"));
