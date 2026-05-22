import { formatCurrency } from "../scripts/utils/money.js";

// Basic Test Case

console.log('Converts it to cents')

if(formatCurrency(2095) === '20.95'){
    console.log('Passed');
}
else{
    console.log('Failed');
}


// Edge Cases

console.log('Works with "0" ')

if(formatCurrency(0) === '0.00'){
    console.log('Passed');
}
else{
    console.log('Failed');
}


console.log('rounds up to nearest cent')
if(formatCurrency(2000.5) === '20.01'){
    console.log('Passed');
}
else{
    console.log('Failed');
}