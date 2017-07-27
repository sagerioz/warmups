function dupe(arr){
    let temp = {}
    for(let i = 0; i < arr.length; i++){
      if(!temp[arr[i]]){
        temp[arr[i]] = i
      }else{
          return arr[i]
        }
      }
    }

console.log(dupe([1,2,3,4,4,5,6,7,8,9]));
