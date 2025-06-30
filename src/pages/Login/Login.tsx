import { Component } from "react";
// import "./Login.css";
import "../Register/Register.css";
import { useNavigate } from "react-router-dom";

class Login extends Component {
  // navigate = useNavigate();
  render() {
    return (
      // <>
      //   <div className="Login">
      //     <div className="login-container">
      //       <h1 className="login-title">Login</h1>
      //       <label htmlFor="username">Username</label>
      //       <input id="username" type="text" placeholder="Enter username" />

      //       <label htmlFor="password">Password</label>
      //       <input id="password" type="password" placeholder="Enter password" />

      //       <button type="submit" className="submit-btn">
      //         Login
      //       </button>

      //       <p className="register-link">
      //         Don't have an account? <a>Register Here</a>
      //       </p>
      //     </div>
      //   </div>
      // </>
      <div className="register-container">
        <h2 className="register-title">Create Account</h2>

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

        <p className="login-text">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    );
  }

  // register() {
  //   this.navigate("/register");
  // }
}

export default Login;
