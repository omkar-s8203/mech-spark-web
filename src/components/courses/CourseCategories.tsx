
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Settings, Star, CheckCircle } from 'lucide-react';
import { courseCategories } from './CourseData';

const CourseCategories = () => {
  return (
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
                  {/* <Button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                    Get Started
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Contact Us
                  </Button> */}

<a
  href="https://forms.office.com/pages/responsepage.aspx?id=cpI_UU89MUK70POr5eGJmUbbiGhA5edDmeo4pIAKe-pUQUgwTDQ0MExEOUpNOU5JWEU3UU5QTk5GSi4u&route=shorturl"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1"
>
  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
    Get Started
  </Button>
</a>


<a
  href="https://wa.me/919561103435?text=Hello%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20courses!"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1"
>
  <Button variant="outline" className="w-full">
    Contact Us
  </Button>
</a>



                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CourseCategories;
