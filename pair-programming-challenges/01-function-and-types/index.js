/* 

  Driver: Person who actually writes the code
  Navigator: Person is helping and what they should be coding and what they think they should do.

  Create a function that works just like a calculator
  Your function should accept three arguments, two numbers, and a string.
  Operations that your function should be able to complete
  [] Addition
  [] Subtraction
  [] Division
  [] Multiplication
  [] Raise to a the power of

  Feel free to use google to figure out any expressions you have not yet practiced.
  This will not be graded, feel free to use live server and your google console to test your code.

  HINT: look up switch statements


  EXPECTED RESULT:
  myCalculator('+', 1, 2)   => 3
  myCalculator('-', 1, 2)   => -1
  myCalculator('*', 1, 2)   => 2
  myCalculator('/', 4, 2)   => 2
  myCalculator('^', 2, 3)   => 8

  BONUS: Allow for number inputs to be either String or Number
*/
// Write your code here
//  } else if ( operator === "-") {
//   return num1 - num2;
//  } else if ( operator === "*") {
//   return num1 * num2;
//  } else if (operator === "/") {
//   return num1 / num2;
//  } else if (operator === "**") {
//   return num1 ** num2;
//  } else { 
//    console.log("Please make sure to enter an Arithmetic operator");
//  }
 
// }
// myCalculator("+", 5, 2);

// Switch 
function myCalculator(operator = "", num1, num2) {
  
  switch (operator) {
    case '+':
        return num1 + num2
    case "-" :
        return num1 - num2
    case "*" :
        return num1 * num2
    case "/" :
        return num1 / num2
                                 
    case "**" :
        return num1 ** num2
       
      default :
        console.log("Please make sure to enter an Arithmetic operator")
  }

}
myCalculator("+", 5, 2)
console.log(myCalculator("+", 5, 2));


  console.log("do something!")
// undefined

doSomething
// the whole function (reference)


doSomething();
// calling, invoking
