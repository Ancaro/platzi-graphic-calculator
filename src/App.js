
// React
import React, {useState, useEffect} from 'react';

// Components
import Chart from './components/chart/Chart';
import DataForm from './components/data-form/DataForm';

// Styles
import './App.css';


function App() {

  const [barsData, setBarsData] = useState({});
  const [chartType, setChartType] = useState('bars');

  const data = {
    labels: [1.1, 2.7, 33],
    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, -23, 96],
        backgroundColor: [
          'red',
          'green',
          'blue',
        ],
        borderWidth: 1,
      }
    ]
  }

  useEffect(() => {
    setBarsData(data);
  }, [])

  return (
    <div className="App">
      
      <div className="header wrapper">
        <h1 className="title">Graphic calculator</h1>
        <h2 className="subtitle">Platzi Master assesment</h2>
      </div>

      <div className="data-form-wrapper wrapper">
        <DataForm></DataForm>
      </div>

      <div className="chart-wrapper wrapper">
        <Chart 
          barsData={barsData}
          chartType={chartType}
        />
      </div>
    </div>
  );
}

export default App;
