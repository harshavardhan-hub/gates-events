import React from 'react';
import { Link } from 'react-router-dom';
import { EVENT_CATEGORIES } from '../utils/constants.js';

const EventCard = ({ event, featured = false }) => {
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className={`group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 ${featured ? 'ring-2 ring-blue-200' : ''}`}>
      {/* Event Image */}
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm ${
            event.category === EVENT_CATEGORIES.TECHNICAL 
              ? 'bg-blue-500/90 text-white' 
              : 'bg-emerald-500/90 text-white'
          }`}>
            {event.category}
          </span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
              ⭐ Featured
            </span>
          </div>
        )}

        {/* Date Badge */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
            {formatDate(event.date)}
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-8">
        {/* Event Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {event.name}
        </h3>

        {/* Event Description */}
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 text-lg">
          {event.shortDescription}
        </p>

        {/* Event Meta Info */}
        <div className="space-y-3 mb-8 text-gray-500">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-medium">{event.time}</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="line-clamp-1 font-medium">{event.venue}</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="line-clamp-1 font-medium">
              {event.organizers.slice(0, 2).join(', ')}
              {event.organizers.length > 2 && ' +more'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/events/${event.id}`}
            className="flex-1 bg-gradient-to-r from-slate-600 to-slate-800 text-white font-semibold py-4 px-6 rounded-xl text-center hover:from-slate-700 hover:to-slate-900 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Details
          </Link>
          
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl text-center hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
