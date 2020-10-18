import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Initial State
const initialState = {};

// Store
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
