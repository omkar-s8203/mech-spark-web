import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AboutHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ title, subtitle, description }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect for title
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative text-center mb-16 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
            animate={{
              x: [0, 100 + i * 50, 0],
              y: [0, 80 + i * 30, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Magnetic glow effect */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl pointer-events-none"
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.01,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-foreground mb-4 relative z-10"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ 
          scale: 1.05,
          textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)",
          filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))",
        }}
        transition={{ duration: 0.3 }}
      >
        {title.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block hover:text-blue-500 transition-colors duration-300"
            whileHover={{ 
              scale: 1.3, 
              rotateY: 180,
              color: "#3b82f6"
            }}
            style={{ cursor: "pointer" }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.h2>

      <motion.h3 
        className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.02,
          rotateX: 5,
          backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #f97316, #ef4444)",
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
        style={{
          backgroundSize: "200% 200%",
          animation: "gradient-shift 3s ease infinite",
        }}
      >
        {subtitle}
      </motion.h3>

      <motion.p 
        className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.01,
          color: "#3b82f6",
          textShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
        }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {description}
      </motion.p>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-10 right-10 w-8 h-8 border-2 border-blue-400/30 rotate-45 pointer-events-none"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-5 left-10 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
};

export default AboutHeader;