import React, { useEffect, useState } from 'react'
import { getDiskData } from '../../api/data';
import ProgressBar from '../utils/ProgressBar';

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



    const convertDataSize = (data) => {
        return `${(data / (1024 * 1024 * 1024)).toFixed(2)} GB`
    }
    return (
        <div>
            <div className="text-lg rounded-2xl shadow-md flex flex-col gap-2 max-w-xl mx-auto mb-8">

                <h1 className="text-2xl font-bold mt-8 mb-4">Disk Stats</h1>
                {data.disk.map((disk) => {
                    if (disk.fs == '/dev/sdb1') {
                        return (
                            <a href='https://file.mypiserviceshub.com' target="_blank" className='p-6 border-2 rounded-2xl shadow-md flex flex-col gap-2 mb-8'>
                                <div>Disk name: {disk.fs}</div>
                                <div>Disk path: {disk.mount}</div>
                                <div>Disk Size: <span className='font-bold'>{convertDataSize(disk.used)} / {convertDataSize(disk.size)}</span></div>
                                <div>Disk Available: <span className='font-bold'>{convertDataSize(disk.available)}</span></div>
                                <div>Disk Used: <span className='font-bold'>{disk.usedPercentage.toFixed(2)}</span> %</div>
                                <ProgressBar percent={disk.usedPercentage.toFixed(2)} />
                            </a>
                        )
                    }
                    return (
                        <div className='p-6 border-2 rounded-2xl shadow-md flex flex-col gap-2 mb-8'>
                            <div>Disk name: {disk.fs}</div>
                            <div>Disk path: {disk.mount}</div>
                            <div>Disk Size: <span className='font-bold'>{convertDataSize(disk.used)} / {convertDataSize(disk.size)}</span></div>
                            <div>Disk Available: <span className='font-bold'>{convertDataSize(disk.available)}</span></div>
                            <div>Disk Used: <span className='font-bold'>{disk.usedPercentage.toFixed(2)}</span> %</div>
                            <ProgressBar percent={disk.usedPercentage.toFixed(2)} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default DiskDetail