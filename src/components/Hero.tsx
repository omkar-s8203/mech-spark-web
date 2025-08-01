
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedBackground from './ui/animated-background';
import FloatingElements from './ui/floating-elements';

const Hero = () => {
  return (
    <AnimatedBackground variant="mesh" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center overflow-hidden">
      <FloatingElements density="high" className="opacity-40" />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Mechanical Background Elements - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Animated Gears */}
        <div className="absolute top-20 left-20 w-16 h-16 opacity-20">
          <svg className="w-full h-full text-orange-400 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
          </svg>
        </div>

        <div className="absolute top-40 right-32 w-12 h-12 opacity-15">
          <svg className="w-full h-full text-yellow-400 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
          </svg>
        </div>

        <div className="absolute bottom-32 left-16 w-20 h-20 opacity-10">
          <svg className="w-full h-full text-orange-300 animate-spin" style={{ animationDuration: '12s' }} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
          </svg>
        </div>

        {/* Animated Pistons */}
        <div className="absolute top-60 right-20 opacity-15">
          <div className="relative">
            <div className="w-4 h-16 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-40 right-40 opacity-12">
          <div className="relative">
            <div className="w-3 h-12 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-500 rounded-full"></div>
          </div>
        </div>

        {/* Moving Mechanical Lines */}
        <div className="absolute top-1/3 left-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Mobile mechanical elements - enhanced with more complex animations */}
      <div className="absolute inset-0 pointer-events-none md:hidden">
        {/* Mobile Animated Gears - Different positions and speeds */}
        <div className="absolute top-10 right-8 w-8 h-8 opacity-30">
          <svg className="w-full h-full text-orange-400 animate-spin" style={{ animationDuration: '6s' }} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
          </svg>
        </div>

        <div className="absolute top-32 left-6 w-6 h-6 opacity-25">
          <svg className="w-full h-full text-yellow-400 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
          </svg>
        </div>

        {/* Mobile Animated Pistons */}
        <div className="absolute top-1/3 right-12 opacity-20">
          <div className="relative">
            <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full animate-bounce" style={{ animationDuration: '1.8s' }}></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-8 opacity-25">
          <div className="relative">
            <div className="w-2 h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full animate-bounce" style={{ animationDuration: '1.3s', animationDelay: '0.7s' }}></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-500 rounded-full"></div>
          </div>
        </div>

        {/* Mobile Sliding Mechanical Arms */}
        <div className="absolute top-1/4 left-0 w-full h-1 overflow-hidden opacity-20">
          <div className="w-16 h-full bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-mechanical-slide"></div>
        </div>

        <div className="absolute bottom-1/4 left-0 w-full h-1 overflow-hidden opacity-15">
          <div className="w-12 h-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-mechanical-slide" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        </div>

        {/* Mobile Rotating Mechanical Joints */}
        <div className="absolute top-20 left-10 w-4 h-4 opacity-40">
          <div className="w-full h-full bg-orange-500 rounded-full relative">
            <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-orange-300 transform -translate-x-1/2 -translate-y-1/2 origin-center animate-spin" style={{ animationDuration: '3s' }}></div>
          </div>
        </div>

        <div className="absolute bottom-40 right-16 w-3 h-3 opacity-35">
          <div className="w-full h-full bg-yellow-500 rounded-full relative">
            <div className="absolute top-1/2 left-1/2 w-1 h-4 bg-yellow-300 transform -translate-x-1/2 -translate-y-1/2 origin-center animate-spin" style={{ animationDuration: '2.5s', animationDirection: 'reverse' }}></div>
          </div>
        </div>

        {/* Mobile Pulsing Mechanical Components */}
        <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full opacity-50 animate-pulse delay-300"></div>
        <div className="absolute bottom-60 left-20 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-4 w-2 h-2 bg-orange-300 rounded-full opacity-45 animate-pulse delay-1000"></div>
      </div>

      {/* Desktop floating elements */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-orange-400 rounded-full opacity-50 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Bring{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Bigger, Better
              </span>{' '}
              & Stronger Technology
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A leading company focused on accelerating the technology and growing exponentially.
              Innovate. Design. Build. Lead the Future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {/* <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-200"
              >
                Get Started
              </Button> */}
              <a
                href="https://wa.me/+919561103435?text=Hey%20there!%20%F0%9F%9A%80%20I%20just%20explored%20your%20amazing%20website%20and%20I'm%20truly%20impressed.%20I'm%20interested%20in%20collaborating%20or%20learning%20more%20about%20your%20services.%20Let%E2%80%99s%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-200 animate-glow-pulse"
                >
                  Get Started
                </Button>
              </a>



              {/* <Button 
                variant="outline" 
                size="lg" 
                className="border-black bg-black text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-200"
              >
                Learn More
              </Button> */}
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full w-96 h-96 mx-auto flex items-center justify-center animate-pulse" style={{ animationDuration: '4s' }}>
              <div className="bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-full w-80 h-80 flex items-center justify-center">
                <div className="bg-gradient-to-br from-orange-500/40 to-yellow-500/40 rounded-full w-64 h-64 flex items-center justify-center">
                  {/* Engineering Icon with rotation */}
                  <svg className="w-32 h-32 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDuration: '3s' }}>
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10 5.16-.26 9-4.45 9-10V7l-10-5z" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Enhanced floating cards with better animations */}
            <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float transform hover:scale-110 transition-transform cursor-pointer">
              <div className="text-orange-400 font-semibold flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                </svg>
                CAD Design
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float delay-1000 transform hover:scale-110 transition-transform cursor-pointer">
              <div className="text-yellow-400 font-semibold flex items-center gap-2">
                <div className="w-3 h-8 bg-yellow-400 rounded animate-bounce" style={{ animationDuration: '1.5s' }}></div>
                3D Printing
              </div>
            </div>

            <div className="absolute top-1/2 -left-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float delay-500 transform hover:scale-110 transition-transform cursor-pointer">
              <div className="text-orange-300 font-semibold flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-300 rounded-full animate-pulse"></div>
                R&D
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden text-center">
          <div className="animate-fade-in">
            {/* Mobile Hero Icon */}
            <div className="mb-8">
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full w-32 h-32 mx-auto flex items-center justify-center animate-pulse mb-6" style={{ animationDuration: '4s' }}>
                <svg className="w-16 h-16 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ animationDuration: '3s' }}>
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10 5.16-.26 9-4.45 9-10V7l-10-5z" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>

              {/* Mobile Skills Tags with enhanced animations */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-orange-400 text-sm font-medium animate-scale-in">
                  CAD Design
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-yellow-400 text-sm font-medium animate-scale-in delay-300">
                  3D Printing
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-orange-300 text-sm font-medium animate-scale-in delay-500">
                  R&D
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Ready to Bring{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Bigger, Better
              </span>{' '}
              & Stronger Technology
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A leading company focused on accelerating technology and growing exponentially.
              Innovate. Design. Build. Lead the Future.
            </p>

            <div className="flex flex-col gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {/* <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3 w-full max-w-xs mx-auto transform hover:scale-105 transition-all duration-200"
              >
                Get Started
              </Button> */}

              <a
                href="https://wa.me/+919561103435?text=Hey%20there!%20%F0%9F%9A%80%20I%20just%20explored%20your%20amazing%20website%20and%20I'm%20truly%20impressed.%20I'm%20interested%20in%20collaborating%20or%20learning%20more%20about%20your%20services.%20Let%E2%80%99s%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </Button>
              </a>


              {/* <Button 
                variant="outline" 
                size="lg" 
                className="border-black bg-black text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 w-full max-w-xs mx-auto transform hover:scale-105 transition-all duration-200"
              >
                Learn More
              </Button> */}
            </div>

            {/* Mobile Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-400">500+</div>
                <div className="text-gray-300 text-sm">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div className="text-gray-300 text-sm">Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-300">5+</div>
                <div className="text-gray-300 text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </AnimatedBackground>
  );
};

export default Hero;
