
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Search, Filter, Plus, FileText, Calendar, Phone, Mail } from 'lucide-react';

const PatientRecords = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const patients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 34,
      condition: 'Diabetes Management',
      lastVisit: '2024-06-10',
      phone: '+1 (555) 123-4567',
      email: 'sarah.j@email.com',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Michael Chen',
      age: 45,
      condition: 'Hypertension',
      lastVisit: '2024-06-08',
      phone: '+1 (555) 987-6543',
      email: 'michael.c@email.com',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      age: 28,
      condition: 'Annual Checkup',
      lastVisit: '2024-06-05',
      phone: '+1 (555) 456-7890',
      email: 'emily.r@email.com',
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className="flex-1 overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="p-6 overflow-y-auto h-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Patient Records</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add New Patient
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Patient Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Age</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Condition</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Last Visit</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Contact</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">{patient.name}</div>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{patient.age}</td>
                      <td className="py-4 px-4 text-gray-600">{patient.condition}</td>
                      <td className="py-4 px-4 text-gray-600">{patient.lastVisit}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <Mail className="w-4 h-4 text-gray-400" />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          patient.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {patient.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <FileText className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <Calendar className="w-4 h-4" />
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

export default PatientRecords;
