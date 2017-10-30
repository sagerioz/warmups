// Description:

// Welcome. In this warmup you are required to, given a
// string, replace every letter with its position
// in the alphabet. If anything in the text isn't a letter,
// ignore it and don't return it. a being 1, b being 2,
// etc. The upper and lower case versions of a character
// should return the same code
// As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20
// 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

// This function will come in handy in your solution. It returns an integer for a character
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

let myStr = 'It\'s (a) beautiful DAY!!! '
function alphabetPosition(text) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let myText = text.replace(/[()&!,. ]/g, '*').toLowerCase().split('');
  myText = myText.filter(letter => {
    if(letter !== '*'){
      return letter;
    }
  })
  let answer = [];
  console.log(myText);
  for (var i = 0; i < myText.length; i++) {
      for (var j = 0; j < alphabet.length; j++) {
        let letter = myText[i];
        let position = alphabet[j];
        if(letter === position && i === myText.length - 1){
          answer.push(`${j + 1}`)
        }else if(letter === position && i < myText.length){
          answer.push(`${j + 1}, `)
        }
      }
  }
  return answer.join('')
}
console.log(alphabetPosition(myStr));
