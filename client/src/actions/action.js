import { INCREMENT, DECREMENT } from "./types";
import axios from "axios";

// Login Action Creator
export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/auth/users/login", {
        email: data.email,
        password: data.password,
      });
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
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
