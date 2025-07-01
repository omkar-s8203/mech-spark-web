import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Settings, Code, Image, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "New Product Development (R&D)",
      description: "Our services are designed to empower new developments and innovations, backed by our creative and technology-oriented team. From concept to reality, we specialize in providing comprehensive NPD and R&D services.",
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50",
      detailedContent: `
1. 2D to 3D CAD Conversion
- Parametric part & assembly modeling
- Manufacturing-ready designs
- Compatible with SolidWorks, CATIA, and more

2. Conceptual Product Design
- Sketch-to-CAD development
- Aesthetic & ergonomic modeling
- Early-stage feasibility evaluation
- Industrial design with manufacturability in mind

3. Reverse Engineering Services
- 3D scanning & geometry recreation
- Functional replication & modification
- Benchmarking and design upgrades

4. CAE-Based Design Validation
- Structural (FEA), thermal, and dynamic analysis
- Material stress, deformation, and fatigue studies
- Lightweighting and durability optimization
- Tools used: SolidWorks Simulation, ANSYS, HyperWorks

5. Rapid Prototyping & 3D Printing
- FDM/FFF printing for plastic parts
- Functional and aesthetic prototypes
- In-house support with DFT350 & DFTD250 printers

6. Design for Manufacturing (DFM) & Assembly (DFA)
- Material and process selection
- Part count reduction
- Tooling feasibility and manufacturability checks

7. Technical Documentation & Engineering Drawings
- Detailed 2D drawings with GD&T
- Bill of Materials (BOM), exploded views, and assembly instructions
- Manufacturing process notes and QC guidelines

8. Product Cost Estimation & Vendor Support
- BOM-based cost estimation
- Vendor sourcing assistance
- Component selection for cost-efficiency

9. Compliance & Regulatory Assistance
- CE, RoHS, ISO guidance
- IP rating and material compliance support
- Product testing plan recommendations

10. Packaging Design & Prototyping
- Structural and branding integration
- Cost-effective and eco-friendly designs
- Prototype packaging samples

11. Electromechanical Integration (Optional)
- PCB enclosure design
- Thermal management solutions
- Component clearance & wire routing

Why Choose Decouvertes?
- Expert team with multi-domain engineering experience
- Proven design-to-prototype workflows
- Affordable pricing and fast turnaround
- In-house 3D printing and simulation capabilities
- Custom solutions tailored for your product stage

Contact Us
Ready to build your product?
Let's collaborate from concept to creation.
Contact us today for a free consultation or demo!`
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Prototyping",
      description: "Prototyping plays a crucial role in the product development process, allowing for testing, validation, and refinement of designs before mass production. Our state-of-the-art prototyping capabilities bring your concepts to life.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      detailedContent: `
1. Rapid Prototyping
- Quick 3D printed models using FDM/FFF technology
- Same-day or next-day prototype delivery (based on complexity)
- Ideal for fit-checks, concept validation & design reviews

2. Functional Prototyping
- High-strength prototypes for mechanical testing
- Multi-material support (PLA, ABS, PETG, TPU, Nylon, etc.)
- Assembly fit, motion, and usability testing

3. Aesthetic/Presentation Prototypes
- High-resolution surface finishing
- Textured or smooth surface options
- Custom color, polish, and logo placement

4. Engineering Prototypes
- Toleranced builds for precision fit
- Compatibility with fasteners, inserts, and threads
- Material behavior simulation for injection-molding substitutes

5. Enclosure Prototyping
- PCB and battery fit testing
- Snap-fit or screw-fit closures
- Wire-routing and ventilation features integrated

6. Low-Volume Production (Bridge Prototyping)
- Great for pilot batches or investor demos
- Avoids high costs of mold/tool setup
- Consistent quality across small batches

7. Post-Processing & Finishing
- Sanding, priming, and painting
- Assembly support and inspection
- Custom surface texturing or logo engraving

Our In-House Capabilities
- DFT350 and DFTD250 industrial-grade FDM 3D printers
- Build volumes up to 350mm x 350mm x 300mm
- Wide range of filaments: PLA, ABS, PETG, TPU, Wood-fill, Carbon Fiber, etc.
- Dual-surface build plates: Plain PEI & Textured PEI
- Prototypes validated using CAE tools for real-world simulation

Get in Touch
From design to physical reality - we build what you imagine.
Talk to our team today for a free consultation or sample prototype demo.`
    },
    // Add other services here as needed
   
    {
  icon: <Code className="h-8 w-8" />,
  title: "Website Development Services",
  description: "We craft high-performance, responsive websites tailored to your business goals. From portfolio sites to enterprise-level platforms, our team delivers scalable, SEO-friendly web solutions with modern technologies and UI excellence.",
  gradient: "from-purple-500 to-pink-500",
  bgGradient: "from-purple-50 to-pink-50"
},

    {
      icon: <Users className="h-8 w-8" />,
      title: "Training Services",
      description: "We are expertise in corporate and industry specific CAD, CAM & CAE trainings. We provide personalized trainings to students and working professionals based on their industrial needs and future interest.",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solutions are assured for industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-semibold text-2xl">
              Best A Grade Commercial Services
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br ${service.bgGradient} hover:scale-105`}>
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white mb-4 w-fit`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}>
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-gray-900">
                        {service.title}
                      </DialogTitle>
                    </DialogHeader>
                    <pre className="whitespace-pre-wrap text-sm text-gray-700">
                      {service.detailedContent}
                    </pre>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Partner with us to turn your ideas into reality.
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
            Our comprehensive NPD and R&D services, combined with our dedication to creativity and technology, 
            will drive the success of your mechanical and automobile product designs.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-lg px-8 py-3"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
