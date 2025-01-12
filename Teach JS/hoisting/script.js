// "use strict";
console.log(`==== 😵 Hoisting And Temporal Dead Zone 😵 ====`);

//🧰 Hoisting: (A Mechanism in JavaScript)

// Hoisting: Make some type of variables accessible/usable in the code before they are actually declared,

//🏋️ "Variables lifted to the top of their scope."

// But behind the scenes: 🔬

// Before execution: code is scanned for variable declarations, and for each variable a new property is created in the variable environment object (in the creation phase of the execution)

//🚫 And hoisting does not work the same way for all type of variable declarations

// So it is different in function declarations, var, let, and const variables and also arrow functions

/////////////////////////////////

// 1)- ✅ Function declarations are Hoisted:

// So in practice this means is that we can use function declarations before they are actually declared in the code
// because they are stored in the variable environment object even before the code starts execting
// Initial value will be actual value
// Functions are blocked scope in strict mode
// in sloppy mode they are function scoped

/////////////////////////////////

// 2)- ✅ Variables declared with var are also Hoisted:

// But it works in a diffferent way, their initial value will be undefined
//😅 Common source of bugs, 😅 Really wierd behavior
//⚠️ So this is one of the main reasons we almost never use "var"
// Function scoped

/////////////////////////////////

// 3)- 🚫 Let and const variables are not hoisted

// Technically yes but in practice they are not
// Because their Initial value will be set to uninitialized
// Instead we say that these variables are placed in a so called temporal dead zone ☠️😵
// Which makes it so that we cant access the variables between the beginning of the scope and the place where the variables are declared
// So as a result we get an erorr if we try to access them
// Let and const are blocked scope, so they exists only in the block in which they are created
// ✅ So thats why we prefer using let and const to avoid bugs

/////////////////////////////////

// 🌌 Function Expressions and Arrow Functions
//  It depends if they are created using var, let or const
//  Because Keep in mind that these functions are simply treated as values(First class citizens in practice)
//  So they behave same as variables in regards to hoisting

// So function expressions and arrow functions created with var are hoisted to undefined
// But if we created with let and const its not usable before its declared in the code because of the temporal dead zone
// So again just like normal varibales, so thats the reason we cannot use them unlike function declarations

/////////////////////////////////

// 🔮 The Mysterious Temporal Dead Zone, LET AND CONST ☠️😵

// we cant access the let and const variables between the beginning of the scope and the place where the variables are declared
//The Initial value will of let and const is set to uninitialized
// So these variables are placed in a so called temporal dead zone where they are still unintialized but the engine knows that it will be initialized because it already read the code before and set the variable to uninitialized
// And then when the execution reaches at the line where it is declared it is removed from the temporal dead zone and its then safe to use
// So basically each and every let and const variable basically get their own Temporal dead zone that starts at the beginning of the scope until the line where it is defined
// And the variable is only safe to use after the TDZ

// Why TDZ❓❓❓

// Makes it easier to avoid bugs and catch erorrs
// Accessing variable before declaration is bad practice
// So when we attempt to do so JS gives us an erorr
// Makes const variables actually work
// Because we cant re-assign const variables like as var which is undefined first and later assigned a value

// Why Hoisting❓❓❓

// Make function declarations use befor they are declared

// Note❗ variables declare with let or const do not create properties on the window object
