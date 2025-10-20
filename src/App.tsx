import React, { useState } from 'react';
import './App.css';
import { hover } from '@testing-library/user-event/dist/hover';


const App  = () => {
    const [addition, setAddition] = useState("")
    
    const handleClick = (value: string) => {
      const operator = ['+', '-', '*', '/'];
      if (operator.includes(value)) {
        if (addition === "") return;

        const lastChar = addition [addition.length -1];
        if(operator.includes(lastChar)) return;
      }
      setAddition((prev) => prev + value);

    };

    const handleEqual = () => {
      try {
        const result = eval(addition.replace(/x/g, '*'));
        setAddition(String(result));
      } catch (error) {
        setAddition("Error");
      }
    };
    const handleClear = () => {
  setAddition("");
};

    return(
     <div className="App">
    <div className="calc-wrapper">
    <input type="text" value={addition} placeholder="
     Enter number" readOnly />

    <div className="row">
    <button className="button" onClick={handleClear}>C</button>
    <button className="button" onClick={handleEqual }>=</button>
    
   
    </div>
    <div className="row">
    <button className="button" onClick={() => (handleClick("7"))}>7</button>
    <button className="button" onClick={() => (handleClick("8"))}>8</button>
    <button className="button" onClick={() => (handleClick("9"))}>9</button>
    <button className="button" onClick={() => (handleClick("/"))}>/</button>
    </div>
    <div className="row">
    <button className="button" onClick={() => (handleClick("4"))}>4</button>
    <button className="button" onClick={() => (handleClick("5"))}>5</button>
    <button className="button" onClick={() => (handleClick("6"))}>6</button>
    <button className="button" onClick={() => (handleClick("-"))}>-</button>
    </div>
     <div className="row">
    <button className="button" onClick={() => (handleClick("1"))}>1</button>
    <button className="button" onClick={() => (handleClick("2"))}>2</button>
    <button className="button" onClick={() => (handleClick("3"))}>3</button>
    <button className="button" onClick={() => (handleClick("+"))}>+</button>
    </div>
    <div className="row">
    <button className="button" onClick={() => (handleClick("."))}>.</button>
    <button className="button" onClick={() => (handleClick("0"))}>0</button>
    <button className="button" onClick={() => (handleClick("*"))}>*</button>
    </div>
      </div>
      </div>
    )
}
export default App;
