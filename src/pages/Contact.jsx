import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>📍 Contact Us</h2>
      <p>We would love to hear from you! Whether it's a catering request, feedback, or just saying hi — drop us a message.</p>

      <div className="contact-content">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="map-container">
          <iframe
            src="YOUR GOOGLE MAPS EMBED URL"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
