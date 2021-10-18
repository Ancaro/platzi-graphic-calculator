
// React
import React from 'react';

// ChartJS
import { Bar, Scatter } from "react-chartjs-2";

// Styles
import './Chart.css'


const Chart = ({ seriesData }) => {

  return (
    <div className="Chart">

      {/* Bars Chart */}
      <div className="chart">
        <Bar
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