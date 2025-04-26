import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getSystemData } from '../api/data'

const CpuCharts = ({ data }) => {

  const fetchData = async () => {
    
  }
  return (
    <div className="space-y-6">
      {/* CPU Load Chart */}
      <div className="p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">CPU Load (%)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cpuLoad" stroke="#8884d8" name="CPU Load" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* CPU Temperature Chart */}
      <div className="p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">CPU Temperature (°C)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cpuTemp" stroke="#ff7300" name="CPU Temperature" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CpuCharts; 