let a = prompt("Enter a number");
let b = prompt("Enter another number");
if (a === null || b === null) {
  throw SyntaxError("Input is null");
} else if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Invalid input, please enter numbers only");
}
let sum = parseInt(a) + parseInt(b);
alert("The sum is: " + sum);
try {
  let a = prompt("Enter a number");
  let b = prompt("Enter another number");
  if (a === null || b === null) {
    throw SyntaxError("Input is null");
  } else if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Invalid input, please enter numbers only");
  }
  let sum = parseInt(a) + parseInt(b);
  alert("The sum is: " + sum);
} catch (error) {
  if (error instanceof SyntaxError) {
    alert("Syntax Error: " + error.message);
  } else {
    alert("An unexpected error occurred: " + error.message);
  }
}
