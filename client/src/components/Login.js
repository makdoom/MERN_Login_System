import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/action";
import ErrorMessage from "./ErrorMessage";

const Login = () => {
  // Store
  const error = useSelector((state) => state.auth.error);
  // console.log("Current User: ", currentUser);

  // Dispatch
  const dispatch = useDispatch();

  // Local user object
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handling input
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handel Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(user));
    // console.log(currentUser);
  };

  return (
    <div className="login">
      <div className="login__box">
        <form className="form__control" onSubmit={handleSubmit}>
          <div className="login__header">
            <h2>Login</h2>
          </div>
          {error && <ErrorMessage message={error} />}
          <div className="login__body">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInput}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInput}
            />
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
