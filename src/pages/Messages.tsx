
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Search, Send, Paperclip, MoreVertical } from 'lucide-react';

const Messages = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      lastMessage: 'Patient follow-up scheduled for tomorrow',
      time: '2:30 PM',
      unread: 2,
      avatar: 'SW'
    },
    {
      id: 2,
      name: 'Michael Chen',
      lastMessage: 'Thank you for the consultation',
      time: '1:45 PM',
      unread: 0,
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      lastMessage: 'Can we reschedule the appointment?',
      time: '11:20 AM',
      unread: 1,
      avatar: 'ER'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Dr. Sarah Wilson',
      content: 'Good morning! I wanted to follow up on the patient case we discussed yesterday.',
      time: '9:30 AM',
      isMe: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Yes, I have the reports ready. The patient responded well to the treatment.',
      time: '9:45 AM',
      isMe: true
    },
    {
      id: 3,
      sender: 'Dr. Sarah Wilson',
      content: 'Excellent! Could you schedule a follow-up for next week?',
      time: '2:30 PM',
      isMe: false
    }
  ];

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className="flex-1 overflow-hidden">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="p-6 overflow-y-auto h-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>

          <div className="bg-white rounded-lg shadow-sm h-96 flex">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
                      selectedChat === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {conversation.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {conversation.name}
                          </p>
                          <p className="text-xs text-gray-500">{conversation.time}</p>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                    SW
                  </div>
                  <h3 className="font-medium text-gray-900">Dr. Sarah Wilson</h3>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isMe
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.isMe ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                    <Send className="w-4 h-4" />
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

export default Messages;
