
import React from 'react';

const CalendarHeatmap = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weeks = 8; // Extended to show more weeks
  
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
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">Total Meetings</h3>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-3xl font-bold text-gray-900">{totalMeetings.toLocaleString()}</span>
            <div className="flex items-center text-green-600 text-sm font-medium">
              <span>+12.5%</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">Increased by 240 meetings compared to last period</p>
        </div>
        <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <option>January, 2025</option>
          <option>December, 2024</option>
          <option>November, 2024</option>
        </select>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-7 gap-2 text-xs text-gray-500 mb-3">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center py-2 font-medium">{day}</div>
          ))}
        </div>
        
        {heatmapData.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-2">
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`aspect-square rounded-lg ${getIntensityColor(day.intensity)} hover:ring-2 hover:ring-blue-300 cursor-pointer transition-all hover:scale-105 flex items-center justify-center`}
                title={`${day.meetings} meetings`}
              >
                <span className="text-xs font-medium text-white opacity-0 hover:opacity-100 transition-opacity">
                  {day.meetings}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <span>Less</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-blue-100 rounded"></div>
            <div className="w-3 h-3 bg-blue-200 rounded"></div>
            <div className="w-3 h-3 bg-blue-400 rounded"></div>
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
          </div>
          <span>More</span>
        </div>
        <span className="text-xs text-gray-500">Data updated 10 minutes ago</span>
      </div>
    </div>
  );
};

export default CalendarHeatmap;
