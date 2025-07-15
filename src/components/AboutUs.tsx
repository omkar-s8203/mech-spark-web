import React from 'react';
import { Rocket, Lightbulb, Users, Globe, Wrench, Zap, Target, Star } from 'lucide-react';
import AboutHeader from './about/AboutHeader';
import InteractiveShowcase from './about/InteractiveShowcase';
import ServicesGrid from './about/ServicesGrid';
import StatsGrid from './about/StatsGrid';
import CallToAction from './about/CallToAction';
import FloatingParticles from './about/FloatingParticles';

const AboutUs = () => {
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

  const handleCallToAction = () => {
    // Scroll to contact form or open contact modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to external form
      window.open('https://forms.office.com/r/0e7umuTtmz', '_blank');
    }
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <FloatingParticles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Component */}
        <AboutHeader
          title="About Us"
          subtitle="Where Imagination Meets Innovation"
          description="At Decouvertes Future Tech Pvt. Ltd., we are not just building products—we're crafting the future. Born from a bold vision in 2023 in Pune, India, our mission is to empower creators, engineers, and dreamers with the tools, training, and technology to transform ideas into real-world impact."
        />

        {/* Interactive Showcase Component */}
        <InteractiveShowcase highlights={highlights} />

        {/* Services Grid Component */}
        <ServicesGrid 
          services={services} 
          title="What We Offer"
          titleIcon={Lightbulb}
        />

        {/* Stats Grid Component */}
        <StatsGrid 
          stats={stats} 
          title="Who We Serve"
          titleIcon={Users}
        />

        {/* Call to Action Component */}
        <CallToAction
          title="Ready to Build the Future Together?"
          description="We stand at the crossroads of design, engineering, and education, enabling a new generation of thinkers to shape what comes next."
          buttonText="Start Your Journey"
          onButtonClick={handleCallToAction}
        />
      </div>
    </section>
  );
};

export default AboutUs;