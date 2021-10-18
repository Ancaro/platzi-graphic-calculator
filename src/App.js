
// React
import React, {useState, useEffect} from 'react';

// Components
import Chart from './components/chart/Chart';
import DataForm from './components/data-form/DataForm';

// Styles
import './App.css';


function App() {

  const [series, setSeries] = useState([]);

  return (
    <div className="App">
      
      <div className="header wrapper">
        <h1 className="title--green">Graphic calculator</h1>
        <h2 className="subtitle--green">Platzi Master assesment</h2>
      </div>

      <div className="data-form-wrapper wrapper">
        <DataForm
          onSeriesChange={new_series => setSeries(new_series)}
        />
      </div>

      <div className="chart-wrapper wrapper">
        <Chart 
          series={series}
        />
      </div>
    </div>
  );
}

export default App;
