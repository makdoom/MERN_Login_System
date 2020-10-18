import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./stylesheets/App.css";
import Counter from "./components/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <div className="app">
            <Route exact path="/login" component={Login} />
            <Route exact path="/counter" component={Counter} />
          </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
