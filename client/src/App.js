import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Counter from "./components/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/login" component={Home} />
            <Route exact path="/counter" component={Counter} />
          </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
