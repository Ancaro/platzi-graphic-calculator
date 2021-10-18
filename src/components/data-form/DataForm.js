
// React
import React, { useEffect, useState } from 'react';

// Components
import PointForm from '../point-form/PointForm';

// Styles
import './DataForm.css'


const DataForm = ({ onSeriesChange }) => {

  const [series, setSeries] = useState([]);
  const [error, setError] = useState('');
  const [errorTime, setErrorTime] = useState(undefined);

  useEffect(() => {
    if ( series.length > 5 ) {
      series.pop();
      onError('No puedes agregar mas de 5 puntos.');
    }
    else {
      onSeriesChange(series)
    }
  }, [series]);

  const clearSeries = () => {
    setError('');
    setSeries([]);
  }

  async function onError ( message ) {
    setError(message);
    clearTimeout(errorTime);
    setErrorTime(setTimeout(() => {setError('')}, 4000));
  }

  return (
    <div className="DataForm">
      <p className="text">Acá puedes introducir los datos :)</p>
      <div className="inline">
        <PointForm
          onAddPoint={(point) => { setSeries( series.concat(point) ) }}
        />
        <p className="error">{error}</p>
      </div>
      <div className="inline">
        <p className="text">
          Tu serie de datos es: 
          { series.slice(0,5).map( (p, index) => <span className="data-point" key={index}>({p.x},{p.y})</span> ) }
        </p>
        <button className="clear-all" onClick={clearSeries}>Borrar todo</button>
      </div>
    </div>
  )
}

export default DataForm;
