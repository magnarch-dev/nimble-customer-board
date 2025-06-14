
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MetricsCards from '@/components/MetricsCards';
import SalesChart from '@/components/SalesChart';
import CalendarHeatmap from '@/components/CalendarHeatmap';
import PatientBreakdown from '@/components/PatientBreakdown';
import PatientsList from '@/components/PatientsList';

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className="flex-1 overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="p-6 overflow-y-auto h-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-3">
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
                <option>21 Oct - 21 Nov</option>
              </select>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
                <option>Daily</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                Export CSV
              </button>
            </div>
          </div>

          <MetricsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <SalesChart />
            <div className="space-y-6">
              <CalendarHeatmap />
              <PatientBreakdown />
            </div>
          </div>
          
          <PatientsList />
        </main>
      </div>
    </div>
  );
};

export default Index;
