// Given a numerical representation of a calendar date, return a string with the written version of that date
// 01/12 => 'Today is the twelfth of January'

const MONTH = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const ONES = [
  'day',
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth'
]

const TEENS = [
  '',
  'eleventh',
  'twelfth',
  'thirteenth',
  'fourteenth',
  'fifteenth',
  'sixteenth',
  'seventeenth',
  'eighteenth',
  'nineteeth'
]

const TWENTY = [
  'twentieth',
  'twenty'
]

const THIRTY = [
  'thirtieth',
  'thirty'
]

function sayDate(date){
  const [m,d] = date.split('/').map(n => parseInt(n))
  if(m < 13 && d < 32){
  const month = MONTH[m]
  let day = ''
  if(d <= 10 ){
    day = ONES[d]
  }else if (d < 20){
    day = TEENS[d % 10]
  }else if (d < 30){
    day = `${TWENTY[d % 20]} ${ONES[d % 20]}`
  }else if (d < 32){
    day = `${THIRTY[d % 30]} ${ONES[d % 30]}`
  }
  console.log(month);
  return ["Today is the", day, "of", month].join(' ');
}else{
  return ["Date is out of bounds!"].join();
}
}
console.log(sayDate('10/31'))
