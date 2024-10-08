import React from 'react';
import './styles/Keypad.css';

function Keypad({ handleClick }) {
  // Lista de botones de la calculadora
  const buttons = [
    '*', '/', '^', 'C', // Primera fila
    '7', '8', '9', '+', // Segunda fila
    '4', '5', '6', '-', // Tercera fila
    '1', '2', '3', '.', // Cuarta fila
    ' ', '0', ' ', '='  // Quinta fila
  ];

  const isCarac = (btn) => {
    return ['C', '/', '*', '-', '+', '=', '.', '^'].includes(btn);
  };

  const isVac = (btn) => {
    return btn === ' ';
  };

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={isVac(btn) ? 'vac' : isCarac(btn) ? 'carac' : 'numero'}
          onClick={() => handleClick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
