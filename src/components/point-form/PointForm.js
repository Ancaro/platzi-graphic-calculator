
// React
import React, { useState } from 'react';

// Styles
import './PointForm.css'


const PointForm = ({ onAddPoint }) => {

  const [x, setX] = useState(0.0);
  const [y, setY] = useState(0.0);

  return (
    <div className="PointForm">
      <div className="point">
        <p>X:</p>
        <input type="number" onChange={event => setX(event.target.value)}/>
      </div>
      <div className="point">
        <p>Y:</p>
        <input type="number" onChange={event => setY(event.target.value)}/>
      </div>
      <button onClick={() => onAddPoint({x: x, y: y})}>
        Agregar
      </button>
    </div>
  )
}

export default PointForm;
