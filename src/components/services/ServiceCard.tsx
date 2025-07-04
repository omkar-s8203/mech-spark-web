import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

/**
 * ServiceCard Component
 * 
 * Reusable card component for displaying service information.
 * Features optional description and bulleted item list.
 * 
 * @param title - Service/card title
 * @param description - Optional description text below title
 * @param items - Array of feature/benefit strings to display
 * @param iconColor - Tailwind color class for the title icon
 */

interface ServiceCardProps {
  title: string;
  description?: string;
  items: string[];
  iconColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  items, 
  iconColor = "text-blue-500" 
}) => {
  return (
    <Card className="border border-gray-200">
      <CardHeader className="pb-3">
        {/* Card Title with Icon */}
        <CardTitle className="text-base font-semibold text-gray-900 flex items-center">
          <CheckCircle className={`h-4 w-4 mr-2 ${iconColor}`} />
          {title}
        </CardTitle>
        
        {/* Optional Description */}
        {description && (
          <CardDescription className="text-sm text-gray-600 mt-1">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Feature/Benefit List */}
        <ul className="space-y-1">
          {items.map((item, i) => (
            <li key={i} className="text-sm text-gray-600 flex items-start">
              <ArrowRight className="h-3 w-3 mr-2 mt-1 text-gray-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;