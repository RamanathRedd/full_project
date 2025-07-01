import React, { useState } from "react";
import "../Register/Register.css";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  return (
    <div className="register">
      <div className="register-container">
        <h2 className="register-title">Create Account</h2>

        <form onSubmit={registeredData}>
          <label htmlFor="username">
            Username<span> *</span>
          </label>
          <input
            id="username"
            type="text"
            name="name"
            value={registerData.name}
            onChange={setChange}
            placeholder="Enter your username"
            required
          />

          <label htmlFor="email">
            Email<span> *</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={registerData.email}
            onChange={setChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">
            Password<span> *</span>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={registerData.password}
            onChange={setChange}
            placeholder="Enter your password"
            required
          />

          <label htmlFor="confirm-password">
            Confirm Password<span> *</span>
          </label>
          <input
            id="confirm-password"
            type="password"
            name="confirm_password"
            value={registerData.confirm_password}
            onChange={setChange}
            placeholder="Confirm password"
            required
          />

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>

        <p className="login-link">
          Already have an account? <a onClick={() => login()}>Login</a>
        </p>
      </div>
    </div>
  );

  function login() {
    navigate("/login");
  }

  function registeredData(e: any) {
    e.preventDefault();
    if (registerData.password != registerData.confirm_password) {
      console.log("password mismatch");
    }
    console.log(registerData);
  }

  function setChange(e: any) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }
};

export default Register;
