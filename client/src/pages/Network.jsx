import React from 'react'
import NetworkDetail from '../components/network/networkDetail'
import ConnectionDetails from '../components/network/ConnectionDetails'

const Network = () => {
  return (
    <div className="min-h-screen"><NetworkDetail/><ConnectionDetails/></div>
  )
}

export default Network