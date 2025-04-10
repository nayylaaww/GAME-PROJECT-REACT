import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="lb-register">
      <div className="login-container">
        <img src="/src/assets/register-logo.png" className="register-logo" width="150" alt="Register Logo" />

        <a href="/">
          <img src="/src/assets/back.png" className="back-button" alt="Back Button" />
        </a>

        <div className="login-box">
          <div className="input-group">
            <span className="icon">👤</span>
            <input type="text" placeholder="Username" />
          </div>

          <div className="input-group email">
            <span className="icon">📧</span>
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Password" />
          </div>

          <button className="login-button">Login</button>
          <p className="login-text">
            don't have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
