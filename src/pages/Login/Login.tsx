import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login">
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="Enter username" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter password" />

          <button type="submit" className="submit-btn">
            Login
          </button>

          <p className="register-link">
            Don't have an account?{" "}
            <a onClick={() => register()}>Register Here</a>
          </p>
        </div>
      </div>
    </>
  );

  function register() {
    navigate("/register");
  }
};

export default Login;
