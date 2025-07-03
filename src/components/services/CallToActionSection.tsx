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
  const whatsappNumber = '919561103435'; // 🔁 Replace with your number (with country code, no + or spaces)
  const message = encodeURIComponent("Hi 👋 I'm interested in your services—especially in 🔧 Product Development, 🧪 Prototyping, 💻 Website Development, and 🎓 Training. Could you please share more details? I'd love to explore how we can collaborate 🤝.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className={`bg-gradient-to-r ${gradient} text-white rounded-lg p-6 text-center`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-90 mb-4">{description}</p>
      
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Badge variant="secondary" className="bg-white text-gray-900 cursor-pointer inline-flex items-center">
          <Phone className="h-3 w-3 mr-1" />
          {contactText}
        </Badge>
      </a>
    </div>
  );
};

export default CallToActionSection;
