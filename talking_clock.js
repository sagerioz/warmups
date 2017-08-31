// Given a digital representation of the time, print out a string
// which translate the time to a written or spoken version of that time.
// 00:00 => "It's twelve am"
// 01:30 => 'It's one thirty am"
// 22:01 => "It's two oh one pm"

// capitalization of variable name indicates a global variable
const HOURS = [
  'twelve',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven'
]

const ONES = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]

const TEENS = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
]

const TENS = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty'
]

function sayIt(time){
  // ES6 feature:
  const [h,m] = time.split(':').map(n => parseInt(n))
  const hour = HOURS[ h % 12 ]
  let minute = ''
  if(m < 10){
    minute = `oh ${ONES[m]}`
  }else if (m < 20){
    minute = `${TEENS[m]}`
  }else{
    minute = `${TENS[m / 10]} ${ONES[m % 10]}`
  }
  const suffix = (h < 12) ? 'am' : 'pm'
  return ["It's", hour, minute, suffix].join(' ');
}
console.log(sayIt('13:01'));
