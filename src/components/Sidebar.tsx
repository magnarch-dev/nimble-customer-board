
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Users, 
  CreditCard, 
  Mail, 
  Briefcase, 
  Settings, 
  HelpCircle, 
  LogOut,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const location = useLocation();
  const [voiceAgentExpanded, setVoiceAgentExpanded] = useState(false);

  const menuItems = [
    { icon: BarChart3, label: 'Overview', path: '/' },
    { 
      icon: Phone, 
      label: 'Voice Agent', 
      path: '/voice-agent',
      hasSubmenu: true,
      submenu: [
        { icon: PhoneIncoming, label: 'Inbound Calls', path: '/voice-agent/inbound' },
        { icon: PhoneOutgoing, label: 'Outbound Calls', path: '/voice-agent/outbound' }
      ]
    },
    { icon: MessageSquare, label: 'Messages', path: '/messages', badge: '3' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: CreditCard, label: 'Billing & Payments', path: '/billing' },
    { icon: Mail, label: 'Email Campaign', path: '/email-campaign' },
    { icon: Briefcase, label: 'Workspace', path: '/workspace' },
    { icon: Users, label: 'Reports & Analytics', path: '/reports' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help Center', path: '/help' },
    { icon: LogOut, label: 'Logout', path: '/logout' },
  ];

  const handleVoiceAgentClick = () => {
    if (!isCollapsed) {
      setVoiceAgentExpanded(!voiceAgentExpanded);
    }
  };

  return (
    <div className={`h-full transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} relative`} style={{ backgroundColor: '#e4e4e4' }}>
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            <img 
              src="/lovable-uploads/4abff3f1-299b-44c4-bda7-84b5880d51a3.png" 
              alt="Elvora Logo" 
              className="w-6 h-6 object-contain filter invert"
            />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="font-bold text-lg text-gray-900">Elvora</h1>
              <p className="text-xs text-gray-500">Free Plan</p>
            </div>
          )}
        </div>
      </div>

      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            {item.hasSubmenu ? (
              <div>
                <button
                  onClick={handleVoiceAgentClick}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium transition-colors relative ${
                    location.pathname.startsWith('/voice-agent')
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && (
                    <>
                      <span className="ml-3">{item.label}</span>
                      <span className="ml-auto">
                        {voiceAgentExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </span>
                    </>
                  )}
                </button>
                {!isCollapsed && voiceAgentExpanded && item.submenu && (
                  <div className="ml-8">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`flex items-center px-4 py-2 text-sm transition-colors relative ${
                          location.pathname === subItem.path
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <subItem.icon className="w-4 h-4" />
                        <span className="ml-3">{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium transition-colors relative ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-700'
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
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        {bottomItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center px-2 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors relative"
          >
            <item.icon className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">{item.label}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
