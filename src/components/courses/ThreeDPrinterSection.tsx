
import React from 'react';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ThreeDPrinterSection = () => {
  return (
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
  );
};

export default ThreeDPrinterSection;
