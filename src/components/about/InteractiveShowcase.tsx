import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
          className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        <CardContent className="p-8 md:p-12">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
              animate={{
                scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-xl"
              animate={{
                scale: isHovered ? [1, 1.2, 1] : [1, 1.05, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${highlights[currentSlide].gradient} text-white shadow-lg cursor-pointer`}
                  >
                    {React.createElement(highlights[currentSlide].icon, { className: "w-8 h-8" })}
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {highlights[currentSlide].title}
                  </h3>
                </div>
                <motion.p 
                  className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {highlights[currentSlide].content}
                </motion.p>
              </motion.div>
            </AnimatePresence>

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
          </div>
        </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default InteractiveShowcase;