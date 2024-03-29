import { useReducer } from "react";

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    // 아무것도 해당되지 않을 때 기존 상태 반환
    default:
      return state;
  }
}

const Counter = () => {
  // useReducer의 첫번째 파라미터: 리듀서 함수
  // useReducer의 두번째 파라미터: 해당 리듀서의 기본값
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      {/* dispatch(action) 형태로 함수를 호출하면 리듀서 함수가 호출되는 구조 */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
