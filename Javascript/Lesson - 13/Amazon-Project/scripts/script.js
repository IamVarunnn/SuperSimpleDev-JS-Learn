
// let products = [
//     {
//         name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//         image : 'images/products/athletic-cotton-socks-6-pairs.jpg',
//         rating : {
//             stars : 4.5,
//             count : 87
//         },
//         priceCents : 1099
//     },

//     {
//         name : 'Intermediate Size Basketball',
//         image : 'images/products/intermediate-composite-basketball.jpg',
//         rating : {
//             stars : 4,
//             count : 127
//         },
//         priceCents : 2095
//     },

//     {
//         name : 'Adults Plain Cotton T-Shirt - 2 Pack',
//         image : 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//         rating : {
//             stars : 4.5,
//             count : 56
//         },
//         priceCents : 799
//     },

//     {
         
//         image: "images/products/black-2-slot-toaster.jpg",
//         name: "2 Slot Toaster - Black",
//         rating: {
//         stars: 5,
//         count: 2197
//         },
//         priceCents: 1899,
//     },


// ];


let productsHTML = '';

products.forEach((product)=>{
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
            $${(product.priceCents / 100).toFixed(2)}
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

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart " data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>
    `;
});

let prodcutJs = document.querySelector('.products-grid-js');

prodcutJs.innerHTML = productsHTML;

// console.log(productsHTML);

let addToCartBtn =  document.querySelectorAll('.js-add-to-cart');

addToCartBtn.forEach((button) => {
  button.addEventListener('click',()=>{
    // console.log('hey');
    const productId = button.dataset.productId;

    let matchingItem;

    let selectDrop = document.querySelector(`.js-quantity-selector-${productId}`);

    let selectQuantity = (Number)(selectDrop.value);

    console.log(selectQuantity);

    cart.forEach((item)=>{

        if(productId === item.productId){
          matchingItem = item;
        }
    });

    if(matchingItem){
      
      matchingItem.quantity += selectQuantity;
    }
    else{
      
      cart.push({
        productId : productId,
        
        quantity : selectQuantity,
      });
    }

    let cartQuantity = 0;

    cart.forEach((item)=>{
      cartQuantity += item.quantity;
    });

    console.log(cartQuantity);

    let cartCount = document.querySelector('.cart-count');

    cartCount.innerText = cartQuantity;
    console.log(cart);
  })
});