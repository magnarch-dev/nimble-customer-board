
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Mail, Send, Users, Eye, Plus, Calendar } from 'lucide-react';

const EmailCampaign = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const campaigns = [
    {
      id: 1,
      name: 'Monthly Newsletter',
      subject: 'Health Tips for June 2024',
      recipients: 245,
      openRate: '68%',
      status: 'Sent',
      sentDate: '2024-06-01'
    },
    {
      id: 2,
      name: 'Appointment Reminders',
      subject: 'Upcoming Appointment Reminder',
      recipients: 89,
      openRate: '92%',
      status: 'Sent',
      sentDate: '2024-06-10'
    },
    {
      id: 3,
      name: 'Wellness Campaign',
      subject: 'Summer Wellness Tips',
      recipients: 320,
      openRate: '-',
      status: 'Draft',
      sentDate: '-'
    }
  ];

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className="flex-1 overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="p-6 overflow-y-auto h-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Email Campaign</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create Campaign
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Recipients</p>
                  <p className="text-2xl font-bold text-gray-900">1,234</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Open Rate</p>
                  <p className="text-2xl font-bold text-gray-900">76%</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Emails Sent</p>
                  <p className="text-2xl font-bold text-gray-900">5,678</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Campaigns Table */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Campaigns</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Campaign Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Recipients</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Open Rate</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Sent Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign) => (
                    <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">{campaign.name}</td>
                      <td className="py-4 px-4 text-gray-600">{campaign.subject}</td>
                      <td className="py-4 px-4 text-gray-600">{campaign.recipients}</td>
                      <td className="py-4 px-4 text-gray-600">{campaign.openRate}</td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          campaign.status === 'Sent' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{campaign.sentDate}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">Edit</button>
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

export default EmailCampaign;
