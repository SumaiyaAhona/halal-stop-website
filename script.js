const cart = []; //This is an empty list that stores everything a user adds to the cart
const cartItemsList = document.getElementById('cart-items'); //This points to the part of the HTML where we'll list the cart items 
const cartTotal = document.getElementById('cart-total'); //this points to the part of the HTML where we'll show the total price 
const clearCartBtn = document.getElementById('clear-cart'); //this is the cleart cart button

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        //this means: for every button with the class .add=to=cart, when its clicked, do this:
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        //Get the item's name and price from the buttin's data-name and data-price

        const existingItem = cart.find(item => item.name === name);
        //check if the item is already in the cart 

        if(existingItem){
            existingItem.quantity++;
        }
        else{
            cart.push({name, price, quantity: 1 });
        }

        //if its already in the cart, just add 1 more to the quantity, but if
        //its not, add it to the cart with quantity = 1.


        updateCart();// refresh the cart display on screen 

        
    });
});

// Show what's in the cart
function updateCart() {
  cartItemsList.innerHTML = ''; //first clear the cart list on the screen
  let total = 0; // set up a var to keep track of the total price 

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    //loop thorugh each item in the cart
    //add its price * quantity to the total

    const li = document.createElement('li');
    li.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
      <button onclick="removeItem(${index})">Remove</button>`;
    cartItemsList.appendChild(li);
    //Create a list item that shows:
    //The name, The quantity, The total price for that item , A remove button
  }); 

  cartTotal.innerText = `Total: $${total.toFixed(2)}`;
  //show the final total price at the bottom 
}

// Remove one item from cart
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
  //this deletes one item from the cart (by its index)
  //then it updates the cart display again 
}

// Clear entire cart
clearCartBtn.addEventListener('click', () => {
  cart.length = 0;
  updateCart();

//when the "clear cart" button is clicked:
//it removes everyhting from the cart 
//then refreshes the screen

//testing
});
