import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymnetSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js';
// import '../data/backend-pratice.js';


new Promise((resolve)=>{
    console.log('Start Prom');
    loadProducts(()=>{
        console.log('Finished Loading');
        // resolve();
    });
}).then(()=>{
    console.log('Next Step');
});

 
// loadProducts(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
// });


 