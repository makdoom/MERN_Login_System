import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/action";

const Counter = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {user.counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
