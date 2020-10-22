import {
  INCREMENT,
  DECREMENT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLEAR_ERROR,
} from "./types";
import axios from "axios";

// // Register Action Creator
// export const register = (data) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post("/auth/users/register", {
//         name: data.name,
//         email: data.email,
//         password: data.password,
//         confirmPassword: data.confirmPassword,
//       });
//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: REGISTER_ERROR,
//         payload: error.response.data.error,
//       });
//       console.log(error.response);
//     }
//   };
// };

// Login Action Creator
export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/auth/users/login", {
        email: data.email,
        password: data.password,
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
      console.log(response);
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.error,
      });
      console.log(error.response);
    }
  };
};

// Clear Error
export const clearError = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_ERROR,
    });
  };
};
// Increment action Creator
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

// Decrement action creator
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
