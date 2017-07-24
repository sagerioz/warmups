// Create a function isAlt() that accepts a string as an argument
// and validates whether the vowels (a, e, i, o, u) and consonants
// are in alternate order.
function isAlt(str){
  let a = str.split('');
  let newArr = [];
  let result = true;
  if(str){
  a.forEach((el) => {
        if(el === 'a'|| el === 'e' || el === 'i'|| el === 'o' || el === 'u'){
        newArr.push(1)
        }else{
        newArr.push(0)
        }
      });
    }

    for (let i = 0; i < newArr.length; i++) {
     if(newArr[i] === newArr[i+1]){
       result = false;
     }
   }
  return result;
}

console.log(isAlt("azazazazaza"));


// var a = ['a', 'b', 'c'];
//
// a.forEach(function(element) {
//     console.log(element);
// });

// a
// b
// c
