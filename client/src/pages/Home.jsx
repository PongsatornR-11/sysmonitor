import React, { useState, useEffect } from 'react'

import {FaRaspberryPi } from 'react-icons/fa';
import { ChartLine } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import CpuCharts from '../components/CpuCharts';

export default function Home() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Generate sample data for testing
    const generateSampleData = () => {
      const data = [];
      const now = new Date();
      for (let i = 0; i < 20; i++) {
        data.push({
          time: new Date(now.getTime() - (20 - i) * 5000).toLocaleTimeString(),
          cpuLoad: Math.random() * 100,
          cpuTemp: 40 + Math.random() * 20
        });
      }
      return data;
    };

    setChartData(generateSampleData());
  }, []);

  return (
    <div className="min-h-screen p-6 font-mono">

      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <FaRaspberryPi className="text-5xl font-bold mr-3" />
        <h1 className="text-4xl font-extrabold tracking-tight">Raspberry Pi 5 Monitor</h1>
      </div>

      <StatsCard/>

      {/* Live Stats Section */}
      <div className="p-6 rounded-2xl shadow-md max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <ChartLine  />
          <span className="font-bold text-xl">Live Stats</span>
        </div>
        <CpuCharts data={chartData} />
      </div>
    </div>
  );
}
