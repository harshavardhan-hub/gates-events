import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../utils/constants.js';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${ASSETS.heroBackground})`,
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto lg:pt-40">
        <div className="animate-fade-in">
          {/* Main Title - Fixed Mobile Spacing */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block">Gates Events</span>
            <span className="text-gradient bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              2K25
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Where Innovation Meets Excellence
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join the most spectacular technical and cultural festival at GATES Institute of Technology. 
            Experience cutting-edge competitions, innovative workshops, and vibrant celebrations.
          </p>

          {/* CTA Buttons - Fixed Mobile Size */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20">
            <Link
              to="/explore"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Explore Events
              <svg 
                className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              to="/about"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center group"
            >
              About College
              <svg 
                className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed Position at Bottom */}
        <div className="absolute bottom-12 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300 cursor-pointer animate-bounce-subtle">
            <span className="text-xs sm:text-sm mb-2 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

    </section>
  );
};

export default HeroSection;
