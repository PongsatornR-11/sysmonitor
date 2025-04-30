import React, { useState, useEffect } from 'react'
import { getConnectionData } from '../../api/data'
const ConnectionDetails = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data function
    const fetchData = async () => {
        try {
            const res = await getConnectionData();
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
        // const interval = setInterval(fetchData, 2000); // Fetch every 2 second
        // return () => clearInterval(interval); // Cleanup on unmount
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
        <div className='p-2 rounded-2xl'>
            <h1 className='text-xl font-bold mb-4'>Connections Details</h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className='w-full text-sm text-left rtl:text-right rounded-2xl border'>
                    <thead className='text-xs uppercase '>
                        <tr>
                            <th scope="col" class="px-4 py-3">No.</th>
                            <th scope="col" class="px-4 py-3">protocol</th>
                            <th scope="col" class="px-4 py-3">LocalAddress</th>
                            <th scope="col" class="px-4 py-3">peerAddress</th>
                            <th scope="col" class="px-4 py-3">localPort</th>
                            <th scope="col" class="px-4 py-3">Pid</th>
                            <th scope="col" class="px-4 py-3">processName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.connections.map((c, index) => {
                            return (
                                <tr className='border'>
                                    <td scope="row" class="px-4 py-1 font-medium">{index + 1}</td>
                                    <td class="px-4 ">{c.protocol}</td>
                                    <td class="px-4 ">{c.localAddress}</td>
                                    <td class="px-4 ">{c.peerAddress}</td>
                                    <td class="px-4 ">{c.localPort}</td>
                                    <td class="px-4 ">{c.pid}</td>
                                    <td class="px-4 ">{c.processName}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default ConnectionDetails