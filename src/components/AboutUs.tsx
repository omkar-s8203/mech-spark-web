import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Lightbulb, Users, Globe, Wrench, Zap, Target, Star } from 'lucide-react';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Zap,
      title: 'Advanced 3D Printing Systems',
      description: 'From desktop powerhouses like the DFT350 to custom-engineered solutions, our machines are built for speed, precision, and reliability.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Design & Product Development Services',
      description: 'We convert concepts into manufacturable, validated products through CAD design, reverse engineering, and CAE simulations.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Star,
      title: 'Future-Focused Training Programs',
      description: 'Our industry-ready courses in CAD/CAM/CAE, Automotive Product Design, and Rapid Prototyping turn skills into careers.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const stats = [
    { icon: Rocket, label: 'Startups & Innovators', description: 'looking to prototype and scale' },
    { icon: Users, label: 'Engineering Students', description: 'hungry for hands-on learning' },
    { icon: Wrench, label: 'MSMEs & Manufacturers', description: 'needing design-to-product support' },
    { icon: Lightbulb, label: 'Design Enthusiasts', description: 'wanting to break into the future of tech' },
  ];

  return (
    <section id="about" ref={ref} className="relative py-20 bg-gradient-to-br from-background via-accent/20 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-xl"
          animate={{
            y: [10, -20, 10],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl"
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="mb-8">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-6"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              About Us
            </motion.h2>
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where Imagination Meets Innovation
            </motion.h3>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              At <span className="font-bold text-primary">Decouvertes Future Tech Pvt. Ltd.</span>, we are not just building products—we're crafting the future. Born from a bold vision in 2023 in Pune, India, our mission is to empower creators, engineers, and dreamers with the tools, training, and technology to transform ideas into real-world impact.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              We stand at the crossroads of design, engineering, and education, enabling a new generation of thinkers to shape what comes next.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* What Drives Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Rocket className="w-8 h-8 text-orange-500" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">What Drives Us</h3>
            </div>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              We believe innovation isn't reserved for the elite—it should be accessible, hands-on, and transformative. Whether you're building your first prototype or training to master product design, we're your launchpad.
            </motion.p>
          </div>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Lightbulb className="w-8 h-8 text-yellow-500" />
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
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="h-full p-8 rounded-2xl bg-card border shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <service.icon className="w-12 h-12 text-primary mb-6 mx-auto" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-foreground mb-4 relative z-10">{service.title}</h4>
                  <p className="text-muted-foreground relative z-10">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who We Serve Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Users className="w-8 h-8 text-blue-500" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Who We Serve</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 2.0 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                className="text-center p-6 rounded-xl bg-card border hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-4"
                >
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                </motion.div>
                <h4 className="font-bold text-foreground mb-2">{stat.label}</h4>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mb-20"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Globe className="w-8 h-8 text-green-500" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Our Vision</h3>
            </div>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              To spark a maker movement across India—where innovation is local, learning is lifelong, and every idea has the power to fly.
            </motion.p>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <div className="text-center bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 rounded-3xl p-12 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              animate={{
                background: [
                  'linear-gradient(0deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1))',
                  'linear-gradient(180deg, rgba(168,85,247,0.1), rgba(59,130,246,0.1))',
                  'linear-gradient(0deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1))',
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Wrench className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Built With Passion. Backed By Purpose.</h3>
              </div>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                At Decouvertes, we don't just deliver services—we build partnerships, mentor talent, and drive progress. Because the future isn't something we wait for—it's something we build together.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;