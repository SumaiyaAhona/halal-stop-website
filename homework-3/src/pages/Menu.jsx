// src/pages/Menu.jsx
import React, { useState } from 'react';

const menuItems = [
  {
    name: "Cheeseburger",
    price: 8.99,
    description: "Juicy grilled beef patty with cheese, lettuce, tomato, and sauce.",
    img: "images/cheeseburger.jpeg",
  },
  {
    name: "Chicken Wrap",
    price: 7.49,
    description: "Spiced grilled chicken with fresh veggies wrapped in pita.",
    img: "images/shawarma.jpeg",
  },
  {
    name: "French Fries",
    price: 3.49,
    description: "Golden crispy fries served with ketchup or special sauce.",
    img: "images/fries.jpeg",
  },
  {
    name: "Ice Cream",
    price: 2.99,
    description: "Indulge in our rich, creamy ice cream — available in classic flavors like vanilla, chocolate, and strawberry. Perfect for cooling down after a spicy meal or treating yourself to something sweet.",
    img: "images/ice_cream.jpeg",
  },
  {
    name: "Mango Lassi",
    price: 5.75,
    description: "A refreshing blend of sweet mangoes, creamy yogurt, and a hint of cardamom — our Mango Lassi is the perfect balance of fruity and smooth.",
    img: "images/mango_lassi.jpg",
  },
];

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Menu Section */}
      <section className="menu max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl mb-8 font-semibold text-center">Our Menu</h2>
        <div className="menu-items flex flex-wrap justify-center gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="menu-card bg-white rounded-xl shadow-lg max-w-xs p-5 flex flex-col">
              <img src={item.img} alt={item.name} className="rounded-lg mb-4 object-cover h-48 w-full" />
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600 flex-grow">{item.description}</p>
              <span className="font-semibold text-yellow-600 mt-3">${item.price.toFixed(2)}</span>
              <button
                onClick={() => addToCart(item)}
                className="add-to-cart mt-4 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-semibold transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section className="cart max-w-md mx-auto bg-white p-6 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <ul id="cart-items" className="mb-4">
          {cart.length === 0 && <li className="text-gray-500">Cart is empty</li>}
          {cart.map((item, index) => (
            <li key={index} className="text-lg border-b py-2">
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p id="cart-total" className="font-bold text-lg mb-4">Total: ${totalPrice.toFixed(2)}</p>
        <button
          id="clear-cart"
          onClick={clearCart}
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
          disabled={cart.length === 0}
        >
          Clear Cart
        </button>
      </section>
    </div>
  );
};

export default Menu;

