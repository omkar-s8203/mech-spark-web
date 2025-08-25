import React, { memo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ServicePopupContent from './ServicePopupContent';
import AnimatedBackground from './ui/animated-background';
import GlowCard from './ui/glow-card';
import FloatingElements from './ui/floating-elements';
import { servicesData } from '@/data/services.data';

const ServiceCard = memo(({ service, index }: { service: any; index: number }) => {
  const IconComponent = service.icon;
  
  return (
    <GlowCard 
      key={index} 
      className={`group bg-gradient-to-br ${service.bgGradient} animate-fade-in-up`} 
      glowColor="primary" 
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <CardHeader>
        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white mb-4 w-fit`}>
          <IconComponent className="h-8 w-8" />
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700 text-base leading-relaxed mb-6">
          {service.description}
        </CardDescription>
        <Dialog>
          <DialogTrigger asChild>
            <Button className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}>
              Learn More
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white mr-3`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                {service.title}
              </DialogTitle>
            </DialogHeader>
            <ServicePopupContent title={service.title} gradient={service.gradient} />
          </DialogContent>
        </Dialog>
      </CardContent>
    </GlowCard>
  );
});

ServiceCard.displayName = 'ServiceCard';

const Services = memo(() => {

  return (
    <AnimatedBackground variant="gradient" className="py-20 bg-gray-50">
      <FloatingElements density="low" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solutions are assured for industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-semibold text-2xl">
              Best A Grade Commercial Services
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action */}

<div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
  <h3 className="text-2xl font-bold mb-4">
    Partner with us to turn your ideas into reality.
  </h3>
  <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
    Our comprehensive NPD and R&D services, combined with our dedication to creativity and technology, 
    will drive the success of your mechanical and automobile product designs.
  </p>
  
  <a
    href="https://forms.office.com/r/BxULARiHpU"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button 
      size="lg" 
      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3"
    >
      Start Your Project
    </Button>
  </a>
</div>


        {/* <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Partner with us to turn your ideas into reality.
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
            Our comprehensive NPD and R&D services, combined with our dedication to creativity and technology, 
            will drive the success of your mechanical and automobile product designs.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3"
          >
            Start Your Project
          </Button>
        </div> */}
      </div>
    </AnimatedBackground>
  );
});

Services.displayName = 'Services';

export default Services;
