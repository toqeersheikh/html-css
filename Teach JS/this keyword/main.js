"use strict";
const heading = document.querySelector(".heading");
// "this" in global Execution context
// console.log(this); // points to global window object window{}

// "this" in regular function
function sum(a, b) {
  console.log(a + b);
  console.log(this);
}
// sum(3, 3); // "this" will be undefined- only in strict mode otherwise window{}

// "this" in function expression
const sumExp = function (a, b) {
  console.log(a + b);
  console.log(this);
};

// sumExp(8, 8); "this" will be undefined

// "this" in arrow function

const addNum = (a, b) => {
  console.log(a + b);
  console.log(this);
};

// addNum(4, 5); //do not get its own "this", value of this will be lexical(so this from its parent)

// this keyword in Event listener
heading.addEventListener("click", function () {
  console.log("This keyword in Event Listener");
  console.log(this);
});
// "this" will point to the DOM element that the handler is attached to

/*
const zain = {
  name: "zain",
  birthYear: 2001,
  calcAge: function () {
    console.log(2024 - this.birthYear);
    console.log(this);
  },
};

// zain.calcAge();

const zaini = {
  name: "zaini",
  birthYear: 2005,
};

// Borrowing a method
zaini.calcAge = zain.calcAge;

zaini.calcAge();
*/
