import React from 'react'
import { Helmet } from 'react-helmet'

import StatsCard from '../components/StatsCard';
import ServicesHub from '../components/ServicesHub';
import Header from '../components/home/Header';
import LiveStats from '../components/home/LiveStats';

export default function Home() {

  return (
    <div>
      <Helmet>
        <title>Sysmonitor - Home</title>
        <link rel="icon" type="image/png" href="assets/house.png" />
      </Helmet>

      <div className="select-none min-h-screen w-fit mx-auto">
        <Header className={'mx-auto'}/>
        <StatsCard className={'mx-auto'} />
        <ServicesHub className={'mx-auto'}/>
        <LiveStats className={'mx-auto'}/>
      </div>
    </div>
  );
}
