import React from 'react';

const BaseChart = ({ title }) => {
  return (
    <div className="chart-container">
      <h4>{title}</h4>
      <div className="chart-placeholder">Chart Visualization Placeholder</div>
    </div>
  );
};

export default BaseChart;
