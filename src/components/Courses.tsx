
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Book, Users, Settings, Code, Youtube, Linkedin, MessageCircle } from 'lucide-react';

const Courses = () => {
  const courseCategories = [
    {
      icon: <Book className="h-12 w-12" />,
      title: "TRAINING",
      subtitle: "CAD, CAM, & CAE Software Training",
      description: "Hands-on training for tools like SolidWorks and CATIA. Programs for all expertise levels with real-world projects.",
      color: "bg-yellow-500",
      textColor: "text-yellow-600",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "PRODUCT",
      subtitle: "Product Design and Development",
      description: "Support from concept to prototype with customized solutions. Guidance on materials and manufacturing processes.",
      color: "bg-gray-800",
      textColor: "text-gray-700",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "3D PRINT",
      subtitle: "Rapid Prototyping Services",
      description: "3D printing services with high-quality output. Prototype testing and support for design optimization.",
      color: "bg-yellow-500",
      textColor: "text-yellow-600",
      bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const popularCourses = [
    {
      title: "Automotive Design Foundation",
      description: "Master the fundamentals of automotive design with industry-standard tools and methodologies.",
      duration: "12 Weeks",
      level: "Beginner",
      students: "2,400+",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$299"
    },
    {
      title: "Automotive Design Mastery",
      description: "Advanced automotive design techniques for professional-level projects and industry applications.",
      duration: "16 Weeks",
      level: "Advanced",
      students: "1,800+",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$499"
    },
    {
      title: "SolidWorks Professional",
      description: "Complete SolidWorks training from basics to advanced modeling, simulation, and design validation.",
      duration: "10 Weeks",
      level: "Intermediate",
      students: "3,200+",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$399"
    },
    {
      title: "CATIA V5/V6 Mastery",
      description: "Comprehensive CATIA training for aerospace and automotive industries with real-world projects.",
      duration: "14 Weeks",
      level: "Advanced",
      students: "1,500+",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$599"
    },
    {
      title: "3D Printing & Prototyping",
      description: "Learn rapid prototyping techniques, 3D modeling for printing, and advanced manufacturing methods.",
      duration: "8 Weeks",
      level: "Beginner",
      students: "2,100+",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$249"
    },
    {
      title: "CNC Programming Excellence",
      description: "Master CNC programming, toolpath optimization, and advanced machining techniques for precision manufacturing.",
      duration: "12 Weeks",
      level: "Intermediate",
      students: "1,900+",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$449"
    }
  ];

  const skills = [
    "SolidWorks Professional",
    "CATIA V5/V6",
    "AutoCAD 3D",
    "Fusion 360",
    "ANSYS Analysis",
    "CNC Programming",
    "3D Printing",
    "Product Design"
  ];

  const socialMediaLinks = [
    {
      icon: <Youtube className="h-5 w-5" />,
      label: "YouTube",
      href: "#",
      bgColor: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "#",
      bgColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      href: "#",
      bgColor: "bg-green-600 hover:bg-green-700"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white relative">
      {/* Social Media Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className={`w-12 h-12 rounded-full ${social.bgColor} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-float`}
            style={{ animationDelay: `${index * 0.2}s` }}
            title={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Engineering Courses & Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Decouvertes Future Tech Pvt Ltd, we provide services in product development, digital design, and 
            prototyping for students and professionals across industries.
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {courseCategories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-2 hover:border-orange-200 overflow-hidden group animate-scale-in hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.bgImage} 
                  alt={category.subtitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white animate-float">
                    {category.icon}
                  </div>
                </div>
                <div className={`absolute bottom-4 left-4 right-4 px-4 py-2 ${category.color} text-white font-bold text-sm rounded-full text-center animate-mechanical-slide`}>
                  {category.title}
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-gray-900">
                  {category.subtitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                  {category.description}
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:scale-105 transition-transform duration-200">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3D Printer Product Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Professional 3D Printing Equipment</h3>
            <p className="text-lg text-gray-600">
              State-of-the-art 3D printing technology for precision prototyping and manufacturing
            </p>
          </div>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-scale-in max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional 3D Printer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500">
                  Professional Grade
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4">
                  3D Printing Equipment
                </Badge>
                <CardTitle className="text-3xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                  BRS250 Professional 3D Printer
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 mb-6 leading-relaxed">
                  High-precision 3D printer capable of producing complex prototypes and production parts with exceptional quality and reliability.
                </CardDescription>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-gray-900">Build Volume</div>
                    <div className="text-gray-600">250 x 250 x 250mm</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-gray-900">Layer Resolution</div>
                    <div className="text-gray-600">0.1 - 0.3mm</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-gray-900">Materials</div>
                    <div className="text-gray-600">PLA, ABS, PETG</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-gray-900">Connectivity</div>
                    <div className="text-gray-600">USB, SD Card</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 group-hover:scale-105 transition-transform duration-200">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="flex-1 hover:scale-105 transition-transform duration-200">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Popular Courses Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Most Popular Courses</h3>
            <p className="text-lg text-gray-600">
              Accelerate Your Career with Our Top Engineering Design Courses
            </p>
            <p className="text-base text-gray-500 mt-2">
              We offer comprehensive courses designed to help you become a skilled and industry-ready engineering professional:
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {popularCourses.map((course, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 h-full group hover:scale-105">
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-center mb-2">
                          <Badge className="bg-white/20 text-white border-white/30 animate-float">
                            {course.level}
                          </Badge>
                          <span className="text-white font-bold text-lg animate-fade-in">{course.price}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white">{course.title}</h4>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{course.description}</p>
                      <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                        <span>⏱️ {course.duration}</span>
                        <span>👥 {course.students} students</span>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:scale-105 transition-transform duration-200">
                          Enroll Now
                        </Button>
                        <Button variant="outline" className="flex-1 hover:scale-105 transition-transform duration-200">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Skills Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center animate-scale-in">
          <h3 className="text-2xl font-bold text-white mb-4">Master Industry-Standard Tools</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our comprehensive training programs cover all essential software and technologies used in modern mechanical engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-white border-white/30 hover:bg-white/10 px-4 py-2 text-sm hover:scale-110 transition-transform duration-200" style={{ animationDelay: `${index * 0.1}s` }}>
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3 hover:scale-105 transition-transform duration-200 animate-float"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
