
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MetricsCards from '@/components/MetricsCards';
import SalesChart from '@/components/SalesChart';
import CalendarHeatmap from '@/components/CalendarHeatmap';
import MeetingCalendar from '@/components/MeetingCalendar';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex w-full" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-3">
              <button className="relative inline-flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200 min-w-[140px] group">
                <span>21 Oct - 21 Nov</span>
                <ChevronDown className="w-4 h-4 ml-2 text-gray-500 group-hover:text-gray-700 transition-colors" />
              </button>
              
              <button className="relative inline-flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200 min-w-[80px] group">
                <span>Daily</span>
                <ChevronDown className="w-4 h-4 ml-2 text-gray-500 group-hover:text-gray-700 transition-colors" />
              </button>
              
              <button className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:from-black hover:via-gray-900 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg"></div>
                <span className="relative">Export CSV</span>
              </button>
            </div>
          </div>
          
          {/* Metrics Cards in a single row - full width */}
          <div className="mb-6">
            <MetricsCards />
          </div>
          
          {/* Total Revenue Chart - Full Width with more height */}
          <div className="mb-6">
            <SalesChart />
          </div>
          
          {/* Meeting Calendar with Total Meetings sidebar - full width */}
          <div className="flex gap-6 flex-1 min-h-0">
            <div className="flex-1 min-w-0">
              <MeetingCalendar />
            </div>
            <div className="w-80 flex-shrink-0">
              <CalendarHeatmap />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
