const redux = require("redux");

const counterReducer = (oldState = { counter: 0 }, action) => {
  //처음 실행 될때 기존 state 에 대한 정보가 없음 (undefined)
  //그래서 초기값 을 줌.

  if (action.type === "increment") {
    return {
      counter: oldState.counter + 1,
    };
  } else return oldState;
};

const store = redux.createStore(counterReducer); //어떤 reducer 가 store 를 변경하는 지 store 가 알아야 함.
// reducer 함수를 가리킬 뿐. 실행은 redux 가.

const counterSubscriber = () => {
  store.getState();
};

store.subscribe(counterReducer); // 데이터와 store 가 변경될 때 마다 해당 함수를 실행. 누가? redux 가.

store.dispatch({ type: "increment" });
