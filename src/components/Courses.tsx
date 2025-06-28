
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Book, Users, Settings, Code } from 'lucide-react';

const Courses = () => {
  const courseCategories = [
    {
      icon: <Book className="h-12 w-12" />,
      title: "TRAINING",
      subtitle: "CAD, CAM, & CAE Software Training",
      description: "Hands-on training for tools like SolidWorks and CATIA. Programs for all expertise levels with real-world projects.",
      color: "bg-yellow-500",
      textColor: "text-yellow-600"
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "PRODUCT",
      subtitle: "Product Design and Development",
      description: "Support from concept to prototype with customized solutions. Guidance on materials and manufacturing processes.",
      color: "bg-gray-800",
      textColor: "text-gray-700"
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "3D PRINT",
      subtitle: "Rapid Prototyping Services",
      description: "3D printing services with high-quality output. Prototype testing and support for design optimization.",
      color: "bg-yellow-500",
      textColor: "text-yellow-600"
    }
  ];

  const popularCourses = [
    {
      title: "Automotive Design Foundation",
      description: "Master the fundamentals of automotive design with industry-standard tools and methodologies.",
      duration: "12 Weeks",
      level: "Beginner",
      students: "2,400+",
      image: "bg-gradient-to-br from-blue-600 to-purple-600",
      price: "$299"
    },
    {
      title: "Automotive Design Mastery",
      description: "Advanced automotive design techniques for professional-level projects and industry applications.",
      duration: "16 Weeks",
      level: "Advanced",
      students: "1,800+",
      image: "bg-gradient-to-br from-red-500 to-pink-600",
      price: "$499"
    },
    {
      title: "SolidWorks Professional",
      description: "Complete SolidWorks training from basics to advanced modeling, simulation, and design validation.",
      duration: "10 Weeks",
      level: "Intermediate",
      students: "3,200+",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      price: "$399"
    },
    {
      title: "CATIA V5/V6 Mastery",
      description: "Comprehensive CATIA training for aerospace and automotive industries with real-world projects.",
      duration: "14 Weeks",
      level: "Advanced",
      students: "1,500+",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      price: "$599"
    },
    {
      title: "3D Printing & Prototyping",
      description: "Learn rapid prototyping techniques, 3D modeling for printing, and advanced manufacturing methods.",
      duration: "8 Weeks",
      level: "Beginner",
      students: "2,100+",
      image: "bg-gradient-to-br from-purple-500 to-indigo-600",
      price: "$249"
    },
    {
      title: "CNC Programming Excellence",
      description: "Master CNC programming, toolpath optimization, and advanced machining techniques for precision manufacturing.",
      duration: "12 Weeks",
      level: "Intermediate",
      students: "1,900+",
      image: "bg-gradient-to-br from-yellow-500 to-orange-600",
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

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Engineering Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Decouvertes Future Tech Pvt Ltd, we provide services in product development, digital design, and 
            prototyping for students and professionals across industries.
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {courseCategories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="pb-4">
                <div className={`inline-flex p-4 rounded-full ${category.color} text-white mb-4 mx-auto`}>
                  {category.icon}
                </div>
                <div className={`inline-block px-4 py-2 ${category.color} text-white font-bold text-sm rounded-full mb-2`}>
                  {category.title}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  {category.subtitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                  {category.description}
                </CardDescription>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Courses Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
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
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 h-full">
                    <div className={`h-48 ${course.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between items-center mb-2">
                          <Badge className="bg-white/20 text-white border-white/30">
                            {course.level}
                          </Badge>
                          <span className="text-white font-bold text-lg">{course.price}</span>
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
                        <Button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                          Enroll Now
                        </Button>
                        <Button variant="outline" className="flex-1">
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
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Master Industry-Standard Tools</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our comprehensive training programs cover all essential software and technologies used in modern mechanical engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-white border-white/30 hover:bg-white/10 px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3"
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
