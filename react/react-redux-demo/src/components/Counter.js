import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const INCREMENT = "increment"; // 식별자가 오타가 나는 것을 방지해줌

const Counter = () => {
  const dispatch = useDispatch(); // store 에 action 을 전달.
  const counter = useSelector((state) => state.counter.counter); //자동으로 이 컴포넌트에 대해 store 에 구독 됨. 고로 이 컴포넌트에 한해 store 의 데이터가
  const show = useSelector((state) => state.counter.showCounter);
  // 변경될 때 마다 자동으로 업데이트 되고 자동으로 ui 가 렌더링 됨.
  // 이 컴포넌트가 unmount 되거나 dom 에서 삭제되면 구독도 자동으로 제거 됨.

  const { increase, increment, decrement, toggleCounter } = counterActions;

  const increaseHandler = () => {
    dispatch(increment());
  };
  const increaseBy5Handler = () => {
    dispatch(increase(10));
  };
  const decreaseHandler = () => {
    dispatch(decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={increaseBy5Handler}>Increment</button>
        <button onClick={decreaseHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
