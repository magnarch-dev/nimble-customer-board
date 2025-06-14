
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const SalesChart = () => {
  const data = [
    { day: 'Mon', value: 120 },
    { day: 'Tue', value: 150 },
    { day: 'Wed', value: 180 },
    { day: 'Thu', value: 200 },
    { day: 'Fri', value: 250 },
    { day: 'Sat', value: 300 },
    { day: 'Sun', value: 220 },
  ];

  const salesData = [
    { label: 'Pending Sales', value: '$30,000', color: '#93C5FD' },
    { label: 'Sales Using Insurance', value: '$120,000', color: '#3B82F6' },
    { label: 'Completed Sales', value: '$100,000', color: '#1E40AF' },
  ];

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Sales Overview</h3>
        <select className="text-sm border border-gray-300 rounded px-3 py-1">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>
      
      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900 mb-1">$250,000</div>
        <div className="text-sm text-gray-600">
          Increased by <span className="text-green-600 font-medium">$30,000</span> compared to last week
        </div>
      </div>

      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {salesData.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-lg font-bold text-gray-900">{item.value}</div>
            <div className="text-xs text-gray-600 flex items-center justify-center">
              <div 
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></div>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
