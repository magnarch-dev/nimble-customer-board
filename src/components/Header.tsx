
import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header = ({ onToggleSidebar }: HeaderProps) => {
  return (
    <header className="border-b border-gray-200 px-6 py-4" style={{ backgroundColor: '#e4e4e4' }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onToggleSidebar}
            className="p-2"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg border border-gray-200">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="text-sm bg-transparent border-none outline-none text-gray-600 placeholder-gray-400 w-32"
            />
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">⌘K</kbd>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button 
            size="sm" 
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          >
            Your Plan
          </Button>
          
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
