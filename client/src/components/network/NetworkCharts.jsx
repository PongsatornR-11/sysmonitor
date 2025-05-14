import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const NetworkCharts = ({ data }) => { 
    const [history, setHistory] = useState([]);
    const MAX_HISTORY = 60;
    const convertDataByte = (data) =>{
        return(
            data/(1024 * 1024)
        )
    }

    const convertedData = convertDataByte()  
    useEffect(() => {
        if (data && data.length > 0) {
            setHistory(prevHistory => {
                const newHistory = [...prevHistory, ...data];
                // Keep only the last MAX_HISTORY points
                return newHistory.slice(-MAX_HISTORY);
            });
        }
    }, [data]);
    return (
        <div className="w-full">
            <div className="rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-4">Network Traffic (Bytes/sec) - Last 60 Points</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={history} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            dataKey="ms" 
                            label={{ value: 'Time (ms)', position: 'insideBottom', offset: -5 }}
                            tickFormatter={(ms) => new Date(ms).toLocaleTimeString()}
                        />
                        <YAxis label={{ value: 'Bytes/sec', angle: -90, position: 'insideLeft' }} />
                        <Tooltip 
                            labelFormatter={(ms) => new Date(ms).toLocaleTimeString()}
                            formatter={(value) => [`${value.toFixed(2)} bytes/sec`, value > 0 ? 'Received' : 'Transmitted']}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="rx_sec" stroke="#8884d8" name="Received" dot={false} strokeWidth={2} />
                        <Line type="monotone" dataKey="tx_sec" stroke="#82ca9d" name="Transmitted" dot={false} strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default NetworkCharts