import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymnetSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadCart } from "../data/cart.js";



async function loadPage(){
  

    await loadProductsFetch();
    
    const val =  await new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });

    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
   
}

loadPage();


// Promise.all([
//     loadProductsFetch(),

//     new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve('value12')
//         });
//     })

// ]).then((values)=>{
//     // console.log(values);
//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
// });;


// new Promise((resolve)=>{
//     loadProducts(()=>{
//         resolve('value1');
//     });    
// }).then((value)=>{
//     console.log(value);
//     return new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve();
//         });
//     });
// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
// });