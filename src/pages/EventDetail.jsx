import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/PageTransition.jsx';
import { getEventById } from '../data/events.js';
import { SITE_CONFIG, EVENT_CATEGORIES } from '../utils/constants.js';

const EventDetail = () => {
  const { id } = useParams();
  const event = getEventById(id);

  // If event not found, redirect to explore page
  if (!event) {
    return <Navigate to="/explore" replace />;
  }

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{`${event.name} - ${SITE_CONFIG.name}`}</title>
        <meta name="description" content={event.shortDescription} />
        <meta property="og:title" content={`${event.name} - ${SITE_CONFIG.name}`} />
        <meta property="og:description" content={event.shortDescription} />
        <meta property="og:image" content={event.image} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${event.image})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                to="/explore"
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300"
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Events
              </Link>
            </div>

            {/* Category Badge */}
            <div className="mb-6">
              <span className={`inline-flex items-center px-6 py-2 rounded-full text-lg font-bold shadow-lg backdrop-blur-sm ${
                event.category === EVENT_CATEGORIES.TECHNICAL 
                  ? 'bg-blue-500/90 text-white' 
                  : 'bg-emerald-500/90 text-white'
              }`}>
                {event.category}
              </span>
            </div>

            {/* Event Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {event.name}
            </h1>

            {/* Short Description */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {event.shortDescription}
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <div className="flex items-center justify-center mb-2">
                  <svg className="h-6 w-6 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v13a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h2M8 7h8M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h2" />
                  </svg>
                  <span className="font-medium">Date</span>
                </div>
                <p className="text-sm">{formatDate(event.date)}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <div className="flex items-center justify-center mb-2">
                  <svg className="h-6 w-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Time</span>
                </div>
                <p className="text-sm">{event.time}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 sm:col-span-1 col-span-1">
                <div className="flex items-center justify-center mb-2">
                  <svg className="h-6 w-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">Venue</span>
                </div>
                <p className="text-sm text-center">{event.venue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            
            {/* Mobile Registration Card - Appears First on Mobile */}
            <div className="block lg:hidden mb-8">
              <MobileRegistrationCard event={event} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Event Description */}
                <div className="card mb-8">
                  <div className="card-header">
                    <h2 className="text-2xl font-bold">About This Event</h2>
                  </div>
                  <div className="card-body">
                    <div className="prose prose-lg max-w-none">
                      {event.fullDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed mb-6">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Organizers */}
                <div className="card">
                  <div className="card-header">
                    <h2 className="text-2xl font-bold">Event Organizers</h2>
                  </div>
                  <div className="card-body">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {event.organizers.map((organizer, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-xl font-medium flex items-center"
                        >
                          <svg className="h-5 w-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {organizer}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Sidebar - Hidden on Mobile */}
              <div className="lg:col-span-1 hidden lg:block">
                <div className="sticky top-8 space-y-8">
                  <DesktopRegistrationCard event={event} />
                  <EventDetailsCard event={event} formatDate={formatDate} />
                </div>
              </div>
            </div>

            {/* Related Events */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Other Events You Might Like
              </h2>
              <div className="text-center">
                <Link
                  to="/explore"
                  className="btn-secondary inline-flex items-center text-lg px-8 py-4"
                >
                  Explore All Events
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

// Mobile Registration Card Component
const MobileRegistrationCard = ({ event }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
      <div className="text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-bold mb-3">Ready to Join?</h3>
        <p className="text-blue-100 mb-6 leading-relaxed">
          Secure your spot in {event.name} and be part of this amazing experience!
        </p>
        
        <a
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg text-lg group"
        >
          <svg className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Register Now
          <svg className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M7 7l10 10M17 7v4" />
          </svg>
        </a>
        
        <p className="text-xs text-blue-200 mt-3">
          🔒 Secure registration • Opens in new tab
        </p>
      </div>
    </div>
  );
};

// Desktop Registration Card Component
const DesktopRegistrationCard = ({ event }) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 text-white shadow-2xl border border-white/10">
      <div className="text-center">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
          <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-bold mb-4">Reserve Your Spot</h3>
        <p className="text-blue-100 mb-8 leading-relaxed">
          Don't miss this incredible opportunity! Join {event.name} and connect with like-minded individuals.
        </p>
        
        {/* Registration Benefits */}
        <div className="space-y-3 mb-8 text-left">
          <div className="flex items-center text-sm text-blue-100">
            <svg className="h-4 w-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Free participation certificate
          </div>
          <div className="flex items-center text-sm text-blue-100">
            <svg className="h-4 w-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Networking opportunities
          </div>
          <div className="flex items-center text-sm text-blue-100">
            <svg className="h-4 w-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Exclusive event materials
          </div>
        </div>
        
        <a
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center shadow-xl text-lg group transform hover:-translate-y-1"
        >
          <svg className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Register Now
          <svg className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M7 7l10 10M17 7v4" />
          </svg>
        </a>
        
        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-xs text-blue-200">
            🔐 Secure SSL Registration<br/>
            📧 Confirmation email sent instantly
          </p>
        </div>
      </div>
    </div>
  );
};

// Event Details Card Component
const EventDetailsCard = ({ event, formatDate }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Event Details
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v13a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h2M8 7h8M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h2" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Date</p>
              <p className="text-gray-600 text-sm">{formatDate(event.date)}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Time</p>
              <p className="text-gray-600 text-sm">{event.time}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Venue</p>
              <p className="text-gray-600 text-sm leading-relaxed">{event.venue}</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Category</p>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                event.category === EVENT_CATEGORIES.TECHNICAL 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {event.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
