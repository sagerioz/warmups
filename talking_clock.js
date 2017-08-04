// Given a digital representation of the time, print out a string
// which translate the time to a written or spoken version of that time.
// 00:00 => "It's twelve am"
// 01:30 => 'It's one thirty am"
// 02:01 => "It's two oh one pm"

function sayItWithArr(str){
  let tempArr = str.split(':')
  console.log('ARRAY ',tempArr);
  let answer = 'The time is ';
  let bigArr = ['twelve','one', 'two', 'three']

  for (let i = 0; i < tempArr.length; i ++){
      let timeNum = parseInt(tempArr[i])
      console.log(bigArr[i])
      if(timeNum){
      answer += bigArr[timeNum] + ' '
    }
  }
  return answer;
}
console.log(sayItWithArr('02:03'));

function sayItWithObj(str){
  let tempArr = str.split(':')
  console.log('ARRAY ',tempArr);
  let answer = 'The time is ';
  let dict = {
    00:'twelve',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve'
  };

  console.log(Object.keys(dict))
  for (let i=0; i<tempArr.length; i++){
    let item = tempArr[i];
    item = parseInt(item);
    console.log(item)

    if(item === dict[item]){
      answer += dict[item]
      console.log(answer);
    }
  }
  return answer;
}
console.log(sayIt('02:03'));
