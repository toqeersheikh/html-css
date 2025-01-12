// alert("yes it is working");
// DOM SELECTORS

// document.getElementsByTagName("h1");
// document.getElementsByClassName("first");
// document.getElementsById("first");
// document.querySelector("h1")
// document.querySelectorAll("h1")

let inp = document.querySelector("#userinput");
let btn = document.querySelector(".userbtn");
let uList = document.querySelector("ul");

function inputLength(){
    return inp.value.length>0;
}

function createElement(){
    let listI = document.createElement("li");
    listI.appendChild(document.createTextNode(inp.value));
    uList.appendChild(listI);
    inp.value = "";

}
function addListAfterClick(){
    
        if (inputLength()> 0) {
         createElement();
        }
      
}
function addListAfterKeyPress(event){
    
        if (inputLength()> 0 && event.keyCode===13)  {
            createElement();
        }
      }



btn.addEventListener("click", addListAfterClick );

inp.addEventListener("keypress", addListAfterKeyPress);
  