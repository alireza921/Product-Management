import { useState } from "react";

const HookArray = () => {
  const [item, setItem] = useState([]);

  const randomHandler = () => {
    // console.log();
    
    //in y raheshe :
    // setItem([
    //   ...item,
    //   {
    //     id: item.length,
    //     num: Math.floor(Math.random() * 10),
    //   },
    // ]);

    //in y rahe dg :
    const addItem = {
      id: item.length,
      num: Math.floor(Math.random() * 10),
    };
    const upadeItem = [...item, addItem];
    setItem(upadeItem);
  };

  return (
    <div>
      <button onClick={randomHandler}> click ME !!!</button>
      {item.map((p) => {
        return <span key={p.id}> {p.num}  </span>;
      })}
    </div>
  );
};

export default HookArray;
