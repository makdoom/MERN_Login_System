import { INCREMENT, DECREMENT } from "../actions/types";

// Initialstate
const initialState = {
  numberOfCakes: 10,
};

const testingReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default testingReducer;
