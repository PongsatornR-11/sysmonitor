import React from 'react'
import CpuStat from '../components/cpu/CpuStat'
import ServiceDetail from '../components/cpu/ServiceDetail'
const CpuStatus = () => {
  return (
    <div className='w-4xl mx-auto'>
      <CpuStat />
      <ServiceDetail />
    </div>
  )
}

export default CpuStatus