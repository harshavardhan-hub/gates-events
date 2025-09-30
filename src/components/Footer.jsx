import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS, SOCIAL_LINKS } from '../utils/constants.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div>
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
              <div className="flex space-x-4">
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
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-5 text-gray-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
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
          <div className="flex flex-col items-center space-y-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} GATES Institute of Technology. All rights reserved.
            </p>
            
            {/* Created By Section - Mobile & Desktop Optimized */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Created</span>
                <svg className="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-500">using</span>
                <div className="flex items-center space-x-1">
                  <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005 1.43-2.06 2.672-5.072 3.196.466-.696.893-1.404 1.264-2.113.085-.162.158-.325.236-.49.046-.422.068-.85.059-1.278.002-.017-.007-.033-.012-.05-.218-.337-.435-.677-.692-1.017-.387-.51-.82-1.002-1.01-1.222zm-14.472.01c-.184.221-.615.712-1.002 1.222-.254.332-.47.7-.692 1.017-.005.017-.01.033-.012.05-.01.427.013.855.06 1.277.078.165.152.328.237.49.37.71.798 1.417 1.264 2.113-3.012-.524-5.067-1.766-5.072-3.196 0-.768 1.12-1.735 2.852-2.475.43-.18.89-.347 1.375-.498zm1.893 1.08c.188.64.414 1.292.675 1.947-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146-.695.103-1.365.23-2.006.387.18-.632.405-1.282.66-1.933.2.39.41.783zm2.5.31c1.008.013 2.005.17 2.99.47-.99.3-1.985.458-2.99.47z"/>
                  </svg>
                  <span className="text-cyan-400 font-medium">React</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">by</span>
                <a
                  href="https://www.linkedin.com/in/harsha-vardhan-yanakandla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold hover:from-blue-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
                >
                  Harsha Vardhan Yanakandla
                </a>
                <span className="text-gray-500 hidden sm:inline">•</span>
                <span className="text-gray-400 text-xs">Final Year ECE</span>
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
