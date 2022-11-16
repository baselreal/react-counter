import React, { useState } from "react";
import "./style.css";

export const Counter = () => {
  const [point, setPoint] = useState(0);
  
  const handlePlus = () => {
    setPoint(point + 1);
  }

  const handleMinus = () => {
    if (point > 0){
    setPoint(point - 1);
    }else{
        setPoint(0)
    }
  }
  
  const handleReset = () => {
    setPoint(0);
  };

  return (
    <div className="counting">
      <h1>INCREASE YOUR NUMBER</h1>
      <p>{point}</p>
      <button className="but1" onClick={() => handlePlus()}>
        +
      </button>
      <button className="but3" onClick={() => handleMinus(point - 1)}>
        -
      </button>
      <button className="but2" onClick={() => handleReset()}>
        RESET
      </button>
    
    </div>
  );
};
