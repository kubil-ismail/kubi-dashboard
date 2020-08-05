import React from 'react';

// Chart
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function Chart(props) {
  return (
    <LineChart
      className="chart"
      width={610}
      height={420}
      data={props.data}
      margin={{
        top: 30,
        bottom: 50
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis />
      <XAxis dataKey="date" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Instagram" stroke="#8884d8" />
      <Line type="monotone" dataKey="Facebook" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Telegram" stroke="#ff3c00" />
    </LineChart>
  );
}
