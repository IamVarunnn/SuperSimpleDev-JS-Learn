import { cart, showQuantity, udpateCheckQuantity, cartStyleIcon } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { addOrder } from "../../data/order.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary(){

    let productPriceCents = 0;
    let shippingCostCents = 0;
     

    cart.forEach((cartItem) => {
        let product = getProduct(cartItem.productId);
        let deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

        productPriceCents += (product.priceCents * cartItem.quantity);
        shippingCostCents += (deliveryOption.priceCents);

        
        
    });

 
 
 

 
 
    const totalBeforeTaxCents = productPriceCents + shippingCostCents;

    const taxCents = totalBeforeTaxCents * 0.1;

    const totalCents = totalBeforeTaxCents + taxCents;

    const paymentSummaryHTML = `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (<span class="cartCount">3</span>):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingCostCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button js-place-order-button button-primary">
            Place your order
        </button>
    `

    let paymentInner = document.querySelector('.js-payment-summary');

    paymentInner.innerHTML = paymentSummaryHTML;

    let cartCount = document.querySelector('.cartCount');
    cartCount.innerHTML = showQuantity();
 
    let placeOrderbtn = document.querySelector('.js-place-order-button');

    placeOrderbtn.addEventListener('click', async ()=>{
      try{
        const response = await fetch('https://supersimplebackend.dev/orders', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            cart : cart
        })
      });  

      const order = await response.json();
        //   console.log(order);
        addOrder(order);
      }
      catch(error){
        console.log('Unexpected order');
      }

      window.location.href = 'orders.html';

    });
}

 