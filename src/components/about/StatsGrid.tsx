import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  label: string;
  description: string;
  color: string;
}

interface StatsGridProps {
  stats: Stat[];
  title?: string;
  titleIcon?: LucideIcon;
}

const StatsGrid: React.FC<StatsGridProps> = ({ 
  stats, 
  title = "Who We Serve",
  titleIcon
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mb-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          {titleIcon && (
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white cursor-pointer"
            >
              {React.createElement(titleIcon, { className: "w-8 h-8" })}
            </motion.div>
          )}
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h3>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ 
              scale: 1.1,
              y: -10,
              rotateY: 10,
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="group cursor-pointer"
          >
            <div className="relative text-center p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Background effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: hoveredIndex === index ? ["0% 0%", "100% 100%", "0% 0%"] : "0% 0%",
                }}
                transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0 }}
              />

              {/* Animated Icon Container */}
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                  rotate: hoveredIndex === index ? [0, 360] : 0,
                }}
                transition={{ 
                  duration: hoveredIndex === index ? 0.8 : 0.3,
                  ease: "easeInOut"
                }}
                className="mb-4 relative z-10"
              >
                <div className="relative">
                  <stat.icon className={`w-8 h-8 md:w-10 md:h-10 ${stat.color} mx-auto mb-3 transition-all duration-300`} />
                  
                  {/* Pulsing ring effect */}
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full border-2 ${stat.color.replace('text-', 'border-')} mx-auto w-8 h-8 md:w-10 md:h-10`}
                    />
                  )}
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="relative z-10">
                <motion.h4 
                  className="font-bold text-foreground mb-2 text-sm md:text-base transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.label}
                </motion.h4>
                <motion.p 
                  className="text-xs md:text-sm text-muted-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.description}
                </motion.p>
              </div>

              {/* Corner accent */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;