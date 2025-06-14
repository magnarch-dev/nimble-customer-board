
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricsCards = () => {
  const metrics = [
    {
      title: 'Revenue',
      value: '€4,250',
      change: '+18%',
      changeType: 'increase'
    },
    {
      title: 'Deals',
      value: '1,625',
      change: '-5%',
      changeType: 'decrease'
    },
    {
      title: 'Tickets',
      value: '3,452',
      change: '+18%',
      changeType: 'increase'
    },
    {
      title: 'Reply Time',
      value: '8:02',
      change: '+8%',
      changeType: 'increase'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <div key={index} className="p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-medium text-gray-500">{metric.title}</h3>
            <div className={`inline-flex items-center px-1.5 py-0.5 rounded-md text-xs font-medium ${
              metric.changeType === 'increase' 
                ? 'bg-green-50 text-green-600' 
                : 'bg-red-50 text-red-600'
            }`}>
              {metric.changeType === 'increase' ? 
                <TrendingUp className="w-3 h-3 mr-0.5" /> : 
                <TrendingDown className="w-3 h-3 mr-0.5" />
              }
              {metric.change}
            </div>
          </div>
          
          <div className="text-xl font-bold text-gray-900 mb-2">{metric.value}</div>
          
          <div className="h-0.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 opacity-68 ${
                metric.changeType === 'increase' ? 'bg-gray-400' : 'bg-gray-500'
              }`}
              style={{ width: `${Math.abs(parseInt(metric.change))}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;
