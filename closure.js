// Typical closure examples are the following (using a function within a function):

function classicClosureExample(arr){
  for (var i = 0; i < 4; i++) {
    console.log(i);
    setTimeout(function(){
      console.log("The index inside the settimeout is " + i);
  }, 1000)
}
}
console.log(classicClosureExample([1,2,3,4]));

// Another example of a closure, even though it might not be as obvious:

var passed = 3;

var addTo = function(){
  var num = 2;
  return passed + num;
}
//console.log(addTo());

//console.dir(addTo()) in chrome developer tools will show the closure as 'passed = 3'

// Another example of closures giving unexpected behavior:

<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        console.log(btnNum);
        document.getElementById('btn-' + btnNum).onclick = function() {
            // tell her what she's won!
            console.log(prizes[btnNum]);
            alert(prizes[btnNum]);
        };
    }
</script>

// The Problem

// The anonymous function we're assigning to the buttons' onclicks has access to variables in the scope outside of it (this is called a closure ↴ ). In this case, it has access to btnNum.
//
// When a function accesses a variable outside its scope, it accesses that variable, not a frozen copy. So when the value held by the variable changes, the function gets that new value. By the time the user starts pressing buttons, our loop will have already completed and btnNum will be 3, so this is what each of our anonymous functions will get for btnNum!
//
// Why 3? The for loop will increment btnNum until the conditional in the middle is no longer met—that is, until it's not true that btnNum < prizes.length. So the code in the for loop won't run with btnNum = 3, but btnNum will be 3 when the loop is done.
//
// Why undefined? prizes has 3 elements, but they are at indices 0,1,2. Array indices start at 0, remember? (Write this down—forgetting this is an easy way to create an off-by-one error in a whiteboard interview.) In JavaScript, accessing a nonexistant index in an array returns undefined (Python throws an IndexError, but Ruby returns nil).
//
// The Solution
//
// We can solve this by wrapping our anonymous function in another anonymous function that takes btnNum as an argument. Like so:

<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        console.log(btnNum);
        document.getElementById('btn-' + btnNum).onclick = function(frozenButtonNum) {
            // tell her what she's won!
            console.log(prizes[btnNum]);
            alert(prizes[btnNum]);
        }(btnNum);
    }
</script>
