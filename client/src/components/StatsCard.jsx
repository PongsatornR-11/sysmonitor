import React, { useEffect, useState } from 'react'
import { getSystemBasicData } from '../api/data';
import { Cpu, Thermometer, HardDrive, MemoryStick, Network, Clock4 } from 'lucide-react'


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
        const interval = setInterval(fetchData, 2000); // Fetch every 2 second
        
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
        <div className="p-6 border-2 rounded-2xl shadow-md flex flex-col gap-2 max-w-xl mx-auto mb-8">
            <div className="flex items-center gap-2 text-lg">
                <Cpu />
                <span>CPU Load : <span className="font-bold">{data.cpu.load.toFixed(2)}%</span></span>
            </div>
            <div className="flex items-center gap-2 text-lg">
                <Thermometer />
                <span>CPU Temp : <span className="font-bold">{data.cpu.temperature.toFixed(2)} °C</span></span>
            </div>
            <div className="flex items-center gap-2 text-lg">
                <MemoryStick />
                <span>Memory Used : <span className="font-bold">{formatBytes(data.memory.used)} / {formatBytes(data.memory.total)}</span></span>
            </div>


            <div className="flex items-center gap-2 text-lg">
                <HardDrive />
                <span>
                    Disk Used :
                    <span className="font-bold"> {formatBytes(data.disk[0].used)} / {formatBytes(data.disk[0].size)} </span>
                </span>
            </div>

            <div className="flex items-center gap-2 text-lg">
                <Network />
                <span>IP Address : <span className="font-bold">{data.network.interfaces[1].ip4}</span></span>
            </div>
            <div className="flex items-center gap-2 text-lg">
                <Clock4 />
                <span>Up-Time : <span className="font-bold">{formatTime(data.uptime)}</span></span>
            </div>
            
        </div>
    )
}

export default StatsCard