function tagSystem(tape){
  let steps = [];
  const rules = {
    "a": "bc",
    "b": "a",
    "c": "aaa"
  };

  while(tape.length >= 2){
    steps.push(tape)
    tape = tape.substring(2) + rules[tape[0]];
}
steps.push(tape)
return steps;
}
console.log(tagSystem('aaa'));
