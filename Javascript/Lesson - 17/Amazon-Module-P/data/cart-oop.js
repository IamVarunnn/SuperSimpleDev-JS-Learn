
function Cart(localStorageKey){
    const cart = {
        cartItems : undefined,

        loadFromStorage(){
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

            if (!this.cartItems){ 
                this.cartItems =
                [ 
                    {
                        productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                        quantity : 1,
                        deliveryOptionId : '1',
                    },

                    {
                        productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                        quantity : 2,
                        deliveryOptionId : '2'
                    }
                ];

            }
        },

        saveToStorage(){
            localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
        },

        addToCart(productId, quantity){
            let matchingItem;
            
            this.cartItems.forEach((item)=>{
                if(productId === item.productId){
                    matchingItem = item;
                }
            });


            if(matchingItem){
                matchingItem.quantity += quantity;
            }
            else{
                this.cartItems.push({
                    productId,
                    quantity,
                    deliveryOptionId : '1'
                });
            }
            
            this.saveToStorage();
        },
        showQuantity(){
            let cartQuantity = 0;

            this.cartItems.forEach((item)=>{
                cartQuantity += item.quantity;
            });

            return cartQuantity;
            
        },
        
        removeFromCart(productId){

            let newCart = [];

            this.cartItems.forEach((cartItem)=>{
                if(cartItem.productId !== productId){
                    newCart.push(cartItem);
                }
            });

            this.cartItems = newCart;

            this.saveToStorage();
        },

        cartStyleIcon(selecter){
            selecter.innerText = `${this.showQuantity()}`;
        },

        udpateCheckQuantity(productId, quantity){
            let matchingItem;
                
            this.cartItems.forEach((item)=>{
                if(productId === item.productId){
                    matchingItem = item;
                }
            });
        
        
            if(matchingItem){
                matchingItem.quantity = 0;
                matchingItem.quantity += quantity;
            }
            else{
                this.cartItems.push({
                    productId,
                    quantity,
                });
            }
            
            this.saveToStorage();
        },
        
        updateDeliveryOptions(productId, deliveryOptionId){

            let matchingItem;

            this.cartItems.forEach((cartItem)=>{
                if(productId === cartItem.productId){
                    matchingItem = cartItem;
                }
            });


            matchingItem.deliveryOptionId = deliveryOptionId;

            this.saveToStorage();
        }


    };

    return cart;
}


const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
