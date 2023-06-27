
function yourBMI(weight, height){
    let bmiValue = weight / (height * height);

    if(bmiValue < 18.5){
        return "Underweight";
    }else if(bmiValue>= 18.5 && bmiValue <=24.9){
        return "Normal Weight";
    }else if(bmiValue>= 25 && bmiValue <=29.9){
        return "Overweight";
    }else{
        return "Obese";
    }
}


console.log(yourBMI(75, 1.8));