
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Code, Image, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "New Product Development (R&D)",
      description: "Our services are designed to empower new developments and innovations, backed by our creative and technology-oriented team. From concept to reality, we specialize in providing comprehensive NPD and R&D services.",
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50"
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Prototyping",
      description: "Prototyping plays a crucial role in the product development process, allowing for testing, validation, and refinement of designs before mass production. Our state-of-the-art prototyping capabilities bring your concepts to life.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Manufacturing Support",
      description: "We understand that a successful product design is not limited to the ideation and prototyping stages. Our expertise extends to providing manufacturing support, including DFM and DFA services.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Training Services",
      description: "We are expertise in corporate and industry specific CAD, CAM & CAE trainings. We provide personalized trainings to students and working professionals based on their industrial needs and future interest.",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br ${service.bgGradient} hover:scale-105`}>
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white mb-4 w-fit`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                <Button 
                  className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
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
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
