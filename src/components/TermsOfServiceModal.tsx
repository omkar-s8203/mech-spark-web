import React from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
            Terms of Service
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
              title: "1. Acceptance of Terms",
              content: "By accessing and using Decouvertes services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
            },
            {
              title: "2. Service Description",
              content: "Decouvertes provides product development, prototyping, training services, and web development solutions. We offer various courses and consulting services in design engineering and technology."
            },
            {
              title: "3. User Responsibilities",
              content: "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to notify us immediately of any unauthorized use of your account."
            },
            {
              title: "4. Payment Terms",
              content: "Payment for services is due as specified in your service agreement. All fees are non-refundable unless otherwise specified. We reserve the right to modify our pricing with advance notice."
            },
            {
              title: "5. Intellectual Property",
              content: "All content, materials, and intellectual property provided through our services remain the property of Decouvertes or our licensors. Users may not reproduce, distribute, or create derivative works without express permission."
            },
            {
              title: "6. Limitation of Liability",
              content: "Decouvertes shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
            },
            {
              title: "7. Contact Information",
              content: "For questions regarding these terms, please contact us at shivamsony@decouvertes.in or call +91 9561103435."
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
                className="text-lg font-semibold mb-2 text-foreground group-hover:text-purple-600 transition-colors duration-300"
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

export default TermsOfServiceModal;