
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MetricsCards from '@/components/MetricsCards';
import SalesChart from '@/components/SalesChart';
import CalendarHeatmap from '@/components/CalendarHeatmap';
import MeetingCalendar from '@/components/MeetingCalendar';

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-3">
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
                <option>21 Oct - 21 Nov</option>
              </select>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
                <option>Daily</option>
              </select>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
                Export CSV
              </button>
            </div>
          </div>

          {/* Metrics Cards in a single row */}
          <MetricsCards />
          
          {/* Total Revenue Chart - Full Width */}
          <div className="mb-6">
            <SalesChart />
          </div>
          
          {/* Meeting Calendar with Total Meetings sidebar */}
          <div className="flex gap-6">
            <div className="flex-1">
              <MeetingCalendar />
            </div>
            <div className="w-80">
              <CalendarHeatmap />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
