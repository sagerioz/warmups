// How many times do the words in the second array appear in the string?
let blurb = "Pumpkin bread pudding comes together really easily, and because you have that creaminess already coming from the pumpkin to add to the custard, you don’t need to add as much milk or eggs as you would in a regular bread pudding. I’m not going to call this dessert healthy, but it’s healthy-er? Healthy-ish? Let’s just go with the fact it’s delicious."
blurb = blurb.replace(/[.!,&?'"-]/g, '');
let text = blurb.split(' ');

//let wordsToCount = ["bread", "you", "eggs", "but"];
function test(word, textToSearch){
  let obj = {}
  let answer = {}
  for (var i = 0; i < textToSearch.length; i++) {

      let itemToSearch = textToSearch[i]

      if(itemToSearch === word){
        if(obj[word]){
          obj[word] ++;
        }else{
          obj[word] = 1;
        }

    }
  }
  return answer = {
    count: function(word) {
      return obj[word] || "No results";
    }
  }
}
let answer = test("pudding", text);
console.log(answer.count("pudding"));
