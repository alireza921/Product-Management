import React, { useContext, useReducer, useState } from "react";

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => useContext(CounterContextDispatcher);

const initState = 0;

const reducer = (state, action) => {
  // console.log(state);
  console.log(action.type);
  switch (action.type) {
    case "add":
      return state + action.value;
    case "dcr":
      return state - action.value;
    case "reset":
      return initState;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};
export default CounterProvider;
