import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Book, Users, Settings, Code, Youtube, Linkedin, MessageCircle, CheckCircle, Star, Clock, Award } from 'lucide-react';

const Courses = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const courseCategories = [
    {
      icon: <Book className="h-12 w-12" />,
      title: "TRAINING",
      subtitle: "CAD, CAM, & CAE Software Training",
      description: "Hands-on training for tools like SolidWorks and CATIA. Programs for all expertise levels with real-world projects.",
      color: "bg-yellow-500",
      textColor: "text-yellow-600",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailedInfo: {
        overview: "Our comprehensive CAD, CAM, & CAE software training programs are designed to equip students and professionals with industry-standard skills in mechanical design and engineering.",
        features: [
          "Hands-on training with SolidWorks, CATIA, AutoCAD, and Fusion 360",
          "Real-world project-based learning approach",
          "Industry-certified instructors with 10+ years experience",
          "Flexible scheduling with weekend and evening batches",
          "Job placement assistance and career guidance",
          "Access to latest software versions and tools"
        ],
        benefits: [
          "Industry-ready certification upon completion",
          "Portfolio development with actual projects",
          "Networking opportunities with industry professionals",
          "Continuous support even after course completion"
        ],
        duration: "3-6 months depending on specialization",
        investment: "Starting from ₹15,000 - ₹45,000"
      }
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "PRODUCT",
      subtitle: "Product Design and Development",
      description: "Support from concept to prototype with customized solutions. Guidance on materials and manufacturing processes.",
      color: "bg-gray-800",
      textColor: "text-gray-700",
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailedInfo: {
        overview: "Our Solutions are assured for industries - Best A Grade Commercial Services. We provide end-to-end product design and development services for businesses looking to bring innovative products to market.",
        features: [
          "Complete product lifecycle management from concept to market",
          "Advanced 3D modeling and simulation services",
          "Material selection and manufacturing process optimization",
          "Prototyping and testing validation",
          "Cost analysis and design for manufacturing (DFM)",
          "Quality assurance and compliance certification"
        ],
        benefits: [
          "Reduced time-to-market with efficient design processes",
          "Cost-effective solutions with optimized manufacturing",
          "Risk mitigation through thorough testing and validation",
          "Scalable designs for mass production"
        ],
        duration: "2-8 months based on project complexity",
        investment: "Custom pricing based on project scope and requirements"
      }
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "3D PRINT",
      subtitle: "Rapid Prototyping Services",
      description: "3D printing services with high-quality output. Prototype testing and support for design optimization.",
      color: "bg-yellow-500",
      textColor: "text-yellow-600",
      bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailedInfo: {
        overview: "State-of-the-art 3D printing and rapid prototyping services using professional-grade equipment to bring your designs to life with precision and quality.",
        features: [
          "High-precision 3D printing with multiple material options",
          "PLA, ABS, PETG, and specialty filament printing",
          "Layer resolution from 0.1mm to 0.3mm",
          "Large build volume up to 250x250x250mm",
          "Post-processing services including sanding and painting",
          "Design optimization for 3D printing"
        ],
        benefits: [
          "Fast turnaround time for prototypes",
          "Cost-effective solution for small batch production",
          "High-quality surface finish and dimensional accuracy",
          "Support for complex geometries and overhangs"
        ],
        duration: "1-5 days depending on complexity and quantity",
        investment: "Starting from ₹50 per hour of print time"
      }
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
      price: "$299",
      detailedInfo: {
        overview: "This comprehensive foundation course introduces you to the exciting world of automotive design. You'll learn the fundamental principles, tools, and methodologies used in modern automotive design processes.",
        features: [
          "Introduction to automotive design principles and history",
          "Basic 3D modeling techniques for automotive components",
          "Understanding of materials and manufacturing processes",
          "Hands-on projects with real vehicle design challenges",
          "Industry-standard software training (SolidWorks basics)",
          "Design sketching and visualization techniques"
        ],
        benefits: [
          "Strong foundation for advanced automotive design courses",
          "Portfolio development with beginner-friendly projects",
          "Understanding of automotive industry standards",
          "Certificate of completion from recognized institution"
        ],
        curriculum: [
          "Week 1-2: Automotive Design History and Principles",
          "Week 3-4: Introduction to CAD Software",
          "Week 5-6: Basic 3D Modeling Techniques",
          "Week 7-8: Materials and Manufacturing Basics",
          "Week 9-10: Design Project - Simple Component",
          "Week 11-12: Portfolio Development and Presentation"
        ]
      }
    },
    {
      title: "Automotive Design Mastery",
      description: "Advanced automotive design techniques for professional-level projects and industry applications.",
      duration: "16 Weeks",
      level: "Advanced",
      students: "1,800+",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$499",
      detailedInfo: {
        overview: "Take your automotive design skills to the professional level with advanced techniques, complex projects, and industry-relevant methodologies used by leading automotive companies worldwide.",
        features: [
          "Advanced surfacing and complex geometry modeling",
          "Aerodynamics and performance optimization techniques",
          "Advanced material selection and testing procedures",
          "Professional project management methodologies",
          "Industry collaboration and real-world project experience",
          "Advanced simulation and testing protocols"
        ],
        benefits: [
          "Professional-level portfolio with complex projects",
          "Industry networking opportunities",
          "Job placement assistance in automotive companies",
          "Advanced certification recognized by major OEMs"
        ],
        curriculum: [
          "Week 1-2: Advanced CAD Techniques and Surface Modeling",
          "Week 3-4: Aerodynamics and Performance Design",
          "Week 5-6: Advanced Materials and Testing",
          "Week 7-8: Vehicle Systems Integration",
          "Week 9-12: Major Design Project - Complete Vehicle Component",
          "Week 13-14: Professional Presentation and Documentation",
          "Week 15-16: Industry Collaboration Project"
        ]
      }
    },
    {
      title: "SolidWorks Professional",
      description: "Complete SolidWorks training from basics to advanced modeling, simulation, and design validation.",
      duration: "10 Weeks",
      level: "Intermediate",
      students: "3,200+",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$399",
      detailedInfo: {
        overview: "Master SolidWorks from fundamentals to advanced features. This comprehensive course covers all aspects of SolidWorks including part modeling, assembly design, drawing creation, and simulation.",
        features: [
          "Complete SolidWorks interface and workflow mastery",
          "Advanced part modeling and assembly techniques",
          "Technical drawing and documentation creation",
          "Simulation and analysis tools (FEA basics)",
          "Sheet metal and weldment design",
          "Surface modeling and advanced features"
        ],
        benefits: [
          "SolidWorks Professional Certification preparation",
          "Industry-ready skills for mechanical design roles",
          "Comprehensive project portfolio",
          "Access to SolidWorks community and resources"
        ],
        curriculum: [
          "Week 1: SolidWorks Basics and Interface",
          "Week 2: Part Modeling Fundamentals",
          "Week 3: Advanced Part Features",
          "Week 4: Assembly Design and Constraints",
          "Week 5: Technical Drawings and Documentation",
          "Week 6: Sheet Metal and Weldments",
          "Week 7: Surface Modeling",
          "Week 8: Simulation and Analysis Basics",
          "Week 9: Advanced Projects",
          "Week 10: Certification Preparation"
        ]
      }
    },
    {
      title: "CATIA V5/V6 Mastery",
      description: "Comprehensive CATIA training for aerospace and automotive industries with real-world projects.",
      duration: "14 Weeks",
      level: "Advanced",
      students: "1,500+",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$599",
      detailedInfo: {
        overview: "Master CATIA V5 and V6 for aerospace and automotive applications. This advanced course covers all major workbenches and prepares you for professional roles in leading aerospace and automotive companies.",
        features: [
          "Complete CATIA V5/V6 workbench mastery",
          "Advanced surface modeling and Class-A surfacing",
          "Complex assembly design and management",
          "Aerospace and automotive specific workflows",
          "Advanced simulation and analysis capabilities",
          "Integration with PLM systems and workflows"
        ],
        benefits: [
          "CATIA certification from Dassault Systèmes",
          "Aerospace and automotive industry readiness",
          "Professional project portfolio with complex designs",
          "Direct placement opportunities with industry partners"
        ],
        curriculum: [
          "Week 1-2: CATIA Fundamentals and Part Design",
          "Week 3-4: Advanced Part Features and Parametric Design",
          "Week 5-6: Assembly Design and Large Assembly Management",
          "Week 7-8: Generative Surface Design",
          "Week 9-10: Class-A Surfacing for Automotive",
          "Week 11-12: Advanced Simulation and Analysis",
          "Week 13: Industry-Specific Projects",
          "Week 14: Certification Preparation and Portfolio Review"
        ]
      }
    },
    {
      title: "3D Printing & Prototyping",
      description: "Learn rapid prototyping techniques, 3D modeling for printing, and advanced manufacturing methods.",
      duration: "8 Weeks",
      level: "Beginner",
      students: "2,100+",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$249",
      detailedInfo: {
        overview: "Dive into the world of 3D printing and rapid prototyping. Learn to design for additive manufacturing, understand different 3D printing technologies, and master the complete prototyping workflow.",
        features: [
          "Complete 3D printing technology overview",
          "Design for additive manufacturing (DfAM) principles",
          "Hands-on experience with multiple 3D printers",
          "Post-processing and finishing techniques",
          "Material selection and optimization",
          "Rapid prototyping workflow and best practices"
        ],
        benefits: [
          "Practical experience with professional 3D printers",
          "Understanding of rapid prototyping for product development",
          "Portfolio of 3D printed prototypes",
          "Knowledge of emerging additive manufacturing technologies"
        ],
        curriculum: [
          "Week 1: 3D Printing Technologies and Applications",
          "Week 2: Design for Additive Manufacturing",
          "Week 3: 3D Modeling for Printing",
          "Week 4: Printer Operation and Maintenance",
          "Week 5: Materials and Print Settings Optimization",
          "Week 6: Post-Processing and Finishing",
          "Week 7: Advanced Techniques and Multi-Material Printing",
          "Week 8: Final Project and Portfolio Development"
        ]
      }
    },
    {
      title: "CNC Programming Excellence",
      description: "Master CNC programming, toolpath optimization, and advanced machining techniques for precision manufacturing.",
      duration: "12 Weeks",
      level: "Intermediate",
      students: "1,900+",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$449",
      detailedInfo: {
        overview: "Master CNC programming from fundamentals to advanced techniques. Learn G-code programming, CAM software operation, and precision machining strategies used in modern manufacturing.",
        features: [
          "Complete G-code programming mastery",
          "Advanced CAM software training (Mastercam/Fusion 360)",
          "Toolpath optimization and machining strategies",
          "CNC machine setup and operation",
          "Quality control and precision measurement",
          "Advanced machining techniques and troubleshooting"
        ],
        benefits: [
          "Industry-recognized CNC programming certification",
          "Hands-on experience with professional CNC machines",
          "Job placement assistance in manufacturing companies",
          "Understanding of modern manufacturing processes"
        ],
        curriculum: [
          "Week 1-2: CNC Fundamentals and G-code Basics",
          "Week 3-4: CAM Software Operation and Setup",
          "Week 5-6: Milling Operations and Toolpath Strategies",
          "Week 7-8: Turning Operations and Lathe Programming",
          "Week 9-10: Advanced Machining and Multi-Axis Programming",
          "Week 11: Quality Control and Precision Measurement",
          "Week 12: Final Project and Industry Certification"
        ]
      }
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
      href: "https://www.youtube.com/@The_Art_of_India",
      bgColor: "bg-red-600 hover:bg-red-700"
    },
      {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/decouvertes-future-tech/", // replace with real link
    bgColor: "bg-blue-600 hover:bg-blue-700"
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: "WhatsApp",
    href: "https://wa.me/919561103435", // use your number
    bgColor: "bg-green-600 hover:bg-green-700"
  }

  ];

  return (
    <section id="courses" className="py-20 bg-white relative">
      

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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:scale-105 transition-transform duration-200">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        {category.icon}
                        {category.subtitle}
                      </DialogTitle>
                      <DialogDescription className="text-lg text-gray-600 mt-2">
                        {category.detailedInfo.overview}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {/* Features Section */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Settings className="h-5 w-5" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {category.detailedInfo.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits Section */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Star className="h-5 w-5" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {category.detailedInfo.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid md:grid-cols-2 gap-6 mt-6 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Duration</h5>
                        <p className="text-gray-600 text-sm">{category.detailedInfo.duration}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Investment</h5>
                        <p className="text-gray-600 text-sm">{category.detailedInfo.investment}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <Button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                        Get Started
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Contact Us
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
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
                  // src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  src="/3dprinter.png"
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
                
                {/* <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 group-hover:scale-105 transition-transform duration-200">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="flex-1 hover:scale-105 transition-transform duration-200">
                    Learn More
                  </Button>
                </div> */}

                <div className="flex gap-3">
  {/* Get Quote Button */}
  <a 
    href="/brs250_get_quote.pdf" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex-1"
  >
    <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 group-hover:scale-105 transition-transform duration-200">
      Get Quote
    </Button>
  </a>

  {/* Learn More Button */}
  <a 
    href="/brs250_learn_more.pdf" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex-1"
  >
    <Button variant="outline" className="w-full hover:scale-105 transition-transform duration-200">
      Learn More
    </Button>
  </a>
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
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
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
                          <span className="text-white font-bold text-lg animate-fade-in">
                            {course.price}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white">{course.title}</h4>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                        {course.description}
                      </p>
                      <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                        <span>⏱️ {course.duration}</span>
                        <span>👥 {course.students} students</span>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:scale-105 transition-transform duration-200">
                          Enroll Now
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="flex-1 hover:scale-105 transition-transform duration-200">
                              Learn More
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                <Award className="h-8 w-8 text-orange-500" />
                                {course.title}
                              </DialogTitle>
                              <DialogDescription className="text-lg text-gray-600 mt-2">
                                {course.detailedInfo.overview}
                              </DialogDescription>
                            </DialogHeader>
                            
                            {/* Course Info Cards */}
                            <div className="grid grid-cols-3 gap-4 mt-6">
                              <div className="bg-orange-50 p-4 rounded-lg text-center">
                                <Clock className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                                <div className="font-semibold text-gray-900">Duration</div>
                                <div className="text-gray-600 text-sm">{course.duration}</div>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-lg text-center">
                                <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                                <div className="font-semibold text-gray-900">Students</div>
                                <div className="text-gray-600 text-sm">{course.students}</div>
                              </div>
                              <div className="bg-green-50 p-4 rounded-lg text-center">
                                <Star className="h-6 w-6 text-green-500 mx-auto mb-2" />
                                <div className="font-semibold text-gray-900">Level</div>
                                <div className="text-gray-600 text-sm">{course.level}</div>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                              {/* Features Section */}
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Settings className="h-5 w-5" />
                                  Course Features
                                </h4>
                                <ul className="space-y-2">
                                  {course.detailedInfo.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                      <span className="text-sm">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Benefits Section */}
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Star className="h-5 w-5" />
                                  Benefits
                                </h4>
                                <ul className="space-y-2">
                                  {course.detailedInfo.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                                      <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                                      <span className="text-sm">{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Curriculum Section */}
                            <div className="mt-6">
                              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <Book className="h-5 w-5" />
                                Course Curriculum
                              </h4>
                              <div className="bg-gray-50 rounded-lg p-4">
                                <ul className="space-y-2">
                                  {course.detailedInfo.curriculum.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs flex items-center justify-center font-semibold mt-0.5 flex-shrink-0">
                                        {idx + 1}
                                      </div>
                                      <span className="text-sm">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Price and Action Buttons */}
                            <div className="flex items-center justify-between mt-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                              <div>
                                <div className="text-2xl font-bold text-gray-900">{course.price}</div>
                                <div className="text-sm text-gray-600">One-time payment</div>
                              </div>
                              <div className="flex gap-3">
                                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                                  Enroll Now
                                </Button>
                                <Button variant="outline">
                                  Contact Us
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Hide navigation on small screens */}
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
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

      {/* Social Media Buttons at Bottom */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://www.youtube.com/@The_Art_of_India" className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300" title="YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 9.75l5.25 3-5.25 3v-6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/decouvertes-future-tech/" className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.058-1.864-3.058-1.864 0-2.15 1.454-2.15 2.957v5.705h-3v-10h2.884v1.367h.041c.402-.762 1.384-1.565 2.85-1.565 3.048 0 3.609 2.008 3.609 4.621v5.577z"/>
          </svg>
        </a>
        <a href="https://wa.me/919561103435" className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300" title="WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M20.52 3.48A11.9 11.9 0 0012.07 0C5.41 0 .02 5.39.02 12.05c0 2.12.55 4.17 1.6 5.99L0 24l6.13-1.6c1.72 1 3.67 1.54 5.72 1.54h.01c6.66 0 12.05-5.39 12.05-12.05a11.96 11.96 0 00-3.39-8.46zm-8.46 18.52c-1.73 0-3.42-.47-4.9-1.35l-.35-.21-3.64.95.97-3.54-.23-.36a9.53 9.53 0 01-1.48-5.15c0-5.28 4.3-9.58 9.58-9.58a9.5 9.5 0 019.58 9.58c0 5.28-4.3 9.58-9.58 9.58zm5.18-7.31c-.28-.14-1.66-.82-1.91-.91-.26-.1-.45-.14-.63.14-.19.28-.73.91-.9 1.1-.17.19-.34.21-.62.07-.28-.14-1.19-.44-2.26-1.4-.83-.74-1.39-1.64-1.55-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.47-.48-.63-.49h-.54c-.17 0-.45.07-.68.34s-.89.86-.89 2.09.91 2.43 1.04 2.6c.14.17 1.78 2.72 4.3 3.82.6.26 1.06.42 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.66-.68 1.9-1.34.24-.66.24-1.23.17-1.34-.07-.11-.26-.17-.54-.3z"/>
          </svg>
        </a>
      </div>

    </section>
  );
};

export default Courses;
