function dupe(arr){
    let temp = {}
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      if(!temp[arr[i]]){
        temp[arr[i]] = i
      }else{
          //return arr[i]
          newArr.push(arr[i])
        }
      }
      return newArr;
    }

console.log(dupe([1,2,3,4,4,5,6,7,8,1,2,3,9]));
