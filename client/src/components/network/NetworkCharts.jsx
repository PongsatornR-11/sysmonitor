import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const NetworkCharts = ({ data }) => {
    console.log(data)
    return (
        <div>
            <div className="rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Overall CPU Load (%)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="cpuLoad" stroke="#8884d8" name="CPU Load" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default NetworkCharts