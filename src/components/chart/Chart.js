
// React
import React, {useEffect, useState} from 'react';

// ChartJS
import { Bar, Scatter, defaults } from "react-chartjs-2";

// Styles
import './Chart.css'


// Animation is causing troubles
defaults.animation = false;

const Chart = ({ series }) => {

  const [seriesData, setSeriesData] = useState({});

  // Convert data to ChartJS format
  useEffect(() => {
    const labels = [];
    const data = [];
    series.forEach(point => {
      labels.push(point.x);
      data.push(point.y);
    });
    setSeriesData({
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          '#95ca3e',
          'rgb(18, 31, 61)',
        ],
      }],
    });
  }, [series])

  return (
    <div className="Chart">

      {/* Bars Chart */}
      <div className="chart">
        <Bar
          // redraw={true}
          data={seriesData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Barras"
              },
              legend: {
                display: false,
              }
            }
          }}
        />
      </div>

      {/* Scatter Chart */}
      <div className="chart">
        <Scatter
          data={seriesData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Puntos"
              },
              legend: {
                display: false,
              }
            }
          }}
        />
      </div>

    </div>
  );
}

export default Chart;