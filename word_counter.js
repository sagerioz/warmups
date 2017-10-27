let myStr = "hi hi hi , go, go, hello";
function wordCounter(text) {
// sanitize

text = text.replace(/[,.]/g, '');
// count

let result = {};

let words = text.split(' ');

for (let word of words) {
  result[word] = result[word] || 0 ; // this returns 0
  result[word] += 1
}
  console.log("result is...", result);

// return object with method

return {
  count: function(word) {
    return result[word] || 0
  }
  // this functions like a class
}
};
let answer = wordCounter(myStr);
console.log(answer.count("go"));
