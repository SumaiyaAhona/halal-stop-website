// src/pages/Home.jsx
import React, { useState } from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-6 bg-black bg-opacity-60 fixed w-full z-20">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-white text-xl font-bold">The Halal Stop</h1>
        </div>
        <button
          className="text-white text-3xl md:hidden"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <nav>
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } flex-col md:flex md:flex-row md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent text-white px-6 md:px-0`}
          >
            <li><a href="/" className="block py-2">Home</a></li>
            <li><a href="/menu" className="block py-2">Menu</a></li>
            <li><a href="/about" className="block py-2">About</a></li>
            <li><a href="/contact" className="block py-2">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('/images/burger_fries.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-xl p-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Halal Stop</h2>
          <p className="text-lg mb-6">Experience bold flavors, made with 100% halal ingredients - every bite, every time.</p>
          <a href="#" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-300">Order Now</a>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="flex overflow-x-scroll space-x-4 px-4">
          <img src="/images/Chicken-Shawarma.jpg" alt="Food 1" className="w-80 h-52 object-cover rounded-lg flex-shrink-0" />
          <img src="/images/beef-burgers.jpeg" alt="Food 2" className="w-80 h-52 object-cover rounded-lg flex-shrink-0" />
          <img src="/images/chairs_tables.jpg" alt="Interior 1" className="w-80 h-52 object-cover rounded-lg flex-shrink-0" />
          <img src="/images/ice_cream.jpeg" alt="Food 3" className="w-80 h-52 object-cover rounded-lg flex-shrink-0" />
          <img src="/images/counter.jpg" alt="Interior 2" className="w-80 h-52 object-cover rounded-lg flex-shrink-0" />
          <img src="/images/family_eating.jpg" alt="Interior 3" className="w-80 h-52 object-cover rounded-lg flex-shrink-0" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-400">Facebook</a>|
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-400">Instagram</a>|
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-400">Twitter</a>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
            <p>Mon–Thu: 11am – 8pm</p>
            <p>Fri–Sat: 11am – 11pm</p>
            <p>Sun: Closed</p>
          </div>
          <p className="text-sm text-gray-400">© 2025 The Halal Stop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

