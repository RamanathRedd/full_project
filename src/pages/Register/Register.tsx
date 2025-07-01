import React, { Component } from "react";
import "../Register/Register.css";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="register">
      <div className="register-container">
        <h2 className="register-title">Create Account</h2>

        {/* <form onSubmit={}> */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Enter your username" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          placeholder="Confirm password"
        />

        <button type="submit" className="submit-btn">
          Register
        </button>
        {/* </form> */}

        <p className="login-link">
          Already have an account? <a onClick={() => login()}>Login</a>
        </p>
      </div>
    </div>
  );

  function login() {
    navigate("/login");
  }
};

export default Register;
