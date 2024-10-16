// ContactUs.jsx
import React from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  return (
    <div className="contactUs">
      <header className="hero-section">
        <img src="/contact.jpg" alt="Contact Us Banner" />
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>Your perfect property is just a call away. Let’s get in touch!</p>
        </div>
      </header>

      <section className="contact-info">
        <div className="container">
          <div className="info-block">
            <h2>Our Office</h2>
            <p>UrbanQuarters Realty</p>
            <p>Shop No. 5, Balaji Heights</p>
            <p>Manpada Road, Dombivli East, Maharashtra - 421201</p>
          </div>

          <div className="info-block">
            <h2>Get In Touch</h2>
            <p>Phone: +91 98234 56789</p>
            <p>Email: contact@urbanquarters.com</p>
            <p>Office Hours: Mon - Sat: 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      </section>

      <section className="google-map">
        <h2>Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8650542018957!2d73.08568667515765!3d19.218398595913673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795f75da743ab%3A0x9293c394b62f7aa!2sDombivli%20East%2C%20Dombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697546550164!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="#" className="icon facebook">Facebook</a>
          <a href="#" className="icon twitter">Twitter</a>
          <a href="#" className="icon instagram">Instagram</a>
          <a href="#" className="icon linkedin">LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 UrbanQuarters Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
