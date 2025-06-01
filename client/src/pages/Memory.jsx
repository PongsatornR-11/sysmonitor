import React from 'react'
import MemoryCard from '../components/mem/MemoryCard'
import { Helmet } from 'react-helmet'

const Memory = () => {
    return (
        <div>
            <Helmet>
                <title>Sysmonitor - Memory</title>
                <link rel="icon" type="image/png" href="assets/memory-stick.png" />
            </Helmet>
            <MemoryCard />
        </div>
    )
}

export default Memory