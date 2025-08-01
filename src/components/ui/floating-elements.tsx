import React from 'react';
import { Zap, Cog, Cpu, Rocket, Star, Triangle } from 'lucide-react';

interface FloatingElementsProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  density = 'medium',
  className = ''
}) => {
  const icons = [Zap, Cog, Cpu, Rocket, Star, Triangle];
  
  const elementCount = {
    low: 6,
    medium: 12,
    high: 18
  };

  const count = elementCount[density];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {[...Array(count)].map((_, i) => {
        const IconComponent = icons[i % icons.length];
        const size = Math.random() * 24 + 16;
        const opacity = Math.random() * 0.3 + 0.1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDuration = Math.random() * 4 + 3;
        const animationDelay = Math.random() * 5;
        
        return (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`
            }}
          >
            <IconComponent 
              size={size} 
              className="text-primary/20"
              style={{ opacity }}
            />
          </div>
        );
      })}
      
      {/* Geometric shapes */}
      {[...Array(Math.floor(count / 2))].map((_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute animate-float-delayed"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 4}s`,
            animationDelay: `${Math.random() * 3}s`
          }}
        >
          <div 
            className="bg-accent/10 rounded-full"
            style={{
              width: `${Math.random() * 20 + 8}px`,
              height: `${Math.random() * 20 + 8}px`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;