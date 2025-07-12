import React from 'react';
import '../style.css';

export default function Menu({ addToCart, cartItems, clearCart }) {
  const menuItems = [
    {
      name: 'Cheeseburger',
      description: 'Juicy grilled beef patty with cheese, lettuce, tomato, and sauce.',
      price: 8.99,
      image: '/images/cheeseburger.jpeg',
    },
    {
      name: 'Chicken Wrap',
      description: 'Spiced grilled chicken with fresh veggies wrapped in pita.',
      price: 7.49,
      image: '/images/shawarma.jpeg',
    },
    {
      name: 'French Fries',
      description: 'Golden crispy fries served with ketchup or special sauce.',
      price: 3.49,
      image: '/images/fries.jpeg',
    },
    {
      name: 'Ice Cream',
      description: 'Indulge in our rich, creamy ice cream — available in classic flavors like vanilla, chocolate, and strawberry.',
      price: 2.99,
      image: '/images/ice_cream.jpeg',
    },
    {
      name: 'Mango Lassi',
      description: 'A refreshing blend of sweet mangoes, creamy yogurt, and a hint of cardamom.',
      price: 5.75,
      image: '/images/mango_lassi.jpg',
    },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="menu-container">
      <section className="menu">
        <h2>Our Menu</h2>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div className="menu-card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>${item.price.toFixed(2)}</span>
              <button
                className="add-to-cart"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} — ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button onClick={clearCart}>Clear Cart</button>
          </>
        )}
      </section>
    </div>
  );
}

