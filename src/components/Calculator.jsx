import React, { useState } from 'react';
import Board from './board/Board';

import './calculator.css';

const Calculator = () => {

  const [firstNumber, setFirstNumber] = useState([])
  const [secondNumber, setSecondNumber] = useState(0)
  const [operator, setOperator] = useState('')
  const [total, setTotal] = useState(0)

  const handleNumber = (key) => {
    setFirstNumber([...firstNumber, key])
  }

  const handleOperator = (operator) => {
    setOperator(operator)
    if (total === 0) {
      secondNumber === 0 ? setSecondNumber(Number(firstNumber.join(''))) : handleTotal();
    } else {
      setSecondNumber(total);
      setTotal(0)
    }
    setFirstNumber([]);
  }

  const reset = () => {
    setFirstNumber([]);
    setTotal(0);
    setSecondNumber(0)
  };

  const handleSign = (key) => {
    if (firstNumber[0] === key) {
      const subTotal = [...firstNumber]
      subTotal.splice(0, 1)
      setFirstNumber(subTotal)
    } else {
      setFirstNumber([key, ...firstNumber])
    }
  }

  const percent = () => {
    const percent = Number(firstNumber.join('')) / 100
    setFirstNumber([percent])
  }

  const handleDecimal = () => {
    if (firstNumber.length > 0) {
      if (!firstNumber.includes('.')) {
        setFirstNumber([...firstNumber, '.']);
      }
    } else {
      setFirstNumber([...firstNumber, '0', '.'])
    }
  }

  const handleTotal = () => {
    switch (operator) {
      case '+':
        setTotal(Number(firstNumber.join('')) + secondNumber)
        setFirstNumber([])
        break;
      case '-':
        setTotal(secondNumber - Number(firstNumber.join('')))
        setFirstNumber([])
        break;
      case 'x':
        setTotal(Number(firstNumber.join('')) * secondNumber)
        setFirstNumber([])
        break;
      case '/':
        setTotal(Number(secondNumber / firstNumber.join('')))
        setFirstNumber([])
        break;
    
      default:
        setTotal(firstNumber)
        break;
    }
  }

  return (
    <div className='container'>
      <div className='header'>
        <p>{firstNumber.length === 0 ? total : firstNumber}</p>
        <p className='second-number'>{secondNumber !== 0 && !total && secondNumber}</p>
      </div>
      <Board
        handleNumber={handleNumber}
        handleOperator={handleOperator}
        reset={reset}
        handleSign={handleSign}
        percent={percent}
        handleDecimal={handleDecimal}
        handleTotal={handleTotal}
      />
    </div>
  )
}

export default Calculator