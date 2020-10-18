import { createStore, applyMiddleware } from "redux";
import testingReducer from "./reducers/testingReducer";
import thunk from "redux-thunk";

// Initial State
const initialState = {};

// Store
const store = createStore(testingReducer, initialState, applyMiddleware(thunk));

export default store;
