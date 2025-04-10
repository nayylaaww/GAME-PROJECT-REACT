import React from 'react';
import './login.css';
import loginLogo from '../assets/login-logo.png';
import backButton from '../assets/back.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="lb-login">
      <div className="login-container">
        <img src={loginLogo} className="login-logo" width="150" alt="Login Logo" />

        <Link to="/">
          <img src={backButton} className="back-button" alt="Back" />
        </Link>

        <div className="login-box">
          <div className="input-group">
            <span className="icon">👤</span>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Password" />
          </div>
          <button className="login-button">Login</button>
          <p className="register-text">
            don't have an account?{' '}
            <Link to="/register">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
