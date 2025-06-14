
import React from 'react';

const CalendarHeatmap = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weeks = 5;
  
  // Generate random data for calendar heatmap
  const generateHeatmapData = () => {
    const data = [];
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        const intensity = Math.random();
        weekData.push({
          day: day,
          week: week,
          intensity: intensity,
          appointments: Math.floor(intensity * 20)
        });
      }
      data.push(weekData);
    }
    return data;
  };

  const heatmapData = generateHeatmapData();

  const getIntensityColor = (intensity: number) => {
    if (intensity < 0.2) return 'bg-blue-100';
    if (intensity < 0.4) return 'bg-blue-200';
    if (intensity < 0.6) return 'bg-blue-400';
    if (intensity < 0.8) return 'bg-blue-500';
    return 'bg-blue-600';
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Total Appointment</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-2xl font-bold text-gray-900">1,245</span>
            <div className="flex items-center text-green-600 text-sm">
              <span>+2.6%</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">Increased by 120 compared to last week</p>
        </div>
        <select className="text-sm border border-gray-300 rounded px-3 py-1">
          <option>March, 2025</option>
        </select>
      </div>

      <div className="space-y-1">
        <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center py-1">{day}</div>
          ))}
        </div>
        
        {heatmapData.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1">
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`aspect-square rounded ${getIntensityColor(day.intensity)} hover:ring-2 hover:ring-blue-300 cursor-pointer transition-all`}
                title={`${day.appointments} appointments`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarHeatmap;
