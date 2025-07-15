import React from 'react';
import { motion } from 'framer-motion';
import NPDServiceContent from './services/NPDServiceContent';
import PrototypingServiceContent from './services/PrototypingServiceContent';
import WebDevServiceContent from './services/WebDevServiceContent';
import TrainingServiceContent from './services/TrainingServiceContent';

/**
 * ServicePopupContent Component
 * 
 * Router component that renders the appropriate service content
 * based on the selected service title. Used in service popups/modals.
 * 
 * @param title - The service title to determine which content to render
 * @param gradient - CSS gradient string for styling consistency
 */

interface ServicePopupContentProps {
  title: string;
  gradient: string;
}

const ServicePopupContent: React.FC<ServicePopupContentProps> = ({ title, gradient }) => {
  // Route to appropriate service content component based on title
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

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {getContent()}
    </motion.div>
  );
};

export default ServicePopupContent;