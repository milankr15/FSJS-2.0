//23. Write a program to check that the number given by the user is a prime number or not.


// Function to check if a number is prime
function isPrime(number) {
    // Check if the number is less than 2 (not a prime number)
    if (number < 2) {
      return false;
    }
  
    // Iterate from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // If the number is divisible by any other number, it's not a prime number
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  var userInput = prompt("Enter a positive integer:");
  
  var number = parseInt(userInput);
  
  // Check if the number is prime
  if (isPrime(number)) {
    console.log(number + " is a prime number.");
  } else {
    console.log(number + " is not a prime number.");
  }

  // Output: 13 is a prime number.
//           10 is not a prime number.


  
