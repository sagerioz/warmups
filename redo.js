// How many times do the words in the second array appear in the string?
let blurb = "Pumpkin bread pudding comes together really easily, and because you have that creaminess already coming from the pumpkin to add to the custard, you don’t need to add as much milk or eggs as you would in a regular bread pudding. I’m not going to call this dessert healthy, but it’s healthy-er? Healthy-ish? Let’s just go with the fact it’s delicious."
blurb = blurb.replace(/[.!,&?'"-]/g, '');
let text = blurb.split(' ');

//let wordsToCount = ["bread", "you", "eggs", "but"];
function test(word, textToSearch){
  let answer = textToSearch.filter(function(el){
    return el === word
  })
  return answer.length;
}
console.log(test("you", text));



function greet(whattosay){
  return function(name){
    return `${whattosay}${name}!`
  }
}
console.log(greet("Hello, ")("you"));
