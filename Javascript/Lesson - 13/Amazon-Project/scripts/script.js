 

import { cart, addtoCartItems } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utlis/money.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class = "js-quantity-selector-${product.id}" >
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart added-to-cart-${product.id}" >
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart " data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>
    `;
});

let prodcutJs = document.querySelector(".products-grid-js");

prodcutJs.innerHTML = productsHTML;

// console.log(productsHTML);

let addToCartBtn = document.querySelectorAll(".js-add-to-cart");

let timeouts = {};

let intervalId;

addToCartBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log('hey');
    const { productId } = button.dataset;


    let selectDrop = document.querySelector(
      `.js-quantity-selector-${productId}`,
    );

    let quantity = Number(selectDrop.value);

    // console.log(quantity);

   

    clearTimeoutStyle(productId);

    addtoCartItems(productId, quantity);

    showQuantity();

    
  });
});



function clearTimeoutStyle(productId){
   let styleId = document.querySelector(`.added-to-cart-${productId}`);
  
    styleId.style.opacity = 1;

    clearTimeout(timeouts[productId]);

    timeouts[productId] =  setTimeout(() => {
      styleId.style.opacity = 0;
    }, 2000);
}





function showQuantity(){
  let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    console.log(cartQuantity);

    let cartCount = document.querySelector(".cart-count");

    cartCount.innerText = cartQuantity;
    console.log(cart);
}