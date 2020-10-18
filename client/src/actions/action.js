import { INCREMENT, DECREMENT } from "./types";

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
