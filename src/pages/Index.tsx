
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
        
        <main className="p-5 overflow-y-auto h-full">
          <MetricsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
            <div className="lg:col-span-2">
              <SalesChart />
            </div>
            <div className="space-y-5">
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
