import React from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'primary' | 'accent' | 'none';
  hover?: boolean;
  style?: React.CSSProperties;
}

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '',
  glowColor = 'primary',
  hover = true,
  style
}) => {
  const glowClasses = {
    primary: 'shadow-[0_0_20px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]',
    accent: 'shadow-[0_0_20px_hsl(var(--accent)/0.2)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.4)]',
    none: ''
  };

  return (
    <div 
      className={cn(
        'relative overflow-hidden bg-card border rounded-lg transition-all duration-500',
        glowColor !== 'none' && glowClasses[glowColor],
        hover && 'hover:scale-[1.02] hover:-translate-y-1',
        className
      )}
      style={style}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 bg-card rounded-lg">
        {children}
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default GlowCard;