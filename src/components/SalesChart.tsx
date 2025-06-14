
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts';

const SalesChart = () => {
  const data = [
    { date: '21 Oct', value: 3000 },
    { date: '25 Oct', value: 3200 },
    { date: '29 Oct', value: 3800 },
    { date: '02 Nov', value: 4200 },
    { date: '06 Nov', value: 4800 },
    { date: '10 Nov', value: 5200 },
    { date: '14 Nov', value: 4800 },
    { date: '18 Nov', value: 4400 },
    { date: '21 Nov', value: 4000 },
  ];

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
            <span className="text-4xl font-extralight text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">€32,209</span>
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-emerald-300">↗</span>
              <span className="ml-2">+22% vs last month</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm font-light">Performance trending upward</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="text-sm font-medium text-white bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300">
            <option className="bg-gray-800 text-white">1D</option>
            <option className="bg-gray-800 text-white">1W</option>
            <option className="bg-gray-800 text-white">1M</option>
            <option className="bg-gray-800 text-white">6M</option>
            <option className="bg-gray-800 text-white" selected>1Y</option>
            <option className="bg-gray-800 text-white">ALL</option>
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
              domain={[0, 6000]}
              tickFormatter={(value) => `${value/1000}K`}
              dx={-10}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-black/90 border border-white/20 rounded-xl shadow-2xl px-5 py-4 backdrop-blur-md">
                      <p className="text-sm font-light text-gray-300 mb-2">{label}</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <p className="text-xl font-light text-white">€{payload[0].value?.toLocaleString()}</p>
                      </div>
                      <div className="mt-2 pt-2 border-t border-white/10">
                        <p className="text-xs text-gray-400">Revenue Target: €45K</p>
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
            <span>Growth trend: +22% ↗</span>
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
