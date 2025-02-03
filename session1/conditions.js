const age = 18;

//normal if/else
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//ternary
const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome, User!" : "Please log in.");

function checkNumber(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
console.log(checkNumber(5));  // Positive
console.log(checkNumber(-3)); // Negative
console.log(checkNumber(0));  // Zero



const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("Enjoy your weekend!");
    break;
  default:
    console.log("It's a regular day.");
}
