"use strict";

// Variables
// console.log(me);
// console.log(job);
// console.log(birthYear);

var me = "sundas";
let job = "developer";
const birthYear = 2001;

// Functions
// console.log(sum(3, 5));
// console.log(sumExp(3, 5));
// console.log(sumArr(5, 3));
// this is same as a doing this undefined(3,5)
// because at this point sumArr variable is hoisted, its value is undefined
// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
const sumExp = function (a, b) {
  return a + b;
};

// Arrow function
var sumArr = (a, b) => a + b;
// let sumArr = (a, b) => a + b;
// const sumArr = (a, b) => a + b;

var z = 1; //creates a property on global window object
console.log(z === window.z); //indeed it is true
//  but its not with let & const variables
