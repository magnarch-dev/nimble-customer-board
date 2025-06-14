
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { PhoneIncoming, Users, Clock, CheckCircle, AlertCircle, Play, Pause } from 'lucide-react';

const VoiceAgentInbound = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const queueStats = [
    { title: 'Calls in Queue', value: '12', icon: PhoneIncoming, color: 'blue' },
    { title: 'Available Agents', value: '8', icon: Users, color: 'green' },
    { title: 'Avg Wait Time', value: '1:23', icon: Clock, color: 'orange' },
    { title: 'Calls Handled Today', value: '89', icon: CheckCircle, color: 'purple' },
  ];

  const activeCalls = [
    { id: '001', customer: 'John Smith', phone: '+1 (555) 123-4567', duration: '2:34', agent: 'Sarah Wilson', status: 'Active' },
    { id: '002', customer: 'Maria Garcia', phone: '+1 (555) 987-6543', duration: '1:12', agent: 'Mike Johnson', status: 'Active' },
    { id: '003', customer: 'David Chen', phone: '+1 (555) 456-7890', duration: '4:56', agent: 'Lisa Brown', status: 'Hold' },
  ];

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className="flex-1 overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="p-6 overflow-y-auto h-full">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Inbound Call Management</h1>
              <p className="text-gray-600">Monitor and manage incoming customer calls</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2">
                <Play className="w-4 h-4" />
                Start Queue
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 flex items-center gap-2">
                <Pause className="w-4 h-4" />
                Pause Queue
              </button>
            </div>
          </div>

          {/* Queue Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {queueStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
              </div>
            ))}
          </div>

          {/* Active Calls Table */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Active Inbound Calls</h2>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live Updates</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Call ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Customer</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Phone Number</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Duration</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Agent</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeCalls.map((call) => (
                    <tr key={call.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-mono text-sm">{call.id}</td>
                      <td className="py-4 px-4 font-medium text-gray-900">{call.customer}</td>
                      <td className="py-4 px-4 text-gray-600">{call.phone}</td>
                      <td className="py-4 px-4 text-gray-600">{call.duration}</td>
                      <td className="py-4 px-4 text-gray-600">{call.agent}</td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          call.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {call.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            Monitor
                          </button>
                          <button className="text-orange-600 hover:text-orange-800 text-sm font-medium">
                            Transfer
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VoiceAgentInbound;
