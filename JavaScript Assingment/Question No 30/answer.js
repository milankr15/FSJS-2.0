//30.Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.


function addition(n1, n2){
    console.log(n1+n2);
}

function subtract(n1, n2){
    console.log(n1-n2);
}

function multiplication(n1, n2){
    console.log(n1*n2);
}

function division(n1, n2){
    console(n1/n2);
}


let choice = prompt("Press 1:Addition 2:Subtraction 3:Multiplication 4:Division");

let n1 = prompt("Enter the first number");
let n2 = prompt("Enter the first number");



if(choice == 1){
    addition(n1, n2);
}else if(choice == 2){
    subtract(n1, n2);
}else if(choice == 3){
    multiplication(n1, n2);
}else{
    division(n1, n2);
}