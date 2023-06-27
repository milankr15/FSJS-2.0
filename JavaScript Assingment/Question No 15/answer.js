//15. Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F


// Function to assign grades based on scores
function assignGrade(score) {
    if (score >= 80 && score <= 100) {
      return "A";
    } else if (score >= 70 && score <= 89) {
      return "B";
    } else if (score >= 60 && score <= 69) {
      return "C";
    } else if (score >= 50 && score <= 59) {
      return "D";
    } else if (score >= 0 && score <= 49) {
      return "F";
    } else {
      return "Invalid score";
    }
  }
  
  // Example usage
  var student1 = {
    name: "John",
    score: 85
  };
  
  var student2 = {
    name: "Jane",
    score: 63
  };
  
  console.log(student1.name + " received grade: " + assignGrade(student1.score));
  console.log(student2.name + " received grade: " + assignGrade(student2.score));
  
  // Output: John received grade: A
  //         Jane received grade: C