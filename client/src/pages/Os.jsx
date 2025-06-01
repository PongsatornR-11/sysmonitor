import React from 'react'
import { Helmet } from 'react-helmet'

import OSInfoCard from '../components/os/OSInfoCard'

const Os = () => {
  return (
    <div>
      <Helmet>
        <title>Sysmonitor - OS</title>
        <link rel="icon" type="image/png" href="assets/monitor-cog.png" />
      </Helmet>
      <OSInfoCard />
    </div>
  )
}

export default Os