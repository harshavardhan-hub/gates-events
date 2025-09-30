import React from 'react';
import { DEPARTMENT_STATS } from '../utils/constants.js';

const FlashNews = () => {
  const departmentEntries = Object.entries(DEPARTMENT_STATS);

  return (
    <section id="flash-news" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flash News & Statistics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Current enrollment statistics across all departments at GATES Institute of Technology
          </p>
        </div>

        {/* Department Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {departmentEntries.map(([department, count], index) => (
            <div
              key={department}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {department.slice(0, 3)}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {count}
              </h3>
              
              <p className="text-gray-600 text-sm font-medium">
                {getDepartmentFullName(department)}
              </p>
            </div>
          ))}
        </div>

        {/* Quick News Updates - Mobile Optimized */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Latest Updates
          </h3>
          
          <div className="space-y-4 sm:space-y-6">
            <MobileNewsItem
              date="September 30, 2025"
              title="Event Registrations Now Open!"
              description="All event registrations for Gates Events 2K25 are now live. Early bird discounts available until October 15th."
              type="announcement"
            />
            
            <MobileNewsItem
              date="September 28, 2025"
              title="Special Guest Announcement"
              description="Industry leaders and tech innovators confirmed as judges and mentors for our technical events."
              type="news"
            />
            
            <MobileNewsItem
              date="September 25, 2025"
              title="Venue Upgrades Complete"
              description="State-of-the-art facilities and equipment installations completed for all event venues."
              type="update"
            />
            
            <MobileNewsItem
              date="September 20, 2025"
              title="Partnership with Tech Giants"
              description="Major tech companies partner with GATES for recruitment drives during the event."
              type="partnership"
            />
          </div>
        </div>

        {/* Event Timeline - Mobile Optimized */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Event Timeline
          </h3>
          
          {/* Mobile Timeline (Vertical Stack) */}
          <div className="block sm:hidden space-y-6">
            <MobileTimelineItem
              date="March 15, 2025"
              title="Hackathon 2K25 Begins"
              description="24-hour coding marathon kicks off"
              color="blue"
            />
            
            <MobileTimelineItem
              date="March 20, 2025"
              title="Robotics Expo"
              description="Robot exhibitions and competitions"
              color="purple"
            />
            
            <MobileTimelineItem
              date="April 2, 2025"
              title="Cultural Events Start"
              description="Cultural fest and treasure hunt"
              color="emerald"
            />
            
            <MobileTimelineItem
              date="April 22, 2025"
              title="Final Events"
              description="Art exhibition and closing ceremony"
              color="orange"
            />
          </div>

          {/* Desktop Timeline (Centered with Line) */}
          <div className="hidden sm:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            
            <div className="space-y-12">
              <DesktopTimelineItem
                date="March 15, 2025"
                title="Hackathon 2K25 Begins"
                description="24-hour coding marathon kicks off"
                position="left"
                color="blue"
              />
              
              <DesktopTimelineItem
                date="March 20, 2025"
                title="Robotics Expo"
                description="Robot exhibitions and competitions"
                position="right"
                color="purple"
              />
              
              <DesktopTimelineItem
                date="April 2, 2025"
                title="Cultural Events Start"
                description="Cultural fest and treasure hunt"
                position="left"
                color="emerald"
              />
              
              <DesktopTimelineItem
                date="April 22, 2025"
                title="Final Events"
                description="Art exhibition and closing ceremony"
                position="right"
                color="orange"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mobile Optimized News Item Component
const MobileNewsItem = ({ date, title, description, type }) => {
  const getTypeConfig = (type) => {
    switch (type) {
      case 'announcement': 
        return {
          color: 'bg-green-100 text-green-800 border-green-200',
          icon: (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          ),
          bgColor: 'bg-green-50',
          borderColor: 'border-l-green-500'
        };
      case 'news': 
        return {
          color: 'bg-blue-100 text-blue-800 border-blue-200',
          icon: (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          ),
          bgColor: 'bg-blue-50',
          borderColor: 'border-l-blue-500'
        };
      case 'update': 
        return {
          color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
          icon: (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ),
          bgColor: 'bg-yellow-50',
          borderColor: 'border-l-yellow-500'
        };
      case 'partnership': 
        return {
          color: 'bg-purple-100 text-purple-800 border-purple-200',
          icon: (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          bgColor: 'bg-purple-50',
          borderColor: 'border-l-purple-500'
        };
      default: 
        return {
          color: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          bgColor: 'bg-gray-50',
          borderColor: 'border-l-gray-500'
        };
    }
  };

  const config = getTypeConfig(type);

  return (
    <div className={`${config.bgColor} ${config.borderColor} border-l-4 rounded-r-xl p-4 sm:p-6 hover:shadow-md transition-all duration-300`}>
      {/* Mobile Layout */}
      <div className="block sm:hidden">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${config.color}`}>
            {config.icon}
            <span className="ml-1">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </span>
          <span className="text-xs text-gray-500 font-medium">{date}</span>
        </div>
        
        <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{title}</h4>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block">
        <div className="flex items-start justify-between mb-4">
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border ${config.color}`}>
            {config.icon}
            <span className="ml-2">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </span>
          <span className="text-sm text-gray-500 font-medium">{date}</span>
        </div>
        
        <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Mobile Timeline Item Component (unchanged)
const MobileTimelineItem = ({ date, title, description, color }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'blue': return 'border-blue-500 bg-blue-50';
      case 'purple': return 'border-purple-500 bg-purple-50';
      case 'emerald': return 'border-emerald-500 bg-emerald-50';
      case 'orange': return 'border-orange-500 bg-orange-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getDotClasses = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'purple': return 'bg-purple-500';
      case 'emerald': return 'bg-emerald-500';
      case 'orange': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="relative">
      <div className={`border-l-4 ${getColorClasses(color)} rounded-r-xl p-4 ml-4`}>
        <div className={`absolute -left-2 top-4 w-4 h-4 ${getDotClasses(color)} rounded-full border-2 border-white shadow-lg`}></div>
        
        <div className="text-sm text-gray-500 font-semibold mb-2">{date}</div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Desktop Timeline Item Component (unchanged)
const DesktopTimelineItem = ({ date, title, description, position, color }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      case 'emerald': return 'from-emerald-500 to-emerald-600';
      case 'orange': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className={`flex items-center ${position === 'right' ? 'flex-row-reverse' : ''}`}>
      <div className={`w-1/2 ${position === 'right' ? 'pl-8' : 'pr-8'}`}>
        <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${position === 'right' ? 'text-right' : ''}`}>
          <div className={`text-sm font-semibold mb-2 bg-gradient-to-r ${getColorClasses(color)} bg-clip-text text-transparent`}>
            {date}
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
      
      <div className={`w-6 h-6 bg-gradient-to-r ${getColorClasses(color)} border-4 border-white rounded-full relative z-10 shadow-lg`}></div>
      
      <div className="w-1/2"></div>
    </div>
  );
};

// Helper function to get full department names (unchanged)
const getDepartmentFullName = (dept) => {
  const departmentNames = {
    'CSE': 'Computer Science',
    'CSE-AI': 'CSE - AI & ML',
    'CIVIL': 'Civil Engineering',
    'ECE': 'Electronics & Comm',
    'EEE': 'Electrical & Electronics',
    'MECH': 'Mechanical Engg',
    'MBA': 'Business Admin',
    'MCA': 'Computer Applications'
  };
  
  return departmentNames[dept] || dept;
};

export default FlashNews;
