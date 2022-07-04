import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const addOneHandler = () => {
    setCount(count + 1);
  };

  const addTwoHandler = () => {
    // setCount(count + 2);
    setCount((prv) => prv + 2);
    console.log(count);
  };

  const addFiveHandler = () => {
    // setCount(count + 5);
    for (let i = 0; i < 5; i++) {
      //   setCount(count + i); ---- ba i doros kar mikard code ! too jam zadan Ok bood .
      setCount((prv) => prv + 1);
    }
    console.log(count);
  };

  return (
    <div>
      <h2> this is the counter</h2>
      <button onClick={addOneHandler}> click for ++ </button>
      <button onClick={addTwoHandler}> click for 2++ </button>
      <button onClick={addFiveHandler}> click for 5++ </button>

      <p> {count}</p>
    </div>
  );
};

export default HookCounter;
