import React from "react";
import { useDispatch } from "react-redux";
import { clearError } from "../actions/action";
import "../stylesheets/error.css";

const ErrorMessage = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <div className="error">
      <div className="error__message">
        <span>{message}</span>
      </div>
      <div className="error__clear">
        <button className="clear__btn">X</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
