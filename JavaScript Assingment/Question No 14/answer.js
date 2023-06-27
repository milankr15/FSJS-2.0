//14.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.


// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Example usage
  var number1 = 24;
  var number2 = 37;
  
  console.log(number1 + " is " + checkEvenOrOdd(number1));
  console.log(number2 + " is " + checkEvenOrOdd(number2));

  //Output: 24 is Even
  //        37 is Odd
