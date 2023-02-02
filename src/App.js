import React, { useState } from 'react';
import './style.css';
import Display from './components/display/display';
import Key from './components/key/key';

export default function App() {
  const [displayValue, setDisplayValue] = useState('');
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];
  const operators = ['+', '-', '*', '/', '='];

  const [clickedNumbers, setNumbers] = useState([]);
  const [clickedOperator, setOperator] = useState('');

  const handleNumberChange = (event) => {
    console.log(event);
    setNumbers([...clickedNumbers, event.target.value]);

    if(clickedOperator){
      setDisplayValue("="+eval(displayValue + event.target.value));
    }else{
      setDisplayValue(displayValue + event.target.value);
    }
  };

  const handleOperatorClick = (event) => {
    let operator = event.target.value;
    setOperator(operator);
    setDisplayValue(displayValue + operator);
  };

  const numbersComponent = numbers.map((number) => (
    <span className="">
    <Key
      key={number}
      value={number}
      onClick={handleNumberChange}
      onClickHandler={handleNumberChange}
    />
    </span>
  ));
  const operatorComponent = operators.map((operator, index) => (
    <span>
    <Key
      key={index}
      value={operator}
      onClick={handleOperatorClick}
      onClickHandler={handleOperatorClick}
    />
    </span>
  ));

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <div className="display">
          <Display value={displayValue} />
        </div>

        <div className="key">
          <div className="numbers">{numbersComponent}</div>
          <div className="operators">{operatorComponent}</div>
        </div>
      </div>
    </div>
  );
}
