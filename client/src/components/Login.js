import React from "react";
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
            Don't have an account ? <a href="#">Create One</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
