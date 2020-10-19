import { REGISTER_ERROR, REGISTER_SUCCESS } from "../actions/types";

// initialstate
const initialState = {
  isAuthenticated: false,
  token: "",
  error: "",
};

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        error: "",
      };

    case REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

// Exporting reducer
export default authReducer;
