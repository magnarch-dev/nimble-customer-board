
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MetricsCards from '@/components/MetricsCards';
import SalesChart from '@/components/SalesChart';
import CalendarHeatmap from '@/components/CalendarHeatmap';
import MeetingCalendar from '@/components/MeetingCalendar';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('21 Oct - 21 Nov');
  const [selectedFrequency, setSelectedFrequency] = useState('Daily');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const dateRanges = [
    '21 Oct - 21 Nov',
    '1 Oct - 31 Oct',
    '1 Nov - 30 Nov',
    'Last 7 days',
    'Last 30 days',
    'Last 90 days'
  ];

  const frequencies = [
    'Daily',
    'Weekly',
    'Monthly',
    'Quarterly'
  ];

  const handleExportCSV = () => {
    // Mock CSV data - in a real app, this would come from your data source
    const csvData = [
      ['Date', 'Revenue', 'Deals', 'Tickets', 'Reply Time'],
      ['2024-10-21', '€4,250', '1,625', '3,452', '8:02'],
      ['2024-10-22', '€4,100', '1,580', '3,320', '7:45'],
      ['2024-10-23', '€4,380', '1,670', '3,560', '8:15'],
    ];

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `dashboard-export-${selectedDateRange.replace(/ /g, '-')}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="relative inline-flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200 min-w-[140px] group">
                    <span>{selectedDateRange}</span>
                    <ChevronDown className="w-4 h-4 ml-2 text-gray-500 group-hover:text-gray-700 transition-colors" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {dateRanges.map((range) => (
                    <DropdownMenuItem
                      key={range}
                      onClick={() => setSelectedDateRange(range)}
                      className="cursor-pointer"
                    >
                      {range}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="relative inline-flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200 min-w-[80px] group">
                    <span>{selectedFrequency}</span>
                    <ChevronDown className="w-4 h-4 ml-2 text-gray-500 group-hover:text-gray-700 transition-colors" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                  {frequencies.map((frequency) => (
                    <DropdownMenuItem
                      key={frequency}
                      onClick={() => setSelectedFrequency(frequency)}
                      className="cursor-pointer"
                    >
                      {frequency}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <button 
                onClick={handleExportCSV}
                className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:from-black hover:via-gray-900 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg"></div>
                <span className="relative">Export CSV</span>
              </button>
            </div>
          </div>
          
          {/* Metrics Cards in a single row - full width */}
          <div className="mb-6">
            <MetricsCards />
          </div>
          
          <div className="mb-6">
            <SalesChart />
          </div>
          
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
