export let cart = JSON.parse(localStorage.getItem('cart')); 

if(!cart){
    cart = [
        {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity : 1,
            
        },

        {
            productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity : 2,
        }
    ];
}

export function addtoCartItems(productId, quantity){
  let matchingItem;
  cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity,
      });
    }

    saveToStorage();
}

export function removeFromCart(prodcutId){
    let newCart = [];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !== prodcutId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

function saveToStorage(){
    let str = JSON.stringify(cart);
    localStorage.setItem('cart',str);
}