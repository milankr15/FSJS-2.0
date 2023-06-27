//20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if(shoppingCart[0] != "Meat"){
    shoppingCart.unshift("Meat");
}

if(shoppingCart[shoppingCart.length-1] != "Sugar"){
    shoppingCart.push("Sugar");
}

let indexOfHoney = shoppingCart.indexOf("Honey");

shoppingCart.splice(indexOfHoney, 1);

let indexOfTea = shoppingCart.indexOf("Tea");
shoppingCart.splice(indexOfTea, 1, "Green Tea");

console.log(shoppingCart);