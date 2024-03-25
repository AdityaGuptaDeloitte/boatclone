import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h5>Shop</h5>
          <a href="http://localhost:3000/Products?Category=Airdopes">True Wireless Earbuds</a>
          <a href="http://localhost:3000/Products?Category=Earphone">Wireless Headphones</a>
          <a href="http://localhost:3000/Products?Category=Soundbar">Wired Headphones</a>
          <a href="http://localhost:3000/Products?Category=Speaker">Home Audio</a>
          <a href="http://localhost:3000/Products?Category=Smartwatch">Smart Watches</a>
          <a href="#">Misfit Trimmers</a>
        </div>
        <div className="footer-section">
          <h5>Help</h5>
          <a href="#">Track Your Order</a>
          <a href="#">Warranty & Support</a>
          <a href="#">Return Policy</a>
          <a href="#">Service Centers</a>
          <a href="#">Bulk Orders</a>
          <a href="#">FAQs</a>
          <a href="#">Why Buy Direct</a>
        </div>
        <div className="footer-section">
          <h5>Company</h5>
          <a href="#">About boAt</a>
          <a href="#">News</a>
          <a href="#">Read Our Blog</a>
          <a href="#">Careers</a>
          <a href="#">Security</a>
          <a href="#">Investor Relations</a>
          <a href="#">Social Responsibility</a>
          <a href="#">Warranty Policy</a>
        </div>
        <div className="footer-section footer-email">
          <h5>Subscribe to our email alerts!</h5>
          <input type="email" placeholder="Enter your email address"/>
          <button>Submit</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;