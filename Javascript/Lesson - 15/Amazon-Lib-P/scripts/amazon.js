 
import { cart, addToCart, showQuantity, cartStyleIcon } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let productHTML = "";

products.forEach((product)=>{
    productHTML += `
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
               
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class = "product-quantity-${product.id}" >
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

          <div class="added-to-cart added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-product-id = "${product.id}">
            Add to Cart
          </button>
    </div>
`;

});



let productJs = document.querySelector('.product-js');
productJs.innerHTML += productHTML;

let cartBtn = document.querySelectorAll('.add-to-cart-button');
// let intervalId;
let timeouts = [];

cartBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        
        let {productId} = button.dataset;

        
        let quantityId = document.querySelector(`.product-quantity-${productId}`);

        let quantity = Number(quantityId.value);

        addToCart(productId, quantity);
        
       
        let cartQuantityCount = document.querySelector('.cart-quantity');
        // cartQuantityCount.innerText = showQuantity();
        
        cartStyleIcon(cartQuantityCount);
        clearTimeoutStyle(productId);

        console.log(cart);
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

let cartQuantityCount = document.querySelector('.cart-quantity');
// cartQuantityCount.innerText = showQuantity();


cartStyleIcon(cartQuantityCount);


