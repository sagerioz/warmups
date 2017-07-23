function majority(arr){
  let point = -1;
  let obj = {}
  for (let num of arr){
    console.log(num)
    if(obj[num]){
      obj[num] ++

    }else{
      obj[num] = 1
    }
    console.log(obj)
  }
  let ceil = Math.ceil(arr.length/2)
  for(let key in obj){
    //console.log(key)
    if(obj[key] >= ceil ){
      point = obj[key]
      //console.log(point)
    }
  }
  //console.log(obj)

  return point;
}
console.log(majority([1, 1, 2, 5, 5, 5, 5, 5, 5]));
