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
        <div className="hero-overlay" />
      </div>


      {/* SIMPLE PERFECT STRING LIGHTS */}
      <div className="string-lights-container">
        <div className="string-wire"></div>
        <div className="lights-row">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className={`simple-bulb bulb-color-${(i % 4) + 1}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>


      {/* Left Flower Pot Firecracker */}
      <div className="absolute left-4 md:left-10 lg:left-20 bottom-16 md:bottom-20 lg:bottom-24 z-10">
        <div className="firecracker-wrapper">
          <div className="flower-pot-cone">
            <div className="pot-opening"></div>
            <div className="pot-cone-body">
              <div className="golden-stripe"></div>
              <div className="pattern-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="pot-bottom"></div>
          </div>
          
          <div className="festive-fountain">
            {[...Array(18)].map((_, i) => (
              <div 
                key={`gold-${i}`}
                className="sparkle golden"
                style={{ 
                  animationDelay: `${i * 0.15}s`,
                  left: `${44 + (i % 5) * 3}%`
                }}
              />
            ))}
            
            {[...Array(15)].map((_, i) => (
              <div 
                key={`flame-${i}`}
                className="fire-flame"
                style={{ 
                  animationDelay: `${i * 0.18}s`,
                  left: `${43 + (i % 5) * 3.5}%`
                }}
              />
            ))}
            
            {[...Array(12)].map((_, i) => (
              <div 
                key={`star-${i}`}
                className="star-sparkle"
                style={{ 
                  animationDelay: `${i * 0.22}s`,
                  left: `${42 + (i % 4) * 4}%`
                }}
              >
                ⭐
              </div>
            ))}
            
            {[...Array(10)].map((_, i) => (
              <div 
                key={`heart-${i}`}
                className="heart-sparkle"
                style={{ 
                  animationDelay: `${i * 0.25}s`,
                  left: `${43 + (i % 4) * 4}%`
                }}
              >
                ❤️
              </div>
            ))}
            
            {[...Array(14)].map((_, i) => (
              <div 
                key={`diamond-${i}`}
                className="diamond-sparkle"
                style={{ 
                  animationDelay: `${i * 0.16}s`,
                  left: `${41 + (i % 5) * 4.5}%`
                }}
              >
                ✨
              </div>
            ))}
            
            {[...Array(12)].map((_, i) => (
              <div 
                key={`orange-${i}`}
                className="sparkle orange"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  left: `${45 + (i % 4) * 3}%`
                }}
              />
            ))}
          </div>
        </div>
      </div>


      {/* Right Flower Pot Firecracker */}
      <div className="absolute right-4 md:right-10 lg:right-20 bottom-16 md:bottom-20 lg:bottom-24 z-10">
        <div className="firecracker-wrapper">
          <div className="flower-pot-cone flower-pot-cone-right">
            <div className="pot-opening"></div>
            <div className="pot-cone-body">
              <div className="golden-stripe"></div>
              <div className="pattern-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="pot-bottom"></div>
          </div>
          
          <div className="festive-fountain">
            {[...Array(18)].map((_, i) => (
              <div 
                key={`gold-${i}`}
                className="sparkle golden"
                style={{ 
                  animationDelay: `${i * 0.15}s`,
                  left: `${44 + (i % 5) * 3}%`
                }}
              />
            ))}
            
            {[...Array(15)].map((_, i) => (
              <div 
                key={`flame-${i}`}
                className="fire-flame"
                style={{ 
                  animationDelay: `${i * 0.18}s`,
                  left: `${43 + (i % 5) * 3.5}%`
                }}
              />
            ))}
            
            {[...Array(12)].map((_, i) => (
              <div 
                key={`star-${i}`}
                className="star-sparkle"
                style={{ 
                  animationDelay: `${i * 0.22}s`,
                  left: `${42 + (i % 4) * 4}%`
                }}
              >
                ⭐
              </div>
            ))}
            
            {[...Array(10)].map((_, i) => (
              <div 
                key={`heart-${i}`}
                className="heart-sparkle"
                style={{ 
                  animationDelay: `${i * 0.25}s`,
                  left: `${43 + (i % 4) * 4}%`
                }}
              >
                ❤️
              </div>
            ))}
            
            {[...Array(14)].map((_, i) => (
              <div 
                key={`diamond-${i}`}
                className="diamond-sparkle"
                style={{ 
                  animationDelay: `${i * 0.16}s`,
                  left: `${41 + (i % 5) * 4.5}%`
                }}
              >
                ✨
              </div>
            ))}
            
            {[...Array(12)].map((_, i) => (
              <div 
                key={`orange-${i}`}
                className="sparkle orange"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  left: `${45 + (i % 4) * 3}%`
                }}
              />
            ))}
          </div>
        </div>
      </div>


      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Main Title */}
          <h1 className="font-display text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight mt-8 sm:mt-10 lg:mt-18">
            <span className="block">Gates Events</span>
            <span className="inline-block bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              2K25
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Where Innovation Meets Excellence
          </p>

          <p className="text-sm sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join the Grand Tech and Cultural Fest at GATES Institute of Technology. 
            Experience cutting-edge competitions and vibrant celebrations.
          </p>

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

      {/* Scroll Indicator */}
      <div className="absolute bottom-14 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300 cursor-pointer animate-bounce-subtle">
          <span className="text-xs sm:text-sm mb-2 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>


      {/* SIMPLE PERFECT CSS STYLES */}
      <style jsx>{`
        /* SIMPLE STRING LIGHTS - MOVED DOWN ON LAPTOP */
        .string-lights-container {
          position: absolute;
          top: 65px;
          left: 0;
          right: 0;
          width: 100%;
          height: 60px;
          z-index: 5;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .string-lights-container {
            top: 100px;
            height: 70px;
          }
        }

        @media (min-width: 1024px) {
          .string-lights-container {
            top: 80px;  /* MOVED DOWN ON LAPTOP (was 60px) */
            height: 80px;
          }
        }

        /* SIMPLE WIRE */
        .string-wire {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
        }

        /* LIGHTS ROW */
        .lights-row {
          position: relative;
          display: flex;
          justify-content: space-evenly;
          width: 100%;
          padding: 0 20px;
        }

        /* SIMPLE CLEAN BULB */
        .simple-bulb {
          position: relative;
          width: 10px;
          height: 18px;
          border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
          animation: gentle-glow 2s ease-in-out infinite;
          filter: drop-shadow(0 0 8px currentColor);
        }

        @media (min-width: 768px) {
          .simple-bulb {
            width: 12px;
            height: 22px;
            filter: drop-shadow(0 0 10px currentColor);
          }
        }

        @media (min-width: 1024px) {
          .simple-bulb {
            width: 14px;
            height: 26px;
            filter: drop-shadow(0 0 12px currentColor);
          }
        }

        /* SIMPLE BULB - Add connection wire */
        .simple-bulb::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 8px;
          background: rgba(150, 150, 150, 0.3);
        }

        /* ELEGANT COLORS */
        .simple-bulb.bulb-color-1 {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #fbbf24;
        }

        .simple-bulb.bulb-color-2 {
          background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
          color: #fb923c;
        }

        .simple-bulb.bulb-color-3 {
          background: linear-gradient(135deg, #fde047 0%, #facc15 100%);
          color: #fde047;
        }

        .simple-bulb.bulb-color-4 {
          background: linear-gradient(135deg, #fdba74 0%, #fb923c 100%);
          color: #fdba74;
        }

        /* GENTLE GLOW ANIMATION */
        @keyframes gentle-glow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.95);
          }
        }

        .firecracker-wrapper {
          animation: subtle-shake 4s ease-in-out infinite;
        }

        @keyframes subtle-shake {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(-1deg); }
          75% { transform: translateY(-2px) rotate(1deg); }
        }

        .flower-pot-cone {
          position: relative;
          width: 50px;
          height: 70px;
          filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.7));
        }

        @media (min-width: 768px) {
          .flower-pot-cone { width: 65px; height: 90px; }
        }

        @media (min-width: 1024px) {
          .flower-pot-cone { width: 80px; height: 110px; }
        }

        .pot-opening {
          width: 100%;
          height: 18%;
          background: radial-gradient(circle, #78350f 0%, #451a03 100%);
          border-radius: 50%;
          box-shadow: inset 0 -3px 8px rgba(0, 0, 0, 0.6), 0 0 15px rgba(217, 119, 6, 0.4);
          position: relative;
          z-index: 3;
        }

        .pot-cone-body {
          width: 100%;
          height: 70%;
          background: linear-gradient(180deg, #dc2626 0%, #b91c1c 30%, #991b1b 70%, #7f1d1d 100%);
          clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
          position: relative;
          box-shadow: inset -8px 0 20px rgba(0, 0, 0, 0.5), inset 8px 0 20px rgba(255, 100, 50, 0.2);
        }

        .flower-pot-cone-right .pot-cone-body {
          background: linear-gradient(180deg, #ea580c 0%, #c2410c 30%, #9a3412 70%, #7c2d12 100%);
        }

        .golden-stripe {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 4px;
          background: linear-gradient(90deg, transparent, #fbbf24, #f59e0b, #fbbf24, transparent);
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.9), 0 0 30px rgba(251, 191, 36, 0.5);
          animation: stripe-glow 1.5s ease-in-out infinite;
        }

        @keyframes stripe-glow {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.8; filter: brightness(1.3); }
        }

        .pattern-dots {
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
        }

        .pattern-dots span {
          width: 5px;
          height: 5px;
          background: #fbbf24;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.9);
          animation: dot-pulse 1.2s ease-in-out infinite;
        }

        .pattern-dots span:nth-child(2) { animation-delay: 0.2s; }
        .pattern-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes dot-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }

        .pot-bottom {
          width: 115%;
          height: 12%;
          background: linear-gradient(135deg, #451a03 0%, #78350f 50%, #451a03 100%);
          border-radius: 50%;
          position: absolute;
          bottom: 0;
          left: -7.5%;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
        }

        .festive-fountain {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 130px;
          height: 350px;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .festive-fountain {
            width: 160px;
            height: 270px;
          }
        }

        @media (min-width: 1024px) {
          .festive-fountain {
            width: 190px;
            height: 320px;
          }
        }

        .sparkle {
          position: absolute;
          bottom: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          animation: sparkle-rise-mobile 2.2s ease-out infinite;
        }

        .sparkle.golden {
          background: radial-gradient(circle, #fef3c7 0%, #fbbf24 50%, #f59e0b 100%);
          box-shadow: 
            0 0 15px rgba(251, 191, 36, 1),
            0 0 30px rgba(251, 191, 36, 0.6);
        }

        .sparkle.orange {
          background: radial-gradient(circle, #fed7aa 0%, #fb923c 50%, #f97316 100%);
          box-shadow: 
            0 0 12px rgba(249, 115, 22, 1),
            0 0 25px rgba(249, 115, 22, 0.6);
        }

        @keyframes sparkle-rise-mobile {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-350px) translateX(calc((var(--random, 1) - 0.5) * 50px)) scale(0.3);
            opacity: 0;
          }
        }

        .fire-flame {
          position: absolute;
          bottom: 0;
          width: 6px;
          height: 10px;
          background: linear-gradient(to top, #ff6b35 0%, #f59e0b 40%, #fbbf24 70%, #fef3c7 100%);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: flame-rise-mobile 2.4s ease-out infinite;
          box-shadow: 
            0 0 10px rgba(251, 191, 36, 0.8),
            0 0 20px rgba(255, 107, 53, 0.5);
          filter: blur(0.5px);
        }

        @keyframes flame-rise-mobile {
          0% {
            transform: translateY(0) scale(0.8) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-330px) scale(0.4) rotate(10deg);
            opacity: 0;
          }
        }

        .star-sparkle {
          position: absolute;
          bottom: 0;
          font-size: 12px;
          animation: star-rise-mobile 2.8s ease-out infinite;
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.9));
        }

        @keyframes star-rise-mobile {
          0% {
            transform: translateY(0) scale(0.3) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-340px) scale(0.8) rotate(360deg);
            opacity: 0;
          }
        }

        .heart-sparkle {
          position: absolute;
          bottom: 0;
          font-size: 10px;
          animation: heart-rise-mobile 3s ease-out infinite;
          filter: drop-shadow(0 0 6px rgba(255, 50, 100, 0.8));
        }

        @keyframes heart-rise-mobile {
          0% {
            transform: translateY(0) scale(0.3);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-170px) scale(0.9);
          }
          100% {
            transform: translateY(-340px) scale(0.4);
            opacity: 0;
          }
        }

        .diamond-sparkle {
          position: absolute;
          bottom: 0;
          font-size: 11px;
          animation: diamond-rise-mobile 2.5s ease-out infinite;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9));
        }

        @keyframes diamond-rise-mobile {
          0% {
            transform: translateY(0) scale(0.4) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-335px) scale(0.7) rotate(180deg);
            opacity: 0;
          }
        }

        @media (min-width: 768px) {
          .sparkle {
            width: 6px;
            height: 6px;
            animation: sparkle-rise 2.2s ease-out infinite;
          }

          .fire-flame {
            width: 7px;
            height: 12px;
            animation: flame-rise 2.4s ease-out infinite;
          }

          .star-sparkle {
            font-size: 14px;
            animation: star-rise 2.8s ease-out infinite;
          }

          .heart-sparkle {
            font-size: 12px;
            animation: heart-rise 3s ease-out infinite;
          }

          .diamond-sparkle {
            font-size: 13px;
            animation: diamond-rise 2.5s ease-out infinite;
          }

          @keyframes sparkle-rise {
            0% {
              transform: translateY(0) translateX(0) scale(0.5);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateY(-270px) translateX(calc((var(--random, 1) - 0.5) * 60px)) scale(0.3);
              opacity: 0;
            }
          }

          @keyframes flame-rise {
            0% {
              transform: translateY(0) scale(0.8) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateY(-250px) scale(0.4) rotate(10deg);
              opacity: 0;
            }
          }

          @keyframes star-rise {
            0% {
              transform: translateY(0) scale(0.3) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateY(-250px) scale(0.8) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes heart-rise {
            0% {
              transform: translateY(0) scale(0.3);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            50% {
              transform: translateY(-120px) scale(0.9);
            }
            100% {
              transform: translateY(-240px) scale(0.4);
              opacity: 0;
            }
          }

          @keyframes diamond-rise {
            0% {
              transform: translateY(0) scale(0.4) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateY(-230px) scale(0.7) rotate(180deg);
              opacity: 0;
            }
          }
        }

        @media (min-width: 1024px) {
          .sparkle {
            width: 7px;
            height: 7px;
          }

          .fire-flame {
            width: 8px;
            height: 14px;
          }

          .star-sparkle {
            font-size: 16px;
          }

          .heart-sparkle {
            font-size: 14px;
          }

          .diamond-sparkle {
            font-size: 15px;
          }

          @keyframes sparkle-rise {
            0% {
              transform: translateY(0) translateX(0) scale(0.5);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateY(-320px) translateX(calc((var(--random, 1) - 0.5) * 70px)) scale(0.3);
              opacity: 0;
            }
          }

          @keyframes flame-rise {
            0% {
              transform: translateY(0) scale(0.8) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateY(-300px) scale(0.4) rotate(10deg);
              opacity: 0;
            }
          }
        }
      `}</style>
    </section>
  );
};


export default HeroSection;
