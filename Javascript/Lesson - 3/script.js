

// let text = `My name is ${"Hello"}`;

// let name = "Simon";

// // console.log(name);

// let concatinate = text + ' ' + name;

// console.log(concatinate);

// let coffee = 5;
// let bagel = 3;

// totalCost = bagel + coffee;

// // console.log('The total cost is', totalCost);
// console.log(`The total cost is ${totalCost}`);

// // alert(`The total cost is ${totalCost}`);
// alert(`The total cost is ${totalCost}
// Thank you, come again!
//     `);

let totalItems = 2 + 2;
let totalItemsCharges = 57.88;
let shippingCharges = 998/100;
let totalBeforeTaxCharges = ((2 * 2095) + (2 * 799)) /100 + (998/100);
let estimatedTax = Math.floor(totalBeforeTaxCharges * (10/100));


let items = `Items(${totalItems}):  ${totalItemsCharges} } `
let shipping = `Shipping and handling:   $${shippingCharges}`

let totalBeforeTax = `Total before tax:  ${totalBeforeTaxCharges} `;

let estimatedTaxText = `Estimated tax(10%): ${estimatedTax}`;

console.log(estimatedTax);


// console.log(totalBeforeTax);