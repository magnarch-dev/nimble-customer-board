
import React from 'react';
import { Menu, ChevronLeft, ChevronRight, Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header = ({ onToggleSidebar }: HeaderProps) => {
  return (
    <header className="border-b border-gray-200 px-6 py-4" style={{ backgroundColor: '#e4e4e4' }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onToggleSidebar}
            className="p-2"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
            </div>
            <Button variant="ghost" size="sm" className="p-2">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg border border-gray-200">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="text-sm bg-transparent border-none outline-none text-gray-600 placeholder-gray-400"
            />
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <kbd className="px-1 py-0.5 bg-gray-100 rounded">⌘</kbd>
              <kbd className="px-1 py-0.5 bg-gray-100 rounded">K</kbd>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>March 12, 2025</span>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mt-2">Get a quick snapshot of key metrics, patient data, and performance trends.</p>
    </header>
  );
};

export default Header;
