import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Counter from "./components/Counter";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter /> */}
        <Home />
      </div>
    </Provider>
  );
}

export default App;
