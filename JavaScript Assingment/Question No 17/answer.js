//17. Write a program which tells the number of days in a month.


function numberOfDays(monthName){
    monthName = monthName.toLowerCase();
    if(monthName == "january" || monthName == "march" || monthName == "may" || monthName == "july" || monthName == "august" || monthName == "october" || monthName =="december"){
        return 31;
    }
    else if(monthName =="february"){
        return "28 or 29";
    }else{
        return 30;
    }
}

console.log(numberOfDays("february"));

// Output : 28 or 29