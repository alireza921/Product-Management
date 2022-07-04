import { useState } from "react";

const HookObj = () => {
  // state
  const [user, setUser] = useState({
    firstName: " Ali",
    lastName: "ESM ",
  });

  const fHandler = (e) => {
    console.log(e.target.value);
    setUser({ ...user, firstName: e.target.value });
  };
  const lastHandler = (e) => {
    console.log("last name :", e.target.value);
    setUser({ ...user, lastName: e.target.value });
  };

  return (
    <div>
      <input type={"text"} onChange={fHandler} value = {user.firstName} />
      <h1> first Name is : {user.firstName} </h1>

      <input type={"text"} onChange={lastHandler} value = {user.lastName} />
      <h1> lastName is : {user.lastName} </h1>
    </div>
  );
};

export default HookObj;
