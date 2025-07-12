import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>

        <div className="hours">
          <h4>Business Hours</h4>
          <p>Mon–Thu: 11am – 8pm</p>
          <p>Fri–Sat: 11am – 11pm</p>
          <p>Sun: Closed</p>
        </div>

        <p className="copyright">© 2025 The Halal Stop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
