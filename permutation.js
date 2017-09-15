function permutation(str1, str2, str3){
  let answer = true;
  if(str1, str2, str3){
    let temp = str1.toUpperCase().split('').sort()
    let temp2 = str2.toUpperCase().split('').sort()
    let temp3 = str3.toUpperCase().split('').sort()

    let i = temp.length;
    if(i != temp2.length || i != temp3.length){
      return false
    }while (i--){
      if(temp[i] != temp2[i] || temp[i] != temp3[i]){
        return false
      }
    }

    return answer;
  }
  return answer = "Please enter three strings to process"
}
console.log(permutation("erica", "recai", "recia"));
