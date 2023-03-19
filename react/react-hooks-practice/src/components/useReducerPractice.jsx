import { useReducer } from "react";

const INITIAL_STATE = { counter: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { counter: state.counter + 1 };

    case "decrease":
      return { counter: state.counter - 1 };

    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const clickCounterHandler = (type) => {
    dispatch({ type });
  };
  return (
    <div>
      <h1>counter value is {state.counter}</h1>
      <button onClick={() => clickCounterHandler("increase")}>증가</button>
      <button onClick={() => clickCounterHandler("decrease")}>감소</button>
    </div>
  );
};

export default UseReducer;
