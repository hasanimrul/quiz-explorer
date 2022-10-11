import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css';

const Statistics = () => {
    const statistics = useLoaderData().data;
    return (
        <div className='statistics'>
            <h2>Statistics of Quiz</h2>
            <LineChart width={600} height={300} data={statistics} margin={{ top: 5, right: 20, 
                bottom: 5, left: 5 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;