/*
global execution context in browser is windows object .
function execution context 
eval execution context 

JavaScript Execution Context

When JS runs code, it creates an Execution Context.

There are 3 types:

Global Execution Context (GEC)
Created first.
this refers to window (browser).
Runs top-level code.

Function Execution Context (FEC)
Created whenever a function is called.
Each function gets its own execution context.

Eval Execution Context (rarely used)

🔹 How JS Executes Code (2 Phases)
1️⃣ Memory Creation Phase (Hoisting Phase)

Variables → stored as undefined
Functions → stored completely in memory

Example:

console.log(a); // undefined
var a = 10;

sayHi(); // works
function sayHi() {
  console.log("Hi");
}

2️⃣ Execution Phase

Code runs line by line
Values get assigned  
Functions get executed

🔹 Call Stack (Very Important 🚀)

The Call Stack is a data structure that keeps track of function execution.

👉 It follows LIFO (Last In First Out)

Example:
function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello");
}

one();

Call Stack Flow:

Global() pushed

one() pushed

two() pushed

three() pushed

three() finishes → popped

two() finishes → popped

one() finishes → popped

🔹 Simple Diagram Representation
| three() |
| two()   |
| one()   |
| Global  |


After execution completes → Stack becomes empty.

🔹 Why Call Stack is Important?

Handles function execution order
Causes Stack Overflow if recursion is infinite
Works with Event Loop for async behavio





*/