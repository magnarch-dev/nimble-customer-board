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
    <div className="p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-light text-gray-900 mb-1">Revenue</h3>
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-extralight text-gray-900">€32,209</span>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-light bg-green-50 text-green-700 border border-green-200">
              <span className="text-green-600">↗</span>
              <span className="ml-1">22% vs last month</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <select className="text-sm font-light text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>1D</option>
            <option>1W</option>
            <option>1M</option>
            <option>6M</option>
            <option selected>1Y</option>
            <option>ALL</option>
          </select>
        </div>
      </div>

      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b', fontWeight: 300 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b', fontWeight: 300 }}
              domain={[0, 6000]}
              tickFormatter={(value) => `${value/1000}K`}
              dx={-10}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3">
                      <p className="text-sm font-light text-gray-600 mb-1">{label}</p>
                      <p className="text-lg font-light text-gray-900">€{payload[0].value?.toLocaleString()}</p>
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
              strokeWidth={3}
              dot={false}
              activeDot={{ 
                r: 6, 
                fill: '#3B82F6', 
                stroke: '#ffffff', 
                strokeWidth: 3,
                filter: 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))'
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-between text-xs font-light text-gray-500 pt-2 border-t border-gray-100">
        <span>Data updated 5 minutes ago</span>
        <span>Growth trend: +22%</span>
      </div>
    </div>
  );
};

export default SalesChart;
