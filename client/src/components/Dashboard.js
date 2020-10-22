import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div>
      <h1>Welcome to Dahsboard</h1>
    </div>
  );
};

export default Dashboard;
