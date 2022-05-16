import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let chartbarFillHeight = "0%";

  if (props.max > 0) {
    chartbarFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: chartbarFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
}

export default ChartBar;
