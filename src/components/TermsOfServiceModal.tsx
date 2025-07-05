import React from 'react';
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
          <DialogTitle className="text-2xl font-bold">Terms of Service</DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 text-sm">
          <section>
            <h3 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground">
              By accessing and using Decouvertes services, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">2. Service Description</h3>
            <p className="text-muted-foreground">
              Decouvertes provides product development, prototyping, training services, and web 
              development solutions. We offer various courses and consulting services in design 
              engineering and technology.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">3. User Responsibilities</h3>
            <p className="text-muted-foreground">
              Users are responsible for maintaining the confidentiality of their account information 
              and for all activities that occur under their account. You agree to notify us immediately 
              of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">4. Payment Terms</h3>
            <p className="text-muted-foreground">
              Payment for services is due as specified in your service agreement. All fees are 
              non-refundable unless otherwise specified. We reserve the right to modify our pricing 
              with advance notice.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">5. Intellectual Property</h3>
            <p className="text-muted-foreground">
              All content, materials, and intellectual property provided through our services remain 
              the property of Decouvertes or our licensors. Users may not reproduce, distribute, or 
              create derivative works without express permission.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">6. Limitation of Liability</h3>
            <p className="text-muted-foreground">
              Decouvertes shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">7. Contact Information</h3>
            <p className="text-muted-foreground">
              For questions regarding these terms, please contact us at shivamsony@decouvertes.in 
              or call +91 9561103435.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceModal;