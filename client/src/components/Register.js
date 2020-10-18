import React from "react";
import "../stylesheets/register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="register__box">
        <form className="form__control">
          <div className="register__header">
            <h2>Regitser</h2>
          </div>
          <div className="register__body">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
