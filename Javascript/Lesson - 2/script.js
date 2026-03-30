


let soup = 10;
let burgers = 3 * 8;

let icecream = 5;

let totalCost = icecream + burgers + soup;

console.log(totalCost);

document.body.innerText = totalCost;


let eachPerson = totalCost / 3;

// console.log(eachPerson);
// document.body.innerHTML = eachPerson;

// let text = document.body.innerHTML;


// let toasterCost = 18.50 + (7.50 * 2);


// document.body.innerHTML = toasterCost;
// console.log(toasterCost);

// let gstToasterCost = toasterCost * (10 /100);

// // document.body.innerText = finalToasterCost;

// let gstToasterCost2 = toasterCost * (20 / 100);

// console.log(gstToasterCost2);

// document.body.innerHTML = gstToasterCost2;


let Fahrenheit = (Celsius) => (Celsius * (9 / 5)) + 32;
let Celsius = (Fahrenheit) => (Fahrenheit - 32 ) * (5 /9);

let temp1 = 25;

let temp2 = 86;

let temp3 = -5;

// let inFareheit = Fahrenheit(temp1);
let inFareheit = Fahrenheit(temp3);

let inCelsius = Celsius(temp2);


console.log(inFareheit);
// console.log(inCelsius);