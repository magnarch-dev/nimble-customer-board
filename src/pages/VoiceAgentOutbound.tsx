
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { PhoneOutgoing, Target, TrendingUp, Calendar, Play, Plus, Settings } from 'lucide-react';

const VoiceAgentOutbound = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const campaignStats = [
    { title: 'Active Campaigns', value: '5', icon: Target, color: 'blue' },
    { title: 'Calls Made Today', value: '38', icon: PhoneOutgoing, color: 'green' },
    { title: 'Success Rate', value: '73%', icon: TrendingUp, color: 'purple' },
    { title: 'Scheduled Calls', value: '15', icon: Calendar, color: 'orange' },
  ];

  const campaigns = [
    { 
      id: 'CAM-001', 
      name: 'Customer Follow-up Q2', 
      status: 'Active', 
      progress: 65, 
      totalContacts: 150, 
      completed: 98, 
      successRate: '78%',
      nextCall: '10:30 AM'
    },
    { 
      id: 'CAM-002', 
      name: 'Product Demo Outreach', 
      status: 'Paused', 
      progress: 23, 
      totalContacts: 200, 
      completed: 46, 
      successRate: '65%',
      nextCall: 'Paused'
    },
    { 
      id: 'CAM-003', 
      name: 'Renewal Reminders', 
      status: 'Active', 
      progress: 89, 
      totalContacts: 75, 
      completed: 67, 
      successRate: '82%',
      nextCall: '11:15 AM'
    },
  ];

  return (
    <div className="min-h-screen flex w-full" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Outbound Call Management</h1>
              <p className="text-gray-600">Manage campaigns and outbound call operations</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 min-w-[140px] justify-center">
                <Plus className="w-4 h-4" />
                New Campaign
              </button>
              <button className="bg-gray-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors flex items-center gap-2 min-w-[100px] justify-center">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>

          {/* Campaign Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {campaignStats.map((stat, index) => (
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

          {/* Campaigns Table */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Active Campaigns</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Campaign</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Progress</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Contacts</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Success Rate</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Next Call</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign) => (
                    <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{campaign.name}</div>
                          <div className="text-sm text-gray-500">{campaign.id}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          campaign.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${campaign.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{campaign.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">
                        {campaign.completed}/{campaign.totalContacts}
                      </td>
                      <td className="py-4 px-4 text-gray-600">{campaign.successRate}</td>
                      <td className="py-4 px-4 text-gray-600">{campaign.nextCall}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {campaign.status === 'Active' ? (
                            <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors flex items-center gap-1 min-w-[70px] justify-center">
                              <Play className="w-3 h-3" />
                              Resume
                            </button>
                          ) : (
                            <button className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700 transition-colors flex items-center gap-1 min-w-[70px] justify-center">
                              <Play className="w-3 h-3" />
                              Start
                            </button>
                          )}
                          <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-gray-700 transition-colors min-w-[50px] text-center">
                            Edit
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

export default VoiceAgentOutbound;
