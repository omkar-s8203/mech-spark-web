import React from 'react';
import { Star } from 'lucide-react';
import ServiceCard from './ServiceCard';
import WhyChooseSection from './WhyChooseSection';
import CallToActionSection from './CallToActionSection';

interface WebDevServiceContentProps {
  gradient: string;
}

const WebDevServiceContent: React.FC<WebDevServiceContentProps> = ({ gradient }) => {
  const services = [
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
  ];

  const benefits = [
    "Modern, scalable architecture",
    "Mobile-responsive design guaranteed",
    "SEO-friendly code structure",
    "Post-launch support and maintenance"
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            items={service.items}
            iconColor="text-purple-500"
          />
        ))}
      </div>

      <WhyChooseSection
        title="Why Choose Our Web Development Services?"
        icon={<Star />}
        benefits={benefits}
        bgColor="bg-gradient-to-r from-purple-50 to-pink-50"
        iconColor="text-purple-500"
      />

      <CallToActionSection
        title="Ready to build your digital presence?"
        description="Let's create a website that drives results for your business."
        gradient={gradient}
        contactText="Contact us today for a free consultation and project quote!"
      />
    </div>
  );
};

export default WebDevServiceContent;