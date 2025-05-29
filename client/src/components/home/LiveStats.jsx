import React, { useState } from 'react'
import { ChartLine } from 'lucide-react'
import CpuCharts from '../CpuCharts'
import Button from '../button/Button'

const LiveStats = ({ className }) => {

    const [showLiveStats, setShowLiveStats] = useState(false)

    const toggleLiveStats = () => {
        setShowLiveStats(prev => !prev);
    }
    return (
        <div className={`${className} p-6 rounded-2xl shadow-md w-fit border-2 m-4`}>
            <div className="flex items-center gap-2 mb-2 justify-between">
                <div className='flex'>
                    <ChartLine />
                    <span className="font-bold ">Live Stats</span>
                </div>
                <Button className='rounded-md text-sm border p-2 cursor-pointer hover:scale-105' name={showLiveStats ? 'Hide' : 'Show'} onClick={toggleLiveStats} />
            </div>
            {showLiveStats && <CpuCharts />}
        </div>
    )
}

export default LiveStats