function classicError(arr){
  for (var i = 0; i < 8; i++) {
    setTimeout(function(){
      console.log("The index is " + i);
  }, 1000)
  console.log("The index is " + i);
}
}
console.log(classicError([1,2,3,4]));
