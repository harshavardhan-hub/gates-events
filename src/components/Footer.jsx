import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS, SOCIAL_LINKS } from '../utils/constants.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Brand Section */}
          <div className="flex flex-col items-start lg:items-start text-left lg:text-left">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={ASSETS.logo}
                alt="Gates College Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">Gates Events 2K25</h3>
                <p className="text-gray-300 text-sm">GATES Institute of Technology</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
              Join us for the biggest technical and cultural festival at GATES Institute of Technology. 
              Experience innovation, creativity, and excellence in every event.
            </p>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex justify-start lg:justify-start space-x-4">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={`Visit our ${platform} page`}
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start lg:items-start text-left lg:text-left">
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-5 text-gray-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">GATES Institute of Technology</p>
                  <p className="text-sm text-gray-300">Gooty, Ananthapur District</p>
                  <p className="text-sm text-gray-300">Andhra Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href="mailto:events@gatesit.ac.in"
                  className="hover:text-white transition-colors duration-300 font-medium"
                >
                  events@gatesit.ac.in
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a 
                  href="tel:+918555999000"
                  className="hover:text-white transition-colors duration-300 font-medium"
                >
                  +91 8555 999 000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col items-start lg:items-center space-y-6">
            
            {/* Copyright - Mobile: Left aligned, Desktop: Center */}
            <div className="text-left lg:text-center">
              <p className="text-gray-400 text-sm hidden lg:block">
                © {currentYear} GATES Institute of Technology. All rights reserved.
              </p>
              {/* Mobile View - Left aligned */}
              <div className="lg:hidden">
                <p className="text-gray-400 text-sm">
                  © {currentYear} GATES Institute of Technology.
                </p>
                <p className="text-gray-400 text-sm">
                  All rights reserved.
                </p>
              </div>
            </div>
            
            {/* Created By Section - Mobile: Left aligned, Desktop: Center */}
            <div className="flex flex-col items-start lg:items-center justify-start lg:justify-center space-y-3 lg:space-y-0 text-sm">
              
              {/* Desktop View - Center */}
              <div className="hidden lg:flex items-center justify-center space-x-2">
                <span className="text-gray-500">Created by</span>
                <a
                  href="https://www.linkedin.com/in/harsha-vardhan-yanakandla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold hover:from-blue-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Harsha Vardhan Yanakandla</span>
                  <svg className="h-4 w-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <span className="text-gray-400">Final Year ECE</span>
              </div>
              
              {/* Mobile View - Left aligned */}
              <div className="lg:hidden flex flex-col items-start justify-start space-y-1 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">Created by</span>
                  <a
                    href="https://www.linkedin.com/in/harsha-vardhan-yanakandla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold hover:from-blue-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Harsha Vardhan Yanakandla</span>
                    <svg className="h-4 w-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 text-xs">Final Year ECE Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Media Icon Component (Same as before)
const SocialIcon = ({ platform }) => {
  const iconProps = { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24" };

  switch (platform) {
    case 'facebook':
      return (
        <svg {...iconProps}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg {...iconProps}>
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM12 16.624c-2.552 0-4.624-2.072-4.624-4.624S9.448 7.376 12 7.376s4.624 2.072 4.624 4.624S14.552 16.624 12 16.624zm4.811-8.35c-.598 0-1.082-.484-1.082-1.082s.484-1.082 1.082-1.082 1.082.484 1.082 1.082-.484 1.082-1.082 1.082z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...iconProps}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg {...iconProps}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;
