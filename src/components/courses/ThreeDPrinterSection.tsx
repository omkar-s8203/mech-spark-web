
import React from 'react';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import DFT350Modal from '@/components/ui/DFT350Modal';
import PDFQuoteModal from '@/components/ui/PDFQuoteModal';

const printerProducts = [
  {
    id: 1,
    name: "BRS250 Professional 3D Printer",
    image: "/3dprinter.png",
    badge: "Professional Grade",
    category: "3D Printing Equipment",
    description: "High-precision 3D printer capable of producing complex prototypes and production parts with exceptional quality and reliability.",
    specs: {
      buildVolume: "250 x 250 x 250mm",
      layerResolution: "0.1 - 0.3mm",
      materials: "PLA, ABS, PETG",
      connectivity: "USB, SD Card"
    }
  },
  {
    id: 2,
    name: "DFT350 Industrial 3D Printer",
    image: "/3dprinter.png",
    badge: "Industrial Grade",
    category: "3D Printing Equipment",
    description: "Advanced industrial-grade 3D printer with larger build volume and enhanced precision for professional manufacturing applications.",
    specs: {
      buildVolume: "350 x 350 x 400mm",
      layerResolution: "0.05 - 0.25mm",
      materials: "PLA, ABS, PETG, TPU, PEEK",
      connectivity: "Wi-Fi, Ethernet, USB"
    }
  },
  {
    id: 3,
    name: "BRS180 Compact 3D Printer",
    image: "/3dprinter.png",
    badge: "Compact Design",
    category: "3D Printing Equipment",
    description: "Compact yet powerful 3D printer perfect for educational institutions and small-scale prototyping with user-friendly features.",
    specs: {
      buildVolume: "180 x 180 x 180mm",
      layerResolution: "0.1 - 0.4mm",
      materials: "PLA, ABS, Wood Fill",
      connectivity: "USB, SD Card, Mobile App"
    }
  }
];

const ThreeDPrinterSection = () => {
  const handleOrderNow = (printer: typeof printerProducts[0]) => {
    const message = `🎯 *NEW ORDER REQUEST* 🎯

📦 *Product:* ${printer.name}
🏷️ *Category:* ${printer.category}
⭐ *Grade:* ${printer.badge}

📋 *Product Details:*
${printer.description}

🔧 *Technical Specifications:*
• Build Volume: ${printer.specs.buildVolume}
• Layer Resolution: ${printer.specs.layerResolution}
• Compatible Materials: ${printer.specs.materials}
• Connectivity: ${printer.specs.connectivity}

✨ I'm interested in placing an order for this amazing 3D printer! Could you please provide more information about pricing, delivery, and availability?

Looking forward to your response! 🚀`;

    const phoneNumber = "+919876543210"; // Replace with actual WhatsApp business number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className="mb-20">
      <div className="text-center mb-12 animate-fade-in">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Professional 3D Printing Equipment</h3>
        <p className="text-lg text-gray-600">
          State-of-the-art 3D printing technology for precision prototyping and manufacturing
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {printerProducts.map((printer) => (
              <CarouselItem key={printer.id}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-scale-in">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-96 lg:h-auto overflow-hidden">
                      <img 
                        src={printer.image}
                        alt={printer.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className={`absolute top-4 left-4 ${
                        printer.badge === 'Professional Grade' ? 'bg-gradient-to-r from-orange-500 to-yellow-500' :
                        printer.badge === 'Industrial Grade' ? 'bg-gradient-to-r from-blue-600 to-purple-600' :
                        'bg-gradient-to-r from-green-500 to-teal-500'
                      }`}>
                        {printer.badge}
                      </Badge>
                    </div>

                    <CardContent className="p-8 flex flex-col justify-center">
                      <Badge variant="outline" className="w-fit mb-4">
                        {printer.category}
                      </Badge>

                      <CardTitle className="text-3xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                        {printer.name}
                      </CardTitle>

                      <CardDescription className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {printer.description}
                      </CardDescription>

                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-gray-900">Build Volume</div>
                          <div className="text-gray-600">{printer.specs.buildVolume}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-gray-900">Layer Resolution</div>
                          <div className="text-gray-600">{printer.specs.layerResolution}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-gray-900">Materials</div>
                          <div className="text-gray-600">{printer.specs.materials}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="font-semibold text-gray-900">Connectivity</div>
                          <div className="text-gray-600">{printer.specs.connectivity}</div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-1">
                          <Button 
                            onClick={() => handleOrderNow(printer)}
                            className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 group-hover:scale-105 transition-transform duration-200"
                          >
                            Order Now
                          </Button>
                        </div>
                        <div className="flex-1">
                          <DFT350Modal />
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default ThreeDPrinterSection;
