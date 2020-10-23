import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./stylesheets/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <div className="app">
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
