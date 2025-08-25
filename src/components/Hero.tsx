import React from 'react';
import AnimatedBackground from './ui/animated-background';
import FloatingElements from './ui/floating-elements';
import MechanicalElements from './hero/MechanicalElements';
import HeroContent from './hero/HeroContent';

const Hero = () => {
  return (
    <AnimatedBackground variant="mesh" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center overflow-hidden">
      <FloatingElements density="high" className="opacity-40" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-dots-pattern" />
      </div>

      {/* Mechanical Elements */}
      <MechanicalElements />
      <MechanicalElements isMobile />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        {/* Desktop Layout */}
        <HeroContent />
        
        {/* Mobile Layout */}
        <HeroContent isMobile />
      </div>
    </AnimatedBackground>
  );
};

export default Hero;