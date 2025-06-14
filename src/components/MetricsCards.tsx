
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
    <div className="grid grid-cols-4 gap-6 mb-6">
      {metrics.map((metric, index) => (
        <div key={index} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{metric.title}</h3>
            <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              metric.changeType === 'increase' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {metric.changeType === 'increase' ? 
                <TrendingUp className="w-3 h-3 mr-1" /> : 
                <TrendingDown className="w-3 h-3 mr-1" />
              }
              {metric.change}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
            <p className="text-sm text-gray-500">{metric.subtitle}</p>
          </div>
          
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                metric.changeType === 'increase' ? 'bg-green-400' : 'bg-red-400'
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
