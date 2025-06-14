
import React from 'react';

const CalendarHeatmap = () => {
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const weeks = 4; // Reduced to show fewer weeks
  
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
          meetings: Math.floor(intensity * 15) + 1
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

  const totalMeetings = heatmapData.flat().reduce((sum, day) => sum + day.meetings, 0);

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Total Meetings</h3>
        <div className="mt-1">
          <span className="text-2xl font-bold text-gray-900">{totalMeetings.toLocaleString()}</span>
          <div className="text-green-600 text-sm font-medium">+12.5%</div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center">{day}</div>
          ))}
        </div>
        
        {heatmapData.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1">
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`aspect-square rounded ${getIntensityColor(day.intensity)} hover:ring-1 hover:ring-blue-300 cursor-pointer transition-all`}
                title={`${day.meetings} meetings`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <span>Less</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-100 rounded"></div>
            <div className="w-2 h-2 bg-blue-200 rounded"></div>
            <div className="w-2 h-2 bg-blue-400 rounded"></div>
            <div className="w-2 h-2 bg-blue-500 rounded"></div>
            <div className="w-2 h-2 bg-blue-600 rounded"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeatmap;
