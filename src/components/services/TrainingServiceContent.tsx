import React from 'react';
import { Users2 } from 'lucide-react';
import ServiceCard from './ServiceCard';
import WhyChooseSection from './WhyChooseSection';
import CallToActionSection from './CallToActionSection';

/**
 * TrainingServiceContent Component
 * 
 * Renders content for training services popup including:
 * - CAD/CAM training programs
 * - Certification options
 * - Corporate training solutions
 * - Benefits and reasons to choose
 * - Call to action section
 */

interface TrainingServiceContentProps {
  gradient: string;
}

const TrainingServiceContent: React.FC<TrainingServiceContentProps> = ({ gradient }) => {
  // Training service offerings organized by category
  const services = [
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
  ];

  // Key benefits of choosing our training services
  const benefits = [
    "Industry experts with 10+ years experience",
    "Real-world project-based learning",
    "Small batch sizes for personalized attention",
    "Job placement assistance"
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            items={service.items}
            iconColor="text-green-500"
          />
        ))}
      </div>

      <WhyChooseSection
        title="Why Choose Our Training Services?"
        icon={<Users2 />}
        benefits={benefits}
        bgColor="bg-gradient-to-r from-green-50 to-teal-50"
        iconColor="text-green-500"
      />

      <CallToActionSection
        title="Ready to advance your technical skills?"
        description="Join our training programs and accelerate your career in engineering design."
        gradient={gradient}
        contactText="Contact us today for course details and enrollment!"
      />
    </div>
  );
};

export default TrainingServiceContent;