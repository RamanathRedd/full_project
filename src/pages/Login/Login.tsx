import { Component } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

class Login extends Component {
  // navigate = useNavigate();
  render() {
    return (
      <>
        <div className="Login">
          <div className="login-container">
            <h1 className="login-title">Login</h1>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Enter username" />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter password" />

            <button type="submit" className="submit-btn">
              Submit
            </button>

            <p className="register-link">
              Don't have an account? <a>Register Here</a>
            </p>
          </div>
        </div>
      </>
    );
  }

  // register() {
  //   this.navigate("/register");
  // }
}

export default Login;
