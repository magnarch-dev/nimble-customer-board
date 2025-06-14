
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const SalesChart = () => {
  const data = [
    { date: '21 Oct', value: 3000 },
    { date: '25 Oct', value: 3200 },
    { date: '29 Oct', value: 3800 },
    { date: '02 Nov', value: 4200 },
    { date: '06 Nov', value: 4800 },
    { date: '10 Nov', value: 5200 },
    { date: '14 Nov', value: 4800 },
    { date: '18 Nov', value: 4400 },
    { date: '21 Nov', value: 4000 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Total Revenue</h3>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-gray-600 border border-gray-300 rounded px-2 py-1">Filter</button>
          <button className="text-sm text-gray-600 border border-gray-300 rounded px-2 py-1">Manage</button>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mb-4">5K</div>

      <div className="h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
              domain={[0, 6000]}
              ticks={[0, 3000, 6000]}
              tickFormatter={(value) => `${value/1000}K`}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-gray-900 text-white px-3 py-2 rounded text-sm">
                      <p>{`${label}: €${payload[0].value?.toLocaleString()}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#3B82F6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
