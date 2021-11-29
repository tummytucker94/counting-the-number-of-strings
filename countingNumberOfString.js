//prompts the user for input
let inputString = prompt("What is the input string?");

//gets returns the length of the string from the input recieved.
let numOfString = inputString.length;

//displays the length of the string of the DOM element that has the id root
document.getElementById('root').innerHTML = numOfString;
