
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Briefcase, Folder, FileText, Plus, Upload, Search } from 'lucide-react';

const Workspace = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const projects = [
    {
      id: 1,
      name: 'Patient Care Protocol',
      description: 'Updated guidelines for patient care procedures',
      lastModified: '2 days ago',
      files: 12,
      collaborators: 3
    },
    {
      id: 2,
      name: 'Research Documentation',
      description: 'Clinical research findings and reports',
      lastModified: '1 week ago',
      files: 8,
      collaborators: 5
    },
    {
      id: 3,
      name: 'Training Materials',
      description: 'Staff training resources and documentation',
      lastModified: '3 days ago',
      files: 15,
      collaborators: 2
    }
  ];

  const recentFiles = [
    { name: 'Treatment Protocol.pdf', type: 'PDF', size: '2.4 MB', modified: '1 hour ago' },
    { name: 'Patient Guidelines.docx', type: 'DOC', size: '1.8 MB', modified: '3 hours ago' },
    { name: 'Research Data.xlsx', type: 'XLS', size: '3.2 MB', modified: '1 day ago' },
    { name: 'Meeting Notes.txt', type: 'TXT', size: '45 KB', modified: '2 days ago' }
  ];

  return (
    <div className="min-h-screen flex w-full" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Workspace</h1>
            <div className="flex gap-2">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 min-w-[100px] justify-center">
                <Upload className="w-4 h-4" />
                Upload
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 min-w-[130px] justify-center">
                <Plus className="w-4 h-4" />
                New Project
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Projects */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-900">Projects</h3>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded hover:bg-blue-50 transition-colors min-w-[70px] text-center">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Folder className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{project.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                              <span>{project.files} files</span>
                              <span>{project.collaborators} collaborators</span>
                              <span>Modified {project.lastModified}</span>
                            </div>
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors min-w-[60px] text-center">
                          Open
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Files */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Recent Files</h3>
                <div className="space-y-3">
                  {recentFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <FileText className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">{file.size} • {file.modified}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {file.type}
                        </span>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors min-w-[50px] text-center">
                          Open
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center justify-between gap-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <Plus className="w-4 h-4 text-gray-600" />
                      <span>Create New Document</span>
                    </div>
                    <span className="text-gray-400">→</span>
                  </button>
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center justify-between gap-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <Upload className="w-4 h-4 text-gray-600" />
                      <span>Upload File</span>
                    </div>
                    <span className="text-gray-400">→</span>
                  </button>
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex items-center justify-between gap-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <Folder className="w-4 h-4 text-gray-600" />
                      <span>New Folder</span>
                    </div>
                    <span className="text-gray-400">→</span>
                  </button>
                </div>
              </div>

              {/* Storage */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Storage</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Used</span>
                    <span>2.4 GB of 10 GB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Upgrade Storage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workspace;
