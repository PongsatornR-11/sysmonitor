import React, { useEffect, useState } from 'react'
import { getMemoryData } from '../../api/data';
import ProgressBar from '../utils/ProgressBar';
const MemoryCard = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data function
  const fetchData = async () => {
    try {
      const res = await getMemoryData();
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(`Failed to fetch system data: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 1000); // Fetch every 2 second

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

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">No data available</p>
      </div>
    );
  }
  const formatBytes = (bytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Byte";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return (bytes / Math.pow(1024, i)).toFixed(4) + " " + sizes[i];
  };
  return (
    <div className="text-lg rounded-2xl flex flex-col gap-2 w-fit mx-auto mb-8">
      <h1 className="text-2xl font-bold mt-8 mb-4">Memory Stats</h1>

      <div className='p-6 border-2 rounded-2xl shadow-md flex flex-col gap-2 mb-8'>
        <p className="text-xl font-semibold ">Used Memory: {formatBytes(data.memory.actualUsedMemory)}</p>
        <p className="text-xl font-semibold ">Total Memory: {formatBytes(data.memory.total)}</p>
        <p className="text-xl font-semibold ">Free Memory: {formatBytes(data.memory.available)}</p>
        <div className='border rounded-2xl p-2'>
          <p className="text-xl font-semibold ">Memory Usage: {data.memory.actualusedPercentage.toFixed(2)}%</p>
          <ProgressBar percent={data.memory.actualusedPercentage.toFixed(2)} suffix={'%'} />
        </div>
        <p className="text-xl font-semibold ">Memory Speed: {data.memoryLayout[0].clockSpeed} MHz</p>
      </div>

      <div className='p-6 border-2 rounded-2xl shadow-md flex flex-col gap-2 mb-8'>
        <p className="text-xl font-semibold ">Type Memory: {data.memoryLayout[0].type}</p>
        <p className="text-xl font-semibold ">Config Voltage: {data.memoryLayout[0].voltageConfigured} V</p>
        <p className="text-xl font-semibold ">Max Voltage: {data.memoryLayout[0].voltageMax} V</p>
        <div className='border rounded-2xl p-2'>
          <p className="text-xl font-semibold ">Min Voltage: {data.memoryLayout[0].voltageMin} V</p>
          <ProgressBar percent={(data.memoryLayout[0].voltageMax / data.memoryLayout[0].voltageMin * 100).toFixed(2)} suffix={'%'} />
        </div>
      </div>
    </div>
  )
}

export default MemoryCard