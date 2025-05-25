import React from 'react'
import { Helmet } from 'react-helmet'

import { FaRaspberryPi } from 'react-icons/fa';
import { ChartLine, ChevronRight } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import CpuCharts from '../components/CpuCharts';
import ServicesHub from '../components/ServicesHub';
import Blinking from '../components/utils/Blinking';

export default function Home() {

  return (
    <div>
      <Helmet>
        <title>Sysmonitor - Home</title>
        <link rel="icon" type="image/png" href="assets/house.png" />
      </Helmet>

      <div className="select-none min-h-screen w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 w-fit mx-auto">
          <div className='flex items-center'>
            <FaRaspberryPi className="flex items-center text-5xl font-bold mr-3" />
            <h1 className="flex items-center text-4xl font-extrabold tracking-tight">Raspberry Pi Monitor</h1>
            
            <div className='ml-3 flex items-end'>
              <ChevronRight className="text-5xl font-bold flex items-center" />
            </div>
            <div>
              <Blinking time={500}>
                _ 
              </Blinking>
            </div>
          </div>
        </div>

        <StatsCard className={'mx-auto'} />

        <ServicesHub />
        {/* https://www.gatesnotes.com/microsoft-original-source-code */}

        {/* Live Stats Section */}
        <div className="p-6 rounded-2xl shadow-md w-fit border-2 m-4 mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <ChartLine />
            <span className="font-bold text-xl">Live Stats</span>
          </div>
          <CpuCharts />
        </div>
      </div>
    </div>
  );
}
