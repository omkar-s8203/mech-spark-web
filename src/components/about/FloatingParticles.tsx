import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic particle system */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-30`}
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            background: `linear-gradient(45deg, ${
              ['#3b82f6', '#8b5cf6', '#f97316', '#ef4444', '#10b981'][i % 5]
            }, ${
              ['#60a5fa', '#a78bfa', '#fb923c', '#f87171', '#34d399'][i % 5]
            })`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 100 - 50, 0],
            scale: [1, Math.random() + 0.5, Math.random() + 0.5, 1],
            opacity: [0.2, 0.8, 0.4, 0.2],
            rotate: [0, Math.random() * 360, Math.random() * 180, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 15}%`}
            y1={`${30 + i * 10}%`}
            x2={`${40 + i * 15}%`}
            y2={`${50 + i * 10}%`}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            strokeDasharray="2,2"
            animate={{
              strokeDashoffset: [0, -10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FloatingParticles;