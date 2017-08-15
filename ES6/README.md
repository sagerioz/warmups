#ES6 Notes
Transpiler: Use babeljs.io to write next-gen Javascript, and get browser compatible code out!

Examples:
ES6:

[1,2,3].map( n => n ** 2);

becomes:

[1,2,3].map(n, function(n){
  return Math.pow(n, 2)
  });
----------------------------------
ES6:

var [a,,b] = [1,2,3];

becomes:

var ref = [1,2,3],
a = ref[0]
b = ref[2]
----------------------------------
ES6:

var name = "Little BoPeep"
var animal = "sheep"
`${name} has lost her ${animal}`

becomes:

 name + ' has lost her ' + animal

---------------------------------
const x = [1,2,3]
foo([..x]);

becomes:

foo[].concat(x);
---------------------------------
ES6:

var obj = {
  name,
  age,
  method(){
    return true;
  }
};

becomes:

var obj = {
  name: "Hellen",
  age: 12,
  method: function method(){
    return true;
  }
};
----------------------------------
## Destructuring

Useful for very large objects or objects with very long names and you just want to quickly snatch a value out of it...

var foo = {
  bar: 1,
  baz: 2
};

var bar = foo.bar
var foo = foo.baz

becomes in ES6:

var { bar, baz } = foo;
// now you have two variables available on your page

var tenses = ["first", "second", "third"];
var [ firstPerson, secondPerson ] = tenses

example of usage:

Promise.all([promise1, promise2]).then(function([results1, results2]) {
  // your responses are automatically assigned to the variables assigned within the arguments passed to the .then()
  })
--------------------------------------
var name = "Will";
var age = 34;

build an object easily:

some.method({ name, age })

## Destructuring arguments
Really useful because you can pass in an object as an argument, and then ES6 destructures the arguments. You can destructure with default values. Also, order of arguments doesn't matter anymore.

before:
```
function calcBmi(weight, height, max, callback){
  var bmi = weight / Math.pow(height, 2);
  if(bmi > max){
    console.log("you are overweight")
  }
  if(callback){
    callback(bmi)
  }
}
calcBmi(weight, height);
calcBmi(weight, height, null, function(){});

```

becomes in ES6::

```
function calcBmi({ weight, height, max = 25, callback }){
  var bmi = weight / Math.pow(height, 2);
}
calcBmi({ weight, height, max: 25 });
calcBmi({ weight, height, callback: function(){} });

```

##Block Scoping with keyword 'let'

Function scoping:
var a = 1;
function(){
  var b = 2;
}
console.log(b);
// value of 'b' is not available in the global scope.

However, in a block statement, 'var' allows the variable to get hoisted:

if(true){
  var b = 2;
}
console.log(b); // var 'b' gets hoisted and is available here

Block scoping allows the use of 'let'; defines something within a block. Only used within the block and then gets destroyed.

Used in two main places:
1. If statements, If-Else statements
2. while statements

## Const

Values created as a 'const' cannot be changed. However, you can mutate objects created with const:

if(true){
  const bar = { a: 1};
  bar.a = 2;
}
console.log(bar); // 2

Best practice:
Const should be used for almost every single value as a default. If you realize that a value is going to change, then change the keyword to 'let'. This helps you as a programmer avoid allowing values to mutate.

##Classes
Finally, Javascript has classes.

Before, you could create classes in this manner, using a constructor:

function Parent() {
  //const
}
Parent.prototype.foo = function(){};
Parent.prototype.bar = function(){};

Now in ES6, there are classes!

class Parent {
  // es7 allows for static properties, ie:

  age = 34;

  constructor(){

  }
  static.foo(){

  }
  bar(){

  }
}

var parent = new Parent();
Parent.foo();

class Child extends Parent {
  constructor() {
    super()
  }

  baz(){

  }
}
var child = new Child();
child.bar(); // However, child.foo() cannot work (static)

##Fat Arrow Functions
var foo = function(a,b){
  return a + b;
};

becomes in ES6:

var foo = (a,b) => {
  return a + b;
}

This new syntax really helps when functions are being used as a callback, allowing you to use one-liners, and use 'implicit returns' and drop the return and curly brackets, ie:


do.something((a,b) => a + b)

[0,1,2].map(val => val++); // [1,2,3];

NOTE: Fat Arrow functions automatically binds context to 'this' (known as lexical context binding).

Before ES6:
var module = {
  age: 30,
  foo: function(){
    setTimeout(function(){
      console.log(this.age);  // 'this' would have gotten lost // without binding
      }.bind(this), 100);
  }
};

module.foo();

*Arrow Functions automatically bind 'this'*

Can be tricky using jQuery. The following use of => would be problematic, as you would be overriding the value of 'this', which you need in the case of JQuery's value of 'this', or a DOM event listener's value:

$("something").with().jQuery(() => {
  $(this)
  });

Instead, stick to function() syntax for JQuery.

##Modules (NodeJS, etc)

// in your module:
module.exports.foo = function(){
};
module.exports.bar = function(){
};

Before ES6:
// another file, import with:
var myModule = require("myModule");
var foo = myModule.foo;

becomes:

export default {

};
// another file, import with (at the top of a file, not the bottom):

import myModule from "myModule";

// or destructure, import just what you need:

import { each, omit } from "lodash";

##async functions

Basically a generator function, that returns a promise that can be used by a .then(): 

async function() {
  // before ES6, keyword 'yeild' was used in the place of 'await'.
  var friend = await $.get("http://something.com/friends")
};
