function counting(char, str){
    let temp = 0;

    for (var i = 0; i < str.length; i++) {
      if(str[i]===char){
        temp += 1
      }
    }

    return temp;
}
console.log('s', 'strings');
