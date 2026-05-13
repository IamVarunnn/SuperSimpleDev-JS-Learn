import { cart, cartStyleIcon, showQuantity, udpateCheckQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { removeFromCart } from "../data/cart.js";
import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";


// hello();
// console.log(dayjs());

let today = new dayjs();

const deliveryDate = today.add(7,'days ');

const readDe = deliveryDate.format('dddd, MMMM, YYYY');

console.log(readDe);




let cartSummaryHTML = "";

cart.forEach((cartItem)=>{
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product)=>{
        if(product.id === productId){
            matchingProduct = product;
        }
    });

    // console.log(matchingProduct);

    cartSummaryHTML +=  `
    <div class="cart-item-container cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
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
            <div class="delivery-option">
                <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${productId}">
                <div>
                <div class="delivery-option-date">
                    Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                    FREE Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${productId}">
                <div>
                <div class="delivery-option-date">
                    Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${productId}">
                <div>
                <div class="delivery-option-date">
                    Monday, June 13
                </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    
    `;
console.log(matchingProduct.priceCents);
console.log(typeof matchingProduct.priceCents);
});



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
        cartItemId.remove();
        
        let checkoutIcon = document.querySelector('.checkLink');

        cartStyleIcon(checkoutIcon);
    });
});

let checkoutIcon = document.querySelector('.checkLink');
cartStyleIcon(checkoutIcon);
 
let updateBtn = document.querySelectorAll('.update-link');

updateBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        let {productId} = button.dataset;

        let container = document.querySelector(`.cart-item-container-${productId}`);

        container.classList.add('is-editing-quantity');

        container.classList.add('is-editing-quantity');


        let checkoutIcon = document.querySelector('.checkLink');
        cartStyleIcon(checkoutIcon);

        
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
        let checkoutIcon = document.querySelector('.checkLink');
        cartStyleIcon(checkoutIcon);
    })
})
 