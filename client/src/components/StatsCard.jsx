import React, { useEffect, useState } from 'react'
import { getSystemBasicData } from '../api/data';
import { Cpu, Thermometer, HardDrive, MemoryStick, Network, Clock4, Calendar, ClockArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProgressBar from './utils/ProgressBar'


const StatsCard = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data function
    const fetchData = async () => {
        try {
            const res = await getSystemBasicData();
            setData(res.data);
            setError(null);
        } catch (err) {
            setError(`Failed to fetch system data: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // Initial fetch
        const interval = setInterval(fetchData, 1000); // Fetch every 2 second

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-semibold text-gray-600">Loading system data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-semibold text-red-500">{error}</p>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-semibold text-gray-600">No data available</p>
            </div>
        );
    }

    const formatBytes = (bytes) => {
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        if (bytes === 0) return "0 Byte";
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
    };

    const formatTime = (seconds) => {
        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor((seconds % (3600 * 24)) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        return `${d}d ${h}h ${m}m ${s}s`;
    };

    return (
        <div className="select-none p-6 border-2 rounded-2xl shadow-md flex flex-col gap-2 mx-auto w-fit mb-8 overflow-auto">

            <Link to='/cpu' className='items-center text-lg gap-2 hover:scale-105 duration-200 hover:p-2 hover:border rounded-xl'>
                <div className="flex items-center gap-2  mb-2">
                    <Cpu />
                    <span>CPU Load : <span className="font-bold">{data.cpu.load.toFixed(2)} %</span></span>
                </div>
                <ProgressBar percent={data.cpu.load.toFixed(2)} suffix={'%'} />

                <div className="flex items-center gap-2 ">
                    <Thermometer />
                    <span>CPU Temp : <span className="font-bold">{data.cpu.temperature.toFixed(2)} °C</span></span>
                </div>
                <ProgressBar percent={data.cpu.temperature.toFixed(2)} suffix={'°C'}/>
            </Link>

            <Link to='/memory' className='items-center text-lg gap-2 hover:scale-105 duration-200 hover:p-2 hover:border rounded-xl'>
                <div className="flex items-center gap-2">
                    <MemoryStick />
                    <span>Memory Used : <span className="font-bold">{formatBytes(data.memory.used)} / {formatBytes(data.memory.total)}</span></span>
                </div>
                <ProgressBar percent={((data.memory.used / data.memory.total) * 100).toFixed(2)} suffix={'%'}/>
            </Link>



            <Link to='/disk' className=" text-lg hover:scale-105 duration-200 hover:p-2 hover:border rounded-xl">
                <div className='flex items-center gap-2 text-lg'>

                    <HardDrive />
                    <span>
                        OS Disk Used :
                        <span className="font-bold"> {formatBytes(data.disk[0].used)} / {formatBytes(data.disk[0].size)} </span>
                    </span>
                </div>
                <ProgressBar percent={(((data.disk[0].used) / data.disk[0].size) * 100).toFixed(2)} suffix={'%'} />

            </Link>

            <Link to='/network' className="flex items-center gap-2 text-lg hover:scale-105 duration-200 hover:p-2 hover:border rounded-xl">
                <Network />
                <span>IP Address : <span className="font-bold">{data.network.interfaces[1].ip4}</span></span>
            </Link>
            <div className="flex items-center gap-2 text-lg ">
                <ClockArrowUp />
                <span>Up-Time : <span className="font-bold">{formatTime(data.uptime)}</span></span>
            </div>
            <hr />

            <div className='flex items-center gap-2'>
                <div className="flex items-center gap-2">
                    <Calendar /> <Clock4 />
                    <span>Current Date - time : <span className="font-bold">{new Date().toLocaleDateString()}</span></span>
                </div>
                <div className="flex items-center gap-2 ">
                    <span><span className="font-bold">- {new Date().toLocaleTimeString()}</span></span>
                </div>
            </div>
        </div>
    )
}

export default StatsCard