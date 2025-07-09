import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    name: 'Priya Mehra',
    role: 'Product Manager',
    company: 'NextGen Solutions Pvt. Ltd.',
    content:
      'Decouvertes completely transformed our entire product development journey. With their deep expertise in 3D modeling, rapid prototyping, and practical design thinking, we were able to bring our ideas to life much faster than we had imagined. The team was responsive, skilled, and provided valuable insights at every stage. Their support made a big impact on our timelines and outcomes. Highly recommend Decouvertes for any design or prototyping needs!',
    rating: 5
  },
  {
    id: 2,
    name: 'Ravi Shankar',
    role: 'Engineering Director',
    company: 'Bharat Precision Tech',
    content:
      'The training programs at Decouvertes are truly exceptional. Our engineering team received in-depth, hands-on instruction in CAD design, mechanical principles, and practical industrial applications. The real-world approach they follow helped our staff quickly adapt the new skills into our ongoing projects. We’ve already seen measurable improvements in both quality and turnaround time. I highly recommend Decouvertes for companies looking to upskill their technical teams with modern and industry-relevant training.',
    rating: 5
  },
  {
    id: 3,
    name: 'Anjali Nair',
    role: 'Startup Founder',
    company: 'InnovateKaro',
    content:
      'From concept to prototype, Decouvertes guided us through every step with expertise and dedication. Their advanced R&D services, product design consultation, and high-quality 3D printing capabilities played a pivotal role in accelerating our product launch. The team was responsive, insightful, and committed to delivering precision at every stage. I genuinely recommend Decouvertes to any startup looking to turn an innovative idea into a market-ready product efficiently.',
    rating: 5
  },
  {
    id: 4,
    name: 'Amit Verma',
    role: 'Design Engineer',
    company: 'Shakti Manufacturing Co.',
    content:
      'The courses offered by Decouvertes are practical, detailed, and highly relevant to real-world industry applications. I gained hands-on experience with advanced CAD techniques, which I now apply daily in my professional role. The instructors are knowledgeable and focus on teaching design methods aligned with current manufacturing practices. I strongly recommend Decouvertes to anyone looking to improve their technical skill set in mechanical design and CAD systems.',
    rating: 5
  },
  {
    id: 5,
    name: 'Pratik Devkatte',
    role: 'Student',
    company: 'Bharati Vidyapeeth University College of Engineering Pune',
    content:
      'Glad that I have chosen Decouvertes for my CAD training. Sivam sir has taught us in detail and practical application-based situations which were very helpful in matching the industrial designs. Along with Solidworks and Catia he also taught us GD&T and provided extra knowledge and guidance. I highly recommend everyone to prefer Shivam Soni sir over big institutes for upskilling in design software.',
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
            Discover how Decouvertes has helped professionals and businesses
            achieve their goals through our innovative solutions and expert
            training.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  className="hover:shadow-xl transition-shadow duration-300 animate-slide-up-fade h-full hover:ring-2 hover:ring-orange-400 hover:scale-[1.02] transform transition-transform duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="h-6 w-6 text-orange-500 animate-quote-bounce" />
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current animate-star-pulse"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
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
                      <p className="text-gray-600 text-xs">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
