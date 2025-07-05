import React from 'react';
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
          <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 text-sm">
          <section>
            <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, such as when you create an account, 
              register for our courses, or contact us for support. This may include your name, email 
              address, phone number, and payment information.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, send you technical notices and support messages, and communicate 
              with you about products, services, and promotional offers.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">3. Information Sharing</h3>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share information with 
              trusted partners who assist us in operating our website and conducting our business.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">5. Your Rights</h3>
            <p className="text-muted-foreground">
              You have the right to access, update, or delete your personal information. You may also 
              opt out of receiving promotional communications from us by following the instructions 
              in those communications.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">6. Contact Us</h3>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at 
              shivamsony@decouvertes.in or call +91 9561103435.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;