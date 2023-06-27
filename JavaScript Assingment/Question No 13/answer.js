//13.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.




var age = prompt("Enter your age:");

// Convert the user input to a number
age = parseInt(age);

// Check if the user is 18 or older
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  // Calculate the number of years remaining until turning 18
  var yearsRemaining = 18 - age;
  console.log("You are not 18 yet. Please wait for " + yearsRemaining + " year(s) to turn 18.");
}
