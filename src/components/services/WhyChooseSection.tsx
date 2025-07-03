import React from 'react';
import { CheckCircle } from 'lucide-react';

interface WhyChooseSectionProps {
  title: string;
  icon: React.ReactNode;
  benefits: string[];
  bgColor: string;
  iconColor: string;
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  title,
  icon,
  benefits,
  bgColor,
  iconColor
}) => {
  return (
    <div className={`${bgColor} rounded-lg p-6`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <div className={`h-5 w-5 mr-2 ${iconColor}`}>
          {icon}
        </div>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center">
            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
            <span className="text-sm text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSection;