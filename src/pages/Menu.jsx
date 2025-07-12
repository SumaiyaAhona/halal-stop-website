import React from 'react';
import '../style.css';


export default function Menu() {
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
                data-name={item.name}
                data-price={item.price}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="cart">
        <h2>Your Cart</h2>
        <ul id="cart-items"></ul>
        <p id="cart-total">Total: $0.00</p>
        <button id="clear-cart">Clear Cart</button>
      </section>
    </div>
  );
}
