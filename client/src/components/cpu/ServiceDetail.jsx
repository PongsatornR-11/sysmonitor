import React, { useState, useEffect } from "react"
import { getServicesData } from '../../api/data'

export default function ServiceDetail() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
    console.log(data)
    return (
        <div className="border">
            <table className="mx-auto border">
                <thead>
                    <tr className="border">
                        <th>Service</th>
                        <th>Status</th>
                        <th>PID</th>
                        <th>CPU-load</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.services.map((service, index) => {
                            return (
                                <tr key={index} >
                                    <td className="border">{service.name}</td>
                                    <td className="border">{service.running}</td>
                                    {/* <td >{
                                        service.pids.map((pid, index) => {
                                            <span key={index} className="border">{pid.index}</span>
                                        })
                                    }</td> */}
                                    <td className="border">{service.cpu.toFixed(2)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}