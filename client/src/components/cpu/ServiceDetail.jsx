import React, { useState, useEffect } from "react"
import { getServicesData } from '../../api/data'
import Button from '../button/Button'

export default function ServiceDetail() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [showService, setShowService] = useState(false)
    const toggleService = () => {
        setShowService(prev => !prev)
    }

    // Fetch data function
    const fetchData = async () => {
        try {
            const res = await getServicesData();
            setData(res.data);
            setError(null);
        } catch (err) {
            setError(`Failed to fetch service data: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
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
        <section className="my-8">
            <div className='flex justify-center items-center'>
                <h1 className="text-xl font-bold m-4">Runing Service Details</h1>
                <Button className='rounded-md text-sm border p-2 cursor-pointer hover:scale-105 ' name={showService ? 'Hide' : 'Show'} onClick={toggleService} />
            </div>

            {
                showService &&
                <table className="mx-auto border border-collapse w-full text-sm text-left">
                    <thead>
                        <tr className="border">
                            <th className="p-2 border">Service</th>
                            <th className="p-2 border">Status</th>
                            <th className="p-2 border">PID(s)</th>
                            <th className="p-2 border">CPU Load (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.services.map((service, index) => (
                            <tr key={index} className="hover:bg-gray-400 cursor-pointer">
                                <td className="p-2 border">{service.name}</td>
                                <td className="p-2 border">
                                    <span className={`px-2 py-1 rounded text-white ${service.running ? 'bg-green-500' : 'bg-red-500'} bg-opacity-50`}>
                                        {service.running ? 'Running' : 'Stopped'}
                                    </span>
                                </td>
                                <td className="p-2 border">
                                    {service.pids.length > 0 ? (
                                        service.pids.map((pidObj, i) => (
                                            <span key={i} className="inline-block mr-1 py-0.5">
                                                {/* <CopyTextBox textToCopy={Object.values(pidObj)[0]} textToShow={Object.values(pidObj)[0]} /> */}
                                                {Object.values(pidObj)[0]},
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-gray-400">—</span>
                                    )}
                                </td>
                                <td className="p-2 border">{service.cpu.toFixed(6)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </section>
    )
}