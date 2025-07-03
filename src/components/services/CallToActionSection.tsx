import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Phone } from 'lucide-react';

interface CallToActionSectionProps {
  title: string;
  description: string;
  gradient: string;
  contactText: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title,
  description,
  gradient,
  contactText
}) => {
  return (
    <div className={`bg-gradient-to-r ${gradient} text-white rounded-lg p-6 text-center`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-90 mb-4">{description}</p>
      <Badge variant="secondary" className="bg-white text-gray-900">
        <Phone className="h-3 w-3 mr-1" />
        {contactText}
      </Badge>
    </div>
  );
};

export default CallToActionSection;