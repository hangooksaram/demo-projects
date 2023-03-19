import { useState, useEffect } from "react";

// hook 밖에서 선연된 전역 변수들. 그렇기에 이 hook 을 사용하는 컴포넌트들은 이 변수들에 한해 같은 값을 공유하게 됨.
let globalState = {};
let listeners = []; // hook 을 사용하는 모든 컴포넌트들을 업데이트
let actions = [];

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1]; // state 캡쳐에는 관심없고 update 하는 함수에만 관심이 있기때문에 이렇게 뽑아옴.

  const dispatch = (actionIdentifier, payload) => {
    // reducer 함수의 로직과 똑같음. 기존 state와 action params 로 받고 새로운 state 을 반환
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState }; // 새로운 state 를 만들고
    for (const listener of listeners) {
      // listener 에등록를 통해 모든 state 들을 새로운 state 로 변경함
      listener(globalState); // state 변화를 야기하기 때문에 해당 hook 을 사용하는 모든 컴포넌트들을 재렌더링함.
    }
  };
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState); // hook 을 사용하는 모든 컴포넌트들이 state 를 업데이트 하는 함수를 가짐
      // 컴포넌트가 언마운트되면 리스너배열에서 없어져야함
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((fn) => fn !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
