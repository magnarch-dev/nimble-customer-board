
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricsCards = () => {
  const metrics = [
    {
      title: 'Total Visitors',
      value: '10,234',
      change: '-2.4%',
      changeType: 'decrease',
      subtitle: 'Decreased by 480 visitors compared to last week'
    },
    {
      title: 'Total Patients',
      value: '5,350',
      change: '+6.3%',
      changeType: 'increase',
      subtitle: 'Increased by 480 patients compared to last week'
    },
    {
      title: 'Total Doctors',
      value: '84',
      change: '+2.6%',
      changeType: 'increase',
      subtitle: 'Currently 32 staff members are active'
    },
    {
      title: 'Total Appointments',
      value: '1,245',
      change: '+2.6%',
      changeType: 'increase',
      subtitle: 'Increased by 120 compared to last week'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
            <div className={`flex items-center text-sm ${
              metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.changeType === 'increase' ? 
                <TrendingUp className="w-4 h-4 mr-1" /> : 
                <TrendingDown className="w-4 h-4 mr-1" />
              }
              {metric.change}
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
          <p className="text-xs text-gray-500">{metric.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;
