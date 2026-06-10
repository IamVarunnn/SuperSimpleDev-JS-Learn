import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymnetSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import '../data/cart-class.js';
// import '../data/backend-pratice.js';


Promise.all([
    
    new Promise((resolve)=>{
   
        loadProducts(()=>{
            resolve();
        });

    }),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })

]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
});


// new Promise((resolve)=>{
   
//     loadProducts(()=>{
//         resolve();
//     });

// }).then(()=>{
//     return new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve();
//         });
//     })
// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
// });

 
// loadProducts(()=>{
//     loadCart(()=>{
//         renderOrderSummary();
//         renderPaymentSummary();
//         renderCheckoutHeader();
//     });
// });


 