import React, { useEffect, useState } from 'react'
import { getDiskData } from '../../api/data';

const DiskDetail = () => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        try {
            const res = await getDiskData();
            setData(res.data);
            setError(null);
        } catch (err) {
            setError(`Failed to fetch system data: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000)
        return () => clearInterval(interval)
    }, [])

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

    const convertDataSize = (data) =>{
        return `${(data/(1024 * 1024 * 1024)).toFixed(2)} GB`
    }
    return (
        <div>
            <div className="text-lg rounded-2xl shadow-md flex flex-col gap-2 max-w-xl mx-auto mb-8">

                <h1 className="text-2xl font-bold mt-8 mb-4">Disk Stats</h1>
                {data.disk.map((disk) => {
                    return (
                        <div className='border rounded-2xl mb-4 py-4'>
                            <div>Disk name: {disk.fs}</div>
                            <div>Disk path: {disk.mount}</div>
                            <div>Disk Size: <span className='font-bold'>{convertDataSize(disk.used)} / {convertDataSize(disk.size)}</span></div> 
                            <div>Disk Available: <span className='font-bold'>{convertDataSize(disk.available)}</span></div>
                            <div>Disk Used:<span className='font-bold'>{disk.usedPercentage.toFixed(2)}</span> %</div>
                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}

export default DiskDetail