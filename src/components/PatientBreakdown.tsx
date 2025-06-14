
import React from 'react';

const PatientBreakdown = () => {
  const patientData = [
    { label: 'New', count: 850, color: '#3B82F6' },
    { label: 'Returning', count: 1800, color: '#1F2937' },
    { label: 'Critical', count: 2700, color: '#F59E0B' }
  ];

  const total = patientData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="p-5 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Breakdown</h3>
      
      <div className="space-y-3">
        {patientData.map((item, index) => {
          const percentage = (item.count / total) * 100;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{item.count.toLocaleString()}</span>
              </div>
              
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div 
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{ 
                    backgroundColor: item.color,
                    width: `${percentage}%`
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientBreakdown;
