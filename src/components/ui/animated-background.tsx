import React from 'react';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  variant?: 'mesh' | 'particles' | 'gradient' | 'dots';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  children, 
  variant = 'mesh',
  className = '' 
}) => {
  const renderBackground = () => {
    switch (variant) {
      case 'mesh':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 animate-mesh-gradient opacity-50" />
            <div className="absolute inset-0 animate-radial-pulse opacity-30" />
          </div>
        );
        
      case 'particles':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full animate-particle-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 2}s`
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <div
                key={`orbit-${i}`}
                className="absolute w-1 h-1 bg-accent/30 rounded-full animate-particle-orbit"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        );
        
      case 'gradient':
        return (
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, hsl(var(--primary) / 0.05) 0%, transparent 50%)
                `
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse" />
          </div>
        );
        
      case 'dots':
        return (
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)
                `,
                backgroundSize: '40px 40px'
              }}
            />
            <div 
              className="absolute inset-0 opacity-10 animate-wave"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)
                `,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {renderBackground()}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;