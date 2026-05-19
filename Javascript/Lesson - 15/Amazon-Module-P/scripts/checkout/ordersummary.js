import { cart, cartStyleIcon, showQuantity, udpateCheckQuantity, updateDeliveryOptions } from "../../data/cart.js";
import { getProduct, products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { removeFromCart } from "../../data/cart.js";
import { calculateDeliveryDate, deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { renderPaymentSummary } from "./paymnetSummary.js";
import { renderCheckoutHeader } from "./checkoutHeader.js";

 




export function renderOrderSummary(){


    let cartSummaryHTML = "";

    cart.forEach((cartItem)=>{
        const productId = cartItem.productId;

        let matchingProduct = getProduct(productId);

        

        const deliveryOptionId = cartItem.deliveryOptionId;

        let deliveryOption = getDeliveryOption(deliveryOptionId);

        

       
        let deliveryDate = calculateDeliveryDate(deliveryOption);

        let dateString = deliveryDate.format("dddd, MMMM, D");


        // console.log(matchingProduct);

        cartSummaryHTML +=  `
        <div class="cart-item-container cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
                Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchingProduct.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>
                <div class="product-price">
                    $${formatCurrency(matchingProduct.priceCents)}
                    
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label quantityCount-${productId}" >${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary update-link" data-product-id = "${matchingProduct.id}">
                    Update
                    </span>
                    
                    <input class = "quantity-input">
                    <span class="save-quantity-link link-primary save-link" data-product-id = "${matchingProduct.id}">Save</span>
                    
                    <span class="delete-quantity-link link-primary js-delete-link link-update" data-product-id = "${matchingProduct.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                ${deliveryOptionHTML(matchingProduct, cartItem)}
                
                </div>
            </div>
        </div>
        
        `;
    // console.log(matchingProduct.priceCents);
    // console.log(typeof matchingProduct.priceCents);
    });


    function deliveryOptionHTML(matchingProduct, cartItem){

        let deliveryHMTL = "";

        

        deliveryOptions.forEach((deliveryOption)=>{

            
            let deliveryDate = calculateDeliveryDate(deliveryOption);

            let dateString = deliveryDate.format("dddd, MMMM, D");

            let priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} -` ;

            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

            deliveryHMTL += `
                <div class="delivery-option js-delivery-option " data-product-id = "${matchingProduct.id}" data-delivery-option-id = "${deliveryOption.id}">
                    <input type="radio" ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                    <div>
                    <div class="delivery-option-date">
                        ${dateString}
                    </div>
                    <div class="delivery-option-price">
                        ${priceString} Shipping
                    </div>
                    </div>
                </div>
            `;
        });

        return deliveryHMTL;

        
    }


    let orderSummary = document.querySelector('.js-order-summary');

    orderSummary.innerHTML = cartSummaryHTML;


    let delLink = document.querySelectorAll('.js-delete-link');

    delLink.forEach((link)=>{
        link.addEventListener('click',()=>{
            let { productId } = link.dataset;

            let cartItemId = document.querySelector(`.cart-item-container-${productId}`);

            // console.log(productId);
            removeFromCart(productId);
            // console.log(cart);
            
            renderOrderSummary();
            
            let checkoutIcon = document.querySelector('.checkLink');

            renderCheckoutHeader();
            renderPaymentSummary();
        });
    });

   
    
    let updateBtn = document.querySelectorAll('.update-link');

    updateBtn.forEach((button)=>{
        button.addEventListener('click',()=>{
            let {productId} = button.dataset;

            let container = document.querySelector(`.cart-item-container-${productId}`);

            container.classList.add('is-editing-quantity');

            container.classList.add('is-editing-quantity');
            
        });
    });
    

    let saveBtn = document.querySelectorAll('.save-link');

    saveBtn.forEach((save)=>{
        save.addEventListener('click',()=>{
            let {productId} = save.dataset;

            let container = document.querySelector(`.cart-item-container-${productId}`);
            container.classList.remove('is-editing-quantity');
            
            let quantityLabel = document.querySelector(`.quantityCount-${productId}`);

            let inputLabel = container.querySelector('.quantity-input');
            let inputLabelVal = Number(inputLabel.value);

            console.log(inputLabelVal);

            // console.log(quantityLabel.innerHTML);
            quantityLabel.innerText = inputLabelVal;

            // console.log(quantityVal);

            // console.log(cart.quantity);
            
            udpateCheckQuantity(productId, inputLabelVal);
            renderCheckoutHeader();
            renderPaymentSummary();
        })
    });

    let deliveryBtn = document.querySelectorAll('.js-delivery-option');

    deliveryBtn.forEach((element)=>{

        element.addEventListener('click',()=>{

            let {productId, deliveryOptionId} = element.dataset;

            updateDeliveryOptions(productId, deliveryOptionId);
            renderOrderSummary();
            renderPaymentSummary();
        })
    });
 
}

renderOrderSummary();