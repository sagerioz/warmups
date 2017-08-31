// Your program should emit the word given as an argument as a series of
// elements by
// name with proper capitalization from the table found here:
// https://www.reddit.com/r/dailyprogrammer/comments/5seexn/20170206_challenge_
// 302_easy_spelling_with/.
// Example:
// GeNiUS (germanium nickel uranium sulfur)

const ELEMENTS = {
  "B": { name: "Boron", "weight" : 10.81},
  "Ba": { name: "Barium", "weight" : 138},
  "Ac": { name: "Actimium", "weight" : 227},
  "O": { name: "Oxygen", "weight" : 15.9},
  "Co": { name: "Cobalt", "weight" : 58.9},
  "N": { name: "Nitrogen", "weight" : 14},
  "Ba": { name: "Carbon", "weight" : 12}
}

function spellWithChemistry(originalWord){
  const results = [];

  function getSymbol(word, numChars){
    return word.substring(0, numChars)[0].toUpperCase() +
    word.substring(0, numChars).substring(1);
  }

 console.log(getSymbol('bacon', 1));

// travering the tree recursively:
  function helper(word, symbols, elements, weight) {
      if(word.length === 0){
        return results.push({
          output: `${symbols} (${elements.join(', ')})`,
          weight: weight.toFixed(2)
        })
      }else{
        [1,2]
            .filter((numChars) => word.length - numChars >= 0)
            .map((numChars) =>
              getSymbol(word, numChars)
            )
            .filter((symbol) => ELEMENTS[symbol])
            .forEach((symbol) =>
              helper(
                word.substring(symbol.length),
                symbols + symbol,
                elements.concat(ELEMENTS[symbol].name),
                weight + ELEMENTS[symbol].weight
              )
      )
    }
  }
 helper(originalWord, "", [], 0);
  results.sort((a,b) =>
    b.weight - a.weight
  )
  return results[0];
}
console.log(spellWithChemistry("bacon"));
