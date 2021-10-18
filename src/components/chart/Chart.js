
// React
import React from 'react';

// ChartJS
import { Bar, Scatter } from "react-chartjs-2";

// Styles
import './Chart.css'


const Chart = ({ barsData, chartType }) => {

  return (
    <div className="Chart">

      {/* Bars Chart */}
      {
        chartType === 'bars' &&
        <div className="chart">
          <Bar
            data={barsData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Barras"
                },
                legend: {
                  display: true,
                  position: "bottom"
               }
              }
            }}
          />
        </div>
      }

      {/* Scatter Chart */}
      {
        chartType === 'bars' &&
        <div className="chart">
          <Scatter
            data={barsData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Puntos"
                },
                legend: {
                  display: true,
                  position: "bottom"
               }
              }
            }}
          />
        </div>
      }

    </div>
  );
}

export default Chart;