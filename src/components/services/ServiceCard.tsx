import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

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
        <CardTitle className="text-base font-semibold text-gray-900 flex items-center">
          <CheckCircle className={`h-4 w-4 mr-2 ${iconColor}`} />
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-sm text-gray-600 mt-1">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pt-0">
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