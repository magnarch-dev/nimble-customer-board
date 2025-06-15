
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts';

type TimePeriod = '1D' | '1W' | '1M' | '6M' | '1Y' | 'ALL';

interface RevenueData {
  date: string;
  value: number;
  period: string;
}

const SalesChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('1Y');

  // Generate realistic revenue data for different time periods
  const generateData = (period: TimePeriod): RevenueData[] => {
    const baseRevenue = 32209;
    const data: RevenueData[] = [];

    switch (period) {
      case '1D':
        // Hourly data for 24 hours
        for (let i = 0; i < 24; i++) {
          const hour = i.toString().padStart(2, '0') + ':00';
          const variance = Math.random() * 200 - 100; // ±100 variance
          data.push({
            date: hour,
            value: Math.max(0, baseRevenue/365 + variance),
            period: 'hourly'
          });
        }
        break;

      case '1W':
        // Daily data for 7 days
        const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        weekDays.forEach((day, index) => {
          const dailyBase = baseRevenue / 52; // Weekly average
          const weekendBoost = (day === 'Sat' || day === 'Sun') ? 1.2 : 1.0;
          const variance = (Math.random() * 0.3 - 0.15) * dailyBase;
          data.push({
            date: day,
            value: Math.round(dailyBase * weekendBoost + variance),
            period: 'daily'
          });
        });
        break;

      case '1M':
        // Weekly data for 4 weeks
        for (let week = 1; week <= 4; week++) {
          const weeklyBase = baseRevenue / 12; // Monthly average divided by weeks
          const variance = (Math.random() * 0.2 - 0.1) * weeklyBase;
          data.push({
            date: `Week ${week}`,
            value: Math.round(weeklyBase + variance),
            period: 'weekly'
          });
        }
        break;

      case '6M':
        // Monthly data for 6 months
        const months6 = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        months6.forEach((month, index) => {
          const monthlyBase = baseRevenue / 12;
          const seasonalFactor = 1 + Math.sin((index + 6) * Math.PI / 6) * 0.2; // Seasonal variation
          const variance = (Math.random() * 0.15 - 0.075) * monthlyBase;
          data.push({
            date: month,
            value: Math.round(monthlyBase * seasonalFactor + variance),
            period: 'monthly'
          });
        });
        break;

      case '1Y':
        // Monthly data for 12 months
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        months.forEach((month, index) => {
          const monthlyBase = baseRevenue / 12;
          const seasonalFactor = 1 + Math.sin(index * Math.PI / 6) * 0.25; // Seasonal variation
          const growthFactor = 1 + (index * 0.02); // 2% monthly growth
          const variance = (Math.random() * 0.1 - 0.05) * monthlyBase;
          data.push({
            date: month,
            value: Math.round(monthlyBase * seasonalFactor * growthFactor + variance),
            period: 'monthly'
          });
        });
        break;

      case 'ALL':
        // Yearly data for 5 years
        const currentYear = new Date().getFullYear();
        for (let i = 4; i >= 0; i--) {
          const year = currentYear - i;
          const yearlyBase = baseRevenue * (0.7 + i * 0.075); // Historical growth
          const variance = (Math.random() * 0.1 - 0.05) * yearlyBase;
          data.push({
            date: year.toString(),
            value: Math.round(yearlyBase + variance),
            period: 'yearly'
          });
        }
        break;

      default:
        return data;
    }

    return data;
  };

  const data = generateData(selectedPeriod);
  
  // Calculate analytics based on current data
  const calculateAnalytics = () => {
    if (data.length < 2) return { change: 0, trend: 'stable' };
    
    const current = data[data.length - 1].value;
    const previous = data[data.length - 2].value;
    const change = ((current - previous) / previous) * 100;
    
    return {
      change: Math.round(change),
      trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable'
    };
  };

  const analytics = calculateAnalytics();
  const totalRevenue = data.reduce((sum, item) => sum + item.value, 0);
  const averageRevenue = Math.round(totalRevenue / data.length);

  // Get period-specific labels
  const getPeriodInfo = () => {
    switch (selectedPeriod) {
      case '1D':
        return { label: 'Today', comparison: 'vs yesterday', total: `€${Math.round(totalRevenue).toLocaleString()}` };
      case '1W':
        return { label: 'This Week', comparison: 'vs last week', total: `€${Math.round(totalRevenue).toLocaleString()}` };
      case '1M':
        return { label: 'This Month', comparison: 'vs last month', total: `€${Math.round(totalRevenue).toLocaleString()}` };
      case '6M':
        return { label: 'Last 6 Months', comparison: 'vs previous 6 months', total: `€${Math.round(totalRevenue).toLocaleString()}` };
      case '1Y':
        return { label: 'This Year', comparison: 'vs last year', total: `€${Math.round(totalRevenue).toLocaleString()}` };
      case 'ALL':
        return { label: 'All Time', comparison: 'vs previous period', total: `€${Math.round(totalRevenue).toLocaleString()}` };
      default:
        return { label: 'Revenue', comparison: 'vs previous', total: `€${Math.round(totalRevenue).toLocaleString()}` };
    }
  };

  const periodInfo = getPeriodInfo();

  return (
    <div className="p-8 rounded-3xl border-2 border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden" 
         style={{ 
           background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
           boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
         }}>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-2xl"></div>
      
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full animate-pulse"></div>
            <h3 className="text-3xl font-light text-white mb-1 tracking-wide">Revenue Analytics</h3>
          </div>
          <div className="flex items-center space-x-4 mb-3">
            <span className="text-4xl font-extralight text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {periodInfo.total}
            </span>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm ${
              analytics.change > 0 
                ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-500/30'
                : analytics.change < 0
                ? 'bg-gradient-to-r from-red-500/20 to-red-500/20 text-red-300 border-red-500/30'
                : 'bg-gradient-to-r from-gray-500/20 to-gray-500/20 text-gray-300 border-gray-500/30'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                analytics.change > 0 ? 'bg-emerald-400' : analytics.change < 0 ? 'bg-red-400' : 'bg-gray-400'
              }`}></div>
              <span className={analytics.change > 0 ? 'text-emerald-300' : analytics.change < 0 ? 'text-red-300' : 'text-gray-300'}>
                {analytics.change > 0 ? '↗' : analytics.change < 0 ? '↘' : '→'}
              </span>
              <span className="ml-2">{analytics.change > 0 ? '+' : ''}{analytics.change}% {periodInfo.comparison}</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <p className="text-gray-400 font-light">{periodInfo.label} • Average: €{averageRevenue.toLocaleString()}</p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-300 text-xs">
                {data.length} {data[0]?.period || 'data'} points
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value as TimePeriod)}
            className="text-sm font-medium text-white bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
          >
            <option value="1D" className="bg-gray-800 text-white">1D</option>
            <option value="1W" className="bg-gray-800 text-white">1W</option>
            <option value="1M" className="bg-gray-800 text-white">1M</option>
            <option value="6M" className="bg-gray-800 text-white">6M</option>
            <option value="1Y" className="bg-gray-800 text-white">1Y</option>
            <option value="ALL" className="bg-gray-800 text-white">ALL</option>
          </select>
          <button className="p-2.5 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>

      <div className="h-64 mb-6 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ffffff" stopOpacity={0.05}/>
              </linearGradient>
              <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity={0.8}/>
                <stop offset="50%" stopColor="#f8fafc" stopOpacity={1}/>
                <stop offset="100%" stopColor="#ffffff" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(255, 255, 255, 0.1)" 
              vertical={false}
              horizontal={true}
            />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'rgba(255, 255, 255, 0.7)', fontWeight: 300 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'rgba(255, 255, 255, 0.7)', fontWeight: 300 }}
              tickFormatter={(value) => {
                if (value >= 1000000) return `${(value/1000000).toFixed(1)}M`;
                if (value >= 1000) return `${(value/1000).toFixed(0)}K`;
                return value.toString();
              }}
              dx={-10}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const value = payload[0].value as number;
                  return (
                    <div className="bg-black/90 border border-white/20 rounded-xl shadow-2xl px-5 py-4 backdrop-blur-md">
                      <p className="text-sm font-light text-gray-300 mb-2">{label}</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <p className="text-xl font-light text-white">€{value?.toLocaleString()}</p>
                      </div>
                      <div className="mt-2 pt-2 border-t border-white/10">
                        <p className="text-xs text-gray-400">
                          Period: {selectedPeriod} • Average: €{averageRevenue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#strokeGradient)"
              strokeWidth={3}
              fill="url(#colorGradient)"
              dot={false}
              activeDot={{ 
                r: 8, 
                fill: '#ffffff', 
                stroke: 'rgba(255, 255, 255, 0.3)', 
                strokeWidth: 6,
                filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))'
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-between text-xs font-light text-gray-400 pt-4 border-t border-white/10 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Live data updated 2 minutes ago</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Growth trend: {analytics.change > 0 ? '+' : ''}{analytics.change}% {analytics.change > 0 ? '↗' : analytics.change < 0 ? '↘' : '→'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Period: {selectedPeriod}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span>Secured Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
