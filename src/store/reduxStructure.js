import { createStore } from "redux";

const initalState = {
  counter: 0,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "INC":
      return {counter : state.counter + 1};
    case "DEC":
      return {counter : state.counter - 1};
    case "ADD_EVEN":
        return {counter : state.counter + action.payload}
    case "RESET":
      return {counter : 0};
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
