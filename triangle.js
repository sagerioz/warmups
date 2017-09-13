// Simple Triangle: Write a function that takes a single number as an input and returns that many lines. On the first line there is one ‘#’ character. On the second there are two. And so on. This will create a nice triangle.

function triangle(num){
let j = 0;
while (j <= 5) {
  let answerPlus = ''
  let answerMinus = ''
  for (var i = 0; i < num; i++) {
    answerPlus += '#'
    console.log(answerPlus);
    }
    for (var i = num; i >= 0; i--) {
      answerMinus = answerPlus
      let result = answerMinus.slice(0, i)
      console.log(result);
    }
    j++;
}

}
console.log(triangle(22));
