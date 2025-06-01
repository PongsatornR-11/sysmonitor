import React from 'react'
import DiskDetail from '../components/disk/DiskDetail'
import { Helmet } from 'react-helmet'

const Disk = () => {
  return (
    <div>
      <Helmet>
        <title>Sysmonitor - Disk</title>
        <link rel="icon" type="image/png" href="assets/hard-drive.png" />
      </Helmet>

      <DiskDetail />
    </div>
  )
}

export default Disk