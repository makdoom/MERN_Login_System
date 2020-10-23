import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REGISTER_SUCCESS, REGISTER_ERROR } from "../actions/types";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import "../stylesheets/register.css";

const Register = () => {
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const history = useHistory();

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

  // Register a user
  const getRegister = (data) => {
    return async (dispatch) => {
      try {
        const response = await axios.post("/auth/users/register", {
          name: data.name,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        });
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        });

        // Storing token in localStorage
        localStorage.setItem("token", response.data.token);

        // Requesting for Secret page
        const result = await axios.get("auth/users/dashboard", {
          headers: {
            authorization: response.data.token,
          },
        });
        if (result.status === 200) history.push("/dashboard");
      } catch (error) {
        dispatch({
          type: REGISTER_ERROR,
          payload: error.response.data.error,
        });
      }
    };
  };

  // Handel Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRegister(user));
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
