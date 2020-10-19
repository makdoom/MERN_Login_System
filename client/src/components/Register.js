import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/action";
import "../stylesheets/register.css";
import ErrorMessage from "./ErrorMessage";

const Register = () => {
  // Store
  const error = useSelector((state) => state.auth.error);
  // console.log("Current User: ", currentUser);

  // Dispatch
  const dispatch = useDispatch();

  // Local user object
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handling input
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handel Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(register(user));
    // console.log(currentUser);
  };

  return (
    <div className="register">
      <div className="register__box">
        <form className="form__control" onSubmit={handleSubmit}>
          <div className="register__header">
            <h2>Register</h2>
          </div>
          {error && <ErrorMessage message={error} />}
          <div className="register__body">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInput}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              onChange={handleInput}
            />
            <button type="submit">Register</button>
            <p>
              Have an account ? <Link to="/">Login</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
