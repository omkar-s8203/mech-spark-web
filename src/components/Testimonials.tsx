
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Product Manager",
//     company: "Tech Innovations Ltd",
//     content: "Decouvertes transformed our product development process. Their expertise in 3D modeling and prototyping helped us bring our vision to life faster than expected.",
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face"
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Engineering Director",
//     company: "Manufacturing Solutions Inc",
//     content: "The training programs at Decouvertes are exceptional. Our team gained valuable skills in CAD design and mechanical engineering that directly improved our project outcomes.",
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&crop=face"
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     role: "Startup Founder",
//     company: "InnovateTech",
//     content: "From concept to prototype, Decouvertes guided us through every step. Their R&D services and 3D printing capabilities were crucial for our product launch.",
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face"
//   },
//   {
//     id: 4,
//     name: "David Kumar",
//     role: "Design Engineer",
//     company: "Precision Industries",
//     content: "The courses offered by Decouvertes are practical and industry-relevant. I learned advanced CAD techniques that I use daily in my professional work.",
//     rating: 5,
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=150&fit=crop&crop=face"
//   }
// ];


const testimonials = [
  {
    id: 1,
    name: "Priya Mehra",
    role: "Product Manager",
    company: "NextGen Solutions Pvt. Ltd.",
    content: "Decouvertes transformed our product development process. Their expertise in 3D modeling and prototyping helped us bring our vision to life faster than expected.",
    rating: 5
  },
  {
    id: 2,
    name: "Ravi Shankar",
    role: "Engineering Director",
    company: "Bharat Precision Tech",
    content: "The training programs at Decouvertes are exceptional. Our team gained valuable skills in CAD design and mechanical engineering that directly improved our project outcomes.",
    rating: 5
  },
  {
    id: 3,
    name: "Anjali Nair",
    role: "Startup Founder",
    company: "InnovateKaro",
    content: "From concept to prototype, Decouvertes guided us through every step. Their R&D services and 3D printing capabilities were crucial for our product launch.",
    rating: 5
  },
  {
    id: 4,
    name: "Amit Verma",
    role: "Design Engineer",
    company: "Shakti Manufacturing Co.",
    content: "The courses offered by Decouvertes are practical and industry-relevant. I learned advanced CAD techniques that I use daily in my professional work.",
    rating: 5
  },
  {
    id: 5,
    name: "Pratik Devkatte",
    role: "Student",
    company: "Bharati Vidyapeeth University College of Engineering Pune",
    content: "Glad that i have chosen decouvertes for my CAD training. Sivam sir has taught us in detail and practical application based situations which were very helpful in matching the industrial designs. Along with Solidworks and Catia he also taught us GD&T and provided with some extra knowledge and guidance. I highly recommend everyone shivam soni sir over other big institutes or classes for their upskilling in design softwares.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Decouvertes has helped professionals and businesses achieve their goals through our innovative solutions and expert training.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="h-6 w-6 text-orange-500" />
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 mb-6 text-sm leading-relaxed flex-grow">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="mt-auto">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Call to Action */}
        
      </div>
    </section>
  );
};

export default Testimonials;
