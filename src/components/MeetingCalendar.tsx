
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, Building2, User, Briefcase } from 'lucide-react';

interface Meeting {
  id: string;
  time: string;
  clientName: string;
  company: string;
  services: string[];
  status: 'scheduled' | 'completed' | 'cancelled';
}

interface DayMeetings {
  [key: string]: Meeting[];
}

const MeetingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Mock data for meetings
  const meetingsData: DayMeetings = {
    '2025-01-15': [
      {
        id: '1',
        time: '9:30 AM - 10:30 AM',
        clientName: 'John Smith',
        company: 'Tech Solutions Inc.',
        services: ['Consultation', 'Strategy Planning'],
        status: 'scheduled'
      },
      {
        id: '2',
        time: '2:00 PM - 3:00 PM',
        clientName: 'Sarah Johnson',
        company: 'Marketing Pro',
        services: ['Campaign Review'],
        status: 'scheduled'
      }
    ],
    '2025-01-16': [
      {
        id: '3',
        time: '11:00 AM - 12:00 PM',
        clientName: 'Michael Chen',
        company: 'DataFlow Systems',
        services: ['Technical Review', 'Implementation'],
        status: 'completed'
      }
    ],
    '2025-01-17': [
      {
        id: '4',
        time: '10:00 AM - 11:00 AM',
        clientName: 'Emily Davis',
        company: 'Creative Agency',
        services: ['Design Consultation'],
        status: 'scheduled'
      },
      {
        id: '5',
        time: '3:30 PM - 4:30 PM',
        clientName: 'Robert Wilson',
        company: 'Finance Corp',
        services: ['Financial Planning', 'Risk Assessment'],
        status: 'scheduled'
      }
    ]
  };

  const getDateKey = (date: Date) => {
    return format(date, 'yyyy-MM-dd');
  };

  const getMeetingsForDate = (date: Date | undefined) => {
    if (!date) return [];
    const dateKey = getDateKey(date);
    return meetingsData[dateKey] || [];
  };

  const haseMeetingsOnDate = (date: Date) => {
    const dateKey = getDateKey(date);
    return meetingsData[dateKey] && meetingsData[dateKey].length > 0;
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date && getMeetingsForDate(date).length > 0) {
      setIsSheetOpen(true);
    }
  };

  const selectedDateMeetings = getMeetingsForDate(selectedDate);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">Meeting Calendar</h3>
          <p className="text-sm text-gray-500 mt-1">Click on a date to view scheduled meetings</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <CalendarIcon className="w-4 h-4" />
          <span>
            {selectedDate ? format(selectedDate, 'MMMM yyyy') : 'Select a date'}
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            className="rounded-md border w-full"
            modifiers={{
              hasMeetings: (date) => haseMeetingsOnDate(date)
            }}
            modifiersStyles={{
              hasMeetings: {
                backgroundColor: '#3B82F6',
                color: 'white',
                fontWeight: 'bold'
              }
            }}
          />
          <div className="mt-4 text-xs text-gray-500 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Days with scheduled meetings</span>
            </div>
          </div>
        </div>
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>
              Meeting Details - {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {selectedDateMeetings.map((meeting) => (
              <div key={meeting.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-lg text-gray-900">{meeting.clientName}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(meeting.status)}`}>
                    {meeting.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{meeting.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{meeting.company}</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium mb-2">Services Required:</p>
                      <div className="flex flex-wrap gap-2">
                        {meeting.services.map((service, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MeetingCalendar;
