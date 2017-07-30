// which code is more efficient, and why?

// Version 1:

var message = "Hello";
var isOn = true;

if (condition == true){
	message = "Hi";
	isOn = false;
}

// Version 2:

var message;
var isOn;

if (condition == true){
	message = "Hi";
	isOn = false;
}

else{
	message = "Hello";
	isOn = true;
}

// Version 3:

var message = condition ? “Hi” : “Hello”;
var isOn = !condition;




// Some thoughts:

// I code both styles not for efficiency but based on the behavior of the application.
//
// If condition is false more often than true, I code the first style to keep it readable and basically say “We are setting the default state unless an exception occurs”.
//
// If condition can be equally true or false, I code the second style since neither outcome is preferred.
//
// Efficiency doesn’t factor into it; implementation communication and readability does. Couldn’t give a rat’s ass about efficiency with an if-then-else and variable assignment block unless it is being executed millions of times in short order. But by then measurement will be leading me to a preferred solution.
//
// Do not code for perceived efficiency. Most code does not require.



// Is this a hot path?
//
// You should generally put the common case first and leave the else for rare events.
//
// But if this isn’t a hot path then I suspect a good compiler would generate mostly equivalent code for both cases.
//
// Micro optimizing without metrics that prove a measurable change just makes code maintenance harder.


//
// There's probably no difference in performance, and if there is it's so marginal as to be unimportant.
//
// Also, this kind of question smacks of premature optimization which is a major fault.
