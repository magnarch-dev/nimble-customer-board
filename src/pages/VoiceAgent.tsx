
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Phone, PhoneIncoming, PhoneOutgoing, BarChart3, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const VoiceAgent = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const stats = [
    { title: 'Total Calls Today', value: '127', change: '+12%', icon: Phone },
    { title: 'Inbound Calls', value: '89', change: '+8%', icon: PhoneIncoming },
    { title: 'Outbound Calls', value: '38', change: '+15%', icon: PhoneOutgoing },
    { title: 'Avg Call Duration', value: '3:42', change: '-2%', icon: Clock },
  ];

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className="flex-1 overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="p-6 overflow-y-auto h-full">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Voice Agent Dashboard</h1>
            <p className="text-gray-600">Manage your inbound and outbound call operations</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from yesterday
                </p>
              </div>
            ))}
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/voice-agent/inbound" className="group">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group-hover:bg-blue-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <PhoneIncoming className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Inbound Calls</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Manage incoming customer calls, view call queues, and monitor agent performance for inbound operations.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Manage Inbound Operations</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>

            <Link to="/voice-agent/outbound" className="group">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group-hover:bg-green-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <PhoneOutgoing className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">Outbound Calls</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Handle outgoing campaigns, follow-ups, and proactive customer outreach with advanced call management tools.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <span>Manage Outbound Campaigns</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VoiceAgent;
