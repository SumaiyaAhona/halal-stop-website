// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ABOUT SECTION */}
      <section className="about flex-grow bg-gray-50 py-20">
        <div className="about-container max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-md text-gray-800">
          <h2 className="text-3xl mb-6">🍔 About The Halal Stop</h2>
          <p className="mb-4">
            The Halal Stop was founded by a passionate chef bringing bold, halal street flavors to the heart of the city. Known for our mouthwatering cheeseburgers, crispy fries, and refreshing mango lassi, our mission is to serve delicious food that's 100% halal and full of flavor.
          </p>
          <p>
            From late-night cravings to family dinners, we’re here to bring joy—one bite at a time. Come taste the difference!
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer bg-black text-white py-8 text-center">
        <div className="footer-content max-w-4xl mx-auto">
          <div className="socials mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-400">Facebook</a>|
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-400">Instagram</a>|
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-400">Twitter</a>
          </div>

          <div className="hours mb-4">
            <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
            <p>Mon–Thu: 11am – 9pm</p>
            <p>Fri–Sat: 11am – 11pm</p>
            <p>Sun: Closed</p>
          </div>

          <p className="copyright text-sm text-gray-400">© 2025 The Halal Stop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
