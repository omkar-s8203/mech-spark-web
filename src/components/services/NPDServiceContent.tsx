import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Star } from 'lucide-react';
import ServiceCard from './ServiceCard';
import WhyChooseSection from './WhyChooseSection';
import CallToActionSection from './CallToActionSection';

interface NPDServiceContentProps {
  gradient: string;
}

const NPDServiceContent: React.FC<NPDServiceContentProps> = ({ gradient }) => {
  const services = [
    {
      title: "1. 2D to 3D CAD Conversion",
      description: "Convert your 2D engineering drawings into precise 3D models.",
      items: ["Parametric part & assembly modeling", "Manufacturing-ready designs", "Compatible with SolidWorks, CATIA, and more"]
    },
    {
      title: "2. Conceptual Product Design",
      description: "Bring your product ideas to life with innovative and practical design solutions.",
      items: ["Sketch-to-CAD development", "Aesthetic & ergonomic modeling", "Early-stage feasibility evaluation", "Industrial design with manufacturability in mind"]
    },
    {
      title: "3. Reverse Engineering Services",
      description: "Reconstruct existing components into accurate 3D CAD models for redesign or improvement.",
      items: ["3D scanning & geometry recreation", "Functional replication & modification", "Benchmarking and design upgrades"]
    },
    {
      title: "4. CAE-Based Design Validation",
      description: "Validate product safety and performance using real-world simulation.",
      items: ["Structural (FEA), thermal, and dynamic analysis", "Material stress, deformation, and fatigue studies", "Lightweighting and durability optimization", "Tools used: SolidWorks Simulation, ANSYS, HyperWorks"]
    },
    {
      title: "5. Rapid Prototyping & 3D Printing",
      description: "Quickly visualize and test your designs through physical models.",
      items: ["FDM/FFF printing for plastic parts", "Functional and aesthetic prototypes", "In-house support with DFT350 & DFTD250 printers"]
    },
    {
      title: "6. Design for Manufacturing (DFM) & Assembly (DFA)",
      description: "Ensure that your product is cost-effective and easy to manufacture.",
      items: ["Material and process selection", "Part count reduction", "Tooling feasibility and manufacturability checks"]
    },
    {
      title: "7. Technical Documentation & Engineering Drawings",
      description: "Deliver complete production-ready documents for shop-floor or vendor use.",
      items: ["Detailed 2D drawings with GD&T", "Bill of Materials (BOM), exploded views, and assembly instructions", "Manufacturing process notes and QC guidelines"]
    },
    {
      title: "8. Product Cost Estimation & Vendor Support",
      description: "Evaluate and optimize the cost of production before you invest.",
      items: ["BOM-based cost estimation", "Vendor sourcing assistance", "Component selection for cost-efficiency"]
    },
    {
      title: "9. Compliance & Regulatory Assistance",
      description: "Design products aligned with global standards and safety norms.",
      items: ["CE, RoHS, ISO guidance", "IP rating and material compliance support", "Product testing plan recommendations"]
    },
    {
      title: "10. Packaging Design & Prototyping",
      description: "Protect and present your product with custom packaging solutions.",
      items: ["Structural and branding integration", "Cost-effective and eco-friendly designs", "Prototype packaging samples"]
    },
    {
      title: "11. Electromechanical Integration (Optional)",
      description: "Design integration for products involving electronics and mechanical systems.",
      items: ["PCB enclosure design", "Thermal management solutions", "Component clearance & wire routing"]
    }
  ];

  const benefits = [
    "Expert team with multi-domain engineering experience",
    "Proven design-to-prototype workflows", 
    "Affordable pricing and fast turnaround",
    "In-house 3D printing and simulation capabilities"
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            items={service.items}
            iconColor={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          />
        ))}
      </div>

      <Separator />

      <WhyChooseSection
        title="Why Choose Decouvertes?"
        icon={<Star />}
        benefits={benefits}
        bgColor="bg-gradient-to-r from-orange-50 to-yellow-50"
        iconColor="text-orange-500"
      />

      <CallToActionSection
        title="Ready to build your product?"
        description="Let's collaborate from concept to creation."
        gradient={gradient}
        contactText="Contact us for a free consultation!"
      />
    </div>
  );
};

export default NPDServiceContent;