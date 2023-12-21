import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from "./counterAction";

export function counterReducer(state, action) {
  switch (action.type) {
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case RESET_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}
