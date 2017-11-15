// How many times do the words in the second array appear in the string?
let blurb = "Pumpkin bread pudding comes together really easily, and because you have that creaminess already coming from the pumpkin to add to the custard, you don’t need to add as much milk or eggs as you would in a regular bread pudding. I’m not going to call this dessert healthy, but it’s healthy-er? Healthy-ish? Let’s just go with the fact it’s delicious."
blurb = blurb.replace(/[.!,&?'"-]/g, '');
let text = blurb.split(' ');

let wordsToCount = ["bread", "you"];
function wordCountFunc(arr1, arr2){
let obj = {};
    for(let i = 0; i < arr1.length; i++){
		    for(let j = 0; j < arr2.length; j++){
          let bigArray = arr1[i];
          let word = arr2[j];
          if (arr1[i] === arr2[j]){
            if(obj[word]){
              obj[word] ++

            }else{
              obj[word] = 1
            }
          }
        }
    }

return results = {
  count: function(word){
    return `Your entry, "${word}", appears ${obj[word] || 0} times`
  }
}
}
let answer = wordCountFunc(text, wordsToCount);
console.log(answer.count("you"));


// another version:

function wordsCount(word, textToSearch){
  let count = textToSearch.filter(function(el){
    return el === word
  })
  return count.length;
}
console.log(wordsCount("you", text));
