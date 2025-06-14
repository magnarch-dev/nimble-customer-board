
import React from 'react';
import { 
  BarChart3, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Users, 
  CreditCard, 
  Pill, 
  Stethoscope, 
  Settings, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const menuItems = [
    { icon: BarChart3, label: 'Overview', active: true },
    { icon: FileText, label: 'Patient Records' },
    { icon: MessageSquare, label: 'Messages', badge: '3' },
    { icon: Calendar, label: 'Appointments' },
    { icon: CreditCard, label: 'Billing & Payments' },
    { icon: Pill, label: 'Medications Management' },
    { icon: Stethoscope, label: 'Medical Staff' },
    { icon: Users, label: 'Reports & Analytics' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help Center' },
    { icon: LogOut, label: 'Logout' },
  ];

  return (
    <div className={`bg-white h-full border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="font-bold text-lg text-gray-900">MediTrack</h1>
              <p className="text-xs text-gray-500">Free Plan</p>
            </div>
          )}
        </div>
      </div>

      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
              item.active
                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            {!isCollapsed && (
              <>
                <span className="ml-3">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-blue-600 text-white text-xs rounded-full px-2 py-1">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
        {bottomItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center px-2 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <item.icon className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">{item.label}</span>}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
