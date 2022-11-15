import React from 'react';

import './board.css';

const Board = ({ handleNumber, handleOperator, reset, handleSign, percent, handleDecimal, handleTotal }) => {
  return (
    <div className='grid-wrapper'>
      <button onClick={reset} className='btn'>AC</button>
      <button onClick={() => handleSign('-')} className='btn'>+/-</button>
      <button onClick={percent} className='btn'>%</button>
      <button onClick={(e) => handleOperator(e.target.textContent)} className='btn operator'>/</button>
      <button onClick={(e) => handleNumber(e.target.textContent)} className='btn'>7</button>
      <button onClick={(e) => handleNumber(e.target.textContent)} className='btn'>8</button>
      <button onClick={(e) => handleNumber(e.target.textContent)} className='btn'>9</button>
      <button onClick={(e) => handleOperator(e.target.textContent)} className='btn operator'>x</button>
      <button onClick={(e) => handleNumber(e.target.textContent)} className='btn'>4</button>
      <button onClick={(e) => handleNumber(e.target.textContent)} className='btn'>5</button>
      <button onClick={(e) => handleNumber(e.target.textContent)} className='btn'>6</button>
      <button onClick={(e) => handleOperator(e.target.textContent)} className='btn operator'>-</button>
      <button onClick={(e) => handleNumber(e.target.textContent)} className='btn'>1</button>
      <button onClick={(e) => handleNumber(e.target.textContent)} className='btn'>2</button>
      <button onClick={(e) => handleNumber(e.target.textContent)} className='btn'>3</button>
      <button onClick={(e) => handleOperator(e.target.textContent)} className='btn operator'>+</button>
      <button onClick={(e) => handleNumber(e.target.textContent)} className='item-0 btn'>0</button>
      <button onClick={handleDecimal} className='btn'>.</button>
      <button onClick={handleTotal} className='btn operator'>=</button>
    </div>
  )
}

export default Board