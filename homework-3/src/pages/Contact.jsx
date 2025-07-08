// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* CONTACT SECTION */}
      <section className="contact flex-grow bg-gray-50 py-20 px-6 md:px-0 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-6">📍 Contact Us</h2>
        <p className="mb-8 max-w-xl">
          We would love to hear from you! Whether it's a catering request, feedback, or just saying hi — drop us a message.
        </p>

        <div className="contact-content flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <form className="contact-form flex flex-col gap-4 flex-1 max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-yellow-400"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-yellow-400 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Google Map */}
          <div className="map-container flex-1 rounded-lg overflow-hidden shadow-lg max-w-full h-72 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132449766!2d-73.9855426!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1749761785807!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer bg-black text-white py-8 text-center">
        <div className="footer-content max-w-4xl mx-auto">
          <div className="socials mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-400">
              Facebook
            </a>|
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-400">
              Instagram
            </a>|
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-yellow-400">
              Twitter
            </a>
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

export default Contact;

