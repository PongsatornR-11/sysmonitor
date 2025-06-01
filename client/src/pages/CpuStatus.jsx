import React from 'react'
import CpuStat from '../components/cpu/CpuStat'
import ServiceDetail from '../components/cpu/ServiceDetail'
import { Helmet } from 'react-helmet'

const CpuStatus = () => {
  return (
    <div>
      <Helmet>
        <title>Sysmonitor - CPU</title>
        <link rel="icon" type="image/png" href="assets/cpu.png" />
      </Helmet>
      <CpuStat />
      <ServiceDetail />
    </div>
  )
}

export default CpuStatus