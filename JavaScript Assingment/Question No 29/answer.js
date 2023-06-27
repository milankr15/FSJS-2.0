//29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.


function whatIsExtension(filename){
    let indexOfDot = filename.indexOf('.');

    return filename.slice(indexOfDot+1);

}

console.log(whatIsExtension("apple.js"));
console.log(whatIsExtension("apple.txt"));
console.log(whatIsExtension("apple.cpp"));