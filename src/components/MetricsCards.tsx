import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricsCards = () => {
  const metrics = [
    {
      title: 'Product Revenue',
      value: '€4,250',
      change: '+18%',
      changeType: 'increase',
      subtitle: '+ €1,945 Revenue'
    },
    {
      title: 'Total Deals',
      value: '1,625',
      change: '-5%',
      changeType: 'decrease',
      subtitle: '+ 842 Deals'
    },
    {
      title: 'Created Tickets',
      value: '3,452',
      change: '+18%',
      changeType: 'increase',
      subtitle: '+ 1,023 Tickets'
    },
    {
      title: 'Average Reply',
      value: '8:02',
      change: '+8%',
      changeType: 'increase',
      subtitle: '+ 0:40 Faster'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {metrics.map((metric, index) => (
        <div key={index} className="p-4 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.76)' }}>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-gray-600">{metric.title}</h3>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
          <div className="flex items-center justify-between">
            <div className={`flex items-center text-sm font-medium ${
              metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.changeType === 'increase' ? 
                <TrendingUp className="w-3 h-3 mr-1" /> : 
                <TrendingDown className="w-3 h-3 mr-1" />
              }
              {metric.change}
            </div>
            <p className="text-xs text-gray-500">{metric.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;
