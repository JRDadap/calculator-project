import React, { useState } from 'react';
import './App.css';
import CustomButton from './CustomButton';

const App  = () => {
    const [equation, setEquation] = useState("")
    
    const handleClick = (value: number | string) => {
      const operator = ['+', '-', '*', '/'];
      if (typeof value === 'string' && operator.includes(value)) {
        if (equation === "") return;

        const lastChar = equation [equation.length -1];
        if(operator.includes(lastChar)) return;
      }
      setEquation((prev) => prev + value);

    };

    const handleEqual = () => {
      try {
        const result = eval(equation.replace(/x/g, '*'));
        setEquation(String(result));
      } catch (error) {
        setEquation("Error");
      }
    };
    const handleClear = () => {
  setEquation("");
};

    return(
     <div className="App">
      <div className="calc-wrapper">
      <input type="text" value={equation} placeholder="
        Enter number" readOnly />

    <div className="row">
      <CustomButton onClick={handleClear} value={"C"} />
      <CustomButton onClick={handleEqual} value={"="} />
    </div>
    <div className="row">
        <CustomButton onClick={handleClick} value={7} />
        <CustomButton onClick={handleClick} value={8}  />
        <CustomButton onClick={handleClick} value={9} />
        <CustomButton onClick={handleClick} value={"/"} />
    </div>
    <div className="row">
        <CustomButton onClick={handleClick} value={4} />
        <CustomButton onClick={handleClick} value={5} />
        <CustomButton onClick={handleClick} value={6} />
        <CustomButton onClick={handleClick} value={"-"} />
    </div>
     <div className="row">
        <CustomButton onClick={handleClick} value={1} />
        <CustomButton onClick={handleClick} value={2} />
        <CustomButton onClick={handleClick} value={3} />
        <CustomButton onClick={handleClick} value={"+"} />
    </div>
    <div className="row">
        <CustomButton onClick={handleClick} value={"1"} />
        <CustomButton onClick={handleClick} value={0} />
        <CustomButton onClick={handleClick} value={"*"} />
    </div>
      </div>
      </div>
    )
}
export default App;
