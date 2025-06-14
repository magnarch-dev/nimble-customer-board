
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Calendar, Clock, Plus, Filter, Search } from 'lucide-react';

const Appointments = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const appointments = [
    {
      id: 1,
      patientName: 'Sarah Johnson',
      time: '09:00 AM',
      duration: '30 min',
      type: 'Consultation',
      status: 'Confirmed'
    },
    {
      id: 2,
      patientName: 'Michael Chen',
      time: '10:30 AM',
      duration: '45 min',
      type: 'Follow-up',
      status: 'Pending'
    },
    {
      id: 3,
      patientName: 'Emily Rodriguez',
      time: '02:00 PM',
      duration: '60 min',
      type: 'Treatment',
      status: 'Confirmed'
    },
    {
      id: 4,
      patientName: 'David Wilson',
      time: '03:30 PM',
      duration: '30 min',
      type: 'Checkup',
      status: 'Cancelled'
    }
  ];

  return (
    <div className="min-h-screen flex w-full" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2 min-w-[180px] justify-center">
              <Plus className="w-4 h-4" />
              Schedule Appointment
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Calendar
                </h3>
                <div className="space-y-2">
                  {Array.from({ length: 7 }, (_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    return (
                      <div
                        key={i}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          i === 0 ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                          </span>
                          <span className="text-sm text-gray-500">
                            {i === 0 ? '4 appts' : `${Math.floor(Math.random() * 5)} appts`}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Appointments List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-900">Today's Appointments</h3>
                  <div className="flex gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 min-w-[100px]">
                      <Search className="w-4 h-4" />
                      Search
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 min-w-[80px]">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium text-gray-900">{appointment.patientName}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              appointment.status === 'Confirmed' 
                                ? 'bg-green-100 text-green-800'
                                : appointment.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {appointment.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {appointment.time}
                            </div>
                            <span>•</span>
                            <span>{appointment.duration}</span>
                            <span>•</span>
                            <span>{appointment.type}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button className="text-blue-600 hover:text-blue-800 text-sm px-3 py-1 min-w-[50px] text-center">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-sm px-3 py-1 min-w-[60px] text-center">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Appointments;
