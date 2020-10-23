import { CLEAR_ERROR, LOGOUT } from "./types";

// Clear Error
export const clearError = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_ERROR,
    });
  };
};

// Logout
export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
