import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getCpuData } from '../api/data'

const CpuCharts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await getCpuData();
      // Handle both direct response and response with data property
      const cpuData = res.data

      if (!cpuData || typeof cpuData !== 'object') {
        throw new Error('Invalid data format received from API');
      }

      const newData = {
        time: new Date().toLocaleTimeString(),
        cpuLoad: (cpuData.cpu?.load || 0).toFixed(2), // Convert to percentage with fallback
        cpuTemp: cpuData.cpu?.temperature || 0,
        cores: (cpuData.cpu?.cores || []).map((core, index) => ({
          core: `Core ${index + 1}`,
          load: (core.load || 0).toFixed(2)// Convert to percentage with fallback
        }))
      };

      setData(prevData => [...prevData.slice(-20), newData]); // Keep last 20 data points
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err); // Debug log
      setError(`Failed to fetch system data: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">Loading system data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">No data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 w-2xl p-4">
      {/* CPU Load Chart */}
      <div className="rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Overall CPU Load (%)</h3>
        <ResponsiveContainer width="100%" height={150}>
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
      <div className="rounded-lg shadow">
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

      {/* Individual Core Loads Chart */}
      <div className="rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Individual Core Loads (%)</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            {data[0]?.cores.map((core, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={`cores[${index}].load`}
                stroke={`hsl(${index * 60}, 70%, 50%)`}
                name={`Core ${index + 1}`}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CpuCharts; 