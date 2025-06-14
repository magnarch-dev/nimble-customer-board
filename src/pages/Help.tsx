
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Search, HelpCircle, Book, MessageCircle, Mail } from 'lucide-react';

const Help = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const faqs = [
    {
      question: 'How do I schedule a new appointment?',
      answer: 'Navigate to the Appointments page and click "Schedule Appointment". Fill in the patient details and select your preferred time slot.'
    },
    {
      question: 'How can I manage patient records?',
      answer: 'Go to Patient Records section where you can add, edit, and view all patient information including medical history and treatment plans.'
    },
    {
      question: 'How do I generate reports?',
      answer: 'Visit the Reports & Analytics page to view various reports and export them in different formats for your records.'
    }
  ];

  return (
    <div className="min-h-screen flex w-full" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Help Center</h1>

          {/* Search */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Help */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Help</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Book className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">Getting Started Guide</h3>
                    <p className="text-sm text-gray-600">Learn the basics of using the platform</p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">Live Chat Support</h3>
                    <p className="text-sm text-gray-600">Get instant help from our support team</p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Contact Support</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email Support</p>
                      <p className="text-xs text-gray-600">support@elvora.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Live Chat</p>
                      <p className="text-xs text-gray-600">Available 24/7</p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Help;
