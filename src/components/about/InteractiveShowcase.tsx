import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { LucideIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HighlightSlide {
  title: string;
  icon: LucideIcon;
  content: string;
  gradient: string;
}

interface InteractiveShowcaseProps {
  highlights: HighlightSlide[];
}

const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = ({ highlights }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('showcase-card')?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  const selectSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Card 
          id="showcase-card"
          className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl transform-gpu"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
        <CardContent className="p-8 md:p-12">
          {/* Animated mesh background */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <motion.path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    animate={{
                      strokeDasharray: ["0 0", "10 5", "0 0"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </pattern>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#mesh)" />
            </svg>
          </div>

          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating orbs with complex motion */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-${4 + (i % 3) * 2} h-${4 + (i % 3) * 2} bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl`}
                animate={{
                  x: [0, 100 + i * 20, -50, 0],
                  y: [0, -80 + i * 15, 60, 0],
                  scale: isHovered ? [1, 1.8, 1.2, 1] : [1, 1.2, 1],
                  opacity: [0.2, 0.8, 0.4, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                style={{
                  left: `${15 + (i * 10)}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
              />
            ))}
            
            {/* Ripple effect on hover */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 border-2 border-blue-400/30 rounded-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>

          <motion.div 
            className="relative z-10"
            style={{
              rotateX,
              rotateY,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.1,
                      boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
                    }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${highlights[currentSlide].gradient} text-white shadow-lg cursor-pointer relative overflow-hidden`}
                    animate={{
                      boxShadow: ["0 0 0 rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.3)", "0 0 0 rgba(59, 130, 246, 0)"],
                    }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    {React.createElement(highlights[currentSlide].icon, { className: "w-8 h-8 relative z-10" })}
                  </motion.div>
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {highlights[currentSlide].title.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        whileHover={{ 
                          scale: 1.2, 
                          color: "#3b82f6",
                          textShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
                        }}
                        className="inline-block cursor-pointer"
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </motion.h3>
                </div>
                <motion.p 
                  className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ 
                    scale: 1.02,
                    color: "#374151",
                    textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  {highlights[currentSlide].content}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

            {/* Interactive Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </motion.div>
              
              {/* Interactive Dots */}
              <div className="flex gap-3">
                {highlights.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => selectSlide(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-primary shadow-lg' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                    }`}
                  >
                    {index === currentSlide && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute inset-0 bg-primary rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1} of {highlights.length}
              </span>
            </div>
        </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default InteractiveShowcase;