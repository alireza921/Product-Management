import { useReducer } from "react";

const initState = {
  firstCounter: 0,
  secendCounter: 0,
};
const reducer = (state, action) => {
  // console.log(initState.firstCounter);

  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    // case "addFive":
    //   return { ...state , firstCounter : state.firstCounter + 5 }
    case "dcrmnt":
      return {
        ...state,
        firstCounter:
          state.firstCounter <= 0
            ? initState.firstCounter
            : state.firstCounter - action.value,
      };
    // return {...state ,  firstCounter : state.firstCounter -1 }

    case "add2":
      return { ...state, secendCounter: state.secendCounter + action.value };
    case "dcrmnt2":
      return {
        ...state,
        secendCounter:
          state.secendCounter <= 0
            ? initState.secendCounter
            : state.secendCounter - action.value,
      };

    case "reset":
      return initState;

    default:
      return "deflt";
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  console.log(count);
  // console.log(count.firstCounter);
  return (
    <div>
      <div>
        salam Az counter One {count.firstCounter < 0 ? 0 : count.firstCounter}
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          {" "}
          click +1{" "}
        </button>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          {" "}
          click +5{" "}
        </button>
        <button onClick={() => dispatch({ type: "dcrmnt", value: 6 })}>
          {" "}
          {count.firstCounter <= 0 ? "err" : "click -1 "}{" "}
        </button>
      </div>
      <div>
        salam Az counter two {count.secendCounter < 0 ? 0 : count.secendCounter}
        <button onClick={() => dispatch({ type: "add2", value: 3 })}>
          {" "}
          click + 3{" "}
        </button>
        <button onClick={() => dispatch({ type: "dcrmnt2", value: 3 })}>
          {" "}
          click - 3{" "}
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}> Reset</button>
    </div>
  );
};

export default CounterReducer;
