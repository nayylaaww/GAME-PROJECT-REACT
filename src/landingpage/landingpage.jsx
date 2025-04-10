import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';
import gunung from './assets/gng.png';
import logo from './assets/logo-index.png';
import logo2 from './assets/erasebg-transformed.png';
import contactImage from './assets/contact-index.png';

const LandingPage = () => {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);

  return (
    <div className="landing-page">
      <img src={gunung} className="gunung" alt="Gunung" />
      <img src={logo} className="logo" alt="Logo" />

      <nav className="navbar">
        <ul>
          <li><Link to="/gameinfo">GameInfo</Link></li>
          <li><Link to="/karakter">Character</Link></li>
          <li><button onClick={toggleContact} className="contact-btn">Contact</button></li>
        </ul>
      </nav>

      <img src={logo2} className="logo2" alt="Logo 2" />

      <Link to="/setchar">
        <button className="btn1">Play Game</button>
      </Link>
      <Link to="/tutorial">
        <button className="btn2">Tutorial</button>
      </Link>

      <Link to="/login">
        <button className="login-button">LOGIN</button>
      </Link>

      {showContact && (
        <div id="contact-section">
          <button id="close-contact" onClick={closeContact}>✖</button>
          <img src={contactImage} alt="Contact Section" />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
