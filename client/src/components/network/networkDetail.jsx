import React, { useState, useEffect } from 'react'
import { getNetworkData } from '../../api/data'
import NetworkCharts from './NetworkCharts';

const networkDetail = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data function
    const fetchData = async () => {
        try {
            const res = await getNetworkData();
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
        <div>
            <div className="text-lg rounded-2xl shadow-md flex flex-col gap-2 max-w-xl mx-auto mb-8">
                <h1 className="text-2xl font-bold mb-4 ">Network Interfaces</h1>
                {data.interfaces.map((item) => (
                    <div key={item.iface} className="mb-6 border p-4 rounded-2xl shadow">
                        <h2 className="text-xl font-semibold">Iface: {item.iface}</h2>
                        <p><strong>IPv4:</strong> {item.ip4}</p>
                        <p><strong>IPv6:</strong> {item.ip6}</p>
                        <p><strong>MAC:</strong> {item.mac}</p>
                        <p><strong>Status:</strong> {item.operstate}</p>
                        <p><strong>Type:</strong> {item.type}</p>
                        <p><strong>Speed:</strong> {item.speed ? `${item.speed} Mbps` : 'N/A'}</p>
                    </div>
                ))}

                <h1 className="text-2xl font-bold mt-8 mb-4">Network Stats</h1>
                {
                    data.interfaces.some(iface => iface.operstate === 'up')
                        ?
                        data.stats.map((stat) => (
                            <div key={stat.iface} className="mb-6 border p-4 rounded-2xl shadow">
                                <h2 className="text-xl font-semibold">Iface: {stat.iface}</h2>
                                <p><strong>Received:</strong> {(stat.rx_bytes / (1024 * 1024)).toFixed(2)} MB</p>
                                <p><strong>Transmitted:</strong> {(stat.tx_bytes / (1024 * 1024)).toFixed(2)} MB</p>
                                <p><strong>Receive Speed:</strong> {stat.rx_sec.toFixed(2)} B/sec</p>
                                <p><strong>Transmit Speed:</strong> {stat.tx_sec.toFixed(2)} B/sec</p>
                            </div>
                        ))
                        :
                        <div className="flex items-center justify-center h-[300px] border rounded-2xl">
                            <p className="text-xl font-semibold text-gray-600">No data available</p>
                        </div>
                }

            </div>
            <NetworkCharts data={data.stats} />
        </div>
    )
}

export default networkDetail