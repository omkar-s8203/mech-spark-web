import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  bgGradient: string;
}

interface ServicesGridProps {
  services: Service[];
  title?: string;
  titleIcon?: LucideIcon;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ 
  services, 
  title = "What We Offer",
  titleIcon
}) => {
  return (
    <div className="mb-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          {titleIcon && (
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white cursor-pointer"
            >
              {React.createElement(titleIcon, { className: "w-8 h-8" })}
            </motion.div>
          )}
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h3>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              z: 50,
            }}
            whileTap={{ scale: 0.98 }}
            className="group cursor-pointer"
            style={{ perspective: "1000px" }}
          >
            <Card className={`h-full border-0 bg-gradient-to-br ${service.bgGradient} hover:shadow-2xl transition-all duration-500 overflow-hidden relative`}>
              <CardContent className="p-8">
                {/* Hover overlay with animated particles */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <motion.div
                  className="absolute top-4 left-4 w-2 h-2 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-3 h-3 bg-secondary/40 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />

                {/* Animated Icon */}
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 shadow-lg cursor-pointer relative z-10`}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  // @ts-ignore
                  style={{
                    transition: "all 0.3s ease",
                  }}
                  onHoverStart={() => {
                    // Add floating animation on hover
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <service.icon className="w-8 h-8" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h4 
                    className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h4>
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* Interactive corner element with pulse */}
                <motion.div
                  className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    borderTopColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.4)", "rgba(59, 130, 246, 0.2)"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Floating dots animation */}
                <motion.div
                  className="absolute top-6 right-6 w-1 h-1 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;