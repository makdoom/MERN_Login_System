import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/action";

import "../stylesheets/dashboard.css";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="dash">
      <h1>
        Welcome <span>{user.name}</span> to Dashboard
      </h1>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
};

export default Dashboard;
