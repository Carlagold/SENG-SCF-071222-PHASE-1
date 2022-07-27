// Write down the 7 primitive data types, with an example. I.E. `String:"example"
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
*Numeric type: Are positives and negatives floting -point numbers.

*String type: is used to represent textual data. In order for Strings to be reconized as such, the text elements needs to be subrounded by quotations marks.
  Booleans are often used in conditional testing.
*Boolean type: have typically two return values: true or false.
  **The Boolean() Function
  You can use the Boolean() function to find out if an expression (or a variable) is true:

Example
Boolean(10 > 9)

* Null type: represent an intentionally absent object.
 ex: typeof null;
//=> "object"

*Undefined type: an undefined return value means 'a value has not yet been assigned'.

* Symbols: are an alternative way to add properties to abjects.
  What are symbols used for in JavaScript?
Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.

ex: 
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false

*Array type: a list of values enclosed on square brackets. Every value has an index assigned.
ex:
const dogs = ["Byron", "Cubby", "Boo Radley", "Luca"];
typeof dogs;
//=> "object"

*BigInt type: can represent integers with arbitrary precision. Mainly use to store and operate large integers.
ex:
> const x = BigInt(Number.MAX_SAFE_INTEGER);
9007199254740991n
> x + 1n === x + 2n; // 9007199254740992n === 9007199254740993n
false





// Write out your definition for what a function and a callback is. Give examples 
// of a named function, arrow function, and an anonymous arrow function
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
  A function is a block of code disigned to perform a particular task when the function is invoked.
  WRITE OUT CODE EXAMPLES BELOW

*/ 
  function addNUmbers(num, num2) {
  return num + num2;
}
addNUmbers(1, 2);

//  Call Back function: is a function that it is passed as an argument into a different function. Usually a callback function runs after the function that took the callback as an argument or will run if a condition is met.
// *ex:

function greeting(callback) {
  const name = 'Please enter your name.';
  callback(name)
}
greeting();
//   function processUserInput(greeting) {
//   // var name = prompt('Please enter your name.');
//  greeting(name);
//  }
// }

// processUserInput(greeting);

function greeting(name) {
  return name;
}
greeting(function())


// Your Definition of an array, forEach, map, find, and filter. 
// (For the iterators please specify the return values of function & callback) 
// Give examples of each iterator. I.E.
/* An Array: is a list of values enclosed on square brackets. Every value has an index assigned.
  forEach returns undefined and the return of the callback does not matter.
  
*The forEach() method calls a function for each element within an array
arr.forEach((el) => console.log(el))
// ==============================================================================
  WRITE OUT YOUR DEFINITIONS HERE! 
/* The map() method creates a new array, and add the new elements resulting from the function returns value. The callback function needs to be called in order for the function return a value.
  WRITE OUT CODE EXAMPLES BELOW
*/ const arr = [1, 3, 5, 7];
function addElements(callback) {
  const callback =

}


  WRITE OUT YOUR DEFINITIONS HERE! 
  WRITE OUT CODE EXAMPLES BELOW
*/













// Your definition of an object. Write a complex object that describes a home. I.E
const home = { 
  address: { 
    streetName: "fake", 
    streetNum: 555, 
    zip: 10000
  }, 
  rooms: [...], 
  ...
}
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
  WRITE OUT CODE EXAMPLES BELOW
*/













// Write out 4 selectors that you know of. Using js Create a unordered list with 4 list items.
// ==============================================================================
/* 
  WRITE OUT YOUR DEFINITIONS HERE! 
  WRITE OUT CODE EXAMPLES BELOW
*/












