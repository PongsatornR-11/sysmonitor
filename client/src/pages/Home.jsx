import React from 'react'

import {FaRaspberryPi } from 'react-icons/fa';
import { ChartLine } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import CpuCharts from '../components/CpuCharts';

export default function Home() {

  return (
    <div className="min-h-screen font-mono">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <FaRaspberryPi className="text-5xl font-bold mr-3" />
        <h1 className="text-4xl font-extrabold tracking-tight">Raspberry Pi Monitor</h1>
      </div>

      <StatsCard/>

      {/* Live Stats Section */}
      <div className="p-6 rounded-2xl shadow-md max-w-4xl mx-auto border-2">
        <div className="flex items-center gap-2 mb-2">
          <ChartLine  />
          <span className="font-bold text-xl">Live Stats</span>
        </div>
        <CpuCharts/>
      </div>
    </div>
  );
}
