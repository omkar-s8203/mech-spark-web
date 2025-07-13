import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  description, 
  buttonText,
  onButtonClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative text-center bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
          animate={{
            background: isHovered ? [
              'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1))',
              'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(59,130,246,0.1))',
              'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1))',
            ] : 'linear-gradient(45deg, rgba(59,130,246,0.05), rgba(168,85,247,0.05))',
          }}
          transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
        />
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: isHovered ? [0, 1, 0] : 0,
            }}
            transition={{
              duration: 3 + i,
              repeat: isHovered ? Infinity : 0,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.h3 
          className="text-2xl md:text-3xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button 
            size="lg" 
            onClick={onButtonClick}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {buttonText}
          </Button>
        </motion.div>

        {/* Interactive pulse effect around button */}
        {isHovered && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-32 h-12 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-lg" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CallToAction;