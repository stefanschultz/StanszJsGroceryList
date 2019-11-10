/**
 * index.js
 */

const button = document.querySelector("button");

// Someone clicks on the button
button.addEventListener("click", function() {
  // it creates a prompt
  const promptNewItem = prompt("What will you set to your grocery list?");

  if (promptNewItem !== undefined && promptNewItem !== null && promptNewItem !== "") {
    // input has the type checkbox
    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    // the label element has the content of the prompt input
    let newUserInput = document.createElement("label");
    newUserInput.textContent = promptNewItem;
  
    // add the input and label element on the end of the div
    document.querySelector("form").appendChild(checkbox);
    document.querySelector("form").appendChild(newUserInput);
  
    // create a new line after an input
    newLine = document.createElement("br");
    document.querySelector("form").appendChild(newLine);
  }
});

const form = document.querySelector("form");

// when someone checks a checkbox, item will be deleted
let formChange = form.addEventListener("change", function(e) {
  let input = document.querySelectorAll("input");
  let label = document.querySelectorAll("label");
  let lineBreak = document.querySelectorAll("br");

  for (let i = 0; i < input.length; i++) {
    input[i].remove();
    label[i].remove();
    lineBreak[i].remove();
  }
});