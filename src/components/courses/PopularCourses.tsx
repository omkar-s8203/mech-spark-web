import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Book, Users, Settings, CheckCircle, Star, Clock, Award } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  duration: string;
  level: string;
  price: number;
  is_popular: boolean;
}

const PopularCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('is_popular', true)
      .order('created_at', { ascending: false });
    
    if (!error && data) {
      setCourses(data);
    }
  };

  return (
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
          {courses.map((course, index) => (
            <CarouselItem
              key={course.id}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 h-full group hover:scale-105">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={course.image_url || '/placeholder.svg'} 
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
                        ${course.price}
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
                    <span>📚 {course.category}</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://decouvertes.trainercentralsite.in/#/signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:scale-105 transition-transform duration-200">
                        Enroll Now
                      </Button>
                    </a>
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
                            {course.description}
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
                            <Book className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                            <div className="font-semibold text-gray-900">Category</div>
                            <div className="text-gray-600 text-sm">{course.category}</div>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg text-center">
                            <Star className="h-6 w-6 text-green-500 mx-auto mb-2" />
                            <div className="font-semibold text-gray-900">Level</div>
                            <div className="text-gray-600 text-sm">{course.level}</div>
                          </div>
                        </div>

                        {/* Price and Action Buttons */}
                        <div className="flex items-center justify-between mt-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                          <div>
                            <div className="text-2xl font-bold text-gray-900">${course.price}</div>
                            <div className="text-sm text-gray-600">One-time payment</div>
                          </div>
                          <div className="flex gap-3">
                            <a
                              href="https://decouvertes.trainercentralsite.in/#/signup"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                                Enroll Now
                              </Button>
                            </a>
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
  );
};

export default PopularCourses;
