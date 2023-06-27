//18. Write a program which tells the number of days in a month, now consider leap year.



// Function to determine if a year is a leap year
function isLeapYear(year) {
    // A leap year is divisible by 4
    if (year % 4 === 0) {
      
      if (year % 100 === 0) {
        // Except if it's divisible by 400, then it is a leap year
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  // Function to determine the number of days in a month
  function getDaysInMonth(month, year) {
    // Create a new date object with the given month and year
    var date = new Date(year, month, 1);
  
    // Move to the next month
    date.setMonth(date.getMonth() + 1);
  
    // Set the date to the last day of the previous month
    date.setDate(date.getDate() - 1);
  
    // Return the number of days in the month
    return date.getDate();
  }
  
  // Example usage
  var userInputMonth = prompt("Enter a month (e.g., January):");
  var userInputYear = prompt("Enter a year (e.g., 2022):");
  
  // Convert month input to lowercase for case-insensitive comparison
  userInputMonth = userInputMonth.toLowerCase();
  
  // Array of month names
  var months = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
  ];
  
  // Check if the user input month is valid
  if (months.includes(userInputMonth)) {
    // Get the index of the month in the array
    var monthIndex = months.indexOf(userInputMonth);
  
    // Get the number of days in the specified month and year
    var daysInMonth = getDaysInMonth(monthIndex, userInputYear);
  
    // Check if it's a leap year and if the month is February
    if (monthIndex === 1 && isLeapYear(userInputYear)) {
      console.log("The number of days in " + userInputMonth + " " + userInputYear + " is 29 (Leap Year).");
    } else {
      console.log("The number of days in " + userInputMonth + " " + userInputYear + " is " + daysInMonth + ".");
    }
  } else {
    console.log("Invalid month input.");
  }
  