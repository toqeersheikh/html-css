console.log("Hello Js I am back");

// console.log(document.forms);
const btn = document.querySelector("#btn");
console.log(btn);
//accessing form attribute using name
const exam_form = document.querySelector("#exam_form");

console.log(exam_form);

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const value1 = document.querySelector("#user_name").value;
  const value2 = document.querySelector("#email").value;
  const value3 = document.querySelector("#password").value;
  const value4 = document.querySelector("input[name='gender']:checked")?.value;
  console.log(value1, value2, value3, value4);
});
// ('input[name="gender"]:checked');
