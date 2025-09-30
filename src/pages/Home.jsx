import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection.jsx';
import FlashNews from '../components/FlashNews.jsx';
import PageTransition from '../components/PageTransition.jsx';
import EventCard from '../components/EventCard.jsx';
import { Link } from 'react-router-dom';
import { getFeaturedEvents } from '../data/events.js';
import { SITE_CONFIG } from '../utils/constants.js';

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <PageTransition>
      <Helmet>
        <title>{SITE_CONFIG.name} - Home</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta property="og:title" content={`${SITE_CONFIG.name} - Home`} />
        <meta property="og:description" content={SITE_CONFIG.description} />
        <meta property="og:image" content={SITE_CONFIG.ogImage} />
        <link rel="canonical" href={SITE_CONFIG.url} />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Events Section - Fixed Layout */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Featured <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Events</span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't miss these highlight events that showcase the best of 
              <span className="font-semibold text-blue-600"> innovation</span>, 
              <span className="font-semibold text-purple-600"> creativity</span>, and 
              <span className="font-semibold text-indigo-600"> talent</span> at Gates Events 2K25
            </p>
          </div>

          {/* Featured Events Grid - Perfect 3 Column Layout for Laptop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredEvents.map((event, index) => (
              <div
                key={event.id}
                className="transform hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <EventCard 
                  event={event} 
                  featured={true}
                />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Explore More?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Discover all the amazing events we have planned for you
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/explore"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg inline-flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  View All Events
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  to="/about"
                  className="w-full sm:w-auto bg-white text-gray-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  About College
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Gates Events Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose <span className="text-gradient bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Gates Events 2K25?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of technical excellence and cultural vibrancy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              gradient="from-blue-500 to-cyan-500"
              icon={
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Innovation Hub"
              description="Cutting-edge technology competitions and workshops that push the boundaries of creativity and technical excellence."
            />

            <FeatureCard
              gradient="from-purple-500 to-pink-500"
              icon={
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Industry Connect"
              description="Network with industry professionals, tech leaders, and potential employers through our extensive partnership program."
            />

            <FeatureCard
              gradient="from-emerald-500 to-teal-500"
              icon={
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
              title="Skill Development"
              description="Comprehensive workshops, mentorship programs, and hands-on learning experiences to enhance your skills."
            />

            <FeatureCard
              gradient="from-orange-500 to-red-500"
              icon={
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="Cultural Diversity"
              description="Celebrate creativity through diverse cultural events, artistic competitions, and talent showcases."
            />

            <FeatureCard
              gradient="from-indigo-500 to-purple-500"
              icon={
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              }
              title="Exciting Prizes"
              description="Win amazing prizes, certificates, internship opportunities, and recognition from industry partners."
            />

            <FeatureCard
              gradient="from-slate-500 to-gray-600"
              icon={
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="World-Class Facilities"
              description="State-of-the-art venues, modern equipment, and excellent infrastructure for all events and competitions."
            />
          </div>
        </div>
      </section>

      {/* Flash News Section */}
      <FlashNews />

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8 animate-bounce-subtle">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8">
              Ready to Join the <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Adventure?</span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-200 leading-relaxed">
              Don't miss out on the most exciting college festival of the year. 
              Register now and be part of the <span className="font-bold text-yellow-400">Gates Events 2K25</span> legacy!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link
                to="/explore"
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 text-base sm:text-lg shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse Events
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                to="/about"
                className="w-full sm:w-auto border-2 border-white/30 text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-base sm:text-lg backdrop-blur-sm inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

// Enhanced Feature Card Component
const FeatureCard = ({ gradient, icon, title, description }) => {
  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-gray-200">
      <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
    </div>
  );
};

export default Home;
