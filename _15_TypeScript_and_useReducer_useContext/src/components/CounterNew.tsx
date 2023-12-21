import { ReactNode, useReducer, ChangeEvent } from "react";

const initialState = { counter: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  RESET,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: number | string;
};

function counterReducer(
  state: typeof initialState,
  action: ReducerAction,
): typeof initialState {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case REDUCER_ACTION_TYPE.RESET:
      return { ...state, counter: action.payload ?? 0 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      return state;
  }
}

type ChildrenType = {
  children: (num: number) => ReactNode;
};

export default function CounterNew({ children }: ChildrenType) {
  const [counterState, dispatchCounter] = useReducer(
    counterReducer,
    initialState,
  );

  const decrement = () =>
    dispatchCounter({
      type: REDUCER_ACTION_TYPE.DECREMENT,
      payload: 0,
    });
  const reset = () =>
    dispatchCounter({
      type: REDUCER_ACTION_TYPE.RESET,
      payload: initialState.counter,
    });
  const increment = () =>
    dispatchCounter({ type: REDUCER_ACTION_TYPE.INCREMENT, payload: 0 });

  const addText = (event: ChangeEvent<HTMLInputElement>) =>
    dispatchCounter({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: event.target.value,
    });

  return (
    <>
      {children}
      <h1>{children(counterState.counter)}</h1>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <label htmlFor="text">
          Type in something:
          <input type="text" id="text" className="text" onChange={addText} />
        </label>
      </div>
      <h2>{counterState.text}</h2>
    </>
  );
}
