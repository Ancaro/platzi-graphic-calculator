
// React
import React, {useState, useEffect} from 'react';

// Components
import Chart from './components/chart/Chart';

// Styles
import './App.css';


function App() {

  const [barsData, setBarsData] = useState({});
  const [chartType, setChartType] = useState('bars');

  const data = {
    labels: [1.1, 2.7, 33],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, -23, 96],
        // you can set indiviual colors for each bar
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
      <Chart 
        barsData={barsData}
        chartType={chartType}
      />
    </div>
  );
}

export default App;
