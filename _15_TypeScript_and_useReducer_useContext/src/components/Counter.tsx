import { /* useState, */ ReactNode, useReducer } from "react";
import { counterReducer } from "../libs/counterReducer";
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from "./../libs/counterAction";
type ChildrenType = {
  children: (num: number) => ReactNode;
};

const initialState = { counter: 0 };

export default function Counter({ children }: ChildrenType) {
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    initialState,
  );

  const decrement = () => dispatchCounter({ type: DECREMENT_COUNTER });
  const reset = () =>
    dispatchCounter({ type: RESET_COUNTER, payload: initialState.counter });
  const increment = () => dispatchCounter({ type: INCREMENT_COUNTER });

  return (
    <>
      {children}
      <h1>{children(counterState.counter)}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </>
  );
}
