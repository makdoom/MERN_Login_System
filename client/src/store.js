import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// Store
const store = createStore(rootReducer, {}, applyMiddleware(thunk));

// Exporting;
export default store;
