import React from 'react';
import NPDServiceContent from './services/NPDServiceContent';
import PrototypingServiceContent from './services/PrototypingServiceContent';
import WebDevServiceContent from './services/WebDevServiceContent';
import TrainingServiceContent from './services/TrainingServiceContent';

interface ServicePopupContentProps {
  title: string;
  gradient: string;
}

const ServicePopupContent: React.FC<ServicePopupContentProps> = ({ title, gradient }) => {
  const getContent = () => {
    switch (title) {
      case "New Product Development (R&D)":
        return <NPDServiceContent gradient={gradient} />;
      case "Prototyping":
        return <PrototypingServiceContent gradient={gradient} />;
      case "Website Development Services":
        return <WebDevServiceContent gradient={gradient} />;
      case "Training Services":
        return <TrainingServiceContent gradient={gradient} />;
      default:
        return <div>Content not available</div>;
    }
  };

  return <div className="space-y-4">{getContent()}</div>;
};

export default ServicePopupContent;