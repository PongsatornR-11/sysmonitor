import React, { useEffect, useState } from 'react';
import { getOSInfo } from '../../api/data';

const OSInfoCard = () => {

    const correctPassword = import.meta.env.VITE_APP_PASSWORD

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showSerial, setShowSerial] = useState(false);

    const fetchData = async () => {
        try {
            const res = await getOSInfo();
            setData({ ...res.data });
            setError(null);
        } catch (err) {
            setError(`Failed to fetch system data: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleShowSerial = () => {
        const password = prompt('Enter password to view serial number:');
        if (password === correctPassword) {
            setShowSerial(true);
        } else {
            alert('Incorrect password.');
        }
    };

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

    const infoEntries = [
        { label: 'Platform', value: data.osInfo.platform },
        { label: 'Distro', value: data.osInfo.distro },
        { label: 'Release', value: data.osInfo.release },
        { label: 'Codename', value: data.osInfo.codename },
        { label: 'Kernel', value: data.osInfo.kernel },
        { label: 'Architecture', value: data.osInfo.arch },
        { label: 'Hostname', value: data.osInfo.hostname },
        { label: 'FQDN', value: data.osInfo.fqdn },
        { label: 'Codepage', value: data.osInfo.codepage },
        { label: 'Logofile', value: data.osInfo.logofile },
        {
            label: 'Serial',
            value: showSerial ? data.osInfo.serial : '•••••••••••••••••••••••',
            protected: true
        },
        { label: 'UEFI Boot', value: data.osInfo.uefi ? 'Yes' : 'No' },
    ];

    return (
        <div className="max-w-3xl mx-auto border-2 shadow-md rounded-2xl p-6 my-8">
            <h2 className="text-2xl font-bold mb-4">OS Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {infoEntries.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center border-b pb-1 border-gray-300 dark:border-gray-600"
                    >
                        <span className="font-medium">{item.label}</span>
                        <span>
                            {item.value}
                            {item.protected && !showSerial && (
                                <button
                                    onClick={handleShowSerial}
                                    className="ml-2 px-2 py-0.5 text-sm cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Show
                                </button>
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OSInfoCard;
