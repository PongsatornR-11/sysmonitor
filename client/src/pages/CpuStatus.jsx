import React from 'react'
import CpuStat from '../components/cpu/CpuStat'
import ServiceDetail from '../components/cpu/ServiceDetail'
const CpuStatus = () => {
  return (
    <div>
      <CpuStat />
      <ServiceDetail />
    </div>
  )
}

export default CpuStatus