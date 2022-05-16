import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

//output the chart bars dynamically by going through an array of data points and mapping every data point to a chart bar
function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
