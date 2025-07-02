import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, ArrowRight, Star, Target, Users2, Phone } from 'lucide-react';

interface ServicePopupContentProps {
  title: string;
  gradient: string;
}

const ServicePopupContent: React.FC<ServicePopupContentProps> = ({ title, gradient }) => {
  const renderNPDContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "2D to 3D CAD Conversion",
            items: ["Parametric part & assembly modeling", "Manufacturing-ready designs", "Compatible with SolidWorks, CATIA, and more"]
          },
          {
            title: "Conceptual Product Design", 
            items: ["Sketch-to-CAD development", "Aesthetic & ergonomic modeling", "Early-stage feasibility evaluation"]
          },
          {
            title: "Reverse Engineering Services",
            items: ["3D scanning & geometry recreation", "Functional replication & modification", "Benchmarking and design upgrades"]
          },
          {
            title: "CAE-Based Design Validation",
            items: ["Structural (FEA), thermal, and dynamic analysis", "Material stress, deformation studies", "Tools: SolidWorks Simulation, ANSYS, HyperWorks"]
          }
        ].map((service, index) => (
          <Card key={index} className="border border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-gray-900 flex items-center">
                <CheckCircle className={`h-4 w-4 mr-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-1">
                {service.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <ArrowRight className="h-3 w-3 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Star className="h-5 w-5 mr-2 text-orange-500" />
          Why Choose Decouvertes?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Expert team with multi-domain engineering experience",
            "Proven design-to-prototype workflows", 
            "Affordable pricing and fast turnaround",
            "In-house 3D printing and simulation capabilities"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`bg-gradient-to-r ${gradient} text-white rounded-lg p-6 text-center`}>
        <h3 className="text-lg font-semibold mb-2">Ready to build your product?</h3>
        <p className="text-sm opacity-90 mb-4">Let's collaborate from concept to creation.</p>
        <Badge variant="secondary" className="bg-white text-gray-900">
          <Phone className="h-3 w-3 mr-1" />
          Contact us for a free consultation!
        </Badge>
      </div>
    </div>
  );

  const renderPrototypingContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "Rapid Prototyping",
            items: ["Quick 3D printed models using FDM/FFF", "Same-day or next-day delivery", "Ideal for fit-checks & concept validation"]
          },
          {
            title: "Functional Prototyping",
            items: ["High-strength prototypes for testing", "Multi-material support (PLA, ABS, PETG, TPU)", "Assembly fit, motion, and usability testing"]
          },
          {
            title: "Engineering Prototypes", 
            items: ["Toleranced builds for precision fit", "Compatible with fasteners & inserts", "Material behavior simulation"]
          },
          {
            title: "Post-Processing & Finishing",
            items: ["Sanding, priming, and painting", "Assembly support and inspection", "Custom surface texturing"]
          }
        ].map((service, index) => (
          <Card key={index} className="border border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-gray-900 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-1">
                {service.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <ArrowRight className="h-3 w-3 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="h-5 w-5 mr-2 text-blue-500" />
          Our In-House Capabilities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "DFT350 and DFTD250 industrial-grade FDM 3D printers",
            "Build volumes up to 350mm x 350mm x 300mm",
            "Wide range of filaments: PLA, ABS, PETG, TPU, Wood-fill",
            "Dual-surface build plates: Plain PEI & Textured PEI"
          ].map((capability, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span className="text-sm text-gray-700">{capability}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWebDevContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "Custom Website Development",
            items: ["Responsive, mobile-first design", "Modern frameworks: React, Vue, Angular", "Progressive Web Apps (PWA) development"]
          },
          {
            title: "E-Commerce Solutions",
            items: ["Online store development", "Payment gateway integration", "Inventory management systems"]
          },
          {
            title: "Frontend Development",
            items: ["HTML5, CSS3, JavaScript (ES6+)", "React, Vue.js, Angular frameworks", "Interactive animations & micro-interactions"]
          },
          {
            title: "Performance Optimization",
            items: ["Page speed optimization", "Image compression & lazy loading", "CDN integration & caching strategies"]
          }
        ].map((service, index) => (
          <Card key={index} className="border border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-gray-900 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-purple-500" />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-1">
                {service.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <ArrowRight className="h-3 w-3 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Star className="h-5 w-5 mr-2 text-purple-500" />
          Why Choose Our Web Development Services?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Modern, scalable architecture",
            "Mobile-responsive design guaranteed",
            "SEO-friendly code structure",
            "Post-launch support and maintenance"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTrainingContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "CAD Training Programs",
            items: ["SolidWorks (Basic to Advanced)", "AutoCAD 2D & 3D Design", "CATIA V5/V6 Product Design"]
          },
          {
            title: "CAM (Computer-Aided Manufacturing)",
            items: ["CNC Programming & Machining", "Mastercam Training", "Tool path optimization"]
          },
          {
            title: "Certification Programs",
            items: ["Industry-recognized certifications", "Professional skill validation", "Portfolio development guidance"]
          },
          {
            title: "Corporate Training Solutions",
            items: ["On-site training at your facility", "Customized curriculum development", "Team-based project training"]
          }
        ].map((service, index) => (
          <Card key={index} className="border border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-gray-900 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-1">
                {service.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <ArrowRight className="h-3 w-3 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Users2 className="h-5 w-5 mr-2 text-green-500" />
          Why Choose Our Training Services?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "Industry experts with 10+ years experience",
            "Real-world project-based learning",
            "Small batch sizes for personalized attention",
            "Job placement assistance"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const getContent = () => {
    switch (title) {
      case "New Product Development (R&D)":
        return renderNPDContent();
      case "Prototyping":
        return renderPrototypingContent();
      case "Website Development Services":
        return renderWebDevContent();
      case "Training Services":
        return renderTrainingContent();
      default:
        return <div>Content not available</div>;
    }
  };

  return <div className="space-y-4">{getContent()}</div>;
};

export default ServicePopupContent;