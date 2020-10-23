import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLEAR_ERROR,
  LOGOUT,
} from "../actions/types";

// initialstate
const initialState = {
  user: {
    name: "",
    email: "",
  },
  isAuthenticated: false,
  token: "",
  error: "",
};

// Reducer
const authReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: {
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
        error: "",
      };

    case REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: {
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
        error: "",
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: "",
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: { name: "", email: "" },
        token: "",
        error: "",
      };

    default:
      return state;
  }
};

// Exporting reducer
export default authReducer;
