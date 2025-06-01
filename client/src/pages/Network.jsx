import React from 'react'
import NetworkDetail from '../components/network/networkDetail'
import ConnectionDetails from '../components/network/ConnectionDetails'
import { Helmet } from 'react-helmet'
const Network = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sysmonitor - Network</title>
        <link rel="icon" type="image/png" href="assets/network.png" />
      </Helmet>
      <NetworkDetail />
      <ConnectionDetails />
    </div>
  )
}

export default Network