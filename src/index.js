import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App Component/App";
import AppTimer from "./Components/timer Component/AppTimer";

const Index = () => {
  return (
    <div>
      <App />
      
    </div>
    
  );
};
ReactDOM.render (<Index /> , document.getElementById("root"));

export default Index;
