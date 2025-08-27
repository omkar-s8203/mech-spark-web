import React from 'react';
import { motion } from 'framer-motion';

interface AboutHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-foreground mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.05,
          textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)"
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h2>
      <motion.h3 
        className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.02,
          rotateX: 5
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {subtitle}
      </motion.h3>
      <motion.p 
        className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.01,
          color: "#3b82f6"
        }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default AboutHeader;