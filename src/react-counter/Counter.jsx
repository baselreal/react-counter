import React, { useState } from "react";
import "./style.css";

export const Counter = () => {
  const [point, setPoint] = useState(0);
  
  const plus = () => {
    setPoint(point + 1);
  }

  const minus = () => {
    if (point > 0){
    setPoint(point - 1);
    }else{
        setPoint(0)
    }
  }
  
  const Reset = () => {
    setPoint(0);
  };

  return (
    <div className="counting">
      <h1>INCREASE YOUR NUMBER</h1>
      <p>{point}</p>
      <button className="but1" onClick={() => plus()}>
        +
      </button>
      <button className="but2" onClick={() => Reset()}>
        RESET
      </button>
      <button className="but3" onClick={() => minus(point - 1)}>
        -
      </button>
    </div>
  );
};
