import React, { useEffect, useState } from 'react'
import { getCpuData } from '../../api/data'
import { Thermometer, Cpu } from 'lucide-react'
import CpuCharts from '../CpuCharts';
import ProgressBar from '../utils/ProgressBar';

const CpuStat = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data function
    const fetchData = async () => {
        try {
            const res = await getCpuData();
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
    
    return (
        <div className="min-h-screen">
            <div className="flex items-center justify-center mb-6">
                <h1 className="text-2xl font-extrabold tracking-tight">CPU Status</h1>
            </div>

            <div className="p-6 border-2 rounded-2xl shadow-md flex flex-col gap-2 max-w-xl mx-auto mb-8">
                <div className="items-center gap-2 rounded-2xl text-lg">
                    <div className='flex gap-2'>
                        <Cpu />
                        <span>CPU Load : <span className="font-bold">{data.cpu.load.toFixed(2)}%</span></span>
                    </div>
                    <ProgressBar percent={data.cpu.load.toFixed(2)} suffix={'%'}/>
                </div>

                <div className="items-center gap-2 rounded-2xl text-lg ">
                    <div className='flex gap-2'>
                    <Thermometer />
                    <span>CPU Temp : <span className="font-bold">{data.cpu.temperature.toFixed(2)} °C</span></span>
                    </div>
                    <ProgressBar percent={data.cpu.temperature} suffix={'%'}/>
                </div>
            </div>
            <div className="p-6 border-2 rounded-2xl shadow-md flex flex-col gap-2 max-w-xl mx-auto mb-8">
                {
                    data.cpu.cores.map((core, index) => {
                        return (
                            <div>
                                <div key={index} className="items-center rounded-2xl text-lg gap-2">
                                    <span className='flex gap-2 '><Cpu />Load core {index} :<span className='font-bold'> {core.load.toFixed(2)} %</span> </span>
                                    <ProgressBar percent={core.load.toFixed(2)} suffix={'%'}/>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            
            <CpuCharts/>

        </div>
    )
}

export default CpuStat