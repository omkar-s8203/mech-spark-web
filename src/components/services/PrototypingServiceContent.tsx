import React from 'react';
import { Target } from 'lucide-react';
import ServiceCard from './ServiceCard';
import WhyChooseSection from './WhyChooseSection';
import CallToActionSection from './CallToActionSection';

interface PrototypingServiceContentProps {
  gradient: string;
}

const PrototypingServiceContent: React.FC<PrototypingServiceContentProps> = ({ gradient }) => {
  const services = [
    {
      title: "1. Rapid Prototyping",
      description: "Accelerate your product development cycle with fast-turnaround prototypes.",
      items: ["Quick 3D printed models using FDM/FFF technology", "Same-day or next-day prototype delivery (based on complexity)", "Ideal for fit-checks, concept validation & design reviews"]
    },
    {
      title: "2. Functional Prototyping",
      description: "Test how your product works under real conditions.",
      items: ["High-strength prototypes for mechanical testing", "Multi-material support (PLA, ABS, PETG, TPU, Nylon, etc.)", "Assembly fit, motion, and usability testing"]
    },
    {
      title: "3. Aesthetic/Presentation Prototypes",
      description: "Build visually refined models for client presentations, exhibitions, or marketing.",
      items: ["High-resolution surface finishing", "Textured or smooth surface options", "Custom color, polish, and logo placement"]
    },
    {
      title: "4. Engineering Prototypes",
      description: "Designed for pre-production validation.",
      items: ["Toleranced builds for precision fit", "Compatibility with fasteners, inserts, and threads", "Material behavior simulation for injection-molding substitutes"]
    },
    {
      title: "5. Enclosure Prototyping",
      description: "Perfect for electronics and IoT projects.",
      items: ["PCB and battery fit testing", "Snap-fit or screw-fit closures", "Wire-routing and ventilation features integrated"]
    },
    {
      title: "6. Low-Volume Production (Bridge Prototyping)",
      description: "Need 5-50 parts before final tooling? We've got you covered.",
      items: ["Great for pilot batches or investor demos", "Avoids high costs of mold/tool setup", "Consistent quality across small batches"]
    },
    {
      title: "7. Post-Processing & Finishing",
      description: "Improve the look and functionality of your prototype.",
      items: ["Sanding, priming, and painting", "Assembly support and inspection", "Custom surface texturing or logo engraving"]
    }
  ];

  const capabilities = [
    "DFT350 and DFTD250 industrial-grade FDM 3D printers",
    "Build volumes up to 350mm x 350mm x 300mm",
    "Wide range of filaments: PLA, ABS, PETG, TPU, Wood-fill, Carbon Fiber, etc.",
    "Dual-surface build plates: Plain PEI & Textured PEI",
    "Prototypes validated using CAE tools for real-world simulation"
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
            iconColor="text-blue-500"
          />
        ))}
      </div>

      <WhyChooseSection
        title="Our In-House Capabilities"
        icon={<Target />}
        benefits={capabilities}
        bgColor="bg-gradient-to-r from-blue-50 to-cyan-50"
        iconColor="text-blue-500"
      />

      <CallToActionSection
        title="Get in Touch"
        description="From design to physical reality - we build what you imagine."
        gradient={gradient}
        contactText="Talk to our team today for a free consultation or sample prototype demo"
      />
    </div>
  );
};

export default PrototypingServiceContent;