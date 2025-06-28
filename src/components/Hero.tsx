
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-orange-400 rounded-full opacity-50 animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Bring{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Bigger, Better
              </span>{' '}
              & Stronger Technology
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              A leading company focused on accelerating the technology and growing exponentially. 
              Innovate. Design. Build. Lead the Future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
              <div className="bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-full w-80 h-80 flex items-center justify-center">
                <div className="bg-gradient-to-br from-orange-500/40 to-yellow-500/40 rounded-full w-64 h-64 flex items-center justify-center">
                  {/* Engineering Icon */}
                  <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10 5.16-.26 9-4.45 9-10V7l-10-5z"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float">
              <div className="text-orange-400 font-semibold">CAD Design</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float delay-1000">
              <div className="text-yellow-400 font-semibold">3D Printing</div>
            </div>
            <div className="absolute top-1/2 -left-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-float delay-500">
              <div className="text-orange-300 font-semibold">R&D</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
