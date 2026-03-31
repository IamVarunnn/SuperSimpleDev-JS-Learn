
let date = new Date();

let hour = date.getHours();
let namevar = 'Simom';
// console.log(hour);

if(hour >= 6 && hour <= 12){
    console.log('Good Morning', namevar);
}
else if(hour >= 13 && hour <= 17){
    console.log('Good afternoon' , namevar);
}
else{
    console.log('Good Nigt', namevar);
}