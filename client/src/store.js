import { createStore, applyMiddleware } from "redux";
import testingReducer from "./reducers/testingReducer";
import thunk from "redux-thunk";

// Store
const store = createStore(testingReducer);

export default store;
