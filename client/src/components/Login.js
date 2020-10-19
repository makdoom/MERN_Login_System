import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__box">
        <form className="form__control">
          <div className="login__header">
            <h2>Login</h2>
          </div>
          <div className="login__body">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </div>
          <p>
            Don't have an account ? <Link to="/register">Create One</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
