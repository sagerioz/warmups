let myStr = 'hi, hi. hi, hi. yo? yo! yo yo';

let redo = text => {
text = text.replace(/[,.?!]/g, '');

let words = text.split(' ');
let answer = {};
for(word of words){
  answer[word] = answer[word] || 0;
  answer[word] += 1;
}
return {
  count: function(word){
    return `Your entry of ${word} appears ${answer[word]} times.`
  }
}
}
let myanswer = redo(myStr);
console.log(myanswer);
console.log(myanswer.count('yo'));
