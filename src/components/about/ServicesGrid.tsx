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
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer"
          >
            <Card className={`h-full border-0 bg-gradient-to-br ${service.bgGradient} hover:shadow-2xl transition-all duration-500 overflow-hidden relative`}>
              <CardContent className="p-8">
                {/* Hover overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated Icon */}
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 shadow-lg cursor-pointer relative z-10`}
                >
                  <service.icon className="w-8 h-8" />
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

                {/* Interactive corner element */}
                <motion.div
                  className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
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