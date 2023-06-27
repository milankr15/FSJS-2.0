//11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.



var hours = now.getHours();


var minutes = now.getMinutes();

// Get the number of seconds elapsed since January 1, 1970
var secondsElapsed = now.getTime() / 1000; // Divide by 1000 to convert milliseconds to seconds

// Display the results
console.log("Year today:", year);
console.log("Month today (as a number):", month);
console.log("Date today:", date);
console.log("Day today (as a number):", day);
console.log("Hours now:", hours);
console.log("Minutes now:", minutes);
console.log("Seconds elapsed from January 1, 1970 to now:", secondsElapsed);

//Output: Year today: 2023
//        Month today (as a number): 5
//        Date today: 27
//        Day today (as a number): 2
//        Hours now: 10
//        Minutes now: 14
//        Seconds elapsed from January 1, 1970 to now: 1687860877.242