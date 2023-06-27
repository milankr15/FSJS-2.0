//7. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".


// Declare an array with multiple values
var myArray = [
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "pw skills",
    "Java",
    "pw skills",
    "Ruby",
    "pw skills"
  ];
  
  var firstIndex = myArray.lastIndexOf("pw skills");
  var lastIndex = myArray.lastIndexOf("pw skills");
  
  // Display the positions
  console.log("First occurrence index:", firstIndex);
  console.log("Last occurrence index:", lastIndex);

  // Output: First occurrence index: 4
        //   Last occurrence index: 8
 