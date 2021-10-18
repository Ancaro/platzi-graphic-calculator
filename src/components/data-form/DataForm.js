
// React
import React, { useEffect, useState } from 'react';

// Components
import PointForm from '../point-form/PointForm';

// Styles
import './DataForm.css'


const DataForm = ({ onSeriesChange }) => {

  const [series, setSeries] = useState([]);
  
  useEffect(() => {
    if ( series.length > 5 ) {
      alert('No puedes agregar mas de 5 puntos.');
    }
    else {
      onSeriesChange(series)
    }
  }, [series]);

  return (
    <div className="DataForm">
      <p className="text">Acá puedes introducir los datos :)</p>
      <PointForm
        onAddPoint={(point) => { setSeries( series.concat(point) ) }}
      />
    </div>
  )
}

export default DataForm;
