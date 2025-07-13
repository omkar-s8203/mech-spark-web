import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Lightbulb, Users, Globe, Wrench, Zap, Target, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: Zap,
      title: 'Advanced 3D Printing Systems',
      description: 'From desktop powerhouses like the DFT350 to custom-engineered solutions, our machines are built for speed, precision, and reliability.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Target,
      title: 'Design & Product Development Services',
      description: 'We convert concepts into manufacturable, validated products through CAD design, reverse engineering, and CAE simulations.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      icon: Star,
      title: 'Future-Focused Training Programs',
      description: 'Our industry-ready courses in CAD/CAM/CAE, Automotive Product Design, and Rapid Prototyping turn skills into careers.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
    },
  ];

  const stats = [
    { icon: Rocket, label: 'Startups & Innovators', description: 'looking to prototype and scale', color: 'text-orange-500' },
    { icon: Users, label: 'Engineering Students', description: 'hungry for hands-on learning', color: 'text-blue-500' },
    { icon: Wrench, label: 'MSMEs & Manufacturers', description: 'needing design-to-product support', color: 'text-green-500' },
    { icon: Lightbulb, label: 'Design Enthusiasts', description: 'wanting to break into the future of tech', color: 'text-purple-500' },
  ];

  const highlights = [
    {
      title: "What Drives Us",
      icon: Rocket,
      content: "We believe innovation isn't reserved for the elite—it should be accessible, hands-on, and transformative. Whether you're building your first prototype or training to master product design, we're your launchpad.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "Our Vision",
      icon: Globe,
      content: "To spark a maker movement across India—where innovation is local, learning is lifelong, and every idea has the power to fly.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Built With Passion",
      icon: Wrench,
      content: "At Decouvertes, we don't just deliver services—we build partnerships, mentor talent, and drive progress. Because the future isn't something we wait for—it's something we build together.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [highlights.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Where Imagination Meets Innovation
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At <span className="font-bold text-primary">Decouvertes Future Tech Pvt. Ltd.</span>, we are not just building products—we're crafting the future. Born from a bold vision in 2023 in Pune, India, our mission is to empower creators, engineers, and dreamers with the tools, training, and technology to transform ideas into real-world impact.
          </p>
        </motion.div>

        {/* Slideshow Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative bg-gradient-to-br from-card/50 to-accent/20 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${highlights[currentSlide].gradient} text-white`}
                  >
                    {React.createElement(highlights[currentSlide].icon, { className: "w-8 h-8" })}
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {highlights[currentSlide].title}
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  {highlights[currentSlide].content}
                </p>
              </motion.div>

              {/* Navigation buttons */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full hover:scale-110 transition-transform"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                {/* Dots indicator */}
                <div className="flex gap-2">
                  {highlights.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-primary scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full hover:scale-110 transition-transform"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
              >
                <Lightbulb className="w-8 h-8" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">What We Offer</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className={`h-full border-0 bg-gradient-to-br ${service.bgGradient} hover:shadow-xl transition-all duration-500`}>
                  <CardContent className="p-8">
                    <motion.div
                      animate={{
                        y: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white mb-6`}
                    >
                      <service.icon className="w-8 h-8" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-foreground mb-4">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who We Serve Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
              >
                <Users className="w-8 h-8" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Who We Serve</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                className="text-center p-6 rounded-xl bg-card border hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="mb-4"
                >
                  <stat.icon className={`w-8 h-8 md:w-10 md:h-10 ${stat.color} mx-auto mb-3`} />
                </motion.div>
                <h4 className="font-bold text-foreground mb-2 text-sm md:text-base">{stat.label}</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build the Future Together?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            We stand at the crossroads of design, engineering, and education, enabling a new generation of thinkers to shape what comes next.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3"
          >
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;