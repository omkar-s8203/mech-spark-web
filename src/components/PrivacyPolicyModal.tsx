import React from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        
        <motion.div 
          className="space-y-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            {
              title: "1. Information We Collect",
              content: "We collect information you provide directly to us, such as when you create an account, register for our courses, or contact us for support. This may include your name, email address, phone number, and payment information."
            },
            {
              title: "2. How We Use Your Information", 
              content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers."
            },
            {
              title: "3. Information Sharing",
              content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted partners who assist us in operating our website and conducting our business."
            },
            {
              title: "4. Data Security",
              content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
            },
            {
              title: "5. Your Rights",
              content: "You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us by following the instructions in those communications."
            },
            {
              title: "6. Contact Us",
              content: "If you have any questions about this Privacy Policy, please contact us at shivamsony@decouvertes.in or call +91 9561103435."
            }
          ].map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              className="group"
            >
              <motion.h3 
                className="text-lg font-semibold mb-2 text-foreground group-hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                {section.title}
              </motion.h3>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {section.content}
              </motion.p>
            </motion.section>
          ))}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;